---
title: Database - Technical Documentation - OJS|OMP|OPS
---

# Database

A Database Access Object (`DAO`) is responsible for executing database queries to read and write information from the database.

> PKP applications support MySQL and PostgreSQL. 
> 
> {:.notice}

## DAOs

Each `DAO` is paired with an [Entity](./architecture-entities) and converts data between the entity's [`DataObject` class](architecture-entities#dataobject-class) and tables in the database.

The `DAORegistry` contains an instance of every `DAO` in the application.

```php
$authorDao = DAORegistry::getDAO('AuthorDAO');
```

When a DAO has a different name in OJS and OMP, you can retrieve it through the `Application`.

```php
// Get a `JournalDAO` or `PressDAO`
$contextDao = Application::get()->getContextDAO();

// Get a `ArticleGalleyDAO` or `PublicationFormatDAO`
$representationDao = Application::get()->getRepresentationDAO();

// Get a `SectionDAO` or `SeriesDAO`
$sectionDao = Application::get()->getSectionDAO();
```

## Get Records

Use the `retrieve()` method to get something from the database.

```php
$reviewRoundDao = DAORegistry::getDAO('ReviewRoundDAO');
$result = $reviewRoundDao->retrieve(
  'SELECT * FROM review_rounds WHERE review_round_id = ?',
  [$reviewRoundId]
);
if ($result->RecordCount()) {
  $tableRow = $result->GetRowAssoc(false);
}
```

`DAO`s have a `_fromRow()` method to convert a returned row into the `DataObject` class.

```php
$reviewRoundDao = DAORegistry::getDAO('ReviewRoundDAO');
$result = $reviewRoundDao->retrieve(
  'SELECT * FROM review_rounds WHERE review_round_id = ?',
  [$reviewRoundId]
);
if ($result->RecordCount()) {
  $reviewRound = $reviewRoundDao->_fromRow($result->GetRowAssoc(false));
}
```

Most `DAO`s have a helper method to get a `DataObject` by ID.

```php
$reviewRound = DAORegistry::getDAO('ReviewRoundDAO')->getById($reviewRoundId);
```

Use the `retrieveRange()` method to get a set of rows from the database.

```php
$reviewRoundDao = DAORegistry::getDAO('ReviewRoundDAO');
$result = $reviewRoundDao->retrieveRange(
  'SELECT * FROM queries',
  [],
  new DBRange($count, $pageNumber)
);
$resultFactory = new DAOResultFactory($result, $reviewRoundDao, '_fromRow');
```

Iterate over a `DAOResultFactory` to access each result in the set.

```php
while ($reviewRound = $resultFactory->next()) {
  echo 'Review Round: ' . $reviewRound->getData('round');
}
```

Or convert the `DAOResultFactory` to an array of objects.

```php
$reviewRounds = $resultFactory->toArray();
```

For complex queries, use the [QueryBuilder](#querybuilder).

## Insert and Update Records

Use the `update()` method to insert or update records.

```php
// Close all queries for a particular submission
$queryDao = DAORegistry::getDAO('QueryDAO');
$queryDao->update(
  'UPDATE queries
    SET closed = 1
    WHERE assoc_type = ?
      AND assoc_id = ?',
  [
    ASSOC_TYPE_SUBMISSION,
    $submissionId,
  ]
);
```

Most `DAO`s include helper methods to insert, update, or delete records when passed a `DataObject`.

```php
$reviewRoundDao->insertObject($reviewRound);
$reviewRoundDao->updateObject($reviewRound);
$reviewRoundDao->deleteObject($reviewRound);
```

You can also delete records by an object's ID.

```php
$reviewRoundDao->deleteById((int) $reviewRoundId);
```

## QueryBuilder

A query builder should be used to construct complex queries. Query builders extend [Laravel's query builder](https://laravel.com/docs/5.5/queries) and provide an expressive API for fetching records of an [Entity](./architecture-entities).

For example, the `SubmissionQueryBuilder` can be used to retrieve submissions based on several filter parameters.

```php
$qb = new \APP\Services\QueryBuilders\SubmissionQueryBuilder;
$qb->filterByContext($contextId)
  ->assignedTo($userId)
  ->orderBy('title');
```

Once configured, use the query builder to generate the query string and parameter bindings to be passed to a `DAO`.

```php
$qo = $qb->getQuery();
$submissionDao = DAORegistry::getDAO('SubmissionDAO');
$result = $submissionDao->retrieve($qo->toSql(), $qo->getBindings());
```

Use the `getCount()` method to get a count of matching rows.

```php
$count = $qb->assignedTo($userId)->getCount();
```

Use the `getIds()` method to get an array of object ids.

```php
$assignedIds = $qb->assignedTo($userId)->getIds();
```

In most cases, a `QueryBuilder` will help fulfil the matching `EntityReadInterface` [methods](architecture-services#entityreadinterface) of a Service class.

A `QueryBuilder` can also be used with Laravel's [query methods](https://laravel.com/docs/5.5/queries).

```php
$qb = new \APP\Services\QueryBuilders\UserQueryBuilder();
$qb->filterByContext($contextId);

// Get all matching emails
$emails = $qb->getQuery()->pluck('u.email');

// Get the first matching result
$user = $qb->getQuery()->first();

// Get the last registered user
$user = $qb->getQuery()->max('u.date_registered');
```

## SchemaDAOs

If an entity is defined using a [schema](./architecture-entities#schemas), its `DAO` should extend the `SchemaDAO` class. The `SchemaDAO` implements the `insertObject()`, `updateObject()`, `deleteObject()`, and `_fromRow()` methods based on the schema.

## Usage Guidance

A `DAO` may implement additional methods to perform bulk updates or otherwise minimize intensive SQL queries. For example, the following will remove all DOIs from all issues.

```php
DAORegistry::getDAO('IssueDAO')->deleteAllPubIds($contextId, 'doi');
```

A `DAO` method like this should be wrapped by a [Service](./architecture-services) method that performs the action so that notifications can be sent, hooks can be called, and related tasks can be executed.

When deciding whether or not to write such a method, consider the performance benefits of your custom `DAO` method against the following downsides:

- It will not fire the hooks that are typically fired when an entity is read, added, or updated. Plugin developers are left "out of the loop."
- It will have to be maintained independently. The more common read, write, and delete database methods will probably be tested more regularly.
- It will have to be manually synced with changes to the entity schema files.

## Table Structure

Most [entities](./architecture-entities) in the application are represented in the database by two tables. For example, the `journals` table contains a row for each journal.

```
mysql> describe journals;
+----------------+-------------+------+-----+---------+----------------+
| Field          | Type        | Null | Key | Default | Extra          |
+----------------+-------------+------+-----+---------+----------------+
| journal_id     | bigint(20)  | NO   | PRI | NULL    | auto_increment |
| path           | varchar(32) | NO   | UNI | NULL    |                |
| seq            | double      | NO   |     | 0       |                |
| primary_locale | varchar(14) | NO   |     | NULL    |                |
| enabled        | tinyint(4)  | NO   |     | 1       |                |
+----------------+-------------+------+-----+---------+----------------+

```

All additional data, including multilingual data, is stored in the `journal_settings` table.

```
mysql> describe journal_settings;
+---------------+--------------+------+-----+---------+-------+
| Field         | Type         | Null | Key | Default | Extra |
+---------------+--------------+------+-----+---------+-------+
| journal_id    | bigint(20)   | NO   | PRI | NULL    |       |
| locale        | varchar(14)  | NO   | PRI |         |       |
| setting_name  | varchar(255) | NO   | PRI | NULL    |       |
| setting_value | text         | YES  |     | NULL    |       |
+---------------+--------------+------+-----+---------+-------+
```

For example, a journal's name that appears in English and French Canadian is stored in two rows in the `journal_settings` table.

```
mysql> select * from journal_settings where setting_name="name";
+------------+--------+--------------+--------------------------------------+
| journal_id | locale | setting_name | setting_value                        |
+------------+--------+--------------+--------------------------------------+
|          1 | en_US  | name         | Journal of Public Knowledge          |
|          1 | fr_CA  | name         | Journal de la connaissance du public |
+------------+--------+--------------+--------------------------------------+
```

Properties in an entity's [schema](./architecture-entities#schemas) that are an array or object are serialized when they are stored in the settings table.

```
mysql> select * from journal_settings where setting_name="supportedLocales";
+------------+--------+------------------+------------------------+
| journal_id | locale | setting_name     | setting_value          |
+------------+--------+------------------+------------------------+
|          1 |        | supportedLocales | a:1:{i:1;s:5:"en_US";} |
+------------+--------+------------------+------------------------+
```

Serialized data can not be efficiently searched, so it should never include data that you want to query against.

---

Learn more about the [plugin system](./architecture-plugins).

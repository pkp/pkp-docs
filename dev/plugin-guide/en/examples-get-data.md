---
title: Example - Get Data - Plugin Guide for OJS, OMP and OPS
description: Example code showing how to get some data in a plugin for OJS, OMP and OPS.
book: dev-plugin-guide
version: 3.5
---

# Get Data

Your plugin may need to get data from the application, such as submissions, issues, authors, users and files. Use the [Repo facade](/dev/documentation/en/architecture-repositories) to retrieve information.

```php
use APP\core\Application;
use APP\facades\Repo;

$currentUser = Application::get()->getUser();
$context = Application::get()->getContext();

$submissions = Repo::submission()
    ->getCollector()
    ->filterByContexts([$context->getId()])
    ->assignedTo([$currentUser->getId()])
    ->limit(20)
    ->getMany();
```

The `Collector`s are a wrapper around Laravel [QueryBuilder](https://laravel.com/docs/9.x/queries). Plugins can access the underlying `QueryBuilder` to run custom database queries. The example uses the submission collector to build a query of all published submissions in a context, then adds conditions to restrict results to those that have an author with the provided email address.

```php
use APP\author\DAO as AuthorDAO;
use APP\core\Application;
use APP\facades\Repo;
use APP\submission\Submission;

$context = Application::get()->getContext();
$authorDao = app(AuthorDAO::class);

$queryBuilder = Repo::submission()
    ->getCollecter()
    ->filterByContexts([$context->getId()])
    ->filterByStatus([Submission::STATUS_PUBLISHED])
    ->getQueryBuilder();

$submissions = $queryBuilder
    ->leftJoin($authorDao->table . ' as a', 'po.publication_id', '=', 'a.email')
    ->where('a.email', 'example@author.com')
    ->get()
    ->map(
        function($row, $i) {
            return Repo::submission()->dao->fromRow($row);
        }
    );
```

If a `Repository` does not exist for the data you want, you may need to use a [DAO](/dev/documentation/en/architecture-daos).

```php
$reviewAssignmentDao = DAORegistry::getDAO('ReviewAssignmentDAO');
$reviewAssignments = $reviewAssignmentDao->getByReviewRoundId($reviewRoundId);
```

Learn more about [Repositories](/dev/documentation/en/architecture-repositories), [Entities](/dev/documentation/en/architecture-entities) and [DAOs](/dev/documentation/en/architecture-daos) in our [developer documentation](/dev/documentation/en).

---

View more [examples](./examples).

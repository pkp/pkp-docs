---
book: dev-documentation
version: 3.5
title: Data Access Objects (DAOs) - Technical Documentation - OJS|OMP|OPS
---

# Data Access Objects (DAOs)

Each entity has a `DAO` that converts between the entity's `DataObject` class and the data store where records are kept. The data store is usually the [database](./architecture-database), but some DAOs may interact with file storage, text files, or other data stores.

A DAO should only read and write its objects to the data store. A DAO should not log events, send emails, or coordinate other activities when interacting with the data store. A DAO should only interact with the tables necessary to read and write objects for its entity. Use a [Repository](./architecture-repositories) to perform other actions.

Each entity `DAO` extends `EntityDAO` and sets the properties which define the entity's schema and table structure.

```php
namespace PKP\publication;

use PKP\core\EntityDAO;
use PKP\services\PKPSchemaService;

class DAO extends EntityDAO
{
    public $schema = PKPSchemaService::SCHEMA_PUBLICATION;
    public $table = 'publications';
    public $settingsTable = 'publication_settings';
    public $primaryKeyColumn = 'publication_id';
    public $primaryKeyColumns = [
        'id' => 'publication_id',
        'datePublished' => 'date_published',
        ...
    ];
}
```

The `EntityDAO` provides helper methods to read/write objects based on the [schema](./architecture-entities#schema).

```php
namespace PKP\publication;

use PKP\core\EntityDAO;
use PKP\services\PKPSchemaService;

class DAO extends EntityDAO
{
    public $schema = PKPSchemaService::SCHEMA_PUBLICATION;
    public $table = 'publications';
    public $settingsTable = 'publication_settings';
    public $primaryKeyColumn = 'publication_id';
    public $primaryKeyColumns = [
        'id' => 'publication_id',
        'datePublished' => 'date_published',
    ];

    public function get(int $publicationId) : Publication
    {
        return parent::get($publicationId);
    }

    public function insert(Publication $publication) : int
    {
        return parent::_insert($publication);
    }

    public function update(Publication $publication)
    {
        return parent::_update($publication);
    }

    public function delete(Publication $publication)
    {
        return parent::_delete($publication);
    }
}
```

With a defined schema, a `DAO` that extends `EntityDAO` knows how to use a schema file to read and write objects to its primary and settings tables. For example, the `DAO` class above can get a `Publication` from the database.

```php
use PKP\publication\DAO;

$dao = new DAO;
$publication = $dao->get($publicationId);
$title = $publication->getData('title');
```

In some cases, it may be necessary for an entity to store some of its data in another table. In the example below, the `DAO` gets and stores keywords for a `Publication` in another table.

```php
namespace PKP\publication;

use PKP\core\EntityDAO;
use PKP\services\PKPSchemaService;
use PKP\submission\SubmissionKeywordDAO;
use stdClass;

class DAO extends EntityDAO
{
    protected $keywordDao;

    public function __construct(SubmissionKeywordDAO $keywordDao)
    {
        $this->keywordDao = $keywordDao;
    }

    /**
     * Get the keywords from another table
     * when a publication is fetched from
     * the data store.
     */
    public function fromRow(stdClass $row) : Publication
    {
        $publication = parent::fromRow($row);

        $publication->setData(
            'keywords',
            $this->keywordDao->getKeywords($publication->getId())
        );

        return $publication;
    }

    /**
     * Write the keywords to another table
     * when a publication is saved to the
     * data store.
     */
    public function insert(Publication $publication) : int
    {
        // Extract keywords from the data set so they are not
        // automatically saved to the settings table
        if (isset($publication->_data['keywords'])) {
            $keywords = $publication->getData('keywords');
            unset($publication->_data['keywords']);
        }

        $publicationId = parent::_insert($publication);

        // Save keywords to another table
        if (isset($keywords)) {
            $this->keywordDao->insertKeywords($keywords, $publicationId);
        }

        return $publicationId;
    }
}
```

A `DAO` will often require methods to get data that are not supported by the `EntityDAO`. These should be written as public methods using Laravel's [Query Builder](https://laravel.com/docs/11.x/queries).

```php
namespace PKP\publication;

use Illuminate\Support\Facades\DB;
use PKP\core\EntityDAO;

class DAO extends EntityDAO
{
    /**
     * Get the submission id by its url path
     */
    public function getIdByUrlPath(string $urlPath, int $contextId): ?int
    {
        $publication = DB::table('publications as p')
            ->leftJoin('submissions as s', 's.submission_id', '=', 'p.submission_id')
            ->where('s.context_id', '=', $contextId)
            ->where('p.url_path', '=', $urlPath)
            ->first();

        return $publication
            ? $publication->submission_id
            : null;
    }
}
```

## Deprecated DAOs

Entities that do not yet have a schema can not extend the `EntityDAO`. These entities have a `DAO` class with its own methods for reading and writing objects.

Use the `retrieve` and `_fromRow` methods to get something from the database.

```php
use PKP\submission\reviewRound\ReviewRoundDAO;

$reviewRoundDAO = new ReviewRoundDAO();
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
use PKP\submission\reviewRound\ReviewRoundDAO;

$reviewRoundDAO = new ReviewRoundDAO();
$reviewRound = $reviewRoundDAO->getById($reviewRoundId);
```

Use the `retrieveRange` method to get a limited number of items from the database.

```php
use PKP\submission\reviewRound\ReviewRoundDAO;

$reviewRoundDAO = new ReviewRoundDAO();
$result = $reviewRoundDao->retrieveRange(
    'SELECT * FROM review_rounds WHERE submission_id = ?',
    [$submissionId],
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

Use the `update` method to insert or update records.

```php
use PKP\query\QueryDAO;
$queryDao = new QueryDAO();
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

---

Learn how to get maps and interact with entities through a [repository](./architecture-repositories).

---
book: dev-documentation
version: 3.5
title: Repositories - Technical Documentation - OJS|OMP|OPS
---

# Repositories

A `Repository` provides a public API to interact with an entity. The `Repository` relies on the [DAO](./architecture-daos) to insert, update and delete records. It combines these actions with other business requirements. When a `Repository` modifies an object, it may write logs, send emails, fire hooks, refresh cache, or schedule jobs when an object is modified.

In special cases, you may want to add, edit or delete an object without writing logs, sending emails, or updating the modified date. For example, when importing data. In such cases, you can use the [DAO](./architecture-daos) directly. In all other cases, use the `Repository` class to get, add, edit or delete objects. This will ensure that hooks, email notifications or activity logs are not skipped when an action is taken.

An entity's [DAO](./architecture-daos) only knows how to read and write data for that entity. The `Repository` coordinates that entity's relationships with other entities in the application.

Get the `Repository` for an entity from the `Repo` facade.

```php
use APP\facades\Repo;

$repo = Repo::publication();
// instance of APP\publication\Repository
```

A `Repository` provides a type hinted API to its public methods.

<figure class="video_container">
  <video controls="true" allowfullscreen="true">
    <source src="../img/repository.webm" type="video/webm">
    <source src="../img/repository.mp4" type="video/mp4">
  </video>
</figure>

Get an object.

```php
$publication = Repo::publication()->get($id);
```

Get many objects.

```php
$publications = Repo::publication()
    ->getCollector()
    ->filterBySubmissionIds([$submissionId])
    ->getMany();
```

Add an object.

```php
$publication = Repo::publication()->newDataObject([
    'sectionId' => $sectionId,
    'submissionId' => $submissionId,
]);
$publicationId = Repo::publication()->add($publication);
```

Validate changes to an object and save them.

```php
$props = ['sectionId' => 3];
$publication = Repo::publication()->get($id);
$errors = Repo::validate($publication, $props, ...);
if (!$errors) {
    Repo::edit($publication, $props);
}
```

Delete an object.

```php
Repo::publication()->delete($publication);
```

When writing a `Repository`, use the [DAO](./architecture-daos) to get information from the data store.

```php
namespace PKP\publication;

use APP\publication\DAO;

class Repository
{
    /** @var DAO */
    public $dao;

    public function __construct(DAO $dao)
    {
        $this->dao = $dao;
    }

    /** @copydoc DAO::get() */
    public function get(int $id): ?Publication
    {
        return $this->dao->get($id);
    }

    /** @copydoc DAO::getCount() */
    public function getCount(Collector $collector): ?Publication
    {
        return $this->dao->getCount($collector);
    }

    /** @copydoc DAO::getIds() */
    public function getIds(Collector $collector): ?Publication
    {
        return $this->dao->getIds($collector);
    }

    /** @copydoc DAO::getMany() */
    public function getMany(Collector $collector): ?Publication
    {
        return $this->dao->getMany($collector);
    }
}
```

A `Repository` should use the [DAO](./architecture-daos) to add, edit or delete objects, but add code to execute any other actions required.

```php
namespace PKP\publication;

use APP\publication\DAO;

class Repository
{
    /** @var DAO */
    public $dao;

    public function __construct(DAO $dao)
    {
        $this->dao = $dao;
    }

    /** @copydoc DAO::insert() */
    public function add(Publication $publication): int
    {
        // Set the publication's last modified date before it is saved.
        $publication->stampModified();

        // Use the DAO method to insert the record.
        $publicationId = $this->dao->insert($publication);

        // Allow plugins to hook into the action
        HookRegistry::call('Publication::add', [$publication]);

        // Log the event
        SubmissionLog::logEvent(...);

        // Refresh a cached count of unpublished versions
        Cache::refreshPendingVersions(...);

        return $publicationId;
    }
}
```

A `Repository` may provide methods that do not exist in the [DAO](./architecture-daos). For example, the submission repository provides a method to delete all submissions by context.

```php
namespace PKP\submission;

use APP\submission\DAO;

class Repository
{
    /** @var DAO */
    public $dao;

    public function __construct(DAO $dao)
    {
        $this->dao = $dao;
    }

    public function deleteByContextId(int $contextId)
    {
        $submissionIds = $this->getCollector()
            ->filterByContextIds([$contextId])
            ->getIds();
        foreach ($submissionIds as $submissionId) {
            $this->dao->deleteById($submissionId);
        }
    }
}
```

## Collectors

A `Collector` is a fluent interface for building queries to get a collection of objects. Collectors provide a single, configurable way to mix and match `select`, `where`, `order` and `limit` conditions when fetching data from the database.

Each collector defines the appropriate properties for its entity and compiles them into a `QueryBuilder`. Collectors also provide wrapper methods for several `DAO` methods.

```php
namespace APP\submission;

use Illuminate\Database\Query\Builder;
use Illuminate\Support\Facades\DB;
use PKP\core\interfaces\CollectorInterface;

class Collector implements CollectorInterface
{
    public DAO $dao;
    public ?array $contextIds = null;

    public function __construct(DAO $dao)
    {
        $this->dao = $dao;
    }

    /**
     * Limit results to submissions in these contexts
     */
    public function filterByContextIds(?array $contextIds): Collector
    {
        $this->contextIds = $contextIds;
        return $this;
    }

    /**
     * @copydoc CollectorInterface::getQueryBuilder()
     */
    public function getQueryBuilder(): Builder
    {
        return DB::table('submissions AS s')
            ->leftJoin('publications AS po', 's.current_publication_id', '=', 'po.publication_id')
            ->select(['s.*'])
            ->when(!is_null($this->contextIds), function(Builder $q) {
                $q->whereIn('s.context_id', $this->contextIds);
            });
    }

    /** @copydoc DAO::getCount() */
    public function getCount(): int
    {
        return $this->dao->getCount($this);
    }

    /** @copydoc DAO::getIds() */
    public function getIds(): Collection
    {
        return $this->dao->getIds($this);
    }

    /** @copydoc DAO::getMany() */
    public function getMany(): LazyCollection
    {
        return $this->dao->getMany($this);
    }
}
```

Add a method to the `Repository` to get the entity's `Collector`.

```php
namespace PKP\submission;

class Repository
{
    public function getCollector(): Collector
    {
        return app(Collector::class);
    }
}
```

Then use the `Collector`'s method chaining to write fluent queries for data.

```php
use APP\facades\Repo;

$submissions = Repo::submission()
    ->getCollector()
    ->filterByContextIds([$contextId])
    ->getMany();
```

It should be possible to mix query parameters to build new queries. In the example below, the `Collector` is used to get all unpublished submissions in the review stage that are assigned to the current user and match a given search phrase.

```php
use APP\facades\Repo;
use APP\submission\Submission;

$submissions = Repo::submission()
    ->getCollector()
    ->filterByStatus([Submission::STATUS_QUEUED])
    ->filterByStageIds([WORKFLOW_STAGE_ID_EXTERNAL_REVIEW])
    ->assignedTo([$currentUserId])
    ->searchPhrase('traditions and trends')
    ->limit(30)
    ->getMany();
```

The `getMany()` method will return [Data Objects](./architecture-entities#dataobject). Consider using the `getIds()` or `getCount()` methods when you can.

```php
use APP\facades\Repo;
use PKP\user\Collector;

$userIds = Repo::user()
    ->getCollector()
    ->filterByStatus([Collector::STATUS_DISABLED])
    ->getIds();
```

Every `Collector` must have a `getQueryBuilder` method that returns a Laravel [Query Builder](https://laravel.com/docs/9.x/queries) with the configured parameters. Use this in plugins or for one-off queries when it's not worth adding a new method to the `Collector`.

```php
use PKP\submission\Collector;

$collector = new Collector();
$queryBuilder = $collector
    ->filterByContextIds([$contextId])
    ->getQueryBuilder();

$earliestDatePublished = $queryBuilder
    ->orderBy('date_published', 'asc')
    ->first('date_published');
```

## Dependency Injection

A `Repository` is instantiated with Laravel's [Service Container](https://laravel.com/docs/8.x/container). Any arguments in its contructor that have type hints will be resolved through [automatic dependency injection](https://laravel.com/docs/8.x/container#automatic-injection).

```php
namespace PKP\publication;

use APP\publication\DAO;
use PKP\services\PKPSchemaService;
use PKP\core\PKPRequest;

class Repository
{
    public $dao;
    public $schemaService;
    public $request;

    public function __construct(DAO $dao, PKPSchemaService $schemaService, PKPRequest $request)
    {
        $this->dao = $dao;
        $this->schemaService = $schemaService;
        $this->request = $request;
    }
}
```

Objects that are treated as singletons, like the `Request`, `Application` or Service classes, must be registered in the `AppServiceProvider`. This will ensure that the existing instance is injected when resolving dependencies.

```php
namespace PKP\core;

class AppServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton(PKPRequest::class, function ($app) {
            return Application::get()->getRequest();
        });
    }
}
```

## Usage Guidance

Repositories form the bulk of data handling in the application. To keep the code easy to maintain, make sure your code is consistent with the following.

Select the default table's columns in the `getQueryBuilder()` method.

```php
public function getQueryBuilder(): Builder
{
    return DB::table('a')
        ->select('a.*');
}
```

If other columns need to be selected, use `addSelect()`.

```php
public function getQueryBuilder(): Builder
{
    return DB::table('a')
        ->select('a.*')
        ->when(!is_null($z), function($q) {
            $q->leftJoin('b', 'b.id', '=', 'a.id')
                ->addSelect('b.example');
        });
}
```

Be strict about "falsy" data in the collector. Use `null` types for unset arrays or booleans, rather than empty arrays or false booleans.

```php
$q->when($this->userGroupIds !== null, function($query) {
  return $query->whereIn('u.user_id', $this->userGroupids);
}
```

This will avoid unexpected situations like the example below.

```php
// We use two conditions to build up a list of allowed user groups:
// 1. Get a list of the current user's groups from the database
$allowedUserGroupsA = [1, 2, 3];
// 2. Get a list of groups the user has specified via the UI (e.g. checkboxes)
$allowedUserGroupsB = [4, 5, 6];
// Combine the two conditions using array_intersect.
$allowedUserGroups = array_intersect($allowedUserGroupsA, $allowedUserGroupsB);
// This will result in an empty list, meaning none of the specified user groups were allowed!
$collector->filterByUserGroupIds($allowedUserGroups);
// We would expect the DAO to return no results, but it
// actually returns all results!
return $dao->getMany($collector);
```

Avoid unexpected collation/encoding problems by not mixing PHP and SQL string operations where possible.

```diff
-    $q->where(DB::raw('LOWER(some_column)', '=', strtolower($someValue));
+    $q->whereRaw('LOWER(some_column) = LOWER(?)', [$someValue]);
```

---

Learn how to [map objects to another output](./architecture-maps).

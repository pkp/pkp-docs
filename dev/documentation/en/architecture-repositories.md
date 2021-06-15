---
title: Repositories - Technical Documentation - OJS|OMP|OPS
---

# Repositories

A `Repository` provides a public API to interact with an entity. The `Repository` relies on the [DAO](./architecture-daos) to insert, update and delete records. It combines these actions with other business requirements.

The entity's [DAO](./architecture-daos) is a "dumb" class that only knows how to read and write data for that entity. However, a `Repository` is a "smart" class that coordinates that entity's relationships with other entities in the application.

A `Repository` may write logs, send emails, fire hooks, refresh cache, or schedule jobs when an object is modified.

In rare cases, you may need to use the [DAO](./architecture-daos) to add or edit objects. For example, when importing a submission you may not want to add the object without writing logs, sending emails, or updating the modified date.

In all other cases, use the `Repository` class to get, add, edit or delete objects. This will ensure that hooks, email notifications or activity logs are not skipped when an action is taken.

Get the `Repository` for an entity from the `Repo` facade.

```php
use APP\facades\Repo;

$repo = Repo::publication();
// instance of APP\publication\Repository
```

A `Repository` provides a type hinted API to its public methods.

<figure class="video_container">
  <video controls="true" allowfullscreen="true">
    <source src="../img/repository.mp4" type="video/mp4">
  </video>
</figure>

Get an object.

```php
$publication = Repo::publication()->get($id);
```

Get many objects.

```php
$publications = Repo::publication()->getMany(
  Repo::publication()
    ->getCollector()
    ->filterBySubmissionIds([$submissionId])
);
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
    $submissionIds = $this->getIds(
        $this->getCollector()
            ->filterByContextIds([$contextId])
    );
    foreach ($submissionIds as $submissionId) {
      $this->dao->deleteById($submissionId);
    }
  }
}
```

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

---

Learn how to [map objects to another output](./architecture-maps).
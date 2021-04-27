---
title: Services - Technical Documentation - OJS|OMP|OPS
---

# Services

A `Service` class is a container for storing reusable methods. It coordinates [Entities](./architecture-entities), [`DAO`s](./architecture-database), and other utilities to read and write from the database, send emails, and fire events.

Service classes isolate the business logic of actions taken in the application from the handlers which receive and respond to the request. It should be possible to use a service class method from a `PageHandler`, `APIHandler`, or even a CLI command.

> Services are new to the application and are not yet available for all entities. Read about the [refactor strategy](#refactor-strategy). 
> 
> {:.notice}

## Using a Service

A service can be retrieved from anywhere in the application.

```php
$contextService = Services::get('context');
```

The available services can be found in `OJSServiceProvider` and `OMPServiceProvider`.

## Entity Services

A `Service` class is usually paired with an [Entity](./architecture-entities) and provides all the methods to get, add, edit, and delete that entity.

Each entity service class will implement one or more interfaces that determine what methods are available.

### EntityReadInterface

The `EntityReadInterface` provides the `get()` method to get one object.

```php
$context = Services::get('context')->get($contextId);
```

It also provides a number of methods which can be used to retrieve results filtered by one or more parameters.

Use the `getCount()` method to retrieve a count of objects matching the specified parameters.

```php
$numberOfEnabledContexts = Services::get('context')->getCount([
  'isEnabled' => true,
]);
```

Use the `getIds()` method to retrieve an array of object ids.

```php
$enabledContextIds = Services::get('context')->getIds([
  'isEnabled' => true,
]);
```

Use the `getMany()` method to retrieve an iterator of objects.

```php
$contextsIterator = Services::get('context')->getMany([
  'isEnabled' => true,
]);
```

Pass the `count` and `offset` parameters to paginate the results. The example below shows how to get ten items starting with the second page of results.

```php
$contextsIterator = Services::get('context')->getMany([
  'count' => 10,
  'offset' => 10,
]);
```

The `getCount()`, `getIds()` and `getMany()` methods all accept the same parameters. These are different for each [entity](architecture-entities) and can be discovered by reading the documentation of the service class's `getMany()` method.

The `getMany()` method returns a `DAOResultIterator` (see [Iterators](https://www.php.net/manual/en/class.iterator.php)). Iterators can be used like an array in `foreach` loops:

```php
$contextsIterator = Services::get('context')->getMany(['isEnabled' => true]);
$names = [];
foreach ($contextsIterator as $context) {
    $names[] = $context->getLocalizedData('name');
}
```

However, a `DAOResultIterator` can not be looped over twice. This will cause a fatal error.

```php
$names = [];
$paths = [];
$contextsIterator = Services::get('contexts')->getMany(['isEnabled' => true]);
foreach ($contextsIterator as $context) {
    $names[] = $context->getLocalizedData('name');
}
// The iterator has already been looped over
// before so this will cause an error
foreach ($contextsIterator as $context) {
    $paths[] = $context->getData('urlPath');
}
```

To check if no results have been returned, use `count()` instead of `!empty()`.

```php
$contextsIterator = Services::get('contexts')->getMany(['isEnabled' => true]);
if (!empty($contextsIterator)) {
    // This will always be true
}
if (count($contextsIterator)) {
    // Only true if one or more contexts were found
}
```

The `DAOResultIterator` can not be used with the `array_map`, `array_filter` or `array_reduce` functions.

If needed, a `DAOResultIterator` can be converted to an array.

```php
$contextsIterator = Services::get('contexts')->getMany(['isEnabled' => true]);
$contexts = iterator_to_array($contextsIterator);
```

However, this should be avoided unless absolutely necessary. Storing a large collection of objects in memory will slow the application down. If you're not sure, ask a more senior developer on the team.

### EntityWriteInterface

The `EntityWriteInterface` provides methods for validating, adding, editing, and deleting objects.

Before adding or editing an object, you must validate its properties. See [Validation](./utilities-validation).

```php
$props = ['path' => 'publicknowledge'];
$errors = Services::get('context')->validate(
  VALIDATE_ACTION_ADD,
  $props,
  Application::get()->getSite()->getSupportedLocales(),
  Application::get()->getSite()->getPrimaryLocale(),
);
if (!empty($errors)) {
  // Props failed validation: requires a `name` prop
}
```

Once the properties have been validated, they can be merged with the object and saved.

Edit an existing object.

```php
$editedContext = Services::get('context')->edit(
  $context,
  $props,
  Application::get()->getRequest()
);
```

To add an object, use the DAO to instantiate a new object, inject the props, and save it to the database.

```php
$context = Application::get()->getContextDAO()->newDataObject();
$context->_data = $props;
$newContext = Services::get('context')->add(
  $context,
  Application::get()->getRequest()
);
```

Delete an object.

```php
Services::get('context')->delete($context);
```

### EntityPropertyInterface

The `EntityPropertyInterface` provides methods to convert an object into an associative array. This is used before data is returned as JSON in the REST API and CLI.

Use the `getSummaryProperties()` method to retrieve a summary of the object.

```php
$contextProps = Services::get('context')
  ->getSummaryProperties(
    $context,
    ['request' => Application::get()->getRequest()]
  );
```

Use the `getFullProperties()` method to retrieve a full representation of the object.

```php
$contextProps = Services::get('context')
  ->getFullProperties(
    $context,
    ['request' => Application::get()->getRequest()]
  );
```

The full properties will sometimes include details about attached objects. For example, a submission object will attach author objects.

You can ask for the properties you want with the `getProperties()` method.

```php
$contextProps = Services::get('context')
  ->getProperties(
    $context,
    ['name', 'path', 'url']
    ['request' => Application::get()->getRequest()]
  );
```

This will return an associative array.

```
[
    'name' => [
        'en_US' => 'Journal of Public Knowledge'
    ]
  'path' => 'publicKnowledge',
    'url' => 'http://localhost:8000/publicknowledge'
]
```

### Additional Methods

Each service class may include additional methods as needed. For example, the `PKPContextService` class includes a method to restore all default settings for a locale.

```php
$updatedContext = Services::get('context')
  ->restoreLocaleDefaults(
    $context,
    $request,
    $locale
  );
```

## Other Services

In rare cases, a `Service` class may not be paired with an [entity](./architecture-entities). For example, the `SchemaService` provides methods for compiling and working with entity schemas.

```php
// Populate an object with the default values from its schema
$contextWithDefaults = Services::get('schema')
  ->setDefaults(
    SCHEMA_CONTEXT,
    $newContext,
    $supportedLocales,
    $primaryLocale
  );
```

Other services may be related to an entity but do not yet support the entity interfaces. See the [refactor strategy](#refactor-strategy).

## Writing Service Classes

A good `Service` class should be:

- **Stateless**: Each time a Service class method is called should be completely independent of any prior operations. Do not attach things to the instance with `$this`. All dependencies of a Service class method should be injected as a parameter for that method.
- **Easy to use**: Try to hide complex database requirements and business logic behind intuitive method signatures.
- **Reusable**: Consider all scenarios where a method might be used. Try to decouple it from your particular use case where possible.

## Refactor Strategy

Services are new to the application. Our intention is to move code into the service classes wthat currently exist in Page Handlers, Controller Handlers, and Forms. The primary use case for this change is to support the REST API.

This refactor has three goals:

1. To decouple business logic from the UI components and request handlers. We should be able to get, add, and edit objects from anywhere in the application.
2. To reinforce consistent use of hooks and notifications. It should not be possible to forget to call hooks, send email notifications, or add log entries when taking actions. The service class should encapsulate all the tasks that are part of an action.
3. To simplify the application structure. We hope that the service classes will provide a more intuitive API for plugin developers and third-party partners.

Service classes are not yet available for all entities. They will be developed as more of our UI is converted to use the REST API.

---

Learn more about [how entities are defined and handled](./architecture-entities).

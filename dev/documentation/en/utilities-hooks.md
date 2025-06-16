---
book: dev-documentation
version: 3.5
showPageTOC: true
title: Hooks - Technical Documentation - OJS|OMP|OPS
---

# Hooks

> Hooks are similar to filters and actions in WordPress.
{:.tip}

Hooks allow plugins, themes, and third-party code to intervene in the application and make modifications. Anyone can create a hook.

```php
use PKP\plugins\Hook;

Hook::call('Context::delete', [$context]);
```

Add a callback function to fire when the hook is called. The example below sends an email whenever a journal, press or pre-print server is deleted.

```php
use Illuminate\Support\Facades\Mail;
use PKP\mail\Mailable;
use PKP\plugins\Hook;

Hook::add('Context::delete', function($hookName, $args) {
    $context = $args[0];

    $mailable = new Mailable();
    $mailable->to('admin@example.com')
        ->from('editor@example.com')
        ->subject('The journal ' . $context->getLocalizedName() . ' was deleted.');

    Mail::send($mailable);

    return false;
});
```

It's also possible to use a hook to modify data. In the example below, every new journal that is created is assigned a default `publisherInstitution`.

```php
use PKP\plugins\Hook;

Hook::add('Context::add', function($hookName, $args) {
    $context = $args[0];

    $context->setData('publisherInstitution', 'Public Knowledge Project');

    return false;
});
```

Pass primitive types into hooks by reference (`&`). For example, a string, integer or boolean must be passed to the hook by reference in order for a callback function to be able to modify it.

```php
$xml = '<xml ...>';
Hook::call('Deposit::xml', [&$xml]);
```

```php
Hook::add('Deposit::xml', function($hookName, $args) {
    $xml =& $args[0];

    // $xml is now a reference to the same string instead of a copy
    // so changes made here will effect the original variable

    return false;
});
```

More than one callback can be registered to each hook. They are fired in the order that they were registered. Pass a hook priority constant (`HOOK_SEQUENCE_...`) to make the hook fire earlier or later in the queue.

```php
Hook::add('Crossref::deposit', function($hookName, $args) {
    // ...

    return false;
}, HOOK_SEQUENCE_LATE);
```

Return a truthy value from the callback function to prevent other callbacks from running.

```php
Hook::add('Crossref::deposit', function($hookName, $args) {
    return true;
}, HOOK_SEQUENCE_CORE);
```

Hook names should begin with a namespace for the entity or task it effects and use `::` to separate it from the action. Some examples

```
Context::add
Context::edit
Context::validate
Context::delete
Request::getBaseUrl
Dispatcher::dispatch
APIHandler::endpoints
```

## Plugins

Hooks are most commonly used in generic plugins. Calling hooks from other types of plugins may not work. The [plugin guide](/dev/plugin-guide/en) includes some [examples](/dev/plugin-guide/en/examples) that use hooks.

## Common Hooks

> This is an incomplete list. Search the [application code](https://github.com/pkp/ojs) for `HookRegistry::call` to get a complete list of hooks available in OJS 3.4.
{:.warning}

### Request, Routing and Templating

The following hooks allow plugins to intervene in request handling and routing. They make it possible to divert a request to a custom handler, override request parameters, and effect which params are supported by an API endpoint.

| Hook | Usage |
| --- | --- |
| `LoadHandler` | Route any request to a custom handler. |
| `Request::<property>` | Many of the request properties can be overridden with a hook. For example, use `Request::getBaseUrl` to override the `baseUrl`. |
| `API::<endpoint>::params` | Modify the query params accepted by an API endpoint. For example, use `API::context::params` to modify the query params accepted by the `/context` endpoint. Learn about the [REST API](/dev/api). |
| `TemplateManager::display` | Called before a template is rendered and displayed. |
| `TemplateManager::fetch` | Called before a component template is rendered and returned in an ajax request. |

### Entities

The following hooks allow plugins to intervene in how [Entities](/dev/documentation/en/architecture-entities) are fetched, validated, added and edited. Use these hooks to modify the properties of an object.

The hooks in the list below are available for any entity that has been converted to a [schema and service class](/dev/documentation/en/architecture-entities).

| Hook | Usage |
| --- | --- |
| `Schema::get::<schema>` | Called when an entity's schema is being loaded. Use this to modify the properties of an object. For example, use `Schema::get::publication` to modify the properties of a `Publication`. |
| `<entity>::validate` | Validate an object before it is added or edited. For example, use `Publication::validate` to validate changes to a `Publication`. |
| `<entity>::add` | Called when an object is added to the database. |
| `<entity>::edit` | Called when an object is edited. |
| `<entity>::delete::before` | Called before an object is deleted from the database. |
| `<entity>::delete` | Called after an object is deleted from the database. |
| `<entity>::Collector` | Modify the `QueryBuilder` returned by a [Collector](./architecture-repositories#collector). |

Some entities provide hooks for additional actions taken in the [Repository](./architecture-repositories) class.

| Hook | Usage |
| --- | --- |
| `Publication::publish::before` | Called before a `Publication` is published. |
| `Publication::publish` | Called after a `Publication` is published.
| `Publication::unpublish::before` | Called before a `Publication` is unpublished. |
| `Publication::unpublish` | Called after a `Publication` is unpublished.
| `Publication::validatePublish` | Validate a `Publication` before it is published. Use this to ensure a publication has all the required data before publishing. |
| `Publication::version` | Called when a new version is created for a `Publication`. |
| `Submission::updateStatus` | Called when a `Submission` updates its `status` property. |
| `EmailTemplate::restoreDefaults` | Called when the email templates are being restored to their defaults. |

The hooks in the list below are available for any entity that has not been converted to the schema and service class. These entities use a [DAO](./architecture-daos) to define the properties of the model.

| Hook | Usage |
| --- | --- |
| `<dao>::_fromRow` | Map the rows retrieved from a database to a [DataObject](./architecture-entities#dataobject-class). For example, use `SectionDAO::_fromRow` to modify a `Section`. |
| `<dao>::getAdditionalFieldNames` | Modify the properties of an entity that are stored in its settings table. For example, use `SectionDAO::getAdditionalFieldNames` to modify the properties of a `Section`. |
| `<dao>::getLocaleFieldNames` | Modify the multilingual properties of an entity that are stored in its settings table. For example, use `SectionDAO::getLocaleFieldNames` to modify the multilingual  properties of a `Section`. |

### Components

The following hooks allow plugins to intervene in the data passed to UI components. These hooks are only available for components in the [UI Library](/dev/ui-library/dev).

| Hook | Usage |
| --- | --- |
| `Form::config::before` | Called before a form component is compiled and passed into state. Use this to add and edit form fields. |
| `Form::config::after` | Called after a form component is compiled and passed into state. |

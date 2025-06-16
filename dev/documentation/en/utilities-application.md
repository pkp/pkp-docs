---
book: dev-documentation
version: 3.5
title: Application - Technical Documentation - OJS|OMP|OPS
---

# Application

The `APP\core\Applicaton` class initializes the application and provides a convenient way to access critical information about the application's state.

Get the `Application` instance.

```php
use APP\core\Application;

$app = Application::get();
```

Get the `APP\core\Request` object instantiated with this request.

```php
use APP\core\Application;

$request = Application::get()->getRequest();
```

Get the version of the application.

```php
use APP\core\Application;

$version = Application::get()->getCurrentVersion();
```

Get the name of the application.

```php
use APP\core\Application;

$name = Application::get()->getName();

// example: $name => ojs2
```

Get a human-readable name of the application translated into the current language.

```php
use APP\core\Application;

$name = __(Application::get()->getNameKey());

// example: $name => Open Journal Systems
```

Get the workflow stages supported by the application.

```php
use APP\core\Application;

$stages = Application::get()->getApplicationStages();

// example: $stages => [WORKFLOW_STAGE_ID_*]
```

Check whether the application has been installed.

```php
use APP\core\Application;

if (Application::get()->isInstalled()) {
    //
}
```

Check whether the application is being upgraded.

```php
use APP\core\Application;

if (Application::get()->isUpgrading()) {
    //
}
```

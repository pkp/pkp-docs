---
title: Example - Add Custom Page - Plugin Guide for OJS, OMP and OPS
book: dev-plugin-guide
version: 3.4
---

# Add Custom Page

> You should understand the [Request Lifecycle](/dev/documentation/en/architecture-request) and be familiar with the application [architecture](/dev/documentation/en/architecture), especially [Handlers](/dev/documentation/en/architecture-handlers), before proceeding.
{:.notice}

You may want your plugin to add a new page to the application. This may be a separate settings page or editorial dashboard on the backend, or a new public page on the reader-facing website. A generic plugin can do this by hooking into the request lifecycle and loading its own [PageHandler](/dev/documentation/en/architecture-handlers).

Consider a request to the following page.

```
http://example.org/publicknowledge/example
```

The plugin hooks into `LoadHandler` and routes the request to a custom `PageHandler`.

```php
namespace APP\plugins\generic\exampleCustomPage;

use PKP\plugins\GenericPlugin;
use PKP\plugins\Hook;

class ExampleCustomPagePlugin extends GenericPlugin
{
    public function register($category, $path, $mainContextId = null)
    {
        $success = parent::register($category, $path, $mainContextId);
        if ($success && $this->getEnabled()) {
            Hook::add('LoadHandler', [$this, 'setPageHandler']);
        }
        return $success;
    }

    /**
     * Route requests for the `example` page to a custom page handler
     */
    public function setPageHandler(string $hookName, array $args): bool
    {
        $page =& $args[0];
        $handler =& $args[3];
        if ($this->getEnabled() && $page === 'example') {
            $handler = new ExampleCustompageHandler($this);
            return true;
        }
        return false;
    }
}
```

The `PageHandler` displays the `example.tpl` template.

```php
namespace APP\plugins\generic\exampleCustomPage;

use APP\template\TemplateManager;
use PKP\controllers\page\PageHandler;

class ExampleCustompageHandler extends PageHandler
{
    public ExampleCustomPagePlugin $plugin;

    public function __construct(ExampleCustomPagePlugin $plugin)
    {
        parent::__construct();

        $this->plugin = $plugin;
    }

    public function index($args, $request)
    {
        $templateMgr = TemplateManager::getManager($request);

        return $templateMgr->display(
            $this->plugin->getTemplateResource(
                'example.tpl'
            )
        );
    }
}
```

A custom `PageHandler` can support more than one op by adding public methods in addition to `index()`. Read more about [Handlers](/dev/documentation/en/architecture-handlers) and be sure to add [authorization checks](/dev/documentation/en/architecture-authorization) to secure access to your page.

---

View more [examples](./examples).

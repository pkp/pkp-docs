---
title: Example - Add Custom Page - Plugin Guide for OJS and OMP
---

# Adicionar página personalizada

Você pode querer que seu plugin adicione uma nova página à aplicação. Pode ser uma página de configurações separada ou um painel editorial no back-end ou uma nova página pública no site voltado para o leitor.

A generic plugin can do this by hooking into the request lifecycle and loading its own [PageHandler](/dev/documentation/en/architecture-handlers).

> You should understand the [Request Lifecycle](/dev/documentation/en/architecture-request) and be familiar with the application [architecture](/dev/documentation/en/architecture), especially [Handlers](/dev/documentation/en/architecture-handlers), before proceeding. 
> 
> {:.notice}

The example below shows a request to a custom page.

```
http://example.org/publicknowledge/tutorialexample
```

```php
class TutorialExamplePlugin extends GenericPlugin {
    public function register($category, $path, $mainContextId = null) {
        $success = parent::register($category, $path, $mainContextId);
        if ($success && $this->getEnabled()) {
            HookRegistry::register('LoadHandler', array($this, 'setPageHandler'));
        }
        return $success;
  }
    public function setPageHandler($hookName, $params) {
        $page = $params[0];
        if ($page === 'tutorialexample') {
            $this->import('TutorialExamplePluginHandler');
            define('HANDLER_CLASS', 'TutorialExamplePluginHandler');
            return true;
        }
        return false;
    }
}
```

```php
import('classes.handler.Handler');
class TutorialExamplePluginHandler extends Handler {
    public function index($args, $request) {
        $plugin = PluginRegistry::getPlugin('generic', 'tutorialexampleplugin');
    $templateMgr = TemplateManager::getManager($request);
    return $templateMgr->display($plugin->getTemplateResource('example.tpl'));
  }
}
```

The `TutorialExamplePluginHandler` can have more than one op and supports all the capacities of a regular `PageHandler`.

> Read about the [authorization framework](/dev/documentation/en/architecture-authorization) to keep your private pages secure. 
> 
> {:.warning}

---

View more [examples](./examples).

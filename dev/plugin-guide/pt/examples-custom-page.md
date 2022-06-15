---
title: Example - Add Custom Page - Plugin Guide for OJS and OMP
---

# Adicionar página personalizada

Você pode querer que seu plugin adicione uma nova página à aplicação. Pode ser uma página de configurações separada ou um painel editorial no back-end ou uma nova página pública no site voltado para o leitor.

Um plugin genérico pode fazer isso conectando-se ao ciclo de vida da solicitação e carregando seu próprio [PageHandler](/dev/documentation/en/architecture-handlers).

> Você deve entender o [Ciclo de vida da solicitação](/dev/documentation/en/architecture-request) e estar familiarizado com a [arquitetura](/dev/documentation/en/architecture), especialmente [Manipuladores](/dev/documentation/en/architecture-handlers), antes de prosseguir. 
> 
> {:.notice}

O exemplo abaixo mostra uma solicitação para uma página personalizada.

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

O `TutorialExamplePluginHandler` pode ter mais de um op e suporta todas as capacidades de um `PageHandler` normal.

> Leia sobre a [estrutura de autorização](/dev/documentation/en/architecture-authorization) para manter suas páginas privadas seguras. 
> 
> {:.warning}

---

Veja mais [exemplos](./examples).

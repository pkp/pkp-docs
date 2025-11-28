---
title: Example - Add Styles and Scripts - Plugin Guide for OJS and OMP
---

# Adicionar Estilos e Scripts

Seu plugin pode exigir código CSS ou JavaScript adicional para ser executado. O `TemplateManager` inclui funções auxiliares para carregar scripts e estilos.

```php
$templateMgr = TemplateManager::getManager($request);
$templateMgr->addStyleSheet('tutorialExampleStyles', 'http://example.com/my-css.css');
$templateMgr->addJavaScript('tutorialExampleScript', 'http://example.com/my-script.js');
```

Scripts e estilos geralmente estão localizados no diretório de plugins. Use o `base_url` para obter a URL para o diretório raiz de um plugin.

```php
$request = Application::get()->getRequest();
$url = $request->getBaseUrl() . '/' . $this->getPluginPath() . '/css/my-css.css';
$templateMgr = TemplateManager::getManager($request);
$templateMgr->addStyleSheet('tutorialExampleStyles', $url);
```

Scripts e estilos devem ser carregados no método `register` do plugin.

```php
class TutorialExamplePlugin extends GenericPlugin {
    public function register($category, $path, $mainContextId = NULL) {
    $success = parent::register($category, $path);
        if ($success && $this->getEnabled()) {
      $request = Application::get()->getRequest();
      $url = $request->getBaseUrl() . '/' . $this->getPluginPath() . '/css/my-css.css';
      $templateMgr = TemplateManager::getManager($request);
      $templateMgr->addStyleSheet('tutorialExampleStyles', $url);
    }
        return $success;
  }
}
```

Por padrão, scripts e estilos são carregados no site voltado para o leitor. Passe um argumento `context` para carregá-los no backend editorial.

```php
$templateMgr->addStyleSheet(
  'tutorialExampleStyles',
  $url,
  ['context' => 'backend']
);
```

Você pode passar mais de um contexto para carregá-los em dois lugares.


```php
$templateMgr->addStyleSheet(
  'tutorialExampleStyles',
  $url,
  ['context' => ['backend', 'frontend']
);
```

---

Veja mais [exemplos](./examples).

---
title: Example - Add Styles and Scripts - Plugin Guide for OJS, OMP and OPS
book: dev-plugin-guide
version: 3.4
---

# Add Styles and Scripts

Your plugin may require additional CSS or JavaScript code to run. The `TemplateManager` includes helper functions to load scripts and styles.

```php
use APP\template\TemplateManager;

$templateMgr = TemplateManager::getManager($request);

$templateMgr->addStyleSheet('tutorialExampleStyles', 'http://example.com/my-css.css');
$templateMgr->addJavaScript('tutorialExampleScript', 'http://example.com/my-script.js');
```

Scripts and styles may be located in the plugin's directory. Use the `base_url` to get the URL to a plugin's root directory.

```php
use APP\core\Application;
use APP\template\TemplateManager;

$request = Application::get()->getRequest();

$url = $request->getBaseUrl() . '/' . $this->getPluginPath() . '/css/my-css.css';

$templateMgr = TemplateManager::getManager($request);
$templateMgr->addStyleSheet('tutorialExampleStyles', $url);
```

Scripts and styles should be loaded in the plugin's `register` method.

```php
namespace APP\plugins\generic\tutorialExample;

use APP\core\Application;
use APP\template\TemplateManager;
use PKP\plugins\GenericPlugin;

class TutorialExamplePlugin extends GenericPlugin
{
    public function register($category, $path, $mainContextId = NULL)
    {
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

By default, scripts and styles are loaded on the reader-facing website. Pass a `context` argument to load them in the editorial backend.

```php
$templateMgr->addStyleSheet(
  'tutorialExampleStyles',
  $url,
  ['contexts' => 'backend']
);
```

You can pass more than one context to load them in two places.


```php
$templateMgr->addStyleSheet(
  'tutorialExampleStyles',
  $url,
  ['contexts' => ['backend', 'frontend']
);
```

---

View more [examples](./examples).

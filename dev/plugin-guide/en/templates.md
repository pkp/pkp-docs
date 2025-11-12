---
title: Templates - Plugin Guide for OJS, OMP and OPS
description: How to use and override templates in your OJS, OMP or OPS plugin.
book: dev-plugin-guide
version: 3.5
---

# Templates

Plugins have access to the same template system as the main application. Use this whenever you need to display or render HTML code in your plugin.

All plugin templates are located in a `templates` subdirectory.

```
ojs
│
├─┬ plugins
│ │
│ └─┬ generic
│   │
│   └─┬ tutorialExample
│     │
│     ├─┬ templates
│     │ ├── example.tpl
│     │ └── settings.tpl
│     ├── index.php
│     └── TutorialExamplePlugin.php
│     └── version.xml
```

The `getTemplateResource()` method is available to every plugin. Use it to load a template in the plugin's template directory.

```php
use APP\template\TemplateManager;

$templateMgr = TemplateManager::getManager($request);
$templateMgr->display($this->getTemplateResource('example.tpl'));
```

Templates can be nested in subdirectories.

```
ojs
│
├─┬ plugins
│ │
│ └─┬ generic
│   │
│   └─┬ tutorialExample
│     │
│     ├─┬ templates
│     │ ├── example.tpl
│     │ └─┬ settings
│     │   └── index.tpl
│     ├── index.php
│     ├── TutorialExamplePlugin.php
│     └── version.xml
```
```php
use APP\template\TemplateManager;

$templateMgr = TemplateManager::getManager($request);
$templateMgr->display($this->getTemplateResource('settings/index.tpl'));
```

## Override templates

> Learn more about [template overrides](/pkp-theming-guide/en/html-smarty).
{:.notice}

By default, a template file in a theme plugin that matches the path of a template file in the application will override it. You can grant this ability to any plugin.

Add a hook during registration to allow a plugin's templates to override templates in the application.

```php
<?php
namespace APP\plugins\generic\tutorialExample;

use PKP\plugins\GenericPlugin;
use PKP\plugins\Hook;

class TutorialExamplePlugin extends GenericPlugin
{
    public function register($category, $path, $mainContextId = NULL)
    {
        $success = parent::register($category, $path);
        if ($success && $this->getEnabled()) {
            Hook::add('TemplateResource::getFilename', [$this, '_overridePluginTemplates']);
        }

        return $success;
    }
```

Any template that matches the path and filename of an application's template will override it. In the example below, the plugin overrides the application's `common/footer.tpl` template.

```
ojs
│
├─┬ plugins
│ └─┬ generic
│   └─┬ templateOverrideExample
│     ├─┬ templates
│     │ └─┬ common
│     │   └── footer.tpl
│     └── ...
├─┬ templates
│ └─┬ common
│   └── footer.tpl
```

Any plugin that can override application templates can also override the templates of another plugin. In the example below, the plugin overrides the block template of the `makeSubmission` block plugin.

```
ojs
│
├─┬ plugins
│ ├─┬ blocks
│ │ └─┬ makeSubmission
│ │   ├─┬ templates
│ │   │ └── block.tpl
│ │   └── ..
│ └─┬ generic
│   └─┬ templateOverrideExample
│     ├─┬ templates
│     │ └─┬ plugins
│     │   └─┬ blocks
│     │     └─┬ makeSubmission
│     │       └─┬ templates
│     │         └── block.tpl
│     └── ..
```

---

Learn how to [add settings](./settings) to your plugin.
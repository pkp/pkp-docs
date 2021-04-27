---
title: Getting Started - Plugin Guide for OJS and OMP
---

# Getting Started

In this guide, we will create a generic plugin that we will call the Tutorial Example.

> Download a working example of [the plugin](https://github.com/pkp/tutorialExample) we will build in this tutorial from GitHub. 
> 
> {:.notice}

A plugin stores all of its files in one directory in OJS or OMP. Our example plugin will be a `generic` plugin, so we put it in that directory. Every plugin requires three files.

```
ojs
│
├─┬ plugins
│ │
│ └─┬ generic
│   │
│   └─┬ tutorialExample
│     ├── index.php
│     └── TutorialExamplePlugin.inc.php
│     └── version.xml
```

> The directory name must be letters and numbers. No spaces, `-`, or `_` characters are allowed. 
> 
> {:.tip}

## version.xml

The `version.xml` provides information required to load the plugin.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE version SYSTEM "../../../lib/pkp/dtd/pluginVersion.dtd">
<version>
    <application>tutorialExample</application>
    <type>plugins.generic</type>
    <release>0.1.0.0</release>
    <date>2019-05-15</date>
    <lazy-load>1</lazy-load>
    <class>TutorialExamplePlugin</class>
</version>
```

The `<application>` must match the directory name. The `<type>` must be the plugin's [category](./categories). The `<class>` must match the plugin's class name.

## TutorialExamplePlugin.inc.php

Every plugin must have a class which registers and runs the plugin.

```php
<?php
import('lib.pkp.classes.plugins.GenericPlugin');
class TutorialExamplePlugin extends GenericPlugin {
    public function register($category, $path, $mainContextId = NULL) {

    // Register the plugin even when it is not enabled
    $success = parent::register($category, $path);

        if ($success && $this->getEnabled()) {
      // Do something when the plugin is enabled
    }

        return $success;
    }

  /**
   * Provide a name for this plugin
   *
   * The name will appear in the plugins list where editors can
   * enable and disable plugins.
   */
    public function getDisplayName() {
        return 'Tutorial Example';
    }

    /**
   * Provide a description for this plugin
   *
   * The description will appear in the plugins list where editors can
   * enable and disable plugins.
   */
    public function getDescription() {
        return 'This plugin is an example created for a tutorial on how to create a plugin.';
    }
}
```

## index.php

The `index.php` file is required to load the correct plugin class.

```php
<?php
require_once('TutorialExamplePlugin.inc.php');
return new TutorialExamplePlugin();
```

Go to Settings > Website > Plugins and try to enable and disable your plugin. If there is an error when enabling it, check your plugin against the [working example](https://github.com/pkp/tutorialExample)

---

Learn how to choose the right [plugin category](./categories) for your plugin.

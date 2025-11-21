---
title: Getting Started - Plugin Guide for OJS, OMP and OPS
description: A step-by-step tutorial to create your first plugin for Open Journal System (OJS), Open Monograph Press (OMP), or Open Preprint Systems (OPS).
book: dev-plugin-guide
version: 3.4
---

# Getting Started

> View the [example plugin](https://github.com/pkp/tutorialExample) that will be built in this tutorial.
{:.notice}

This step-by-step tutorial will describe how to create a generic plugin called the "Tutorial Example Plugin". This plugin will be created for OJS, but the same steps can be followed to create a plugin for OMP or OPS.

Create a directory for the plugin at `plugins/generic/tutorialExample` and create the following files in that directory.

```
ojs
│
├─┬ plugins
│ │
│ └─┬ generic
│   │
│   └─┬ tutorialExample
│     ├── TutorialExamplePlugin.php
│     └── version.xml
```

The directory name must be letters and numbers. No spaces, `-`, or `_` characters are allowed.

## TutorialExamplePlugin.php

Every plugin must have a class which registers and runs the plugin. The file and class name must match the directory name, capitalize the first letter, and add the phrase `Plugin` at the end. So the directory `tutorialExample` would require a class named `TutorialExamplePlugin` in a file named `TutorialExamplePlugin.php`.

```php
<?php
namespace APP\plugins\generic\tutorialExample;

use PKP\plugins\GenericPlugin;

class TutorialExamplePlugin extends GenericPlugin
{
    public function register($category, $path, $mainContextId = NULL)
    {
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
     * The name will appear in the Plugin Gallery where editors can
     * install, enable and disable plugins.
     */
    public function getDisplayName()
    {
        return 'Tutorial Example';
    }

    /**
     * Provide a description for this plugin
     *
     * The description will appear in the Plugin Gallery where editors can
     * install, enable and disable plugins.
     */
    public function getDescription()
    {
        return 'This plugin is an example created for a tutorial on how to create a plugin.';
    }
}
```

## version.xml

The `version.xml` provides information required to load the plugin. The `<application>` must match the directory name. The `<type>` must be the plugin's [category](./categories).

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE version SYSTEM "../../../lib/pkp/dtd/pluginVersion.dtd">
<version>
    <application>tutorialExample</application>
    <type>plugins.generic</type>
    <release>1.0.0.0</release>
    <date>2023-05-15</date>
</version>
```

Go to Settings > Website > Plugins and try to enable and disable your plugin. If there is an error when enabling it, check your plugin against the [working example](https://github.com/pkp/tutorialExample).

---

Learn how to choose the right [plugin category](./categories) for your plugin.

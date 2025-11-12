---
title: Translation - Plugin Guide for OJS, OMP and OPS
description: How to support multiple languages in your OJS, OMP or OPS plugin.
book: dev-plugin-guide
version: 3.5
---

# Translation

Plugins should support more than one language. This allows them to work if the application is run in more than one language, or when the plugin is published for others to use.

A plugin should include locale files for every language that it supports.The example below shows where the English and French (Canada) locale files are stored.

```
ojs
│
├─┬ plugins
│ │
│ └─┬ generic
│   │
│   └─┬ tutorialExample
│     │
│     ├─┬ locale
│     │ ├─┬ en
│     │ │ └── locale.po
│     │ └─┬ fr_CA
│     │   └── locale.po
│     └── TutorialExamplePlugin.php
│     └── version.xml
```

The locale file defines the language and any messages that should be translated.

```
msgid "plugins.generic.tutorialExample.name"
msgstr "Tutorial Example"

msgid "plugins.generic.tutorialExample.description"
msgstr "This plugin is an example created for a tutorial on how to create a plugin."
```

Call the `__()` function to use a message in your plugin.

```php
namespace APP\plugins\generic\tutorialExample;

use PKP\plugins\GenericPlugin;

class TutorialExamplePlugin extends GenericPlugin
{
    public function getDisplayName()
    {
        return __('plugins.generic.tutorialExample.name');
    }

    public function getDescription()
    {
        return __('plugins.generic.tutorialExample.description');
    }
}
```

In templates, call the `{translate ...}` function to use localized messages.

```php
<h1>{translate key="plugins.generic.tutorialExample.name"}</h1>
```

Any plugin that is added to the Plugin Gallery must support translation, even if it only includes a locale file for one language. Our active community of translators will often provide a translation after you have released the plugin.

---

Learn how to [use and override templates](./templates) in your plugin.

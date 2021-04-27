---
title: Translation - Plugin Guide for OJS and OMP
---

# Translation

Plugins should support more than one language. This allows them to work if you run OJS or OMP in more than one language, or if you want to share your plugin so that others can use it.

Translations are managed by adding locale files for every language that you support. The example below shows where the English (U.S) and French (Canada) locale files are stored.

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
│     │ ├─┬ en_US
│     │ │ └── locale.po
│     │ └─┬ fr_CA
│     │   └── locale.po
│     ├── index.php
│     └── TutorialExamplePlugin.inc.php
│     └── version.xml
```

The locale file defines the language and any messages that should be translated.

```po
msgid "plugins.generic.tutorialExample.name"
msgstr "Tutorial Example"

msgid "plugins.generic.tutorialExample.description"
msgstr "This plugin is an example created for a tutorial on how to create a plugin."
```

Then use the `__()` function to get a message in your plugin.

```php
import('lib.pkp.classes.plugins.GenericPlugin');
class TutorialExamplePlugin extends GenericPlugin {

  public function getDisplayName() {
        return __('plugins.generic.tutorialExample.name');
    }

    public function getDescription() {
        return __('plugins.generic.tutorialExample.description');
    }
}
```

Use the `{translate ...}` smarty function to get locale messages in your templates.

```php
<h1>{translate key="plugins.generic.tutorialExample.name"}</h1>
```

Any plugin that is added to the Plugin Gallery must support translation, even if it only includes a locale file for one language. Our active community of translators will often provide a translation after you have released the plugin.

---

Learn how to [use and override templates](./templates) in your plugin.

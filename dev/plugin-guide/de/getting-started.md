---
title: Getting Started - Plugin Guide for OJS and OMP
---

# Getting Started

In dieser Anleitung werden wir ein Generic-Plugin erstellen.

> Den Code des [Plugins](https://github.com/pkp/tutorialExample), das wir im Folgenden schreiben werden, kannst du von GitHub herunterladen. 
> 
> {:.notice}

Alle für das Plugin relevanten Dateien werden in einem bestimmten Verzeichnis innerhalb deiner OJS/OMP-Installation abgespeichert. Unser Beispiel-Plugin ist ein `generic`-Plugin, deshalb wird es in diesem Verzeichnis abgelegt. Jedes Plugin benötigt (mindestens) drei Dateien.

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

> Der Name des Verzeichnisses darf nur Buchstaben und Zahlen enthalten. Leerzeichen, `-`, or `_` sind nicht erlaubt. 
> 
> {:.tip}

## version.xml

Die Datei `version.xml` stellt Informationen zur Verfügung wie das Plugin geladen werden soll.

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

Der `<application>` Tag ist identisch mit dem Verzeichnis-Namen. Der `<type>` Tag entspricht der [Plugin-Kategorie](./categories). Im `<class>` Tag wird der Name der Plugin-Klasse eingetragen.

## TutorialExamplePlugin.inc.php

Jedes Plugin muss eine Klasse besitzen, mit der es registriert und ausführt wird.

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

Die Datei `index.php` wird benötigt um die korrekte Plugin-Klasse zu laden.

```php
<?php
require_once('TutorialExamplePlugin.inc.php');
return new TutorialExamplePlugin();
```

Gehe zu Einstellungen > Website > Plugins und versuche dein Plugin zu aktivieren bzw. zu deaktivieren. Wenn ein Fehler beim Aktivieren auftritt, vergleiche deinen Plugin-Code mit dem von [GitHub](https://github.com/pkp/tutorialExample).

---

Erfahre mehr darüber, wie du die richtige [Kategorie](./categories) für dein Plugin auswählst.

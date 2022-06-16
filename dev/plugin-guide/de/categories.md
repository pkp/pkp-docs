---
title: Plugin Categories - Plugin Guide for OJS and OMP
---

# Plugin Categories

Die Kategorie eines Plugins bestimmt, wann genau es beim Seitenaufruf geladen wird und auf welche Art und Weise es die Anwendung verändern kann. Ein [-Block](#blocks) Plugin beispielsweise auf den Seiten, die öffentlich zugänglich sind, zusätzlichen Inhalt zur Seitenleiste hinzufügen. Allerdings hat es keine weitere Funktion und wird nicht im Editorial Backend geladen.

Jede Plugin-Kategorie entspricht einer bestimmten Klasse, und jedes neue Plugin muss eine dieser Klassen erweitern. Im Abschnitt [Getting Started](./getting-started), the Tutorial Example plugin erweitern die `GenericPlugin` Klasse.

```php
import('lib.pkp.classes.plugins.GenericPlugin');
class TutorialExamplePlugin extends GenericPlugin {
  ...
}
```

Ein Block-Plugin erweitert die `BlockPlugin` Klasse.

```php
import('lib.pkp.classes.plugins.BlockPlugin');
class TutorialBlockPlugin extends BlockPlugin {
  ...
}
```

Jede Kategorien-Klasse stellt bestimmte Methoden zur Verfügung, die implementiert werden müssen. For example, a [report](#reports) plugin extends the `ReportPlugin` class and implements the `ReportPlugin::display()` method to deliver a CSV file with the report contents.

```php
import('lib.pkp.classes.plugins.ReportPlugin');
class ReviewReportPlugin extends ReportPlugin {
    public function display($args, $request) {
    header('content-type: text/comma-separated-values');
        header('content-disposition: attachment; filename=reviews.csv');
    $fp = fopen('php://output', 'wt');
        fputcsv($fp, [/* the review details in the report */]);
        fclose($fp);
  }
}
```

Erfahre mehr über jede Kategorie.

## Blocks

Block-Plugins stellen weitere Inhalte in Form von Blöcken zur Verfügung, die in der Seitenleiste jeder Seite angezeigt werden können. Sie benötigen eine Template-Datei.

```
ojs
│
├─┬ plugins
│ │
│ └─┬ blocks
│   │
│   └─┬ madeBy
│     │
│     ├─┬ templates
│     │ └── block.tpl
│     ├── index.php
│     └── MadeByPlugin.inc.php
│     └── version.xml
```

Die Template-Datei sollte den kompletten HTML-Code für deinen Block enthalten.

```html
<div class="pkp_block block_madeBy">
  Made with ❤ by the Public Knowledge Project
</div>
```

Füge die Methode `getContents()` ein um Daten an das Template zu übergeben.

```php
import('lib.pkp.classes.plugins.BlockPlugin');
class MadeByPlugin extends BlockPlugin {
  public function getContents($templateMgr, $request = null) {
    $templateMgr->assign('madeByText', 'Made with ❤ by the Public Knowledge Project');
    return parent::getContents($templateMgr, $request);
  }
}
```

```html
<div class="pkp_block block_madeBy">
  {$madeByText}
</div>
```

Block-Plugins können jeden möglichen HTML-Code verwenden. Wenn du jedoch möchtest, dass dein Block mit anderen Blöcken von PKP verbunden ist, benutze das folgende Markup.

```html
<div class="pkp_block">
    <span class="title"><!-- Add the title of your block here --></span>
    <div class="content">
    <!-- Add the main content for your block here -->
    </div>
</div>
```

## Import/Export

Mithilfe von Import/Export-Plugins können Daten in bzw. aus OJS/OMP entsprechend importiert bzw. exportiert werden. Wenn du zwischen unserer Anwendung und einer anderen Plattform wechseln möchtest, können sie dazu benutzt werden um beispielsweise Benutzer, Einreichungen, Back-Issues und mehr zu migrieren.

> Download an [example import/export plugin](https://github.com/pkp/exampleImportExport). 
> 
> {:.notice}

Each import/export plugin can be run on the command line.

```
$ php tools/importExport.php ExampleImportExportPlugin import filename.csv
```

```php
import('lib.pkp.classes.plugins.ImportExportPlugin');
class ExampleImportExportPlugin extends ImportExportPlugin {
  /**
     * @copydoc ImportExportPlugin::usage()
     */
    public function usage($scriptName) {
    echo "Usage: " . $scriptName . " " . $this->getName() . " [command]\n";
    echo "Commands:\n";
    echo "  import [filename]";
    echo "  export [filename]";
  }

    /**
     * @copydoc ImportExportPlugin::executeCLI()
     */
    public function executeCLI($scriptName, &$args) {
    $command = array_shift($args);
    $filename = array_shift($args);

    if ($command === 'import') {
      $data = file_get_contents($filename);
      /* now import the data */

    } elseif ($command === 'export') {
      $fp = fopen($filename, 'wt');
      fputcsv($fp, [/* export dataset */]);
      fclose($fp);
    }
  }
}
```

Each import/export plugin has its own page under the Tools > Import/Export menu. This can be used to display import and export options and provide a UI for generating exports.

```php
import('lib.pkp.classes.plugins.ImportExportPlugin');
class ExampleImportExportPlugin extends ImportExportPlugin {
    /**
     * @copydoc ImportExportPlugin::register()
     */
    public function display($args, $request) {
        parent::display($args, $request);

        // Use the path to determine which action
        // should be taken.
        $path = array_shift($args);
        switch ($path) {

            // Deliver a CSV file for download
            case 'exportAll':
                header('content-type: text/comma-separated-values');
                header('content-disposition: attachment; filename=example-' . date('Ymd') . '.csv');
        $fp = fopen('php://output', 'wt');
        fputcsv($fp, [/* export dataset */]);
        fclose($fp);
                break;

      // When no path is requested, display a page with
      // export options and a form to kick off the
      // `exportAll` path.
            default:
                $templateMgr = TemplateManager::getManager($request);
                $templateMgr->display($this->getTemplateResource('export.tpl'));
        }
    }
}
```

Use the `{plugin_url ...}` smarty function in the template to submit a form to one of the import or export paths.

```html
<form method="POST" action="{plugin_url path="exportAll"}">
  <button type="submit">Export All</button>
</form>
```

## Reports

Report plugins provide one-click access to a CSV file download. The report may include details on article usage statistics, reviewers or anything you want.

Report plugins extend the `ReportPlugin` class and implement the `display()` method.

```php
import('lib.pkp.classes.plugins.ReportPlugin');
class ArticleReportPlugin extends ReportPlugin {
  public function display($args, $request) {

    // Get the first 100 submissions
    $collector = Repo::submission()
      ->getCollector()
      ->filterByContextIds([$context->getId()])
      ->limit(100);
    $submissions = Repo::submission()->getMany($collector);

    // Return a CSV file
    header('content-type: text/comma-separated-values');
        header('content-disposition: attachment; filename=articles-' . date('Ymd') . '.csv');
        $fp = fopen('php://output', 'wt');
    fputcsv($fp, ['ID', 'Title']);
    foreach ($submissions as $submission) {
      fputcsv($fp, [$submission->getId(), $submission->getLocalizedTitle()]);
    }
        fclose($fp);
  }
}
```

Reports are usually created in CSV format, but your report plugin can return any downloadable file format.

## Themes

Themes control the design and layout of a journal or press website. Read the [Theming Guide](/pkp-theming-guide/en) to learn how to build your own themes.

## Generic

Generic plugins are loaded with every request. They hook into the application early in the [Request Lifecycle](/dev/documentation/en/architecture-request) and can be used to modify almost everything.

Generic plugins use [Hooks](/dev/documentation/en/utilities-hooks) to intervene in the application. Hooks should be added in a plugin's `register()` method.

```php
import('lib.pkp.classes.plugins.GenericPlugin');
class ExamplePlugin extends GenericPlugin {

    public function register($category, $path, $mainContextId = NULL) {
        $success = parent::register($category, $path);
        if ($success && $this->getEnabled()) {
            HookRegistry::register('Example::hookName', array($this, 'doSomething'));
        }
        return $success;
  }

  public function doSomething($hookName, $args) {
        // Do something...

        return false;
  }
}
```

> Always check if the plugin is enabled before registering a hook. Otherwise, your plugin will run even when it has been disabled. 
> 
> {:.warning}

Generic plugins are very powerful and can use any hook in the application. Look at the [examples](./examples) for ideas and learn about the most [common hooks](/dev/documentation/en/utilities-hooks#common-hooks).

## Other

There are other plugin categories available that are not often used. The best way to learn about them is to read the source code of one of the existing plugins. These categories include:

- `auth` plugins allow you to authorize and synchronize user accounts with a third-party source.
- `gateways` plugins allow you to add a new URL and respond to requests to that URL.
- `metadata` plugins implement a description of a metadata format.
- `oaiMetadataFormats` plugins add a metadata format to the application's OAI endpoint.
- `paymethod` plugins allow you to implement your own payment handling when using subscription and article fees.
- `pubIds` plugins allow you to add support for publication identifiers like DOIs.

---

Learn how to [translate your plugin](./translation) so that it can be used by many journals.
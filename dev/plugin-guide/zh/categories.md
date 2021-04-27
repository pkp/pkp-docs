---
title: Plugin Categories - Plugin Guide for OJS and OMP
---

# Plugin Categories

A plugin's category determines when it is loaded and in what ways it can modify the application. For example, a [block](#blocks) plugin can add a block of content to the sidebar in the reader-facing website. But it can't do anything else and won't be loaded on the backend.

Each plugin must extend one of the plugin category classes that exist in OJS and OMP. In the [Getting Started](./getting-started) tutorial, the Tutorial Example plugin extended the `GenericPlugin` class.

```php
import('lib.pkp.classes.plugins.GenericPlugin');
class TutorialExamplePlugin extends GenericPlugin {
  ...
}
```

A block plugin will extend the `BlockPlugin` class.

```php
import('lib.pkp.classes.plugins.BlockPlugin');
class TutorialBlockPlugin extends BlockPlugin {
  ...
}
```

Each plugin category class provides methods that must be implemented. For example, a [report](#reports) plugin extends the `ReportPlugin` class and implements the `ReportPlugin::display()` method to deliver a CSV file with the report contents.

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

Learn about each category below.

## Blocks

Block plugins provide content that can be displayed in the sidebar on any page. They require a template file.

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

The template file should include all of the HTML for your block.

```html
<div class="pkp_block block_madeBy">
  Made with ❤ by the Public Knowledge Project
</div>
```

Add a `getContents()` method to pass data to the template.

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

Block plugins can use any HTML code. However, if you want your block to blend in with other blocks provided by PKP, use the following markup.

```html
<div class="pkp_block">
    <span class="title"><!-- Add the title of your block here --></span>
    <div class="content">
    <!-- Add the main content for your block here -->
	</div>
</div>
```

## Import/Export

Import/export plugins provide tools for getting data into and out of OJS and OMP. They can be used when you are moving between our application and another platform to migrate users, submissions, back issues and more.

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

    // Get all submissions (or 5,000 if there are more than that)
    $submissions = Services::get('submissions')->getMany([
      'count' => 5000,
      'context' => $request->getContext()->getId(),
    ]);

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
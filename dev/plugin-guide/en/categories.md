---
title: Plugin Categories - Plugin Guide for OJS, OMP and OPS
book: dev-plugin-guide
version: 3.5
---

# Plugin Categories

A plugin's category determines when it is loaded and how it can modify the application. For example, a [block](#blocks) plugin can add a block of content to the sidebar in the reader-facing website. But it can't do anything else and won't be loaded on the backend.

Each plugin must extend one of the plugin category classes. In the [Getting Started](./getting-started) tutorial, the Tutorial Example plugin extended the `GenericPlugin` class.

```php
namespace APP\plugins\generic\tutorialExample;

use PKP\plugins\GenericPlugin;

class TutorialExamplePlugin extends GenericPlugin
{
    ...
}
```

A block plugin will extend the `BlockPlugin` class.

```php
namespace APP\plugins\blocks\tutorialBlock;

use PKP\plugins\BlockPlugin;

class TutorialBlockPlugin extends BlockPlugin
{
    ...
}
```

Each plugin category class provides methods that must be implemented. For example, a [report](#reports) plugin extends the `ReportPlugin` class and implements the `ReportPlugin::display()` method to deliver a CSV file with the report contents.

```php
namespace APP\plugins\reports\tutorialExample;

use PKP\plugins\ReportPlugin;

class TutorialExamplePlugin extends ReportPlugin
{
    public function display($args, $request)
    {
        header('content-type: text/comma-separated-values');
        header('content-disposition: attachment; filename=reviews.csv');
        $fp = fopen('php://output', 'wt');
        fputcsv($fp, [/* the review details in the report */]);
        fclose($fp);
    }
}
```

## Blocks {#blocks}

Block plugins provide content that can be displayed in the sidebar on any page of the public-facing website. They require a template file.

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
│     ├── MadeByPlugin.php
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
namespace APP\plugins\blocks\madeBy;

use PKP\plugins\BlockPlugin;

class MadeByPlugin extends BlockPlugin
{
    public function getContents($templateMgr, $request = null)
    {
        $templateMgr->assign([
          'madeByText' => 'Made with ❤ by the Public Knowledge Project',
        ]);

        return parent::getContents($templateMgr, $request);
    }
}
```

```html
<div class="pkp_block block_madeBy">
  {$madeByText|escape}
</div>
```

Block plugins can use any HTML code. However, themes provided by PKP expect blocks to use the following markup.

```html
<div class="pkp_block">
	<h2 class="title">
    <!-- Add the title of your block here -->
  </h2>
	<div class="content">
    <!-- Add the main content for your block here -->
	</div>
</div>
```

## Import/Export {#import-export}

> View an [example import/export plugin](https://github.com/pkp/exampleImportExport).
{:.notice}

Import/export plugins provide tools for getting data into and out of OJS, OMP, and OPS. They can be used when you are moving between our application and another platform to migrate users, submissions, back issues and more.


Each import/export plugin can be run on the command line.

```
$ php tools/importExport.php ExampleImportExportPlugin import filename.csv
```

Use the `{plugin_url ...}` smarty function in the template to submit a form to one of the import or export paths.

```
<form method="POST" action="{plugin_url path="exportAll"}">
  <button type="submit">Export All</button>
</form>
```

Check the `path` to detect when the form is submitted.

```php
namespace APP\plugins\importexport\exampleImportExport;

use PKP\plugins\ImportExportPlugin;

class ExampleImportExportPlugin extends ImportExportPlugin
{
    // ...

    public function display($args, $request)
    {
        parent::display($args, $request);

        $path = array_shift($args);

        if ($path === 'exportAll') {
            // do something
        }
    }
}
```

## Reports {#reports}

> Reports can return any file format, but they usually generate a CSV file for use in spreadsheet software.
{:.notice}

Report plugins provide a simple interface for generating a file download. Reports may be generated for article usage statistics, reviewers or anything you want.

Report plugins extend the `ReportPlugin` class and implement the `display()` method.

```php
namespace APP\plugins\reports\exampleReport;

use APP\submission\Submission;
use PKP\plugins\ReportPlugin;

class ExampleReportPlugin extends ReportPlugin
{
    public function display($args, $request) {

        // Get the first 100 submissions
        $submissions = Repo::submission()
            ->getCollector()
            ->filterByContextIds([$context->getId()])
            ->limit(100)
            ->getMany();

        // Stream to a CSV file
        header('content-type: text/comma-separated-values');
        header('content-disposition: attachment; filename=articles-' . date('Ymd') . '.csv');
        $fp = fopen('php://output', 'wt');
        fputcsv($fp, ['ID', 'Title']);
        /** @var Submission $submission */
        foreach ($submissions as $submission) {
            fputcsv($fp, [
                $submission->getId(),
                $submission->getCurrentPublication()->getLocalizedTitle()
            ]);
        }
        fclose($fp);
    }
}
```

## Themes {#themes}

Themes control the design and layout of a journal, press or preprint server. Read the [Theming Guide](/pkp-theming-guide/en) to learn how to build your own themes.

## Generic {#generic}

Generic plugins are loaded with every request. They hook into the application early in the [Request Lifecycle](/dev/documentation/en/architecture-request) and can be used to modify almost everything.

> **New in 3.5:** To extend the editorial backend UI with Vue.js components, see [Extending Backend UI with Vue.js](./examples-backend-ui).
{:.tip}

Generic plugins use [Hooks](/dev/documentation/en/utilities-hooks) to intervene in the application. Hooks should be added in a plugin's `register()` method.

> Always check if the plugin is enabled before adding a hook. Otherwise, your plugin will run even when it has been disabled.
{:.warning}

```php
namespace APP\plugins\generic\tutorialExample;

use PKP\plugins\GenericPlugin;
use PKP\plugins\Hook;

class TutorialExamplePlugin extends GenericPlugin
{
    public function register($category, $path, $mainContextId = null)
    {
        $success = parent::register($category, $path);

        if ($success && $this->getEnabled()) {
            Hook::add('Example::hookName', [$this, 'doSomething']);
        }

        return $success;
    }

    public function doSomething(string $hookName, array $args): ?bool
    {
        // Do something...

        return false;
    }
}
```

Generic plugins are very powerful and can use any hook in the application. Look at the [examples](./examples) for ideas and learn about the most [common hooks](/dev/documentation/en/utilities-hooks#common-hooks).

## Other {#other}

Other plugin categories are not often used. The best way to learn about them is to read the source code of one of the existing plugins. These categories include:

- `auth` plugins allow you to authorize and synchronize user accounts with a third-party source.
- `gateways` plugins allow you to add a new URL and respond to requests to that URL.
- `metadata` plugins implement a description of a metadata format.
- `oaiMetadataFormats` plugins add a metadata format to the application's OAI endpoint.
- `paymethod` plugins allow you to implement your own payment handling when using subscription and article fees.
- `pubIds` plugins allow you to add support for publication identifiers like URNs.

---

Learn how to [translate your plugin](./translation) so that it can be used by many journals.

---
title: Pages - Frontend - Technical Documentation - OJS/OMP
---

# Pages

Every request to a [PageHandler](./architecture-handlers#page-handlers) returns the HTML code for a complete webpage. The `TemplateManager` is used to load and render a template.

```php
class SettingsHandler extends Handler {
    public function distribution(Array $args, Request $request) {
        $templateMgr = TemplateManager::getManager($request);
        return $templateMgr->display('path/to/template.tpl');
    }
}
```

Templates are located in the `/templates` and `lib/pkp/templates` directories. If a template does not exist in the application directory it will look for the equivalent template in the PKP library.

```php
class SettingsHandler extends Handler {
    public function distribution(Array $args, Request $request) {
        $templateMgr = TemplateManager::getManager($request);

        // Searches for a template in the following directories:
        // - templates/distribution.tpl
        // - lib/pkp/templates/distribution.tpl
        return $templateMgr->display('distribution.tpl');
    }
}
```

A `PageHandler` for the editorial backend must set a class property to identify it as a backend page. This ensures that all page dependencies are loaded.


```php
class SettingsHandler extends Handler {

    public $_isBackendPage = true;

}
```

Every page template for the editorial backend must use the backend layout to ensure the correct header, navigation menu and page layout are loaded.

```html
{extends file="layouts/backend.tpl"}
{block name="page"}
	<!-- Add page content here -->
{/block}
```

## Smarty

Page templates are rendered by the [Smarty](https://www.smarty.net/) templating engine. The `TemplateManager` extends the `Smarty` class so any of Smarty's methods, such as `assign`, can be used.

Assign variables to a template in the `PageHandler`.

```php
class SettingsHandler extends Handler {
    public function distribution(Array $args, Request $request) {
        $templateMgr = TemplateManager::getManager($request);
        $templateMgr->assign([
            'description' => 'This is an example description.',
        ]);
        return $templateMgr->display('path/to/template.tpl');
    }
}
```

Use the variable in the template.

```html
{extends file="layouts/backend.tpl"}

{block name="page"}
    <p>{$description}</p>
{/block}
```

Use conditional expressions and loops.

```php
class SettingsHandler extends Handler {
    public function distribution(Array $args, Request $request) {
        $templateMgr = TemplateManager::getManager($request);
        $templateMgr->assign([
            'items' => ['a', 'b', 'c'],
        ]);
        return $templateMgr->display('path/to/template.tpl');
    }
}
```

```html
{extends file="layouts/backend.tpl"}

{block name="page"}
    {if count($items)}
        {foreach from=$items item="letter"}
            <p>{$letter}</p>
        {/foreach}
    {/if}
{/block}
```

Use the `{url}` function to construct a URL to one of the application's pages.

```html
<-- Generates the following URL http://.../<context-path>/management/settings/website -->
<a href="{url page="management" op="settings" path="website"}">
    Website Settings
</a>
```

Use the `{translate}` function to get a localized string.

```html
<button>{translate key="common.save"}</button>
```

It is sometimes necessary to use a variable inside of a localized string.

```html
<span>{translate key="common.lessThan value="29"}</span><!--
    localized string: "{$value} or less"
    result: 29 or less
-->```

Use the `$smarty` variable to access a PHP constant.

```php
define('STATUS_PUBLISHED', 3);
```
```html
{if $submissionStatus === $smarty.const.STATUS_PUBLISHED}
    ✔ This submission is published
{/if}
```

Use the `date_format` modifier to transform a date into the configured format.

```html
<!-- Typically a numeric representation, such as 2020-10-03 -->
<p>{$publishedDate|date_format:$dateFormatShort}</p>

<!-- Typically a phrase, such as October 3, 2020 -->
<p>{$publishedDate|date_format:$dateFormatLong}</p>
```

## Security and Sanitization

Any information that comes from a user must be sanitized to prevent malicious attacks. Use the `escape` modifier to sanitize values such as titles and names.

```html
<p>{$title|escape}</p>
```

Information that includes HTML should use the `strip_unsafe_html` modifier. This will sanitize the value but preserve the HTML tags.

```html
{$abstract|strip_unsafe_html}
```

## Page Title

Every page in the editorial backend should set the page title.

```php
class SettingsHandler extends Handler {
    public function distribution(Array $args, Request $request) {
        $templateMgr = TemplateManager::getManager($request);
        $templateMgr->assign([
            'pageTitle' => __('manager.distribution.title'),
        ]);
        return $templateMgr->display('distribution.tpl');
    }
}
```

Even if no title appears on the page, the `pageTitle` must be set. It will be used in the `<title>` tag and appear in the name of the tab in a browser.

## Accessing Template Variables

It is sometimes necessary to retrieve a variable that has already been assigned to the template. Use `getTemplateVars` to retrieve the variable.

```php
$status = $templateMgr->getTemplateVars('status');
$templateMgr->assign([
    'isPublished' => $status === STATUS_PUBLISHED
]);
```

---

Once a template is rendered on the server it is passed to the user's browser, where it is controlled by a Vue.js component. Learn how to [use the UI Library](./frontend-ui-library) in the next chapter.

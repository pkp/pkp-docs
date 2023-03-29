---
book: dev-documentation
version: 3.4
title: Pages - Frontend - Technical Documentation - OJS|OMP|OPS
---

# Pages

Every request to a [PageHandler](./architecture-handlers#page-handlers) returns the HTML code for a complete webpage. The `TemplateManager` is used to load and render a template.

```php
use APP\template\TemplateManager;

import('classes.handler.Handler');

class SettingsHandler extends Handler
{
    public function distribution(array $args, Request $request)
    {
        $templateMgr = TemplateManager::getManager($request);
        return $templateMgr->display('path/to/template.tpl');
    }
}
```

Templates are located in the `/templates` and `lib/pkp/templates` directories. If a template does not exist in the application directory it will look for the equivalent template in the PKP library.

```php
use APP\template\TemplateManager;

import('classes.handler.Handler');

class SettingsHandler extends Handler
{
    public function distribution(array $args, Request $request)
    {
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
import('classes.handler.Handler');

class SettingsHandler extends Handler
{

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
use APP\template\TemplateManager;

import('classes.handler.Handler');

class SettingsHandler extends Handler
{
    public function distribution(array $args, Request $request)
    {
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
use APP\template\TemplateManager;

import('classes.handler.Handler');

class SettingsHandler extends Handler
{
    public function distribution(array $args, Request $request)
    {
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
<span>{translate key="common.lessThan value="29"}</span>
<!--
	localized string: "{$value} or less"
	result: 29 or less
-->
```

Use fully-qualified class names to access class constants.

```html
{if $status === \APP\submission\Submission::STATUS_PUBLISHED}
	✔ Published
{/if}
```

Use the `$smarty` variable to access a global PHP constant.

```php
define('WORKFLOW_STAGE_ID_SUBMISSION', 1);
```
```html
{if $stageId === $smarty.const.WORKFLOW_STAGE_ID_SUBMISSION}
	Stage: Submission
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
use APP\template\TemplateManager;

import('classes.handler.Handler');

class SettingsHandler extends Handler
{
    public function distribution(array $args, Request $request)
    {
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

## Containers

> Containers should never be used unless there is no alternative. They are a temporary solution to migrating away from the old JavaScript framework.
{:.warning}

In rare cases, it may be necessary to initialize a root component in a template that does not support the `Page` component. This is the case when content is loaded into a modal in the older JS framework. Use the `Container` component to mount a second instance of Vue.js.

In the example below, the `Container` component treats the content of the `#example-container-{$uuid}` DOM element as the template. It creates a `<pkp-form>` component and passes the value of `this.components.masthead` as props.

```html
{assign var="uuid" value=""|uniqid|escape}
<div id="example-container-{$uuid}">
	<pkp-form
		v-bind="components.masthead"
		@set="set"
	/>
</div>
<script type="text/javascript">
	pkp.registry.init('example-container-{$uuid}', 'Container', {$exampleData|json_encode});
</script>
```

This is the same as mounting a Vue app to the DOM as recommended in Vue's documentation.

```js
var app = new Vue({
	...Container,
	el: '#example-container-<uuid>',
	data: exampleContainerDataInJsonFormat
})
```

We mount Vue apps using `pkp.registry.init` to make sure that Vue components mounted inside of our legacy JavaScript toolkit do not cause memory leaks.

---

Once a template is rendered on the server it is passed to the user's browser, where it is controlled by a Vue.js component. Learn how to [use the UI Library](./frontend-ui-library) in the next chapter.

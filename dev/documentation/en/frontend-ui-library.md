---
book: dev-documentation
version: 3.5
title: UI Library - Frontend - Technical Documentation - OJS|OMP|OPS
---

# UI Library

> Read and understand the essentials section of the [Vue.js guide](https://vuejs.org/guide/introduction.html) before continuing.
{:.tip}


> **New in 3.5**: Documentation for the frontend development of the editorial interface is now available in [our new UI Library](https://stable-3_5_0--6555d3db80418bb1681b8b17.chromatic.com/?path=/) built with [Storybook](https://storybook.js.org/), along with documentation for our components and composables. Please follow it when building new features. 
{:.tip}

## Page Component

The [Page component](/dev/ui-library/dev/#/component/Page) is the root component on a page that manages data and passes props down to child components. Whenever a backend template is used, a `Page` component is automatically mounted to the DOM. This means that global components can be used without any additional configuration.

```html
{extends file="layouts/backend.tpl"}

{block name="page"}
	<badge :is-success="true">Published</badge>
{/block}
```

> **New in 3.5**: For new pages in 3.5, the Page component is only responsible for rendering the top bar, navigation, and the root page component for the given page. Once you have that set up, review [our UI documentation](https://stable-3_5_0--6555d3db80418bb1681b8b17.chromatic.com/?path=/). Example for a dashboard page:
{:.tip}

```html
{extends file="layouts/backend.tpl"}
{block name="page"}
	<dashboard-page v-bind="pageInitConfig" />
{/block}
```


> **Mixing Smarty and Vue.js templates is deprecated** and should not be used to build new features. The documentation provided here is for developers who need to modify an existing page using Smarty.
{:.warning}

Smarty syntax can be mixed with components from the UI Library. The template below shows a badge when a submission is published.

```html
{extends file="layouts/backend.tpl"}

{block name="page"}
	{if $isPublished}
		<badge :is-success="true">Published</badge>
	{/if}
{/block}
```

Sometimes the publication status will change before the Smarty template is reloaded. When actions are taken in the browser that change the publication status, we need to show or hide the `<badge>` by using state.

## State

> **New in 3.5** State is now used only to pass initial configuration to the Vue.js component responsible for rendering the page and managing its own state. Currently used mainly to pass the form configurations, which are still being constructed in PHP. Other data should ideally be fetched from the API.
Using the following name convention to pass the configuration to the new page:
{:.tip}

```php
	$templateMgr->setState([
		'pageInitConfig' => [
			'selectRevisionDecisionForm' => $selectRevisionDecisionForm->getConfig(),
			'selectRevisionRecommendationForm' => $selectRevisionRecommendationForm->getConfig(),
		]
	]);
```

> The documentation below is for developers who need to modify an existing page using Smarty.
{:.warning}


Data that may change after the page is loaded is called state. For example, when an editor publishes or unpublishes a submission the template needs to update to reflect the new submission status.

> State is another name for the `data` properties of the root Vue.js component.
{:.tip}

Initialize state on the server by using the `setState` method to pass data to the `Page` component.

```php
use APP\submission\Submission;
use APP\template\TemplateManager;

import('classes.handler.Handler');

class WorkflowHandler extends Handler
{
    public function distribution(array $args, Request $request)
	{
        $templateMgr = TemplateManager::getManager($request);
        $templateMgr->setState([
            'isPublished' => $publication->getData('status') === Submission::STATUS_PUBLISHED,
        ]);
        return $templateMgr->display('/workflow.tpl');
    }
}
```

State can be accessed in templates by using the [Vue.js template syntax](https://vuejs.org/v2/guide/syntax.html). The example below will show or hide the `<badge>` when the `isPublished` state changes.

```html
{extends file="layouts/backend.tpl"}

{block name="page"}
	<badge
		v-if="isPublished"
		:is-success="true"
	>
		Published
	</badge>
{/block}
```

Use the Vue.js dev tools for [Firefox](https://addons.mozilla.org/en-GB/firefox/addon/vue-js-devtools/) or [Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en) to toggle state and see how the template changes.

<figure class="video_container">
  <video controls="true" allowfullscreen="true">
    <source src="../img/state.mp4" type="video/mp4">
  </video>
  <figcaption>Video showing changing state in the browser.</figcaption>
</figure>

State should only be used when data changes the UI must update to reflect that change without reloading the page. It is not always easy to determine which data should be managed by Vue.js as state and which data should be managed by Smarty.

To help make the distinction, consider a city street. At any given moment, the number and location of cars on the street will change. But the boundaries of the street and the direction of travel will not.

In this example, the number and location of cars are state and should be passed to the template using the `setState` method. The boundaries and the direction of travel are not and can be passed to the template using the `assign` method.

## State Management for Complex Components

The `Page` component sometimes manages state that should be passed down to a complex component. A single `Page` may manage many complex components such as [Forms](/dev/ui-library/dev/#/component/Form) and [ListPanels](/dev/ui-library/dev/#/component/ListPanel) which need to update the state after making requests to the API.

> The convention described below is a lightweight alternative to state management libraries such as [Vuex](https://vuex.vuejs.org/).
{:.tip}

State is passed down to these components as `props`.

```php
use APP\template\TemplateManager;

import('classes.handler.Handler');

class WorkflowHandler extends Handler
{
	public function distribution(array $args, Request $request)
	{
		$templateMgr = TemplateManager::getManager($request);
		$templateMgr->setState([
			'formId' => 'exampleForm',
			'fields' => [...],
		]);
		return $templateMgr->display('/workflow.tpl');
	}
}
```
```html
{extends file="layouts/backend.tpl"}

{block name="page"}
	<pkp-form
		:id="formId"
		:fields="fields"
		...
	/>
{/block}
```

This leads to a problem when a field's value changes. The `Form` component can not modify that value because Vue.js enforces a strict [one-way data flow](https://vuejs.org/v2/guide/components-props.html#One-Way-Data-Flow).

> Read this guide on [organizing components](https://vuejs.org/v2/guide/components.html#Organizing-Components) to understand how props and events are used in Vue.js to manage state across multiple components.
{:.notice}

In such cases, `Page` components make use of events to manage state for these components. The component's props are added to a `components` object in the state.

```php
use APP\template\TemplateManager;

import('classes.handler.Handler');

class WorkflowHandler extends Handler
{
	public function distribution(array $args, Request $request)
	{
		$templateMgr = TemplateManager::getManager($request);
		$templateMgr->setState([
			'components' => [
				'exampleForm' => [
					'fields' => [...],
				],
			],
		]);
		return $templateMgr->display('/workflow.tpl');
	}
}
```

The props are bound to the component in the template and the `Page` component listens for a `set` event.

```html
{extends file="layouts/backend.tpl"}

{block name="page"}
	<pkp-form
		v-bind="components.exampleForm"
		@set="set"
	/>
{/block}
```

When the child component needs to update its props, it fires the `set` event with the following signature.

```js
const newData = {
	fields: [...],
};
this.$emit('set', 'exampleForm', newData);
```

The `Page` component will locate the component's props and update them with the `newData`. In order for this to work, the event must pass the object key, `exampleForm`, as the second argument in the `$emit` function.

The following example shows how the `set` method in a `Page` component updates a component's data.

```js
set(key, newData) {
	if (!this.components[key]) {
		return;
	}
	this.components[key] = {
		...this.components[key],
		...newData
	};
}
```

## Extend the Page Component

It is often necessary to extend the `Page` component to provide additional functionality for a page. The example below shows the `SettingsPage` component, which adds or removes a navigation menu item when the announcements have been enabled or disabled.

```js
import Page from './Page.vue';

export default {
	name: 'SettingsPage',
	extends: Page,
	data() {
		return {
			announcementsLabel: '',
			announcementsUrl: ''
		};
	},
	mounted() {
		pkp.eventBus.$on('form-success', (formId, context) => {
			if (formId === pkp.const.FORM_ANNOUNCEMENT_SETTINGS) {
				let menu = {...this.menu};
				if (!context.enableAnnouncements) {
					delete menu.announcements;
				} else {
					menu.announcements = {
						name: 'Announcements',
						url: 'http://example.org/announcements'
					};
				}
				this.menu = menu;
			}
		});
	},
	destroyed() {
		pkp.eventBus.$off('form-success');
	}
};
```

Once a new page component has been created, it must be imported and registered in `js/load.js`.

```js
...
import SettingsPage from '@/components/Container/SettingsPage.vue';

window.pkp = Object.assign(PkpLoad, {
	controllers: {
		...
		SettingsPage
	}
});
```

Finally, the `PageHandler` must assign the `pageComponent` variable to the template and pass the correct state

```php
use APP\template\TemplateManager;

$templateMgr = TemplateManager::getManager($request);
$templateMgr->assign([
    'pageComponent' => 'SettingsPage',
]);
$templateMgr->setState([
    'announcementLabel' => __('announcement.announcements'),
    'announcementsUrl' => $request->getRouter()->url($request, null, 'management', 'settings', 'announcements'),
])
```

Consult the [UI Library](/dev/ui-library/dev/#/component/Page) for a list of available page components.

## Smarty and Vue.js

Smarty and Vue.js template syntax conflicts in some cases. This can cause errors that need to be worked around. For example, Smarty doesn't like self-closing tags for Vue.js components.

```html
<pkp-form :id="formId" />
```

Always use a closing tag in Smarty templates.

```html
<pkp-form :id="formId"></pkp-form>
```

Smarty templates are not case-sensitive, so camel-case prop and event names won't work for Vue.js components.

```html
<pkp-button
	:isWarning="true"
	@wasClicked="cancel"
>
	Cancel
</pkp-button>
```

Use kebab-case for all prop names and `:` for event names.

```html
<pkp-button
	:is-warning="true"
	@clicked:button="cancel"
>
	Cancel
</pkp-button>
```

Smarty templates use single brackets (`{` and `}`) for PHP variables and helper functions. This conflicts with the single brackets in Vue.js's scoped slot syntax.

```html
<li slot-scope="{item}">
	{% raw %}{{ item.name }}{% endraw %}
</li>
```

Use the Smarty helpers `{ldelim}` and `{rdelim}` instead of a single bracket.

```
<li slot-scope="{ldelim}item{rdelim}">
	{% raw %}{{ item.name }}{% endraw %}
</li>
```

The double bracket syntax in Vue.js templates (`{% raw %}{{ example }}{% endraw %}`) works without any changes.

## Reference

The [UI Library](/dev/ui-library/dev) provides a demo, technical specification and usage guidance for each component. It also provides important documentation on utilities such as the [event bus](/dev/ui-library/dev/#/pages/event-bus), [localization](/dev/ui-library/dev/#/pages/localization), and more.

---

The next chapter describes how to create and use [Forms](./frontend-forms).
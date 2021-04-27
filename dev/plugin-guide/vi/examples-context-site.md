---
title: Example - Managing Context and Site - Plugin Guide for OJS and OMP
---

# Managing Context and Site

OJS and OMP can be used to run more than one journal or press. We call each journal or press a context. Plugins are usually run within a context but some may run at the site-wide level. You should write your plugins to work whether they are being run at the context or site level.

You can always retrieve the current context from the `Request`.

```php
$context = Application::get()->getRequest()->getContext();
```

In site-wide pages, such as the admin settings or the site-wide journal index page, the context will be `null`.

```php
if ($context) {
  // The current request is for a journal or press
} else {
  // The current request is for a site-wide page
}
```

If your plugin supports a [settings page](./settings), settings must be saved separately for each context.

```php
$this->updateSetting($context->getId(), 'editorName', 'Daniel Barnes');
```

Use the `CONTEXT_SITE` constant to save settings to the site-wide level.

```php
if ($context) {
  $contextId = $context->getId();
} else {
  $contextId = CONTEXT_SITE;
}
$this->updateSetting($contextId, 'editorName', 'Daniel Barnes');
```

## Site-wide Plugins

Add the `isSitePlugin` method to enable the plugin's settings form in the site-wide plugins list.

```php
class TutorialExamplePlugin extends GenericPlugin {
  public function isSitePlugin() {
    return true;
  }
}
```

Site-wide plugins can also be enabled, disabled and configured for each context.

---

View more [examples](./examples).
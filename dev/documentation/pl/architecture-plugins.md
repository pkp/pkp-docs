---
title: Plugins - Technical Documentation - OJS|OMP|OPS
---

# Plugins

Plugins are independent modules that can be enabled and disabled to modify the application.

> This chapter describes how to load plugins in the main application. Read the [Plugin Guide](/dev/plugin-guide/en) to learn how to build your own plugins. 
> 
> {:.notice}

## Load Plugins

Plugins are divided into categories and loaded when that category is needed. For example, Block Plugins provide sidebar blocks and are only loaded on the reader-facing site.

Load all enabled plugins of the `block` category.

```php
$blockPlugins = PluginRegistry::loadCategory('blocks', true);
```

Loading plugins is resource intensive and should not be done more than once in a request. If a plugin category has been loaded, get the plugins from cache.

```php
$blockPlugins = PluginRegistry::getPlugins('blocks');
```

In rare cases, you may want to retrieve all installed plugins even if they are not enabled.

```php
$blockPlugins = PluginRegistry::loadCategory('blocks', false);
```

You can get a specific plugin.

```php
$submissionBlockPlugin = PluginRegistry::getPlugin('blocks', 'makeSubmission');
```

If the plugin hasn't been loaded, you must load it first.

```php
$submissionBlockPlugin = PluginRegistry::loadPlugin('blocks', 'makeSubmission');
```

Plugins in the Generic category are loaded with every request and do not need to be loaded before use.

## Hooks

Generic plugins use Hooks to modify the application behavior. Care should be taken to ensure that hooks are available at key parts of the [Request Lifecycle](./architecture-request) to ensure that the application can be modified safely by third-party plugins.

---

The next section moves on to the application frontend. Learn how to [deliver HTML to the browser and build interactive interfaces](./architecture-frontend).
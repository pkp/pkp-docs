---
title: Translation - Technical Documentation - OJS|OMP|OPS
---

# Translation

PKP's applications support multilingual publishing. This means the application can be translated into any language. It also means that each journal, press or preprint server can publish material in more than one language. This chapter will describe how to use translations and work with multilingual data.

> This guide describes how to work with translations when coding for PKP applications. Visit the [translating guide](./translating) to create or edit a translation of PKP software. 
> 
> {:.notice}

## Translations

Every word or phrase used in the application is stored in a `.po` file. The `.po` files are stored in a `locales` directory and look like the example below.

```
# locale/en_US/common.po

msgid "common.cancel"
msgstr "Cancel"

msgid "common.cancelled"
msgstr "Cancelled"

msgid "common.warning"
msgstr "Warning"

msgid "common.error"
msgstr "Error"
```

Use the `__()` method to get a string from a locale file.

```php
$button = __('common.cancel');
```

Locale strings can include variables by using the `{$param}` syntax.

```
msgid "common.completed.date"
msgstr "Completed: {$dateCompleted}"
```

```php
$label = __('common.completed.date', ['dateCompleted' => $dateCompleted]);
```

> Never combine two localized phrases together. Every language has its own grammar and the order of words and sentences may change. Instead of `"View: " . $name` include the param in the localized string: `"View: {$name}"`. 
> 
> {:.warning}

Locale strings are divided into separate files and each file is loaded when it is needed. If the application is asked to translate a locale key that is contained within a locale file that has not been loaded, it will return the locale key untranslated and wrapped in `##` so that it can be identified and fixed.

```php
echo __('admin.hostedContexts');
// result --> ##admin.hostedContexts##
```

Use the `AppLocale` class to load the required locale file.

```php
AppLocale::requireComponents(LOCALE_COMPONENT_PKP_ADMIN, LOCALE_COMPONENT_APP_ADMIN);
echo __('admin.hostedContexts');
// result --> Hosted Journals
```

Use the `{translate}` function when working with a Smarty template.

```html
{translate key="common.cancel"}
```

Pass named parameters to the `{translate}` function to replace variables in the locale string.

```html
{translate key="common.completed.date" dateCompleted="$dateCompleted"}
```

## Multilingual Data

A journal, press or preprint server may publish in more than one language. For that reason, all data objects and forms must be built to accept content in more than one language.

> The Entities chapter describes how to [get multilingual data in the DataObject class](/dev/documentation/en/architecture-entities#dataobject-class) and how to [define multilingual properties in the schema](/dev/documentation/en/architecture-entities#multilingual). 
> 
> {:.notice}

Each journal, press, or preprint server can enable a locale in the UI, forms and submissions.

### Supported Locales

Supported locales indicate languages that the reader can switch to when viewing the published website. This only effects the overall site and should not effect context settings forms or any published material.

```php
$locales = $context->getSupportedLocales();
```

### Supported Form Locales

Supported form locales indicate languages that are supported for details about the journal, press or preprint server, as well as announcements. Forms should support these languages whenever they manage this data.

```php
$locales = $context->getSupportedFormLocales();
```

### Supported Submission Locales

Supported submission locales include languages for which the journal, press or preprint server publishes material. This means that a submission can be made and published in any of these languages.

```php
$locales = $context->getSupportedSubmissionLocales();
```

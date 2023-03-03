---
book: dev-documentation
version: 3.4
title: Translation - Technical Documentation - OJS|OMP|OPS
---

# Translation

PKP's applications support multilingual publishing. This means the application can be translated into any language. It also means that each journal, press or preprint server can publish material in more than one language. This chapter will describe how to use translations and work with multilingual data.

> This guide describes how to work with translations when coding for PKP applications. Visit the [translating guide](./translating) to create or edit a translation of PKP software.
{:.notice}

## Translations

Every word or phrase used in the application is stored in a `.po` file. The following example shows part of the `locale/en_US/common.po` file.

```
msgid "common.cancel"
msgstr "Cancel"

msgid "common.cancelled"
msgstr "Cancelled"
```

Use the `__()` function to get a string from the current locale.

```php
$button = __('common.cancel');
```

Locale strings can include variables by using the `{$example}` syntax.

```
msgid "common.completed.date"
msgstr "Completed: {$dateCompleted}"
```

```php
$label = __('common.completed.date', ['dateCompleted' => $dateCompleted]);
```

Get a translation for a different locale from the current locale.

```php
$cancelInItalian = __('common.cancel', [], 'it_IT');
```

Never combine two localized phrases together. Every language has its own grammar and the order of words and sentences may change. Always include the param in the localized string:

```
msgid "view"
msgstr "View"

msgid "view.withName"
msgstr "View: {$name}"
```

```php
// Do this:
$goodLabel = __('view.example', ['name' => $name]);

// Do not do this:
$badLabel = __('view') . ": $name";
```

### Templates

Use the `{translate}` function when working with a Smarty template.

```
{translate key="common.cancel"}
```

Pass named parameters to the `{translate}` function to replace variables in the locale string.

```html
{translate key="common.completed.date" dateCompleted="$dateCompleted"}
```

Use the `translate` modifier if you have a variable that contains a locale key.

```
{assign var="example" value="common.completed.date"}
{$example|translate:dateCompleted:$dateCompleted}
```

### Plurals

Use multiple `msgstr` entries and the `__p()` method to handle plural forms.

```
msgid "example.pendingMessages"
msgid_plural "example.pendingMessages"
msgstr[0] "You have one message pending."
msgstr[1] "You have {$messageCount} messages pending."
```

```php
$example = __p(
    'common.pendingMessages',
    1,
    ['messageCount' => 1]
);
// $example = You have one message pending.

$submissions = __p(
    'common.pendingMessages',
    10,
    ['messageCount' => 10]
);
// $example = You have 10 messages pending.
```

Use the `count` parameter in templates.

```
{translate key="common.pendingMessages" count="10" messageCount="10"}
```

Always pass the correct number to the `__p()` method, because every language has its own rules for plural forms. For example, Polish has 3 variants:

```
msgid "comments"
msgid_plural "comments"
msgstr[0] "%d Komentarz"
msgstr[1] "%d Komentarze"
msgstr[2] "%d Komentarzy"
```

## Multilingual Data

A journal, press or preprint server may publish in more than one language. For that reason, all data objects and forms must accept content in more than one language.

> The Entities chapter describes how to [get multilingual data in the DataObject class](/dev/documentation/en/architecture-entities#dataobject-class) and how to [define multilingual properties in the schema](/dev/documentation/en/architecture-entities#multilingual).
{:.notice}

Each journal, press, or preprint server can enable a locale in the UI, forms and submissions.

### Supported Locales

Supported locales indicate languages that the reader can switch to when viewing the published website. This only affects the public site and should not affect context settings forms or the published works themselves.

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

### Primary Locale

The primary locale indicates the main locale of the journal, press or preprint server.

```php
$primaryLocale = $context->getPrimaryLocale();
```

## Working with Locales

`PKP\facades\Locale` implement's Laravel's [Translator](https://github.com/illuminate/contracts/blob/9.x/Translation/Translator.php) contract. Get the active locale for the current user.

```php
use PKP\facades\Locale;

$locale = Locale::getLocale();

// result: "en_US"
```

Change the active locale.

```php
use PKP\facades\Locale;

Locale::setLocale('en_US');
```

Get information about a locale, such as its display name, country, language, script, and direction. The following example shows the name of the English language in the German language.

```php
use PKP\facades\Locale;

$localeMetadata = Locale::getMetadata('en_US');
echo $localeMetadata->getDisplayName('de_DE');

// result: Englisch
```

Get all locales supported by the application.

```php
use PKP\facades\Locale;

$locales = Locale::getLocales();
foreach ($locales as $locale => $metadata) {
    if ($metadata->isRightToLeft()) {
        echo "{$locale} uses a right-to-left script";
    }
}

// result: ar_IQ uses a right-to-left-script
```

Get the default locale of the application instance.

```php
use PKP\facades\Locale;

$defaultLocale = Locale::getDefaultLocale();
```

The `Locale` facade provides access to localized lists of countries, currencies, languages and scripts, based on [sokil/php-isocodes](https://github.com/sokil/php-isocodes#usage).

```php
use PKP\facades\Locale;
$countries = Locale::getCountries();
$currencies = Locale::getCurrencies();
$languages = Locale::getLanguages();
$scripts = Locale::getScripts();
```

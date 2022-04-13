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

Every word or phrase used in the application is stored in a `.po` file. The `.po` files are stored in a `locales` directory and look like the example below.

```po
# locale/en_US/common.po

msgid "common.cancel"
msgstr "Cancel"

msgid "common.cancelled"
msgstr "Cancelled"

msgid "common.pendingMessages"
msgid_plural "common.pendingMessages"
msgstr[0] "You have one message pending."
msgstr[1] "You have {$messageCount} messages pending."
```

The latest example showed us how to setup a pluralized translation for an English locale, other languages however might have more variants according to the quantity, such as Polish, which has 3 variants:

```po
msgid "comments"
msgid_plural "comments"
msgstr[0] "%d Komentarz"
msgstr[1] "%d Komentarze"
msgstr[2] "%d Komentarzy"
```

Use the `__()` function to get a string from a locale file.

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

Use the `__p()` function to work with pluralized locale keys.

```php
// You have one message pending.
$submissions = __p('common.pendingMessages', 1, ['messageCount' => 1]);
// You have 10 messages pending.
$submissions = __p('common.pendingMessages', 10, ['messageCount' => 10]);
```

Both the `__()` and `__p()` support specifying a different locale than the current.

```php
$cancelInItalian = __('common.cancel', [], 'it_IT');
```

Never combine two localized phrases together. Every language has its own grammar and the order of words and sentences may change. Always include the param in the localized string:

```po
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

Use the `{translate}` function when working with a Smarty template.

```html
Simple translation:
{translate key="common.cancel"}

Pluralized translation requires the count parameter:
{translate key="common.pendingMessages" count="10" messageCount="10"}
```

Pass named parameters to the `{translate}` function to replace variables in the locale string.

```html
{translate key="common.completed.date" dateCompleted="$dateCompleted"}
```

Use the `translate` modifier if you have a variable that keeps a locale key.

```
{$variableHoldingPluralizedLocaleKey|translate:count:10:param:10}
```

## Multilingual Data

A journal, press or preprint server may publish in more than one language. For that reason, all data objects and forms must be built to accept content in more than one language.

> The Entities chapter describes how to [get multilingual data in the DataObject class](/dev/documentation/en/architecture-entities#dataobject-class) and how to [define multilingual properties in the schema](/dev/documentation/en/architecture-entities#multilingual).
{:.notice}

Each journal, press, or preprint server can enable a locale in the UI, forms and submissions.

### Primary Locale

In a multilingual system, the primary locale indicates the main locale of the context.

```php
$primaryLocale = $context->getPrimaryLocale();
```

### Supported Locales

Supported locales indicate languages that the reader can switch to when viewing the published website. This only affects the overall site and should not affect context settings forms or any published material.

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

## Locale Conversion

PKP adopted a variation of the ISO/IEC 15897 format (without the `codeset` portion) to specify its locales, which is basically defined as `[language[_TERRITORY][@modifier]]` (e.g. `sr_RS@cyrillic`). When it's needed to convert between locale formats, the class `PKP\i18n\LocaleConversion` might be handy, it provides methods for the following formats: ISO 639-1, ISO 639-2b and ISO/IEC 15897.

```php
// en
$iso639_1 = PKP\i18n\LocaleConversion::getIso1FromLocale('en_US');
// pt_BR or pt_PT, due to the ambiguity the return will depend on the primary locale/supported locales of the journal
$iso15897 = PKP\i18n\LocaleConversion::getLocaleFrom3LetterIso('por');
```

## Other Localization Features

The PKP's locale class implements the [Laravel's Translator contract](https://github.com/illuminate/contracts/blob/9.x/Translation/Translator.php), therefore the methods get, choice, getLocale and setLocale are available:

```php
// Retrieves the current locale.
// On a first call, it will try to detect the locale selected by the user or fallback to the journal's primary locale
$locale = PKP\facades\Locale::getLocale();

// Sets the current locale
PKP\facades\Locale::setLocale('en_US');

// Retrieves a translation
$translation = PKP\facades\Locale::get('locale.key');

// Retrieves the translation for a pluralized locale key
$pluralizedTranslation = PKP\facades\Locale::choice('pluralized.locale.key', 123);
```

Query the metadata of a locale such as its display name, country, language, script, if it's a right-to-left language, and also how well translated it is.

```php
// Retrieves a `PKP\i18n\LocaleMetadata` instance
$metadata = PKP\facades\Locale::getMetadata('en_US');
$displayNameInGerman = $metadata->getDisplayName('de_DE');
$isWellTranslated = $metadata->isComplete();
```

List the locales

```php
// Retrieves a list of  available locales in the application with their metadata
$locales = PKP\facades\Locale::getLocales();
foreach ($locales as $locale => $metadata) {
    if ($metadata->isRightToLeft()) {
        echo "{$locale} uses a right-to-left script";
    }
}
```

```php
// Retrieves the default locale defined for the whole installation
$defaultLocale = PKP\facades\Locale::getDefaultLocale();
```

The class `PKP\i18n\Locale` also provides access to localized lists of countries, currencies, languages, and scripts. More details about the usage can be found here: [https://github.com/sokil/php-isocodes#usage](https://github.com/sokil/php-isocodes#usage).

```php
// Retrieves a list of localized countries with their metadata
$countries = PKP\facades\Locale::getCountries();

// Retrieves a list of localized currencies with their metadata
$currencies = PKP\facades\Locale::getCurrencies();

// Retrieves a list of localized languages with their metadata
$languages = PKP\facades\Locale::getLanguages();

// Retrieves a list of localized scripts with their metadata
$scripts = PKP\facades\Locale::getScripts();
```

# Common Template Variables

When a [Smarty](html-smarty.md) template is loaded, the OJS or OMP application passes a number of template variables which can be used to display data in the templates.

For example, the `/frontend/pages/article.tpl` template is loaded, it receives variables for displaying article details (`$article`), the issue the article appears in (`$issue`), the section the article is assigned to (`$section`) and the journal the article appears in (`$journal`).

Each frontend template file documents the variables that are passed to it in the header of that file with the `@uses` prefix.

```
{**
 * templates/frontend/pages/article.tpl
 *
 * Copyright (c) 2014-2016 Simon Fraser University Library
 * Copyright (c) 2003-2016 John Willinsky
 * Distributed under the GNU GPL v2. For full terms see the file docs/COPYING.
 *
 * @brief Display the page to view an article with all of it's details.
 *
 * @uses $article Article This article
 * @uses $issue Issue The issue this article is assigned to
 * @uses $section Section The journal section this article is assigned to
 * @uses $journal Journal The journal currently being viewed.
 *}
```

In addition to these documented variables, there are a number of variables which are received by all -- or almost all -- template files. This section will document many of the most common variables.

## Site, Journal and Locale

**`(Context|null) $currentContext`** is a reference to the current Journal or Press being viewed, and represents a PHP object of the class `Journal` or `Press`. It will be `null` if no journal is being viewed (ie - the site-wide index page).

You will also find `$currentJournal` and `$currentPress` variables for ease-of-use if you are building a theme for just one application.

**`(string) $siteTitle`**  is the localized title of the current Journal or Press, or the overall site index.

**`(string) $currentLocale`** is the locale (language) the site is currently being viewed in. You'll find an array of supported locales at `$supportedLocales`.

**`(string) $displayPageHeaderTitle`** is the name of the current Journal or Press, or the site name if no Journal or Press is being viewed.

**`(string) $displayPageHeaderLogo`** is the logo of the current Journal or Press, or the site logo if no Journal or Press is being viewed.

## Configuration

**`(string) $baseUrl`** provides the base site URL (`https://myjournal.com/index.php`). This can be used to construct reliable URLs.

**`(string) $primaryLocale`** is the primary locale (language) the site is configured for. You'll find an array of supported locales at `$supportedLocales`.

**`(string|null) $disableUserReg`** is a flag which indicates whether or not users can self-register on the site.

**`(string) $dateFormatTrunc`**, **`(string) $dateFormatShort`** and **`(string) $dateFormatLong`** provide the date formats defined in your application's configuration. These can be invoked to reformat machine-readable dates (`2016-11-26`) in Smarty templates: `{$article->getDatePublished()|date_format:$dateFormatShort}`

## Requests and Routing

**`(string) $requestedPage`** and **`(string) $requestedOp`** provide the Page and Operation of the current request. This is useful if a template is loaded on different pages but you'd like to modify the display depending on where it appears.

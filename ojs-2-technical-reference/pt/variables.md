# Variables

Template variables are generally assigned in the Page or Form class that calls the template. In addition, however, many variables are assigned by the `TemplateManager` class and are available to all templates:

- `defaultCharset`: the value of the “client_charset" setting from the [i18n] section of the `config.inc.php` configuration file
- `currentLocale`: The symbolic name of the current locale
- `baseUr`l: Base URL of the site, e.g. http://www.mylibrary.com
- `requestedPage`: The symbolic name of the requested page
- `pageTitle`: Default name of locale key of page title; this should be replaced with a more appropriate setting in the template
- `siteTitle`: If the user is currently browsing a page associated with a journal, this is the journal title; otherwise the site title from Site Configuration
- `publicFilesDir`: The URL to the currently applicable Public Files directory (See the section titled File Management)
- `pagePath`: Path of the requested page and operation, if applicable, prepended with a slash; e.g. /user/profile
- `currentUrl`: The full URL of the current page
- `dateFormatTrunc`: The value of the `date_format_trunc` parameter in the `[general]` section of the `config.inc.php` configuration file; used with the date_format Smarty function
- `dateFormatShort`: The value of the date_format_short parameter in the `[general]` section of the `config.inc.php` configuration file; used with the date_format Smarty function
- `dateFormatLong`: The value of the date_format_long parameter in the `[general]` section of the `config.inc.php` configuration file; used with the date_format Smarty function
- d`atetimeFormatShor`t: The value of the `datetime_format_short` parameter in the `[general]` section of the `config.inc.php` configuration file; used with the date_format Smarty function
- `datetimeFormatLong`: The value of the `datetime_format_long` parameter in the `[general]` section of the `config.inc.php` configuration file; used with the date_format Smarty function
- `currentLocale`: The name of the currently applicable locale; e.g. `en_US`
- `articleSearchByOptions`: Names of searchable fields used by the search feature in the sidebar and on the Search page
- `userSession`: The current Session object
- `isUserLoggedIn`: Boolean indicating whether or not the user is logged in
- `loggedInUsername`: The current user's username, if applicable
- `page_links`: The maximum number of page links to be displayed for a paged list within the current Journal or site context.
- `items_per_page`: The maximum number of items to display per page of a paged list within the current Journal or site context.

Additionally, if the user is browsing pages belonging to a particular journal, the following variables are available:

- `currentJournal`: The currently-applicable journal object (of the `Journal` class)
- `alternateLocale1`: First alternate locale (`alternateLocale2`) journal setting
- `alternateLocale2`: Second alternate locale (`alternateLocale1`) journal setting
- `navMenuItems`: Navigation items (`navItems`) journal setting
- `pageHeaderTitle`: Used by `templates/common/header.tpl` to display journal-specific information
- `pageHeaderLogo`: Used by `templates/common/header.tpl` to display journal-specific information
- `alternatePageHeader`: Used by `templates/common/header.tpl` to display journal-specific information
- `metaSearchDescription`: Current journal's description; used in meta tags
- `metaSearchKeywords`: Current journal's keywords; used in meta tags
- `metaCustomHeaders`: Current journal's custom headers, if defined; used in meta tags
- `stylesheets`: An array of stylesheets to include with the template
- `pageFooter`: Custom footer content to be displayed at the end of the page

If multiple languages are enabled, the following variables are set:

- `enableLanguageToggle`: Set to true when this feature is enabled
- `languageToggleLocales`: Array of selectable locales


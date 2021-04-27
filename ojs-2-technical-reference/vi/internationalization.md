# Internationalization

System internationalization is a critical feature for OJS 2.x; it has been designed without making assumptions about the language it will be presented in.

There is a primary XML document for each language of display, located in the locale directory in a subdirectory named after the locale; for example, the en_US locale information is located in the `locale/en_US/locale.xml` file.

This file contains a number of locale strings used by the User Interface (nearly all directly from the Smarty templates, although some strings are coded in the Page classes, for example).

These are invoked by Smarty templates with the `{translate key="[keyName]"}` directive (see the section titled User Interface for more information). Variable replacement is supported.

The system's locales are configured, installed and managed on the Languages page, available from Site Settings. The available locales list is assembled from the registry file `registry/locales.xml`.

In addition to the language-dependent `locale.xml` file, locale-specific data can be found in subdirectories of the `dbscripts/xml/data/locale` and `registry/locale` directories, once again named after the locale. For example, the XML file `dbscripts/xml/data/locale/en_US/email_templates_data.xml` contains all email template text for the `en_US` (United States English) locale.

All XML data uses UTF-8 encoding and as long as the back-end database is configured to properly handle special characters, they will be stored and displayed as entered.

OJS 2.x has limited support for simultaneous multiple locales for a single journal. For example, articles have a primary locale; however, titles and abstracts can have up to two additional locales.

Internationalization functions are provided by `classes/i18n/Locale.inc.php`. See also `classes/template/TemplateManager.inc.php` (part of the User Interface's support classes) for the implementation of template-based locale translation functions.


# Sitewide Language Settings


OJS is designed to be a multilingual system, allowing journals supporting a wide variety of languages to be hosted under a single site. The Site Administrator can specify the default language of the site and install additional locales to make other languages available for use by journals. Journal Managers can then manage their own language settings.

Additional language packages will typically be available for download from the Open Journal Systems [language page](https://pkp.sfu.ca/wiki/index.php?title=Translating_OxS#OJS_Languages) as user-contributed translations are received. These packages can be installed into an existing OJS system to make them available to journals.

To access your site's language settings, click the **Languages** link where you can subsequently manage any languages already installed, or download languages to install them.

Figure: Site Administrator Language Options


![Site Administrator Language Options](images/chapter4/languages.png)


The Languages page is divided into three sections: Language Settings, Manage Locales, and Download Locales.

The Download Locales section allows you to download new locales straight from the OJS website to your OJS install as they become available. To download locales, your server must be able to execute the [GNU tar utility](http://www.gnu.org/software/tar/), and must be able to modify the locale registry file (registry/filename.xml). Locales can always be downloaded and installed manually -- see the [online documentation](https://pkp.sfu.ca/wiki/index.php?title=OJS_Documentation) for more information.

The Manage Locales section allows you to install new locales, reload existing locales in case you have updated locale files, and uninstall locales if they are no longer necessary. To install a new locale, check the box next to the locale name and click the **Install Locale** button. If you have modified a previously installed locale and would like to reload it, click the **Reload** link. To remove the locale from the list of installed locales, click the **Uninstall Locale** link.

The Language Settings section allows you to enable locales to be used across the site as a whole, and also with journals. Locales that have been installed will appear in this section, with checkboxes next to their name. To enable locales to be available on-site, check the box next to their name and click the Save button. Users will then be able to choose the locale from the drop-down on the right sidebar on all general site pages; Journal Managers will also now have the option of for their journal (these locales will not be enabled at the journal level by default). to users on the site, check the box next to

You can also choose the site's primary locale -- this is the locale that users will first see the site in when first visiting the web site, and will be the default language for any hosted journal.


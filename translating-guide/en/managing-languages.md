---
book: translating-guide
version: 3.2
title: How to Manage Languages in Open Journal Systems (OJS), Open Monograph Press (OMP), and Open Preprint Systems (OPS)
---

# Manage Languages in PKP Software

## Where does the text in the software come from?

When you first install the software, all the text you see (including menus, buttons, messages, and more) comes from a set of translation files, not from the code itself. The software uses "keys" (short labels) in its code that aren’t tied to any one language. 

When a user views the site, it looks up those keys in language files to show the right words in the selected language from specific files. System administrators can find these language-specific gettext PO files in folders using appropriate ISO locale codes (the [Language Code Listing](http://www.loc.gov/standards/iso639-2/php/code_list.php), for example `en` for English, and `de` for German. Rarely, the folder names will include a country ISO code as well, such as `pt_BR` for Brazilian Portuguese.

You can open a language file in one of these folders to see these message keys and the values they correspond to. Below, you can see a sample of message keys taken from `locale/en/common.po` on the left, and `locale/ja/common.po` on the right.

| `locale/en/common.po`                                                                                                                                                             	| `locale/ja/common.po`                                                                                                                                                              	|
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| ```msgid "common.currentStyleSheet"<br/>msgstr "Current Stylesheet"<br/><br/>msgid "about.description"<br>msgstr "Description"<br/><br/>msgid "about.guidelines"<br>msgstr "Guides"``` 	| ```msgid "common.currentStyleSheet"<br>msgstr "現在のスタイルシート"<br/><br/>msgid "about.description"<br/>msgstr "記述"<br/><br/>msgid "about.guidelines"<br/>msgstr "ガイドライン"``` 	|

As you can see, both language files share `msgid` keys, but these IDs correspond to different text depending on the language the system has been told to use.

When the system needs to display a piece of text, it first determines which language should be displayed. The language selected comes from, in order of preference:
* The language the user has selected within the UI
* The default language of the "context" (that's the journal in OJS, the press in OMP, or the server in OPS)
* The default language of the site

Once the system knows which language to display to the user it grabs the message key value from the locale file that belongs to that specific translation: that is, if it needs to display the text relevant to `msgid "about.description"` from the above example, and knows that it should display this in English, it will look in `locale/en/common.po` for the matching key value, in this case "Description". 

If the message key doesn't exist (such as when the file is missing a translation), the system will display the raw message key surrounded by hash marks: `##navigation.journalHelp##`. If you ever see that kind of code on page, you know that the translation is incomplete (or the file is not being properly loaded). Feel free to follow this guide to contribute the correct translation!

## Check Language Availability

Administrators should first check which languages are available from your version of OPS, OJS or OMP. If the language you want isn't listed, then it is likely that a translation has not yet been started.

### Check Installed Languages on Your Site

The first step is to see which languages are already installed and enabled on your site.

**For Site Administrators**: Go to Administration > Settings > Languages. You’ll see a list of installed languages with checkboxes to enable or disable them sitewide.

**For Journal/Press/Server Managers**: Go to Settings > Website > Setup > Languages. From here, you can choose which of the installed languages are available for the user interface, forms, and submissions. Read more about these options and how they affect your publishing experience in our [PKP Multilingualism Guide](https://docs.pkp.sfu.ca/multiling-guide/en/locales#enabling-new-locales).

### Check the PKP Website for Available Languages

If the language you want is not installed, check the PKP website for the full list of available complete and partial translations:

* [OJS Languages List](https://translate.pkp.sfu.ca/projects/ojs/#languages)
* [OPS Languages List](https://translate.pkp.sfu.ca/projects/ops/#languages)
* [OMP Languages List](https://translate.pkp.sfu.ca/projects/omp/#languages)

If your desired language isn't listed, consider contributing a translation. Check the rest of this document for details on how to help.

## Install a Language

Site Administrators can install new languages through the Administration dashboard. See [Learning OJS 3.5 for Site Administrators](https://docs.pkp.sfu.ca/learning-ojs/site-admin/en/#languages) for more information on how to install and manage languages in PKP software.

If you've translated the software into a new language that hasn't been officially released with a software update, you'll need to install it manually. This requires server access and some technical knowledge.

1. Download the latest translation files from  [Weblate](https://translate.pkp.sfu.ca/). Note that you will need the files from the "PKP Web Application Library" project as well as the files application- and plugin-specific projects. You can download the translations as ZIP files from "Files > Download original translation files as ZIP file" in each project.
2. Add the downloaded files to your OJS/OMP/OPS installation.
3. If it’s a completely new language, add an entry to your registry/locales.xml file.

## Default Translation Plugin

If your site uses an incomplete translation, you may see strange placeholder text like `##plugins.generic.customLocale.customLocaleFiles##`. To prevent this, you can use the Default Translation plugin. When this plugin is enabled, it will show the English text whenever a translation is missing in your chosen language.

>Note: This does not apply to email templates. If an email template is missing in a language, the email will send as blank. {:.notice}

When installed by a Site Administrator, the Default Translation plugin can be found and enabled from Website Settings > Plugins. No additional configuration of the plugin is required. For information about installing and enabling plugins, please consult the [Plugin Inventory & Guide](https://docs.pkp.sfu.ca/plugin-inventory/en/#install).

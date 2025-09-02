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

| `locale/en/common.po`                                                                                                                                                                                                                 | `locale/ja/common.po`                                                                                                                                                                                                                  |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ```msgid "common.publicKnowledgeProject" 
msgstr "Public Knowledge Project"  

msgid "common.currentStyleSheet"
msgstr "Current Stylesheet"  

msgid "about.description" 
msgstr "Description"  

msgid "about.guidelines" 
msgstr "Guides"``` | ```msgid "common.publicKnowledgeProject"
msgstr "Public Knowledge Project"  

msgid "common.currentStyleSheet"
msgstr "現在のスタイルシート"

msgid "about.description"
msgstr "記述"  

msgid "about.guidelines"
msgstr "ガイドライン"``` |

As you can see, both language files share `msgid` keys, but these IDs correspond to different text depending on the language the system has been told to use.

When the system needs to display a piece of text, it first determines which language should be displayed. The language selected comes from, in order of preference:
* The language the user has selected within the UI
* The default language of the "context" (that's the journal in OJS, the press in OMP, or the server in OPS)
* The default language of the site

Once the system knows which language to display to the user it grabs the message key value from the locale file that belongs to that specific translation: that is, if it needs to display the text relevant to `msgid "about.description"` from the above example, and knows that it should display this in English, it will look in `locale/en/common.po` for the matching key value, in this case "Description". 

If the message key doesn't exist (such as when the file is missing a translation), the system will display the raw message key surrounded by hash marks: `##navigation.journalHelp##`. If you ever see that kind of code on page, you know that the translation is incomplete (or the file is not being properly loaded). Feel free to follow this guide to contribute the correct translation!

## Check Language Availability

You are advised to first check which languages are available from your version of OPS, OJS or OMP. If the language you want isn't listed, then check our website for availability.

### Check Your Software for Available Languages

The first place to check on language availability is from within the software installation itself.

If you have more than one context (journal, server or press) installed, the Site Administrator controls what languages are available for to each
context. Navigate to Administration > Settings > Languages. Installed languages are listed here with an checkbox option to enable or disable the language sitewide.

For each context, the Manager controls the settings within that context by navigating to Settings > Website > Setup > Languages. Each language can be enabled for the UI, for Forms, and for Submissions.

Consider carefully how you want to configure and use languages on your site because significant problems can occur if you change the settings later.

* UI: Controls the user interface languages available in the front-end and in the back end. Enabling a language for the UI will allow users to select the language of the application interface. For example, buttons, page titles, and on-screen messages will be in the user's selected language.

* Forms: Controls the data entry forms for the application. Enabling a language for forms will allow text boxes to support multilingual data entry. For example, configuration settings and metadata can be entered in multiple languages.

* Submissions: Controls what languages are accepted for submission of manuscripts to the system. Enabling a language for Submissions will allow the author to select that language as representing the uploaded submission document.

### Check the PKP Website for Available Languages

The PKP keeps an up-to-date list of languages and contributors from the relevant project page:

* [OJS Languages List](https://translate.pkp.sfu.ca/projects/ojs/#languages)
* [OPS Languages List](https://translate.pkp.sfu.ca/projects/ops/#languages)
* [OMP Languages List](https://translate.pkp.sfu.ca/projects/omp/#languages)

If you don't see the language(s) you are looking for listed on either of these lists, please consider undertaking the translation yourself. If you are interested in contributing in such a way, [contact us](http://pkp.sfu.ca/contact) for advice, or consult the rest of this document.

### Use a Translation from OXS 3.1 or 3.0

In OXS 3.2, the format of the translation files changed from XML files to PO files and PKP changed from using the Translation Plugin in OJS or working directly in the XML files to translate to using the online community translation tool Weblate. If you want to use a translation that was done on an OXS 3.1 or 3.0 site, it’s best to add the translation to Weblate so it can continue to be updated. [PKP](https://pkpservices.sfu.ca/contact/) can convert the XML files into PO files and load them into Weblate. You can also use a command line tool in the lib/pkp/tools directory in OJS to convert locale XML files to locale PO files and add them to your site locally. But it is better to share the translation with the community via Weblate and continue to update it.

## Install a Language

Site Administrators can install new languages through the Administration dashboard. See [Learning OJS 3](/learning-ojs/en/site-administration#languages) for more information on how to install and manage languages in PKP software.

If you have newly translated the software into another language and want to install that language on your site, you will not be able to install it in the standard way until it has been merged into a release of the software. Instead, if you have access to the server and installation files and sufficient technical knowledge, you can install the new language using one of the methods below. 

First, confirm that you are using OJS/OMP/OPS 3.2.0 or above. If you are not, you will need to upgrade to the newest version of OJS/OMP/OPS.

When you upgrade, if you use a git checkout of OJS/OMP/OPS, rather than installing from a .tar.gz package, you will use the latest "stable" branch of the software. This will include recent translation contributions automatically and can be periodically refreshed.

Otherwise, you can download the new translation files and install them on your site by doing the following:
1. Go to [Weblate](https://translate.pkp.sfu.ca/)
2. Open the project "PKP Web Application Library"
3. Click Files > Download original translation files as ZIP file
4. Do the same thing with the Project "Open Journal Systems," "Open Monograph Press," or "Open Preprint Systems," depending on which application you use
5. Do the same thing for any plugins that you use
6. Add the files you download to your OJS/OMP/OPS installation

Another option is to get the latest translations from the pkp-translations organization in Github, in which the current stable branch will be at the end of the url. In this example, the stable branch is 3.2.1: 
- https://github.com/pkp-translations/pkp-lib/tree/stable-3_2_1
- https://github.com/pkp-translations/ojs/tree/stable-3_2_1
- any relevant plugins

If the language is new, you will also have to add an entry for it to the file in your installation called registry/locales.xml.

## Default Translation Plugin

While you're in the process of translating the software or if you're using an incomplete translation, you can avoid having untranslated locale keys displayed on your site (like ##plugins.generic.customLocale.customLocaleFiles##) by using the Default Translation plugin. This plugin will automatically display the English translation if the site is set to another language but a translation of a message key does not exist in that language. 

Please note this plugin not apply to email template locale files. If a translation of an email template is missing and you try to use a template in that language, a blank email will be sent.

To use the plugin
1. Go to Website Settings > Plugins > Plugin Gallery
2. Find the Default Translation plugin and install it
3. Under the list of Installed Plugins, find the Default Translation plugin again and enable it

No configuration of the plugin is required.

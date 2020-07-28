---
book: translating-guide
version: 3.2
---
# Manage Languages in PKP Software

## How Languages and Locales Work

All text you see in a typical fresh install has been abstracted from the software's source code. The source code contains keys that are not specific to any language, and is presented in the user's current language by fetching the translations of those keys from various language-specific gettext PO files. These files can be found in folders using appropriate ISO locale codes (the [Language Code Listing](http://www.loc.gov/standards/iso639-2/php/code_list.php) followed by the [Country Code Listing](http://www.iso.org/iso/country_codes/iso_3166_code_lists/english_country_names_and_code_elements.htm)), for example `en_US` for American English, or `pt_BR` for Brazilian Portuguese. This document will use `en_US` for its examples.

These locale directories will typically have PO files containing lists of message keys written in them: these message keys and their corresponding values correspond to template lines in the system code itself. The following set of message keys are taken from `locale/en_US/locale.po`:

```
msgid "navigation.journalHelp"
msgstr "Journal Help"

msgid "navigation.current"
msgstr "Current"

msgid "navigation.otherJournals"
msgstr "Other Journals"

msgid "navigation.browseByIssue"
msgstr "By Issue"
```

When the system needs to display a piece of text, it first determines which language should be displayed. The language used comes from, in order of preference:
* The language the user has selected within the UI, if multiple options are enabled
* The default language of the "context" (that's the journal in OJS, the press in OMP, or the server in OPS)
* The default language of the site

Once the system knows which language to display to the user it grabs the message key value from the locale file that belongs to that specific translation: that is, if it needs to display the text relevant to `msgid "navigation.journalHelp"` from the above example, and knows that it should display this in English, it will look in `locale/en_US/locale.po` for the appropriate key value, in this case "Journal Help". If the message key doesn't exist (if the locale file is missing that particular key, or doesn't exist on the system in the first place), the system will display the raw message key surrounded by hash marks: `##navigation.journalHelp##`

If you ever see that kind of code on page, you know that the translation is incomplete (or the locale file is not being loaded). You can take a look at the section on translating to see how to complete it.

## Check Language Availability

You are advised to first check which languages are available from your version of OPS, OJS or OMP. If the language you want isn't listed, then check our website for availability.

### Check Your Software for Available Languages

The first place to check on language availability is from within the software installation itself.

If you have more than one context (journal, server or press) installed, the Site Administrator controls what languages are available for to each
context. Navigate to Administration > Settings > Languages. Installed languages are listed here with an checkbox option to enable or disable the language sitewide.

For each context, the Manager controls the settings within that context by navigating to Settings > Website > Setup > Languages. Each language can be enabled for the UI, for Forms, and for Submissions.

* UI: Controls the user interface languages available in the front-end and in the back end. Enabling a language for the UI will allow users to select the language of the application interface. For example, buttons, page titles, and on-screen messages will be in the user's selected language.

* Forms: Controls the data entry forms for the application. Enabling a language for forms will allow text boxes to support multilingual data entry. For example, configuration settings and metadata can be entered in multiple languages.

* Submissions: Controls what languages are accepted for submission of manuscripts to the system. Enabling a language for Submissions will allow the author to select that language as representing the uploaded submission document.

### Check the PKP Website for Available Languages

The PKP keeps an up-to-date list of languages and contributors from the relevant project page:

* [OJS Languages List](https://translate.pkp.sfu.ca/projects/ojs/#languages)
* [OPS Languages List](https://translate.pkp.sfu.ca/projects/ops/#languages)
* [OMP Languages List](https://translate.pkp.sfu.ca/projects/omp/#languages)

If you don't see the language(s) you are looking for listed on either of these lists, please consider undertaking the translation yourself. If you are interested in contributing in such a way, [contact us](http://pkp.sfu.ca/contact) for advice, or consult the rest of this document.

## Install a Language

Site Administrators can install new languages through the Administration dashboard. See [Learning OJS 3](/learning-ojs/en/site-administration#languages) for more information on how to install and manage languages in PKP software.

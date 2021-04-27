---
book: translating-guide
version: 3.1
---

Introduction
============

OJS, OCS, and OMP are multilingual systems, allowing journals and conferences to publish in a variety of languages. The Public Knowledge Project aims to support English, French, Spanish and Portuguese translations each application. In addition, translations of each software package have been completed by the community, and we welcome contributions at any time.

All text you see in a typical fresh install has been abstracted from the system code, and has in fact been retrieved from one of a number of XML locale files. These files can be found in folders using appropriate ISO locale codes (the [Language Code Listing](http://www.loc.gov/standards/iso639-2/php/code_list.php) followed by the [Country Code Listing](http://www.iso.org/iso/country_codes/iso_3166_code_lists/english_country_names_and_code_elements.htm)), for example `en_US` for American English, or `pt_BR` for Brazilian Portuguese. This document will use `en_US` for its examples.

These locale directories will typically have XML files containing lists of message keys written in them: these message keys and their corresponding values correspond to template lines in the system code itself. The following set of message keys are taken from `locale/en_US/locale.xml`:

```
<message key="navigation.journalHelp">Journal Help</message>
<message key="navigation.home">Home</message>
<message key="navigation.about">About</message>
<message key="navigation.userHome">User Home</message>
<message key="navigation.login">Log In</message>
<message key="navigation.register">Register</message>
```

When the system needs to display a piece of text, it first determines which language should be displayed. The language used comes from, in order of preference:
* The language the user has selected within the UI, if multiple options are enabled.
* The default language of the journal/press/confernce context
* The detault language of the site

Once the system knows which language to display to the user it grabs the message key value from the locale file that belongs to that specific translation: that is, if it needs to display the text relevant to `message key="navigation.journalHelp"` from the above example, and knows that it should display this in English, it will look in `locale/en_US/locale.xml` for the appropriate key value, in this case "Journal Help". If the message key doesn't exist (if the locale file is missing that particular key, or doesn't exist on the system in the first place), the system will display the raw message key surrounded by hash marks: `##navigation.journalHelp##`

If you ever see that kind of code on page, you know that the translation is incomplete. You can take a look at the section on translating to see how to complete it.

Checking Language Availability
==============================

You are advised to first check which languages are available from your version of OCS, OJS or OMP. If the language you want isn't listed, then check our website for availability.

Checking Your Software for Available Languages
----------------------------------------------

The first place to check on language availability is from within the software installation itself.

### OJS/OMP 3.x

-   If you have more than one context (journal or press) installed, the Site Administrator controls what languages are available for to each context.  Navigate to Administration, Settings, and Languages.  Installed languages are listed here with an checkbox option to enable or disable the language sitewide.

-   For each journal or press context, the Manager controls the settings within that context by navigating to Settings, Website, and Languages.  Each language can be enabled for the UI, for Forms, and for Submissions.

    -    UI: Controls the user interface languages available in the front-end and in the back end.  Enabling a language for the UI will allow users to select the language of the application interface.  For example, buttons, page titles, and on-screen messages will be in the user's selected language.

    -    Forms: Controls the data entry forms for the application.  Enabling a language for forms will allow text boxes to support multilingual data entry.  For example, configuration settings and metadata can be entered in multiple languages.

    -    Submissions: Controls what languages are accepted for submission of manuscripts to the system.  Enabling a language for Submissions will allow the author to select that language as representing the uploaded submission document.

### OJS/OCS 2.x

For both OJS and OCS: If you have System Administrator access, log in and go to the System Administrator User Home, and click the
<em>Languages</em> link, which will take you to the site-wide languages administration page. This page has two main sections:

-   Under <em>Language Settings</em> you will find a drop-down box for your Primary Locale: this sets the default language across the entire site; users will be presented with this language by default, until they change their own language preference.

    You will also see a list of supported locales, with checkboxes next to them. The selected locales will be available for use by all journals hosted on the site, and will also appear in a language select menu on each site page (which can be overridden on journal-specific pages). If multiple locales are not selected, the language toggle menu will not appear and extended language settings will not be available to journals.
-   Under Manage Locales you will find a list of installed locales, as well as a list of new locales that haven't been installed.

    Beside each installed locale you will see: a link to <em>reload
    locale</em>, useful if you have made any changes to any locale files; and a link to <em>uninstall locale</em>, which will not remove locale files from your server but will remove them from the list of supported locales.

    At the very bottom, beside each locale that hasn't yet been installed, you will see a checkbox. To install a language, check the box next to its name and click <em>Install</em>. The page will reload and the locale will appear under <em>Manage Locales</em>.

    If a language is listed as available and installed from the Site Administrator's <em>Languages</em> administration page, you will still have to enable it for your journal or conference for it to be available to users. Log in as a Journal Manager or Conference Manager, and from your User Home click on <em>Languages</em> to visit the journal- or conference-specific language administration page. Here you will be able to set the primary locale for your journal or conference, and likewise enable supported languages to be used journal- or conference-wide. If you enable more than one language, users will be able to toggle between them via a drop-down menu on the sidebar.


Checking the PKP Website for Available Languages
------------------------------------------------

The PKP keeps an up-to-date list of languages and contributors from the relevant project page.

-   [OJS Languages List](http://pkp.sfu.ca/ojs-languages)

-   [OCS Languages List](http://pkp.sfu.ca/ocs-languages)

If you don't see the language(s) you are looking for listed on either of these lists, please consider undertaking the translation yourself. If you are interested in contributing in such a way, [contact us](http://pkp.sfu.ca/contact) for advice, or consult the rest of this document.

Installing a Language
=====================

Language packs may be available in tar.gz archive format, and can be installed by following these steps (You will require software such as 7-Zip to decompress the downloaded file):

-   Untar the archive to your installation root directory on the server: this will place the translated locale files into the appropriate directories;
-   Add the locale to `registry/locales.xml` using the following syntax:

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE locales SYSTEM ""../lib/pkp/dtd/locales.dtd"">
<locales>
    <locale key="de_DE" name="Deutsch (Deutschland)" ... />
    <locale key="en_US" name="English" ... />
    <locale key="es_ES" name="Español (España)" ... />
    <locale key="fr_CA" name="Français (Canada)" ... />
    (... and so on)
</locales>
```

-   Log into your system as a System Administrator, and go to your Languages page;
-   Check the checkbox beside the newly-registered locale under Install New Locales and click <em>Install</em>;
-   After the page reloads, check the checkbox beside the newly-installed locale beside Supported Locales and click
    <em>Save</em>.

You will then need to either visit each conference, journal, or press you are administering and activate the language from the Language page. You can do this by checking the box beside Supported Locales and clicking <em>Save</em>.

**OJS/OCS 2.x Warning:** Visit your system information page (http://<your-site>/index.php/index/admin/systemInfo) and review your "registry\_dir" variable to be sure you are editing the right locales.xml


Translation Managers
====================

Volunteer translation managers help PKP to keep translations up-to-date. These translation managers coordinate and review translations to ensure that terminology is used consistently within the application.  Note that these managers don't necessarily translate each application, but they do have oversight of the PKP application suite as a whole.  Please [contact us](http://pkp.sfu.ca/contact) to connect with a translation manager.

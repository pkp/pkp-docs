Introduction
============

OJS and OCS are multilingual systems, allowing journals and conferences to publish in a variety of languages. The Public Knowledge Project aims to support English, French, Spanish and Portuguese translations for both OJS and OCS. In addition, translations of both software packages have been completed by the community, and we welcome contributions at any time.

All text you see in a typical fresh OxS interface has been abstracted from the system code, and has in fact been retrieved from one of a number of XML locale files. These files can be found in folders using appropriate ISO locale codes (the [Language Code Listing](http://www.loc.gov/standards/iso639-2/php/code_list.php) followed by the [Country Code Listing](http://www.iso.org/iso/country_codes/iso_3166_code_lists/english_country_names_and_code_elements.htm)), for example `en_US` for American English, or `pt_BR` for Brazilian Portuguese. This document will use `en_US` for its examples.

These locale directories will typically have XML files containing lists of message keys written in them: these message keys and their corresponding values correspond to template lines in the system code itself. The following set of message keys are taken from `locale/en_US/locale.xml`:

```
<message key="navigation.journalHelp">Journal Help</message>
<message key="navigation.home">Home</message>
<message key="navigation.about">About</message>
<message key="navigation.userHome">User Home</message>
<message key="navigation.login">Log In</message>
<message key="navigation.register">Register</message>
```

When the system needs to display a piece of text, it first determines
which language should be displayed. The first place it checks is to see
which language has been set as the site-wide default by the Site
Administrator. If the user is currently looking at a journal, the system
instead checks to see which language the Journal Manager has set as the
default. And finally, if multiple languages have been installed it
checks to see if the user has specified another language to be used
instead of the default. More information on administering languages can
be found in the section on checking language availability.

Once the system knows which language to display to the user it grabs the
message key value from the locale file that belongs to that specific
translation: that is, if it needs to display the text relevant to
`message key="navigation.journalHelp"` from the above example, and knows
that it should display this in English, it will look in
`locale/en_US/locale.xml` for the appropriate key value, in this case
"Journal Help". If the message key doesn't exist (if the locale file is
missing that particular key, or doesn't exist on the system in the first
place), the system will display the raw message key surrounded by hash
marks: `##navigation.journalHelp##`

If you ever see that kind of code on an OJS or OCS page, you know that
the translation is incomplete. You can take a look at the section on
translating to see how to complete it.

Checking Language Availability
==============================

You are advised to first check which languages are available from your
version of OCS or OJS. If the language you want isn't listed, then check
our website for availability.

Checking Your Software for Available Languages
----------------------------------------------

The first place to check on language availability is from within the
software installation itself.

For both OJS and OCS: If you have System Administrator access, log in
and go to the System Administrator User Home, and click the
<em>Languages</em> link, which will take you to the site-wide languages
administration page. This page has two main sections:

-   Under <em>Language Settings</em> you will find a drop-down box for
    your Primary Locale: this sets the default language across the
    entire site; users will be presented with this language by default,
    until they change their own language preference.\
    \
    You will also see a list of supported locales, with checkboxes next
    to them. The selected locales will be available for use by all
    journals hosted on the site, and will also appear in a language
    select menu on each site page (which can be overridden on
    journal-specific pages). If multiple locales are not selected, the
    language toggle menu will not appear and extended language settings
    will not be available to journals.
-   Under Manage Locales you will find a list of installed locales, as
    well as a list of new locales that haven't been installed.\
    \
    Beside each installed locale you will see: a link to <em>reload
    locale</em>, useful if you have made any changes to any locale
    files; and a link to <em>uninstall locale</em>, which will not
    remove locale files from your server but will remove them from the
    list of supported locales.\
    \
    At the very bottom, beside each locale that hasn't yet been
    installed, you will see a checkbox. To install a language, check the
    box next to its name and click <em>Install</em>. The page will
    reload and the locale will appear under <em>Manage Locales</em>.\
    \
    If a language is listed as available and installed from the Site
    Administrator's <em>Languages</em> administration page, you will
    still have to enable it for your journal or conference for it to be
    available to users. Log in as a Journal Manager or Conference
    Manager, and from your User Home click on <em>Languages</em> to
    visit the journal- or conference-specific language administration
    page. Here you will be able to set the primary locale for your
    journal or conference, and likewise enable supported languages to be
    used journal- or conference-wide. If you enable more than one
    language, users will be able to toggle between them via a drop-down
    menu on the sidebar.

Checking the PKP Website for Available Languages
------------------------------------------------

The PKP keeps an up-to-date list of languages and contributors from the
relevant project page.

-   [OJS Languages List](http://pkp.sfu.ca/ojs-languages)

-   [OCS Languages List](http://pkp.sfu.ca/ocs-languages)

Information is organized in a table, with the software version along the
X axis and the list of languages on the Y axis. Clicking on a language
name will take you to an individual language page, which will list the
most recent contributors, and any other relevant information.

All languages fall into the following categories:

-   **Complete:** either bundled with that particular version of OCS or
    OJS, or are otherwise available for download from the list.

-   **Needs Updating:** these files may be included with the version you
    are using (the table will indicate this) but incomplete for some
    reason (they may be a version out of date but still relevant enough
    to be useful; or they may not have been 100% translated in the first
    place). If they are listed as not being included with the software
    version you are using, you can contact the last known maintainers to
    see if they have any recent files.

If you don't see the language(s) you are looking for listed on either of
these lists, please consider undertaking the translation yourself. If
you are interested in contributing in such a way, [contact
us](http://pkp.sfu.ca/contact) for advice, or consult the rest of this
document.

Installing a Language
=====================

Language packs are available in tar.gz archive format, and can be
installed by following these steps (You will require software such as
7-Zip to decompress the downloaded file):

-   Untar the archive to your OJS or OCS root directory on the server:
    this will place the translated locale files into the appropriate
    directories;
-   Add the locale to `registry/locales.xml` using the following syntax:

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE locales SYSTEM "../dbscripts/xml/dtd/locales.dtd">
<locales>
    <locale key="de_DE" name="Deutsch (Deutschland)"/>
    <locale key="en_US" name="English"/>
    <locale key="es_ES" name="Español (España)"/>
    <locale key="fr_CA" name="Français (Canada)"/>
    (... and so on)
</locales>
```

-   Log into your system as a System Administrator, and go to your
    Languages page;
-   Check the checkbox beside the newly-registered locale under Install
    New Locales and click <em>Install</em>;
-   After the page reloads, check the checkbox beside the
    newly-installed locale beside Supported Locales and click
    <em>Save</em>.

You will then need to either visit each conference or journal you are
administering and activate the language from the Journal/Conference
Manager Language page. You can do this by checking the box beside
Supported Locales and clicking <em>Save</em>.

**Warning:** Visit your system information page
(http://<your-site>/index.php/index/admin/systemInfo) and review your
"registry\_dir" variable to be sure you are editing the right
locales.xml


Translation Managers
====================

(explain translation managers)


Translations by Application
===========================

You will find more information on translations, including contributors
and translations notes, below. Contributors are encouraged to [contact
us](mailto:pkp.contact@gmail.com) for login information to maintain
their translation page.

(link to wiki, list of applications' locales)

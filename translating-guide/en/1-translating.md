# Managing Languages and Locales

## How Languages and Locales Work

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
* The language the user has selected within the UI, if multiple options are enabled
* The default language of the journal/press/confernce context
* The detault language of the site

Once the system knows which language to display to the user it grabs the message key value from the locale file that belongs to that specific translation: that is, if it needs to display the text relevant to `message key="navigation.journalHelp"` from the above example, and knows that it should display this in English, it will look in `locale/en_US/locale.xml` for the appropriate key value, in this case "Journal Help". If the message key doesn't exist (if the locale file is missing that particular key, or doesn't exist on the system in the first place), the system will display the raw message key surrounded by hash marks: `##navigation.journalHelp##`

If you ever see that kind of code on page, you know that the translation is incomplete. You can take a look at the section on
translating to see how to complete it.

## Check Language Availability

You are advised to first check which languages are available from your version of OCS, OJS or OMP. If the language you want isn't listed, then check our website for availability.

### Check Your Software for Available Languages

The first place to check on language availability is from within the software installation itself.

If you have more than one context (journal or press) installed, the Site Administrator controls what languages are available for to each
context. Navigate to Administration, Settings, and Languages. Installed languages are listed here with an checkbox option to enable or disable the language sitewide.
    
For each journal or press context, the Manager controls the settings within that context by navigating to Settings, Website, and Languages. Each language can be enabled for the UI, for Forms, and for Submissions.
    
* UI: Controls the user interface languages available in the front-end and in the back end. Enabling a language for the UI will allow users to select the language of the application interface. For example, buttons, page titles, and on-screen messages will be in the user's selected language.
         
* Forms: Controls the data entry forms for the application. Enabling a language for forms will allow text boxes to support multilingual data entry. For example, configuration settings and metadata can be entered in multiple languages.
         
* Submissions: Controls what languages are accepted for submission of manuscripts to the system. Enabling a language for Submissions will allow the author to select that language as representing the uploaded submission document.
         
### Check the PKP Website for Available Languages

The PKP keeps an up-to-date list of languages and contributors from the relevant project page:

* [OJS Languages List](http://pkp.sfu.ca/ojs-languages)
* [OMP Languages List](http://pkp.sfu.ca/omp-languages)

If you don't see the language(s) you are looking for listed on either of these lists, please consider undertaking the translation yourself. If you are interested in contributing in such a way, [contact us](http://pkp.sfu.ca/contact) for advice, or consult the rest of this document.

### Install a Language

Language packs may be available in tar.gz archive format, and can be installed by following these steps (You will require software such as 7-Zip to decompress the downloaded file):

* Untar the archive to your installation root directory on the server: this will place the translated locale files into the appropriate directories
* Add the locale to `registry/locales.xml` using the following syntax:

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

* Log into your system as a System Administrator, and go to your Languages page
* Check the checkbox beside the newly-registered locale under Install New Locales and click <em>Install</em>;
* After the page reloads, check the checkbox beside the newly-installed locale beside Supported Locales and click <em>Save</em>.

You will then need to either visit each journal or press you are administering and activate the language from the
Language page. You can do this by checking the box beside Supported Locales and clicking <em>Save</em>.

## Edit an existing translation

### Working with XML files



Creating a Manual Translation
-----------------------------

### Finding the Files to Translate

To translate OxS into an additional language by hand, first download the latest version of OJS or OCS to a computer (which doesn't have to be a webserver: this can be on your desktop) to extract the files just for translation purposes.

You will require software such as 7-Zip to decompress the downloaded file (e.g., ojs-2.2.3.tar.gz).

Opening the downloaded file with your decompression software will create a directory on your computer based on the downloaded file (e.g., ojs-2.2). Within this directory you will find the following list of subdirectories, where the XML files needing translation are located (en\_US is both systems' default language, and by that nature always the most complete; we'll use it as the starting language for a translation):

#### OxS 2.2 files

-   locale/en\_US: This directory contains the main locale file with the
    majority of localized OJS text.
-   dbscripts/xml/data/locale/en\_US: This directory contains localized
    database data, such as email templates.
-   help/en\_US: This directory contains the help files for OJS.
-   registry/locale/en\_US: This directory contains additional localized
    information such as a country list.
-   rt/en\_US: This directory contains the Reading Tools.
-   plugins/\[plugin category\]/\[plugin name\]/locale, where applicable:
    These directories contain plugin-­specific locale strings.

#### OxS 2.3+ files

Starting in OJS 2.3, the main locale file in locale/en\_US has been split into a number of different locale files; the old email templates file has also been moved from the dbscripts location to the locale/en\_US directory; and the files in registry/locale/en\_US have also been moved.

-   locale/en\_US: This directory contains a number of locale files, including the emailTemplates.xml locale file. All files should be translated.
-   lib/pkp/locale/en\_US: This directory contains locale files with keys that apply to our entire PKP suite of applications. All files should be translated. It may be that a translator for another application has already translated these files for you; ensure that you check whether these files already exist for the locale you are working on.
-   help/en\_US: This directory contains the help files for OJS.
-   rt/en\_US: This directory contains the Reading Tools.
-   plugins/\[plugin category\]/\[plugin name\]/locale, where applicable: These directories contain plugin-­specific locale strings.

### Editing the Files

On opening the XML files, you will notice commonalities between each file: Commented-out topmatter (anything appearing in tags) which you can safely ignore, and then various types of XML tags. There may also be instructions for each locale file, placed in a comments field.

The following XML entity exists in some, but not all of the XML files that you can translate:

```
<locale name="en_US" full_name="U.S. English">
```

This should be change to the language you are translating to, eg.
French:

```
<locale name="fr_FR" full_name="Français">
```

Next you will encounter the meat of the locale files, the message keys and their corresponding values. For example, the text that is to be translated in `locale/en_US/locale.xml` begins like this:

```
<message key="common.and">and</message>
<message key="common.between">between</message>
...
```

Only the text that sits between the XML tags is in need of translation. Here you can see how that text has been translated into French, after which it has been saved in a file named `locale/fr_CA/locale.xml`:

```
<message key="common.and">et</message>
<message key="common.between">entre</message>
...
```

### Using the Translation Plugin Tool

OJS 2.2 and OCS 2.1 onwards come with a translation plugin that makes the task of updating incomplete translations much easier. You can also start a new translation from scratch, although this takes a bit more work initially.

To enable the plugin, log in as a Journal Manager and go to User Home and then System Plugins; you'll find the Translator plugin listed with the generic plugins. Click on the plugin's <em>Enable</em> link. To access the plugin, return to the System Plugin page, scroll down to the plugin, and click the newly-available <em>Translate</em> link.

You'll now see a list of available (already-installed) locales, and three available actions: <em>Check</em>, <em>Edit</em> and <em>Export</em>.


#### Checking a Translation

You can check the translation's completeness by clicking the <em>Check</em> link: this will show you a list of missing locale files; keys missing from existing locale files; extra (unneeded) keys; suspicious key lengths (if your translated key value is substantially longer than the English default); and also missing or extra system emails.

If you are missing a locale file, the plugin will allow you to create one and translate the key values from the English default by entering new values against old values into relevant fields. Any other error will display the error message, plus the offending key value in an editable field.


#### Editing a Translation

If you already know where an error is, you can click the <em>Edit</em> link beside the language name you need to fix, and then click the <em>Edit</em> link next to the specific locale file (please note: clicking the locale filename itself will link you directly to the locale file, which is downloadable).

You will be presented with a list of all keys in that locale file, with their English values alongside your translation values. You can edit your translation values directly here, and save your results, by clicking in the translation value field and making any necessary changes.

If you know the specific key you want to change (say "navigation.journalHelp") enter the key into the search field at the top of the table and press Search: you will be taken to the appropriate page, with the key/value highlighted in yellow.

You can also delete any key from the locale file by clicking the <em>Delete</em> link next to it. Please note, however, that you can't currently add a new key with the Translator plugin: if you do delete a key only to need it later, you will have to add it manually (ie., by editing the file on the server).

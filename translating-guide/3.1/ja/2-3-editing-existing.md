---
book: translating-guide
version: 3.1
---

## Edit an existing translation

### Working with XML files


Using the Translation Plugin Tool
---------------------------------

OJS 2.x and OJS/OMP 3.x comes with a translation plugin that makes the task of updating incomplete translations much easier. You can also start a new translation from scratch, although this takes a bit more work initially.

### Installation

#### OJS/OMP 3.x

To enable the plugin, log in as a Manager, then select Settings, Website, and Plugins; you'll find the Translator plugin listed with the generic plugins. Enable the plugin. Reload the Website Settings page to find a newly-available <em>Translate</em> link.

#### OJS 2.x

To enable the plugin, log in as a Journal Manager and go to User Home and then System Plugins; you'll find the Translator plugin listed with the generic plugins. Click on the plugin's <em>Enable</em> link. To access the plugin, return to the System Plugin page, scroll down to the plugin, and click the newly-available <em>Translate</em> link.

You'll now see a list of available (already-installed) locales, and three available actions: <em>Check</em>, <em>Edit</em> and <em>Export</em>.

### Checking a Translation

The plugin will show you a list of missing locale files and keys missing from existing locale files.    Using the <em>Check</em> link in the plugin for 2.x will also show extra (unneeded) keys, suspicious key lengths (if your translated key value is substantially longer than the English default), and missing or extra system emails.

If you are missing a locale file, the plugin will allow you to create one and translate the key values from the English default by entering new values against old values into relevant fields. In the plugin for 2.x, any other error will display the error message, plus the offending key value in an editable field.

### Editing a Translation

If you already know where an error is, you can click the <em>Edit</em> link beside the language name you need to fix, and then click the <em>Edit</em> link next to the specific locale file.  In 2.x, clicking the locale filename itself will link you directly to the locale file, which is downloadable.

You will be presented with a list of all keys in that locale file, with their English values alongside your translation values. You can edit your translation values directly here, and save your results, by clicking in the translation value field and making any necessary changes.

In 2.x, if you know the specific key you want to change (say "navigation.journalHelp") enter the key into the search field at the top of the table and press Search: you will be taken to the appropriate page, with the key/value highlighted in yellow.

The "delete" and "add" functions are experimental.

Creating a Manual Translation
-----------------------------

### Editing the Files

On opening the XML files, you will notice commonalities between each file: Commented-out topmatter (anything appearing in tags) which you can safely ignore, and then various types of XML tags. There may also be instructions for each locale file, placed in a comments field.

The following XML entity exists in some, but not all of the XML files that you can translate:

```
<locale name="en_US" full_name="U.S. English">
```

This should be change to the language you are translating to, eg. French:

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

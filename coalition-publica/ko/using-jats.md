# Using JATS with OJS

Érudit collects metadata from your OJS installation in ​[JATS](https://jats.nlm.nih.gov/)​ XML. JATS is commonly used to publish or index journal articles. However, creating and using JATS effectively can be complex. There are several different ways to work with JATS using OJS.

This document assumes you are not already producing JATS XML for other reasons (e.g. indexing or presentation). If you already have JATS XML for your article content, please contact us.

You can configure OJS to automatically generate simple JATS documents for inclusion in Érudit. In order to do this you will need to install and enable two plugins. The process will involve these steps:

## Step 1. Install the JATS Template Plugin

Log into your OJS installation using your Site Administrator account.

Navigate to Settings > Website > Plugins.

Click on “Plugin Gallery”.

This will show a list of available plugins for installation. Find “JATS Template Plugin”:

![](./assets/jatsTemplatePlugin.png)

Click on “JATS Template Plugin” to see more information about the plugin:

![](./assets/jatsTemplatePluginInfo.png)

(Your version of the plugin may not be the same as the version indicated above. It’s always a good idea to use the latest available version of the plugin in the Plugin Gallery.)

Click the “Install” button to install the plugin. (If you do not see the “Install” button, make sure you are logged in as a Site Administrator.) Confirm that you wish to install the plugin.

You should see a confirmation of installation:

![](./assets/jatsTemplatePluginNotification.png)


This will install the latest available version of the plugin. (When new versions of this plugin are released, you will be able to update them here. Again, the version number you see may not be the same as the screenshot above.)

In order to provide JATS content to Érudit, you must be running **JATS Template Plugin 1.0.1.0 or newer**​.

## Step 2. Install the OAI JATS Plugin

Log into your OJS installation using your Site Administrator account.

Navigate to Settings > Website > Plugins.

Click on “Plugin Gallery”.

This will show a list of available plugins for installation. Find “OAI JATS Plugin”:

![](./assets/oaiJatsPlugin.png)

Click on “OAI JATS Plugin” to see more information about the plugin:

![](./assets/oaiJatsPluginInfo.png)

(Your version of the plugin may not be the same as the version indicated above. It’s always a good idea to use the latest available version of the plugin in the Plugin Gallery.)

Click the “Install” button to install the plugin. (If you do not see the “Install” button, make sure you are logged in as a Site Administrator.) Confirm that you wish to install the plugin.

You should see a confirmation of installation:

![](./assets/oaiJatsPluginNotification.png)

This will install the latest available version of the plugin. (When new versions are released, you will be able to upgrade here. Again, the version number you see may not be the same as the screenshot above.)

In order to provide JATS content to Érudit, you must be running **OAI JATS Plugin 1.0.1.0 or newer**.

## Step 3. Enable the Plugins

Now that you have installed both the JATS Template Plugin and OAI JATS Plugin, you will need to enable them.

**This will need to be done once *for each journal* you wish to include in Érudit.**

Navigate to Settings > Website > Plugins.

Click on “Installed Plugins”.

Look in the plugin list for “JATS Template Plugin”:

![](./assets/jatsTemplatePluginListing.png)

Click the checkbox on the right to enable the plugin. You should receive a confirmation:

![](./assets/jatsTemplatePluginListingNotification.png)

Now find the “JATS Metadata Format”:

![](./assets/jatsMetadataFormatPluginListing.png)

Click the checkbox beside that to enable it as well. You should receive a confirmation:

![](./assets/jatsMetadataFormatPluginListingNotification.png)

Don’t forget to repeat these steps for any other journals you wish to include in Érudit.

## Step 4. Review your Journal Settings

There are several journal settings that should be properly configured in order for the data to be collected by Érudit. For each journal that you wish to include, make sure that:

* For each of your journal’s sections, the “Identify items published in this section as a(n)...” field is set to one of the [suggested JATS article-type values](https://jats.nlm.nih.gov/archiving/tag-library/1.1/attribute/article-type.html).
* Your journal settings are complete, e.g.:
    * An ISSN has been specified
    * The journal title is the same as you have registered at [issn.org](https://www.issn.org)
    * A publisher is specified in Settings > Journal > Masthead
    * Copyright
        * Make sure that the copyright holder of the articles (author, journal or other) is properly identified in Settings > Distribution > Permissions.
        * Make sure, when you schedule an article for publication, to attach the permissions to it (copyright holder and copyright year).

## Step 5. Rebuild Your Search Index

This step may require the help of your system administrator, as it requires access to a file on the server on which OJS is installed.
* Ensure that OJS knows about your server’s text extraction tools: check your `config.inc.php` file in the `[search]` section to make sure your server’s locations for these tools are specified.
* If you had to modify your `config.inc.php` file to enable PDF indexing, you will also have to rebuild your search index. You can do this by running the following command on your server, in the OJS web root:

`php tools/rebuildSearchIndex.php`

NOTE: This step is required only if you have recently enabled PDF indexing.

* You can check that the index has been successfully rebuilt by searching for text that only appears in a PDF (ie. not in other submission metadata stored by OJS, such as title or abstract fields).

In addition to configuring your OJS for Coalition Publica, this step will also help OJS to index PDF documents for its own search indexing.

## Step 6. Check your Distribution Settings

Under Settings > Distribution > Access, you will see a series of settings:

![](./assets/journalSettings.png)

Whichever of the first 3 access settings you choose for your journal, ensure that “Enable OAI access to content” is checked. Save the settings.

If your access settings are configured

* to require subscriptions to access some or all of its contents, or
* not to use OJS to publish the journal’s content online

... see specific instructions below, in Subscriptions and Non-Publishing Use of OJS section, for inclusion on Érudit.

## Step 7. Enable Inclusion

Contact us to confirm that your OJS journal’s data can now be fetched for inclusion in Érudit, as part of Coalition Publica!

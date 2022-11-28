---
noindex: true
---
# Initial Setup

Érudit collects metadata from your OJS installation in ​[JATS](https://jats.nlm.nih.gov/)​ XML. JATS is commonly used to publish or index journal articles.

You can configure OJS to automatically generate simple JATS documents for inclusion in Érudit. In order to do this you will need to install and enable two plugins. The process will involve these steps:

## Site Administrator Steps

The following steps can be performed within OJS by a user with the Site Administrator role.

### Step 1. Install the JATS Template Plugin

Log into your OJS installation using your Site Administrator account.

Navigate to Settings > Website > Plugins.

Click on “Plugin Gallery”.

This will show a list of available plugins for installation. Find “JATS Template Plugin”:

![JATS Template Plugin in the list of plugins.](./assets/jatsTemplatePlugin.png)

Click on “JATS Template Plugin” to see more information about the plugin:

![JATS Template Plugin with plugin information and an Upgrade button.](./assets/jatsTemplatePluginInfo.png)

(Your version of the plugin may not be the same as the version indicated above. It’s always a good idea to use the latest available version of the plugin in the Plugin Gallery.)

Click the “Install” button to install the plugin. (If you do not see the “Install” button, make sure you are logged in as a Site Administrator.) Confirm that you wish to install the plugin.

You should see a confirmation of installation:

![Notification: Successfully upgraded to version 1.0.1.0.](./assets/jatsTemplatePluginNotification.png)

This will install the latest available version of the plugin. (When new versions of this plugin are released, you will be able to update them here. Again, the version number you see may not be the same as the screenshot above.)

In order to provide JATS content to Érudit, you must be running **JATS Template Plugin 1.0.1.0 or newer**​.

### Step 2. Install the OAI JATS Plugin

Log into your OJS installation using your Site Administrator account.

Navigate to Settings > Website > Plugins.

Click on “Plugin Gallery”.

This will show a list of available plugins for installation. Find “OAI JATS Plugin”:

![OAI JATS Plugin in the list of plugins.](./assets/oaiJatsPlugin.png)

Click on “OAI JATS Plugin” to see more information about the plugin:

![OAI JATS Plugin with plugin information and an Upgrade button.](./assets/oaiJatsPluginInfo.png)

(Your version of the plugin may not be the same as the version indicated above. It’s always a good idea to use the latest available version of the plugin in the Plugin Gallery.)

Click the “Install” button to install the plugin. (If you do not see the “Install” button, make sure you are logged in as a Site Administrator.) Confirm that you wish to install the plugin.

You should see a confirmation of installation:

![Notification: Successfully upgraded to version 1.0.1.0.](./assets/oaiJatsPluginNotification.png)

This will install the latest available version of the plugin. (Again, the version number you see may not be the same as the screenshot above.)

In order to provide JATS content to Érudit, you must be running the latest version of the OAI JATS plugin suitable for your version of OJS. The next step will demonstrate how to enable and upgrade the plugins in order to keep them up to date.

### Step 3. Enabling and Upgrading the Plugins

#### Enabling the Plugins

Now that you have installed both the JATS Template Plugin and OAI JATS Plugin, you will need to enable them.

**This will need to be done once *for each journal* you wish to include in Érudit.**

Navigate to Settings > Website > Plugins.

Click on “Installed Plugins”.

Look in the plugin list for “JATS Template Plugin”:

![JATS Template Plugin in the list of plugins with an unchecked checkbox next to it.](./assets/jatsTemplatePluginListing.png)

Click the checkbox on the right to enable the plugin. You should receive a confirmation:

![Notification: The plugin "JATS Template Plugin" has been enabled.](./assets/jatsTemplatePluginListingNotification.png)

Now find the OAI JATS plugin (under the heading “JATS Metadata Format” under OAI Metadata Format Plugins):

![JATS Metadata Format in the list of plugins with an unchecked checkbox next to it.](./assets/jatsMetadataFormatPluginListing.png)

Click the checkbox beside that to enable it as well. You should receive a confirmation:

![Notification: The plugin "OAI JATS Plugin" has been enabled.](./assets/jatsMetadataFormatPluginListingNotification.png)

**If you publish XML galleys**, you will need to click the blue arrow next to JATS Metadata Format and access the plugin settings. Click the checkbox next to “Ignore uploaded JATS XML documents” and press OK. This is **not necessary for journals who do not publish XML galleys** unless they have been directed otherwise by their Coalition Publica contact following a test harvest. 

![The JATS Template Plugin settings page with the Ignore uploaded JATS XML documents checkbox checked.](./assets/ignore_xml.png)

Don’t forget to repeat these steps for any other journals you wish to include in Érudit.

#### Updating the Plugins

The plugins used for harvesting your journal’s metadata are occasionally updated to fix bugs or improve functionality. You may be instructed to update the plugins by Coalition Publica, or you may choose to update the plugins as part of regular maintenance.

Following any upgrade to your OJS, ensure that your plugins are updated to the latest version suitable for your version of OJS by updating via the Plugin Gallery.

First, navigate to Settings > Website > Plugins. Switch to the “Plugin Gallery” tab.

Navigate to the relevant plugin and click its name to open this window.

![OAI JATS Plugin with plugin information and an Upgrade button.](./assets/oaiJatsPluginInfo.png)

Click the upgrade button if available and confirm that you wish to update the plugin. If the upgrade button is unavailable, your plugin is already up to date.

![Notification: Successfully upgraded to version 1.0.1.0.](./assets/oaiJatsPluginNotification.png)

You will see a confirmation after the upgrade completes successfully.

Although it is possible to update plugins in OJS by downloading the latest version from Github, it is possible that newer versions may not be compatible with your particular version OJS, so **please always update plugins from the Plugin Gallery unless otherwise instructed**.

### Step 4. Review your Journal Settings

There are several journal settings that must be properly configured in order for data to be collected by Érudit. Please review the detailed Journal Settings section of [Coalition Publica’s Preparing Quality Metadata in OJS Guide](https://www.erudit.org/public/guides/ojs-metadata.pdf) and ensure that each setting has been properly configured.

### Step 5. Check your Distribution Settings

Under Settings > Distribution > Access, you will see a series of settings:

![Access to journal content settings with options to provide open access (selected), require subscription, not use OJS for publishing, and enable OAI access to content (selected).](./assets/journalSettings.png)

Whichever of the first 3 access settings you choose for your journal, ensure that “Enable OAI access to content” is checked. Save the settings.

If your access settings are configured

* to require subscriptions to access some or all of its contents, or
* not to use OJS to publish the journal’s content online

... see specific instructions in the Subscriptions and Non-Publishing Use of OJS section of this document.

## System Administrator Steps

The following step requires back-end access to OJS by a system administrator. You may need to contact your hosting provider or technical lead to perform this step.

### Step 6. Rebuild Your Search Index

This step may require the help of your system administrator, as it requires back-end access to a file on the server on which OJS is installed.

* Ensure that OJS knows about your server’s text extraction tools: check your `config.inc.php` file in the `[search]` section to make sure your server’s locations for these tools are specified.
* If you had to modify your `config.inc.php` file to enable PDF indexing, you will also have to rebuild your search index. You can do this by running the following command on your server, in the OJS web root:

```
php tools/rebuildSearchIndex.php
```

NOTE: This step is required only if you have recently enabled PDF indexing.

* You can check that the index has been successfully rebuilt by searching for text that only appears in a PDF (ie. not in other submission metadata stored by OJS, such as title or abstract fields).

In addition to configuring your OJS for Coalition Publica, this step will also help OJS to index PDF documents for its own search indexing.


## Step 7: Configure Your OAI Namespace Identifier

Each OJS installation must have a globally unique OAI repository identifier/namespace.

A placeholder (`ojs.pkp.sfu.ca`) is set by default when OJS is first installed, but before making use of the OAI PMH interface, this must be changed. This step requires the help of your system administrator, as it requires back-end access to a file on the server on which OJS is installed.

### Choosing a unique repository identifier
Your OAI repository identifier must be globally unique to your OJS installation. A common choice is the top-level portion of the OJS installation URL. For example, if your OJS installation's URL is `https://journals.library.example.com`, you could use `journals.library.example.com` as your identifier.
The identifier must correspond to that of the [URI (Uniform Resource Identifier)](https://www.ietf.org/rfc/rfc2396.txt?number=2396) syntax. Notably any of the reserved characters from section 2.2 cannot be used, including: `;`, `/`, `?`, `:`, `@`, `&`, `=`, `+`, `$`, or `,`.

### Editing your OAI repository identifier
This identifier can be configured within the `config.inc.php` file in your OJS installation directory and must be edited directly.
It is found under the `[oai]` section of the config file and should be added after `repository_id = `. If you have not edited this previously, this line will have `repository_id = ojs.pkp.sfu.ca`. In this case, `ojs.pkp.sfu.ca` should be replaced with your unique identifier.

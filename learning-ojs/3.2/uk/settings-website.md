---
book: learning-ojs
version: 3.2
---

# Website Settings

The Website Settings allow you to configure how your journal's website looks and operates. It consists of 3 main tabs for Appearance, Setup, and Plugins.

![OJS dashboard view of website settings menu.](./assets/learning-ojs3.1-jm-settings-web-appearance.png)

## Appearance

### Theme

The theme determines the overall design or layout of your site. Several different theme options are available and you can try them out without affecting your site's content or configuration.

First you can ensure that all available themes have been enabled on your site.

1. Go to the Plugins tab under Website Settings.
2. Scroll to the bottom and find Theme Plugins.
3. Check the box next to each plugin to enable it.

You can also look for additional themes in the Plugin Gallery and install and enable those.

Now that you have all available themes, return to the Appearance tab to try out different themes.

1. Under Theme you will see a drop-down list of themes. Select one.
2. Scroll to the bottom of the page and click Save.
3. The theme may have additional sub-themes or configuration options available. To make these appear, refresh the page in your browser.
4. If you select a different sub-theme or change the colour scheme or other design features, click Save at the bottom of the page again.
5. Open your site's home page in a new tab or window of your browser to see how the site looks with the new theme or sub-theme and with different configuration options.
6. If you do not see the changes appear on your site, you may need to clear the cache under the Administration menu.

If you would like to make minor changes to your site's design and layout, you can upload a **Journal Stylesheet** in Website Settings > Appearance > Advanced.

- **Typography**: Quickly choose the fonts for your journal. This option may or may not be available depending on the selected theme.

- **Colour**: Quickly change the colour of your journal's header. This option may or may not be available depending on the selected theme.

- **Journal Summary**: Check this off to show the journal summary on the homepage. You can add your journal summary under Journal Settings > Masthead. This option may or may not be available depending on the selected theme.

- **Header Background Image**: Check this off if you if you want the uploaded homepage image to be shown as the header background.

### Setup

Where you can upload images (logo, thumbnail, homepage) to your sites main page, enter footer information, and configure your sidebar menu.

- **Journal thumbnail**: Upload a small logo or image representative of the journal that will be used in lists of journals on this OJS installation. This will only be used on OJS installations with multiple journals.

- **Homepage Image**: Uploading an image here will will place it on your journal's home page.

- **Page Footer**: Enter any images, text or HTML code that you'd like to appear at the bottom of your website.

- **Sidebar**: This allows you to move different blocks in or out of the sidebar in the reader interface. You can also create a custom block using the [Custom Block plugin](./settings-website.md#custom-block-plugin)

### Advanced

Where you can upload your journal stylesheet, Favicon, and Additional Content.

- **Journal Style Sheet**: Use this to upload a unique style sheet for your journal. If you would like to make more significant changes to the design or give your site an entirely unique look, you can develop your own theme or child theme. Instructions are available in the [PKP Theming Guide](https://docs.pkp.sfu.ca/pkp-theming-guide/en/).

- **Journal Favicon**: Add a [favicon](https://en.wikipedia.org/wiki/Favicon) to display in the reader's browser address bar.

- **Additional Content**: Any text entered here will appear on your homepage.

Hit **Save** to record your changes.

## Setup

### Information

Use these fields to modify the text in the For Readers, For Authors, For Librarians pages on the journal website.

![OJS dashboard view of Information menu with boiler plate text in the fields for readers and for authors.](./assets/learning-ojs3.1-jm-settings-web-info.png)

Remember to hit **Save** to record any changes.

To remove these fields and their contents from displaying publicly on the website's user interface, deselect the Information Block in Website Settings > Appearance > Sidebar Management.

### Languages

OJS is multilingual, which means that the interface, emails, and published content can be available in multiple languages on a single site or journal. When you install OJS, you can select one or more languages for your site.

Under Website Settings > Languages you can see a list of languages or locales installed on your site and configure how the languages are used in your journal. Additional languages can be installed on your site by an Administrator – see [Chapter 4](./site-administration) for details.

![OJS dashboard view of Languages menu with English and French options, English option selected as primary locale.](./assets/learning-ojs3.1-jm-settings-web-lang.png)

- **Primary Locale**: One language must be set as the primary locale, which means the language the journal appears in by default.

- **UI**: If you want the journal’s interface to be available in other languages, select them here.

- **Forms**: This will enable all selected languages to be available when filling in online forms. This will allow metadata to be added in selected languages in the Publication tab.

- **Submission**: If you want authors to be able to make submissions in other languages, select them here. This will allow authors to add metadata in selected languages when uploading their submission.

If enabling multiple languages to appear in the UI, make sure that in Website Settings > Appearance > Sidebar Management the Language Toggle Block is selected to make that feature available to users.

### Navigation

This section allows you to configure your navigation menus, such as including new links.

![OJS dashboard view of Navigation Menu with user and primary menus and an option to add or edit navigation menu items.](./assets/learning-ojs3.1-jm-settings-web-navmenu.png)

- **Navigation Menus**: Configure the User Menu and/or the Primary Menu.

Some menu item types will only be displayed under certain conditions. For example, the Login menu item type will link to your login page, but it will only appear in the menu when your website visitor is logged out. Similarly, the Logout menu item type will only appear when a website visitor is logged in.

When you assign a Menu Item with display conditions to a Menu, you will see an icon of an eye with a slash through it. You can click that icon to learn more about when it will be displayed or hidden.

- **Navigation Menu Items**: These are programmed links you can add to either menu above. If you wish to add a link to the Primary Menu (e.g., "Our Society"), add it here using the _Add Item_ link.

![Add item screen with item title and remote URL filled out.](./assets/learning-ojs3.1-jm-settings-web-navmenu-add.png)

It will now appear in the list of Navigation Menu Items. Next, go to the desired Navigation Menu (e.g., Primary), use the blue arrow to reveal the options, and choose Edit. You can now drag and drop it from Unassigned Menu Items to Assigned Menu Items and into the appropriate location on the menu.

![Primary navigation area with a list of assigned and unassigned menu items.](./assets/learning-ojs3.1-jm-settings-web-navmenu-add-nav.png)

Hit Save to record the change.

### Announcements

This section allows you to create and display news announcements on the journal's website.

![OJS dashboard view of Announcements menu with an option to enable and display announcements.](./assets/learning-ojs3.1-jm-settings-web-announce.png)

- **Announcements**: Check this off if you want to have announcements in your website
  - **Introduction**: Enter any information you would like to appear on your announcements page.
  - **Display on Homepage**: Enter the number of announcements to be displayed on the homepage. If this is left blank, no announcements will be displayed.

### Lists

Limit the number of items (for example, submissions, users, or editing assignments) to show in a list before showing subsequent items on another page. Also, limit the number of links to display to subsequent pages of the list.

### Privacy Statement

Enter the privacy statement you want to appear on your site.

## Plugins

Use this page to see all of the installed plugins and find new plugins.

### Installed Plugins

All of the plugins listed here are available in your OJS installation. Check the Enable link to use them.

![OJS dashboard view of Plugins menu with the tab for installed plugins selected.](./assets/learning-ojs3.1-jm-settings-web-plugins.png)

You will notice that some plugins are required for the system and cannot be disabled.

Click the blue arrow next to the plugin name to reveal links to Delete, Upgrade, or Configure settings for the plugin.

### Plugin Gallery

The Plugin Gallery provides access to externally-created plugins, that may not be included in your OJS installation, but are available for download and activation. Only an Administrator user can install a new plugin.

![OJS dashboard view of Plugins menu with the tab for plugin gallery selected.](./assets/learning-ojs3.1-jm-settings-web-plugins-gallery.png)

Selecting the plugin title will provide additional details, including the author, status, description, and compatibility.

![Hypothes.is plugin selected in the plugin gallery shows that it is installed and up-to-date.](./assets/learning-ojs3.1-jm-settings-web-plugins-gallery-hypo.png)

### External Plugins

Sometimes new plugins or plugins that are developed by folks outside of PKP will not appear in the Plugin Gallery and you need to install them separately.

1. Download the tar.gz file of the plugin from its repository under the Releases tab.
2. Go to Installed Plugins tab.
3. At top right, click Upload a New Plugin.
4. Upload the plugin file.
5. When it has finished uploading, click Save. Give it some time to install.

If upload fails you may get an error message that says, “The uploaded plugin archive does not contain a folder that corresponds to the plugin name.” Usually this means you have to change the name of the plugin folder inside the zipped folder to a more simple name. For example, change “translator-ojs-3_0_0-0” to “translator.”

Remember to hit Save to record the change.

### Content Enhancement and Discovery Plugins

OJS 3 has a number of plugins that you can enable to help enhance the user experience and discoverability of your content and journal. This section will outline the different plugins available in OJS and how to configure and use them.

As some of the plugins below are 3rd party plugins, it may require that you download the zip file from GitHub and upload it to your journal. For general information on plugins and how to install and enable plugins, please see [Learning OJS 3 - Plugins](./settings-website#plugins).

Please note that as PKP does not maintain 3rd party plugins, we cannot guarantee that it will work with your version of OJS.

#### AddThis Plugin

[AddThis](https://www.addthis.com/) permits easy social media sharing by integrating tools for several platforms into a compact set of configurable buttons. The plugin integrates AddThis into OJS/OMP for quick sharing of published content.

This plugin can be enabled from the Plugin Gallery.

![Social media sharing icons displayed on an article page by the AddThis plugin.](./assets/learning-ojs-settings-plugin-addthis.png)

You can configure the social media icons and get statistics by clicking on the Setting button of the Plugin.

![AddThis plugin settings button.](./assets/learning-ojs-settings-plugin-addthis-2.png)

In order to get statistics from this plugin, you will need to register for an [AddThis account](https://www.addthis.com/).

![AddThis plugin settings expanded with different display options.](./assets/learning-ojs-settings-plugin-addthis-3.png)

#### Browse Plugin

This plugin implements a block plugin that allows the user to navigate content by categories. The browse block appears on the journal's sidebar.

This plugin can be enabled from the Plugin Gallery.

![Browse plugin with categories for Summer, Fall, Spring, Winter.](./assets/learning-ojs-settings-plugin-browse.png)

#### Citation Style Language Plugin

The Citation Style Language plugin adds a “How to Cite” block to the article page that contains a citation for the article in the format of your choice, with an option below to generate the citation in another format.

![Example of a citation on an article page under How to Cite added by the Citation Style Language Plugin.](./assets/learning-ojs-settings-plugin-citation.png)

This is an Installed Plugin and will need to be enabled under Website Settings > Plugins > Installed Plugins.

To configure the plugin:

* Click the blue arrow next to the plugin name
* Click the **Settings** link that appears below.

![Citation Style Language Plugin settings button.](./assets/learning-ojs-settings-plugin-citation-2.png)

* Select the Primary citation format you would like to use from the first list, followed by the other citation formats you * would like to be available from the second list
* Next, you can optionally select a downloadable format to make available to readers to export to bibliography management software
* You can also add the location of your publication/publisher for citations that require it
* Click **OK** when you have finished configuring

Now the How to Cite block will appear on every article page in your journal.

*Please note: The citation style formats are generated by an external library. If you notice an error in a citation format you can file an issue in [the Citation Style Language styles repository on GitHub](https://github.com/citation-style-language/styles).*

*You can also add a custom citation style with custom coding.*

#### Custom Block Plugin

To configure and add custom blocks:

* Click Manage Custom Blocks below the plugin name
* From this screen, click Add Block to create a new block or click Edit or Delete under the block name to manage existing blocks.
* When adding a new block, enter a name for your block (without spaces or non-alphanumeric characters) and the content to be shown in the sidebar.
* The display and order of blocks can be edited from the Sidebar Management section of Dashboard > Settings > Website > Appearance > Setup.

#### Custom Header Plugin

The Custom Header plugin can be used to add custom JavaScript to a header or block. JavaScript is often required to link your site with outside services but cannot be added directly to a field for security reasons.

The plugin can be installed from the Plugin Gallery.

**Example: Use the Custom Header plugin to add a Twitter feed to your sidebar**

You can add a Twitter feed for your journal, press, or organization to the sidebar of OJS or OMP.

First, you need to enable and configure the Custom Header plugin, which allows you to add JavaScript code to a custom block:

1. Go to Website Settings > Plugins and ensure the Custom Header plugin is installed and enabled
2. Click the blue arrow next to the plugin name and click the **Settings** button that appears below
3. Paste the following into the Header Content field:
```html
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
```
4. Click **OK** to save it

Next, you need to create a custom block:

1. Go to the Installed Plugins again and enable the Custom Block Manager plugin
2. Click the blue arrow next to the plugin name and click **Manage Custom Blocks** below it
3. Click **Add Block**
4. Give the block a name, such as “Twitter”
5. Above the **Content** field, click the **Source Code** button
6. In the pop-up box that appears, paste the following content - except use your own Twitter account link and name:
```html
<a class="twitter-timeline" href="https://twitter.com/asmecher?ref_src=twsrc%5Etfw">Tweets by asmecher</a>
```
7. Additional custom timeline parameters can be added if you want, e.g:
````html
<a class="twitter-timeline" "data-tweet-limit="3" ...
````
8. Click **Save**

Finally, you have to add the custom block you just created to your sidebar.

1. Go to Website Settings > Appearance and scroll down to **Sidebar Management**
2. You should see the Twitter block under **Unselected**
3. Drag and drop the block over to **Sidebar**. You can drag and drop all your blocks in the desired order.

Another option is to use the [Twitter sidebar plugin](https://github.com/RBoelter/ojs3-twitter-sidebar). This plugin makes Twitter block for the sidebar.

#### Disqus plugin

The [Disqus plugin](https://github.com/ajnyga/disqus) integrates with [Disqus](https://disqus.com) and allows users to add comments to the article pages.

The Disqus plugin is a third-party plugin and must be installed from its Github repository.

After you install and enable the plugin, you must register for a Disqus account on the [Disqus website](https://disqus.com). When you register, choose the option to use Disqus on your website. Disqus offers free and paid plans and you must choose a plan when you register.

When asked to register your **Website Name**, create a name based on your journal name. This will show up in Disqus feeds, email notifications, and your Community tab. For example, "pkpworkshopsjournal."

Skip the **Install Disqus** step and go to **Configure Disqus**. Enter your journal url in the **Website URL** field. Enter your comments policy as applicable.

![Configure Disqus menu on the Disqus website.](./assets/learning-ojs-3.2-settings-plugin-disqus-configure-disqus.png)

Now you can configure the Disqus plugin on your journal site:

1. Go to Website Settings > Plugins
2. Find the Disqus plugin
3. Click the blue arrow next to the plugin name and **Settings** that will appear below
4. Enter the Website Name from your Disqus account in the **Disqus forum's shortname** field
5. Click **OK**

![OJS Disqus plugin settings menu with an option to enter a forum's shortname.](./assets/learning-ojs-3.2-settings-plugin-disqus-configure-plugin.png)

After configuring the plugin, if you open one of your article pages, you should see Disqus comments at the bottom. Your users will have to register with Disqus to use the feature.

![Example of an article page with Disqus comment field at the bottom.](./assets/learning-ojs-3.2-settings-plugin-disqus-comment-on-article.png)

#### Hypothes.is plugin

This plugin adds Hypothes.is integration to the public article view of OJS, permitting annotation and commenting. It currently supports commenting on HTML galleys.

This plugin can be enabled from the Plugin Gallery.

Once enabled, readers will see the hypothes.is tools on the right side of the HTML galley.

![Hypothesis view next to an HTML galley with sample text.](./assets/learning-ojs-settings-plugin-hypothesis.png)

You will need a free hypothes.is account in order to participate in public commenting. Specific/Private commenting groups can also be set up. [See hypothes.is](https://web.hypothes.is/help/how-to-create-a-private-group/) for instructions.

Public annotations and highlights will be visible (if any) once you are signed in.

![Hypothesis view next to an HTML galley with portions of the sample text highlighted.](./assets/learning-ojs-settings-plugin-hypothesis-2.png)

#### Keyword Cloud plugin

This plugin displays a tag cloud of keywords that can be enabled on the sidebar of your journal or press.

![Keyword cloud displayed in a journal sidebar.](./assets/learning-ojs-settings-plugin-keyword.png)

This is a 3rd party plugin that will need to be [downloaded from GitHub](https://github.com/lepidus/keywordCloud).

Once you’ve downloaded the file from GitHub, upload it to your journal and enable it. This will make the keyword cloud available as a block that you can add to the sidebar of your journal.

To add the keyword cloud display to your sidebar:

1. Go to Settings > Website > Appearance > Sidebar Management
2. Drag the Keyword Cloud block from the **Unselected** column to the **Sidebar column**
3. Rearrange the order of the blocks as needed
4. Click **Save**

The cloud will should now appear on the sidebar of your journal site.

#### Most Read Plugin

This plugin creates a “most read articles” section in the journal’s sidebar with the 5 most viewed articles (with links) in the last week, along with the number of views per article.

![Most read of the week list with article titles and links displayed in a journal sidebar.](./assets/learning-ojs-settings-plugin-most-read.png)

This is a 3rd party plugin and the file will need to be [downloaded from GitHub](https://github.com/ajnyga/mostRead).

*This plugin is compatible with OJS version 3.1.2 or higher. It is currently being adapted for OJS 3.2.*

Once you’ve downloaded the file from GitHub, upload it to your Journal and enable it. This will create a “Most Read” block that you can add to the sidebar of your journal.

To add the Most Read block to your sidebar:

1. Go to Settings > Website > Appearance > Sidebar Management
2. Drag the Most Read block from the **Unselected** column to the **Sidebar** column
3. Rearrange the order of the blocks as needed
4. Click **Save**

The block will now appear on the sidebar of your journal site.

#### Recommend Articles by Author Plugin

This plugin inserts a list of articles by the same author (with appropriate links) on an article’s abstract page.

![Most read articles by the same author(s) with a sample article and link.](./assets/learning-ojs-settings-plugin-author-rec.png)

This plugin can be enabled in the Plugin Gallery.

Once it has been enabled, there is no additional configuration required.

#### Recommend Similar Articles Plugin

This plugin inserts a list of similar articles to the article abstract page.

This plugin can be enabled in the Plugin Gallery.

Once it has been enabled, there is no additional configuration required.

#### Usage Statistics Plugin

This plugin displays the number of downloads of an article on the article page.

![Bar graph of article downloads displayed on an artilce page by the Usage Statistics plugin.](./assets/learning-ojs-settings-plugin-usage-stats.png)

To configure the Usage Statistics Plugin, you must be an **Administrator**:

1. Go to Settings > Website > Plugins.
2. Under Generic Plugins, find the Usage Statistics Plugin.
3. Click the blue arrow to the left of the plugin name to make links appear below the plugin.
4. Click Settings.
5. Scroll to the bottom of the pop-up box that opens to the section Statistics Display Options.
6. Check the box beside the Display submission statistics chart for the reader.
7. Below that you can select whether you would like to display the statistics as a bar or line graph and the maximum number of months to display usage for.
8. Click Save.

![Usage Statistics plugin settings with statistics display options.](./assets/learning-ojs-settings-plugin-usage-stats-2.png)

Please note that:

* Usage statistics can only be displayed for the current year. The plugin is reset at the beginning of each year.
* The statistics being displayed indicate the number of times an article was downloaded.

## Static Pages

The **Static Pages plugin** allows you to create new pages on your journal website for additional content - for example, you could create a page that details your open access policies.

To use the Static Pages plugin:

* Go to Website Settings > Plugins and find the Static Pages plugin
* Enable the plugin by checking the box beside it
* Refresh the page in your browser. Now you should see a new tab next to **Plugins** called **Static Pages**.
* Click the **Static Pages** tab

![Static Pages tab in the Website Settings menu.](./assets/learning-ojs3.2-website-settings-static-pages-plugin.png)

* Add a new page by clicking **Add Static Page**.
* Fill in the form that opens with the content you want on the page. The **Path** will be used as part of the page URL and the **Title** will appear as the page title.

![Add Static Page menu with a page title and path entered.](./assets/learning-ojs3.2-website-settings-add-static-page.png)

* You can preview the page as you’re working by clicking the **Preview** link at the bottom of the form
* When you’re finished creating the page, click **Save**

After you create the page you will want to add it to your menu.  Instructions on how to do that are in the above section on **Navigation Menus**.

To edit a page you created with the plugin:

* Go to Website Settings > Static Pages
* Click **Edit** next to the page you want to edit
* You can preview the page as you’re working by clicking the **Preview** link at the bottom of the form
* When you’re finished editing the page, click **Save**

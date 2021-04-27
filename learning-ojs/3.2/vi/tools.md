---
book: learning-ojs
version: 3.2
---

# Tools

The Tools section can be accessed from the left sidebar menu.

![Tools side menu options.](./assets/learning-ojs3.2-jm-users-tools.png)

Tools consist of an Import/Export tab, a Report Generator tab (called Statistics in OJS 3.1.1 and earlier), and a Permissions tab.

## Import/Export

Import/Export allows you to easily get data out of your OJS journal and get data into it.

![List of Import/Export plugins available.](./assets/learning-ojs3.2-jm-users-tools-import.png)

Some of the tools allow you to export to third-party systems, such as PubMed or the DOAJ. Others allow you to import or export user or article data.

For detailed instructions on importing and exporting see the [Administrator's Guide](https://docs.pkp.sfu.ca/admin-guide/en/data-import-and-export).

For more information on the Crossref XML Export Plugin, see the [PKP Crossref Guide](https://docs.pkp.sfu.ca/crossref-ojs-manual/en/).

### Quick Submit Plugin

The Quick Submit Plugin allows you to quickly add complete submissions to an issue. It provides a one-step submission process for editors needing to bypass the traditional submission, review, and editing process.

The Quick Submit Plugin can be used in the following cases:

* Journals who are using OJS to display and publish their content without using the editorial workflow
* Journals that were published using another platform and are migrating to OJS, when a conversion tool for that platform is not available
* Journals that were originally published in print and have since been digitized

To use this plugin, you will need the following:

* To be enrolled as an Editor or Journal Manager
* A set of ready-to-publish files (e.g., PDFs)
* All of the metadata for the files (e.g., author names, titles, abstracts, etc.)

First, ensure that the Quick Submit Plugin has been installed and enabled for your journal.  You will need to have the Journal Manager role to enable the plugin and the Administrator role to install the plugin.

![Settings side menu options with the option for Website selected.](./assets/find-plugins.png)

1. Go to Settings > Website > Plugins
2. Under Installed Plugins, look for the Quick Submit Plugin.  If you see it listed, skip to step 8.
3. If you do not see the Quick Submit Plugin under Installed Plugins, go to the Plugin Gallery tab.
4. Click on Quick Submit. A popup box will open.
5. Click on Install.  If you do not see the Install button, you will need to ask the Administrator of your site to install the plugin for you.
6. A popup box will open and ask “Are you sure you wish to install this plugin?”  Click OK and wait a few minutes while the installation completes.
7. After the plugin has been installed, go back to the Installed Plugins tab and find the Quick Submit Plugin.
8. Check the box to the right of the plugin name and description to enable the plugin.

![List of Import/Export plugins from the Installed Plugin tab in Website settings.](./assets/enabled-import-plugins.png)

Next, you will need to create the issues (or issue) that will contain the new articles you are importing.

1. Go to Issues > Future issues and select Create Issue.
2. Enter metadata for the issue
3. If the issue is already published you can check off "Published"
4. Click Save.
5. Do this for all of the issues you are uploading articles for.

![Volume 1 Number 1, 2017 issue titled From below created under Future Issue.](./assets/create-issue.png)

Next you can import each article with the Plugin.

![Tools side menu options with Import/Export selected.](./assets/import-plugins.png)

1. Go to Tools > Import/Export and select Quick Submit Plugin.
2. Upload a cover image if you have one.  This field is optional and can be ignored.
3. Choose the section of the journal that the article will appear in from the drop-down list in the Section field.
4. Enter the metadata for the article in the other fields. If you do not see all of the metadata fields you want, go to Workflow Settings > Submission > Submission Metadata to configure what fields should be included in submissions.
5. Under List of Contributors, click Add Contributor to enter the names of authors and other contributors to the article.
6. Under Galleys, click Add Galley to upload a PDF file of the article.  A popup box will open where you can enter the Galley Label and language of the galley.  Once you click Save, another box will open where you can select the Article Component and upload the file.
7. At the end of the Quick Submit Plugin form, you can select whether you want the article you are adding to be published immediately or unpublished if you wish to publish it later. If you select **Published**, you will have to select the issue you would like to publish it in and enter the **Date Published**. You can also optionally enter page numbers and permissions information.
8. When you have finished entering all data for the article, click Save.

![Submission form on QuickSubmit.](./assets/quick-submit-plugin-2.png)

DOIs are not added with the QuickSubmit Plugin. Instead, you have to add them separately.

To add existing DOIs to articles that have already been assigned:

1. Enable and configure the DOI plugin so that you need to "Enter an individual DOI suffix for each published item."
2. After you finish uploading the article with the QuickSubmit plugin, click “Go to Submission” to go to the article’s submission record. Or go to the article's submission record through the Submissions dashboard.
3. Open Metadata on the top right and go to the Identifiers tab
4. Enter the DOI suffix for the article.
5. Click Save and then Save again to assign the DOI
6. If you normally assign DOIs using a default pattern, re-configure the DOI plugin for this after you have finished adding DOIs to articles you uploaded with the QuickSubmit plugin

To assign new DOIs to articles:

1. Ensure that the DOI plugin is enabled and configured
2. After you finish uploading the article with the QuickSubmit plugin, click “Go to Submission” to go to the article’s submission record. Or go to the article's submission record through the Submissions dashboard.
3. Open Metadata on the top right and go to the Identifiers tab. You should see a preview of the DOI that will be assigned and a checked box next to "Assign the DOI to this article."
4. Click Save and the DOI will be assigned.

## Report Generator

The Report Generator page provides access to a variety of reports from your journal.

![List of Reports available](./assets/learning-ojs3.2-jm-users-tools-stats.png)

The system generates reports that track the details associated with site usage and submissions over a given period of time. Reports are generated in CSV format which requires a spreadsheet application to view.

- **PKP Usage Statistics Report**: Provides basic usage statistics for your journal.
- **View Report**: Provides a report on galley and abstract views by readers (i.e., how many times a PDF for an article has been viewed).
- **Articles Report**: Provides a spreadsheet of all published articles.
- **COUNTER Reports**: Provides COUNTER data.
- **Review Report**: Provides a spreadsheet of all review activity.

### Generate Custom Report

Use this feature to build your own reports.

![Sample custom report settings to generate Issue table of contents page preview aggregated by country and month for this current month.](./assets/learning-ojs3.2-jm-users-tools-stats-custom.png)

More information on how to generate and manage statistics in OJS is provided in the [Administrator's Guide](https://docs.pkp.sfu.ca/admin-guide/en/statistics).

## Permissions

The Reset Article Permissions tool allows you to reset the copyright statement and license information on all published articles, and will revert it to your journal's current default settings. Take caution when using this tool and consult legal expertise if you are unsure what rights you hold over the articles published in your journal.

![](./assets/learning-ojs3.2-jm-users-tools-permissions.png)

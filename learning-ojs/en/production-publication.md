---
book: learning-ojs
version: 3.2
---
# Chapter 15: Production and Publication

With the completion of the Copyediting stage, the submission now moves to Production. From here, the copyedited files will be converted to publishable formats in the form of galley files (e.g., PDF, HTML) and proofread before publishing. A new journal issue will be created and the article will be scheduled for publication in the issue. This chapter explains the steps in that process, as well as how to use the versioning feature in OJS 3.2 to publish a new version of an article if significant changes are made. 

OJS also offers a straightforward way to bypass the editorial workflow described in the previous chapter and submit content directly into production, where it can be added to an issue and published. You can do this via Quick Submit plugin. See the detailed [Quick Submit plugin instructions under the Data Import & Export chapter](./tools.md#importexport).

To start working in Production, the Section Editor or Journal Editor must login to the system and choose the submission from their dashboard.

Clicking on the article will open the submission record.

![](./assets/learning-ojs-3.2-se-production.png)

You will see the copyedited files are now available in the **Production Ready Files** panel. 

In the **Production** tab, you can assign participants (such as a Layout Editor) to the Production stage of the workflow and communicate with participants in the **Production Discussions** panel.

## Publication Tabs
Everything related to publishing a submission is done under the Publication tab. The Publication tab allows you to edit or add information about the submission, including contributors, metadata, and identifiers. It is also where you will upload the final Galley files for publication in the journal.

![](./assets/learning-ojs3.2-ed-prod-publication-tab.png)

Here is an overview of what the different tabs in this section are for. Detailed instructions on some of these are available later in the chapter.

learning-ojs-3.2-production-publication-tab.png

**Title & Abstract**
Use this tab to edit the article title, subtitle, and abstract.

If any changes are made, click Save before exiting this window.

**Contributors**
Use this tab to add, edit, or remove article contributors.

**Metadata**
Use this tab to add or edit article keywords. 

If any changes are made, click Save before exiting this window.

**Identifiers**
Use the Identifiers tab to view or add a unique identifier, such as a DOI.

**Galleys**
Use the Galleys tab to upload the final file for publication. 

**Permissions & Disclosure**
Include details about the copyright holder and link to the article license, if applicable.

**Issues**
Use the Issues tab to assign the article to a journal issue.

### Multilingual submissions

The Title & Abstract, Metadata, Permissions & Disclosure, and Issue tabs have options for adding and editing metadata in multiple languages. Languages must first be turned on in Website Settings -> Setup -> Languages.

Select the desired language tab below the “Schedule for Production” button, and complete the metadata fields in the selected language. 

![](./assets/learning-ojs3.2-ed-prod-metadata-lang.png)

The “Issue” tab allows you to upload multiple cover images in selected languages.

![](./assets/learning-ojs3.2-ed-prod-issue-languages.png)

## Format Article for Publication

### Assign Layout Editor
A notification banner indicates that you must assign someone to create the galley files (e.g., the PDFs, HTML, etc.) from the production ready files.

This can vary from journal to journal – you may have layout editors or production assistants to do this work. Some journals use an external graphic design or typesetting service. If you would like to communicate with your layout editor, production assistant, graphic designer, or typesetter through OJS and manage the production process with them in OJS, ensure they have a user account and add them as a participant to the submission. 

To make the assignment, use the **Assign** link in the Participants list. This will open a new window.

![](./assets/learning-ojs-3.2-se-production-participants-add.png)

Use the role selector and search button to find appropriate users. Select the user and choose a predefined message, then click **OK** to send.

The user has now been notified via email and in the dashboard.

![](./assets/learning-ojs-3.2-se-production-participants-added.png)

You can now see the Layout Editor in the Participants list, and you can see the request notice in the Production Discussions panel.
You can now wait for the Layout Editor to complete their tasks.

### Layout Editing
As a Layout Editor, you will have received a message inviting you to create the galleys for the submission.
To get started, login to the system and go to your dashboard.

![](./assets/learning-ojs-3.2-le-dashboard.png)

From here, find the submission and select the **Production** link. This will take you to the submission record.

![](./assets/learning-ojs-3.2-le-submission.png)

From the Production Ready Files panel, download the files to your desktop and work outside of OJS to convert them to galley files. The next section explains galley file formats and preparation.

> Note: PKP is currently working on a project to automate the conversion of Microsoft Word documents into other formats, including XML, HTML, PDF, EPUB, etc. Keep an eye on our blog for updates.

### Prepare and add galley files
A Galley is the final publication-ready file that has been prepared for readers and will be published on the article page. Galleys should be in a stable non-editable format (e.g., HTML, PDF, ePub, or XML) versions of the full-text article. Galley files can also include supplementary material such as multimedia files and research data. You can publish a galley file for an article and for an entire issue.

#### Galley file component types
When you upload a galley file, you will need to select a **Component Type**. These are the same component types that authors select from when they upload submission files. You can configure component types under Workflow Settings > Submission > Components, according to whether you want the component type to be published and whether you want a link to it to appear on the article landing page or in the table of contents. The configurations are as follows:
* Dependent: the link will not appear with published content at all
* Supplementary: The link will appear on the article landing page
* Neither supplementary nor dependent: The link will appear on the article landing page and in the table of contents

#### Galley file formats
Online journals publish their articles in a variety of file types. The most common are PDF and HTML, but increasingly additional formats are being used, such as ePub, MP3, and XML. 

Plugins in OJS allow PDF, HTML, and XML files to be viewed in a web browser or downloaded. If the files are being downloaded instead of displayed in the browser, you may need to enable one of these plugins under Website Settings > Plugins:

* PDF.JS PDF Viewer provides rendering support for PDF Article files.
* eLife Lens Article Viewer provides rendering support for JATS XML Article files using eLife Lens.
* HTML Article Galley plugin provides rendering support for HTML Article files.

Other formats may require additional plugins or can be downloaded directly. Alternatively, you may host the full-text content on a different platform and embed a remote URL by choosing the checkbox: “This galley will be available at a separate website.”

#### Using templates 
Requiring all submissions to use a document template that is pre-formatted with your journal’s publication styles (e.g., the font face, font size, boldness, placement, etc., of the header, body, footers, etc.) can make your document conversion much easier.
Microsoft provides a brief overview for creating templates in MS Word [here](https://support.office.com/en-us/article/create-a-template-86a1d089-5ae2-4d53-9042-1191bce57deb).

Once you’ve created a template that matches your journal style, it may be useful for submitting authors, layout editors, or other users. 
Here’s an example of an OJS journal that requires authors to download and use a template file: [Paideusis](https://journals.sfu.ca/pie/index.php/pie#authorGuidelines).

Ideally, your template should be created using styles rather than direct formatting. This not only ensures consistency throughout your documents, but will also aid in any conversions to other formats (e.g., HTML). Here’s an  [explanation of the difference between styles and direct formatting in Word](https://support.office.com/en-us/article/Style-basics-in-Word-d382f84d-5c38-4444-98a5-9cbb6ede1ba4?CorrelationId=1b00844c-a9dc-4d62-98df-a966f30d4b20&ui=en-US&rs=en-US&ad=US&ocmsassetID=HA010230882)

#### PDF files 
A PDF is the easiest type of file to create from a Word document. Current versions of Microsoft Word (and other word processors) let you “Save As” or “Export As” a PDF. The majority of OJS journals publish their articles as PDFs.

PDFs are also popular with many readers as they most closely recreate the printed page. However, PDFs are often less flexible on mobile devices and do not always handle links or embedded media (such as sound or video files) particularly well. With the widespread usage of mobile devices, ensuring your audience can read your articles on their phones or tablets is increasingly important.

Example (see PDF link at bottom of page): [Irish Journal of Technology Enhanced Learning](http://www.journal.ilta.ie/index.php/telji/article/view/22/51)





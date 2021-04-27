---
book: learning-ojs
version: 3.3
---

# Chapter 15: Production and Publication

With the completion of the Copyediting stage, the submission now moves to Production. From here, the copyedited files will be converted to publishable formats in the form of galley files (e.g., PDF, HTML) and proofread before publishing. A new journal issue will be created and the article will be scheduled for publication in the issue. This chapter explains the steps in that process, as well as how to use the versioning feature (first introduced in OJS 3.2) to publish a new version of an article if significant changes are made.

OJS also offers a straightforward way to bypass the editorial workflow described in the previous chapter and submit content directly into production, where it can be added to an issue and published. You can do this via Quick Submit plugin. See the detailed [Quick Submit plugin instructions under the Data Import & Export chapter](./tools.md#importexport).

To start working in Production, the Section Editor or Journal Editor must login to the system and choose the submission from their dashboard.

Clicking on the article will open the submission record.

![Production tab in the editorial workflow of a manuscript.](./assets/learning-ojs-3.2-se-production.png)

You will see the copyedited files are now available in the **Production Ready Files** panel.

In the **Production** tab, you can assign participants (such as a Layout Editor) to the Production stage of the workflow and communicate with participants in the **Production Discussions** panel.

## Publication Tabs

Everything related to publishing a submission is done under the Publication tab. The Publication tab allows you to edit or add information about the submission, including contributors, metadata, and identifiers. It is also where you will upload the final Galley files for publication in the journal.

![Publication tab that displays metadata information of a manuscript.](./assets/learning-ojs-3.2-production-publication-tab.png)

Here is an overview of what the different tabs in this section are for. Detailed instructions on some of these are available later in the chapter.

**Title & Abstract** Use this tab to edit the article title, subtitle, and abstract.

If any changes are made, click Save before exiting this window.

**Contributors** Use this tab to add, edit, or remove article contributors.

**Metadata** Use this tab to add or edit article keywords.

If any changes are made, click Save before exiting this window.

**Identifiers** Use the Identifiers tab to view or add a unique identifier, such as a DOI. More information about assigning and managing DOIs is available in the [DOI Plugin Guide](/doi-plugin/).

**Galleys** Use the Galleys tab to upload the final file for publication. This is explained below.

**Permissions & Disclosure** Include details about the copyright holder and link to the article license, if applicable. This will be automatically filled in according to your [Distribution Settings](./settings-distribution.md).

**Issues** Use the Issues tab to assign the article to a journal issue. This is explained below.

### Multilingual Submissions

The Title & Abstract, Metadata, Permissions & Disclosure, and Issue tabs have options for adding and editing metadata in multiple languages. Languages must first be turned on in Website Settings -> Setup -> Languages.

Select the desired language tab below the “Schedule for Production” button, and complete the metadata fields in the selected language.

![Multilingual button and text fields for French (Canada) in the metadata subtab within Publication.](./assets/learning-ojs3.2-ed-prod-metadata-lang.png)

The “Issue” tab allows you to upload multiple cover images in selected languages.

![Multilingual button and upload field for an issue cover image for French (Canada) in the Issue subtab within Publication.](./assets/learning-ojs3.2-ed-prod-issue-languages.png)

## Format Article for Publication

### Assign Layout Editor

A notification banner indicates that you must assign someone to create the galley files (e.g., the PDFs, HTML, etc.) from the production ready files.

This can vary from journal to journal – you may have layout editors or production assistants to do this work. Some journals use an external graphic design or typesetting service. If you would like to communicate with your layout editor, production assistant, graphic designer, or typesetter through OJS and manage the production process with them in OJS, ensure they have a user account and add them as a participant to the submission.

To make the assignment, use the **Assign** link in the Participants list. This will open a new window.

![New window to assign participants such as Layout Editor.](./assets/learning-ojs-3.2-se-production-participants-add.png)

Use the role selector and search button to find appropriate users. Select the user and choose a predefined message, then click **OK** to send.

The user has now been notified via email and in the dashboard.

![Manuscript dashboard after additional participants have been assigned.](./assets/learning-ojs-3.2-se-production-participants-added.png)

You can now see the Layout Editor in the Participants list, and you can see the request notice in the Production Discussions panel. You can now wait for the Layout Editor to complete their tasks.

### Layout Editing

As a Layout Editor, you will have received a message inviting you to create the galleys for the submission. To get started, login to the system and go to your dashboard.

![](./assets/learning-ojs-3.2-le-dashboard.png)

From here, find the submission and select the **Production** link. This will take you to the submission record.

![](./assets/learning-ojs-3.2-le-submission.png)

From the Production Ready Files panel, download the files to your desktop and work outside of OJS to convert them to galley files. The next section explains galley file formats and preparation.

> Note: PKP is currently working on a project to automate the conversion of Microsoft Word documents into other formats, including XML, HTML, PDF, EPUB, etc. Keep an eye on our blog for updates.

### Prepare and Add Galley Files

A Galley is the final publication-ready file that has been prepared for readers and will be published on the article page. Galleys should be in a stable non-editable format (e.g., HTML, PDF, ePub, or XML) versions of the full-text article. Galley files can also include supplementary material such as multimedia files and research data. You can publish a galley file for an article and for an entire issue.

#### Galley file component types

When you upload a galley file, you will need to select a **Component Type**. These are the same component types that authors select from when they upload submission files. You can configure component types under Workflow Settings > Submission > Components, according to whether you want the component type to be published and whether you want a link to it to appear on the article landing page or in the table of contents.

The configurations are as follows:

* Dependent: the link will not appear with published content at all
* Supplementary: The link will appear on the article landing page
* Neither supplementary nor dependent: The link will appear on the article landing page and in the table of contents

For example, if you want to embed multimedia files in HTML files and have these appear on the landing page, the issue page, and the submission page, you would configure the settings as follows:

* Go to Settings > Workflow > Submission > **Components** tab
* Click the blue arrow next to **HTML Stylesheet** and **Edit**
* Uncheck “Mark files of this type as dependent files” and “Mark files of this type as supplementary files”. Click **Save**.
* Click the blue arrow next to **Multimedia** and **Edit**
* Uncheck “Mark files of this type as supplementary files”. Leave “Dependent files” checked off. Click **Save**.

#### Galley file formats

Online journals publish their articles in a variety of file types. The most common are PDF and HTML, but increasingly additional formats are being used, such as ePub, MP3, and XML.

Plugins in OJS allow PDF, HTML, and XML files to be viewed in a web browser or downloaded. If the files are being downloaded instead of displayed in the browser, you may need to enable one of these plugins under Website Settings > Plugins:

* PDF.JS PDF Viewer provides rendering support for PDF Article files.
* eLife Lens Article Viewer provides rendering support for JATS XML Article files using eLife Lens.
* HTML Article Galley plugin provides rendering support for HTML Article files.

Other formats may require additional plugins or can be downloaded directly. Alternatively, you may host the full-text content on a different platform and embed a remote URL by choosing the checkbox: “This galley will be available at a separate website.”

#### Using templates

Requiring all submissions to use a document template that is pre-formatted with your journal’s publication styles (e.g., the font face, font size, boldness, placement, etc., of the header, body, footers, etc.) can make your document conversion much easier. [Microsoft provides a brief overview for creating templates in MS Word](https://support.microsoft.com/en-us/topic/create-a-template-86a1d089-5ae2-4d53-9042-1191bce57deb?ui=en-us&rs=en-us&ad=us).

Once you’ve created a template that matches your journal style, it may be useful for submitting authors, layout editors, or other users. Here’s an example of an OJS journal that requires authors to download and use a template file: [Paideusis](https://journals.sfu.ca/pie/index.php/pie/about/submissions).

Ideally, your template should be created using styles rather than direct formatting. This not only ensures consistency throughout your documents, but will also aid in any conversions to other formats (e.g., HTML). Here’s an [explanation of the difference between styles and direct formatting in Word](https://support.microsoft.com/en-us/office/customize-or-create-new-styles-d38d6e47-f6fc-48eb-a607-1eb120dec563?redirectSourcePath=%252fen-us%252farticle%252fStyle-basics-in-Word-d382f84d-5c38-4444-98a5-9cbb6ede1ba4&ui=en-US&rs=en-US&ad=US)

#### PDF files

A PDF is the easiest type of file to create from a Word document. Current versions of Microsoft Word (and other word processors) let you “Save As” or “Export As” a PDF. The majority of OJS journals publish their articles as PDFs.

PDFs are also popular with many readers as they most closely recreate the printed page. However, PDFs are often less flexible on mobile devices and do not always handle links or embedded media (such as sound or video files) particularly well. With the widespread usage of mobile devices, ensuring your audience can read your articles on their phones or tablets is increasingly important.

Example (see PDF link at bottom of page): [Irish Journal of Technology Enhanced Learning](http://www.journal.ilta.ie/index.php/telji/article/view/22/51)

#### HTML Files

HTML files have the advantage of flexibility. They handle linking and multimedia very well, and can fit on just about any screen - including phones and tablets. They do, however, look different than a printed page, so some readers prefer a PDF. The ideal situation is to provide both PDF and HTML files to best meet the needs of different users.

Creating an HTML file can require more time and effort than creating PDF files. Word processors do not have effective tools for doing a “Save As” to HTML. Microsoft Word tries to do this, but the results are not useful for uploading to OJS. Instead, try following this workflow:

* Convert the Word document. You can use [this free online tool](https://word2cleanhtml.com/) to do an initial conversion.
* Open the resulting HTML files in a text editor (e.g., NotePad in Windows) or HTML editor (e.g., Adobe Dreamweaver). From here, you will need to make any final clean up or formatting. Understanding the basics of HTML is required. There are many [free tutorials](https://www.w3schools.com/html/), but it does take some time.
* Keep the HTML formatting basic. Just focus on paragraphs, line breaks, headings, and links. Don’t worry about fonts, colours, or other design elements - OJS will take care of all of that automatically as part of the overall journal design.
* Upload to OJS as an HTML galley file
* The HTML viewer renders HTML files within an iframe, which may affect navigation to hyperlinked web pages. You can bypass this feature by opening hyperlinks in a new browser tab, by adding the `target="_blank"` attribute to your href tags.

A few example HTML templates can be found and adapted from these sources:

* [Resource by U of A](https://drive.google.com/file/d/1mCP0tguFJf7jJn_CNceEwvRn5eCJrvxP/view) - License: CC0 1.0 Universal (CC0 1.0)

Examples (see HTML link at bottom of the page):

* [Cultural Anthropology](https://journal.culanth.org/index.php/ca/article/view/4434)
* [Evidence Based Library & Information Practice](https://journals.library.ualberta.ca/eblip/index.php/EBLIP/article/view/29621)

##### Style HTML galley files

It is possible to style the design of your HTML galley files in bulk or on an individual per-article basis. Styling in bulk can only be done if you are using a custom theme.

To style an individual HTML galley file:

* While creating the HTML galley file, ensure that it includes a reference to the stylesheet in the `<head>` section, e.g. `<link rel="stylesheet" href="./article_styles.css" type="text/css" />`
* Upload the HTML galley file (see below for instructions on how to **Add Galley Files**)
* Edit the galley file
* Upload the CSS stylesheets with the appropriate **Component Type - HTML Stylesheet**

To style all HTML galley files: If you are using a custom theme plugin, you can write a line of code to include a custom style for all HTML galleys. This will only apply to HTML galley files that do not have a style applied individually. More information on custom theming is available in the [PKP Theming Guide](https://docs.pkp.sfu.ca/pkp-theming-guide/en/).

##### Add images and multimedia to an HTML Galley

If you would like to include images or multimedia files in an HTML galley file, you can upload them as Dependent Files to the submission, and link to them within the file to display them.

Before beginning the item upload, you will need an HTML page containing one of the following:

* `<audio controls>` element (for MP3)
* `<video>` element (for MP4), or
* `<img src=”imagename”>` tag for images

The HTML page should also contain the exact name of the file you are connecting to.

You will need to save the audio/video/image file in MP3/MP4/JPEG/GIF format using the name in the HTML page.

Your HTML file will need to contain the following minimum code (for audio files). For the related video or image file code, please see the w3schools instructions on [embedding video in HTML](https://www.w3schools.com/html/html5_video.asp) or instructions on [embedding images in HTML](https://www.w3schools.com/html/html_images.asp).

```html
<html>
<head>
<title>MP3 upload</title>
</head>
<body>
<audio controls>
  <source src="filename.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
</body>
</html>
```

In OJS you will need to configure the settings for your Component Types before adding multimedia files. See **Galley File Component Types** above for details about adjusting these settings.

Make sure you have “Multimedia” and/or “Image” files configured as “dependent files” in the Component Type settings.

![](./assets/learning-ojs3.2-ed-prod-multimedia-component-edit.png)

Now go back to the submission to upload an HTML stylesheet to display your multimedia file. See below for instructions on how to **Add  Galley Files**. In addition, when you upload the file:

* Label the galley according to the multimedia file type (e.g., MP3, MP4, Image)
* Select **HTML Stylesheet** from the **Article Component** dropdown
* Upload the HTML file you prepared with at least the minimum code (instructions above)
* Click **Continue**
* In the **Review Details** tab you can upload Dependent Files. This is where you will upload the MP3/MP4/image file.

![](./assets/learning-ojs3.2-ed-prod-multimed-dep-file.png)

Select **Multimedia** or **Image** from the **Article Component** drop-down menu, and upload the MP3, MP4, or image file.

![](./assets/learning-ojs3.2-ed-prod-upload-multimedia.png)

When uploading an image file you will be asked to add a Caption, Credit, Copyright Owner, and Permission Terms, as applicable.

![](./assets/learning-ojs3.2-ed-prod-image-details.png)

Click **Continue** to complete the upload, review the details, and confirm. Your multimedia file has now been added as a dependent file along with the HTML, and will be embedded in the HTML when the item is published.

![](./assets/learning-ojs3.2-ed-prod-upload-video-dependent.png)

#### ePUB Files

Similar to HTML files, ePub files are ideal for mobile devices but require specialized coding to create. Conversion tools are available, such as [Calibre](https://calibre-ebook.com/). More detailed HOW TO instructions for creating ePub files are [available here](https://www.wikihow.com/Convert-a-Word-Document-to-Epub).

Like HTML files, some additional cleanup may be required after conversion and [require some knowledge](http://www.jedisaber.com/eBooks/Introduction.shtml) of the format.

Example (see EPUB link at bottom of the page): [International Review of Research in Open and Distance Learning](http://www.irrodl.org/index.php/irrodl/article/view/2895)

#### XML Files

XML files are structured files in which each part of the article is tagged as a distinct element. This allows the reader to easily navigate through and access figures, images, metadata, references, and parts of the article text. Creating XML files is a very efficient way to publish in multiple formats. When you create an XML file, you can then automatically generate PDFs, HTML, ePub, and other formats.

![](./assets/learning-ojs3.2-ed-prod-xmlgalley.png)

PKP is developing tools that will allow you to create, convert, and edit XML files within OJS. Currently you need to create and edit the files outside of OJS. If you want to produce XML galley files for your journal, you can use the services of a graphic designer or typesetter, or if you have some XML expertise you can create the files yourself. W3schools has excellent tutorials on XML.

Example [Food and Nutrition Research](https://foodandnutritionresearch.net/index.php/fnr/article/view/3609/10173)

#### Multimedia files

It is becoming increasingly popular for journals to publish multimodal content, including audio and video files, in addition to text-based articles. In addition to providing audio and visual formats for text-based articles, which can help to increase the accessibility of journal content, multimodal content is increasingly [valued as an alternative form of scholarship](https://www.tandfonline.com/doi/full/10.1080/07294360.2017.1389857?casa_token=QlJ8xBTQUEMAAAAA%3AWDkOV6R-qfZxJBimLv_Jv4iB3o2XYeA-Cym7uxHoCww9THLVmZFVfKmRP3dtqq098HvYG6kqTl_v) which represents and reflects different modes of expression and ways of knowing. Journals that choose to create audio versions of text-based articles may choose to do so manually, by having someone read the article into a voice recorder, or automatically using Text to Speech software.

Multimedia files can be embedded into the article page on your journal site, or can be linked to  from an external site, such as YouTube or SoundCloud. If you use an external site, the quality may be better, but statistics will not be collected on galley views or downloads, and preservation of the content is dependent on the external site.

When uploading a multimedia file, you can select “article text” from the component list and upload the file (MP3, MP4, image file, etc) directly. This will allow the user to access the file using the image viewing software or the audio/video playing software installed on their device.

Example (see MP3 link in side menu at bottom of the page): [International Review of Research in Open and Distance Learning](http://www.irrodl.org/index.php/irrodl/article/view/3279)

Alternatively, you can embed the audio, video, or image file in an HTML page so that users can view the file directly in their browser. See **Add images and multimedia to an HTML galley** above for instructions on how to do this.

Example: [Intersectional Apocalypse](https://journals.lib.sfu.ca/index.php/ifj/article/view/673)

##### Upload a multimedia file linked from an external site

Upload the multimedia galley file in the Production stage of the workflow. See below for instructions on how to **Add Galley Files**. In addition, when you upload the file:

* Label the galley according to the multimedia file type (e.g., MP3/MP4)
* Check the box indicating “This galley will be available at a separate website”

![](./assets/learning-ojs3.2-ed-prod-upload-video-youtube.png)

To get the URL, locate the video or audio in YouTube, SoundCloud, etc., then click **Share** and copy the URL.

![](./assets/learning-ojs3.2-ed-prod-share-youtube.png)

Paste the URL into the remote galley field and click **Save**.

The video should now appear in the published submission.

### Contact the Author

Next, you will want to share the PDF with the author for a final look and sign off. To do so, use the **Add Discussion** link in the Production Discussion panel. This will open a new window.

![](./assets/learning-ojs-3-le-production-add-participant.png)

Remember to add the author at the top of the window and then add a subject and a message.

Before sending, attach a copy of the PDF file using the **Upload File** link. This will make it available to the author.

![](./assets/learning-ojs-3-le-production-add-participant-upload.png)

Remember to select the correct Article Component and then upload the PDF.

Click **Continue**.

Next, make any changes to the file name (usually you don’t need to do anything here).

![](./assets/learning-ojs-3-le-production-add-participant-upload2.png)

Then, you can upload additional files, if necessary.

![](./assets/learning-ojs-3-le-production-add-participant-upload3.png)

Once you are done, hit **Complete**.

The file is now attached and you can send the message using the **OK** button.

![](./assets/learning-ojs-3-le-production-add-participant2.png)

The Author has now been notified and you can await their response.

### Author Response

Once the author has had a chance to review the galleys and respond, you will receive an email notification and will see a reply in the Production Discussions.

![](./assets/learning-ojs-3-au-production-message-reply.png)

### Add Galley Files

Now that the Author has proofread the galleys, you can make any final changes, and then upload them to the submission. To upload galleys, go to the Publication tab, then Galleys.

![](./assets/learning-ojs-3.2-au-production-galleys.png)

Then click **Add galley**, which will open a new window.

![](./assets/learning-ojs-3-au-production-galleys-upload1.png)

Add an appropriate label (e.g., PDF, HTML, etc.) and click **Save**.

![](./assets/learning-ojs-3-au-production-galleys-upload2.png)

From this window, choose the appropriate article component (e.g., article text) and upload the galley file. Click **Continue**.

![](./assets/learning-ojs-3-au-production-galleys-upload3.png)

If necessary, change the filename. Click **Continue**.

![](./assets/learning-ojs-3-au-production-galleys-upload4.png)

If you have more files, upload them now. Otherwise click **Complete**.

You can now see the galleys in the Galley panel.

![](./assets/learning-ojs-3.2-au-production-galleys-uploaded.png)

You can make changes to the upload by selecting the blue arrow to the left of the galley label, which reveals options to edit, change the file, or delete.

### Edit Galley Files

If you want to make a change to a galley file or galley file label after it has been uploaded, you can edit it. Please note that if the article has already been published, to make a change to the galley file you will first have to un-publish the article or create a new version (see Versioning of Articles below). But before the article is published, you can edit the galley file easily.

1. Open the submission from the submission dashboard
2. Go to the Publication tab and Galleys
3. Click the blue arrow next to the file you want to edit
4. If you would like to edit the galley label, click the Edit button that appears and change the Galley Label
5. If you would like to change the file, click Change File and upload a new file
6. When you are finished editing, click Save

![](./assets/learning-ojs-3.2-au-production-galleys-edit.png)

### Inform the Section Editor

Finally, you will need to inform the Section Editor that the galleys have been completed. To do so, use the Production Discussion panel and choose the **Add Discussion** link.

![](./assets/learning-ojs-3-au-production-galleys-complete.png)

Add the Section Editor to the top of the page, and then include a subject line and message. Click **OK** to send the message.

You can now see the final discussion.

![](./assets/learning-ojs-3-au-production-galleys-discussions.png)

### Section Editor Informs Editor

At this point, the Section Editor receives the notification from the Layout Editor and reviews the galley files.

They can either ask the Layout Editor to make additional changes \(using the Production Discussions\) or inform the Editor that the galleys are ready for publication.

To inform the Editor, use the Production Discussion panel's **Add Discussion** link.

The next step in publishing the submission is to check and finalize the metadata.

## Finalize Metadata

Before publishing the submission, you should check that the metadata for the article is complete and accurate in OJS and matches the metadata on the PDF. This is important for ensuring that the content is indexed by Google Scholar, discoverable by other services, and accessible to readers.

You can check the metadata for the submission by going to **Submissions**, opening the submission, going to the **Publication** tab, and checking the **Title**, **Contributors**, and **Metadata** tabs.

At this point you can also add the article to a category to display it on a thematic category page on your site and extract and save references (if you have not already).

### Add the Article to a Category

Categories can be used to organize your articles into thematic collections. If you use categories in your journal, you can optionally add the article to a category or categories. For instructions on how to create categories see the [Journal Settings chapter](./journal-setup). You can add the article to a category by editing its metadata.

* In the article submission, go to the **Publication** tab
* Click **Issue**
* In the **Categories** box, check the category or categories that you want to add the article to
* Click **Save**

![](./assets/learning-ojs3.2-ed-prod-add-to-category.png)

### Extract and Save References

If you would like to display the article’s bibliographic references on the article page with linked DOIs, and submit the references to Crossref with the rest of the article’s metadata, you can use the “Extract and save references” feature. This feature can only be used if you’re using the DOI plugin and the Crossref plugin to export your metadata to Crossref. The feature will store each reference in the database as a separate reference and add the DOI to the reference on the article page. It will also make it easier for indexing services, such as Google Scholar, identify and index the article’s citations.

The first thing you must do is enable References as a submission metadata field.

1. Go to Workflow Settings > Submission > Metadata
2. Scroll down to **References** and check off **Enable references metadata**
3. New options will appear below and you can select to either
  * do not request references from the author during submission - the References field will not be on the submission form and instead references can be added by an editor
  * ask the author to provide references during submission - the References field will be on the submission form and authors can optionally add their references to it, or an editor can add references to the submission later
  * require the author to provide references before accepting their submission - the References field will be on the submission form and authors will be required to add their references to it
4. Click **Save**

![](./assets/learning-ojs3.2-ed-prod-enable-references.png)

Now if you go to a submission record’s **Publication** tab you will see a **References** tab below. An editor can open the tab and copy and paste the article's references into the field. In addition, if you checked the second or third option above, there will be a **References** field when an author makes a submission and the author will be able to add their references to it.

Each reference should be on a separate line and you should sure the text you paste into the field is unformatted and has no extra line breaks or spaces. Remove any DOIs in the references if you plan to add them later with the Crossref Reference Linking plugin.

When the article is published, the references will appear on the article page and the references will be submitted to CrossRef.

After you have exported the article’s metadata to Crossref, you can insert the DOIs for the article references from Crossref if you use the Crossref Reference Linking plugin. Instructions on how to use the plugin are available in the [Crossref Plugin Guide](https://docs.pkp.sfu.ca/crossref-ojs-manual/en/references).

Once you have the plugin set up and have exported the article's metadata to Crossref, you can insert the DOIs from Crossref back into the references:

1. Open the submission
2. Go to the **Publication** tab and **References**
3. Click **Check Crossref DOIs**
4. Some DOIs will now be added to the references

## Create Issue

When you are ready to publish the article, you have to create an issue to publish it in first. Then you will schedule articles for publication in the issue. The articles will not be published until you publish the issue as a whole. This section explains how to create and edit issues.

From the left menu, select Issues to manage all of the issues for your journal.

![](./assets/learning-ojs3.1-jm-issues.png)

You will see tabs for Future Issues and Back Issues.

**Future Issues** are all of your unpublished issues. You can create as many of these as you wish, and schedule submissions to any of them.

**Back Issues** lists all of your published issues.

![](./assets/learning-ojs3.1-jm-issues-back.png)

To create a new issue, use the **Create Issue** link and fill in the form.

![](./assets/learning-ojs-3-issues-create.png)

There are spaces to add volume, number, year, and title information (e.g., Special Issue #1), as well as a description, cover image, and custom URL. The cover image and description will appear at the top of the issue page on your site, if you add them. If you have volume, number, and title checked off below, you will be required to fill something into each field.

When you’re finished, click **Save**.

### Edit Issue

You can also edit an existing future issue by selecting the blue arrow to the left of the issue entry on the Future Issues page.

![](./assets/learning-ojs3.1-jm-issues-edit.png)

This will reveal an **Edit** link, which will open a new window of information.

![](./assets/learning-ojs-3-issues-details.png)

**Table of Contents**: For a new issue, this will be empty, but for issues that have had submissions scheduled, they will be listed here.

Use the blue arrow next to each submission to reveal links to go directly to the submission record (more about this in Chapter 10) or remove it.

**Issue Data**: This provides access to the volume, issue, number data you entered when first creating the issue.

**Issue Galleys**: This allows you to upload galley of the complete issue – e.g., one PDF containing all articles. This will be linked from the issue web page.

**Identifiers**: Use this space to add a DOI for the issue, if your journal supports issue-level identifiers.

### Order Sections and Articles

When you publish an issue, articles will be displayed under your journal’s sections.

If you go to Journal Settings > Sections and edit a section, you can configure how it will appear on your published issue page, including whether the title of the section is displayed.

You can also drag and drop the sections to change the order of how they will appear on your published issue.

If you want to change the order of sections on a per issue basis or the order of articles within a section:

* Go to **Issues** and open the issue you want to edit
* Click **Order**
* Drag and drop the sections and articles where you want them
* Click **Done** when you are finished

### Preview Issue and Articles

If you want to see what your articles will look like prior to publication, click on the Preview button on the Publication tab of the submission record. Users with the permission to preview will see this button from the Copyediting stage forward.

![](./assets/learning-ojs-3.3-ed-production-publish-preview-article.png)

If you want to see what your articles will look like in the context of an issue before publishing it, you can use the Issue Preview feature:

* Click the blue arrow next to the future issue
* Click **Preview**
* The issue preview page will open. To preview an article, click the article title in the table of contents.

![](./assets/learning-ojs-3.2-ed-production-publish-issue.png)

### Publish Issue

Once you are happy with the issue hit the **Publish Issue** link to publish it on your journal website.

### Notify Readers

You will have the option to send a notification to users about the new issue.

To not send a notification of a new issue published, uncheck the box beside “Send notification email to all registered users” before pressing **OK**.

![](./assets/learning-ojs-3.2-ed-production-reader-notify.png)

The content of the announcement is generated automatically and cannot be edited. You can alternatively use the [Announcements](./settings-website.md#announcements) feature to send a publication announcement with customized content.

### Unpublish Issue

Use the **Unpublish Issue** link to remove the issue and all of its content from public view. The issue will revert to the Future Issues tab.

### Delete Issue

You can use the **Delete** link to remove the issue entirely. Not only will the issue be unpublished, the organizational structure and any issue metadata will also be removed. Any assigned articles will revert to their unpublished status.

## Add the Article to an Issue

Now that you have created an issue, you can add the article to it. Please note that the article will not be published until the issue is published. In this step you are assigning the article to an issue.

* Go back to **Submissions**
* Find and open the submission you want to publish
* Go to the **Publication** tab > **Issue**
* In the **Issue** field, select the issue you want to publish the article in
* The **Section** will be filled in automatically based on the submission metadata but you can change it if needed
* You can select a **Category** if you haven’t already done so (explained above)
* If you want an image to appear on the article page, upload it under **Cover Image**
* You can add **Page Numbers**, which will be included in the metadata and on the table of contents
* **Date Published** will be set automatically when the issue is published. Do not enter a publication date unless the article was previously published elsewhere and you need to backdate it.
* Click **Save** when you are finished

![](./assets/learning-ojs3.2-ed-prod-add-to-issue.png)

### Continuous Publishing

OJS is currently designed for a traditional publishing model where articles are published in issues. However, continuous publishing is a popular alternative way to publish scholarly research, in which articles are published as they are ready. You can use a continuous publishing model within OJS.

You can create an issue with a title like “Current Publications,” publish it, and add articles to it as they become available. The articles will be published immediately on the current issue page of your site.

When the “Current Publications” issue gets full, you can rename it with an issue number (e.g., Vol 1, Issue 2) and create a new “Current Publications” issue for the next batch of new articles.

If you would like to notify your readers when each new article is published, you will have to create an individual **Announcement**, as the automatic notification message for a new publication can only be sent when a new issue is published. See the [Website Settings chapter](./settings-website.md#announcements) for information about Announcements.

## Schedule for Publication

The next step is to schedule the article for publication. Although the article will not be published until the issue it is assigned to is published, the Schedule for Publication step is the final step in confirming that the article is ready to be published.

Only a Journal Editor can schedule an article for publication, not a Section Editor or Guest Editor.

The article must have been assigned to an issue and passed the Review stage in order to be able to schedule it for publication.

When you are ready to publish the article:

* Open the submission
* Go to the **Publication** tab
* Click the blue **Schedule for Publication** button.

![](./assets/learning-ojs3.2-ed-prod-schedule-for-pub.png)

A message will pop up that confirms you want to schedule the article for publication. Click **Publish**.

### Schedule for Individual Publications

In previous versions of OJS, an article would be assigned to an issue and would be published when that issue was published. In OJS 3.2, it is now possible to set a specific publication date for each publication.

To do this, under the **Publication** tab of the manuscript, go to **Issues**.

Under **Date Published** you can enter the publication date if it is different from the issue publication date. If not, leave this blank.

![](./assets/learning-ojs-3.2-ed-production-schedule-individual.png)

In order to schedule an individual publication, it must be assigned to an issue and have passed the review stage.

If the date is set to a future date, the publication should be published when the scheduled task runs for that date.

If the scheduled manuscript is unscheduled from the issue, the previously scheduled date should not change.

## Versioning of Articles

An ability to publish versions of articles is one of the major new features in OJS 3.2. This feature supports preprint publication and publishing new versions of articles when a correction or significant change has been made. With the versioning feature you can manage different versions of an article and clearly indicate which is the most current.

Once an article is published, neither metadata nor galleys can be edited. When a revision of a published article or metadata is necessary, it can be done in one of two ways:

![](./assets/learning-ojs-3.2-ed-production-versioning-ways.png)

**Option 1: Unpublish and republish**

Unpublishing an article allows you to make changes without creating a new version. After unpublishing, you can update metadata and/or replace the galley file and schedule the article for publication again. If scheduled into a published issue, it will become available right away. No notification will be sent to readers, since the notification is sent when an issue is published, not for an individual article.

**Option 2: Create new version**

When creating a new version, you will be able to make changes to the metadata and/or galley files. Make sure to click **Save** on the bottom right to record the changes.

You can keep track of version updates under **All Versions**. Each version is marked by a number and date published. The version currently being updated is marked by a number and **Unpublished**.

![](./assets/learning-ojs-3.2-ed-production-all-versions.png)

Once your changes are completed, you can publish the new version by clicking **Publish** on the top right. If scheduled into a published issue, it will become available right away. No notification will be sent to readers since the notification is sent when an issue is published, not for an individual article.

The list of prior versions and update dates will be listed on the published article page.

![](./assets/learning-ojs-3.2-ed-production-published-versions.png)

Readers will be able to access previous versions. They will see a message on the article and galley pages advising them that it is an outdated version and pointing them to the most recent version.

Example of an outdated version message on the article page:

![](./assets/learning-ojs-3.2-ed-production-outdated-version.png)

Example of an outdated version message on the PDF galley page:

![](./assets/learning-ojs-3.2-ed-production-outdated-pdf.png)

The article URL will always point to the most recent version, with earlier versions being available at the same URL with the version at the end of the URL (e.g. /version/1234/).

### DOIs and Indexing of Versions

Where a DOI was assigned to the original version, it will not be changed automatically. Previously deposited CrossRef metadata will not be automatically updated. If article metadata was changed, we recommend updating CrossRef metadata in the CrossRef XML Export Plugin by manually depositing the updated article. For instructions on how to manually deposit an article see the PKP’s [CrossRef Plugin Guide - Manual Deposits](https://docs.pkp.sfu.ca/crossref-ojs-manual/en/config#manual-deposits).

Indexing services and repositories that use OAI to harvest metadata will need to harvest the article metadata again in order to update to the new version.

The new version will be tagged properly to be recognized and updated by Google Scholar's index, but the harvester will need to visit your site again in order to find the new version.

It is best to check with a particular repository or index to learn what their process is and what they require.

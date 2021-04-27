---
generateHeadingToc: true
---

# Importing and Exporting Data

## Introduction

Open Journal Systems offers a variety of tools and Import/Export plugins which allow the Journal Manager to inject data into and extract data from OJS. More information can be found for each plugin's documentation within OJS' plugin directory (`plugins/`).

Import/export functionality is also available as a command-line tool; see `tools/importExport.php` and the command line section for more information.

## Using the Quick Submit Plugin

The easiest way to import existing data into OJS is by using the Quick Submit plugin. This is used by journals that have a set of "ready-to-publish" files (usually PDFs), which need to be uploaded for immediate reader access.

Use cases include:

-   journals that are only using OJS to display their content and not using the editorial workflow
-   journals that were published using another platform and are migrating to OJS
-   journals that were originally published in print and have since been digitized

To use this plugin, you will need:

-   to be enrolled as an editor in the OJS journal, allowing you to create the issue for the new files
-   to be enrolled as a journal manager in the OJS journal, allowing you to access the Quick Submit plugin
-   a set of ready-to-publish files (e.g., PDFs)
-   all of the metadata for the files (e.g., author names, titles, abstracts, etc.)

First, log in as an Editor and [create the issues](http://docs.pkp.sfu.ca/ojs3/en/future_issues.html) (or issue) that will contain the new files.

Next, log in as a Journal Manager and go to the Management Pages, choose Import/Export Data, and then choose Quick Submit plugin.

In the resulting form, you can select the issue you created in the step above, and then add the appropriate publication date for the content (a past date if it was previously published, or today's date if you are publishing it for the first time).

Moving down the form, you must now choose the appropriate section for the journal, and then upload the "ready-to-publish" file.

Next, enter all of the required fields:

-   Author First Name
-   Author Last name
-   Author email -- you can make something up if necessary -- e.g., no@email.com
-   Title
-   Abstract (not always required)

You may need to copy this data directly out of the "ready-to-publish" file and paste into the form. You can also fill in any of the non-required fields as necessary for your journal.

Finally, hit the Save and Continue button (if you are just doing one file) or the Save and Create Another button if you have more to do.

The file will now be immediately placed in the assigned issue. If the issue is already published, the files will be visible to your readers now. If the issue is not yet published, the files will not be visible.

## Using the Web-based Expedited Submission Process to Add Articles Quickly

In addition to the Quick Submit plugin, there is another way to expedite the submissions, available to Journal Managers from the 5-step Author Submission process.

First, make sure you are logged in as a user who is enrolled as both an Editor and an Author. From your User Home, choose the Author Role, and start a submission. Fill out the first two steps of the Author Submission Process as you normally would, keeping in mind that you may need to modify the author metadata information if you are not the original author.

When you reach Step 3 of the submission Process ("Uploading the Submission"), you should upload a galley file, as the file you upload here will appear in the final copyediting queue as both an Initial Copyedit file, and as a Galley file. You will still be able to edit, add and remove any galley files at a later step, however. Please note, if you do not upload a file at this point, you will not have the option of expediting the submission process once you are done.

Finish the rest of the submission process as normal. If you have uploaded a file, upon completion of Step 5 you will be presented with the option to move the submission directly to the last step of the Editing Queue. Clicking that link will take you from the submission process to the Editing queue.

You will note that the file you uploaded appears both under Copyediting as an Initial Copyedit file, and under Layout, as a Galley file. For publishing's sake it is the galley file you are interested in. Double-check that the file format has been correctly identified (normally either PDF or HTML), view the proof, and upload any other galley files at this time as well.

You can then schedule the submission under Scheduling, as you would for any other reviewed, copyedited file, and it will appear as soon as the issue it has been assigned to is published. In the case of it being assigned to an already-published issue, it will appear immediately in that issue's Table of Contents.

## Articles and Issues XML Plugin

### Importing Articles and Issues

OJS features the ability to directly import metadata describing articles and issues for your journal. This can be extremely useful when you are adding back issues to your journal, and do not want to go through the standard OJS editorial process. To do this, you will have to have a basic understanding of XML.

Please note that there is another way to expedite the submission process and publish material quickly which does not depend on making XML files, and may be of use if you only have a handful of items to import. You can view complete instructions in the Expedited Submissions section on this page.

### Creating the XML Import File

The Articles and Issues XML Plugin is the primary method for batch importing and exporting article-level content. It can be used to import and export single or multiple issues and/or articles, including comprehensive metadata. You can view the complete DTD here: `plugins/importexport/native/native.dtd`. The DTD supports the following as root elements: `<article>`, `<articles>`, `<issue>` and `<issues>`.

You can view a sample XML article import file in your OJS installation: `plugins/importexport/native/sample.xml`.

There are a handful of things you should be mindful of when importing data.

-   Be sure to define the document type appropriately using `<!DOCTYPE ...>`
-   Your XML file should UTF8-encoded.
-   Your XML file must validate. Most \*nix systems have access to the [xmllint](http://xmlsoft.org/xmllint.html) program for validation; there are also a number online XML validators, such as [Validome](http://www.validome.org/xml/); and many XML editing tools such as [Liquid XML Editor](http://www.liquid-technologies.com/xml-editor.aspx/), [Oxygen XML](http://www.oxygenxml.com/) and [XMLspy](http://www.altova.com/) can also validate XML files.
-   Dates should be specified as YYYY-MM-DD.
-   To import a file, you can use `<embed>` to place a file directly within your XML document, or use `<href>` to link to one.

If you use the `<embed>` tag you will have to base64-encode your files. Using `<embed>` with a base64-encoded file would look something like this:

```
<galley>
    <label>`PDF`</label>
        <file>
            <embed encoding="base64" filename="my_file.pdf" mime_type="application/pdf"> PGxpPjxCPlc8Zm9ukjfdaSD...(and so on)
            </embed>
    </file>
</galley>
```

You can link to full URLs as well as local files using `<href>`. A full URL link would look like the following:

```
<galley>
    <label>`PDF`</label>
        <file>
            <href src="http://www.example.com/import_files/my_file.pdf" mime_type="application/pdf"/>
        </file>
</galley>
```

You can use local linking if your galleys are already stored on the destination machine, but in this case you need to launch the import from the command line<!-- (#Using_the_Plugins_from_the_Command_Line "wikilink")-->. Importing a local file would look like the following:

```
<galley>
    <label>`PDF`</label>
        <file>
            <href src="/home/johndoe/import/my_file.pdf"/>
        </file>
</galley>
```

-   For importing HTML galleys, use the `<htmlgalley>` element. Otherwise, use the `<galley>` element (ie., for PDF/Postscript, audio, video and other files).
-   Some elements can support embedded HTML tags, such as the  abstract element. If you do embed HTML within your document, remember to wrap the HTML within `<![CDATA[]]>` tags.
-   To add empty data to required fields, you can add anything, for example a single space, so that the field is not null. See the following example, where Jane Doe does not have an email address:

```
<author primary_contact="true">
    <firstname>`Jane`</firstname>
    <lastname>`Doe`</lastname>
    <email>` `</email>
    <biography locale="en_US">`Jane Doe's  Bio statement...`</biography>
</author>
```

-   To add more than one term per indexing type, include all terms in the same entry, separated by semi-colons:

```
<indexing>
    <subject locale="en_US">`Term 1; Term 2; Term 3`</subject>
</indexing>
```

- If your journal supports more than one locale, you can include translated terms in a separate entry:

```
<indexing>
    <subject locale="en_US">`Term 1; Term 2; Term 3`</subject>
    <subject locale="fr_CA">`Translated Term 1; Translated Term 2; Translated Term 3`</subject>
</indexing>
```

-   If you make any typographical errors in the data you are trying to  import, you may end up with duplicate or split entries: for example, if your journal already has a section "Articles" with the initials ART, but you mistype in your XML file ``<abbrev locale="en_US">`AR`</abbrev>`` instead of ``<abbrev locale="en_US">`ART`</abbrev>``, a new journal section with  the initials AR will be created, and that one article will be added to it. This can be easily fixed pre-import, but difficult to clean up after.

### Importing Articles and Issues From the Web

The Articles and Issues XML Plugin can be used from the web, from the Journal Manager's User Home:

-   Login as the Journal Manager and from your User Home choose Import/Export Data.
-   Then, choose the Articles and Issues XML Plugin link.
-   Upload your XML file (e.g., `ojsV1N1.xml`).

You will be notified of any errors, or if the import was successful.

### Exporting Articles and Issues From the Web

You can export either single or multiple articles and/or issues from the Journal Manager's User Home:

-   Login as the Journal Manager and from your User Home choose Import/Export Data.
-   Then, choose the Articles and Issues XML Plugin link.
-   You will be provided with the options to Export Issues or Export Articles. Depending on what you choose, you will be able to export either single or multiple articles, or single or multiple issues at a time. These will be exported in XML format, and can be imported to this or another journal at a later date.

> **Note:** Please note that using this plugin to export articles and issues will not only export all relevant metadata, but will include all article files (HTML, PDF, etc.) embedded within the XML document in Base64 encoding. This can result in large, cumbersome XML files, especially when multiple issues are exported at once. Opening them in an editor to view or change any XML data or metadata may be taxing for your computer, and it may take some time to download and/or upload said files, depending on your connection and the resources of the source server.

## Users XML Plugin

The Users XML Plugin can be used to import and export users and their roles. See the XML DTD in `plugins/importexport/users/users.dtd` for more information, as well as the sample file in `plugins/importexport/users/sample.xml` and in Appendix B.

### Importing Users

You can import single or multiple users from the Journal Manager's User Home:

-   Login as the Journal Manager and from your User Home choose Import/Export Data.
-   Then, choose the Users XML Plugin link.
-   You will find the option to upload an XML User Data file underneath the Export Users section on the Users XML Plugin page.

### Creating the Import Users XML File

The Users XML Plugin can be used to import and export single or multiple users. You can view the complete DTD here: `plugins/importexport/users/users.dtd`. The root element is `<users>`.

You can view a sample XML user import file in Appendix B, and also in your OJS installation at `plugins/importexport/users/sample.xml`.

There are a handful of things you should be mindful of when importing user data.

-   Be sure to define the document type appropriately using `<!DOCTYPE ...>`
-   Your XML file should UTF8-encoded.
-   Your XML file must validate. Most \*nix systems have access to the xmllint program for validation; there are also a number online XML validators, such as Validome; and many XML editing tools such as Oxygen XML and XMLspy can also validate XML files.
-   `<firstname>`, `<lastname>` and `<email>` are mandatory.
-   Usernames and passwords are optional, and will be generated automatically if omitted.
-   If you allow the system to generate usernames and passwords for the  users you are uploading, you can optionally allow the system to email the users with their account credentials. This option can be  found on the Users XML Plugin Page ("Send a notification email to each imported user containing the user's username and password.").  You can require the user change their password when they next log in  by setting the password attribute "change" to "true": `<password change="true">myoldpassword</password>`
-   The default password encryption is "plaintext" (ie., none). Encrypted assumes it was encrypted by Validation::encryptCredentials() and is using the same encryption algorithm used by the system.
-   If the imported file contains any usernames or email addresses that already exist in the system, the user data for those users will not be imported and any new roles to be created will be assigned to the existing users.

### Exporting Users From the Web

You can export users by one or more roles, or export all users at once. To export one or more roles, simply choose the roles you want exported by clicking (or Ctrl-clicking, if more than one role) the role in the role list and then clicking Export Users. To export all users, click the Export All link.

Please note that passwords will be encrypted using MD5 or SHA-1 encryption, depending on what system the journal is using.

## Crossref XML Export Plugin

Please see the [PKP Crossref Manual](https://docs.pkp.sfu.ca/crossref-ojs-manual/).

## Erudit Article Export Plugin

The Erudit Article Export Plugin implements single-article export for full-text indexing using Erudit's XML DTD. See http://www.erudit.org for more information.

### Exporting Erudit Information From the Web

The Erudit XML Plugin can be used from the web, from the Journal Manager's User Home:

-   Login as the Journal Manager and from your User Home choose Import/Export Data.
-   Then, choose the <em>Erudit Article XML Export Plugin</em> link.
-   You will then be presented with a list of published articles, and links to the XML export for each individual article galley. It is not currently possible to export whole articles or issues.

## PubMed XML Export Plugin

The PubMed XML Export Plugin provides an import/export plugin to generate bibliographic information for articles in PubMed standard publisher data format XML for indexing in NLM PubMed/MEDLINE. Details on the XML format and data requirements is available at: http://www.ncbi.nlm.nih.gov/entrez/query/static/spec.html. More information on this plugin can be found in `plugins/importexport/pubmed`.

### Exporting Pubmed Information From the Web

The Pubmed XML Plugin can be used from the web, from the Journal Manager's User Home:

-   Login as the Journal Manager and from your User Home choose <em>Import/Export Data</em>.
-   Then, choose the <em>Pubmed XML Export Plugin</em> link.
-   You will be provided with the options to <em>Export Issues</em> or <em>Export Articles</em>. Depending on what you choose, you will be able to export either single or multiple articles, or single or multiple issues at a time. These will be exported in XML format.

## Using the Plugins from the Command Line

Import/export plugins can normally also be run from the command line. You can view the applicable plugin names by running the following command:

`php tools/importExport.php list`

You can see usage parameters by running the following command:

`php tools/importExport.php [PluginName] usage`

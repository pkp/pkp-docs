# Data Import and Export

Open Journal Systems offers a variety of tools and plugins which allow you to inject data into and extract data from OJS. This chapter explains how to use import and export tools and plugins. More information can be found in each plugin's documentation within OJS' plugin directory \(plugins/\).

Most import and export functions can be carried out by logging in as Journal Manager and going to Tools > Import/Export.

![The OJS Tools menu showing Import/Export options in OJS.](./assets/import-export.png)

However, in some cases import/export plugins need to be installed or enabled first under Settings > Website > Plugins. How to access and use specific plugins and functions are explained in the sections below.

![The plugins gallery where some import/export plugins can be enabled.](./assets/plugins.png)

Import/export functionality is also available as a command-line tool; see `tools/importExport.php` and the command line section for more information.

## Import and export articles and issues

Articles and issues can be quickly imported into OJS using the Quick Submit Plugin or the Native XML Plugin \(formerly the Articles and Issues XML Plugin\). The Quick Submit Plugin is a useful tool for importing 5-10 articles, but for larger numbers of articles and issues, or if you have your metadata in a transformable format, you may wish to use the Native XML Plugin.

### Quick Submit

The Quick Submit Plugin allows you to quickly add complete submissions to an issue. It provides a one-step submission process for editors needing to bypass the traditional submission, review, and editing process. See [Learning OJS 3](https://docs.pkp.sfu.ca/learning-ojs/en/tools) for more details.

### Native XML Plugin

The Native XML Plugin in OJS 3.x replaces the Articles and Issues XML Plugin, which was used in OJS 2 to import article and issue metadata into and out of OJS in an XML file.  It can be used to import and export single or multiple issues and/or articles, including comprehensive metadata. It can be used in the following cases:

* Moving article and issue metadata from one OJS journal to another
* Moving a large number of back issues and articles into OJS

To use this plugin you will need the following:

* A basic understanding of XML
* To be enrolled as a Journal Manager in the OJS journal

If you are importing data, first create the XML import file.  Here are links to sample XML import files and XML schemas:

* Sample XML file for article metadata: [https://github.com/pkp/ojs/blob/main/cypress/fixtures/export-issues.xml](https://github.com/pkp/ojs/blob/main/cypress/fixtures/export-issues.xml)
* Sample XML file for issue metadata: [https://github.com/pkp/ojs/blob/main/plugins/importexport/native/tests/functional/testissue.xml](https://github.com/pkp/ojs/blob/main/plugins/importexport/native/tests/functional/testissue.xml)
* XML schema for use across PKP software applications: [https://github.com/pkp/pkp-lib/blob/main/plugins/importexport/native/pkp-native.xsd](https://github.com/pkp/pkp-lib/blob/main/plugins/importexport/native/pkp-native.xsd)
* XML schema for use in OJS: [https://github.com/pkp/ojs/blob/main/plugins/importexport/native/native.xsd](https://github.com/pkp/ojs/blob/main/plugins/importexport/native/native.xsd)

\* Please note that the XML format used by the Native XML Plugin for OJS 3 is different from the XML format for the Articles and Issues XML Plugin used in OJS 2.  If you export data from OJS 2 and want to import it into OJS 3, you will have to edit the XML file first. Also note that the schema is revised periodically; if exporting from one version of OJS and importing into a different version, you may need to adjust the XML slightly to account for these changes.

Here are some things to consider:

* Be sure to define the document type appropriately using `<!DOCTYPE ...>`.
* Your XML file should UTF8-encoded.
* Dates should be specified as YYYY-MM-DD.
* To import a file, you can use `<embed>` to place a file directly within your XML document, or use `<href>` to link to one.
* If you use the `<embed>` tag you will have to base64-encode your files. Using `<embed>` with a base64-encoded file would look something like this: \[screenshot needed\]
* You can link to full URLs as well as local files using `<href>`. A full URL link would look like the following: \[screenshot needed\]
* You can use local linking if your galleys are already stored on the destination machine, but in this case you need to launch the import from the command line. Importing a local file would look like the following: \[add screenshot\]
* Some elements can support embedded HTML tags, such as the abstract element. If you do embed HTML within your document, remember to wrap the HTML within `<![CDATA[]]>` tags.
* If your journal supports more than one locale, you can include translated terms in a separate entry: \[screenshot\]
* If you make any typographical errors in the data you are trying to import, you may end up with duplicate or split entries: for example, if your journal already has a section "Articles" with the initials ART, but you mistype in your XML file `<abbrev locale="en\_US">`AR`</abbrev>` instead of `<abbrev locale="en\_US">`ART`</abbrev>`, a new journal section with the initials AR will be created, and that one article will be added to it. This can be easily fixed pre-import, but difficult to clean up after.

You should validate your XML file before importing it. If you are using an XML editor tool, such as Liquid XML Editor or Oxygen XML, you can validate the file there. If the XML is not valid an error message will display identifying what line\(s\) have errors.

Once you have the valid XML import file, you can import it:

1. Login to OJS as Journal Manager
2. Go to Tools > Import/Export > Native XML Plugin
3. Under the Import tab, click Upload File and select your XML file
4. Click Import
5. You will be notified of any errors, or if the import was successful.

![The XML file upload screen.](./assets/native-xml-plugin.png)

To export article and issue metadata using the Native XML Plugin:

1. Login to OJS as Journal Manager
2. Go to Tools > Import/Export > Native XML Plugin
3. Depending on whether you are exporting article or issue metadata, go to the Export Articles or Export Issues tab
4. Select the articles or issues you wish to export by checking the box beside them.
5. Click Export
6. The articles or issues will be exported in XML format, and can be imported to this or another journal

\* Please note that using this plugin to export articles and issues will not only export all relevant metadata, but will include all article files \(HTML, PDF, etc.\) embedded within the XML document in Base64 encoding. This can result in large, cumbersome XML files, especially when multiple issues are exported at once. Opening them in an editor to view or change any XML data or metadata may be taxing for your computer, and it may take some time to download and/or upload said files, depending on your connection and the resources of the source server.

![The Export Articles tab under the Native XML Plugin.](./assets/native-xml-plugin-export.png)

## Import and export users

### Export users to XML

The Users XML Plugin can be used to import and export users and their roles. It can be used in the following cases:

* Moving user accounts from one OJS journal to another
* Moving user accounts from another system into OJS
* Moving user accounts from OJS into another system
* Exporting user data from OJS, modifying it, and importing it back into OJS

To use this plugin you will need the following:

* A basic understanding of XML
* To be enrolled as a Journal Manager in the OJS journal

If you are importing users into OJS, first create the XML import file.  Here is a sample XML import file: [https://github.com/pkp/ojs/blob/main/plugins/importexport/users/sample.xml](https://github.com/pkp/ojs/blob/main/plugins/importexport/users/sample.xml)

\* Please note that the XML format used by the Users XML Plugin in OJS 3 is different from the XML format used by the Plugin in OJS 2.  If you export data from OJS 2 and want to import it into OJS 3, you will have to edit the XML file first.

Here are some things to consider:

* Be sure to define the document type appropriately using `<!DOCTYPE ...>`.
* Your XML file should UTF8-encoded.
* `<firstname>`, `<lastname>` and `<email>` are mandatory.
* If you allow the system to generate passwords for the users you are uploading, you can optionally allow the system to email the users with their account credentials. This option can be found on the Users XML Plugin Page \("Send a notification email to each imported user containing the user's username and password."\).
* You can require the user change their password when they next log in by setting the password attribute "change" to "true": `<password must\_change="true">`myoldpassword`</password>`
* The default password encryption is "plaintext" \(ie., none\). Encrypted assumes it was encrypted by `Validation::encryptCredentials()` and is using the same encryption algorithm used by the system.
* If the imported file contains any usernames or email addresses that already exist in the system, the user data for those users will not be imported and any new roles to be created will be assigned to the existing users.

You should validate your XML file before importing it. If you are using an XML editor tool, such as Liquid XML Editor or Oxygen XML, you can validate the file there.  If the XML is not valid an error message will display identifying what line\(s\) have errors.

Once you have the valid XML import file, you can import it:

1. Login to OJS as Journal Manager
2. Go to Tools > Import/Export > Users XML Plugin
3. Under the Import Users tab, click Upload File and select your XML file
4. Click Import Users
5. You will be notified of any errors, or if the import was successful.

![The Users XML Plugin file uploader for importing users.](./assets/users-xml-plugin-import.png)

To export user accounts using the Users XML Plugin:

1. Login to OJS as Journal Manager
2. Go to Tools > Import/Export > Users XML Plugin
3. Select the user accounts you wish to export by checking the box beside them.
4. Click Export Users
5. The user accounts will be exported in XML format, and can be imported to this or another journal

![The Export Users tab under Users XML Plugin.](./assets/users-xml-plugin-export.png)

### Export users to CSV

Journal editors and managers can export the user database as a CSV file. The CSV format is easy to use with marketing and mailing list management tools, such as Mailchimp.

To export users to a CSV file:

1. Navigate to **Statistics > Users**.
2. Click on **Export**.
3. Use checkboxes to select the group(s) of users you wish to export.
4. Click **Export** again. This will generate a download, which may take several minutes to process depending on the size of your user database.

## Export metadata to external sites and indexing services

OJS has plugins that allow you to export article metadata to external sites and indexing services that is compatible with their format.

### PubMed XML Export Plugin

The PubMed XML Export Plugin allows you to export article metadata as an XML file in NLM PubMed/MEDLINE format. For more information about the Plugin, see its README file: [https://github.com/pkp/ojs/tree/main/plugins/importexport/pubmed](https://github.com/pkp/ojs/tree/main/plugins/importexport/pubmed)

### DataCite Export/Registration Plugin

The DataCite Export/Registration Plugin allows you to export issue, article, galley, and supplementary file metadata in DataCite format and register DOIs with DataCite. For more information about the Plugin, see its README file: [https://github.com/pkp/ojs/blob/main/plugins/importexport/datacite/README](https://github.com/pkp/ojs/blob/main/plugins/importexport/datacite/README)

### DOAJ Export Plugin

If your journal is indexed by the Directory of Open Access Journals \(DOAJ\), you can export your journal issue and article metadata to DOAJ either manually using the DOAJ Export Plugin or automatically using the DOAJ API.

To export journal metadata automatically to DOAJ:

1. Obtain an API key from DOAJ by going to [https://doaj.org/](https://doaj.org/), logging in, and checking your membership number.
2. Login to OJS as Journal Manager
3. Go to Tools > Import/Export > DOAJ Export Plugin
4. Under the Settings tab, enter your DOAJ API Key
5. Check off “OJS will deposit articles automatically to DOAJ. Please note that this may take a short amount of time after publication to process. You can check for all unregistered articles.”
6. Click Save

To manually export article metadata to DOAJ:

1. Login to OJS as Journal Manager
2. Go to Tools > Import/Export > DOAJ Export Plugin
3. Go to the Articles tab
4. Select the articles you want to export.  They must be published.
5. Click Export
6. Visit [https://doaj.org/](https://doaj.org/) and login to upload the XML file that was created during the export process

### Crossref XML Export Plugin

The Crossref XML Export Plugin allows you to automatically and manually export article metadata in Crossref XML format for deposit with Crossref.  For information about how to use this plugin, see the Crossref OJS Manual: [http://docs.pkp.sfu.ca/crossref-ojs-manual/](http://docs.pkp.sfu.ca/crossref-ojs-manual/)

### mEDRA Export/Registration Plugin

The mEDRA Export/Registration Plugin allows you to export issue, article, and galley metadata in Onix for DOI \(O4DOI\) format and register DOIs with the mEDRA registration agency. For information about how to use the plugin, see its README file: [https://github.com/pkp/medra/blob/main/README](https://github.com/pkp/medra/blob/main/README)

## Use import/export plugins from the command line

Import/export plugins can normally also be run from the command line. You can view the applicable plugin names by running the following command:

```
php tools/importExport.php list
```

You can see usage parameters by running the following command:

```
php tools/importExport.php \[PluginName\] usage
```

## Troubleshoot importing and exporting

> _"I imported my XML file and I’m getting an error message."_

Did you validate your XML file before importing it?  If you did not, run it through a validator in your XML editor or browser and the validator will indicate what is wrong with the file.

> _"When I click on the Export button I get a blank page instead of a list of data to export."_

You should check the error\_log file to find what went wrong exactly.

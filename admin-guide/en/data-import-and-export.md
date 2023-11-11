---
title: Import and Export - Admin Guide - PKP Developer Docs
description: How to import and export articles, issues, books, preprints and users with OJS, OMP or OPS.
book: admin-guide
version: 3.4
---

# Import and Export

There are many ways to import and export data with OJS, OMP and OPS. To access these tools, you will need to have an account with administrator or manager privileges. Many of these tools are available from the [command line](#cli-tools).

## REST API

You can use the REST API to read and write some data in the application. See the [api documentation](https://docs.pkp.sfu.ca/dev/api).

## Native XML

> The Native XML format changes with each major version. You can not import an XML file generated with 3.2 into a 3.3 install.
{:.notice}

The Native XML format is our XML schema to import and export submissions in OJS, OMP and OPS. This format is preferred for importing back issues, books or preprints, or moving submissions from one journal, press or preprint server to another. This format includes the submissions, their metadata, and all submission files. In OJS, it also includes issue metadata. When submissions are imported using this format, all imported issues, authors, users and files will be created.

Follow these steps to import or export submissions using Native XML.

1. Login as an administrator or manager.
2. Click **Tools** in the main navigation menu.
3. Click **Native XML Plugin**.
4. Click **Import** or **Export** and follow the steps.

### Create a Native XML file for import

> To create an import file, you will need to have a basic understanding of [XML](https://en.wikipedia.org/wiki/XML).
{:.notice}

Before you can import data using this format, you will need to create a XML file that matches the format's schema. The following table includes the XML schemas along with sample XML import files.

| Schema | Sample | Description |
| --- | --- |
| [native.xsd](https://github.com/pkp/pkp-lib/blob/main/plugins/importexport/native/pkp-native.xsd) | | Base schema extended by all applications. |
| [native.xsd](https://github.com/pkp/ojs/blob/main/plugins/importexport/native/native.xsd) | [sample.xml](https://github.com/pkp/datasets/blob/main/ojs/stable-3_4_0/mysql/native-export-sample.xml) | Issues and articles in OJS. |
| [native.xsd](https://github.com/pkp/omp/blob/main/plugins/importexport/native/native.xsd) | [sample.xml](https://github.com/pkp/datasets/blob/main/omp/stable-3_4_0/mysql/native-export-sample.xml) | Book in OMP. |
| [native.xsd](https://github.com/pkp/ops/blob/main/plugins/importexport/native/native.xsd) | [sample.xml](https://github.com/pkp/datasets/blob/main/ops/stable-3_4_0/mysql/native-export-sample.xml) | Preprint in OPS. |

Consider the following when creating your XML import file.

* Define the document type appropriately using `<!DOCTYPE ...>`.
* The XML file should be UTF8-encoded.
* Dates should be specified as YYYY-MM-DD.
* To import a file, you can use `<embed>` to place a file directly within your XML document, or use `<href>` to link to one.
* If you use the `<embed>` tag you will have to base64-encode your files.
* When embedding files, the XML file may become very large. In such cases, you may need to import through the [CLI tools](#cli-tools)
* URLs using `<href>` can link to remote or local files.
* Use local URLs if your galleys are already stored on the destination machine. For this to work, you need to [import from the command line](#cli-tools).
* Some elements can support HTML tags, such as the `abstract`. If you embed HTML within your document, remember to wrap the HTML within `<![CDATA[]]>` tags.
* If your journal supports more than one locale, you can include translated terms in a separate entry.
* If you make any typographical errors in the data you are trying to import, you may end up with duplicate or split entries: for example, if your journal already has a section "Articles" with the initials ART, but you mistype in your XML file `<abbrev locale="en">AR</abbrev>` instead of `<abbrev locale="en">ART</abbrev>`, a new journal section with the initials AR will be created, and that one article will be added to it. This is easier to fix before you run the import than it is to clean up after.
* Consider validating your XML file with an editor like Liquid XML Editor or Oxygen XML. It is easier to find validation errors in these editors than through the import UI in OJS, OMP or OPS.

## QuickSubmit

The QuickSubmit plugin is a useful tool for importing a small amount of back content. It provides a UI that managers can use to manually add a submission, assign it to an issue, and publish it.

Learn more about how to use this plugin in [Learning OJS 3](/learning-ojs/en/tools).

## OAI

Every journal, press or preprint server produces a public [OAI](https://www.openarchives.org/) (Open Archives Initiative) interface that can be used to access published content in the OAI XML format.

To access it, visit the `/oai` page for any journal, press or preprint server. For example, if the homepage is accessed at `https://example.org/example-journal/`, visit `https://example.org/example-journal/oai`.

To enable or disable the endpoint, change the `oai` setting in `config.inc.php`.

## Users

There are a few ways to import or export user accounts. User accounts control access to the application and are distinct from the contributor records of submissions.

### REST API

See the [api documentation](https://docs.pkp.sfu.ca/dev/api) to see what user data can be read or written with the REST API.

### CSV

User account information for each journal can be downloaded as a CSV file using the following steps.

1. Login as an administrator or manager.
2. Go to **Statistics** > **Users** in the main navigation menu.
3. Click the **Export** button.
4. Select all the roles you want to include in the CSV file.
5. Click the **Export** button.

It may take several minutes to generate the CSV file if you have a large user database.

### XML

> The Users XML format changes with each major version. You can not import an XML file generated with 3.2 into a 3.3 install.
{:.notice}

The Users XML format is our XML schema to import and export users and their roles. This can be used to move user accounts between systems, and import from other systems or export to other systems. This format includes the user information and the roles they have in the system.

Follow these steps to import or export users using the User XML.

1. Login as an administrator or manager.
2. Click **Tools** in the main navigation menu.
3. Click **Users XML Plugin**.
4. Click **Import** or **Export** and follow the steps.

### Create a Users XML file for import

> To create an import file, you will need to have a basic understanding of [XML](https://en.wikipedia.org/wiki/XML).
{:.notice}

Before you can import data using this format, you will need to create a XML file that matches the format's schema. The following table includes the XML schemas along with sample XML import files.

| Schema | Sample | Description |
| --- | --- |
| [pkp-users.xsd](https://github.com/pkp/pkp-lib/blob/main/plugins/importexport/users/pkp-users.xsd) | [sample.xml](https://github.com/pkp/ojs/blob/main/plugins/importexport/users/sample.xml) | Example users for OJS |
| [pkp-users.xsd](https://github.com/pkp/pkp-lib/blob/main/plugins/importexport/users/pkp-users.xsd) | [sample.xml](https://github.com/pkp/omp/blob/main/plugins/importexport/users/sample.xml) | Example users for OMP |

Consider the following when creating your xml import file.

* Define the document type appropriately using `<!DOCTYPE ...>`.
* The XML file should be UTF8-encoded.
* `<givenname>` and `<email>` are mandatory.
* If you allow the system to generate passwords for the users you are uploading, you can optionally allow the system to email the users with their account credentials. This option can be found on the Users XML Plugin Page ("Send a notification email to each imported user containing the user's username and password.").
* You can require the user change their password when they next log in by setting the password attribute "change" to "true": `<password must_change="true">myoldpassword</password>`
* The default password encryption is "plaintext" (ie., none). Encrypted assumes it was encrypted by `Validation::encryptCredentials()` and is using the same encryption algorithm used by the system.
* If the imported file contains any usernames or email addresses that already exist in the system, the user data for those users will not be imported and any new roles to be created will be assigned to the existing users.
* Consider validating your XML file with an editor like Liquid XML Editor or Oxygen XML. It is easier to find validation errors in these editors than through the import UI in OJS, OMP or OPS.

## Export to Services

Each application provides plugins to export published metadata to indexing services, such as Crossref, PubMed, DataCite, DOAJ, MEDRA and more. Some of these plugins deposit directly to the services. Others generate an export file according to the service's specifications.

Go to **Settings** > **Website** > **Plugins** to install and configure these plugins. Our [user documentation hub](/) provides guidance for working with many of them.

## CLI Tools

Many of the import/export plugins can be run from the command line. This includes the official plugins for submissions (Native XML) and users that are included with every release.

Run the following command from the root directory of the application to see which import/export tools are available.

```
php tools/importExport.php list
```

Run the following command to see how to use this tool.

```
php tools/importExport.php <PluginName> usage
```


## Troubleshooting

> "I imported my XML file and I’m getting an error message."

Did you validate your XML file before importing it?  If you did not, run it through a validator in your XML editor or browser and the validator will indicate what is wrong with the file.

> "When I click on the Export button I get a blank page instead of a list of data to export."

Your server's error log should contain a more useful error message to help you track down the source of the problem.


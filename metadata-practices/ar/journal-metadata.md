---
title: Journal Settings and Title-level Metadata - Better Practices in Journal Metadata
---

# Journal Settings and Title-level Metadata

Title-level metadata is information about the journal itself and includes journal title and abbreviation, ISSN, journal sections, and copyright. It will be attached to all metadata outgoing from a publication. This is true for citations as much as it is true for how your journal title appears in ORCID records, Crossref, Google Scholar, and any other number of downstream services that index or harvest your publication. It is essential to check and then double-check your title-level metadata. Furthermore, since this metadata will be so broadly used, changes to it require careful consideration.

Fortunately, it is something you only really need to worry about setting up once. But mistakes in title-level metadata must be rectified because they are attached to everything a journal publishes. This section addresses the most critical areas to ensure the best possible metadata quality throughout the publication.

These settings can be configured in the dashboard by a Journal Manager or Journal Editor.

## Languages

Why begin with languages? Because language settings in OJS impact all other settings, so you should set your languages first before inputting or reviewing your other settings.

For bilingual or multilingual journals, language settings are, probably, the single most significant cause for problematic metadata. All too often, users enter multiple languages in single fields or put metadata in incorrect language fields. If you publish multilingually it is important to ***enable and properly configure language options in OJS for your journal***.

### Installing the Necessary Languages

You can find your site-wide language settings when logged in as the **administrator** for your OJS installation. From the administration menu, you can:

1. Navigate to **Site Settings**.
2. Under **Site Setup**, click **Languages**.
3. Enable all languages in which you want to record your metadata, noting your primary locale selection.
4. If a language isn't installed, click **Install Locale** and select the necessary language from the link. (Make sure that you've enabled the new language after installing the locale)

![The Languages Settings as the administrator in OJS.](./assets/metadata-site-lang-settings.png)

These languages will be available site-wide. If you are hosting multiple journals in your OJS install, you'll only need to set this up once to have these languages available to all journals for that installation. If each of your hosted journals is on its own install or virtual machine, you'll need to enable the required languages for each of them.

### Language Settings for the Journal’s OJS Website

To find your journal's language settings:

1. Navigate to **Settings** on the dashboard sidebar.
2. Click **Website**.
3. Click **Setup** on the top navigation bar.
4. Click **Languages** from the left sidebar.

![The Languages setting at the journal-/title-level.](./assets/metadata-journal-lang-settings.png)

**Primary locale** represents the default language of your journal. It's the language the site will load in for external viewers and also the language in which metadata will, without any user intervention, be recorded.

**UI** represents the languages available to users to swap between on your journal webpage for both the front-end and the back-end. OJS locales are designed to translate all of the stock copy and navigation for any available language. If you want your site to be available in English and French, for example, you'll want to click the box for "UI" for each language.

**Forms** will allow any forms in the system (user registration, for example) to be available in the selected languages.

Similarly, **Submissions** represents the languages in which you intend to receive content. A journal may, for example, have bilingual navigation but only accept submissions in French. Checking the **submissions** box will enable users to submit materials in that language.

A fully bilingual journal that provides bilingual site navigation and accepts content in more than one language should enable UI, Forms, and Submissions. A journal that provides bilingual site navigation but only accepts submissions in one language would only check the UI box.

Please note that at this time OJS does not support the display of multilingual metadata in a unilingual UI. For instance, if you are an English-language journal that provides French translations of article abstracts, these will only display on the article’s landing page if both the English and French UI are enabled.

### Reviewing Language Fields

OJS will handily inform you if your multilingual metadata has been filled out. If you have only entered the metadata for one of the supported languages, you'll see a reddish-pink globe icon next to the field. It looks like this:

![A field with missing bilingual metadata, indicated by a red globe icon.](./assets/metadata-multilang-empty.png)

If the field has multilingual counterparts that have been filled out, you'll see a green globe like this:

![A field with complete bilingual metadata, indicated by a green globe icon.](./assets/metadata-multilang-filled.png)

**Please note**: Not all metadata will require a translation, for example proper names of organizations or individuals. In this case, only put your metadata in the required fields of the primary language. **OJS will automatically default to the language available in the metadata for any metadata that's missing.**

### Dos and Don'ts for Reviewing Language Fields

* Do
  * Enable all the languages (Locales) associated with your journal(s) at the platform-level.
  * Configure your language settings to reflect the UI and submissions options your journal(s) are utilizing.
* Don't
  * Skip your language settings.
  * Put your users in a situation that encourages them to enter metadata in the wrong language/field because you haven't made it available to them.

## إدارة الموقع

### Journal Identity

OJS has fields for **journal title**, **initials** (acronym), and **abbreviation** (shortened title). Once you have begun publishing, it is strongly recommended to not modify these fields, except in the case of a title change. (See the following section for more information about title changes.)

None of these fields should contain more than one language. (See the previous section about Languages if your journal is bilingual or multilingual.)

![Te OJS Journal Settings/Masthead settings completed with multilingual metadata.](./assets/metadata-multilang-masthead.png)

There is also a **Path** field that serves to establish the journal’s URL. It's best to avoid any characters in this field that might mess up a URL. [UTF-8](https://en.wikipedia.org/wiki/UTF-8) encoding is supported in OJS, but it will cause many headaches to put, for example, an “@” symbol here. Also, it is recommended to not change this field once it is set, even in the case of a name change.

![The path field in Journal Settings/Masthead.](./assets/metadata-path.png)

### Publishing Details

Publishing details include:

* Publisher
* Online ISSN
* Print ISSN

These details are likely to be pushed out whenever your journal is indexed, archived, or harvested. ISSN, in particular, is essential, especially in the tracking and discoverability of serials. Important details about ISSNs include:

* Significant changes/modifications to the journal title usually result in the assignment of a new ISSN to the journal. Such changes must be communicated to your national ISSN agency (in Canada, this is [ISSN Canada](https://www.bac-lac.gc.ca/eng/services/issn-canada/Pages/issn-canada.aspx)). Changes to subtitles or translated titles do not require a new ISSN, but should still be communicated to your national ISSN agency, regardless.
* All active ISSNs must be used in an OJS instance and should be entered in the appropriate fields in Journal Settings/Masthead.
* The print ISSN of the journal should only be entered in OJS metadata if a journal continues to publish a print edition (print ISSN use should cease when printed versions stop).
* You can record prior/defunct ISSNs on your "About the Journal" page.
* Other title-level metadata (publisher, frequency of publication etc.) should be kept up to date both in OJS and your ISSN record(s).

For more information on journal standards and identifiers, please see PKP’s guide [Getting Found, Staying Found](/getting-found-staying-found/en/getting-found-visibility).

### Key Information and Description

These fields are an excellent opportunity to include information you want to convey to your readers and potential authors. The **About the Journal** section is important because it includes all of the information authors will employ to evaluate whether or not they want to publish with you. Some indexers also use this publicly available information to evaluate your journal against their selection criteria.

The **About the Journal** section should be used to communicate the following:

* Editorial team/board members
* Aim and scope
* Review process
* Instructions for authors
* Fees, such as Article Processing Charges (APCs) or submission fees
* Open access policy
* Copyright policy and license used by the journal
* Self-archiving policy
* Digital preservation policy
* Plagiarism and other ethical policies
* Former title(s) and ISSN(s)

### Dos and Don'ts for Key Information and Description

* Do
  * Keep your essential publication information up to date in OJS and with your national ISSN agency.
  * Use About the Journal to express details you want authors, readers and others to know.
* Don't
  * Change your journal title or essential publication information without notifying your national ISSN agency.
  * Put the journal’s print ISSN in your metadata if you no longer have a print edition.
  * Put two languages in a single field.

## Journal Sections

Journal sections in OJS are intended to delineate between things like Articles, Book Reviews, Interviews, etc. They allow journals to configure specific policies for submissions to those sections and also provide workflow parameters for editors assigned to those sections.

Try to keep your sections limited as this will help authors submit to the correct place. Only create sections that will be part of your published issues. You should not use sections to convey a stage of the publishing process, such as “In Press,” as your articles will be indexed with this section metadata attached. Also make sure to provide translations for each section if your journal is multilingual.

Additionally, it's surprisingly common for journals to ignore the section settings. For example, abstracts are required by default. This usually results in a lot of authors plopping "NA" into the abstract field when it shouldn't exist for them at all. Check “Do not require abstracts” for any journal section you know won't have them, or have them regularly. Make sure to review regularly all your section settings for every available section.

### Dos and Don'ts for Journal Sections

* Do
  * Keep it simple.
  * Provide translations for sections.
  * Configure section settings in line with your editorial policies and submission options.
  * Regularly review section settings to keep them up to date.
  * Check the “Do not require abstracts” option if a section doesn't have abstracts.
* Don't
  * Create sections specific to your editorial workflow that aren’t used in publishing, such as “In Press.”

## License and Copyright Metadata

You might be surprised to learn that licenses and copyright count as metadata and that this metadata is affiliated with the articles in your journal. It is hugely important for everyone who might consult or make use of the journal’s content to have intellectual property/license information accurately represented via metadata. That metadata can determine how the work may be used in other locations via harvesting or indexing.

Please make sure that you've correctly configured your license information in OJS. You can find it by going to **Settings** > **Distribution** > **License**.

Too often the copyright settings contradict the licence. For example, an open access journal uses a CC-BY license and that’s what’s indicated in their author agreement and published PDFs, but its licence settings have a CC-BY-ND license. In addition, license information may be included in the **About the Journal** page, author submission guidelines, and journal front matter.

### Dos

* Do
  * Configure your journal's licensing information before you publish.
  * Review your licensing information regularly to make sure it reflects what you're telling authors regarding open access, self-archiving, and sharing their publications.
  * If you change your license/copyright information, make sure to update it in all the places it's mentioned in your journal.
  * Only update article-level copyright and licensing terms for previously published content if it has changed (if a new legal agreement has been executed).

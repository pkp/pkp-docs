---
title: Installing, Enabling, and Configuring Locales - Using PKP Software in Multiple Languages
showPageTOC: true
---

# Installing, Enabling, and Configuring Locales

Once you have established the languages you would like to implement and how you would like each one to be used, whether as a user interface language or as a language option for submitted content, you will need to install and enable the relevant locale files.

## Installing new locales

New locales can be installed by your site administrator. For more information on how to install new locales you can read the [Manage Languages in PKP Software chapter](https://docs.pkp.sfu.ca/translating-guide/en/managing-languages#install-a-language) of the PKP Translating Guide.

## Enabling new locales

Once a locale has been installed on your site by a site administrator, various aspects of the locale be enabled from Website > Setup > Languages. A brief description of each option is provided in the following list, with more detailed explanations provided further below:  

-   Primary Locale: This can only be enabled for one language. You can consider this the “default” language. Your site will first be shown to users in this language. Be especially careful about your primary locale selection, as changing primary locale can have serious consequences for data across your site (details below).
-   UI (User Interface): When enabled, the front-end and back-end interfaces will be available in that language.
-   Forms: When enabled, any forms in the system (user registration, for example) will be available in that language.
-   Submissions: When enabled, authors will be able to make a submission in that language and submit metadata in that language. This also enables submission metadata records to be entered in multiple languages. Be careful when enabling this option for a language, as disabling it after receiving submissions can impact your ability to edit metadata (details below).
    
## Primary locales

As discussed in the previous section, you will be able to specify a primary locale that will serve as the default language for your site. Primary locales are used to determine what language is required for various fields in the software. Users are free to skip entering information in any other language, but some fields will always be required in the primary locale.  

Changing your primary locale after launching your journal can have major consequences for user and submission data (outlined below) so please choose your primary locale carefully prior to allowing registrations and submissions.

### Site-wide locale and journal primary locale required fields

A primary locale is required both at the site and journal level.

For site-wide content such as the site title, or (notably) user given names, family names, affiliations, etc., fields are required in the site's primary locale. In practice, this means that If your journal’s primary locale differs from the site’s primary locale, users will be prompted to enter their names and affiliations in both languages even if they are rendered identically.

For journal-specific required fields such as the journal title, issue titles, etc., content is required in the journal's primary locale.  

### Cautions about changing the primary locale

If you change the primary locale for your journal, user data and submission will not automatically get copied to the new primary locale fields. This has the following implications:

-   User records and submission records will have missing data.
    
-   When you edit a user record or submission record that is missing required fields (such as name fields) in the primary locale, you will need to enter data in those fields before you can save the record.
    
-   When an editor is assigning reviewers and working in the new primary locale, they will not see reviewers who don’t have primary locale data fields filled in.
    
-   Your data could be inconsistent and this may lead to future upgrade issues.
    
If you absolutely must change your primary locale after the launch of your site, please see the Troubleshooting section for tips on how to prepare your data and deal with these potential issues.

## Forms

When enabling different languages, you must make sure all of the journal’s information fields are translated and updated. Otherwise, when changing the browsing language, information will be visible in the primary locale language.

## UI (User Interface)

Once you enable the UI option for at least one additional language, visitors can select another language with the language toggle, which will be automatically added to the website. You can also add a toggle block to the sidebar by enabling the Language Toggle Block plugin from the plugin galley.

## Submissions

Once Submissions are enabled for a language, users will be given the option to select a submission language each time they make a submissions. Submission-specific required fields such as titles and abstracts, author family names, etc. will be required in the language specified in the first step of the submission process by the user.

### Cautions about changing available submission languages

Making changes to available submission languages when there are submissions in the journal may cause errors when trying to edit metadata. You will not be able to edit the metadata of a submission in a given language if you later disable submissions in that language. The only way to edit the metadata for a submission made in a language that has been disabled is to reenable submissions.

If you want to disable submissions in a particular language, go to Website Settings > Setup > Languages and un-check Submissions for that language.  

If you decide to change or add submissions languages, ensure that your submissions policies and author guidelines are translated and updated accordingly. When guidelines are not translated for the languages enabled, OJS will show this information in the primary locale instead.

## About Locales and Users and Roles

The Given Name and Family Name fields in user accounts are multilingual, meaning that the field(s) must be filled out for each language you are using. A user will be prompted to enter their name in all locale fields when they create an account. Author and contributor names on submissions work in the same way. This allows a user to display a different name in different languages, which could be desirable for languages that use different character sets, although this may clash with the limitations of indexing and metadata services (see below).

If you enable a new locale on your journal/press/preprint server, the new locale fields for the user names will be empty. You may be prompted to fill in other locale fields for user names when you enter user records. If you add a new locale and make it the primary locale, you may not be able to search participants by name in submissions or find that contributor metadata is missing on your submissions.

The names of Roles (e.g. “Journal Editor,” “Author”) in OJS, OMP, and OPS are data, and they will not be affected by changes in the locale files. If you change a journal, press, or preprint server’s locale, you will have to translate the role names manually, which can be done by editing each role on the “Roles” tab of “Users and roles.” See [Learning OJS 3: Users and Roles]([https://docs.pkp.sfu.ca/learning-ojs/en/users-and-roles#editing-roles](https://docs.pkp.sfu.ca/learning-ojs/en/users-and-roles#editing-roles)) for instructions on editing roles.

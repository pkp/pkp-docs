---
title: Troubleshooting & Known Issues - Using PKP Software in Multiple Languages
showPageTOC: true
---


# Troubleshooting & Known Issues

## Troubleshooting: Changing Primary Locale

As mentioned before, changing the primary locale of your journal can result in some serious data gaps.

To avoid these issues, you will need to copy the user data and submission data into the primary locale fields. If you have a large number of user and/or submission records, you may need to spend resources developing a script or tool to copy this data. If you have a small number of records you can do it manually.

To move the data manually:

1.  Re-enable the previous locale under Website Settings > Setup > Languages, so that the previously entered data will appear in the records.
    
2.  Open each record and copy the previous locale data into the new locale fields.

If the site-wide locale shows a different language than the one selected to be the primary locale, clean the cache files after changing the language information manually.

  

## Known Issues

There are some known issues with multilingualism in OJS.

-   Users cannot currently see which language a submission was made in in the user interface: This data is stored in the database only. Subsequently, there is no way to correct submissions submitted under the wrong language without changing this information in the database, which can cause issues when submitting metadata to third parties.
    
-   Untranslated email templates: If any email template translation is missing and you try to send an email in that language, the message will be blank. Email templates translation will need to be added to the database.

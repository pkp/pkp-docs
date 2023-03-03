# DOI Registration

Even when a DOI has been assigned to an object in OJS it is not automatically known to the registration agency and the corresponding URL at [https://dx.doi.org/](https://dx.doi.org/) will not yet be resolved. You'll have to register the DOI with one of the DOI registration agencies first. At the time of writing, OJS supports registration with Crossref, mEDRA and DataCite out-of-the-box. You pay a membership fee to register your journal with one of these agencies and  sometimes a small fee per DOI registered.  Some agencies are more suitable for certain types of journals and their prices vary. It is also possible that an organization you already belong to provides membership in one of these agencies.

## Export vs. Registration

Before registering DOIs with Crossref, mEDRA, or DataCite for the first time you'll have to decide whether you want to use the registration connector in "manual export" or "automatic registration" mode. This depends on your relation with the registration agency and, likely,  how hands-on you want to be.

- If you have (or intend to have) your own account at the registration agency then automatic registration will most probably be your preferred choice. Automatic registration means that you do not have to export metadata into the registration agency's XML format or upload files to the registration agency manually. You can register DOIs and metadata directly from within OJS with a few mouse clicks.
- If you do not have access to account credentials yourself then you'll have to export XML files for the objects to be registered. The XML can then be sent to the account owner (e.g. as an email attachment) who'll have to upload the files to the agency's registration site. This is still much better than sending unformatted metadata by email. The OJS-implementation of the XML format has been explicitly certified by the registration agencies for maximum information content, standardization and data quality. Manual transfer errors can be avoided and the account owner will have much less work in uploading a ready-made XML rather than manually entering metadata on the agency's site or composing a compliant XML message from scratch.

While, in principle, it is possible to mix both modes of operation, you should not usually do so. If, for example, you configure the DOI connectors for automatic registration and then upload a file manually to the registration agency you'll end up in a situation where the OJS registration database is out of sync with the registration agencies' database. This can lead to registration errors when trying to update metadata of an object that has been registered manually before. This is especially important when you work with mEDRA as the mEDRA XML format \(O4DOI\) differs for initial registration and metadata update.

It is not problematic, though, to use the XML export feature for local inspection of XML data that will be transferred to the registration agency via OJS later. As long as the actual registration is done in OJS, the local and remote registration databases will not get out of sync.

## Using Registration Plugins

For more-detailed, Crossref specific documentation please see the [Crossref manual for OJS](/crossref-ojs-manual/).  

### Setup

Each plugin has it's own configuration page. They all look a little different depending on the agency you'll be working with, but they all feature two things:

1. Credential information for the registration agency and your account.
2. An option to automatically register DOIs with the agency when you publish.

Your credential information will be provided for you by the agency you're working with. If you don't have any of this information, you can reach out to their support teams.

You may, if you like, keep automatic registration off and deposit each DOI individually yourself. If you're working on a back-issue run or just getting started with your journal, you might appreciate a little more control. Eventually though, it's recommended to just let the plugins automatically deposit.

### Deposit

Again, each plugin is a little different. Generally speaking you can manually deposit a DOI with your registration agency by doing the following:

- click the check box for any content you're looking to deposit (you can filter by "unregistered" content);
- click the "Deposit" button at the bottom of the list and...
- wait for the "Registration Successful!" message.

That's all. Most users will probably be able to do all their DOI registration like this. If you do not intend to update metadata after registration then this is all you'll ever do.

### Updating DOI metadata

Sometimes you'll have an update to metadata related to a publication. Maybe there was a typo in a title or author name, or a substantial change to an abstract. When you replace a galley and/or update your metadata, you should also push that new metadata to your registration agency.

Changes in OJS metadata will not be transferred to the registration agency automatically. You'll have re-deposit the metadata to the registration agency using the same process as detailed in "deposit" above.

## External Registration

Depending on the registration agency, you may bypass using OJS entirely. For example, Crossref has a web deposit form for new publications. External management of DOIs will always be more work. Typically, it involves hand-populating spreadsheets or web forms. But, if you are interested in really spending some personal time with your DOIs, contact your registration agency to ask about your options. 

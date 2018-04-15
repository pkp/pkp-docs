# Automatic Registration with mEDRA/DataCite

This paragraph is only relevant if you decided to register DOIs directly from within OJS. Access to an account with the registration agency is required.

## Apply for your mEDRA/DataCite account

As a Journal Manager please navigate to the agency's connector home page:

- For mEDRA: Import/Export Data &gt; mEDRA Export/Registration Plugin
- For DataCite: Import/Export Data &gt; DataCite Export/Registration Plugin

There you'll find a short introductory notice about how to apply for your own registration account. Please follow the instructions and links there.

## Configure your account credentials

Once you received your username and password from the registration agency you'll have to follow the "configure" link on the connector's home page. You can enter your credentials there. The user interface elements required for automatic registration will only appear after you have configured your credentials. If you do not see the "Register", "Update" or "Reset" buttons mentioned in the following paragraphs then please double-check the configuration page.

## Check Export Format (Optional, Advanced Users Only)

Most users can skip this paragraph and jump directly to the next one. If, however, you are an advanced user who knows the O4DOI or DataCite formats and you want to check what exactly is being exported to the registration agency then you can have a look at the generated XML before you register it.

To do so go to the connector's home page and select one of the lists with exportable objects. When you click the "Export" button for a single object or you select a number of objects and click the "Export" button at the end of the list then you can download the XML format exactly as it will be exported to the registration agency. If you select more than one object at a time you might have to install the "tar" utility on your OJS server and a tar extraction utility on your local computer, see "Installation Requirements" above for details.

Exporting the file will not change the object's registration state. You can look at the XML at any time. In the case of the "mEDRA" connector you'll see the "registration" notification format when the object has not been registered before. After the first registration you'll see the "update" notification format. In the case of the "DataCite" connector the "registration" and "update" formats are the same.

## Register new DOIs

The fast track for automatic registration is:

- Open the "Export all unregistered ..." link on the connector's home page,
- check the list of unregistered objects and make sure that all objects have been selected by default,
- click the "Register" button at the bottom of the list and
- wait for the "Registration Successful!" message.

That's all. Most users will probably be able to do all their DOI registration like this. If you do not intend to update metadata after registration then this is all you'll ever do.

If you want to register specific objects selectively then you can do so in any of the lists you can access through the connector's home page. You can either register objects by clicking on their corresponding "Register" link or by checking several objects manually and clicking the "Register" button at the bottom of the list.

Objects that have been successfully registered will disappear from the "Export all unregistered..." list.

## Update DOI metadata

This paragraph describes how you update the metadata for an existing DOI, not how you assign a new DOI to an already existing object. OJS does not currently support changing the DOI for an already registered object. Assigning a new DOI is only recommended when the content of the corresponding object changed considerably. In the case of OJS this probably triggers another round of internal or external review, layout, proofreading or other editorial tasks. Therefore, if you want to re-register a publication object with a different DOI then you'll have to create a new issue, article, galley or supplementary file and register it as a new object.

Once you registered an object for the first time, it disappears from the list of unregistered objects of the registration agency connector. It will, however, continue to be listed on the object-specific pages. The button corresponding to the object will have changed to "Update" rather than "Register". This is how you can recognize objects that OJS considers "registered".

Changes in OJS metadata will not be transferred to the registration agency automatically. You'll have to click the "Update" button to update the metadata of the object in the registration agency's database corresponding to the metadata currently saved in OJS including all changes made since the last registration or update of the object with the registration agency.

NB: In the case of mEDRA it may happen that an object appears as "registered" in OJS although you received an error message via email after clicking the "Register" button for the first time. This is due to the asynchronous nature of the mEDRA registration service: Successful upload of a mEDRA metadata file does not always mean acceptance of that file into the mEDRA database. Please do NOT click the "Update" button to recover from an error after first registration. Follow the directions in "Reset DOI state" below, instead. You can use the "Update" button to recover from a failed update, though. Please correct the error condition described in the email you received from the mEDRA registration service and then click the "Update" button for the failed object again. If you use the DataCite connector then OJS registration state should always correspond 100% to the real registration state as long as you do not mix automatic and manual registration.

## Reset DOI registration state (mEDRA only)

In the case of mEDRA the registration state of an object in OJS can get out of sync with the real registration state in the mEDRA database. This happens when mEDRA acknowledges a successful upload first but later rejects the file due to error conditions not being checked during upload.

The mEDRA XML format for first registration differs from the XML format for update. Therefore, you cannot use the "Update" button to recover from the error as it will just lead to another failed upload. This is what the "Reset" button is meant for. It appears for all objects that have already been registered. Clicking it removes all registration information for the object from the OJS database such that the object appears to OJS as if it had never been registered before.

Of course you should not click the "Reset" button if the object was successfully registered as it will then delete valid registration information. If you happen to click the "Reset" button by accident then you'll have to re-register the object which will lead to an error message from mEDRA (which you can safely ignore in that case) but will correct the registration state in OJS.

NB: Do not use the "Reset" button to recover from update errors! If you receive an error message via email after clicking the "Update" button then just click the "Update" button again after correcting the problems mentioned in the mEDRA error message.

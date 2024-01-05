---
title: When Are DOIs Assigned?
showPageTOC: true
---

# When and How to Assign DOIs

It is important to understand when DOIs will be assigned because **DOI registration is irreversible**. Once an article or issue is published and your DOI has been registered with an agency, you cannot change it. This is due to the nature of permanent IDs: they are meant to be assigned once and only once and then never change again.
Broadly speaking, DOIs should be assigned in *OJS when you schedule them for publication in an issue*. 

# Assigning DOIs
Once you have DOIs configured in the plugin, in OJS/OMP/OPS version 3.3 or earlier, you will need to assign them to the relevant objects. The process is significantly revamped for OJS/OMP/OPS version 3.4 and later, where DOIs can be managed from one central area. Documentation on assigning DOIs is forthcoming for versions 3.4 and later.

If you have a large number of back issues, you can [use the Assign DOIs button in the DOI plugin settings as described earlier](https://docs.pkp.sfu.ca/doi-plugin/en/doi-plugin#assign-dois).

However, for future published objects, you’ll need to create and assign the DOI manually. In versions 3.2 and 3.3, from the Publication tab of a submission’s workflow, you’ll find the DOI management area on the left sidebar under the “Identifiers” menu. (In version 3.1, you’ll need to click “Metadata” on the upper navigation bar and then click the “Identifiers” tab). 

![The Identifiers menu in OJS with an empty DOI field beside the "Assign" button.](./assets/doi-assign-button.png)

Press the “Assign” button to create the DOI and the “Save” button to confirm it. While you can assign a DOI before scheduling it for an issue, if your suffix pattern includes volumes or issues, you’ll want to schedule it for publication in an issue first.

(If you are assigning a DOI to an article that has already been published, you will need to temporarily unpublish it using the “Unpublish” button and republish it after assigning and saving the DOI using the “Schedule for Publication” button.)

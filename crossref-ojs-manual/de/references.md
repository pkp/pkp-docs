---
book: crossref-ojs-manual
version: 3.2
---

# Reference Linking and Deposit

As of OJS 3.1.2, it is possible to enable a reference linking plugin for Crossref. The plugin will use the Crossref API to check against plain text references and locate possible DOIs for articles. The plugin will also allow the display of reference lists on the article landing page in OJS.

[https://github.com/pkp/crossrefReferenceLinking](https://github.com/pkp/crossrefReferenceLinking)
> This plugin will automatically add the extracted article references to the DOI registration with Crossref. Crossref will then automatically check if any DOIs can be found for the submitted references. Users can then check the reference section of the metadata to see what reference DOIs have been linked. If article references change once they are registered, the article DOI with the new references will have to be updated. Then the check for the found references DOIs should be done again.
> 
> This plugin requires Crossref DOIs to be assigned to articles, article references to be separately entered and extracted, as well as article DOIs to be deposited to Crossref from within OJS. It uses the Crossref Export/Registration plugin settings: Crossref credentials (username and password), the setting for the automatic DOI deposit (here for automatic references DOIs check), as well as the setting for the testing mode.

## Installing and Enabling the Plugin

1. Navigate to the user **dashboard**.
2. Click **settings**.
3. Click **plugins**.
4. Click the submenu item **plugin gallery**.
5. Find the plugin labelled "Crossref Reference Linking Plugin" and click the title.
6. Install the plugin by clicking "install".
7. Once you get a notification that the plugin is installed, click the submenu item **plugins**.
8. Locate the Crossref Reference Linking Plugin and click the blue checkbox on the right to enable it.

In order to have a consistent reference list for Crossref’s XML Export Plugin and Crossref Reference linking, the references must be enabled and required during submission. See [Learning OJS 3](https://docs.pkp.sfu.ca/learning-ojs/en/production-publication#extract-and-save-references) for information on how to do this.

Once you have the plugin set up and have exported the article’s metadata to Crossref, you can insert the DOIs from Crossref back into the references:

1. Open the submission
2. Go to the Publication tab and References
3. Click Check Crossref DOIs
4. Some DOIs will now be added to the references

For more information on Reference linking, please visit the [Crossref website](https://www.crossref.org/education/reference-linking/)

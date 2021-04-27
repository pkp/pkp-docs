---
book: crossref-ojs-manual
version: 3.1
---

# Reference Linking and Deposit

As of OJS 3.1.2, it is possible to enable a reference linking plugin for Crossref. The plugin will use the Crossref API to check against plain text references and locate possible DOIs for articles. The plugin will also allow the display of reference lists on the article landing page in OJS.

[https://github.com/pkp/crossrefReferenceLinking](https://github.com/pkp/crossrefReferenceLinking)
> This plugin will automatically add the extracted article references to the DOI registration with Crossref. Crossref will then automatically check if any DOIs can be found for the submitted references. Shortly after that, the user can use the plugin to check for these found DOIs, either automatically or manually in the submission metadata tab "References". If article references change once they are registered, the article DOI with the new references will have to be updated. Then the check for the found references DOIs should be done again.
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

# Export metadata to external sites and indexing services

OJS has plugins that allow you to export article metadata to external sites and indexing services that is compatible with their format.

## **PubMed XML Export Plugin**

The PubMed XML Export Plugin allows you to export article metadata as an XML file in NLM PubMed/MEDLINE format.  For more information about the Plugin, see its README file: https://github.com/pkp/ojs/tree/master/plugins/importexport/pubmed  

## DataCite Export/Registration Plugin

The DataCite Export/Registration Plugin allows you to export issue, article, galley, and supplementary file metadata in DataCite format and register DOIs with DataCite.  For more information about the Plugin, see its README file: https://github.com/pkp/ojs/blob/master/plugins/importexport/datacite/README

## DOAJ Export Plugin

If your journal is indexed by the Directory of Open Access Journals \(DOAJ\), you can export your journal issue and article metadata to DOAJ either manually using the DOAJ Export Plugin or automatically using the DOAJ API.

To export journal metadata automatically to DOAJ:

1. Obtain an API key from DOAJ by going to [https://doaj.org/](https://doaj.org/), logging in, and checking your membership number.
2. Login to OJS as Journal Manager
3. Go to Tools &gt; Import/Export &gt; DOAJ Export Plugin
4. Under the Settings tab, enter your DOAJ API Key
5. Check off “OJS will deposit articles automatically to DOAJ. Please note that this may take a short amount of time after publication to process. You can check for all unregistered articles.”
6. Click Save

To manually export article metadata to DOAJ:

1. Login to OJS as Journal Manager
2. Go to Tools &gt; Import/Export &gt; DOAJ Export Plugin
3. Go to the Articles tab
4. Select the articles you want to export.  They must be published.
5. Click Export
6. Visit [https://doaj.org/](https://doaj.org/) and login to upload the XML file that was created during the export process

## CrossRef XML Export Plugin

The CrossRef XML Export Plugin allows you to automatically and manually export article metadata in CrossRef XML format for deposit with CrossRef.  For information about how to use this plugin, see the CrossRef OJS Manual: http://docs.pkp.sfu.ca/crossref/

## mEDRA Export/Registration Plugin

The mEDRA Export/Registration Plugin allows you to export issue, article, and galley metadata in Onix for DOI \(O4DOI\) format and register DOIs with the mEDRA registration agency.  For information about how to use the plugin, see its README file: https://github.com/pkp/ojs/blob/master/plugins/importexport/medra/README  
  



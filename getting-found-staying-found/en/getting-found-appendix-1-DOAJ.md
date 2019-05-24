# DOAJ Documentation for OJS Users

## What is DOAJ and why should I apply?
The Directory of Open Access Journals (DOAJ) is a service that indexes high quality, peer reviewed Open Access research journals, periodicals and their articles' metadata. The Directory aims to be comprehensive and cover all open access academic journals that use an appropriate quality control system (see below for definitions) and is not limited to particular languages, geographical region, or subject areas. The Directory aims to increase the visibility and ease of use of open access academic journals—regardless of size and country of origin—thereby promoting their visibility, usage and impact.

## Before you apply (DOAJ readiness)
Are you ready? Your journal must:
1. Be online and fully open access
2. Have a confirmed journal title and ISSN
3. Have published at least 5 research articles in the last year
4. Have a Creative Commons or equivalent license applied to all articles

## DOAJ Required Fields (LPC Guide)
The following are basic requirements for inclusion in DOAJ, which must be filled out in your [journal application](https://doaj.org/application/new). The numbers of these items match the numbered questions on the DOAJ application. The numbers that are missing are items that are not required.

Next to each item is information about how to enter this information in OJS and, where applicable, where to link to it on your OJS site.

1) [Journal Title](https://docs.pkp.sfu.ca/learning-ojs/en/journal-setup#masthead)
Add this at Journal Settings > Masthead 

2) URL: Enter the URL for your journal


5) Journal ISSN (online): 
This information needs to be added in two places:

* Journal Settings > Masthead > ISSN  
  See [Chapter 5: Journal Settings](https://docs.pkp.sfu.ca/learning-ojs/en/journal-setup#masthead) for more details.
* Add to your journal footer for it to appear on your site          
  See [Chapter 5: Journal Settings](https://docs.pkp.sfu.ca/learning-ojs/en/settings-website#appearance) for more details.

The ISSN will appear on the footer on every page of your site.

6) Publisher:
Enter this information in 2 places:

* Journal Settings > Masthead > Publisher (it will be supplied to 3rd party metadata services, but will not appear publicly on your site)   
See [Chapter 5: Journal Settings](https://docs.pkp.sfu.ca/learning-ojs/en/settings-website#appearance) for more details.
* Journal Settings > Contact > Mailing Address (the Publisher name will appear on the Contact page of your site, which is required by DOAJ)                                                                                                          See [Chapter 5: Journal Settings](https://docs.pkp.sfu.ca/learning-ojs/en/settings-website#appearance) for more details.

The contact’s name will appear on the Contact page of your site.

8) Platform, Host or Aggregator: Enter “OJS” in this field

9) Name of contact for this journal - Somebody who DOAJ can contact about this journal. 
Enter this information at Journal Settings > Contact  > Principal Contact                                                                                                      
See [Chapter 5: Journal Settings](https://docs.pkp.sfu.ca/learning-ojs/en/journal-setup#contact) for more details.

The Contact name will appear on the Contact page of your site.

10) Contact's email address 
Enter this information at Journal Settings > Contact  > Principal Contact                                                                  
See [Chapter 5: Journal Settings](https://docs.pkp.sfu.ca/learning-ojs/en/journal-setup#contact) for more details.

The Contact email will appear on the Contact page of your site.

11) Confirm contact's email Address

12) In which country is the publisher of the journal based? 
Enter this information at Journal Settings > Contact  > Mailing Address. A full mailing address is preferred.                                         
See [Chapter 5: Journal Settings](https://docs.pkp.sfu.ca/learning-ojs/en/journal-setup#contact) for more details.          

The country will appear on the Contact page of your site.

13) Does the journal have article processing charges (APCs)?  
Enter this information in two places:

* Settings > Website> Information > For Authors  
  See [Chapter 6: Website Settings](https://docs.pkp.sfu.ca/learning-ojs/en/settings-website#information) for more detail.
* Settings > Workflow > Submission > Submission Preparation Checklist 
  See [Chapter 7: Workflow Settings](https://docs.pkp.sfu.ca/learning-ojs/en/settings-workflow#submission) for more detail.

14) Enter the URL where this information can be found: 
Article processing charges will appear on the About/Submissions page on your site and on the Information/Authors page on your site.

17) Does the journal have article submission charges?
Enter this information in two places:

* Settings > Website> Information > For Authors                                       
See [Chapter 6: Website Setting](https://docs.pkp.sfu.ca/learning-ojs/en/settings-website#information) for more details. 
* Settings > Workflow > Submission > Submission Preparation Checklist                                                                                                         
See [Chapter 7: Workflow Settings](https://docs.pkp.sfu.ca/learning-ojs/en/settings-workflow#submission) for more details.

18) Enter the URL where this information can be found 
Author submission charges will appear on the About/Submissions page on your site and on the Information/Authors page on your site.

21) How many research and review articles did the journal publish in the last calendar year? The best way to calculate this number is to manually count the research and review articles published in the last calendar year from the Archives pages on your site.

22) Enter the URL where this information can be found.
Published articles appear on your site on the Archives page.
32) Year first complete volume published online with full-text Open Access.

Published volumes appear on your site on the Archives page.

33) Please indicate which formats of full-text are available

* PDF
* HTML
* ePUB
* XML
* Other

Full-text galley files for articles are uploaded during the Production stage of submission and are displayed on the articles and table of contents pages of your site.

34) Add keyword(s) that best describe the journal (comma delimited) 

Should describe the subject matter of the journal. Does not need to be entered in OJS.

## DOAJ SEAL: 
Journals following best practice in OA publishing

During the application process, you can be awarded the DOAJ SEAL if these 7 criteria are all met. __It is absolutely possible to be indexed in the DOAJ without meeting the DOAJ seal requirements.__ 
 
1. Digital archiving of content                                                        
The DOAJ Seal is looking at how the journal can ensure the long-term availability and preservation of published content for the future. The DOAJ will accept some preservation service providers (e.g., LOCKSS/CLOCKSS. Portico, PubMed Central) as well as some national libraries (e.g., British Library, Library of Congress). Please note that institutional servers and repositories do not qualify as long term archival preservation.
If you are a member of LOCKSS or CLOCKSS, enable this here:
Settings > Website > Archiving .   
  See [Chapter 6: Website Settings](https://docs.pkp.sfu.ca/learning-ojs/en/settings-website#archiving) for more details.

2. Permanent identifiers                                                                            
Ensure articles may continue to be found even when URLs change. The most common form of permanent identifier is the Digital Object Identifier [DOI](https://dx.doi.org/), but there may be others in use for a journal.
OJS can generate DOIs as part of the metadata and allows deposit of those DOIs directly to CrossRef (you must be a member of CrossRef to register DOIs):
Tools > Import/Export > CrossRef XML Export Plugin              
    See [Crossref | OJS Manual](https://docs.pkp.sfu.ca/crossref-ojs-manual/en/) for more details.

3. Metadata supply to the DOAJ                                                         
Provide greater visibility and discoverability of journal content by providing article-level metadata and links to the full text. Metadata must be provided to the DOAJ within 3 months via article-level xml file or by the DOAJ API.
You can use the OJS DOAJ Import/Export Plugin:
Tools > Import/Export > DOAJ Export Plugin                                     
See [PKP Administrator Guide](https://docs.pkp.sfu.ca/admin-guide/en/data-import-and-export) for more details.

4. Embedded license information                                                      
To ensure readers (users) know and understand what they are permitted to do with the content, license information must be embedded into each published article, in all its outputs - e.g. on the HTML article webpage, in the XML/metadata and PDF version.                                                                                                           
OJS offers the Creative Commons license options that are acceptable for the DOAJ seal: CC BY, CC BY-SA or CC BY-NC. This license will be embedded in the metadata of published items and displayed on the item’s webpage.
Select the Creative Commons license you will use in:
Settings > Distribution > Permissions                                                   
See [Chapter 8: Distribution Settings](https://docs.pkp.sfu.ca/learning-ojs/en/settings-distribution#permissions) for more details.

5. Allow reuse via selected Creative Commons licenses                   
To allow for generous reuse and remixing of the content. The DOAJ Seal allows for 4 of the Creative Commons licenses: CC-BY, CC-BY-SA, CC-BY-NC, CC-BY-NC-SA. The DOAJ Seal does not consider any of the Creative Commons licenses that restrict remixing or the creation of derivative products of the published content (e.g. CC-BY-ND, CC-BY-NC-ND).
In OJS, when selecting the license to be embedded with the article metadata and displayed on its webpage, be certain to select one of the following license types: CC Attribution, CC Attribution-ShareAlike, or CC Attribution-Noncommercial.
In OJS select the Creative Commons license you will use in:
Settings > Distribution > Permissions

6. Deposit policy                                                                                  
Provide information on authors self-archiving rights in a statement clarifying to authors what their rights are for self-archiving, which should cover their rights to self-archive preprint, accepted, final publisher versions of the article, usually in places like their own website or institutional repository. The DOAJ requires a policy to be listed for a journal and checks what policy is listed for the journal on services like [SHERPA/RoMEO ](http://www.sherpa.ac.uk/romeo/index.php).                
In OJS enter the journal’s Author Self-Archiving Policy in:
Settings > Distribution > Permissions

7. Authors retain unrestricted copyright and publishing rights                                          
The DOAJ expects journals to allow copyright to be retained by the author and not be transferred to the journal or publisher. The journal and publisher must also not obtain exclusive publishing rights to the content, but instead these must be retained by the author. The DOAJ Best Practice recommends the terms of any license agreement should be made freely available to clarify author rights and what, if anything, authors are required to sign when submitting to the journal.
In OJS  you can select the designated copyright holder for the article metadata as the Author, Journal, or Other. To select the Author as the designated copyright holder, go to:
Settings > Distribution > Permissions

## Upgrading from OJS 2 to 3
If you have upgraded from OJS 2 to OJS 3 after your DOAJ application was accepted, you will need to do the following:

* Check that the journal information required in the application is still present on your journal website and in the same places.  Information about the journal is included on different pages in OJS 2 and OJS 3. 
* Submit an update request to DOAJ where page URLs have changed (e.g. About, Contact, etc.)
* If you send article metadata to DOAJ, check that the DOAJ export plugin is enabled and the API key is entered

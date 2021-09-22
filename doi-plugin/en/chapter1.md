# Digital Object Identifiers

## What Are DOIs?

A "Digital Object Identifier" (DOI) is a **globally unique, persistent identifier** for digital objects. In the OJS context such objects are journals, journal issues, journal articles and supplementary files. DOIs are used for the global, persistent identification of such objects. For example, a DOI in a citation would provide the user with a persistent link to the object cited. DOIs are associated with one or several URLs that can be resolved through a persistent URL at a global re-direction domain. Additional metadata about certain types of digital objects can be stored in databases of specialized DOI registration agencies. This enables discovery of these objects through the websites of the **registration agencies** or their partners (e.g. scientific search engines).

DOIs are useful because we know that content doesn't always stay at the same URL. Journals may move between publishers or websites. But, if you use DOIs and you properly update them, they will/should always take you to where the content currently lives. DOIs are also an increasingly important piece of scholarly open infrastructure. Through open APIs, metadata can be more easily shared between parties. For example, take ORCID and Crossref. I can connect the Crossref API to my ORCID account. Whenever my ORCID (another type of persistent identifier, but for researchers) appears in a publication that has also been assigned a DOI, it can be automatically added to my ORCID record.

In publishing, DOIs work in _two stages_.

   1. Assigning DOIs
   2. Registering DOIs

In OJS, the DOI plugin _only assigns DOIs_. For DOIs to work you have to register them with a DOI registration agency. Once you have a membership with a DOI registration agency, you can use their specific plugin in OJS to register your assigned DOIs or you can use one of the other metadata recording tools provided by that agency.

## What are Registration Agencies?

DOIs can be used for a very broad range of digital objects. The only common denominator of such objects is that they have a URL assigned, through which they can be located. DOIs do not impose a single metadata format. Digital objects can have specialized metadata assigned that is specific to the content and format of that object. That's where DOI registration agencies like Crossref, mEDRA, and DataCite come in. These specialized registration agencies accept only certain types of digital objects and define mandatory and optional metadata fields to be delivered when registering a DOI. DOI agencies require that metadata be delivered in well-defined metadata formats. Usually the agency defines their own metadata format or adapt an existing standard to their purpose.

[Crossref](https://www.crossref.org/) is the official DOI link Registration Agency for the International DOI Foundation. It was founded as a cooperative effort by journal publishers to enable cross-publisher citation linking for online academic journals. They register DOIs for issues, articles, galleys and supplementary files and many other types of content.

[mEDRA](https://www.medra.org/) is the multilingual European DOI Registration Agency. It registers documents of many European Union institutions but is also open to private and public institutions world-wide for registration of serial publications, serial publication issues and serial articles. In OJS language these are journal issues, articles and galleys.

[DataCite](https://www.datacite.org/) is an international not-for-profit association of several research institutions. DataCite was originally founded to make DOI registration available for primary research data. However, DataCite can register a broad range of publication objects. In the OJS context these are journal issues, articles, galleys and supplementary files.

## How does the DOI system work?

Briefly, DOIs are composed of a **prefix** and a **suffix** which are separated by a slash (e.g. "10.1234/cdb2011-01-bio234"). Organizations that want to participate in the DOI system have to apply for an account at a registration agency which will assign a unique DOI prefix to the organization (e.g. "10.1234"). The organization can then assign arbitrary suffixes to their digital objects as long as they guarantee that no suffix will be repeated (e.g. "cdb2011-01-bio234" in the above example).

Once a prefix has been obtained and a suffix assigned to a publication object, the DOI composed of prefix and suffix has to be **registered** with a registration agency. The publishing organization formats metadata corresponding to the publication object into the metadata format specific to the registration agency. The resulting XML file will then be transmitted to the registration agency together with the DOI and the corresponding URL of the publication object.

- To learn more about the specifics of DOIs, [please review the DOI Handbook](https://www.doi.org/hb.html) provided by doi.org.
- To learn more about the specifics of each registration agency, please view their websites as listed above. 

---
generateHeadingToc: true
---
# Guide to Plan S compliance in OJS

> Contributors: Kate Shuttleworth, Mariya Maistrovskaya

## Plan S compliance in OJS: Open webinar recording, November 2022

{% include video.html id="CkTBPd_f1d0" provider="youtube" title="Plan S compliance in OJS: Open webinar"%}

## Introduction

### What is Plan S

[Plan S](https://www.coalition-s.org/) is an initiative for Open Access publishing that was launched in September 2018. The plan is supported by cOAlition S, an international consortium of research funding and performing organisations. Plan S requires that, from 2021, scientific publications that result from research funded by public grants must be published in compliant Open Access journals or platforms.

[cOAlition S](https://www.coalition-s.org/about/) consists of a group of national research funding organisations, with the support of the European Commission.

cOAlition S signals the commitment to implement the necessary measures to fulfil its main goal:

> With effect from 2021, all scholarly publications on the results from research funded by public or private grants provided by national, regional and international research councils and funding bodies, must be published in Open Access Journals, on Open Access Platforms, or made immediately available through Open Access Repositories without embargo.

Plan S consists of [ten additional principles](https://www.coalition-s.org/plan_s_principles/), and guidance is available on the [Implementation of Plan S](https://www.coalition-s.org/guidance-on-the-implementation-of-plan-s/) and [Technical Guidance and Requirements](https://www.coalition-s.org/technical-guidance_and_requirements/). 

### Implications for OJS journals

For cOAlition S funded research covered by Plan S requirements, all peer-reviewed scholarly articles must be published in venues that fulfil the “Requirements for Publication Venues.” Individual publication venues (such as journals publishing on OJS) are responsible for ensuring that they meet these requirements. Journals that do not meet these requirements will not be suitable for scholarly articles resulting from cOAlition S-funded research.

Many of the Plan S requirements for publication venues represent best practices for quality, discoverability, and interoperability in scholarly publishing. We recommend that journals adopt these practices regardless of whether they intend to publish scholarly articles resulting from Coalition S-funded research.

### What to expect from this guide

This guide is intended for journals published on OJS which intend to meet the Requirements for Publication Venues articulated by Plan S under [Part III: Technical Guidance and Requirements](https://www.coalition-s.org/technical-guidance_and_requirements/). This guide is modelled around the Plan S requirements, with sections of this guide mirroring the sections (1.1 and 1.2) of the Plan S requirements. The guide provides specific recommendations for implementing the requirements in OJS. Where suitable we have linked to other PKP documentation and guidance which provides additional details on the implementation of specific features and specifications. 

While we will do our best to keep this guide up-to-date, the Plan S documentation should be relied upon for the most current and detailed information.

## Basic mandatory conditions for all publication venues

### Review policies

> journals/platforms [must] have a solid system in place for review according to the standards within the relevant discipline and guided by the core practices and policies outlined by the [Committee on Publication Ethics (COPE)](https://publicationethics.org/). Details must be openly available on the respective journal and platform websites.”

A transparent and clear review policy lends journals credibility and helps potential authors anticipate the upcoming process.

For information on what to include in your review policy, see the [Peer Review Policy](https://docs.pkp.sfu.ca/journal-policies-workflows/en/editorial-workflow-policies#peer-review-policy) section of our Journal Policies and Workflows guide.

Enter this information in Journal Settings > Masthead > About the Journal. You may want to create a special section on the About the Journal page to describe the review process. See [Learning OJS: Journal Settings](https://docs.pkp.sfu.ca/learning-ojs/en/journal-setup#masthead).

### Editorial policies

> The journal/platform must provide, on its website, a detailed description of its editorial policies and decision-making processes.

Editorial policies and decision-making processes should be transparent and can be shared in the About the Journal or Author Guidelines fields in OJS. 

- Journal Settings: Settings > Journal > Masthead > About the Journal
- Author Guidelines: Settings > Workflow > Submission > Author Guidelines

Journals may also consider creating a custom “journal policies” page if more space is needed.

For information on what to include in your editorial policies, see the [Ethics Statements and Policies](https://docs.pkp.sfu.ca/journal-policies-workflows/en/ethics-statements) section of our Journal Policies and Workflows guide.

### Statistics

> at least [basic statistics](https://www.coalition-s.org/faq/i-am-a-publisher-do-i-have-to-provide-annual-statistics-about-the-numbers-of-reviews-in-my-journal-only-for-published-articles-or-also-include-rejected-articles/) must be published annually, covering in particular the number of submissions, the number of reviews requested, the number of reviews received, the approval rate, and the average time between submission and publication.

Statistics can be compiled in OJS by following the guidelines in the [Learning OJS: Statistics](https://docs.pkp.sfu.ca/learning-ojs/en/statistics) guide. Below is specific information on obtaining the statistics required by Plan S.

**Number of submissions**: This can be found in the [Editorial Activity report](https://docs.pkp.sfu.ca/learning-ojs/en/statistics#editorial-activity), and the dates can be customized to obtain an annual report.

**Number of reviews requested and received**: This can be found using the [Report Generator](https://docs.pkp.sfu.ca/learning-ojs/en/statistics#report-generator) by downloading the Review Report. Download the report in CSV, filter for the relevant dates, and obtain a count of the number of items in the “Date Notified” column (for reviews requested) and the number in the “Date Completed” column (for reviews received). 

- To see only the number of reviews requested and received for published articles, download the Articles report and import the Status column to the Review Report. You can then filter the results to those with a “Published” status and count the number of assigned and completed reviews only for these articles.

**Approval rate**: This can be found in the [Editorial Activity report](https://docs.pkp.sfu.ca/learning-ojs/en/statistics#editorial-activity) under “Acceptance Rate.”

**Average time between submission and publication**: 

**In OJS 3.3.x:** This can be found by combining columns from two reports downloaded from the Report Generator:
- The Date Published column from the Views Report 
- The Date Submitted column from the Articles Report

To combine the columns, download both of the above reports in CSV, then import the relevant column from one spreadsheet into the other. Calculate the difference between the Date Published and Date Submitted for all articles in the desired time frame, then calculate an average.

**In OJS 3.4.x:** This can be found in the Articles Report. Calculate the difference between the Date Submitted and First Published columns for all articles in the desired time frame, then calculate an average.

#### Sharing statistics in OJS

Stats can be shared with the Editorial Policies under “About the Journal” or “Author Guidelines,” or on a separate custom page. These should be updated annually.

### Retention of copyright and open access (open licensing and self-archiving)

> The journal/platform must accept the retention of copyright by the authors or their institutions, at no extra cost. Licenses to publish must preserve the right and responsibility of the author/institution to make the VoR or the AAM of the article Open Access immediately upon publication, under an open license as defined in [Part II Section 2](https://www.coalition-s.org/guidance-on-the-implementation-of-plan-s/#2_Plan_S_Compliance).

Plan S requires that journals allow authors to retain copyright to their work at no additional cost. Authors must retain the right to make their work fully and immediately open access, either by publishing in the journal with an open license (Creative Commons or equivalent), or by placing the Version of Record (VoR) or Author Accepted Manuscript (AAM) in an open access repository with no embargo.

Journals should develop a transparent open access statement which includes the self-archiving policy for placing work in an open access repository. Learn [about open access policies](https://docs.pkp.sfu.ca/journal-policies-workflows/en/oa-policies) in our Journal Policies and Workflows guide.

Plan S requires authors to publish under a Creative Commons Attribution 4.0 International License (CC BY 4.0) by default. As secondary alternatives, CC BY-SA and CC0 are also accepted. A CC BY-ND license on individual articles must be explicitly requested and justified by the grantee. See [Section II Part 2](https://www.coalition-s.org/guidance-on-the-implementation-of-plan-s/#2_Plan_S_Compliance) for details.

To incorporate copyright details and a Creative Commons license in your journal, follow the steps described here: [Where to add copyright and licensing information in OJS](https://docs.pkp.sfu.ca/journal-policies-workflows/en/copyright-licensing#where-to-add-copyright-and-licensing-information-in-ojs).

## Mandatory technical conditions for all publication venues

### Persistent identifiers for publications

> Use of persistent identifiers (PIDs) for scholarly publications (with versioning, for example, in case of revisions), such as DOI (preferable), URN, or Handle.

Plan S requires the use of persistent identifiers, preferably DOIs (Digital Object Identifiers).

OJS has a DOI integration that allows journals to automatically assign DOIs to articles and register them with DOI registration agencies. To get started:

1. Purchase membership with a DOI registration agency, such as [Crossref](https://www.crossref.org), [Datacite](https://datacite.org/) or [mEDRA](https://www.medra.org/). Annual membership dues and content registration fees may apply. Your institution, library or consortium may already have such a membership arrangement and may be able to add your journal under their umbrella.
2. Receive a DOI prefix from your registration agency and enter it in the DOI plugin, and select your preferred suffix pattern as explained in the [DOI plugin guide](https://docs.pkp.sfu.ca/doi-plugin/en/doi-plugin#configuring-the-doi-plugin).
3. Receive credentials from your registration agency and [enter them in the Crossref plugin](https://docs.pkp.sfu.ca/crossref-ojs-manual/en/config) or [Datacite/mEDRA plugins](https://docs.pkp.sfu.ca/doi-plugin/en/doi-registration#using-registration-plugins). Check the automatic registration checkbox to enable DOIs to be registered upon issue publication.

OJS 3.2+ supports article versioning - a new version can be created and published, while previous versions remain accessible and clearly identified as superseded. The DOI assigned to the article will always point to the most recent version. It is recommended to update DOI metadata with a registration agency in case of metadata changes.

### Long-term digital preservation

> Deposition of content with a long-term digital preservation or archiving programme (such as CLOCKSS, Portico, or equivalent).

Plan S requires content to be deposited to a long-term digital preservation or archiving program. The following options are available via OJS:

1. **PKP Preservation Network (PN)**. PKP offers this free dark archive service based on the distributed [LOCKSS](https://www.lockss.org/) network to all OJS journals on 3.1.2 or newer. 

To use the plugin, your journal needs:
- A compatible version of OJS - OJS 3.1.2 or newer
- An ISSN
- To have published at least one article

[Enable the PKP PN plugin in the Plugin Gallery](https://docs.pkp.sfu.ca/pkp-pn/en/#installation--upgrade) and accept the terms of use. Past issues will take a few weeks to deposit, and new issues will be deposited upon publication. You can check the Status in the plugin and refer to [Troubleshooting tips](https://docs.pkp.sfu.ca/pkp-pn/en/#troubleshooting) if needed.

2. **LOCKSS**. Outside of the LOCKSS-based PKP PN, a journal can choose to join the [Global LOCKSS Network](https://www.lockss.org/join-lockss/networks/global-lockss-network) directly. Annual fees apply.

To enable LOCKSS archiving in OJS, navigate to Distribution Settings > Archiving > LOCKSS and CLOCKSS and check the “enable” checkbox.

3. **CLOCKSS**. [CLOCKSS (Controlled LOCKSS)](https://clockss.org/) is another distributed dark archive option. Annual fees apply.

To enable CLOCKSS archiving in OJS, navigate to Distribution Settings > Archiving > LOCKSS and CLOCKSS and check the “enable” checkbox.

4. **Portico**. [Portico](https://www.portico.org/) is a community-support preservation service. Annual fees apply.

A Portico plugin is available for OJS 3.1.2 and newer. Unlike the automated PKP PN, LOCKSS and CLOCKSS, Portico requires manually exporting OJS content for deposit.

To enable Portico archiving, install the Portico plugin for OJS. The export functionality can then be accessed through Tools > Import/Export > Portico Export Plugin.

*Additional recommendation:*

- Indicate on your journal’s website that the journal is participating in the preservation program of your choice, e.g.: “The publisher provides dark archiving and preservation of access to its journal content via [PKP Preservation Network (PKP PN)](https://pkp.sfu.ca/pkp-pn/).”

### Article metadata quality

> High-quality article level metadata in standard interoperable non-proprietary format, under a CC0 public domain dedication. Metadata must include complete and reliable information on funding provided by cOAlition S funders (including as a minimum the name of the funder and the grant number/identifier).

Article metadata is information about an article, such as title, authors, abstract, etc. Accurate and consistent metadata is critical for discoverability, search engine harvesting, downstream services such as Crossref, and overall journal impact. Poor metadata can result in journal content not being harvested, indexed, or discovered by researchers, and may take considerable effort to correct.

In OJS, article metadata is entered during article submission by the author or editor (if submitting on their behalf) and can later be edited by editors prior to publication.

1. Creating high-quality metadata. [Better Practices in Journal Metadata](https://docs.pkp.sfu.ca/metadata-practices/en/) explains how to create accurate metadata in OJS and how to avoid and correct common errors.
2. Enabling funder metadata. Plan S requires article metadata to include information on cOAlition S funding, at minimum the name of the funder and the grant number/identifier. To enable funder metadata:
- Navigate to Workflow Settings > Submission > Metadata
- Enable supporting agencies metadata
- Choose to make this field optional or mandatory during submission

Additionally, the OJS Funding plugin is available for 3.3+ out of the box. It adds funding details to submission metadata and production tab, including funder name, funder id and grant numbers used in the [CrossRef Funder Registry](https://www.crossref.org/services/funder-registry/). These details appear on the published article landing page. For plugin details see the [Funding plugin page](https://github.com/ajnyga/funding/) in Github.

3. Metadata formats. Plan S requires article metadata to be in a standard interoperable non-proprietary format. OJS supports metadata exports in a number of standard non-proprietary interoperable formats, such as XML (including native XML import-export within OJS, export to Crossref, Datacite, DOAJ, NLM); and Dublin Core, JATS, and MARC via OAI-PMH. 
4. Metadata licence. Plan S requires article metadata to be released under a [CC0 public domain dedication](https://creativecommons.org/share-your-work/public-domain/cc0/). Journals can add a statement on metadata being made available under the CC0 license to the About page or elsewhere on the website.

## Embedded OA status and license

> Machine-readable information on the Open Access status and the license embedded in the article, in standard non-proprietary format.

1. Add copyright/licensing information to article metadata. To include machine-readable copyright and licensing information see: [Where to add copyright and licensing information in OJS](https://docs.pkp.sfu.ca/journal-policies-workflows/en/copyright-licensing#where-to-add-copyright-and-licensing-information-in-ojs).
2. Add copyright/licensing information to the article itself. This would be done during galley formatting outside of OJS. To generate a CC license statement for the article, use the [CC license selection tool](https://creativecommons.org/choose/). It can be added in:
- PDF galley in the footer or on the first or last page
- XML or HTML galleys in respective elements/tags

## Strongly recommended additional criteria for all publication venues

### Persistent identifiers for authors, funders, etc.

> Support for PIDs for authors (e.g., ORCID), funders, funding programmes and grants, institutions, and other relevant entities.

Plan S recommends using persistent identifiers for authors (e.g., ORCID), funders, funding programmes and grants, institutions, and other relevant entities. OJS provides support for the following persistent identifiers:

1. **ORCID iDs for authors**

ORCID iD is a persistent digital identifier that distinguishes individual researchers and supports automated links between researchers and their professional activities.

ORCID plugin is available for OJS 3.1.2+ out of the box. It can be used for free with a Public API, or for a fee with a Member API that provides additional functionality. Your institution or library may already be an ORCID member and may be able to provide your journal with Member API credentials.

For details on how to receive free Public or Member credentials and set up the plugin see the [ORCID Plugin guide](https://docs.pkp.sfu.ca/orcid/en/).

2. **Research Organization Registry (ROR)**

[ROR](https://ror.org/) is a community-led registry of unique identifiers for every research organization in the world.

ROR plugin is available for OJS 3.2+ out of the box. It adds a ROR organization name lookup in author affiliation. For plugin details, including a GIF walkthrough, see the [ROR plugin page in Github](https://github.com/withanage/ror/).

3. **Funding data**

OJS Funding plugin is available for 3.3+ out of the box. It adds funding details to submission metadata, including funder name, funder id and grant numbers used in the [CrossRef Funder Registry](https://www.crossref.org/services/funder-registry/). For plugin details see the [Funding plugin page in Github](https://github.com/ajnyga/funding/).

### Self-archiving policy in Sherpa Romeo

> Registering the self-archiving policy of the venue in SHERPA/RoMEO.

Plan S recommends that a journal create their self-archiving policy and register it with the [Sherpa Romeo database](https://v2.sherpa.ac.uk/romeo/) maintained by Jisc. Having a self-archiving policy is also a requirement for the DOAJ Seal.

Self-archiving is the act of an author depositing a copy of their publication into an open access repository or open archive. Self-archiving improves the discoverability and sharing of open access articles. A self-archiving policy specifies the conditions under which authors can deposit open versions of their publications. 

To add your journal’s policy to Sherpa Romeo, see instructions on the [Sherpa Romeo's About page](https://v2.sherpa.ac.uk/romeo/about.html). 

### Full text in XML

> Availability for download of full text for all publications (including supplementary text and data) in a machine-readable community standard format such as JATS XML.

XML is a file format that supports semantic tagging of article elements thus making them machine readable. [JATS XML](https://jats.nlm.nih.gov/) is widely accepted as the standard journal publishing format across most disciplines. 

For XML creation, the most common workflow is for a journal to take the last copyedited file (usually a Word document) from the Copyediting stage, and either:

- send it to professional XML typesetters for conversion into JATS, HTML, PDF, ePub, etc., OR
- convert it to XML themselves. Beta tools are available for XML conversion and editing within OJS but require XML expertise to use. Contact PKP for more information.

**For XML display**, OJS comes with 2 plugins: 

- eLife Lens Reader - displays JATS XML as HTML galley files. It has a few limitations: it requires Javascript to run; it is not mobile-friendly; it does not meet various state or institutional accessibility requirements; it does not support Google Scholar tags quite as well as HTML or PDF; and it does not provide a PDF view.
- [JATSParser plugin](https://github.com/Vitaliy-1/JATSParser) - displays XML files on the reader front end, with limited support for JATS tags. 

### Direct deposit into repositories

> Direct deposition of publications (in a machine-readable community standard format such as JATS XML, and including complete metadata as described above) by the publisher into author designated or centralised Open Access repositories that fulfil the Plan S criteria.

OJS 3.1 - 3.2 comes with a SWORD plugin that allows direct depositing of OJS metadata + full text into repositories that support SWORD ingests (e.g. DSpace-based repositories). More details are available in the [SWORD plugin GitHub repository](https://github.com/pkp/sword).

### OpenAire metadata compliance

> [OpenAIRE](https://www.openaire.eu/) compliance of the metadata.

Plan S recommends journals to be compliant with [OpenAire Guidelines for Literature Repository Managers](https://openaire-guidelines-for-literature-repository-managers.readthedocs.io/en/v4.0.0/). This involves providing metadata in a specific format to be harvested by the OpenAire infrastructure - a European initiative that collects and shares metadata and funding data about open access publications. 

To achieve this, the journal would need to:
- [Register with OpenAire](https://provide.openaire.eu/home) if not already registered
- Install the [OpenAire plugin](https://github.com/ojsde/openAIRE) for OJS 3.1+
- Additionally install the [Funding plugin for OJS3](https://github.com/ajnyga/funding) to share funding data with OpenAire

Step by step instructions for registering and using the plugin are provided in the [OpenAire plugin documentation](https://github.com/ojsde/openAIRE). Once the OpenAire registration is completed and the plugin is enabled, metadata harvesting will take place passively and no further action will be needed on the journal editor’s part.

### Link to research data

> Linking to data, code, and other research outputs that underlie the publication and are available in external repositories.

Currently, OJS editors can add a link from an article to an externally hosted research data/code by adding a remote galley. The [Learning OJS guide](https://docs.pkp.sfu.ca/learning-ojs/en/production-publication#upload-a-multimedia-file-linked-from-an-external-site) explains how to do this for a video; the same process would apply to linking to an externally hosted dataset.

### Open citation data

> Openly accessible data on citations according to the standards by the [Initiative for Open Citations (I4OC)](https://i4oc.org/).

Plan S recommends that journals provide open citation data in a way that is shareable, freely accessible and reusable. Being an open access journal does not automatically mean that journal’s citations are open.

One of the ways to make your references open is to submit them to Crossref. In OJS, this can be done by using the [Crossref Reference Linking plugin](https://docs.pkp.sfu.ca/crossref-ojs-manual/en/references). The plugin will deposit references to Crossref and return DOIs to include in article references in OJS. There is no additional charge to Crossref members for using the plugin.

All references you register with Crossref are automatically set to open. This is a change implemented in June 2022; Crossref no longer offers an option to members to restrich their references.

## Specific conditions for Open Access journals 

### DOAJ registration

> The journal/platform must be registered in the Directory of Open Access Journals (DOAJ) or in the process of being registered.

OJS journals are encouraged to follow the steps in our [DOAJ application guide](https://docs.pkp.sfu.ca/doaj/) to apply for inclusion with the DOAJ.

### No mirror / sister subscription journal

> Open Access journals must not have a mirror/sister subscription journal with substantial overlap in editorial board to avoid business models charging for both access and publication. Such journals will de facto be considered ‘hybrid’ journals.

Publishers must ensure that they do not establish a subscription journal where the editorial board overlaps substantially with that of the open access journal. Plan S considers these mirror / sister journals to be comparable to hybrid journals, where some content is subscription-based and other content is open access.

### Transparent costing and pricing 

> Information on the publishing costs and on any other factors impacting the publication fees must be openly available on the journal website/publishing platform (see also [Part II Section 5](https://www.coalition-s.org/guidance-on-the-implementation-of-plan-s/#5_Transparency_of_Costs_and_Prices)).

Journals that charge Article Processing Charges (APCs) should be transparent about these charges by placing detailed information on their website where it can be easily located. In OJS, editors might place this information on a custom page, in the About the Journal section under its own heading, or in the Author Guidelines. In the interest of transparency, it’s a good idea to include a statement about APCs even if your journal does not charge any fees for authors to publish in the journal.

There are two steps to setting up APCs in OJS:

1. [Enable payments](https://docs.pkp.sfu.ca/learning-ojs/en/settings-distribution#enable-payments) in the distribution settings and choose whether payments will be processed manually (for example, outside of OJS through mailed-in cheques), or through PayPal. 

2. Visit Payments > Payment Type and complete the settings for [Author fees](https://docs.pkp.sfu.ca/learning-ojs/en/subscriptions#author-fees). 

When an article is accepted (after peer review), the editor will be prompted to inform the author via email. At this stage an option will appear to request payment or waive the APC. Editors are encouraged to customize the “Editor_Decision_Accept” email template to include instructions for authors on the steps for making the payment. 

### APC waivers 

> The journal/platform must provide APC waivers for authors from [low-income economies](https://datahelpdesk.worldbank.org/knowledgebase/articles/906519-world-bank-country-and-lending-groups) and discounts for authors from [lower middle-income economies](https://datahelpdesk.worldbank.org/knowledgebase/articles/906519-world-bank-country-and-lending-groups), as well as waivers and discounts for other authors with demonstrable needs. Waiver policies must be described clearly on the journal website/platform and statistics on waivers requested and granted must be provided.

Information about the waiver options and how to apply should be provided alongside APC details on the journal site. 

Journal editors can waive the APC at the point when the fee would usually be requested (when the article is accepted for publication), or later by using the “Payments” option next to the Activity Log.

## Relevant resources

- [Plan S: Principles and Implementation](https://www.coalition-s.org/addendum-to-the-coalition-s-guidance-on-the-implementation-of-plan-s/principles-and-implementation/) - including 10 Principles, Part II - Guidance on implementation and Part III - Technical requirements
- [Journal Checker Tool for Plan S compliance](https://www.coalition-s.org/coalition-s-releases-the-journal-checker-tool/) - release announcement (November 2020)
- [Plan S Journal Comparison Service](https://www.coalition-s.org/plan-s-journal-comparison-service-open-for-publishers-to-register-and-deposit-price-and-service-data/) - release announcement (May 2022)

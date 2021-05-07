# Project Requirements

The requirements for this project can be divided into the following areas:

* Deployment scenarios: the proposed search architecture should scale from small single-journal deployments up to large OJS providers that potentially host hundreds of OJS installations.
* Design principles: depending on the deployment scenario, principles like simplicity and flexibility have to be reconciled.
* Compatibility: a specific list of search features have to be implemented to guarantee compatibility with the existing OJS search function.
* Advanced design problems: Solr provides a large amount of configuration options. Alternative options should be identified and implementation choices be defined for each feature or deployment scenario.

The following sub-sections will detail these requirements to provide a guideline for the implementation recommendations to be made in this document.

## Deployment Scenarios

OJS is being used in very different organizational contexts that range from individual scientists publishing their own OJS journal on shared hosting servers all the way up to specialized OJS providers hosting hundreds of distinct OJS installations for a large number of 3rd-party publishers.

The new search function should work in all these scenarios and must therefore support:

* S1: search across articles of a single journal
* S2: search across multiple journals of a single OJS installation
* S3: search across various OJS installations within the provider's network
* S4: search across various applications \(including one or more OJS installations\) within the provider's network

We will reference these scenarios with their abbreviations \(S1-S4\) below, where necessary.

## Design Principles

Depending on the deployment scenario several conflicting design principles have to be reconciled:

* Simplicity and transparency: One of the crucial strengths of OJS is its simplicity and low entry level of installation, configuration and use. This advantage should be maintained as far as possible.
* Functional robustness and flexibility: The currently existing search function should remain available as an option. It should be possible to configure whether to use the current or the newly developed solr search for an OJS installation.
* Compatibility with PKP OJS development: The solr integration should be compatible with the PKP development code line.

The relative importance of the design principles will depend on the deployment scenario and its specific requirements. As the design principles may conflict with each other, it is possible that a compromise has to be made for each deployment scenario.

## Compatibility with the Current OJS Search

The current OJS search function implements the following features that must be supported by the newly developed system, too:

Basic indexing/search features:

* search across all journals of an OJS installation
* search for author, title, abstract, keywords and full text.
* search for publication type, coverage, supplementary files and publication date \(advanced search only\)
* Full text documents can be indexed if they are in HTML, PDF, PS or Microsoft Word format.

Search syntax:

* no distinction between lower and upper case
* ignore common words of low relevance \(“stopwords”\)
* list all documents by default that contain all search terms \(implicit “AND”\)
* select documents that contain one of the given terms \(“OR”\)
* only select documents that do not contain a given term \(“NOT”\)
* implement advanced search syntax, e.g. archive \(\(journal OR proceeding\) NOT dissertation\)
* search for exact word phrases
* support wildcard searches \(“\*”\)

Miscellaneous features:

* Search results contain the corresponding articles and can be paged.
* The index can be re-built from within OJS.

## Advanced Design Problems

The following additional design problems have to be explicitly addressed in this document.

Architecture:

* How to implement multi-client capabilities for the configuration of solr, the communication interfaces and data?
* Which users \(role\) will install and configure solr – in other words: will the configuration be done on journal, publisher or overall system level?
* Scalability: When should features like “distributed search” or “replication” be implemented?
* How should solr be deployed?
* Establish complete configuration recommendations.
* Which platforms will be supported \(e.g. OS, servlet container\)?
* How will the search server be integrated with the OJS PHP environment?
* Can solr be integrated as a plug-in? What are \(dis-\)advantages of such a deployment option?
* Which disadvantages or problems may be expected when integrating OJS search with an organization-wide search \(S4\)?

Indexation:

* Which field types and schema should be defined?
* Which tokenizers and filters should be used?
* How many indexes/cores are required?
* To what architectural level will these indexes correspond \(e.g. per journal, per installation\)?
* When and how will documents be indexed \(addition, update, optimization and deletion\)?
* How can the index be re-built?
* How will data be sent to solr?
* Will documents be parsed with a native solr extension or is an external program required?
* Which further file formats will be supported?
* Will meta-data be extracted from documents?
* Will all manifestations of an article be supported \(e.g. when both, HTML and PDF versions, are available\)?

Search:

* Which search syntax will be supported? \(Ideally the search syntax should be identical to the currently existing OJS search syntax.\)
* How can auto-suggestions be implemented?
* How could the ranking be implemented \(spanning several indexes where necessary\)?
* Which after-search options \(e.g. sorting\) will be available?
* How could faceting be realized?

## High-Level Feature Summary

The following table shows an overview of important requirements and deployment scenarios. It is meant as a high-level summary, not as an exhaustive list.

### Requirements x Deployment Scenario

![](./assets/OJSdeSearch-table-2.png)

\* contains first name, middle name, last name, affiliation, biography

\*\* usually contains a research approach or method for the article

\*\*\* consists of the article's geo coverage, chronological coverage and "sample" coverage

## Test Data and Sample Queries

Requirements are covered and exemplified by a number of [sample queries](https://docs.google.com/spreadsheet/ccc?key==0ArYsBcy_S9NkdExyVnBzU0lQZ2U1ejFUdFpBY2p5TGc#gid==0). These are an integral part of the requirements specification of this project. All sample queries are executed against a mixed-language, mixed-discipline corpus of OJS test journals and articles. Both, sample queries and sample data, are being provided by FUB and their partners.

Test data were taken from live OJS journals. Wherever possible complete copies of journals were made. When full copies were not available partial content \(select journal issues and/or articles\) were imported into an OJS test database for indexing and querying.

The following process was applied to collect sample queries:

* An [online form](https://docs.google.com/spreadsheet/viewform?formkey==dExyVnBzU0lQZ2U1ejFUdFpBY2p5TGc6MQ) simulates the OJS search form \(simplified and advanced\).
* Test users \(editors and readers\) of various OJS journals were asked to provide realistic test queries.
* Submitted test queries were executed against the test corpus.
* Result sets were returned to test users for review.
* Search results \(precision, callback, ranking\) were tuned according to user feedback.

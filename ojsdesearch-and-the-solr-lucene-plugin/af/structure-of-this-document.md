# Structure of this Document

This document is divided into several conceptually distinct parts: First we enumerate all project requirements that guide the scope of this specification as well as our architectural choices and recommendations. Based on these requirements we specify several distinct aspects of the system:

* the end-user visible OJS interface \(administration, configuration and search\)
* the indexing back-end \(submission and preprocessing of meta-data and full texts, extraction, transformation, analysis and storage of term data; index configuration and maintenance\)
* the search query back-end \(submission, transformation, parsing and analysis of the query; ranking, paging and highlighting of the result list; advanced browsing features like faceting, alternative spelling suggestions and “more-like-this” search proposals\)
* the network protocol for communications between the OJS installation and the search engine for all indexing, querying and configuration needs
* the recommended deployment options for different usage scenarios \(from single journal installations to large OJS provider deployments\)

For each of these system parts and for all possible usage scenarios we'll identify necessary changes to OJS and appropriate configuration of the solr/Lucene back-end. Once the design and implementation options identified and recommendations made for all aspects of the system we'll be able to compile a complete feature implementation/recommendation matrix. This will help project owners to select and prioritize specific, well-defined features for implementation and serves as an initial guideline for subsequent implementation phases of the project.

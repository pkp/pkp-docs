---
title: Indexing and Discovery - Using PKP Software in Multiple Languages
showPageTOC: true
---

# Indexing and Discovery

Unfortunately, indexing and discovery services do not accommodate multilingual metadata well. This chapter provides recommendations to make multilingual content more discoverable by indexing services. However, full discovery is limited by services themselves.

Indexing and discovery services usually request metadata in English in addition to metadata in the original article language.

-   [DOAJ](https://doaj.org/apply/guide/) - Journals published in any language may apply. The website does not need to be in English. If the site is available in multiple languages the information provided must be the same in all languages.

-   [Scopus](https://www.readyforscopus.com/) - English language title, abstracts, keywords, and authors’ affiliations for all articles are mandatory.

-   [Web of Science (WoS)](https://clarivate.com/webofsciencegroup/journal-evaluation-process-and-selection-criteria/) - Titles and abstracts in English are mandatory.

-   [Latindex](https://www.latindex.org/latindex/meto2) - Abstract and keywords in two languages are desirable content characteristics.

-   [Redalyc](https://www.redalyc.org/redalyc/editores/evaluacionCriterios.html) - Author guidelines in two languages, Table of contents, abstract, and keywords in two languages (preferably English) are desirable and highly valued criteria.

-   [SciELO](https://wp.scielo.org/wp-content/uploads/Criterios-Rede-SciELO-es.pdf) - English language title, abstracts, and keywords for all articles are mandatory.


### Google Scholar

Google Scholar has stated that it can index articles where all metadata fields match the metadata included in the article galley, including the language/script used. Regardless of how many languages the metadata is available in, Google Scholar has stated they will only index those languages which have a translated version of the article galley to accompany them. However, Google Scholar has also stated that it looks for the article language in the URL rather than the metadata tags, and it will not index multilingual articles in OJS because the article language is not indicated in the URL (due to other technical issues this would cause).

If you find that Google Scholar is not indexing your journal, consult the Google Scholar guide’s [Troubleshooting section](https://docs.pkp.sfu.ca/google-scholar/en/#troubleshooting-for-journal-managers-and-editors) for details.

### PubMed

MEDLINE/Pubmed displays an unlimited number of languages when there are translations available at the time of publication, each publisher is responsible for submitting all languages in the XML citation data.

For guidance on this process, they provide “[Instructions for articles published in Non-English Languages](https://www.ncbi.nlm.nih.gov/books/NBK3828/#publisherhelp.Instructions_for_art)”.

Journals are indexed in the original publication language. The indexing language is approved by the Literature Selection Technical Review Committee at the time a journal is accepted.


### Crossref

When the metadata is exported for deposit in CrossRef, the DOI registered by OJS, OMP, and OPS adopts the submission primary language.

If the journal submits galley files in multiple languages, they can make a stand-alone component deposit for each of them. For more information, visit [Crossref’s documentation](https://www.crossref.org/documentation/content-registration/structural-metadata/components/).

For other indexing content requirements, see our [Index Application Guide](https://docs.pkp.sfu.ca/indexing-guide/en/).

### Site search

If you publish content in more than one language, it is not currently possible to search for articles in a single language. There is a single search index for each site and the entire index will be searched. However, if a user searches for words in one language, they are likely to retrieve articles in that language, unless the words appear in both or all of the languages.

The [Solr Lucene Plugin](https://github.com/ojsde/lucene) can be used in OJS to filter by language.

---
title: Publishing in Multiple Languages - Using PKP Software in Multiple Languages
showPageTOC: true
---

# Publishing in Multiple Languages

In this section, we'll cover the options for publishing content in different languages, as well as some tips and considerations for multilingual metadata.

## Publishing translations: alongside original article or separately?

OJS, OMP, and OPS can support the publication of an article, monograph, or preprint in multiple languages under one submission ID, rather than publishing the original article as one item and the translation as a separate item.

By providing the original language and translations under one submission ID, rather than as two or more different submissions, the files will be kept together under one identifier. This also avoids splitting up the statistics for one article across multiple submission IDs.

However, some identifier and indexing services recommend that translations be treated as separate items. This is also consistent with traditional cataloguing, where translations are treated as standalone publications.

Both options are achievable in PKP software - you can either include galleys and metadata in multiple languages with one submission, or create separate submissions for each language. Choose the one that best suits your needs and be sure to provide instructions for authors in your submission guidelines.

## Managing Multilingual Metadata

### Single language article, multilingual metadata?

Some multilingual journals may post articles with metadata in multiple languages without a translated article to accompany it.

This can be useful for discovery, especially for journals and articles in languages other than English—valuable research is often overlooked when it is published in non-English languages. It can also be helpful for researchers trying to determine if it is worth investing their time in requesting a translation or using a machine translator to read an article, especially for fields and subjects where research is scarce.

At the same time, it can be frustrating for readers to find translated metadata only to find that the actual content is not available in that language. It can also lead to your content not being indexed properly or not being indexed at all, especially by indexing and discovery services that have strict expectations about metadata and article language consistency.

We recommend that you consider these pros and cons and research the requirements of indexing and abstracting services before providing translated abstracts or other metadata without translating the content of the manuscript. Decide if you want to require or include translations/partial translations of your submissions and clarify this in your submission guidelines.

### Metadata accuracy & recommended practices

The most important thing you can do to help make your multilingual content discoverable is to ensure your metadata (e.g., article title, contributors, issue data) is complete and accurate and is added to the correct language fields.

Below are some basic tips about multilingual metadata accuracy. For more, please see Coalition Publica and PKP’s guide to [Better Practices in Journal Metadata](https://docs.pkp.sfu.ca/metadata-practices/en/) for detailed recommendations.

-   **Use appropriate language fields**: Enter metadata in the language-specific field (for example, if the keywords are in French, enter them in the French language field, not in the English language field). Metadata should always be placed in the appropriate language field, even if the article or issue is in a single language.      
-   **Avoid mixing languages in a single field**: Avoid using multiple languages in the same field. For example, instead of “Article Title / Le titre de l'article”, separate the text in different languages into their respective language-specific fields.  
-   **Aim for consistency between metadata fields and galleys**: Aim for consistency between galley(s) and metadata, and make sure that all translated metadata is present in both. For example, if the Abstract is translated in the galley, it should be included in the metadata, and if the Abstract is translated in the metadata, the translation should be included in the galley. This should be done for any translated metadata, even if the full article text is not translated. This can greatly assist with visibility in certain indexing and discovery services.  
-   **Avoid unnecessary transliteration/romanization**: Avoid mixing writing systems between the metadata and article content, and avoid using transliteration to fill metadata fields in other languages. E.g. The contributor name Taro Tanaka should be rendered as “田中 太郎” in the Japanese metadata fields for a Japanese-language article, and transliterated as “Taro Tanaka” only for English or other language metadata fields. Similarly, an article titled “日本人の自然観” in Japanese should be translated for English metadata (“The Japanese Perception of Nature”) rather than romanized (“Nihonjin no shizenkan”).


## Integrating Translators into the Publishing Workflow

Journals can publish the in-house translation of the articles' text when they have translators within the Editorial Team.

To integrate translators into the publishing workflow, they must be registered users with a Translator role. You can learn how to add and edit users and roles on our [Learning OJS Guide](https://docs.pkp.sfu.ca/learning-ojs/en/users-and-roles#users).

Once the user has the appropriate role, the editor in charge of the submission can add them to the Participants list in one of the workflow stages, typically copyediting or production.

The translation workflow may vary for each journal, but the translators will follow steps similar to [the copyeditors'](https://docs.pkp.sfu.ca/learning-ojs/en/editorial-workflow#copyediting) to complete their work on the submission.

### Crediting translators in PKP software

In the current version of OJS, OMP, and OPS, translators can be credited within the metadata for the entire article (all languages) and will be displayed as Contributors (not explicitly as translators). While they can be labeled with a Translator role within the software, metadata exports (such as for CrossRef, DOAJ, etc.) remove this distinction. As a part of your policies, clarify the contractual relationship with your translator and author regarding attribution. Alternatively, translators can be credited on the galley of the version they worked on and not included in the metadata for the full article. The software may behave differently if the CRediT Plugin is enabled.

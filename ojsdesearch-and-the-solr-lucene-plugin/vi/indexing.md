# Indexing

The following sections describe several aspects of the indexing back-end of the proposed search system. This comprises some changes to the OJS back-end but above all includes solr/Lucene configuration recommendations.

## Index Architecture

Index architecture is one of the most important aspects of solr configuration. We list available options in this area and provide recommendations with respect to the requirements specified for this project.

### Single Index vs. Multi-Index Architecture

The main decision with respect to index architecture is whether to use a single index or multiple indexes \(and corresponding solr cores\).

Advantages of a single index for all journals and document types:

* enables search across various OJS instances
* easy installation, configuration and maintenance \(no need for solr configuration when adding additional OJS instances\)
* easy search across multiple document types: A single search across article meta-data, galleys and supplementary files with the intend to retrieve articles is possible.
* easy search across languages
* no need to merge, de-duplicate and rank search results from different indexes \(distributed search\)

Disadvantages of a single index:

* potential ranking problems when restricting search to heterogeneous sub-sets of an index \(e.g. a single journal\)
* potential namespace collisions for fields if re-using the same schema for different document types \(e.g. supp. file title and galley title in the same field\)
* scalability problems if scaling beyond tens of millions of documents
* adding documents invalidates caches for all documents \(i.e. activity in one journal will invalidate the cache of all journals\)
* the whole index may have to be rebuilt in case of index corruption

### Implications of Multilingual Support for the Index Architecture

There are two basic design options to index a multilingual document collection:

1. Use one index per language
2. Use one field per language in a single index

See [http://lucene.472066.n3.nabble.com/Designing-a-multilingual-index-td688766.html](http://lucene.472066.n3.nabble.com/Designing-a-multilingual-index-td688766.html) for a discussion of multilingual index design.

Advantages of a single index:

* One index is simpler to manage and query. A single configuration can be used for all languages.
* Results will already be joined and jointly ranked. No de-duplication of search results required.

Advantages of a multi-index approach:

* The multi-index approach may be more scalable in very large deployment scenarios - especially where a large number of OJS installations are indexed on a central search server.
* Language configurations may be modularized into separate solr core configurations. No re-indexing of all documents is required when a new language is being introduced into existing documents. It is questionable, though, whether journals will ever introduce a new language into already published articles. So this advantage is probably only theoretical in the case of OJS.
* The ranking metric "docFreq" is per-field while "maxDoc" is not. Using one index per language these parameters will be correct even when using a single field definition for all languages. We can easily work around this in a single-index design, however, by providing one field per language.

In our case the advantages of a single-index approach for multilingual content definitely outweigh its disadvantages.

### Index Architecture Recommendations

The following sections provide index architecture recommendations for all deployment scenarios.

#### Single Index Architecture

We generally recommend a single-index architecture if possible.

Several disadvantages of the single index scenario are not relevant in scenarios S1 to S3:

* We have only one relevant document type: OJS articles. By properly de-normalizing our data we can easily avoid field name collisions or ranking problems due to re-use of fields for different content \(e.g. we would certainly have two separate 'name' fields for article name and author name\).
* It is not to be expected that the number of documents per journal \(S1\), installation \(S2\) or provider \(S3\) will exceed millions of articles. If it should happen then providers of this size will certainly have the skill available to configure a replicated search server while maintaining API compatibility based on our search interface documentation.
* In usual scenarios the cost of cache invalidation due to new galley or supplementary file upload seems reasonable. If the cost of cache invalidation or synchronous index update after galley/supp. file addition becomes prohibitive we can still choose a nightly update strategy \(see “Pull Processing” below\). This is in line with the current 24 hour index caching strategy.
* Our multilingual design can be implemented in a single index.

On the other hand there are advantages of a single index architecture \(e.g. search across several OJS instances, simplicity of configuration, maintenance, etc.\) which are relevant in our case, see above.

There are two potential problems that can occur when consolidating many journals in a single index:

* more costly index rebuild
* potential ranking distortions

The first point refers to the fact that if the whole index needs to be rebuilt \(e.g. due to index corruption\) we have to trigger the rebuild from all connected OJS instances. This cannot be automated within OJS as OJS does not allow actions across instances. It can, however, be easily automated via a simple custom shell script when we provide a CLI interface for index rebuilds which we recommend.

Whether ranking will suffer from a single-index approach depends on the heterogeneity of the journals added to the index. It may become a problem when search terms that have a high selectivity for one journal are much less selective for other journals thereby distorting Lucene's default inverse document frequency \(IDF\) scoring measure when restricting query results to a single journal.

An example will illustrate this: Imagine that you have two Mathematics journals. One of these journals accepts contributions from all sub-disciplines while the other is specialized on topology. Now a search on "algebraic topology" may be quite selective in the general Maths journal while it may hit a whole bunch of articles in the topology journal. This is probably not a problem as long as we search across both journals. If we search within the general maths journal only, then documents matching "algebraic topology" will probably receive lower scores than they should because the overall index-level document frequency for "algebraic topology" is higher than appropriate for the article sub-set of the general maths journal. This means that in a search with several search terms, e.g. "algebraic topology AND number theory" the second term will probably be overrepresented in the journal-restricted query result set. Only experiment with test data can show whether this is relevant in practice. It is fair to believe, though, that the majority of queries will be across all indexed journals and therefore not suffer such distortion. This is because most users do have an interest in their topic matter rather than being interested in a specific publication only.

NB: We do not have to bother about content heterogeneity on lower granularity levels, e.g. journal sections, as these cannot be selected as search criteria to limit search results.

The same ranking distortion could theoretically apply to multilingual content if we were to collect all languages in a single index field. In the proposed schema, however, we use a separate field per language, see “Multilingual Documents” below. As document frequency counts are per index field, we'll get correct language-specific document counts. The total document count will also be ok as we'll denormalize all language versions to the article level.

While we generally recommend a single index design there are cases where a multi-index design may be appropriate and can be optionally implemented by a provider:

* when frequent index corruption or cache invalidation turns out to be a relevant problem,
* when ranking distortions become relevant or
* when reaching scaling limits.

Whether these problems occur or not can only be decided by experimentation. While one index per OJS instance is supported, even in a network scenario, it must be kept in mind that multiple indexes may have disadvantages: From a user perspective the most relevant potential disadvantage is thatsearches across several journals will only be supported when those journals are in the same index. This is due to the fact that we do not recommend distributed search across several indexes because they are much more complex and therefore costly to implement and create difficult ranking problems we can hardly solve. See a full list above.

#### S1 and S2: Embedded Solr Core

While we generally recommend a single-index architecture for all deployment options, there are a few comments to be made with respect to specific employment scenarios.

In deployment scenario S1 and S2 we only search within the realm of a single OJS installation. This means that a single embedded solr core listening on the loopback IP interface could serve such requests, see “Embedded Deployment” below.

#### S3: Single-Core Dedicated Solr Server

In deployment scenario S3 we search across installations. This means that the default deployment approach with a per-installation embedded solr core will not be ideal as it means searching across a potentially large number of distributed cores. Therefore, the provider will probably want to maintain a single index for all OJS installations deployed on their network.

This has a few implications:

1. We have to provide guidance on how to install, configure and operate a stand-alone solr server to receive documents from an arbitrary number of OJS installations.
2. The OJS solr integration will need a configuration parameter that points to the embedded solr core by default but can be pointed to an arbitrary solr endpoint \(host, port\) on the provider's network. See “Configuration the Deployment Scenario” above.
3. The OJS solr document ID will have to include a unique installation ID so that documents can be uniquely identified across OJS installations. See the “Data Model” and document update XML protocol specifications below.

#### S4: Multi-Core Dedicated Solr Server\(s\)

In deployment scenario S4 we have an unspecified number of disparate document types to be indexed. This means that the best index design needs to be defined on a per-case basis. We may distinguish two possible integration scenarios:

1. display non-OJS search results in OJS
2. include OJS search results into non-OJS searches

The present specification only deals with the second case as the first almost certainly requires provider-specific customization of OJS code that we do have no information about.

Our index architecture recommendation for the S4 scenario is to create a separate dedicated solr core with OJS documents exactly as in scenario S3. Then searches to the "OJS core" can be combined with queries to solr cores with non-OJS document types in federated search requests from arbitrary third-party search interfaces within the provider's network. \(See [http://stackoverflow.com/questions/2139030/search-multiple-solr-cores-and-return-one-result-set](http://stackoverflow.com/questions/2139030/search-multiple-solr-cores-and-return-one-result-set) for one possible solution of federated search.\)

This has the advantage that the standard OJS solr search support can be used unchanged based on the same documentation resources that we provide to support S3 \(see previous section\).

The only extra requirement to support the S4 scenario is to make sure that the unique document ID of other document types does not clash with the OJS unique article id. This is important so that a federated search can uniquely identify OJS documents among other application documents. When working with a globally unique installation ID such clashes are extremely improbable. Potential ID clashes are only a problem when using solr's built-in federated search feature. Otherwise the search client will query the cores separately and join documents based on application-specific logic \(e.g. displaying separate result lists for different document types\).

<hr />

## Data Model

Our recommendation for the data model is based on the type of queries and results required according to our feature list. We also try to implement a data model that requires as little schema and index modifications in the future as possible to reduce maintenance cost.

Meta-data fields that we want to search separately \(e.g. in an advanced search\) must be implemented as separate fields in Lucene. Sometimes all text is joined in an additional "catch-all" field to support unstructured queries. We do not believe that such a field is necessary in our case as we'll do query expansion instead.

To support multilingual search and proper ranking of multilingual content we need one field per language for all localized meta-data fields, galleys and supplementary files.

In order to avoid ranking problems we also prefer to have separate fields per document format \(e.g. PDF, HTML, MS Word\) rather than joining all data formats into a single search field. We can use query expansion to cover all formats while still maintaining good ranking metrics even when certain formats are not used as frequently as other formats.

The relatively large number of required fields for such a denormalized multilingual/multiformat data model is not a problem in Lucene \(see [http://lucene.472066.n3.nabble.com/Maximum-number-of-fields-allowed-in-a-Solr-document-td505435.html](http://lucene.472066.n3.nabble.com/Maximum-number-of-fields-allowed-in-a-Solr-document-td505435.html)\). Storing sparse or denormalized data is efficient in Lucene, comparable to a NoSQL database.

We prefer dynamic fields over statically configured fields:

* Dynamic fields allow us to reduce our configuration to one generic field definition per analyzer chain \(i.e. language\).
* No re-configuration or re-indexing of the data schema will be required to support additional languages or document formats.
* No re-configuration of the data schema will be required to add additional meta-data fields.

The publication date will be indexed to a trie date type field.

Authors are not localized and will be stored verbatim in a multi-valued string type field.

Specific fields are:

* the globally unique document ID field \("article\_id"\) concatenating a globally unique installation ID, the journal ID and the article ID,
* “inst\_id” and “journal\_id” fields required for administrative purposes,
* "section\_id" required for custom ranking weights,
* the authors field \(“authors\_txt”\) which is the only multi-valued field,
* localized article meta-data fields \("title\_xx\_XX", "abstract\_xx\_XX", "discipline\_xx\_XX", "subject\_xx\_XX", "type\_xx\_XX", "coverage\_xx\_XX"\) where "xx\_XX" stands for the locale of the field,
* the publication date field \("publicationDate\_dt"\),
* a single localized field for supplementary file data \("suppFiles\_xx\_XX"\) where "xx\_XX" stands for the locale,
* localized galley full-text fields \("galleyFullText\_mmm\_xx\_XX"\) where "mmm" stands for data format, eg. "pdf", "html" or "doc" and "xx\_XX" stands for the locale of the document.
* fields to support result set ordering \("title\_xx\_XX\_txtsort", "authors\_txtsort", "issuePublicationDate\_dtsort", etc.\), see below
* fields to support auto-suggest and alternative spelling proposals \("XXXX\_spell"\), see below
* fields to support faceting \("discipline\_xx\_XX\_facet", "authors\_facet", etc.\), see below

These fields will be analyzed for search query use cases, potentially including stemming \(see “Analysis” below\). The exact data schema obviously depends on the number of languages and data formats used by the indexed journals.

In the case of supplementary files there may be several files for a single locale/document format combination. As we only query for articles, all supplementary file full text can be joined into a single field per language/document format. And as we do not allow queries on specific supplementary file meta-data fields we can even further consolidate supplementary file meta-data into a single field per language.

To reduce index size and minimize communication over the network link all our fields are indexed but not stored. The only field to be stored in the index is the ID field which will also be the only field to be returned over the network in response to a the query request. Article data \(title, abstract, etc.\) will then have to be retrieved locally in OJS for display. As we are using paged result sets this can be done without relevant performance impact.

If we want to support highlighting then the galley fields need to be stored, too.

Further specialized fields will be required for certain use cases. If we want to support auto-suggestions or alternative spelling suggestions then we'll have to provide textual article meta-data fields in a minimally analyzed \(lowercase only, non-localized\) version. These fields will be called “xxxxx\_spell” where “xxxxx” stands for the field name without locale extension.

Fields that we want to use as optional sort criteria need to be single valued, indexed, and not-tokenized . This means that sortable values will potentially have to be analyzed separately into “xxxxx\_xx\_XX\_txtsort” or "xxxxx\_dtsort" fields where “xxxxx” stands for the field name and “xx\_XX” for the locale \(if any\) of the sort field.

Faceting fields \("xxxxx\_xx\_XX\_facet"\) need to be localized. They are minimally analyzed \(lower case only\) and tokenized by separator \(e.g. "," or ";"\) rather than by whitespace.

If we want to support the “more-like-this” feature then we may have to store term vectors for galley fields if we run into performance problems. We do not store term vectors by default, though.

Further technical details of the data model can be found in plugins/generic/solr/embedded/solr/conf/schema.xml.

<hr />

## Document Submission and Preprocessing

Article data needs to be submitted to solr and preprocessed so that it can be ingested by solr's Lucene back-end. This is especially true for binary galley and supplementary file formats that need to be transformed into a UTF-8 character stream. The following sections will describe various options and recommendations with respect to document submission and preprocessing.

### Existing OJS Document Conversion vs. Tika

The current OJS search engine implements document conversion based on 3rd-party commandline tools that need to be installed on the OJS server. Solr, on the other hand, is well integrated with Tika, a document and document meta-data extraction engine written in pure Java. We have to decide whether to re-use the existing OJS solution or whether to use Tika instead.

Advantages of the existing OJS conversion:

* We can re-use an established process that some OJS users already know about.
* Conversion of PostScript files can be provided out-of-the-box.

Advantages of Tika:

* According to our tests, Tika works at least one order of magnitude faster than the current OJS solution. This is especially important for large deployment scenarios, i.e. when re-indexing a large number of articles.
* Tika is easier to use and install than the current OJS solution. No additional 3rd-party tools have to be installed as is now the case \(except for solr itself of course\). Plain text, HTML, MS Word \(97 and 2010\), ePub and PDF documents are supported out-of-the-box by the code that comes with the standard solr distribution. Caution: Tika does not convert PostScript files!
* Can be deployed independently on the search server and does not need an OJS installation to work. In scenarios S3 and S4 this means considerably less infrastructure to be deployed on OJS nodes.
* Very well tested and maintained.
* Enables indexing of several additional source file types out-of-the-box, see [https://tika.apache.org/1.0/formats.html](https://tika.apache.org/1.0/formats.html) and [https://svn.apache.org/repos/asf/tika/trunk/tika-core/src/main/resources/org/apache/tika/mime/tika-mimetypes.xml](https://svn.apache.org/repos/asf/tika/trunk/tika-core/src/main/resources/org/apache/tika/mime/tika-mimetypes.xml) .

The only real disadvantage of Tika with respect to our requirements is that it does not support conversion of PS files. PS could be supported indirectly by first converting it to PDF locally and then submitting PDF to the solr server. It is however not clear, whether nowadays there exist OJS installations with an interest in solr that actually use Postscript as a publishing format. The advantage of solr being able to support the ePub format seems more important than the missing PS support.

Recommendation: Use the Tika conversion engine.

### Local vs. Remote Processing

In the multi-installation scenarios S3 and S4 document preprocessing could be done locally to the installation or on the central solr server.

Advantages of local processing are:

* The solr server experiences less load for resource-intensive preprocessing tasks.

Advantages of remote processing are:

* Doing all processing on a single server will simplify deployment and maintenance as 3rd-party dependencies only need to be installed and configured on a single server. OJS installations can be added without additional search-related installation requirements.
* Solr preprocessing extensions like Cell or DIH work locally to the Solr core.
* We can keep load off the end-user facing OJS application servers for consistent perceived response time.

Recommendation: Use remote processing, mostly due to the reduced deployment cost and easy use of Solr extensions.

### Push vs. Pull

Document load can be initiated on the client side \(push processing\) or on the server side \(pull processing\). Both options have their strengths and weaknesses.

Advantages of push configuration:

* Indexing can be done on-demand when new documents are added to OJS. This guarantees that the index is always up-to-date.
* No solr-side import scheduler needs to be configured and maintained.
* Push is simpler to implement when implemented as a synchronous call without callback. This may be sufficient in our case, especially for the embedded scenario, although it implies the risk that documents may not be indexed if something unexpected goes wrong during indexing or if the solr server is down. Without additional safety measures this means that a full index rebuild is required after the solr server comes back online. This problem can be mitigated by implementing the "dirty" pattern: Articles are marked "dirty" when they are updated and every call to the synchronous indexing API will update all "dirty" articles. Articles will only be marked "clean" when the solr server confirmed that they were successfully indexed. In case of solr server downtime, the next index update can either be triggered by the next regular update of any article or through an additional button in the plug-in interface \(e.g. "Index all pending changes"\) and by an additional switch to the "rebuildSearchIndex" script.

Advantages of pull configuration:

* Push processing means that editorial activity during daytime will cause update load peaks on the solr server exactly while it also experiences high search volume. This load can be quite erratic and fluctuating in larger system environments and therefore difficult to balance. In pull mode indexing schedules can be configured and co-ordinated in one single place \(for scenarios S3 or S4\) to balance document import load on the central search server and keep it to off hours.
* Pull also means that the process is more resilient against solr server downtime. In case of service outage, updates can be postponed until the server is back online. A full index rebuild is not required in that case.

Recommendation: Use the simpler push configuration by default but check its performance and reliability early on. If it turns out to be slow or unreliable, especially in the network deployment case, then provide instructions and sample configuration for an optional pull configuration for larger deployments, see “OJS/solr Protocol Specification” and “Deployment Options” below.

Both, push and pull processing, can be implemented with our without callback. We recommend callback for network deployment only where large amounts of data have to be indexed and full index re-builds can be very costly, see “OJS/solr Protocol Specification” below.

### Implications of Multilingual Document Processing

The OJS search feature returns result sets on article level rather than listing galleys or supplementary files as independent entities. This means that ideally our index should contain one entry per article so that we do not have to de-duplicate and join result sets. Different language versions and formats of articles should be spread over separate fields rather than documents. Such a denormalized design also facilitates multilingual search and ranking. A detailed argumentation for this preferred index design will be given in the “Multilingual Documents” section below.

For document preprocessing this design implies that we have to join various binary files \(galleys and supplementary files in all languages and formats\) plus the article meta-data fields into a single solr/Lucene document. As we'll see in the “Solr Preprocessing plug-ins” section, this considerably influences and restricts the implementation options for document import.

### Custom Preprocessing Wrapper vs. solr Plug-Ins

We have to decide whether we want to implement our own custom preprocessing wrapper to solr as in the current OJS search implementation or whether we want to re-use the preprocessing interface and capabilities provided by native solr import and preprocessing plug-ins.

Advantages of a custom preprocessing interface are:

* We could use an arbitrary data transmission protocol, e.g. re-use existing export formats like OAI or the OJS native export format or use solr's native document addition format directly over the wire. The former implies that we somehow have to interpret these formats on the server side. The latter means that we have to transform binaries into a UTF-8 character stream on the client side, see the discussion of local document preprocessing above.
* We could re-use the existing document conversion code, rather than using Tika. See the discussion of the existing OJS preprocessing code above.

Advantages of standard solr plug-ins:

* We can re-use solr's elaborate document preprocessing capabilities which are more powerful than those currently implemented in OJS.
* Tika is well integrated with solr through two different plug-ins: DIH and Cell. Using native solr plug-ins means that we can use Tika as a conversion engine without having to write custom Tika integration code.
* Custom remote preprocessing code to interpret OAI messages or OJS export formats is expensive: It means either implementing and maintaining a separate server-side PHP application or extending solr with custom Java code.
* Solr plug-ins support pull and push configurations out-of-the-box.

A priori both options have their strengths and advantages. In our case, though, the choice is relatively clear due to our preference for remote document preprocessing and Tika as an extraction engine. Having to maintain custom Java code or creating a separate server-side PHP preprocessing and Tika integration engine are certainly not attractive options for FUB or PKP.

Recommendation: The advantages of using established solr plug-ins for data extraction and preprocessing outweigh the advantages of a custom preprocessing interface in our case.

### Solr Preprocessing plug-ins: IDH vs. Cell

Currently there are two native solr extensions that support Tika integration: The "Data Import Handler" \(IDH\) and the "Solr Content Extraction Library" \(Solr Cell\).

Cell is meant to index large amounts of files with very little configuration requirements. Cell does not support more complex import scenarios with several data sources and complex transformation requirements, though. It also does not support data pull. In our case, these disadvantages rule it out as a solution.

The second standard solr preprocessing plug-in, IDH, is a flexible extraction, transformation and loading framework for solr that allows integration of various data sources and supports both, pull and push scenarios.

Unfortunately even IDH has two limitations that are relevant in our case:

* IDH's XPath implementation is incomplete. It does not support certain types of XPath queries that are relevant to us: An IDH XPath query cannot qualify on two different XML attributes at the same time which rules out the possibility to transmit native OJS XML to IDH.
* Due to it's sequential “row” concept imposed on XML parsing, IDH also does not usually support denormalizing several binary documents into a single Lucene document. In fact no standard solr contribution is designed to do so out-of-the-box \(see [http://lucene.472066.n3.nabble.com/multiple-binary-documents-into-a-single-solr-document-Vignette-OpenText-integration-td472172.html](http://lucene.472066.n3.nabble.com/multiple-binary-documents-into-a-single-solr-document-Vignette-OpenText-integration-td472172.html)\). Only by developing a custom XML data transmission format with CDATA-embedded XML sub-documents did we manage to work around this limitation without having to resort to custom compiled Java code on the server side, see “XML format for article addition” below.

Recommendation: Use IDH for document preprocessing with a custom XML document transmission format.

### Should we use Tika to retrieve Meta-Data from Documents?

Tika can retrieve document meta-data from certain document formats, e.g. MS Word documents. This functionality is also well integrated with IDH.

Using this meta-data is problematic, though:

* Document meta-data cannot be consistently retrieved from all document types.
* Even where the document theoretically allows for storage of a full meta-data set, these meta-data may be incomplete or inconsistent with OJS meta-data.
* We do have a full set of high-quality document meta-data in OJS that we can use instead.

Recommendation: Do not use Tika to extract document meta-data but use the data provided by OJS instead.

### Transmission Protocol

IDH supports several data transmission protocols, e.g. direct file access, HTTP, JDBC, etc. In our case we could use direct file access or JDBC for the embedded deployment scenario. But as we also have to support multi-installation scenarios we prefer channeling all data through the network stack so that we can use a single preprocessing configuration for all deployment options. Using the network locally is only marginally slower than accessing the database and file system directly. By far most processing time is spent for document conversion and indexing so document transmission will hardly become a performance bottleneck.

HTTP is the network protocol supported by IDH. HTTP can be used for push and pull configurations. It supports transmission of character stream \(meta-\)data as well as binary \(full text\) documents. Our recommendation is therefore to use HTTP as the only data transmission protocol in all deployment scenarios.

Non-HTTP protocols can still be optionally supported \(e.g. for performance reasons\) by making relatively small custom changes to the default IDH configuration.

Exact details of the transmission protocol will be laid out in the “OJS/solr Protocol Specification” below.

### Submission and Preprocessing Recommendations

To sum up, our analysis of the data import process revealed that the following requirements should be met by a data preprocessing solution:

* No custom Java programming should be required.
* Push and pull scenarios should be supported.
* Remote preprocessing should be supported.
* We have to support denormalization of various binary files into a single Lucene document.
* Preprocessing should be done with Tika using native solr plug-ins.
* Documents and meta-data should be sent over the network.

We provide a prototypical IDH configuration that serves all these import and preprocessing needs:

* We provide push and pull configurations. Push is supported by IDH's ContentStreamDataSource and pull is supported via the UrlDataSource.
* Both configurations do not require direct file or database access. All communication is over the network stack.
* In our prototype we demonstrate a way to use an IDH FieldReaderDataSource to pass embedded XML between nested IDH XPathEntityProcessor instances. This allows us to denormalize our article entity with a single IDH configuration. We also draw heavily on IDH's ScriptTransformer to dynamically create new solr fields when additional languages or file types are being indexed for the first time. This means that no IDH maintenance will be necessary to support additional locales.
* All file transformations are done via IDH's Tika integration \(TikaEntityProcessor\). We nest the Tika processor into an XPathEntityProcessor and combine it with a ScriptTransformer to denormalize several binary files into dynamic solr fields.

Please see plugins/generic/solr/embedded/solr/conf/dih-ojs.xml for details.

<hr />

## Analysis

In the Lucene context, “analysis” means filtering the character stream of preprocessed document data \(e.g. filter out diacritics\), splitting it up into indexed search terms \(tokenization\) and manipulating terms to improve the relevance of search results \(e.g. synonym injection, lower casing and stemming\).

### Precision and Recall

This part of the document describes how we analyze and index documents and queries to improve precision and recall of the OJS search. In other words: We have to include a maximum number of documents relevant to a given search query \(recall\) into our result set while including a minimum of false positives \(precision\).

Measures that may improve recall in our case are:

* not making a difference between lower and upper case letters
* removing diacritics to ignore common misspellings
* using an appropriate tokenization strategy \(e.g. n-gram for logographic notation or unspecified languages and whitespace for alphabetical notation\)
* using "stemmers" to identify documents containing different grammatical forms of the words in a query
* using synonym lists \(thesauri\) to include documents that contain terms with similar meaning

Measures that improve precision may be:

* ignore frequently used words that usually carry little distinctive meaning \("stopwords"\)

Often there is a certain conflict between optimizing recall and precision. Measures that improve recall by ignoring potentially significant differences between search terms may produce false positives thereby reducing precision.

Please observe that most of the above measures require knowledge about the text language, i.e. its specific notation, grammar or even pronunciation. A notable exception to this rule is n-gram analysis which is language-agnostic. Support for a broad number of languages is one of our most important requirements. Therefore appropriate language-specific treatment of meta-data and full text documents is critical to the success of the proposed design. We'll therefore treat language-specific analysis in detail in the following section.

Our general approach is to keep the analysis process as simple as possible by default. This also includes minimal stemming and language-specific analysis. This is to honor the “simplicity” design goal as specified for this project. Whenever we discover unsatisfactory relevance of result lists during testing \(see our testing approach above\), especially insufficient recall of multilingual documents, we'll further customize analysis chains. This ensures that additional complexity is only introduced when well justified by specific user needs.

### Multilingual Documents

It is one of the core requirements of this project to better support search in multilingual content. This is especially true for languages with logographic notation, such as Japanese or Chinese, that are not supported by the current OJS search implementation. We've already analyzed the impact of multilingual documents on index and data model design. The most important part of multilingual support lies in the analysis process, though. In fact, allowing for language-specific analysis is one of the reasons why we recommend a “one-field-per-language” data model.

There is no recommended default approach for dealing with multilingual content in solr/Lucene. The range of potential applications is so large that individual solutions have to be found for every use case. We'll therefore handle this question to a considerable amount of detail: First we'll list a few specific analysis requirements derived from the more general project requirements presented earlier. Then we'll discuss several approaches to multilingual analysis. Finally we'll recommend an individual solution for the use cases to be supported in this project.

#### Requirements

Requirements for the analysis process must above all be derived from expected user queries and the corresponding correctly ranked result lists. The following list of analysis requirements are therefore derived from properties specific to multilingual OJS search queries:

* The OJS search form is language agnostic. Search terms can be entered in any language. Both, single and mixed-language queries, should be allowed.
* The indexing process should be able to deal with galleys and supplementary files in different languages.
* The indexing process should usually be able to rely on the locale information given for the galley or supplementary file being indexed. A language classifier might optionally be used for galleys whose locale information is unreliable or cannot be identified.
* The indexing process should be able to deal with mixed-language documents where short foreign-language paragraphs alternate with the main galley/supplementary file language. This means that e.g. an English search term entered into the OJS search box should find a German document containing the search word in an English-language citation.
* The following languages should be specifically supported: English, German, Spanish, Chinese, Japanese. Other languages should be supported by a generic analysis process that works reasonably well for multilingual documents.
* A process should be defined and documented for plugging in additional language-specific analysis chains on demand.

Further requirements derive from multilingual test queries. Consult the list of test queries linked in the main “Requirements” section above for details.

#### Language Recognition vs. Preset Language

When multilingual content should be analyzed in a language-specific manner \(e.g. stemming, stopwords, etc.\) we need to know the document language to be able to branch into the correct analysis chain. There are two basic approaches to obtain such language identity information: machine language recognition and user input.

Advantages of machine language recognition:

* Deals with incomplete or unreliable locale information of meta-data, galleys and supplementary files.

Advantages of preset languages:

* Simpler to implement.

Reliability of machine language recognition vs. preset languages mainly depends on the reliability of user input in the case of preset languages: In our case user provided language information will probably be quite reliable for meta-data and galleys. This is not the case for the content of supplementary files as these do not have a standardized locale field. This seems to be a minor problem, though: It is assumed that searches on supplementary file content are of minor importance in our case.

Our recommendation therefore is to work with preset languages to avoid unnecessary implementation/maintenance cost and complexity. If we see in practice that important test queries cannot be run with preset languages then we can still plug-in language recognition where necessary. We can use solr's “langid” plug-in in this case, see [https://wiki.apache.org/solr/LanguageDetection](https://wiki.apache.org/solr/LanguageDetection). It provides field-level language recognition out-of-he-box.

#### Document vs. Paragraph-Level Language Recognition

The granularity of multilingual analysis has a great influence on implementation complexity and cost. While document-level language processing is largely supported with standard Lucene components, paragraph or sentence-level language recognition and processing requires considerable custom implementation work. This includes development and maintenance of custom solr/Lucene plug-ins based on 3rd-party natural language processing \(NLP\) frameworks like OpenNLP or LingPipe.

We identified the following implementation options for multilingual support:

1. Allow language-specific treatment only on a document level and treat all documents as "monolingual". Document parts that are not in the main document language may or may not be recognized depending on the linguistic/notational similarity between the main document language and the secondary language.
2. Allow language-specific treatment on document level and provide an additional "one-size-fits-all" analysis channel that works reasonably well with a large number of languages \(e.g. using an n-gram approach, see below\). Search queries would then be expanded across the language-specific and generic search fields. This will probably improve recall but reduce precision for secondary-language search terms.
3. Perform paragraph or sentence-level language recognition and analyze text chunks individually according to their specific language. This should provide highest precision and recall but will be considerably more expensive to implement and maintain.

The advantage of the first two options is that they can be implemented with standard solr/Lucene components. The third option will require development and maintenance of custom solr/Lucene plug-ins and integration with third-party language processing tools. This is not an option in our case as it would require custom Java programming which has been excluded as a possibility for this project.

We recommend the second approach which will be further detailed in the next section.

#### Language-Specific Analysis vs. n-gram Approach

There are two basic approaches to deal with multilingual content: A generic n-gram approach that works in a language-agnostic manner and provides relatively good mixed-language analysis results. Alternatively language-specific analysis chains can be used to analyze text whose language is known at analysis time.

Advantages of an n-gram approach:

* relatively easy to implement with a single multilingual analyzer chain
* easy to introduce new languages \(no additional configuration required\)
* easy to query \(no need for query expansion\)
* can be used to index mixed-language documents
* no language identification required
* may speed up wildcard searches in some situations

Advantages of language-specific analysis chains:

* higher relevancy of search results \(less false positives or false negatives\)
* language information contributes to proper ranking of documents
* easier to tune in case of language-specific relevancy or ranking problems
* requires less storage space, especially when compared to multi-gram analysis \(e.g. full 2-, 3- and 4-gram analysis for a single field\).

While language-specific analysis chains may not be ideal for mixed-language content, it is improbable that n-gram analysis alone will provide satisfactory relevance of result sets.

We therefore recommend a mixed approach: We should provide language-specific analysis chains for the main language of a document or meta-data fields where the language is known and supported. All fields and documents may additionally undergo partial n-gram \(e.g. edge-gram\) analysis if we find that this is necessary to support multilingual document fields or fields that do not have a language specified. The results from both analysis processes will have to go into separate fields. This requires separate fields per language \(see “Data Model” above\) and query expansion to all language fields \(see the “Query Transformation and Expansion” below\).

### Character Stream Filtering

According to our “simplicity by default” approach we do not recommend any character stream filtering unless specific test use cases require us to do so. The recommended stemming filters deal to a large extent with diacritics. Lower case filtering is done on a token level.

### Tokenizing

Tokenization differs for alphabetic languages on the one side and logographic languages on the other. We recommend standard whitespace tokenization for most Western languages while a bigram approach is usually recommended for Japanese, Chinese and Korean. We therefore recommend the solr CJK-tokenizer for these languages.

### Token Filtering

We recommend lowercase filtering for alphabetic languages and language-specific stopword filtering by default. In order to simplify analysis and avoid additional maintenance cost, we do not recommend synonym filtering unless required to support specific test cases.

### Stemming

We recommend solr's minimal language-specific stemming implementations where they exist. Should these yield insufficient recall during testing then we can replace them with more aggressive stemmers on a case-by-case basis.

One might even want to remove all stemming and cluster all alphabetical languages into a single analysis chain similarly to what currently is being done in standard OJS search. In order to keep flexibility for advanced use cases in scenarios S3 and S4 we do recommend language-specific analysis chains, though, even if not used out-of-the-box. It has to be kept in mind that this complexity is completely transparent to end users.

### Special Fields

Keyword fields like discipline, subject, etc. are not usually passed through stemming filters. We therefore recommend a generic, language-agnostic analysis chain for all keyword fields.

We have to support a special analysis chain for the article and issue publication date so that range queries on the publication date can be supported. There are default analyzers and field types for dates which we recommend here.

Text fields to be sorted on must not be tokenized. Date fields to be sorted on must be of a different type as date fields to be queried on. We therefore provide special field types for sort ordering.

Theoretically chronological coverage could be analyzed with a location analyzer if \(and only if\) geographical coverage would be given in a well-defined latitude/longitude format. As this is not usually the case in OJS we recommend analyzing geographic coverage in the same way as other keyword fields.

### Field Storage

Most use cases only require us to index fields. Storage is not required. The only field we need to store \(and return from queries\) is the document ID field which will be required by OJS to retrieve article data for display in result sets. There is a notable exceptions to this rule, though: If we enable highlighting then storage of galley fields is mandatory. This is necessary so that the highlighting component can return search terms in their original context. Therefore highlighting considerably increases storage space required by OJS solr indexes. This should be considered when deciding whether this feature is to be supported out-of-the-box.

### Default Implementation

Please see plugins/generic/solr/embedded/solr/conf/schema.xml for our recommended analysis configuration.

# OJS/solr Protocol Specification

## Internal API Specification

Several 3rd-party PHP/solr integration libraries exist, including solr and PECL extensions, see [https://wiki.apache.org/solr/SolPHP](https://wiki.apache.org/solr/SolPHP). Unfortunately none of these have been officially included into PHP and/or solr distributions. Regular upgrade of these extensions therefore adds additional maintenance cost and installation complexity. Furthermore none of the 3rd-party components complies with PKP's policy to keep maximum backwards PHP compatibility. Finally these libraries seem unnecessarily complex and overly generic for our use cases. We therefore recommend creating a lightweight and specialized PHP wrapper library hiding the internal workings of solr HTTP requests behind an easy-to-use internal service facade. This will allow us to keep OJS handler code separate from solr communication logic while maintaining complexity to a minimum. This solr service facade can be maintained within the solr plug-in. We recommend using the PHP curl\(\) extension for solr HTTP communication. This extension is widely used in other areas of OJS and it can therefore be assumed that it is present in most OJS server environments. We can use curl\(\) to place GET and POST requests to the solr request handlers as described in the following sections. We propose using the “phps” response writer \(“...&wt=phps...”\) when we want to use response data in PHP. This is easier to use, faster and less memory intensive than using XML as a response model. When we respond to AJAX calls \(e.g. for instant search or auto-suggest\), then we propose to use the JSON response writer \(“...&wt=json...”\) for easy re-routing of solr responses to the OJS JavaScript client. Administrative calls will always return XML which we'll have to parse with PKP's PHP4-compatible XML libraries. The fact that we implement solr integration as a generic plug-in requires changes to the OJS core code: We'll have to introduce additional hooks that call plug-in code at appropriate places in OJS core code. The following rules apply:

* If possible, hooks should not be placed in code that will later be refactored into a plugin \(e.g. classes/search/ArticleSearchDAO.inc.php, and any MySQL index specific methods in classes/search/ArticleSearch.inc.php and classes/search/ArticleSearchIndex.inc.php\).
* We'll introduce an ArticleSearchManager for consistency with naming conventions elsewhere and have article indexing functions delegated to that class. It'll be responsible for invoking whatever plugins are configured and new hooks will mostly be placed there. Hooks should be named accordingly.

## Index Maintenance Protocol

The index maintenance protocol is responsible for enabling write access from OJS to the solr index. It provides functions for adding/updating and deleting documents. Both functions are batch functions that can be invoked with one or many articles at once.

### Adding Documents

As we've seen above, articles can be pushed or pulled. In the “push” configuration, OJS will take action whenever one or more articles need to be added or updated. In the “pull” configuration, solr will initiate index updates due to a central update schedule.

#### Push Processing

Changes to an article trigger the following actions:

1. Whenever an aspect of an article changes \(article meta-data, galleys, supplementary file meta-data or files\), the OJS core code will call the indexing API marking the article as "changed". We therefore recommend renaming the update...\(\), index...\(\) and delete...\(\) methods of the ArticleSearchIndex class to article\(Metadata\|File\|Files\|\)Changed\(\)/suppFileMetadataChanged\(\)/articleFileDeleted\(\). The action of these functions for legacy SQL indexing does not have to change. This is a mere rename to document the changed intent of the call. This leaves it up to the indexing implementation whether it wants to implement the "dirty" pattern or not.
2. When all changes to an article are done then the core OJS code will inform the indexing API that all changes are done. We recommend introducing an "articleChangesFinished\(\)" method to the ArticleSearchIndex class. Indexing implementations that do not implement the "dirty" pattern will simply ignore that call. Plugins that implement the "dirty" pattern will now collect all changes and update the index accordingly. In the case of the solr plug-in this means that an XML document with all article meta-data, including the corresponding galley and supplementary file meta-data, of all "dirty" articles is sent over HTTP POST to the OJS DIH request handler .../solr/ojs/dih that is part of the recommended default solr configuration.
3. To keep the HTTP call as light as possible, the XML does not contain galleys or supplementary files but only contains links to full text documents. DIH asynchronously pulls these documents from the OJS server for extraction and preprocessing.
4. OJS will only mark an article as "clean" if the response given by solr indicates indexing success. To keep the implementation as simple as possible, the first implementation will be synchronous. If this turns out to make the OJS client unresponsive then the existing processing framework can be used to implement asynchronous indexing.
5. If processing returned an error then a notification will be provided to OJS technical administrators so that they can correct the error. The indexing status of the articles will not be changed to "clean". The next update will either occur when another article changes or when the admin triggers a manual refresh, either through the plug-in home page or through an additional switch of the rebuildSearchIndex.php script.

#### Pull Processing

A pull processing protocol may be implemented like this:

1. Article editing works in the same way as for the push protocol above, with the exception that a call to the articleChangesFinished\(\) method will not do anything \(=noop\) as indexing will be initiated on the solr-side rather than being initiated by OJS. Whenever a change made to an article \(publish, change, unpublish\) is complete, the article's state will change to "dirty". The atomic nature of database transactions will make sure that concurrent access to the dirty flag will be properly serialized.
2. The solr server will implement a scheduler that initiates indexing \(e.g. via cron script\). When the scheduler script fires, it will send a parameter-less GET request to a well known, installation-wide OJS end point.
3. When a request is made to this web service endpoint then all "dirty" articles up to a maximum batch size \(the same as for reindexing\) will be published to the solr server via XML. The pulled XML \(or the request response code?\) will indicate whether the response contained all articles or whether another batch needs to be pulled later. Otherwise the XML is in the same format used for push processing so that the DIH push configuration can be used completely unchanged for pull processing.
4. All retrieved articles \(and only those!\) will immediately be marked "clean". Changes occurring during the pull request must be able to continue normally. This means that we have to reset the flag selectively to avoid race conditions and to support multi-batch processing.
5. The server-side scheduler script will save the retrieved XML in a staging folder as a file with a unique ID \(e.g. timestamp\). Ordering the files by name should lead to a unique FIFO serialization of the files in the staging folder.
6. If an error occurs \(e.g. connectivity problems\) while an XML is being received, then the server has to discard everything that has been retrieved so far and no articles may be marked "clean" on the OJS side.
7. If the XML \(or the response code\) indicated that more articles must be retrieved then the scheduler will do so until all article changes have been pulled.

Server-side XML processing:

1. A second polling script on the server side will check whether an XML file exists in the staging folder. It will select the next file to be processed and POSTS it to the local DIH which will process it in exactly the same way as in the push configuration.
2. If processing is successful then the polling script will compress the file and move it to an archive folder. The name of the compressed file should maintain the unique ordering for easier debugging or replay. In case of a processing error the script will pause and try to process the file again. If, after three iterations, the file could not be successfully processed, it will be moved to an "errors" folder for later inspection and the polling script continues to process the next file.

Please note that we'll have to implement an additional OJS handler operation that returns the XML article list. We also have to make sure that articles marked for deletion can be processed by DIH \(which is not necessary in the case of push processing\). We can do this with the $deleteDocById feature of the DataImportHandler.

As indexing is an idempotent deletion/addition process in Lucene, network link or processing errors during any of the above steps will not result in an incomplete or corrupt index as long as DIH correctly confirms indexation. If anything goes wrong in the process no information will be lost as all offending files will be saved for manual inspection. Once the error has been resolved the file can be moved back to the staging folder being polled by the scheduler script and it will immediately be processed by the server.

If the index becomes corrupt then a provider has got two options:

1. If a point in time can be identified up to which the index was healthy and a backup of the index at that time exists then the provider can restore the index and select all files from the archive that were pulled after the time of the backup. These files can be "replayed" by decompressing them and moving them to the staging folder. Due to the idempotent nature of the indexing process this should lead to a healthy index in almost all possible situations.
2. If "replaying" files onto a backup index is not possible then the provider could run a script marking all articles in all installations dirty. The polling mechanism will make sure that even if there are many files coming in due to such a measure, the solr server will maintain constant load until all journals have been re-indexed. If the file names contain some indication about the source of the file \(i.e. the installation id\) then it is easy to monitor indexing process in such a case by issuing "ls some-file-pattern \| wc -l" commands on the staging folder.

#### XML Format for Article Addition

As laid out in the preprocessing section, we recommend using native solr plug-ins for data extraction. In our case we have chosen the Data Import Handler \(DIH\) for document extraction and preprocessing.

It has been evaluated whether existing OAI providers, i.e. NLM, Mods or MARC over OAI could be used with DIH. It has also been analyzed whether the native \(or other existing\) export formats could be imported. Unfortunately neither is not possible because DIH imposes limitations onto the OJS/solr data exchange format:

* DIH's XPath implementation is not complete. Only a subset of the XPath specification is supported. XPath queries that qualify on several attributes cannot be used which rules out OJS native export format. We have to provide a simple XML format that can be interpreted with DIH.
* DIH's Tika integration is usually restricted to a fixed number of binary documents per Lucene document. In our case, however, we have to support indexing of an arbitrary dynamic number of galleys and supplementary files per article. We work around this limitation by embedding CDATA-wrapped XML sub-documents for galleys and supplementary files into the main XML article list. Such documents can be extracted separately into fields and – together with a special field data source and custom DIH ScriptTransformer – make DIH "believe" that it is dealing with one binary file at a time. This workaround rules out both, OAI and OJS XML export formats as DIH source formats in our case.

Fortunately the required OJS/solr XML date exchange format is quite simple. A sample implementation exists which executes a pure SQL script to construct the XML for push to the solr test server from an arbitrary OJS database. The XML format is as follows:

* &lt;articleList&gt;...&lt;/articleList&gt;: This is the root element containing a list of article entities.
  * &lt;article id=”...” instId=”...” journalId=”...”&gt;...&lt;/article&gt;: This element is the only allowed child element of the &lt;articles&gt; element and its sub-elements contain all meta-data and file information of a single OJS article. The ID attribute contains a combination of a universally unique OJS installation ID, the journal ID and the article ID. This is necessary so that IDs are unique even when providers collect article data from several installations into a single search index. “instId” and “journalId” contain the installation and journal IDs separately which will be required for administrative purposes, e.g. batch deletion of articles.
    * &lt;authorList&gt;&lt;author&gt;...&lt;/author&gt;...&lt;/authorList&gt;: Full names of one or several article authors. This and the following elements are placed below the &lt;article&gt; element. If the information for any of this or the following search fields is not available then the element will be missing completely. Order of elements matters in the case of authors.
    * &lt;titleList&gt;&lt;title locale=”...” sortOnly="\(true\|false\)"&gt;...&lt;/title&gt;...&lt;/titleList&gt;: The article title together with its locale. Order of sub-elements does not matter for this or the following meta-data fields. The "sortOnly" flag is used to indicate whether the given title is to be used for result set ordering only. This may happen when a title does not exist for a given locale and OJS displays a "localized" title instead which differs from the currently chosen display locale.
    * &lt;abstractList&gt;&lt;abstract locale=”...”&gt;...&lt;/abstract&gt;...&lt;/abstractList&gt;: Localized article abstracts.
    * &lt;disciplineList&gt;&lt;discipline locale=”...”&gt;...&lt;/discipline&gt;...&lt;/disciplineList&gt;: Localized article disciplines.
    * &lt;subjectList&gt;&lt;subject locale=”...”&gt;...&lt;/subject&gt;...&lt;/subjectList&gt;: Localized article subjects.
    * &lt;typeList&gt;&lt;type locale=”...”&gt;...&lt;/type&gt;...&lt;/typeList&gt;: Localized article types.
    * &lt;coverageList&gt;&lt;coverage locale=”...”&gt;...&lt;/coverage&gt;...&lt;/coverageList&gt;: A list of coverage keywords \(concatenates geographic, time and sample coverage\).
    * &lt;journalTitleList&gt;&lt;journalTitle locale=”...” sortOnly="\(true\|false\)"&gt;...&lt;/journalTitle&gt;...&lt;/journalTitleList&gt;: The journal title together with its locale and sort only flag.
    * &lt;publicationDate&gt;...&lt;/publicationDate&gt;: The article's publication date in ISO 8601 format without second fractions \(“YYYY-MM-DDTHH:MM:SSZ”\). All dates are treated as UTC dates. OJS must translate local publication dates into UTC before sending them to solr.
    * &lt;issuePublicationDate&gt;...&lt;/issuePublicationDate&gt;: The issue's publication date in ISO 8601 format.
    * &lt;galley-xml&gt;...&lt;/galley-xml&gt;: A UTF-8 encoded CDATA field that contains an embedded XML file \(including the &lt;?xml …?&gt; header. We have to embed this XML so that solr's DIH extension can treat it separately during import processing. This is a workaround so that we can import several binary files for a single article.
    * &lt;suppFile-xml&gt;...&lt;/suppFile-xml&gt;: A UTF-8 encoded CDATA field containing embedded XML with supplementary file data. See &lt;galley-xml&gt; above for an explanation why we embed a secondary XML character stream.

Description of the embedded galley XML:

* &lt;galleyList&gt;...&lt;/galleyList&gt;: Wraps a list of galleys. This is the root element of the XML file embedded in &lt;galley-xml&gt;...&lt; /galley-xml&gt;.
  * &lt;galley locale=”...” mimetype=”...” url=”...” /&gt;: An element representing a single galley. It has no sub-elements. The mimetype attribute is the MIME type as stored in OJS' File class. The url attribute points to the URL of the full text file. DIH will pull the file from there over the network and extract its content.

Description of the embedded supplementary file XML:

* &lt;suppFileList&gt;...&lt;/suppFileList&gt;: Wraps a list of supplementary files. This is the root element of the XML file embedded in
&lt;suppFile-xml&gt;...&lt;/suppFile-xml&gt;.
  * &lt;suppFile locale=”...” mimetype=”...” url=”...”&gt;...&lt;/suppFile&gt;: An element representing a single supplementary file. It contains further sub-elements with some supplementary file meta-data. See the &lt;galley&gt; element above definition of the mimetype and url attributes. OJS has to make sure that the locale is one of the valid OJS locales or “unknown”. This requires internal transformation of the supplementary file language to the OJS 5-letter locale format if possible.
    * &lt;titleList&gt;&lt;title locale=”...”&gt;...&lt;/title&gt;...&lt;/titleList&gt;: A supplementary files localized title information.
    * &lt;creatorList&gt;&lt;creator locale=”...”&gt;...&lt;/creator&gt;...&lt;/creatorList&gt;: Supplementary file creators.
    * &lt;subjectList&gt;&lt;subject locale=”...”&gt;...&lt;/subject&gt;...&lt;/subjectList&gt;: Supplementary file subjects.
    * &lt;typeOtherList&gt;&lt;typeOther locale=”...”&gt;...&lt;/typeOther&gt;...&lt;/typeOtherList&gt;: Supplementary file types.
    * &lt;descriptionList&gt;&lt;description locale=”...”&gt;...&lt;/description&gt;...&lt;/descriptionList&gt;: Supplementary file descriptions.
    * &lt;sourceList&gt;&lt;source locale=”...”&gt;...&lt;/source&gt;...&lt;/sourceList&gt;: Supplementary file sources.

The &lt;articleList&gt; is the only mandatory element. All other &lt;\*List&gt; elements have cardinality 0..1 with respect to their parent elements. All other elements have cardinality 0..n with respect to their parent elements.

The update handler listening at “[http://127.0.0.1:8983/solr/ojs/dih”](http://127.0.0.1:8983/solr/ojs/dih”) in the default embedded solr server configuration will be able to consume this XML format.

### Updating Document

When a user updates an OJS article, galley or supplementary file, all documents and meta-data belonging to the same article will have to be re-indexed.

Lucene does not support partial update of already indexed documents. Therefore the OJS/solr protocol does not implement a specific update syntax. Adding a document with an ID that already exists in the index will automatically delete the existing document and add the updated document.

See the protocol for document addition for more details.

### Deleting Documents

We propose to support four use cases:

* delete a single article from the index
* delete all articles of a journal
* delete all articles of an installation
* delete all articles in the index

Deletion of a single article from the index is required when an article is being unpublished in OJS \(“rejected and archived”\). Deletion of articles from a journal or installation will be required when \(partially\) re-building an index, see the interface specification above. Deletion of all articles in the index only differs from from the third case in scenarios S3 and S4. As these are installation-overarching operations we do not recommend providing an end-user interface for this task in OJS. We rather recommend that providers completely delete or move their index directory or build a new index in the background in a separate core and switch to this core after the re-build by using direct access to the solr web interface.

All other use cases can be supported by calling solr's native update handler “.../solr/ojs/update” with the usual &lt;delete&gt;...&lt;/delete&gt; syntax from within OJS. We provide journal and installation IDs in our data model so that we can batch delete all documents from these entities with a simple delete search query.

When working with push updates then all deleted documents can immediately be pushed for re-indexing if required. When working with pull updates then deleted articles will be marked “not indexed” so that they'll be re-indexed automatically the next time a pull request arrives from the solr server.

### Subscription-Based Publication

In order for the Solr server to gain access to subscription-only content on the server, its server IP will have to be authorized as an "institutional subscriber". We'll make sure that the normal subscription checks will be valid in a pull scenario. This means that our XML web service for "dirty" articles will only provide access to subscription-protected articles if the requesting server can properly authenticate itself and has been authorized to access the article data.

## Search Protocol

The OJS/solr search protocol is the well documented “edismax” query and result format. We do not reproduce the general “edismax” syntax here. Please refer to the official solr documentation for details.

We implement a custom search request handler for OJS search queries. In the embedded scenario it will listen to requests at “[http://127.0.0.1:8983/solr/ojs/search”](http://127.0.0.1:8983/solr/ojs/search%E2%80%9D). We do not place queries through solr's default “/select” request handler. This handler should not allow public access in the default configuration as it allows direct requests to solr's administrative request handler.

Configuring our own request handler has further advantages:

* We can preconfigure it with mandatory parameters that cannot be changed client-side. This helps to secure our request handler to a certain extent and reduces the amount of parameters that need to be passed in from OJS.
* We enable advanced users to set almost all search parameters \(mandatory or default\) without having to change OJS code.
* We enable advanced users to define their own restricted search endpoints \(e.g. filtering on a certain category of journals\) if they implement a provider-wide search server. These endpoints can then be configured as custom search endpoints in OJS, see “Configuring the Deployment Scenario” above.

We only use a subset of the “edismax” search options. This subset has been described in the “querying” chapter above. Please refer there for details on the protocol parts actually being used by OJS search access to solr.

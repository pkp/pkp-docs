# Querying

## Query Entry and Auto-Suggest

Search queries entered into the search fields will be submitted to the OJS server as POST requests. This does not differ from the current search implementation. OJS will then start a nested HTTP request to the solr server which will return matching article IDs and \(if enabled\) advanced search information as highlighting, alternative spelling suggestions, similar articles, etc.

OJS will access its article database to present the result set. This works exactly in the same way as in the current OJS search implementation. The only difference is that article IDs are provided by solr rather than being retrieved from OJS' own index implementation.

Auto-suggestions can be obtained from prefixed facet searches, a dictionary-based suggester component or term searches. In all cases AJAX search requests have to be sent to a specific OJS handler operation on every keystroke in one of the search fields. The OJS handler will then delegate internally to the OJS solr search endpoint and return the results to the OJS client browser. This requires us to implement a specific OJS handler operation for auto-suggestions plus corresponding JavaScript client code which can be based on PKP's JavaScript framework.

Prefixed facet searches have the advantage that they only suggest searches that will actually return results. They can even inform about the number of documents that will be returned for each proposed search query. The problem with prefixed facet searches is that they do not scale linearly when searching in large indexes. Suggester searches are extremely fast as they can be provided almost without processing from a pre-calculated dictionary. We have to provide separate dictionary fields for each search field that we want to enable for auto-suggest. These fields have the same requirements with respect to the data model and analysis process as alternative spelling suggestions. See the data model and corresponding faceting/spelling chapters for details.

We recommend implementing both, prefixed facet and suggester based auto-suggestions. Prefixed facet suggestions should be the default. If it turns out that prefixed facet searches do not provide the necessary performance in a given deployment scenario then switching from one implementation to the other should just require a bit of re-configuration and no programming effort. Most of the implementation effort lies in the JavaScript front-end and OJS handler which are the same for both auto-suggest implementations except for a few search parameters. We do not consider the third possibility to obtain suggestions: term searches. Term searches do not provide a considerable advantage over suggester searches but are less flexible.

## Query Parser

Solr provides a considerable number of query parsers. Prominent choices in our case are: “lucene” \(the default Lucene query syntax\), “dismax” \(provides a simplified query syntax and allows additional fine tuning of query parameters, e.g. term boost\) and “edismax” which improves on details of the dismax implementation and safety.

Unfortunately none of these query parsers currently corresponds 100% to our needs. The problematic requirements are "implicit AND", "cross-language search", "advanced multi-field search", "language specific stopword lists" and full support for the "NOT" query keyword.

The "lucene" parser supports implicit AND and would therefore be a potential choice in our case. Unfortunately, though, it does not implement multi-field queries. Fielded searches can only be done one field at a time. Naively one could do something like:

```
   .../defType=lucene
&
q=field1:(some phrase) OR field2:(some phrase)

```

to implement multi-field queries. This however has unexpected side effects when querying with NOT. Imagine an article with the following title in two languages: The German version is "Kanzlerin Merkel und die Eurokrise" and the English version would then be "Chancellor Merkel and the Euro Crisis". Now some user who does not want any article to remind him of his personal stock portfolio disaster might query "Merkel NOT Eurokrise". This query would then be expanded to:

```
   .../defType=lucene
&
q=title_de_DE:(Merkel NOT Eurokrise) OR title_en_US:(Merkel NOT Eurokrise)

```

While the first field search returns no results, the second certainly will. The English title contains the word "Merkel" but not the word "Eurokrise". And "FALSE OR TRUE" will become "TRUE" overall so the article matches. While this may make sense technically it causes unintuitive results in practice.

In principle the "edismax" parser's multi-field query could come to the rescue. Transforming the above query to:

```
   .../defType=edismax
&
q=Merkel NOT Eurokrise
&
qf=title_de_DE title_en_US

```

yields the expected result. Now the two fields are treated as if they were concatenated.

Apart from that the "edismax" parser has further advantages over the "lucene" parser: It has the most advanced features for OJS providers to customize search handlers, e.g. with respect to field or document boost. It also is more forgiving about erroneous user input and will gracefully fall back to a simple keyword search in case syntax errors are encountered in the query.

The problem is that "edismax" \(and "dismax", too\) do not support implicit AND conjunction of search phrases. Setting the "edismax" min-match parameter to 100% could simulate implicit AND but unfortunately it is buggy when used together with fielded search. This means that:

```
   .../defType=edismax
&
q=(Merkel Eurokrise)
&
qf=title_de_DE title_en_US
&
mm=100%

```

works as expected but

```
   .../defType=edismax
&
q=(Merkel Eurokrise) +journal_id:test-inst-2
&
qf=title_de_DE title_en_US
&
mm=100%

```

does not as the min-match parameter will suddenly stop to work when used in conjunction with a fielded query. See[http://lucene.472066.n3.nabble.com/Dismax-mm-per-field-td3222594.html](http://lucene.472066.n3.nabble.com/Dismax-mm-per-field-td3222594.html). Actually the problem is worse than described in the cited article as can be seen in our example. The min-match parameter will stop to work even for the main query when adding a completely independent field query.

This problem can be worked around with subqueries, though. When reformulating the above query as:

```
   .../q=_query_:"{!edismax qf='title_de_DE title_en_US' v='Merkel Eurokrise'}" +journal_id:test-inst-2 +inst_id:test-inst
&
mm=100%

```

everything will work as expected. Subqueries have the additional advantage that they enable advanced multi-lingual queries which require us to query different field lists with individual search phrases, like this:

```
   .../q=_query_:"{!edismax qf='title_de_DE title_en_US' v='Merkel Eurokrise'}" _query_:"{!edismax qf='subject_de_DE subject_en_US' v='Obama'}" +journal_id:test-inst-2 +inst_id:test-inst
&
mm=100%

```

So why not doing it like this? The problem is another quirk of the min-match parameter: It does not work as expected when used in conjunction with stopword lists. Searching for "Die Eurokrise" in the above example will return no results as "die" is a German stopword but it is not on the list of English stopwords. Internally the query would therefore be transformed to something like this \(simplified!\):

```
   +title_en_US:die +(title_de_DE:Eurokrise OR title_en_US:Eurokrise)

```

Edismax will "optimize" the query by removing the stopword "die" from the query on the German title. A min-match setting of "100%" will cause all parts of the query to be mandatory, though. Now there obviously will be no match for the first search term in our example. And as this search phrase is marked "mandatory" by our min-match setting, the article will not be selected for the result set although it is certainly relevant. See [http://lucene.472066.n3.nabble.com/Dismax-Minimum-Match-Stopwords-Bug-td493483.html](http://lucene.472066.n3.nabble.com/Dismax-Minimum-Match-Stopwords-Bug-td493483.html)and[https://bibwild.wordpress.com/2010/04/14/solr-stop-wordsdismax-gotcha/](https://bibwild.wordpress.com/2010/04/14/solr-stop-wordsdismax-gotcha/)for details.

The solutions proposed by solr's developers are to either remove stopword lists altogether, use the same stopword list for all fields \(aka languages\) or use a min-match setting of "1" \(i.e. implicit OR\). None of these solutions is compatible with our requirements.

In other words: There is currently no known way to implement all of our requirements with the existing solr query parsers.

This leaves us with the following options:

1. Drop the "implicit AND" requirement. This means we can set edismax "min-match" to 1 which would work around the stopword problem while correctly dealing with "NOT" queries and cross-language search. Additionally providers would then be able to use edismax's advanced result set optimization features.
2. Drop the requirement to implement language-specific stopword lists: We could implement a single stopword list across all languages \(or no stopword list at all\) which will allow us to use a min-match setting of "100%" which will make implicit AND work in most situations with edismax. Cross-language search, advanced multi-field search and "NOT" will then be supported as required.
3. Drop the cross-language search requirement: We can implement this by providing a drop-down box in the search GUI to select the language to be searched. If we do this then we can do without cross-language searches which will bring the "lucene" query parser back into consideration. We can implement multi-field search \(i.e. "all fields" and "index term fields"\) by indexing "combined" fields that concatenate index terms from several fields. Such concatenation is not possible across languages as solr requires separate fields for separate analysis chains. This option will solve the problems with searches containing a "NOT" keyword and also make "implicit AND" work correctly.
4. Drop the requirement to fully support the "NOT" operator: Using the "lucene" parser together with OR-related field-based searches as demonstrated in our first example would then be the proposed solution.

I ordered the proposals according to our current judgment of "best usability" for the end user. "Implicit OR" may be a deviation from current OJS requirements but it certainly is what most users are already used to, e.g. from Google searches. The "implicit AND" makes sense for the OJS SQL search as it does not implement a very effective ranking mechanism. With solr's improved ranking algorithm results that match the query only partially will appear lower in the list so basically the first few hits in the list should be exactly those containing all search terms. Therefore dropping the "implicit AND" requirement seems to have almost no impact on usability or may even improve usability by increasing recall while maintaining precision through intelligent result ranking.

Stopword lists are mainly used to improve query performance. Removing stopword lists will probably only marginally influence results from a user perspective. It is, however, probable that recall decreases which may reduce overall result set relevance.

Introducing a language drop-down for queries or no longer supporting the "NOT" operator are highly visible changes to the current search implementation and will have adverse impact on usability. We therefore do not recommend these options.

## Wildcards and Stemming

A known problem of solr is the lack of analysis filter support for wildcards. Wildcards are not being analyzed in the same way as normal query terms. The support for wildcards has significantly improved in solr 3.6.0: It is now possible for filters in the analysis chain to support a special "multiterm" interface which will handle wildcard transformation. There are not many filters, though, which support this interface.

Stemmers, in particular, will probably not be able to do anything about wildcard terms in the foreseeable future. Terms with wildcards cannot be stemmed as the usual stemming heuristics need the whole word to be present. This means that wildcard queries will often not match stemmed index entries. If the words "scientist" and "scientific", say, are both stemmed to "scient" then the search "scienti\*" will find none of them. This may not be a huge problem in a language like English where relatively unaggressive stemming yields good results. In German, French and other languages with much more mutable grammatical forms, stemming may have to be more aggressive. In this case the combination of wildcards and stemming can produce quite visible problems.

This target conflict of tolerance towards varying grammatical forms of the same word and support for wildcard queries cannot be completely solved with current solr technology. We therefore try to compromise by using light stemmers and tolerate a certain amount of false negatives in our search results.

## Query Analysis and Synonym Injection

We recommend that for query purposes, the query will be analyzed exactly in the same way as the queried document fields at indexing time. Therefore there isn't much to say about query analysis that has not been said before in the analysis chapter. There is only one possible exception to this rule: We may want to consider synonym injection at query time. This means that an additional analysis component could be added to the query analyzer that checks for synonyms, either in a static, manually maintained language-specific thesaurus or in online sources like WordNet. Whenever a synonym is found it will be injected to the token stream and handled as if it had been part of the original query. Whether or not query-side synonym injection should be implemented and from which source is to be decided by the project owner.

## Ranking

Ranking of OJS articles is done through the default solr/Lucene ranking algorithm. The algorithm is called “term frequency – inverse document frequency” or “TF-IDF” for short and will be outlined in the next few paragraphs. Lucene-specific details of the ranking algorithms are out of scope for this document and can be looked up in the Lucene documentation, above all in the JavaDoc of the StandardSimilarity class.

### Term Frequency

The term frequency TF\(t, d\) is the number of times the term t occurs in a given document d.

### Inverse Document Frequency

The inverse document frequency of a term t in an index is:

IDF\(t\) = log\(N / DF\(t\)\)

Where:

* t is an arbitrary dictionary term
* N is the total number of documents in an index. In the Lucene documentation this measure is usually referenced to as "maxDoc".
* DF\(t\) is the document frequency of term t in an index. The document frequency is defined as the number of documents containing the term t one or more times. In Lucene this is usually called "docFreq".

NB: IDF is finite if every dictionary term t occurs at least once in the document collection \(as then DF\(t\) &gt; 0\). If we build our dictionary exclusively from the document collection itself then this is guaranteed and IDF is defined everywhere.

### Combined Term / Inverse Document Frequency

Ranking in Lucene is some variant of the combined term/inverse document frequency:

TF-IDF\(t, d\) = TF\(t, d\) \* IDF\(t\)

NB: TF-IDF is zero if a document does not contain the term t. If the dictionary contains terms that are not in the document collection then TF-IDF is defined to be zero for this term for all documents. We can usually avoid this by building our dictionary exclusively from the document collection.

### Overlap Score Measure

Score\(q, d\) is the sum over all t in q of TF-IDF\(t, d\) where q is the set of all terms in a search query.

In other words: A search term contributes highest to a document's ranking for a given search query when the term occurs often in a document and the term has a high discriminatory significance in the document collection by choosing a small percentage of a collection's documents only.

In Lucene scoring of search queries with multiple terms is done with a “coordination factor” that works similarly to the approach just outlined. Lucene calculates a score for each field to derive it's document-level score. Lucene also further modifies this simple ranking approach for easy customization \(e.g. term boost, field boost, document boost, etc.\) and efficiency.

### Vector Space Model

Another perspective on Lucene's scoring algorithm is by modeling documents as term vectors in a vector space spanning all terms of a dictionary. More precisely: If D is a set of terms \(i.e. a “dictionary”\) then a single document d can be modeled as a vector V\(d\) in a card\(D\)-dimensional vector space.

Example: When using TF-IDF as scoring measure then the n-th component of the vector produced by the vector function V\(d\) is the TF-IDF of the document for the n-th dictionary term.

In this model a similarity \(or distance\) measure can be defined that computes the similarity of two documents \(or a document and a query\).

A common similarity measure is thecosine similarity:

sim\(d1, d2\) = V\(d1\) . V\(d2\) / \|V\(d1\)\|\|V\(d2\)\|

where the dot \(.\) stands for the vector dot product \(inner product\) and \|\| is the Euclidean norm. This is equal to the inner product of V\(d1\) and V\(d2\) normalized to unit length.

The advantage of this model is that not only distances/similarities between documents but also between a search query and a document can easily be calculated:

sim\(d, q\) == v\(d\) . v\(q\)

where v\(\) stands for the document vector V\(\) normalized to unit length.

NB: The “more-like-this” feature relies on similarity calculations between documents. It therefore requires term vectors to be stored in the index.

### Fine-Tuning the Ranking

By default we do not change any preconfigured ranking factors. By using the “edismax” query parser \(see above\) we do keep the option, though, to fine-tune client-side \(query-level\) ranking parameters should it become necessary. It is recommended to avoid client-side ranking adjustments. By configuring different solr search request handlers, different ranking approaches can be provided to different OJS installations by changing their search endpoint configuration \(see deployment option configuration above\).

If we implement article-level ranking factor adjustments \(boosts\), then these will probably have to be transferred to solr at indexing time. If we implement section-level ranking factor adjustments, then we can pass those adjustments in as per-section boost queries. This enables the user to change the section-level boost without us having to re-index all articles in that section. Sections that have the "never show" custom ranking setting can be excluded with a filter query.

Providers may use an external file field to specify custom ranking factors based on whatever field. In the embedded scenario, we could use external files for article/section ranking adjustments. We prefer to use boost queries, though, as these do not require us to maintain remote ranking files over the network in the central server deployment scenario.

### Potential Additional Ranking Metrics

While TF-IDF is the default scoring/ranking model in Lucene it can be customized by providing so-called boost factors for different entities in the model. These are simple multipliers that can occur on term and document level that increase \(multiplier &gt; 1\) or decrease \(multiplier &lt; 1\) the scoring contribution of that entity.

In our case document boost opens up a few interesting possibilities to further tune the relevancy of search results. Here are a few examples of metrics that could be used to “boost” certain articles so that they rank higher in result lists:

* citation index data
* usage metrics, e.g. as supplied by the OJS.de statistics sub-project
* click-through popularity feed back from OJS, i.e. the number of times an article was actually opened after it being presented on a result list
* article recency, i.e. favor articles with a more recent publication date over older articles

The question is how such data could be provided to solr. I propose that we implement an API in OJS that can receive and store document-level boost data for each article. This can be implemented as a non-mandatory setting in the article settings table. If such boost data is present then it will automatically be sent to solr at indexing time. We'll have to implement a normalization method so that editors can enter arbitrary numbers that will then be translated to proper boost factors. Changing the boost data would mean that the article would have to be re-indexed \(like any other change to search-related article meta-data\).

Alternatively, advanced users can provide periodically updated files with document boost data, see http:// lucene.apache.org/solr/api/org/apache/solr/schema/ExternalFileField. html.

## Instant Search

Instant search means that while the user is still typing in a search request, a first result-preview is being displayed instantly in the result list. It requires a “one page” search interface as explained above. It also requires an additional OJS AJAX request handler that forwards AJAX search events to the solr server and returns results in a format that can be interpreted by the OJS browser code. The OJS development branch has access to the new JavaScript framework that was developed for OMP. We could use it to implement the necessary client-side JavaScript for “instant search”.

## Result Presentation

Result presentation is mostly an OJS-side task. It will not differ from the current implementation except for a few details that will be outlined later. The solr search server returns ID fields only which can be used by OJS to retrieve all required additional data from its database. This implementation recommendation is due to two reasons:

* The solr index will consume considerably less space if the original text does not have to be stored.
* In a subscription-based scenario we want to avoid that full texts can be leaked if malicious users gain direct access to the Lucene server. It has to be admitted, though, that not storing full texts is a relatively weak protection and can be worked around to a certain extend. The best protection against full text leakage is proper firewalling of the solr server as described in the deployment option chapter below.

If we want to support highlighting then we have to store galley full texts for all interface languages. Highlighting requires the original non-analyzed text to be present so that the context of search terms can be retrieved. Other necessary changes to the result presentation have already been defined in the interface specification above. Please refer there for more details.

### Paging

Paging is supported in solr through a query parameter. OJS will restrict search queries using solr's “start” and “rows” query parameters so that only actually displayed articles will be returned. This reduces the size of messages to be passed over the network.

### Highlighting

Highlighting can be supported in solr by a simple additional search query parameter: “...&hl=on...” plus a few configuration parameters defining the highlighted fields and the amount of context to be returned. If highlighting should be supported then we propose to base it on galley full text. In this case solr will automatically return extracts from the galley full text containing query terms. These extracts can then be displayed to the end user as part of the result list.

NB: Highlighting requires original \(non-tokenized\) galley full text to be stored in the index which can considerably blow up index size.

### Ordering

Lucene allows server-side ordering based on any indexed field. Server-side ordering is especially important when retrieving paged result sets. By default result sets will be sorted by the “virtual” field score which has been described above in the ranking section. Any other field can be specified with the sort parameter, e.g. “...&sort=authors\_txtsort asc, score desc...”.

OJS displays "localized" fields in its result set. This localized data may differ from the indexed data in case a article or journal title does not exist in the currently selected interface locale. In this case another locale will be displayed for the articles concerned. This means that data in sort fields may have to differ from the data indexed for query purposes. See the "data model" and "XML format" sections for technical requirements of sortable fields.

## Faceting

As described in the interface specification above, we propose faceting for the following search fields:

* authors
* publication date
* disciplines
* type
* subject
* coverage
* journal title \(cross-journal queries only\)

Some special filtering of these fields can be applied for faceting:

* It may make sense to only include the first author for faceting. It is up to the project owner to define this.
* Faceting on the publication date must be by date range rather than discrete date values.
* All other fields must be tokenized by separators \(e.g. "," and ";"\) and otherwise left intact so that facets display with the original spelling. Lowercasing facets may make sense, though.

We propose that we only return faceting results for the currently chosen interface language. This means that the fields for faceting cannot be preconfigured in the OJS search request handler but must be provided in the query string, e.g. “...&facet.field=subjects\_de\_DE”. Facets will be selected as links in the faceting block plug-in as described in the interface section above. Selecting one or more facets will result in the original query being re-issued with an additional filter query, e.g. in the case of a date range “...&fq=publication\_date\_dt:\(\[2006-01- 01T00:00:00Z TO 2007-01-01T00:00:00Z\] NOT "2007-01-01T00:00:00Z"\) ...”.

## Alternative Spelling Suggestions

Alternative spelling suggestions for a given search query can be provided based on solr's spellcheck search component. If this should be implemented then we recommend creating a multilingual dictionary based on a concatenated field that contains all meta-data and full text. The spellcheck dictionary will be stored in a separate Lucene index in …/files/solr/data/spellchecker. Such a spellcheck configuration has been implemented in the default configuration and details can be checked there. The dictionary needs to be rebuilt after large updates to the solr index. For performance reasons, we recommend issuing dictionary build commands on demand from the OJS installation after a few updates rather than updating after every commit. There is also an automatic “build after optimize” option for the spellchecker component. We cannot use this as we do not recommend optimization in the embedded scenario \(see search interface specification above\). We suggest to issue build commands to the usual OJS search interface with the following parameters: “q=nothing&rows=0&spellcheck=true&spellcheck.build=true&spellcheck.dictionary=default”. The q parameter is not usually required to build the dictionary. In our set-up with a preconfigured search request handler not providing it will result in an error.

## "More like this"

The “more-like-this” \(MLT\) feature can be implemented by configuring the solr MLT search component. This component extracts "interesting terms" from a document and then executes a query against the index to identify documents that contain these interesting terms.

Usually the results from the MLT component can be displayed unchanged. In our case, however, this won't work because we want to support a mixture of features \(e.g. highlighting, sorting, etc.\) not directly supported by the MLT component. Using MLT results directly also is problematic as it means that re-executing the search with the "interesting terms", might produce a different result which would be non-intuitive from an end-user's perspective.

We therefore considered the following alternatives:

1. Disable all incompatible features on the plugin settings page when enabling the MLT feature.
2. Disabling all incompatible features just for the MLT-query itself.
3. Using the MLT component to extract "interesting terms" and execute a second query with these terms against our usual search component with all enabled features working.

The first option seems unnecessarily restrictive. MLT-queries do not seem to be important \(popular\) enough to warrant such a drastic approach. Probably no one would enable MLT if it means to forgo sorting, highlighting, alternative spellings, etc.

The second option could be appropriate if the features to be disabled were not so exposed. Unfortunately the MLT does not support sorting of results which means that a central element of our UI would be disabled when executing MLT queries. It would be difficult to make this transparent to users. Worse even: Subsequent searches with the same terms could return different results as we'd then query against our usual search request handler which may handle search terms differently. So this option would result in a rather inconsistent user experience.

The third option also has drawbacks. It means that we have to execute two queries rather than one: a first query to retrieve "interesting terms" and a second query to retrieve the documents matching these terms. This will impact performance of MLT queries. It also means that we cannot use the automatic ranking boost feature of the MLT component as we do not officially support boosting through our regular query interface \(although expert users may use it as a non-documented feature as described elsewhere\).

As MLT queries do not make out a large proportion of overall user requests, the performance hit does not seem to be too relevant. Users may intuitively understand that MLT queries are "somehow more complex" and therefore take a bit longer to execute than normal queries. So consistency of the user experience will probably not be a problem. The fact that we cannot use automatic boost can be considered a payoff for simplicity and consistency of the user interface. The advantage of seeing exactly the query that was executed and being able to reproduce the exact results by manually re-executing the same query with "interesting terms" seems valuable enough to accept this drawback.

We therefore recommend implementing the third option.

There are several ways to access the MLT component:

* as a dedicated request handler that usually is supplied a single document id,
* as a search component of another request handler or
* as a request handler that ingests full text and proposes similar documents from the index.

The first option is the most frequently used option and seems adequate to retrieve "interesting terms" in our case.

We recommend the following default parameters for the MLT request handler:

* mlt=on,
* mlt.fl=xxx where xxx is set to the document field corresponding to the title and abstract with all languages supported for these fields in the index, e.g. mlt.fl=title\_en\_US title\_de\_DE abstract\_en\_US abstract\_de\_DE,
* mlt.interestingTerms=list to return the terms for a subsequent search query
* q=id:xxx where xxx is the solr document ID \(see “Data Model” above\) of the article we wish to base our search on,
* start=0 and rows=0 as we do not want any direct results,
* mlt.boost=off as we do not support boosting in our regular interface.

As we expect the MLT feature not to be used too frequently in most cases we propose not to store term vectors by default. This means that when an MLT request is being issued the corresponding document fields will have to be re-analyzed to derive term vector information. This is slower than storing term vectors but saves storage space. Term vectors can always be activated by advanced users if the default configuration is found to be too slow or resource consuming.

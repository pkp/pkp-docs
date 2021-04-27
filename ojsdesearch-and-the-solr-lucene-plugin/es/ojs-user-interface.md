# OJS User Interface

The following sub-sections propose changes to the OJS user interface for potential additional search features. We will only describe new or changed features. A full description of the existing search interface is not in scope for this document.

## Core Code Changes vs. Integration as a Plug-In

The question whether solr/Lucene should be integrated as a plug-in or whether changes should be made directly to OJS core code is not only one of the user interface. But it certainly makes a difference whether solr related configuration options are separated out into a plug-in or whether they appear on core set-up pages like administrative settings or journal set-up. The main question is whether solr/Lucene will be used by a majority of users or not. If a minority of users opts to use solr/Lucene then it would not be appropriate to “pollute” the core configuration pages with those options. If, however, many users are interested in using solr/Lucene, then hiding the feature away into a plug-in would make it unnecessarily difficult for those users to find the options they look for.

It is difficult to decide this without asking a representative number of users. From prior experience with similar changes, though, it seems reasonable to assume that the majority of users will continue to use the existing search interface. This is above all because solr/Lucene requires Java to be present on the hosting environment \(see installation requirements below\) which is often not the case. It also requires a certain amount of additional installation and configuration. And it requires a servlet container like jetty to be up-and-running all the time. While we'll reduce the installation and maintenance overhead to a minimum, the solr/Lucene search back-end will still be “heavier” and more difficult to deploy than the default search implementation.

There are important user groups, though, who definitely require an improved solr search back-end. These are OJS service providers and publishers of journals that contain content in non-Western languages which are not supported by the current search back-end. While the former are advanced users who will be well acquainted with OJS plug-ins, the latter may not. When removing solr/Lucene to a plug-in then this should be well advertised to the second user group, e.g. through OJS forums which rank well in Google.

Other, more technical arguments are in favor of factoring the solr/Lucene integration into a plug-in: It will be easier for the PKP core development team to review and maintain the new code if it is concentrated in a single place. And it will be easier to port the code to other PKP applications like OCS or OMP because the interface points of a plug-in with the core code are relatively easy to identify. Providing solr integration as a plug-in will also make it easier to include block plug-ins as needed for use cases like faceting.

A disadvantage of implementing the integration as a \(generic\) plug-in is that we'll probably have to introduce an important number of additional plug-in hooks into OJS core code with little future potential for re-use. This can however be mitigated by factoring the search plug-in into its own plug-in category later, if PKP wishes so.

With these arguments in mind and after consulting the PKP core development team, we recommend integrating solr/Lucene and jetty as a generic OJS plug-in.

## Search Interface

In accordance with the design principles defined above, the OJS search interface should be changed as little as possible. This means that existing features are to be maintained unchanged, no matter what search back-end will be used. The following sections only describe changes required by additional search features that are not part of the current search solution and may be optionally provided by the new solr search function. As before, all search features are open to the public. By using forced return field configurations for our search interface \(see “Querying” below\) we'll make sure that full texts of subscription-based journals cannot leak. Subscription-based journals may not want to enable highlighting, though \(see “Result List” below\).

### Search Syntax

The search syntax of the solr-driven search will be a super-set of the syntax currently provided by OJS. This means that all queries that work in the current OJS search will be supported in the same way by the solr back-end.

Additionally any search query understood by solr's “edismax” query parser \(see the corresponding solr documentation\) will be supported. Some advanced search options, only supported when searching via Lucene back-end are:

* a question mark as a wildcard allows matching a single letter
* phrase query with term proximity \(e.g. “some phrase”~3 finds documents containing “some” and “phrase” with not more than three words in between\)
* additional ranking parameters like term boost and field boost
* fuzzy queries \(e.g. research~ would match words similar to “research”\)

These details will be completely transparent to most end users while still giving advanced users the full query power of solr/Lucene directly from OJS if they wish so.

### Auto-Suggest

When typing a query in a search box \(simple or advanced\), then potential search terms starting with the same letters of the last entered search term will be proposed. The offered search terms will be taken from all terms indexed for the search field the user is typing in \(“query term completion”\).

### Alternative Spelling Proposals

After executing a search, OJS may propose alternative spellings of the same search query. These alternative search proposals – if they exist – may be offered as hyperlinks above or below the result list. Clicking on one of these hyperlinks will immediately execute the alternative search and return the corresponding result set.

### Result List

Results will be presented and paged in the same way as for the existing OJS search as long as no additional search features are being activated.

Ranking is according to the default Lucene TF-IDF ranking method, see the “Ranking” chapter below for details. We may optionally provide alternative ranking metrics, see “Custom Document Ranking” below.

As Lucene is not very good in retrieving documents far down the result list, we'll restrict the result list to 1000 documents independently of the actual size of the result set. This keeps users and web crawlers from executing overly expensive query operations.

We may implement result “highlighting”. If enabled \(see “Configuring Search Features” below\) then an extract from the full text may be provided containing highlighted search keywords from the query. This helps end users to better judge the relevance of search results.

We may implement “instant search” functionality. This means that searches are being executed in the background while the user is still entering a query. A few top results could be immediately displayed – without the user having to hit the submit button – using AJAX requests and dynamic HTML. Implementing “instant search” would require us to place the search query field\(s\) and the result set on the same page \(see Google's instant search feature for an example\). This would be a considerable deviation from the current “two-page” OJS search interface and would require us to adapt the search interface for the default OJS search, too. It doesn't mean that the default OJS search needs to be implemented with instant search but it would have to be implemented as a “one page” search solution, too.

Finally we may want to implement a "More like this" hyperlink or button besides every article in the result list. Clicking on this UI element will yield documents containing similar "interesting terms" as the chosen document. See the solr documentation for a definition of what is considered an "interesting term."

### Result Manipulation and Refinement

Currently the ordering of search results cannot be manipulated. Order is by “relevance” according to the default ranking method.

We may provide an optional configuration option to enable alternative ordering criteria, e.g. alphabetically by author or title or by publication date. When enabled as an optional search feature, such ordering criteria could appear as a drop-down at the top of the search result list.

We may also propose a dynamic list of filter criteria \(e.g. authors, publication date ranges, disciplines, type, subject and coverage keywords\) to further refine the result list. This is called "faceting". Facets could be provided as a list of links organized by facet category \(aka search field\) in an optional block plug-in. This allows OJS administrators to easily enable/disable facets and flexibly place them according to their journal design.

Clicking on one of the facet links will re-execute the original search with an additional filter as defined by the clicked facet. Once a search has been re-executed with a given facet, the facet will be displayed above the result list as a regular filter. As all filters it shows a “delete symbol” next to it. Clicking on the delete symbol will re-execute the search without the facet filter.

Facets will only be shown in the currently selected UI language. This avoids that the same search term will be displayed in many different languages which would be inappropriate for keyword fields or journal titles. We show a maximum of 15 facets per category. Facet categories will use the "extras on demand" pattern, i.e. facets belonging to a category will be hidden by default and only appear after clicking the category name.

Only such facets will be displayed that improve the selectivity of the search, i.e. facet filters that would return the same number of results as the currently displayed search query result set, will not be displayed. Only facets that return at least one document will be shown.

While displaying a facet filtered search, facet categories corresponding to active filters will disappear from the list of available facets. Multiple facet filters can be applied by clicking another facet link while displaying an already filtered search.

If we want to support selection of multiple facets from one category then we could place check-boxes besides facets rather than implementing them as links. In this case we need a “Search Again” button below the facet list, so that all selected facet filters can be applied. For the sake of interface simplicity we do not recommend enabling selection of multiple facets from one category. Users can enable and delete facets from the same category to achieve similar results. Advanced users can use properly filtered queries directly from the search field.

### Specification of a common search interface

To achieve our goal to maintain both, the existing and the new search interfaces, as much in sync as possible, we have to create a layer of abstraction that allows us to manipulate certain elements of the search UI while maintaining a common structure for both implementations.

The following paragraphs will outline common interface elements for search query definition and result set display. This will allow for maximum consistency of the user experience across search implementations. As a side effect we reduce code duplication and maintenance cost.

The specification has to define the areas of:

* search query definition \(search filters\) for simple and advanced search
* presentation of search filters, facets and alternative spelling suggestions on the search results page
* the search results list \(article data, highlighting, similarity search, enabling instant results\)

To specify a search query, the user has to be able to influence the following parameters:

* query terms per field \(search filters\)
* desired result set ordering criteria and ordering direction
* paging parameters
* possibly a document for a similarity search

To achieve these goals we propose several changes to the current user interface.

#### Combine search query definition and result display in one interface

We propose to remove the distinction between the advanced search page and the result set page. This is necessary to enable instant search and to integrate advanced search and faceting. It will also remove the distinction between simple and advanced search and makes search refinement easier and more consistent.

#### Overall page layout

We propose the following order of search interface elements:

* the main search box
* directly below the main search box an alternative spelling suggestion, preceded by the words "did you mean..." \(if active and if one was returned by the search engine\)
* below that the list of currently active advanced filters
* then a toggle button "advanced search options" to display additional search categories
* empty advanced search fields \(hidden by default\)
* the content of the pre-results hook \(if any\), this includes the drop-down selectors for ordering criteria and ordering direction.
* the result list if a search was already executed, produced dynamically in case of instant search whenever filters change
* paging parameters
* search instructions

This interface remains the same, completely independent of the way in which the search query was specified \(simple or advanced search, faceting, similarity search, initial or refined search query, query proposed by the spelling correction module, etc.\).

#### Advanced search

We propose to hide advanced search fields by default and let the user access them as "extras on demand" with a toggle button. For better accessibility, advanced search fields will be visible by default in case JavaScript is disabled. The main search box \(simple search\) will be visible all time.

#### Search form fields

To enable auto-suggest and reduce code duplication we'll create a separate template for search form fields that produces either an auto-suggest enabled field or a normal field, depending on whether auto-suggest is active or not. The template takes the necessary input parameters to be able to produce both, the active filters and empty advanced search fields.

#### Active filters

Currently active advanced search filters will not be displayed on the results page which can be quite confusing. We therefore propose to display all currently active search filters.

Active search filters originate from several sources: advanced search, simple search, faceted search and similarity search. They should be presented in a common visual format independent of their source:

* The filter on "all fields" will always be displayed in the main search box on the results page.
* Advanced search terms \(journal, authors, title, abstract, full text, supplementary files, date, discipline, keywords/subject, type, coverage and index terms\) will be displayed in their respective form fields. Non-empty form fields will be visible by default. A delete button \("Delete this filter"\) for each form field will make it easy to remove a filter.
* In case of an "index terms" search we display the search terms in a specific search field that comprises all of discipline, keywords/subject, type and coverage fields. This is necessary to achieve the required "OR" disjunction for the SQL-based search.
* In case of a similarity search, we show the terms that have actually been used. These will be displayed as usual per-field filters.
* In case of a faceted search, facet filters will be translated into advanced filters and displayed as such.

To achieve uniform treatment of facet filters and advanced filters we have to either treat both as filter queries \(i.e. no influence on ranking, better caching\) or as part of the main query \(influence on ranking\). We agreed that performance bottlenecks are improbable in our case due to the usually quite limited number of documents in an index. Simplicity of the UI therefore seems more important. We also believe that our data is mostly high-cardinality and therefore caching will not play an important role anyway. We therefore decided that low-cardinality search fields \(journal, publication date, installation id\) will be consistently implemented as filter queries \(no influence on ranking\) while all other fields will be included in the main query when filtered \(and will therefore influence ranking\) no matter whether they were filtered through faceting or advanced search input.

#### Result list

The result list will no longer be produced from a list of OJS objects but from an indexed array containing only the visible data.

* When searching across multiple installations, we can no longer retrieve data from our database. We'll get content directly from the search server.
* Some of the new display elements, e.g. highlighting and "more like this", are independent of OJS objects.

Whether or not a certain element will be displayed in the result set depends simply on its presence in the indexed array. This is an easy way to keep application logic in the controller and simplify the view template.

<hr />

## Administration and Configuration Interface

All solr, Lucene and servlet container \(e.g. jetty\) related configurations in OJS will appear on a plug-in settings page as is the case for other generic OJS plug-ins.

### Installation- vs. Journal-Level Configuration

Most of the before-mentioned search features could potentially be dis-/enabled and configured on journal level, e.g. highlighting, faceting, additional ordering criteria, “more-like-this”, etc. Other configuration options make more sense on an installation level, e.g. the configuration of the network endpoint of the solr server \(see “Configuring the Deployment Scenario” below\). The problem with journal specific configuration is that OJS has an installation-wide search option on it's central home page. This means that each of the journal-level options would have to be repeated on installation-level, too. This is comparable to OJS language options which exist for both, the installation and specific journals. While increasing configuration flexibility, providing journal-level configuration has a few drawbacks:

1. It is considerably more implementation effort to have both, installation- and journal-level configuration.
2. It will confuse some users to find the same configuration options in two different places. This has at least been a problem for internationalization options in the past.
3. End users using the search function will find an inconsistent user interface with some options enabled for one journal and disabled for other journals of the same installation. This may be quite confusing.

With our project goal of simplicity in mind it therefore seems preferable to provide all or at least most search options on system level only as long as there is not a strong case for journal-specific configuration. This also implies a recommendation for the authorization model for search options: Most search options would be system-level and therefore be made by the OJS installation's administrators \(admin role\). Providers often do not give away the administrator credentials to journals they host. So this would be equivalent to reserving search configuration to providers, too. There is one notable exception to this principle: As we've seen before, faceting is best being implemented as a journal-level block plug-in so that it can easily be adapted to the journal-specific design and page layout. As this means that faceting has to be implemented as a separate plug-in anyway it doesn't seem to be a strong disadvantage to have it implemented on journal level. This also means that placement of faceting within the journal design, once faceting has been enabled system-wide by the administrator, would be the responsibility of journal managers.

### Configuring the Deployment Scenario

We support two main deployment options \(see “Deployment Options” below\):

1. a fully preconfigured local jetty/solr server \(embedded deployment\) and
2. a central solr server running in an arbitrary servlet container somewhere on the network \(network deployment\).

The former is the default configuration. The embedded jetty server runs local to the OJS installation and listens on the loopback IP address \(127.0.0.1\) to protect it from exposure to other servers. To support the second deployment option we'll need a configuration option consisting of the host and port of the solr server. We recommend this to be an OJS administrator-level \(installation-wide\) option so that we have a unique and unambiguous solr endpoint to send article meta-data to. We can optionally provide an additional configuration parameter for the solr search handler to be used. This is “/solr/search” in the embedded deployment but advanced users may want to deploy additional preconfigured search handlers. This will enable them to work with installation-specific search parameters \(e.g. ranking-related or for a sub-set of journals\) without having to customize any OJS code. For the sake of simplicity we do not provide any means to directly set solr parameters from within OJS. Less advanced users should be able to use solr from a very simple interface while advanced users still may customize search to a very large extent by changing parameters directly in solr configuration files. Keeping solr configuration within solr's configuration files also helps keeping solr secure: Search endpoints can be constrained through mandatory configuration parameters which would not be possible when implementing client side configuration. Such configuration would have to be communicated over the network thereby being open to manipulation from the outside. The solr plug-in's home page will display a warning message, whenever the current configuration does not point to a running solr server. In this case, the plug-in will point to the README file distributed in it's home directory. This file will contain all necessary installation and configuration information to get up-and-running with OJS solr search.

### Starting/Stopping solr

We provide a shell script to start/stop the embedded solr server. This script could be started/stopped from OJS if \(and only if\) it should be run under the same user as PHP. This user depends on the local web server configuration. In most cases it will be either the web server's user or – in more advanced installations – a dedicated PHP user. There may be other difficulties in starting/stopping solr directly from within OJS, see “Starting/Stopping Solr” in the “Embedded Deployment” chapter below. If all preconditions for tool execution are met then we can place a Start/Stop button onto the solr plugin main page. This allows administrators to start/stop solr from within OJS which will further simplify work with the embedded scenario.

### Configuring Search Features

If we follow the recommendation to keep all search configuration on installation level then the following features could be dis-/enabled system-wide through simple check-boxes on the search plug-in's settings page:

* highlighting
* auto-suggestions
* alternative spelling proposals
* alternative order criteria
* instant search
* more-like-this links
* faceting
* custom document ranking

Rather than providing many feature-specific configuration parameters it seems more appropriate to provide a well thought-out default configuration for all of these features to keep the user interface as simple as possible. It has to be kept in mind that advanced users will always be able to tune features directly in the solr configuration. Therefore it is recommended to only provide OJS configuration for what cannot be configured directly in solr and choose good defaults otherwise.

It may even be defined that search features like auto-suggestions, alternative spelling proposals or highlighting that occupy little screen real estate and do not have a strong performance impact could be implemented out-of-the-box without the possibility of disabling them. The difference in implementation \(configurable or not\) seems to be negligible. So it is essentially up to the project owner to take this decision based on a trade-off between flexibility and simplicity of the user interface.

There are two notable exceptions to the recommendation to keep search feature configuration limited to simple on/off switches:

1. The configuration of the faceting block would be done through the usual interface in step 5 of the journal setup and the normal OJS design customization process.
2. If the inclusion of additional ranking data \(e.g. citation index, usage statistics, etc.\) should be possible, then we'll need an interface where such ranking information can be uploaded or integrated from external sources. One possibility is the “Custom Document Ranking Factor Configuration” described below.

### Custom Document Ranking Factor Configuration

If a custom document ranking factor \(e.g. citation index data, usage metrics, etc.\) should be supported this can easily be done as a generic input field on the article editing page. When custom document ranking is enabled in the plug-in then either such a field will appear there. Alternatively an import plug-in could be realized that allows import of document ranking data from different file formats \(CSV, XML, etc.\) or even pulling ranking data from an external source via HTTP.

We can also implement a ranking boost factor common to all articles in one section. This would allow editors to make sure that e.g. refereed articles will rank higher than book reviews. Possible ranking factors could be "never show", "lower", "normal", "higher". Selecting "never show" would exclude all articles in this section from being ranked at all. The other factors could divide the score by two, leave it unchanged and multiply it by two, respectively.

A value between zero and one means that articles will rank lower than default. A value above one will increase articles' mean ranking position. See the “Ranking” chapter below for internal implementation details and more examples of potential alternative ranking methods.

### Index Administration

Usually no special index administration should be necessary to maintain the solr index up-to-date. All index maintenance due to article additions, updates or deletions should be handled automatically. There are situations, though, in which it may be necessary to re-index some articles, e.g. when the solr index got lost, out-of-sync or corrupted.

#### Partial or full re-indexing

The existing OJS “re-indexing” button will trigger a re-indexing operation in solr if the solr plug-in is switched on. An additional drop-down field can be implemented to select a single journal for re-indexing.

Additionally we recommend exposing a CLI interface for index rebuild so that rebuilding indexes across several OJS instances can be easily automated if required.

#### Index optimization

Index optimization is most likely not relevant to the embedded scenario. Lucene does a good job in automatically joining index segments thereby keeping a good balance between index re-organization load and long term query/update performance.

To keep the OJS interface simple and easy to use, we recommend not to support index optimization from within OJS. Providers that work with large multi-installation indexes can use the default solr interface to optimize their index if required. Index optimization can also be scripted if a provider wishes to automate this process.

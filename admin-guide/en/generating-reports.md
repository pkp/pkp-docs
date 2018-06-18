# Types of Reports

OJS’ reports can be broadly grouped into “usage” reports that contain usage metrics indicative of visitor readership, and “content” reports that provide data on the respective item \(eg. subscriber info\). Some of these reports also contain legacy information, provided that your OJS install was created at some point before OJS 2.4.3. OJS 3 has dropped support for legacy reports.

To generate reports in OJS 3.x, log in as Journal Manager and go to Tools &gt; Statistics.

To generate reports in OJS 2.x, log in as Journal Manager and go to User Home &gt; Stats & Reports

The following table is a quick cheat sheet and comparison tool for each report; more detailed descriptions of each report follow.

### Comparison Table of All OJS Usage Reports

| Name | Description | Contents | Legacy | OJS 2 | OJS 3 |
| --- | --- | --- | --- | --- | --- |
| Timed Views | Provides article and galley views by date span. Can be used to retrieve legacy or current data. | Usage | Y/N | Y | N |
| View | Provides overall usage counts for abstract/landing page and galley downloads, per article. | Usage | Y | Y | N |
| Usage Statistics | Provides granular daily usage metrics for all article, article file, issue and homepage views/downloads. Will include visitor country data, if that is being logged. | Usage | N | Y | Y |
| Custom Report Generator | Customizable version of the Usage Statistics report, where various facets can be selected and specific date spans can be set. | Usage | N | Y | Y |
| COUNTER | Provides COUNTER reports for all journals on the OJS application. Provides monthly and year to date aggregate counts for abstract and galley views. | Usage | N | Y | Y |



### **Comparison Table of All OJS Content Reports**

| Articles | Provides general information on all articles in the system, incl. Title, abstract, authors, editor decision, and status. | Content | N | Y | Y |
| --- | --- | --- |
| Subscriptions | Provides information on any individual and institutional subscriptions. | Content | N | Y | Y |
| Review | Provides review information on all articles in the system, incl. reviewer names, reviews, and recommendation. | Content | N | Y | Y |

###  **Timed Views Report**

**Availability: OJS 2 only**

**Format: CSV**

**Description:** This report provides overall usage metrics for articles and galley usage. A date span must be specified. It has a legacy and non-legacy mode available. It is the only report that operates in this way.

**Use for**: downloading legacy or non-legacy timed view data.

**Do Not Use for**: downloading data in OJS 3.0+, as it no longer exists. Instead, use the Custom Report Generator.

**Special Notes:**

* Due to the way OJS processes metrics, the report will almost certainly not include data from today’s date, so attempting to report on today’s date only will probably return an empty report.
* This report can optionally provide legacy data for pre-OJS-2.4.3 installs. If you are looking for timed view data from before an OJS 2.4.3 upgrade, select the “include legacy data” option.

**Example Data \(edited for clarity\):**

In the sample below, which was generated for the date span March 29 2017 - March 30 2017 \(ie. 1 day\), we can see that the article “Amusing Ourselves to Death” was quite highly viewed, with 2 abstract views and 11 total galley views \(3 PDF and and 8 HTML\). The “Comobility” article only had its abstract viewed once.  
****

| **ID** | **Article Title** | **Authors** | **Issue** | **Date Published** | **Abstract** | **Total Galley** | **PDF** | **HTML** |
| --- | --- | --- |
| **2**508 | "Amusing Ourselves to Death?" Social Media, Political Satire, and the 2011 Election | Ian Reilly | Vol 36, No 3 \(2011\): Canadian Fascinations | 2011-09-13 22:11 | 2 | 11 | 3 | 8 |
| 2512 | Comobility: How Proximity and Distance Travel Together in Locative Media | Jen Southern | Vol 37, No 1 \(2012\): Media Arts Revisited \(MARs\) | 2012-04-13 9:38 | 1 |  **** |  **** |  **** |



### **View Report**

**Availability:** OJS 2 only

**Format:** CSV

**Description:** This report provides per-article abstract views and galley views/downloads. It is a pre-2.4.3 legacy report; use it only to retrieve basic usage metrics from journals that are or have been using OJS from before version 2.4.3.

**Use For:** legacy view data only.

**Do Not Use for:** current usage metrics, unless you are still on OJS &lt; 2.4.3.

**Special Notes:**

* This is a legacy report, and will not include new usage metrics if your OJS install has been upgraded to version 2.4.3+.
* These usage metrics are not filtered for multi-clicks or bot/crawler activity, and thus may seem inflated in comparison to more recent statistics.
* This report is no longer available in OJS 3.

**Example Data \(slightly edited for clarity\):**

In the sample below we can see that article 95, “The Making of the Canadian Media”, has had 443 abstract views and 1476 total galley views. The PDF and Total Galley views are the same, as there were no HTML views. With article 1125, “Digital Networks”, the abstract was viewed 1821 times, and total galley views are 8478, which is the sum of the HTML and PDF views.  
****

| **ID** | **Article Title** | **Issue** | **Date Published** | **Abstract** | **Total Galleys** | **HTML** | **PDF** |
| --- | --- | --- |
| 95 | The Making of the Canadian Media | Vol 6, No 1 \(1979\) | 1979-01-03 | 443 | 1476 |   | 1476 |
| 1125 | Digital Networks | Vol 24, No 4 \(1999\) | 1999-04-01 | 1821 | 8478 | 2093 | 6385 |

### **Usage Statistics Report**

**Availability:** OJS 2 and 3

**Format:** CSV

**Description:** This report provides granular data on monthly views for the journal homepage; issue TOCs; article abstract/landing pages; and file views. It provides country information \(if configured\). Each row provides a total monthly view count for a particular object \(journal home page, article abstract page, article galley, or issue table of contents\). It further facets this by country if country support has been enabled and properly configured.

It attempts to report on the journal’s entire usage history, but is artificially constrained to 5000 rows max. Older or more heavily trafficked journals should not use this report, and should instead use the Custom Report Generator.

**Use for:** generating a multifaceted overview content usage from month to month. It lists monthly view counts for all articles, article file downloads, issue TOC views, and journal homepage views for the specified timespan. Additional manual manipulation of the resulting report must be done to achieve aggregate results.

**Do Not Use for:** attempting to get a quick usage snapshot; or for legacy usage; or for journals that have a very large metrics dataset \(due to long history, high readership, or depth of metrics granularity\). Ust the Custom Report Generator instead.

**Special Notes:**

* This report attempts to capture the entire usage history for: the journal home page; all article abstracts; all article galleys; and all issue table of contents.
* To reduce the potential for exceeding time limits for downloads, this report only provides 5000 records. If you have a lot of reportable data, this report will most likely not report it all. If this is the case, the Custom Report Generator plugin should be used instead, using smaller date ranges.

**Example Data \(slightly edited for clarity\):**  


| **ID** | **Type** | **Title** | **Issue** | **Journal** | **Country** | **Month** | **Count** |
| --- | --- | --- | --- |
| 1 | Journal | Canadian Journal of Communication | CJC | CA | 201502 | 1678 |  |
| 112 | Article | Toronto Star Fires Reporter Claire Hoy, Sues Him and TV Stations on Libel Charge | Vol 1, No 3 \(1974\) | CJC | CA | 201502 | 3 |
| 112 | Article | Toronto Star Fires Reporter Claire Hoy, Sues Him and TV Stations on Libel Charge | Vol 1, No 3 \(1974\) | CJC | US | 201502 | 1 |



From the above example, we can see that in February 2015 the main CJC journal homepage was viewed 1678 times, which the article “Toronto Star Fires Reporter …” was viewed 3 times from Canada, and once from the United States.

### **Custom Report Generator**

**Availability:** OJS 2 and 3

**Format:** CSV

**Description:** This report provides granular data on daily views for the journal, using the full metrics dataset. You are able to aggregate results by:

* Country
* Region
* City
* Month
* Day

**Metrics are tracked against specific item types \(AKA “objects”\):**

* File downloads
* Abstract views
* Issue Table of Contents views
* Journal Homepage views

You are also able to limit results to specific date spans. This is the most flexible report option available in OJS, and can provide a very detailed amount of data. For more information, see Appendix C, OJS Report Generator: Examples and Tips.

**Use for:** creating very specific bespoke reports for new data

**Do Not Use for:** legacy data

**Special Notes:**

* This is a very flexible, but also very complex tool, and needs to be properly configured in order to provide useful results.
* Depending on the amount of data in your system, the facets you choose to retrieve, and the date span you choose, the system may fail to completely generate a report without timing out. If you encounter this, try reducing the requested date span.
* This report is also limited to 5000 rows, so if you are hitting a 5000-row limit you will want to use the date selection tool, or other filtering options, such as which item type to report on, to return smaller datasets which can then be compiled together manually as necessary.
* If you generate a custom report, the report will also provide you with a Report URL that you can save to use to repeat the identical report process.
* If you create a report that reports on “yesterday”, or “current month”, the resulting Report URL will always use “yesterday” or the “current month” relative to the day you run it. So if you originally created a report to report on “yesterday” a year ago, and then ran it today, it will report on yesterday. However: if you specify a specific date range, say April 1 - April 15 2018, the resulting Report URL will always report metrics for that specific range.

**Example Data \(slightly edited for clarity\):**

The following example will provide us with article abstract and galley view counts, broken down into daily, monthly, and country columns, for the current month. In order to do this we set the following parameters:

* Default Report Templates: left as-is;
* Select Report Range: left as-is;
* Columns: left as-is on the current month;
* Filters: for Object Type, selected Article and Galley in order to retrieve all article \(abstract\) and galley \(galley file\) views;
* Order By: left as-is.

In the resulting data below, we can see that the article abstract “Toronto Star Fires Reporter” was downloaded once on March 4 2018, while the article “Blowing up the Brand” was downloaded four times from Germany on March 22nd 2018, and twice from the US on March 4th 2018. \(Note the difference between an “Article” type, which refers to the abstract view; and the “Galley” type, which refers to the galley file view or download.\)

| **Type** | **Article** | **Issue** | **Country** | **Day** | **Month** | **Count** |
| --- | --- | --- | --- |
| Article | Toronto Star Fires Reporter Claire Hoy, Sues Him and TV Stations on Libel Charge | Vol 1, No 3 \(1974\) | US | 20180304 | 201803 | 1 |
| Galley | Blowing Up the Brand: Critical Perspectives on Promotional Culture | Digital Life | DE | 20180322 | 201803 | 4 |
| Galley | Blowing Up the Brand: Critical Perspectives on Promotional Culture | Digital Life | US | 20180304 | 201803 | 2 |

  
  



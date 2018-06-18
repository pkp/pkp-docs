# Introduction to the Statistics Framework

“What counts as a view” can seem like a straightforward enough question when considering article use metrics, but there are any number of ways to provide - or complicate - the answer. Answering this question depends on which counting mechanism is being used \(eg. Google Analytics vs. log file hits vs. filtered metrics\); on whether attempting to review historical data spans different methodologies; and whether these methodologies have been configured correctly or not.

This handbook mainly serves to explain, in some detail, how to configure, use, and troubleshoot PKP’s Usage Statistics Framework. It also contains some information on other statistics-gathering methods that are supported by OJS.

### OJS and Stats: Some History

OJS has recorded article usage since the beginning of the launch of OJS 2. The methodology used to count metrics has undergone one significant change between then and now. That change is key to understanding how to review and manage historical statistical data.

#### Metrics the Old Way: OJS 2.0 -&gt; 2.4.3:

Versions of OJS prior to OJS 2.4.3 count views in a very rudimentary manner: they record page views and file downloads for article landing pages and galley files only, and do not filter out bot views/downloads, multiple clicks, and so on. These views are recorded in a simple database table and represented in OJS 2.4.2 and below via a “View” report. Metrics are only available for abstract/landing pages and galley downloads, and only track one facet: whether the item was viewed or downloaded. These counts are considered accurate, if misrepresentative of actual readership, as bot views, crawler indexing, and potential author or visitor abuse \(eg. multi-clicking\) are not filtered out.

#### Metrics the New Way: OJS 2.4.3+ and 3.0+

As of version 2.4.3, Open Journal Systems uses a new structure for collecting statistics and generating reports. These metrics count abstract and galley views, date viewed, and regional information like country and city \(if properly configured\). Beyond article metrics, issue and homepage views are also included. Finally, these metrics are filtered according to COUNTER Project processing rules, so that multi-clicks and bot views are filtered by default.

#### Understanding what you have: Key Takeaways

The following describes the data to which users of various iterations of OJS have access. The OJS version can be determined by a journal staff member by visiting About &gt; About this Publication System \(OJS 2\).

* 2.4.2 or older:
  * Metrics are based on the old metrics method. Only simple article view counts are recorded for each abstract or galley view. These are not filtered by any of the COUNTER Project filter rules.  
  * These are available from a View Report under Journal Management &gt; Stats and Reports.
  * You may also have access to a rudimentary Timed Views Report. This report, if available in a pre-2.4.2 or older install, should be considered buggy and unpredictable. It should not be used.  
  * Upgrading is advised so that better metrics can be gathered going forward. \(Note that upgrading will not provide you with better metrics from before the upgrade date, at least by default. See the FAQ section for more information on reprocessing old metrics.\)
* 2.4.3 or newer:
  * Metrics are based on the new metrics method described above.
  * If this OJS instance has been at some point upgraded from pre-OJS-2.4.3, you will also have access to a legacy View Report \(for data collected when you were using earlier versions\).
  * All reports are available from Journal Management &gt; Stats and Reports.
  * NOTES FOR UPGRADED JOURNALS:
    * The legacy View Report is for archival purposes only. It provides a record of usage prior to the adoption of 2.4.3. It does not - record new views after the adoption of 2.4.3.
    * The new reports \(the Timed Views report; the Custom Report Generator; etc.\) that use the new metrics method will only include metrics from the date of upgrade onwards.
    * In order to achieve a complete understanding of the view counts for your content, you will have to consider both legacy and new reports.
  * IMPORTANT BUG NOTES:
    * There was a bug in OJS 2.4.5 that resulted in some metrics counts being doubled. See the FAQ and Frequently Encountered Problems sections for more information.
    * There was a bug in OJS 2.4.8.0 that resulted in some file views not being properly recorded. See the FAQ and Frequently Encountered Problems sections for more information.
    * If your OJS instance is currently on either version, we strongly recommend upgrading \(and, optionally, reprocessing your statistics - see Appendix B: Processing Log Files\).
* 3.0 or newer:
  * You will have metrics based on the new metrics method defined above.
  * All metrics will be available from the User Dashboard, via Tools &gt; Statistics.
  * NOTES FOR UPGRADED JOURNALS:
    * If your use of OJS 3 is an upgrade of an OJS instance that had legacy View Report data \(that is: your install began prior to 2.4.2\), the legacy View Report data will no longer be available for download. You should download and store this data before upgrading.


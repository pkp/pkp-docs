# Statistics

This chapter of the Administrator’s Guide provides a general overview of statistics in Open Journal Systems (OJS), and by extension in Open Monograph Press (OMP) and Open Preprint Systems (OPS), as they pertain to System Administrators. If you are looking for a specific description of the various types of reports available and how to generate custom reports, please read the [section on Statistics in the Learning OJS guide](https://docs.pkp.sfu.ca/learning-ojs/en/statistics).

The statistics features of OJS, OMP and OPS allow you to view different numbers that indicate the activity, access, and downloads of various aspects of your site, including article and abstract views, editorial activity, and user counts separate by role. This guide provides information on the statistics framework used, various statistics-related configurations, log files, and legacy information for OJS 2 statistics and the OJS 2 statistics methodology.

The development of this chapter has been funded by the Government of Canada via a grant from Canadian Heritage and by the Canadian Association of Learned Journals / Association canadienne des revues savantes. Public Knowledge Project provided additional in-kind assistance toward the development of this project.


![](https://lh5.googleusercontent.com/roq7_6Ck6BNqkpPKetR8zxiRaRljhCR5Z240OzY6l7ZC61st_8AT8VNAYfMY7S8mZceMF0sJjrtu-h0E3FhYQ9PiwCKvjzJzNAPR6fCEmjMMEv7JaF8oaiuYmjNj68bgbPGnCM2w)


## Introduction to the Statistics Framework

“What counts as a view” can seem like a straightforward enough question when considering article use metrics, but there are any number of ways to provide - or complicate - the answer. Answering this question depends on which counting mechanism is being used \(e.g., Google Analytics vs. log file hits vs. filtered metrics\), whether attempting to review historical data spans different methodologies, and whether these methodologies have been configured correctly or not.

This handbook mainly serves to explain, in some detail, how to configure, use, and troubleshoot PKP’s Usage Statistics Framework. It also contains some information on other statistics-gathering methods that are supported by OJS.


## Configure the Statistics Framework

In most cases, the Statistics Framework should “just work,” in particular with fresh installs. Just the same, there are a number of configuration options available to you, and they should be reviewed after installation or upgrade. You also need to put in place some sort of mechanism to run scheduled tasks so that usage stats are processed regularly.

**Note for Journal Managers and Editors:** Most of the following steps would be considered expert level and should only be undertaken by Site Administrators and systems administrators. If you have questions about the more advanced issues presented here, consult with your service provider. The main exception to this is the Statistics Display option described in the next section. If you want to publicly display article usage statistics on article abstract pages, you can enable this option.

There are three configuration steps that you will have to consider: configuring the usage statistics plugin, configuring scheduled tasks, and configuring regional data tracking, if you want to track regional data. \(OJS can track country, region, and city data.\)

This section is only relevant to those using OJS 2.4.3+ and OJS 3.0+. Older versions of OJS do not have this framework and need no configuration.


### Configure the Usage Statistics Plugin

OJS 2.4.3+ and 3+ include a generic Usage Statistics Plugin that is responsible for how these statistics are logged and recorded in the system. The plugin’s default configurations are reasonable and work for most use cases, though you will want to review them after you install or upgrade OJS.  To enable the collection of usage data, make sure that this plugin is enabled.

The plugin settings can be found in OJS 2 by going to User Home &gt; Journal Manager &gt; System Plugins &gt; Generic Plugins &gt; Usage Statistics Plugin &gt; Settings.

The plugin settings can be found in OJS 3 by going to Dashboard &gt; Settings &gt; Website &gt; Plugins &gt; Generic Plugins &gt; Usage Statistics Plugin &gt; Settings.

We won’t go into detail for every single configuration option for the plugin, but we do suggest the following as a reasonable setup:

* If it is not already enabled, check the box to the right of the plugin name.
* Click the blue arrow next to the plugin and then click **Settings**.
* Enable “Create Log Files” if it isn’t enabled already.
* Leave the “Parse Log File Regex” option alone unless you know what you are doing.
* Leave the “Compress Archives” option disabled unless server space is a consideration \(see the Troubleshooting section below\).
* Leave the “Data Privacy Option disabled unless you can follow the instructions provided.
* Enable the “City” and “Region” options and follow the section on Configuring Regional Data Tracking below.
* If available in your OJS install, consider enabling the Statistics Display Options if you want basic abstract and galley views to be available on article landing pages. See the above section Display Usage Statistics for more information.

### Configure Scheduled Tasks

Once the Usage Statistics plugin has been enabled, you need to ensure that statistics are logged and processed as part of OJS’ “scheduled tasks." There are two ways to do this:

#### 1. Enable the OJS Acron plugin

The plugin can be found in OJS 2 by going to User Home &gt; Journal Manager &gt; System Plugins &gt; Generic Plugins &gt; Acron Plugin.

The plugin can be found in OJS 3 by going to Dashboard &gt; Settings &gt; Website &gt; Plugins &gt; Generic Plugins &gt; Acron Plugin.

Once enabled, this plugin should result in the processing of log files \(along with other scheduled tasks, such as review and subscription reminders\).

#### 2. Configure a server-side cron job

This is a more advanced option requiring command-line access to the server and should only be configured by an experienced systems administrator. You will need to create a cron job that will trigger the following script in your OJS system directory:

```text
tools/runScheduledTasks.php
```

This script expects an accompanying parameter in the form of a pointer to an XML file describing the scheduled task. This file will differ depending on whether you are using OJS log files, external log files \(eg. Apache log files\), or OJS log files with an automated staging process. Most journals will be using the simple “OJS log file” option \(option 1 below\). The full commands are as follows and will have to be added to the server cron job, ideally so that they run daily.

**Commands to be run**

| **Process**                                  | **Command**                                                                                   |
| -------------------------------------------- | --------------------------------------------------------------------------------------------- |
| OJS log files                                | php tools/runScheduledTasks.php plugins/generic/usageStats/scheduledTasks.xml                 |
| OJS log files with automated staging process | php tools/runScheduledTasks.php plugins/generic/usageStats/scheduledTasksAutoStage.xml        |
| External log files                           | php tools/runScheduledTasks.php plugins/generic/usageStats/scheduledTasksExternalLogFiles.xml |

After you configure either the Acron plugin or a cron job, your statistics should start processing. They only process at set times: once every 24 hours if using the Acron plugin and at whatever frequency set in the cron job, if that is being used. Wait for that amount of time, and then check to see if stats are now available. If they aren’t, proceed to the Troubleshooting section.

### Configure Regional Data Tracking

The Usage Statistics plugin can also track regional data, including visitor country, region, and city information. This is optional. When deciding whether to collect this information, consider that storing geographical data can take up a lot of space and can also increase processing time when generating reports. If you are running into space issues or are running into timeouts when attempting to generate reports, you may have to either increase disc or memory resources or disable geographic logging. If you don’t enable and configure geographic tracking immediately and decide to enable it at a later date, you will have to reprocess your old log files in order for this data to be available in older usage statistics.

In order to track this information:

1. Register for a GeoIP account obtain the required .dat file by following the instructions on the [GeoIP website](https://dev.maxmind.com/geoip/geoip-direct-downloads/).
2. The Usage Statistics Plugin must have the Region and City options enabled as described above.
3. The following server-side configuration must also be in place. This step requires command-line access to the server, and country and region information will not work unless this has been done.
   1. Open a shell prompt on the server.
   2. Go into the OJS installation base directory.
   3. Execute the following commands using the URL obtained from GeoIP for the wget command:

```text
$ wget 'https://download.maxmind.com/app/geoip_download?edition_id=GeoIP2-City-CSV&license_key=YOUR_LICENSE_KEY&suffix=zip'
$ gunzip GeoLiteCity.dat.gz
$ mv GeoLiteCity.dat plugins/generic/usageStats
```

<hr />

## Processing Log Files

### Basic \(default\)

OJS, by default, automatically starts logging the usage events into its own access log files. It also automatically process those files on a daily basis. So, for example, if you installed OJS today at 2:00 pm, the processing of the usage events for today would start tomorrow at 2:00 pm. If you don’t change any setting, this will proceed without any input.

### Advanced

If you really want to control your stats processing, you can go to the Plugins management page in the Generic Plugins category and search for the Acron plugin. If disabled, automatic processing will stop. Read the following steps to understand how to manually trigger the processing.

OJS needs to process the files to be able to retrieve statistics data from them. This process can be done using the File Loader task tool, which comes with the Usage Statistics plugin.

#### File loader

The file loader task implements a process to reliably handle all file processing. It works with 4 folders: stage, processing, archive, and reject. Every time the file loader is run, it will search for files inside the stage folder. If there are any, it will move one file to the processing folder and start working on it. If anything goes wrong, it will send an email to the system administrator with valuable information about what went wrong and will move the file to the reject folder. If the processing went well, then it will move the file to the archive folder. It will continue this process until there are no more files inside the stage folder.

#### Processes

The file loader is a scheduled task tool, which can be periodically invoked using [cron](https://help.ubuntu.com/community/CronHowto) or another system task management tool. The command to run this task depends on which process are you willing to use:

**File loader task processes:**

| **\#** | **Process**                                  | **Command**                                                                                   |
| -------- | -------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 1        | OJS log files                                | php tools/runScheduledTasks.php plugins/generic/usageStats/scheduledTasks.xml                 |
| 2        | OJS log files with automated staging process | php tools/runScheduledTasks.php plugins/generic/usageStats/scheduledTasksAutoStage.xml        |
| 3        | External log files                           | php tools/runScheduledTasks.php plugins/generic/usageStats/scheduledTasksExternalLogFiles.xml |

This should be executed from the OJS installation base directory.

Process 1 and 3 require files to be moved inside the stage folder \(regardless of whether it’s an apache log file or an OJS log file\). Process 2 already automatically moves OJS log files into stage folder, so the command only needs to be executed.

Everything else is handled by the file loader task. If this task isn't scheduled for automatic execution using cron or a similar mechanism, it will have to be run manually.

Note that for any process you choose, you can move files into the stage folder anytime, even while the scheduled task is running. You can also move any number of files inside the stage directory. What determines the period of time that you will be moving files into the stage directory is mainly your necessity for updated statistics.

The only thing that is **not recommended** is to move a log file that is still being used by the system \(OJS or apache\) to log access. OJS already controls that for process 2, but for 1 and 3 you have to be careful. It is not recommended because you can waste processing time when you reprocess the same file. You can guarantee that you will not do that by paying attention to the apache log files rotation \(moving only the ones that were already rotated\) or, if you use OJS log files, not moving the file that has its filename with the current day.

If you really need updated statistics from the same day, you can still copy the files \(instead of moving\) so the system can continue logging more access into the same file. However, you will be able to process what has already been logged. The system can handle with files reprocessing \(see next topic\), as long as the filename is unchanged the final copied version of the file contains all access logging.

#### Usage examples

Let’s imagine that we have the following scenarios, all three with a cron job calling the file loader task tool on a daily basis:

1. Journal Manager using apache log files that rotate each week; the log files are named using the day in which the file rotation occurs \(e.g.: 20130929-access.log\); JM uses file loader task process 3.
2. Journal Manager using OJS log files that rotate each day, having in their filenames the day that they were being used to log access; JM uses file loader task process 1.
3. Same last scenario, but JM uses file loader task process 2.

In scenario 1, if JM can’t configure the apache log files rotation to a smaller period of time, they can copy the 20130929-access.log file to the usageStats/stage directory every time they want new statistics to be processed. The system will, each time, delete all data that were processed for that file and reprocess everything again. That is why this process is not as efficient as an smaller period of log file rotation. At day 20131006 the log rotation will occur and JM can finally move or copy the 20130929-access.log file to the stage directory so the stats logged between the last time the file was staged and the log rotation can also be processed.

In scenario 2, JM can move one file per day, always moving the file from the previous day. On Monday they can move two files at the same time \(from Saturday and Sunday\). They will have a small time between access and available statistics \(one day only, for most of the week\) and will avoid reprocessing same access log entries.

In scenario 3, JM does not have to move the files. Each time the file loader task is executed, the system will automatically grab the log files that were not processed yet avoiding the current day one, will stage them, and will start processing each one.

In scenarios 1 and 2, if for some reason JM can’t move files for a whole week, in the next opportunity they can move all of them at once. The scheduled task will process one by one then until the stage directory is empty again.

### Reprocessing log files

If you need to reprocess any log file \(if a new robot list or geolocation database is introduced or you fixed problems inside rejected files\) you can move them back to the stage process. Even if they were inside “rejected” or “archived” directories. They will be processed and any existing data from these logs will be replaced by reprocessed data.

The important thing is that after a file is successfully processed and moved to the archive folder, its filename is preserved. The filename is used to keep track of statistics data and the file that it was retrieved from. For the same reason, it’s important that all log files have unique filenames. You don’t have to worry about this if you are using OJS log files. But if you are using apache access log files, ensure that you are using something unique such as dates in the filenames.

<hr />

## Frequently Asked Questions

These are the most frequently asked questions and answers concerning OJS and statistics. This isn’t an exhaustive list. If you are running into further questions for which you don’t have answers, notify your hosting service provider or take a look at the PKP Community Forum &lt;[https://forum.pkp.sfu.ca](https://forum.pkp.sfu.ca)&gt; to see if anyone else has run into the same thing.

### What’s the best possible thing I can do to ensure accurate usage reporting?

First, upgrade to the latest stable version of OJS 2 or 3. Optionally, also consider reprocessing your logs \(see the previous section **Processing Log Files**\).

Second, figure out what statistics you want and use the same method to get them each time. If you are using the Custom Report Generator, make sure you save the URL it provides to you so you can re-run that particular report.

### Do you have suggestions for which reports to use**?

It all depends on what kind of data you need. For legacy data \(i.e., data from pre-OJS 2.4.3\), the Views report gives a great overall snapshot of article usage and it’s the least complicated metric to understand.

For more recent data, we’d really recommend the Custom Report Generator. It’s quite complex, but it can provide a very wide range of data and uses the Statistics Framework to its fullest. Just make sure that you use it consistently! We have included a great set of tips and tricks, written by our colleague Andrea Kosavic at York University Library, at the end of this document that focuses specifically on the Custom Report Generator.

### I have recently upgraded from an old version of OJS, and I would like to use the improved Statistics Framework for visits from before the upgrade. Can I do this?

Yes, but only if you have web server logs from before the time that you upgraded. If you have these web server logs \(e.g., Apache access\_log files\) from before the upgrade, you can process these \(See Processing Log Files above\). If you don’t have these old logs, you are unfortunately out of luck.

If your log files are OJS2 log files you want to reprocess in an OJS3 installation, it will require some development work to rebuild the log files and append the file id to all of the metric URLs - there is no built in tool for this work in OJS. Finally, it's also important to mention that if you reprocess old log files, and the URL of your journal has changed between then and now, the URLs in the log file will not match the "base URL" for your OJS installation and those metrics will not count.  If you want to reprocess log files, have a look at the older log file and make sure that the URLs still match your journal.  This includes the protocol (http or https).  It must match **exactly** or the metric will not be counted.

Also, it’s worth noting that you can still retrieve the old, basic usage metrics using the legacy reports \(in OJS 2 only - not OJS 3\). These aren’t as comprehensive as the new metrics, and they have bot visits and multi-clicks included as well, but they are still a good representation of general usage.

### I’ve seen some OJS journals that display nice-looking article usage metrics on article landing pages. How do I configure that?

This option is only available for OJS 3.x using the Usage Statistics Plugin.  For instructions on how to enable and configure the Usage Statistics Plugin, see the previous section in this document, **Configure the Usage Statistics Plugin**.

### How can I track usage by institution?

This is not currently possible with OJS but will be available in the future.

### If I replace a galley file for the article, will the download count reset to 0?

OJS collects statistics based on the internal IDs of issues, articles, and galleys.

If you replace a PDF file for a galley, the galley ID will not change. This means download statistics for the galley will continue to accumulate across the two versions of the file.

If you remove a galley from an article and later add a new galley for the article, the new galley will have a new ID. The cumulative statistics for article views will be unchanged but the usage statistics for the galley file will start again at 0. Historic statistics for the old galley will remain in the metrics, unless you rebuild the access logs into new metrics. New statistics will be collected for the new galley as access happens over time.

The specific impact will also vary by report, as the reports differ as to whether they are giving information for issues, articles, galleys, or a combination of these items.

<hr />

## Frequently Encountered Statistics Problems

These are the most frequently encountered problems when trying to generate usage reports, with some suggested solutions.

### I’ve upgraded OJS from OJS &lt; 2.4.3 to a newer version and now my usage stats seem to have gone down. They haven’t disappeared entirely, but they seem to trend lower. What’s going on?

The Statistics Framework now filters views as per the COUNTER Project code of conduct. Specifically:

1. If someone reloads a page or downloads a file multiple times within 30 seconds, OJS only registers 1 view.
2. OJS filters out known bot and crawler views.

This will result in lower overall usage metrics. The drop shouldn’t be significant, though it can be noticeable.

The COUNTER Project is always adding new bots to their specification, and OJS tracks this specification on each release.

### I’ve generated a report, and it doesn’t contain any data besides column titles.

Chances are, there is a problem with your general statistics configuration. You should review this as per the Configuration section below.

### When I download the Timed Views report, it appears that my Total Galley Views are actually twice as much as they should be. For example, if I have 2 PDF downloads and no other galleys, the Total Galley Views has the value 4.

That is a known bug in OJS 2.4.5. The solution is to upgrade, which will fix the problem immediately. You shouldn’t need to reprocess statistics to fix this problem.

### Abstract view counts look OK, but some recent galley file downloads appear low or nonexistent.

A: If you are using OJS 2.4.8.0, this is a bug. To solve this, you will have to upgrade to the most recent version of OJS 2.4, or OJS 3, and reprocess your logs.

### The reports - in particular the Timed View report, the Usage Statistics Report, and the Custom Report Generator - have some data, but appear to stop at an older date or are otherwise incomplete. I know we have more recent view counts, but they aren’t appearing.

There are two likely causes for this:

**Cause 1:** At some point the statistics processing scheduled task was stopped. This can happen if your OJS instance has been migrated by a systems administrator from one server to another or if OJS has been upgraded but its configuration hasn’t been reviewed. You can confirm this in a few \(very technical\) ways:

1. Take a look at the usageStats folder in your files\_dir. If you see a large number of log files in `files/usageStats/usageEventLogs/` or `files/usageStats/stage`, the scheduled task isn’t running.
2. Take a look at the `metrics` table in the mysql database. If it’s empty or if metrics seem to have been recorded but stop at a particular date, the scheduled task isn’t running.

The solution to this problem is to review your configuration and reprocess statistics, as per the Configuration section below.

**Cause 2:** The report is hitting the report plugin’s 5,000-row limit. This should be obvious by looking at the .csv report: if it stops at or around row 5,000 \(usually around row 5,006 due to some extra rows at the top of the report\), then this is the issue. The solution here is to shrink the amount of data you are trying to extract, for example by limiting the date span, and downloading multiple reports. You can manually merge multiple reports together. **Note**: This issue only applies to OJS 3.1.1 or older. The 5,000 row limit was removed in OJS 3.1.2.

Q: I’m trying to download regional information using the Custom Report Generator, but I’m not seeing any of this in my reports.

A: Regional Data tracking hasn’t been properly or completely configured. See the Configuration section below.

### When I try to download a report, I get a blank page, a 500 error, or a PHP memory limit error \(e.g., “Memory limit exhausted …”\) instead of a report download.

This happens when the amount of data you are trying to download exceeds the server’s capacity to deliver it. This can be resolved either by shrinking the amount of data you are trying to extract in one go \(i.e., by downloading reports in multiple date spans\) or by increasing the problem resource \(e.g.. PHP’s memory\_limit or max\_execution\_time parameters\). The latter can only be undertaken by a systems administrator.

### I need some guidance on processing, re-processing, or troubleshooting log files.

See [Processing Log Files](#processing-log-files).

## Legacy Statistics & Statistics in OJS 2

If your journal still uses OJS 2 or was upgraded to OJS 3 from OJS 2, you will have access to legacy reports (primarily the Timed Views report), which is described in this section. This section also contains an explanation of changes to the statistics methodology in OJS, as well as some information specific to statistics in OJS 2.

### OJS Stats Methodology: Some History
OJS has recorded article usage since the beginning of the launch of OJS 2. The methodology used to count metrics has undergone one significant change between then and now. That change is key to understanding how to review and manage historical statistical data.

#### Metrics the Old Way: OJS 2.0 -> 2.4.3:
Versions of OJS prior to OJS 2.4.3 count views in a very rudimentary manner: they record page views and file downloads for article landing pages and galley files only and do not filter out bot views/downloads, multiple clicks, and so on. These views are recorded in a simple database table and represented in OJS 2.4.2 and below via a “View” report. Metrics are only available for abstract/landing pages and galley downloads and only track one facet: whether the item was viewed or downloaded. These counts are considered accurate though possibly misrepresentative of actual readership, as bot views, crawler indexing, and potential author or visitor abuse (eg. multi-clicking) are not filtered out.

#### Metrics the New Way: OJS 2.4.3+ and 3.0+
As of version 2.4.3, Open Journal Systems uses a new structure for collecting statistics and generating reports. These metrics count abstract and galley views, date viewed, and regional information like country and city (if properly configured). Beyond article metrics, issue and homepage views are also included. Finally, these metrics are filtered according to COUNTER Project processing rules so that multi-clicks and bot views are filtered by default.

#### Understanding what you have: Key Takeaways

The following describes the data to which users of various iterations of OJS have access. The OJS version can be determined by a journal staff member by visiting About &gt; About this Publication System \(OJS 2\).

- OJS 2.4.2 or older:
    - Metrics are based on the old metrics method. Only simple article view counts are recorded for each abstract or galley view. These are not filtered by any of the COUNTER Project filter rules.
    - These are available from a View Report under Journal Management &gt; Stats and Reports.
    - You may also have access to a rudimentary Timed Views Report. This report, if available in a pre- OJS 2.4.2 or older install, should be considered buggy and unpredictable. It should not be used.
    - Upgrading is advised so that better metrics can be gathered going forward. \(Note that upgrading will not provide you with better metrics from before the upgrade date, at least by default. See the FAQ section for more information on reprocessing old metrics.\)
- OJS 2.4.3 or newer:
    - Metrics are based on the new metrics method described above.
    - If this OJS instance has been at some point upgraded from pre-OJS 2.4.3, you will also have access to a legacy View Report \(for data collected when you were using earlier versions\).
    - All reports are available from Journal Management &gt; Stats and Reports.
    - NOTES FOR UPGRADED JOURNALS:
        - The legacy View Report is for archival purposes only. It provides a record of usage prior to the adoption of 2.4.3. It does not record new views after the adoption of OJS 2.4.3.
        - The new reports \(the Timed Views report, the Custom Report Generator, etc.\) that use the new metrics method will only include metrics from the date of upgrade onwards.
        - In order to achieve a complete understanding of the view counts for your content, you will have to consider both legacy and new reports.
    - IMPORTANT BUG NOTES:
        - There was a bug in OJS 2.4.5 that resulted in some metrics counts being doubled. See the FAQ and Frequently Encountered Problems sections for more information.
        - There was a bug in OJS 2.4.8.0 that resulted in some file views not being properly recorded. See the FAQ and Frequently Encountered Problems sections for more information.
        - If your OJS instance is currently on either version, we strongly recommend upgrading \(and, optionally, reprocessing your statistics - see Appendix B: Processing Log Files\).
- 3.0 or newer:
    - You will have metrics based on the new metrics method defined above.
    - All metrics will be available from the User Dashboard, via Tools &gt; Statistics.
    - NOTES FOR UPGRADED JOURNALS:
        - If your use of OJS 3 is an upgrade of an OJS instance that had legacy View Report data \(that is: your install began prior to OJS 2.4.2\), the legacy View Report data will no longer be available for download. You should download and store this data before upgrading.

### Legacy Report: Timed Views Report

**Availability: OJS 2 only**

**Format: CSV**

**Description:** This report provides overall usage metrics for articles and galley usage. A date span must be specified. It has a legacy and non-legacy mode available. It is the only report that operates in this way.

**Use for**: downloading legacy or non-legacy timed view data.

**Do Not Use for**: downloading data in OJS 3.0+, as it no longer exists. Instead, use the Custom Report Generator.

**Special Notes:**

* Due to the way OJS processes metrics, the report will almost certainly not include data from today’s date, so attempting to report on today’s date only will probably return an empty report.
* This report can optionally provide legacy data for pre-OJS 2.4.3 installs. If you are looking for timed view data from before an OJS 2.4.3 upgrade, select the “include legacy data” option.

**Example Data \(edited for clarity\):**

In the sample below, which was generated for the date span March 29 2017 - March 30 2017 \(i.e., 1 day\), we can see that the article “Amusing Ourselves to Death” was quite highly viewed, with 2 abstract views and 11 total galley views \(3 PDF and 8 HTML\). The “Comobility” article only had its abstract viewed once.
****

| **ID**   | **Article Title**                                                                   | **Authors**  | **Issue**                                                | **Date Published** | **Abstract** | **Total Galley** | **PDF** | **HTML** |
| -------- | ----------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------- | ------------------ | ------------ | ---------------- | ------- | -------- |
| **2**508 | "Amusing Ourselves to Death?" Social Media, Political Satire, and the 2011 Election | Ian Reilly   | Vol 36, No 3 \(2011\): Canadian Fascinations           | 2011-09-13 22:11   | 2            | 11               | 3       | 8        |
| 2512     | Comobility: How Proximity and Distance Travel Together in Locative Media            | Jen Southern | Vol 37, No 1 \(2012\): Media Arts Revisited \(MARs\) | 2012-04-13 9:38    | 1            | ****             | ****    | ****     |


<hr />

## Further Resources

Project COUNTER:  [https://www.projectcounter.org/](https://www.projectcounter.org/)

Using Cron:  [https://help.ubuntu.com/community/CronHowto](https://help.ubuntu.com/community/CronHowto)

PKP Community Forum \(for follow-up questions\):  [https://forum.pkp.sfu.ca](https://forum.pkp.sfu.ca)

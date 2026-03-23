---
title: Statistics - Admin Guide - PKP Developer Docs
description: How to collect, process, restore and export usage statistics in OJS, OMP or OPS.
book: admin-guide
version: 3.5
---

# Statistics

Each application provides statistics for the number of times a visitor views and downloads content on the website. As an administrator, you can configure what stats are collected, how the data is compiled into daily or monthly totals, and whether or not to make some statistics publicly available.

Requests to view and download files from the public website are recorded in a log file. This file is compiled into statistics on a daily basis. The application will try to filter out bots and double-clicks. Depending on the size and age of your site, the metrics tables in your database may consume a lot of disk space. You can reduce the size of these tables by configuring the application to only keep monthly data, and to record little or no geographic data.

Read the sections below to learn how to configure the statistics for your site, how to view and download stats, and how to recover lost data.

## Settings

> To ensure that statistics are collected correctly, make sure you have [configured your application](./deploy) to run scheduled tasks and jobs.
{:.notice}

As an administrator, you can restrict the type of statistics that will be collected. You may choose to do this to protect the privacy of visitors, comply with legal requirements in your jurisdiction, or reduce the disk space required for your database.

Follow the steps below to set the statistics settings for all journals, presses, or preprint servers on your site.

1. Login as an administrator.
2. Go to **Administration**.
3. Go to **Site Management** > **Site Settings**.
4. Go to **Site Setup** > **Statistics**.

A manager may configure some of these settings differently for each journal, press or preprint server they manage. In such cases, the site settings act as a "ceiling". For example, if the site has disabled geographic statistics, the manager will not be able to enable them for their journal, press or preprint server. If the site has enabled country-level statistics only, the manager will not be able to enable region and city statistics.

However, the manager can turn off statistics even if the site has enabled them. For example, if the site has enabled geographic statistics for country, region, and city, the manager will be able to turn geographic statistics off, or choose to collect only country and region data.

## Download

Statistics are collected for different kinds of data and can be accessed in several different formats. Some statistics can be viewed as tables and graphs in the application. Others can only be viewed by downloading a report in CSV, TSV, or JSON. The CSV and TSV formats can be opened in spreadsheet software, like Excel or LibreOffice Calc.

| Type                                      | Description                                                                            | Web | CSV/TSV | JSON |
|-------------------------------------------|----------------------------------------------------------------------------------------|-----|-----|------|
| [Publications](#publications)             | Views and downloads of articles, books and preprints, and their files.                 | ✔   | ✔   | ✔    |
| [Issues](#issues)                         | Views and downloads of issues and issue galley files (OJS).                            | ✔   | ✔   | ✔    |
| [Homepage](#homepage)                     | Views of the homepage of the journal, press or preprint server.                        | ✔   | ✔   | ✔    |
| [Geography](#geography)                   | Views by country, region and city                                                      | ✔   | ✔   | ✔    |
| [Editorial Activity](#editorial-activity) | Number of submissions accepted and rejected, the average time to a decision, and more. | ✔   | ✘   | ✔    |
| [Users](#users)                           | User profiles and roles.                                                               | ✘   | ✔   | ✘    |
| [COUNTER](#counter)                       | An industry-recognized format for distributing usage statistics.            		     | ✘   | ✔   | ✔    |
| [Reviews](#reviews)                       | Reviewer names, due dates, and comments for all review assignments                     | ✘   | ✔   | ✘    |
| [Submissions](#submissions)               | Titles and metadata for all submissions                                                | ✘   | ✔   | ✘    |
| [Subscriptions](#subscriptions)           | Data on subscriptions (OJS)                                                            | ✘   | ✔   | ✘    |


### Publications

Follow these steps to get the number of views and downloads of articles, books and preprints, as well as their files.

1. Login as an administrator or manager.
2. Click **Statistics** > **Articles** (or Books in OMP and Preprints in OPS).
3. Use the web interface to filter the statistics by date. In OJS you can filter by section and issue.
4. Click **Download Report** to download a report in CSV format.
5. Choose the type of report to download.

Publication statistics can also be accessed in JSON format through the [REST API](/dev/api/).

### Issues

> This is only available in OJS.
{:.notice}

Follow these steps to get the number of views and downloads of issues and issue galley files.

1. Login as an administrator or manager.
2. Click **Statistics** > **Issues**.
3. Use the web interface to filter the statistics by date.
4. Click **Download Report** to download a report in CSV format.
5. Choose the type of report to download.

Issue statistics can also be accessed in JSON format through the [REST API](/dev/api/).

### Homepage

Follow these steps to get the number of views of the homepage of the journal, press or preprint server.

1. Login as an administrator or manager.
2. Click **Statistics** > **Journals** (or Presses in OMP and Servers in OPS).
3. Use the web interface to filter the statistics by date.
4. Click **Download Report** to download a report in CSV format.
5. Choose the type of report to download.

Homepage statistics can also be accessed in JSON format through the [REST API](/dev/api/).

### Geography

> You must [enable geographic statistics](#settings) first.
{:.notice}

Follow these steps to download a CSV file with the number of views and downloads for each city, region, and country.

1. Login as an administrator or manager.
2. Click **Statistics** > **Articles** (or Books in OMP and Preprints in OPS).
3. Use the web interface to filter the statistics by date. In OJS you can filter by section and issue.
4. Click **Download Report**.
5. Click **Download Geographic**.

Geographic statistics can also be accessed in JSON format through the [REST API](/dev/api/).

### Editorial Activity

> Editorial statistics can change significantly depending on the selected date range. Read the recommendations below to avoid these pitfalls.
{:.warning}

Follow these steps to view stats about the editorial activity of a journal, press, or preprint server, such as the number of submissions accepted and rejected, the average time it takes to record a decision, and more.

1. Login as an administrator or manager.
2. Click **Statistics** > **Editorial Activity**.
3. Use the web interface to filter statistics by date. In OJS you can filter by section.

These stats are based on editorial activity recorded by the system. If your editors routinely work outside of the system, stats may not be correct. For example, if an editor asks for a review by email and does not record it in the system, that review will not be counted in the editorial statistics.

When selecting a date range, think carefully about the editorial activity you are interested in. For example, if you are looking at the last three months, the Acceptance Rate will be calculated only from submissions submitted in the last three months that have already received an accepted or declined decision. We recommend using a date range that accounts for the duration of your editorial review and ends at least 12 months ago.

Editorial activity can also be accessed in JSON format through the [REST API](/dev/api/).

### Users

Follow these steps to download a CSV report with the user profiles and their roles in each journal, press or preprint server.

1. Login as an administrator or manager.
2. Click **Statistics** > **Users**.
3. Click **Export**.
4. Select the user groups you want to export
5. Click **Export**.

There are other ways to [export user data](./data-import-and-export#users).

### COUNTER

[COUNTER](https://www.projectcounter.org/) sets standards for how usage statistics should be calculated and distributed. Statistics matching the [COUNTER 5](https://cop5.projectcounter.org/en/5.0.3/) protocol can be downloaded through the [REST API](/dev/api/) and as TSV by following these steps:

1. Login as an administrator or manager.
2. Click **Statistics** > **Counter R5**.
3. Choose the type of report to download.

Statistics matching the [COUNTER 4](https://www.projectcounter.org/code-of-practice-sections/archived-code-of-practice-release-4/) protocol (Journal Report 1 and Article Report 1) can be downloaded by following these steps.

1. Login as an administrator or manager.
2. Click **Statistics** > **Reports**.
3. Click **COUNTER Reports**.

### Reviews

Follow these steps to download a CSV report about review assignments that includes the reviewer names, due dates, comments, and more.

1. Login as an administrator or manager.
2. Click **Statistics** > **Reports**.
3. Click **Review Report**.

### Submissions

Follow these steps to download a CSV report about submissions that includes the titles, contributors, and metadata.

1. Login as an administrator or manager.
2. Click **Statistics** > **Reports**.
3. Click **Articles Report** (or Books Report in OMP and Preprints Report in OPS).

There are many other ways to [export submission data](./data-import-and-export).

### Subscriptions

> The subscriptions report is only available in OJS when subscriptions are enabled.
{:.notice}

Follow these steps to download a CSV report about individual and institutional subscriptions, including subscription details, dates, and contact information.

1. Login as an administrator or manager.
2. Click **Statistics** > **Reports**.
3. Click **Subscriptions Report**.

## Recover Lost Data

> If the system is not recording any statistics, the application may not be configured correctly. Read the [configuration advice](#settings).
{:.notice}

You may notice historical gaps in your statistics data. These can arise for several reasons. Often it is because the application was misconfigured, the server resources were limited, or an application error prevented the logs from being processed. This can leave historical gaps in statistics data if the problem goes unnoticed for a while. When this happens, it can be difficult to restore the data. But it may be possible.

To recover the data, you will need to have log files that cover that period. These may be the application's [stats logs](/dev/documentation/en/statistics#understanding-the-log-files) or the Apache access log files.

The sections below provide information to help you determine what log files are available and reprocess them to compile statistics.

### Prepare the Log Files

> You must [understand the log files](/dev/documentation/en/statistics#understanding-the-log-files) before continuing.
{:.notice}

Before processing the logs, they must be in the format recognized by the application. A log file will typically have hundreds or thousands of lines in JSON format, like the one below.

```json
{"time":"2026-02-27 11:41:14","ip":"87d8edf8ca58ab4d3e9421b03edcd9c5a2093a79c341964179b8e379faabd324","userAgent":"Mozilla\/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko\/20100101 Firefox\/110.0","canonicalUrl":"https:\/\/example.org\/publicknowledge\/index","assocType":256,"contextId":1,"submissionId":null,"representationId":null,"submissionFileId":null,"fileType":null,"country":null,"region":null,"city":null,"institutionIds":[],"version":"3.5.0.0","issueId":null,"issueGalleyId":null}
```

#### Using logs from older versions

If your log file looks like the one below, it is a log file from version 3.3 or earlier.

```
127.0.0.1 bot 1 "2023-03-01 11:52:47" http://localhost/index.php/publicknowledge/index 200 "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/110.0.5481.100 Safari/537.36"
```

To convert this log file to the correct format, move the log file into the `archive` directory and run the following command from the root directory of your application.

```
php lib/pkp/tools/convertUsageStatsLogFile.php <log>
```

After conversion, the old log file will be renamed `<filename>_old.log`. For example, if the file was `usage_events_20230202.log`, the old log file will be named `usage_events_20230202_old.log`.

#### Using Apache access logs

If you use the [Apache](https://en.wikipedia.org/wiki/Apache_HTTP_Server) web server, you may have access logs from the period covering the historical gaps in your stats data. Run the following command to generate logs in the correct format.

```
php lib/pkp/tools/convertApacheAccessLogFile.php <log>
```

A log file named `apache_usage_events_YYYYMMDD.log` will be created in the `archive` directory for each day with one or more log entries from that file. If several log files are created for the same day, you may need to manually combine them into one file.

The command must be run by a user who has permission to read the Apache log files on the server. If you face any problems using this script, you may need to open `lib/pkp/tools/convertApacheAccessLogFile.php` and set the following variables to match your server configuration: `EGREP_PATH`, `PARSEREGEX`, `PHP_DATETIME_FORMAT`, `PHP_DATE_FORMAT`.

### Reprocess Log Files

Once you have identified the log files you want to reprocess, move them into the `<files_dir>/usageStats/stage` directory. Then run the following command from the root directory of your application once for every month you want to reprocess.

```
php lib/pkp/tools/reprocessUsageStatsMonth.php YYYYMM
```

This command deletes the existing metrics for that month and recompiles them from the log files in `stage`. This means your current data for that month will be replaced, not added to.

For example, if you had log files for 2022-10-01 to 2022-11-30, you would run the command twice:

```
php lib/pkp/tools/reprocessUsageStatsMonth.php 202210
php lib/pkp/tools/reprocessUsageStatsMonth.php 202211
```

To have accurate monthly statistics, you must reprocess a whole month at a time. Make sure all log files for those months are in the `stage` directory before running the command — not just the ones covering the gap. For example, if you are missing statistics from 2022-10-15 to 2022-11-12, you would need to have log files for every day of both October and November in the `stage` directory to get accurate monthly stats for those months.

> **Note:** This requirement only applies if the site is configured to keep monthly statistics only. If daily statistics are kept, you can reprocess individual days without needing all log files for the month.
{:.notice}

### Things to know

Keep the following in mind when working with the log files.

- Never change the log file names. The system assumes they are called `usage_events_YYYYMMDD.log` or `apache_usage_events_YYYYMMDD.log`.
- If you run the application with `disable_path_info` set to `On` in `config.inc.php`, change the `PATH_INFO_DISABLED` variable to `true` in the log conversion scripts before running the commands.
- Any log files for the current month in the `stage` directory will be processed automatically. Do not move files in there unless you want them processed.
- The `base_url` configured in `config.inc.php` must match the URLs in the log files.

## Frequently Asked Questions

### I don't see any statistics

Statistics are compiled once a day by a scheduled task. No statistics will appear until the scheduled task has run on the day after a visit has been logged. Work through the following checklist to identify where the problem is.

First, visit a public page on your site and check whether a new entry appears in the current day's log file in `<files_dir>/usageStats/usageEventLogs`. If an entry appears, the logging is working and the problem is in the processing pipeline — continue from step 3. If no entry appears, the problem is in the logging itself — start from step 1.

**1. Is the log directory writable by the web server user?**

The application writes log entries to `<files_dir>/usageStats/usageEventLogs`. If this directory is not writable by the web server user, no log files will be created and no statistics can be compiled. Check the directory permissions on your server.

**2. Are log files being created?**

Check whether log files exist in `<files_dir>/usageStats/usageEventLogs`. Learn more about the [log files and their directories](/dev/documentation/en/statistics#understanding-the-log-files). If no files are being created, the directory permissions may be the problem (see above), or the application may not be configured correctly.

**3. Is the scheduled task running?**

The scheduled task moves log files from `usageEventLogs` to `dispatch`, after which the jobs process them and move them to `archive`. If you see log files in `dispatch` but not in `archive`, the scheduled task is running but the jobs are not processing — skip to step 4. If files are still in `usageEventLogs`, `stage`, or `processing` and nothing has moved, the scheduled task is not running or was interrupted mid-run. Check that you have [configured scheduled tasks and jobs](./deploy) correctly. You can also check the scheduled task log files at `<files_dir>/scheduledTaskLogs` to confirm whether the task has run and whether any errors were reported. Learn more in the [scheduled tasks documentation](./deploy-scheduled-tasks).

**4. Are jobs being processed?**

The scheduled task dispatches a queue of jobs to compile the statistics. If jobs are failing, statistics will not be compiled even if the scheduled task is running. Go to **Administration** > **Jobs** to check whether jobs are queued and processing without errors. Learn more about [configuring jobs](./deploy-jobs) and about the [usage statistics processing jobs](/dev/documentation/en/statistics#how-stats-are-compiled).

**5. Are you reprocessing log files from a different system?**

If you are reprocessing log files generated on a system with a different `base_url` — for example, copied from a production server to a test system — the URLs in the log entries will not match and processing may fail. See [Things to know](#things-to-know) under Recover Lost Data.

### I have enabled geographic statistics, but the geographic report doesn't include any data

The application uses the visitor's IP address to determine their location. In order for this to work, the application must have a copy of the database that maps IPs to their location. This file will be located in `<files_dir>/usageStats/IPGeoDB.mmdb`. If you have properly [configured](./deploy) the application to run scheduled tasks, this will be updated monthly.

### How do I display a usage statistics graph on the article landing page?

This is a theme option. If your theme supports it, you can enable it at **Settings** > **Website** > **Appearance** > **Theme**.

### If I replace a publication's file, will the download count reset to 0?

The application tracks download counts per uploaded file. If you replace a file within an existing galley, the file's internal record stays the same and the download counts are preserved. If you delete the galley and upload the file to a new galley, the old metrics are permanently deleted and the new galley starts with a download count of zero.

### I’ve generated a report, and it doesn’t contain any data besides column titles.

**1. Check the filters and verify in the web interface.**

An incorrect date range, section, or issue filter can be a cause of an empty report. Try adjusting the filters in the web interface first and see if data appears there.

**2. Check the database tables.**

If no statistics appear anywhere, inspect the `metrics_*` database tables to confirm whether any data has been compiled. Learn more about the [database tables](/dev/documentation/en/statistics#understanding-the-database-tables).

**3. If no statistics exist at all.**

See [I don’t see any statistics](#i-dont-see-any-statistics).

### When I try to download a report, I get a blank page, a 500 error, or a PHP memory limit error, such as "Memory limit exhausted".

This happens when the amount of data you are trying to download exceeds the server’s capacity to deliver it. This can be resolved by trying to download a smaller data set, for example reducing the date range, or by increasing the server's resource (for example, PHP's `memory_limit` or `max_execution_time`).

### I need to reprocess some log files.

See the section on [recovering lost data](#recover-lost-data).

### A log file has been moved to the reject directory. What do I do?

A log file is moved to the `reject` directory when the `ProcessUsageStatsLogFile` job fails to open it. Check **Administration** > **Jobs** for the failed job and its error message to find out why it was rejected. Once you have identified and fixed the issue, move the file from the `reject` directory back to `stage` to reprocess it.

> **Note:** If you cannot find a failed job in **Administration** > **Jobs**, the file may have been rejected by an older version of the application. In that case, check the scheduled task log files at `<files_dir>/scheduledTaskLogs` for information about why it was rejected.
{:.notice}

# Frequently Encountered Statistics Problems

These are the most frequently encountered problems when trying to generate usage reports, with some suggested solutions.

## **I’ve upgraded OJS from OJS &lt; 2.4.3 to a newer version and now my usage stats seem to have gone down. They haven’t disappeared entirely, but they seem to trend lower. What’s going on?**

The Statistics Framework now filters views as per the COUNTER Project code of conduct. Specifically:

1. If someone reloads a page or downloads a file multiple times within 30 seconds, OJS only registers 1 view.
2. OJS filters out known bot and crawler views.

This will result in lower overall usage metrics. The drop shouldn’t be significant, though it can be noticeable.

The COUNTER Project is always adding new bots to their specification, and OJS tracks this specification on each release.

## **I’ve generated a report, and it doesn’t contain any data besides column titles.**

Chances are, there is a problem with your general statistics configuration. You should review this as per the Configuration section below.

## **When I download the Timed Views report, it appears that my Total Galley Views are actually twice as much as they should be. For example, if I have 2 PDF downloads and no other galleys, the Total Galley Views has the value 4.**

That is a known bug in OJS 2.4.5. The solution is to upgrade, which will fix the problem immediately. You shouldn’t need to reprocess statistics to fix this problem.

## **Abstract view counts look OK, but some recent galley file downloads appear low, or nonexistent.**

A: If you are using OJS 2.4.8.0, this is a bug. To solve this, you will have to upgrade to the most recent version of OJS 2.4, or OJS 3, and reprocess your logs.

## **The reports - in particular the Timed View report, the Usage Statistics Report, and the Custom Report Generator - have some data, but appear to stop at an older date, or are otherwise incomplete. I know we have more recent view counts but they aren’t appearing.**

There are two likely causes for this:

**Cause 1:** At some point the statistics processing scheduled task was stopped. This can happen if your OJS instance has been migrated by a systems administrator from one server to another, or if OJS has been upgraded but its configuration hasn’t been reviewed. You can confirm this in a few \(very technical\) ways: 

1. Take a look at the usageStats folder in your files\_dir. If you see a large number of log files in `files/usageStats/usageEventLogs/` or `files/usageStats/stage`, the scheduled task isn’t running.
2. Take a look at the `metrics` table in the mysql database. If it’s empty, or if metrics seem to have been recorded but stop at a particular date, the scheduled task isn’t running. 

The solution to this problem is to review your configuration and reprocess statistics, as per the Configuration section below.

**Cause 2:** The report is hitting the report plugin’s 5000-row limit. This should be obvious by looking at the .csv report: if it stops at or around row 5000 \(usually around row 5006 due to some extra rows at the top of the report\), then this is the issue. The solution here is to shrink the amount of data you are trying to extract, for example by limiting the date span, and downloading multiple reports. You can manually merge multiple reports together. 

Q: I’m trying to download regional information using the Custom Report Generator, but I’m not seeing any of this in my reports.

A: Regional Data tracking hasn’t been properly or completely configured. See the Configuration section below.

## When I try to download a report, I get a blank page; a 500 error; or a PHP memory limit error \(eg. “Memory limit exhausted …”\) instead of a report download.

This happens when the amount of data you are trying to download exceeds the server’s capacity to deliver it. This can be resolved either by shrinking the amount of data you are trying to extract in one go \(ie. by downloading reports in multiple date spans\), or by increasing the problem resource \(eg. PHP’s memory\_limit or max\_execution\_time parameters\). The latter can only be undertaken by a systems administrator.

## I need some guidance on processing, re-processing, or troubleshooting log files.

See Appendix C: Processing Log Files.


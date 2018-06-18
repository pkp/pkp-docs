# Processing Log Files

## **Basic \(default\)**

OJS, by default, automatically starts logging the usage events into its own access log files. It also automatically process those files, on a daily basis. So, for example, if you installed OJS today at 2:00 pm, the processing of the usage events for today would start tomorrow at 2:00 pm. If you don’t change any setting, this will proceed without any input.

## Advanced

If you really want to control your stats processing, you can go to the Plugins management page, into Generic Plugins category and search for the Acron plugin. If disabled, automatic processing will stop. Read the following steps to understand how to manually trigger the processing.

OJS needs to process the files to be able to retrieve statistics data from them. This process can be done using the File Loader task tool which comes with the Usage Statistics plugin.

### File loader

The file loader task implements a process to reliably handle all file processing. It works with 4 folders: stage, processing, archive and reject. Everytime the file loader is run, it will search for files inside the stage folder. If there are any, it will move one file to the processing folder and it will start working on it. If anything goes wrong, it will send an email to the system administrator with valuable information about what went wrong and will move the file to the reject folder. If the processing went well, then it will move the file to the archive folder. It will continue this process until there are no more files inside the stage folder.

### Processes

The file loader is a scheduled task tool, which can be periodically invoked using [cron](https://help.ubuntu.com/community/CronHowto) or another system task management tool. The command to run this task depends on which process are you willing to use:

**File loader task processes:**

| **\#** | **Process** | **Command** |
| --- | --- | --- | --- |
| 1 | OJS log files | php tools/runScheduledTasks.php plugins/generic/usageStats/scheduledTasks.xml |
| 2 | OJS log files with automated staging process | php tools/runScheduledTasks.php plugins/generic/usageStats/scheduledTasksAutoStage.xml |
| 3 | External log files | php tools/runScheduledTasks.php plugins/generic/usageStats/scheduledTasksExternalLogFiles.xml |

This should be executed from the OJS installation base directory.

**NB.: For OJS 3.x, the scheduled task XML files have moved to the shared library, e.g. lib/pkp/plugins/generic/usageStats/scheduledTasks.xml**

Process 1 and 3 require files to be moved inside the stage folder \(regardless of whether it’s an apache log file or an OJS log file\). Process 2 already automatically moves OJS log files into stage folder, so the command only needs to be executed.

Everything else is handled by the file loader task. If this task isn't scheduled for automatic execution using cron or a similar mechanism, it will have to be run manually.

Note that for any process you choose, you can move files into the stage folder anytime, even while the scheduled task is running. You can also move any number of files inside the stage directory. What determines the period of time that you will be moving files into the stage directory is mainly your necessity for updated statistics.

The only thing that is **not recommended** is to move a log file that is still being used by the system \(OJS or apache\) to log access. OJS already controls that for process 2, but for 1 and 3 you have to be careful. It is not recommended because you can waste processing time when you reprocess the same file. You can guarantee that you will not do that paying attention to the apache log files rotation \(moving only the ones that were already rotated\) or, if you use OJS log files, not moving the file that has it’s filename with the current day.

If you really need updated statistics from the same day, you can still copy the files \(instead of moving\) so the system can continue logging more access into the same file. However, you will be able to process what has already been logged. The system can handle with files re-processing \(see next topic\), as long as the filename is unchanged the final copied version of the file contains all access logging.

### **Usage examples**

Let’s imagine that we have the following scenarios, all three with a cron job calling the file loader task tool on a daily basis:

1. Journal Manager using apache log files that rotate each week; the log files are named using the day in which the file rotation occurs \(e.g.: 20130929-access.log\); JM uses file loader task process 3.
2. Journal Manager using OJS log files that rotate each day, having in their filenames the day that they were being used to log access; JM uses file loader task process 1.
3. Same last scenario, but JM uses file loader task process 2.

In scenario 1, if JM can’t configure the apache log files rotation to a smaller period of time, he can copy the 20130929-access.log file to the usageStats/stage directory every time he wants new statistics to be processed. The system will, each time, delete all data that were processed for that file and reprocess everything again. That is why this process is not as efficient as an smaller period of log file rotation. At day 20131006 the log rotation will occur and JM can finally move or copy the 20130929-access.log file to the stage directory so the stats logged between the last time he staged the file and the log rotation can also be processed.

In scenario 2, JM can move one file per day, always moving the file from the previous day. On Monday he can move two files at the same time \(from Saturday and Sunday\). He will have a small time between access and available statistics \(one day only, for most of the week\) and will avoid reprocessing same access log entries.

In scenario 3, JM does not have to move the files. Each time the file loader task is executed, the system will automatically grab the log files that were not processed yet, avoiding the current day one, will stage them and will start processing each one.

In scenarios 1 and 2, if for some reason JM can’t move files for a whole week, in the next opportunity he can move all of them at once. The scheduled task will process one by one then, until the stage directory is empty again.

## Rep**rocessing log files**

If you need to reprocess any log file \(if a new robot list or geolocation database is introduced, or you fixed problems inside rejected files\) you can move them back to the stage process. Even if they were inside “rejected” or “archived” directories. They will be processed and any existing data from these logs will be replaced by reprocessed data.

The important thing is that after a file is successfully processed and moved to the archive folder, its filename is preserved. The filename is used to keep track of statistics data and the file that it was retrieved from. For the same reason, it’s important that all log files have unique filenames. You don’t have to worry about this if you are using OJS log files. But if you are using apache access log files, ensure that you are using something unique such as dates in the filenames.  
  
  



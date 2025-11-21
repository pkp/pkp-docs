---
title: Scheduled Tasks - Advanced Configuration - Admin Guide - PKP Developer Docs
description: Options to configure scheduled tasks with Open Journal Systems (OJS), Open Monograph Press (OPS) or Open Preprint Systems (OPS).
book: admin-guide
version: 3.5
---

Scheduled tasks are used to perform periodic tasks such as [processing statistics](./statistics), removing expired data, sending emails, or exporting data to third-party services (e.g. registering DOIs or exporting articles to DOAJ).

To see available scheduled tasks, run:

```
php lib/pkp/tools/scheduler.php list
```

To run a particular scheduled task:

```
php lib/pkp/tools/scheduler.php test
```

...then select the task from the list.

## Log Files

Scheduled task logs are located in files directory under `{$files_dir}/scheduledTaskLogs`.

## Configuration

Settings for scheduled tasks are located in the `[schedule]` section of `config.inc.php`.

```
; Whether or not to turn on the built-in scheduled task runner.
; When enabled, scheduled tasks will be processed at the end of each web
; request to the application.
; Use of the built-in scheduled task runner is strongly discouraged for high-volume
; sites. Use your operating system's task scheduler instead, and configure
; it to run the task scheduler every minute.
;
; Sample for the *nix crontab:
; * * * * * php lib/pkp/tools/scheduler.php run >> /dev/null 2>&1
;
; See: <link-to-documentation>
task_runner = On

; How often the built-in scheduled task runner should run at the
; end of web request life cycle (value defined in seconds).
; This configuration will only affect the built-in task runner, it doesn't apply
; to the system crontab configuration.
; The default value is 60 seconds (a value smaller than that might affect the
; application performance negatively).
task_runner_interval = 60

; When enabled, an email with the scheduled task result will only be sent when an error
; has occurred. Otherwise, all tasks will generate a notification.
scheduled_tasks_report_error_only = On
```

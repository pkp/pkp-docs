---
title: Scheduled Tasks - Advanced Configuration - Admin Guide - PKP Developer Docs
description: Options to configure scheduled tasks with Open Journal Systems (OJS), Open Monograph Press (OPS) or Open Preprint Systems (OPS).
book: admin-guide
version: 3.5
---

# Scheduled Tasks

Scheduled tasks are used to perform periodic tasks or [dispatch jobs](./deploy-jobs) on a schedule, such as [processing statistics](./statistics), removing expired data, sending emails, or exporting data to third-party services (e.g. registering DOIs or exporting articles to DOAJ).

To see available options, run:

```
php lib/pkp/tools/scheduler.php usage
```

To see all registered scheduled tasks, run:

```
php lib/pkp/tools/scheduler.php list
```

To run all pending scheduled tasks, run:

```
php lib/pkp/tools/scheduler.php run
```

To run a single specific scheduled task, which is particularly useful for development purposes, run:

```
php lib/pkp/tools/scheduler.php test
```

## Log Files

Scheduled task logs are located in files directory under `<files_dir>/scheduledTaskLogs`.

## Configuration

### Scheduled Task Runner

In 3.5 and later, the Acron plugin has been removed and a built-in task runner has been introduced.

To enable the built-in task runner, set the following in the `[schedule]` section in `config.inc.php`:

```
task_runner = On
```

To adjust the interval at which the built-in task runner runs, adjust the following setting in `config.inc.php`. A smaller value may negatively impact application performance.

```
task_runner_interval = 60
```

The built-in task runner may not be suitable for high-volume sites; in this case, we recommend using your operating system's task scheduler instead. The following is a sample crontab entry for *nix operating systems:

```
* * * * * php lib/pkp/tools/scheduler.php run >> /dev/null 2>&1
```

### Notifications

To receive an email notification only when a scheduled task fails, set the following in `config.inc.php`. Otherwise, all tasks will generate a notification.

```
scheduled_tasks_report_error_only = On
```

---

Next, learn about how to improve performance with the [job runner](./deploy-jobs).

---
title: Sandbox - Advanced Configuration - Admin Guide - PKP Developer Docs
description: Safely sandbox an install of OJS, OMP or OPS, to block email sending, data deposits, and other unwanted tasks.
book: admin-guide
version: 3.4
---

# Sandbox an Instance

> Trying to upgrade? Check out our step-by-step guide on [how to upgrade](/dev/upgrade-guide/en/).
{:.notice}

When testing or debugging a production instance, you may want to sandbox the application to prevent it from sending emails, depositing data with third-party services, or performing other unwanted tasks. This section will describe some tips to sandbox your install.

## Enabling Sandbox mode

Beginning with OJS, OMP, and OPS 3.4.0-4, there is a sandbox mode that can be enabled in `config.inc.php` in order to prevent interactions with external systems.

To enable the sandbox mode for an installation, edit `config.inc.php` and find the `sandbox` setting in the `[general]` section. Setting it to `On` will have following impacts:

 - The email `default` driver will be set to `log`. As a result all emails will be routed to the server's error log and no emails will be delivered.
 - Scheduled tasks that run at regular intervals to send out reminder emails, deposit data with third-party services, and perform other tasks will be disabled. This will also disable schedule task execution via `Acron` plugin.
 - Job execution will be disabled. However, jobs will continue to be dispatched to the queue as usual.
 - `Crossref` and `Datacite` deposits will be disabled.
 - The `ORCiD` plugin will not have any interaction with orcid service.
 - No payments will dispatched to or handled by Paypal (e.g. for subscription purchases).

> **Warning:** Enabling the sandbox mode will disable job processing via the job runner, cron and worker mechanisms. However, if any worker process is already running prior to enabling sandbox mode, it will require separate manual intervention to restart/quit worker gracefully. See the [Job Deployment Guide](/admin-guide/en/deploy-jobs) for more details.
{:.warning}

## Manual intervention for Sandboxing

As an alternative to the sandbox mode described above, it is also possible to configure individual features with their own sandboxing options. See below for instructions on configuring the sandboxing of individual features.

### Send emails to the log

All emails sent by the application can be routed to the server's error log. When this is done, no emails will be sent out.

Find and edit the following setting in the `[email]` section of `config.inc.php`.

```
default = log
```

### Disable scheduled tasks

Scheduled tasks are run at regular intervals to send out reminder emails, deposit data with third-party services, and perform other tasks. They may be triggered in a couple different ways, depending how you configured them.

If you have a **cron job** set up to run the following command, delete that cron job.

```
php tools/runScheduledTasks.php
```

If you have the **acron plugin** installed, remove it by running the following command in the root directory of the application.

```
rm -rf plugins/generic/acron
rm -rf lib/pkp/plugins/generic/acron
```

### Disable jobs

Stop the job runner in order to prevent pending jobs like data deposits from being run. Turn the built-in job runner off in `config.inc.php`.

```
job_runner = Off
```

Depending on how you configured your server to run jobs, you may need to take additional steps.

If you are using **workers** to [process jobs](./deploy-jobs#workers), kill those processes. You may need to disable [Supervisor](./deploy-jobs#workers) or any process monitor that will restart the workers.

If you are using a **cron job** to run the following command, delete that cron job.

```
php lib/pkp/tools/jobs.php run
```

Disabling jobs will stop some functionality from running. For example, the search index will not be rebuilt when submissions are published or unpublished. Jobs will pile up without being processed. Read how to [monitor jobs](./deploy-jobs#how-to-monitor-jobs).

### Anonymize user emails

> **Warning:** These queries will permanently alter your data. Make sure you have a backup!
{:.warning}

Run the following SQL query on the database to set all user account emails to a dummy account.

```sql
UPDATE users SET email=CONCAT(username,'@mailinator.com');
```

Run the following SQL query on the database to set all author account emails to a dummy account.

```sql
UPDATE authors SET email = 'test@mailinator.com';
```


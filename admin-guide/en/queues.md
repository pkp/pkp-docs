---
title: Queues - Administration Guide Documentation - OJS|OMP|OPS
---

# Queues

Queues are excellent tools to handle time-consuming processes, without degrading the user experience.

Currently we use an approach to [hook our queueing processes into each PHP engine process shutdown](../../dev/documentation/en/utilities-queues.md).

This chapter explains how to enable this option in your installation.

## How to use

PKP software applications provide a number of options for configuring queues to work in your environment. The following configuration options are available for queues in `config.inc.php`:

```
;;;;;;;;;;;;;;;;;;;
; Queues Settings ;
;;;;;;;;;;;;;;;;;;;

[queues]

; Default queue driver to be used
default_connection = "database"
; Default queue to be used if someone forgot to associate a queue during Queue::push();
default_queue = "queue"
; Flag to disable the jobs to run at php shutdown
disable_jobs_run_at_shutdown = Off
```

To disable queueing usage, you should change the `disable_jobs_run_at_shutdown` value to `On`.

For `default_connection` value you could choose one from the below list.

* `database`

More options will be available in the next releases.

The option `default_queue` will be used when none queue was choosed for you processing workers

## Checking queues

As an administrator, you have a few ways to check yours queues health.

### Web Interface

On your application domain, you could access a web interface to check how many jobs are queued in your system, acessing `index.php/index/admin/jobs`. Currently, this interface it's a read-only option, if you want to manipulate your queued jobs, you could use the [Command Line Interface](#cli).

### <a name="cli"></a>Command Line Interface

If you want, you could use the Command Line Interface to manipulate your queued jobs.

From your root installation, you could call it using `php lib/pkp/tools/jobs.php`.

We have the following parameters to be used:

* `list`
* `purge`
* `test`
* `total`
* `help`
* `usage`

#### Lists
List all queued jobs
#### Purge
Delete queued jobs. You have the possibility to purge all queued jobs with this parameter too.
#### Test
Create a test queued job on queue `queuedTestJob`
#### Total
List queued jobs quantity
#### Help
Displays the help message
#### Usage
Displays the usage message
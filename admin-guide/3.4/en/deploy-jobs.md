---
title: Jobs - Advanced Configuration - Admin Guide - PKP Developer Docs
description: Options to configure the job runner to improve performance with Open Journal Systems (OJS), Open Monograph Press (OPS) or Open Preprint Systems (OPS).
book: admin-guide
version: 3.4
---

# Job Runner

> These recommendations are for high-volume journal, press or preprint services. Low-volume services can use the built-in job runner with no configuration.
{:.notice}

Each application makes use of a jobs queue to handle long-running tasks. Jobs are used to send bulk email notifications, compile statistics, deposit DOIs, update the search index, and more.

On a high-volume site, these tasks may slow down the server while they are being completed. To solve this problem, server administrators can move these tasks to separate requests or even into separate threads on the server.

Most sites will get by without too many problems by using a cron job or the built-in job runner. However, the larger your site is, the more risk there is of jobs causing the site to suddenly slow down during peak periods of activity. In such circumstances, it will be more important to configure the job runner well.

## How to Run Jobs

Every server should be configured with _one_ of the following methods for running jobs: workers, cron, or the built-in job runner. Enabling two methods will not improve the site's performance.

### Workers

For large sites, we recommend using a worker to process jobs. The worker, when run as a daemon, will wait for jobs to be dispatched and then run them one-by-one in a separate process on the server.
System resources can be specifically allocated to the worker so that it will not cause spikes in resource usage that slow down the main site.

The following command can be used to initialize a worker.

```
php lib/pkp/tools/jobs.php work
```

This command supports most of the options supported by Laravel's [queue:work](https://laravel.com/docs/9.x/queues#running-the-queue-worker). Pass the `--help` flag to learn more.

```
php lib/pkp/tools/jobs.php work --help
```

In a production environment, you should use a process monitor like [Supervisor](http://supervisord.org/index.html) to make sure the process stays up and running. Supervisor can be installed on Linux with the following command.

```
sudo apt-get install supervisor
```

Create a config file for supervisor, usually located at `/etc/supervisor/conf.d`.

```
[program:ojs-queue-monitor]
process_name=%(program_name)s
command=<path-to-php>/php /<root>/lib/pkp/tools/jobs.php work
directory=<root>
autostart=true
autorestart=true
redirect_stderr=true
stdout_logfile=<log-file>
```

Replace the following variables in the configuration above with the correct paths in your system:

| Variable | Description |
| --- | --- |
| `<path-to-php>` | Absolute path on the server to the CLI PHP executable. This can be found on most Linux servers by running `which php`. |
| `<root>` | Absolute path to the root directory of the application (OJS, OMP, OPS). |
| `<log-file>` | Absolute path to a log file. If hosting in a cloud environment, you may want to [direct logs to stdout](https://stackoverflow.com/a/26897648/1723499). |

> Take a special note that workers are long running process that loads the application in memory. As a result, any changes when workers are running will not reflect instantly without restarting the worker.
{:.notice}

Restart Worker.

```
php lib/pkp/tools/jobs.php restart
```

The above command will quit the workers gracefully what is workers will get to complete the current job execution and then quit. Then the Supervisor will restart the workers.

Restart Supervisor.

```
sudo service supervisor restart
```

You may need to run the following command to apply the configuration changes.

```
supervisorctl reread
```

> **Warning:** We strongly recommend to restart the Worker rather than Supervisor to reflect and consider the new changes pushed to production. Restarting Supervisor suddenly will cause the workers to quit abruptly and if the workers are in the middle of processing a job, it will not get the chance to complete the job which may cause undesired.
{:.warning}

To configure Supervisor on other systems, or to learn more about monitoring processes, read the [Supervisor documentation](http://supervisord.org/index.html).

Once you have set up the worker, turn the default job runner off in `config.inc.php`:

```
job_runner = Off
```

### Cron

A [cron job](https://en.wikipedia.org/wiki/Cron) can be configured to process jobs at regular intervals, for example every 30 or 60 seconds.

A cron job configured to run the following command will process all jobs in the queue.

```
php lib/pkp/tools/jobs.php run
```

A cron job configured to run the following command will process only one job.

```php
php lib/pkp/tools/jobs.php run --once
```

Whether or not to process one or all jobs will depend on your environment. When **running all jobs at once**, a sudden batch of large, resource-intensive jobs could slow down your server. That's because the cron job will try to churn through everything all at once.

When **running one job at a time**, the cron job will be less likely to consume a lot of server resources all at once. However, there is a risk that jobs will back up over time. If a bulk email is sent to 5,000 users, it may create 100 jobs. Processing one job every 60 seconds, it would take 100 minutes to send the email.

Once you have set up a cron job, turn the default job runner off in `config.inc.php`:

```
job_runner = Off
```

We recommend using [workers](#workers) for large sites. Learn more about how to [monitor jobs](#how-to-monitor-jobs) to make sure they are not backing up.

### Built-in Job Runner

In some server environments, you may not have permission to configure workers or cron jobs. On these servers, the built-in job runner can be used to process jobs.

The built-in job runner works by running jobs off the back of user requests to the server. When no one visits your site, no jobs are run. As a result, there is a greater risk of jobs causing sudden spikes in resource usage, which will result in delays loading the site.

Turn the built-in job runner on in the `config.inc.php` file.

```
job_runner = On
```

To prevent the server's resources from being exhausted or hitting the server's execution timeouts, you can configure the built-in job runner with the following settings.

```
; The maximum number of jobs to run in a single request when using
; the built-in job runner.
job_runner_max_jobs = 30

; The maximum number of seconds the built-in job runner should spend
; running jobs in a single request.
;
; This should be less than the max_execution_time the server has
; configured for PHP.
;
; Lower this setting if jobs are failing due to timeouts.
job_runner_max_execution_time = 30

; The maximum consumerable memory that should be spent by the built-in
; job runner when running jobs.
;
; Set as a percentage, such as 80%:
;
; job_runner_max_memory = 80
;
; Or set as a fixed value in megabytes:
;
; job_runner_max_memory = 128M
;
; When setting a fixed value in megabytes, this should be less than the
; memory_limit the server has configured for PHP.
job_runner_max_memory = 80
```

We recommend staying within the default limits above, unless you know your server is capable of running with higher limits.

## How to Monitor Jobs

You can monitor pending and failed jobs through the CLI tool or the administration interface of the application.

Run the following command to view pending jobs in the terminal.

```
php lib/pkp/tools/jobs.php list
```

Or view them in the administration interface by going to Administration > Jobs.

Run the following command to view failed jobs in the terminal.

```
php lib/pkp/tools/jobs.php failed
```

Or view them in the administration interface by going to Administration > Failed Jobs. From the admin interface you can also retry failed jobs.

Add the following setting to `config.inc.php` to automatically delete failed jobs after a certain period.

```
; Remove failed jobs from the database after the following number of days.
; Remove this setting to leave failed jobs in the database.
delete_failed_jobs_after = 180
```

## Custom Drivers

Laravel [Queues](https://laravel.com/docs/9.x/queues) are used to dispatch and process jobs. By default, the application uses the `database` driver to store and process jobs.

[Custom drivers](https://laravel.com/docs/9.x/queues#driver-prerequisites) exist for handling jobs with Redis, Beanstalkd, and Amazon SQS. These drivers are not officially supported, but may be implemented with a little coding.

If you use a custom driver, please share your findings with [our community](https://forum.pkp.sfu.ca/).

## Troubleshooting

The best way to troubleshoot failed jobs is through Administration > Failed Jobs in the application. The failed jobs table will provide information on what jobs failed, when, and with what exceptions.

Jobs should never be run while the site is under maintenance, for example during an upgrade.

---

Learn more about handling [user accounts](./deploy-users).

---
book: dev-documentation
version: 3.5
title: Scheduled Tasks - Technical Documentation - OJS|OMP|OPS
---

# Scheduled Tasks

[Laravel's task scheduler](https://laravel.com/docs/12.x/scheduling) is used to run work on a recurring schedule, outside of any user request. Use a scheduled task to send reminder emails, process statistics, remove expired data, export data to third-party services or [dispatch jobs](./utilities-jobs).

As of 3.5, the Acron plugin and the XML file that tasks were registered in have been removed. Tasks are now PHP classes registered with the scheduler.

The Admin Guide describes how an installation [runs scheduled tasks](/admin-guide/en/deploy-scheduled-tasks) in production.

## Create a Task

Create a new class for each task. A task extends `ScheduledTask` and implements `executeActions()`.

```php
/**
 * @file classes/tasks/ExampleTask.php
 */
namespace APP\tasks;

use Exception;
use PKP\scheduledTask\ScheduledTask;
use PKP\scheduledTask\ScheduledTaskHelper;

class ExampleTask extends ScheduledTask
{
    /**
     * @copydoc ScheduledTask::getName()
     */
    public function getName(): string
    {
        return __('admin.scheduledTask.exampleTask');
    }

    /**
     * @copydoc ScheduledTask::executeActions()
     */
    protected function executeActions(): bool
    {
        try {
            // Do something...
        } catch (Exception $e) {
            $this->addExecutionLogEntry(
                $e->getMessage(),
                ScheduledTaskHelper::SCHEDULED_TASK_MESSAGE_TYPE_ERROR
            );

            return false;
        }

        return true;
    }
}
```

Tasks that are shared by all applications go in `classes/task/` in `pkp-lib` (`PKP\task`). Tasks for a single application go in `classes/tasks/` in that application (`APP\tasks`).

Return `true` when the work succeeded and `false` when it did not. The return value decides whether the run is reported as a failure in the [execution log](#execution-log) and the [notification email](#notifications).

`getName()` is a display name for the task. It is used in the subject line of the notification email, so return something an administrator will recognize.

Do not override `execute()`. That is the wrapper the scheduler calls: it records the start and stop times, calls `executeActions()`, and sends the notification email.

> A task can run with no request context at all, which is always the case on the command line. Do not assume there is a current context or a logged in user. Get the contexts the task needs with `Application::getContextDAO()->getAll(true)`, and note that generated URLs fall back to the `base_url` setting in `config.inc.php` when there is no host name to detect.
{:.warning}

## Register a Task

Tasks are registered with the scheduler in `registerSchedules()`. Register tasks that are shared by all applications in `PKP\scheduledTask\PKPScheduler`, and tasks for a single application in `APP\scheduler\Scheduler`, which extends it.

```php
/**
 * @file classes/scheduler/Scheduler.php
 */
namespace APP\scheduler;

use APP\tasks\ExampleTask;
use PKP\scheduledTask\PKPScheduler;

class Scheduler extends PKPScheduler
{
    /**
     * @copydoc \PKP\scheduledTask\PKPScheduler::registerSchedules
     */
    public function registerSchedules(): void
    {
        parent::registerSchedules();

        $this
            ->schedule
            ->call(fn () => (new ExampleTask())->execute())
            ->daily()
            ->name(ExampleTask::class)
            ->withoutOverlapping();
    }
}
```

`$this->schedule` is Laravel's `Schedule`, so everything after `call()` is Laravel's scheduling API.

> Name the event before calling `withoutOverlapping()`. The name is the key for the lock that keeps two copies of a task from running at the same time, and Laravel raises `A scheduled event name is required to prevent overlapping.` when the lock has no name to use. Naming the event after the task class also gives it a stable name to pass to the [CLI tool](#cli-tool).
{:.warning}

Plugins register their own tasks instead of modifying these classes. See [Scheduled Tasks](/dev/plugin-guide/en/scheduled-tasks) in the Plugin Guide.

### Frequency

How often a task runs is set with Laravel's frequency methods. A few of the common ones:

| Method | Frequency |
| --- | --- |
| `->everyMinute()` | Every minute. |
| `->hourly()` | Every hour, on the hour. |
| `->daily()` | Every day at midnight. |
| `->dailyAt('13:00')` | Every day at 1 PM. |
| `->weekly()` | Every week. |
| `->monthlyOn(10)` | On the 10th of each month. |

See Laravel's [frequency options](https://laravel.com/docs/12.x/scheduling#schedule-frequency-options) for the full list, and its [truth test constraints](https://laravel.com/docs/12.x/scheduling#truth-test-constraints), `when()` and `skip()`, to decide at run time whether a task should run at all.

Choose the longest interval that does the job. Every installation pays for the frequency that is chosen, and most tasks that feel hourly are fine daily.

### Overlapping Runs

[`withoutOverlapping()`](https://laravel.com/docs/12.x/scheduling#preventing-task-overlaps) stops a task from being started again while the last run is still going. It holds a lock in the cache store, which is why the event must have a name.

Laravel's [`onOneServer()`](https://laravel.com/docs/12.x/scheduling#running-tasks-on-one-server) is only useful when every server shares a cache store. The applications configure the `file` and `opcache` stores, both of which are local to the server that writes them, so it will not coordinate anything on its own.

## Execution Log

Each run writes its own log file to `<files_dir>/scheduledTaskLogs/`, named after the task class, the process id and the date. Use `addExecutionLogEntry()` to record what the task did, optionally with one of the message types below.

```php
$this->addExecutionLogEntry(
    'Deposited 12 articles',
    ScheduledTaskHelper::SCHEDULED_TASK_MESSAGE_TYPE_COMPLETED
);
```

| Message type | Use it for |
| --- | --- |
| `SCHEDULED_TASK_MESSAGE_TYPE_NOTICE` | Progress information. |
| `SCHEDULED_TASK_MESSAGE_TYPE_COMPLETED` | Work that finished successfully. |
| `SCHEDULED_TASK_MESSAGE_TYPE_WARNING` | Something was skipped, but the task can continue. |
| `SCHEDULED_TASK_MESSAGE_TYPE_ERROR` | Something failed. |

Log generously. The log file is the only record of what happened, and it is what an administrator receives a link to when a task fails.

## Notifications

When a task finishes, the site's primary contact receives an email with a link to download the execution log. The subject line is the task name from `getName()`, the process id, and whether the task completed or failed.

By default only failures are reported, so do not rely on a successful run producing an email. Administrators control this with [`scheduled_tasks_report_error_only`](/admin-guide/en/deploy-scheduled-tasks#notifications) in `config.inc.php`.

## Run Tasks

The Admin Guide describes how to [run scheduled tasks in production](/admin-guide/en/deploy-scheduled-tasks). For local development, one of the following methods may be preferred.

1. Set `task_runner` to `On` in the `[schedule]` section of the config file. Tasks that are due will be run at the end of a web request, at most once every `task_runner_interval` seconds.
2. Run the schedule [worker](#cli-tool), `php lib/pkp/tools/scheduler.php work`, from the command line. It runs due tasks every minute for as long as it is left running, so no cron job is needed.

The `run` and `work` commands, and the web based task runner, do nothing while the site is in maintenance mode or while `sandbox` is enabled in the config file.

## CLI Tool

Use the CLI tool to view and run tasks from the command line. Use the `usage` command to see what commands are available.

```
php lib/pkp/tools/scheduler.php usage
```

List every registered task with the frequency it is scheduled at.

```
php lib/pkp/tools/scheduler.php list
```

Run a single task immediately, without waiting for it to be due. This is the quickest way to test a task under development. With no arguments it offers a list of tasks to choose from.

```
php lib/pkp/tools/scheduler.php test
```

Pass the name the task was registered with to run it directly.

```
php lib/pkp/tools/scheduler.php test --name="APP\tasks\ExampleTask"
```

Run everything that is currently due, the way an installation's cron job does.

```
php lib/pkp/tools/scheduler.php run
```

Start the schedule worker. It stays in the foreground and runs due tasks every minute until it is stopped with `Ctrl+C`. Use it in a local development environment to run tasks on schedule without setting up a cron job.

```
php lib/pkp/tools/scheduler.php work
```

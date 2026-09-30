---
title: Scheduled Tasks - Plugin Guide for OJS, OMP and OPS
description: How to register and run a scheduled task from a plugin for OJS, OMP or OPS.
book: dev-plugin-guide
version: 3.5
---

# Scheduled Tasks

> Learn more about [scheduled tasks](/dev/documentation/en/utilities-scheduled-tasks) in our developer documentation. Site administrators decide how tasks are run on a given installation. See [Scheduled Tasks](/admin-guide/en/deploy-scheduled-tasks) in the Administrator's Guide.
{:.tip}

A plugin can add its own scheduled tasks to run work on a recurring basis outside of any user request: depositing metadata with a third-party service, sending reminder emails or removing data the plugin no longer needs.

This takes two steps: write the task, then register it with the scheduler.

## Write the task

[Write the task](/dev/documentation/en/utilities-scheduled-tasks#create-a-task) as you would any other task, in your plugin's directory. A task usually needs its plugin, to read settings or call its methods, so pass the plugin to the task when it is created.

```php
/**
 * @file plugins/generic/example/classes/tasks/ExampleTask.php
 */
namespace APP\plugins\generic\example\classes\tasks;

use APP\plugins\generic\example\ExamplePlugin;
use PKP\scheduledTask\ScheduledTask;

class ExampleTask extends ScheduledTask
{
    public function __construct(private ExamplePlugin $plugin, array $args = [])
    {
        parent::__construct($args);
    }

    /**
     * @copydoc ScheduledTask::getName()
     */
    public function getName(): string
    {
        return __('plugins.generic.example.task.name');
    }

    /**
     * @copydoc ScheduledTask::executeActions()
     */
    protected function executeActions(): bool
    {
        // Do the work here.

        return true;
    }
}
```

## Register the task

Implement `HasTaskScheduler` in your plugin class. The application calls `registerSchedules()` and passes the scheduler, which you use to add your tasks.

```php
namespace APP\plugins\generic\example;

use APP\plugins\generic\example\classes\tasks\ExampleTask;
use PKP\plugins\GenericPlugin;
use PKP\plugins\interfaces\HasTaskScheduler;
use PKP\scheduledTask\PKPScheduler;

class ExamplePlugin extends GenericPlugin implements HasTaskScheduler
{
    /**
     * @copydoc \PKP\plugins\interfaces\HasTaskScheduler::registerSchedules()
     */
    public function registerSchedules(PKPScheduler $scheduler): void
    {
        $scheduler
            ->addSchedule(new ExampleTask($this))
            ->daily()
            ->withoutOverlapping();
    }
}
```

A plugin never edits the application's own scheduler classes. `addSchedule()` takes your task and returns Laravel's `Event`, so everything after it is Laravel's scheduling API, including [how often the task runs](/dev/documentation/en/utilities-scheduled-tasks#frequency). Register as many tasks as you need; a task that has already been registered is not added twice.

> `addSchedule()` names the event after your task's class. That name is the key for the lock that `withoutOverlapping()` uses to keep two copies of a task from running at the same time, and it is the name the command-line tool lists and matches. Call `name()` before `withoutOverlapping()` if you want a name of your own.
{:.tip}

## Test the task

Once the task is registered, confirm the application can see it with the [command-line tool](/dev/documentation/en/utilities-scheduled-tasks#cli-tool).

```bash
php lib/pkp/tools/scheduler.php list
```

Your task appears under its class name and the frequency it was scheduled at. If it is missing, the plugin failed to load or the plugin class does not implement `HasTaskScheduler`.

Run it immediately, without waiting for it to be due, by passing that name.

```bash
php lib/pkp/tools/scheduler.php test --name="APP\plugins\generic\example\classes\tasks\ExampleTask"
```

## Examples

- The [PKP Preservation Network](https://github.com/pkp/pln) plugin registers its `Depositor` task to run daily.
- In OJS, the abstract `PubObjectsExportPlugin` registers the DOAJ deposit task, `DOAJInfoSender`, which checks each journal's settings before depositing anything.

---

When you're ready, learn how to [release your plugin](./release) to the public.

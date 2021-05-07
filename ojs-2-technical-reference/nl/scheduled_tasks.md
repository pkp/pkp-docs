# Scheduled Tasks

OJS 2.x is capable of performing regularly-scheduled automated tasks with the help of the operating system, which is responsible for launching the `tools/runScheduledTasks.php` script via a mechanism like UNIX's cron. Scheduled tasks must be enabled in the `config.inc.php` configuration file and the journal's settings.

Automated tasks are configured in `registry/scheduledTasks.xml` and information like the date of a task's last execution is stored in the scheduled_tasks database table.

The `ScheduledTask` model class and the associated `ScheduledTaskDAO` are responsible for managing these database entries. In addition, the scheduled tasks themselves are implemented in the `classes/tasks directory`. Currently, only the `ReviewReminder` task is implemented, which is responsible for reminding reviewers that they have an outstanding review to complete or indicate acceptance of.

These tasks, which extend the `ScheduledTask` model class and are launched by the `runScheduledTasks` tool, must implement the execute() method with the task to be performed.


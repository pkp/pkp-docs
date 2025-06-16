---
book: dev-documentation
version: 3.5
title: Jobs - Technical Documentation - OJS|OMP|OPS
---

# Jobs

Laravel [Queues](https://laravel.com/docs/9.x/queues) can be used to create, queue and process jobs. Use jobs to prevent long-running tasks from slowing down or freezing the application.

## Create a Job

Create a new class for each job.

```php
/**
 * @file jobs/email/ExampleJob.php
 */
namespace PKP\jobs\email;

use APP\submission\Submission;
use PKP\jobs\BaseJob;

class ExampleJob extends BaseJob
{
    protected Submission $submission;

    public function __construct(Submission $submission)
    {
        parent::__construct();

        $this->submission = $submission;
    }

    public function handle(): void
    {
        // Do something...
    }
}
```

## Dispatch a Job

When a job is dispatched, it will be added to the job queue.

```php
use PKP\jobs\email\ExampleJob;

dispatch(
    new ExampleJob($submission)
);
```

## Process Jobs

The Admin Guide describes how to [configure a job runner in production](/admin-guide/en/deploy#job-runner). For local development, one of the following methods may be preferred.

1. Set the `job_runner` to `On` in the config file. Jobs will be run at the end of each web request.
2. Run `php lib/pkp/tools/jobs.php run` from the command line to run all jobs.

## Debug Jobs

When a job fails, the message in the server's error log may not point to the failure. Use the CLI tool to view information about failed jobs.

```
php lib/pkp/tools/jobs.php failed
```

Failed jobs can also be found in the admin area of the application under Administration > Jobs > Failed Jobs.

When a job fails, it will call it's `failed()` method. If needed, this can be used to notify someone of the failure.

```php
/**
 * @file jobs/email/ExampleJob.php
 */
namespace PKP\jobs\email;

use PKP\jobs\BaseJob;

class ExampleJob extends BaseJob
{
    // ...

    public function failed(): void
    {
        // Do something when the job fails...
    }
}
```

## Queues

Laravel Queues allow jobs to be dispatched to different [queues](https://laravel.com/docs/9.x/queues#dispatching-to-a-particular-queue). PKP's applications only use a single queue (`default`). Jobs should always be dispatched to the default queue. Otherwise they will not be processed.

In other words, never use the `onQueue()` method to dispatch a job to a specific queue. An exception is made for the `test` queue, which is only used in our [integration tests](/dev/testing/en/continuous-integration).

## Drivers

Laravel Queues support the user of several [drivers](https://laravel.com/docs/9.x/queues#driver-prerequisites) to process jobs. PKP's applications are only configured to use one driver (`database`).

In other words, never use the `onConnection()` method to dispatch a job to a specific connection.

## CLI Tool

Use the CLI tool to view and run jobs from the command line. Use the `help` command to see what commands are available.

```
php lib/pkp/tools/jobs.php help
```

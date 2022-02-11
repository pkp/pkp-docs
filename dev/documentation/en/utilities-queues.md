---
title: Queues - Technical Documentation - OJS|OMP|OPS
---

# Queues

If you have a time-consuming process in the middle of a process, but the result of it is not necessary to allow users to finish the flow, you should take a look into queueing it.

The use of this methodology enables you to run your time-consuming processes in a asynchronous way.

# Enabling it

Our native methodology to run queued processes is based on the usage of [`register_shutdown_function`](https://www.php.net/manual/en/function.register-shutdown-function.php), to call one queued job at each PHP engine process shutdown.

To enable it you should set your configuration key `disable_jobs_run_at_shutdown` as `Off` at your config.inc.php.

# How to use it

Besides the shutdown method, we are using the [Laravel's Queue system](https://laravel.com/docs/7.x/queues) too. So, in order to queueing your processes, you should use the class `Illuminate\Support\Facades\Queue`.

Below are an example to create a queueable class and add it into the queue system. As mentioned early, they will be consumed during the PHP engine process shutdown.

```php
<?php

declare(strict_types=1);

namespace PKP\Jobs\Example;

use APP\core\{
    Application,
    Services
};

use PKP\config\Config;
use PKP\Domains\Jobs\Exceptions\JobException;
use PKP\Support\Jobs\BaseJob;

class ExampleJob extends BaseJob
{
    /**
     * Execute the job.
     *
     */
    public function handle(): void
    {
        // Perform your action
        $jobResult = ...;

        // In case you want to mark it as failed, you could use this failed method
        if (!$jobResult) {
            $this->failed(new JobException(JobException::INVALID_PAYLOAD));

            return;
        }
    }
}

```

You could dispatch your job into queue using this

```php
use PKP\Jobs\Example\ExampleJob;

dispatch(new ExampleJob());
```

# Retrying

Your job could be re-run a couple times (according to the [`Job::DEFAULT_MAX_ATTEMPTS`](https://github.com/pkp/pkp-lib/blob/main/Domains/Jobs/Job.php#L34) constant value), but remember, after each run, his property `attempts` will be increase.

# Failures

In case of a Job keeps failing multiple times (according to the [`Job::DEFAULT_MAX_ATTEMPTS`](https://github.com/pkp/pkp-lib/blob/main/Domains/Jobs/Job.php#L34) constant value), he will be moved to the `failed_jobs` table, with additional data about the failure.

You could retrieve them from database and debugging as needed.

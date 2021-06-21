---
title: Queues - Technical Documentation - OJS|OMP|OPS
---

# Queues

If you have a time-consuming sub-process in the middle of a process, but the result of it is not necessary to allow users to finish the flow, you should take a look into Queueing processes.

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
     * The name of the connection the job should be sent to.
     *
     * @var string|null
     */
    public $connection;

    /**
     * The queue's name where the job will be consumed
     * @var string
     */
    public $queue;

    /**
     * Create a new job instance.
     *
     */
    public function __construct()
    {
        $this->connection = Config::getVar('queues', 'default_connection', 'sync');
        $this->queue = Config::getVar('queues', 'default_queue', null);
    }

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
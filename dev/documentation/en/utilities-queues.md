---
title: Queues - Technical Documentation - OJS|OMP|OPS
---

# Queues

If you have a time-consuming sub-process in the middle of a process, but the result of it is not necessary to allow users to finish the flow, you should take a look into Queueing processes.

The use of this methodology enables you to run your time-consuming processes in a asynchronous way.

# Enabling it

Our native methodology to run queued processes is based on the usage of [`register_shutdown_function`](https://www.php.net/manual/en/function.register-shutdown-function.php), to call one queued job at each PHP engine process shutdown.

To enable it you should set your configuration key `run_jobs_at_shutdown` as `On` at your config.inc.php.

# How to use it

Besides the shutdown method, we are using the [Laravel's Queue system](https://laravel.com/docs/7.x/queues) too. So, in order to queueing your processes, you should use the class `Illuminate\Support\Facades\Queue`.

Below are a non-working example to add processes into the queue system. As mentioned early, they will be consumed during the PHP engine process shutdown.

```php
use Illuminate\Support\Facades\Queue as Queue;

$functionToBeHandled = function () {
    // the code to be run at PHP engine process shutdown
};
$extraData = [];
$associatedQueue = "dummy-queue-name"; //This could be used to separated your processes between multiple queues

Queue::push($functionToBeHandled, $extraData, $queue);
```
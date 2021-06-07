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
default_queue = null
; Flag to enable the jobs to run at php shutdown
run_jobs_at_shutdown = Off
```

To enable queueing usage, you should change the `run_jobs_at_shutdown` value to `On`.

Currently the only available value for the `default_connection` it is `database`.

And for the `default_queue` you could choose any name.
---
book: dev-documentation
version: 3.5
title: Events - Technical Documentation - OJS|OMP|OPS
---

# Events

Laravel [Events](https://laravel.com/docs/9.x/events) can be used to implement an observer pattern. Events should be used to decouple code in the application.

Some examples of when to use event listeners:

- To assign DOIs to a submission when it is accepted, sent to production, or published.
- To update the search index when submission data changes.
- To log when a submission is submitted.
- To send an email notification when an action occurs.

## Create an Event

Create a new class for each event.

```php
namespace PKP\observers\events;

use APP\submission\Submission;
use PKP\context\Context;

class ExampleEvent
{
    public Context $context;
    public Submission $submission;

    public function __construct(Submission $submission, Context $context)
    {
        $this->context = $context;
        $this->submission = $submission;
    }
}
```

## Create a Listener

Create a listener that subscribes to the event.

```php
namespace PKP\observers\listeners;

use Illuminate\Events\Dispatcher;
use PKP\observers\events\ExampleEvent;

class ExampleListener
{
    public function subscribe(Dispatcher $events): void
    {
        $events->listen(
            ExampleEvent::class,
            ExampleListener::class
        );
    }

    public function handle(ExampleEvent $event)
    {
        $submission = $event->submission;
        $context = $event->context;

        // ...
    }
}
```

## Dispatch an Event

When an event is dispatched, its listeners will be instantiated and the `handle()` method will be called.

```php
use PKP\observers\events\ExampleEvent;

event(
    new ExampleEvent(
        $submission,
        $context
    )
);
```

An `Event` may have multiple `Listener`s. When an `Event` is dispatched, _all_ `Listener`s will be called.

## Listening to Multiple Events

A `Listener` may subscribe to multiple events.

```php
namespace PKP\observers\listeners;

use Illuminate\Events\Dispatcher;
use PKP\observers\events\ExampleEventA;
use PKP\observers\events\ExampleEventB;

class ExampleListener
{
    public function subscribe(Dispatcher $events): void
    {
        $events->listen(
            ExampleEventA::class,
            ExampleListener::class
        );
        $events->listen(
            ExampleEventB::class,
            ExampleListener::class
        );
    }

    public function handle(ExampleEventA|ExampleEventB $event)
    {
        // ...
    }
}
```

## Event Cache

Listeners are cached. Clear the cache after an event is added, edited, or removed.

## Jobs Queue

Laravel's event listeners can be [sent to the jobs queue](https://laravel.com/docs/9.x/events#queued-event-listeners) instead of being run synchronously. However, in PKP's applications, the relationship between jobs and listeners is not yet resolved.

For now, use of queued listeners is discouraged. If a listener includes a long-running task, have the listener [dispatch a job](./utilities-jobs).

```php
namespace PKP\observers\listeners;

use Illuminate\Events\Dispatcher;
use PKP\observers\events\ExampleEvent;
use PKP\jobs\ExampleJob;

class ExampleListener
{
    public function subscribe(Dispatcher $events): void
    {
        $events->listen(
            ExampleEvent::class,
            ExampleListener::class
        );
    }

    public function handle(ExampleEvent $event)
    {
        dispatch(new ExampleJob($event->context));
    }
}
```

## Usage Guidance

Take care when naming events and listeners. The event name should always describe what just happened and the listener should describe what it will do in response to that event.

| Event | Listener |
| --- |--- |--- |
| `PublicationPublished` | `ScheduleDeposit` |
| `PublicationPublished` | `UpdateSearchIndex` |
| `PublicationPublished` | `NotifyAuthors` |
| `UserAdded` | `NotifyAdmin` |
| `UserAdded` | `LogNewUser` |
| `UserLoggedIn` | `LogUserIp` |
| `ReviewerAssigned` | `UpdateReviewRoundStatus` |

Avoid listener names that refer to the event, like `PublicationPublishedListener` and `OnPublish`.

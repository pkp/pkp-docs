---
title: Example - Events and Listeners - Plugin Guide for OJS, OMP and OPS
description: How to use events and listeners in a plugin for OJS, OMP or OPS.
book: dev-plugin-guide
version: 3.5
---

# Events and Listeners

> Learn more about [events and listeners](/dev/documentation/en/utilities-events) in our developer documentation.
{:.notice}

Plugins can create listeners to subscribe to events triggered by the core application. Events are new in 3.4. Only a small number of events are used now. In the future, we plan to use them more.

Find all of the events in the `classes/observers/events` and `lib/pkp/classes/observers/events` directories.

## Send Files to Production Pipeline

A plugin may want to send copyedited files to a third-party service when a submission is sent to production. First, create the listener.

```php
namespace APP\plugins\generic\example;

use APP\facades\Repo;
use Illuminate\Events\Dispatcher;
use PKP\decision\types\SendToProduction;
use PKP\observers\events\DecisionAdded;
use PKP\submissionFile\SubmissionFile;

class ExampleListener
{
    public function subscribe(Dispatcher $events): void
    {
        $events->listen(
            DecisionAdded::class,
            ExampleListener::class
        );
    }

    public function handle(DecisionAdded $event)
    {
        if (!is_a($event->decisionType, SendToProduction::class)) {
            return;
        }

        $submissionFiles = Repo::submissionFile()
            ->getCollector()
            ->filterBySubmissionIds([$event->submission->getId()])
            ->filterByFileStages([
                SubmissionFile::SUBMISSION_FILE_PRODUCTION_READY,
            ])
            ->getMany();

        if ($submissionFiles->count()) {
            // Send files to third-party service.
        }
    }
}
```

Then subscribe the listener to the event in the plugin's registration method.

```php
namespace APP\plugins\generic\example;

use Illuminate\Support\Facades\Event;
use PKP\observers\events\DecisionAdded;
use PKP\plugins\GenericPlugin;

class ExamplePlugin extends GenericPlugin
{
    public function register($category, $path, $mainContextId = NULL)
    {
        $success = parent::register($category, $path);

        if ($success && $this->getEnabled()) {
            Event::subscribe(new ExampleListener());
        }

        return $success;
    }
}
```

---

View more [examples](./examples).

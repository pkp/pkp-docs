---
book: dev-documentation
version: 3.5
title: Editorial Statistics - Technical Documentation - OJS|OMP|OPS
---

# Editorial Statistics

Editorial statistics refer to the editorial activity of a journal or press. The editorial statistics service helps you calculate data on submissions received, accepted and published, and how long authors must wait for editorial decisions.

Get a count of submissions received by one journal.

```php
$received = app()->get('editorialStats')
    ->countSubmissionsReceived([
        'contextIds' => [1]
    ]);
```

Get a count of submissions received by one journal in January, 2020.

```php
$received = app()->get('editorialStats')
    ->countSubmissionsReceived([
        'contextIds' => [1],
        'dateStart' => '2020-01-01',
        'dateEnd' => '2020-01-31',
    ]);
```

Get a count of submissions accepted by one journal.

```php
use PKP\decision\Decision;

$accepted = app()->get('editorialStats')
    ->countByDecisions(
        Decision::ACCEPT,
        [
            'contextIds' => [1],
        ]
    );
```

Pass one or more `Decision::*` constants, such as `Decision::INITIAL_DECLINE` or `Decision::DECLINE`, to count submissions that have been desk rejected or rejected after peer review.

> Do not use `countSubmissionsReceived()` and `countByDecisions()` to calculate acceptance and rejection rates. A submission may have been received but not yet accepted or rejected and decisions are often made more than a year after submission.
{:.warning}

Use `countByDecisionsForSubmittedDate()` to calculate acceptance and rejection rates.

```php
use PKP\decision\Decision;

$args = ['contextIds' => [1]];
$accepted = app()->get('editorialStats')->countByDecisionsForSubmittedDate(Decision::ACCEPT, $args);
$declined = app()->get('editorialStats')->countByDecisionsForSubmittedDate([Decision::INITIAL_DECLINE, Decision::DECLINE], $args);
$total = $accepted + $declined;

$acceptanceRate = $accepted / $total;
$rejectionRate = $declined / $total;
```

Get the number of days it took for each accepted submission to reach its final decision.

```php
use PKP\decision\Decision;

$acceptDays = app()->get('editorialStats')->getDaysToDecisions(
    [
        Decision::SEND_TO_PRODUCTION,
        Decision::ACCEPT
    ],
    ['contextIds' => [1]]
);
```

Calculate the average.

```php
$average = array_sum($acceptDays) / count($acceptDays);
```

Or calculate an acceptance rate which allows you to report more meaningful statistics to authors.

```php
// 80% of accepted submissions receive this decision within
// <$rate> number of days.
$rate = app()->get('editorialStats')->calculateDaysToDecisionRate($acceptDays, 0.8);
```

The `PKPStatsEditorialService` class includes methods to count submissions by status or workflow stage.

Read the docblock for each method to understand clearly how statistics are calculated. In particular, the `dateStart` and `dateEnd` arguments are applied differently for each method.

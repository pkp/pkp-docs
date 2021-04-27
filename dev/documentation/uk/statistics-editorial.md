---
title: Editorial Statistics - Technical Documentation - OJS|OMP|OPS
---

# Editorial Statistics

Editorial statistics refer to the editorial activity of a journal or press. The editorial statistics [service](architecture-services.md) helps you calculate data on submissions received, accepted and published, and how long authors must wait for editorial decisions.

Get a count of submissions received by one journal.

```php
$received = Services::get('editorialStats')
    ->countSubmissionsReceived([
        'contextIds' => [1]
    ]);
```

Get a count of submissions received by one journal in January, 2020.

```php
$received = Services::get('editorialStats')
    ->countSubmissionsReceived([
        'contextIds' = [1],
        'dateStart' => '2020-01-01',
        'dateEnd' => '2020-01-31',
    ]);
```

Get a count of submissions accepted by one journal.

```php
$accepted = Services::get('editorialStats')
    ->countByDecisions(
        SUBMISSION_EDITOR_DECISION_ACCEPT,
        [
            'contextIds' = [1],
        ]
    );
```

Pass one or more `SUBMISSION_EDITOR_DECISION_` constants to count submissions that have been desk rejected or rejected after peer review.

> Do not use `countSubmissionsReceived()` and `countByDecisions()` to calculate acceptance and rejection rates. A submission may have been received but not yet accepted or rejected and decisions are often made more than a year after submission. 
> 
> {:.warning}

Use `countByDecisionsForSubmittedDate()` to calculate acceptance and rejection rates.

```php
$args = ['contextIds' => [1]];
$accepted = $this->countByDecisionsForSubmittedDate(SUBMISSION_EDITOR_DECISION_ACCEPT, $args);
$declined = $this->countByDecisionsForSubmittedDate([SUBMISSION_EDITOR_DECISION_INITIAL_DECLINE, SUBMISSION_EDITOR_DECISION_DECLINE], $args);
$total = $accepted + $declined;

$acceptanceRate = $accepted / $total;
$rejectionRate = $declined / $total;
```

Get the number of days it took for each accepted submission to reach its final decision.

```php
$acceptDays = $this->getDaysToDecisions(
    [
        SUBMISSION_EDITOR_DECISION_SEND_TO_PRODUCTION,
        SUBMISSION_EDITOR_DECISION_ACCEPT
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
$rate = $this->calculateDaysToDecisionRate($acceptDays, 0.8);
```

The `PKPStatsEditorialService` class includes methods to count submissions by status or workflow stage.

Read the docblock for each method to understand clearly how statistics are calculated. In particular, the `dateStart` and `dateEnd` arguments are applied differently for each method.

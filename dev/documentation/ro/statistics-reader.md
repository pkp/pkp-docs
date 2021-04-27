---
title: Reader Statistics - Technical Documentation - OJS|OMP|OPS
---

# Reader Statistics

OJS and OMP offer [Service](architecture-services.md) classes to help you retrieve and calculate statistics about your installation.

Reader statistics refer to the activity of users visiting the reader-facing website of a journal or press. Daily and monthly totals of visitors are stored for each context, section, article landing page and article galley.

This data is compiled daily from the server logs and stored in the `metrics` table. Each row in the table represents the total visits to one object (article, galley or journal) for one day or month.

## Get records and calculate totals

Get all the records related to an article landing page for one journal during the first three months of the year.

```php
$records = Services::get('stats')->getRecords([
    'contextIds' => [1],
    'dateEnd' => '2020-03-31',
    'dateStart' => '2020-01-01',
    'assocTypes' => [ASSOC_TYPE_SUBMISSION],
]);
```

Add up the records to get a total count for all submissions.

```php
$views = array_reduce(
    $records,
    [Services::get('stats'), 'sumMetric'],
    0
);
```

The `assocType` may be the context (`ASSOC_TYPE_CONTEXT`), an article landing page (`ASSOC_TYPE_SUBMISSION`) or the galleys of an article (`ASSOC_TYPE_SUBMISSION_FILE`).

Get all records for one article's PDF galleys.

```php
$records = Services::get('stats')->getRecords([
    'contextIds' => [1],
    'submissionIds' => [1],
    'assocTypes' => [ASSOC_TYPE_SUBMISSION_FILE],
    'fileTypes' => [STATISTICS_FILE_TYPE_PDF],
]);
```

And add them up.

```php
$views = array_reduce(
    $records,
    [Services::get('stats'), 'sumMetric'],
    0
);
```

Or get all the records for any of the article's galleys.

```php
$records = Services::get('stats')->getRecords([
    'contextIds' => [1],
    'submissionIds' => [1],
    'assocTypes' => [ASSOC_TYPE_SUBMISSION_FILE],
]);
```

Filter them by file type.

```php
$pdfRecords = array_filter($records, [Services::get('stats'), 'filterRecordPdf']);
$htmlRecords = array_filter($records, [Services::get('stats'), 'filterRecordHtml']);
$otherRecords = array_filter($records, [Services::get('stats'), 'filterRecordOther']);
```

And add each file type up.

```php
$pdfViews = array_reduce($pdfRecords, [Services::get('stats'), 'sumMetric'], 0);
$htmlViews = array_reduce($htmlRecords, [Services::get('stats'), 'sumMetric'], 0);
$otherViews = array_reduce($otherRecords, [Services::get('stats'), 'sumMetric'], 0);
```

The `getRecords()` method accepts several arguments to filter results. The source code includes more complete documentation.

## Get a list of objects ordered by their total stats

Get a list of the top 10 articles by total visits to its landing page and galleys in March 2020.

```php
$topSubmissions = Services::get('stats')->getOrderedObjects(
    STATISTICS_DIMENSION_SUBMISSION_ID,
    STATISTICS_ORDER_DESC,
    [
        'contextIds' => [1],
        'dateEnd' => '2020-03-31',
        'dateStart' => '2020-03-01',
        'count' => 10,
        'offset' = 0,
    ]
);
```

This will return an associative array.

```
[
    ['id' => 213, 'total' => 2314],
    ['id' => 431, 'total' => 2139],
    ['id' => 132, 'total' => 2002],
    ['id' => 321, 'total' => 1987],
    ['id' => 753, 'total' => 1932],
    ['id' => 642, 'total' => 1845],
    ['id' => 243, 'total' => 1653],
    ['id' => 532, 'total' => 1652],
    ['id' => 120, 'total' => 1420],
    ['id' => 193, 'total' => 1201],
]
```

Get a list of the top 10 journals by total visits to any article associated with the journal.

```php
$topContexts =  Services::get('stats')->getOrderedObjects(
    STATISTICS_DIMENSION_CONTEXT_ID,
    STATISTICS_ORDER_DESC,
    [
        'count' => 10,
        'offset' = 0,
    ]
);
```

This method accepts all of the same properties as `getRecords()` to filter the results.

## Get total visits broken down by day or month

Get a monthly count of visits to all article landing pages in a journal.

```php
$timeline =  Services::get('stats')->getTimeline(
    STATISTICS_DIMENSION_MONTH,
    [
        'contextIds' => [1],
        'assocTypes' = [ASSOC_TYPE_SUBMISSION],
        'dateEnd' => '2020-12-31',
        'dateStart' => '2020-01-01',
    ]
);
```

This will return an associative array.

```
[
    [
        'date' => '2020-01',
        'label' => 'January, 2020',
        'value' => 5313,
    ],
    [
        'date' => '2020-02',
        'label' => 'February, 2020',
        'value' => 4364,
    ],
    [
        'date' => '2020-03',
        'label' => 'March, 2020',
        'value' => 6301,
    ],
    ...
]
```

Get a daily count of visits to one article's landing page.

```php
$timeline =  Services::get('stats')->getTimeline(
    STATISTICS_DIMENSION_DAY,
    [
        'contextIds' => [1],
        'submissionIds' => [21],
        'assocTypes' = [ASSOC_TYPE_SUBMISSION],
        'dateEnd' => '2020-01-31',
        'dateStart' => '2020-01-01',
    ]
);
```

This method accepts all of the same properties as `getRecords()` to filter the results.

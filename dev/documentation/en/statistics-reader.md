---
book: dev-documentation
version: 3.4
title: Reader Statistics - Technical Documentation - OJS|OMP|OPS
---

# Reader Statistics

OJS, OMP and OPS offer service classes to help you retrieve and calculate statistics about your installation.

Reader statistics refer to the activity of users visiting the reader-facing website of a journal, press or server. The visits of the context index page, catalog index page (OMP), submission and chapter (OMP) landing page, submission and chapter (OMP) file downloads, issue TOC and issue file downloads (OJS), as well as series landing page (OMP) are tracked and processed (removing the double-clicks) according to the [COUNTER Code of Practice R5](https://cop5.projectcounter.org/en/5.0.2/).

This data is compiled daily from the application log files. The statistics are then stored in different database tables:
metrics_context: contains daily statistics for the context and catalog (OMP) index page,
metrics_submission: contains daily statistics for submission and chapter (OMP) landing page, and submission and chapter (OMP) file downloads,
metrics_issue: contains daily statistics for issues TOC views and issue file downloads,
metrics_series (OMP): contains daily statistics for series landing page,
metrics_submission_geo_daily: contains daily total and unique statistics for a submission separated/aggregated/grouped by a country, region or city,
metrics_submission_geo_monthly: contains monthly total and unique statistics for a submission separated/aggregated/grouped by a country, region or city,

> The Geo data are compiled and stored slightly differently than the other statistics: additionally to submission's total visits (views and downloads) they also contain submission's unique visits (views and downloads). According to the COUNTER R5: if multiple visits of one and the same submission occur in the same hour, only one activity is counted.
{:.notice}

> IP Geolocation is provided by <a href='https://db-ip.com'>DB-IP</a>
{:.notice}


- [Cotext statistics service](#context-statistics-service)
- [Issue statistics service](#issue-statistics-service)
- [Submission statistics service](#submission-statistics-service)
- [Geographic statistics service](#geographic-statistics-service)


## Context statistics service

### Get total context visits

Get total count of visits to journal index page

```php
$contextViews = Services::get('contextStats')->getTotal(1);
```

The parameters for the fuction `getTotal()` of the context statistics service `contextStats` are:
```
int $contextId, ?string $dateStart, ?string $dateEnd
```
where start and end date are optional.

The function `getTotal()` will return the views number.

### Get total context visits broken down by day or month

Get a monthly count of visits to journal index page.

```php
$timeline =  Services::get('contextStats')->getTimeline(
    StatisticsHelper::STATISTICS_DIMENSION_MONTH,
    [
        'contextIds' => [1],
        'dateStart' => '2022-01-01',
        'dateEnd' => '2022-12-31',
    ]
);
```

This will return an associative array.

```
[
    [
        'date' => '2022-01',
        'label' => 'January, 2020',
        'value' => 531,
    ],
    [
        'date' => '2022-02',
        'label' => 'February, 2020',
        'value' => 436,
    ],
    [
        'date' => '2022-03',
        'label' => 'March, 2020',
        'value' => 630,
    ],
    ...
]
```

Get a daily count of visits to journal index page.

```php
$timeline =  Services::get('contextStats')->getTimeline(
    StatisticsHelper::STATISTICS_DIMENSION_DAY,
    [
        'contextIds' => [1],
        'dateStart' => '2022-01-01',
        'dateEnd' => '2022-01-31',
    ]
);
```

### Get a list of contexts ordered by their total stats (admins only)

Get all journals by total visits

```php
$totalMetrics = Services::get('contextStats')->getTotals([]);
```

Filter them by a search phrase

```php
$totalMetrics = Services::get('contextStats')->getTotals([
    'searchPhrase' => 'Journal Title',
]);
```

Get a list of the top 10 journals by total visits in March 2022

```php
$totalMetrics = Services::get('contextStats')->getTotals([
    'count' => 10,
    'offset' => 0,
    'dateStart' => '2022-03-01',
    'dateEnd' => '2022-03-31'
]);
```

The accepted parameters for the function `getTotals()` of the context statistics service `contextStats` are:
```
[
    'dateStart',
    'dateEnd',
    'count',
    'offset',
    'orderDirection',
    'searchPhrase',
    'contextIds'
]
```

The function `getTotals()` will return an array of objects containing context ID and metric number.

```
[
    [0] => stdClass Object
        (
            [context_id] => 1
            [metric] => 1102
        )

    [1] => stdClass Object
        (
            [context_id] => 2
            [metric] => 875
        )
    ...
]
```

## Issue statistics service

### Get a list of issues ordered by their total stats

Get all issues of a journal by total visits (views and downloads)

```php
$totalMetrics = Services::get('issueStats')->getTotals([
    'contextIds' => [1]
]);
```

Filter them by a search phrase

```php
$totalMetrics = Services::get('issueStats')->getTotals([
    'contextIds' => [1],
    'searchPhrase' => 'Vol. 1',
]);
```

Get a list of the top 10 issues of a journal by total visits in March 2022

```php
$totalMetrics = Services::get('issueStats')->getTotals([
    'contextIds' => [1],
    'count' => 10,
    'offset' => 0,
    'dateStart' => '2022-03-01',
    'dateEnd' => '2022-03-31'
]);
```

Get all issues of a journal by total TOC visits

```php
$totalMetrics = Services::get('issueStats')->getTotals([
    'contextIds' => [1],
    'assocTypes' => [Application::ASSOC_TYPE_ISSUE],
]);
```

Get all issues of a journal by total issue galley file downloads

```php
$totalMetrics = Services::get('issueStats')->getTotals([
    'contextIds' => [1],
    'assocTypes' => [Application::ASSOC_TYPE_ISSUE_GALLEY],
]);
```

The accepted parameters for the function `getTotals()` of the issue statistics service `issueStats` are:
```
[
    'dateStart',
    'dateEnd',
    'count',
    'offset',
    'orderDirection',
    'searchPhrase',
    'issueIds',
    'assocTypes',
]
```

The assocType may be issue TOC page (Application::ASSOC_TYPE_ISSUE) or the issue galley file (Application::ASSOC_TYPE_ISSUE_GALLEY).

The function `getTotals()` will return an array of objects containing issue ID and metric number.

```
[
    [0] => stdClass Object
        (
            [issue_id] => 5
            [metric] => 1102
        )

    [1] => stdClass Object
        (
            [issue_id] => 6
            [metric] => 875
        )
    ...
]
```

### Get issues stats

Get issue statistics grouped by type (TOC, issue galley file)

```php
$metricsByType = Services::get('issueStats')->getTotalsByType(1, 1);
```

The parameters for the fuction `getTotalsByType()` of the issue statistics service `issueStats` are:
```
int $issueId, int $contextId, ?string $dateStart, ?string $dateEnd
```
where start and end date are optional.

The function `getTotalsByType()` will return an associative array.

```
[
    'toc' => 150,
    'galley' => 140,
]
```

### Get total issues visits broken down by day or month

Get a monthly count of total visits (views and downloads) to all issues in a journal.

```php
$timeline =  Services::get('issueStats')->getTimeline(
    StatisticsHelper::STATISTICS_DIMENSION_MONTH,
    [
        'contextIds' => [1],
        'dateStart' => '2022-01-01',
        'dateEnd' => '2022-12-31',
    ]
);
```

This will return an associative array.

```
[
    [
        'date' => '2022-01',
        'label' => 'January, 2020',
        'value' => 530,
    ],
    [
        'date' => '2022-02',
        'label' => 'February, 2020',
        'value' => 430,
    ],
    [
        'date' => '2022-03',
        'label' => 'March, 2020',
        'value' => 630,
    ],
    ...
]
```

Get a monthly count of visits to all issues TOC pages in a journal.

```php
$timeline =  Services::get('issueStats')->getTimeline(
    StatisticsHelper::STATISTICS_DIMENSION_MONTH,
    [
        'contextIds' => [1],
        'assocTypes' = [Application::ASSOC_TYPE_ISSUE],
        'dateStart' => '2022-01-01',
        'dateEnd' => '2022-12-31',
    ]
);
```

Get a monthly count of visits to all issues galley file downloads in a journal.

```php
$timeline =  Services::get('issueStats')->getTimeline(
    StatisticsHelper::STATISTICS_DIMENSION_MONTH,
    [
        'contextIds' => [1],
        'assocTypes' = [Application::ASSOC_TYPE_ISSUE_GALLEY],
        'dateStart' => '2022-01-01',
        'dateEnd' => '2022-12-31',
    ]
);
```

Get a daily count of visits to one issue's TOC page.

```php
$timeline =  Services::get('issueStats')->getTimeline(
    StatisticsHelper::STATISTICS_DIMENSION_DAY,
    [
        'contextIds' => [1],
        'issueIds' => [1],
        'assocTypes' = [Application::ASSOC_TYPE_ISSUE],
        'dateStart' => '2022-01-01',
        'dateEnd' => '2022-01-31',
    ]
);
```

The method `getTimeline()` of the issue statistics service `issueStats` accepts all of the same properties as `getTotals()` to filter the results.

## Submission statistics service

### Get a list of submissions ordered by their total stats

Get all articles of a journal by total visits (views and downloads)

```php
$totalMetrics = Services::get('publicationStats')->getTotals([
    'contextIds' => [1]
]);
```

Filter them by journal sections

```php
$totalMetrics = Services::get('publicationStats')->getTotals([
    'contextIds' => [1],
    'sectionIds' => [1,2],
]);
```

Filter them by an journal issue

```php
$totalMetrics = Services::get('publicationStats')->getTotals([
    'contextIds' => [1],
    'issueIds' => [1],
]);
```

Filter them by a search phrase

```php
$totalMetrics = Services::get('publicationStats')->getTotals([
    'contextIds' => [1],
    'searchPhrase' => 'Mutlilingualism',
]);
```

Get a list of the top 10 articles of a journal by total visits in March 2022

```php
$totalMetrics = Services::get('publicationStats')->getTotals([
    'contextIds' => [1],
    'count' => 10,
    'offset' => 0,
    'dateStart' => '2022-03-01',
    'dateEnd' => '2022-03-31'
]);
```

Get all articles of a journal by total abstract page visits

```php
$totalMetrics = Services::get('publicationStats')->getTotals([
    'contextIds' => [1],
    'assocTypes' => [Application::ASSOC_TYPE_SUBMISSION],
]);
```

Get all articles of a journal by total full text downloads

```php
$totalMetrics = Services::get('publicationStats')->getTotals([
    'contextIds' => [1],
    'assocTypes' => [Application::ASSOC_TYPE_SUBMISSION_FILE],
]);
```

Get all articles of a journal by total PDF full text downloads

```php
$totalMetrics = Services::get('publicationStats')->getTotals([
    'contextIds' => [1],
    'assocTypes' => [Application::ASSOC_TYPE_SUBMISSION_FILE],
    'fileTypes' => [StatisticsHelper::STATISTICS_FILE_TYPE_PDF]
]);
```

Get all articles of a journal by total supplementary file downloads

```php
$totalMetrics = Services::get('publicationStats')->getTotals([
    'contextIds' => [1],
    'assocTypes' => [Application::ASSOC_TYPE_SUBMISSION_FILE_COUNTER_OTHER],
]);
```

The accepted parameters for the function `getTotals()` of the submission statistics service `publicationStats` are:
```
[
    'dateStart',
    'dateEnd',
    'count',
    'offset',
    'orderDirection',
    'searchPhrase',
    'sectionIds' (OJS and OPS) oder 'seriesIds' (OMP),
    'submissionIds',
    'assocTypes',
    'fileTypes',
]
```

The assocType may be article landing page (Application::ASSOC_TYPE_SUBMISSION), the full text (Application::ASSOC_TYPE_SUBMISSION_FILE) or the supplementary file (Application::ASSOC_TYPE_SUBMISSION_FILE_COUNTER_OTHER).

The fileTypes may be HTML (StatisticsHelper::STATISTICS_FILE_TYPE_HTML), PDF (StatisticsHelper::STATISTICS_FILE_TYPE_PDF), other (StatisticsHelper::STATISTICS_FILE_TYPE_OTHER) and DOC (StatisticsHelper::STATISTICS_FILE_TYPE_DOC).

The function `getTotals()` will return an array of objects containing submission ID and metric number.

```
[
    [0] => stdClass Object
        (
            [submission_id] => 5
            [metric] => 1102
        )

    [1] => stdClass Object
        (
            [submission_id] => 6
            [metric] => 875
        )
    ...
]
```

### Get submissions stats

Get article statistics grouped by type (abstract, pdf, html, other, suppFileViews)

```php
$metricsByType = Services::get('publicationStats')->getTotalsByType(1, 1);
```

The parameters for the fuction `getTotalsByType()` of the submission statistics service `publicationStats` are:
```
int $submissionId, int $contextId, ?string $dateStart, ?string $dateEnd
```
where start and end date are optional.

The function `getTotalsByType()` will return an associative array.

```
[
    'abstract' => 1500,
    'pdf' => 1400,
    'html' => 1000,
    'other' => 0,
    'suppFileViews' => 0
]
```

### Get total submissions visits broken down by day or month

Get a monthly count of visits to all article landing pages in a journal.

```php
$timeline =  Services::get('publicationStats')->getTimeline(
    StatisticsHelper::STATISTICS_DIMENSION_MONTH,
    [
        'contextIds' => [1],
        'assocTypes' = [Application::ASSOC_TYPE_SUBMISSION],
        'dateStart' => '2022-01-01',
        'dateEnd' => '2022-12-31',
    ]
);
```

This will return an associative array.

```
[
    [
        'date' => '2022-01',
        'label' => 'January, 2020',
        'value' => 5313,
    ],
    [
        'date' => '2022-02',
        'label' => 'February, 2020',
        'value' => 4364,
    ],
    [
        'date' => '2022-03',
        'label' => 'March, 2020',
        'value' => 6301,
    ],
    ...
]
```

Get a monthly count of visits to all article full text downloads in a journal.

```php
$timeline =  Services::get('publicationStats')->getTimeline(
    StatisticsHelper::STATISTICS_DIMENSION_MONTH,
    [
        'contextIds' => [1],
        'assocTypes' = [Application::ASSOC_TYPE_SUBMISSION_FILE],
        'dateStart' => '2022-01-01',
        'dateEnd' => '2022-12-31',
    ]
);
```

Get a daily count of visits to one article's landing page.

```php
$timeline =  Services::get('publicationStats')->getTimeline(
    StatisticsHelper::STATISTICS_DIMENSION_DAY,
    [
        'contextIds' => [1],
        'submissionIds' => [21],
        'assocTypes' = [Application::ASSOC_TYPE_SUBMISSION],
        'dateStart' => '2022-01-01',
        'dateEnd' => '2022-01-31',
    ]
);
```

The method `getTimeline()` of the submission statistics service `publicationStats` accepts all of the same properties as `getTotals()` to filter the results.

### Get a list of submission files ordered by their total stats

Get all article files of a journal by total downloads

```php
$records = Services::get('publicationStats')->getFilesTotals([
    'contextIds' => [1]
]);
```

This will return an associative array.

```
[
    'submissionId' => 1,
    'submissionTitle' => 'Article 1 Title',
    'submissionFileId' => 1,
    'fileName' => 'file_1.pdf',
    'downloads' => 1000
]
```

Filter them by file type PDF

```php
$records = Services::get('publicationStats')->getFilesTotals([
    'contextIds' => [1],
    'fileTypes' => [StatisticsHelper::STATISTICS_FILE_TYPE_PDF]
]);
```

The accepted parameters for the function `getFilesTotals()` of the submission statistics service `publicationStats` are:
```
[
    'dateStart',
    'dateEnd',
    'count',
    'offset',
    'orderDirection',
    'searchPhrase',
    'sectionIds' (OJS and OPS) oder 'seriesIds' (OMP),
    'submissionIds',
    'assocTypes',
    'representationIds',
    'fileTypes',
    'submissionFileIds'
]
```

The searchPhrase is used to filter submissions the files belong to (and not the files themselves).

The assocType may be the full text (Application::ASSOC_TYPE_SUBMISSION_FILE) or the supplementary file (Application::ASSOC_TYPE_SUBMISSION_FILE_COUNTER_OTHER).

The representationIds allows filtering by galley (OJS, OPS) and publication format (OMP) IDs.

The fileTypes may be HTML (StatisticsHelper::STATISTICS_FILE_TYPE_HTML), PDF (StatisticsHelper::STATISTICS_FILE_TYPE_PDF), other (StatisticsHelper::STATISTICS_FILE_TYPE_OTHER) and DOC (StatisticsHelper::STATISTICS_FILE_TYPE_DOC).

The submissionFileIds filters by given file IDs.

## Geographic statistics service

### Get a list of countries, regions or cities ordered by their total stats

Get all countries by total visits (views and downloads)

```php
$records = Services::get('geoStats')->getTotals([
        'contextIds' => [1]
    ],
    StatisticsHelper::STATISTICS_DIMENSION_COUNTRY
);
```

This will return an associative array.

```
[
    ['country' => 'Brazil', 'total' => 6590, 'unique' => 5493]
    ['country' => 'Mexico', 'total' => 5290, 'unique' => 4883]
    ...
]
```

Get all regions by total visits (views and downloads)

```php
$records = Services::get('geoStats')->getTotals([
        'contextIds' => [1]
    ],
    StatisticsHelper::STATISTICS_DIMENSION_REGION
);
```

This will return an associative array.

```
[
    ['region' => 'Sao Paulo', 'country' => 'Brazil', 'total' => 3590, 'unique' => 2493]
    ['region' =>  'Ciudad de México', 'country' => 'Mexico', 'total' => 3290, 'unique' => 2883]
    ...
]
```

Filter them by country

```php
$records = Services::get('geoStats')->getTotals([
        'contextIds' => [1],
        'countries' => ['BR']
    ],
    StatisticsHelper::STATISTICS_DIMENSION_REGION
);
```

Get all cities by total visits (views and downloads)

```php
$records = Services::get('geoStats')->getTotals([
        'contextIds' => [1]
    ],
    StatisticsHelper::STATISTICS_DIMENSION_CITY
);
```

This will return an associative array.

```
[
    ['city' => 'Sao Paulo', 'region' => 'Sao Paulo', 'country' => 'Brazil', 'total' => 2590, 'unique' => 1493]
    ['city' => 'Mexico', 'region' =>  'Ciudad de México', 'country' => 'Mexico', 'total' => 2290, 'unique' => 1883]
    ...
]
```

The accepted properties for the first parameter for the function `getTotals()` of the geographic statistic service are:
```
[
    'dateStart',
    'dateEnd',
    'count',
    'offset',
    'orderDirection',
    'searchPhrase',
    'sectionIds' (OJS and OPS) oder 'seriesIds' (OMP),
    'submissionIds',
    'countries',
    'regions',
    'cities'
]
```

The searchPhrase is used to filter submissions (and not the countries, regions and cities themselves).

The country is an ISO 3166-1 alpha-2 code, e.g. BR (Brasil).

The region is an ISO 3166-2 code, e.g. BR-SP (Brasil-São Paulo).

The city is the ISO 3166-2 region code and city name separated by a hyphen, e.g. BR-SP-São Paulo.



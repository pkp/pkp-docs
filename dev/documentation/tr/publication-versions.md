---
title: Publication Versions - Technical Documentation - OJS|OMP|OPS
---

# Publication Versions

Changes applied to a publication after it has been published are preserved in different versions. Each version has its own title, metadata, contributors and galleys.

When working with submissions, care must be taken to ensure you are working with the correct version. Usually this is the most recently published version, but that may not be the case in the editorial workflow or in scenarios where all versions must be handled.

## Current Publication

A `Submission`'s publication details are stored in `Publication` objects and can be retrieved by accessing the current publication.

```php
// Get the title of the current version
$title = $submission
    ->getCurrentPublication()
    ->getLocalizedFullTitle();
```

The current publication refers to the most recently published version. If the submission has not been published yet, the current publication will be the most recently created version.

## Changes After Publication

A publication can not be edited after it has been published. To make changes, a new version should be created, edited and published.

```php
// Create a new version
$newPublication = Services::get('publication')->version(
    $submission->getCurrentPublication(),
    $request
);

// Edit the new version
$newPublication = Services::get('publication')->edit(
    $newPublication,
    ['datePublished' => '2020-01-15'],
    $request
);

// Publish the new version
$newPublication = Services::get('publication')->publish(
    $newPublication
);
```

The publication service class includes a few additional methods to assist with publishing and versioning submissions.

- `PKPPublication::version()` will create a new version of an existing publication.
- `PKPPublication::validatePublish()` will perform pre-publication checks to ensure the publication is ready to be published.
- `PKPPublication::publish()` will publish a publication, update the status, and create the appropriate log entries.
- `PKPPublication::unpublish()` will unpublish a publication.

## Working with Versions

Get the most recently created publication when you want to retrieve the latest version regardless of whether it is published or unpublished.

```php
$latestPublication = $submission->getLatestPublication();
```

Get all versions of a submission that have been published.

```php
$publishedPublications = $submission->getPublishedPublications();
```

Get all versions of a submission.

```php
$publications = $submission->getData('publications');
```

## Identify Versions

When displaying a list of the submission's versions in the UI, they should be identified by their `datePublished` and `version` properties.

```php
foreach ($submission->getData('publications') as $publication) {
    echo __('submission.versionIdentity', [
        'datePublished' => $publication->getData('datePublished'),
        'version' => $publication->getData('version'),
    ]);
}
// Produces the following:
// 2019-11-13 (1)
// 2020-02-03 (2)
// 2020-05-16 (3)
```

## Submission Getters

The getter and setter methods in the `Submission` object which get or set data attached to a `Publication` are deprecated. The following code should not be used.

```php
// Deprecated. Do not use.
$title = $submission->getLocalizedFullTitle();
```

Use the following code instead.

```php
$title = $submission
    ->getCurrentPublication()
    ->getLocalizedFullTitle();
```
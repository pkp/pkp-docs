---
title: Resources - Technical Documentation - OJS|OMP|OPS
---

# Resources

A collection of resources that may help you while coding with OJS and OMP.

## CacheBuster

This plugin will [clear the template and CSS cache](https://github.com/NateWr/cacheBuster) with every request. Enable it so that you don't have to manually clear the cache every time you make a change.

> Be careful not to enable this on a production site. Recompiling templates and CSS is a time-intensive task. 
> 
> {:.warning}

## Postman API

We use [Postman](https://www.getpostman.com/) to test our REST API endpoints. You can [import our request collection](/dev/api/OJS-api-postman-collection.json) for OJS (last updated 2020-12-21).

## Generate submissions

A CLI script to [generate submissions for import](https://gist.github.com/NateWr/c6acac198d319cc317c0862c11df4a2e). Run `php ojs-generate-submissions.php` to create the XML file, then import from Tools > Export/Import > Native Import.

## Generate metrics

A CLI tool is available to generate usage statistics for each submission in your instance. From the root directory of an application, run:

```
php lib/pkp/generateTestMetrics.php <context_id> <start_date> <end_date>
```

Dates should be in the format `YYYY-MM-DD`.

## Remove a locale key

A CLI tool is available to remove locale keys. This can be useful when a locale key is no longer used and needs to be removed from every locale.

From the rood directory of an application, run:

```
php tools/removeLocaleKey.php example.locale.key
```

It will remove all instances of that locale key from every locale `.po` file in the application and pkp-lib.
---
title: Resources - Technical Documentation - OJS/OMP
---

# Resources

A collection of resources that may help you while coding with OJS and OMP.

## CacheBuster

This plugin will [clear the template and CSS cache](https://github.com/NateWr/cacheBuster) with every request. Enable it so that you don't have to manually clear the cache every time you make a change.

> Be careful not to enable this on a production site. Recompiling templates and CSS is a time-intensive task.
{:.warning}

## Postman API

We use [Postman](https://www.getpostman.com/) to test our REST API endpoints. You can [import our request collection](/dev/api/OJS-api-postman-collection.json) for OJS (last updated 2020-02-03).

## Generate submissions

A CLI script to [generate submissions for import](https://gist.github.com/NateWr/c6acac198d319cc317c0862c11df4a2e). Run `php ojs-generate-submissions.php` to create the XML file, then import from Tools > Export/Import > Native Import.

## Generate metrics

A CLI tool to [generate fake metrics data](https://gist.github.com/NateWr/32322ca420a0abb37c035506dd51601d). Creates fake stats entries for each submission in your instance.
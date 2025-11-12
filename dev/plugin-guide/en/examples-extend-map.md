---
title: Example - Extend a Map - Plugin Guide for OJS, OMP and OPS
description: Example code showing how to extend a map in a plugin for OJS, OMP and OPS.
book: dev-plugin-guide
version: 3.5
---

# Extend a Map

[Maps](/dev/documentation/en/architecture-maps) are used to convert data objects to another format. The most common use of maps in the application is to convert data objects to associative arrays, so that they can be compiled into JSON and returned in REST API results.

Plugins can extend a map to add data to the mapped output. This allows a plugin to integrate deeply with parts of the application like the REST API. For example, a plugin may want to add the number of days since an announcement was posted to the response data of the [Announcements](/dev/api/ojs/3.4#tag/Announcements) endpoint of the REST API.

Use the `app('maps')` helper to extend the `Schema` map of the `Announcement` class.

```php
use PKP\announcement\Announcement;
use PKP\announcement\maps\Schema;

app('maps')->extend(
    Schema::class,
    function($output, Announcement $item, Schema $map) {
        $then = new DateTime($item->getData('datePosted'));
        $now = new DateTime();
        $output['daysSince'] = (int) $now->diff($then)->format('%a');

        return $output;
    }
);
```

REST API responses usually use a schema map. For example, the map for submissions is located at `APP\submission\maps\Schema`. Most entities use a similar pattern.

---

View more [examples](./examples).

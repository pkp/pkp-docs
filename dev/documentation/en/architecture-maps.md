---
title: Maps - Technical Documentation - OJS|OMP|OPS
---

# Maps

Maps are used to convert one or more objects to another format. Maps can be used to export data, format objects for the REST API, or deposit data in third-party services like Crossref.

A Map can be written to prepare data in JSON, XML, CSV or any other format. The most common maps are those used to convert a [DataObject](./architecture-entities#dataobject) to JSON according to its [schema](./architecture-entities#schema).

A map must implement at least one public method to perform the map.

```php
namespace PKP\announcement\maps;

use PKP\announcement\Announcement;
use PKP\services\PKPSchemaService;

class Schema extends \PKP\core\maps\Schema
{
    public $schema = PKPSchemaService::SCHEMA_ANNOUNCEMENT;

    public function map(Announcement $item): array
    {
        // Get the properties defined in the schema
        $props = $this->getProps();

        return $this->mapByProperties($props, $item);
    }

    protected function mapByProperties(array $props, Announcement $item): array
    {
        $output = [];
        foreach ($props as $prop) {
            switch ($prop) {

                // Any property defined in the schema that isn't
                // available in the DataObject must be set manually.
                case '_href':
                    $output[$prop] = $this->getApiUrl('announcements/' . $item->getId());
                    break;

                // Get other properties from the DataObject
                default:
                    $output[$prop] = $item->getData($prop);
                    break;
            }
        }

        return $this->withExtensions($output, $item);
    }
}
```

A schema map will typically implement public methods to map one or many objects, as well as methods to return only the summary properties of the [schema](./architecture-entities.md#schema).

```php
class Schema extends \PKP\core\maps\Schema
{
    /** @var Enumerable */
    public $collection;

    /** @var string */
    public $schema = PKPSchemaService::SCHEMA_ANNOUNCEMENT;

    public function map(Announcement $item): array
    {
        return $this->mapByProperties($this->getProps(), $item);
    }

    public function summarize(Announcement $item): array
    {
        return $this->mapByProperties($this->getSummaryProps(), $item);
    }

    public function mapMany(Enumerable $collection): Enumerable
    {
        $this->collection = $collection;
        return $collection->map(function ($item) {
            return $this->map($item);
        });
    }

    public function summarizeMany(Enumerable $collection): Enumerable
    {
        $this->collection = $collection;
        return $collection->map(function ($item) {
            return $this->summarize($item);
        });
    }

    /**
     * Map schema properties of an Announcement to an assoc array
     */
    protected function mapByProperties(array $props, Announcement $item): array
    {
        $output = [];

        ...

        return $this->withExtensions($output, $item);
    }
}
```

Create a new Map whenever you need to convert to a new output format.

```php
namespace PKP\announcement\maps;

class RSS
{
    /** @var DOMDocument */
    public $xml;

    public function map(Enumerable $announcements): DOMDocument
    {
        $this->xml = new DOMDocument('1.0');
        foreach ($announcements as $announcement) {
            $this->mapEach($announcement);
        }

        return $this->xml->saveXML();
    }

    protected function mapEach(Announcement $announcement): DOMDocument
    {
        $root = $this->xml->createElement('item');
        $title = $this->xml->createElement('title');
        $title->appendChild(
            $this->xml->createTextNode(
                $announcement->getLocalizedTitle()
            )
        );
        $root->appendChild($title);

        $root = $this->withExtensions($root, $announcement);

        $this->xml->appendChild($root);
    }
}
```

## Using Maps

Maps should always be loaded through the `MapContainer` class, which will permit maps to be extended by plugins. Use the `app('maps')` helper to load a map through the container.

```php
use PKP\announcements\maps\Schema;

$map = app('maps')->withExtensions(Schema::class);
```

Maps loaded in this way can be extended by plugins or any third-party code.

```php
use PKP\announcements\maps\Schema;

app('maps')->extend(Schema::class, function($output, Announcement $item, Schema $map) {
    // Add days since the announcement was posted
    $then = new DateTime($item->getData('datePosted'));
    $now = new DateTime();
    $output['daysSince'] = (int) $now->diff($then)->format('%a');

    return $output;
});
```

When writing a map, use the `withExtensions()` method to return the result for each item so that plugin extensions are applied.

```php
class ExampleMap
{
    public function map(Item $item)
    {
        $output = [$item->id];

        return $this->withExtensions($output, $item);
    }
}
```

A [Repository](./architecture-repositories.md) should provide a method to load any map related to its entity.

```php
namespace PKP\announcement;

class Repository
{
    /**
     * Get an instance of the map class for mapping
     * announcements to their schema
     */
    public function getSchemaMap(): maps\Schema
    {
        return app('maps')->withExtensions(maps\Schema::class);
    }
}
```

When available, use the [Repo facade](./architecture-repositories.md) to load and run maps.

```php
use APP\facades\Repo;

$json = Repo::announcement()
    ->getSchemaMap()
    ->map($announcement);
```

---

Learn more about the [database structure](./architecture-database).

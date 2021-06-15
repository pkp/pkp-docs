---
title: Entities - Technical Documentation - OJS|OMP|OPS
---

# Entities

An entity is any type of object in the application, such as a submission, review assignment or discussion. Each entity consists of several files which describe its properties, read and write objects to the data store, and map the objects to different formats.

The example below shows the files you will find for the `Publication` object.

```
├─┬ /classes
│ │
│ └─┬ /publication
│   │
│   ├─┬ /maps
│   │ │
│   │ └── Schema.php    # Map a publication object to its schema properties (Optional)
│   │
│   ├── DAO.php         # Read/write publications to the data store
│   │
│   ├── Collector.php   # Build queries to get a collection of publications (Optional)
│   │
│   ├── Publication.php # The DataObject class for publications
│   │
│   └── Repository.php  # A repository to interact with publications
│
└─┬ /schemas
  │
  └──  publication.json # A JSON schema that describes a publication object
```

This chapter will discuss the `DataObject` and schema. Other chapters cover the [DAOs/Collectors](./architecture-daos), [Maps](./architecture-maps), and [Repositories](./architecture-repositories).

## DataObject

Each entity has a `DataObject` class to work with objects in the application.

> `DataObject`s perform the role of `Model`s in the MVC (Model-View-Controller) application architecture.
{:.tip}

Use the repository to get a new object.

```php
use APP\facades\Repo;

$publication = Repo::publication()->newDataObject();

// $publication is an instance of PKP\classes\publication\Publication
```

Set data on an object.

```php
$publication->setData('copyrightYear', '2021');
```

Get data from an object.

```php
$copyrightYear = $publication->getData('copyrightYear');
```

Multilingual data stores unique values for each locale. Get the value for a specific locale.

```php
$title = $publication->getLocalizedData('title', 'en_US');
```

Omit the locale to get the value for the user's currently active locale, or to fall back to the default locale.

```php
$title = $publication->getLocalizedData('title');
```

> The default locale is usually the context's primary locale. However, data for a submission and related objects like authors and keywords will use the submission's locale as the default.
{:.notice}

Set localized data by passing all locales at once.

```php
$publication->setData('title', [
  "en_US" => "Traditions and Trends in the Study of the Commons",
  "fr_CA" => "Traditions et tendances de l'étude des biens communs",
]);
```

Or specify a locale code when you set the data.

```php
$journal->setData('title', 'Traditions and Trends in the Study of the Commons', 'en_US');
```

A `DataObject` class may add helper methods to return formatted data. For example, the `Issue` class provides a method that will return a string with the volume, number, year and title.

```php
$issue->setData('volume', 3);
$issue->setData('number', 2);
$issue->setData('year', 1983);
$issue->setData('title', 'Special Issue on Microorganisms', 'en_US');

echo $issue->getIssueIdentification();
// Vol 3 No 2 (1983) Special Issue on Microorganisms
```

A `DataObject` class should never access the database directly. If a helper method requires another object, it should be passed as an argument to the method.

```php
echo $publication->getAuthorString($authorUserGroups);
// D. Barnes (Author), C. Corino (Translator)
```

## Schema

Entities are defined by an extended version of [json-schema](http://json-schema.org/), a JSON syntax for documenting the properties of an object. The json-schema syntax is documented in [these examples](http://json-schema.org/learn/getting-started-step-by-step.html).

> JSON is similar to JavaScript, but uses a stricter syntax. Use [JSONLint](https://jsonlint.com/) to identify errors in your schema.
{:.tip}

A simple schema with two properties, `id` and `title`, would look like this.

```json
{
  "title": "Publication",
  "description": "A published version of a submission.",
  "properties": {
    "id": {
      "type": "integer",
      "readOnly": true
    },
    "title": {
      "type": "string"
    }
  }
}
```

Add a `multilingual` attribute to properties that store data in more than one locale.

```json
{
  ...
  "properties": {
    "title": {
      "type": "string",
      "multilingual": true
    }
  }
}
```

The application will support the expected property type for each enabled locale.

```json
{
  "title": {
    "en_US": "Traditions and Trends in the Study of the Commons",
    "fr_CA": "Traditions et tendances de l'étude des biens communs"
  }
}
```

When an entitiy has a property in one application but not the other, use two schema files with the same name.

`lib/pkp/schemas/context.json`

```json
{
	"title": "Context",
	"description": "A journal, press or preprint server.",
	"type": "object",
	"properties": {
		"about": {
			"type": "string",
			"multilingual": true
    }
  }
}
```

`schemas/context.json`

```json
{
	"title": "Journal",
	"description": "A journal.",
	"properties": {
		"abbreviation": {
			"type": "string",
			"multilingual": true
    }
  }
}
```

We use a modified and extended version of the `json-schema` syntax. The following table describes these differences.

| Attribute | Description |
| --- | --- |
| `apiSummary` | Use this attribute for properties that should appear in summary views of the object. The summary view is usually used in API endpoints that return a list of objects. |
| `date-iso` | Use this property type instead of the standard `date` type supported by `json-schema`. This format, `YYYY-MM-DD`, more strictly matches how we use dates. |
| `date-time-iso` | Use this property type instead of the standard `date-time` type supported by `json-schema`. This format, `YYYY-MM-DD HH:MM:SS`, more strictly matches how we use datetimes. |
| `defaultLocaleKey` | Use this attribute instead of the `default` attribute when a property's default value must be localized. The value should match a locale key. |
| `multilingual` | Use this attribute for properties that store data in more than one locale. |
| `readOnly` | Use this attribute for properties that can not be edited, such as IDs and URLs. |
| `validation` | Use this attribute to validate properties before an object is saved. We do not support the standard json-schema validaton rules. See [Validation](./utilities-validation). |
| `writeOnly` | Use this attribute for properties that may be accepted when an object is added or edited, but will not be returned when the object is requested. This is used, for example, with the `temporaryFileId` property that is used to save a file but discarded after the file is saved. |

---

Learn how to read and write objects to the data store with a [DAO](./architecture-daos).
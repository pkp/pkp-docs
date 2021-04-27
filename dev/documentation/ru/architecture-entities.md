---
title: Entities - Technical Documentation - OJS|OMP|OPS
---

# Entities

An entity is any type of object in the application, such as a submission, review assignment, discussion or file.

Each entity is described in a schema file and is represented in the application with the following:

- A `DataObject` [class](#dataobject-class) for instantiating objects of this entity.
- A [Service](./architecture-services), like `SubmissionService`, to get, validate, add, edit and delete these objects.
- A [Data Access Object](#schemadao), like `SubmissionDAO`, to communicate between the objects and the database.
- A json [schema](#schemas) which defines the properties, defaults and validation rules for these objects.
- An [APIHandler](./architecture-handlers), like `SubmissionHandler`, which serves a REST API endpoint for these objects.

## DataObject class

A `DataObject` class offers a simple API to get and set data for an object.

> **Tip:** `DataObject`s perform the role of `Model`s in the MVC (Model-View-Controller) application architecture. 
> 
> {:.tip}

Create a new object.

```php
import('classes.journal.Journal');
$journal = new Journal();
```

Set data on an object.

```php
$journal->setData('enabled', true);
```

Get data from an object.

```php
$isEnabled = $journal->getData('enabled');
```

Some data is multilingual and stores values for each locale. Pass a locale code to get a localized value.

```php
$name = $journal->getLocalizedData('name', 'en_US');
```

When you omit the locale parameter it will return the value for the currently active locale or fall back to the journal's primary locale.

```php
$name = $journal->getLocalizedData('name');
```

> The `Submission` object works differently. It will fall back to the submission's locale, not the journal's primary locale. 
> 
> {:.notice}

Set localized data by passing all locales at once.

```php
$name = $journal->setData('name', [
    'en_US' => 'Journal of Public Knowledge',
    'fr_CA' => 'Journal de la connaissance du public',
  ]);
```

Or specify a locale code when you set the data.

```php
$name = $journal->setData('name', 'Journal of Public Knowledge', 'en_US');
```

### Helpers

A `DataObject` class may contain additional helper methods to compile or format the requested data. For example, the `Issue` class provides a method that will return a string with the volume, number, year and title.

```php
$issue->setData('volume', 3);
$issue->setData('number', 2);
$issue->setData('year', 1983);
$issue->setData('title', 'Special Issue on Microorganisms', 'en_US');

echo $issue->getIssueIdentification();
// Vol 3 No 2 (1983) Special Issue on Microorganisms
```

### Don't access the database

A `DataObject` class should never access the database directly. If a helper method requires another object, it should be passed as a parameter to the method.

## Schemas

Entities are defined using an extended version of [json-schema](http://json-schema.org/), a JSON syntax for documenting the properties of an object.

A simple schema with two properties, `id` and `title`, would look like this.

```json
{
  "title": "ExampleObject",
  "description": "An example object demonstrating a schema.",
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

The json-schema syntax is documented in [these examples](http://json-schema.org/learn/getting-started-step-by-step.html).

> **Tip:** JSON is a stricter syntax than JavaScript. Use [JSONLint](https://jsonlint.com/) to identify errors in your schema. 
> 
> {:.tip}

### Schema extensions

The section below documents how we have modified or extended the json-schema syntax to suit our needs.

#### Date and time formats

We do not use json-schema's `date` and `date-time` formats. Instead, we use `date-iso` (`YYYY-MM-DD`) and `date-time-iso` (`YYYY-MM-DD HH:MM:SS`) to more strictly match our own date/time handling.

#### readOnly

Assign this attribute to properties that can not be edited, such as object IDs and URLs.

#### writeOnly

Assign this attribute to properties that are used when adding or editing an object but will not be returned when requesting the object.

An example of this attribute is the `temporaryFileId` that is used to save a file but then discarded.

#### apiSummary

Assign this attribute to properties that you want to appear in summary views of the object. The summary view is usually used in endpoints that return a list of objects.

#### defaultLocaleKey

Assign this attribute when the property's default value must be localized. The value should match a locale key.

#### validation

Assign this attribute to properties that should be validated before being saved to the database. We do not support json-schema's standard validation rules. See [Validation](./utilities-validation).

#### multilingual

Assign this property to data that can be in more than one locale.

```json
{
  ...
  "properties": {
    "about": {
      "type": "string",
      "multilingual": true
    }
  }
}
```

The application will expect to interact with this property as though it were a locale object.

```json
{
  "en_US": "About the journal...",
  "fr_CA": "A propos du journal ..."
}
```

Any validation rules will be applied to each locale value in the set.

> Data described as an object in json-schema is expected to be an associative array in PHP. 
> 
> {:.warning}

### App properties

When a property should be added to an entity in one application but not another, use two schema files with the same name.

`lib/pkp/schemas/context.json`

```json
{
    "title": "Context",
    "description": "A journal or press.",
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

These schema files will be merged to produce a combined schema. When identical properties exist, the application's schema will override the library's schema.

## SchemaDAO

When an entity has a schema, it's [DAO](./architecture-database) should extend the `SchemaDAO` class. This class will use the schema file to ensure that data being read from and written to the database conforms to the schema.

## API Documentation

The schema files are used to generate the [API documentation](/dev/api).

## Extending Schemas

Hooks can be used to add, edit or remove properties of an entity.

Add an `institutionalHome` property to the `Context` entity.

```php
HookRegistry::register('Schema::get::context', function($hookName, $args) {
    $schema = $args[0];
    $schema->properties->institutionalHome = (object) [
        'type' => 'string',
        'apiSummary' => true,
        'multilingual' => true,
        'validation' => ['nullable']
    ];

    return false;
});
```

Require a journal acronym to be 3 characters or less.

```php
HookRegistry::register('Schema::get::context', function($hookName, $args) {
    $schema = $args[0];
  if (!property_exists($schema->properties, 'acronym')) {
    return;
  }
    $schema->properties->acronym->validation = ['max:3'];

    return false;
});
```

If your code will be included in the application, it is better to add the property directly to the schema.

---

Learn more about [how entities are stored in the database](./architecture-database).
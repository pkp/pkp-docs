---
book: dev-documentation
version: 3.4
title: Validation - Technical Documentation - OJS|OMP|OPS
---

# Validation

Data can be validated using the [entity schemas](./architecture-entities#schemas) or the `ValidatorFactory`. In both cases, we use Laravel's [Validation](https://laravel.com/docs/5.5/validation) library.

> All of Laravel's [validation rules](https://laravel.com/docs/5.5/validation#available-validation-rules) are supported except the `exist` rule. 
> 
> {:.notice}

## ValidatorFactory

The `ValidatorFactory` class is a wrapper for Laravel's [Validator](https://laravel.com/docs/5.5/validation). It mimics Laravel's `make` method to create a validator.

```php
use PKP\validation\ValidatorFactory;

$validator = ValidatorFactory::make($props, $rules);
```

Run the validator and retrieve errors.

```php
if ($validator->fails()) {
  $errors = $validator->errors();
}
```

Validate a single value.

```php
use PKP\validation\ValidatorFactory;

$props = ['contactEmail' => $userEmail];
$rules = ['contactEmail' => ['email_or_localhost']];
$validator = ValidatorFactory::make($props, $rules);
```

Or validate more than one value at a time.

```php
use PKP\validation\ValidatorFactory;

$props = [
    'contactEmail' => $userEmail,
    'contactUsername' => $userName,
];
$rules = [
    'contactEmail' => ['email_or_localhost'],
    'contactUsername' => ['alpha_num'],
];
$validator = ValidatorFactory::make($props, $rules);
```

The validator will return helpful errors when a value does not validate. If you want, you can customize these messages by passing an additional argument.

```php
use PKP\validation\ValidatorFactory;

$props = ['contactUsername' => $userName];
$rules = ['contactUsername' => ['min:6', 'alpha_num']];
$messages = ['contactUsername.min' => 'The journal contact username must be at least 6 characters.'];
$validator = ValidatorFactory::make($props, $rules, $messages);
```

## Schema Validation

Validation rules can be defined in an entity's [schema](./architecture-entities#schemas). In this example, the `numAnnouncementsHomepage` must be an integer that is not negative.

```json
{
  "numAnnouncementsHomepage": {
    "type": "integer",
    "validation": [
      "nullable",
      "min:0"
    ]
  }
}
```

These rules will be applied when the entity's [Repository](./architecture-repositories) validates user input that contains a `numAnnouncementsHomepage` prop. See the [Repository Validation](#repository-validation) section below.

Every property that can be empty or null must have the `nullable` validation rule assigned, or it will throw an error when it is empty.

```json
{
  "mailingAddress": {
    "type": "string",
    "validation": [
      "nullable"
    ]
  }
}
```

> You never need to add the `array`, `boolean`, `integer` or `string` validation rules. These will be applied automatically based on the `type` property. 
> 
> {:.notice}

## Repository Validation

An entity's [Repository](./architecture-repositories) should implement a `validate` method which validates props against the schema. Use the `SchemaService` to access helper methods for working with the schema.

```php
namespace PKP\context;

use PKP\context\Context;
use PKP\services\PKPSchemaService;
use PKP\validation\ValidatorFactory;

class Repository
{
    protected PKPSchemaService $schemaService;

    public function __construct(PKPSchemaService $schemaService)
    {
        $this->schemaService = $schemaService;
    }

    public function validate(?Context $context, array $props, array $allowedLocales, string $primaryLocale): array
    {
        $errors = [];

        // Validate the $props against the entity's
        // schema file
        $validator = ValidatorFactory::make(
            $props,
            $this->schemaService->getValidationRules(PKPSchemaService::SCHEMA_CONTEXT, $allowedLocales)
        );

        // Validate the $props against the required fields
        // in the entity's schema file
        ValidatorFactory::required(
            $validator,
            $submission,
            $this->schemaService->getRequiredProps(PKPSchemaService::SCHEMA_CONTEXT),
            $this->schemaService->getMultilingualProps(PKPSchemaService::SCHEMA_CONTEXT),
            $primaryLocale,
            $allowedLocales
        );

        // Validate the $props against the locales supported
        // by this context.
        ValidatorFactory::allowedLocales(
            $validator,
            $this->schemaService->getMultilingualProps(SCHEMA_CONTEXT),
            $allowedLocales
        );
    }
}
```

Some validation rules can not be described in the schema. This is the case when validation requires checking the database. For example, a context can not have a `urlPath` if another context exists with that `urlPath`.

In such cases, the [Repository's](./architecture-repositories) `validate` method should be used to extend the validation check.

```php
namespace PKP\context;

use PKP\context\Context;
use PKP\services\PKPSchemaService;
use PKP\validation\ValidatorFactory;

class Repository
{
    protected PKPSchemaService $schemaService;

    public function __construct(PKPSchemaService $schemaService)
    {
        $this->schemaService = $schemaService;
    }

    public function validate(?Context $context, array $props, array $allowedLocales, string $primaryLocale): array
    {
        $errors = [];

        $validator = ValidatorFactory::make(
            $props,
            $this->schemaService->getValidationRules(PKPSchemaService::SCHEMA_CONTEXT, $allowedLocales)
        );

        ...

        // Ensure that a urlPath, if provided, does not already exist
        $validator->after(function($validator) use ($action, $props) {
            if (isset($props['urlPath']) && !$validator->errors()->get('urlPath')) {
                if (/* urlPath is duplicate */) {
                    $validator->errors()->add('urlPath', __('admin.contexts.form.pathExists'));
                }
            }
        });

        ...

        if ($validator->fails()) {
            $errors = $this->schemaService->formatValidationErrors($validator->errors());
        }

        return $errors;
    }
}
```

## Custom Rules

OJS and OMP have added the following custom validation rules.

| Rule                 | Description                                                         |
| -------------------- | ------------------------------------------------------------------- |
| `email_or_localhost` | Extends Laravel's `email` validation to accept emails `@localhost`. |
| `issn`               | Require a valid [ISSN](https://www.issn.org/).                      |
| `orcid`              | Require a valid [ORCID](https://orcid.org/).                        |
| `currency`           | Require a valid currency code.                                      |

These rules can be applied in the schema.

```json
{
  "onlineIssn": {
    "type": "string",
    "validation": [
      "nullable",
      "issn"
    ]
  }
}
```

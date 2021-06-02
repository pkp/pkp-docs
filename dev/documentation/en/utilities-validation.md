---
title: Validation - Technical Documentation - OJS|OMP|OPS
---

# Validation

Data can be validated using the [entity schemas](./architecture-entities#schemas) or the `ValidatorFactory`. In both cases, we use Laravel's [Validation](https://laravel.com/docs/5.5/validation) library.

> All of Laravel's [validation rules](https://laravel.com/docs/5.5/validation#available-validation-rules) are supported except the `exist` rule.
{:.notice}

## ValidatorFactory

The `ValidatorFactory` class is a wrapper for Laravel's [Validator](https://laravel.com/docs/5.5/validation). It mimics Laravel's `make` method to create a validator.

```php
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
$props = ['contactEmail' => $userEmail];
$rules = ['contactEmail' => ['email_or_localhost']];
$validator = ValidatorFactory::make($props, $rules);
```

Or validate more than one value at a time.

```php
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
{:.notice}

## Repository Validation

An entity's [Repository](./architecture-repositories) should implement a `validate` method which validates props against the schema. Use the `SchemaService` to access helper methods for working with the schema.

```php
namespace PKP\context;

use PKP\services\PKPSchemaService;
use PKP\validation\ValidatorFactory;

class Repository {

  /** @var PKPSchemaService $schemaService */
  protected $schemaService;

  public function __construct(PKPSchemaService $schemaService)
  {
    $this->schemaService = $schemaService;
  }

  public function validate(?Context $context, array $props, array $allowedLocales, string $primaryLocale): array
  {
    $validator = ValidatorFactory::make(
      $props,
      $this->schemaService->getValidationRules(PKPSchemaService::SCHEMA_CONTEXT, $allowedLocales)
    );
  }
}
```

The `SchemaService` includes a helper method to validate required fields.

```php
ValidatorFactory::required(
  $validator,
  $submission,
  $this->schemaService->getRequiredProps(PKPSchemaService::SCHEMA_CONTEXT),
  $this->schemaService->getMultilingualProps(PKPSchemaService::SCHEMA_CONTEXT),
  $primaryLocale,
  $allowedLocales
);
```

The `allowedLocales` helper method will throw an error if values are provided for any locales which are not supported by the journal or press.

```php
ValidatorFactory::allowedLocales(
  $validator,
  $this->schemaService->getMultilingualProps(SCHEMA_CONTEXT),
  $allowedLocales
);
```

Some validation rules can not be described in the schema. This is the case when validation requires checking the database. For example, a context can not have a `urlPath` if another context exists with that `urlPath`.

In such cases, the [Repository's](./architecture-repositories) `validate` method should be used to extend the validation check.

```php
public function validate(?Context $context, array $props, array $allowedLocales, string $primaryLocale): array
{
  $validator = ValidatorFactory::make(
    $props,
    $this->schemaService->getValidationRules(PKPSchemaService::SCHEMA_CONTEXT, $allowedLocales)
  );

  ...

  // Ensure that a urlPath, if provided, does not already exist
  $validator->after(function($validator) use ($action, $props) {
    if (isset($props['urlPath']) && !$validator->errors()->get('urlPath')) {
      $contextDao = Application::getContextDAO();
      $contextWithPath = $contextDao->getByPath($props['urlPath']);
      if ($contextWithPath) {
        if (!(!is_null($context) && isset($props['id'])
            && (int) $contextWithPath->getId() === $props['id'])) {
          $validator->errors()->add('urlPath', __('admin.contexts.form.pathExists'));
        }
      }
    }
  });

  ...

  if ($validator->fails()) {
    ...
  }
}
```

## Custom Rules

OJS and OMP have added the following custom validation rules.

| Rule | Description |
| --- | --- |
| `email_or_localhost` | Extends Laravel's `email` validation to accept emails `@localhost`. |
| `issn` | Require a valid [ISSN](https://www.issn.org/). |
| `orcid` | Require a valid [ORCID](https://orcid.org/). |
| `currency` | Require a valid currency code. |

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

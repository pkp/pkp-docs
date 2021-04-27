---
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

These rules will be applied when the entity's [Service](./architecture-services) class validates user input that contains a `numAnnouncementsHomepage` prop. See the [Service Validation](#service-validation) section below.

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

## Service Validation

An entity's [Service](./architecture-services) class should implement a `validate` method which validates props against the schema. Use the `SchemaService` to access helper methods for working with the schema.

```php
class PKPContextService implements EntityWriteInterface {
    /**
     * @copydoc \PKP\Services\EntityProperties\EntityWriteInterface::validate()
     */
    public function validate($action, $props, $allowedLocales, $primaryLocale) {
        $schemaService = Services::get('schema');
        import('lib.pkp.classes.validation.ValidatorFactory');
        $validator = \ValidatorFactory::make(
            $props,
      $schemaService->getValidationRules(SCHEMA_CONTEXT, $allowedLocales)
    );
  }
}
```

The `SchemaService` includes a helper method to validate required fields.

```php
if ($action === VALIDATE_ACTION_ADD) {
  \ValidatorFactory::required(
    $validator,
    $schemaService->getRequiredProps(SCHEMA_CONTEXT),
    $schemaService->getMultilingualProps(SCHEMA_CONTEXT),
    $primaryLocale
  );
}
```

The `allowedLocales` helper method will throw an error if values are provided for any locales which are not supported by the journal or press.

```php
\ValidatorFactory::allowedLocales(
  $validator,
  $schemaService->getMultilingualProps(SCHEMA_CONTEXT),
  $allowedLocales
);
```

The `requirePrimaryLocale` helper method will validate props that should be required in the primary locale, but not required in other locales.


```php
// Require a journal name to be provided in the primary locale
\ValidatorFactory::requirePrimaryLocale(
  $validator,
  ['name'],
  $props,
  $allowedLocales,
  $primaryLocale
);
```

Some validation rules can not be described in the schema. This is the case when validation requires checking the database. For example, a context can not have a `urlPath` if another context exists with that `urlPath`.

In such cases, the [Service](./architecture-services) class's `validate` method should be used to extend the validation check.

```php
function validate($action, $props, $allowedLocales, $primaryLocale) {
  $schemaService = Services::get('schema');
  import('lib.pkp.classes.validation.ValidatorFactory');
  $validator = \ValidatorFactory::make(
    $props,
    $schemaService->getValidationRules(SCHEMA_CONTEXT, $allowedLocales)
  );

  ...

  // Ensure that a urlPath, if provided, does not already exist
  $validator->after(function($validator) use ($action, $props) {
    if (isset($props['urlPath']) && !$validator->errors()->get('urlPath')) {
      $contextDao = Application::getContextDAO();
      $contextWithPath = $contextDao->getByPath($props['urlPath']);
      if ($contextWithPath) {
        if (!($action === VALIDATE_ACTION_EDIT
            && isset($props['id'])
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

OJS and OMP have added custom validation rules for ISSNs, ORCIDs and more. These rules can be applied in the schema.

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

The following rules have been added:

- `email_or_localhost` - Extends Laravel's `email` validation to accept emails `@localhost`.
- `issn` - Require a valid [ISSN](https://www.issn.org/).
- `orcid` - Require a valid [ORCID](https://orcid.org/).
- `currency` - Require a valid currency code.

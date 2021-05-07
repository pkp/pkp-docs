---
title: Email Templates - Technical Documentation - OJS|OMP|OPS
---

# Email Templates

Email templates mix customized, editable data with fixed defaults. For this reason, the behavior of the `EmailTemplateService` differs from other entity service classes. This section describes some of the differences.

## Use keys instead of ids

Default email templates do not have ids. Instead, get an email template by its key.

```php
$emailTemplate = Services::get('emailTemplate')->getByKey($contextId, $key);
```

## Default and custom templates

Default templates are installed when the application is created or a new locale is added. These templates are used during the workflow and other planned events in the application.

Default templates can not be deleted, but some of them can be edited or disabled. Check the `canEdit` and `canDisable` properties.

Custom templates are created by the end-user. They are not automatically used by the application. They can be deleted.

## Default template data

Default templates include data that can not be edited and is not available to custom templates. These properties include `canDisable`, `canEdit`, `fromRoleId` and `toRoleId`.

When this data is not available, the values will be returned as `null`.

## Custom template data

Custom templates can be distinguished from default templates by the `id` property. The `id` property will be `null` for all other templates.

## Delete and reset templates

A custom email template can be deleted using the `delete` method of the service class.

```
Services::get('emailTemplate')->delete($emailTemplate);
```

When a default template is deleted in this way, only the custom modifications will be deleted. The default data will remain. In this way, the `delete` method will "reset" a default template.

## Enabled by default

Email templates are considered `enabled` even if the property is `NULL` in the database. Any code that searches the database on that column should treat `NULL` values as `true`.

When you are working with an `EmailTemplate` object you should have accurate data because the property is transformed to `true`/`false` when it is retrieved from the database.

## All languages required

Because email templates may be used with any user's current locale, all languages are required for the `subject` and `body` fields. An email template can not be added without entries for all locales active in the context UI.
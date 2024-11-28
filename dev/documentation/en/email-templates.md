---
book: dev-documentation
version: 3.4
title: Email Templates - Technical Documentation - OJS|OMP|OPS
---

# Email Templates

Email templates mix customized, editable data with fixed defaults. For this reason, the email template [repository](./architecture-repositories) works differently from other entity repositories. This section describes some of the differences.

## Use keys instead of ids

Default email templates do not have ids. Instead, each email template has a key. The keys of default email templates can be found in `emailTemplates.xml`. The keys of custom email templates are generated from the name.

Get an email template by its key.

```php
use APP\facades\Repo;

$emailTemplate = Repo::emailTemplate()->getByKey($contextId, $key);
```

## Always use a context id

Each email template is specific to the journal, press or context. It is not possible to get all email templates for all contexts. Always pass the context id to the `Collector`.

```php
$collector = Repo::emailTemplate()->getCollector($contextId);
```


## Mailables

Every [Mailable](./utilities-email.md) defines the email template it will use by default. Use that property to get the email template related to a `Mailable`.

```php
use APP\facades\Repo;
use PKP\mail\mailables\DiscussionCopyediting;

$emailTemplate = Repo::emailTemplate()
    ->getByKey(
        $contextId,
        DiscussionCopyediting::getEmailTemplateKey()
    );
```

Some mailables support multiple templates. For example, when the application loads the form for creating a discussion in the copyediting stage, it loads all email templates assigned to the `PKP\mail\mailables\DiscussionCopyediting` mailable.

Determine if a `Mailable` supports multiple templates.

```php
use PKP\mail\mailables\DiscussionCopyediting;

if (DiscussionCopyediting::getSupportsTemplates()) {
    /* supports multiple templates */
}
```

Get all email templates related to that mailable.

```php
use APP\facades\Repo;
use PKP\mail\mailables\DiscussionCopyediting;

$emailTemplates = Repo::emailTemplate()
    ->getCollector($contextId)
    ->alternateTo(
        [DiscussionCopyediting::getEmailTemplateKey()]
    )
    ->getMany();
```

When a custom template is created, it can be assigned to a mailable by setting it's `alternateTo` property to the default email key of the `Mailable`.

```php
use APP\facades\Repo;
use PKP\mail\mailables\DiscussionCopyediting;

$props = [
    'body' => $body,
    'contextId' => $contextId,
    'name' => $name,
    'subject' => $subject,
    'alternateTo' => DiscussionCopyediting::getEmailTemplateKey(),
];

$errors = Repo::emailTemplate()->validate(
    null,
    $props,
    $context
);

if (empty($errors)) {
    $emailTemplate = Repo:emailTemplate()->newDataObject($props);
    $key = Repo::emailTemplate()->add($emailTemplate);
}
```

## Default template data

Default templates are described in `emailTemplates.xml`. These templates are installed when the application is installed or a new locale is added.

These templates can not be edited or deleted. However, each context can override the default data with a custom template. When an email template is fetched from the database, it returns the context's custom template. If it doesn't find one, it falls back to the default template.

Only the overriden templates will be deleted when a context is deleted or has its email templates reset. The default data will remain.

When using the email templates repository, no extra consideration is required to fetch the correct email template. The repository's `delete` method will only delete custom data.

## Template access restrictions

Version 3.6 of OJS, OMP, and OPS allows Admins and managers to restrict email templates to specific user groups within a Context. By default, templates are open to all user groups, similar to previous versions.

Before displaying an email template to a user, you should check if the template is accessible to that user's user group.

```php
use APP\facades\Repo;

$emailTemplate = Repo::emailTemplate()->getByKey($contextId, $emailTemplateKey());

return Repo::emailTemplate()->isTemplateAccessibleToUser($user, $emailTemplate, $contextId) ? $emailTemplate : null;
```

You can also assign user groups to a template.

```php
Repo::emailTemplate()->setEmailTemplateAccess($emailTemplate, $contextId, $userGroupIds);
```

*Note: the values passed in `$userGroupIds` will overwrite the existing groups assigned to the template.*

You can make a template unrestricted, thus opened to all user groups.

```php
$isUnrestricted = true;

Repo::emailTemplate()->setEmailTemplateAccess($emailTemplate, $contextId, null, $isUnrestricted);
```

If you have a list of templates, you can filter it to include only those accessible to the user.

```php
$collector = Repo::emailTemplate()->getCollector($contextId)->getMany();

$emailTemplates = Repo::emailTemplate()->filterTemplatesByUserAccess($collector, $user, $contextId);
```

### Configuring Email Template Access in emailTemplates.xml

When describing the data for email templates in `emailTemplates.xml`, you can specify if a template should be unrestricted by default using the `isUnrestricted` attribute.

```xml
<email key="EXAMPLE_TEMPLATE" name="mailable.example.name" subject="emails.example.subject" body="emails.example.body" isUnrestricted="1"/>
```

In the above example, the email template is marked as unrestricted - available to all user groups. You can also mark a template as restricted by using `isUnrestricted="0"`. Restricted templates will only become accessible after being assigned to a user group or marked as unrestricted.

If the `isUnrestricted` attribute is omitted, the template will be treated as unrestricted by default.

```xml
<email key="EXAMPLE_TEMPLATE" name="mailable.example.name" subject="emails.example.subject" body="emails.example.body" />
```

The email template in the above template will be marked as unrestricted when installed.

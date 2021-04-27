# Sending Email Messages

The following classes, along with the `EmailTemplate` and `MailTemplate` model classes and `EmailTemplateDAO` DAO class, provide all email functionality used in the system:

- `classes/mail/Mail.inc.php`
- `classes/mail/MailTemplate.inc.php`
- `classes/mail/ArticleMailTemplate.inc.php`

`Mail.inc.php` provides the basic functionality for composing, addressing, and sending an email message. It is extended by the class `MailTemplate` to add support for template-based messages. In turn, `ArticleMailTemplate` adds features that are useful for messages pertaining to a specific article, such as message logging that can be viewed on a per-article basis.

For a sample of typical usage and invocation code, see the various Action classes, such as `SectionEditorAction`'s `notifyReviewer` method. Note that since nearly all emails composed by the system must be displayed to the user, who then must be able to modify it over several browser request-response cycles, some complexity is necessary to maintain the system's state between requests.


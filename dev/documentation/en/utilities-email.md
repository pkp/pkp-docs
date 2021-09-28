---
title: Email - Technical Documentation - OJS|OMP|OPS
---

# Email

Emails are sent with an adapted version of Laravel's [Mailables](https://laravel.com/docs/8.x/mail) class. `PKP\mail\Mailable` extends this class to add support for application requirements such as envelope senders, DMARC compliance, and [Email Templates](email-templates).

In its simplest form, you can use the Mailable class to compose and send an email.

```php
use Illuminate\Support\Facades\Mail;
use PKP\mail\Mailable;

$mailable = new Mailable();
$mailable->from('nate@example.com')
    ->to('vitaliy@example.com')
    ->subject('New submission')
    ->body('A new submission is ready for review.');

Mail::send($mailable);
```

## Mailables

Most emails sent by the application make use of [Email Templates](email-templates) that can be customized for each journal, press or preprint server. To make use of email templates, create a new Mailable for each email.

```php
namespace PKP\mail\mailables;

use PKP\mail\Mailable;

class SubmissionReceived extends Mailable
{
    /** A custom key for the associated email template */
    public const EMAIL_KEY = 'SUBMISSION_RECEIVED';

    /**
     * One or more of the GROUP_ constants
     *
     * This is used to group email messages together in the UI
     * where an editor will find and modify the email templates
     * used in their journal.
     */
    protected static array $groupIds = [
        self::GROUP_SUBMISSION,
    ];

    public function __construct()
    {
        parent::__construct(func_get_args());
    }
}
```

Use the Mailable to compose and send the email.

```php
use APP\facades\Repo;
use Illuminate\Support\Facades\Mail;
use PKP\mail\mailables\SubmissionReceived;

$emailTemplate = Repo::emailTemplates()->getByKey(
    $context->getId(),
    SubmissionReceived::EMAIL_KEY
);

$mailable = new SubmissionReceived($context, $submission);
$mailable->from('nate@example.com')
    ->to('vitaliy@example.com')
    ->subject($emailTemplate->getLocalizedData('subject'))
    ->body($emailTemplate->getLocalizedData('body'));

Mail::send($mailable);
```

## Variables

Most [Email Templates](email-templates) make use of variables. For example, the body of an email template may use the following:

```
Thank you for your submission to {$journalName}.
```

The journal's name would be inserted when the email is sent.

```
Thank you for your submission to Journal of Public Knowledge.
```

Pass dependencies to a Mailable's constructor to define the variables that can be used in the email.

```php
namespace PKP\mail\mailables;

use PKP\context\Context;
use PKP\mail\Mailable;
use PKP\submission\Submission;

class SubmissionReceived extends Mailable
{
    /** ... */

    public function __construct(Context $context, Submission $submission)
    {
        parent::__construct(func_get_args());
    }
}
```

A description of the supported variables is automatically derived from the dependencies passed to the constructor.

```php
use PKP\mail\mailables\SubmissionReceived;

$variables = SubmissionReceived::getVariables();

// [
//     'journalName' => 'Journal of Public Knowledge',
//     'journalUrl' => 'https://journal.com',
//     'submissionTitle' => 'Yam diseases and its management in Nigeria',
//     'submissionUrl' => 'https://journal.com/workflow/access/15',
//     ...
// ];
```

Use the variables in an email's subject and body.

```php
use APP\facades\Repo;
use Illuminate\Support\Facades\Mail;
use PKP\mail\mailables\SubmissionReceived;

$subject = 'New submission to {$journalName}';
$body = 'A new submission is ready to review: {$submissionTitle}.';

$mailable = new SubmissionReceived($context, $submission);
$mailable->from('nate@example.com')
    ->to('vitaliy@example.com')
    ->subject($subject)
    ->body($body);

Mail::send($mailable);
```

All variables assigned to a Mailable can be retrieved from the `viewData` property.

```php
use PKP\mail\mailables\SubmissionReceived;

$mailable = new SubmissionReceived($context, $submission);
echo $mailable->viewData['journalName'];

// outputs: Journal of Public Knowledge
```

Not all objects passed to a Mailable's constructor will produce email variables. The supported classes are defined at `Mailable::templateVariablesMap()`.

### Sender and Recipients

Mailables provide common variables for the sender and recipients, such as `{$senderName}` and `{$recipientsName}`. Add the `Sender` or `Recipient` traits to a Mailable class to use these variables.

```php
namespace PKP\mail\mailables;

use PKP\mail\Mailable;
use PKP\mail\mailables\Recipient;
use PKP\mail\mailables\Sender;

class SubmissionReceived extends Mailable
{
    use Recipient;
    use Sender;

    /* ... */
}
```

Use the `setRecipients()` and `setSender()` methods instead of the `from()` and `to()` methods.

```php
use APP\facades\Repo;
use Illuminate\Support\Facades\Mail;
use PKP\mail\mailables\SubmissionReceived;

$recipients = Repo::users()->getMany($collector);

$mailable = new SubmissionReceived($context, $submission);
$mailable->setSender($request->getUser())
    ->setRecipients($recipients)
    ->subject($subject)
    ->body($body);

Mail::send($mailable);
```

### Custom Variables

A Mailable may require variables that can not be generated automatically from the dependencies defined in the constructor. These variables can be passed to the Mailable before it is sent.

```php
use Illuminate\Support\Facades\Mail;
use PKP\mail\mailables\SubmissionReceived;

$mailable = new SubmissionReceived($context, $submission);

$mailable->addVariables([
        'section' => $section->getLocalizedTitle(),
    ])
    ->setSender($request->getUser())
    ->setRecipients($recipients)
    ->subject($subject)
    ->body('A submission was made to {$section}.');

Mail::send($mailable);
```

Variables added in this way need to be added to the Mailable class, so that an editor will know this variable can be used when they customize the email template.

```php
namespace PKP\mail\mailables;

use PKP\mail\Mailable;
use PKP\mail\mailables\Recipient;
use PKP\mail\mailables\Sender;

class SubmissionReceived extends Mailable
{
    /* ... */

    public const VARIABLE_SECTION = 'section';

    /**
     * Extend the getVariables method to add the
     * variable with a localized description of
     * it's value.
     */
    public static function getVariables(): array
    {
        $variables = parent::getVariables();
        $variables[
            self::VARIABLE_SECTION => __('submission.received.section.description'),
        ];
        return $variables;
    }
}
```

## Mailer and MailServiceProvider

The Mailer is configured by the `MailServiceProvider` with support for the sendmail, SMTP and log transports. The Mailer can be extended to  send email through Mailgun, Postmark, Amazon's SES or other transports. See the [Laravel documentation](https://laravel.com/docs/8.x/mail#configuration).

The mailer can be retrieved with a helper function.

```php
$mailer = app('mailer');
```

## Unsupported Features

Some of the features supported by Laravel's [Mailable](https://laravel.com/docs/8.x/mail) class are not supported in this application. Please consider the following when working with mailables.

- Laravel's email localization tools are not supported.
- Do not configure email headers from within the Mailable. Email headers are managed for all outgoing email to ensure compliance with the `envelope_sender` and DMARC configuration options.
- Markdown and Blade templates are not supported. Use the email template variables described above.
- When inspecting `Mailable::$viewData`, the `message` key will appear but this is not a template variable that will be rendered when the email is sent. It is used internally.
- The Illuminate library's `View` class is not used. Use the methods `Mailable::subject()` and `Mailable::body()` to configure the message.

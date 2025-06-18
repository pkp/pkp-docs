---
title: Email - Advanced Configuration - Admin Guide - PKP Developer Docs
description: Recommendations for configuring a reliable email server for Open Journal Systems (OJS), Open Monograph Press (OPS) or Open Preprint Systems (OPS).
book: admin-guide
version: 3.4
---

# Email Configuration

> Most hosting services will provide a configured email server. If you are unsure, contact your hosting provider to learn what they are able to offer.
{:.notice}

This section describes the requirements for a properly configured email server and discusses some of the configuration options for sending email with OJS, OMP and OPS. If you know what you're doing, you may prefer to follow the quick setup instructions in our [configuration guide](/admin-guide/en/deploy#email-server).

## SPF

Your domain must be configured according to the [SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework) protocol. To comply with this protocol, your domain's DNS zone must include an appropriate `TXT` record. For example, if the application is hosted at `https://my-journals.com`, the domain `my-journals.com` must have a `TXT` record in it's DNS zone.

Your hosting service should provide instructions on how to add the `TXT` record.

## DMARC

To comply with the the [DMARC](https://en.wikipedia.org/wiki/Sender_Policy_Framework) framework, the application must be configured with an envelope sender. The envelope sender is an email address that the server has permission to send as. For example, if the application is hosted at https://my-journals.com, the envelope sender should be an email address `@my-journals.com`.

When a user signs up to the application with the email address `example@gmail.com`, your email server does not have permission to send  as `example@gmail.com`. The envelope sender acts as the "true" sender, and the email is sent "on behalf of" `example@gmail.com`.

To configure the envelope sender, edit the following settings in the application's `config.inc.php` file:

```
allow_envelope_sender = On
default_envelope_sender = <email>
force_default_envelope_sender = On
force_dmarc_compliant_from = On
```

The application uses these settings to reconfigure the `FROM` and `REPLY-TO` headers in all emails it sends.

## Sendmail vs SMTP vs PHPMailer

Most hosting services will provide the details the application should use to connect to a SMTP server for sending email. If you have those, follow the instructions in the [configuration guide](/admin-guide/en/deploy#email-server).

If not, the server will probably be configured to send email through the `sendmail` application. In such cases, set the `default` sender to `sendmail` in the `config.inc.php`:

```
[email]
default = sendmail
```

If the `sendmail` binary is not at the usual location on the server, you may need to set the `sendmail_path`:

```
[email]
default = sendmail
sendmail_path = "<path-to-sendmail> -bs"
```

In rare cases, neither option is available and you must use `PHPMailer`. This mailer is not secure and we strongly discourage its use. However, if you need it, set the `default` to `phpmailer`:

```
[email]
default = phpmailer
```

## Gmail

Use the following configuration settings to send email through a personal Gmail account:

```
smtp = On
smtp_server = smtp.gmail.com
smtp_port = 465
smtp_auth = ssl
smtp_username = <email>
smtp_password = <password>
```

## Commercial Services

You can use a third-party email service, such as MailGun, Amazon SES, or Postmark, to send email if you don't want to run your own email service. However, this is not officially supported so you may need to write a small amount of custom PHP code.

Under-the-hood, all of our applications use Laravel's [Mail](https://laravel.com/docs/9.x/mail) library, which itself uses Symfony's [Mailer](https://symfony.com/doc/current/mailer.html). Transports are included for Mailgun, Amazon SES and Postmark, and these services can be used by writing a small plugin. See the example [Mailgun plugin](https://github.com/Vitaliy-1/mailgun/).

Other transports can be be found by searching for "symfony mailer transport". A plugin would need to be written to import these transports and make use of them. If you write a transport for a service, please share it with [our community](https://forum.pkp.sfu.ca/).

## Bounce Address

Once you have set an `envelope_sender`, a new setting will appear under Settings > Workflow > Emails. This allows you to set a custom bounce address for each journal.

Note that this option may require changes to the server’s mail server configuration so that the user the web server runs as (e.g. “www-data”) is trusted by the sendmail program; otherwise an “X-Warning” header will be added to outgoing messages. Consult your mail server’s documentation if outgoing mails include such a header.

For example, Sendmail keeps a list of trusted users in `/etc/mail/trusted-users`. Other mail systems use similar files.

The command-line option used to set the envelope sender is -f.

## Troubleshooting Problems with Emails

If you are facing problems with emails not being delivered, you should contact whoever runs your email server. This is usually your hosting service provider.

We can not do much to help you troubleshoot problems with your email delivery. That's because our applications do not actually send the emails themselves. When an application wants to send an email, it sends a request to the email server to send and deliver the email.

**Only your email server provider can say whether an email was sent and why.**

If you run your own email server, you can ask for help in our [community forum](https://forum.pkp.sfu.ca/). Otherwise, we recommend contacting your web server provider to investigate the following:

1. Contact your web server provider and ask them if emails are being sent that comply with the SPF and DMARC protocols. They'll be able to check the logs and see if the `FROM` and `REPLY-TO` headers of emails match the SPF and DMARC configuration.
2. All email servers keep a log of what emails were sent. Ask your email server provider to check if a specific email was sent. They'll want the recipient, date and time of an email that was supposed to be sent, but was never received.
3. Often, an email will be sent but the recipient's email server refused to receive it. In some cases, the recipient email server will reply with the reason it is refusing (or "bouncing") the email. Your email server provider may be able to check the logs to see if a sent email was bounced and why.

---

Next, learn about how to improve performance with the [job runner](./deploy-jobs).

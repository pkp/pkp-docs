# Email

This chapter explains how emails are sent in OJS, OMP, and OCS; the configuration options that are available; and how to troubleshoot email issues. 

Mail in PKP software applications uses [the PHPMailer library](https://github.com/PHPMailer/PHPMailer). You can find out more about PHPMailer on [their wiki](https://github.com/PHPMailer/PHPMailer/wiki). Other code related to mail can be found in [the pkp-lib mail class](https://github.com/pkp/pkp-lib/tree/master/classes/mail).

Records of emails that are sent are stored in the `email_log` table of the database.

PKP software applications provide a number of options for configuring emails to work in your environment. The following configuration options are available for email in `config.inc.php`:

```
;;;;;;;;;;;;;;;;;;
; Email Settings ;
;;;;;;;;;;;;;;;;;;

[email]

; Use SMTP for sending mail instead of mail()
; smtp = On

; SMTP server settings
; smtp_server = mail.example.com
; smtp_port = 25

; Enable SMTP authentication
; Supported mechanisms: ssl, tls
; smtp_auth = ssl
; smtp_username = username
; smtp_password = password

; Allow envelope sender to be specified
; (may not be possible with some server configurations)
; allow_envelope_sender = Off

; Default envelope sender to use if none is specified elsewhere
; default_envelope_sender = my_address@my_host.com

; Force the default envelope sender (if present)
; This is useful if setting up a site-wide no-reply address
; The reply-to field will be set with the reply-to or from address.
; force_default_envelope_sender = Off

; Amount of time required between attempts to send non-editorial emails
; in seconds. This can be used to help prevent email relaying via OJS.
time_between_emails = 3600

; Maximum number of recipients that can be included in a single email
; (either as To:, Cc:, or Bcc: addresses) for a non-privileged user
max_recipients = 10

; If enabled, email addresses must be validated before login is possible.
require_validation = Off

; Maximum number of days before an unvalidated account expires and is deleted
validation_timeout = 14
```

To find out more about email within the OJS user interface, see [Learning OJS 3](https://docs.pkp.sfu.ca/learning-ojs/en/) or [Learning OJS 2](https://docs.pkp.sfu.ca/learning-ojs-2/en/).

## Sending Mail

By default, PHPMailer will send mail through PHP's built-in `mail()` facility.

On Windows, PHP needs to be configured to send email through a SMTP server \(running either on the same machine or on another machine\).

On other platforms such as Linux and Mac OS X, PHP will sent mail using the local sendmail client, so a local MTA such as Sendmail or Postfix must be running and configured to allow outgoing mail.

See [http://www.php.net/mail](http://www.php.net/mail) for more details on configuring PHP's mail functionality.

Our software can also be configured to use an SMTP server as specified in `config.inc.php`, either with or without authentication.

## Setting a Bounce Address

To control the address to which a bounced email will be sent, you need to set the envelope sender address. Enable the `allow_envelope_sender` option in the `[email]` section of the configuration file; when this option is enabled, a "Bounce Address" field appears in the Email section under Setup.

Note that this option may require changes to the server's mail server configuration so that the user the web server runs as \(e.g. "www-data"\) is trusted by the sendmail program; otherwise an "X-Warning" header will be added to outgoing messages. Consult your mail server's documentation if outgoing mails include such a header.

For example, Sendmail keeps a list of trusted users in `/etc/mail/trusted-users`; other mail systems use similar files.

The command-line option used to set the envelope sender is `-f`.

## Email and Locale

Email templates are installed directly in the database when a journal, press, or conference is created. If you need to edit [a locale file](https://github.com/pkp/ojs/blob/master/locale/en_US/emailTemplates.xml), any change in your template file will not be reflected until you reload all templates in the system.

Reloading templates will override any modifications that you may have made. To keep those modifications, you will need to save these modification locally and re-add them to templates as required.

## Primary and Technical Contacts

All PKP applications require that primary and technical contacts are configured under Setup for proper daily operations. This is required for every journal, press, or conference in the system.

- In OJS 2.x, this can be done under _Setup Step 1_.
- In OCS 2.x, this can be done under _Website Management Step 1_.
- In OJS/OMP 3.x, this can be done under _Settings &gt; Journal &gt; Contact_.

## Email Validation for New Users

OJS provides a self-registration form to all users which can be disabled or re-enabled under _Admin Menu > User & Roles > Site Access Options > User Registration_

Once this is enabled, every user is able to register and create an account in the Journal with a role as reader, author, and/or reviewer; however, it is not unusual for users to create spam accounts that will clutter the list of legitimate users and increase the workload for Journal Editors to verify these accounts and clean them up manually.

Mass spam account creation can be reduced with two settings in `config.inc.php`:

```
; If enabled, email addresses must be validated before login is possible.
require_validation = Off

; Maximum number of days before an unvalidated account expires and is deleted
validation_timeout = 14
```

The first parameter is `require_validation`, which is set to `Off` by default. When set to `On`, this parameter will require that every new user activates their account before being able to fully use the system.

The second parameter is `validation_timeout`, which is set to `14` by default. This parameter only works when the `require_validation` is enabled, and means that a user has 14 days to activate their new account or the account will be removed from the system automatically when the time limit is reached.

## Configuring the System to use Gmail SMTP

To use Gmail SMTP to send email from OJS, you can use the following settings in `config.inc.php`.

For OJS 2.x:

```
; Use SMTP for sending mail instead of mail()
smtp = On

; SMTP server settings
smtp_server = "ssl://smtp.gmail.com"
smtp_port = 465

; Enable SMTP authentication
smtp_auth = PLAIN
smtp_username = "user@gmail.com"
smtp_password = "password"
```

For OJS 3.x:

```
; Use SMTP for sending mail instead of mail()
smtp = On

; SMTP server settings
smtp_server = smtp.gmail.com
smtp_port = 465

; Enable SMTP authentication
smtp_auth = ssl
smtp_username = "user@gmail.com"
smtp_password = "password"
```

Additional information about Gmail SMTP is available at [https://support.google.com/a/answer/176600?hl=en](https://support.google.com/a/answer/176600?hl=en).

Note that you may have to additionally configure application-specific passwords in Gmail; see [https://support.google.com/accounts/answer/185833?hl=en](https://support.google.com/accounts/answer/185833?hl=en) for details.

## Sender Policy Framework (SPF)

The Sender Policy Framework (SPF) relies on permission that a server, which may be running OJS, receives from another server which hosts the main domain. This authorizes the OJS server to send emails using that domain and prevents messages from being blocked.

SPF is required when your OJS installation runs on a different server, including a subdomain, from your main domain; For instance, when you host a journal located at journal.domain.com on a server located outside of the institution which hosts domain.com.

In this situation, you will have to ask your IT services staff to enable a TXT entry in your DNS zone, which grants sending emails and notifications on behalf of @domain.com. Below is an example of a possible scenario where a SPF record is required:

Server running OJS:

```
IP: 10.10.10.10
Server name: myojsserver.com (this is not your domain, but only a server name which is defined by your OJS host vendor)
```

This server will need to be included in your DNS zone as a TXT SPF record. In this case, you will need to add the following:

```
Name: blank, or set to @ (depending on your domain registrar instructions)
Type: TXT
Value: v=spf1 ip4:10.10.10.10 a:myojsserver.com ~all
```

If you already have a TXT record in your DNS zone, you will need merge it to keep only one TXT record. There should only be a single DNS TXT record.

## Troubleshooting Email Problems

If emails aren't being received by some users, the first thing to do is check to see if you yourself can receive email. Try sending an email to yourself using the system. If you received it, the software application is probably sending email fine. You should then ask the user with the problem to check their email's spam/junk folders.

If the user can find no record whatsoever of the email being filtered as spam or junk, you may be encountering a **Sender Policy Framework** \(SPF\) validation problem with their server. You can confirm this by viewing your server's mail log to see if there are any reported receipt blockages/returns with SPF validation errors as the result.

### Explanation and Solution

As of version 2.4.6, OJS included a change to the way emails are sent out. Previously, all emails were sent using the OJS user's email address in the "FROM" field. This unfortunately led to some issues with the journal's outgoing emails being flagged as "spoofed" by some email servers because the email addresses in question \(eg. james@myinstitution.org"\) didn't match the domain name of the server sending the email \(eg. "myjournal.com"\). \(Technically, the emails were failing Sender Policy Framework \(SPF\) validation.\) Being flagged in this way is more serious than being considered spam: in many cases, the receiving email server won't even assign the email to a spam/junk queue, instead simply choosing to discard it.

#### Solution 1 \(OMP, OJS\):

To prevent this from happening, the PKP development team has adopted an email notification method similar to other web applications such as WordPress: send all email from the system using one central email address in the "FROM" field, with the intended recipients' email addresses in the "REPLY-TO" Field. The central email address to be used by default would be the one provided in **Journal Setup Step 1.2: Principal Contact**, which should match the domain name from which the journal sends mail. \(If this email address cannot match the sending domain on a per-journal basis, an alternate email address can be configured at the site level via the OJS config.inc.php file\). In addition, a new "Email Header" setting has been provided in **Journal Setup Step 1.4: Email Identification**, which can be used to provide explanatory text to the recipient.

To properly configure this, we suggest the following:

* If you aren't on OJS 2.4.6+ already, upgrade.
* Configure the email address OJS will use to send out all email using the "Principal Contact" setting in Journal Setup Step 1.2
  * If at all possible, have your Principal Contact email address serve as a general point of contact for the journal, and have it match the journal domain name. For example, if your domain name is "hypothesisjournal.com", try using an email address like "editor@hypothesisjournal.com".
* Provide some explanatory text using the "Email Header" setting in Journal Setup Step 1.4. This text will appear at the top of every email generated by the system. Remember, these emails are typically notifications to users, and should be treated just like notification emails from other systems. We recommend the following text:

```
You are receiving this email on behalf of <journal-name>. In the event of a requested response, you may respond directly to this email.
```

#### Solution 2 \(OCS, but also OJS and OMP\):

Configure your install to use GMail's SMTP service, as per [this FAQ thread](https://pkp.sfu.ca/wiki/index.php?title=Using_gmail_SMTP). See [the section above on SMTP](#Sender-Policy-Framework-(SPF)) for more information.

---
book: dev-documentation
version: 3.4
title: Resources - Technical Documentation - OJS|OMP|OPS
---

# Ressources

A collection of resources that may help you while coding with OJS and OMP.

## CacheBuster

This plugin will [clear the template and CSS cache](https://github.com/NateWr/cacheBuster) with every request. Enable it so that you don't have to manually clear the cache every time you make a change.

> Don't enable this on a production site. It will slow down your site. 
> 
> {:.warning}

## Postman API

We use [Postman](https://www.getpostman.com/) to test our REST API endpoints. You can [import our request collection](/dev/api/OJS-api-postman-collection.json) for OJS (last updated 2020-12-21).

## Generate submissions

A CLI script to [generate submissions for import](https://gist.github.com/NateWr/c6acac198d319cc317c0862c11df4a2e). Run `php ojs-generate-submissions.php` to create the XML file, then import from Tools > Export/Import > Native Import.

## Generate metrics

A CLI tool is available to generate usage statistics for each submission in your instance. From the root directory of an application, run:

```
php lib/pkp/generateTestMetrics.php <context_id> <start_date> <end_date>
```

Dates should be in the format `YYYY-MM-DD`.

## Remove a locale key

A CLI tool is available to remove locale keys. This can be useful when a locale key is no longer used and needs to be removed from every locale.

Run the following from the root directory of an application.

```
php lib/pkp/tools/removeLocaleKey.php example.locale.key
```

It will remove all instances of that locale key from every locale `.po` file in the application and pkp-lib.

## Move a locale key to pkp-lib

A CLI tool to move a locale key from one file to another and apply the change across all languages. Use this to move a locale key from an application directory to pkp-lib.

Run the following from the root directory of an application.

```
php lib/pkp/tools/moveLocaleKeysToLib.php example.locale.key emails.po
```

This will move all translations of `example.locale.key` from `locale/**_**/emails.po` to `lib/pkp/locale/**_**/emails.po`.

## Log emails

Sometimes you need to verify if an email was sent by the application. You can output all emails to the server log by setting the following in your config file:

```
[email]

; Default method to send emails
; Available options: sendmail, smtp, log
default = log
```

Or you can run a local SMTP server to receive and store emails. We recommend one of the following apps:

- [MailHog](https://github.com/mailhog/MailHog) (Go or [via Docker](https://akrabat.com/using-mailhog-via-docker-for-testing-email/))
- [MailDev](https://maildev.github.io/maildev/) (Node.js via Docker)
- [MailCatcher](https://mailcatcher.me/) (Ruby)
- [FakeSMTP](http://nilhcem.com/FakeSMTP/) (Java)


Update your `config.inc.php` file to send email through the SMTP server. (The port for these test apps is usually `1025`.)

```
[email]

; Default method to send emails
; Available options: sendmail, smtp, log
default = smtp

; Use SMTP for sending mail instead of mail()
smtp = On

; SMTP server settings
smtp_server = localhost
smtp_port = 1025
```

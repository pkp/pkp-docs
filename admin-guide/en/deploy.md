---
title: Deployment Guide for OJS, OMP and OPS - Admin Guide - PKP Developer Docs
description: How to configure OJS, OMP and OPS and safely deploy these applications in a production environment.
book: admin-guide
version: 3.5
---

# Deployment

> Read the [Getting Started](./getting-started) guide first to learn how to download and install the software.
{:.notice}

In a production environment, the software needs to be configured to send email, keep uploaded files private, and run regularly scheduled tasks. This guide describes the most important configuration steps that need to be taken before running a live, public instance of the software.

## What you need to know

To run this software securely, you will need to understand how to do the following:

- Upload and edit files on your web server
- Modify file permissions on your web server
- Configure a cron job on your web server
- Manage file storage and memory limits on your web server
- Configure a SSL certificate for your domain

If you are unfamiliar with some of these topics, you may be able to learn by following tutorials on the web. However, if you do not know how to deploy applications to a web server, we recommend that you find technical support for your project. This may be available through your research institution, a library publishing service, or a paid service provider like PKP's [Publishing Services](https://pkp.sfu.ca/hosting).

## Configuration

> The steps below describe how to use the command line to modify the files from a release package on a Linux web server. If you are not sure how to do this, or you run in a different environment, you may need to adapt the instructions to your server environment. We recommend speaking to your web hosting provider if you are not sure.
{:.notice}

The configuration file is found in the root directory of the application. For example, if you installed the software to the directory `/var/www`, the configuration file would be located at `/var/www/config.inc.php`.

Some settings in this file, like the database connection, are set during the installation process (see [Getting Started](./getting-started)). However, you will need to edit the file directly to configure other settings.

Open the config file, find the `base_url` setting, and change it to the web address of your installation.

```
base_url = "<url>"
```

Add this domain to your `allowed_hosts` list.

```
allowed_hosts = '["<url>"]'
```

Two secret keys need to be set to safely encrypt secure tokens on your server. You can use the following command to generate a random key in most Linux and Mac environments.

```bash
openssl rand -base64 32
```

Use the string created by this command to set the `salt` and `api_key_secret` values in `config.inc.php`. Each config setting should have a different value.

(We have not provided an example because copying the example could compromise your site's security.)

Set the `require_validation` in order to require new users to validate their email addresses before using a new account.

```
require_validation = On
```

## Secure Files Directory

Every installation needs to have a secure files directory to ensure that private files, like unpublished submissions, can not be accessed by unauthorized users.

The directory must be outside of the web root. This is the root directory that someone accesses when they visit your domain name. For example, if you installed the application to `/var/www`, the files directory should not be in `/var/www`.

Check the `files_dir` setting in the `config.inc.php` file. If it is within the web root, create a directory outside of the web root and modify the configuration file to point to this directory.

```
files_dir = <path>
```

## Email Server

Most email will be blocked by spam filters unless you use a SMTP server with correctly configured [SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework) and [DMARC](https://en.wikipedia.org/wiki/DMARC) records.

> Not sure what to do here? Learn more about how to [configure an email server](./deploy-email).
{:.notice}

Turn SMTP on:

```
default = smtp
```

Set the SMTP settings for your email server.

```
smtp = On
smtp_server = <smtp-domain> # Domain of the SMTP server's domain.
smtp_port = <smtp-port>     # Port of the SMTP server, eg - 1025
smtp_auth = <smtp-auth>     # Authentication protocal. Usually ssl or tls
smtp_username = <smtp-user> # Username for the SMTP server.
smtp_password = <smtp-pass> # Password for the SMTP server.
```

Set the envelope sender to an email address controlled by the `base_url`. For example, if your application is run at `https://my-site.com` you should use an email address like `journals@mysite.com`.

```
allow_envelope_sender = On
default_envelope_sender = <email> # The email address of the envelope sender
force_default_envelope_sender = On
force_dmarc_compliant_from = On
```

Learn more about the [envelope sender](./deploy-email#dmarc).

## User Validation

Automated bots may register fake user accounts. To deter this, configure the software to require validation of the email address for all new user accounts. In the `[email]` section of `config.inc.php`, edit the following settings.

```
require_validation = On
validation_timeout = 14
```

## SSL / HTTPS

Every site should encrypt its web traffic using an SSL certificate. This will make your site run from `https://` instead of `http://`. If you don't have an SSL certificate, you should [get one](./securing-your-system#sslencryption).

Edit the `config.inc.php` file to force URLs to use SSL:

```
force_ssl = On
```

## Scheduled Tasks

The software must run some tasks every day, such as compiling usage statistics. You should set up a cron job to run the following command once a day.

```
php tools/runScheduledTasks.php
```

If you are unable to configure this cron job, you must enable the Acron plugin after you have installed the software.

## Job Runner

No configuration is required to enable the built-in job runner. This is useful for test installations and small sites. However, in production we recommend using a worker daemon or cron job to process jobs.

Learn more about how to configure the [job runner](./deploy-jobs).

## Pretty URLs

Enable URL rewriting on your server to drop the `index.php` from URLs. For example, instead of `https://example.org/index.php/publicknowledge`, the URL will be `https://example.org/publicknowledge`.

The following is an example `.htaccess` file that can be used to enable `mod_rewrite` for Apache servers. This file should be placed in the web root.

```
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^api/v1(.*)$ /index.php/api/v1$1 [L,R=307]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^(.*)$ /index.php/$1 [QSA,L]
</IfModule>
```

Then edit the `config.inc.php` file to turn on `restful_urls`.

```
restful_urls = On
```

## Other Settings

The configuration file includes settings to control the default date formats, manage HTTP proxies, and more. Please read the `config.inc.php` file for an explanation of every setting.

---

You've now configured all the critical application functions. Next, you can learn how to configure your [email server](./deploy-email) to reliably deliver email.

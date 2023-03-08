---
title: Configure - Admin Guide - PKP Developer Docs
description: A guide to the configuration settings for Open Journal Systems (OJS), Open Monograph Press (OPS) or Open Preprint Systems (OPS).
book: admin-guide
version: 3.3
---

# Configure

The configuration file is where you will connect the application to a database, email server and domain. There are dozens of configuration settings to customize your install. This guide will only cover the most important.

Edit the configuration file on your server.

```bash
# Don't want to use vim?
# Use any text editor you prefer

vim <web-root>/config.inc.php
```

Find the `base_url` setting in the file and change it to the web address of your install.

```
base_url = "<url>"
```

Add this domain to your `allowed_hosts` list.

```
allowed_hosts = '["<url>"]'
```

Set your database credentials.

```
driver = mysqli
host = localhost
username = <username>
password = <password>
name = <database-name>
```

Two secret keys need to be set in order to safely encrypt secure tokens on your server. You can use the following command to generate a random key.

```bash
openssl rand -base64 32
```

Use the string created by this command to set the `salt` and `api_key_secret` values in `config.inc.php`. Each config setting should have a different value.

(We have not provided an example, because copy-pasting the example could compromise your site's security.)

Set the `require_validation` in order to require new users to validate their email addresses before using a new account.

```
require_validation = On
```

## Secure Files Directory

Every installation needs to have a secure files directory to ensure that private files, like unpublished submissions, can not be accessed by unauthorized users.

The directory must be outside of the web root. This is the root directory that someone accesses when they visit your domain name. For example, if you installed the application to `/var/www`, the files directory should not be in `/var/www`.

Create the directory and change the permissions to allow the web server to write files and directories to it. Then edit the `config.inc.php` with the absolute path to the `files_dir`.

```
files_dir = <path>
```

## Email Server

Most email will be blocked by spam filters unless you use a SMTP server with correctly configured [SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework) and [DMARC](https://en.wikipedia.org/wiki/DMARC) records. These records are stored in your domain's DNS settings and will require all email to be sent from an envelope sender.

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

## SSL / HTTPS

Every site should encrypt it's web traffic using a SSL certificate. This will make your site run from `https://` instead of `http://`.

If you don't have a SSL certificate, you should [get one](./securing-your-system#encryption).

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

## Pretty URLs

Enable URL rewriting on your server in order to change ugly URLs like `?journal=publicknowledge&page=article&op=view` into user-friendly URLs like `/publicknowledge/articles/view/1`.

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

Then edit the `config.inc.php` file to turn off `disable_path_info`.

```
disable_path_info = Off
```

And turn on `restful_urls`.

```
restful_urls = On
```

## Other Settings

The configuration file includes settings to control the default date formats, manage HTTP proxies, and more. Please read the `config.inc.php` file for an explanation of every setting.

Once you have configured everything, you are ready to [run the install](./install).
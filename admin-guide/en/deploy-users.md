---
title: User Accounts - Advanced Configuration - Admin Guide - PKP Developer Docs
description: Configuration options to manager users in Open Journal Systems (OJS), Open Monograph Press (OPS) or Open Preprint Systems (OPS).
book: admin-guide
version: 3.4
---

# User Accounts

This section describes the configuration options, plugins, and application settings available in the application to control user registrations, reduce unwanted bot accounts, integrate with third-party user authentication services, and more.

## Spam/Bot Accounts

If the application is pubicly accessible on the web, it will attract the attention of automated bots. These bots will create user accounts and try to post unwanted material to advertise products or deface the website. Read on to learn how to restrict access to these accounts.

### Account Validation

We recommend all instances require validation of the email address associated with the account. New users will be unable to login until they validate their account by clicking on an email sent to their email address.

Turn the following setting `On` in `config.inc.php`.

```
require_validation = On
```

### reCAPTCHA

Google's [reCAPTCHA](https://www.google.com/recaptcha/) service can be enabled for the registration and login forms. This will reduce the number of bots that can sign up by requiring users to complete a task that is difficult for bots to perform during registration and login.

You will need to [sign up](https://www.google.com/recaptcha/) for an account with Google to receive public and private keys. Then set the following options in `config.inc.php`.

```
;;;;;;;;;;;;;;;;;;;;
; Captcha Settings ;
;;;;;;;;;;;;;;;;;;;;

[captcha]

; Whether or not to enable ReCaptcha
recaptcha = On

; Public key for reCaptcha (see http://www.google.com/recaptcha)
recaptcha_public_key = your_public_key

; Private key for reCaptcha (see http://www.google.com/recaptcha)
recaptcha_private_key = your_private_key

; Whether or not to use Captcha on user registration
captcha_on_register = on

; Whether or not to use Captcha on user login
captcha_on_login = on

; Validate the hostname in the ReCaptcha response
recaptcha_enforce_hostname = Off
```

Use of Google's reCAPTCHA service will send your visitors' data to Google's servers. You may be required to notify users of this depending on the privacy laws in your jurisdiction.

### Honeypot

The [pkp-formHoneypot](https://github.com/ulsdevteam/pkp-formHoneypot) plugin from the University of Pittsburgh implements a [honeypot](https://en.wikipedia.org/wiki/Honeypot_(computing)) mechanism to protect new user registrations from bots. This plugin is effective against most bots and does not send your visitor's data to any third parties.

### Disable Registration

It's possible to set up a journal, press or preprint server to disable user registration. When user registration is disabled, all users will have to be registered by an admin or manager.

Follow these steps to disable user registration in a journal, press or preprint server.

1. Login as an admin or manager.
2. Go to **Users & Roles** > **Roles**.
3. Click the **>** button next to the **Reader** role to expand the options.
4. Click **Edit**.
5. Under **Role Options**, uncheck **Allow user self-registration**.
6. Click **OK**.
7. Click the **Search** button.
8. Under *With permission level set to* select **Author**.
9. For each role, follow steps 3-7 to prevent user self-registration.
10. Repeat steps 7-8 with **Reviewer** selected for the permission level.
11. For each role, follow steps 3-7 to prevent user self-registration.

Only reader, author and reviewer roles can allow user self-registration. User self-registration is always disabled for other roles.

### Remove Accounts

If you already have a large number of spam registrations, you may want to remove these accounts. User accounts can not be deleted. Instead, they must be merged to another account in order to ensure that any editorial data (such as submissions, reviews, etc) is maintained.

Run the following command from the root directory of the application to merge a spam registration into another account.

```bash
php tools/mergeUsers.php <merge-into-username> <unwanted-account-username>
```

Usually, the spam accounts are merged into one account created for this purpose. For example, you may create an account with the username `spamaccount`. If you want to remove `usernameOne`, run the following command.

```bash
php tools/mergeUsers.php spamaccount usernameOne
```

Multiple users can be merged in a single command.

```bash
php tools/mergeUsers.php spamaccount usernameOne UsernameTwo usernameThree [...]
```

A shortcut would be to collect the usernames you want to remove in a file.

```
usernameOne
usernameTwo
usernameThree
```

Then load the file into the the command.

```bash
php tools/mergeUsers.php spamaccount $(cat usernames.txt)
```

## User Uploads

By default, all users registered on the site can upload files to a personal user directory. These files can be used in the user's signature or biography. Managers and admins can use these files in journal settings. For example, if a manager uploads an image to the "About the Journal" section, this will use their user directory.

You can disable all user uploads by setting the storage size of each user's directory to `0` in the `[files]` section of `config.inc.php`.

```
public_user_dir_size = 0
```

The [controlPublicFiles](https://github.com/pkp/controlPublicFiles) plugin includes more fine-grained control over user uploads.

## Single Sign-on

Single sign-on allows users to register and login to your journal, press or preprint server using an account with another service. This may be an institutional account such as a university network, a scholarly infrastructure organization like ORCID, or a commercial service provider like Google, Microsoft or Apple.

The following are different approaches to single sign-on that are in use by our community.

### OpenID

The [openid plugin](https://github.com/leibniz-psychology/openid) allows users to register and login using any [OpenID](https://en.wikipedia.org/wiki/OpenID) protocol. This protocol is supported by ORCID, Google, Microsoft, Apple and many others.

The Leibniz Institute for Psychology (ZPID) has developed this plugin.

### ORCID

Users can register and login using their ORCID accounts. Use the [openid plugin](https://github.com/leibniz-psychology/openid).

### Shibboleth

[Shibboleth](http://shibboleth.internet2.edu/) offers account synchronization and single sign-on. The source code and binary of the service provider is available for all major operating systems. Read the documentation on their website to learn how to install and run the Shibboleth Service Provider.

Once Shibboleth is set up on your system, install the [Shibboleth plugin](https://github.com/pkp/shibboleth) for OJS, OMP and OPS. Then visit the plugin's settings page for instructions on how to configure it.

## Import/Export

Learn how to import or export data about user accounts in the [Import/Export](./data-import-and-export) section.

---

The next section describes best practices for running lots of independent journals, presses or preprint servers from one [multi-tenant install](./deploy-multi-tenant).
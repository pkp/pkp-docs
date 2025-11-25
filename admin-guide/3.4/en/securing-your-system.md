---
title: Secure your System - Admin Guide - PKP Developer Docs
description: Best practices to set up a secure server when running OJS, OMP or OPS.
book: admin-guide
version: 3.4
---

# Securing Your System

> This section describes how to run a secure server. Before reading this section, make sure you have followed the [recommended configuration](./deploy) instructions to secure the application.
{:.warning}

It's important to run OJS, OMP and OPS on a secure server environment. In addition to the security settings in the [recommended configuration](./deploy) of the application, you must ensure the server is secure where the application is run.

This section makes a few recommendations for running secure servers. However, if you are unfamiliar with server administration, we strongly encourage you to use a professional hosting service or hire a professional system administrator.

## Security Checklist

- Follow the [recommended configuration](./deploy) instructions.
- Follow additional configuration recommendations to [reduce spam accounts](./deploy-users).
- Use a long, random value for each one of the `salt` and `api_secret_key` settings in `config.inc.php`.
- Make sure the `encryption` setting in `config.inc.php` is set to `sha1`.
- Restrict [file permissions](#file-permissions) as much as possible.
- Set up a [SSL certificate](#sslencryption) and configure the application to use `https://`.
- Make sure the `files_dir` folder [can not be accessed through the web](#file-permissions).
- Dedicate a database to the application. Do not share it with other applications on the server.
- Run antivirus software on the server to prevent users from uploading a compromised file.
- Configure your server to make automated backups of the database and `files_dir` at regular intervals. We recommend a backup for every day in the last 7 days, one per week for the last 4 weeks, and one per month for the last 12 months. View the [upgrade guide](/dev/upgrade-guide/en/) for more complete backup instructions.
- Keep the web server regularly updated with all security patches.
- Practice good password management: don’t use the same username/password to access the application as you would for any other online account, and don’t use an easy to guess password.
- Treat everything that you get online with the knowledge that you received it from someone you don’t know, and act likewise. If a submission appears to be suspicious for any reason (strange email address, suspiciously generic title or abstract, etc.), treat the included files with an additional level of diligence.

## File Permissions

The `files_dir` is where all private submission files are stored. If this directory is located in the web root, anyone will be able to download submission files. Once you have configured the `files_dir` outside of the web root, lock down access to that directory by setting the read/write permissions so that only the application can read, add, edit and delete files.

The exact details of file permissions will depend on how your web server runs PHP scripts. Read more about [file permissions](./troubleshooting#configuring-file-permissions)

## SSL/Encryption

All web applications should be protected with SSL/TLS encryption, so that they can encrypt traffic through the server. Without encryption, user login credentials are passed in plain text, which allows anyone scanning the network to intercept them.

The following section describes how to get a SSL certificate, enable it, and configure the server to update it.

### Getting a Certificate

A certificate enables a secure connection from the user's Web browser to the server hosting your site.  Installing a certificate for your site can not be done within the OJS, OMP, or OPS software and will require technical expertise or assistance at the server level.  When considering a software host, determining their level of certificate support is an important consideration.

A good start is asking your hosting service provider if they have an existing solution for supporting TLS or SSL certificates -- Your hosting provider may be able to create/issue an TLS or SSL certificate for you. If you do not have shell access to your installation this may be the only way to go about adding SSL/TLS protection for your site.

Purchasing a certificate may be an option available to you as well. Commercial businesses that provide certificates are called [Certificate Authorities](https://en.wikipedia.org/wiki/Certificate_authority) (CA). Wikipedia provides a listing of [CA providers](https://en.wikipedia.org/wiki/Certificate_authority#Providers) by market share. In addition to providing certificates that enable encryption, traditional CA issued certificates offer several advantages including customer vetting to help validate customer identity, and wildcard certificates. Depending on what features you select with your purchase, CA issued certificates can cost $100s per year and must be renewed before expiry.

[Let’s Encrypt](https://letsencrypt.org/) is a popular option for obtaining subscription as well. Let’s Encrypt is a free, automated, and open certificate authority (CA), run for the public’s benefit. It is a service provided by the Internet Security Research Group (ISRG). Certificates are provided for free, with some limitations:

* Only DV (Domain Validation) certificates are offered
* Slightly more technical, if your hosting provider does not already support you will need to generate from shell

To test that your certificate is installed correctly, go to https://www.ssllabs.com/ssltest/index.html and enter your host name. If your grade is "B" or worse, your server may not be available to secure client software.

### Enabling SSL (requires shell access):

#### Generating CSR (Certificate Signing Request)

Required step to generate a certificate if you are going to be purchasing a certificate from a CA that is not Let’s Encrypt. In terms of how to do this, this varies from one Linux distribution to the next, some common Linux examples can be found here:
* [Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-create-a-ssl-certificate-on-apache-for-ubuntu-14-04)
* [CentOS/RHEL 7](https://www.digitalocean.com/community/tutorials/how-to-secure-apache-with-let-s-encrypt-on-centos-7)
* [Generating LetsEncrypt certificate using Certbot via Shell](https://certbot.eff.org/) (provides customized directions depending on hosting environment Apache, Nginx, etc.)
* [Guide to generating a .CSR in Apache](https://www.alphassl.com/support/create-csr/apache.html)

#### Maintaining your Certificates

When you purchase a certificate from a CA, you will typically purchase a certificate that lasts between 1 to 3 years. Certificates are set to expire and will need to be renewed resulting in a new expense at the time of renewal. Let’s Encrypt certificates expire every 90 days. The Let’s Encrypt software (certbot) can be configured to automatically renew certificates before they expire. Meaning once installed you should have minimal maintenance moving forward. Automation is done with `cron` or `systemd`.

> Contributors: PKP staff, Kenton Good

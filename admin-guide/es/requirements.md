---
title: System Requirements - Admin Guide - PKP Developer Docs
description: The server requirements to run Open Journal Systems (OJS), Open Monograph Press (OPS) or Open Preprint Systems (OPS).
---

# System Requirements

Your server must meet the following requirements in order to run the 3.3 LTS release of OJS, OMP or OPS.

- [PHP 7.3–8.0](http://www.php.net/) with php-mbstring, php-xml, and php-intl enabled (Recommended: PHP 8.0)
- [MySQL 4.1+](http://www.mysql.com/), [MariaDB 4.1+](https://mariadb.org/) or [PostgreSQL 9.5+](http://www.postgresql.org/)
- Linux, or one of the following: BSD, Solaris, Mac OS X, Windows

> **Older Versions**: Check the README.md file located in the download package of the version you want to install.

## Recommended

In order to run, upgrade and troubleshoot your installation, we recommend a web server environment with the following:

- Command-line access to perform upgrades
- `.htaccess` or similar technique to block web access during upgrades
- Support for cron jobs to run scheduled tasks
- An email server that supports SPF and DMARC in order to reliably deliver emails

---

If your server meets these requirements, learn how to [download the software](./download).

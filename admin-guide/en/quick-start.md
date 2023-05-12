---
title: Quick Start - Admin Guide - PKP Developer Docs
description: A quick start summary of how to install Open Journal Systems (OJS), Open Monograph Press (OPS) or Open Preprint Systems (OPS).
book: admin-guide
version: 3.4
---

# Quick Start

This section describes the quickest route to getting OJS, OMP, or OPS installed on your system. (You may also consider using [Docker](https://github.com/pkp/docker-ojs).)

> ⚠️  If you follow these steps, we still strongly recommend that you review the complete documentation!

## Preparation

You will need:
- A compatible web server (see [Requirements](requirements)).
- The `.tar.gz` package of the software you wish to install. (In this example we will refer to `ojs-3.4.0.tar.gz`.)
- An empty MySQL, MariaDB, or PostgreSQL database. You will need its **database name**, along with a **database username** and **database password** that can be used to access it.
- The **installation directory**: A place to unpack the OJS, OPS, or OPS `.tar.gz` archive, **inside** your web root.  (In this example we will use `/var/www/html`.)
- The **directory for uploads**: A place the software can store uploaded files, **outside** your web root. (In this example, we will use `/var/ojsfiles`.)
  > ⚠️  If you put the *directory for uploads* somewhere web-accessible, your installation will be vulnerable to hacking!
  {:.warning}


## Unpacking the .tar.gz file

Go into the **installation directory**, and unpack the `.tar.gz` package:

```sh
# Go to the installation directory
cd /var/www/html

# Download the .tar.gz package
wget https://pkp.sfu.ca/ojs/download/ojs-3.4.0.tar.gz

# Unpack the .tar.gz package
tar xzf ojs-3.4.0.tar.gz

# The software should now be unpacked into /var/www/html/ojs-3.4.0

# Clean up the downloaded .tar.gz file
rm ojs-3.4.0.tar.gz
```

## Preparing the filesystem

Several files and directories need to be writable by the web server.

> ⚠️  You will need to know the user account that your web server uses to execute PHP scripts. In this example we will use `www-data`, but the details on your server may be different.

Set ownership on certain files and folders in the installation directory:
```sh
# Go to the installation directory
cd /var/www/html/ojs-3.4.0

# Set the ownership to www-data (your server may be different)
chown -R www-data public cache plugins config.inc.php
```

Create the **directory for uploads** and set ownership:
```sh
mkdir /var/ojsfiles

# Set the ownership to www-data (your server may be different)
chown www-data /var/ojsfiles
```

## Completing the installation form

It should now be possible to load the installation form. Open a web browser and direct it to the URL for the installation directory. In the example above, if your server is `localhost`, the URL will be `http://localhost/ojs-3.4.0`.

If you are able to view the software installation form, fill in your server's details and press the "Install" button. If the form does not appear, or it appears to fail when submitted, check your server's PHP error log for details.

> ⚠️  You will need to know how to check your server's PHP error log.

Congratulations! You have completed a basic installation.

> ⚠️  Before moving on, we strongly recommend that you review the complete installation documentation to ensure that your system is properly configured. We recommend reviewing your configuration file for any additional details that may need to be configured.

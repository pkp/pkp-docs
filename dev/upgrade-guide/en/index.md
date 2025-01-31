---
generateHeadingToc: true
title: How to Upgrade
description: How to upgrade Open Journal Systems (OJS), Open Monograph Press (OMP), and Open Preprint Systems (OPS), including a step-by-step tutorial.
---

# Introduction: How to Upgrade

This guide will help you upgrade Open Journal Systems (OJS), Open Monograph Press (OMP), and Open Preprint Systems. It describes the knowledge and tools you will need to upgrade your software, and provides a step-by-step tutorial you can follow.

The instructions below describe how to upgrade on a LAMP (Linux, Apache, MySQL, PHP) stack. However, these steps can be adapted for different server environments.

> Want to know when new versions are released and what's new? Read the [announcements forum](https://forum.pkp.sfu.ca/c/announcements/10).
{:.notice}

## Contributors

Authors:
Marc Bria, Clinton Graham, Kaitlin Newson, Andrea Pritt, Dulip Withanage, Alec Smecher

## Required Knowledge and Tools

> **Do not proceed** if you do not have experience with the items listed below. A mistake during upgrade can lead to unrecoverable errors.
{:.warning}

In order to use this guide, you will need experience with basic system administration tools, as well as an understanding of the tech stack in your server configuration. You should have:

- Basic GNU/Linux administration skills
- Server credentials, including database credentials
- Knowledge of your server stack (this guide assumes a LAMP stack)
- The ability to access your server's terminal (SSH)

### Preparing to Upgrade

Before starting your upgrade, you can review the release notes in `docs/release-notes` and the [release notebook](/dev/release-notebooks/) for your upgrade version to learn about important changes introduced in each version. The configuration file template, `config.TEMPLATE.inc.php`, includes a description for most configuration parameters.

Note that an upgrade may take from a few minutes up to several hours depending on the size of your site.

### A Note on Versions

All PKP applications use a variant of [Semantic Versioning](https://semver.org) described as `major.minor.revision-build`. Each point of the version number describes the kind of changes you can expect.

| Type     | Example    | Description                                                                                                 |
| -------- | ---------- | ----------------------------------------------------------------------------------------------------------- |
| major    | `3.x.x-x`  | Comprehensive breaking changes that may effect plugins, server configuration and all parts of the software. |
| minor    | `3.3.x-x`  | Breaking changes that may effect plugins and server configuration.                                          |
| revision | `3.3.3-x`  | New features may be added but breaking changes are kept to a minimum.                                       |
| build    | `3.3.3-3`  | No breaking changes or database migrations.                                                                 |

In order to understand the upgrade process, you should first determine the size of the upgrade "jump". A jump from version `3.3.0-6` to `3.3.0-7` can likely be done with minimal down time. However, a jump from version `2.4` to `3.2` will be a long, complex process with a higher risk of introducing problems.

You should always perform upgrades in a test environment first, even when upgrading from one build to another.

### Upgrading from OJS 2.x to 3.x

OJS 2.x is extremely out of date and direct upgrades to the latest OJS releases are no longer supported. If you are running OJS 2.x and wish to upgrade, you will need to do it in steps:

| From      | To        | Description                                                                        |
| --------- | --------- | ---------------------------------------------------------------------------------- |
| `< 2.4.8` | `2.4.8-x` | Before upgrading to 3.x, make sure you are upgraded to the latest `2.4.8-x` build. |
| `2.4.8-x` | `3.2.1-x` | `2.4.8-x` can be upgraded to `3.2.1-x`.                                            |
| `3.2.1-x` | `3.3 >=`  | `3.2.1-x` can be upgraded to any version 3.3 or later.                             |

## Components of an Installation

Any OJS, OMP, or OPS installation has the following components:

1. **Software.** This is the source code that you download and unpack from the PKP website. This lives in the *installation directory*.
2. **Configuration file.** This is called `config.inc.php` and lives in the *installation directory*.
3. **Files directory.** This is where the software stores uploaded files such as word processor documents, PDFs, etc. Its location is given in the *configuration file* in the `files_dir` setting. **It should never be web-accessible.**
4. **Public files directory.** This is where publicly-accessible files such as logos are stored. It is the `public` subdirectory inside the *installation directory*.
5. **Database.** This is the MySQL or PostgreSQL database used by the software to store metadata etc. It is configured in the *configuration file*.

A backup, restore, or upgrade operation must consider all of these parts of the installation.

## Upgrade Tutorial

The following tutorial provides a recommended step-by-step process to safely upgrade. However, each installation is different and your server environment might differ substantially. In all cases, you should review and understand the commands before executing them.

During the tutorial, you will see commands for [Debian](https://www.debian.org/) or [RHEL](https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux) Linux systems. You should only run the command appropriate to your server.

### 1. Set Environment Variables

The tutorial below uses the following variables to simplify the terminal commands.

| VARIABLE        | Default             | Description                      |
| --------------- | ------------------- | -------------------------------- |
| WEB_USER        | `www-data`          | Webserver user                   |
| WEB_GROUP       | `www-data`          | Webserver user's group           |
| OJS_WEB_PATH    | `/var/www/html`     | OJS web root folder              |
| OJS_DB_HOST     | `db`                | Database host's name             |
| OJS_DB_USER     | `ojs`               | Database user                    |
| OJS_DB_PASSWORD | `ojsPwd`            | Database password                |
| OJS_DB_NAME     | `ojs`               | Database name                    |
| OJS_BACKUP_PATH | `/srv/backup/ojs`   | Folder to store your backups     |
| OJS_VERSION     | `ojs-3.3.0-8`       | Version as in the ojs filename   |
| DATE            | `YYYYMMDD-HH:MM:SS` | The current system date and time |

Rewrite the command below to set up these variables with the correct values for your installation.

```bash
$ WEB_USER="www-data" && \
WEB_GROUP="www-data" && \
OJS_WEB_PATH="/var/www/html" && \
OJS_DB_HOST="db" && \
OJS_DB_USER="ojs" && \
OJS_DB_PASSWORD="ojsPwd" && \
OJS_DB_NAME="ojs" && \
OJS_BACKUP_PATH="/srv/backup/ojs" && \
OJS_VERSION="ojs-3.3.0-8" && \
OJS_PUBLIC_PATH="$OJS_WEB_PATH/public" && \
OJS_PRIVATE_PATH="/var/www/files" && \
DATE=$(date "+%Y%m%d-%H:%M:%S")
```

### 2. Disable the execution of background tasks

#### Shut down the execution of scheduled tasks

If you're using a `CRON`-like application to execute the `php tools/runScheduledTasks.php` periodically, please disable it. If you're using the `Acron` plugin, then disable the plugin.

After disabling, it's better to ensure that all tasks had a time to be completed, you can inspect the database, more specifically the `scheduled_tasks` table, and ensure that the `last_run` field of all entries points to a date slightly in the past (a couple of hours should suffice to execute everything).

#### Shut down the worker gracefully (only applicable for OJS +3.4)

Version 3.4 introduced Laravel jobs to process long running tasks, as explained in the [admin-guide](/admin-guide/en/deploy-jobs). If you've configured this feature, you'll need to stop it gracefully before starting the upgrade.

The worker can be gracefully interrupted by sending a `SIGTERM` signal to the PHP process running it. This can be done using the `kill` CLI command. If you're using a `supervisor`-like application to manage the worker, please refer to its documentation.

### 3. Preventing Access

Before beginning the upgrade, you should ensure that visitors do not interact with the installation while you are working.

> OJS does not support a maintenance mode yet, but we [plan to support it](https://github.com/pkp/pkp-lib/issues/3263).
{:.notice}

Modify your Apache `VirtualHost` directive or place an `.htaccess` file in the `OJS_WEB_PATH` with the following content:

```bash
order deny,allow
deny from all
ErrorDocument 403 "This site is undergoing maintenance and should return shortly. Thank you for your patience."
```

If you modified your Apache configuration, you will have to reload it:

```bash
(Debian)$ service apache2 reload

(RHEL)$ systemctl restart httpd
```

### 4. Create Backups

> **Do not skip this step.** An upgrade can fail for many reasons. Without a backup you may permanently lose data.
{:.warning}

The steps below will backup the following folders and files.

| Common Path                     | Description                   | VARIABLE           |
| ------------------------------- | ----------------------------- | ------------------ |
| `/var/www/html/public`          | Public files                  | `OJS_PUBLIC_PATH`  |
| `/var/www/files`                | Private files                 | `OJS_PRIVATE_PATH` |
| `/var/www/html/config.inc.php`  | `config.inc.php`              |                    |
| `/var/www/html/.htaccess`       | `.htaccess` or vhost (if any) |                    |
| `/var/www/html/plugins`         | plugins                       |                    |
| locale files, custom code, etc. | local customizations          |                    |

Backup the database.

```bash
$ mysqldump --host="$OJS_DB_HOST" -u $OJS_DB_USER -p$OJS_DB_PASSWORD $OJS_DB_NAME --result-file="$OJS_BACKUP_PATH/backupDB-$DATE.sql"
```

> Character encodings are a common source of database problems during upgrades. <br>
> Read more in the [Admin Guide](/admin-guide/en/troubleshooting#character-encoding).
{:.tip}

Backup the private file directory.

```bash
$ tar cvzf "$OJS_BACKUP_PATH/private-$DATE.tgz" "$OJS_PRIVATE_PATH"
```

Backup the public files directory.

```bash
$ tar cvzf "$OJS_BACKUP_PATH/ojsfiles-$DATE.tgz" "$OJS_PUBLIC_PATH"
```

Backup any other customizations you have made to the software, such as custom plugins or locale files.

### 5. Create Sandbox

Use your backup to create a sandbox environment and test the upgrade in that sandbox first. The steps below can be used in your sandbox environment to perform an upgrade.

Once the test is complete, you can run any automated or manual tests you have configured to ensure the upgrade did not introduce regressions.

**Only perform the next steps on your live, production environment if you have already completed a test upgrade in your sandbox environment.**

### 6. Download Release Package

Download the correct release package.

```bash
$ wget "https://pkp.sfu.ca/ojs/download/$OJS_VERSION.tar.gz"
```

### 7. Check System Requirements

Check the [README](https://pkp.sfu.ca/ojs/README) file from the downloaded `tar.gz` and be sure your system meets the following requirements.

- Apache version
- MySQL or PostgreSQL version
- PHP version
- Server libraries and module requirements

In addition, you will want to perform the following checks.

- Adjust your PHP timeouts and memory limits to ensure the upgrade process can complete successfully.
- Check the server libraries and module requirements for any plugins you've added (these can often be found in the plugin's README file).

### 8. Install Release Package

Backup the application files.

```bash
$ mv "$OJS_WEB_PATH" "$OJS_BACKUP_PATH"
```

Extract the release package.

```bash
$ mkdir "$OJS_WEB_PATH"
$ tar --strip-components=1 -xvzf "$OJS_VERSION.tar.gz" -C "$OJS_WEB_PATH"
```

Restore the `config.inc.php` file.

```bash
$ cp "$OJS_BACKUP_PATH/html/config.inc.php" "$OJS_WEB_PATH"
```

Run the following command to compare your configuration file with the template of the new release. Add or remove any configuration options as necessary.

```bash
$ diff "$OJS_WEB_PATH/config.inc.php" "$OJS_WEB_PATH/config.TEMPLATE.inc.php"
```

Restore the `.htaccess` file if it exists.

```bash
$ cp "$OJS_BACKUP_PATH/.htaccess" "$OJS_WEB_PATH"
```

Restore the public files.

```bash
$ cp -r "$OJS_BACKUP_PATH/html/public/*" "$OJS_PUBLIC_PATH"
```

Set the permissions of new files as required by your server configuration.

```bash
(Debian)$ sudo chown -R $WEB_USER:$WEB_GROUP "$OJS_PUBLIC_PATH" "$OJS_WEB_PATH/cache/"

(RHEL)$ sudo chown -R apache:apache "$OJS_PUBLIC_PATH" "$OJS_WEB_PATH/cache/"
```

Set the permissions for the plugin directories as required.

```bash
(Debian)$ sudo chown -R $WEB_USER:$WEB_GROUP "$OJS_WEB_PATH/plugins/"

(RHEL)$ sudo chown -R apache:apache "$OJS_WEB_PATH/plugins/"
```

If the server is running under [SElinux](https://en.wikipedia.org/wiki/Security-Enhanced_Linux), reset the file contexts.

```bash
(RHEL)$ sudo restorecon -R "$OJS_WEB_PATH/"
```

### 9. Run the Upgrade

Confirm the version numbers match your expectations.

```bash
$ php tools/upgrade.php check
```

In the screenshot below, we can see that we are currently running `3.2.1-4` and will be upgrading to `3.3.0-6`.

![An example of running the PHP upgrade check in the command-line.](./assets/upgrade-check.png)

Finally, when you are ready, run the upgrade script, which may take several hours to complete. We recommend you specify an explicit amount of memory on the command line, as server defaults may be too low.  If the upgrade process runs out of memory it will fail and you will need to restore from backup and begin again. You may also wish to [log the output](#log-the-output).

```bash
$ php -d memory_limit=2048M tools/upgrade.php upgrade
```

If the upgrade is successful, you will see the message below informing you that the upgrade was successful.

![An example of the "Successfully upgraded" message in the command-line.](./assets/successful-upgrade.png)

#### Log the Output

The upgrade script will print a lot of information to the terminal. You may wish to use `tee` to record its output. This will help you troubleshoot if the upgrade fails.

```bash
$ php tools/upgrade.php upgrade
```

### 10. Enabling Access

When the upgrade is complete, undo the changes you made in Step 3.

If your PHP timeouts and/or memory limit were adjusted, restore their original values.

You may have to restart the apache server to apply the changes.

### 11. Test the Upgrade

It's important to test the site after an upgrade. Any core functions for your journals should be tested, as well as custom plugins or themes once they have been reinstalled.

The following is a short checklist that covers common use cases.

1. Reader interface
    - The homepage loads
    - The theme loads correctly
    - Published articles can be downloaded
    - Letters and text characters are displaying correctly
    - No timeouts or long delays
    - No broken links
    - Articles appear correctly in the search
2. Database
    - Charset and collation on database, tables and fields
    - Database engine is innoDB for database and all tables (MariaDB/MySQL only)
3. Register a new user account and login
     - Register an author
     - Get a registration email
     - Login with the new user
4. Complete the editorial workflow
    - As a Journal Manager:
        - Create a new testing journal
        - Register your new user as an author in the testing journal
    - As an Author:
        - Login as author and submit an article to a test journal
        - Confirm you are able to upload a document
    - As an Editor:
        - Assign the article to a section
        - Accept article without revision
        - Create a new issue and assign the article to it
        - Publish the issue
        - Download the published article
        - Unpublish the article and remove the issue
5. User management
    - As a Journal manager:
        - Assign new roles to the new user
        - Change new user's profile data and password
        - Remove the new user by merging it to your admin account
6. Additional testing of common tasks

### 12. Restore Custom Plugins

Use the Plugin Gallery to restore any custom plugins that were installed.

If you have installed custom plugins which are not in the Plugin Gallery, check with the plugin distributor for an update which is compatible with your upgraded version.

### 13. Reenable the execution of background tasks

Basically undo the steps of the item 2, by reenabling the scheduled tasks and the job worker (if you were making use of it).

### 14. Cleanup Backup Files

You may wish to retain your backup files, but if you don't, you can remove them.

```bash
$ sudo rm -fR "$OJS_BACKUP_PATH/*"
```

### 15. Celebrate

**Your OJS instance has been successfully upgraded. Congratulations!**

## Troubleshooting

Consult the following resources if you encounter any problems.

* [PKP Forum](https://forum.pkp.sfu.ca/) - Questions and answers in the support forum
* [FAQ](/faq/en/) - The [Errors and Troubleshooting](/faq/en/errors-troubleshooting) section may be helpful
* [Admin Guide - Troubleshooting](/admin-guide/) - See the [Troubleshooting](/admin-guide/en/troubleshooting) section
* [GitHub Issues](https://github.com/pkp/pkp-lib/issues) - Review known issues reported against versions of the software

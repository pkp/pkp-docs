---
generateHeadingToc: true
---

# OJS Upgrade Guide

## Introduction

This guide is a general (version non-specific) Open Journal Systems upgrade guide for technical staff. A list of required knowledge and tools is provided below. While this guide focuses solely on OJS and the LAMP stack, the information here can be adapted to suit other PKP products (i.e. OMP, OPS) and other stacks with some modifications.

If you are looking for more general information on version releases and related bugfixes, please check the [PKP Announcements](https://forum.pkp.sfu.ca/c/announcements/10) section of the forum.

## Required knowledge and tools

### PKP software version numbers

- To upgrade from 2.x, you must first upgrade to 3.2, and then to a later version.  Direct upgrades from 2.x to 3.3 and later are not supported.
- To upgrade within a minor release (e.g. 3.3.x to 3.3.y) you are guaranteed to have database compatibility and plugin compatibility.  If upgrading to a new minor release, you must check compatibility of any plugins you added.

### Environments and tools

- Basic GNU/Linux administration skills
- Operating System and database credentials.
- LAMP (not all stacks will be covered)
- An OJS [release distributed by PKP](https://pkp.sfu.ca/ojs/ojs_download) (for example, tar/zip packages)
- Ability to access the server terminal (i.e: SSH)

### Notations

Each installation is different. Defined below are some variables that will be referenced in the commands in this guide.

| VARIABLE        | Default         | Description                    |
| --------------- | --------------- | ------------------------------ |
| SERVERNAME      | localhost       | Host's name                    |
| WEB_USER        | www-data        | Webserver user                 |
| WEB_GROUP       | www-data        | Webserver user's group         |
| OJS_ROOT_PATH   | /var/www        | OJS root folder                |
| OJS_WEB_PATH    | /var/www/html   | OJS web root folder            |
| OJS_DB_HOST     | db              | Database host's name           |
| OJS_DB_USER     | ojs             | Database user                  |
| OJS_DB_PASSWORD | ojsPwd          | Database password              |
| OJS_DB_NAME     | ojs             | Database name                  |
| OJS_BACKUP_PATH | /srv/backup/ojs | Folder to store your backups   |
| OJS_VERSION     | ojs-3.3.0-6     | Version as in the ojs filename |

## Step-by-step process

### 1. Set your environment variables

Adapt the environment variables to fit with your installation if you like to cut&paste the commands of this guide:

```bash
$ SERVERNAME="localhost" && \
WEB_USER="www-data" && WEB_GROUP="www-data" && \
OJS_ROOT_PATH="/var/www" && OJS_WEB_PATH="/var/www/html" && \
OJS_DB_HOST="db" && OJS_DB_USER="ojs" && OJS_DB_PASSWORD="ojsPwd" && \
OJS_DB_NAME="ojs" && OJS_BACKUP_PATH="/srv/backup/ojs" && \
OJS_VERSION="ojs-3.3.0-6" && OJS_PUBLIC_PATH="$OJS_WEB/public" && \
OJS_PRIVATE_PATH="$OJS_ROOT/files"
```

### 2. Put site into maintenance mode

If possible, do an Apache vhost redirection:

2.1. Modify your Apache `VirtualHost` directive, or create a .htaccess file in your webroot with the following content:

```bash
order deny,allow
deny from all 
ErrorDocument 403 "OJS server in maintenance mode"
```

2.2. Then, reload the apache server to apply the changes:

```bash
$ service apache2 reload

# Other distributions

(Debian)$ service apache2 reload

(RHEL)$ systemctl restart httpd
```

> <i class="fa fa-info-circle"></i> **INFORMATION**:
Does OJS include a "maintenance mode" feature?
Well, not yet but [we are on our way](https://github.com/pkp/pkp-lib/issues/3263)...
{:.notice}

### 3. Backup existing install

> <i class="fa fa-exclamation-circle"></i> **DO NOT SKIP THIS STEP**
Upgrading your installation will make changes to your database and filesystem. If any change fails, a backup will be *required* to revert to the older version, or to retry the upgrade. Data integrity errors, mistakes in the upgrade process, and many things outside of your control (like software bugs or connection failures) can cause an upgrade failure. **Backing up your existing install is essential.**
{:.warning}

The folders and files that need to be backed up are:

| Element                            | Usual path                   | VARIABLE         |
| ---------------------------------- | ---------------------------- | ---------------- |
| public files                       | /var/www/html/public         | OJS_PUBLIC_PATH  |
| private files                      | /var/www/files               | OJS_PRIVATE_PATH |
| config.inc.php                     | /var/www/html/config.inc.php |                  |
| .htaccess or vhost (if any)        | /var/www/html/.htaccess      |                  |
| plugins (if you have special ones) | /var/www/html/plugins        |                  |
| local personalizations (if any)    | locale files, custom code, etc. |                  |

#### 3.1. Backup your database:

```bash
$ mysqldump --host="OJS_DB_HOST" -u $OJS_DB_USER -p$OJS_DB_PASSWORD $OJS_DB_NAME --result-file="$OJS_BACKUP_PATH/backupDB-date.sql"
```

> <i class="far fa-check-square"></i> **TIP**:
TODO: Add links to forum posts or FAQs explaining how to deal with charset issues. @marcbria 
{:.tip}

#### 3.2. Backup private files:

```bash
$ tar cvzf "$OJS_BACKUP_PATH/private-date.tgz" "$OJS_PRIVATE_PATH"
```

#### 3.3. Backup public, special files, and former code:

```bash
$ tar cvzf "$OJS_BACKUP_PATH/ojsfiles-date.tgz" "$OJS_WEB_PATH"
```

> <i class="far fa-check-square"></i> **RECOMMENDATION**:
If possible, use your backup to create a sandbox environment and test the upgrade in that sandbox first.
{:.tip}

### 4. Download updated release

```bash
$ cd "$OJS_ROOT_PATH"
$ wget "https://pkp.sfu.ca/ojs/download/$OJS_VERSION.tar.gz"
```

### 5. Check your system

Check your [README](https://pkp.sfu.ca/ojs/README) file from the downloaded tar.gz and be sure your system meets the requirements:

- Check your Apache version.
- Check your version of MySQL or PostgreSQL.
- Check your PHP version.
- Adjust your PHP timeouts and memory limits to ensure the upgrade process can successfully complete.
- Check your libraries and module requirements (e.g. in the README file).
- Check libraries and module requirements for plugins you've added (e.g. in the plugin README file).

### 6. Upgrade the code

Move your current installation:

```bash
$ mv "/$OJS_WEB_PATH" "/$OJS_BACKUP_PATH"
```

Extract the latest OJS code:

```bash
$ mkdir "$OJS_WEB_PATH"
$ tar -xvz --strip-components=1 "$OJS_VERSION.tar.gz" -C "$OJS_WEB_PATH"
```

Copy your customized config.inc.php and .htaccess (if added):

```bash
$ cp "$OJS_BACKUP_PATH/html/config.inc.php" "$OJS_WEB_PATH"
$ cp "$OJS_BACKUP_PATH/.htaccess" "$OJS_WEB_PATH"
```

> <i class="far fa-check-square"></i> **TIP**:
Review the release notes in `docs/release-notes` for changes to the configuration file. See `config.TEMPLATE.inc.php` for a description and examples of all supported configuration parameters.
{:.tip}

Copy your public files:

```bash
$ cp -r "$OJS_BACKUP_PATH/html/public/*" "$OJS_PUBLIC_PATH"
```

Change permissions if required by your server configuration:

```bash
$ sudo chown -R nobody:www-data /var/www/html/public/ /var/www/html/cache/

# Other distributions

(Debian)$ sudo chown -R nobody:www-data /var/www/html/public/ /var/www/html/cache/

(RHEL)$ sudo chown -R apache:apache /var/www/html/public/ /var/www/html/cache/
```

Change permissions if plugin installation from the web is desired:

```bash
$ sudo chown -R nobody:www-data/var/www/html/plugins/

# Other distributions

(Debian)$ sudo chown -R nobody:www-data/var/www/html/plugins/

(RHEL)$ sudo chown -R apache:apache /var/www/html/plugins/
```

If running under selinux, reset file contexts:

```bash
(RHEL)$ sudo restorecon -R /var/www/html/
```

Remove the original copy of the old installation:

```bash
$ sudo rm -fR /tmp/html/
```

### 7. Run the upgrade process

OJS offers 2 ways to upgrade:

- Command-line (recommended)
- Web-based

> <i class="fa fa-warning"></i> **WARNING**
Because the command-line update is recommended, this is the method covered by this guide. Command-line will be more verbose and you will have more control over timeouts, memory issues, etc. **Use web based upgrade at your own risk**.
{:.warning}

### 7.1 Check your versions

Confirm version numbers are as expected with:

```bash
$ php tools/upgrade.php check
```

![An example of running the PHP upgrade check in the command-line](https://i.imgur.com/3k7p6KR.png)

### 7.2 Run the upgrade

Run the upgrade script:

```bash
$ php tools/upgrade.php upgrade
```

If the upgrade is successful, you will get a "Successfully upgraded" message.

> ![An example of the "Successfully upgraded" message in the command-line](https://i.imgur.com/7s0P28d.png)

> <i class="fa fa-info-circle"></i> **INFORMATION**:
Depending on your journal data size and version change, it could take from minutes to several hours.
{:.notice}

> <i class="far fa-check-square"></i> **TIP**:
> The output will be extensive, so we recommend running the upgrade and logging the output of the process if you need to troubleshoot in case of failure:
> 
> ```
> $ nohup php tools/upgrade.php upgrade > upgrade.log &
> ```
> 
> If you want to check the progress while the upgrade is running:
> 
>```
>$ tail -f upgrade.log
>```
{:.tip}

### 7.3 Read your logs

Review the output of the upgrade script.

Unset the maintenance redirect, if set earlier:

```bash
$ cd /var/www/html/
$ mv .htaccess .htaccess.disabled
```

And reload the apache server again to apply the changes:

```bash
$ service apache2 reload

# Other distributions

(Debian)$ service apache2 reload

(RHEL)$ systemctl restart httpd
```

### 8. Verifying the upgrade

Checklist of actions to verify if all went well.

- Visit your OJS home page
- Check your DB
- Try to login
- Try to register a new user account

### 9. Re-adding custom plugins

Use the Plugin Gallery to re-add any custom plugins you had previously used.

If you have installed custom plugins which are not in the Plugin Gallery, check with the plugin distribution for an update which is compatible with your upgraded version.

## Troubleshooting

If you encounter problems, the following resources are available for troubleshooting.

* [PKP Forum](https://forum.pkp.sfu.ca/) - Search and post questions and answers with other software users
* [FAQ](https://docs.pkp.sfu.ca/faq/en/) - See the "Errors and Troubleshooting" section in the Frequently Asked Questions
* [Admin Guide Troubleshooting](https://docs.pkp.sfu.ca/admin-guide/en/troubleshooting) - See the "Troubleshooting" section in the Administrator's Guide
* [GitHub Issues](https://github.com/pkp/pkp-lib/issues) - Review known issues reported against versions of the software

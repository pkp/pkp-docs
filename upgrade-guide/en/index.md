---
generateHeadingToc: true
---

# OJS Upgrade Guide

## 1. Introduction

This guide is a general (version non-specific) Open Journal Systems upgrade guide for technical staff. A list of required knowledge and tools is provided below. While this guide focuses solely on OJS and the LAMP stack, the information here can be adapted to suit other PKP products (i.e. OMP, OPS) and other stacks with some modifications.

If you are looking for more general information on version releases and related bugfixes, please check the [PKP Announcements](https://forum.pkp.sfu.ca/c/announcements/10) section of the forum.

## 2. Required knowledge and tools

### Required knowledge

- Basic GNU/Linux administration skills
- Understand OJS versioning model (link to external document describing OJS version changes. This [document](https://hackmd.io/l72NQt4nT2CxMWPctuAUCQ?both) would be an start).
- Operating System and DB credentials.

### Required tools

- LAMP (not all stacks will be covered)
- An OJS distributed by PKP (tarballs)
- Ability to access to the server terminal (ie: SSH)

### Notations

Each installation is different so define here some variables that will be refered by the commands in this documentation.

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

## 3. Step-by-step process

### 3.1. Set your environment variables

Adapt the environment variables to fit with your installation if you like to cut&paste the commands of this guide:

    $ SERVERNAME="localhost" && WEB_USER="www-data" && WEB_GROUP="www-data" && OJS_ROOT_PATH="/var/www" && OJS_WEB_PATH="/var/www/html" && OJS_DB_HOST="db" && OJS_DB_USER="ojs" && OJS_DB_PASSWORD="ojsPwd" && OJS_DB_NAME="ojs" && OJS_BACKUP_PATH="/srv/backup/ojs" && OJS_VERSION="ojs-3.3.0-6"
    $ OJS_PUBLIC_PATH="$OJS_WEB/public" && OJS_PRIVATE_PATH="$OJS_ROOT/files" && MYSQL_DB_PATH="/var/lib/mysql"

### 3.2. Set your site to maintenance mode

If possible, do an Apache vhost redirection:

1. Modify your Apache `VirtualHost` directive, or create a .htaccess file in your webroot with the following content:

    ```
    order deny,allow
    deny from all 
    ErrorDocument 403 "OJS server in maintenance mode"
    ```

2. Then, reload the apache server to apply the changes:

    ```
    (Debian)$ service apache2 reload

    (RHEL)$ systemctl restart httpd
    ```

> **TIPS:**
> Does OJS include a "maintenance mode" feature?  [Well, we are on our way](https://github.com/pkp/pkp-lib/issues/3263)...

### 3.3. Backup existing install

**WARNING: DO NOT SKIP THIS STEP**

Upgrading your installation will make changes to your database and filesystem. If any change fails, a backup will be *required* to revert to the older version, or to retry the upgrade. Data integrity errors, mistakes in the upgrade process, and many things outside of your control (like software bugs or connection failures) can cause an upgrade failure.

The folders and files that need to be backed up are:

| Element                            | Usual path                   | VARIABLE         |
| ---------------------------------- | ---------------------------- | ---------------- |
| public files                       | /var/www/html/public         | OJS_PUBLIC_PATH  |
| private files                      | /var/www/files               | OJS_PRIVATE_PATH |
| database                           | /var/lib/mysql               | MYSQL_DB_PATH    |
| config.inc.php                     | /var/www/html/config.inc.php |                  |
| .htaccess or vhost (if any)        | /var/www/html/.htaccess      |                  |
| plugins (if you have special ones) | /var/www/html/plugins        |                  |
| local personalizations (if any)    | locale files, custom code... |                  |

#### 3.2.1. Backup your DB:

    $ mysqldump --host="OJS_DB_HOST" -u $OJS_DB_USER -p$OJS_DB_PASSWORD $OJS_DB_NAME --result-file="$OJS_BACKUP_PATH/backupDB-date.sql"

> TIPS: **TODO:** Add links to forum posts or FAQs explaining how to deal with charset issues.

#### 3.2.2. Backup private files:

    $ tar cvzf "$OJS_BACKUP_PATH/private-date.tgz" "$OJS_PRIVATE_PATH"

#### 3.2.3. Backup public, special files... and former code:

    $ tar cvzf "$OJS_BACKUP_PATH/files-date.tgz" "$OJS_WEB_PATH"
    
| **RECOMMENDATION:** |
| --------------------|
| If possible, use your backup to create a sandbox environment and test the upgrade in that sandbox first.   |

### 3.3. Download updated release

    $ cd "$OJS_ROOT_PATH"
    $ wget "https://pkp.sfu.ca/ojs/download/$OJS_VERSION.tar.gz"

### 3.4. Check your system

Check your [README](https://pkp.sfu.ca/ojs/README) file from the downloaded tar.gz and be sure your system meets the requirements:

- [ ] Check your Apache version
- [ ] Check your version of MySQL or PostgreSQL.
- [ ] Check your PHP version.
- [ ] Remove PHP timeouts and memory limits.
- [ ] Check your libraries and module requirements. (This needs to be documented in the README. e.g. libxml, mbstring; it is missing currently)
- [ ] Check libraries and module requirements for plugins you've added.

### 3.5. Upgrade the code

Move your current installation:

    $ mv "/$OJS_WEB_PATH" "/$OJS_BACKUP_PATH"

Extract the latest OJS code:

    $ mkdir "$OJS_WEB_PATH"
    $ tar -xvz --strip-components=1 "$OJS_VERSION.tar.gz" -C "$OJS_WEB_PATH"
    
Copy your customized config.inc.php and .htaccess (if added)

    $ cp "$OJS_BACKUP_PATH/html/config.inc.php" "$OJS_WEB_PATH"
    $ cp "$OJS_BACKUP_PATH/.htaccess" "$OJS_WEB_PATH"

Copy your public files

    $ cp -r "$OJS_BACKUP_PATH/html/public/*" "$OJS_PUBLIC_PATH"

~~Copy plugins you've added (if any)~~

    $ cp -r /tmp/html/plugins/path_to/plugin /var/www/html/plugins/path_to/

Change permissions if required by your server configuration

    (RHEL)$ sudo chown -R apache:apache /var/www/html/public/ /var/www/html/cache/

    (Debian)$ sudo chown -R nobody:www-data /var/www/html/public/ /var/www/html/cache/


Change permissions if plugin installation from the web is desired

    (RHEL)$ sudo chown -R apache:apache /var/www/html/plugins/

    (Debian)$ sudo chown -R nobody:www-data/var/www/html/plugins/

If running under selinux, reset file contexts:

    (RHEL)$ sudo restorecon -R /var/www/html/

Remove the original copy of the old installation:

    $ sudo rm -fR /tmp/html/

### 3.6. Run the upgrade process

OJS offers 2 ways to upgrade:

- Command-line (recommended)
- Web based

| **WARNING:** |
| ------------ |
|Because the command line update is recommended, this is the method covered by this guide. Command line will be more verbose and you will get more control over timeouts, memory issues... Use web based upgrade at your own risk. |


### 3.6.1 Check your versions

Confirm versions are as expected with:

    $ php tools/upgrade.php check

![](https://i.imgur.com/3k7p6KR.png)

### 3.6.2 Do the upgrade

Run the upgrade script as follows:

    $ php tools/upgrade.php upgrade

If the upgrade is successful, you will get a "Successfully upgraded" message.

> ![](https://i.imgur.com/7s0P28d.png)

> **COMMENT:** Depending on your journal data size and version change, it could take from minutes to several hours.

> **TIP:** The output will be extensive, so we recommend running the upgrade and logging the output of the process if you need to troubleshoot in case of failure:
> ```$ nohup php tools/upgrade.php upgrade > upgrade.log &```
> 
> If you want to check the progress while the upgrade is running:
> ```$ tail -f upgrade.log```

### 3.6.3 Read your logs

Read all of the output of the Upgrade script.

Unset the maintenance redirect, if set earlier.

    $ cd /var/www/html/
    $ mv .htaccess .htaccess.disabled

    (Debian)$ service apache2 reload
    
    (RHEL)$ systemctl restart httpd

### 3.6.4 Verifying the upgrade

* Checklist of actions to verify if all went well.

- [ ] Visit your home 
- [ ] Check your DB 
- [ ] Try to login 
- [ ] Try to register 
- [ ] Try to upload an article 
- [ ] ....

If you run into issues, visit [the forum](https://forum.pkp.sfu.ca/), [PKP GitHub issues](https://github.com/pkp/pkp-lib/issues), FAQs, or the troubleshooting section.

## 4. Keep your OJS updated?

## 5. Troubleshooting

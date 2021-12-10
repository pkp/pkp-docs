---
title: FAQ about How to Administer Open Journal Systems (OJS), Open Monograph Press (OMP), and Open Preprint Systems (OPS)
---

# Site Administration

For additional questions and answers, see the [source-code FAQ](https://raw.githubusercontent.com/pkp/ojs/main/docs/FAQ).

## How can I create a backup of my site?

To properly backup an OJS, OMP, or OPS system, the following should be backed up:

* The OJS database, using the tools provided by your DBMS (e.g., `mysqldump` for MySQL, `pg_dump` for PostgreSQL)
* The base OJS directory
* The non-public files directory (the directory specified by the `files_dir` configuration option), which is typically outside of the base OJS or OCS directory (this step does not apply to the PKP Harvester).
This backup procedure can be easily integrated into any automated backup mechanism.

There is also a [Backup plugin](https://github.com/asmecher/backup) available in the Plugin Gallery for Site Administrators to generate and download of backups of an OJS/OMP/OPS 3.x installation.

## How can I move an installation to a different server?

To move an OJS, OMP, or OPS install from one server to another, you will need to:

* Copy the database data, and import it into the new server (e.g., using the command-line tools provided by the DBMS)
* Copy the base install directory and non-public files directory
* Update config.inc.php with any changed settings for the new server (typically, the base URL, database authentication/access, email, and files settings will differ between servers)

## How do I know what version of the software I’m using?

* Log in to your OJS, OMP, or OPS site as an Administrator
* Click **Administration** in the dashboard menu
* Click **System Information**. The **Current Version** will be displayed at the top of the page.

### From the command line

Run:

```
php tools/upgrade.php check
```

…and you should see something like:

```
Code version:      3.0.2.0
Database version:  3.0.2.0
Latest version:    2.4.8.1
Current version is newer than latest!
```

### From the Database

Execute the following SQL query in your database:

```sql
SELECT major, minor, revision, build FROM versions WHERE product IN ('ojs2', 'omp') AND current=1;
```

### From the Source Code

Look at `dbscripts/xml/version.xml` in your OJS installation. Find the release, e.g.:

```xml
<release>3.1.0.0</release>
```

This will tell you the source code version. Note that this may be different than the database version, e.g. if you’ve upgraded the code but not the database.

## How can I remove "index.php" from the URLs in OJS?

OJS uses a REST-style URL syntax for all of its links. To force OJS to remove the "index.php" portion of all URLs, edit `config.inc.php` and set "restful_urls" to "On".
   
In addition, your server will have to support URL rewriting in order to recognize the new URLs. Apache servers use the mod_rewrite plugin, which must be enabled in your `httpd.conf` file, and the following section added to the correct section of either your `httpd.conf` file or an `.htaccess` file (preferred) in your OJS root directory (the same location as `config.inc.php`):
   
```
<IfModule mod_rewrite.c>
RewriteEngine on
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.*)$ index.php/$1 [QSA,L]
</IfModule>
```

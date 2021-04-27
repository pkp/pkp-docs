# Troubleshooting

## Permissions, File Access, Etc.

### Configuring File Permissions

It is difficult to prescribe exact steps towards setting proper file permissions, as so much depends on the server's operating system, web server, and PHP setup.

In general, you want your permissions set such that your webserver can read and write (recursively) to the `config.inc.php` `files_dir`, and to `cache/`, and `public/`. Optionally, for added features and reduced security, you can enable write to `config.inc.php`, to `plugins/` and perhaps to the locale `.xml` files. Your webserver should have read-only access to all other files and directories distributed in the package.

Start by checking which server API PHP uses on your server. If OJS, OMP, or OCS is already installed, log in as Site Administrator, click "System Information", and at the bottom of the page, click "Extended PHP Information". Find the line that says "Server API". Depending on which API you are using \(mod\_php/SAPI or CGI/FastCGI\), permissions should be set as follows.

* mod\_php/SAPI: In this configuration, all PHP scripts on the system typically execute as the same user \(usually Apache's "nobody" or "www-data" accounts\). Be warned that this may be insecure on a shared host. The files\_dir \(configured in config.inc.php\), the cache directory, the public directory, and all contents and subdirectories must be writable and readable by the web server user. The config.inc.php configuration file must be readable by the web server user.
* CGI/FastCGI: In this configuration, PHP scripts will typically run under your user account \(though server configurations may vary\). This can be a well-secured configuration. The files\_dir \(configured in config.inc.php\), the cache directory, the public directory, and all contents and subdirectories must be writable and readable by this user account. The config.inc.php configuration file must be readable by this account.

#### How does Linux do this?

In Linux, permissions are based both on a numeric access control mode, and on file ownership 63. Understanding this permissions scheme is a prerequisite.

For example, ownership of `apache:www` with permissions of `750` (`rwxr-x---`) means that the apache user can read, write and execute; anyone with the `www` group can read or execute; and the file is protected against access by anyone else. Note that “execute” means two entirely different things for directories than for files!

##### An Example (for dedicated hosting)

Generally, the ownership of `cache/`, `public/`, and other web-writable directories should be your web user and the web-user’s primary group, for example `apache:www-data`. Permissions should probably be `750`.

The ownership of the other non-web-writable directories should be your user, with either the web user’s group, or with public execute permissions. For example:

`myuser:www-data` with `750`

or

`myuser:ourgroup` with `755`

Web-writable files would be the same, but without the execute permission:

`apache:www-data` with `640`

Non-web-writable files would be perhaps:

`myuser:www-data` with `640`

or

`myuser:ourgroup` with `644`

#### But What about Shared Hosts?

With some shared hosts (for example, if your only access is via cPanel or a similar web-based admin tool), you may not have the ability to change the file ownership, and your webserver is effectively running as your user. In that case, you may still have the ability to protect your files by making them non-writable by your own user (even though this sounds counter-intuitive). In a shared host, you will almost certainly want to deny world permissions to your files, but look to the documentation and support for your host in particular.

#### A Note on Security Configurations

Because security configurations can vary, and because of the volume of requests for support we receive regarding file permissions, we will only be able to provide limited help with these issues. Please be as specific as possible when posting about permissions issues.

PHP Safe Mode is not a recommended configuration and may not function properly. This is because in some configurations it will cause PHP's `mkdir()` function to create directories that cannot thereafter be read or written because of file permissions. This is a limitation of Safe Mode and may prevent you from using OJS in a Safe Mode environment.

### HTML Galleys don't display properly / files I upload aren't being identified properly.

This is most likely caused by your server incorrectly identifying your HTML file as something other than HTML. The quickest way to diagnose this is to check the Galley Edit page: if you have uploaded an HTML file and the Label field says something other than "HTML" (like "Untitled", for example), then the file has not been correctly identified as HTML and will most likely not display correctly.

OJS, OMP, and OCS use three methods to determine a filetype, in the following order:

* PHP's mime_content_type function, which uses your system's magic.mime file (this method is deprecated)
* PHP's finfo_... suite of functions (which replaces mime_content_type as the preferred method)
* The external "file" tool, by executing the following:

`file -bi [filename here]`

Problems may occur if:

* you are using the first option but your magic.mime file does not include enough information on the filetype you are attempting to identify;
* your server configuration does not support the first two options;
* you do not have sufficient permissions to run an external tool as in the third option.

Additionally, you may be encountering problems due to malformed files. If you are having trouble having your HTML files recognized, you may want to run them through [HTML-Tidy](http://www.w3.org/People/Raggett/tidy/) or otherwise ensure that they are valid HTML. HTML files created by word processors in particular may have a hard time being recognized as HTML.

You may also want to search the [forum](https://forum.pkp.sfu.ca) for the keywords "magic mime" or for "mimetype" -- many users have had this problem, and there are several discussions on how to solve it.

### My CSS files aren't being identified properly.

This could be the result of the identification issue above, or it could be because your css file includes a comment on the first line, before any actual CSS. Try removing the comment(s) from the top of the file and re-uploading.

Note that this situation often occurs when uploading a modified copy of the main CSS file. We don't recommend this approach -- it's better to upload a CSS file that only contains overrides for the styles that you wish to modify from the default layout, as the main stylesheet is applied before any custom CSS files. This will help to avoid stylesheet headaches on upgrade.

## Character Encoding

Character encoding issues mostly crop up in two situations: when journals are migrated from another platform to OJS; or (more commonly) when an OJS journal is migrated from another server to our servers.

It’s often helpful to check the current database settings to ensure that you’re working in the character set that you think you’re working with. Once logged into MySQL, try the following:

```
show variables like 'char%';
show variables like 'collation%';
```

The goal of fixing character encoding problems is to ensure that the data stored in the database matches the character set settings of the database, i.e. that we’re storing utf8 data in a utf8 database. Once this has been achieved, we want to ensure that the OJS config.inc.php settings match the data and db settings, i.e. client, connection, database character set settings are all set to utf8 in config.inc.php.

### Introduction to Character Sets and Encodings

The following articles provide a good introduction to character sets and encodings:
* [Character Encodings: Essential Concepts](https://www.w3.org/International/articles/definitions-characters/)
* [The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets (No Excuses!)](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/)

### General Approach

* Check config.inc.php db settings: client, connection, database character sets
* Compare config.inc.php db settings against actual settings in the db, i.e.
 * `show variables like 'char%'`
 * `show variables like 'collation%'`
* There's often a mismatch between 1. and 2. that provides the first mismatch clues
* Generate two db dumps:
 * `mysqldump db --opt --default-character-set=latin1 result-file=latin1.sql`
 * `mysqldump db --opt --default-character-set=utf8 result-file=utf8.sql`
* Explore each dump file in vim using its character encoding tools: [https://spin.atomicobject.com/2011/06/21/character-encoding-tricks-for-vim/](https://spin.atomicobject.com/2011/06/21/character-encoding-tricks-for-vim/)

#### Common Problem #1: Latin1 table definitions with UTF8 data

During migration from another institution you may receive a MySQL dump that includes table definitions that are set to latin1 (i.e. CREATE TABLE access\_keys … DEFAULT CHARSET=latin1) even though the actual data saved in the tables is UTF8. You can config.inc.php on the original server to confirm if this is the case: if client\_charset = utf-8 in config.inc.php then data will be stored as UTF8 in the database.

By default, journals on our servers are correctly configured to use UTF8 settings throughout the database and config.inc.php. Importing a mismatched database with Latin1 table definitions and UTF8 data will result in character display issues in OJS.

The following conversion steps and import process can be used to resolve these issues:

Conversion steps:
* ask for a latin1 mysql dump with `--default-character-encoding=latin1 --result-file=dump.latin1.sql`
* open `dump.latin.sql` in vim
* remove 'SET NAMES latin1' from the top of the file
* replace latin1 table definitions with utf8 table definitions via `:%s/CHARSET=latin1/CHARSET=utf8/g`
* set the file encoding for the file to utf8 via `:set fileencoding=utf8`
* save the file to a new filename via `:w dump.utf8.sql`

Import steps:
* create a clean utf8 database: `CREATE DATABASE import\_ojs DEFAULT CHARSET utf8;`
* switch to the new db: `USE import\_ojs`
* set everything to utf8: `SET NAMES utf8;`
* import the converted dump: `SOURCE dump.utf8.sql;`

... and so on, replacing "article\_settings" with the table you need to clean up, and "setting\_value" with the column in the table needing cleanup.

#### Common Problem #2: double-quotes with encoding issue on DUMP files

During migration/upgrade from lib-ojs server to sfulib MySQL dump files from former may present encoding characters issue related to double-quotes, e.g.:  â€œlearning,â€<9d> which should be “learning,” even using correct UTF8 collation to export from Database.

This problem shows up when users copy-and-paste fancy/smart quotes from MS Word which uses the windows-1252 character set that  doesn't match with anything in UTF8. Which results in this sequences that look like â€œlearning,â€<9d>.

The following steps can be used to resolve this encoding issue:

* Install on your local machine [ftfy](https://ftfy.readthedocs.io/en/latest/), as it is a python tool it will require python3 installed as well;
* Edit the command-line ftfy executable cli.py (it may be in a different path depending on your environment.): `/usr/local/lib/python3.6/site-packages/ftfy/cli.py`
* Around line 100 (`$ vim +100 cli.py`) add an extra parameter 'uncurl_quotes=False' to the fix_file function. It will like as follows:

```
for line in fix_file(file, encoding=encoding,
     fix_entities=fix_entities,
     normalization=normalization,
     uncurl_quotes=False):
```

* Download to you local machine the DUMP file (i.e: client.orig.sql) and you will be able to run: `$ ftfy --output=client.clean.sql client.orig.sql`

#### Manual Workarounds (Last Resort)

If you are running into strange characters like Ã¢â‚¬ / Ã¢â‚¬" / Ã¢â‚¬â„¢ / etc., try the following SQL commands to search and replace them (taken from this [blog post](https://digwp.com/2011/07/clean-up-weird-characters-in-database/)):

```
UPDATE article\_settings SET setting\_value = REPLACE(setting\_value, 'Ã¢â‚¬Å“', '"');
UPDATE article\_settings SET setting\_value = REPLACE(setting\_value, 'Ã¢â‚¬ ', '"');
UPDATE article\_settings SET setting\_value = REPLACE(setting\_value, 'Ã¢â‚¬â„¢', ''');
UPDATE article\_settings SET setting\_value = REPLACE(setting\_value, 'Ã¢â‚¬Ëœ', '"');
UPDATE article\_settings SET setting\_value = REPLACE(setting\_value, 'Ã¢â‚¬"', '"“');
UPDATE article\_settings SET setting\_value = REPLACE(setting\_value, 'Ã¢â‚¬"', '"”');
UPDATE article\_settings SET setting\_value = REPLACE(setting\_value, 'Ã¢â‚¬ ¢', '-');
UPDATE article\_settings SET setting\_value = REPLACE(setting\_value, 'Ã¢â‚¬ ¦', '"¦');
```

If all else fails:

Kurt has run the following dump command with some success, but without explaining exactly what it does:

```
mysqldump ocs-$USERNAME --opt --default-character-set=latin1 --skip-set-charset --single-transaction  --ignore-table=ocs-$USERNAME.paper_search_keyword_list --ignore-table=ocs-$USERNAME.paper_search_object_keywords --ignore-table=ocs-$USERNAME.paper_search_objects --result-file=/tmp/$USERNAME.sql
```

## Error-reporting: Blank Pages, Diagnostics, etc.

### When I click some button or follow some link, I'm left with a blank page. What do I do?

1: Check your webserver error log

Usually, this indicates that a PHP error has occurred and the message has been sent to your web server or system log file. Check there – e.g. `/var/log/apache/error.log`, although the exact location will depend on your server configuration – for further details.

2: Check your file permissions

If you haven’t installed OJS, OMP, or OCS yet, then the most likely cause is a problem with file permissions in your cache/ or cache/t_compile directories. See docs/README for information on file permissions.

3: Further troubleshooting

If you don’t have access to your server log file, you can try adding the following near the top of index.php to cause error messages to be sent to the browser:

`ini_set('display_errors', E_ALL);`

If you happen to be running in a Windows IIS environment, you may also have to enable `fastcgi.impersonate=1` in your php.ini file.

You may also want to temporarily modify (approximately) line 27 of file `lib/pkp/includes/functions.inc.php`, removing the @ operator, so it would look like this:

`if((include_once BASE_SYS_DIR.'/'.$filePath) === false) {`

Remember to revert that change afterwards.

Sometimes a specific PHP script included in the software will fail to execute without any error message, e.g. due to a broken modification or a file permissions problem. To determine which script might be causing the problem, you can edit your `lib/pkp/includes/functions.inc.php` and find the following line:

`function import($class) {`

Add below it:

`echo "Importing " . $class . " \n";`

This will cause OJS, OMP, or OCS to list class files before importing them (for ANY viewer of the site). If you are having a problem with a particular file, it will be the last one listed. Double-check the file permissions on it and try running it through the PHP linter (php -l path/to/file.inc.php).

Be sure to revert this change when you are finished.

### What is a stacktrace and how do I display them in OxS?

A stacktrace shows the route through the code taken to display the current page. When an error is displayed, a stacktrace is often helpful in helping to track down how the error is being caused, by letting the developer step through the code and see what route they must take to reproduce the error.

To enable stacktracing on errors in OxS, turn on the 'show_stacktrace' option in config.inc.php (near the bottom of the document). An example stacktrace will look like this:

```
DB Error: ERROR: invalid input syntax for integer: ""
Stack Trace:
File: /var/www/ojs/classes/article/ArticleGalleyDAO.inc.php line 76
Function: DAO->retrieve("SELECT COUNT(*) FROM article_galleys WHERE public_galley_id = ? ...", Array(2))
File: /var/www/ojs/classes/submission/form/ArticleGalleyForm.inc.php line 233
Function: ArticleGalleyDAO->publicGalleyIdExists("pdf", "")
File: /var/www/ojs/pages/sectionEditor/SubmissionEditHandler.inc.php line 1459
Function: ArticleGalleyForm->execute("layoutFile")
File: /var/www/ojs/pages/sectionEditor/SubmissionEditHandler.inc.php line 1314
Function: SubmissionEditHandler::uploadGalley("layoutFile")
File: /var/www/ojs/pages/sectionEditor/SectionEditorHandler.inc.php line 469
Function: SubmissionEditHandler::uploadLayoutFile()
File: (unknown) line (unknown)
Function: SectionEditorHandler::uploadLayoutFile(Array(0))
File: /var/www/ojs/index.php line 88
Function: call_user_func(Array(2), Array(0))
File: /var/www/ojs/index.php line 99
Function: handleRequest()
```

### I am receiving the following error: Fatal error: Allowed memory size of 8388608 bytes exhausted (etc.)

Your PHP memory limit is most likely set too low. It's normally set at 8mb by default, but OJS, OMP, and OCS need at least 16mb set to run properly (and often more for occasional tasks like upgrading). You can find a `memory_limit` configuration directive in your server's `php.ini` config file.

### After completing the install page, I receive a database error. What's going on?

You are probably receiving an error similar to

`DB Error: Table 'ojs.journals' doesn't exist`

... where the 'ojs' part of the error is the name of your database as specified during install. What has most likely happened is that you have attempted to create your database and the installer has attempted to fill that database with the necessary data, but for some reason was unable to do so. Possible reasons for this include your database system (eg. MySQL) not allowing web-based database creation; or otherwise not allowing large-scale table creation. The best solution is to:

* restore your `config.inc.php` to the original (copying over `config.TEMPLATE.php` will do this);
* create your database manually via phpMyAdmin, CPanel, or similar, depending on what your service provider provides;
* restart the installation process by reloading your root OJS/OMP/OCS page;
* fill in all installation fields as appropriate, ensuring that you write in the correct name for your newly-created database;
* uncheck the "Create new Database" option;
* click the "Manual Install" option at the very bottom of the installation page.
* copy the database query from the resulting page, and run it against your database via phpMyAdmin or similar.

Please note that when you click the Manual Install button, the resulting page will say that the OJS/OMP/OCS Install has completed successfully, but this isn't quite true: you still have to copy the SQL statements and add them to your database manually.

**Note:** You may also be encountering a plugin bug. There have been plugin bugs in the past where plugins have attempted to access the "journals" table before the installer has created the table; these will result in a "Table 'ojs.journals' doesn't exist" message when someone attempts to load the installer page in the first place. In this case, you can narrow it down to a particular plugin by checking the stack trace.

## PHP and PKP Application Compatibility

If you are running PHP 5.3+ \(which you should be doing\), you will need to run OJS 2.4.0+, OMP 1.0+ or OCS 2.3.6+. Older versions of the software will not work on newer versions of PHP.

If you are running PHP 7+, you will need to run OJS 3.0+.

OJS and OMP 3.1.2+ **requires** PHP 7.1 or above. Refer to [docs/README](https://github.com/pkp/ojs/tree/main/docs) for your OJS/OMP version for more information about PHP system requirements.

**NOTE**: If you are running OJS or OMP 3.x on a PHP7+ LAMP stack, please remember to update your MySQL driver parameter\(Database section\) on `config.inc.php` file, i.e.:

`driver = mysqli`

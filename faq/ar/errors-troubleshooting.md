# Errors and Troubleshooting

## Why do I get an error message when I try to upload a file?

If the file is large, you may be exceeding file size upload limits. You can increase the following limits in your php ini file, or ask an Administrator to increase the limits if you do not have access to the site files:

- `post_max_size`
- `upload_max_filesize`
- `memory_limit`
- `max_execution`

You can also check that you have file permissions set correctly.

## How do I fix this strange text on my site that looks like  ##navigation.journalHelp##?

When you see text on your site with hashtags, like `##default.journalSettings.emailSignature##`, it means there is a missing translation. All text you see on your OJS, OMP, or OPS site comes from locale (language) files, depending on which language has been installed and selected for your site. Each locale file has a set of “message keys” or pieces of text that need to be added by translators. If a message key is missing, the software will display the reference to the message key instead.

For example, if the translation is missing for the Archives menu link, the menu link will show as `##archive.archives##`.

To fix this, you need to add the missing translation for the message key. The best way is to use our software translation tool Weblate, so the translation will be contributed back to the PKP user community. The [PKP Translating Guide](https://docs.pkp.sfu.ca/translating-guide/en/) explains how to do it. To just edit the translation on your local site, you can use the [Custom Locale plugin](https://docs.pkp.sfu.ca/translating-guide/en/customize-locale).

## Why do characters appear strangely on my site?

Character encoding issues are common and can cause problems when migrating a PKP software installation to a different server. See the [PKP Administrator’s Guide](https://docs.pkp.sfu.ca/admin-guide/en/troubleshooting#character-encoding) for information about character encoding issues.

## How can I prevent spam?

Please see the [PKP Administrator’s Guide - Managing Spam](https://docs.pkp.sfu.ca/admin-guide/en/securing-your-system#managing-spam).

## What does this confusing error message mean?

When you get an error message on your site, it’s usually brief and doesn’t give much information. For example:

- 404 page not found
- A database error has occurred
- Forbidden - you don’t have permission to access
- HTTP error 500

You need to look elsewhere for more information about the error before you can solve it.

### First, check your PHP error log

The location of your PHP error log will depend on your hosting provider's configuration, but usually it's a file called `error_log` somewhere within your account. If you’re running your own server, logs will usually be somewhere like `/var/log` or `/var/log/apache`.

It’s rare and uncommon for your web host to not provide access to your error log. If your service provider has a knowledge base, they will typically describe how to find your logs there.

In most shared hosts, there is a directory called “logs” or something similar.

Error logs can look confusing if you’re not familiar with them but you want to look for the word “error” and other keywords that indicate what could be going wrong. An error will often refer to a particular file in your OJS installation and a line of code in that file. You can open the file and find the line to try to understand the error. It is likely that other users have had the same problem so you can search for the error and solution on the [PKP Support Forum](https://forum.pkp.sfu.ca/).

Here are some common error messages and possible solutions.

### Strict standards or deprecated methods

Examples:

```
PHP Strict Standards: Non-static method Request::getContext() should not be called statically, assuming $this from incompatible context in /home/wwwroot/lanmp5.3/domain/openjournal.org/web/lib/pkp/classes/plugins/ThemePlugin.inc.php on line 409
```

```
PHP Deprecated: Non-static method PKPRequest::_checkThis() should not be called statically in /home/gayanabo/public_html/ojs/lib/pkp/classes/core/PKPRequest.inc.php on line 396
```

Any message that begins with “PHP strict standards” or “PHP Deprecated” can be ignored.  These errors are an informational message aimed at developers and often appear after installation or upgrade.  If you see a lot of “strict standards” errors on your log, look for other errors.  However, they can clutter the error log and make it hard to see other errors, so you can suppress them by doing the following:

1. Find and open your `php.ini` file
2. Locate the section for error reporting and your particular setting
3. Add `& ~E_STRICT` to the end of the active error reporting line. For example, if your current setting is `error_reporting = E_ALL & ~E_NOTICE & ~E_DEPRECATED` you would change it to read `error_reporting = E_ALL & ~E_NOTICE & ~E_DEPRECATED & ~E_STRICT`
4. Save and close the file

### Call to undefined function xml_parser_create

Example:

```
PHP Fatal error: Call to undefined function xml_parser_create() in /home/cimsur/ojs/lib/pkp/classes/xml/XMLParser.inc.php on line 271
```

A fatal error from `xml_parser_create` indicates that PHP does not have the [xml extensions enabled](http://php.net/manual/en/book.libxml.php). Take a look at your php installation or contact your webhost and see if you can add the extension called `libxml`.

### Permission denied

Example:

```
Warning: file_put_contents(/usr/share/ojs/ojs-3.0b1/cache/fc-locale-05afc2c4827ae11210c660d134ba1f01.php): failed to open stream: Permission denied in /usr/share/ojs/ojs-3.0b1/lib/pkp/classes/cache/FileCache.inc.php on line 90
```

This usually indicates the system is trying to write to a folder and permissions have not been set correctly in that folder. Check that the permissions on all of your folders have been set correctly, according to the instructions in the [PKP Administrator’s Guide](https://docs.pkp.sfu.ca/admin-guide/en/troubleshooting#permissions-file-access-etc).

### Call to a member function… on a non-object

Example:

```
Fatal error: Call to a member function getFullName() on a non-object in /home/ojsepw/public_html/cache/t_compile/%%B0^B03^B0335942%%copyedit.tpl.php on line 20
```

This error can indicate that a value is missing in your database.  For example, a submission has been assigned to a non-existent user because a user’s account has somehow been deleted.  You can run a script to identify the missing data

### File does not exist

Example:

```
Errors occurred during installation: The directory specified for uploaded files does not exist or is not writable.
```

This can happen during installation or when you’re trying to upload or access a file.  It can also indicate permissions issues - see the above error “Permission denied.”

### Cannot use a scalar value as an array

Example:

```
WARNING: Cannot use a scalar value as an array in home/user/public_html/ojs/classes/journal/JournalSettingsDAO.inc.php at line 83
```

This usually occurs during an upgrade and means there is an empty locale column in a case where OJS is expecting a value there, or a locale column with a value where OJS was expecting an empty column.  It sometimes indicates that an upgrade has previously failed, or hit an error and left the database in an inconsistent state.

To track this down, try running the following query:

```
SELECT DISTINCT s1.setting_name FROM journal_settings s1, journal_settings s2 WHERE s1.setting_name = s2.setting_name AND s1.locale = '' AND s2.locale <> '';
```

This will tell you what setting_name value in journal_settings is mismatched, i.e. has some values with a locale column set, others with it empty.

**OR**

You can debug this by editing `lib/pkp/classes/core/DataObject.inc.php`, and finding line 133 or so, which should look like:

`$this->_data[$key][$locale] = $value;`

Just before this, add:

```php
if (isset($this->_data[$key]) && !is_array($this->_data[$key])) error_log('Mixed localization for ' . get_class($this) . ', setting "' . $key . '"');
```

Then trigger the warning again (e.g. by reloading the page you saw it on before), and look in your log for more details.

### Parse error: syntax error, unexpected

Example:

```
Parse error: syntax error, unexpected '[' in C:\inetpub\vve-site\api\vendor\nikic\fast-route\src\functions.php on line 12
```

This can mean your version of PHP is out of date and you should upgrade to the minimum version of PHP required by the application.

### Error message on upload: “No file uploaded or invalid file type!”

This message has two common causes:

1. Uploads are failing entirely. Check to ensure that your PHP configuration permits uploads.
2. The upload is succeeding, but the software is having trouble ensuring that it’s the right type of file.

PKP software uses MIME types to ensure that e.g. uploaded logos are actually image files. There are several mechanisms that may be available to PHP to do this, depending on your server configuration:

- PHP’s `fileinfo` extension
- PHP’s `mime_content_type` function
- The system’s file tool

OJS 3.x tries these in order, using the first mechanism it can.

If your PKP application appears to be failing to identify a file you’re uploading, ensure…

- for images, that it is of an acceptable type. For images, .png and .jpg are preferred. .gif files are not currently supported; .png files are better for all uses except animation. Use a .png file for a favicon.
- that the `mime_database_path` setting in your `config.inc.php` is correct. Commenting it out should cause the software to use an internal database.

If these don’t work, you may have to investigate your system’s configuration more closely, e.g. to determine which of the above functions is available. This will take some PHP expertise.

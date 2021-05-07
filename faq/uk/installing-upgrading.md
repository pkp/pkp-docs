# Installing and Upgrading

## Where can I find help upgrading my site?

PKP offers free technical support on the [PKP Community Forum](https://forum.pkp.sfu.ca/). You may be able to find an answer by searching the questions that have already been posted. If not, create an account (or log in) and post your question. Please include the version of the software you are using and are attempting to upgrade to and detailed information about the errors or issues you are having.

## What does this database error mean that I receive after completing installation?

You are probably receiving an error similar to `DB Error: Table 'ojs.journals' doesn't exist`

... where 'ojs' is the name of your database as specified during install. Most likely, you have attempted to create your OJS database and the installer has unsuccessfully attempted to fill that database with the necessary data. Possible reasons that it was unable to do so include your database system (eg. MySQL) not allowing web-based database creation; or not allowing large-scale table creation. The best solution is to:

* Restore your config.inc.php to the original (by copying over config.TEMPLATE.php);
* Create your database manually via phpMyAdmin, CPanel, or similar, depending on what your service provider provides;
* Restart the installation process by reloading your root OJS/OCS page;
* Fill in all installation fields as appropriate, ensuring that you write in the correct name for your newly-created database;
* Uncheck the "Create new Database" option;
* Click the "Manual Install" option at the very bottom of the installation page;
* Copy the database query from the resulting page, and run it against your database via phpMyAdmin or similar.

Please note that when you click the Manual Install button, the resulting page will say that the OJS Install has completed successfully, but this isn't quite true. You still have to copy the SQL statements and add them to your database manually.

You may also be encountering a plugin bug, where plugins have attempted to access the "journals" table before the installer has created the table; these will result in a "Table 'ojs.journals' doesn't exist" message when someone attempts to load the installer page in the first place. In this case, you can narrow it down to a particular plugin by checking the stack trace.

## How should file permissions be set on my installation?

This is a difficult question to answer generally, as it depends on your server's operating system, web server, PHP setup, and hosting environment.

Start with your hosting provider’s documentation and support, or with your system administrator, and with the following instructions on the [PKP Administrator’s Guide on permissions](https://docs.pkp.sfu.ca/admin-guide/en/troubleshooting#permissions-file-access-etc).

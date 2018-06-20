# Install Process

There are a number of components to a successful OJS install: downloading and unpacking the OJS application files in a web accessible directory on your server; creating a separate files/ directory that is not web accessible; and most likely, manually creating a database user and database.

### Note
> All servers are different, and the installation process in your case may be different than what follows. If any of this confuses you or for some reason does not work, be sure to check the documentation that comes with OJS in the docs/ folder, as well as the support forum and FAQ. But also be sure to read your service provider and server documentation as well.


## Download and unpack OJS Installation File

All OJS downloads can be found at http://pkp.sfu.ca/ojs_download. Depending on your circumstances you will want to download either the most recent stable version (best for production systems) or the most recent development version (less stable but with more features). The install process is the same for both versions. 

Unpack the tar file, and move the unpacked contents to a web-accessible directory on your web server from which you want OJS to run. A common web-accessible directory is /var/www/html, which we will use for this example.

### Note

> Regarding web accessible directories: each server is different. If you do not know where your web-accessible directory is (that is, the directory where you put everything that you want people to see on your website; sometimes called a web root directory), you should contact your service provider.

If you did not download the tar file directly to your web server, you can untar the tar file on your desktop and transfer its contents by FTP, or you can transfer the tar file by FTP to your web server directly and run the following command:

```
tar xzf ./ojs-3.00.tar.gz
```

This will extract the OJS files into the directory /var/www/html/ojs-3.00. You may want to change the name of the directory to something more user friendly, such as "ojs". At this point, you should be able to go to that directory on your server, (ie. point your browser to http://example.com/ojs/) and see the install screen.


## Prepare Your Environment for the Install

You will need to create a directory for OJS to store its submission files in. This should not be in a web-accessible directory, as then it would be possible for private files to be accessed online (eg. by savvy users attempting to point directly to the file in question by typing http://www.example.com/files/journals/1/articles/1/submission/review/1-3-1-RV.doc into their browser). If, for example, you have placed the OJS application files in /var/www/html/ojs/, you will have to create this directory outside of /var/www/.

You will then need to grant file permissions so that the web server can administer and write to the public/ and cache/ subdirectories of the OJS installation path, the files/ directory you just created, and the config.inc.php configuration file. The specifics of setting permissions will depend on your web server configuration, i.e. whether PHP scripts run SetUID. The install page will warn you if you don't have the appropriate permissions.

In the above example, config.inc.php isn't writable by the server (which is not strictly necessary for normal functioning, although it is for automatic installation), and neither is the cache/t_cache/ directory. Remember, all directories within cache/ must be writable by the server.

##Configure Your Database Information

You will need to create a database for the system to use, and also ensure that you have a database user that has sufficient permissions to operate the database. OJS can conceivably run on many different types of RDBMS, although only PostgreSQL and MySQL are actively tested.

For MySQL, you can create the database and user via phpMyAdmin or the MySQL command line interface. A CLI example follows:
```
$ mysql -u root -p
Enter password: 

Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 95
Server version: 5.1.38 MySQL Community Server (GPL)

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> CREATE DATABASE ojs DEFAULT CHARACTER SET utf8;
Query OK, 1 row affected (0.13 sec)

mysql> GRANT ALL ON ojs.* TO pkpuser@localhost IDENTIFIED BY 'password';
Query OK, 0 rows affected (0.15 sec)

mysql> exit;
Bye
```
In this example, the database is called ojs; the database user is called pkpuser; and the password is password (certainly not secure!). You will need those three pieces of information later.

## Complete the Install from the Web

Point your web browser to your OJS installation directory. You will see an OJS Installation installation page: fill in all of the form fields (including the database connection information you established previously; and under File Settings, the location of the files path you previously created) and click the Install button at the bottom of the page.

You must configure your site's locale settings: not only the locales available for your users, but also character set options. If possible, change the last two from the default (shown) to "Unicode (UTF-8)". Unless your database server is particularly old, you should not run into any problems setting these options to Unicode. This will ensure better multilingual support.

You must then specify the location of the files/ directory you previously created.

Next, choose your security settings. This configuration option specifies how system passwords are stored. SHA1 is more secure than MD5, so if your PHP version is 4.3.0 or above, choose the SHA1 option.

You must then specify a username, password and email for the Administrator Account. After a successful install, you will use this account to log in and configure new journals; but typically, this account will not be used for the day-to-day running of a journal.

Next is the Database Settings section. You must fill in the proper database connection settings: choose the correct database driver for your system; specify the correct host (normally localhost, but this could be different depending on your setup); the username and password of the database user; and the database name that they will be connecting to. If you have not yet created the database, then ensure that the "Create new database" checkbox remains checked; however, this option will not work if your database user does not have sufficient permissions to create databases, in which case you should create the database beforehand.


##OJS Install: Database Settings


Then choose an appropriate OAI repository identifier (the default may be sufficient), and choose the Install Open Journal Systems option if your database user can write directly to the database; or Manual Install if you need to populate the database manually.

If all goes well, you will then see a success screen.

If your config.inc.php file wasn't writable by the server, you will be prompted to copy the contents of a text field and paste it to the default config.inc.php file on the server.

If you chose to do a Manual Install, you will be prompted to copy a series of SQL statements, which must then be executed via your SQL server.



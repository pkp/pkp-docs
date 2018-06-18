# Managing the Server Environment

### Configuring the Proper Environment {#docs-internal-guid-6febf1df-b712-a6c2-06bc-8713ee194a6c}

Step 1: read the README \([https://pkp.sfu.ca/ojs/README](https://pkp.sfu.ca/ojs/README)\). This contains a fair amount of information on configuring a secure web environment.

#### File Permissions

It is difficult to prescribe exact steps towards setting proper file permissions, as so much depends on the server's operating system, web server, and PHP setup.

Start by checking which server API PHP uses on your server. If OJS is already installed, log in as Site Administrator, click "System Information", and at the bottom of the page, click "Extended PHP Information". Find the line that says "Server API". Depending on which API you are using \(mod\_php/SAPI or CGI/FastCGI\), permissions should be set as follows.

* mod\_php/SAPI: In this configuration, all PHP scripts on the system typically execute as the same user \(usually Apache's "nobody" or "www-data" accounts\). Be warned that this may be insecure on a shared host. The files\_dir \(configured in config.inc.php\), the cache directory, the public directory, and all contents and subdirectories must be writable and readable by the web server user. The config.inc.php configuration file must be readable by the web server user.
* CGI/FastCGI: In this configuration, PHP scripts will typically run under your user account \(though server configurations may vary\). This can be a well-secured configuration. The files\_dir \(configured in config.inc.php\), the cache directory, the public directory, and all contents and subdirectories must be writable and readable by this user account. The config.inc.php configuration file must be readable by this account.

Because security configurations can vary, and because of the volume of requests for support we receive regarding file permissions, we will only be able to provide limited help with these issues. Please be as specific as possible when posting about permissions issues.

PHP Safe Mode is not a recommended configuration and may not function properly. This is because in some configurations it will cause PHP's mkdir\(\) function to create directories that cannot thereafter be read or written because of file permissions. This is a limitation of Safe Mode and may prevent you from using OJS in a Safe Mode environment.

#### Database Setup, Security, and Character Encoding

Although OJS supports various database servers \(e.g. MySQL, PostgreSQL\), this guide assumes that you will be using MySQL for your OJS installation.

To ensure that database access is limited to only the tables required by your OJS installation, you should create a dedicated MySQL user account for OJS with limited system privileges. It is not recommended to use the MySQL ‘root’ user account for your OJS install. In addition, if you haven’t already, please ensure that you set a password for the MySQL ‘root’ user account \(by default, the MySQL ‘root’ user account does not require a password\).

To create a MySQL OJS user \(e.g. ‘ojs\_user’\) with access to an OJS database \(e.g. ‘ojs\_database’\), you will need to execute the following MySQL commands using the ‘root’ MySQL user account.

Login to MySQL using the root MySQL user account

`$ mysql -u root -p`

Create a dedicated OJS user account

``mysql> CREATE USER `ojs_user`@`localhost` IDENTIFIED BY 'password';``  


Grant OJS user access to OJS database

``mysql> GRANT ALL ON `ojs_database`.* TO `ojs_user`@`localhost`;``

Create empty OJS database using UTF8 character encoding

``mysql> CREATE `ojs_database` DEFAULT CHARACTER SET utf8;``

Save the MySQL OJS account username and password, since they will be required by the OJS installer, which will need to connect to the newly created database using the MySQL OJS user account.

Unless there is a compelling reason to use another character encoding, UTF8 should be used by default for your OJS installation. When invoking either the web-based or command-line OJS installer, ensure that you specify UTF8 for the client character set, connection character set, and database character set.

If you are manually editing the OJS `config.inc.php` file, the character set settings should be defined as follows. Note the additional dash \(-\) in the client\_charset setting \(utf-8\) that is not required in the connection and database charset settings \(utf8\).

`; Client output/input character set  
client_charset = utf-8`

`; Database connection character set  
connection_charset = utf8`

`; Database storage character set  
database_charset = utf8`

### System Requirements, Installation and Upgrading

Details on general system requirements and general installation instructions can be found in the various application README files:

OJS: [https://pkp.sfu.ca/ojs/README](https://pkp.sfu.ca/ojs/README)

OMP: [https://pkp.sfu.ca/omp/README](https://pkp.sfu.ca/omp/README)

OCS: [https://pkp.sfu.ca/ocs/README](https://pkp.sfu.ca/ocs/README)

Likewise, general upgrade instructions can be found in the application UPGRADE files:

OJS: [https://pkp.sfu.ca/ojs/UPGRADE](https://pkp.sfu.ca/ojs/UPGRADE)

### PHP and PKP Application Compatibility

If you are running PHP 5.3+ \(which you should be doing\), you will need to run OJS 2.4.0+, OMP 1.0+ or OCS 2.3.6+. Older versions of the software will not work on newer versions of PHP.

If you are running PHP 7+, you will need to run OJS 3.0+.

OJS 3.1+ requires PHP 5.6 or above.

NOTE: If you are running OJS3 on a PHP7+ LAMP stack, please remember update your MySQL driver parameter\(Database section\) on `config.inc.php` file, i.e.:

`driver = mysqli`

### Managing installs with Git

Using Git to manage your OJS install gives you a higher control over updates and code fixes from official PKP Github repository. You will be able to create local branches of a OJS current version to check improvements and test them as well.

OJS installs managed with Git tool also demands that you have set two special requirements: Node.js and Composer. Both items are required to update dependencies packages that are used by PKP Library just after cloning OJS repository.

Another advantage using Git consists on ability to create local branches that enables sysadmins to make their own local tests and even collaborate with OJS code  improvements pushing commits to review on official Git repo.That way it is also possible upgrade code version, minor and major versions, at same time keeping current local code version with branches. Likewise a rollback just requires a branch checkout command.


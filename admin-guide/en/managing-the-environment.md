# Managing the Server Environment

Managing a PKP application generally means: 

* ensuring that system requirements are met; 
* properly configuring the system and application to work properly;
* managing the install and upgrade process.

PKP applications are relatively simple PHP/MySQL web applications, and can be run just about anywhere, provided a relatively recent version of PHP and MySQL are available. Other configuration options (eg. PostgreSQL, MS SQL) are also possible. 

All applications ship with a full set of configuration, installation and upgrade documentation, found in the `docs/` directory included in the package download. These should be consulted as a primary resource for any configuration, installation or upgrade question, and should be reviewed periodically (particularly as part of any upgrade process). PKP provides these guides on the web, and we provide quick links below. 

## Hosted Solutions

If you do not have the expertise, staff or desire to install and manage OJS on your own, PKP Publishing Services provides complete hosting solutions at a number of price points. For more information, see the [PKP Publishing Services website] (https://pkpservices.sfu.ca). 

## System Requirements and Installation

Details on general system requirements, configuration recommendations and general installation instructions can be found in the various application README files:

* OJS: [https://pkp.sfu.ca/ojs/README](https://pkp.sfu.ca/ojs/README)
* OMP: [https://pkp.sfu.ca/omp/README](https://pkp.sfu.ca/omp/README)
* OCS: [https://pkp.sfu.ca/ocs/README](https://pkp.sfu.ca/ocs/README)

## Upgrading

Upgrade instructions can be found in the following locations: 

* OJS: [https://pkp.sfu.ca/ojs/UPGRADE](https://pkp.sfu.ca/ojs/UPGRADE)
* OMP: [https://pkp.sfu.ca/omp/UPGRADE](https://pkp.sfu.ca/omp/UPGRADE)
* OCS: [https://pkp.sfu.ca/ocs/UPGRADE](https://pkp.sfu.ca/ocs/UPGRADE)

## Other Tips and Tricks

### File Permissions

It is difficult to prescribe exact steps towards setting proper file permissions, as so much depends on the server's operating system, web server, and PHP setup.

Start by checking which server API PHP uses on your server. If OJS is already installed, log in as Site Administrator, click "System Information", and at the bottom of the page, click "Extended PHP Information". Find the line that says "Server API". Depending on which API you are using \(mod\_php/SAPI or CGI/FastCGI\), permissions should be set as follows.

* mod\_php/SAPI: In this configuration, all PHP scripts on the system typically execute as the same user \(usually Apache's "nobody" or "www-data" accounts\). Be warned that this may be insecure on a shared host. The files\_dir \(configured in config.inc.php\), the cache directory, the public directory, and all contents and subdirectories must be writable and readable by the web server user. The config.inc.php configuration file must be readable by the web server user.
* CGI/FastCGI: In this configuration, PHP scripts will typically run under your user account \(though server configurations may vary\). This can be a well-secured configuration. The files\_dir \(configured in config.inc.php\), the cache directory, the public directory, and all contents and subdirectories must be writable and readable by this user account. The config.inc.php configuration file must be readable by this account.

Because security configurations can vary, and because of the volume of requests for support we receive regarding file permissions, we will only be able to provide limited help with these issues. Please be as specific as possible when posting about permissions issues.

PHP Safe Mode is not a recommended configuration and may not function properly. This is because in some configurations it will cause PHP's mkdir\(\) function to create directories that cannot thereafter be read or written because of file permissions. This is a limitation of Safe Mode and may prevent you from using OJS in a Safe Mode environment.

### PHP and PKP Application Compatibility

If you are running PHP 5.3+ \(which you should be doing\), you will need to run OJS 2.4.0+, OMP 1.0+ or OCS 2.3.6+. Older versions of the software will not work on newer versions of PHP.

If you are running PHP 7+, you will need to run OJS 3.0+.

OJS 3.1+ **requires** PHP 5.6 or above.

**NOTE**: If you are running OJS3 on a PHP7+ LAMP stack, please remember to update your MySQL driver parameter\(Database section\) on `config.inc.php` file, i.e.:

`driver = mysqli`

### Installing and Managing Applications via Git

Using Git to manage your OJS install gives you a higher control over updates and code fixes from official PKP Github repository. You will be able to create local branches of a OJS current version to check improvements and test them as well.

OJS installs managed with Git tool also demands that you have set two special requirements: Node.js and Composer. Both items are required to update dependencies packages that are used by PKP Library just after cloning OJS repository.

Another advantage using Git consists on ability to create local branches that enables sysadmins to make their own local tests and even collaborate with OJS code  improvements pushing commits to review on official Git repo.That way it is also possible upgrade code version, minor and major versions, at same time keeping current local code version with branches. Likewise a rollback just requires a branch checkout command.

Instructions for installing via Git can be found directly in our GitHub repositories: 

* OJS: [https://github.com/pkp/ojs](https://github.com/pkp/ojs)
* OMP: [https://github.com/pkp/omp](https://github.com/pkp/omp)
* OCS: [https://github.com/pkp/ocs](https://github.com/pkp/ocs)

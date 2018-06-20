# Chapter 2: Installing and Upgrading

This chapter covers how to install OJS 3 for the first time, and how to upgrade an existing installation running OJS 2.x.

## Installation

Open Journal Systems \(OJS\) has been developed by the Public Knowledge Project.  
For general information about OJS and other open research systems, visit the  
PKP web site at [http://pkp.sfu.ca/](http://pkp.sfu.ca/).

### Licensing

OJS is licensed under the GNU General Public License v2. See the file  
docs/COPYING for the complete terms of this license.

Third parties are welcome to modify and redistribute OJS in entirety or parts  
according to the terms of this license. PKP also welcomes patches for  
improvements or bug fixes to the software.

### System Requirements

Recommended server requirements:

* PHP &gt;= 5.5 with MySQL or PostgreSQL support
* MySQL &gt;= 4.1 or PostgreSQL &gt;= 9.1.5
* Apache &gt;= 1.3.2x or &gt;= 2.0.4x or Microsoft IIS 6
* Operating system: Any OS that supports the above software, including
  Linux, BSD, Solaris, Mac OS X, Windows

As PKP does not have the resources to test every possible combination of  
software versions and platforms, no guarantee of correct operation or support  
is implied. We welcome feedback from users who have deployed OJS on systems  
other than those listed above.

### Recommended Configuration

A secure deployment can be best achieved by using the following policies:

* Dedicate a database to OJS; use unique credentials to access it.  
  Configure this database to perform automated backups on a regular  
  basis. Perform a manual backup when upgrading or performing  
  maintenance.

* Configure OJS \(config.inc.php\) to use SHA1 hashing rather than MD5.

* Configure OJS \(config.inc.php\) to use force\_ssl\_login so that  
  authenticated users communicate with the server via HTTPS.

* Install OJS so that the files directory is NOT a subdirectory of  
  the OJS installation and cannot be accessed directly via the web  
  server. Restrict file permissions as much as possible. Automated  
  backups of this directory should be roughly synchronized with  
  database backups. These steps are **critical to maintaining a secure   
  environment** and avoiding the misuse or hacking of your journal.

### Download

OJS can be downloaded from the [Public Knowledge Project web site.](http://pkp.sfu.ca)

### Installation

Please review this document and the RELEASE document prior to installing OJS.  
If you encounter problems, please also see the FAQ document in this directory.

To install OJS:

1. Extract the OJS archive to the desired location in your web  
   documents directory.

2. Make the following files and directories \(and their contents\)  
   writeable \(i.e., by changing the owner or permissions with chown or  
   chmod\):

   * config.inc.php \(optional -- if not writable you will be prompted
     to manually overwrite this file during installation\)
   * public
   * cache
   * cache/t\_cache
   * cache/t\_config
   * cache/t\_compile
   * cache/\_db

3. Create a directory to store uploaded files \(submission files, etc.\)  
   and make this directory writeable. It is **strongly** recommended that this  
   directory be placed in a non-web-accessible location to ensure a secure  
   environment \(or otherwise protected from direct access, such as via   
   .htaccess rules\).

4. Open a web browser to ``http://yourdomain.com/path/to/ojs/`` and  
   follow the on-screen installation instructions.

   Alternatively, the command-line installer can be used instead by  
   running the command "php tools/install.php" from your OJS directory.  
   \(Note: with the CLI installer you may need to chown/chmod the public  
   and uploaded files directories after installation, if the Apache  
   user is different from the user running the tool.\)

5. Recommended additional steps post-installation:

   * Review config.inc.php for additional configuration settings
   * Review the FAQ document for frequently asked technical and
     server configuration questions.

<hr />

## Upgrading

Note: Before upgrading your installation, perform a complete backup of your data files and database. If the upgrade process fails, you will need to recover from backup before continuing.

If you are using PHP Safe Mode, please ensure that the max_execution_time directive in your php.ini configuration file is set to a high limit. If this or any other time limit (e.g. Apache's "Timeout" directive) is reached and the upgrade process is interrupted, manual intervention will be required.

### Upgrading from OJS 2.0.x, 2.1.x, 2.2.x, or 2.3.x

In order to upgrade from these older branches of OJS, you will first need to upgrade to an intermediate version of OJS 2.4.x. Download the latest copy of OJS 2.4.x and follow the upgrade instructions included there, then read the ``docs/UPGRADE`` document included in this package to continue the upgrade from there.

### Upgrading from OJS 2.4.x

OJS 3.x is a major rewrite of Open Journal Systems, introducing numerous new concepts and different approaches. The upgrade process from 2.x to 3.x does its best to adapt old content to the new structures, but we strongly recommend performing a test upgrade and exploring the new system before committing your content to the upgrade. Downgrades from 3.x to 2.x will not be supported.

Upgrading to the latest version of OJS involves two steps:

- Obtaining the latest OJS code
- Upgrading the OJS database

It is highly recommended that you also review the release notes (``docs/RELEASE``) and other documentation in the docs directory before performing an upgrade.

### Obtaining the latest OJS code

The OJS source code is available in two forms: a complete stand-alone package, and from read-only github access.

1) Full Package

It is also possible to upgrade by downloading the complete package for the latest release of OJS:

- Download and decompress the package from the OJS web site
- Make a copy of the config.inc.php provided in the new package
- Move or copy the following files and directories from your current OJS installation:
    - ``config.inc.php``
    - ``public/``
    - Your uploaded files directory ("files_dir" in ``config.inc.php``), if it resides within your OJS directory
- Replace the current OJS directory with the new OJS directory, moving the old one to a safe location as a backup
- Be sure to review the Configuration Changes section of the release notes in docs/release-notes/README-(version) for all versions between your original version and the new version. You may need to manually add new items to your config.inc.php file.

Updating from github is the recommended approach if you have made local modifications to the system.

2) git

If your instance of OJS was checked out from github (see ``docs/README-GIT``), you can update the OJS code using a git client.

To update the OJS code from a git check-out, run the following command from your OJS directory:

    ``$ git rebase --onto <new-release-tag> <previous-release-tag>``

This assumes that you have made local changes and committed them on top of the old release tag. The command will take your custom changes and apply them on top of the new release. This may cause merge conflicts which have to be resolved in the usual way, e.g. using a merge tool like _kdiff3_.

"TAG" should be replaced with the git tag corresponding to the new release. OJS release version tags are of the form "ojs-MAJOR_MINOR_REVSION-BUILD". For example, the tag for the initial release of OJS 3.0.0 is "ojs-3_0_0-0".

Consult the README of the latest OJS package or the OJS web site for the tag corresponding to the latest available OJS release.

Note that attempting to update to an unreleased version (e.g., using the HEAD tag to obtain the bleeding-edge OJS code) is not recommended for anyone other than OJS or third-party developers; using experimental code on a production deployment is strongly discouraged and will not be supported in any way by the OJS team.

### Upgrading the OJS database

After obtaining the latest OJS code, an additional script must be run to complete the upgrade process by upgrading the OJS database and potentially executing additional upgrade code.

This script can be executed from the command-line or via the OJS web interface.

1) Command-line

If you have the CLI version of PHP installed (e.g., /usr/bin/php), you can upgrade the database as follows:

- Edit config.inc.php and change "installed = On" to "installed = Off"
- Run the following command from the OJS directory (not including the $): ``$ php tools/upgrade.php upgrade``
- Re-edit config.inc.php and change "installed = Off" back to "installed = On"

2) Web

If you do not have the PHP CLI installed, you can also upgrade by running a web-based script. To do so:

- Edit config.inc.php and change "installed = On" to "installed = Off"
- Open a web browser to your OJS site; you should be redirected to the installation and upgrade page
- Select the "Upgrade" link and follow the on-screen instructions
- Re-edit config.inc.php and change "installed = Off" back to "installed = On"

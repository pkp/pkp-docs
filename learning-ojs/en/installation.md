# Installation

Open Journal Systems \(OJS\) has been developed by the Public Knowledge Project.  
For general information about OJS and other open research systems, visit the  
PKP web site at [http://pkp.sfu.ca/](http://pkp.sfu.ca/).

## Licensing

OJS is licensed under the GNU General Public License v2. See the file  
docs/COPYING for the complete terms of this license.

Third parties are welcome to modify and redistribute OJS in entirety or parts  
according to the terms of this license. PKP also welcomes patches for  
improvements or bug fixes to the software.

## System Requirements

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

## Recommended Configuration

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

## Download

OJS can be downloaded from the [Public Knowledge Project web site.](http://pkp.sfu.ca)

## Installation

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

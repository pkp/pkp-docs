# Appendix A: Create a Protected OJS 3 Sandbox Staged with Git

The following document describes a general workflow for creating a git-based sandbox of a production journal that is not currently on git. It provides instructions on how to limit accidental access, outgoing email, etc. YMMV. Adapt for your own environment; use at your own risk.

## Prepare the Git environment

The README here: [https://github.com/pkp/ojs](https://github.com/pkp/ojs) has instructions on installing from git. What we do is as follows:

1. Create a MySQL or PostgreSQL OJS user and database. The command we use is as follows; it may be different for you depending on your environment, access to root, etc.:

   **MySQL**
   ```
   mysql -u root -e "CREATE DATABASE `ojs-sandbox` DEFAULT CHARACTER SET UTF8; GRANT ALL ON `ojs-sandbox`.* TO `ojs`@localhost IDENTIFIED BY 'ojs'" -p
   ```
   **PostgreSQL**
   ```
   psql -h localhost -U postgres -d postgres -c "CREATE USER ojs WITH NOSUPERUSER INHERIT NOCREATEROLE NOCREATEDB NOREPLICATION NOBYPASSRLS ENCRYPTED PASSWORD 'ojs'; COMMENT ON ROLE ojs IS 'Site administrator';
   CREATE DATABASE ojs-sandbox OWNER ojs;" -W
   ```

2. Checkout the stable branch from GitHub. The path will be specific to your Apache install, and you can update the branch to the latest stable branch:

   ```
   cd <httpd-docs-folder>
   BRANCH='stable-3_2_1'
   git clone -b $BRANCH --single-branch https://github.com/pkp/ojs.git ./
   git branch --unset-upstream $BRANCH
   chmod -R 755 *
   ```

3. Fetch corresponding PKP library and checkout stable branch from GitHub, making sure that the branch corresponds to the same branch referenced above:

   ```
   git submodule update --init --recursive
   ```

4. Install composer:

   ```
   cd ../..
   php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
   php -r "if (hash_file('sha384', 'composer-setup.php') === 'e0012edf3e80b6978849f5eff0d4b4e4c79ff1609dd1e613307e16318854d24ae64f26d17af3ef0bf7cfb710ca74755a') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
   php composer-setup.php
   php -r "unlink('composer-setup.php');"
   ```

5. Install composer dependencies:

   ```
   cd lib/pkp
   php ../../composer.phar --no-dev install
   cd ../../plugins/paymethod/paypal
   php ../../../composer.phar --no-dev install
   cd ../../../plugins/generic/citationStyleLanguage
   php ../../../composer.phar --no-dev install
   ```

6. Install Node.js dependencies \(NOTE: npm must be installed on the server\):

   ```
   cd ../../..
   npm install
   npm run build
   ```

7. Create a new config file:

   ```
   cd ../../..
   cp config.TEMPLATE.inc.php config.inc.php
   chmod 600 config.inc.php
   ```

At this point you should have a fully prepared OJS 3 system and database ready to go.

## **Eliminate any possibility of scheduled tasks from being triggered in staging server**

Delete the Acron plugin \(the Acron plugin can trigger scheduled tasks to be run without relying on a cron job\):

   ```
   rm -rf plugins/generic/acron
   rm -rf lib/pkp/plugins/generic/acron
   ```

This plugin will have to be re-installed after you go to production, which, if you are running things via git, you can do by:

   ```
   git checkout plugins/generic/acron
   cd lib/pkp
   git checkout plugins/generic/acron
   ```

## Back up and copy the submission, public and database files

These commands are done on the production install, and are your typical backup/archiving commands.

Database:

* **MySQL**: we usually use mysqldump to make a copy of the database:
   ```
   mysqldump db\_name --opt --default-character-set=utf8 --result-file=~/client\_db.sql -u db\_user -p
   ```
* **PostgreSQL**: we usually use [pg_dumpall](https://www.postgresql.org/docs/current/backup-dump.html#BACKUP-DUMP-ALL) to make a copy of the database and cluster-wide data (such as users definition):
   ```
   pg_dumpall -U postgres -h localhost -d postgres > ~/client_db.sql
   ```

Submission files: you can find the correct directory in the OJS config.inc.php file, look for the “files\_dir” parameter. We usually compress this to make it easier to transfer:

   ```
   cd <submission files dir>
   tar -cvzf ~/files.tar.gz ./
   ```

Public files: this can include things like cover images and so on, and is located in the OJS system directory, in the “public/“ subdirectory:

   ```
   cd <ojs-system-dir>/public
   tar -cvzf ~/public.tar.gz ./
   ```

Transfer the files to the staging server: we usually use `scp` or `rsync`. Your systems folks should know what to use here, but for us it’s usually something like:

  ```
  rsync -avz client\_db.sql username@stagingserver.org:/~
  rsync -avz public.tar.gz username@stagingserver.org:/~
  rsync -avz files.tar.gz username@stagingserver.org:/~
  ```

## Install the submission, public and database files to the correct locations

Install the database (this may differ depending on the username, database name and password you specified previously):

* **MySQL**
   ```
   mysql -u ojs-sandbox -p ojs-sandbox < ~/client\_db.sql
   ```
* **PostgreSQL**
   ```
   psql -U postgres -h localhost -f ~/client_db.sql postgres
   ```

Install the submission files:

   ```
   tar -xvf ~/files.tar.gz <files directory>
   ```

Install the public files:

   ```
   tar xvf ~/public.tar.gz <ojs-folder>/public/
   ```

Edit the `config.inc.php` file and change database and files_dir parameters.

   ```
   vi config.inc.php
   ```

At this point, all relevant files and DB tables should be in place, and the config file should be pointing to those locations.

## Sanitize all emails in the system so that the system doesn’t send out email by accident

If you are running the sandbox on its own server, you may want to consider disabling any and all email functionality on the server. But the following will also work (in that any emails that are sent will be sent to non-production email addresses).

You can set your email addresses to a [Mailinator](https://www.mailinator.com/) address, which will mean the emails will be sent to an accessible public inbox (e.g. username@mailinator.com), or use a fake email address. You can also set emails based on specific user roles. You will first need to access your database:

* **MySQL**
   ```
   mysql -u ojs -pojs ojs-sandbox
   ```
* **PostgreSQL**
   ```
   psql -h localhost -U ojs -d 'ojs-sandbox'
   ```

To set all user email addresses to username@mailinator.com:

   ```
   UPDATE users SET email=CONCAT\(username,'@mailinator.com’\);
   ```

To set all submission-related emails, e.g. those of contributors, to test@example.com:

   ```
   UPDATE authors SET email = 'test@example.com’
   ```

## (Optional) Add password protection to the site so that it isn’t accidentally accessed, crawled, etc.

We do this for all sandboxes by adding .htaccess and .htpasswd protection to the sandbox web root. Your systems folks would know how to do this.

## Run the upgrade

From the sandbox web root run this command:

   ```
   php tools/upgrade.php upgrade
   ```

At this point, if the upgrade completes, you should have a clean, protected sandbox upgrade running OJS 3 that you can manage via git.

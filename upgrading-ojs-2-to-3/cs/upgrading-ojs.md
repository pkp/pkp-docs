# Upgrading Your OJS Instance

This chapter will cover the technical aspects of upgrading your instance to OJS 3.X. Planning your upgrade will go a long way into making this a successful process. Before any upgrading takes place, it is important to ensure that your server meets [OJS 3.X requirements](https://pkp.sfu.ca/ojs/README) and that your OJS 2.x installation is not too old to be upgraded to OJS 3.X. After you determine that your server meets the requirements you can continue with the OJS 3.X upgrade.

## Step 1: Perform a sandbox upgrade
It is important to perform a test upgrade first. To do this, you will need to make a complete copy of your OJS 2.x journal, including the database and files area. Follow the upgrade instructions on that copy. Official upgrade instructions can be found directly in the [UPGRADE documentation](https://pkp.sfu.ca/ojs/UPGRADE). Here you will find instructions for upgrading from several versions of OJS 2.x.

Have your technical staff familiarize themselves with the upgrade steps included in the download files with the latest version of OJS 3, available from the PKP website.

Create a sandbox where you can perform a test upgrade. This is also a good time to make a backup of your installation.

To make a sandbox, you’ll need to unpack the new version of OJS 3 into a new area on your web server (where it won’t interfere with your existing OJS 2 install), and create copies of your database, files directory, and public directory to use for the OJS 3 sandbox.

Performing a sandbox upgrade will give you an indication of how long the upgrade process will take and whether any additional cleanup or tweaking will be required. It can also provide an opportunity to tour some of the new features in OJS 3.

In order to prevent your OJS 3 sandbox from being accidentally accessed or indexed, we recommend limiting access to the sandbox to only authorized users via a NoIndex directive or basic authentication provided by your webserver. Both of these are typically accomplished using a .htaccess file, but the details will depend on your web server configuration.

You may also wish to prevent the OJS 3 sandbox installation from sending emails to real people while you complete your evaluation and review. You can do this by changing the email addresses in your sandbox database using this SQL query:

`UPDATE users SET email = CONCAT(email, 'test');`

Next, edit your `config.inc.php` configuration file in the sandbox installation to add the details from your existing OJS 2 install, but make sure to specify the copies of your database and files directory rather than the production versions in use by your existing OJS 2 install. Follow the instructions in `docs/UPGRADE` to upgrade the database. (This will also rearrange your files directory, which is why it’s important to make a copy!)

See [the Troubleshooting section below](#troubleshooting) for possible errors you may encounter during the upgrade process.

If the upgrade completes successfully, login to the OJS 3 sandbox install and review that all submissions and files are present and that everything is displaying correctly.

Once you are satisfied with the test upgrade move on to the next step.

## Step 2 - Perform the upgrade
Now that you have tested the sandbox upgrade and are satisfied with the results, it is time to upgrade your installation. On the set day, at the set time, take your OJS 2.x journal offline and follow the instructions in `docs/UPGRADE` to upgrade the software. To do so, you will repeat the upgrade steps with your production installation. Before upgrading your installation, perform a complete backup of your database and ‘files’ folder. If the upgrade process fails, you will need to recover from backup before continuing. Official upgrade instructions can be found directly in the [UPGRADE documentation](https://pkp.sfu.ca/ojs/UPGRADE). When the upgrade completes successfully, inform the editors so they can login and start working.

If your OJS installation doesn’t already have the ‘files’ folder located outside of the web accessible OJS installation, please move it now. Failure to meet this requirement is the only significant security risk faced by OJS journals. See the “Recommended Configuration” section of the README document included in your OJS download files for details.

## Troubleshooting

### Fatal error messages during the upgrade process
This usually indicates that there was a data inconsistency in your OJS 2.x database; search the [PKP Community Forum](https://forum.pkp.sfu.ca/) for similar messages.

### Warnings of the form “PHP Notice: unserialize(): Error at offset…”
This indicates that you may have accidentally changed the character set configuration in your `config.inc.php` or while creating your sandbox database.

### Error message "The tar command is not available. Please correctly configure it in your 'config.inc.php'”
This is a common error message you may come across when trying to enable plugins. The [PKP Community Forum](https://forum.pkp.sfu.ca/) has a number of suggested solutions.

### Database upgrade error
This usually indicates that that some things are mismatched or duplicated. You should take a look at your existing database and make sure that everything is the same or has not been duplicated

For additional upgrade resources see the [Additional Resources](./resources.md) section at the end of this guide.

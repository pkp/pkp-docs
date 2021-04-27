---
book: learning-ojs
version: 3.1
---

# Chapter 4: Site Administration

As part of installing OJS, you will have created a Site Administrator user account. When you log into OJS with that account you will have access to Site Administrator settings from the Dashboard.

You will be able to create new hosted journal instances, manage language support across your system, and perform other administrative functions.

More technical information about administering an OJS site, including upgrades, email, statistics, and importing and exporting, is available in the [Administrator's Guide](https://docs.pkp.sfu.ca/admin-guide/en/).

## Site Management

To get to Site Management, login as the Site Administrator, and choose Administration from the left menu.

![OJS site admin main menu with 2 options: site management and administrative functions.](./assets/learning-ojs3.1-sa-site-admin.png)

### Hosted Journals

From here, choose Hosted Journals. On the resulting page, you will see all of the journals in this OJS installation. In the example, below, there is only one.

![OJS hosted journals menu with 1 existing journal.](./assets/learning-ojs3.1-sa-hosted-journals.png)

To edit the existing journal, click on the blue arrow to the left of the journal name. You will see options to edit, remove, or update the settings.

![Existing journal editing options: edit, remove, settings wizard, users.](./assets/learning-ojs3.1-sa-hosted-journals-edit.png)

**Edit** will let you change the title, description, or path.

![Existing journal editing screen with title, description and path fields available to edit.](./assets/learning-ojs-3-ch4-hosted-journals-edit-modal.png)

**Remove** will let you delete the journal from the installation. You will be asked to confirm that you really do want to do this, as it is irreverisible.

![Confirmation screen for journal deletion.](./assets/learning-ojs-3-ch4-hosted-journals-remove.png)

**Settings Wizard** will take you to the various settings options for that journal. We'll go over these settings in detail in the Settings chapters.

![Settings wizard screen with the masthead tab selected.](./assets/learning-ojs-3-ch4-hosted-journals-settings-wiz.png)

**Users** will allow you to add and manage users associated with this journal.

![Users tab with a list of current users.](./assets/learning-ojs3.1-sa-hosted-journals-users.png)

Back on the Hosted Journals page, you can use the Create Journal link to add a new journal to this OJS installation. From the resulting form, fill in the fields with the new information.

![Create journal screen with title, description and path fields available to fill out.](./assets/learning-ojs-3-ch4-hosted-journals-create.png)

> Note: If you do not want the new journal to be visible yet, uncheck the _Enable this journal to appear publicly on the site_ box.

### Site Settings

This section will appear if you have two or more journals, and allow you to add information regarding your overall OJS installation, not individual journals.

#### Site Setup

This includes the name of your site, a site logo, an introductory statement about your site, a site footer, a redirect option \(if you only plan to have one journal on this installation\), contact information, a minimum password length for registered users, style sheet and theme options, and sidebar management.

You will have the opportunity to provide details about your individual journal\(s\) at a later stage.

![OJS admin menu with site setup tab selected.](./assets/learning-ojs3.1-sa-site-settings.png)

#### Languages

OJS is designed to be a multilingual system, allowing journals supporting a wide variety of languages to be hosted under a single site. When you install OJS, you can select one or more languages for your site.

The Site Administrator can set the default language of the site and install additional locales to make other languages available for use by journals. Journal Managers can then manage their own language settings under Website Settings > Languages. See the [Website Settings chapter](https://docs.pkp.sfu.ca/learning-ojs/en/settings-website) for details.

Under Administration > Site Settings > Languages you can see a list of languages that are installed on your site, enable languages, and set any language as the Default Locale, which means it is the language that users will first see when first visiting the site.

![OJS admin menu with languages tab selected.](./assets/learning-ojs3.1-sa-languages.png)

To add another language:
1. Click Install Locale
2. Check off the locales you would like to install
3. Click Save

After installing the new locale, you will have to enable it on the Site Settings > Languages page.  Further configuration of the language’s availability on the site can be done under Website Settings > Languages by a Journal Manager. See the [Website Settings chapter](https://docs.pkp.sfu.ca/learning-ojs/en/settings-website) for details.

OJS 3.1 doesn't yet have as many translations as OJS 2, but we expect to have more contributed over time. Contributions are always welcome.

#### Plugins

From here, you can choose to enable or disable various plugins, making them available \(or not\) to all of the journals on this OJS installation.

![OJS admin menu with plugins tab selected.](./assets/learning-ojs3.1-sa-plugins.png)

#### Navigation Menus

Use this section to modify your site-wide menus. You can learn more about configuring menus in the Website Settings chapter.

![OJS admin menu with navigation menus tab selected.](./assets/learning-ojs3.1-sa-menus.png)

### Next Steps

Once you've created a journal and configured the site settings, you may want to create a user account for the Journal Manager or Editor -- see the [Users and Roles chapter](./users-and-roles.md) for details.

<hr />

## Administrative Functions

This section provides detailed information about the server on which your OJS installation is running.

![OJS site admin main menu with 2 options: site management and administrative functions.](./assets/learning-ojs3.1-sa-admin-functions.png)

### System Information

Use this section to find out details about the server running your installation.

![System information screen displaying current version, version history and server information.](./assets/learning-ojs3.1-sa-sysinfo.png)

OJS Version information shows which version is currently installed, and your version history including any upgrades. You can click the Check for updates link to see if you are using the most recent version of OJS.

The Server Information provides details about the server environment hosting your OJS installation.

The OJS Configuration section displays all of the configuration options and their values as they are in _config.inc.php_.

You can find more information about _config.inc.php_ configuration parameters in the file itself.

The final section on this page displays additional server information: your operating system, PHP version, server and database information. You can also view extended PHP information by clicking the Extended PHP information link (this displays the output of `phpinfo()`)

All of this information can be useful when trying to troubleshoot a problem.

### Expire User Sessions

Clicking _Expire User Sessions_ immediately clears all active user sessions in the system, requiring any user that is currently logged in to sign in to the system again. This can be useful before an upgrade, to ensure all users are logged out.

### Clear Data Caches

Clicking _Clear Data Caches_ clears all cached data, including locale information, help cache, and search cache. This function may be useful to force data to be reloaded after customizations have been made.

### Clear Template Cache

Clicking _Clear Template Cache_ clears all cached versions of HTML templates. This function may be useful to force templates to be reloaded after customizations have been made.

### Clear Scheduled Task Execution Logs

If scheduled tasks have been enabled for your journal, clicking _Clear Scheduled Task Execution Logs_ will delete the task execution log files from your server. The execution log files include dates that correspond to previously completed scheduled tasks \(e.g. sending automatic email review reminders\).

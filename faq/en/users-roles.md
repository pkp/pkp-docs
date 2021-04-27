# Users and Roles

## How do I prevent users from self-registering?

By default, OJS allows users to self-register as an Author, Reader, or Reviewer. However, you may want to restrict self-registration because your journal is only open to solicited submissions, because you’re a course-based journal (only allowing submissions from students registered in the class), or because your journal is discontinuing.

To close registration, go to [Users & Roles > Site Access Options](https://docs.pkp.sfu.ca/learning-ojs/en/users-and-roles#site-access-options).

You can now select the radio button for “The Journal Manager will register all user accounts. Editors or Section Editors may register user accounts for reviewers.

## I lost/forgot my password. How do I retrieve it?

Please see instructions in [Learning OJS 3](https://docs.pkp.sfu.ca/learning-ojs/en/users-and-roles#if-you-forgot-your-password).

## A user can’t reset their password. What do I do?

You can refer them to the instructions in [Learning OJS 3](https://docs.pkp.sfu.ca/learning-ojs/en/users-and-roles#if-you-forgot-your-password) on how to reset a password when you have forgotten the password. If the user is having issues, please see instructions under [Users and Roles > If a User Can’t Log In](https://docs.pkp.sfu.ca/learning-ojs/en/users-and-roles#if-a-user-cant-log-in).

## When I try to log in, why am I sent back to the login page?

This is likely a problem with your browser's privacy settings. Our software requires that cookies are enabled in your browser for you to log in. You can check the status of your browser cookies here. If you aren't sure how to enable cookies, try selecting a lower security setting, or try a different browser. If you are still having problems, report them to the [PKP Community Forum](https://forum.pkp.sfu.ca/).

## How can I turn off notifications?

There are several ways to turn off notifications depending on the type of notification it is.

Users can modify their notification preferences through their personal profile in the notifications tab. After logging in, click your username on the top right corner followed by **View Profile** then **Notifications**. Users can then select their preference for public announcements, submissions, and discussions.

Another notification that editors may want to turn off is the new issue notification. When publishing an issue, an editor can select whether to send a notification to all users. Similarly, an option is presented to editors when posting a new Announcement.

![Image displaying the option to choose whether a notification email should be sent in the Publish Issue dialogue.](./assets/publish-issue.png)

If you opt-out of sending notifications when publishing an issue, but decide that you would like to send one after, see [How do I send a message to my site's users?](#how-do-i-send-a-message-to-my-sites-users)

## Why am I getting a “You don’t currently have access to that stage of the workflow” error?

There are few scenarios where you might come across this message:

1. You were assigned a role in the journal which does not have access to some stages of the workflow (for example, a copyeditor usually won’t have access to the peer review workflow stage). You may need to be assigned a new or additional role to receive additional access.
2. The role settings need to be adjusted to provide access to more stages of the workflow for everyone assigned to that role.
3. If you happen to be an editor or section editor of a journal that uses Anonymous Reviewer/Disclosed Author (previously known as "blind") or Anonymous Reviewer/Anonymous Author (previously knows as "double-blind") and has assigned yourself as a reviewer and declined this request.

If you encounter this message as a result of the first 2 scenarios, please see [the Users and Roles documentation](/learning-ojs/en/users-and-roles#if-a-user-cant-log-in) for details on editing a user’s account to assign a different or additional role, and editing the role settings to allow access to different workflow stages. (based on the role’s access to workflow stages, or on which role you’re in when assigned to an article)

The third scenario is a result of the security measures within the recent releases of OJS to protect the review process. The system is recognizing the most recent role as a reviewer. A workaround for this would be for the editor to use the direct link to the editorial workflow, i.e. you add /workflow/index/MSID/3 right after index.php in the URL: https://YourJournalURL/index.php/acronym/workflow/index/XXXX/3, where xxxx is the MS ID #.

## Why can't I delete a user's account?

As a Journal, Press, or Conference Manager, you can "remove" and "disable" a user's account. Removing a user will only remove them as a user registered with your journal, and will not delete them from the site. Disabling an account doesn't delete it -- it just makes it so that a user can't log in with that account. In both cases, the user cannot register again using the same email address.

User deletion in OJS can only be done by using the Merge Users feature: you pick the user to be removed and merge their account into another one. We don't provide a one-click delete feature because users typically have a lot of information and actions attached to their account that must not be orphaned: submitted files, completed reviews, editorial decisions and so on. We essentially mandate that all of these items must be passed on to another user before the user can be removed from the system.

Instructions on how to merge users is available in the Learning OJS user guide under [Users and Roles > Merge User](https://docs.pkp.sfu.ca/learning-ojs/en/users-and-roles).

The command-line tool to merge users is `tools/mergeUsers.php`.

## Why can’t I edit a user?

In a single installation, only the Journal Manager or Journal Editor will have the ability to edit a user.

In a multi-journal installation, Journal Managers or Journal Editors will only be able to edit user accounts that were originally made on their journal and not one created in other journals.

## How do I send a message to my site’s users?

The easiest way to send a notification to all registered users is to create an “Announcement.” In addition to sending a message to all users (who have not opted out of email notifications), an Announcement is also displayed on the journal homepage and saved as an archive. See [Website Settings > Announcements in Learning OJS 3](https://docs.pkp.sfu.ca/learning-ojs/en/settings-website#announcements) for details.

If you would like to send a message to all users in a particular role you can use the Notify feature. See [Email Users in Learning OJS 3](https://docs.pkp.sfu.ca/learning-ojs/en/users-and-roles#email-users) for details.

For more refined communication with users and marketing communication, we recommend an external tool, such as Mailchimp. You can export your users in a CSV file under Tools > Import/Export and import them into the external tool.

If you want to communicate with a group of users who are all assigned to a particular submission, you can use the Discussion feature on the submission.

## What can I do about fake user accounts on my site?

If you discover a large number of spam user accounts in your journal or press (for example, the fake accounts might have a name like "12 alekssafer alekssafer alekssafer"), you can remove the accounts and take steps to prevent additional spam accounts.

The first step in solving this problem is to have your system administrator [enable ReCAPTCHA](https://docs.pkp.sfu.ca/admin-guide/en/securing-your-system#managing-spam) for your journal registration process. This should block or at least limit any further fake account creation.

Once that is done, you can then begin to clear out the accounts. If you have access to the OJS server, you or your system administrator can [remove multiple users at a time](https://docs.pkp.sfu.ca/admin-guide/en/securing-your-system#cleaning-lots-of-users) with the “merge users” tool. However, if you are limited using your Journal Manager account you can do it using the Merge Users feature (See [Learning OJS: Users and Roles](https://docs.pkp.sfu.ca/learning-ojs/en/users-and-roles) > Merge User). You would mark the checkbox for one or more of the fake accounts, and then merge those accounts into another fake account, or into a temporary account, you create for this purpose. Once the fake accounts are merged, they are removed from OJS.

## How do I add another site Administrator?

The Site Administrator is created when first installing OJS, OCS or the Harvester; and typically there is only one Site Admin for any given installation. In order to grant another Site Administrator, you’ll need access to your database (e.g. through a tool like phpMyAdmin). This is usually part of a CPanel login on a typical server. You’ll need to create a user account and then use the SQL to promote them to Site Admin.

Check what the user group ID of your administrators group is by running:

```sql
SELECT user_group_id FROM user_groups WHERE context_id=0 AND role_id=1;
```

It’ll probably give you a 1 back as a result. Then, you can grant that to your user:

```sql
INSERT INTO user_user_groups (user_id, user_group_id) VALUES (<new_admin_user_id>, 1);
```

…where `<new_admin_user_id>` is your user ID, and 1 is the user_group_id you got from the first query (probably a 1).

## How can I retrieve the site Administrator password?

If your site Administrator is no longer available, you may need to find their login credentials and designate a new site Administrator. This is difficult because Journal Managers and Editors cannot log in as an Administrator or edit an Administrator user account.

To reset an Administrator’s password, follow these steps:

* Determine the user ID.
  * A user ID can be fetched from the database using one of the following SQL statements:
    * If you have an email address for the user (e.g. pkpsupport@sfu.ca): `SELECT user_id FROM users WHERE email = 'pkp-support@sfu.ca';`
    * If you have a username (e.g. admin): `SELECT user_id FROM users WHERE username = 'admin';`
* Determine the password encryption method. See the encryption setting in the `[security]` section of the config.inc.php configuration file. This will be sha1 or md5.
* Execute the following SQL to reset the password. For example, for user ID 15 with md5 encryption, to reset the password to “newPasswordHere”: `UPDATE users SET password=MD5(CONCAT(username, 'newPasswordHere')) WHERE user_id = 15;`

Alternatively, you can update the email address for the administrator account in your database to an email account that you have access to, as long as it is not already associated with an existing user account. You can then follow the standard password reset steps in the OJS/OMP/OPS interface.

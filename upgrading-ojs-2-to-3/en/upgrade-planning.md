# Planning for a Major Upgrade

Once you have reviewed the features of OJS 3 and decided you want to proceed with the upgrade, you will need to do some careful planning to ensure a smooth process, minimal disruption to your publication schedule, and a happy editorial staff. Many of the changes are human resources related (i.e., training and visual design), as well as technical, so clear communication is important at every stage.

The major steps in completing an upgrade are as follows:
1. Decide if and when you’re ready to upgrade to OJS 3
2. Decide which version of OJS 3 to upgrade to
3. Communicate about the upgrade with your editorial team or journal contacts
4. Ensure that your server meets the requirements of OJS 3 and modify if necessary
5. Do an inventory
6. Clean up existing user database
7. Perform a sandbox or test upgrade
8. Evaluate, test, and troubleshoot your sandbox OJS 3 site
9. Plan for new theming/look and feel of the journal
10. Confirm your team is ready for the production upgrade
11. Schedule the production upgrade
12. Set content freeze dates if necessary
13. Perform the production upgrade
14. Evaluate, test, and troubleshoot your new OJS 3 site
15. Training and setup

This chapter focuses on the initial planning and human resources steps of the upgrade process. The next chapter covers technical steps.

## Decide if and when you want to upgrade

Development of OJS is ongoing and new versions with new features are released every few months. You can be strategic in deciding when to upgrade based on when desired features will be available. For example, if a particular plugin is important to your users and it will not be available for OJS 3 until next year, you may want to wait until next year to do your major upgrade. You may also want to wait until a new release of OJS has been fully tested and bug-free, which is sometimes not the case immediately after its official release. However, if OJS 3 has all of the main features you need, scheduling the upgrade will involve other considerations which are outlined in this chapter.

* Identify essential features used in your journal(s). You should discuss this with your editorial team(s) and ensure you have a full understanding of their needs and workflows.
* Learn about OJS 3 and its features and functions
* If a version of OJS 3 meets your needs, it’s time to prepare your journal teams for the upgrade. This can involve editorial, technical, and human resources support. You will need to coordinate the timing of the upgrade with everyone involved with the journal. The best general time to upgrade is when the journal is not in an active phase of the publishing cycle, and the specific time of the upgrade should be scheduled when all team members are available to perform the upgrade itself and to review the journal immediately after the upgrade for problems and to make any necessary changes.

For additional resources outlining the new features in OJS 3 and upgrade-related documents, see the Additional Resources section at the end of this guide.

## Decide which version of OJS 3 to upgrade to

Generally you should upgrade to the latest version of OJS. However, if the latest version is a new major release (e.g., OJS 3.1.0, OJS 3.2.0), you may want to wait until the next minor release is available (e.g., OJS 3.1.0-1; OJS 3.2.0-1) because usually a new major release has a few unexpected bugs that will be fixed in the first minor release that follows. Check the [PKP website](https://pkp.sfu.ca/category/news/) for news about releases when making this decision.

## Plan your upgrade

Taking into account the steps involved, create a plan and timeline for the upgrade.

## Communicate about the upgrade with your editorial team or journal contacts

Depending on whether you are an institution or publisher that hosts or supports multiple journals or if you are an administrator of a single journal, you may communicate directly with a journal’s editorial team or with a main contact at each journal who then communicates or supports an editorial team. Announce the upgrade to your editorial team or journal contacts. The upgrade will mainly affect Journal Managers, Editors, and Section Editors. They should be informed of the upcoming change, receive information about how to use the new version of OJS, and have input into the upgrade timeline. Reviewers and Authors are unlikely to be affected by the upgrade and will notice little change in their workflows.

Determine what training and support will be needed by your editorial team before and after the upgrade and how it will be provided.

## Ensure that your server meets the requirements of OJS 3 and modify if necessary

The recommended server requirements for OJS 3 are:

- PHP >= 7.2
- MySQL >= 4.1 or PostgreSQL >= 9.1.5
- Apache >= 1.3.2x or >= 2.0.4x or Microsoft IIS 6
- Operating system: Any OS that supports the above software, including Linux, BSD, Solaris, Mac OS X, Windows

As PKP does not have the resources to test every possible combination of software versions and platforms, no guarantee of correct operation or support is implied. We welcome feedback from users who have deployed OJS on systems other than those listed above.

## Do an inventory of your journal

Before proceeding with your upgrade it is strongly advised that you do an inventory of your journal.

During the upgrade the following items will automatically be moved from OJS 2 to OJS 3:

* Submissions
* Users
* Roles/Permission setting
* Announcements
* Sections

It is advisable that you **save a copy all the data** that appears on your journal pages to be re-entered into OJS 3. It might also be useful to have screenshots of all the Journal Setup from OJS 2 for reference.  You will notice that there have been a number of changes that were made between OJS 2 and OJS 3, so information entered in Setup in OJS 2 will need to be entered in different places within OJS 3.

Items that will need to be re-created once you’ve upgraded to OJS 3 include the following:

* Journal Information - Masthead, Editorial Team, Permissions, etc.
* Customizations - CSS, images, color codes
* Journal setup settings and textual information
* Plugins
* Pages/ Menus
* Links
* Files
* Customized email templates
* Reviewer Forms
* Custom blocks
* PDF uploads

We recommend that you save any customizations you made to the sandbox (images, CSS, texts) locally to re-upload as necessary to the final production version.

If your OJS 2 installation has links to uploaded PDFs or other files (e.g., subscription forms, agreements) these will need to be re-uploaded to the Publisher Library and updated in the hyperlink. The OJS 2 files directory will no longer be functional after the upgrade.

## Clean up existing user database

The upgrade from OJS 2 to 3 is also an opportunity to clean up any users that may be spam users, which is a common issue in OJS, particularly for instances that existed before PKP implemented reCAPTCHA on account registration. There are several ways to identify these users, but one option is through the email domains used when the user signed up. Using the following SQL query, you or your system administrator can identify the domains in order to identify possible spam users:

```
SELECT substring_index(email, '@', -1) domain, COUNT(*) email_count
FROM users
GROUP BY substring_index(email, '@', -1)

-- If you want to sort as well:
ORDER BY email_count DESC, domain;
```
Once you’ve identified the domains that are connected to spam users, you can use these to create a list of usernames to clean up with a query:

```
SELECT * FROM users
WHERE email LIKE "%@spam.com"
OR email LIKE "%morespam.com"
...
```

With this list of usernames, you can then use OJS’s built-in user merging tool (in your OJS directory at `tools/mergeUsers.php`) to clean up users.We created a small bash script to do this, and PKP also has a process that they recommend. You’ll need to create a user account that all accounts can be merged into if one doesn’t already exist. Keep in mind that while it’s nearly impossible to find all the spam users in a large instance of OJS, you may be able to significantly clean these up, thereby reducing the amount of data in your instance and making it easier for journal teams to manage their users.  It is important to use the merging tool instead of deleting spam users from the users table, as deleting users can produce major errors in your installation.

## Perform a sandbox or test upgrade

See the section below under [Upgrading Your OJS Instance - Step 1 - Perform a Sandbox Upgrade](./upgrading-ojs#step-1-perform-a-sandbox-upgrade)

## Evaluate, test, and troubleshoot your sandbox OJS 3 site

Have all journal team members who regularly use the site (e.g., Journal Managers, Editors, and Section Editors) review the sandbox site and provide feedback. This is an excellent time to provide training in using the new system if you plan to do so. If you discover that critical functionality is not available in the new version, consider postponing the upgrade or brainstorm ways to accommodate the differences in functionality.

This is an excellent time to review the journal’s workflow. The journal team may want to take advantage of new features or just improve the existing workflow while training the team on using the new system.

Make sure that the journal team understands that changes made to the sandbox site will not be incorporated into the production site upon upgrade. Keep a list of all changes to the content and structure requested during the review of the sandbox site so that these can be applied to the production site immediately after the upgrade.

## Plan for new theming

OJS 3 handles theming for the website differently than earlier versions of the software, so the look and feel of your journal will change. You will have new options for customizing this aspect of your journal site through the current selection of themes.

If you have applied custom theming to your journal in OJS 2, that theme will not display properly in OJS 3. You may opt to use one of the available themes in OJS 3 or create a new custom theme that works with OJS 3. If you create a new custom theme, you should develop this prior to the upgrade so that you can put it in place on the production site immediately after the upgrade. Please refer to PKP’s [Designing Your Journal guide](https://docs.pkp.sfu.ca/designing-your-journal/en) for help in creating a custom look and feel for your journal. PKP’s [Theming Guide](https://docs.pkp.sfu.ca/pkp-theming-guide/en/) can be used to develop a custom theme for your journal.

## Confirm your team is ready for the production upgrade

Though you have been communicating with the various team members throughout this process, it is important to check in with each individual team member to confirm they are ready to proceed with the upgrade. Upgrading from OJS 2 to OJS 3 is a major change that, depending on the journal, can involve many stakeholders with big or small roles in the upgrade. Check in with each team member to confirm they are ready for the upgrade.

## Schedule the production upgrade

Once you are ready to proceed with the upgrade, communicate to the journal team(s):
* The upgrade date(s)
* The downtime during which the journal website would not be available
* Content freeze if you are pausing new content creation/modification prior to the upgrade
* Support contacts for inquiries and assistance

If the upgrade involves downtime or a freeze for new content, make sure to request email receipt confirmation once the dates are announced.

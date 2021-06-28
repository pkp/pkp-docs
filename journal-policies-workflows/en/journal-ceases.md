# Journal ceases to publish

If your journal plans to cease publication for an extended period of time, it’s important to clearly indicate to users that the journal is not actively accepting submissions at this time. Disabling submissions and registrations on the journal site also protects it against security threats that can occur when the registration option is left open without anyone actively monitoring new accounts. If the journal decides to resume publication in the future, these steps can be reversed so that the journal can accept further submissions.

## Disabling submissions

To disable new submissions to the journal, you will need to be in the Journal Manager role. You can do it in two ways:

- Disable submission per section [as described in the Learning OJS 3 guide](/learning-ojs/en/journal-setup#create-section)
- In OJS 3.3, you can disabled submissions for the entire journal by visiting the Workflow settings and selecting “Disable Submissions,” as described in the [Learning OJS 3 > Workflow Settings > Disable submissions](/learning-ojs/en/settings-workflow#disable-submissions).

To remove the “Submissions” information from the user interface, you can remove the “Make a Submission Block” in [Settings > Website > Appearance > Sidebar Management](/learning-ojs/en/settings-website#appearance) and/or disable the “Make a Submission Block” in [Settings > Website > Plugins](/learning-ojs/en/settings-website#installed-plugins).

If submissions are disabled for all sections, only users who are logged in as journal Editors and Section Editors will be able to create a new submission. The “Submissions” page will still appear on the journal website, usually under “About,” but users who visit this page and click “Make a new submission” will not be able to proceed without first logging in as an editor.

You can remove the Submissions page from the website by logging in as a journal manager and going to Settings > Website > Setup > Navigation. Under the Primary Navigation Menu, click “Edit,” and drag-and-drop the Submissions menu item from “Assigned” to “Unassigned.” If the journal resumes publication in the future, you can drag the Submissions menu item back to “Assigned,” and the page will remain intact with all of the necessary information for users.

![Primary navigation menu with the Submissions menu item in the Unassigned column.](./assets/journal-policies-nav-menu-unassign-submissions.png)

## Disabling registration

You may wish to disable new registrations on the journal site to avoid security issues that may occur from spam or bot accounts accessing the journal site. To do this, visit Users and Roles > Site Access Options, and select “The Journal Manager will register all user accounts. Editors or Section Editors may register user accounts for reviewers.” This will remove the “Register” option from the public-facing journal site but will still allow Journal Managers to create new accounts under Users and Roles > Users > Add user.

## Communicating to your readers, authors, and reviewers

It’s a good idea to inform your readers, authors, and reviewers that the journal is ceasing publication and let them know how work published in the journal will continue to be made accessible (see archiving options, below).  

In OJS 3.3, you can notify all users in the journal, or all users with a particular role, using the Notify feature under Users and Roles, providing this feature has been enabled by your journal administrator. See [Learning OJS 3 > Users and Roles > Email users](/learning-ojs/en/users-and-roles#email-users) for instructions on using this feature.  

You can also notify users with the Announcements feature. This will create an announcement on the journal website and will (optionally) email all users who have not opted out of receiving email notifications. See [Learning OJS 3 > Website Settings > Announcements](/learning-ojs/en/settings-website#announcements) for information on this feature.

## Archiving options

If you plan to cease publication permanently, you may want to archive the journal contents outside of OJS to ensure long-term preservation of the content. There are two options recommended for long-term preservation of a journal.  

### Archiving to the PKP Preservation Network

In the event that you are retiring your journal, you can register with [PKP’s Preservation Network](https://pkp.sfu.ca/pkp-lockss/) (PKP PN). On retirement, your published scholarly content would still be available to the wider public via the Preservation Network, and PKP would ensure that it is preserved in perpetuity. This service *does not* provide an archive for your review or editorial history; you would not be able to recreate your journal immediately from this archive in the event that the journal becomes active again. You can learn more about the PKP PN in [Getting Found, Staying Found](/getting-found-staying-found/en/getting-found-staying-found#public-knowledge-project-preservation-network-pkp-pn).

### Archiving in the Wayback Machine from Internet Archive
  
[Internet Archive](https://archive.org/) is a nonprofit organization that hosts a large web archive, known as the [Wayback Machine](https://archive.org/web/). It provides stable access to captured “snapshots” of web pages from past points in time. You can learn more about the Internet Archive, and the options for preserving journal content, in [Getting Found, Staying Found](/getting-found-staying-found/en/getting-found-staying-found#digital-preservation).

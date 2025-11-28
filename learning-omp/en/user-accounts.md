---
book: learning-omp
version: 3.5
title: Learning OMP (Open Monograph Press) - User Accounts
description: A guide to managing users, roles, and permissions in OMP.
---
# User Accounts

A monograph publishing workflow will involve various users with various roles. OMP offers a flexible role management system that allows the Press Manager to control which roles have access to a given task and/or stage of the workflow.

OMP has a number of default roles with associated permissions/access. These roles include Press Manager, Press Editor, Series Editor, Volume Editor, Author, Internal Reviewer, External Reviewer, Copyeditor, Layout Editor, and Proofreader. OMP 3 also includes additional roles such as Translator and Designer. You can create new roles or rename and reconfigure existing roles as needed.

## Permission Levels

There are six levels of permissions/access that a role can have: Press Manager, Press Assistant, Series Editor, Reviewer, Author, Reader. Permission determines to which parts of the dashboard the role has access. These permission levels cannot be changed once set. You can assign any number of roles to each workflow stage. Assigning a role to a workflow stage means that you will be able to include one or more persons with that role during that stage of the submission. For example, by default, the Marketing Coordinator is included in the editorial stage, the Layout Editor in the production stage, and the Author in all stages. You can add or remove any role from a workflow stage.

![The roles and permissions screen in OMP.](./assets/learning_omp-user_accounts.png)

__Press Managers__ can access the many Press Management pages, including content settings, press settings, and import/export tools and other plugins. The Press Manager(s) should configure the press via the Press Settings pages before any submissions are solicited. By default, the Press Editor, Production Editor, and Layout Editors all have "press manager" permissions. These four roles have limited customizable options in the OMP workflow.

__Series Editors__ can access all of the submissions that are part of the [series](./press-setup.md#series) to which they are assigned. They do not need to be explicitly assigned to the submission to have access, as long as the submission is in their series. By default, only the Series Editor role has this set of permissions.

__Assistants__ can access only the workflow stage and monograph to which they have been assigned. They need to be explicitly assigned to the monograph at the appropriate stage to gain access. By default, most roles fall under this set of permissions.

__Reviewers__ only have access to the pages that are used to perform a review. They only have access to a submission they have been asked to review. By default, there is an Internal Reviewer and an External Reviewer role with this set of permissions. They are intended to help organize two distinct sets of reviewers for the press.

__Authors__ only have access to their own submissions and can see a limited set of information about the submission through the Author Dashboard. Authors can create new submissions and add files to the submission. By default, the Author, Volume Editor, and Translator have this set of permissions.

__Reader__ has access to the reader-facing website. This permission is included within other permission levels.

## Roles

Roles may vary according to Press; OMP has been designed to accommodate various Press sizes and the accompanying roles. Depending on the size of your press, you may utilize some or all of these roles. You may also have one person perform multiple roles.

Some Presses may have the Press Editor overseeing all the editing, whereas some presses may not have Layout Editors or Proofreaders.

__Press Manager__ is responsible for setting up the press website, configuring the system options, and managing the user accounts. This does not involve any advanced technical skills but entails filling out web-based forms and uploading files.

In a closed user registration, the Press Manager will need to enroll the Editors, Copyeditors, Layout Editors, Proofreaders, Authors, and Reviewers.

The Press Manager also has access to the press’ other management features and can create new series for the press, set up review forms, edit the default emails, view statistics and reports, import and export data, and access the editorial workflow and all press submissions.

__Press Editor__, along with the Press Manager, typically establishes the policies and procedures for the press. Press Editors can also access journal settings, users and roles, and tools. They have access to all submissions and manage submissions and Series Editors.

__Production Editor__ oversees the entire review, editing, and publishing process for the press as a whole.

In the editorial process, the Production Editor assigns responsibilities to the Series Editor(s) and Volume Editor(s) to manage content further down the chain. The Production Editor maintains an overview of all active projects and assists with problem-solving as appropriate.

The Production Editor also creates the press series and schedules ebooks for publication.

__Series Editor__ oversees the reviewing, editing, and publishing process for a monographic series.

In the editorial process, the Series Editor assigns responsibilities to the Volume Editor(s) to manage the content of individual titles in the series. The Series Editor maintains an overview of all active titles and assists with problem-solving as appropriate.

The Series Editor also authorizes individual ebooks within the series.

__Volume Editor__ oversees the review, editing, and publishing process for a monograph in a series.

In the editorial process, the Volume Editor manages the content of an individual title in a series. The Volume Editor would have direct responsibility for overseeing all other contributors to the editorial workflow of the given title.

__Copyeditor__ edits accepted submissions to improve grammar and clarity, works with authors to ensure everything is in place, ensures strict adherence to the press' bibliographic and textual style, and produces a clean, edited copy for a Layout Editor or Production Assistant to turn into the galleys that will be in the published format of the ebook.

*Some presses have a Production Editor or Series Editor play this role*.

__Proofreader__ carefully reads over the galleys in the various formats in which the press publishes (as does the Author). The Proofreader (and the Author) record any typographic and formatting errors for the Layout Editor to fix.

In the case of some presses, the Production Editor or Series Editor will also serve as Proofreader.

__Designer__ will make decisions about fonts and other design elements. This may involve working with CSS. The Designer may also design book covers that will be done outside of OMP.

__Layout Editor__ transforms the copyedited versions of the submission into galleys in HTML, PDF, XML, etc. – formats that the press has elected to use for online publication.

Note - OMP does not currently provide software for automatically converting word-processed documents to galley formats (although a project is in development), so the Layout Editor should have access to and be able to use third-party software packages for creating galleys.

_In some cases, the Editor or Section Editor will also serve as the Layout Editor_.

__Indexer__, as some ebooks will require an index to the content. Creating the index would be the responsibility of the Indexer.

__Funding Coordinator__ identifies appropriate grants to which projects may apply. In some cases, funding may also be obtained from a scholarly society or sponsor.

__Marketing and Sales Coordinator__ have no specific role in the editorial workflow but could be designated within OMP to oversee the public face of the press.

__Author submits__ manuscripts to the press directly through the press' website. The Author is asked to upload submission files and to provide metadata or indexing information (the metadata improves the search capacity for research online and for the discovery of the press' ebooks).

The Author is able to track the submission through the review and editorial process and participate in copyediting and proofreading of submissions accepted for publication.

## Edit or Add a Role

OMP allows for the creation of new roles if the default ones do not fit your needs. 

From the Roles tab, you can grant or remove access to specific workflow stages by checking or unchecking the relevant stage.

You can create new roles by clicking the “Create New Role” button, or edit an existing role by clicking the blue arrow next to a role and selecting “Edit”.

![Window in OMP to create new role.](./assets/omp-add-role.png)

**Permission Level:** As described in the previous section, this indicates the level of permissions granted to this role.
**Role Name:** You can use this field to easily rename any role.

**Abbreviation:** Each role must have a unique abbreviation. This is used as a short identifier for participants assigned in the Editorial workflow.

**Stage Assignment:** Select the Editorial workflow stages this role will have access to, if applicable.

**Role Options:** Configure specific options related to the role.
- Show role title in contributor lists: Users with this role will have their title included in the contributor list when making submissions.
- Allow user self-registration: Allow users to register freely for this role. Useful for allowing users register as Authors or Reviewers. Be very careful not to enable this option for roles that have access to sensitive information, such as Editors or Journal Managers.
- This role is only allowed to recommend a review decision and will require an authorised editor to record a final decision: Enable this to limit a role’s ability to make editorial decisions.
- Consider role in masthead list: Select this to automatically include anyone with this role on the list of Editorial Board members.
- Permit changes to Settings: Select this to allow the role access to all journal settings and configurations.

## Invite a New User

Email configuration must be completed by a system administrator in order for the system to send invitation and registration confirmation emails to users. See the Administrator’s Guide for more information.

While users can self-register accounts for roles like Reader and Author (or other roles specified by you in the previous section), you can also invite users to take on new roles. This is especially useful for inviting members of your Editorial Board to have the correct permissions they need to work in your press.

From Settings > Users & Roles, click Invite to a Role.

![Users and Role page in OMP with the pointer over the Invite to a role button.](./assets/omp-invite-user.png)

First, you’ll be asked to search for the user. You can enter their email, username, or ORCID to ensure that they’re not already registered. If they aren’t, you’ll be prompted to invite them.

Enter their email, first and/or last name, and select the role(s) you wish to assign them. You can use the “Add Another Role” button to assign multiple roles. The user can also self-register for additional roles later from their user settings. Enter a start date for the role and choose whether it should appear on the masthead (the automatically generated page listing editorial board members).

![Pre-filled user form that includes an email address, given name, family name and the role Seris Editor added.](./assets/omp-user-invitation-3.5.png)

Click Save and Continue. On the final screen, you can preview and edit the email message that will be sent to the invitee.

When you are ready, click “Invite user to the role”.

You can see the status of the invitation from the Invitations list. You can edit your invitation (to add or adjust roles), or cancel your invite.

![User Invitation table, showing the additional menu option beside the invited user. Options to Edit or Cancel Invite shown.](./assets/omp-user-edit-3.5.png)

## Add and Remove Roles from a User

Once a user has self-registered or accepted an invite, you can edit their profile to adjust their roles. Just like sending an invite, you can select a start date and choose whether the user will appear in the Press Editorial Masthead.

To edit a user:
1. Navigate to Settings > Users & Roles
2. Search for the user you wish to assign a role to under Current Users, click the three dots, and select *Edit*
3. Click Add Another Role
4. Select a new role
5. Choose a Start Date
6. Indicate whether this user should appear on the Press Masthead
7. Click Save and Continue

![Step 1 of the User Invitation window. User details is shown with the Role table. The listed roles show the Remove Role button](./assets/omp-user-add-role-3.5.png)

When you remove a role from a user, the End Date will automatically be set to the current date. If you select the user to appear in the Press Masthead, their name and affiliation will be displayed in the Editorial Masthead section of the press.

![Editorial Masthead of the Press showing the Editorail list with start and end dates for each user.](./assets/omp-press-masthead-3.5.png)

The role end date will be automatically registered when the role is removed from the user.

## Allow Users to Connect with ORCID {#orcid}

ORCID is now a core function of OMP. To enable ORCID integration, click the checkbox, then enter your credentials. If you are unsure of your credentials or need assistance obtaining them, you can read more from the [Installation and Setup chapter of the ORCiD plugin](https://docs.pkp.sfu.ca/orcid/en/installation-setup), as instructions remain the same.

![ORCID Configuration Window](./assets/orcid-3.5.png)

Once you have enabled and configured your ORCID integration, your users can connect their ORCID in a few different ways: 

A) Registered users can go to the Identity tab of their user profile and connect their ID.
![Identity tab within the User Profile showing the option to Create or Connect your ORCID iD](./assets/profile-orcid-3.5.png)


B) When making or managing a submission, the submitting author or the Editor assigned to the submission can use the ‘Request verification’ button found in the Contributor window to ask an author to verify their account.
![Example contributor window showing the option to Request Verification for this contributor's ORCID iD](./assets/profile-orcid-contributor-3.5.png)


C) New users can choose to verify their ORCID when creating their OJS user account. 
![Step 1 of the user invitation process with the option to verify ORCID iD or skip ORCID verification](./assets/invitation-orcid-3.5.png)

## Emailing all users in a role

It is now possible to notify all users with a role by using the **Notify** feature in **Users & Roles**.

Please note, this feature is disabled by default and administrators will need to enable it for each press.

To email users with a particular role, start by selecting role and scrolling to the bottom to enter your message. This feature may be useful for contacting your reviewers to confirm their interest in serving as a reviewer for your press.

Once you have sent your message, there will be a status notification indicating whether your message has been successfully sent.

When using this function, please note that there will be no record in your press of the emails that have been sent using this. Although you could opt to cc the main Press contact on the email.

![List of Roles in Press you can notify](./assets/learning-omp3.3-notify-user-1.png)

![Message box for Notify user function](./assets/learning-omp3.3-notify-user-2.png)

## Granting Author permissions

As of OMP 3.2, editors can grant access to allow authors to make metadata changes. There are two ways editors can grant this type of access.

__Global permission__- will grant all users with the role ‘author’ permission to make metadata changes.

To enable this, go to Users & Roles > Roles. Click the blue arrow beside the ‘Author’ then click edit.

![The expanded Edit menu under the Author role.](./assets/learning-omp3.2-user-permission-1.png)

Under Role Options, enable ‘Permit submission metadata edit.’ then click OK.

![The ‘Permit submission metadata edit.’ checkbox highlighted in the role options screen.](./assets/learning-omp3.2-user-permission-2.png)

__Limited Permission__ - will grant registered authors (typically a single author) permission to only make changes at certain stages of the editorial workflow.

To allow an author to change the metadata at a specific stage of the workflow, click on the workflow stage (ie., Submission, Review, Copyediting, or Production).

Under the participant’s list, click the arrow beside the author’s name followed by Edit.

![The workflow screen.](./assets/learning-omp3.2-user-permission-3.png)

![The expanded edit menu under the Author in the workflow screen.](./assets/learning-omp3.2-user-permission-4.png)

Under Permissions, enable ‘Allow this person to edit publication details.’ followed by OK.

![The edit assignment window with permissions options.](./assets/learning-omp3.2-user-permission-5.png)

Once the author has been granted access to made edits they will be able to make changes to the following sections on the Publication tab: Title & Abstract, Contributors,  Chapters and Metadata.

![The above sections highlighted on the Publication tab.](./assets/learning-omp3.2-user-permission-6.png)

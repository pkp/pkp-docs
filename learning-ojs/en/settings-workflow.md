---
book: learning-ojs
version: 3.4
showPageTOC: true
title: Learning Open Journal Systems 3.4 - Workflow Settings
---
# Workflow Settings

The Workflow Settings allow you to configure various parts of the journal's editorial workflow. The workflow setting has 5 main tabs.

## Submission 

This PKP School video explains how to configure the submission process in OJS. To watch other videos in this series, visit [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).

{% include video.html id="_I2-IpEWu9E" provider="youtube" title="Video of how to configure the submission process in OJS"%}

Use this section to configure the submission process.

### Disable Submissions

A journal manager will be able to disable submissions for the entire section or disable submissions to a specific section or for the journal as a whole.

Once the setting is enabled, a notification is displayed indicating that submissions have been disabled. When this setting is enabled, users will no longer be able to make submissions in the journal.

![OJS 3.3 disable submission menu.](./assets/learning-ojs3.3-workflow-disable-submissions.png)

![OJS 3.3 notice about the journal not accepting submissions.](./assets/learning-ojs3.3-workflow-disable-submissions-notification.png)

### Metadata

This section determines what types of metadata will be allowed for each submission, as well as how it is collected during the submission process. Optional metadata fields include keywords, references, supporting agencies, and data availability statements. If you choose to enable these fields, you'll be presented with further options to request, require, or not ask authors to provide a draft of metadata (editors can review & can revise author-contributed metadata).

Some indexing agencies have specific requirements for metadata. See [Better Practices in Journal Metadata](https://docs.pkp.sfu.ca/metadata-practices/) for guidelines.

### Components

This PKP School video explains how to manage Components in OJS. To watch other videos in this series, visit [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).

{% include video.html id="UkmvhHjP5V0" provider="youtube" title="Video of how to manage components in OJS"%}

Components are the file types authors may upload to the site. Typically, one file will be the article text, and others can include interview transcripts, data, images, etc. The components available for the author to choose from when making their submission are listed here.

![OJS 3.3 article components menu.](./assets/learning-ojs3.2-jm-settings-workflow-comp.png)

Using the links provided, you can change the **Order** of the components \(how they will be listed to the submitting author\), **Add a Component** \(if something you need is not included by default -- e.g., Video\), or **Restore the Defaults** \(if someone has made too many modifications and you just want to reset everything\).

#### Edit Component

You can also edit each component by selecting the blue arrow to the left of the component name. This will reveal an Edit link and a Delete link.

![OJS 3.4 component editing menu.](./assets/learning-ojs3.4-submissions-component.png)

- **Name**: This is the name of the component, as presented to the author.

- **File Type**: Choose how the files associated with this component will be treated and displayed. Anything that is marked as a Dependent file will not be published. Anything marked as a Supplementary file will be displayed visually differently than the main article galley(s), will not be shown in the issue's Table of Contents, and will not be counted among article galley downloads.

- **File Metadata**: Select the type of metadata that these files may receive. Document should be selected for the main publication files, such as the downloadable PDF, so that these files inherit their metadata from the publication. Otherwise, choose Supplementary Content for most file types. Artwork is appropriate for files which require distinct credit, caption and licensing metadata.
  
- **Require with Submission**: Starting in OJS 3.4 it is possible to make a component mandatory for submission. A submitting author will not be able to proceed without uploading at least one file of this type.

- **Key**: Optional short symbol for the component.

### Checklist

In the Submission Preparation Checklist, Authors must check off that they agree with each item on this list. Use the _Order_ link to change the order of the items, use the _Add Item_ link to create a new item, and use the blue arrow to the left of the item name to _Edit_ an existing item.

![OJS 3.3 submission checklist editing menu.](./assets/learning-ojs-3-settings-workflow-settings-components-edit-item-edit.png)

### Author Guidelines

Use this field to add information for your authors that will be useful during the submission process. This information will be displayed on the journal website.

- Author Guidelines: Recommended guidelines include required file types for the submission document, the preferred citation format, or any elements that should be present in the submission.
- Copyright Notice: This is the author copyright agreement between the author and the journal, and the author agrees to these terms at the time of submission.

## Review

This PKP School video demonstrates how to configure the Review process in OJS. To watch other videos in this series, visit [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).

{% include video.html id="1adbIbQM6E0" provider="youtube" title="Video of how to configure the Review process in OJS"%}

This tab allows you to configure your journal's review process.

![OJS 3.3 review configuration editing menu.](./assets/learning-ojs3.1-jm-settings-workflow-review.png)

### Setup

**Default Review Mode**: Select whether your journal will follow an anonymous reviewer/anonymous author, anonymous reviewer/disclosed author, or open review process.

**Restrict File Access**:Check this off if you want the reviewer to respond to the request before accessing the submission files.

**One-click Reviewer Access**: Enable (default) the first option to provide reviewers with one-click access to the review, bypassing the need to go to the website, login, and find the submission. For security reasons with this option, editors are not able to modify email addresses or add CCs or BCCs prior to sending invitations to reviewers.

**Default Review Deadlines**: Indicate how long reviewers have to decide to accept or decline a review request from the editor, and how long they have to make a recommendation. These dates are calculated from the date the review is sent. 

**Automated Email Reminders**: Reviewers will automatically be notified when they are assigned to a review; however, you may wish to enable or disable reminder emails for reviewers. Use the drop down menu to select either the number of days or “Never Remind” under “Send a reminder if a reviewer has not responded to a review request within the following time (days) after response due date” to set the number of days that can pass after the due date before reviewers will be reminded to accept or reject a review request.

Use the drop down menu to select either the number of days or “Never Remind” under “Send a reminder if a reviewer has not responded to a review request within the following time (days) after response due date” to set the number of days that can pass after the due date before reviewers will be reminded to make a recommendation for a submission.

Hit the **Save** button to record your changes.

![OJS 3.3 notification of author submission screen.](./assets/learning-ojs3.1-jm-settings-review-reminders.png)

Note that some system settings must be configured by the Site Administrator to send email. See the [Administrator's Guide](https://docs.pkp.sfu.ca/admin-guide/en/email) for more information.

### Review Guidance

**Review Guidelines**: Provide your reviewers with criteria for judging a submission's suitability for publication in the press, which may include instructions for preparing an effective and helpful review.

**Competing Interests**: Add your competing interest disclosure policy statement here.

### Review Forms

Review forms provide reviewers with a set of questions to respond to. This can help focus their feedback in ways that is more useful to you.

**Create Review Form**: Use the Create Review Form link to make a new form.

![OJS 3.3 new review form creation menu.](./assets/learning-ojs-3-settings-workflow-settings-review-create.png)

The Description and Instructions provide information about the form and when to use it for Journal Managers and Editors. This content is not included on the form that reviewers see. You can add instructions and guidelines for reviewers under Review Guidelines \(below\).

Back at the Review Forms page, select the blue arrow to the left of the form name to reveal the Edit link.

![OJS 3.3 review forms with edit menu expanded.](./assets/learning-ojs-3-settings-workflow-settings-review-edit1.png)

Select the Edit link and complete the form.

![OJS 3.3 review form edit menu and response options.](./assets/learning-ojs-3-settings-workflow-settings-review-create-items.png)

**Form Items** are form questions.

You can choose whether to make the question mandatory for reviewers and visible to the author.

You can then choose the type of response, including:

* a single word text box
* a single line text box
* an extended text box \(for longer answers\)
* checkboxes \(where the reviewer can select multiple possible responses\)
* radio buttons \(where the reviewer can only select one possible answer\)
* dropdown menu \(also where reviewers can only select one possible answer\)

**Response Options** are the selections you make available for the checkboxes, radio buttons, or dropdown menus. A good example of a checkbox response is a [Likert scale](https://en.wikipedia.org/wiki/Likert_scale), where the reviewer must choose only one option: E.g., Good, Neutral, Bad.

Remember to hit the **Save** button to record your changes.

Use the **Preview** tab to test out the form.

![OJS 3.3 review form preview and response options.](./assets/learning-ojs-3-settings-workflow-settings-review-preview.png)

Once you send the form to a reviewer you will no longer be able to edit it because that would change the record for existing reviews using that form. If you want to make changes to the review form at that point you can copy the existing form and create a new updated version.

**Anonymous Reviewer/Disclosed Author**: Check this box to display a link for instructions on ensuring all submission files are anonymized.

![OJS 3.3 checkbox to display submission anonymization instructions.](./assets/learning-ojs-3-settings-workflow-settings-review2.png)

## Publisher Library

This PKP School video explains how to use the Publisher Library in OJS. To watch other videos in this series, visit [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).

{% include video.html id="QhOJjxW0_Rw" provider="youtube" title="Video of the Publisher Library in OJS"%}

The Journal Manager and Editors may upload documents that they would like to share with the other users in the Publisher Library. Any document added in this area will be visible within a user’s Document Library in their manuscript’s Submission Library.

You can also upload a file here that you would like to be publicly accessible via a URL, which you can link to from other parts of your site, including the author guidelines, submission checklist, or a static page.

Suggested forms that can be uploaded in this area can include the galley approval form, supplemental material cover page, and other forms related to your journals workflow.

![OJS 3.3 publisher library menu.](./assets/learning-ojs3.1-jm-settings-workflow-publib1.png)

To add a file here, click ‘Add a file’ on the top right corner of the Publisher Library box.

![OJS 3.3 add a file to the publisher library.](./assets/learning-ojs3.1-jm-settings-workflow-publib2.png)

**Name**: Title of Document you want to appear to the user

**Type**: Select Marketing, Permission, Reports, Other

**Public Access**: Enabling this will allow users to download this file using the hyperlink provided if it is hyperlinked in other parts of your journal site.

## Emails

This PKP School video explains how to configure emails in OJS. To watch other videos in this series, visit [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).

{% include video.html id="ZK-Nb7wfHew" provider="youtube" title="Video of how to configure emails in OJS"%}

### Email Setup

The section allows you to configure the emails that are sent out from the system. You can also access your email templates from here by clicking **Add and edit templates**. 

![OJS 3.4 emails menu.](./assets/learning-ojs3.3-jm-settings-workflow-emails.png)

**Signature**: The information in this field will be added to the bottom of every email sent out by the system.

**New Submission**: Configure which authors should receive the submission confirmation email (all authors, submitting author, or no authors) and submission acknowledgement email (primary contact, none, and/or any additional contacts.

**Editorial Decisions**: Configure which authors should receive the decision emails (all authors or just submitting author)

**For Editors**: Configure whether monthly statistics updates should be sent to all users with an Editorial role. Individual Editors can unsubscribe from this email from their user profile.

**Bounce Address**: A notice will be sent to this email address of any system-sent emails that fail to deliver, such as when the targeted email address is no longer valid.


### Email Templates

OJS facilitates work flow communication through the use of prepared email messages. Please note, some configuration is required to send email. See the [Administrator's Guide](https://docs.pkp.sfu.ca/admin-guide/en/email) for more information.

You can view and modify the prepared email templates here. The title and summary of each email template is displayed in the list.

![OJS 3.4 emails templates.](./assets/learning-ojs3.4-jm-settings-workflow-email-templates.png)

You can search for an email template by keyword by typing something in to the **Search** box.

**Filters** are also available to help find templatesby workflow stage, sender (sent from), recepient (sent to). 

See [Template Descriptions](#template-descriptions) at the end of this chapter for a table of all email templates and their sender, recipient, and workflow stage.

#### Edit email templates

You will find that some email templates have single and multiple available ones.  For emails that are typically sent automatically or tied to a specific event (e.g., Notify Other Authors), editors will only have the option to edit the template. 

![OJS 3.4 emails templates.](./assets/learning-ojs3.4-jm-settings-workflow-single-email-templates.png)

For emails that are sent manually (e.g., Discussion (Copyediting)), editors will have the opportunity to both edit and create additional templates. 

![OJS 3.4 emails templates.](./assets/learning-ojs3.4-jm-settings-workflow-multi-email-templates.png)

To edit a template:

1. Go to Workflow Settings > Emails > Add and Edit email templates
2. Click Edit on template
3. If applicable select language of the template
4. Make changes to the subject and the body text. 
5. A glossary of available variables can also be inserted using the ‘Insert Content’ button.
6. When you’re finished editing, click Save.

#### Removing email templates

Only templates that are not designated as 'Default' will give you to option to **Remove** 

#### Reload default email templates

If you have edited email templates but want to reverse the edits and restore them to their default contents, you can reset them:

1. Go to Workflow Settings > Emails > Add and Edit templates
2. Click Reset All Templates
3. When the confirmation message appears, click Reset All.

#### Add email template

Additional email templates can be stage-specific discussions or existing ones not tied to automatic action, typically indicated in the email template description.

To add a template, click **Edit**, followed by **Add Template**.

![OJS 3.4 emails templates.](./assets/learning-ojs3.4-jm-settings-workflow-multi-email-templates.png)

#### Email template access

You can restrict access to templates by user group. By default, all user groups have access to the default templates.

1. Go to Workflow Settings > Emails > Add and Edit templates
2. Click **Edit** on the template you want to modify.
3. Select the user groups that should have access, or choose the "Mark as unrestricted" option to make a currently restricted template available to all user groups.
4. When you’re finished, click Save.

*Note: You can only change the access for templates that are related to the submission workflow.*

#### Filters

Click here to filter email templates based on the following: Editorial Stage, Sender, and Recipient.

#### Add email attachment

There is no direct email attachment option in OJS 3, but you can upload and share public files via the Publisher Library:

1. In Settings > Workflow > Publisher Library > Add a file, upload your document and tick the “Public Access” checkbox
2. Click "OK" for the URL to be generated
3. Insert the URL in your email

You can also choose to modify an existing email template with this URL, or share it publicly on the website.

#### Template descriptions

OJS 3.2 now provides a description for every template outlining the sender and recipient, stage of workflow.

The table below provides an overview of the prepared email templates found in OJS 3.2. Note that "Editor" refers to any type of editor (e.g. journal editor, production editor, etc.). The following columns appear in the table:

- **Template**: The name of the email template.
- **Description**: A description of the template.
- **Sender**: The name or signature that will appear at the end of the message. In some cases, the system sends the message automatically but the sender appears as a particular user.
- **Recipient**: Who the email can be sent to.
- **Workflow** stage: The workflow stage that this template is used in.

| Template                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                          | Sender                             | Recipient             | Workflow                 |
|------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------|-----------------------|--------------------------|
| Announcement - ANNOUNCEMENT       | This email is used to notify users of a new announcement posted by the journal.                                                                                                                                                                                                                                                                                                                                       | System                         | Registered Users                |               |
| Citation Editing - CITATION_EDITOR_AUTHOR_QUERY       | This email allows copyeditors to request additional information about references from authors.                                                                                                                                                                                                                                                                                                                                       | Copyeditor                         | Author                | Copyediting              |
| Copyediting Request - COPYEDIT_REQUEST                   | This email is sent by a Section Editor to a submission's Copyeditor to request that they begin the copyediting process. It provides information about the submission and how to access it.                                                                                                                                                                                                                                           | Section Editor                     | Copyeditor            | Copyediting              |
| Editorial Assignment - EDITOR_ASSIGN                      | This email notifies a Section Editor that the Editor has assigned them the task of overseeing a submission through the editing process. It provides information about the submission and how to access the journal site.                                                                                                                                                                                                             | Editor                             | Section Editor        | Submission               |
| Editor Decision - EDITOR_DECISION_ACCEPT             | This email from the Editor or Section Editor to an Author notifies them of a final "accept submission" decision regarding their submission.                                                                                                                                                                                                                                                                                          | Editor/Section Editor              | Author                | Review                   |
| Editor Decision - EDITOR_DECISION_DECLINE            | This email from the Editor or Section Editor to an Author notifies them of a final "decline" decision regarding their submission.                                                                                                                                                                                                                                                                                                    | Editor/Section Editor              | Author                | Review                   |
| Editor Decision - EDITOR_DECISION_INITIAL_DECLINE    | This email is send to the author if the editor declines his submission initially, before the review stage                                                                                                                                                                                                                                                                                                                            | Editor/Section Editor              | Author                | Submission               |
| Editor Decision - EDITOR_DECISION_RESUBMIT           | This email from the Editor or Section Editor to an Author notifies them of a final "resubmit" decision regarding their submission.                                                                                                                                                                                                                                                                                                   | Editor/Section Editor              | Author                | Review                   |
| Editor Decision - EDITOR_DECISION_REVISIONS          | This email from the Editor or Section Editor to an Author notifies them of a final "revisions required" decision regarding their submission.                                                                                                                                                                                                                                                                                         | Editor/Section Editor              | Author                | Review                   |
| Editor Decision - EDITOR_DECISION_SEND_TO_EXTERNAL   | This email from the Editor or Section Editor to an Author notifies them that their submission is being sent to an external review.                                                                                                                                                                                                                                                                                                   | Editor/Section Editor              | Author                | Review                   |
| Editor Decision - EDITOR_DECISION_SEND_TO_PRODUCTION | This email from the Editor or Section Editor to an Author notifies them that their submission is being sent to production.                                                                                                                                                                                                                                                                                                           | Editor/Section Editor              | Author                | Production               |
| Editor Recommendation - EDITOR_RECOMMENDATION              | This email from the recommending Editor or Section Editor to the decision making Editors or Section Editors notifies them of a final recommendation regarding the submission.                                                                                                                                                                                                                                                        | Recommending Editor/Section Editor | Editor/Section Editor | Review                   |
| Article of Possible Interest - EMAIL_LINK                         | This email template provides a registered reader with the opportunity to send information about an article to somebody who may be interested. It is available via the Reading Tools and must be enabled by the Journal Manager in the Reading Tools Administration page.                                                                                                                                                             | Journal Manager                    | Reader                |                          |
| Galleys Complete - LAYOUT_COMPLETE                    | This email from the Layout Editor to the Section Editor notifies them that the layout process has been completed.                                                                                                                                                                                                                                                                                                                    | Layout Editor                      | Editor                | Production               |
| Request Galleys - LAYOUT_REQUEST                     | This email from the Section Editor to the Layout Editor notifies them that they have been assigned the task of performing layout editing on a submission. It provides information about the submission and how to access it.                                                                                                                                                                                                         | Editor                             | Layout Editor         | Production               |
| Archiving Request for {$contextName} - LOCKSS_EXISTING_ARCHIVE            | This email requests the keeper of a LOCKSS archive to consider including this journal in their archive. It provides the URL to the journal's LOCKSS Publisher Manifest.                                                                                                                                                                                                                                                              | LOCKSS                             | Journal Manager       | Post-Production/Indexing |
| Archiving Request for {$contextName} - LOCKSS_NEW_ARCHIVE                 | This email encourages the recipient to participate in the LOCKSS initiative and include this journal in the archive. It provides information about the LOCKSS initiative and ways to become involved.                                                                                                                                                                                                                                | LOCKSS                             | Journal Manager       | Post-Production/Indexing |
| Article Indexing Error - LUCENE_ARTICLE_INDEXING_ERROR_NOTIFICATION                 | This email template is used to notify the technical contact of a journal that an error occurred during article indexing.                                                                                                                                                                                                                                | Lucene search plugin                             | Journal Manager       | Post-Production/Indexing |
| Journal Indexing Error - LUCENE_JOURNAL_INDEXING_ERROR_NOTIFICATION                 | This email template is used to notify the technical contact of a journal that an error occurred during journal indexing.                                                                                                                                                                                                                                | Lucene search plugin                             | Journal Manager       | Post-Production/Indexing |
| Journal Search Service Error - LUCENE_SEARCH_SERVICE_ERROR_NOTIFICATION                 | This email template is used to notify the technical contact of a journal that an error occurred while trying to access the Solr search                                                                                                                                                                                                                                | Lucene search plugin                             | Journal Manager       | Post-Production/Indexing |
| Manual Payment Notification - MANUAL_PAYMENT_NOTIFICATION        | This email template is used to notify a journal manager contact that a manual payment was requested.                                                                                                                                                                                                                                                                                                                                 | Author                             | Journals Manager      |                          |
| New notification from {$siteTitle} - NOTIFICATION                       | The email is sent to registered users that have selected to have this type of notification emailed to them. This includes notifications of announcements and new issues published.                                                                                                                                                                                                                                                                                                                         | System                             | Registered User       |                          |
| A message regarding {$contextName} - NOTIFICATION_CENTER_DEFAULT        | The default (blank) message used in the Notification Center Message Listbuilder.                                                                                                                                                                                                                                                                                                                                                     |                                    |                       |                          |
| Welcome to the the {$siteTitle} mailing list! - NOTIFICATION_MAILLIST_WELCOME                       | This email is sent to an unregistered user who just registered with the notification mailing list.                                                                                                                                                                                                                                                                                                                          | System                             | Registered User       |                         
| Issue Now Open Access - OPEN_ACCESS_NOTIFY                 | This email is sent to registered readers who have requested to receive a notification email when an issue becomes open access.                                                                                                                                                                                                                                                                                                       | Registered Reviewer                | System                | Publish                  |
| Submission ORCID - ORCID_COLLECT_AUTHOR_ID            | This email template is used to collect the ORCID id's from authors.                                                                                                                                                                                                                                                                                                                                                                  | Journals Manager/System            | Author                | Submission               |
| Requesting ORCID record access - ORCID_REQUEST_AUTHOR_AUTHORIZATION | This email template is used to request ORCID record access from authors.                                                                                                                                                                                                                                                                                                                                                             | Journals Manager/System            | Author                | Submission               |
| Password Reset - PASSWORD_RESET                     | This email is sent to a registered user when they have successfully reset their password following the process described in the PASSWORD_RESET_CONFIRM email.                                                                                                                                                                                                                                                                        | System                             | Registered User       |                          |
| Password Reset Confirmation - PASSWORD_RESET_CONFIRM             | This email is sent to a registered user when they indicate that they have forgotten their password or are unable to login. It provides a URL they can follow to reset their password.                                                                                                                                                                                                                                                | System                             | Registered User       |                          |
| New Issue Published - PUBLISH_NOTIFY                | This email is not yet used in OJS 3.                                                                                                                                                                                                                                          | System                             | Registered Users      | Publish                  |
| Registration as Reviewer with {$contextName} - REVIEWER_REGISTER                  | This email is sent to a newly registered reviewer to welcome them to the system and provide them with a record of their username and password.                                                                                                                                                                                                                                                                                       | System                             | Reviewer              |                          |
| Article Review Acknowledgement - REVIEW_ACK                         | This email is sent by a Section Editor to confirm receipt of a completed review and thank the reviewer for their contributions.                                                                                                                                                                                                                                                                                                      | Section Editor/Editor              | Reviewer              | Review                   |
| Request for Review Cancelled - REVIEW_CANCEL                      | This email is sent by the Section Editor to a Reviewer who has a submission review in progress to notify them that the review has been cancelled.                                                                                                                                                                                                                                                                                    | Reviewer                           | Editor/Section Editor | Review                   |
| Able to Review - REVIEW_CONFIRM                     | This email is sent by a Reviewer to the Section Editor in response to a review request to notify the Section Editor that the review request has been accepted and will be completed by the specified date.                                                                                                                                                                                                                           | Reviewer                           | Editor/Section Editor | Review                   |
| Unable to Review - REVIEW_DECLINE                     | This email is sent by a Reviewer to the Section Editor in response to a review request to notify the Section Editor that the review request has been declined.                                                                                                                                                                                                                                                                       | Reviewer                           | Editor/Section Editor | Review                   |
| REVIEW_REINSTATE                   | This email is sent by the Section Editor to a Reviewer who has a submission review in progress to notify them that a cancelled review has been reinstated.                                                                                                                                                                                                                                                                           | Editor/Section Editor              | Reviewer              | Review                   |
| Submission Review Reminder - REVIEW_REMIND                      | This email is sent by a Section Editor to remind a reviewer that their review is due.                                                                                                                                                                                                                                                                                                                                                | Editor/Section Editor              | Reviewer              | Review                   |
| Automated Submission Review Reminder - REVIEW_REMIND_AUTO                 | This email is automatically sent when a reviewer's due date elapses (see Review Options under Settings > Workflow > Review) and one-click reviewer access is disabled. Scheduled tasks must be enabled and configured (see the site configuration file).                                                                                                                                                                             | System                             | Reviewer              | Review                   |
| Automated Submission Review Reminder - REVIEW_REMIND_AUTO_ONECLICK        | This email is automatically sent when a reviewer's due date elapses (see Review Options under Settings > Workflow > Review) and one-click reviewer access is enabled. Scheduled tasks must be enabled and configured (see the site configuration file).                                                                                                                                                                              | System                             | Reviewer              | Review                   |
| Submission Review Reminder - REVIEW_REMIND_ONECLICK             | This email is sent by a Section Editor to remind a reviewer that their review is due.                                                                                                                                                                                                                                                                                                                                                | Editor/Section Editor              | Reviewer              | Review                   |
| Article Review Request - REVIEW_REQUEST                     | This email from the Section Editor to a Reviewer requests that the reviewer accept or decline the task of reviewing a submission. It provides information about the submission such as the title and abstract, a review due date, and how to access the submission itself. This message is used when the Standard Review Process is selected in Management > Settings > Workflow > Review. (Otherwise see REVIEW_REQUEST_ATTACHED.)  | Editor/Section Editor              | Reviewer              | Review                   |
| Article Review Request - REVIEW_REQUEST_ATTACHED            | This email is sent by the Section Editor to a Reviewer to request that they accept or decline the task of reviewing a submission. It includes the submission as an attachment. This message is used when the Email-Attachment Review Process is selected in Management > Settings > Workflow > Review. (Otherwise see REVIEW_REQUEST.)                                                                                               | Editor/Section Editor              | Reviewer              | Review                   |
| Article Review Request - REVIEW_REQUEST_ATTACHED_SUBSEQUENT | This email is sent by the Section Editor to a Reviewer to request that they accept or decline the task of reviewing a submission for a second or greater round of review. It includes the submission as an attachment. This message is used when the Email-Attachment Review Process is selected in Management > Settings > Workflow > Review. (Otherwise see REVIEW_REQUEST_SUBSEQUENT.)                                            | Editor/Section Editor              | Reviewer              | Review                   |
| Article Review Request - REVIEW_REQUEST_ONECLICK            | This email from the Section Editor to a Reviewer requests that the reviewer accept or decline the task of reviewing a submission. It provides information about the submission such as the title and abstract, a review due date, and how to access the submission itself. This message is used when the Standard Review Process is selected in Management > Settings > Workflow > Review, and one-click reviewer access is enabled. | Editor/Section Editor              | Reviewer              |                          |
| Article Review Request - REVIEW_REQUEST_ONECLICK_SUBSEQUENT | This email from the Section Editor to a Reviewer requests that the reviewer accept or decline the task of reviewing a submission for a second or greater round of review. It provides information about the submission such as the title and abstract, a review due date, and how to access the submission itself. This message is used when the Standard Review Process is selected in Management > Settings > Workflow > Review, and one-click reviewer access is enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                 | Editor/Section Editor                                    | Reviewer                      | Review                         |
| Article Review Request - REVIEW_REQUEST_REMIND_AUTO                                    | This email is automatically sent when a reviewer's confirmation due date elapses (see Review Options under Settings > Workflow > Review) and one-click reviewer access is disabled. Scheduled tasks must be enabled and configured (see the site configuration file).                                                                                                                                                                                                                                                                                                                                                                                                                                 | System                                   |  Reviewer                        | Review                           |
| Article Review Request - REVIEW_REQUEST_REMIND_AUTO_ONECLICK                                   | This email is automatically sent when a reviewer's confirmation due date elapses (see Review Options under Settings > Workflow > Review) and one-click reviewer access is enabled. Scheduled tasks must be enabled and configured (see the site configuration file).                                                                                                                                                                                                                                                                                                                                                                                                                                    | System                                   |  Reviewer                     | Review                         |
| Article Review Request - REVIEW_REQUEST_SUBSEQUENT                                   | This email from the Section Editor to a Reviewer requests that the reviewer accept or decline the task of reviewing a submission for a second or greater round of review. It provides information about the submission such as the title and abstract, a review due date, and how to access the submission itself. This message is used when the Standard Review Process is selected in Management > Settings > Workflow > Review. (Otherwise see REVIEW_REQUEST_ATTACHED_SUBSEQUENT.)                                                                                                                                                                                                                                                                                                                                                                                                                                     |  Editor/Section Editor                                  | Reviewer                       | Review                         |
| Revised Version Uploaded - REVISED_VERSION_NOTIFY                                   | This email is automatically sent to the assigned editor when author uploads a revised version of an article.                                                                                                                                                                                                                                                                                                                                                                                                                                     | System                                   | Editor/Section Editor                      | Review                         |
| STATISTICS_REPORT_NOTIFICATION                                   | This email is automatically sent monthly to editors and journal managers to provide them a system health overview.                                                                                                                                                                                                                                                                                                                                                                                                                                     | System                                   | Editor/Journals Manager                      |                          |
| Submission Acknowledgement - SUBMISSION_ACK                                   | This email, when enabled, is automatically sent to an author when he or she completes the process of submitting a manuscript to the journal. It provides information about tracking the submission through the process and thanks the author for the submission.                                                                                                                                                                                                                                                                                                                                                                                                                                     | System                                   | Author                      | Submission                         | 		 
| Submission Acknowledgement - SUBMISSION_ACK_NOT_USER                                   | This email, when enabled, is automatically sent to the other authors who are not users within OJS specified during the submission process.                                                                                                                                                                                                                                                                                                                                                                                                                                     | System                                  | Author (not registered in OJS)                      | Submission          |   
| Submission Unsuitable - SUBMISSION_UNSUITABLE                                   | This email sends a message to an author who makes an unsuitable submission to the journal and recommends they submit elsewhere.                                                                                                                                                                                                                                                                                                                                                                                                                                     | Editor                                  | Author                      | Submission          |   
| Subscription Expired - SUBSCRIPTION_AFTER_EXPIRY |  This email notifies a subscriber that their subscription has expired. It provides the journal's URL along with instructions for access.       | System         | Subscriber |  |                                                                                                                                                                                                                                                                                                                                                                                         
| Subscription Expired - Final Reminder - SUBSCRIPTION_AFTER_EXPIRY_LAST | This email notifies a subscriber that their subscription has expired. It provides the journal's URL along with instructions for access.                                   | System | Subscriber |				 |                                                                                                                                                                                                                                                                                                                                                                                                                                       
| Notice of Subscription Expiry - SUBSCRIPTION_BEFORE_EXPIRY                          | This email notifies a subscriber that their subscription will soon expire. It provides the journal's URL along with instructions for access.                              | System      | Subscriber |    |                                                                                                                                                                                                                                                                                                                                                                                                                                   
| Subscription Notification - SUBSCRIPTION_NOTIFY                         | This email notifies a registered reader that the Manager has created a subscription for them. It provides the journal's URL along with instructions for access.   | System                                  | Subscriber                      |                          |
| Subscription Purchase: Individual - SUBSCRIPTION_PURCHASE_INDL                                   | This email notifies the Subscription Manager that an individual subscription has been purchased online. It provides summary information about the subscription and a quick access link to the purchased subscription.                                                                                                                                                                                                                                                                                                                                                                                                                                      | System                                 | Subscription Manager                      |                          |
| Subscription Purchase: Institutional - SUBSCRIPTION_PURCHASE_INSTL                                   | This email notifies the Subscription Manager that an institutional subscription has been purchased online. It provides summary information about the subscription and a quick access link to the purchased subscription.                                                                                                                                                                                                                                                                                                                                                                                                                                     | System                                   | Subscription Manager                       |                          |
|Subscription Renewal: Individual - SUBSCRIPTION_RENEW_INDL| This email notifies the Subscription Manager that an individual subscription has been renewed online. It provides summary information about the subscription and a quick access link to the renewed subscription.|System| Subscription Manager |   |
| Subscription Renewal: Institutional - SUBSCRIPTION_RENEW_INSTL                                   | This email notifies the Subscription Manager that an institutional subscription has been renewed online. It provides summary information about the subscription and a quick access link to the renewed subscription.                                                                                                                                                                                                                                                                                                                                                                                                                                     | System                                   | Subscription Manager                      |                          |
| Journal Registration - USER_REGISTER                                   | This email is sent to a newly registered user to welcome them to the system and provide them with a record of their username and password.                                                                                                                                                                                                                                                                                                                                                                                                                                     | System                                   | User                      |                          |
| Validate Your Account - USER_VALIDATE                                   | This email is sent to a newly registered user to validate their email account.                                                                                                                                                                                                                                                                                                                                                                                                                                     | System                                   | User                      |                          |

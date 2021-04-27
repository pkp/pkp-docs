---
book: learning-ojs
version: 3.1
---

# Chapter 7: Workflow Settings

The Workflow Settings allow you to configure various parts of the journal's editorial workflow. Its tabs include Components, Submission, Review, Publisher Library, and Emails.

## Components

When an author makes a submission, they can upload multiple files. Typically, one file will be the article text, and others can include interview transcripts, data, images, etc. Each of these files is a **component** of the submission. The components available for the author to choose from when making their submission are listed here.

![OJS 3.1 article components menu.](./assets/learning-ojs3.1-jm-settings-workflow-comp.png)

Using the links provided, you can change the **Order** of the components \(how they will be listed to the submitting author\), **Add a Component** \(if something you need is not included by default -- e.g., Video\), or **Restore the Defaults** \(if someone has made too many modifications and you just want to reset everything\).

### Edit Component

You can also edit each component by selecting the blue arrow to the left of the component name. This will reveal an Edit link and a Delete link.

![OJS 3.1 submission configuration menu.](./assets/learning-ojs3.1-jm-settings-workflow-comp-edit.png)

**Name**: This is the name of the component, as presented to the author.

**Options**: Choose how the files associated with this component will be treated and displayed. Anything that is marked as a Dependent file will not be published.

**File Type Grouping**: Determine whether this component is associated with the submission document, artwork, or is a supplementary file.

## Submission

Use this section to configure the submission process.

![OJS 3.1 submission checklist editing menu.](./assets/learning-ojs3.1-jm-settings-workflow-submission.png)

**Author Guidelines**: Use this field to add guidelines for your authors. This information will be displayed on the journal website.

**Submission Preparation Checklist**: Authors must check off that they agree with each item on this list. Use the _Order_ link to change the order of the items, use the _Add Item_ link to create a new item, and use the blue arrow to the left of the item name to _Edit_ an existing item.

![OJS 3.1 submission checklist editing menu.](./assets/learning-ojs-3-settings-workflow-settings-components-edit-item-edit.png)

**Notification of Author Submission**: Add an email address here to be contacted whenever there is a new submission.

**Submission Metadata**: This section allows you to determine which metadata fields to use for your journal.

![OJS 3.1 submission metadata control grid.](./assets/learning-ojs-3-settings-workflow-settings-submission-submission-metadata.png)

Each entry is a different metadata type available for every article in your journal.

Some journals may want to activate all of them, but many will wish to keep it simple and just choose Keywords.

If you choose _Enabled_, that metadata type will be added to your submissions for completion by an editor.

If you choose _Submission Form_, that metadata type will also be presented to your authors for them to fill in during their submission.

Remember to hit the **Save** button to record any changes to this page.

**Privacy Statement**: The default privacy statement can be modified if you wish.

## Review

This tab allows you to configure your journal's review process.

![OJS 3.1 review configuration editing menu.](./assets/learning-ojs3.1-jm-settings-workflow-review.png)

**Default Review Deadlines**: Indicate how long reviewers have to decide to accept or decline a review request from the editor, and how long they have to make a recommendation.

**Automated Email Reminders**: Reviewers will automatically be notified when they are assigned to a review; however, you may wish to enable or disable reminder emails for reviewers. Use the drop down menu to select either the number of days or “Never Remind” under “Send a reminder if a reviewer has not responded to a review request within the following time (days) after response due date” to set the number of days that can pass after the due date before reviewers will be reminded to accept or reject a review request.

Use the drop down menu to select either the number of days or “Never Remind” under “Send a reminder if a reviewer has not responded to a review request within the following time (days) after response due date” to set the number of days that can pass after the due date before reviewers will be reminded to make a recommendation for a submission.

![OJS 3.1 notification of author submission screen.](./assets/learning-ojs3.1-jm-settings-review-reminders.png)

Note that some system settings must be configured by the Site Administrator to send email. See the [Administrator's Guide](https://docs.pkp.sfu.ca/admin-guide/en/email) for more information.

**Review Forms**: Review forms provide reviewers with a set of questions to respond to. This can help focus their feedback in ways that is more useful to you.

**Create Review Form**: Use the Create Review Form link to make a new form.

![OJS 3.1 new review form creation menu.](./assets/learning-ojs-3-settings-workflow-settings-review-create.png)

The Description and Instructions provide information about the form and when to use it for Journal Managers and Editors. This content is not included on the form that reviewers see. You can add instructions and guidelines for reviewers under Review Guidelines \(below\).

Back at the Review Forms page, select the blue arrow to the left of the form name to reveal the Edit link.

![OJS 3.1 review forms with edit menu expanded.](./assets/learning-ojs-3-settings-workflow-settings-review-edit1.png)

Select the Edit link and complete the form.

![OJS 3.1 review form edit menu and response options.](./assets/learning-ojs-3-settings-workflow-settings-review-create-items.png)

**Items** are form questions.

You can choose whether to make the question required and visible to the author.

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

![OJS 3.1 review form preview and response options.](./assets/learning-ojs-3-settings-workflow-settings-review-preview.png)

Once you send the form to a reviewer you will no longer be able to edit it because that would change the record for existing reviews using that form. If you want to make changes to the review form at that point you can copy the existing form and create a new updated version.

**Blind Review**: Check this box to display a link for instructions on ensuring all submission files are anonymized.

![OJS 3.1 checkbox to display submission anonymization instructions.](./assets/learning-ojs-3-settings-workflow-settings-review2.png)

**Competing Interests**: Add your competing interest disclosure policy statement here.

**Reviewer Competing Interest statement**: Add a checkbox that reviewers agree to comply with your competing interest statement.

**Review Guidelines** Provide your reviewers with criteria for judging a submission's suitability for publication in the press, which may include instructions for preparing an effective and helpful review.

**Review Options**: Select whether your journal will follow a double blind, blind, or open review process.

**Reviewer Access**: Enable (default) the first option to provide reviewers with one-click access to the review, bypassing the need to go to the website, login, and find the submission. For security reasons with this option, editors are not able to modify email addresses or add CCs or BCCs prior to sending invitations to reviewers.

Enabling the second option will limit access to submission files until after the reviewer has agreed to do the review.

Hit the **Save** button to record your changes.

## Publisher Library

The Journal Manager and Editors may upload documents that they would like to share with the other users in the Publisher Library. Any document added in this area will be visible within a user’s Document Library in their manuscript’s Submission Library.

You can also upload a file here that you would like to be publicly accessible via a URL, which you can link to from other parts of your site, including the author guidelines, submission checklist, or a static page.

Suggested forms that can be uploaded in this area can include the galley approval form, supplemental material cover page, and other forms related to your journals workflow.

![OJS 3.1 publisher library menu.](./assets/learning-ojs3.1-jm-settings-workflow-publib1.png)

To add a file here, click ‘Add a file’ on the top right corner of the Publisher Library box.

![OJS 3.1 add a file to the publisher library.](./assets/learning-ojs3.1-jm-settings-workflow-publib2.png)

**Name**: Title of Document you want to appear to the user

**Type**: Select Marketing, Permission, Reports, Other

**Public Access**: Enabling this will allow users to download this file using the hyperlink provided if it is hyperlinked in other parts of your journal site.


## Emails

The section allows you to configure the emails that are sent out from the system.

![OJS 3.1 emails menu.](./assets/learning-ojs3.1-jm-settings-workflow-emails.png)

**Signature**: The information in this field will be added to the bottom of every email sent out by the system.

**Bounce Address**: A notice will be sent to this email address of any system-sent emails that fail to deliver, such as when the targeted email address is no longer valid.

### Prepared Email Templates

OJS facilitates work flow communication through the use of prepared email messages. You can view and modify these prepared email templates here. Please note, some configuration is required to send email. See the [Administrator's Guide](https://docs.pkp.sfu.ca/admin-guide/en/email) for more information.

#### Disable email templates

All of the templates are enabled by default when you install OJS, but you can disable some templates by un-checking the box on the far right under ‘Enabled’. Most of the templates that can be disabled are messages that are sent automatically by OJS. Disabling the template will mean that the automatic notification will not be sent.

#### Edit email templates

When you edit an email template, you change what it will say every time it is used.  For emails that are sent voluntarily, such as a message sent to a reviewer asking them to review a submission, you can also change the contents of the message at the time of sending it. This changes the contents for that message only.

To edit a template:
1. Go to Workflow Settings > Emails > Prepared Email Templates
2. Click the blue arrow next to the template name to reveal links below it
3. Click Edit Email
4. Make changes to the subject and the body text. Be careful to not delete any tags such as “{$authorName}:,” which automatically insert content from a submission.
5. When you’re finished editing, click Save.

![OJS 3.1 prepared emails templates.](./assets/learning-ojs3.1-jm-settings-workflow-email-templates.png)

#### Reload default email templates

If you have edited email templates but want to reverse the edits and restore them to their default contents, you can reset them:
1. Go to Workflow Settings > Emails > Prepared Email Templates
2. Click Reset All Templates
3. When the confirmation message appears, click OK.

#### Add email template

Click the button **Add Email Template** to create a custom email template that you can use when notifying a user or adding a participant to a submission. Note that in versions earlier than OJS 3.1.2, you can create a custom email templates but it will not be available to use at any stage in the workflow.

#### Add email attachment

There is no direct email attachment option in OJS 3, but you can upload and share public files via the Publisher Library:

1. In Settings > Workflow > Publisher Library > Add a file, upload your document and tick the “Public Access” checkbox
2. Click "OK" for the URL to be generated
3. Insert the URL in your email

You can also choose to modify an existing email template with this URL, or share it publicly on the website.

#### Template descriptions

The table below describes the prepared email templates found in OJS 3. Note that "Editor" refers to any type of editor (e.g. journal editor, production editor, etc.). The following columns appear in the table:

- **Name**: The name of the email template.
- **Sender**: The name or signature that will appear at the end of the message. In some cases, the system sends the message automatically but the sender appears as a particular user.
- **Recipient**: Who the email can be sent to.
- **Description**: A description of the template.
- **Workflow** stage: The workflow stage that this template is used in.

<hr />

| Name                                | Sender               | Recipient            | Workflow stage                       | Description                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------------------- | -------------------- | -------------------- | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Copyedit Request                    | Editor               | Copyeditor           | Copyediting                          | This email is sent by a Section Editor to a submission's Copyeditor to request that they begin the copyediting process. It provides information about the submission and how to access it.                                                                                                                                                                                         |
| Editor Assign                       | Editor               | Editor               | All stages                           | This email notifies a Section Editor that the Editor has assigned them the task of overseeing a submission through the editing process. It provides information about the submission and how to access the journal site.                                                                                                                                                           |
| Editor Decision Accept              | Editor               | Author               | Review                               | This email from the Editor or Section Editor to an Author notifies them of a final "accept submission" decision regarding their submission.                                                                                                                                                                                                                                        |
| Editor Decision Decline             | Editor               | Author               | Review                               | This email from the Editor or Section Editor to an Author notifies them of a final "decline" decision regarding their submission.                                                                                                                                                                                                                                                  |
| Editor Decision Initial Decline     | Editor               | Author               | Submission                           | This email is sent to the author if the editor declines his submission initially, before the review stage                                                                                                                                                                                                                                                                          |
| Editor Decision Resubmit            | Editor               | Author               | Review                               | This email from the Editor or Section Editor to an Author notifies them of a "resubmit" decision regarding their submission.                                                                                                                                                                                                                                                       |
| Editor Decision Revisions           | Editor               | Author               | Review                               | This email from the Editor or Section Editor to an Author notifies them of a final "revisions required" decision regarding their submission.                                                                                                                                                                                                                                       |
| Editor Decision Send To External    | Editor               | Author               | Submission and Review                | This email from the Editor or Section Editor to an Author notifies them that their submission is being sent to an external review.                                                                                                                                                                                                                                                 |
| Editor Decision Send To Production  | Editor               | Author               | Copyediting                          | This email from the Editor or Section Editor to an Author notifies them that their submission is being sent to production.                                                                                                                                                                                                                                                         |
| Editor Recommendation               | Editor               | Journal Manager      | Review                               | This email from the recommending Editor or Section Editor to the decision making Editors or Section Editors notifies them of a final recommendation regarding the submission.                                                                                                                                                                                                      |
| Layout Complete                     | Layout Editor        | Editor               | Production                           | This email from the Layout Editor to the Section Editor notifies them that the layout process has been completed.                                                                                                                                                                                                                                                                  |
| Layout Request                      | Editor               | Layout Editor        | Production                           | This email from the Section Editor to the Layout Editor notifies them that they have been assigned the task of performing layout editing on a submission. It provides information about the submission and how to access it.                                                                                                                                                       |
| Lockss Existing Archive             |                      |                      | LOCKSS                               | This email requests the keeper of a LOCKSS archive to consider including this journal in their archive. It provides the URL to the journal's LOCKSS Publisher Manifest.                                                                                                                                                                                                            |
| Lockss New Archive                  |                      |                      | LOCKSS                               | This email encourages the recipient to participate in the LOCKSS initiative and include this journal in the archive. It provides information about the LOCKSS initiative and ways to become involved.                                                                                                                                                                              |
| Manual Payment Notification         | Author               | Journal Manager      | Payments or Subscriptions            | This email template is used to notify a journal manager contact that a manual payment was requested.                                                                                                                                                                                                                                                                               |
| Notification                        | Principal contact    | Various              | Various                              | The email is sent to registered users that have selected to have this type of notification emailed to them.                                                                                                                                                                                                                                                                        |
| Notification Center Default         |                      |                      | Various                              | The default (blank) message used in the Notification Center Message Listbuilder.                                                                                                                                                                                                                                                                                                   |
| Open Access Notify                  | Principal contact    | Reader               | Registration                         | This email is sent to registered readers who have requested to receive a notification email when an issue becomes open access.                                                                                                                                                                                                                                                     |
| Orcid Collect Author Id             | Principal contact    | Author               | Registration - if using ORCID plugin | This email template is used to collect the ORCID IDs from authors.                                                                                                                                                                                                                                                                                                                 |
| Orcid Request Author Authorization  | Principal contact    | Author               | Registration - if using ORCID plugin | This email template is used to request ORCID record access from authors.                                                                                                                                                                                                                                                                                                           |
| Password Reset                      | Principle Contact    | User                 | Registration                         | This email is sent to a registered user when they have successfully reset their password following the process described in the PASSWORD_RESET_CONFIRM email.                                                                                                                                                                                                                    |
| Password Reset Confirm              | Principle Contact    | User                 | Registration                         | This email is sent to a registered user when they indicate that they have forgotten their password or are unable to login. It provides a URL they can follow to reset their password.                                                                                                                                                                                              |
| Paypal Investigate Payment          | System               | Principal Contact    | Payments - if using Paypal plugin    | This email template is used to notify a journal's primary contact that suspicious activity or activity requiring manual intervention was encountered by the PayPal plugin.                                                                                                                                                                                                         |
| Publish Notify                      | Editor               | Reader               | Publication                          | This email is sent to registered readers via the "Notify Users" link in the Editor's User Home. It notifies readers of a new issue and invites them to visit the journal at a supplied URL.                                                                                                                                                                                        |
| Reviewer Register                   | Principal contact    | Reviewer             | Registration                         | This email is sent to a newly registered reviewer to welcome them to the system and provide them with a record of their username and password.                                                                                                                                                                                                                                     |
| Review Ack                          | Editor               | Reviewer             | Review                               | This email is sent by a Section Editor to confirm receipt of a completed review and thank the reviewer for their contributions.                                                                                                                                                                                                                                                    |
| Review Cancel                       | Editor               | Reviewer             | Review                               | This email is sent by the Section Editor to a Reviewer who has a submission review in progress to notify them that the review has been cancelled.                                                                                                                                                                                                                                  |
| Review Confirm                      | Reviewer             | Editor               | Review                               | This email is sent by a Reviewer to the Section Editor in response to a review request to notify the Section Editor that the review request has been accepted and will be completed by the specified date.                                                                                                                                                                         |
| Review Decline                      | Reviewer             | Editor               | Review                               | This email is sent by a Reviewer to the Section Editor in response to a review request to notify the Section Editor that the review request has been declined.                                                                                                                                                                                                                     |
| Review Remind                       | Editor               | Reviewer             | Review                               | This email is sent by a Section Editor to remind a reviewer that their review is due.                                                                                                                                                                                                                                                                                              |
| Review Remind Auto                  | Editor               | Reviewer             | Review                               | This email is automatically sent when a reviewer's due date elapses (see Review Options under Settings > Workflow > Review) and one-click reviewer access is disabled. Scheduled tasks must be enabled and configured (see the site configuration file).                                                                                                                           |
| Review Remind Auto Oneclick         | Editor               | Reviewer             | Review                               | This email is automatically sent when a reviewer's due date elapses (see Review Options under Settings > Workflow > Review) and one-click reviewer access is enabled. Scheduled tasks must be enabled and configured (see the site configuration file).                                                                                                                            |
| Review Remind Oneclick              | Editor               | Reviewer             | Review                               | This email is sent by a Section Editor to remind a reviewer that their review is due.                                                                                                                                                                                                                                                                                              |
| Review Request                      | Editor               | Reviewer             | Review                               | This email from the Section Editor to a Reviewer requests that the reviewer accept or decline the task of reviewing a submission. It provides information about the submission such as the title and abstract, a review due date, and how to access the submission itself.                                                                                                         |
| Review Request Oneclick             | Editor               | Reviewer             | Review                               | This email from the Section Editor to a Reviewer requests that the reviewer accept or decline the task of reviewing a submission. It provides information about the submission such as the title and abstract, a review due date, and how to access the submission itself. This message is used when one-click reviewer access is enabled.                                         |
| Review Request Oneclick Subsequent  | Editor               | Reviewer             | Review                               | This email from the Section Editor to a Reviewer requests that the reviewer accept or decline the task of reviewing a submission for a second or greater round of review. It provides information about the submission such as the title and abstract, a review due date, and how to access the submission itself. This message is used when one-click reviewer access is enabled. |
| Review Request Remind Auto          | Editor               | Reviewer             | Review                               | This email is automatically sent when a reviewer's confirmation due date elapses (see Review Options under Settings > Workflow > Review) and one-click reviewer access is disabled. Scheduled tasks must be enabled and configured (see the site configuration file).                                                                                                              |
| Review Request Remind Auto Oneclick | Editor               | Reviewer             | Review                               | This email is automatically sent when a reviewer's confirmation due date elapses (see Review Options under Settings > Workflow > Review) and one-click reviewer access is enabled. Scheduled tasks must be enabled and configured (see the site configuration file).                                                                                                               |
| Review Request Subsequent           | Editor               | Reviewer             | Review                               | This email from the Section Editor to a Reviewer requests that the reviewer accept or decline the task of reviewing a submission for a second or greater round of review. It provides information about the submission such as the title and abstract, a review due date, and how to access the submission itself.                                                                 |
| Revised Version Notify              | System               | Editor               | Revision                             | This email is automatically sent to the assigned editor when author uploads a revised version of an article.                                                                                                                                                                                                                                                                       |
| Submission Ack                      | Principal Contact    | Author               | Submission                           | This email, when enabled, is automatically sent to an author when he or she completes the process of submitting a manuscript to the journal. It provides information about tracking the submission through the process and thanks the author for the submission.                                                                                                                   |
| Submission Ack Not User             | Principal Contact    | Author               | Submission                           | This email, when enabled, is automatically sent to the other authors who are not users within OJS specified during the submission process.                                                                                                                                                                                                                                         |
| Subscription After Expiry           | Subscription Manager | Reader               | Payments or Subscriptions            | This email notifies a subscriber that their subscription has expired. It provides the journal's URL along with instructions for access.                                                                                                                                                                                                                                            |
| Subscription After Expiry Last      | Subscription Manager | Reader               | Payments or Subscriptions            | This email notifies a subscriber that their subscription has expired. It provides the journal's URL along with instructions for access.                                                                                                                                                                                                                                            |
| Subscription Before Expiry          | Subscription Manager | Reader               | Payments or Subscriptions            | This email notifies a subscriber that their subscription will soon expire. It provides the journal's URL along with instructions for access.                                                                                                                                                                                                                                       |
| Subscription Notify                 | Subscription Manager | Reader               | Payments or Subscriptions            | This email notifies a registered reader that the Manager has created a subscription for them. It provides the journal's URL along with instructions for access.                                                                                                                                                                                                                    |
| Subscription Purchase Indl          | System               | Subscription Manager | Payments or Subscriptions            | This email notifies the Subscription Manager that an individual subscription has been purchased online. It provides summary information about the subscription and a quick access link to the purchased subscription.                                                                                                                                                              |
| Subscription Purchase Instl         | System               | Subscription Manager | Payments or Subscriptions            | This email notifies the Subscription Manager that an institutional subscription has been purchased online. It provides summary information about the subscription and a quick access link to the purchased subscription.                                                                                                                                                           |
| Subscription Renew Indl             | System               | Subscription Manager | Payments or Subscriptions            | This email notifies the Subscription Manager that an individual subscription has been renewed online. It provides summary information about the subscription and a quick access link to the renewed subscription.                                                                                                                                                                  |
| Subscription Renew Instl            | System               | Subscription Manager | Payments or Subscriptions            | This email notifies the Subscription Manager that an institutional subscription has been renewed online. It provides summary information about the subscription and a quick access link to the renewed subscription.                                                                                                                                                               |
| User Register                       | Principal Contact    | User                 | Registration                         | This email is sent to a newly registered user to welcome them to the system and provide them with a record of their username and password.                                                                                                                                                                                                                                         |
| User Validate                       | Principal Contact    | User                 | Registration                         | This email is sent to a newly registered user to validate their email account.                                                                                                                                                                                                                                                                                                     |

<hr />

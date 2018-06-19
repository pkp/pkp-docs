# Roles in OJS

The OJS workflow revolves around different roles for different users, allowing them access to different parts of the workflow, and different permissions and responsibilities.

Major roles include Site Administrator, Journal Manager, Editor, Section Editor, Author, Reviewer, Copyeditor, Layout Editor, Proofreader, and Reader.

OJS 3 also includes additional roles such as Translator and Designer. You can also create new roles or rename existing ones. More information on configuring roles is available in Chapter 5.

## Site Administrator
The Site Administrator is responsible for the overall OJS installation, ensuring the server settings are accurate, adding language files, and creating any new journals on the installation. The Site Administrator account is created as part of the installation process. Unlike all other OJS roles, there can only be one Site Administrator.

See [Chapter 4: Site Administration](./site_administration.md) for more details.

## Journal Manager
The Journal Manager is responsible for setting up the journal web site, configuring the system options, and managing the user accounts. This does not involve any advanced technical skills, but entails filling out web-based forms and uploading files.

The Journal Manager also enrolls the Editors, Section Editors, Copyeditors, Layout Editors, Proofreaders, Authors, and Reviewers.

The Journal Manager also has access to the journal's other management features, and can create new Sections for the journal, set up Review Forms, edit the default Emails, manage the Reading Tools, view Statistics and Reports, and more.

Many Journal Managers also enroll as Editors, allowing them to easily manage both the journal settings as well as submissions in the editorial workflow.


> **Note**
>
> Although the Journal Manager is a journal-specific role, journal managers should generally be considered system-wide trusted users, as they have the ability to assume the identities of other users who may be enrolled in other journals.
>

See [Chapter 5: Setting up a Journal](./journal_setup.md) for more details.

## Author

Authors are able to submit manuscripts to the journal directly through the journal's website. The Author is asked to upload submission files and to provide metadata or indexing information (the metadata improves the search capacity for research online and for the journal). The Author can upload multiple files, in the form of data sets, research instruments, or source texts that will enrich the item, as well as contribute to more open and robust forms of research and scholarship.

The Author is able to track the submission through the review and editorial process — as well as participate in the copyediting and proofreading of submissions accepted for publication — by logging in to the journal's website.

See [Chapter 9: Authoring](./authoring.md) for more details.

## Editor

The Editor oversees the entire review, editing and publishing process. The Editor, working with the Journal Manager, typically establishes the policies and procedures for the journal.

In the editorial process, the Editor assigns submissions to the Section Editors to see through Submission Review and Submission Editing. The Editor keeps an eye on the submission's progress and assists with any difficulties.

Once review is completed, the Editor typically sees the submission through the Editing process (including copyediting, production, and proofreading) although in some journals this remains the responsibility of the Section Editor in charge of the submission's review process.

The Editor also creates the journal issues, schedules submissions for publication, arranges the Table of Contents, and publishes the issue as part of the Publishing Process. The Editor can restore archived submissions to the active In Review or In Editing lists.

Many Editors also enroll as Journal Managers, allowing them to easily manage both the editorial workflow as well as the journal settings.

See [Chapter 10: Editorial Workflow](./editorial_workflow.md) for more details.

## Section Editor

The Section Editor manages the review and editing of submissions to which they have been assigned. In some cases, a Section Editor who is assigned to see submissions through the Review Process will also be responsible for seeing the submissions that are accepted through the Editing process (that is, through copyediting, production, and proofreading).

Often, however, Section Editors only work with the review process, and an Editor, acting in the role of Section Editor, sees the submissions through the Editing process. The journal will have a policy on how the tasks are divided.

See [Chapter 10: Editorial Workflow](./editorial_workflow.md) for more details.

## Reviewer

The Reviewer is selected by the Editor or Section Editor to review a submission. Reviewers are asked to submit reviews to the journal's website and are able to upload attachments for the use of the Editor and Author. Reviewers may be rated by Section Editors, again depending on the policies for this journal.

See [Chapter 8: Reviewing](./reviewing.md) for more details.

## Copyeditor

The Copyeditor edits submissions to improve grammar and clarity, works with authors to ensure everything is in place, ensures strict adherence to the journal's bibliographic and textual style, and produces a clean, edited copy for a Layout Editor or Production Assistant to turn into the galleys that will be in the published format of the journal.

Some journals have an Editor or Section Editor play this role.

See [Chapter 10: Editorial Workflow](./editorial_workflow.md) for more details.

## Layout Editor

The Layout Editor transforms the copyedited versions of the submission into galleys in HTML, PDF, XML, etc. -- files which the journal has elected to use for online publication.

>Note
>
>OJS does not currently provide software for automatically converting word processed documents to galley formats (although a project is in development), so the Layout Editor should have access to and be able to use third-party software packages for creating galleys.
>

In some cases, the Editor or Section Editor will also serve as Layout Editor.

See [Chapter 10: Editorial Workflow](./editorial_workflow.md) for more details.

## Proofreader

The Proofreader carefully reads over the galleys in the various formats in which the journal publishes (as does the author). The Proofreader (and the Author) record any typographic and formatting errors for the Layout Editor to fix.

In the case of some journals, the Editor or Section Editor will also serve as Proofreader.

See [Chapter 10: Editorial Workflow](./editorial_workflow.md) for more details.

## Reader

The Reader role is the simplest role in OJS, and has the fewest capabilities. Readers receive a notification email with the publication of each issue, which includes the Table of Contents for that particular issue.

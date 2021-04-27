---
book: learning-ojs
version: 3.3
---

# Introduction

Open Journal Systems \(OJS\) is an open source solution to managing and publishing scholarly journals online. OJS is a highly flexible editor-operated journal management and publishing system that can be downloaded for free and installed on a local Web server.

It has been designed to reduce the time and energy devoted to the clerical and managerial tasks associated with editing a journal, while improving the record-keeping and efficiency of editorial processes. It seeks to improve the scholarly and public quality of journal publishing through a number of innovations, including enhancing the reader experience, making journal policies more transparent, and improving indexing.

This guide covers OJS version 3.3, released in February 2021, and features significant enhancements over the previous versions of the software. We hope you find it helpful for your publishing projects.

## Background

*OJS is a journal/web site management/publishing system*. OJS covers all aspects of online journal publishing, from establishing a journal website to operational tasks such as the author's submission process, peer review, editing, publication, archiving, and indexing of the journal. OJS also helps to manage the people aspects of organizing a journal, including keeping track of the work of editors, reviewers, and authors, notifying readers, and assisting with the correspondence.

*OJS is flexible and scalable*. A single installation of OJS can support the operation of one or many journals. Each journal has its own unique URL as well as its own look and feel. OJS can enable a single editor to manage all aspects of a journal and the journal's website, or OJS will support an international team of editors with diverse responsibilities for a journal's multiple sections.

*OJS supports the principle of extending access*. This system is intended not only to assist with journal publishing, but to demonstrate how the costs of journal publishing can be reduced to the point where providing readers with "open access" to the contents of the journal becomes a viable option. The case for open access is spelled out over a wide series of articles stemming from this project which are freely available under Research > Publications on the [Public Knowledge Project](https://pkp.sfu.ca/) website.

*The origins of OJS*. The system was first released in 2001 as a research and development initiative at the University of British Columbia, with the support of the Social Sciences and Humanities Research Council of Canada, the Max Bell Foundation, the Pacific Press Endowment, and the MacArthur Foundation. Its continuing development is currently overseen by the Simon Fraser University Library. For more information, see the [Public Knowledge Project website](https://pkp.sfu.ca).

<hr />

## OJS Features

OJS includes the following features:

1. OJS is installed locally and controlled locally
2. Editors configure requirements, sections, review process, etc.
3. Online submission, anonymous review, and management of all content
4. Comprehensive indexing of content
5. Responsive, themable reader interface
6. Email notification for readers
7. Support for article-processing charges, subscriptions, and online payments
8. Complete context-sensitive online Help support
9. Multilingual support

## What's New in This Version of OJS

OJS 3.3 has a simplified dashboard navigation menu and new features related to submission management, communicating with users, and accessibility. This section will outline the main changes so you know what to expect when you upgrade to OJS 3.3. You can also watch [a video that demonstrates new features in OJS 3.3](https://youtu.be/3D_hS4Bd-Y8), created by [PKP Publishing Services](https://pkpservices.sfu.ca).

Many of these changes are applicable also to Open Monograph Press (OMP) and Open Preprint Systems (OPS).

If you are upgrading from OJS 2 and want to see an overview of changes in OJS 3.X, see [What’s New In OJS 3 in a previous version of this guide](https://docs.pkp.sfu.ca/learning-ojs/3.1/en/introduction#whats-new-in-ojs-3) and PKP’s guide to [Upgrading from OJS 2 to OJS 3](https://docs.pkp.sfu.ca/upgrading-ojs-2-to-3/). Please note that you will need to first upgrade from OJS 2 to OJS 3.2, and from there upgrade to OJS 3.3.

For a summary of changes in OJS 3.3 that are relevant to developers and development, please see the [Release Notebook for OJS OJS/OMP/OPS v3.3](https://docs.pkp.sfu.ca/dev/release-notebooks/en/3.3-release-notebook)

### Dashboard Interface and Navigation Menus

There are some changes to the dashboard interface and navigation menus for logged in users in OJS 3.3.

Journal Managers, Editors, Reviewers, Authors, and others who log in may notice a change in the main navigation menu on the left side. In 3.3, only users in roles who have access to the Settings menus (Journal Managers and Editors) will see the left-hand navigation menu. There are also additional menu links for Issues, Announcements, and Payments, and some of the menu links have moved.

![The dashboard that Journal Managers see when logged in](./assets/learning-ojs-3.3-navigation-menu-dashboard-jm.png)

Users in other roles will not see the menu because they can only access the Submissions part of the menu.

![The dashboard that Authors see when logged in](./assets/learning-ojs-3.3-navigation-menu-dashboard-author.png)

A user can now access their user profile and select a language on multilingual journals by clicking the person icon on the top right corner.

![The menu where users can edit their profile and select a language](./assets/learning-ojs-3.3-navigation-menu-dashboard-user-menu.png)

The link from the dashboard to the public journal site home page has moved. A Journal Manager or Editor can now view the public journal site by clicking the name of the journal that appears on the top left corner of the page. For multi-journal installations, you can click the site map symbol on the top left corner of the page and then a list of journals in the installation will appear below and you can select the site you want to view.

![The link to view the public journal site](./assets/learning-ojs-3.3-navigation-menu-dashboard-view-journal.png)

### Editorial Workflow

#### Uploading submission files

During submission, Authors can upload multiple files at once as well as drag-and-drop files. They are no longer asked to enter metadata such as a description, license, etc. This information can be entered during the workflow, where the old file upload wizard is still in use. You can find further instructions in the [Authoring chapter](./authoring#step-2).

![A short video that demonstrates how files can be uploaded in OJS 3.3](./assets/learning-ojs3.3-upload-submission-files.gif)

#### Submission filters

All Active and Archived submissions can now be filtered by assigned issue and assigned Editor. Only Journal Managers can filter by assigned Editor. You can find further instructions in the [Editorial Workflow chapter](./editorial-workflow#submission-dashboard).

#### Reverse a declined decision

A new editorial action allows Editors to reverse a declined decision in the submission and review stages. After a declined decision is reverted, the submission is restored to its previous stage and review round if active. You can find further instructions in the [Editorial Workflow chapter](./editorial-workflow#assigning-the-submission).

#### Delete only declined submissions

Only declined submissions can be deleted from the submissions list. You can find further instructions in the [Editorial Workflow chapter](./editorial-workflow#archived).

#### Review type terminology

In previous versions of OJS, the review types were “Double Blind,” “Blind,” and “Open.” In OJS 3.3 these have been changed to “Anonymous Reviewer/Anonymous Author,” “Anonymous Reviewer/Disclosed Author,” and “Open.”

#### Category displayed on article page

An article’s assigned categories now appear on the article landing page. You can find further instructions in the [Journal Settings chapter](./journal-setup#categories).

#### Disable submissions

Journal Managers and Editors can configure the Workflow Settings to disable all submissions for a journal. This can be used by journals that are no longer accepting new content. You can find further instructions in the [Journal Settings chapter](./journal-setup#sections).

### User Management and Communication

#### Export users

There is now an export tool available under Tools > Import/Export that can be used to export users to a CSV file. This can be used to import users into third-party mailing services. You can find further instructions in the [Users and Roles chapter](./users-and-roles#email-users).

#### Notify users

OJS 3.3 has a much-requested feature to notify, or send a message, to all users in a role. See the [Users and Roles chapter](./users-and-roles#email-users) for more details.

#### Filter email templates by workflow stage

When managing and editing email templates under Workflow Settings > Email, Journal Managers and Editors can filter the email templates by workflow stage. You can find further instructions in the [Workflow Settings chapter](./settings-workflow#filters).

### Accessibility

In 2019 OJS was audited for accessibility to people with disabilities and use assistive technology. All of the changes that were recommended by the audit have been implemented in OJS 3.3, including an accessible Default Theme and custom blocks now requiring a title. More information about custom blocks is in the [Website Settings chapter](./settings-website#custom-block-plugin).

### For Multilingual Journals

OJS 3.3 has a number of new features that improve usage for journals working and/or publishing in multiple languages.

#### Date and time formats

Date and time formats can now be specified for each journal and locale/language. Further instructions are in the [Website Settings chapter](./settings-website#date-and-time).

#### Right-to-left languages

There is better support for languages that read right-to-left, such as Arabic, Farsi, and Hebrew, in the rich text editor that appears in many form fields in OJS.

#### Remote URLs
Navigation menu items with remote URLs can now have different remote URLs for each language.

## Community Contributions

The OJS team encourages contributions from the developer community. If you are interested in getting involved in making OJS even better, we welcome your participation.

Excellent examples of community contributions include the vast array of languages that OJS is available in; and third-party plugins posted to the [community forum](https://forum.pkp.sfu.ca/) and the archived forum page.

We also welcome software testing and bug reporting contributions.

## Support

PKP offers the following free support resources for OJS:

* [PKP Docs Hub](https://docs.pkp.sfu.ca/): User guides, developer documentation and publishing tips for all of our software. Also includes links to community developed videos.
* [PKP Community Forum](https://forum.pkp.sfu.ca/): An online discussion board where you can ask questions, answer questions, and share ideas.
* [PKP School](https://pkpschool.sfu.ca/): A collection of online, open, and self-paced courses designed by PKP experts in English and Spanish. Includes video tutorials on Setting up Your Journal; the Editorial Workflow in OJS 3; and Becoming an Editor.

There is also a “Help” link on the top right corner of every page in OJS, OMP, and OPS where you can find information about the current page and its functions.

For questions about a particular journal site, such as submission requirements, contact that journal directly, using the contact information listed on the journal's **About** page.

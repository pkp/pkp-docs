---
book: learning-ojs
version: 3.5
showPageTOC: true
title: Learning OJS 3.5 for Journal Managers - Get Started - Plan & Enter Basic Journal Details
description: A guide for Journal Managers preparing a journal in OJS for publication.
---

# Get Started: Plan & Enter Basic Journal Details
In this first chapter, you will ensure that you have everything you need ready to fully set up your journal in OJS before learning how to configure the basic information of your journal, such as the name, abbreviation, contact information, and masthead (editorial board information).

## What You’ll Need to Start {#start-checklist}
This guide assumes that you have already installed OJS and that your [Site Administrator](../../site-admin/en/) has finished the basic setup.

It also assumes that you’ve decided on the key details of your journal — such as who it’s for, what it publishes, and how it handles licensing. If you’re still working on those decisions, we recommend reading the [Short Guide to Starting a Journal](https://docs.pkp.sfu.ca/starting-a-journal/).

Before you begin, make sure you have the following information ready:

- The journal’s name and contact information  
- A description of the journal’s purpose, scope, and audience  
- A list of editorial board members  
- Submission guidelines and policies for authors  
- Peer review policies and guidelines  
- Your financial model (open access, hybrid, or subscription-based)  
- Copyright and licensing policies  
- An ISSN (or plan to get one after your first issue)  
- (Optional) DOI registration details, such as your prefix and agency (or plan to get these later)

This guide will show you how to set up your journal in OJS using the settings that match your policies and goals.


## Get to Know the Journal Manager User Interface {#ui-walkthrough}

The best way to understand how OJS works is to understand it as two parts: the Front End (the site that readers see, where your published content lives) and the Back End (your dashboard and workspace, the area where you manage the journal).

### The Front End (What Readers See)
The Reader-facing Front End area of your journal is visible to readers, authors, and visitors who are not logged in. This includes your journal homepage, navigation, article landing pages, and more.

![A journal front end showing the journals homepage for a site visitor](./assets/frontend-interface-3.5.png)

The information and pages displayed here depend on the content you create and settings you make in the Back End as a Journal Manager.

### The Back End (Dashboard and Management)
The Back End is the area of the journal that you can only access after logging in. As a Journal Manager, your backend will have more functions than other roles in the journal. This includes the Settings menu, which you will use to set up your journal.

![Journal Manager view of the backend with the submissions and  navigation menus](./assets/backend-interface-3.5.png)

OJS will automatically create and display Front End pages and content depending on what is done in the Back End. For example, if you fill out the “About the Journal” section in the backend, that information will appear on the public “About” page.

![Side by side comparison of the Frontend About the journal and Backend Journal Settings Page displaying the same content](./assets/sidebyside-3.5.png)

When you update something in the Back End—like the journal’s title or theme, the creation of a new journal issue—it automatically updates on the Front End. 

As you move through the many Back End configuration steps in this guide, it can be helpful to check the Front End frequently to ensure you understand the impact your changes make. 

## Enter Basic Journal Information {#basic-info}
Journal Managers can enter basic information about their journal by selecting “Journal” under the Settings menu in the sidebar in the Back End.

![OJS dashboard View for Journal Managers with links to Settings menu and its submenus in left-hand sidebar.](./assets/jm-settings-journal-3.5.png)

Use the tabs to navigate to the different sections of Journal Settings: Masthead, Contact, Sections.

![OJS dashboard view of Journal Settings with navigation tabs for the Settings submenus across top portion of page content.](./assets/jm-settings-submenus-3.5.png)

### Configure the Masthead {#masthead-1}
The first tab you’ll see after clicking “Journal” under the Setting menu is "Masthead". The Masthead tab is where you’ll enter the journal’s title, publisher details, ISSN, and other key information.

The first section, **Journal Identity**, is where you'll enter your preferred formats for your journal's name.

* **Journal title**: Enter the name of your journal, e.g. Journal of Software Documentation
* **Journal initials**: Enter the initials of the journal, e.g. JSD.
* **Journal Abbreviation**: Enter an optional preferred abbreviation of your journal name, e.g. JSoftDoc.

In the next section, **Publishing Details**, you'll enter additional details about your journal and its publisher.

* **Country**: Select the country where this journal is located, or the country of the mailing address for the journal or publisher.
* **Publisher**: Enter the name of the organization publishing the journal.
* **URL**: Optionally enter the URL for the site of the publishing organization.
* **Online ISSN**: Enter your journal's online ISSN.
* **Print ISSN**: Optionally, enter your journal's print ISSN.

An ISSN (International Standard Serial Number) is an eight-digit number which identifies journals. It is managed by a worldwide network of National Centres coordinated by an International Centre based in Paris, backed by Unesco and the French Government. A number can be obtained from the [ISSN website](https://www.issn.org/). This can be done at any point in operating the journal.

> Note that the details entered here will be used by indexing and discovery services, but will not be displayed on your site. To show de tails such as the publisher name or ISSN on your site, you can enter it in "About the Journal" as described below. To display these details on every page, we recommend adding them to your site's footer. You can do this under [Website Settings > Appearance > Footer](./appearance.md#logo-sidebar).
{:.tip}


### Choose Editorial Board Display {#masthead}

Lastly, you'll choose how OJS should display your editorial board.
OJS 3.5 offers two different ways of tracking and displaying Editorial Board members.

**Option 1**: Manually enter and format Editorial Board members in a free text field. (Recommended for journals with significant editorial history prior to using OJS 3.5.)
**Option 2**: Use the Roles system to automatically track user roles and generate an Editorial Masthead page. 

If you are an **existing journal upgrading from a previous version of OJS, Option 1 will be selected by default**. 
If your journal has been **newly created in OJS 3.5, Option 2 will be selected by default**. You can change this at any time.

To view your current selection or change your selection, go to Website > Settings > Appearance.

![The “Enrollment-based Masthead” toggle in Website > Settings > Appearance. “Present a masthead based on user enrollments” is checked off, enabling the automatic Editorial Board page.](./assets/masthead-toggle-3.5.png)

If “Present a masthead based on user enrollments” is **not checked**, you will need to manually enter your Editorial Board information in the masthead section. You can do this from Settings > Journal > Masthead.

![The editorial masthead field found in Settings > Journal > Masthead.](./assets/editorial-manual-3.5.png)

If “Present a masthead based on user enrollments” is checked, the Editorial Masthead will be automatically generated as in Option 2. Details on how to edit roles, determine which roles are displayed in the masthead, and more will be covered in the [Manage Users and Roles](./users) chapter of this guide. 

To learn more about how to use the automatically generated Masthead, you can watch the PKP School Editorial Masthead video tutorial.
{% include video.html id="QcAIpZ-GVMQ" provider="youtube" title="PKP School Video of Editorial Masthead"%}



### Add Contact Information {#contact-info}
After clicking “Journal” under the Setting menu, you can navigate to the Contact tab to enter basic journal contact information.

This PKP School video explains how to add journal contact information in OJS. To watch other videos in this series, visit [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).
{% include video.html id="HTDZRG7XEqw" provider="youtube" title="Video of how to add journal contacts in OJS"%}

Use this section to add relevant contacts for users who have questions about your journal.

![OJS dashboard view of Journal Settings submenu Contact where information can be added in text fields.](./assets/jm-settings-journal-contact-3.5.png)

**Principal Contact**: Add contact information for the journal's main contact person, including name, email, phone, affiliation, and mailing address for the journal. This will appear on the journal's Contact page.

**Technical Support Contact**: Add contact information for the journal's technical support person. This information will appear on the journal's Contact page and at different points in the submission workflow for users needing assistance.

Hit the **Save** button to save your changes.

Excellent work! Now you’ll move on to configuring settings and entering details related to receiving submissions, peer review, and copyright and licensing.

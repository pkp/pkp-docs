---
generateHeadingToc: true
---

# Guidelines for PKP Documentation

These guidelines are for all contributors to Public Knowledge Project (PKP) documentation, including PKP staff and committee members, users of the software, journal managers, system administrators, and developers. Whether you are just starting to use PKP software or have been using it for many years, you have a unique perspective and valuable information to share with the community.

Documentation is essential to the users of Open Journal Systems (OJS), Open Monograph Press (OMP), Open Conference Systems (OCS), and other software developed by PKP. It is often the first thing that users look at when they’re getting started, trying to troubleshoot a problem, or learning how to use a new feature or version of the software. Creating and updating documentation is a precious contribution to the PKP user community.

First of all, thank you in advance for your contribution! Secondly, contributing can be very easy. These guidelines are essential reading for anyone who would like to contribute to PKP documentation. They outline different types of documentation, ways to contribute, how to find and complete a documentation task, style and formatting, tips and resources, and copyright policies.

## Types of Documentation

Most of PKP’s existing documentation is on the [PKP website](https://pkp.sfu.ca). It consists of the following:

- **Documents or Guides** // Instructions on how to use, administer, or develop PKP software. Hosted in the [PKP Documentation Hub](https://docs.pkp.sfu.ca) and composed with markdown. Example: [Learning OJS 3](https://docs.pkp.sfu.ca/learning-ojs/).
- **README Files** // A file included with each release of PKP software and, ideally, with each plugin. Located in the root folder of their specific software/plugin repository in Github, they contain information about the software version, installation, and basic functions, settings/configuration, and usage. Example: [OJS Keyword Cloud Block Plugin readme file](https://github.com/ali-sokhandan/ojs3-keywordcloud-plugin/blob/master/readme.md)
- **Videos** // Video tutorials on how to use PKP software or participate in scholarly journal publishing. These videos include courses in the [PKP School](https://pkpschool.sfu.ca/). Example: [Setting up a Journal in OJS 3](http://pkpschool.sfu.ca/courses/setting-up-a-journal-in-ojs-3/)
<!-- - FAQS // These are frequently-asked questions about PKP software that could be part of an individual guide or standalone documents. Example: [PKP FAQ](https://pkp.sfu.ca/wiki/index.php?title=PKP_Frequently_Asked_Questions) -->
- **Web pages** // The PKP website has information about PKP platforms or the organization that does not consist of usage instructions but is still instructive/supportive. PKP Staff maintains these pages. Example: [Editorial Resources](https://pkp.sfu.ca/editorial-resources/)

## Principles for PKP Documentation

1. **Avoid duplication** // If instructions already exist somewhere else that you want to include in a document, provide links instead of duplicating or reproducing the text. Linking to existing docs reduces duplication of effort when updating content. For example, if I want to write documentation for configuring a plugin, I would write it in the README file for the GitHub repository for that plugin. That way, all docs that reference that plugin can provide a link to the same information.
2. **Quality over quantity** // Focus on creating larger comprehensive documents, so there are fewer individual documents to maintain and translate.
3. **Open Source** // Try to use open source tools to create and maintain documentation.
4. **Location, location, location** //  PKP aims to host all PKP-software-related documentation in its repository and provide a single access point to it.
5. **Keep it simple** // Although the information you are writing about may be technical, try to write in simple, straightforward language. The PKP user community includes a variety of different people from different backgrounds and whose first language may not be the same as yours. Other rules of thumb include:
	- Keep in mind what group of users the documentation is for, what background and technical knowledge they may have, and what kind of information they need. User groups could include developers, system administrators, journal managers, editors, authors, and readers.
	- Within any user group, write for the person with the most basic knowledge and experience.
	- Explain and define acronyms and technical concepts.
	- Break things down into simple steps and use numbered or bulleted lists whenever possible.
	- Include screenshots to demonstrate, visually, how to use the software.
	- Give examples to help users understand concepts.
	- Try to anticipate problems and issues that the user might have. Explain how to overcome them.
6. **Pronouns** // When using pronouns to refer to a generic user, use gender-neutral pronouns such as “they,” “their,” and “them.” Use “they” instead of “he” or “she.”  Use “their” instead of “his” or “her.” Use “them” instead of “her” or “him.” Use “themselves” instead of “himself” or “herself.”

You can learn more about writing good docs with this [Documentation Guide by WritetheDocs](http://www.writethedocs.org/guide/).

## Versioning and Updates

Most documentation is updated continually by contributors as needed. In the event of a major software release that might make older docs irrelevant (e.g., OJS 3.1 -> OJS 3.2) PKP strives to update the materials before or as-close-to release as possible.

When making changes related to minor software releases (e.g., OJS 3.1.1 -> 3.1.2), it is generally best to explain differences between versions explicitly in the document. For example:

>“In OJS releases 3.0 to 3.1.0, you cannot assign a user to review a submission if they are also an editor of the submission. However, starting with OJS 3.1.1, you can assign a user to review a submission if they are also an editor of the submission.”

Older versions of the documentation are accessible – via GitHub branches – for major-version documents in the Documentation Hub.

## Getting Involved

Documentation at PKP is created and maintained by everyone within the organization as well as interested members of the user and developer community. It’s coordinated by the [Documentation Interest Group](https://github.com/pkp/documentation-interest-group/) (DIG), which is made up of representatives from PKP and the broader user community who contribute to the documentation.

Members of the DIG and other folks who work on PKP documentation are available to respond to questions and provide advice, assistance, and collaboration. We communicate using the following tools:

- Documentation Slack channel - https://pkpdoc.slack.com
- Documentation Interest Group email list - pkp-documentation@sfu.ca
- Weekly virtual sprints to collaborate on documentation - Thursdays from approximately 11 am to 1 pm EST

To be added to any of these communication channels or if you have questions about PKP documentation or want to get involved, send an email to [documentation@publicknowledgeproject.org](mailto:documentation@publicknowledgeproject.org).

### Ways to Contribute to PKP Documentation

There many ways to contribute to PKP software documentation whether you want to write, edit, or update any piece – big or small – of a specific document.

1. **Updating existing documentation** // Most PKP software is consistently under development. Documentation requires the same.  Depending on how much the software has changed since the last revision, updating documentation can involve making a few minor changes or significant rewriting. A list of documents flagged for an update is on the PKP Documentation Tasks spreadsheet, explained below. If you are new to writing documentation, updating docs is often a good place to start.
2. **Transforming support forum topics into documentation** // One way that PKP provides support to users, in addition to documentation, is by hosting a [support forum] (https://forum.pkp.sfu.ca/).  Users post questions about the software on the forum and members of the PKP staff and community answer the questions. The support forum is a rich resource for unique, advanced information for customizations and troubleshooting the software which may be missing from the standard documentation, especially regarding new features. It can be difficult, however, to find relevant information on the forum. You can contribute to PKP documentation by noting questions on the forum that are not answered in documentation (especially common questions) and transferring the answers to existing documentation or sometimes creating new documentation.
3. **Contributing new documentation** // This can include a whole document on how to use a plugin or software tool, or it could just be writing a chapter or section in a larger document, but it means creating original documentation. To do this, you should have a solid understanding of the tool or feature for which you are writing instructions. We have a list of desired documentation, or you may wish to contribute your own. Instructions on how to access the list and format guidelines are available below.
4. **Reviewing** // When PKP documentation has been created or updated, it goes through a review process, in which someone reads it and offers critical feedback on accuracy, clarity, and completeness. If you enjoy proofreading or editing or are new to documentation, this could be the right task for you. The PKP Documentation Tasks spreadsheet (explained below) has labels for which docs need review.
5. **Translating** // PKP software users live all over the world and speak many different languages. PKP software has been translated into [over 35 languages](https://pkp.sfu.ca/developers/translation/). Most PKP software documentation is written in English initially and needs translation into other languages. If you are a fluent reader of English and fluent writer of another language, translating documentation into the other language is a valuable contribution to the documentation project. <!-- note here on how translations are managed -->
6. **Making an instructional video or screencast** // PKP has a set of videos called [PKP School](http://pkpschool.sfu.ca/) on how to use OJS and contribute to OJS journals, and we are building a collection of other videos about PKP software. If you’re interested in making video tutorials on using PKP software, you can volunteer to help make PKP School videos, or you can make your own video on how to carry out a task or set of tasks in one of the PKP software tools. To assist with PKP School videos, contact Kevin Stranack at kstranac@sfu.ca. Guidelines for making videos are below.
7. **Sharing your local documentation with the PKP user community** // Have you made a document about PKP software that is specific to your local institution, journal, conference, or press?  It may be useful to the broader PKP user community if it provides information and instructions not available elsewhere or if other users are looking for examples of institutional or journal-specific documentation.  We are building a collection of external documentation. To add to it, please contact [documentation@publicknowledgeproject.org](mailto:documentation@publicknowledgeproject.org).
8. **Identifying documentation that is missing or needs improvement** // If you notice something that there should be documentation for or existing documentation that should be more clear or detailed, we want to know. You can send your suggestion to documentation@publicknowledgeproject.org, file an issue in the [Github PKP Docs repository](https://github.com/pkp/pkp-docs), or add the task to the [Documentation Tasks spreadsheet](https://docs.google.com/spreadsheets/d/1bo0etXPjDxC_xdmOGCdwAtdXv85ojdqRdNr3sfMD2aU) if you have access to it. To file an issue in the repository, you first have to create a Github account and sign in.  

Members of the Documentation Interest Group review suggestions regularly and add them to lists of potential tasks. Please provide as much detail as possible in your suggestion.

### Finding a Documentation Task to Do

PKP keeps track of documentation that needs to be created, updated, and reviewed on a [shared spreadsheet](https://docs.google.com/spreadsheets/d/1bo0etXPjDxC_xdmOGCdwAtdXv85ojdqRdNr3sfMD2aU/). If you are looking for a documentation task to do, the spreadsheet is an excellent place to start. You can also add new tasks.  

Anyone with the link can view the spreadsheet but to edit it you must be added as a collaborator. Please email documentation@publicknowledgeproject.org to ask to be added or to ask to sign up for a task.

#### About the Spreadsheet

Roles determine the order of tasks on the spreadsheet. Look for tasks that match your role or background with PKP software.  The roles are as follows:
- Administrators: Administrators are responsible for PKP software installation and upgrades, ensuring the server settings are accurate, adding language files, and creating any new journals on the installation. Administrators have an understanding of and may modify system files and settings, but are not responsible for programming new features or developing the software.
- Developers: Developers participate in the development of PKP software applications and plugins. They write and modify the code and evaluate and implement new features.
- Application Users: Application Users represent end users of PKP software in a variety of different roles, including Journal Manager, Press Manager, Conference Manager, Editor, Reviewer, Author, Copyeditor, and Subscription Manager. They configure settings in the software applications but do not modify system files.
- Other: Documentation tasks that are not specific to one of the above roles are added to this sheet.

Each worksheet has the following columns:

- Topic: A brief description of the topic and content of the documentation. To see or add more descriptive information, check the Description and Notes column on the far right. If more description or information is needed on the topic or content, ask the DIG.  
- Action Needed: A drop-down list noting whether the documentation needs to be created from scratch, updated, reviewed, maintained, or moved.   
- Status: This drop-down list notes whether the documentation is not started, in progress, or complete. If you sign up to work on the documentation, please change the status as applicable.
- Type: Whether the documentation is a document, part of a document, an FAQ, a webpage, or other. See the section above “Different Kinds of PKP Documentation” for definitions.
- Add to/Part of: If the documentation is part of an existing document, it will be noted here. If not, this will be blank or say “NA.”
- Old URL: If the document needs to be updated, the URL for the existing document will be here
- Working URL: If you are working on the documentation in a temporary location, such as a Google Doc, you can enter the URL here.
- New URL: Enter the new URL for the document here once it has been created. If it is part of a larger document, the URL for the larger document can be noted here.
- Name of Person Responsible: If someone is already working on this documentation, their name will be here. If you want to work on this documentation, enter your name here. Individual contact information for people who contribute to documentation is on the Contacts worksheet.
- Date Started: When work on the documentation has been started, the date can be entered here. This helps us keep track of progress and stick to a timeline.
- Target Completion Date: A deadline for completion of the documentation, which can be chosen and entered by the person working on the documentation.
- Description and Notes: Any further description of the topic or supplementary notes about the documentation can be added here, including further details about the content, questions that need to be answered, or history of the documentation. Feel free to enter notes for any documentation you are working on or adding to the spreadsheet.

There are 4 additional sheets:

- "Obsolete" lists documentation that is no longer current and may have been updated or moved to another location
- "Contacts" provides contact information for people who contribute to the documentation. It is used to contact people about documentation tasks.
- "Major Docs" notes the main contact and personnel responsible for each major document in the PKP documentation collection
- "Sprints" // documentation to work on during upcoming sprints, as well as the sprint document schedule -->

#### Sign up for a task

1. If you are not already active in PKP documentation, contact the Documentation Interest Group to introduce yourself and request access to the spreadsheet.  
2. Select a task based on your role or experience with PKP software, which has not already been claimed. It is also possible to assist with a task that already has a “Person Responsible” - instead of signing up for that task, contact the person and offer your assistance. Contact information is on the Contacts sheet.  
3. Enter your full name in the Person Responsible field for the task and add your name and email address to the Contacts sheet.
4. Ensure that you have all of the resources and information you need to work on the documentation.  If anything is missing, contact the DIG.
5. When you are ready to start your task, change the Status field to In Progress and enter the current date in the Date Started field and a target completion date in the Target Completion Date field.  
6. Update the URL fields as needed to indicate a Working URL or New URL for the document.
7. If you need assistance at any time while working on the documentation task, contact the DIG through its Slack channel or email list or at a weekly sprint.
8. Once your documentation task is complete, submit it to the DIG in an appropriate format, following the instructions below. Once it is reviewed and published, you can change the Status to Complete on the spreadsheet and cross it off using the Strikethrough formatting button.  
9. If you have updated documentation and the original documentation is still available at the old URL, move the entry to the Obsolete worksheet. -->

## Attribution, Copyright, Licensing

All PKP documentation is licensed under a [Creative Commons BY license](http://creativecommons.org/licenses/by/4.0/). Contributors are acknowledged for contributions that they make, but the documents are owned by the Public Knowledge Project and Simon Fraser University Library.  

If you wish to retain ownership of documentation about PKP software that you create and contribute to the PKP project, you can host it in your own repository or on your website, and we can link to it.

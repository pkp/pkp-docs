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

## Get Involved

PKP software documentation is created and maintained by PKP staff, users, and developers. It’s coordinated by the Documentation Interest Group (DIG), which is made up of PKP staff, users, and developers who are especially interested in documentation. All of us are available to answer questions and offer assistance and guidance to other folks who want to contribute to documentation.  

We communicate on a Slack channel and meet twice a month for 2-hour virtual documentation sprints, where we collaborate virtually on documentation.  

If you want to be added to the Slack channel, participate in a sprint, or otherwise get involved with documentation, email [documentation@publicknowledgeproject.org](mailto:documentation@publicknowledgeproject.org).

### Ways to Contribute to PKP Documentation

There many ways to contribute to PKP software documentation whether you want to write, edit, or update any piece – big or small – of a specific document.

1. **Update existing documentation** // Most PKP software is consistently under development. Documentation requires the same. Depending on how much the software has changed since the last revision, updating documentation can involve making a few minor changes or significant rewriting. A list of documents flagged for an update is on the PKP Documentation Tasks spreadsheet, explained below. If you are new to writing documentation, updating docs is often a good place to start.

2. **Transform support forum topics into documentation** // One way that PKP provides support to users, in addition to documentation, is by hosting a [support forum] (https://forum.pkp.sfu.ca/). Users post questions about the software on the forum and members of the PKP staff and community answer the questions. The support forum is a rich resource for unique, advanced information for customizations and troubleshooting the software which may be missing from the standard documentation, especially regarding new features. It can be difficult, however, to find relevant information on the forum. You can contribute to PKP documentation by noting questions on the forum that are not answered in documentation (especially common questions) and transferring the answers to existing documentation or sometimes creating new documentation.

3. **Contribute new documentation** // This can include a whole document on how to use a plugin or software tool, or it could just be writing a chapter or section in a larger document, but it means creating original documentation. To do this, you should have a solid understanding of the tool or feature for which you are writing instructions. We have a list of desired documentation, or you may wish to contribute your own. Instructions on how to access the list and format guidelines are available below.

4. **Review and edit** // When PKP documentation has been created or updated, it goes through a review process, in which someone reads it and offers critical feedback on accuracy, clarity, and completeness. If you enjoy proofreading or editing or are new to documentation, this could be the right task for you. The PKP Documentation Tasks spreadsheet (explained below) has labels for which docs need review.

5. **Translate** // PKP software users live all over the world and speak many different languages. PKP software has been translated into [over 35 languages](https://pkp.sfu.ca/developers/translation/). Most PKP software documentation is written in English initially and needs translation into other languages. If you are a fluent reader of English and fluent writer of another language, translating documentation into the other language is a valuable contribution to the documentation project. <!-- note here on how translations are managed -->

6. **Make an instructional video or screencast** // PKP has a set of videos called [PKP School](http://pkpschool.sfu.ca/) on how to use OJS and contribute to OJS journals, and we are building a collection of other videos about PKP software. If you’re interested in making video tutorials on using PKP software, you can volunteer to help make PKP School videos, or you can make your own video on how to carry out a task or set of tasks in one of the PKP software tools. To assist with PKP School videos, contact Kevin Stranack at kstranac@sfu.ca. Guidelines for making videos are below.

7. **Share your local documentation with the PKP user community** // Have you made a document about PKP software that is specific to your local institution, journal, conference, or press? It may be useful to the broader PKP user community if it provides information and instructions not available elsewhere or if other users are looking for examples of institutional or journal-specific documentation.  We are building a collection of external documentation. To add to it, please contact [documentation@publicknowledgeproject.org](mailto:documentation@publicknowledgeproject.org).

8. **Identify documentation that is missing or needs improvement** // If you notice something that there should be documentation for or existing documentation that needs to be corrected, updated, or explained more clearly, we want to know. You can send your suggestion to [documentation@publicknowledgeproject.org](mailto:documentation@publicknowledgeproject.org) or file an issue in the [Github PKP Docs repository](https://github.com/pkp/pkp-docs). To file an issue in the repository, you first have to create a Github account and sign in. 

Members of the Documentation Interest Group review suggestions regularly and add them to lists of potential tasks. Please provide as much detail as possible in your suggestion.

### Find a Documentation Task to Do

PKP keeps track of documentation that needs to be created, updated, and reviewed on a [shared spreadsheet](https://docs.google.com/spreadsheets/d/1bo0etXPjDxC_xdmOGCdwAtdXv85ojdqRdNr3sfMD2aU/) that's maintained by the DIG. If you're looking for a documentation task to do, the spreadsheet is an excellent place to start. You can also add new tasks.  

Tasks are categorized by role and listed on different worksheets according to role. You can look for tasks that match your role or background with PKP software. The roles are as follows:

- Administrators: Administrators are responsible for PKP software installation and upgrades, ensuring the server settings are accurate, adding language files, and creating any new journals on the installation. Administrators have an understanding of and may modify system files and settings, but are not responsible for programming new features or developing the software.
- Developers: Developers participate in the development of PKP software applications and plugins. They write and modify the code and evaluate and implement new features.
- Application Users: Application Users represent end users of PKP software in a variety of different roles, including Journal Manager, Press Manager, Conference Manager, Editor, Reviewer, Author, Copyeditor, and Subscription Manager. They configure settings in the software applications but do not modify system files.
- Other: Documentation tasks that are not specific to one of the above roles are added to this sheet.

For each task you can see the following information:

- Topic, Description, and Notes explain the content of the documentation that needs to be created or updated. Read these to see what you should include and any relevant background information.
- Action Needed indicates whether the documentation needs to be created from scratch, updated, reviewed, maintained, or moved 
- Status notes whether the documentation is not started, in progress, or complete. Look for a task that is not started yet or one that is in progress that you want to assist with.
- If the documentation needs to be added to an existing document or an existing document needs to be edited, the document name will be included in the Add to/Part of column and the URL for the document will be included in the New URL column.

### Sign up for a task

1. Select a task based on your role, interests, and experience with PKP software.  
2. Email the DIG at documentation@publicknowledgeproject.org to tell them what task you want to do. The DIG will update the spreadsheet with the information you send. This will ensure that 2 people don’t work on the same task and that you get all the information and resources you need for the task. Include the following information in your message:
	- A description of the task you’re going to do
	- Your name and contact information 
	- The date you plan to finish the task
	- Any questions you have about the task or process 
3. If you have questions or need help while you’re working on your task, you can email documentation@publicknowledgeproject.org, post on the PKP Documentation Slack channel, or attend a virtual documentation sprint.
4. Once your documentation task is complete, submit it to the DIG in an appropriate format, following the instructions in [Contributing Documentation](/contributing). If the deadline passes the DIG may contact you to ask how the task is going. 

## Documentation Tips and Style Guide

- Avoid duplication. If instructions already exist somewhere else that you want to include in a document, provide links instead of duplicating or reproducing the text. Linking to existing docs reduces duplication of effort when updating content. For example, if I want to write documentation for configuring a plugin, I would write it in the README file for the GitHub repository for that plugin. That way, all docs that reference that plugin can provide a link to the same information.
- Although the information you are writing about may be technical, try to write in simple, straightforward language. The PKP user community includes a variety of different people from different backgrounds and whose first language may not be the same as yours.
- Keep in mind what group of users the documentation is for, what background and technical knowledge they may have, and what kind of information they need. User groups could include developers, system administrators, journal managers, editors, authors, and readers. Within any user group, write for the person with the most basic knowledge and experience.
- Explain and define acronyms and technical concepts.
- Break things down into simple steps and use numbered or bulleted lists whenever possible.
- Include screenshots to demonstrate, visually, how to use the software.
- Give examples to help users understand concepts.
- Try to anticipate problems and issues that the user might have. Explain how to overcome them.
- When using pronouns to refer to a generic user, use gender-neutral pronouns such as “they,” “their,” and “them.” Use “they” instead of “he” or “she.” Use “their” instead of “his” or “her.” Use “them” instead of “her” or “him.” Use “themselves” instead of “himself” or “herself.”

You can learn more about writing good docs with this [Documentation Guide by WritetheDocs](http://www.writethedocs.org/guide/).

## Tips for making video documentation

- Consider what you want the video to look like, how long it will be, and what your objective or purpose is. Create an outline and script, and practice before recording. 
- Keep it short and focused, ideally 5 minutes or 10 minutes at the maximum. If you want to cover content that goes beyond that length, break the content into a few short videos.
- Ensure good audio quality by using a microphone and recording in a quiet location with no background noise or echo. 
- Close all other tabs and applications and only record the window or part of your screen that is necessary to the demonstration.
- Record with standard screen dimensions (e.g. 480p, 720p)
- Test the recording software and settings before recording.
- Use narration with short sentences and simple words. Speak slowly with pauses between sentences. Remember that your viewers may not be fluent in the language you are speaking. 
- Tell your audience what they are going to learn before you start. This will help them know what to expect and listen for. Follow with logical steps and only offer information that is essential for completing the task. Take time to explain concepts and steps, even when they seem obvious to you.
- End the video with a summary of your key points and offer further resources in case your viewer wants to learn more. Make sure to mention PKP.
- While you’re making the video, minimize mouse movement, as this can distract the viewer. Try using keyboard shortcuts when possible. 
- If you make a mistake, just pause and continue. You can cut out the mistake later during editing.
- After recording, use annotation tools in your screencasting program to add captions, arrows, animation, or highlighting. This can help direct your viewer’s eyes, highlight important things, or further explain things.
- Give the video a clear, accurate title and an informative description
- Include an accurate transcript, such as an .srt file. Youtube automates this, but it does require some manual improvement. This will allow translators to more easily make subtitles in other languages.

## Versioning and Updates

Most documentation is updated continually by contributors as needed. In the event of a major software release that might make older docs irrelevant (e.g., OJS 3.1 -> OJS 3.2) PKP strives to update the materials before or as-close-to release as possible.

When making changes related to minor software releases (e.g., OJS 3.1.1 -> 3.1.2), it is generally best to explain differences between versions explicitly in the document. For example:

>“In OJS releases 3.0 to 3.1.0, you cannot assign a user to review a submission if they are also an editor of the submission. However, starting with OJS 3.1.1, you can assign a user to review a submission if they are also an editor of the submission.”

Older versions of the documentation are accessible – via GitHub branches – for major-version documents in the Documentation Hub.

## Attribution, Copyright, Licensing

All PKP documentation is licensed under a [Creative Commons BY license](http://creativecommons.org/licenses/by/4.0/). Contributors are acknowledged for contributions that they make, but the documents are owned by the Public Knowledge Project and Simon Fraser University Library.  

If you wish to retain ownership of documentation about PKP software that you create and contribute to the PKP project, you can host it in your own repository or on your website, and we can link to it.

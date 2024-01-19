---
title: Using QuickSubmit for Back Issues (OJS 3.x)
description: A guide on how to upload back issues in OJS using the QuickSubmit plugin with the original publication dates.
---

# Introduction
The QuickSubmit plugin is a tool for OJS that can be used to add content directly into issues without going through the individual steps of the editorial workflow (peer review, copyediting, production, etc.) This is useful for uploading previously published issues (back issues) into OJS for journals and publications that are migrating to the platform. 

This guide provides instructions on uploading “back issue” content with the original publication dates using the QuickSubmit plugin available in OJS, as well as instructions for  

If your content has been previously published with special cases such as with a DOI, published under a different prefix, or published with no contributor, please review the relevant section before beginning the steps outlined below.

# Step One: Create and Publish an Issue

Firstly, you will want to create and publish an issue in OJS for each back issue. These steps are the same as creating and publishing an issue for new content, which you can review in the [Create Issues section of the Learning OJS Guide](https://docs.pkp.sfu.ca/learning-ojs/3.3/en/production-publication#create-issue). Repeat this process for all previously published volumes/numbers as you are planning to upload to OJS. Even if the issues are empty, publishing the issue is what will allow you to adjust the publication date in the next step.

# Step Two: Edit Publication Date for Back Issues

Typically, OJS sets the publication date as the date when the "Publish Issue" button was pressed. For back issues, you will likely want to edit this publication date to properly reflect the date when the issue was originally published. 

1, Click on the "Back Issues" tab to locate the issue(s) you've just created to contain the articles you will upload for your back issue(s).
2. Click the arrow next to the issue to expand the menu.
3. Click "Edit".
4. Change the publication date at the very top to the original publication date of the issue. The publication date is only available after the issue has been published.
5. Click "Save". You can now unpublish and republish the issue at any time if needed without affecting the newly entered publication date.

# Step Three: Add Articles Using QuickSubmit
You may now use the QuickSubmit plugin to add articles to the back issues you've created with the original publication date. Please reference our [detailed instructions for the QuickSubmit plugin in Learning OJS](https://docs.pkp.sfu.ca/learning-ojs/en/tools#quick-submit-plugin) as needed (a video tutorial is also available at the link).

If you are uploading articles with existing DOIs or articles without contributors, without contributor emails, or without abstracts, further instructions are provided below.

## Uploading Back Issue Articles with existing DOIs

If the back issue content was previously published with a DOI, you should reassign the same DOI rather than assigning the same content a new DOI. The QuickSubmit form does not allow you to enter any DOIs. To re-use existing DOIs, you will need to manually enter them for each article. Complete the QuickSubmit submission as outlined in the previous section, then follow these steps:


## Uploading Back Issue Articles with no Contributors

>  **Articles without at least one contributor author will cause validation errors if you intend to distribute the metadata further** (e.g. to register a DOI or get the article indexed in most databases). For example, the Crossref plugin expects at least one contributor surname. Blank contributors may also cause deposit problems for the PKP Preservation Network.
{:.warning}

## Uploading Back Issue articles without Contributor Emails

OJS and QuickSubmit generally require an email to be associated with each contributor. If you will be uploading articles where a Contributor does not have an email address (or articles published from a time before email addresses), you can install and enable the “Author Requirements Plugin” available in the Plugin Gallery. 

There is an option to make emails optional, which works on the QuickSubmit plugin. 


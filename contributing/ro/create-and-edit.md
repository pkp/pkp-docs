# Edit and Create

Now that you understand the basics of GitHub, this chapter explains how to add new documents and edit documents in the repository.

## Edit a Document

If you want to edit existing documentation or add a section or chapter to existing documentation, you can edit the document directly from the docs repository itself.

1. Create a [GitHub](https://github.com) account if you do not already have one and log in.
2. Navigate to [the repository in GitHub](https://github.com/pkp/pkp-docs).
3. Follow the directory structure in GitHub until you see the file you want to edit.
4. Click the filename to view that individual file.
5. From there, on the top right of the document window, you should see a small pencil icon.
6. Click that button to open up a plain text editor for the document within GitHub itself.
7. Edit the document.

![](./assets/contrib-01.gif)

If your edits requires you to replace or add images, see section on Adding/Replacing images.

## Create a Document

When you create a new document, you need to decided whether to make it a _single page document_ or _multi-page document_, as they are significantly different.

### Single Page Docs

Single page documents are rendered fully from one markdown file. The table of contents on the side of the page is created using the header tags in markdown. For example:

```
## The "Documentation Hub"

### Single Page Docs
```

To create a new single page document in GitHub:

1. In the pkp-docs repository, click Create New File. You will create the new folder for the document as you create the file.
2. Enter the name of the document folder and then /. This will automatically create the folder.
    - _Remember to follow naming conventions_.
3. Enter the name of the file `index.md`.
4. Place the following code at the top of the file:

```
---
generateHeadingToc: true
---
```

From here, write the document out as you would using markdown. Any level two header (e.g.: `## text`) displays on the table of contents on the left as a chapter. Any level three header (e.g.: `### text`) displays as a sub-chapter. Levels four and up does not display on the sidebar table of contents.

> Headings should never skip a level. Do not jump from `## Heading` (2) to `#### Sub-heading` (4). It is important that a sub-heading of `## Heading` (2) is `### Heading` (3) for accessibility.

### Multi-page Docs

Multi-page documents, like [Learning OJS 3](./learning-ojs), are more robust directories with folders for individual languages/translations, and a single markdown file for every chapter of the document. They also contain a file called `SUMMARY.md` that creates the table of contents for the document and a file called `README.md` that serves as a first/landing page for your document. To create a multi-page document start with the following:

1. In the pkp-docs repository, click Create New File. You will create the new folder for the document as you create the file.
2. Enter the name of the document folder and then /. This will automatically create the folder.
- _Remember to follow naming conventions_. (e.g., if your document is a guide to ORCID, you could name it orcid-guide or orcid-plugin).
3. Enter the name of the file `index.md`.
- A document-wide `index.md` file should contain a description of the document. Look to other documents as examples. Also, if the document is available in more than one language, they should all be linked from this page. - At the top of your indexing file, include the following:

```
---
isBookIndex: true
---
```

Unlike with a single-page document, you no longer need to add to index.md. The rest of your document steps should be as follows:

1. Create a folder for the [language of your document](http://www.lingoes.net/en/translator/langcode.htm) (eg: en_US, en_CA, fr_CA, fr_FR).
2. Create a file called `SUMMARY.md`
    - `SUMMARY.md` is the file that determines the display of the table of contents for your document. The markdown list hierarchy determines the nesting of contents titles in your sidebar. Each chapter title is written as a link to either a single markdown file per chapter _or_ as a link to a specific heading within that markdown file.
        - a chapter link would look like: `- [Statistics](statistics.md)`
        - a heading inside that chapter would look like: `- [Definitions](./statistics.md#definitions)`
3. Create a file called `README.md` which should be a language specific version of the text you had in `index.md`.
4. Create your chapters and write your links to those files in the `SUMMARY.md` file.
    - Each full chapter of a multi-page document should be a single markdown file. Subheadings within those chapters can be linked in `SUMMARY.md` to allow for links to specific sections.

> A note on formatting: whereas your headers in single documents create the sidebar TOC, in multi-page docs, this is handled by the `SUMMARY.md` file. As a result, you'll want each chapter title as an H1, with all subtitles ranging from H2 to H5. Since you can add to the TOC manually, you can include chapters there as you see fit.

![](./assets/contrib-summary-md-file.png)

## Adding/Replacing images

### Adding Images

Adding images to your documentation helps users more easily locate the features you are writing about. Images should go in a folder named assets. The type of document you’re working on changes where you will find the assets folder.

1. Single-page documents:
    - Find the assets folder within your main document folder. For example: `/contributing/assets/`
2. Multi-page documents:
    - Find the assets folder within the language folder of the document you’re working on. For example: `/learning-ojs/en/assets/`

To add new images to a document, you will need to take and save these screenshots locally. Make sure to follow the naming convention for images.

New assets can be added before working on a document or after it has been completed.

To add assets to a document and assets folder:

1. Add image code in the part of the document you would like this to appear in. To link to an image in the assets folder you will need to type `“![](./assets/ image file name)”` e.g., `![](./assets/learning-ojs3.1-jm-settings-workflow-comp.png)`
2. Repeat this step as many times as needed.
3. Create a draft pull request rather than opening  a pull request yet
4. Upload assets into the assets folder
   - Go to the branch that has been created for this set of changes.
   - Open the document folder followed by the language folder (if applicable)-
   - Open the Assets folder
   - Click the Upload Files button
   - Click Choose Your Files
   - Open the special folder where you saved all of your screenshots
   - Select all of the files and click Open
   - Commit your changes directly to the branch you have been working in
   - Change the status of your draft pull request

![](./assets/draft-PR.png)

### Replacing Images

While you’re editing a document you may find that you need to replace an image with an updated screenshot. This might be the case with version updates.

First, take the new screenshot and update the link to the screenshot in the document.

1. Take the new screenshot and save it
2. Before you save the new screenshot, find the link in the document to the old screenshot. It may look something like this:
   - `![](./assets/learning-ojs3.1-jm-settings-workflow-comp.png)`
3. If you’re doing a version update, change the version number in the file name. You would change the above example link to say the following:
    - `![](./assets/learning-ojs3.2-jm-settings-workflow-comp.png)`
4. Copy the part of the link that comes after the last / and before the file type extension - e.g., `learning-ojs3.2-jm-settings-workflow-comp`
5. Go to the new screenshot you just took and save as. Paste the file name you copied in the last step and save the screenshot in a special folder on your desktop.
6. Continue editing the document and save any additional screenshots you take in the same folder and naming them in the same way. Create a draft pull request rather than opening a pull request yet Once you are finishing editing the document, describe your changes at the bottom of the document and click Propose File Change. This will add your changes to a branch. The next page will show Comparing Changes. Create a draft pull request rather than opening  a pull request yet. You will upload your screenshot files to the new branch before making a pull request.
   - Go to the branch that has been created for this set of changes.
   - Open the document folder followed by the language folder (if applicable)
   - Open the Assets folder
   - Click the Upload Files button
   - Click Choose Your Files
   - Open the special folder where you saved all of your screenshots
   - Select all of the files and click Open
   - Commit your changes directly to the branch you have been working in
   - Change the status of your draft pull request

![](./assets/draft-PR.png)

### Deleting Images

If you’ve replaced images and there is no longer a use for the previous saved asset, the old assets can now be deleted. Before deleting the old assets, look through the chapter to make sure that these are not being used in other sections of the document. If so, update the other links with the new file name. You can then delete the old assets from your branch and create a pull request.

## Creating Assets Folder

To create an asset folder within the document branch, you will need to create a new file by clicking ‘Create new file’ in your repository.

![](./assets/create-assets-folder.png)

This will prompt you to another page where you can edit a new file. On the top you will see:

![](./assets/create-file-name.png)

Here you will enter the main document folder and the subsequent folders. This will vary depending on whether you are creating an asset folder for a single on multi-page document.

Begin by entering the main folder name followed by ‘/’. You will do this until you reach the subfolder you want to create your asset folder within.In a single-page document the asset folder might be created as the second level folder (i.e., `pkp-docs/contributing/assets/`). In a multi-page document the asset folder might be created within the language folder of the document you are working on. (i.e., `pkp-docs/learning-ojs/en/assets/`).

Multi-page Example:

![](./assets/create-file-name-multi.png)

For this example, I have created an assets folder within the en folder of learning-ojs.

Single-page example:

![](./assets/create-file-name-single.png)

As Github will not allow you to create a blank folder, you will need to create a document in the asset folder. Remember that document pages need to end with ‘.md’

This can be labelled as anything, as it will be deleted after you’ve uploaded your assets. Enter some text into the textbox and commit the change to the file.

![](./assets/create-file-holder.png)

You should find your newly created assets folder within the main document folder. Click upload files on the top right corner.

![](./assets/create-file-upload.png)

Add your assets using drag and drop or by clicking ‘choose your files’

![](./assets/create-file-upload2.png)

Once you’ve uploaded assets into your assets folder you can go ahead and delete the holder document file you created, by clicking the file name followed by trash can icon on the top right corner.

![](./assets/create-file-remove-holder.png)

## Creating a Pull Request

Once you’ve completed the made edits to the file, you will scroll down and fill the information in the text boxes and click ‘Propose file change’.

![](./assets/create-PR-1.png)

This will bring you to another page that compares the changes you’ve made.

![](./assets/create-PR-compare.png)

The fourth box (highlighted in red) is the branch that’s automatically created by Github.

Click ‘Create pull request.’

This page is where you would enter a more detailed description of what you changed. You might want to do this if you need to justify your changes or need to let everyone else know that a change is significant.

![](./assets/create-open-PR.png)

In this final page, you also have the option to create your pull request or create a draft pull request. A pull request indicates that you have completed your changes and lets the PKP team members know to review your changes. Meanwhile, a draft pull request allows you to continue to make changes.

*If you are a member of the PKP team, you’ll see the ability to commit directly to the main branch*. It’s important to note that these changes are immediate, but they are also unreviewed. Please do not commit directly to main. We recommend that you always commit code via pull request.

## Save and Continue Edits to Branch

Once you’ve created a draft pull request, you can continue making changes to the document you’re working on at any time. It will be important to note which branch is created for that particular document, especially if you have multiple branches in your repository.

![](./assets/Github-dash-branch-menu.png)

Again, the branch that has been created will be listed on the forth box in the Comparing changes page when generating a pull request.

![](./assets/create-branch-name.png)

You can also find out the branch by looking at the PKP Repository, pull request tab. Any active pull requests made can be found in the pkp repository page under pull request. Here you will find both draft pull requests and pull requests made.

![](./assets/pkp-docs-PR.png)

From your own repository, you will want to select the correct branch and continue making the changes to the document. After making these changes and providing the details of the changes in the textbox. You will want to select the first option to ‘Commit directly to the branch’.

![](./assets/PR-Commit-changes-to-branch.png)

You will repeat this step until you’ve complete making your changes.

Once you’ve completed making the changes to your document. You can now go back to the draft pull request you created and click ‘Ready for Review.’

![](./assets/PR-ready-review.png)

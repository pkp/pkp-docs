# Create a Stylesheet

> When customizing your journal with custom CSS styles, we strongly encourage you to involve technical and design experts to ensure that the changes you make do not adversely effect your journal. Changes to the CSS can effect your compliance with accessibility laws in your country, impact the usability of your journal on different devices, and cause other unforeseen consequences that a professional can help you avoid.<br/><br/>However, we understand that many journals do not have the funds to access these resources. The guide below is provided for those who want to try to write CSS customizations themselves. 
> 
> {:.warning}

In OJS, the Journal Manager, Journal Editor and Production Editor can upload a customized CSS (cascading stylesheet) file to override default CSS settings of a theme.

## Identifying elements of CSS

Most browsers will have several tools that can help you to inspect and test the CSS that is being used in your journal to identify the specific elements you might want to change.

For example, you can right-click on a part of a webpage (Ctrl+click on Macs), and you should see an option to “Inspect element”. In both Firefox and Chrome, this will bring up a version of “Developer tools” (named differently in each browser), which will allow you to take a closer look at the contents of a page’s HTML and CSS.

For example:

![](./assets/browser-developer-tools.png)*A screenshot of an OJS website using Firefox developer tools*

The developer tool will allow you to experiment with the settings for various elements on the page and to test these modifications might look like before adding them to your CSS file where the change will be reflected on your site. Making changes within the developers tools will not alter any changes made on the website itself — just the version of the website that you are viewing in your browser. For example, you can alter the header that the site name is contained in `<h1 class=“pkp_site_name”>` to see what the site would look like if the top header had a black background.

![](./assets/developer-tools-h1.png)*A screenshot of header CSS code in Firefox developer tools*

![](./assets/h1-header.png)*A screenshot of what the header will look like on the website with the above code*

You can experiment with a wide variety of scenarios with your CSS modifications using these tools, but there are some things to keep in mind:

> Most PKP themes are designed to be responsive, meaning that they adjust to various screen sizes on various devices (tablets, mobile phones, etc.), so be sure to test and see how your customizations appear on these other devices as well. 
> 
> {:.tip}

Keep track of the changes that you make using these tools (or use the Style Editor mentioned below), and make changes incrementally in the stylesheet that you upload to your journal’s website. You may want to consider having a version of the stylesheet open in a separate editor while you test the changes in your browser.

Browser developer tools are quite extensive and include a larger number of features than are mentioned here; consult the developer tools’ respective websites for more information:

- Firefox: [https://developer.mozilla.org/en-US/docs/Tools](https://developer.mozilla.org/en-US/docs/Tools)
- Chrome: [https://developers.google.com/web/tools/chrome-devtools/](https://developers.google.com/web/tools/chrome-devtools/)

## Create a basic CSS file using the default template

The first step is to create your .css file. You can either do this in your web browser or using a text editor. Though any text editing tools will work (e.g., Notepad or TextEdit), we recommend using a tool like [Atom](https://atom.io/) or [NotePad++](https://notepad-plus-plus.org/), which contains helpful features like syntax highlighting.

### Use your web browser

The Firefox web browser contains a Style Editor that allows you to create and save your stylesheet while previewing these changes in your browser. To use this feature:

1. Open your OJS home page
2. Navigate to Tools > Web Developer > Style Editor
3. Click the small + sign to add a new empty stylesheet

![Screenshot highlighting the location of the "+" mark in the Style Editor.](./assets/browser-style-editor.png)

4. Add your custom styles to the new stylesheet
5. Click the ‘Save’ button to save the file to your local machine

To learn more about the Style Editor tool, see [Firefox’s official documentation](https://developer.mozilla.org/en-US/docs/Tools/Style_Editor).

### Use a text editor

1. Open your text editor
2. Create a new file and save the file with a name using the .css extension (e.g., ojs-style.css)
3. Add the custom elements you would like to override in your CSS
4. Save your file
5. Upload your file to OJS (see below)

### Upload your CSS file

To test out your new or modified CSS before uploading it to your live journal, you can:

- Upload it to your Firefox Style Editor
- Upload it to your OJS sandbox site
- Upload it to the PKP demo site

When ready to upload your CSS, go to Settings > Website > Appearance > Journal Style Sheet and click **Upload**.

![The journal style sheet upload button in OJS.](./assets/upload-stylesheet.png)

When you're satisfied with the result, be sure to test your website on several devices, including laptops, tablets and phones, to ensure that you are happy with the way it looks no matter how your users access the journal's website.

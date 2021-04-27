# General principles for creating accessible content

## Alt text for images

Alt text (“alternative text”) is a machine-readable tag that describes an image in words if the image cannot be displayed for any reason, including slow internet connection, error in the HTML code, or the use of assistive technology.

### Where to add alt text

* Not all images need alt text. If an image is informative versus decorative, it will need alt text that also gives context to the image.
* Examples of images that are considered informative:
  * **Images that are links or buttons**
    * Clickable images should have alt text or be part of a clickable area that includes a description or context of the image. It should give clues on what will happen when clicking the link
    * If there is no text around the image, it needs alt text.
  * **Images that contain important text**
    * Logos
      * The alt text for a company or organisation’s logo in the header should be the company or organisation’s name. Add additional alt text for a link destination, for example, the UserTesting logo could have the alt text “User Testing -- Home”.
      * The description of an image can also be found at the bottom of the image as a “caption”.
* Examples of images that are considered decorative:
  * Used for aesthetic purposes (visual enhancements, decorations, embellishments)
  * Provide no information
  * Have no function beyond aesthetics

### How to write alt text for images

* The recommended number of characters for alt text is 125 characters or less for compatibility with popular screen readers.
* All alt text should end with a “.” so that the screen reader will pause after reading.
* Issue and article cover images should have alt text.
* Image clues to write about in alt text:
  * The placement of objects in the image
  * Image style (e.g. painting, graph)
  * Colours
  * Names of people in the image
  * Clothes, if they are important details
  * Animals
  * The placement of text within the image
  * Emotions (e.g. smiling)
  * Surroundings
* Image descriptions that can be left out:
  * Description of colours
  * Obvious details, such as a person has two eyes, a nose, and a mouth
  * Details that are not the focus of the image
  * Overly poetic and detailed descriptions
  * Emojis

### Icons

* Icons follow the same principles; are they informative or decorative?
  * Is there text directly next to the icon?
  * If there is text, does it describe what the icon is for?
  * If the icon is a link or a button, what happens when it is clicked or activated? Where does it go?

### Complex images

* Complex images contain substantial information, for example:
  * Graphs or charts (e.g. flow charts, organizational charts)
  * Illustrations or diagrams
  * Maps or other geographical or topographical images
* The recommended alternative to writing about complex images is to write both a short and long description:
  * The short description in alt text first identifies the image, and then indicates the location of the long description. E.g. `alt="Graph of quarterly temperature changes. Discussion available below."`.
  * The long description on the page contains essential information that is conveyed by the image.

### Image positioning for screen readers

Image positioning matters for text documents (e.g. Word, PDF) when read by screen readers.

Only images with the Wrap Text style of "In Line with Text" are recognized by screen reader software. When exported to PDF, images with other wrapping styles will be skipped by a screen reader even when an alt tag is present.

## Video and audio content

When creating video and audio content, it is important to ensure that it is accessible to users with visual, auditory, and neurological disabilities. Make sure that the video does not play automatically, as people should be able to choose when to play the content. A hearing impaired person may not be aware of the audio volume; users with physical or cognitive disabilities may not be as fast to stop the video and may impact other people in their environment, as well as feel embarrassed by the situation.

### Video and audio quality

- Ensure that the video contains no unannounced flashing/strobing that could trigger seizures due to photosensitivity;
- Provide high-quality foreground audio that is clearly distinguishable from any background noise to aid people who are hard of hearing.

### Providing alternatives for video and audio

- **Captions**. Captions are text alternatives to the spoken word presented within multimedia. They are beneficial to those who cannot hear the audio, those who may not be fluent in the language or those who prefer to receive information via text over sound.

    You can have automated captions generated that will then need to be reviewed and corrected by a human reader, using tools like:

    - [YouTube auto captioning for video](https://www.youtube.com/)
    - [Kapwing Caption Video Online](https://www.kapwing.com/tools/caption-video)
    - [IBM Watson auto captioning for audio](https://speech-to-text-demo.ng.bluemix.net/) (demo)

- **Transcripts**. Transcripts contain the full text of the spoken word (not necessarily verbatim) that could be accessed and read separately from the multimedia itself. Transcripts allow deaf/blind users to get content through the use of refreshable Braille devices. They are also useful for searching and navigating to a specific part of the text.

    When planning a video/audio recording, it is a good idea to have the transcript written out ahead of time. It can then be used both for the multimedia creation and to be made available afterwards.

- **Audio descriptions**. Audio descriptions are meant to provide additional information about content that is visible on the screen for users with visual disabilities. They typically take the form of a narrator that describes visual-only content in the multimedia and can be provided with the primary video, or in another audio track.

    When producing a video, the need for audio descriptions can often be avoided by describing or presenting the visual content via spoken audio. For example instead of saying “click here and then here”, you can say “click File and then Save” thus conveying visual content through audio.

- **Sign language interpretation**. While closed captions or transcripts provide a suitable alternative for users with hearing disabilities who are comfortable reading written language, they may not be sufficient for deaf users who rely on sign language as their primary (or only) language of communication. In this case an alternative can be provided via sign language interpretation or other tools outlined in the [Accessibility for Sign Language users section](#accessibility-for-sign-language-users).

## Accessible hyperlinks

Users who navigate using a screen reader must be able to unambiguously understand the purpose of the link and skip links they are not interested in. To achieve this, link text needs to be:

- **Descriptive.** When writing URL text, make sure it can be understood without additional context. E.g.:

    - Do not use: "[Click here](https://pkp.sfu.ca/ojs/) to read about OJS”.
    - Use instead: “More information is available on the [Open Journal Systems (OJS) page](https://pkp.sfu.ca/ojs/)”.

- **Concise**. Use keyword(s) as linked text rather than longer sentences. For text that is meant to be printed, hyperlink the text and add a full URL. E.g.:

    - For online display: “More information is available on the [Open Journal Systems (OJS) page](https://pkp.sfu.ca/ojs/)”.
    - For print display or online + print: “More information is available on the [Open Journal Systems (OJS) page](https://pkp.sfu.ca/ojs/) at [https://pkp.sfu.ca/ojs/](https://pkp.sfu.ca/ojs/)”.

- **Unique**. Avoid similarly named hyperlinks if they link to different places.

- **Visually distinct**. Use the default blue underlined style for hyperlinks. If you change it, make sure the links are still high contrast and underlined. Don't use underline for non-hyperlinked text.

## Contrast and colour reliance

Contrast and colour use are vital to accessibility. Having insufficient contrast may affect users with visual disabilities. Having content that relies on colour to convey meaning may affect users with colour vision deficiencies (CVD) and those who rely on screen readers.

### Contrast ratio

Text colour against the background may appear as sufficiently distinct to a sighted reader, but may present issues to a reader with visual disabilities. To help evaluate it, [WCAG 2.1 Guidelines](https://www.w3.org/TR/WCAG21/#contrast-minimum) quantify accessible contrast ratio as at least 4.5:1 for normal text and 3:1 for large text, for Level AA.

You can use [WebAim’s Contrast Checker](https://webaim.org/resources/contrastchecker/), [Contrast Ratio Checker](https://contrast-ratio.com/), or the [Colour Contrast Analyser](https://developer.paciellogroup.com/resources/contrastanalyser/) to check the contrast ratio between your website’s background and text colours. Here is an example of a check done using [WebAim’s Contrast Checker](https://webaim.org/resources/contrastchecker/):

![WebAim's Colour Contrast Checker interface.](./assets/1_a11y-guide-webaim-contrast-checker.png)

*Example of WebAim's Colour Contrast Checker interface options*

In this example, normal text of purple colour #666FF is not sufficiently distinct against the white background #FFFFFF and fails the Level AA standard, but large text of the same colour passes. To fix the issue, you can darken the text colour or increase the font size.

Similarly, you can use the WebAIM [Link Contrast Checker](https://webaim.org/resources/linkcontrastchecker/) to evaluate the visibility of your links.

### Use of colour

We often use colour in web content or in published content to convey meaning. Using coloured graphs or illustration is one such example. When making the choice to use colour, consider whether a reader with colour vision deficiencies (CVD) or using a screen reader would still be able to understand the meaning conveyed. It is essential for the colour to not be the only means of conveying the information - consider adding other textual queues (e.g. numbers or % on a graph).

**Don’t do this:**

![An orange and a green circle with no text.](./assets/2_a11y-guide-colour-circles-dont.png)

**Do this:**

![An orange circle with a word Yes and a green circle with a word No.](./assets/3_a11y-guide-colour-circles-do.png)

Other tools, such as the [Spectrum Chrome extension](https://chrome.google.com/webstore/detail/spectrum/ofclemegkcmilinpcimpjkfhjfgmhieb?hl=en) allow you to emulate different types of CVD on any website. This is particularly useful if your articles contain data visualisations. The following two figures, obtained from an article published in the journal Polar Research, illustrate how CVD can affect a user’s understanding of a graph or a chart.

![Two versions of the same map with different colours, description below.](./assets/4_a11y-guide-colour-chart2.png)

*In this figure, the original (1) is still accessible and legible to users with deuteranopia, a green blindness, as shown in (2).*

![Four variations of the same map with different colours, description below.](./assets/5_a11y-guide-colour-chart4.png)

*In this figure, the original’s (1) colour legend is not as clear for users with achromatopsia, total colour blindness, as shown in (2). Some of the data’s categories are too similar to each other.*

Certain web-based tools like [ColorBrewer](https://colorbrewer2.org/) provide accessible colour palettes for data visualisation, adapted to different types of datasets (sequential, diverging, qualitative). When in doubt, you may also fall back on different shapes or patterns to indicate delimitations in large groups of data points.

## Readability and legibility of writing

Understandably, text writing and formatting for a journal will likely follow conventions of a particular scholarly community. But there are general principles we can follow to make it more readable and legible.

Start by ensuring the text is free from spelling and grammar errors. You can use the built-in spell check in MS Word or Google Docs or free online tools such as [GrammarCheck](https://www.grammarcheck.net/editor/).

Shorter paragraphs will make the text easier to read on small screens and will help people with cognitive, neurological and/or learning disabilities. Similarly, expanding acronyms and abbreviations on first use and keeping a list of acronyms as an appendix for reference is a common and helpful practice.

[WebAim’s Writing Clearly and Simply](https://webaim.org/techniques/writing/) guide contains other helpful tips for writers to achieve clarity and simplicity. Additionally, tools like [Hemingway App](http://www.hemingwayapp.com/) can help evaluate your text for complexity and suggest ways of improving its general readability.

## Headings structure

Headings help users understand how the content of a page is organized. Also, they provide in-page navigation which is used by web browsers, plug-ins, and assistive technologies. When creating web content, using heading hierarchy in rank order will help users navigate the document with more ease.

Headings can provide a clearer idea about the content once it shows an outline of it. For that reason, rather than write a long main heading, it is advised to use subheadings.

It is possible to create content sections using subheadings, and these can connect related paragraphs.

![Example of heading formatting for JMIR](./assets/6_a11y-guide-headings-jmir.png)

*Example of heading formatting for JMIR papers from [JMIR Publications Knowledge Base and Help Center](https://support.jmir.org/hc/en-us/articles/360017464552-How-should-headings-be-formatted-).*

### HTML documents

In accessible HTML documents, headings are structured using the following tags: `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, and `<h6>`. They are nested according to their rank or level. Rank level is defined by the number of heading tags. Hence, `<h1>` is the highest level in importance and `<h6>` is the lowest subheading in the structure rank of headings.

Avoid skipping headings in a document structure to prevent confusion, even if you prefer the visual presentation. A `<h2>` must be followed by a `<h3>` as the next subheading in the same section. However, it is fine that a `<h4>` is followed directly by a `<h2>` when it opens a new section, as long as `<h4>` closes the previous one.

**Only one** `<h1>` heading should be used per document, because it is the document title or article title.

#### Examples

The example below shows an article structure with headings where the *Article title* is the highest rank heading and the most important info of the structure.

> (h1) *Article title*  
> (h2) Abstract  
> (h2) Introduction  
> (h3) Background  
> (h2) Methods  
> (h2) Conclusion

The example below demonstrates how to nest sections, with the lowest level closing the previous section. In this example, the "(h4) Background by region" closes the "(h2) Introduction" section and is fine in accessibility terms.

> (h1) Article title  
> (h2) Abstract  
> (h2) Introduction  
> (h3) Background  
> (h4) **Background by region**  
> (h2) Methods  
> (h2) Conclusion

### Text documents

There are many Text Editors available to create documents, including Microsoft Word, Apple Pages, LibreOffice, and online editors like Google Docs. You can use any editor you like to create documents with accessible heading structures.

Other editors will typically follow the same concept of heading ranking and nesting. You will usually have the option to select a portion of text and format it as a heading.

The following image shows the heading options for Google Docs:

![The heading options in Google Doc.](./assets/7_a11y-guide-headings-doc.png)

The heading hierarchy for documents on text editors should follow the same concept of rank level for HTML documents:

- Every document must have a *Heading 1*
- Do not skip heading levels, e.g.: a *Heading 2* must be followed by a *Heading 3* then *Heading 4*, except when starting a new section
- Headings should be unique to prevent any confusion while navigating, skimming or reading the whole document

## Lists

According to the content presented and how the content creator wants to organize it, there are three types of lists for web content. The type of list used depends on the kind of information that is being organized and its purpose.

* unordered list
* ordered list
* description list

Assistive technologies inform users what type of list will be read before proceeding to each item. It also describes how many items are on a list, the current item, and how many list items are still remaining.

### Unordered list

In an unordered list, the elements order is not important and  is used to show a group or a set of elements. This list usually shows a bullet for each element.

This list is coded using `<ul>` for the main element and `<li>` for each item. Example:

**Code**

```html
<ul>
    <li>Researchers</li>
    <li>Students</li>
    <li>Editors</li>
    <li>Authors</li>
</ul>
```

**Rendered**

> - Researchers
> - Students
> - Editors
> - Authors

### Ordered list

The main purpose is to show a hierarchy or sequential information. It can also show steps of instruction to follow or proceedings. It can show a number or a letter for each element listed.

This list is coded using `<ol>` for the main element and `<li>`  for each item. Example:

**Code**

```html
<ol>
    <li>Accept submission</li>
    <li>Assign reviewers</li>
    <li>Send to review</li>
    <li>Set a due date</li>
</ol>
```

**Rendered**

> 1. Accept submission
> 2. Assign reviewers
> 3. Send to review
> 4. Set a due date

### Description list (definition list)

A description list consists of grouping terms and their descriptions. It is possible to associate one or more terms to one or more descriptions of the terms. The markup for description lists includes the `<dl>` tag for the start of the list, the `<dt>` tag for the term(s), and the `<dd>` tag for the description(s). A term can be grouped to more than one description. Likewise, one or more terms can be grouped with one description. Many terms to many descriptions is also acceptable.

Screen readers will announce the number of terms as well as the descriptions. Below are some examples for description lists:

**One term, multiple descriptions**:

```html
<dl>
    <dt>Authors</dt>
        <dd>John</dd>
        <dd>Kevin</dd>
        <dd>Juan</dd>
    <dt>Editor</dt>
        <dd>James</dd>
</dl>
```

**Rendered**
> <dl>
>   <dt>Authors</dt>
>         <dd>John</dd>
>         <dd>Kevin</dd>
>         <dd>Juan</dd>
>     <dt>Editor</dt>
>         <dd>James</dd>
> </dl>
**Multiple terms, one description**:

```html
<dl>
    <dt>OJS</dt>
    <dt>OMP</dt>
        <dd>Publishing software platforms developed by PKP.</dd>
</dl>
```

**Rendered**
> <dl>
>   <dt>OJS</dt>
>   <dt>OMP</dt>
>     <dd>Publishing software platforms developed by PKP.</dd>
> </dl>
**Multiple terms, multiple descriptions**:

```html
<dl>
    <dt>Authors</dt>
    <dt>Editors</dt>
        <dd>James</dd>
        <dd>Michael</dd>
</dl>
```

**Rendered**
> <dl>
> <dt>Authors</dt>
> <dt>Editors</dt>
>     <dd>James</dd>
>     <dd>Michael</dd>
> </dl>
## Columns

While newer screen readers are typically compatible with multi-column layout, some older screen readers may read the page left-to-right, line by line, rendering the text out of order.

Tables are frequently used to create column formatting, but this is a common misuse. Tables (as detailed below) should be used exclusively for tabular data or content. Screen readers are expected to announce this as a “Table” and interpret the first row of a Table as the Table Header, causing potential confusion.

If you determine that columns are the best way to present your web content, the preferred way is to use [CSS to format multiple columns](https://www.w3schools.com/css/css3_multiple_columns.asp). However, it is important to ensure that the text is ordered coherently, even when CSS is inactive.

For text documents (e.g. Word, PDF) it is important to create columns using the Columns formatting tool rather than by using the tab key or spacebar to create whitespace between lines of text.

## Tables

Tables should be used exclusively to present tabular data or content. Tables can help organize content with a logical relationship in grids, making it easier to read and understand. For more on accessibility in tables see the [W3C/WAI Tables Concepts page](https://www.w3.org/WAI/tutorials/tables/).

It is possible to use tables to position elements visually in a document or page, although it is not advisable. It can cause confusion for assistive technologies that would announce the element as a “table” where it may in fact contain different content. It may give a sense of missing data in the wrapping element.

### Table structure

Different types of data or content can be presented in a different structure of tables. The complete structure set of this element involves:

* **Caption/Summary**: or table title, it could be either a short or long description of the data in the table, i.e.: "How I choose to spend my money". It serves to describe the content that the user will read and find in the table.
* **Table header**: Usually the first row of a table. It provides a label to the column and what type of information to expect in that column. However, for long tables it is also possible to use the whole first column as a table header as well. For example, tables containing countries and social indicators usually have the first row and the first column as table headers.
* **Table body**: wraps the main content or data of a table. It presents them below the table header and above the table footer.
* **Table footer**: this element serves to summarize the columns of a table. It is useful for tables values or numerical data. It is not a mandatory element for tables with values that do not require a summary, i.e.: table with names, ages, citizenship, etc. That is to say, even if age is a numerical value, it should not be summarized at the bottom of a table.

Below is an example of a table with elements of a table described above: *Caption*, *Header*, *Body* and *Footer*.

<table>
  <caption>How I chose to spend my money</caption>
  <thead>
    <tr>
      <th>Purchase</th>
      <th>Location</th>
      <th>Date</th>
      <th>Evaluation</th>
      <th>Cost (€)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Haircut</td>
      <td>Hairdresser</td>
      <td>12/09</td>
      <td>Great idea</td>
      <td>30</td>
    </tr>
    <tr>
      <td>Lasagna</td>
      <td>Restaurant</td>
      <td>12/09</td>
      <td>Regrets</td>
      <td>18</td>
    </tr>
    <tr>
      <td>Shoes</td>
      <td>Shoeshop</td>
      <td>13/09</td>
      <td>Big regrets</td>
      <td>65</td>
    </tr>
    <tr>
      <td>Toothpaste</td>
      <td>Supermarket</td>
      <td>13/09</td>
      <td>Good</td>
      <td>5</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4">SUM</td>
      <td>118</td>
    </tr>
  </tfoot>
</table>

*Table example with: Caption, Header, Body and Footer (summarizing) - Source: [https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced)*

For HTML documents the following tags are used to define a table main structure: `<table>`, `<thead>`, `<tbody>` and `<tfoot>`. The last 3 elements are always wrapped by the `<table>` tag. You can find further technical info about how to generate HTML tables for visually impaired users on the [Mozilla web docs](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced#Tables_for_visually_impaired_users).

To [create accessible tables in Microsoft Word](https://kb.iu.edu/d/aqjl):

* Ensure that "Header Row" and "First Column" are designated (checkbox checked)
* Repeat column headings where a table spans multiple pages
* Add alt text in table properties
* Choose table design that meets [WCAG contrast requirements](#contrast-and-colour-reliance)

## Document metadata

Adding metadata to your document increases its searchability. It also allows software applications and adaptive technologies to give the users the key information about the document, so they can easily find the desired document and determine if it is what they need.

### Filename

- Screen readers read the filename when navigating to a document from another document. Making the file name identifiable and meaningful will help both screen reader users and anyone who saves the file locally for future reference
- Avoid special characters in filenames
- Words separated by hyphens "-" and by capital letters (e.g. dogShow) may be read as individual words depending on the screen reader
- Galley files should follow a common naming pattern that would be consistent across all publications

### Title, author, and more

To add or modify the title, author, or subject of an MS Office document, navigate to:

- Windows: File > Info > Properties
- Mac: File > Properties > Summary

Adding the following information in MS Word should be transferred to the PDF on conversion:

- “Title”, which corresponds to “Document Title” in the PDF file
- “Subject”, which corresponds to “Description” in the PDF file
- “Author”, which corresponds to “Author” in the PDF file
- “Tags”, which corresponds to “Keywords” in the PDF file

*Note on using capitalization in titles*

If your discipline often displays article titles in all caps, you may want to avoid entering the titles in all caps manually, as screen readers may read this as an acronym rather than a title. Instead, the title and subtitle should be entered with upper and lower-case characters, e.g. “The Trolley Problem of Climate Change”, and then made upper-case through your journal’s stylesheet. This will also ensure the title is made available in its original form for downstream indexers like Crossref and Google Scholar.

### Language

A screen reader that supports multiple languages will rely on the web pages’ language tag to know in which language to read it. If you use OJS with multiple languages, make sure to use the proper language locale for that language (e.g. French locale for the French language) as the locale determines the language tag for the page.

Additionally, if you publish galleys in PDF, you can set the language tag for the document as follows:

1. Open the Document Properties dialog: Choose File > Properties
2. Select a language from the Language menu in the Reading Options area of the Advanced tab.

If you publish galleys in HTML or XML, it is best practice to set the lang, global language attribute, to the root element of each document. This declares the language of the entire galley, and helps assistive technologies determine how to pronounce words. It also helps search engines and web browsers.

You can also add the language attribute to specific elements, when the language changes mid-document. For example, an English language document may quote a paragraph in French.

In HTML:

`<p lang="fr">Ceci est un paragraphe.</p>`

In XML:

```html
<section id="test" xml:lang="fr">
    <title>En Français</title>
    <p>Ceci est un paragraphe.</p>
</section>
```

## Accessibility for Sign language users

For some people with auditory disabilities, sign language may be the primary language, and they may not read the written language fluently or at all. Here are some of the strategies to make your content accessible to them:

- Present information via a video accompanied by sign language interpretation - see for example [Revista Brasileira de Vídeo-Registros em Libras](https://revistabrasileiravrlibras.paginas.ufsc.br/)
- Add automated sign language interpretation by a virtual sign language avatar to the website - see for example [VLibras](https://www.vlibras.gov.br/) for the Portuguese Sign Language Libras
- Use simpler text that is supplemented by images, graphs, and other illustrations

Use signwriting where available for the sign language of your country. For further resources see the [Sutton's SignWriting site](https://www.signwriting.org/).

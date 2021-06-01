---
title: Convert - XML Production - OJS
description: How to convert journal articles prepared in Microsoft Word, Google Docs or LibreOffice to JATS XML.
---

# Convert to JATS XML

Scholarly articles are often written using software that is not compatible with JATS XML, such as Microsoft Word, Google Docs, and LibreOffice. These files must be converted to JATS XML.

The DocxConverter plugin for OJS can convert these documents when they have been prepared correctly. This guide will describe how to install the plugin, how to prepare the document, and how to convert it to JATS XML.

> System administrators may want to try other tools to convert documents to XML. These often require technical assistance to deploy, but in some cases they may provide a more accurate conversion. These tools include ...
{:.tip}

## Install the DocxConverter Plugin

... Step-by-step with screenshots or gifs...

## Prepare the Document

Limitations of DocxConverter (things not supported), need to prepare the document in advance, advice on training editorial staff

The article's title, abstract, contributors, and other metadata should be stripped from the document. In OJS, this metadata (the frontmatter and backmatter of a JATS XML document) is handled separately from the main body of the article. The document should only include the main body of the article, and the references and citations.

... Links to example documents in MS Word and Google Docs...

### Paragraphs

All paragraphs must have the "default" or "normal" style applied in the editor.

... screenshot ...

### Headings

All headings must have one of the heading styles applied in the editor. Each section, such as the Introduction or Conclusion, should start at **Heading 1**. Any sub-sections should use **Heading 2**.

... screenshot ...

### Lists

...

### Tables

All tables will be converted. However, table titles and captions can not be captured in the conversion process. After converting the document, table captions will appear as paragraphs and must be cleaned up when [copyediting and typesetting](./edit).

### Bold, Italic, Superscript, Subscript, Underlined and Strikethrough

All text must be formatted using the document editor's designated formatting tools, such as bold, italic, superscript, subscript, underlined and strikethrough. Any text formatting that indicates a font type or size will be removed when the document is converted in order to comply with the specifications of a JATS XML document.

> Never use underline in text formatting if it can be avoided. When the article is published to the web, underlined text will be confused for a link and users may think the document is "broken".
{:.warning}

### Figures, Charts and Images

All figures, charts and images must be inserted into the document in `JPEG` or `PNG` format. Some editors allow charts and graphs to be imported and displayed directly from data. These charts and graphs must be replaced with an image in `PNG` format in order to be converted correctly.

### References and Citations

References and citations must have the "bibliography" style applied in the editor. This style is not typically found alongside the other styles and must be applied by locating it in the editor's advanced style settings.

... screenshot or gif ...

> Google Docs does not support a bibliography style. When using Google Docs, references and citations will need to be entered manually when [copyediting and typesetting](./edit).
{:.warning}

References identified with the "bibliography" style will be imported as a `mixed-citation`. This means that the JATS XML will not be able to identify the distinct parts of a citation, such as the title, author or date. This information can be supplied manually when [copyediting and typesetting](./edit).

> The [Zotero plugin for Microsoft Word](https://www.zotero.org/support/word_processor_plugin_usage) will insert structured references so that the converter can identify the distinct parts of a citation. Citations inserted by Zotero do not need to be manually corrected when [copyediting and typesetting](./edit), which will save a lot of time.
{:.tip}

## Export the File

When the document is prepared it must be exported in `docx` format.

- In **Microsoft Word**, no additional action is needed to save the file in `docx` format.
- In **LibreOffice**, select File > Save as > Microsoft Word 2007-2013 XML (.docx).
- In **Google Docs**, select File > Download > Microsoft Word (.docx).

## Upload to OJS

... Step-by-step with screenshots or gifs...

## Convert to JATS XML

... Step-by-step with screenshots or gifs...


---

When the conversion is complete, editorial staff will need to [review and edit](./edit) the final document.

- - -
title: Style and Format - Guidelines for Contributing to PKP Documentation showPageTOC: true
- - -
# Style and Format

## Versioning and Updates

Most documentation is updated continually by contributors as needed. In the event of a major software release that might make older docs irrelevant (e.g., OJS 3.1 -> OJS 3.2), PKP strives to update the materials before or as-close-to release as possible.

When making changes related to minor software releases (e.g., OJS 3.1.1 -> 3.1.2), it is generally best to explain differences between versions explicitly in the document. For example:
> “In OJS releases 3.0 to 3.1.0, you cannot assign a user to review a submission if they are also an editor of the submission. However, starting with OJS 3.1.1, you can assign a user to review a submission if they are also an editor of the submission.”

Older versions of the documentation are accessible – via GitHub branches – for major-version documents in the Documentation Hub.

## Images

### Image Format

Images are restricted to 848 pixels in width on display. Where possible, try to limit your file size by keeping your images below that width. The format should follow these guidelines:

- for screenshots, use PNG format
- for photographs, use JPEG format
- for animations, use GIF format

### Screenshots

When you take screenshots, do not include the menu and broader elements of the interface unless it is necessary. This lessens the need to replace screenshots when the software interface changes.

## Spelling

PKP's documentation uses Canadian spelling. For example, use "centre" instead of "center."

## Pronouns

When using pronouns to refer to a generic user, use gender-neutral pronouns such as “they,” “their,” and “them.” Use “they” instead of “he” or “she.” Use “their” instead of “his” or “her.” Use “them” instead of “her” or “him.” Use “themselves” instead of “himself” or “herself.”

## Accessible Hyperlinks

Users who navigate using a screen reader must be able to unambiguously understand the purpose of the link and skip links they are not interested in. To achieve this, link text needs to be:

- **Descriptive.** Provide URL text rather than adding plain URL. E.g.:
> Do not use: “Read about OJS plugins at [https://docs.pkp.sfu.ca/learning-ojs/en/settings-website#plugins](https://docs.pkp.sfu.ca/learning-ojs/en/settings-website#plugins)”.
> Use instead: “Read about OJS plugins in the [Learning OJS: plugins](https://docs.pkp.sfu.ca/learning-ojs/en/settings-website#plugins) section”.

    When writing URL text, make sure it can be understood without additional context. E.g.:
> Do not use: “[Click here](https://docs.pkp.sfu.ca/learning-ojs/en/settings-website#plugins) to read about OJS plugins”.
> Use instead: “More information is available in the [Learning OJS: plugins](https://docs.pkp.sfu.ca/learning-ojs/en/settings-website#plugins) section”.

- **Concise.** Use keyword(s) as linked text rather than longer sentences. E.g.:
> Do not use: “More information is available in the [Learning OJS: plugins section which lists available OJS plugins](https://docs.pkp.sfu.ca/learning-ojs/en/settings-website#plugins)”.
> Use instead: “More information is available in the [Learning OJS: plugins](https://docs.pkp.sfu.ca/learning-ojs/en/settings-website#plugins) section”.

- **Unique.** Avoid similarly named hyperlinks if they link to different places. E.g.:
> Do not use the generic “Learning OJS” for links referring to different sections of the guide.
> Use instead: “More information is available in the [Learning OJS: plugins](https://docs.pkp.sfu.ca/learning-ojs/en/settings-website#plugins) section”.

## Order of Headings

To facilitate navigation by tabbing or with a screen reader, headings should be used in hierarchical order, without skipping.

Markdown headings correspond to HTML headings as follows:

`<h1> = #`

`<h2> = ##`

`<h3> = ###`

… etc.

The headings are nested according to their rank or level. E.g. `<h1>` or `#` is the highest level in importance, followed by `<h2>` or `##` etc.

Avoid skipping headings in a document structure to prevent confusion, even if you prefer the visual presentation. A `<h2>` must be followed by a `<h3>` as the next subheading in the same section. However, it is acceptable to have a `<h4>` followed directly by a `<h2>` when it opens a new section, as long as `<h4>` closes the previous one.

Only one `<h1>` or `#` heading should be used per document, because it serves as the document title. Therefore most sections within a Docs Hub page will start with `<h2>` or `##`.

## Blockquote Styles

When creating documentation in Markdown, you have the option of using coloured content blocks to highlight information for the reader. There are three options available: a "tip" block, a "notice" block, and a "warning" block. This will not add any semantic markup to the text blocks, and will only add coloured backgrounds to visually highlight the text.

We recommend using each style for the following types of content:

- Tip (yellow): Content that you want to highlight that may be helpful to the reader.
- Notice (blue): Content that is important for the reader to know.
- Warning (red): Essential content for the reader to understand before they continue.

### Syntax

To add a blockquote style to a section of text, use the blockquote Markdown styling by starting a section of text with a `>` character. Then, add the styling on the line after the text you are highlighting in braces. You can include other Markdown formatting, like bold text or links, in these blockquotes as well.

For example, if you wanted a block of text to have the warning style, you would use the following syntax:

```
> Documentation for the REST APIs in OMP and OPS is not yet available. These applications share many of the same endpoints as OJS, but the documentation has not yet been prepared.
{:.notice}
```

### Examples

The examples below demonstrate what each style will look like in the documentation hub.

#### Tip

> All of the form field components can be seen in the [UI Library](/dev/ui-library/dev). 
> 
> {:.tip}

#### Notice

> Documentation for the REST APIs in OMP and OPS is not yet available. These applications share many of the same endpoints as OJS, but the documentation has not yet been prepared. 
> 
> {:.notice}

#### Warning

> **Do not skip this step.** An upgrade can fail for many reasons. Without a backup you may permanently lose data. 
> 
> {:.warning}

## Linking to External Files

When linking to external files not hosted in the Docs Hub, consider the following:

- Where the license and file size allows, consider uploading the file to the Docs Hub and link to it there rather than to its external location, for continuity of access.
- Where appropriate consider incorporating the external content into the Docs Hub page and citing the quote appropriately. This will improve accessibility and limit reliance on external pages.
- If the external file format is not accessible, consider looking for an accessible alternative (e.g. a captioned video, etc.).

## Attribution

Contributors to a document, including authors and translators, can be noted in the Index.md file for a document. See [this example](https://raw.githubusercontent.com/pkp/pkp-docs/main/learning-ojs/index.md) for how contributor credits should be formatted.

If documentation they contributed changes substantially over time, their names may be removed.

## Tips for Writing Documentation

- Avoid duplication. If instructions already exist somewhere else that you want to include in a document, provide links instead of duplicating or reproducing the text. Linking to existing docs reduces duplication of effort when updating content. For example, if I want to write documentation for configuring a plugin, I would write it in the README file for the GitHub repository for that plugin. That way, all docs that reference that plugin can provide a link to the same information.
- Although the information you are writing about may be technical, try to write in simple, straightforward language. The PKP user community includes a variety of different people from different backgrounds and whose first language may not be the same as yours. [This tutorial](https://www.linux.com/tutorials/technical-writing-international-audience/) has tips on writing for an international audience.
- Keep in mind what group of users the documentation is for, what background and technical knowledge they may have, and what kind of information they need. User groups could include developers, system administrators, journal managers, editors, authors, and readers. Within any user group, write for the person with the most basic knowledge and experience.
- Explain and define acronyms and technical concepts.
- Break things down into simple steps and use numbered or bulleted lists whenever possible.
- Include screenshots to demonstrate, visually, how to use the software.
- Give examples to help users understand concepts.
- Try to anticipate problems and issues that the user might have. Explain how to overcome them.

You can learn more about writing good docs with these resources:

- [Documentation Guide by WritetheDocs](http://www.writethedocs.org/guide/)
- [Mailchimp Content Style Guide](https://styleguide.mailchimp.com/writing-technical-content/)

## Tips for Video Documentation

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
- Add captions to the video, which are text versions of the audio content, synchronized with the video. Captions help make the video accessible to people who are deaf or hard of hearing and they can improve comprehension for viewers with less fluency in the video's language.
- Include an accurate transcript, such as an .srt file. YouTube automates this, but it does require some manual improvement. This will allow translators to more easily make subtitles in other languages.

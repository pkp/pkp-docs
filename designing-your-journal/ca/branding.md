# Branding Your Journal

Before setting up your website’s appearance on the dashboard, it might be worth taking a moment to think about what makes your journal stand out from other journals in your field of study. A visually appealing and well-thought-out website can contribute to your journal’s credibility.

When making changes to your journal’s design, make sure to choose colours and design elements that will be accessible for all users. To find out more, see [Inclusive and Accessible theming](./inclusive-and-accessible-theming.md).

OJS 3’s dashboard allows for some personalisation without having to alter the HTML and CSS code. In any basic OJS installation, there are three main components that you can adjust to own your website’s look and feel and build your journal’s identity:

1. [colours (palette used for backgrounds, text, links)](#colours)
2. [typography (fonts, font pairings)](#typography)
3. [images (photographs, graphics)](#images)

## Colours

![Animation of a user accessing OJS appearance settings and selecting a pink accent under the "Colour" option.](./assets/website-settings-change-colours.gif)

When selecting the colour scheme for your journal, stick to simple palettes composed of grayscale with one or two accent colours. This will help your website look professional and uncluttered. Most default themes will only allow for one or two colours; make sure the chosen colours do not obstruct the text or any images on your website. It is possible to further customize your site’s colours with CSS, but we do not recommend this for beginners.

For more information about accessible colour choices and screenshot examples, see [Inclusive and Accessible Theming -- Colours](./inclusive-and-accessible-theming#colours).

## Typography

![Animation of a user accessing OJS appearance settings and selecting a new font under the Typography option.](./assets/website-settings-change-typography.gif)

Different typefaces and fonts can convey different tones. The OJS 3 default theme offers a few pairing options, whereas other themes might give you the option to select your own. If you wish to customize this, you will have to [edit CSS stylesheets manually](./creating-stylesheet.md).

As with your colour scheme, it is preferable to keep it simple and stick to a single typeface which includes bolds and italics. If you are writing in different scripts or languages, make sure that the selected typeface includes these special characters.

* [How to Choose a Typeface, on Smashing Magazine](https://www.smashingmagazine.com/2011/03/how-to-choose-a-typeface/)
* [Selecting Type for Text: Factors to Consider](https://www.fonts.com/content/learning/fontology/level-2/making-type-choices/selecting-type-for-text-factors-to-consider)

Typeface choice is a crucial element of your website, as it can affect legibility and readability of your content.

* [The 40 Best Free Fonts Available on Google Fonts](https://www.typewolf.com/google-fonts)
* [Open Foundry](https://open-foundry.com/fonts)

If you wish to use different typefaces for the headings and the body text, the same rules apply. However, make sure that you select a secondary typeface that pairs well with the primary one. Make sure to use display typefaces for headings exclusively, as they are designed to be used for larger text and not extended paragraphs of text.

* [https://fontpair.co/](https://fontpair.co/)
* [http://typ.io/](http://typ.io/)

## Images

The various themes of OJS provide options for using custom images throughout in order to enhance the look and feel of your journal. Accepted file formats for images include JPG and PNG, although journal managers and journal editors should consider the placement and function of each image when selecting an image file format and size.

### General Recommendations

* Don’t add too much text in your logo or other images. These will be resized on mobile devices and text may not be readable. Logos should be recognizable even on very small mobile phone screens.
* Always add *alt text* that describes what is in the image. Alt text provides a description to users who can not see the image and may rely on technologies like screen readers to understand what is being presented to them. Also, use of *alt text* may be required to pass legal accessibility requirements in your country.

OJS 3’s dashboard allows journal editors and journal managers to upload image files for the following elements:

* A **logo** – including the logotype (your journal’s full title, stylised or in plain text) and/or the logomark (usually a more graphical or abstract representation of your journal abbreviation, or an icon);
* A **homepage or header image** – usually the first impression and most outstanding visual element for your readers;
* Your **journal’s thumbnail** – visible in multi-journal installations;
* Every **issue’s cover image**;
* Every **article’s image**;
* A **favicon** – an extra-small representation of your journal’s logo that appears in the top-left corner of the browser’s tab.

Any photographs and graphics used in your journal should reflect the rest of your website’s brand. It is always preferable to avoid generic stock images or clip art and to make sure to stick to larger-format and high-resolution photographs and graphics. If you would like to display interesting and unique images but do not have the means to purchase them, there are many repositories of openly licensed (typically Creative Commons-licensed) or public domain images, such as:

* [https://publicdomainreview.org/](https://publicdomainreview.org/)
* [https://www.flickr.com/commons](https://www.flickr.com/commons)
* [https://www.flickr.com/photos/britishlibrary](https://www.flickr.com/photos/britishlibrary)
* [https://commons.wikimedia.org/](https://commons.wikimedia.org/)
* [https://unsplash.com/](https://unsplash.com/)
* [https://ccsearch.creativecommons.org](https://ccsearch.creativecommons.org)
* [https://pixabay.com/](https://pixabay.com/)
* [120+ places to find Creative Commons Media](https://www.sitepoint.com/creative-commons-sources/)

*Note that the use of most Creative Commons-licensed material requires that you give credit for images used. The typical mode of attribution is Title, Attribution, Source, License. For example:

*"[Journal of Information Technology & Politics](https://www.flickr.com/photos/44718928@N00/3081899809)" by [justgrimes](https://www.flickr.com/photos/44718928@N00) is licensed under [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/?ref=ccsearch&atype=rich)*

If you decide to create or use your own graphics (e.g., you or someone on your team is in charge of creating logos, graphic assets such as icons), make sure that you keep the original lossless files (in SVG, AI, etc.). Save any non-photographic images in PNG, and make sure that these images are not compressed or stretched once uploaded on your website.

### Image size and quality

#### Logo image

The Logo is the image that represents the journal and is displayed at the top of most themes. We generally recommend that logos should be:

* Saved in PNG with a transparent background.
* Of a larger width than height.
* Easily readable.

<figure>
    <img src="./assets/logo-dont-1.png" alt="Image demonstrating a hard-to-read small logo image in black text on a blue background, with a red X beside it.">
    <figcaption>Image dimensions are too small, poor contrast between header background colour and text colour, and text is too long.</figcaption>
</figure>

<br/>

<figure>
    <img src="./assets/logo-dont-2.png" alt="Image demonstrating a very colorful and small logo image, with a red X beside it.">
    <figcaption>Background image too busy and creates poor contrast, and too much text which becomes unreadable.</figcaption>
</figure>

<br/>

<figure>
    <img src="./assets/logo-dont-3.png" alt="Image demonstrating a small and low quality square black logo image with a white background, with a red X beside it.">
    <figcaption>JPEG format does not allow for transparent background and lowers the image quality, image dimensions are too small, and too much text which becomes unreadable.</figcaption>
</figure>

<br/>

<figure>
    <img src="./assets/logo-good-3.png" alt="Image demonstrating an easily readable large logo image with white text on a blue background, with a green checkmark beside it.">
    <figcaption>Logo is transparent and in PNG format, colour contrast is high enough to be readable against header background, but there is still too much text; see the following image for the mobile view.</figcaption>
</figure>

<br/>

<figure>
    <img src="./assets/logo-good-mobile.png" alt="Image demonstrating the previous image's readable logo on a mobile display, with a green checkmark beside it.">
    <figcaption>On mobile, the text in the logo becomes unreadable and cluttered. The logo could be greatly improved by simplifying it.</figcaption>
</figure>

<br/>

<figure>
    <img src="./assets/logo-good-2.png" alt="Image demonstrating a plain text journal title, with a green checkmark beside it.">
    <figcaption>If you do not have access to graphic design software or resources to design a logo, displaying the journal title in plain text is always the simplest user-friendly (accessible and responsive) option. You still have the option to change the typeface of this text if you would like to personalise it without the use of software. <a href="https://fonts.google.com/">Google Fonts</a> offers many free and open source display fonts (requires some CSS knowledge).</figcaption>
</figure>

<br/>

<figure>
    <img src="./assets/logo-better-1.png" alt="Image demonstrating a large, plain white logo on a blue background with the journal's initials, with two green checkmarks beside it.">
    <figcaption>A clean, simple, and high contrast logo is more impactful. The PNG lossless format allows for a transparent background and better image quality, and the image is not stretched, thanks to larger image dimensions.</figcaption>
</figure>

<br/>

<figure>
    <img src="./assets/logo-better-2.png" alt="Image demonstrating a large, plain blue logo on a white background with the journal's initials, with two green checkmarks beside it.">
    <figcaption>A variant of the previous logo on a white background, using the same brand colour.</figcaption>
</figure>

<br/>

<figure>
    <img src="./assets/logo-better-mobile.png" alt="Image demonstrating a large, plain logo with the journal's initials on a mobile display, with two green checkmarks beside it.">
    <figcaption>This version looks good on both mobile and desktop views.</figcaption>
</figure>

<br/>

#### Home page image

The Home page image is the large feature image on the homepage on some themes, such as the Default, Manuscript, and Health Sciences themes. Some general recommendations for Home page images include:

* large high-quality un-stretched image (we recommend anything between 1500 and 2500 pixels wide to accommodate most screens, but recommendations vary by theme).
* images with a larger width than height.

<figure>
    <img src="./assets/splash-image-dont.png" alt="An oversized issue cover image which has been set as the homepage image, taking up an excessive amount of space. The image is marked with a red X.">
    <figcaption>The home page image should not be used for issue covers -- there is a space dedicated to this in an issue’s metadata. It is also much taller than it is wide: your readers will have to scroll before seeing your latest announcements or issue’s table of contents.</figcaption>
</figure>

<br/>

<figure>
    <img src="./assets/splash-image-dont-mobile.png" alt="The previous oversized image on a mobile display, marked with a red X.">
    <figcaption>Image sizing issues are magnified on mobile devices; the reader has to scroll even more. This may cause them to navigate away from your website before reading your journal’s content.</figcaption>
</figure>

<br/>

<figure>
    <img src="./assets/splash-image-dont-2.png" alt="A properly sized homepage image, marked with a red X.">
    <figcaption>Original image dimensions are too small - less than 1000 pixels wide. Used as a cover or home page image, it stretches out and becomes blurry or pixelated.</figcaption>
</figure>

<br/>

<figure>
    <img src="./assets/splash-image-do.png"  alt="A properly sized homepage image, marked with a green check.">
    <figcaption>The image is much wider than it is tall, giving readers a better idea of the journal’s text content “above the fold” (before the reader has to scroll to see the rest of the page). A high-quality and larger (over 1200 pixels wide) PNG image looks more polished and translates well on most screens, from mobile devices to desktop HD monitors.</figcaption>
</figure>

<br/>

<figure>
    <img src="./assets/splash-image-do-mobile.png"  alt="Image showing a properly sized homepage image on a mobile display, marked with a green check.">
    <figcaption>The image’s dimensions (wider than tall) allow readers to get an idea of the journal’s latest announcements as soon as they land your home page. This allows some customisation of your website without obstructing its content.</figcaption>
</figure>

<br/>

#### Journal Thumbnail

The Journal Thumbnail is a small image used for OJS installations with multiple journals displayed next to the journal title on the list of all journals on the site. Some general recommendations for Journal Thumbnail images are to use images that are:

* JPG for photographs or PNG for design marks.
* Of a larger width than height.
* Journal thumbnails should have a consistent width and height for every journal on the site.

#### Issue cover image

The Issue Cover Image is the image displayed alongside the issue information of past issues and beside the issue information for the current issue seen on the homepage. Some general recommendations for Issue Cover Images is that they should be:

* JPG for photographs or PNG for illustrations without photographs.
* Used consistently - either give all issues an image or none.

#### Article image

Article Images are displayed beside the title and contributor list of each article. Article cover images should be:

* JPG for photographs or PNG for illustrations without photographs.
* Used consistently - either give all articles an image or none.

#### Image dimensions

The recommended image dimensions will vary depending on the base theme you have selected and how image sizes are coded in the theme.

For the Health Sciences and Classic themes, detailed information about images and dimensions can be found in their README files:

* Health Sciences: [https://github.com/pkp/healthSciences/blob/main/README.md](https://github.com/pkp/healthSciences/blob/main/README.md)
* Classic: [https://github.com/pkp/classic/blob/main/README.md](https://github.com/pkp/classic/blob/main/README.md)
* Bootstrap: [https://github.com/NateWr/bootstrap3/blob/master/README.md](https://github.com/NateWr/bootstrap3/blob/master/README.md)

Other themes do not have image information in their README files. See [the Themes chapter of the Theming Guide](/pkp-theming-guide/en/themes) for further information on these themes.

The size and manner in which images are displayed can be altered by uploading a custom CSS file.

In OMP you can configure the size of your book cover thumbnails under Website Settings > Appearance.

![The OMP cover thumbnail dimension setting screen.](./assets/cover-thumbnails.png)

### Resizing images

It is not possible to adjust the size of an image you have uploaded to OJS through the OJS interface. Instead you should edit the image dimensions in an image editor application outside of OJS and then upload the image in OJS. You can adjust image sizes with a custom CSS file, but this could affect accessibility and responsiveness.

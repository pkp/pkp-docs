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

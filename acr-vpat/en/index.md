---
generateHeadingToc: true
---

# OJS 3.3+ Default Theme Accessibility Conformance Report (ACR)

Based on VPAT® 2.4

## Name of Product/Version
OJS Default Theme OJS 3.3.0-17

## Report Dates and Version
- Report Date: 5/6/2024
- Last Modified Date: 5/8/2024
- Version: ojs default theme-OJS 3.3.0-17-5


## Contact Information
### Author Information
* Name: Israel Cefrin
* Company: Public Knowledge Project, Simon Fraser University
* Email: icefrin@sfu.ca
* Website: http://pkp.sfu.ca/

### Vendor Information
* Name: Kevin Stranack
* Company: Public Knowledge Project, Simon Fraser University
* Email: kevin_stranack@sfu.ca
* Website: http://pkp.sfu.ca/

## Notes
The OJS Default Theme audit found many barriers, and most of these have been eliminated. However, the theme will be constantly updated, and new barriers may unknowingly be created. If you encounter barriers, or need accommodations, please report them to us via the PKP web contact form - https://pkp.sfu.ca/contact-us/.

## Evaluation Methods
### Reviewer’s Testing Technologies

* Mac OS Sierra 10.12.6 Firefox and Chrome
* PC Windows 10 Firefox and Chrome
* A minimum of 10 different accessibility related apps, plugins, extensions and
online checking software were used in both Chrome and Firefox on PC and Mac.
* Manual testing was completed, and this included different assistive technologies.


### Third Party Testers Testing Technologies
* Screen Reader
JAWS version 2019.1907.42 on Internet Explorer 8.1 on Windows 10 with PacMate 20 Braille Display
* Screen Reader
NVDA 2019.1.1 on Google Chrome on Windows 8.1
* Screen Reader
Narrator on Microsoft Edge 44.17763.0.1 on Windows 10 Pro 10.0.17763
* Screen Reader
JAWS version 2019.1907.42 on Microsoft Edge 44.17763.0.1 on Windows
Surface Tablet
* Screen Reader
JAWS version: 2018.1811.3 on Google Chrome version: 73.0.3683.103 on
Windows 10 Pro 10.0.17763
* Screen Reader
NVDA version: 2019.1.1 on Google Chrome version: 73.0.3683.103 on Windows
10 Pro 10.0.17763
* Screen Reader
VoiceOver on Safari 12.1 on OS 12.2 iPhone
* Screen Reader
VoiceOver on Safari 12.1 on Mac Mini High Sierra Version 10.13.6
* Screen Reader with Braille Device
iPad Pro 12.9 inch on iOS 12.4.1 VoiceOver with 40 Cell Focus 40 Blue Braille
Display
* Screen Reader
JAWS version 2019.1907.42 on Google Chrome on Windows
* Version 77.0.3865.75 64-bit on Mac OS Sierra (v10.12.6).
* Browser Magnification
Firefox Quantum Version 69.0 on Mac OS Sierra (v10.12.6).
* Voice Recognition Software
Dragon Naturally Speaking Premium 13 on Windows 10

## Applicable Standards/Guidelines
This report covers the degree of conformance for the following accessibility standard/guidelines:

| Standard/Guideline | Included In Report |
| --- | --- |
| [Web Content Accessibility Guidelines 2.1](https://www.w3.org/TR/WCAG21/) | {::nomarkdown}<ul><li>Table 1: Success Criteria, Level A</li><li>Table 2: Success Criteria, Level AA</li></ul>{:/} |

## Terms
The terms used in the Conformance Level information are defined as follows:
- **Supports**: The functionality of the product has at least one method that meets the criterion without known defects or meets with equivalent facilitation.
- **Partially Supports**: Some functionality of the product does not meet the criterion.
- **Does Not Support**: The majority of product functionality does not meet the criterion.
- **Not Applicable**: The criterion is not relevant to the product.
- **Not Evaluated**: The product has not been evaluated against the criterion. This can be used only in WCAG 2.x Level AAA.

## WCAG 2.1 Report

### Table 1: Success Criteria, Level A


Conformance to the 30 criteria listed below is distributed within each category as follows:

| Conformance Level | Web | Electronic Documents | Software | Authoring Tool |
| --- | --- | --- | --- | --- |
| Supports | 14 | 0 | 0 | 0 |
| Partially Supports | 3 | 0 | 0 | 0 |
| Does Not Support | 0 | 0 | 0 | 0 |
| Not Applicable | 13 | 0 | 0 | 0 |


| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| [1.1.1 Non-text Content](https://www.w3.org/TR/WCAG21/#non-text-content) | {::nomarkdown}<ul><li><strong>Web</strong>: Partially Supports</li> </ul>{:/} | {::nomarkdown}<ul><li><strong>Web</strong>: There is a Google reCaptcha embedded function to prevent or mitigate spammer registering influx. We acknowledge the lack of full support for accessibility to this feature since we rely on the functionality of a third-party vendor, i.e. Google. This plugin is optional and it is disabled by default. </li> </ul>{:/} |
| [1.2.1 Audio-only and Video-only (Prerecorded)](https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded) | {::nomarkdown}<ul><li><strong>Web</strong>: Not Applicable</li> </ul>{:/} | {::nomarkdown}<ul><li><strong>Web</strong>: It relies on the content that authors, editors, or journal managers will upload to the journal. </li> </ul>{:/} |
| [1.2.2 Captions (Prerecorded)](https://www.w3.org/TR/WCAG21/#captions-prerecorded) | {::nomarkdown}<ul><li><strong>Web</strong>: Not Applicable</li> </ul>{:/} | {::nomarkdown}<ul><li><strong>Web</strong>: It relies on the content that authors, editors, or journal managers will upload to the journal. </li> </ul>{:/} |
| [1.2.3 Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded) | {::nomarkdown}<ul><li><strong>Web</strong>: Not Applicable</li> </ul>{:/} | {::nomarkdown}<ul><li><strong>Web</strong>: It relies on the content that authors, editors, or journal managers will upload to the journal. </li> </ul>{:/} |
| [1.3.1 Info and Relationships](https://www.w3.org/TR/WCAG21/#info-and-relationships) | {::nomarkdown}<ul><li><strong>Web</strong>: Partially Supports</li> </ul>{:/} | {::nomarkdown}<ul><li><strong>Web</strong>: The theme uses ARIA landmarks to identify regions of a page. It misses only the footer region element although it presents an alternative to reach the footer content.</li> </ul>{:/} |
| [1.3.2 Meaningful Sequence](https://www.w3.org/TR/WCAG21/#meaningful-sequence) | {::nomarkdown}<ul><li><strong>Web</strong>: Supports</li> </ul>{:/} | {::nomarkdown}<ul> </ul>{:/} |
| [1.3.3 Sensory Characteristics](https://www.w3.org/TR/WCAG21/#sensory-characteristics) | {::nomarkdown}<ul><li><strong>Web</strong>: Supports</li> </ul>{:/} | {::nomarkdown}<ul><li><strong>Web</strong>: Buttons and breadcrumbs provide alternative and complementary text to screen reader users.</li> </ul>{:/} |
| [1.4.1 Use of Color](https://www.w3.org/TR/WCAG21/#use-of-color) | {::nomarkdown}<ul><li><strong>Web</strong>: Supports</li> </ul>{:/} | {::nomarkdown}<ul> </ul>{:/} |
| [1.4.2 Audio Control](https://www.w3.org/TR/WCAG21/#audio-control) | {::nomarkdown}<ul><li><strong>Web</strong>: Not Applicable</li> </ul>{:/} | {::nomarkdown}<ul> </ul>{:/} |
| [2.1.1 Keyboard](https://www.w3.org/TR/WCAG21/#keyboard) | {::nomarkdown}<ul><li><strong>Web</strong>: Supports</li> </ul>{:/} | {::nomarkdown}<ul><li><strong>Web</strong>: The interface is fully operable using the keyboard only.</li> </ul>{:/} |
| [2.1.2 No Keyboard Trap](https://www.w3.org/TR/WCAG21/#no-keyboard-trap) | {::nomarkdown}<ul><li><strong>Web</strong>: Supports</li> </ul>{:/} | {::nomarkdown}<ul><li><strong>Web</strong>: There are no modal or alert traps in the Default Theme. It might be possible that some third-party plugins do not comply with this criteria though.</li> </ul>{:/} |
| [2.1.4 Character Key Shortcuts](https://www.w3.org/TR/WCAG21/#character-key-shortcuts) | {::nomarkdown}<ul><li><strong>Web</strong>: Not Applicable</li> </ul>{:/} | {::nomarkdown}<ul><li><strong>Web</strong>: There are not keyboard shortcuts implemented for the theme.</li> </ul>{:/} |
| [2.2.1 Timing Adjustable](https://www.w3.org/TR/WCAG21/#timing-adjustable) | {::nomarkdown}<ul><li><strong>Web</strong>: Not Applicable</li> </ul>{:/} | {::nomarkdown}<ul> </ul>{:/} |
| [2.2.2 Pause, Stop, Hide](https://www.w3.org/TR/WCAG21/#pause-stop-hide) | {::nomarkdown}<ul><li><strong>Web</strong>: Not Applicable</li> </ul>{:/} | {::nomarkdown}<ul> </ul>{:/} |
| [2.3.1 Three Flashes or Below Threshold](https://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold) | {::nomarkdown}<ul><li><strong>Web</strong>: Not Applicable</li> </ul>{:/} | {::nomarkdown}<ul> </ul>{:/} |
| [2.4.1 Bypass Blocks](https://www.w3.org/TR/WCAG21/#bypass-blocks) | {::nomarkdown}<ul><li><strong>Web</strong>: Supports</li> </ul>{:/} | {::nomarkdown}<ul><li><strong>Web</strong>: Skipping links are the very first focusable by keyboard elements on the interface.</li> </ul>{:/} |
| [2.4.2 Page Titled](https://www.w3.org/TR/WCAG21/#page-titled) | {::nomarkdown}<ul><li><strong>Web</strong>: Supports</li> </ul>{:/} | {::nomarkdown}<ul><li><strong>Web</strong>: As long as Journal Managers keep the titles meaningful it will be reflected on the content. </li> </ul>{:/} |
| [2.4.3 Focus Order](https://www.w3.org/TR/WCAG21/#focus-order) | {::nomarkdown}<ul><li><strong>Web</strong>: Supports</li> </ul>{:/} | {::nomarkdown}<ul> </ul>{:/} |
| [2.4.4 Link Purpose (In Context)](https://www.w3.org/TR/WCAG21/#link-purpose-in-context) | {::nomarkdown}<ul><li><strong>Web</strong>: Not Applicable</li> </ul>{:/} | {::nomarkdown}<ul><li><strong>Web</strong>: It relies on the content that authors, editors, or journal managers will upload to the journal. </li> </ul>{:/} |
| [2.5.1 Pointer Gestures](https://www.w3.org/TR/WCAG21/#pointer-gestures) | {::nomarkdown}<ul><li><strong>Web</strong>: Not Applicable</li> </ul>{:/} | {::nomarkdown}<ul> </ul>{:/} |
| [2.5.2 Pointer Cancellation](https://www.w3.org/TR/WCAG21/#pointer-cancellation) | {::nomarkdown}<ul><li><strong>Web</strong>: Supports</li> </ul>{:/} | {::nomarkdown}<ul><li><strong>Web</strong>: There are no &quot;Down-Event&quot;, which means  that the down-event of the pointer is not used to execute any part of the function;</li> </ul>{:/} |
| [2.5.3 Label in Name](https://www.w3.org/TR/WCAG21/#label-in-name) | {::nomarkdown}<ul><li><strong>Web</strong>: Not Applicable</li> </ul>{:/} | {::nomarkdown}<ul><li><strong>Web</strong>: It relies on the content that authors, editors, or journal managers will upload to the journal. </li> </ul>{:/} |
| [2.5.4 Motion Actuation](https://www.w3.org/TR/WCAG21/#motion-actuation) | {::nomarkdown}<ul><li><strong>Web</strong>: Not Applicable</li> </ul>{:/} | {::nomarkdown}<ul> </ul>{:/} |
| [3.1.1 Language of Page](https://www.w3.org/TR/WCAG21/#language-of-page) | {::nomarkdown}<ul><li><strong>Web</strong>: Supports</li> </ul>{:/} | {::nomarkdown}<ul><li><strong>Web</strong>: The Default Theme is ready to work with 68 different languages and their writing systems</li> </ul>{:/} |
| [3.2.1 On Focus](https://www.w3.org/TR/WCAG21/#on-focus) | {::nomarkdown}<ul><li><strong>Web</strong>: Supports</li> </ul>{:/} | {::nomarkdown}<ul> </ul>{:/} |
| [3.2.2 On Input](https://www.w3.org/TR/WCAG21/#on-input) | {::nomarkdown}<ul><li><strong>Web</strong>: Supports</li> </ul>{:/} | {::nomarkdown}<ul> </ul>{:/} |
| [3.3.1 Error Identification](https://www.w3.org/TR/WCAG21/#error-identification) | {::nomarkdown}<ul><li><strong>Web</strong>: Supports</li> </ul>{:/} | {::nomarkdown}<ul><li><strong>Web</strong>: Register, login, and reset password forms provide users with clear messages of error after submitting. The errors are displayed on the top of the form.</li> </ul>{:/} |
| [3.3.2 Labels or Instructions](https://www.w3.org/TR/WCAG21/#labels-or-instructions) | {::nomarkdown}<ul><li><strong>Web</strong>: Partially Supports</li> </ul>{:/} | {::nomarkdown}<ul><li><strong>Web</strong>: All forms provide previous instructions on how to use them. The search form is still pending on adding the instructions.</li> </ul>{:/} |
| [4.1.1 Parsing](https://www.w3.org/TR/WCAG21/#parsing) | {::nomarkdown}<ul><li><strong>Web</strong>: Supports</li> </ul>{:/} | {::nomarkdown}<ul> </ul>{:/} |
| [4.1.2 Name, Role, Value](https://www.w3.org/TR/WCAG21/#name-role-value) | {::nomarkdown}<ul><li><strong>Web</strong>: Not Applicable</li> </ul>{:/} | {::nomarkdown}<ul><li><strong>Web</strong>: There are no user interface components developed or scripted other than the native HTML elements.</li> </ul>{:/} |


### Table 2: Success Criteria, Level AA


Conformance to the 20 criteria listed below is distributed within each category as follows:

| Conformance Level | Web | Electronic Documents | Software | Authoring Tool |
| --- | --- | --- | --- | --- |
| Supports | 14 | 0 | 0 | 0 |
| Partially Supports | 1 | 0 | 0 | 0 |
| Does Not Support | 0 | 0 | 0 | 0 |
| Not Applicable | 5 | 0 | 0 | 0 |


| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| [1.2.4 Captions (Live)](https://www.w3.org/TR/WCAG21/#captions-live) | {::nomarkdown}<ul><li><strong>Web</strong>: Not Applicable</li> </ul>{:/} | {::nomarkdown}<ul><li><strong>Web</strong>: It relies on the content that authors, editors, or journal managers will upload to the journal. </li> </ul>{:/} |
| [1.2.5 Audio Description (Prerecorded)](https://www.w3.org/TR/WCAG21/#audio-description-prerecorded) | {::nomarkdown}<ul><li><strong>Web</strong>: Not Applicable</li> </ul>{:/} | {::nomarkdown}<ul><li><strong>Web</strong>: It relies on the content that authors, editors, or journal managers will upload to the journal. </li> </ul>{:/} |
| [1.3.4 Orientation](https://www.w3.org/TR/WCAG21/#orientation) | {::nomarkdown}<ul><li><strong>Web</strong>: Supports</li> </ul>{:/} | {::nomarkdown}<ul><li><strong>Web</strong>: The Default Theme provides full support to portrait and landscape orientation to different screen sizes.</li> </ul>{:/} |
| [1.3.5 Identify Input Purpose](https://www.w3.org/TR/WCAG21/#identify-input-purpose) | {::nomarkdown}<ul><li><strong>Web</strong>: Supports</li> </ul>{:/} | {::nomarkdown}<ul> </ul>{:/} |
| [1.4.3 Contrast (Minimum)](https://www.w3.org/TR/WCAG21/#visual-audio-contrast-contrast) | {::nomarkdown}<ul><li><strong>Web</strong>: Supports</li> </ul>{:/} | {::nomarkdown}<ul><li><strong>Web</strong>: Most of elements present a minimum contrast Ratio of 4.57:1 that complies to WCA 2.1 AA. The asterisk &quot;*&quot; element in input files that denotes &quot;required input&quot; has now the color contrast and the font size to comply to this criteria. The remediation can be seen from this Issue in Github: <a href="https://github.com/pkp/pkp-lib/issues/9504">https://github.com/pkp/pkp-lib/issues/9504</a></li> </ul>{:/} |
| [1.4.4 Resize text](https://www.w3.org/TR/WCAG21/#visual-audio-contrast-scale) | {::nomarkdown}<ul><li><strong>Web</strong>: Supports</li> </ul>{:/} | {::nomarkdown}<ul> </ul>{:/} |
| [1.4.5 Images of Text](https://www.w3.org/TR/WCAG21/#visual-audio-contrast-text-presentation) | {::nomarkdown}<ul><li><strong>Web</strong>: Supports</li> </ul>{:/} | {::nomarkdown}<ul><li><strong>Web</strong>: Buttons for galley files contain both icons and text label related to the files they are  linked to.</li> </ul>{:/} |
| [1.4.10 Reflow](https://www.w3.org/TR/WCAG21/#reflow) | {::nomarkdown}<ul><li><strong>Web</strong>: Supports</li> </ul>{:/} | {::nomarkdown}<ul><li><strong>Web</strong>: The Default Theme enables small screen users to read content in both orientation : landscape or portrait, without requiring horizontal scrolling. It also relies on content, especially images that editors may upload. As long as they respect the maximum width it will be compliant to this criteria.</li> </ul>{:/} |
| [1.4.11 Non-text Contrast](https://www.w3.org/TR/WCAG21/#non-text-contrast) | {::nomarkdown}<ul><li><strong>Web</strong>: Supports</li> </ul>{:/} | {::nomarkdown}<ul><li><strong>Web</strong>: A contrast ratio of 6.18:1 is provided to the icons utilized in buttons (PDF, XML, HTML galleys) and search. This number relies on the color of the theme out-of-box. Journal managers can adjust or customize the colors of the interface. That action may change the contrast ratio and turn the interface non-compliant.</li> </ul>{:/} |
| [1.4.12 Text Spacing](https://www.w3.org/TR/WCAG21/#text-spacing) | {::nomarkdown}<ul><li><strong>Web</strong>: Supports</li> </ul>{:/} | {::nomarkdown}<ul> </ul>{:/} |
| [1.4.13 Content on Hover or Focus](https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus) | {::nomarkdown}<ul><li><strong>Web</strong>: Supports</li> </ul>{:/} | {::nomarkdown}<ul><li><strong>Web</strong>: Main menu items are &quot;hoverable&quot;. It means that when the pointer hovers a menu item with child menu, it will trigger the additional content. Also, the pointer can be moved over the additional content without the additional content disappearing.</li> </ul>{:/} |
| [2.4.5 Multiple Ways](https://www.w3.org/TR/WCAG21/#multiple-ways) | {::nomarkdown}<ul><li><strong>Web</strong>: Partially Supports</li> </ul>{:/} | {::nomarkdown}<ul><li><strong>Web</strong>: The system itself provides a sitemap in XML under the path: [domain]index.php/[journalPath]/sitemap. <br /> Also, all issues provide a table of contents for every published article. Finally, journal managers can create static pages listing links to any page as needed. </li> </ul>{:/} |
| [2.4.6 Headings and Labels](https://www.w3.org/TR/WCAG21/#headings-and-labels) | {::nomarkdown}<ul><li><strong>Web</strong>: Supports</li> </ul>{:/} | {::nomarkdown}<ul><li><strong>Web</strong>: It also relies on the content title that authors, editors, or journal managers will upload to the journal. </li> </ul>{:/} |
| [2.4.7 Focus Visible](https://www.w3.org/TR/WCAG21/#focus-visible) | {::nomarkdown}<ul><li><strong>Web</strong>: Supports</li> </ul>{:/} | {::nomarkdown}<ul> </ul>{:/} |
| [3.1.2 Language of Parts](https://www.w3.org/TR/WCAG21/#language-of-parts) | {::nomarkdown}<ul><li><strong>Web</strong>: Supports</li> </ul>{:/} | {::nomarkdown}<ul><li><strong>Web</strong>: In the latest release, this was added to the article HTML implementation, which includes support for multi-locale title fields.</li> </ul>{:/} |
| [3.2.3 Consistent Navigation](https://www.w3.org/TR/WCAG21/#consistent-navigation) | {::nomarkdown}<ul><li><strong>Web</strong>: Supports</li> </ul>{:/} | {::nomarkdown}<ul><li><strong>Web</strong>: All menus are presented in the same visual position, and tab order.</li> </ul>{:/} |
| [3.2.4 Consistent Identification](https://www.w3.org/TR/WCAG21/#consistent-identification) | {::nomarkdown}<ul><li><strong>Web</strong>: Not Applicable</li> </ul>{:/} | {::nomarkdown}<ul> </ul>{:/} |
| [3.3.3 Error Suggestion](https://www.w3.org/TR/WCAG21/#error-suggestion) | {::nomarkdown}<ul><li><strong>Web</strong>: Supports</li> </ul>{:/} | {::nomarkdown}<ul><li><strong>Web</strong>: Registering and login forms provide error suggestions after submission.</li> </ul>{:/} |
| [3.3.4 Error Prevention (Legal, Financial, Data)](https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data) | {::nomarkdown}<ul><li><strong>Web</strong>: Not Applicable</li> </ul>{:/} | {::nomarkdown}<ul><li><strong>Web</strong>: There are no financial data transaction on the public reader interface.</li> </ul>{:/} |
| [4.1.3 Status Messages](https://www.w3.org/TR/WCAG21/#status-messages) | {::nomarkdown}<ul><li><strong>Web</strong>: Not Applicable</li> </ul>{:/} | {::nomarkdown}<ul><li><strong>Web</strong>: There is not status messages in the non-authenticated sections.</li> </ul>{:/} |


## Legal Disclaimer (Public Knowledge Project, Simon Fraser University)
To the maximum extent permitted by applicable law, in no event will Simon Fraser University or any of its affiliates, or any of their respective governors, directors, employees, or agents, be liable for the failure of any content on applications implementing this theme to meet these accessibility standards, to the extent that such content was submitted or uploaded by a third party.

## Repository
[https://github.com/pkp/ojs](https://github.com/pkp/ojs)

## Feedback
[https://pkp.sfu.ca/contact-us/](https://pkp.sfu.ca/contact-us/)


## Copyright

[OpenACR](https://github.com/GSA/openacr) is a format maintained by the [GSA](https://gsa.gov/). The content is the responsibility of the author.

This content is licensed under a [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/legalcode).

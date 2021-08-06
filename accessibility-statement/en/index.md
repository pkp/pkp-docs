---
generateHeadingToc: true
---

# OJS 3.3+ Default Theme Accessibility Statement

## Introduction

The Public Knowledge Project (PKP) is committed to ensuring our platforms are as accessible as possible for all users. To achieve this, a new OJS Default Theme was developed by PKP for OJS 3.3 and higher, and was audited for accessibility barriers.

## Audit Information

An audit of the public facing OJS Default Theme on OJS version 3.3 was conducted by Access Changes Everything Inc., a Canadian digital accessibility consulting company, from July 2019 to March 2021. Access Changes Everything Inc. provided two audits using multiple automated checkers, and conducting extensive manual testing during the development process. As well, extensive auditing was conducted by paid testers with different disabilities, who used different technologies during the process; these technologies are listed below. Some of the same testers also participated in the final testing process.

This audit focused on lowering barriers on the Default Theme for people with different disabilities, such as visual, hearing, mobility, speech, communication, cognitive, neurological, intellectual, learning, and those with multiple disabilities.

### Standards Information

This audit was done using the international standard that relates to OJS Default Theme accessibility, the Web Content Accessibility Guidelines (WCAG) 2.1 and 2.2 Level AA. Note that Version 2.2 was only in Draft, as of May 2020. 

The audit went much further than WCAG 2.1 or WCAG 2.2 (Draft) Level AA. It included items that are not currently included in WCAG, such colour blindness, font type and style, and lessening barriers that impact people with cognitive, neurological, intellectual and/or learning disabilities. The audit also included usability best practices, in order to make the site more accessible and usable for everyone.

The audit included testing of these areas:

* Textual Content
* Image Content
* Video and Audio Content
* Colour in Content and Design
* Page and Content Layout
* Page and Content Design
* Navigation
* Search Functions
* Widgets and Plugins
* Forms and Error Mechanisms
* Content Structure
* HTML and CSS Code Use

### Testers and Technologies Used

Access Changes Everything Inc. paid multiple testers with different disabilities, who use different technologies, to test different parts of the Default Theme for OJS 3.3. The technologies used by testers included the newest, as well as older, versions of:

* JAWS Screen Reader in Chrome and EDGE Browsers (PC and Tablet)
* JAWS Screen Reader in Internet Explorer Browser with PacMate 20 Braille Display (PC)
* NVDA Screen Reader in Chrome Browsers (PC)
* Microsoft Narrator Screen Reader in EDGE (Tablet)
* Apple VoiceOver Screen Reader in Safari (iPhone 6)
* Apple VoiceOver Screen Reader in Safari with 40 Cell Braille Display (Mac)
* Apple VoiceOver Screen Reader in Safari with 40 Cell Braille Display (iPad Pro)
* Dragon Naturally Speaking Premium 13 (PC)
* Access Changes Everything Inc. used Mac, PC and iPhone to test the site with Chrome and Firefox browsers. 

Certain technologies were used in the audit:
* Browser magnification (100%-400%)
* Colour contrast shifting
* Voice control (iPhone only)
* Small screen (iPhone SE or 5 only)
* Various apps and plugins for Mac Chrome and Firefox to simulate visual and cognitive disabilities.

### Remediation and Remaining Barriers

Following the receipt of the full audit report in December 2019, PKP created the [Accessibility Github Project](https://github.com/pkp/pkp-lib/projects/16) to keep track of the issues and the progress towards their resolution. The project is also open for community members to file issues related to accessibility in user interface and platform functionality.

In 2021, Access Changes Everything Inc. conducted a follow-up audit of the Default theme to evaluate the remediation done by PKP developers. Most issues identified in the initial report were either resolved by PKP, or acceptable workarounds were suggested by Access Changes Everything Inc.

There remain some barriers that could not be fully eliminated. These are either being worked on by PKP or can be addressed by how OJS is used by journals:

* reCAPTCHA. When enabled on the user registration page, reCAPTCHA presents a major barrier for screen reader users with braille devices and VoiceControl users on iPhone. Additionally reCAPTCHA is missing an iFrame title and a form label, so even those screen reader users who can use it, may encounter barriers.

reCAPTCHA is a Captcha system and third party service developed by Google and integrated as an optional OJS feature which can be disabled. Alternatives exist, such as the [OJS Honeypot plugin](https://github.com/ulsdevteam/pkp-formHoneypot).
* Content. Website content and published content created in a manner non-compliant with accessibility standards can present barriers for users. This may include, but not limited to: images uploaded with no alternative text, improperly structured headings, inaccessible hyperlinks, missing figures caption, and incorrect or incomplete data table structure. While these are out of scope for the Default Accessible Theme, PKP provides guidance for editors on 
[Creating Accessible Content](https://docs.pkp.sfu.ca/accessible-content/).
* Remaining barriers. The other remaining barriers are listed in the 
[PKP Accessibility Github Project](https://github.com/pkp/pkp-lib/projects/16) that will continue to be updated as barriers are resolved.

## Contact Us

The OJS Default Theme audit found many barriers, and most of these have been eliminated. However, the theme will be constantly updated, and new barriers may unknowingly be created. If you encounter barriers, or need accommodations, please report them to us via the [PKP web contact form](https://pkp.sfu.ca/contact-us/).

## Legal Disclaimer

To the maximum extent permitted by applicable law, in no event will Simon Fraser University or any of its affiliates, or any of their respective governors, directors, employees, or agents, be liable for the failure of any content on applications implementing this theme to meet these accessibility standards, to the extent that such content was submitted or uploaded by a third party.

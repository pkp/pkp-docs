---
book: translating-guide
version: 3.1
---

## XML files

### Finding the Files to Translate

You can browse the XML files by downloading the latest version of OJS, OMP, or OCS to a computer (which doesn't have to be a webserver: this can be on your desktop).

You will require software such as 7-Zip to decompress the downloaded file (e.g., ojs-3.1.2.tar.gz).

Opening the downloaded file with your decompression software will create a directory on your computer based on the downloaded file (e.g., ojs). Within this directory you will find the following list of subdirectories, where the XML files needing translation are located (en\_US is both systems' default language, and by that nature always the most complete; we'll use it as the starting language for a translation):

-   locale/en\_US: This directory contains a number of locale files, including the emailTemplates.xml locale file. All files should be translated.
-   lib/pkp/locale/en\_US: This directory contains locale files with keys that apply to our entire PKP suite of applications. All files should be translated. It may be that a translator for another application has already translated these files for you; ensure that you check whether these files already exist for the locale you are working on.
-   help/en\_US: *(OJS 2.x only)* This directory contains the help files for OJS.
-   rt/en\_US: *(OJS 2.x only)* This directory contains the Reading Tools.
-   plugins/\[plugin category\]/\[plugin name\]/locale, where applicable: These directories contain plugin-specific locale strings.


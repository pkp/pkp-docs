---
book: crossref-ojs-manual
version: 3.2
---

# Similarity Check

OJS 3.1.2 includes support for iThenticate plagiarism check the Crossref Similarity Check service.

[https://github.com/asmecher/plagiarism](https://github.com/asmecher/plagiarism)

To use this plugin you need to register for an iThenticate account and purchase credits.

The next step is to installing and enabling the plugin # Login as a Journal Manager or Editor Click Settings > Website Click Plugins Click the submenu item Plugin Gallery Find the plugin labelled “iThenticate” and click the title Install the plugin by clicking Install

Next, for this plugin to work, _the following must be added to your config.inc.php file_:

```
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; iThenticate Plugin Settings ;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

[ithenticate]

; Enable iThenticate to submit manuscripts after submit step 4
ithenticate = On

; The username to access the API (usually an email address)
username = "user@email.com"

; The password to access the API
password = "password"
```

Now you can enable the plugin: Go back to Settings > Website > Plugins Find the iThenticate plugin Click the check box next to it to enable it

Additionally, OJS automatically includes the Similarity Check URL as part of your deposit.

For more information on Similarity Check, please visit the [Crossref website](https://www.crossref.org/education/similarity-check/) and [see the Similarity Check User Guide](https://www.crossref.org/pdfs/similarity-check-user-guide-aug19.pdf).

For assistance with technical issue (such as an error message or a bug), please contact the Turnitin team directly at [ccsupport@ithenticate.com](ccsupport@ithenticate.com)

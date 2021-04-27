---
book: crossref-ojs-manual
version: 3.1
---

# Similarity Check

OJS 3.1.2 includes support for iThenticate plagiarism check the Crossref Similarity Check service.

[https://github.com/asmecher/plagiarism](https://github.com/asmecher/plagiarism)

For this plugin to work, _the following must be added to your config.inc.php file_:

````
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
````

Additionally, SimCheck full-text urls will be provided to Crossref as part of the DOI submission process automatically.

## Installing and Enabling the Plugin

1. Navigate to the user **dashboard**.
2. Click **settings**.
3. Click **plugins**.
4. Click the submenu item **plugin gallery**.
5. Find the plugin labelled "iThenticate" and click the title.
6. Install the plugin by clicking "install".
7. Once you get a notification that the plugin is installed, click the submenu item **plugins**.
8. Locate the iThenticate Plugin and click the blue checkbox on the right to enable it.

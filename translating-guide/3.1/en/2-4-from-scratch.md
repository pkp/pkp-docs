---
book: translating-guide
version: 3.1
---

## Starting a Translation From Scratch

Using the Translation plugin to start a translation from scratch is a little more involved than editing an incomplete, installed translation. You'll need to manually create and upload the main locale files (`locales/[your_LANG]/*.xml` and `lib/pkp/locales/[your_LANG]/*.xml`), and enter your new language into `registry/locales.xml`, after which your language will appear in the list of editable translations when you visit the Translator plugin. Once this is done you can add new locale files as per the above instructions, and you'll even be able to edit the above two files.

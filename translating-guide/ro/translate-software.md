---
book: translating-guide
version: 3.2
---

# Translate PKP Software

Starting with OJS/OMP 3.2, we are using the web-based translation tool [Weblate](https://weblate.org) to manage translations of OJS and OMP.

This means we have moved away from using XML files, and are instead using ["monolingual"](https://docs.weblate.org/en/latest/formats.html) PO files. These two file formats look a little different but support the same information. For example, here is an [XML file](https://github.com/pkp/pkp-lib/blob/stable-3_1_2/locale/en_US/common.xml) and a [PO file](https://github.com/pkp/pkp-lib/blob/main/locale/en_US/common.po).

PO files are used by many thousands of software projects worldwide to manage translations. There are good-quality third-party tools for working with these. We have chosen Weblate, which supports web-based translation. This will replace our [Translator plugin](https://github.com/pkp/translator/).

(If you want to use another translation tool, please go ahead — but please check with us first to make sure you coordinate your work with other translators, and that the tool you choose supports monolingual PO files.)

## Get Started

So you want to translate OJS or OMP into another language! The PKP community depends on volunteer efforts to keep the system working well in many languages and we appreciate your help.

PKP hosts an installation of Weblate for our translator community to use. It is available at [https://translate.pkp.sfu.ca](https://translate.pkp.sfu.ca).

Begin by [registering for an account](https://translate.pkp.sfu.ca).

Once you have registered and logged in, go to “Browse All Projects.” You will see a list of projects at the Weblate site:

![](./assets/translating-guide-weblate-projects.png)

## How Content is Organized in Weblate

Content is organized into **Projects**, **Components**, and **Strings**.

The most important projects are:
* PKP Web Application Library: A shared library included in both OMP and OJS.
* Open Journal Systems
* Open Monograph Press

There will be other projects, for example for commonly-used plugins.

If you are translating Open Journal Systems, then you will **need** to work with both “Open Journal Systems” and “PKP Web Application Library” projects.

Inside each **Project**, you may see many **Components**. Each file corresponds to a single .po file, which contains a set of translations of some aspect of the system. For example, for the “Open Journal Systems” project:

![](./assets/translating-guide-weblate-components.png)

The component name gives you some information about the context where those strings will be used. For example, “admin” relates to the site administration interface; “blocks-information” relates to the information block plugin. (You can get more context by looking at the strings in the component.)

For a complete translation of the “Open Journal Systems” project, **all** of the components must be completely translated. However, it’ll be possible to use the system without a 100% complete translation — certain parts will simply not be fully translated. (In place of the missing translations, you will see codes like `##author.submit.nextSteps##` where the translated text would appear.)

Inside each **component**, you will see numerous **strings**. These are the actual pieces of the application that will need to be translated:

![](./assets/translating-guide-weblate-strings.png)

## Update an Existing Translation

Once you have registered for an account and gotten access to the projects (see above), decide which projects you want to work on. See the previous section for information on which projects will be important to your work.

For each project, click the project’s name to get a list of components. **All of these components will be important to translate**, although the system will still be usable if a few are missing.

Click on a component’s title to get started. You should see a list of languages along with an indication of the translation’s completeness:

![](./assets/translating-guide-weblate-update-translation.png)

To begin working, click the Translate button next to your language. (If your language is not listed, see the next section **Begin a new translation**.)

Weblate will automatically step you through each of the each string that needs to be checked, corrected, or translated:

![](./assets/translating-guide-weblate-translate-string.png)

When you have finished translating the remaining strings for this component, continue to the next.

When all components are finished, please contact [Alec Smecher](mailto:alec@smecher.bc.ca) with the good news!

## Begin a New Translation

To begin a new translation, please create an account by following the instructions above. Be sure to specify that you want to start a new translation; this will take a little bit of set-up. When you receive confirmation that everything is ready, follow the instructions in **Update an Existing Translation** — the only difference will be that you will start with empty translation files.

### Use Your New Translation

To learn how to use the new language you have translated the software into on your installation, see [the Install a Language instructions in this guide](./managing-languages.md#install-a-language).


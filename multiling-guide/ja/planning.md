---
title: Strategy & Planning - Using PKP Software in Multiple Languages
showPageTOC: true
---

# Strategy & Planning

Think carefully about how you want to use and set up languages when you first start using OJS, OMP, or OPS. Knowing which areas of your journal are intended to be multilingual will allow you to write clear guidelines for authors and editors for entering multilingual metadata or making multilingual submissions, as well as prepare translations for basic journal information such as submission guidelines, journal descriptions, privacy policies, etc.

This section outlines possible ways to use multiple languages in your publishing workflow and some things to decide before you install and set up OJS, OMP, or OPS.

## Initial considerations

Here are some considerations that may be important for your journal before you fully launch your publication system.

### Published content language options in PKP software

PKP software provides several options for dealing with content language. Consider which approach or combination of approaches might work best for your journal:

-   Publishing articles in several languages without providing translations - for example, your journal may accept manuscripts in English and Spanish with the expectation that readers will either be fluent in both languages or willing to use translation tools.

-   Publishing articles with translations into other languages - where some or all articles, regardless of the article’s original language, will contain multiple galleys in different languages.

-   Publishing in a single language  but making the site interface available in multiple languages using locales (translated versions of the software’s user interface).


### Checking the availability/completeness of the translation

Part of setting up your journal, press, or server is deciding which languages you will use and ensuring that translations are available for the language. The [PKP Translating Guide](https://docs.pkp.sfu.ca/translating-guide/en/) has in-depth instructions on how to check for available languages and update or create a translation.

It is strongly recommended that you work with as complete of a translation as possible to minimize errors, unexpected displays, or other disruptions for your site.

If a translation is incomplete or you want to use a language that OJS, OMP, or OPS has not been translated into yet, consider contributing to the translation, as all translations are developed and maintained by community members. Please refer to the [PKP Translating Guide](https://docs.pkp.sfu.ca/translating-guide/en/) for more information on creating and developing translations.

If you enable a language on your site for which a translation is incomplete, you will see untranslated message keys or locale strings like ##plugins.block.browse##. To instead display the original English text until the translation is complete and available, you can use the [Default Translation Plugin](https://docs.pkp.sfu.ca/translating-guide/en/managing-languages#default-translation-plugin).


### Choosing a domain for a bilingual/multilingual journal

It is not recommended to separate domains with journal’s name/abbreviation in different languages. There is no way to point English domain to the English locale and French domain to the French locale, for example, since language toggle is performed via cookies rather than by generating a language-specific URL.

It is advised that bilingual journals get a single domain that would point to a single locale and allow users to toggle to their preferred language. (For example, a bilingual journal titled Assurances et gestion des risques (AGR) in English and Insurance and Risk Management (IRM) in French may include both acronyms in their URL - agr-irm.ca. This URL may point to the English site, but French users will be able to change to the French interface.)

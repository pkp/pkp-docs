---
book: crossref-ojs-manual
version: 3.1
---

# Getting Started with DOIs

DOI stands for Digital Object Identifier. DOIs are what is known as "persistent identifiers" or PIDs. A DOI links persistently to a publication so that – provided it is kept up to date – any link or reference to it should take a user to where the article currently resides online. They are useful for citation metrics, but also as a way to prevent or combat dead links. They make content easier to locate.

> [A DOI is] a unique alphanumeric string assigned to a digital object – in this case, an electronic journal article or a book chapter. In the Crossref system, each DOI is associated with a set of basic metadata and a URL pointer to the full text, so that it uniquely identifies the content item and provides a persistent link to its location on the internet.
> 
> For more information on the DOI itself, which is a NISO standard syntax, please visit the International DOI Foundation website at www.doi.org. For details on the use of the DOI within Crossref, please see the "How Crossref Works" page.
> 
> See more at [http://www.crossref.org/about/](http://www.crossref.org/about/)

The key to this statement is that a DOI is _unique_. Any article should only have one unique combination of a DOI prefix and suffix. Articles should also, ideally, only have one DOI each.

## First Steps

To use DOIs for your publication, you'll need to meet the following requirements:

- one issue of your journal must be published;
- you must have an ISSN;
- you need a membership with Crossref, Datacite, or some other DOI registration agency;
- you must configure OJS to use DOIs;
    - you'll need to have filled out specific title-level metadata about your journal, and;
    - you'll need to have configured the DOI plugin.

Let's break these steps down one by one.

**One Issue of your journal must be published** – You'll need to have one existing issue of your journal to acquire a Crossref membership.  However, you'll also need an ISSN and, as luck has it, having a published issue is a requirement for an ISSN as well.

**An ISSN must be assigned to your journal** – Once you've published an issue, you can apply for an ISSN. ISSNs are identifiers used to distinguish and locate specific journal titles. You can find out more about acquiring an ISSN at issn.org.

**Registering with a DOI Registration Agency** – Creating/"minting" a DOI is easy. However, for that DOI to be useful, it has to be registered through an agency who manages the linking service and handle metadata exchanges. This guide is specific to Crossref, but there are other DOI services available such as Datacite and mEDRA (you can see a list of approved agencies at [doi.org](https://www.doi.org/registration_agencies.html)).

## Configuring the DOI plugin for OJS

1. Ensure that all title-level metadata has been properly filled out. The DOI plugin requires the following metadata found in your journal's dashboard **Settings** > **Journal**:
    - Journal Title
    - Journal Initials
    - Journal Abbreviation
    - Journal ISSN (or electronic ISSN)
    - Principal Contact (name and email)
    - Technical Support Contact (name and email)
    - Publisher (Institution and URL)
2. Enable and configure the "DOI" public identifier plugin at **Settings** > **Website** > **Plugins** > **DOI Plugin** (under the section "public identifier plugins").
    - First, **Enable** the plugin by checking the box to the right of it; then configure the plugin by clicking its **Settings** link.
    - For plugin settings, ensure that you have only _Articles_ checked for depositing journal content.
    - You must include a DOI prefix which you get from Crossref and additionally must configure the DOI suffix. We **strongly recommend** using the default patterns if you are a new journal and have not previously had DOIs issued.
3. Assign DOIs.
    - At the bottom of this page, you'll see two links for assigning DOIs en masse. One is "assign DOIs," which makes DOIs using the suffix pattern you set above. It assigns a DOI to anything that does not already have one.
    - You'll also see one that says, "re-assign DOIs." **_Only click this if you have not registered any of your DOIs and made an error in prior suffix generation_**.
    - If you chose to assign DOIs manually as you publish, you could select that from the DOI Suffix options. Using this method, OJS does not create a DOI suffix automatically. Instead, you enter DOIs as part of article metadata.

## Additional Resources

- [The DOI Handbook @ doi.org](https://www.doi.org/hb.html) – The DOI Handbook is a comprehensive guide to DOIs and their usage and is available in several languages.
- [Crossref Curriculum](https://www.crossref.org/education/)
- [Crossref Blog: URLs and DOIs, a complicated relationship](https://www.crossref.org/blog/urls-and-dois-a-complicated-relationship/) – A blog post from Crossref's Joe Wass that explains the difference between URLs and DOIs.

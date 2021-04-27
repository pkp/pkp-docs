---
book: crossref-ojs-manual
version: 3.2
---

# Crossmark

Crossmark gives Crossref members the ability to add a clickable widget to their content to show readers if it’s been updated, corrected, or retracted. This shows researchers and journal readers that they are committed to maintaining their content as well as giving researchers the information they need to check that they are using the most recent and reliable versions of a work.

As mentioned, while there is no plugin currently available for Crossmark it can still be used with a few modifications. This section outlines the steps to get this service setup for your journal and provides references on how other users have made these modifications.

_Note: The new versioning feature in OJS 3.2 may impact this, please see the [Production and Publication chapter](https://docs.pkp.sfu.ca/learning-ojs/en/production-publication#versioning-of-articles) of Learning OJS 3 to learn more about versioning._

The minimum requirement for Crossmark metadata is:

- the DOI for the publisher’s [Crossmark policy page](https://www.crossref.org/education/crossmark/crossmark-policy-page/)
- the DOI for the content it is being applied to

Crossmark is a button and set of metadata that informs readers about changes to following:

- Publication status (current, updated, retracted):
- Funding information
- Author’s ORCIDs information
- Publication history
- Rights or licensing
- And much more

The Crossmark button should be consistently applied to all content - not just one that has been updated as there is no way of knowing if it will need to be updated in the future.

There are two categories of updates, minor and major changes.

**Minor changes** include correcting formatting and spelling. Any change that would not affect the crediting and interpretation of work. For these, the Crossmark status should remain current.

**Major changes** if there are substantial changes that affect the crediting or interpretation of work. This could be a retraction due to an error or correction to an author's name. For these, changes should be reflected in the Crossmark status.

While OJS currently does not provide Crossmark support, we do have plans to do so in the future. Users wishing to use Crossmark are able to do so by referring to the simplified steps below. For full details please see the [Crossref Guide](https://www.crossref.org/get-started/crossmark/)

## Setup

**Step 1: Create a Crossmark Policy Page and assign it a DOI**

Your Crossmark Policy page should include a brief explanation of Crossmark and provide links within your site regarding corrections and retractions. You must also assign a DOI for persistent linking for this policy page. As this is not supported by the Crossref Plugin, this will need to be deposited manually. Crossmark policy pages should be deposited through [the Web Deposit form](https://apps.crossref.org/webDeposit/) as datasets with a “database” called “PublisherName Crossmark Policy Statement.” If you have multiple policy pages (for example, different policy pages for different journals) you should include them in the database deposit as multiple datasets.

For more information information on creating a Crossref Policy, see the [Crossmark Policy Page](https://www.crossref.org/education/crossmark/crossmark-policy-page/)

**Step 2: Deposit Crossmark Metadata**

As a best practice and for most users, this would be done with the general deposit to Crossref for new publication and updates.

Again, you will need to deposit the following: new content, updated content, Crossmark policy page.

It is also encouraged that you deposit additional metadata when possible, which may include funding data, licensing information, ORCID IDs, Clinical trial numbers, and any additional custom metadata such as publication history, similarity check deposit, and much more.

Some additional information may not be included in the Crossref XML export at this time. To see how other users have made code modification to export this additional information, please see the following forum posts.

[Licensing Information](https://forum.pkp.sfu.ca/t/crossmark-support/1375/5)

**Step 3: Add Crossref DOI to HTML pages and PDF**

The metadata DOI should be added within the HTML header. This may already be added if using other metadata plugins.

```html
<meta name=”dc.identifier” content =”10.3333/1212212”>
```

Crossmark metadata also needs to be added to your PDF content. Minimally, this metadata must include the DOI of the content and the optional Crossmark domain(s). The link structure for the PDF should look like this:

`https://crossmark.crossref.org/dialog/?doi=10.5555/12345678&domain=pdf&date_stamp=2017-01-14`

where:

- *doi* is the DOI of the content item
- *domain* tells the Crossmark system what kind of static content the link is coming from, and will change for different static formats (such as epub)
- *date_stamp* tells the Crossmark system the date on which a last Major Version of the PDF was generated. In most cases, this will be the date the article was published. However, when a member makes significant corrections to a PDF in-situ (no notice issued, and no new version of the work with a new DOI) then the *date_stamp* should reflect when the PDF was regenerated with the corrections. The system will then use the *date_stamp* in order to tell whether the reader needs to be alerted to updates or not. The *date_stamp* argument should be recorded in the form YYYY-MM-DD (learn more about ISO 8601).

**Step 4: Apply crossmark button**

The HTML code for the crossmark button will need to be added to the article landing page. To do so, you’ll need to insert that piece of code in the appropriate OJS template. Some users have added this code to the theme template.

HTML code:

```html
<!-- Start Crossmark Snippet v2.0 -->

<script src="https://crossmark-cdn.crossref.org/widget/v2.0/widget.js"></script>
<a data-target="crossmark"><img src="https://crossmark-cdn.crossref.org/widget/v2.0/logos/CROSSMARK_BW_horizontal.svg" width="150" /></a>

<!-- End Crossmark Snippet -->
```

For information on best practices for the Crossmark button, see [https://www.crossref.org/education/crossmark/crossmark-button-guidelines/](https://www.crossref.org/education/crossmark/crossmark-button-guidelines/)

For help modifying the theme please see the [PKP forum](http://forum.pkp.sfu.ca/).

## Additional Information

It is good practice to publish a notice of correction or retraction (with its own DOI) and not put it behind access control. This allows readers to follow the link in the Crossmark button and find further details about the update.

- Types of Updates
- Addendum
- Clarification
- Correction
- Corrigendum
- Erratum
- Expression_of_concern
- New_edition
- New_version
- Partial_retraction
- Removal
- Retraction
- Withdrawal

## Resources

- [The Crossref Curriculum](https://www.crossref.org/education/crossmark/participating-in-crossmark/)
- [Crossmark Presentation](https://www.youtube.com/watch?v=em0IVJf-UNo)

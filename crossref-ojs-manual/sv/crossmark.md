---
book: crossref-ojs-manual
version: 3.2
---

# Crossmark

Crossmark ger Crossref-medlemmar möjligheten att lägga till en klickbar "widget" till sitt innehåll som visar läsare om det har uppdaterats, korrigerats eller dragits tillbaka. Detta visar forksare och tidskriftsläsare att de bryr sig om att underhålla sitt innehåll liksom att det ger forskare den information de behöver för att säkerställa att de använder de senaste och mest pålitliga versionerna av ett verk.

Som sagts, även om det inte finns någon plugin för Crossmark, så kan denna plugin användes med några mindre förändringar. Det här avsnittet visar de steg som behövs för att få det att fungera för din tidskrift och ger referenser till hur andra användare har gjort sina förändringar.

_Notera: Den nya versionsfunktionaliteten i OJS 3.2 kan påverka detta. Se vänligen kapitlet [Production and Publication](https://docs.pkp.sfu.ca/learning-ojs/en/production-publication#versioning-of-articles) i Learning OJS 3 för att lära dig mer om versionering._

Minimikravet för Crossmark-metadata är:

- DOI för utgivarens [sida med Crossmark policy](https://www.crossref.org/education/crossmark/crossmark-policy-page/)
- DOI för det innehåll som det angår

Crossmark är en knapp och en uppsättning metadata som informerar läsare om förändringar angående följande:

- Publiceringsstatus (senaste, uppdaterad, tillbakadragen):
- Finansiärsinformation
- Författarens ORCID-information
- Publikationshistorik
- Rättigheter eller licenser
- Och mycket mer

Crossmark-knappen bör användas genomgående på allt innehåll - inte bara på någon som uppdaterats eftersom det inte finns något sätt att veta om det behöver uppdateras i framtiden.

Det finns två uppdateringskategorier, mindre och större ändringar.

**Mindre ändringar** innebär korrigering av formattering och stavning. Sådana ändringar som inte påverkar hur verket tillskrivs eller tolkas. För dessa ändringar bör Crossmark-status fortsatt vara den senaste versionen.

**Större ändringar** om det är betydande ändringar som påverkar tolkning och tillskrivning av verket. Detta kan vara att dra tillbaka en artikel på grund av ett fel eller korrigering av en författares namn. Dessa förändringar bör reflekteras i Crossmark-status.

Även om OJS för närvarande inte har stöd för Crossmark så planerar vi detta för framtiden. Users wishing to use Crossmark are able to do so by referring to the simplified steps below. For full details please see the [Crossref Guide](https://www.crossref.org/get-started/crossmark/)

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

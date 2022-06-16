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

Även om OJS för närvarande inte har stöd för Crossmark så planerar vi detta för framtiden. Users wishing to use Crossmark are able to do so by referring to the simplified steps below. Vänligen se [Crossref Guide](https://www.crossref.org/get-started/crossmark/) för alla detaljer

## Inställningar

**Steg 1: Skapa en policysida för Crossmark och ge den en DOI**

Din policysida för Crossmark bör inkludera en kort förklaring av Crossmark och förse läsaren med länkar på din webbplats om korrigeringar och tillbakadragande av artiklar. Du måste också ge denna policysida en DOI för att länken ska vara beständig.  Eftersom detta inte stöds av Crossref plugin så måste denna deponeras manuellt. Policysidor för Crossmark bör deponeras genom [Web Deposit form](https://apps.crossref.org/webDeposit/) som dataset med en "database" som kallas "PublisherName Crossmark Policy Statement." Om du har flera policysidor (till exempel olika policysidor för olika tidskrifter) så bör du inkludera dem i din databasdeponering som multipla dataset.

För mer information om hur man skapar en Crossmark Policy, se [Crossmark Policy Page](https://www.crossref.org/education/crossmark/crossmark-policy-page/)

**Steg 2: Deponera Crossmark-metadata**

För de flesta användare bör detta bäst göras med den allmänna deponeringen till Crossref för nya publikationer och uppdateringar.

Återigen, du behöver deponera följande: nytt innehåll, uppdaterat innehåll, policysida för Crossmark.

Det uppmuntras också att du deponerar ytterligare metadata när det är möjligt, såsom finansiärsdata, licensinformation, ORCID-id:n, kliniska prövningsnummer och andra anpassad metadata såsom publiceringshistorik, och mycket mer.

Viss ytterligare information kan möjligen inte inkluderas i Crossrefs XML-export för närvarande. Se följande inlägg i forumet för att se hur andra användare har gjort kodförändringar för att exportera denna ytterligare information.

[Licensinformation](https://forum.pkp.sfu.ca/t/crossmark-support/1375/5)

**Steg 3: Lägg till Crossref DOI till HTML-sidor och PDF**

Metadata-DOI bör läggas till inom HTML-dokumentets huvud. Detta kanske redan läggs till om andra metadata plugins används.

```html
<meta name=”dc.identifier” content =”10.3333/1212212”>
```

Crossmark-metadata behöver också läggas till i ditt PDF-dokument. Så minst behöver denna metadata inkludera DOI för innehållet och Crossmark-domänen. Länkstrukturen för PDF:en bör se ut så här:

`https://crossmark.crossref.org/dialog/?doi=10.5555/12345678&domain=pdf&date_stamp=2017-01-14`

där:

- *doi* är DOI för innehållet
- *domain* berättar för Crossmark-systemet vilken slags statiskt innehåll som länken kommer ifrån, och kommer att bytas for olika statiska format (såsom epub)
- *date_stamp* berättar för Crossmark-systemet om det datum som en "Major Version" av PDF:n skapades. I de flesta fallen kommer detta vara datumet som artikeln publicerades. Dock, när en medlem gör betydande korrigeringar i en PDF på plats (ingen anmärkning införd, och ingen ny version av verket med en ny DOI) då borde *date_stamp* refleketera när PDF:n skapades med korrigeringarna. The system will then use the *date_stamp* in order to tell whether the reader needs to be alerted to updates or not. The *date_stamp* argument should be recorded in the form YYYY-MM-DD (learn more about ISO 8601).

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

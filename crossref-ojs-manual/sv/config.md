---
book: crossref-ojs-manual
version: 3.2
---

# Crossref XML Export Plugin (OJS 3.2+)

Crossref XML Export Plugin kan deponera DOI:er till Crossref för registrering på flera sätt:

- automatiskt, när innehållet publiceras;
- manuellt, från plugingränssnittet;
- manuellt, via Crossref XML Export och ladda upp via Crossrefs administrationsverktyg hos doi.crossref.org.

Automatisk deponering kan konfigureras för att strömilinjeforma processen efter publicering.

Manuell deponering från plugingränssnittet kan användas för att välja vilket innehåll som ska deponeras till Crossref. Till exempel om du har gjort mindre ändringar i metadata efter inskickandet. Det kan också vara till hjälp om du märker att den automatiska deponering tar längre tid än vanligt att behandlas.

Manuell deponering genom att använda Crossref XML export och administrationsverktyg kan användas om du vill lägga till ytterligare metadata, såsom licensinformation som inte deponeras genom Crossref XML plugin.

Du kan också registrera ditt innehåll hos Crossref helt utanför OJS genom att använda Crossrefs Web Deposit Form, men denna plugin hjälper dig att slippa föra in metdata för hand. Du hittar Crossref plugin från din instrumentbräda genom att gå till **Tools> Import/Export > Crossref XML Export Plugin**.

Det här är Crossref XML Export Plugin i OJS 3.2+:

![OJS 3 Crossref XML Export Plugin: settings tab screen.](./assets/crossref3.2-plugin.png)

## Ställa in Crossref Plugin

1. Fill out the name and email of the depositor. This name does not have to be the contact that orchestrated the Crossref membership. Det kan vara en teknisk kontaktperson. Det är bara det namn som bifogas till den metadata som skickas till Crossref. Dessa är obligatoriska fält.
2. Fyll i användarnamn och lösenord som du har fått från Crossref när du blev medlem. Dessa används för att registrera innehåll direkt från denna plugin. (_Please note: if your browser automatically fills in passwords in OJS, it may populate these fields with your OJS username and password when you load this page. Se till att inte skriva över dina Crossref-uppgifter med ditt OJS-lösenord. Då misslyckas denna plugin._)

## Automatisk deponering

För att slå på automatisk deponering, fyll i rutan på sidan för insttälningar.

![Inställningar för OJS 3 Crossref XML Export plugin: kryssruta för automatisk deponering.](./assets/autoDeposit-02.png)

OJS deponerar tillskrivna DOI:er när innehåll publiceras i din tidskrift. OJS gör detta med särskilda tidsintervall. Om dina DOI:er inte verkar registreras direkt efter publicering så kan du vänta en dag för att se om de tar sig igenom OJS-processen och kön hos Crossref. Du kan också kolla status för din DOI genom att klicka "Articles"-fliken högst upp på sidan för Crossref plugin. Du ser en kolumn för status på höger sida.

## Manuell deponering

Manuell deponering är alltid påslagen i OJS 3.2+.

1. Gå till Crossref XML Export Plugin
2. Clicka på underrubriken "Articles".
3. Klicka på kryssrutan bredvid de artiklar du vill deponera.
   - Om du vill deponera specifika nummer, använd sökfunktionen i det övre högre hörnet av pluginfönstret för att filtrera vilka artiklar som visas.
4. Scrolla till slutet av sidan och klicka på "*deposit*"-knappen.

![Inställningar för OJS 3 Crossref XML Export plugin: Articles tab skärm.](./assets/crossref3.2-exportplugin.png)

Om *Validate XML* är förbockat kommer din validerade XML bekräftas innan den skickas till Crossref. Det varnas för potentiella problem med registreringen. Det är dock inte lämpligt för större deponeringar och kan time out. Det används bäst för att felsöka mindre deponeringar.

*Mark Active* flaggar en DOI som inskickad. Använd detta om du redan har registrerat en DOI utanför denna plugin och vill indikera detta.

### XML-deponering

*Export XML* laddar ned XML som genererats av denna plugin enligt Crossref XML Schema. Fyll helt enkelt i checkrutorna bredvid de artiklar du vill deponera och exportera sedan. När du väl har XML-filen kan du skicka in den via Crossref admin tool på [https://doi.crossref.org](https://doi.crossref.org).

## Uppdatera DOI:er

Varje gång du ändrar metadata för en artikel så **bör du uppdatera den metadata som finns för din DOI** registrerad hos Crossref. Uppdateringar sker inte automatiskt. För att uppdatera:

1. Gå till Crossref XML Export Plugin
2. Klicka på underrubriken "Articles".
3. Klicka på kryssutan bredvid den artikel som har uppdaterad metadata.
4. Scrolla till slutet av sidan och klicka på "deposit"-knappen.

_Crossref tar inte betalt för att uppdatera metadata._

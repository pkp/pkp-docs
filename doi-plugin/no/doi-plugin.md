# DOI Plugin

Dette programtillegget (plugin) tildeler DOI (Digital Object Identifier) til publikasjoner. Det kan konfigureres til å tildele DOI automatisk eller manuelt. Tillegget vil også genere og vise DOI på publikasjonens forside.

Tillegget er inkludert i versjonene OJS 2.4.x og 3.x, OPS 3.x, og OMP 3.x.

## Aktivering av DOI Plugin

Aktivering av tillegget i OJS, OMP og OPS 3.x fungerer på samme måte.

1. Forsikre deg om at du har rollen Journal Manager. Gå til Settings > Website > Plugins
2. Under Installed Plugins > Public Identifier Plugins, finn DOI
3. Kryss av i boksen til høyre for beskrivelsen av DOI Plugin for å aktivere tillegget

## Konfigurering av DOI Plugin

Etter aktivering av tillegget vil en lenke til Settings vise på skjermen.  Du må kanskje klikke den blå pilen ved siden av tilleggets navn for å få denne lenken til å vise.

Velg Settings. Noe som ser ut som dette skjemaet vil vise, med noen variasjoner avhengig av versjon og plattform.

![Lenke til innstillinger for OJS 3.3 DOI plugin.](assets/settings-testdrive.png)

La oss gå gjennom disse innstillingene.

### Content

Her kan du velge hvilke typer publikasjoner du vil at DOI skal aktiveres for. Å velge en publikasjonstype her betyr ikke nødvendigvis at alle publikasjoner av denne typen vil få en DOI. Avhengig av hvilken type DOI suffix du har valgt kan du selv manuelt tildele DOI dersom du ønsker det.

_Anbefaling_: Gjør ting enklest mulig! Med mindre du jobber med en veldig spesiell publikasjon er det vanligvis best å kun tildele DOI på grunnleggene nivå, f. eks. artikkel eller bok.

### DOI Prefix

DOI Prefix er obligatorisk. Du vil motta din institusjons prefix fra der institusjonen får DOI, f.eks. Crossref eller lignende organisasjoner Prosessen for å søke om dette vil sannsynligvis være beskrevet på organisasjonens nettside.

### DOI Suffix

Suffix for DOI kan settes opp på flere måter. Det er enkelte ting du bør være oppmerksom på når du velger hvordan suffix skal genereres for publikasjonene i ditt arkiv.

**Default Patterns**: Dersom du velger standard oppsett for generering vil DOI bli tildelt alle publikasjoner. Du vil ha muligheten til å se hvordan DOI vil bli _før publisering_, dersom du ønsker å få DOI med i galley.

**Individual DOI suffix**: Bruk kun dette alternativet dersom ingen andre måter å generere suffix på fyller dine behov, f.eks. dersom din organisasjon har regler for DOI suffix som ikke kan implementeres på standard måte, eller dersom du ønsker å selv generere DOI for alle publikasjoner.

**Custom Patterns**. Dersom du velger dette alternativet er du selv ansvalrig for å lage et oppsett som genererer unike suffix til dine DOI. Du må oppgi en kombinasjon av tidsskriftets tittel, nummer og andre opplysninger som sikrer at DOI ikke vil bli duplisert. F. eks kan et suffix for galley som ikke inneholder et tidsskrifts unike informasjon bli duplisert til flere tidsskrifter hvis de bruker samme prefix. Det samme kan skje dersom du genererer DOI for artikler og nummer uten å bruke nummerets ID i artikkelens suffix (f.eks. når du genererer DOI for nummeret med intern ID 1 og artikkelen med intern ID 1). Se under standard oppsett for eksempler.

_Anbefaling 1_ // Les [Crossref's guide to constructing your DOIs](https://www.crossref.org/documentation/member-setup/constructing-your-dois/).

_Anbefaling2_ // Husk at DOI-er først og fremst er vment å være maskinlesbare! Det kan være fristende å generere et suffix som gir mye informasjon til leseren, men en oppdatert DOI skal først og fremst ta deg dit du ønsker, der du vil finne alle relevante metadata om publikasjonen. En DOI med lite informasjon om publikasjonen fungerer akkurat like bra som en DOI med mye informasjon som kan brukes i en referanse. Jo mindre mulighet du gir for å skrive en DOI på feil måte jo bedre, fordi en DOI _ kan ikke endres når den først er registrert!_ Gjør den derfor så enkel som mulig, med færrest mulig tegn.

_Anbefaling 3_ // Bruk standard oppsett dersom du ønsker automatisert tildeling av DOI.

### Reassign DOIs

> Denne funksjonen er ikke tilgjengelig i alle versjoner av DOI Plugin

Knappen **Reassign DOIs** sletter alle tildelte DOI, med unntak av de du har tildelt manuelt. Dette regnes som en avansert funksjon. _Bruk den derfor med forsiktighet, og vær sikker på at du har full oversikt over konsekvensene ved bruk!_ Prøv den aller helst først ut i en testversjon av systemet, dersom du har det tilgjengelig. Alle DOI vil be generert på ny, basert på oppsettet du har valgt. Det betyr at hvis du endrer dette oppsettet etter at DOI er generert vil disse DOI-ene forsvinne, og publikasjonene vil motta en helt ny DOI. Dette bør i de fleste tilfeller unngås, da det betyr at samme publikasjon registreres med to DOI, noe som er i strid med hele hensikten med DOI. In any case you should make a **database backup** before you delete all assigned DOIs.

### Assign DOIs

> Does not appear in all versions of the DOI Plugin

**Assign DOIs** will, when clicked, assign a DOI to any published material using the chosen suffix pattern. This is a good way to catch any DOIs you may have missed, or to assign DOIs to a newly-uploaded back-issue.

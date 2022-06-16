# DOI Plugin

Dette programtillegget (plugin) tildeler DOI (Digital Object Identifier) til publikasjoner. Det kan konfigureres til å tildele DOI automatisk eller manuelt. Tillegget vil også genere og vise DOI på publikasjonens forside.

Tillegget er inkludert i versjonene OJS 2.4.x og 3.x, OPS 3.x, og OMP 3.x.

## Aktivering av DOI Plugin

Aktivering av tillegget i OJS, OMP og OPS 3.x fungerer på samme måte.

1. Forsikre deg om at du har rollen Journal Manager. Gå til Settings > Website > Plugins
2. Under Installed Plugins > Public Identifier Plugins, finn DOI
3. Kryss av i boksen til høyre for beskrivelsen av DOI Plugin for å aktivere tillegget

## Konfigurering av DOI Plugin

Etter aktivering av tillegget vil en lenke til Settings vise på skjermen.  Du må kanskje klikke den blå pilen på siden av tillegets navn for å få denne lenken til å vise.

Velg Settings, og noe som ser ut som dette skjemaet vil vise, med noen variasjoner avhengig av versjon og plattform.

![Lenke til innstillinger for OJS 3.3 DOI plugin.](assets/settings-testdrive.png)

La oss gå gjennom disse innstillingene.

### Content

Her kan du velge hvilke typer publikasjoner du vil at DOI skal aktiveres for. Å velge en publikasjonstype her betyr ikke at alle publikasjoner av denne typen vil få en DOI. Avhengig av hvilken type DOI suffix du har valgt kan du selv velge å tildele DOI til de publikasjonene du ønsker.

_Anbefaling_: Gjør ting enklest mulig! Med mindre du jobber med en veldig spesiell publikasjon er det vanligvis best å kun tildele DOI på grunnleggene publikasjonsnivå, f. eks. artikkel eller bok.

### DOI Prefix

DOI Prefix er obligatorisk. Du vil motta din institusjons prefix fra der institusjonen får DOI, f.eks. Crossref eller lignende organisasjoner Prosessen for å søke om dette vil sannsynligvis være beskrevet på organisasjonens nettside.

### DOI Suffix

Suffix for DOI kan settes opp på flere måter. Det er enkelte ting du bør være oppmerksom på når du velger hvordan suffix skal se ut for publikasjonene i ditt arkiv.

**Default Patterns**: Dersom du velger standard oppsett for generering vil DOI bli tildelt alle publikasjoner. Du vil ha muligheten til å se hvordan DOI vil bli _før publisering_, dersom du ønsker å få DOI med i galley.

**Individual DOI suffix**: Choosing the individual DOI suffix option will allow you to enter suffixes independently for any object. Only use this option if none of the other suffix generation strategies fulfill your needs - e.g. when your organization has global rules for suffix generation different from what can be implemented with custom patterns, or if you do not want to generate DOIs for all objects by default.

**Custom Patterns**: When you enter custom patterns, it is your responsibility to create patterns that result in unique DOI suffixes for your prefix. You have to enter a combination of journal, issue, and object-specific identifiers to make sure that DOIs cannot be duplicated. A galley-suffix for example, that does not contain the journal ID can be duplicated among several journals if the same prefix is used for those journals. The same can happen if you generate DOIs for articles and issues without using the issue ID in the article suffix (e.g. when generating the DOI for the issue with the internal ID 1 and the article with internal ID 1). Look at the standard patterns for examples.

_Recommendation 1_ // Read [Crossref's guide to constructing your DOIs](https://www.crossref.org/documentation/member-setup/constructing-your-dois/).

_Recommendation 2_ // DOIs are not intended to be human-readable! You may be tempted to convey a lot of shorthand meaning to your suffixes. But, properly updated DOIs will take you where you want to go and contain all of the relevant metadata about a publication. A DOI with a completely opaque suffix functions the exact same way as a DOI that contains human-readable citation-based information. The less you have to worry about a typo in a DOI the better, because DOIs _cannot be edited once they are registered_. Save yourself the headache!

_Recommendation 3_ // Use default patterns if you want to assign DOIs automatically.

### Reassign DOIs

> Does not appear in all versions of the DOI Plugin

The **Reassign DOIs** button deletes all currently assigned DOIs but not your individually assigned URL or DOI suffixes. This is an advanced action. _Please use it with utmost care and make sure you understand its exact action first_ - e.g. within a test environment. All DOIs will be regenerated based on the patterns or custom identifiers you entered. This means that if you change the patterns or custom identifiers after you already assigned DOIs then previously assigned DOIs will be completely lost and the same object will receive a different DOI. This should be avoided in most cases as it means double-registration of the same object with two different DOIs which is contrary to the purpose of DOIs in the first place. In any case you should make a **database backup** before you delete all assigned DOIs.

### Assign DOIs

> Does not appear in all versions of the DOI Plugin

**Assign DOIs** will, when clicked, assign a DOI to any published material using the chosen suffix pattern. This is a good way to catch any DOIs you may have missed, or to assign DOIs to a newly-uploaded back-issue.

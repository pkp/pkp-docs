---
title: Metadatos de números y artículos - Mejores prácticas en los metadatos de la revista
---

# Metadatos de números y artículos

Los metadatos son parte de cada artículo y número que publiques e incluye cosas como el volumen, año de publicación, título de artículo, nombres de colaboradores, fecha de publicación y palabras clave. Debido a que una revista publica muchos números y artículos diferentes y a menudo hay usuarios diferentes que crean estos metadatos, hay muchas oportunidades de cometer errores. Además, **cada disciplina académica tiene su propia cultura de publicación**, repleta de estilos específicos, hábitos, patrones y preferencias. Estos a menudo se transfieren (a veces inapropiadamente) a los metadatos. Este capítulo detalla las mejores prácticas para los metadatos de números y  artículos  y cómo evitar errores comunes.

## Metadatos del Número

OJS tiene los siguientes campos para metadatos a nivel de número:

* Fecha de publicación
* Identificación:
  * Volúmen
  * Número
  * Año
  * Título
* Descripción:

Todos están habilitados de forma predeterminada en los números y en el listado de **Archivos** que muestra todos los números publicados, pero es posible seleccionar cuál de estos campos de metadatos se muestra en cada número.

Para encontrar la configuración de los números:

1. Ir a **Números** en la barra lateral del panel.
2. Hacer clic en **Próximos números / números anteriores ** dependiendo de qué se está editando.
3. Hacer clic en **la flecha** junto al número que desea editar.
4. Hacer clic en **Editar** en el menú expandido debajo del número.
5. Hacer clic en la pestaña **Datos del número** en el menú superior.

Se mostrarán algunos campos de metadatos y, debajo de ellos, una casilla de verificación junto al volumen, número, año y título. Estas casillas determinan si los metadatos ingresados se mostrarán o no en la vista del sitio. Sin embargo, vale la pena señalar que los metadatos dentro de estos campos estarán disponibles a través de OAI o exportación de metadatos independientemente de la opción de visualización, por lo que los metadatos del número deben ser exactos.

### Título del número

El campo Título del número en OJS puede referirse al "título de un númeri especial" o a algo aparte del volumen existente, metadatos de número y año. Fácilmente, el error más común con los metadatos del número es un malentendido sobre el propósito del campo "Título del número". Los usuarios a veces deshabilitan la opción de mostrar el volúmen, número y año con el fin de escribir la información del asunto como una sola cadena. Por ejemplo, en lugar de "**Vol. 56 No. 2 (2020)**" (la representación predeterminada de OJS), escribirán algo como "**Volumen 56, Número II, Primavera 2020**". Los usuarios hacen este tipo de título de escritura por varios motivos, por ejemplo:

* Los usuarios pueden querer mostrar su volúmen y número en números romanos (o cualquier carácter único que usaban originalmente en la versión impresa)
* Los usuarios quieren usar “Volúmen” y “Número” en lugar de “Vol” y “No.” (la representación predeterminada en OJS)

El inconveniente es que en los metadatos cosechados o indexados, este artículo ahora se mostrará de la siguiente manera: **Vol. 56 No. 2 (2020): Volumen 56, Número II, Primavera 2020**.

La única excepción es la temporada (ej: Spring, Fall), ya que no hay un campo específico para esto en el OJS actualmente. Si se necesita escribir metadatos estacionales,  la mejor manera de hacerlo es habilitar la visualización para todos los campos  escribir los metadatos estacionales en el campo "título". Esto puede resultar en una visualizacióln no ideal  (**Vol. 56 No. 2 (2020): Primavera**), pero al menos se asegurará que no se dupliquen los metadatos del número.

Adicionalmente, algunos de estos problemas podrían resolverse editando plantillas OJS, pero muchos de los proveedores de hosting de OJS (en particular, las instancias OJS multisitio alojadas en las universidades) probablemente se alejen de las ediciones de plantillas para resolver problemas de visualización.

### Descripción

Del mismo modo, es muy común que los usuarios pongan contenido personalizado en el campo "Descripción del número". Esto es menos problemático, pero generalmente no es lo recomendado.

El campo de descripción se muestra encima de la tabla de contenido del número. Puede parecer una manera conveniente de destacar ciertos puntos, como un editorial o un anuncio sobre un número próximo. Sin embargo, las organizaciones de indexación o cosecha pueden acabar sacando contenido no deseado de los metadatos del número. Las descripciones de los números deben utilizarse para describir el número actual. For example, a special issue festschrift with a thematic title might include the description “Essays in honour of…”

### ¿Qué hacer y qué no hacer?

* ¿Qué hacer?
  * Llena los metadatos de volúmen, número y año.
  * Utilice el título del número específicamente para títulos especiales.
* ¿Qué no hacer?
  * Re-escribir metadatos en el campo "Título del número" por propósitos de visualización.
  * Poner contenido que no describa el número en el campo "Descripción".

## Metadatos del artículo

Los metadatos del artículo son creados por los autores cuando hacen un envío y mejorados por los editores a través del flujo de publicación.  Se almacenan y pueden editarse en la pestaña **Publicación** de cada envío.

![The publication tab in the OJS submission interface.](./assets/metadata-publication-tab.png)

Los metadatos del artículo en OJS son los más propensos a ser problemáticos por muchas razones. Los dos más importantes son: 1) porque existen más artículos que números y, 2) porque una gran porción de los metadatos en realidad es **dependiente de los autores**, sobre quienes no es posible tener control total y tienen diferentes grados de alfabetización técnica.

Aunque puede capturar muchos requisitos en sus lineamientos de envío, sabemos que no significa que todos los autores vayan a seguirlos. Gran parte de este trabajo es responsabilidad de los editores u otro personal de revistas, que a menudo son voluntarios o carecen de recursos.

Esta sección pretende desglosar los metadatos esenciales para los artículos y algunas reglas generales que ayudarán.

### Reglas

**La consistencia es la clave.** Es posible tener algunas "reglas" o guías de estilo para la revista y la forma en que se registran los metadatos. Por ejemplo, no es raro en las ciencias registrar nombres como iniciales y como apellidos en lugar de nombres completos. Idealmente, se llenarán todos los metadatos, pero lo más importante es que estos sean consistentes a lo largo de la publicación. Si se han publicado varias obras de Robert Jones, es necesario asegurarse que todas digan R. Jones. No deberían rotar entre R. Jones, R.B. Jones, Bob Jones, Rob Jones y Robert B. Jones.

Esto no sólo aplica para los nombres.  Por ejemplo, los títulos deben seguir convenciones de capitalización consistentes, aunque éstas pueden variar según el idioma. Es importante mantener los "estilos" de los metadatos tan consistentes como sea posible y de acuerdo con el estilo de citación que se utilice.

**Metadata should be the same everywhere.** Anywhere a piece of metadata appears, it should be the same as every other place that it is recorded. For example, the title of an article should be exactly the same in its published PDF galley and in the metadata recorded in OJS. (Keep in mind that typically these were provided by the author at the time of submission. The title may have changed during the peer review process.) Depending on how you publish, that title might also be in a PDF of an issue’s table of contents. ***No matter how many places the title appears, it should always be the same to avoid confusion.*** The same applies to author names and affiliations. (This rule applies to Journal-Level and Issue-Level metadata as well, but as previously mentioned, the plethora of Article-Level metadata makes this a particular challenge.)

**Try to avoid directly pasting text copied from Microsoft Word.** It's common practice by authors to copy and paste an abstract from, say, Microsoft Word or some other application with embedded formatting. A pasted chunk of text might have hidden line breaks that are problematic downstream for metadata use. As an example, we'll use this paragraph:

> "Additionally, it's common for an abstract to have been pasted in<br> by an author from, say, Microsoft Word or some other platform<br> with embedded formatting. A pasted chunk of text might have<br> hidden soft returns that are problematic downstream for<br> metadata use."

In an XML export, this text would look like this:

```xml
<abstract>Additionally, it's common for an abstract to have been pasted inby an author from, say, Microsoft Word or some other platformwith embedded formatting. A pasted chunk of text might havehidden soft returns that are problematic downstream formetadata use.</abstract>
```

As you can see, the words separated by line breaks have run together.

There are a number of ways to clear formatting. In Windows you can first paste your text into Notepad to strip formatting. On a Mac you can paste without formatting by using Option+Command+Shift+V (you will never paste a different way again).

**Do not accessorize your metadata.** Name fields should only contain names. Titles should only contain titles. You may have a colleague who really wishes that DOIs were on the table of contents and decides to put them in subtitle fields. That will, for sure, put the DOIs on the table of contents, but it will also break all of your subtitle metadata because this is not where this information is supposed to go. It is always recommended to fill out metadata fields (no matter how little you might use them) with only what is asked.

**One language per field.** As we've addressed already in this document, if you have any multilingual metadata in your journal you should make sure that it lives in its own language-specific form. Check to make sure that, in the Languages settings, you've enabled all forms for submission-appropriate languages. Make sure to review author-entered metadata in all configured languages before publishing.

**All-caps titles/metadata are stylistic and can be implemented with a custom theme. You shouldn't yell metadata.** In some disciplines it is common, stylistically, to write article titles in all caps. This is both unnecessary and frustrating for everyone else who has to change this metadata in their reference lists in Zotero or publication records in ORCID or any other number of places. You can make text display in OJS however you want, such as in all caps, with a custom theme. See also the [PKP Theming Guide](/pkp-theming-guide/en/). (At the very least, if you are publishing your titles in all caps, do it consistently.)

OJS **does not currently support italics or other HTML styling in titles**, although it is a common practice for journals that publish articles about a work (such as a work of literature) and wish to include the title of the work in italics in the title of the article.

Now that we’ve covered those ground rules, we can look at the individual elements of article-level metadata, which can be accessed by selecting a submission, clicking View **Submission** and then opening the **Publication** tab.

### Title & Abstract

**Prefix:** A field for what librarians and developers refer to as "stop words". If an article title starts with "A" or "The," (or “Le,” “La,” “L’,” “Un” or “Une” in French) and you don't want an alphabetical list of the journal’s articles to show a long list of publications starting with "The" or "Le", put those words in the prefix field.

**Title & Subtitle:** The title and subtitle of your article. OJS used to only have a single title field but now has the option to break your metadata across two fields. Please note, if you use both the Title and Subtitle fields, do not include a colon after your Title. OJS will automatically insert that colon where needed. It doesn't really matter if you use just one title field or all three (Title, Subtitle, and Prefix , so long as you populate these fields consistently across your journal.

**Abstract:** The abstract of your article. If there isn't an abstract associated with your article, please make sure this field is empty. If you have multiple abstracts in different languages, please make sure to insert those translations into the fields for other languages. Do not put multiple languages in one abstract field. If you consistently see placeholder text in abstract fields, select “Do not require abstracts” in your **Sections Settings**. Additionally, there is no need to place the words "Abstract" or "Résumé” in your abstract metadata. OJS will display these automatically as part of the user interface.

### Contributors

Contributor information is one of the most common places that metadata errors arise. Since OJS pulls initial contributor metadata from the author’s user profile during submission, the author might not review it before publication. It is also easy to overlook from an editorial standpoint. Before you publish an article, make sure to review author information.

In OJS 3.2, you can find the contributors list for a submission by navigating to **Publication** and selecting **Contributors**. You can edit a record by clicking the small expansion arrow next to a name and clicking **Edit**.

![The contributors list from the publication tab.](./assets/metadata-contributors.png)

**Name(s):** As of OJS 3.2, the only required name field in a publication is the Given Name field. Not all cultures use the same Given-Name Family-Name format familiar to many Western countries. There is no longer a middle name field in OJS metadata. Users who wish to be addressed in a specific way unmet by Given-Name Family-Name should put that preferred name in the *Preferred Public Name* field. This field should contain only the person's name as they prefer to be addressed. Additional personal details (such as the person's preferred pronouns or post-nominal letters) should be added to the author's bio statement.

It is important that you include author naming conventions in your submission guidelines. OJS 3.2 allows for a "preferred public name" field that, really, should not be altered by editors in terms of style or contents. If there are stylistic concerns for display consistency, editors should review or discuss these issues with the authors directly. You do not want to assume anything about the identities of your submitting authors by altering their name without their permission.

**It is important to review name metadata** because the name may have been submitted differently in a prior publication in your journal. For example, imagine I am the primary author for a submission. My name in submission metadata will be automatically populated with the information in my user profile in the journal’s OJS. But, for my co-authors (who may or may not also have user profiles in this journal), I might enter a name that does not match what appears in their profile. It is always best to review.

**Email:** There is no more contentious issue! OJS was designed to be used as a submission system and submissions were designed to be associated with user profiles and accounts, so email is a required field. But, not all authors on a submission will have an email address.

It's possible that editors may enter a submission *on behalf of an author*. It's also possible for editors to submit back-issue content written by individuals who died well before the ubiquity of email. **So, what do we do about email addresses we don't have?**

The long and the short of it is that it doesn't matter as long as you do it consistently. One recommendation is to use the domain @example.com. This domain doesn't resolve and is commonly used for user testing or demonstration. The email address none@example.com for all unknown or inappropriate email situations will make it easily spottable in the future, and it won't do any harm in the short term until such a time as OJS does not require email addresses as metadata.

**Affiliation:** Depending on whether an author submitted the work themselves or it was submitted for them (say, by a co-author, or the journal’s editor), you may see anything from way too much information to no information at all.

Before publishing, you should always review affiliation information in every article and make sure that the affiliation(s) used in the article’s published galley(s) (ex: PDF) match(es) the affiliation(s) in the metadata. Author affiliation is a required metadata for journals participating in Coalition Publica.

**Country & User Details:** These fields are less vital but, as always, try to keep these consistent and use multilingual features where needed. ORCID iD, for journals that have configured the plugin, in particular, will be useful for authors if they've provided it. They'll be appreciative when your clean metadata ends up automatically in their publication records.

**Order of authors and contributors:** The order of author and contributor names should be the same in the article metadata and on the published galley files.

### Other Article Metadata

**Identifiers:** This is where DOIs are assigned. This tab will only appear if the journal is configured to assign DOIs within OJS. Just a note in general that DOIs do not need to be (and are actively discouraged from being) human readable. They are not custom URLs.

**Permissions & Disclosure:** This is the section for copyright and license statements for a given article. It will be pre-populated with whatever the author choses on submission but please review it before publication. Copyright holder, year, and license URL are all passed along as metadata.

**Issue:** This is where you assign an article to an issue and provide **pagination**. You should include page numbers, in the format "*firstpage-lastpage*". Page number metadata is especially important when used in automatically generated citations.

In some of the most-used citation styles/standards, the pagination is a required metadata field for research articles. It's not uncommon for pagination to change throughout the publishing process so please review before publication. Additionally, make sure that the article is slated for the proper journal section. You can edit your URL path, but it is not recommended unless you're quite sure what you're doing.

**Keywords:** Keywords are typically one- to three-word phrases that are used to indicate the main topics of a submission. ***It is important to avoid entering keywords as a single block of text. Add a new keyword for each individual term/phrase***. Pressing "enter" after each keyword will separate them.

**References:** This field allows you to list a submission's references in a separate field and publish the references as metadata, which can then be indexed and harvested. This may be required to comply with citation-tracking services such as Crossref. For journals participating in Coalition Publica, Érudit recommends that references are added to an article’s metadata according to the following guidelines, and this can be followed as a general best practice:

* Only include references found at the end of the article, i.e. the bibliography or the list of works cited. Do not include endnotes or footnotes. If the article does not have a bibliography, do not include any reference metadata.
* The references in the article’s PDF and metadata should match. Update them if they have changed since the original submission.
* Separate each reference on its own line.
* Do not include any text other than the references themselves, such as the subtitle “Bibliography.”
* Format references as plain text. Do not include HTML or XML formatting tags, such as italics (`<i></i>`).
* Do not format the references in the form of a list, for example, with numbers or bullet points preceding each reference.
* When several works by the same author are cited, do not replace the author's name with a dash. All references must contain the name of the author.
* Regardless of the citation style used (MLA, APA, Chicago, etc.), all references must be complete, containing the characteristic elements that allow the identification of the works cited.

You can ask authors to add their references to the References field when they make a submission, or you can have editors add the references to the References field at the Production stage.

### Additional/Optional Metadata

There are a few additional options for article-level metadata you can add. You can configure which additional fields you include in your journal and whether that metadata will be collected during the submissions process (optional or required), or only added by an editor later. These metadata elements can be added and configured under **Workflow Settings > Submission > Metadata**.

![Additional metadata options found in OJS' workflow settings.](./assets/metadata-workflow.png)

If you ask authors to submit metadata, you will have to pay careful attention and update or correct it as necessary during review, copyediting, and production. Alternatively, you can restrict the fields available during submission and have editors add the metadata during the production process. This option requires more effort by the journal team but can simplify the submission process and reduce metadata errors.

You may add the following Dublin Core metadata items:

* **Coverage:** Coverage refers to the extent or scope of the topic of the article, and will typically indicate a spatial location (a place name or geographic coordinates), temporal period (a period label, date, or date range) or jurisdiction (such as a named administrative entity).
* **Languages:** A single- stringed, plain-text field for additional language metadata not covered in the submission process.
* **Rights:** Any rights held over the submission, which may include Intellectual Property Rights (IPR), Copyright, and various Property Rights.
* **Source:** The source may be an ID, such as a DOI, of another work or resource from which the submission is derived.
* **Subjects:** Subjects will be keywords, key phrases or classification codes that describe a topic of the submission. ***These are, however, distinct from Keywords proper and should be used for things like cataloguing, not general description.***
* **Type:** The nature or genre of the main content of the submission. The type is usually "Text", but may also be "Dataset", "Image" or any of the [Dublin Core types](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/).
  * For Coalition Publica journals, however, it is recommended to use the types suggested by [JATS](https://jats.nlm.nih.gov/publishing/tag-library/1.2d2/attribute/article-type.html). **The “research-article” type should be reserved only for articles that pass through a peer review process.**
* **Disciplines:** Disciplines are types of study or branches of knowledge as described by university faculties and learned societies.
* **Supporting Agencies:** Supporting agencies may indicate the source of research funding or other institutional support that facilitated the research.
* **Publisher ID:** The publisher ID may be used to record the ID from an external database. For example, items exported for deposit to PubMed may include the publisher ID. This should not be used for DOIs.

These fields can be disabled, made optional for authors on submission, or required for authors on submission. Most of these are quite granular and are only recommended if there is sufficient time to vet metadata.

It is highly recommended to keep these options as simple as you need for your journal. The more information that unsure users have to populate, the more likely it is they will fill things out with filler or inaccurate information.

---
title: Metadatos de números y artículos - Buenas prácticas en los metadatos de la revista
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

**Los metadatos deberían ser los mismos en todas partes.** En cualquier lugar donde aparezcan los metadatos, estos ser iguales que en cualquier otro lugar en el que estén registrados. Por ejemplo, el título de un artículo debe ser exactamente el mismo en la galerada PDF publicada y en los metadatos grabados en OJS. (Ten en cuenta que normalmente estos fueron proporcionados por el autor en el momento del envío. El título puede haber cambiado durante el proceso de revisión por pares.) Dependiendo de cómo se publique, ese título podría estar también en un PDF de la tabla de contenidos de un número. ***No importa en cuántos lugares aparezca el título, siempre debe ser el mismo para evitar confusión.*** Lo mismo aplica a los nombres de autor y las afiliaciones. (Esta regla se aplica también a los metadatos de la revista y del número, pero como ya se ha mencionado, la variedad de metadatos de un artículo hace que esto sea un reto en particular.)

**Evitar pegar directamente el texto copiado de Microsoft Word.** Es práctica común de los autores copiar y pegar un abstracto de, digamos, Microsoft Word o alguna otra aplicación con formato incrustado. Un fragmento pegado de texto podría tener saltos de línea ocultos que son problemáticos para el uso de metadatos. Como ejemplo, usaremos este párrafo:

> "Además, es común que un abstracto haya sido pegado en<br> por un autor de, Por ejemplo, Microsoft Word u otra plataforma<br> con formato incrustado. Un fragmento pegado de texto podría tener saltos de línea ocultos que son problemáticos para el uso de metadatos."

En una exportación XML, este texto se vería así:

```xml
"Además, es común que un abstracto haya sido pegado en<br>
  por un autor de, Por ejemplo, Microsoft Word u otra plataforma<br>
  con formato incrustado. Un fragmento pegado de texto podría tener saltos de línea ocultos que son problemáticos para el uso de metadatos.
```

Las palabras separadas por saltos de línea se han ejecutado juntos.

Hay varias maneras de borrar el formato. En Windows puede pegar primero el texto en el Bloc de notas. En un Mac puedes pegar sin formatear usando Option+Command+Shift+V

**No aplicar estilos en los metadatos.** Los campos de nombre solo deben contener nombres. Los títulos sólo deben contener títulos. Puede ser que haya un colega que desee que los DOI estén en la tabla de contenidos y decida colocarlos en los campos de subtítulos, esto, sin duda, pondrá los DOI en la tabla de contenidos, pero también romperá todos los metadatos de subtítulos porque no es ahí donde debe ir esta información. Siempre se recomienda rellenar los campos de metadatos (sin importar lo poco que se pueda usar) con sólo lo que se pide.

**Un idioma por campo.** Como ya hemos abordado en este documento, si hay metadatos multilingües en la revista, es importante asegurarse de que cada uno vive en su propio idioma específico. Compruebe que en la configuración de Idiomas ha habilitado todos los formularios para los idiomas apropiados para el envío. Asegúrese de revisar los metadatos introducidos por el autor en todos los idiomas configurados antes de publicar.

**Los títulos/metadatos en mayúsculas son estilísticos y pueden ser implementados con un tema personalizado. **No escribas metadatos enojados** En algunas disciplinas es común escribir títulos de artículos completamente en mayúsculas. Esto es innecesario y frustrante para todos los demás, que tienen que cambiar estos metadatos en sus listas de referencia en Zotero, en registros de publicación en ORCID o otros lugares Es posible lograr hacer que el texto se muestre en OJS con esos estilos, como todo en mayúsculas, con un tema personalizado. Vea también la [Guía de temas de PKP](/pkp-theming-guide/en/). (Como mínimo, si se está publicando con títulos completamente en mayúsculas, esto debe ser consistente.)</p>

OJS **actualmente no soporta cursiva u otro estilo HTML en títulos**, aunque es una práctica común para las revistas que publican artículos sobre una obra (como una obra de literatura) y que desean incluir el título de la obra en cursiva en el título del artículo.

Ahora que hemos cubierto esas reglas básicas, podemos ver los elementos individuales de los metadatos del artículo, a los que se puede acceder seleccionando un envío, haciendo clic en Ver **Envío** y luego abriendo la pestaña **Publicación**.

### Título y resumen

**Prefijo:** Un campo para lo que los bibliotecarios y desarrolladores llaman "palabras vacías". Si un título de un artículo comienza con "A" o "El", (o "Le", "L", "L", "Un" o "Une" en francés) y no se desea que una lista alfabética de los artículos de la revista muestre una larga lista de publicaciones que empiezan por "El" o "Le", poner esas palabras en el campo prefijo.

**Título & Subtítulo:** El título y subtítulo del artículo. OJS solía tener un solo campo de título, pero ahora tiene la opción de dividir los metadatos a través de dos campos. Si se utilizan los campos Título y Subtítulo, no es necesario incluir dos puntos después del Título. OJS insertará automáticamente los dos puntos donde sea necesario. No importa si usas un solo campo de título o los tres (Título, Subtítulo, y prefijo , siempre y cuando rellenes estos campos de forma consistente a través de la revista.

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

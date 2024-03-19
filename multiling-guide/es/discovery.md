---
title: Indexación y descubrimiento - Uso del software PKP en varios idiomas
showPageTOC: true
---

# Indexación y descubrimiento

Desafortunadamente, los servicios de indexación y descubrimiento no se adaptan bien a los metadatos multilingües. Este capítulo ofrece recomendaciones para que los contenidos multilingües sean más accesibles para los servicios de indexación. Sin embargo, el descubrimiento de forma completa está limitado por los propios servicios.

Los servicios de indexación y descubrimiento suelen solicitar metadatos en inglés, además de metadatos en el idioma original del artículo.

-   [DOAJ](https://doaj.org/apply/guide/) - Revistas publicadas en cualquier idioma. No es necesario que el sitio web esté en inglés. Si el sitio web está disponible en varios idiomas, entonces la información facilitada debe ser la misma en todos ellos.

-   [Scopus](https://www.readyforscopus.com/) - El título en inglés, los resúmenes, las palabras clave y la afiliación de los autores de todos los artículos son obligatorios.

-   [Web of Science (WoS)](https://clarivate.com/webofsciencegroup/journal-evaluation-process-and-selection-criteria/) - Los títulos y resúmenes en inglés son obligatorios.

-   [Latindex](https://www.latindex.org/latindex/meto2) - El resumen y las palabras clave en dos idiomas son características deseables.

-   [Redalyc](https://www.redalyc.org/redalyc/editores/evaluacionCriterios.html) - Las directrices del autor en dos idiomas, la tabla de contenidos, el resumen y las palabras clave en dos idiomas (preferiblemente inglés) son criterios deseables y muy valorados.

-   [SciELO](https://wp.scielo.org/wp-content/uploads/Criterios-Rede-SciELO-es.pdf) - El título, los resúmenes y las palabras clave en inglés de todos los artículos son obligatorios.


### Google Scholar

Google Scholar ha declarado que puede indexar artículos en donde todos los campos de metadatos coinciden con los metadatos incluidos en la galerada del artículo, incluido el idioma utilizado. Independientemente del número de idiomas en que estén disponibles los metadatos, Google Scholar ha declarado que sólo indexará aquellos idiomas que vayan acompañados de una versión traducida de la galerada del artículo. Sin embargo, Google Scholar también ha declarado que busca el idioma del artículo en la URL y no en las etiquetas de metadatos, y no indexará artículos multilingües en OJS porque el idioma del artículo no se indica en la URL (debido a otros problemas técnicos que esto causaría).

Si observa que Google Scholar no indexa su revista, consulte la sección [Solución de problemas (disponible en inglés)](https://docs.pkp.sfu.ca/google-scholar/en/#troubleshooting-for-journal-managers-and-editors) de la guía de Google Scholar para obtener más información.

### PubMed

MEDLINE/Pubmed muestra un número ilimitado de idiomas cuando hay traducciones disponibles en el momento de la publicación, cada editor es responsable de presentar todos los idiomas en las citas de los archivos XML.

Para obtener más información de este proceso, ponen a disposición las "[Instrucciones para artículos publicados en idiomas diferentes al inglés](https://www.ncbi.nlm.nih.gov/books/NBK3828/#publisherhelp.Instructions_for_art)".

Las revistas se indexan en el idioma original de la publicación. El idioma de indización es aprobado por el Comité de Revisión Técnica de Selección Bibliográfica en el momento en que se acepta una revista.


### Crossref

Cuando los metadatos se exportan para su depósito en CrossRef, el DOI registrado por OJS, OMP y OPS adopta el idioma principal del envío.

Si la revista hace el envío de archivos de galeradas en varios idiomas, puede realizar un depósito independiente para cada uno de ellos. Para obtener más información, consulte la  [Documentación de Crossref (disponible en inglés)](https://www.crossref.org/documentation/content-registration/structural-metadata/components/).

Para conocer otros requisitos de indexación, consulte la  [Guía de aplicación de indexación](https://docs.pkp.sfu.ca/indexing-guide/en/).

### Búsqueda en el sitio

Si publica contenidos en más de un idioma, actualmente no es posible buscar artículos en un solo idioma. Hay un único índice de búsqueda para cada sitio y se buscará en todo el índice. Sin embargo, si un usuario busca palabras en un idioma, lo más probable es que recupere artículos en ese idioma, a menos que las palabras aparezcan en ambos o en todos los idiomas.

El [componente Solr Lucene](https://github.com/ojsde/lucene) se puede utilizar en OJS para filtrar por idioma.

---
title: Publicar en varios idiomas - Utilizar el sistema de PKP en varios idiomas
showPageTOC: true
---

# Publicar en varios idiomas

En esta sección, veremos las opciones para publicar contenidos en diferentes idiomas, así como algunos consejos y consideraciones para los metadatos multilingües.

## Publicar traducciones: ¿junto al artículo original o por separado?

OJS, OMP y OPS pueden permitir la publicación de un artículo, monografía o preprint en varios idiomas bajo un mismo identificador de envío, esto en lugar de publicar por separado el artículo original de la traducción.

Al proporcionar el idioma original y las traducciones bajo un mismo identificador de envío, en lugar de dos o más envíos diferentes, los archivos se mantendrán juntos bajo un mismo identificador. De este modo, también se evita dividir las estadísticas de un artículo entre varios IDs de envío.

Sin embargo, algunos servicios de identificación e indexación recomiendan que las traducciones se traten como elementos separados. Esto también es coherente con la catalogación tradicional, en la que las traducciones se tratan como publicaciones independientes.

Ambas opciones son posibles con los sistemas de PKP: puede incluir galeradas y metadatos en varios idiomas con un solo envío, o crear envíos separados para cada idioma. Elija la opción que mejor se adapte a sus necesidades y asegúrese de dar instrucciones a los autores en sus directrices de envío.

## Gestión de metadatos multilingües

### ¿Artículo en un solo idioma, metadatos multilingües?

Algunas revistas multilingües pueden publicar artículos con metadatos en varios idiomas sin un artículo traducido que los acompañe.

Esto puede ser útil para su visibilidad, especialmente para revistas y artículos en idiomas distintos del inglés—a menudo se pasan por alto investigaciones valiosas cuando se publican en idiomas distintos del inglés. También puede ser útil para los investigadores que intentan determinar si vale la pena invertir su tiempo en solicitar una traducción o utilizar un traductor automático para leer un artículo, sobre todo en campos y temas en los que la investigación es escasa.

Al mismo tiempo, puede resultar frustrante para los lectores encontrar metadatos traducidos sólo para descubrir que el contenido real no está disponible en ese idioma. También puede hacer que su contenido no sea indexado correctamente o no se indexe en absoluto, especialmente por parte de los servicios de indexación y descubrimiento que tienen expectativas estrictas sobre la coherencia de los metadatos y el idioma de los artículos.

Le recomendamos que tenga en cuenta estos pros y contras e investigue los requisitos de los diferentes servicios de indexación antes de proporcionar resúmenes traducidos u otros metadatos sin haber traducido el contenido del manuscrito. Decida si va a solicitar traducciones completas o parciales de los envíos y aclárelo en sus directrices de envío.

### Precisión de los metadatos & prácticas recomendadas

Lo más importante que puede hacer para que sus contenidos multilingües sean localizables es asegurarse de que sus metadatos (por ejemplo, título del artículo, colaboradores, datos del número) estén completos y que se añadan a los campos de idioma correctos.

A continuación se ofrecen algunos consejos básicos sobre la precisión de los metadatos multilingües. Para más información, consulte la guía de Coalition Publica y PKP [Mejores prácticas para los metadatos de las revistas (disponible en inglés)](https://docs.pkp.sfu.ca/metadata-practices/en/) para obtener recomendaciones detalladas.

-   **Utilice los campos de idioma adecuados**: Introduzca los metadatos en el campo específico del idioma (por ejemplo, si las palabras clave están en francés, introdúzcalas en el campo de idioma francés, no en el campo de idioma inglés). Los metadatos deben colocarse siempre en el campo del idioma correspondiente, aunque el artículo o el número estén en un solo idioma.
-   **Evite mezclar idiomas en un mismo campo**: Evite utilizar diferentes idiomas en el mismo campo. Por ejemplo, en lugar de "Título del artículo / Article Title", separe el texto en diferentes idiomas, cada texto en su respectivo campo de acuerdo a su idioma.
-   **Coherencia entre los campos de metadatos y las galeradas**: Procure que haya coherencia entre las galeradas y los metadatos, y asegúrese de que todos los metadatos traducidos estén presentes en ambas. Por ejemplo, si el resumen se traduce en la galerada, la traducción también debe incluirse en los metadatos, y si el resumen se traduce en los metadatos, la traducción también debe incluirse en la galerada. Esto debe hacerse para cualquier metadato traducido, aunque el texto completo no se traduzca. Esto ayuda muchísimo a la visibilidad en determinados servicios de indexación y descubrimiento.
-   **Evitar la mezcla de sistemas de escritura innecesarias**: Evite mezclar sistemas de escritura entre los metadatos y el contenido del artículo, evítelo también para rellenar los campos de metadatos en otros idiomas. Por ejemplo, el nombre del colaborador Taro Tanaka debe traducirse como "田中 太郎" en los campos de metadatos en japonés para un artículo en japonés, ahora cambie el sistema de escritura para "Taro Tanaka" sólo para los campos de metadatos en inglés u otros idiomas. Del mismo modo, un artículo titulado en japonés como "日本人の自然観", el metadato del título debe traducirse al inglés como "The Japanese Perception of Nature" en lugar de "Nihonjin no shizenkan".


## Integrar a los traductores en el flujo de trabajo editorial

Las revistas pueden publicar su propia versión traducida de los artículos cuando cuenten con traductores en el equipo editorial.

Para integrar a los traductores en el flujo de trabajo editorial, estos deben ser usuarios registrados con el rol de traductor. Puedes aprender a registrar usuarios, editar usuarios y roles en nuestra [Guía de aprendizaje de OJS](https://docs.pkp.sfu.ca/learning-ojs/3.1/es/users-and-roles).

Una vez que el usuario tiene el rol adecuado, el editor encargado del envío puede añadirlo a la lista de participantes en una de las fases del flujo de trabajo, normalmente las fases de corrección o producción.

El flujo de trabajo de traducción puede variar en cada revista, pero los traductores seguirán pasos similares a los de [los correctores](https://docs.pkp.sfu.ca/learning-ojs/3.1/es/editorial-workflow#corrector) para completar su trabajo en el envío.

### Dar crédito a los traductores en el sistema PKP

En la versión actual de OJS, OMP y OPS, los usuarios con el rol de traductor pueden tener crédito por su trabajo y ser reconocidos dentro de los metadatos para todo el artículo (todos los idiomas) y aparecerán como Colaboradores (no explícitamente como traductores). Aunque en los sistemas de PKP se les puede asignar el rol de traductor, al momento de exportar los metadatos (por ejemplo, para CrossRef, DOAJ, etc.) se elimina esta distinción. Como parte de las políticas de su revista, aclare la relación contractual con su traductor y autor en lo que respecta a la atribución. Alternativamente, se puede dar crédito a los traductores en la galerada de la versión en la que trabajaron y no incluirlos en los metadatos del artículo completo. El sistema de PKP puede comportarse de forma diferente si el Plugin CRediT está activado.

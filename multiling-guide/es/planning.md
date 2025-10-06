---
title: Estrategia & Planificación - Uso del software PKP en varios idiomas
showPageTOC: true
---

# Estrategia & Planificación

Piense cuidadosamente en cómo quiere usar y configurar los idiomas cuando use por primera vez OJS, OMP u OPS. Saber qué áreas de su revista están destinadas a ser multilingües le permitirá redactar directrices claras para que los autores/as y editores/as introduzcan metadatos multilingües o realicen envíos multilingües, así como preparar traducciones para la información básica de la revista, como las directrices de envío, la descripción de la revista, las políticas de privacidad, etc.

En esta sección se describen las posibles formas de utilizar varios idiomas en el flujo de trabajo de publicación y algunos aspectos que deben tenerse en cuenta antes de instalar y configurar OJS, OMP u OPS.

## Consideraciones iniciales {#considerations}

A continuación se exponen algunas consideraciones que pueden ser importantes para su revista antes de poner en línea por completo su publicación.

### Opciones de idioma para los contenidos publicados en el sistema PKP

El sistema PKP proporciona varias opciones para tratar el idioma de los contenidos. Considere qué enfoque o combinación de enfoques podría funcionar mejor para su revista:

- Publicar artículos en varios idiomas sin proporcionar traducciones - por ejemplo, su revista puede aceptar manuscritos en inglés y español con la expectativa de que los lectores/as dominen ambos idiomas o estén dispuestos a utilizar herramientas de traducción.

- Publicación de artículos con traducciones a otros idiomas - algunos o todos los artículos, independientemente de su idioma original, contendrán varias galeradas en distintos idiomas.

- Publicar en un solo idioma pero hacer que la interfaz del sitio esté disponible en varios idiomas mediante configuraciones regionales (versiones traducidas de la interfaz de usuario del sistema).

### Comprobación de la disponibilidad/integridad de la traducción

Parte de la configuración de su revista, editorial o servidor consiste en decidir qué idiomas va a utilizar y asegurarse de que hay traducciones disponibles para cada uno de ellos. La [Guía de traducción de PKP](https://docs.pkp.sfu.ca/translating-guide/en/) contiene instrucciones detalladas sobre cómo comprobar los idiomas disponibles y actualizar o crear una traducción.

Se recomienda encarecidamente trabajar con una traducción lo más completa posible para minimizar errores, pantallas inesperadas u otras interrupciones en su sitio.

Si una traducción está incompleta o quiere utilizar un idioma al que OJS, OMP u OPS aún no han sido traducidos, considere la posibilidad de contribuir a la traducción, ya que todas las traducciones son desarrolladas y mantenidas por miembros de la comunidad. Consulte la [Guía de traducción de PKP](https://docs.pkp.sfu.ca/translating-guide/en/) para obtener más información sobre la creación y el desarrollo de traducciones.

Si habilita un idioma en su sitio para el que la traducción está incompleta, verá claves de mensaje sin traducir o cadenas de configuración regional como ##plugins.block.browse##. Si habilita un idioma en su sitio para el que la traducción está incompleta, verá claves de mensaje sin traducir o cadenas de configuración regional como ##plugins.block.browse##.

### Elegir un dominio para una revista bilingüe/multilingüe

No se recomienda separar los dominios con el nombre/abreviatura de la revista en diferentes idiomas. Por ejemplo, no hay forma de dirigir un dominio inglés a la configuración regional en inglés y un dominio francés a la configuración regional en francés, ya que el cambio de idioma se realiza a través de cookies en lugar de generar una URL específica para cada idioma.

Se aconseja que las revistas bilingües tengan un único dominio que apunte a una única configuración regional y permita a los usuarios cambiar a su idioma preferido. (Por ejemplo, una revista bilingüe titulada Assurances et gestion des risques (AGR) en inglés y Insurance and Risk Management (IRM) en francés puede incluir ambas siglas en su URL - agr-irm.ca. Esta URL puede apuntar al sitio en inglés, pero los usuarios franceses podrán cambiar a la interfaz en francés.)

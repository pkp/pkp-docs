---
generateHeadingToc: true
---

# Declaración de accesibilidad de tema por defecto de OJS 3.3+

## Introducción

Public Knowledge Project (PKP) está comprometido a garantizar que nuestras plataformas sean lo más accesibles posible para todos los usuarios. Para lograrlo, PKP ha desarrollado un nuevo tema predeterminado para OJS 3.3 y superior, y se ha auditado para detectar las barreras de accesibilidad.

## Información de auditoría

Access Changes Everything Inc. una empresa canadiense de consultoría en accesibilidad digital, realizó, desde julio de 2019 hasta marzo de 2021, una auditoría pública del tema predeterminado de OJS para la versión 3.3. Access Changes Everything Inc. realizó dos auditorías utilizando múltiples verificadores automatizados y llevando a cabo extensas pruebas manuales durante el proceso de desarrollo. Además, se llevó a cabo una amplia auditoría por parte de testers remunerados con diferentes discapacidades, que utilizaron diferentes tecnologías durante el proceso; estas tecnologías se enumeran a continuación. Algunos de los mismos testers también participaron en el proceso de prueba final.

Esta auditoría se centró en la reducción de las barreras en el Tema del Defecto para personas con diferentes discapacidades, como las visuales, auditivas, de movilidad, del habla, de comunicación, cognitivas, neurológicas, intelectuales, de aprendizaje y aquellas con múltiples discapacidades.

### Información de Estándares

Esta auditoría se ha realizado utilizando la norma internacional que se refiere a la accesibilidad del Tema por Defecto de OJS, las Directrices de Accesibilidad al Contenido en la Web (WCAG) 2.1 y 2.2 Nivel AA. Nótese que la versión 2.2 solo estaba en fase de borrador, en mayo de 2020.

La auditoría fue mucho más allá de las WCAG 2.1 o WCAG 2.2 (Borrador) Nivel AA. Incluyó elementos que actualmente no están incluidos en las WCAG, como el daltonismo, el tipo y estilo de letra y la disminución de las barreras que afectan a las personas con discapacidades cognitivas, neurológicas, intelectuales y/o de aprendizaje. La auditoría también incluyó las mejores prácticas de usabilidad, con el fin de hacer el sitio más accesible y usable para todos.

La auditoría incluyó pruebas de estas áreas:

* Contenido de tipo texto
* Contenido de tipo imagen
* Contenido de tipo vídeo y audio
* Color en el contenido y el diseño
* Disposición de páginas y contenidos
* Diseño de páginas y contenidos
* Navegación
* Funciones de búsqueda
* Asistentes y módulos
* Formularios y mecanismos de error
* Estructura del contenido
* Uso del código HTML y CSS

### Testers y tecnologías utilizadas

Access Changes Everything Inc. contrató a varios probadores con diferentes discapacidades, que utilizan diferentes tecnologías, para probar diferentes partes del Tema por defecto para OJS 3.3. Las tecnologías utilizadas por los probadores incluyeron las versiones más recientes, así como las más antiguas, de:

* JAWS Screen Reader en los navegadores Chrome y EDGE (PC y tableta)
* Lector de pantalla JAWS en el navegador Internet Explorer con pantalla Braile PacMate 20 (PC)
* NVDA Screen Reader en los navegadores Chrome (PC)
* Lector de pantalla Microsoft Narrator en EDGE (Tablet)
* Lector de pantalla Apple VoiceOver en Safari (iPhone 6)
* Lector de pantalla Apple VoiceOver en Safari con pantalla Braille de 40 celdas (Mac)
* Lector de pantalla Apple VoiceOver en Safari con pantalla Braille de 40 celdas (iPad Pro)
* Dragon Naturally Speaking Premium 13 (PC)

Access Changes Everything Inc. utilizó Mac, PC y iPhone para probar el sitio con los navegadores Chrome y Firefox. En la auditoría se usaron ciertas tecnologías:

* Ampliación del navegador (100%-400%)
* Cambio de contraste de colores
* Control por voz (solo en el iPhone)
* Pantalla pequeña (solo iPhone SE o 5)
* Varias aplicaciones y plugins para Mac Chrome y Firefox para simular discapacidades visuales y cognitivas.

### Reparación y obstáculos restantes

Tras la recepción del informe de auditoría completo en diciembre de 2019, PKP creó el [Proyecto Github de Accesibilidad](https://github.com/pkp/pkp-lib/projects/16) para hacer un seguimiento de los problemas y el progreso hacia su resolución. El proyecto también está abierto para que los miembros de la comunidad presenten problemas relacionados con la accesibilidad en la interfaz de usuario y la funcionalidad de la plataforma.

En 2021, Access Changes Everything Inc. llevó a cabo una auditoría de seguimiento del tema por defecto para evaluar la corrección realizada por los desarrolladores de PKP. La mayoría de los problemas identificados en el informe inicial fueron resueltos por PKP o Access Changes Everything Inc. sugirió soluciones alternativas aceptables.

Siguen existiendo algunos obstáculos que no han podido ser eliminados por completo. PKP está trabajando en ellos o pueden ser resueltos por la forma en que las revistas utilizan el OJS:

* reCAPTCHA. Cuando se activa en la página de registro del usuario, reCAPTCHA presenta una barrera importante para los usuarios de lectores de pantalla con dispositivos braille y los usuarios de VoiceControl en iPhone. Además, reCAPTCHA carece de un título iFrame y una etiqueta de formulario, por lo que incluso los usuarios de lectores de pantalla que pueden utilizarlo, pueden encontrar barreras.

reCAPTCHA es un sistema Captcha y un servicio de terceros desarrollado por Google e integrado como una característica opcional de OJS que puede ser desactivada. Existen alternativas, como el [módulo OJS Honeypot](https://github.com/ulsdevteam/pkp-formHoneypot).
* Contenido. El contenido del sitio web y los contenidos publicados creados de manera no conforme con las normas de accesibilidad pueden presentar barreras para los usuarios. Esto puede incluir, aunque no limitarse a: imágenes cargadas sin texto alternativo, títulos mal estructurados, hipervínculos inaccesibles, falta de subtítulos de figuras y estructuras de tablas de datos incorrectas o incompletas. While these are out of scope for the Default Accessible Theme, PKP provides guidance for editors on [Creating Accessible Content](https://docs.pkp.sfu.ca/accessible-content/).
* Remaining barriers. The other remaining barriers are listed in the [PKP Accessibility Github Project](https://github.com/pkp/pkp-lib/projects/16) that will continue to be updated as barriers are resolved.

## Contact Us

The OJS Default Theme audit found many barriers, and most of these have been eliminated. However, the theme will be constantly updated, and new barriers may unknowingly be created. If you encounter barriers, or need accommodations, please report them to us via the [PKP web contact form](https://pkp.sfu.ca/contact-us/).

## Legal Disclaimer

To the maximum extent permitted by applicable law, in no event will Simon Fraser University or any of its affiliates, or any of their respective governors, directors, employees, or agents, be liable for the failure of any content on applications implementing this theme to meet these accessibility standards, to the extent that such content was submitted or uploaded by a third party.

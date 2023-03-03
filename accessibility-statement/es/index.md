---
generateHeadingToc: true
---

# Declaración de accesibilidad para  el tema por defecto (Default theme) de OJS 3.3+ 

## Introducción

El Public Knowledge Project (PKP) se ha comprometido a garantizar que sus plataformas sean lo más accesibles posible a su comunidad. Para lograr este objetivo, PKP desarrolló un nueva versión del tema por defecto para OJS 3.3 y superior, que fue auditado por Access Changes Everything Inc., una empresa canadiense de consultoría de accesibilidad, para detectar posibles  barreras de accesibilidad en él.

## Informaciones de la Auditoría

Access Changes Everything Inc. realizó una auditoría del tema por defecto para la versión 3.3 de OJS desde julio de 2019 hasta marzo de 2021. Access Changes Everything Inc. proporcionó dos auditorías utilizando varios verificadores automáticos y realizó extensas pruebas manuales durante el proceso de desarrollo. También se realizaron auditorías exhaustivas mediante la contratación de testers con diferentes necesidades especiales, quienes utilizaron diferentes tecnologías durante el proceso; estas tecnologías se enumeran a continuación. Algunos de los testers también participaron en el proceso de prueba final.

Esta auditoría se enfocó principalmente en reducir las barreras en el tema por defecto  para personas con necesidades especiales variadas, tales como visión, audición, movilidad, habla, comunicación, cognitiva, neurológica, intelectual, de aprendizaje y para personas con discapacidades múltiples.

### Informaciones sobre normas

Esta auditoría se realizó utilizando el estándar web internacional referente a la accesibilidad en el tema estándar OJS: el Web Content Accessibility Guidelines (WCAG) 2.1 y 2.2 Level AA. Es importante tener en cuenta que la versión 2.2 todavía era un borrador en mayo de 2020.

La auditoría fue mucho más allá de WCAG 2.1 o WCAG 2.2 (Borrador) Nivel AA. Se incluyeron ítems que no están actualmente en las WCAG, como daltonismo, estilo y tipo de tipografía, así como la reducción de barreras que impactan a personas con discapacidades cognitivas, neurológicas, intelectuales y/o de aprendizaje. La auditoría también incluyó las mejores prácticas de usabilidad para hacer que el sistema sea más utilizable y accesible para todos.

La auditoría incluyó pruebas en las siguientes áreas:

* Contenido textual
* Contenido de imagen
* Contenido audiovisual
* Color en contenido y design
* Visual de páginas y contenido
* Design de página y contenido
* Navegación
* Herramientas de búsqueda
* Widgets y complementos
* Formularios y mecanismos de error
* Estructura de contenido
* Uso de código HTML y CSS

### Testers y tecnologías utilizadas

Access Changes Everything Inc. contrató varios testers con diferentes discapacidades, que utilizan diferentes tecnologías, para probar diferentes partes del tema predeterminado para OJS 3.3. Las tecnologías utilizadas por los testers incluyen versiones más nuevas pero también antiguas de:

* Lector de pantalla JAWS para navegadores Chrome y EDGE (PC y tableta)
* Lector de pantalla JAWS en navegadores Internet Explorer con pantalla Braille PacMate 20 (PC)
* Lector de pantalla NVDA en navegadores Chrome (PC)
* Lector de pantalla Narrator de Microsoft en EDGE (tableta)
* Lector de pantalla Apple VoiceOver en Safari (iPhone 6)
* Lector de pantalla Apple VoiceOver en Safari con pantalla Braille de 40 celdas (Mac)
* Lector de pantalla Apple VoiceOver en Safari con pantalla Braille de 40 celdas (iPad Pro)
* Dragon Naturally Speaking Premium 13 (PC)

Access Changes Everything Inc. usó Mac, PC y iPhone para probar el sitio en los navegadores Chrome y Firefox. Algunas tecnologías se utilizaron en la auditoría:

* Ampliación del navegador (100% -400%)
* Cambio de contraste de color
* Control por voz (solo iPhone)
* Pantallas reducidas (solo iPhone SE o 5)
* Varias aplicaciones y complementos para Chrome y Firefox en Mac para simular discapacidades visuales y cognitivas.

### Soluciones y barreras restantes

Una vez recibido el informe de auditoría completa en diciembre de 2019, el PKP creó el [Proyecto de Accesibilidad en Github](https://github.com/pkp/pkp-lib/projects/16) para dar seguimiento a problemas específicos y el proceso para solucionarlos.  El proyecto  está abierto a los miembros de la comunidad para que puedan comunicar problemas relacionados con la accesibilidad en la interfaz del usuario y en las funcionalidades de la plataforma.

En 2021, Access Changes Everything Inc. condujo una auditoría de seguimiento del tema por defecto para evaluar las correcciones realizadas por los desarrolladores del PKP. La mayoría de las cuestiones identificadas en el informe inicial fueron resolvidas por PKP, o, por lo menos, alternativas aceptables fueron sugeridas por Access Changes Everything Inc.

Aún quedan barreras que no pudieron eliminarse por completo. Estas están siendo resueltas por PKP o pueden tratarse de la forma en la que OJS es utilizado por las revistas que lo adoptan:

* reCAPTCHA. Cuando se habilita en la página de registro, reCAPTCHA presenta una barrera sustancial para lectores de pantalla con dispositivos braille y usuarios con comandos de voz en un iPhone. Además, reCAPTCHA carece de un título de iFrame y una etiqueta de formulario, por lo que incluso los lectores de pantalla que logran usarlo también pueden enfrentar barreras.

reCAPTCHA es un sistema y servicio de seguridad de terceros desarrollado por Google e integrado como una función opcional de OJS que se puede desactivar. El  [Plugin Honeypot de OJS](https://github.com/ulsdevteam/pkp-formHoneypot), es una de las alternativas a este sistema. 

* Contenido. El contenido del sitio web y el contenido publicado creado fuera de los estándares de accesibilidad pueden representar una barrera. Puede incluir, entre otros: imágenes enviadas sin texto alternativo, estructuras de encabezado mal estructuradas, enlaces inaccesibles, falta de subtítulos para las figuras y estructura incorrecta o incompleta de los datos tabulados. Aunque están fuera del alcance de Accesibilidad del tema por defecto , el PKP proporciona orientación a los editores sobre [Creando Contenido Accesible](https://docs.pkp.sfu.ca/accessible-content/).
* Barreras restantes. Las  barreras restantes están en el [Proyecto Github de Accesibilidad del PKP](https://github.com/pkp/pkp-lib/projects/16) que continuará siendo actualizado conforme éstas sean resueltas.

## Contáctenos

La auditoría del tema por defecto de OJS encontró varias barreras y la mayoría fueron eliminadas. Sin embargo, el tema recibe actualizaciones constantemente y pueden surgir nuevas barreras inadvertidamente. Si encuentra obstáculos o necesita ayuda, contáctenos a través del [formulario de contacto web del PKP](https://pkp.sfu.ca/contact-us/).

## Aviso Legal

En la máxima medida permitida por la ley aplicable, en ningún caso la Universidad Simon Fraser o cualquiera de sus afiliadas, o cualquiera de sus respectivos gobernadores, directores, empleados o agentes, serán responsables de la falla de cualquier contenido en las aplicaciones que implementan este tema para cumplir con estos estándares de accesibilidad, en la medida en que dicho contenido haya sido enviado o creado por terceros.

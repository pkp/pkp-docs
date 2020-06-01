# Planificación de una actualización mayor

Una vez que haya revisado las características de OJS 3 y haya decidido que desea continuar con la actualización, deberá realizar una planificación cuidadosa para garantizar un proceso sin problemas, una interrupción mínima en su calendario de publicaciones y un personal editorial feliz. Muchos de los cambios están relacionados con recursos humanos (es decir, formación y diseño visual), pero también técnicos, por lo que una comunicación clara es importante en cada etapa.

Los pasos principales para completar una actualización son los siguientes:

1. Decida si está listo para actualizar a OJS 3 y cuándo lo hará
2. Decida a qué versión de OJS 3 actualizará
3. Comunique la actualización a su equipo editorial o a los contactos de la revista
4. Asegúrese de que su servidor cumple con los requisitos de OJS 3 y modifíquelo si es necesario
5. Haga un inventario
6. Limpie la base de datos de usuarios/as existente
7. Realice un "sandbox" o una actualización de prueba
8. Evalúe, pruebe y solucione problemas de su sitio "sandbox" OJS 3
9. Planifique un nuevo "theming"/aspecto de la revista
10. Confirme que su equipo está listo para la actualización de producción
11. Programe la actualización de producción
12. Establezca fechas de congelación de contenido si es necesario
13. Lleve a cabo la actualización de producción
14. Evalúe, pruebe y solucione problemas de su nuevo sitio OJS 3
15. Formación y configuración

Este capítulo se centra en los pasos iniciales de planificación y recursos humanos del proceso de actualización. El siguiente capítulo cubre los pasos técnicos.

## Decida si está listo para actualizar a OJS 3 y cuándo lo hará

El desarrollo de OJS sigue en curso y se lanzan nuevas versiones con nuevas características cada pocos meses. Puede ser estratégico al decidir cuándo actualizar en función de cuándo estarán disponibles las funciones deseadas. Por ejemplo, si un módulo en particular es importante para sus usuarios/as y no estará disponible para OJS 3 hasta el próximo año, puede esperar hasta el próximo año para llevar a cabo su actualización mayor. También puede esperar hasta que una nueva versión de OJS haya sido probada completamente y esté libre de errores, lo que a veces no sucede inmediatamente después de su lanzamiento oficial. Sin embargo, si OJS 3 tiene todas las características principales que necesita, la programación de la actualización implicará otras consideraciones que se describen en este capítulo.

- Identifique las características esenciales utilizadas en su(s) revista(s). Debería discutir esto con su equipo editorial y asegurarse de comprender totalmente sus necesidades y flujos de trabajo.
- Aprenda sobre OJS 3 y sus características y funciones
- Si una versión de OJS 3 satisface sus necesidades, es hora de preparar a sus equipos de revistas para la actualización. Esto puede involucrar apoyo editorial, técnico y de recursos humanos. Deberá coordinar el momento de la actualización con todos los involucrados en la revista. Generalmente, el mejor momento para actualizar es cuando la revista no se encuentra en una fase activa del ciclo de publicación, y el momento específico de la actualización debe programarse cuando todos los miembros del equipo estén disponibles para realizar la actualización en sí y para revisar la revista inmediatamente después de la actualización por si surgieran problemas y se tuvieran que hacer los cambios necesarios para solucionarlos.

Para obtener recursos adicionales que describan las nuevas funcionalidades en OJS 3 y los documentos relacionados con la actualización, consulte la sección "Recursos adicionales" al final de esta guía.

## Decida a qué versión de OJS 3 quiere actualizar

Generally you should upgrade to the latest version of OJS. However, if the latest version is a new major release (e.g., OJS 3.1.0, OJS 3.2.0), you may want to wait until the next minor release is available (e.g., OJS 3.1.0-1; OJS 3.2.0-1) because usually a new major release has a few unexpected bugs that will be fixed in the first minor release that follows. Check the [https://pkp.sfu.ca/category/news/](PKP website) for news about releases when making this decision.

## Planifique su actualización

Teniendo en cuenta los pasos necesarios, cree un plan y un cronograma para la actualización.

## Comunique la actualización a su equipo editorial o a los contactos de la revista

Dependiendo de si es una institución o un editor/a que aloja o apoya varias revistas, o de si es administrador/a de una sola revista, puede comunicarse directamente con el equipo editorial de una revista o con un contacto principal de cada revista, que luego se comunicará o dará soporte al equipo editorial. Anuncie la actualización a su equipo editorial o a los contactos de la revista. La actualización afectará principalmente a los administradores/as de revistas, a los editores/as y a los editores/as de sección. Estos deben estar informados del cambio, recibir información sobre cómo usar la nueva versión de OJS y participar en la cronología de la actualización. Es poco probable que los revisores/as y los autores/as se vean afectados por la actualización y notarán pocos cambios en sus flujos de trabajo.

Determine qué formación y soporte necesitará su equipo editorial antes y después de la actualización y cómo se proporcionará.

## Asegúrese de que su servidor cumple con los requisitos de OJS 3 y modifíquelo si es necesario

Los requisitos de servidor recomendados para OJS 3 son:

- PHP >= 7.2
- MySQL >= 4.1 o PostgreSQL >= 9.1.5
- Apache >= 1.3.2x o >= 2.0.4x o Microsoft IIS 6
- Sistema operativo: cualquier sistema operativo que admita el software anterior, incluidos Linux, BSD, Solaris, Mac OS X, Windows

Como PKP no tiene los recursos para probar todas las combinaciones posibles de versiones de software y plataformas, no se garantiza el correcto funcionamiento ni el soporte. Agradecemos los comentarios de los usuarios/as que han implementado OJS en sistemas distintos a los mencionados anteriormente.

## Haga un inventario de su revista

Antes de continuar con la actualización, se recomienda encarecidamente que haga un inventario de su revista.

Durante la actualización, los siguientes elementos se moverán automáticamente de OJS 2 a OJS 3:

- Envíos
- Usuarios/as
- Configuración de roles/permisos
- Avisos
- Secciones

Es aconsejable que **guarde una copia de todos los datos** que aparecen en las páginas de su revista para recuperarlos en OJS 3. También podría ser útil tener capturas de pantalla de toda la configuración de la revista en OJS 2 como referencia. Notará que se han realizado una serie de cambios entre OJS 2 y OJS 3, por lo que la información introducida en la configuración de OJS 2 deberá introducirse en diferentes lugares en OJS 3.

Los elementos que deberán volver a crearse una vez que haya actualizado a OJS 3 son los siguientes:

- Información de la revista: cabecera, equipo editorial, permisos, etc.
- Personalizaciones: CSS, imágenes, códigos de color
- Ajustes de configuración de la revista e información textual
- Módulos
- Páginas/Menús
- Enlaces
- Archivos
- Plantillas de correo electrónico personalizadas
- Formularios de revisión
- Bloques personalizados
- Cargas de PDF

Le recomendamos que guarde las personalizaciones que haya realizado localmente en el "sandbox" (imágenes, CSS, textos) para volver a cargarlas según sea necesario en la versión de producción final.

Si su instalación de OJS 2 tiene enlaces a archivos PDF cargados u otros archivos (por ejemplo, formularios de suscripción, acuerdos), estos deberán volver a cargarse en la Biblioteca editorial y actualizarse en el hipervínculo. El directorio de archivos de OJS 2 ya no funcionará después de la actualización.

## Limpie la base de datos de usuarios/as existente

La actualización de OJS 2 a OJS 3 también es una oportunidad para eliminar todos los usuarios/as que puedan ser spam, lo cual es un problema común en OJS, particularmente antes de que PKP implementara reCAPTCHA en el registro de la cuenta. Hay varias formas de identificar a estos usuarios/as, pero una opción es a través de los dominios de correo electrónico utilizados cuando el usuario/a se registró. Mediante la siguiente consulta SQL, usted o el administrador/a de su sistema pueden identificar los dominios para localizar posibles usuarios/as spam:

```
SELECT substring_index(email, '@', -1) domain, COUNT(*) email_count
FROM users
GROUP BY substring_index(email, '@', -1)

-- If you want to sort as well:
ORDER BY email_count DESC, domain;
```

Una vez que haya identificado los dominios que están conectados a los usuarios/as spam, puede usarlos para crear una lista de nombres de usuario/a para limpiar con una búsqueda:

```
SELECT * FROM users
WHERE email LIKE "%@spam.com"
OR email LIKE "%morespam.com"
...
```

Con esta lista de nombres de usuario, puede usar la herramienta de fusión de usuarios incorporada en OJS (en su directorio OJS en `tools/mergeUsers.php` ) para limpiar usuarios/as. Hemos creado un pequeño script bash para hacer esto, y PKP también tiene un proceso que recomiendan. Deberá crear una cuenta de usuario/a en la que se puedan fusionar todas las cuentas si aún no existe una. Tenga en cuenta que, si bien es casi imposible encontrar a todos los usuarios/as spam en una búsqueda extensa de OJS, es posible que pueda reducirlos significativamente, minimizando así la cantidad de datos en su caso y facilitando a los equipos de la revista la gestión de sus usuarios/as. Es importante utilizar la herramienta de fusión en lugar de eliminar usuarios/as spam de la lista de usuarios/as, ya que eliminar usuarios/as puede producir errores importantes en su instalación.

## Realice un "sandbox" o una actualización de prueba

Consulte la sección a continuación en [Actualización de su instancia de OJS - Paso  1 - Realizar una actualización Sandbox](./upgrading-ojs#step-1-perform-a-sandbox-upgrade)

## Evalúe, pruebe y solucione problemas de su sitio "sandbox" OJS 3

Haga que todos los miembros del equipo de la revista que usan regularmente el sitio (por ejemplo, los gestores/as de la revista, los editores/as y los editores/as de sección) revisen el sitio sandbox y aporten sus comentarios. Este es un excelente momento para proporcionar formación sobre el uso del nuevo sistema, si planea impartirla. Si descubre que alguna funcionalidad crítica no está disponible en la nueva versión, considere posponer la actualización o proponga ideas para adaptar las diferencias en la funcionalidad.

Este es un excelente momento para revisar el flujo de trabajo de la revista. Es posible que el equipo de la revista quiera aprovechar las nuevas funciones o simplemente mejorar el flujo de trabajo existente mientras forma al equipo en el uso del nuevo sistema.

Asegúrese de que el equipo de la revista comprende que los cambios realizados en el sitio sandbox no se incorporarán al sitio de producción hasta después de la actualización. Haga una lista de todos los cambios en el contenido y en la estructura solicitados durante la revisión del sitio de sandbox para que puedan aplicarse al sitio de producción inmediatamente después de la actualización.

## Planifique un nuevo "theming"

OJS 3 maneja el "theming" para el sitio web de manera diferente a las versiones anteriores del software, por lo que la apariencia de su revista cambiará. Tendrá nuevas opciones para personalizar el aspecto de su revista a través de la selección actual de temas.

Si ha aplicado temas personalizados a su revista en OJS 2, ese tema no se mostrará correctamente en OJS 3. Puede optar por usar uno de los temas disponibles en OJS 3 o crear un nuevo tema personalizado que funcione en OJS 3. Si crea un nuevo tema personalizado, debe desarrollarlo antes de la actualización para poder implementarlo en el sitio de producción inmediatamente después de la actualización. Consulte la [guía de diseño de su revista](https://docs.pkp.sfu.ca/designing-your-journal/en) de PKP para obtener ayuda para crear un aspecto personalizado de su revista. La [Guía de temas](https://docs.pkp.sfu.ca/pkp-theming-guide/en/) de PKP se puede utilizar para desarrollar un tema personalizado para su revista.

## Confirme que su equipo está listo para la actualización de producción

A pesar de que ha estado en comunicación con los distintos miembros del equipo durante este proceso, es importante consultar a cada miembro del equipo para confirmar que están listos para continuar con la actualización. La actualización de OJS 2 a OJS 3 es un cambio importante que, según la revista, puede involucrar a muchas partes interesadas, con roles grandes o pequeños, en la actualización. Consulte a cada miembro del equipo para confirmar que están listos para la actualización.

## Programe la actualización de producción

Una vez que esté listo para continuar con la actualización, comunique al equipo(s) de la revista:

- La(s) fecha(s) de actualización
- El tiempo de inactividad durante el cual el sitio web de la revista no estará disponible
- La congelación del contenido si pone en pausa la creación/modificación de nuevo contenido antes de la actualización
- Los contactos de soporte para consultas y asistencia

Si la actualización implica tiempo de inactividad o una congelación de contenido nuevo, asegúrese de solicitar acuse de recibo por correo electrónico una vez que se anuncien las fechas.

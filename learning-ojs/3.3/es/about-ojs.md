---
book: learning-ojs
showPageTOC: true
version: 3.3
---

# Acerca de Open Journal Systems (OJS) {#about-ojs}

Open Journal Systems \(OJS\) es una solución de código abierto para la gestión y publicación de revistas científicas en línea. OJS es un sistema de gestión y publicación altamente flexible operado por el editor que se puede descargar gratuitamente e instalar en un servidor web local.

Ha sido diseñado para reducir el tiempo y la energía dedicadas a las tareas administrativas y de gestión asociadas a la edición de una publicación, mientras se mejora el registro y la eficiencia de los procesos editoriales. Su objetivo es mejorar la calidad académica y pública en la publicación de revistas a través de una serie de innovaciones, incluyendo la mejora de la experiencia del lector, una mayor transparencia de las políticas de la revista y la mejora de su indexación.

Esta guía cubre la versión 3.3 de OJS, lanzada en febrero de 2021, e incluye mejoras significativas sobre las versiones previas de la aplicación. Esperamos que la encuentre útil para sus proyectos de publicación.

## Contexto

Este video de la PKP School explica las bases de PKP y OJS. Para ver otros videos de esta serie, visite el [canal de YouTube de PKP](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).

{% include video.html id="SQfFGwIK2wI" provider="youtube" title="Video de las bases de PKP y OJS"%}

_OJS es un sistema de gestión/publicación de páginas web/revistas_. OJS cubre todos los aspectos de la publicación de revistas en línea, desde el establecimiento de un sitio web para dicha revista hasta tareas operativas como el proceso de envío del autor, revisión por pares, edición, publicación, archivo e indexación de la misma. OJS también ayuda a gestionar los aspectos de las personas de la organización de una revista, incluyendo el seguimiento del trabajo de los editores, revisores, y autores, notificando a los lectores y ayudando con la correspondencia.

_OJS es flexible y escalable_. Una sola instalación de OJS puede soportar el funcionamiento de una o varias revistas. Cada revista tiene su propia URL única, así como su propia apariencia y estilo. OJS puede permitir a un único editor gestionar todos los aspectos de una revista y el sitio web de la misma, o apoyar a un equipo internacional de editores con diversas responsabilidades para las múltiples secciones de la revista.

_OJS apoya el principio de extender el acceso_. Este sistema está destinado no sólo a ayudar con la publicación de revistas, pero para demostrar cómo los costos de la publicación de revistas pueden reducirse a tal punto de que proporcionar a los lectores "acceso abierto" al contenido de la revista se convierta en una opción viable. Este sistema está destinado no sólo a ayudar con la publicación de revistas, pero para demostrar cómo los costos de la publicación de revistas pueden reducirse a tal punto de que proporcionar a los lectores "acceso abierto" al contenido de la revista se convierta en una opción viable.

_Los orígenes de OJS_. El sistema fue lanzado por primera vez en 2001 como una iniciativa de investigación y desarrollo en la Universidad de British Columbia, con el apoyo del Consejo de Investigación de Ciencias Sociales y Humanidades de Canadá, la Fundación Max Bell, el Pacific Press Endowment y la Fundación MacArthur. Su continuo desarrollo está actualmente supervisado por la Biblioteca de la Universidad Simon Fraser. Para obtener más información, consulte el [sitio web de Public Knowledge Project](https://pkp.sfu.ca).

<hr />

## Características de OJS

Visite nuestro sitio web para obtener más información sobre [Open Journal Systems](https://pkp.sfu.ca/software/ojs) y lo que ofrece el proceso editorial, desde la presentación y revisión por pares hasta la producción y distribución.

## Instalar y Actualizar

OJS es fácil de instalar y configurar. Sin embargo, ejecutar un servicio web requiere un administrador de sistemas que sepa cómo implementar aplicaciones web. Nuestra Guía del administrador (disponible en inglés) proporciona instrucciones sobre cómo [ descargar, instalar y configurar OJS](/admin-guide/en).

> Si no tiene la experiencia, el personal o el deseo de instalar y administrar el OJS por su cuenta [PKP Publishing Services](https://pkp.sfu.ca/hosting-services) proporciona servicios de alojamiento para cada presupuesto.
> {:.tip}

## Novedades en OJS 3.3 {#whats-new}

OJS 3.3 tiene un menú de navegación simplificado en el panel de control y nuevas características relacionadas con la gestión de envíos, la comunicación con los usuarios y la accesibilidad. Esta sección describe los cambios principales para saber qué esperar cuando se actualiza a OJS 3.3. También puedes ver [un vídeo que muestra nuevas características en OJS 3.3](https://youtu.be/TyZ4v_AgS1o?si=zMSKskmhFuOQ7Jt1), creado por [PKP Publishing Services](https://pkpservices.sfu.ca).

Muchos de estos cambios son aplicables también a Open Monograph Press (OMP) y Open Preprint Systems (OPS).

Si estás actualizando desde el OJS 2 y deseas ver una visión general de los cambios en el OJS 3, explora [Novedades en OJS 3 en una versión anterior de esta guía](https://docs.pkp.sfu.ca/learning-ojs/3.1/en/introduction#whats-new-in-ojs-3) (disponible en inglés) y la guía de PKP para [Actualizar de OJS 2 a OJS 3](https://docs.pkp.sfu.ca/upgrading-ojs-2-to-3/). Es importante tener en cuenta que primero se debe actualizar de OJS 2 a OJS 3.2, y desde allí actualizar a OJS 3.3.

Un resumen de los cambios en el OJS 3, que son relevantes para los desarrolladores y el desarrollo, está disponible el libro de notas [para OJS/OMP/OPS v3.3](https://docs.pkp.sfu.ca/dev/release-notebooks/en/3.3-release-notebook)

### Menús de navegación e interfaz del panel

Hay algunos cambios en la interfaz del panel de control y en los menús de navegación para los usuarios registrados en OJS 3.3.

Administradores de revistas, editores, revisores, autores y otros que inicien sesión podrán notar un cambio en el menú principal de navegación en el lado izquierdo. En 3.3, sólo los usuarios en roles que tengan acceso a los menús de configuración (Administradores y Editores de revistas) verán el menú de navegación a la izquierda. También hay enlaces de menú adicionales para problemas, anuncios y pagos, y algunos de los enlaces del menú se han movido.

![El panel de control que los gestores/as de la revista ven al iniciar sesión](./assets/learning-ojs-3.3-navigation-menu-dashboard-jm.png)

Los usuarios en otros roles no verán el menú porque sólo pueden acceder a los Envíos.

![El panel de control que los autores ven al iniciar sesión](./assets/learning-ojs-3.3-navigation-menu-dashboard-author.png)

Un usuario ahora puede acceder a su perfil de usuario y seleccionar un idioma en revistas multilingües haciendo clic en el icono de usuario en la esquina superior derecha.

![El menú donde los usuarios pueden editar su perfil y seleccionar un idioma](./assets/learning-ojs-3.3-navigation-menu-dashboard-user-menu.png)

El hipervínculo a la página principal del sitio público de la revista se ha movido. Un Gestor o Editor de la revista ahora puede ver el sitio público de la revista haciendo clic en el nombre, que aparece en la esquina superior izquierda de la página. Para instalaciones con múltiples revistas, al hacer clic en el símbolo del mapa del sitio en la esquina superior izquierda de la página, desplegará una lista de publicaciones en la instalación aparecerá abajo para seleccionar la revista en la que se trabajará.

![El hipervínculo para ver el sitio web de la revista](./assets/learning-ojs-3.3-navigation-menu-dashboard-view-journal.png)

### Flujo de trabajo editorial

#### Cargar archivos de envío

Durante el envío, los autores pueden subir varios archivos a la vez, así como arrastrar y soltar archivos. Ya no se les pide que introduzcan metadatos como descripción, licencia, etc. Esta información puede introducirse durante el flujo de trabajo, donde la antigua ventana de carga de archivos todavía está en uso. Puedes encontrar más instrucciones en el capítulo [de Autores](./authoring#step-2).

<figure class="video_container">
  <video controls="true" allowfullscreen="true">
    <source src="./assets/learning-ojs3.3-upload-submission-files.mp4" type="video/mp4">
  </video><figcaption>Un breve video que muestra cómo se pueden subir archivos en OJS 3.3.</figcaption>
</figure>

#### Filtros de envío

Todos los envíos Activos y Archivados ahora pueden ser filtrados por número y editor asignado. Sólo los gestores/as de la revista pueden filtrar por el editor asignado. Puedes encontrar más instrucciones en el capítulo [ de Proceso Editorial](./editorial-workflow#submission-dashboard).

#### Invertir una decisión de rechazo

Una nueva acción editorial permite a los editores revertir la decisión de rechazar un envío en las fases de envío y revisión. Después de que se revierte una decisión de rechazo, el envío se restablece a su etapa anterior y ronda de revisión, si está activa. Puedes encontrar más instrucciones en el capítulo [ de Proceso Editorial](./editorial-workflow#assigning-the-submission).

#### Borrar sólo envíos rechazados

Sólo los envíos rechazados pueden ser borrados de la lista de envíos. Puedes encontrar más instrucciones en el capítulo [ de Proceso Editorial](./editorial-workflow#archives).

#### Actualización de la terminología de las revisiones

En versiones anteriores de OJS, los tipos de revisión eran “Doble Ciego”, “Ciego” y “Abierta”. En OJS 3.3 se han cambiado a "Revisor anónimo/Autor anónimo", "Revisor anónimo/Autor público" y "Abierta".

#### Mostrar categorías en la página del artículo

Las categorías asignadas por un artículo aparecen ahora en la página de inicio del artículo. Puedes encontrar más instrucciones en el capítulo [Ajustes de la revista](./journal-setup#categories).

#### Deshabilitar envíos

Los gestores/as de la revista y editores/as pueden configurar los ajustes de flujo de trabajo para desactivar todos los envíos de una revista. Esto puede ser utilizado por revistas que ya no aceptan nuevo contenido. Puedes encontrar más instrucciones en el capítulo [Ajustes de la revista](./journal-setup#sections).

### Gestión de usuarios y comunicación

#### Exportar usuarios

Ahora hay una herramienta de exportación disponible en Herramientas > Importar/Exportar que puede ser usada para exportar usuarios a un archivo CSV. Esto se puede utilizar para importar usuarios a servicios de correo de terceros. Puedes encontrar más instrucciones en el capítulo [Usuarios y Roles](./users-and-roles#email-users).

#### Notificar usuarios

OJS 3.3 incluye ahora una característica muy solicitada para notificar, o enviar un mensaje a todos los usuarios en un rol. Consulte el capítulo [Usuarios y roles](./users-and-roles#email-users) para más detalles.

#### Filtrar plantillas de correo por etapa de flujo de trabajo

Al administrar y editar plantillas de correo electrónico en Ajustes del flujo de trabajo > Email, los gestores/as y editores de la revista pueden filtrar las plantillas de correo electrónico por etapa del flujo de trabajo. Puedes encontrar más instrucciones en el capítulo [Ajustes del flujo de trabajo](./settings-workflow#filters).

### Accesibilidad

En 2019 la OJS fue evaluada en temas de accesibilidad para personas con discapacidad y que usan tecnología de asistencia. Todos los cambios recomendados por la auditoría han sido implementados en el OJS 3.3, incluyendo un tema por defecto accesible y bloques personalizados que ahora requieren un título. Más información sobre bloques personalizados está en el capítulo [Configuración del sitio web](./settings-website#custom-block-plugin).

### Para Revistas multilingües

OJS 3.3 tiene una serie de nuevas características que mejoran el uso de revistas que trabajan o publican en varios idiomas.

#### Formato de fecha y hora

Ahora se pueden especificar los formatos de fecha y hora para cada revista e idioma. Más instrucciones están en el capítulo [Configuración del sitio web](./settings-website#date-and-time).

#### Idiomas leídos de derecha a izquierda

Hay un mejor soporte para idiomas que se leen de derecha a izquierda, como el árabe, Farsi, y hebreo, en el editor de texto enriquecido que aparece en muchos campos de formulario en el OJS.

#### URL remotas

Los elementos del menú de navegación con URL remotas ahora pueden tener diferentes URL para cada idioma.

## Contribuciones comunitarias

El equipo OJS fomenta las contribuciones de la comunidad de desarrolladores. Si estás interesado en participar en la mejora de los OJS, le damos la bienvenida a tu participación.

Excelentes ejemplos de contribuciones comunitarias incluyen la amplia gama de idiomas en los que está disponible el OJS; y plugins de terceros publicados en el [foro de la comunidad](https://forum.pkp.sfu.ca/) y en la página archivada del foro.

También aceptamos con satisfacción las contribuciones de testeo de software y reporte de errores.

## Soporte

PKP ofrece los siguientes recursos gratuitos de soporte para OJS:

- [PKP Docs Hub](https://docs.pkp.sfu.ca/): Guías de usuarios, documentación del desarrollador y consejos de publicación para todo nuestro software. También incluye enlaces a videos desarrollados por la comunidad.
- [Foro de la comunidad PKP](https://forum.pkp.sfu.ca/): Un foro de discusión en línea donde puedes hacer preguntas, responder preguntas y compartir ideas.
- [PKP School](https://pkpschool.sfu.ca/): Una colección de cursos en línea, abiertos y a ritmo propio diseñados por expertos de PKP en inglés y español. Incluye video tutoriales sobre la configuración de una revista; el proceso editorial en OJS 3; y Convertirse en editor.

También hay un enlace "Ayuda" en la esquina superior derecha de cada página en OJS, OMP, y OPS donde usted puede encontrar información sobre la página en la que se está trabajando y sus funciones.

Para preguntas acerca del sitio de una revista en particular, tales como requisitos de envío, póngase en contacto directamente con esa revista, utilizando la información de contacto listada en la página **Acerca de**.

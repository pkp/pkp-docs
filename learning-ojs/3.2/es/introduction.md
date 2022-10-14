---
book: learning-ojs
version: 3.2
---

# Introducción

Open Journal Systems \(OJS\) es una solución de código abierto para la gestión y publicación de revistas científicas en línea. OJS es un sistema de gestión y publicación altamente flexible operado por el editor que se puede descargar gratuitamente e instalar en un servidor web local.

Ha sido diseñado para reducir el tiempo y la energía dedicadas a las tareas administrativas y de gestión asociadas a la edición de una publicación, mientras se mejora el registro y la eficiencia de los procesos editoriales. Su objetivo es mejorar la calidad académica y pública en la publicación de revistas a través de una serie de innovaciones, incluyendo la mejora de la experiencia del lector, una mayor transparencia de las políticas de la revista y la mejora de su indexación.

Esta guía cubre la versión 3.2 de OJS, publicada en febrero de 2020, y contiene mejoras significativas sobre las versiones anteriores del software. Esperamos que la encuentre útil para sus proyectos de publicación.

## Contexto

*OJS es un sistema de gestión/publicación de páginas web/revistas*. OJS cubre todos los aspectos de la publicación de revistas en línea, desde el establecimiento de un sitio web para dicha revista hasta tareas operativas como el proceso de envío del autor, revisión por pares, edición, publicación, archivo e indexación de la misma. OJS también ayuda a gestionar los aspectos de las personas de la organización de una revista, incluyendo el seguimiento del trabajo de los editores, revisores, y autores, notificando a los lectores y ayudando con la correspondencia.

*OJS es flexible y escalable*. Una sola instalación de OJS puede soportar el funcionamiento de una o varias revistas. Cada revista tiene su propia URL única, así como su propia apariencia y estilo. OJS puede permitir a un único editor gestionar todos los aspectos de una revista y el sitio web de la misma, o apoyar a un equipo internacional de editores con diversas responsabilidades para las múltiples secciones de la revista.

*OJS apoya el principio de extender el acceso*. Este sistema está destinado no sólo a ayudar con la publicación de revistas, pero para demostrar cómo los costos de la publicación de revistas pueden reducirse a tal punto de que proporcionar a los lectores "acceso abierto" al contenido de la revista se convierta en una opción viable. El apoyo al acceso abierto se describe en una amplia serie de artículos derivados de este proyecto que están disponibles libremente en Investigación > Publicaciones en el sitio web de [Public Knowledge Project](https://pkp.sfu.ca/).

*Los orígenes de OJS*. El sistema fue lanzado por primera vez en 2001 como una iniciativa de investigación y desarrollo en la Universidad de British Columbia, con el apoyo del Consejo de Investigación de Ciencias Sociales y Humanidades de Canadá, la Fundación Max Bell, el Pacific Press Endowment y la Fundación MacArthur. Su continuo desarrollo está actualmente supervisado por la Biblioteca de la Universidad Simon Fraser. Para obtener más información, consulte el [sitio web de Public Knowledge Project](https://pkp.sfu.ca).

<hr />

## Características de OJS

OJS incluye las siguientes características:

1. OJS se instala y se controla localmente
2. Los editores configurar los requisitos, las secciones, el proceso de revisión, etc.
3. Envío en línea, revisión doble ciega y gestión de todo el contenido
4. Indexación integral del contenido
5. Interfaz de lector responsiva y modificable
6. Notificaciones por correo electrónico para lectores
7. Soporte para cargos de procesamiento de artículos, suscripciones y pagos en línea
8. Soporte completo de ayuda en línea sensible al contexto
9. Soporte Multilingüe

## Qué hay de nuevo en OJS

OJS 3 es significativamente diferente de su predecesor, OJS 2. Incluye mejoras y nuevas características desarrolladas a partir de retroalimentación comunitaria, pruebas de usabilidad extensivas y nuevas capacidades de diseño de software.

## Interfaz de Lector

De forma predeterminada, Open Journal Systems se instala con una interfaz de usuario muy sencilla y funcional. Esto incluye un encabezado superior, barra de navegación, bloques de navegación a la derecha y un bloque de contenido principal en el centro de la página.

La siguiente imagen es una captura de pantalla de la Tabla de Contenidos de una revista de demostración en OJS.

![Tabla de Contenidos para una revista de muestra de OJS.](./assets/learning-ojs-3-ojs3-interface.png)

Se puede ver en la captura de pantalla que las funciones del usuario ahora existen en el menú de perfil en la parte superior derecha de la pantalla. Esto aleja el contenido administrativo de OJS 3.x de la vista general del usuario. La información de la barra lateral está claramente separada, así como la barra de navegación superior con menús colapsables para las funciones "Acerca de". Al igual que en OJS 2, cada artículo tiene un título vinculado para ver metadatos y resúmenes del objeto, y las galeradas ahora están claramente etiquetadas debajo de los títulos con logotipos más claros.

## Interfaz Editorial

_Alias "El Panel de Control"_

OJS 3.x tiene una interfaz separada una vez que ingresa al sistema editorial. Esto no sólo facilita la personalización de la interfaz de lectores, sino que también proporciona a los usuarios de diferentes revistas una experiencia consistente.

<figure class="video_container">
  <video controls="true" allowfullscreen="true">
    <source src="./assets/learning-ojs3.2-ed-dashboard.mp4" type="video/mp4">
  </video>
  <figcaption>Mp4 animado que muestra los elementos principales del panel de control de OJS.</figcaption>
</figure>

La interfaz editorial es conocida como su **panel de control** y consta de los siguientes elementos:

1. **Barra de navegación superior**: A la izquierda, encontrará el nombre de la revista con la que estás trabajando actualmente \(ej., Journal of Public Knowledge\). Si está inscrito en más de una resvista en la misma instalación de OJS, puede utilizar esto para cambiar entre revistas. Junto a eso están sus Tareas \(elementos que necesitan atención inmediata\). A la derecha, puede cambiar de idioma si la revista es multilingüe, ver la interfaz del lector, o hacer click en su nombre de usuario para [ver su perfil](./user-accounts#viewing-and-changing-your-profile) o cerrar sesión.
2. **Panel de menú izquierdo**: Estas son las secciones principales del panel de control, incluyendo los envíos, gestión de números, administración de suscripciones (si está administrando una revista usando suscripciones), configuración, administración de roles y usuarios y herramientas. Los usuarios con menos permisos (por ejemplo, autores, revisores, copyeditors, etc.) verán menos enlaces aquí.
3. **Barra de metadatos**: Muestra información sobre el envío. A la izquierda están el ID del envío, el autor y título. A la derecha hay botones adicionales que le permitirán previsualizar la página de envío publicado, así como el registro de actividades y la biblioteca de documentos.
4. **Panel principal**: En el panel principal verá el área de trabajo actual. En la imagen de arriba, se ve un registro de envío en la etapa de Envío.
5. **Main Panel Sub-Menus**: Within the Main Panel, you will often see tabs that allow you to view different information about the content being worked on. In this example, the submission record is broken into four sections \(Submission, Review, Copyediting, Production\). Notice the Help tab to the right, which provides context-sensitive help for the page you are currently viewing.
6. **Right Panel**: From here, you can see the action buttons, such as Send to Review. Different pages have different action buttons. Below the action buttons is the Participants table, which lists everyone \(except Reviewers\) involved in the submission.

## Contribuciones comunitarias

The OJS team encourages contributions from the developer community. If you are interested in getting involved in making OJS even better, we welcome your participation.

Excellent examples of community contributions include the vast array of languages that OJS is available in; and third-party plugins posted to the [community forum](https://forum.pkp.sfu.ca/) and the archived forum page.

We also welcome software testing and bug reporting contributions.

## Soporte

A [community forum](https://forum.pkp.sfu.ca/) and [issue reporting system](https://github.com/pkp/pkp-lib/#issues) for technical issues can be accessed via the [PKP web site](https://pkp.sfu.ca).

For questions about a particular journal site, such as submission requirements, contact that journal directly, using the contact information listed on the journal's **About** page.

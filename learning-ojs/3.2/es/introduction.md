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

OJS 3 es significativamente diferente de su predecesor, OJS 2. It includes enhancements and new features developed from community feedback, extensive usability testing, and new software design capabilities.

## Reader Interface

By default, Open Journal Systems is installed with a very simple, functional user interface. This includes a top header, navigation bar, navigation blocks to the right, and a main content block in the middle of the page.

The following image is a screenshot of an OJS Demonstration Journal Table of Contents.

![Table of Contents for a sample OJS journal.](./assets/learning-ojs-3-ojs3-interface.png)

You can see from the screenshot that the user functions now exist from your profile menu at the top right of the screen. This takes the managerial content in OJS 3.x away from general user view. Side bar information is clearly broken out, as well as your top navigation bar with collapsible menus for the "About" functions. Like OJS 2, each article has a linked title for viewing object metadata and abstracts, and galleys are now clearly labeled below the titles with clearer logos.

## Editorial Interface

_AKA "The Dashboard"_

OJS 3.x has a separate interface once you log into the editorial system. This not only makes it easier to customize the reader interface, but also provides OJS users of different journals a consistent experience.

<figure class="video_container">
  <video controls="true" allowfullscreen="true">
    <source src="./assets/learning-ojs3.2-ed-dashboard.mp4" type="video/mp4">
  </video>
  <figcaption>Animated mp4 showing the main elements of the OJS dashboard.</figcaption>
</figure>

The editorial interface is known as your **dashboard** and consists of the following elements:

1. **Top Navigation Bar**: To the left, you will find the name of the journal you are currently working with \(e.g., Journal of Public Knowledge\). If you are enrolled in more than one journal on this OJS installation, you can use this to switch between journals. Next to that are your Tasks \(items needing immediate attention\). To the right, you can switch languages if the journal is multilingual, view the reader interface, or click on your username to [view your profile](./user-accounts#viewing-and-changing-your-profile) or logout.
2. **Left Menu Panel**: These are the major sections of the dashboard, including the submissions, issue management, subscription management (if you are running a journal using subscriptions), settings, user and role management, and tools. Users with fewer permissions (e.g., Authors, Reviewers, Copyeditors, etc.) will see fewer links here.
3. **Metadata Bar**: This shows information about the submission. On the left are the submission ID, author, and title. On the right are additional buttons that will allow you to preview the published submission page, as well as the activity log and document library.
4. **Main Panel**: In the main panel you will see the current work area. In the image above, you are looking at a submission record in the Submission stage.
5. **Main Panel Sub-Menus**: Within the Main Panel, you will often see tabs that allow you to view different information about the content being worked on. In this example, the submission record is broken into four sections \(Submission, Review, Copyediting, Production\). Notice the Help tab to the right, which provides context-sensitive help for the page you are currently viewing.
6. **Right Panel**: From here, you can see the action buttons, such as Send to Review. Different pages have different action buttons. Below the action buttons is the Participants table, which lists everyone \(except Reviewers\) involved in the submission.

## Community Contributions

The OJS team encourages contributions from the developer community. If you are interested in getting involved in making OJS even better, we welcome your participation.

Excellent examples of community contributions include the vast array of languages that OJS is available in; and third-party plugins posted to the [community forum](https://forum.pkp.sfu.ca/) and the archived forum page.

We also welcome software testing and bug reporting contributions.

## Support

A [community forum](https://forum.pkp.sfu.ca/) and [issue reporting system](https://github.com/pkp/pkp-lib/#issues) for technical issues can be accessed via the [PKP web site](https://pkp.sfu.ca).

For questions about a particular journal site, such as submission requirements, contact that journal directly, using the contact information listed on the journal's **About** page.

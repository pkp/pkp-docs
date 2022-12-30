---
book: learning-ojs
showPageTOC: true
version: 3.3
---

# About Open Journal Systems (OJS)

Open Journal Systems \(OJS\) es una solución de código abierto para la gestión y publicación de revistas científicas en línea. OJS es un sistema de gestión y publicación altamente flexible operado por el editor que se puede descargar gratuitamente e instalar en un servidor web local.

Ha sido diseñado para reducir el tiempo y la energía dedicadas a las tareas administrativas y de gestión asociadas a la edición de una publicación, mientras se mejora el registro y la eficiencia de los procesos editoriales. Su objetivo es mejorar la calidad académica y pública en la publicación de revistas a través de una serie de innovaciones, incluyendo la mejora de la experiencia del lector, una mayor transparencia de las políticas de la revista y la mejora de su indexación.

This guide covers OJS version 3.3, released in February 2021, and features significant enhancements over the previous versions of the software. Esperamos que la encuentre útil para sus proyectos de publicación.

## Contexto

This PKP School video explains the background on PKP and OJS. To watch other videos in this series, visit [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).

{% include video.html id="SQfFGwIK2wI" provider="youtube" title="Video of background on PKP and OJS"%}

*OJS es un sistema de gestión/publicación de páginas web/revistas*. OJS cubre todos los aspectos de la publicación de revistas en línea, desde el establecimiento de un sitio web para dicha revista hasta tareas operativas como el proceso de envío del autor, revisión por pares, edición, publicación, archivo e indexación de la misma. OJS también ayuda a gestionar los aspectos de las personas de la organización de una revista, incluyendo el seguimiento del trabajo de los editores, revisores, y autores, notificando a los lectores y ayudando con la correspondencia.

*OJS es flexible y escalable*. Una sola instalación de OJS puede soportar el funcionamiento de una o varias revistas. Cada revista tiene su propia URL única, así como su propia apariencia y estilo. OJS puede permitir a un único editor gestionar todos los aspectos de una revista y el sitio web de la misma, o apoyar a un equipo internacional de editores con diversas responsabilidades para las múltiples secciones de la revista.

*OJS apoya el principio de extender el acceso*. Este sistema está destinado no sólo a ayudar con la publicación de revistas, pero para demostrar cómo los costos de la publicación de revistas pueden reducirse a tal punto de que proporcionar a los lectores "acceso abierto" al contenido de la revista se convierta en una opción viable. El apoyo al acceso abierto se describe en una amplia serie de artículos derivados de este proyecto que están disponibles libremente en Investigación > Publicaciones en el sitio web de [Public Knowledge Project](https://pkp.sfu.ca/).

*Los orígenes de OJS*. El sistema fue lanzado por primera vez en 2001 como una iniciativa de investigación y desarrollo en la Universidad de British Columbia, con el apoyo del Consejo de Investigación de Ciencias Sociales y Humanidades de Canadá, la Fundación Max Bell, el Pacific Press Endowment y la Fundación MacArthur. Su continuo desarrollo está actualmente supervisado por la Biblioteca de la Universidad Simon Fraser. Para obtener más información, consulte el [sitio web de Public Knowledge Project](https://pkp.sfu.ca).

<hr />

## Características de OJS

Visit our website to learn more about [Open Journal Systems](https://pkp.sfu.ca/software/ojs) and what it has to offer the whole researcher-to-reader workflow, from submission and peer review through to production and distribution.

## Install and Upgrade

OJS is easy to install and configure. However, running a web service requires a systems administrator who knows how to deploy web applications. Our Administrator's Guide provides full instructions on how to [download, install and configure OJS](/admin-guide/en).

> If you do not have the expertise, staff or desire to install and manage OJS on your own, [PKP Publishing Services](https://pkp.sfu.ca/hosting-services) provides complete hosting solutions for every budget. 
> 
> {:.tip}

## What's New in OJS 3.3

OJS 3.3 has a simplified dashboard navigation menu and new features related to submission management, communicating with users, and accessibility. This section will outline the main changes so you know what to expect when you upgrade to OJS 3.3. You can also watch [a video that demonstrates new features in OJS 3.3](https://youtu.be/3D_hS4Bd-Y8), created by [PKP Publishing Services](https://pkpservices.sfu.ca).

Many of these changes are applicable also to Open Monograph Press (OMP) and Open Preprint Systems (OPS).

If you are upgrading from OJS 2 and want to see an overview of changes in OJS 3.X, see [What’s New In OJS 3 in a previous version of this guide](https://docs.pkp.sfu.ca/learning-ojs/3.1/en/introduction#whats-new-in-ojs-3) and PKP’s guide to [Upgrading from OJS 2 to OJS 3](https://docs.pkp.sfu.ca/upgrading-ojs-2-to-3/). Please note that you will need to first upgrade from OJS 2 to OJS 3.2, and from there upgrade to OJS 3.3.

For a summary of changes in OJS 3.3 that are relevant to developers and development, please see the [Release Notebook for OJS OJS/OMP/OPS v3.3](https://docs.pkp.sfu.ca/dev/release-notebooks/en/3.3-release-notebook)

### Dashboard Interface and Navigation Menus

There are some changes to the dashboard interface and navigation menus for logged in users in OJS 3.3.

Journal Managers, Editors, Reviewers, Authors, and others who log in may notice a change in the main navigation menu on the left side. In 3.3, only users in roles who have access to the Settings menus (Journal Managers and Editors) will see the left-hand navigation menu. There are also additional menu links for Issues, Announcements, and Payments, and some of the menu links have moved.

![The dashboard that Journal Managers see when logged in](./assets/learning-ojs-3.3-navigation-menu-dashboard-jm.png)

Users in other roles will not see the menu because they can only access the Submissions part of the menu.

![The dashboard that Authors see when logged in](./assets/learning-ojs-3.3-navigation-menu-dashboard-author.png)

A user can now access their user profile and select a language on multilingual journals by clicking the person icon on the top right corner.

![The menu where users can edit their profile and select a language](./assets/learning-ojs-3.3-navigation-menu-dashboard-user-menu.png)

The link from the dashboard to the public journal site home page has moved. A Journal Manager or Editor can now view the public journal site by clicking the name of the journal that appears on the top left corner of the page. For multi-journal installations, you can click the site map symbol on the top left corner of the page and then a list of journals in the installation will appear below and you can select the site you want to view.

![The link to view the public journal site](./assets/learning-ojs-3.3-navigation-menu-dashboard-view-journal.png)

### Flujo de trabajo Editorial

#### Uploading submission files

During submission, Authors can upload multiple files at once as well as drag-and-drop files. They are no longer asked to enter metadata such as a description, license, etc. This information can be entered during the workflow, where the old file upload wizard is still in use. You can find further instructions in the [Authoring chapter](./authoring#step-2).

<figure class="video_container">
  <video controls="true" allowfullscreen="true">
    <source src="./assets/learning-ojs3.3-upload-submission-files.mp4" type="video/mp4">
  </video>
  <figcaption>A short video that demonstrates how files can be uploaded in OJS 3.3.</figcaption>
</figure>

#### Submission filters

All Active and Archived submissions can now be filtered by assigned issue and assigned Editor. Only Journal Managers can filter by assigned Editor. You can find further instructions in the [Editorial Workflow chapter](./editorial-workflow#submission-dashboard).

#### Reverse a declined decision

A new editorial action allows Editors to reverse a declined decision in the submission and review stages. After a declined decision is reverted, the submission is restored to its previous stage and review round if active. You can find further instructions in the [Editorial Workflow chapter](./editorial-workflow#assigning-the-submission).

#### Delete only declined submissions

Only declined submissions can be deleted from the submissions list. You can find further instructions in the [Editorial Workflow chapter](./editorial-workflow#archives).

#### Review type terminology

In previous versions of OJS, the review types were “Double Blind,” “Blind,” and “Open.” In OJS 3.3 these have been changed to “Anonymous Reviewer/Anonymous Author,” “Anonymous Reviewer/Disclosed Author,” and “Open.”

#### Category displayed on article page

An article’s assigned categories now appear on the article landing page. You can find further instructions in the [Journal Settings chapter](./journal-setup#categories).

#### Disable submissions

Journal Managers and Editors can configure the Workflow Settings to disable all submissions for a journal. This can be used by journals that are no longer accepting new content. You can find further instructions in the [Journal Settings chapter](./journal-setup#sections).

### User Management and Communication

#### Export users

There is now an export tool available under Tools > Import/Export that can be used to export users to a CSV file. This can be used to import users into third-party mailing services. You can find further instructions in the [Users and Roles chapter](./users-and-roles#email-users).

#### Notify users

OJS 3.3 has a much-requested feature to notify, or send a message, to all users in a role. See the [Users and Roles chapter](./users-and-roles#email-users) for more details.

#### Filter email templates by workflow stage

When managing and editing email templates under Workflow Settings > Email, Journal Managers and Editors can filter the email templates by workflow stage. You can find further instructions in the [Workflow Settings chapter](./settings-workflow#filters).

### Accessibility

In 2019 OJS was audited for accessibility to people with disabilities and use assistive technology. All of the changes that were recommended by the audit have been implemented in OJS 3.3, including an accessible Default Theme and custom blocks now requiring a title. More information about custom blocks is in the [Website Settings chapter](./settings-website#custom-block-plugin).

### For Multilingual Journals

OJS 3.3 has a number of new features that improve usage for journals working and/or publishing in multiple languages.

#### Date and time formats

Date and time formats can now be specified for each journal and locale/language. Further instructions are in the [Website Settings chapter](./settings-website#date-and-time).

#### Right-to-left languages

There is better support for languages that read right-to-left, such as Arabic, Farsi, and Hebrew, in the rich text editor that appears in many form fields in OJS.

#### Remote URLs
Navigation menu items with remote URLs can now have different remote URLs for each language.

## Contribuciones comunitarias

El equipo OJS fomenta las contribuciones de la comunidad de desarrolladores. If you are interested in getting involved in making OJS even better, we welcome your participation.

Excellent examples of community contributions include the vast array of languages that OJS is available in; and third-party plugins posted to the [community forum](https://forum.pkp.sfu.ca/) and the archived forum page.

We also welcome software testing and bug reporting contributions.

## Soporte

PKP offers the following free support resources for OJS:

* [PKP Docs Hub](https://docs.pkp.sfu.ca/): User guides, developer documentation and publishing tips for all of our software. Also includes links to community developed videos.
* [PKP Community Forum](https://forum.pkp.sfu.ca/): An online discussion board where you can ask questions, answer questions, and share ideas.
* [PKP School](https://pkpschool.sfu.ca/): A collection of online, open, and self-paced courses designed by PKP experts in English and Spanish. Includes video tutorials on Setting up Your Journal; the Editorial Workflow in OJS 3; and Becoming an Editor.

There is also a “Help” link on the top right corner of every page in OJS, OMP, and OPS where you can find information about the current page and its functions.

For questions about a particular journal site, such as submission requirements, contact that journal directly, using the contact information listed on the journal's **About** page.

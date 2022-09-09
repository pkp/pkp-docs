- - -
title: Getting Started - Guidelines for Contributing to PKP Documentation
- - -
# Cómo empezar

La mayor parte de la documentación de PKP está alojada y gestionada en un repositorio de GitHub llamado PKP Documentation Hub y se construye utilizando una herramienta de código abierto llamada [Jekyll](https://jekyllrb.com/). GitHub es un sistema colaborativo de control de versiones que gestiona y almacena las revisiones de un proyecto.  Para saber más sobre GitHub y Git, vea  “Qué es Git y Github?” o  “Git y Github para poetas”.

Los archivos de contenido que componen la documentación de PKP se almacenan en el archivo Repositorio del centro de documentación y cualquier persona con una cuenta de GitHub puede editar y añadir documentos al repositorio.  Este capítulo explica las cosas importantes que los usuarios necesitarán saber al trabajar en GitHub.

Si aún no tienes una cuenta en GitHub, empieza por [crear una cuenta](https://github.com/join?source=header-home).

## Estructura de los archivos

Cada carpeta del repositorio del Centro de Documentación representa un documento.

![Docs hub folder structure in Github.](./assets/Github-dash.png)

Los documentos breves constan de un único archivo markdown y pueden tener una carpeta "assets" (recursos) que contiene imágenes. Todo el contenido se encuentra en el archivo index.md y la tabla de contenidos en el área lateral derecha de la página se crea utilizando las etiquetas de cabecera en markdown.

![Index.md page of Starting a Journal document.](./assets/index-file.png)

Los documentos más largos constan de varios archivos de capítulos, un archivo README, un archivo SUMMARY y una carpeta de assets. El contenido se almacena en los archivos de capítulo y el archivo README actúa como página de resumen del documento. El archivo SUMMARY crea la tabla de contenidos

**Todos los archivos creados deberán tener una terminación .md**

![Learning OJS guide folder structure.](./assets/Github-dash-2.png)

Si el documento existe (o existirá) en más de un idioma, habrá una carpeta separada de estos archivos para cada versión lingüística.

![Learning OJS guide language folders.](./assets/Github-dash-lang.png)

### Archivo README

El archivo README.md debe incluir una breve introducción sobre el documento, una lista de colaboradores y la fecha de publicación.

![Readme file for the Using the Paypal Plugin guide.](./assets/Github-readme.png)

## Ramas y Pull Requests

Una rama es una versión del repositorio que contiene los cambios que has propuesto, de forma única.  Como no forma parte del archivo "principal" (main), no tendrá impacto en la forma en que se construye el sitio en tiempo real.

Como la mayoría de los usuarios no tendrán acceso directo para hacer cambios en el repositorio PKP, necesitarán crear una rama para hacer cambios. Si no tiene permiso total se encontrará con el cuadro de mensaje que dice: "Está editando un archivo en un proyecto al que no tiene acceso de escritura. Enviar un cambio a este archivo lo escribirá en una nueva rama en tu fork, así que puedes enviar un pull request".

![Editing access warning message.](./assets/Github-notice.png)

Una rama puede ser creada en su propio repositorio o generada automáticamente cuando intente hacer un cambio en el repositorio PKP.

## Convenciones de nomenclatura de archivos

**En general**, aunque cualquier nombre que crees debería funcionar, es mejor que los títulos sean cortos y descriptivos. Sustituya siempre los espacios entre palabras por un guión. Sustituya siempre los espacios entre palabras por un guión.

**Títulos**: Algunos títulos de ejemplo incluyen: `learning-ojs`, `pkp-theming-guide`, `crossref-ojs-manual`. Recuerde que los títulos son parte de la ruta del archivo en la URL de los documentos individuales, así que manténgalo simple.

**Capítulos**: Es posible que se sienta tentado a numerar los capítulos, pero si alguna vez necesitamos crear nuevos capítulos entre los existentes, tendríamos que volver a enumerarlos.  Es mejor mantener los capítulos en el mismo estilo que los nombres de los títulos.  Algunos ejemplos de capítulos son : getting-started.md, troubleshooting.md, data-import-and-export.md.

**Imágenes**: Almacena todas las imágenes en una sola carpeta "assets" dentro del idioma que se está trabajando (por ejemplo: `en/assets/`). Keep your image titles brief or with abbreviations and consistently named, so they’re easy to locate. Depending on how many images you have, numbering these might be a lot more convenient while working on the document. Listen to your heart. Some examples include: `contrib-01.png`, `authoring-images-01.png`. If you’re putting all your images into only the asset folder, it’s a good idea to name your images to correspond with chapter titles.

Note that file names are case sensitive, so if the image is saved as `learning-ojs3.1-jm-settings-workflow-email-templates.png` and you reference `learning-ojs3.1-jm-settings-workflow-email-templates.png` in the document, the image will not display.

## Markdown

The files are all in a format called Markdown, a simple, easy-to-read, easy-to-write text format that allows users to generate basic HTML without knowing HTML itself. It uses simple tags to format text on a website.

This is an example of markdown:

```
## The "Documentation Hub"

### Single Page Docs
```

Here are three guides for writing markdown:

- [Daring Fireball Markdown Syntax](https://daringfireball.net/projects/markdown/syntax)
- [Mastering GitHub Flavoured Markdown](https://guides.github.com/features/mastering-markdown/)
- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Editing with GitHub Desktop and Atom

If you're working on a large piece of documentation and you're not comfortable using either the command line or the web interface for GitHub, consider using [GitHub Desktop](https://desktop.github.com/) and the [Atom](https://atom.io/) text editor. With this workflow, you can "clone" a copy of the docs repository to your computer, make your edits locally (and even build a version of the Documentation Hub using Ruby, if you like) and create a pull request with your changes once you're finished.

Once you've installed GitHub desktop, you should have an option while viewing any GitHub repository to "Code" and "Open with GitHub Desktop".

1. Navigate to the repository you want to clone.
2. Click on the green button on the right that says "Code."
3. Select the "Open with GitHub Desktop" option.

![Press Code button and then Open in Desktop.](./assets/contrib-04.png)

You'll be prompted to choose a download location for your copy of the repository. If you're happy with the default, click the blue "Clone" button.

![Click Clone button to download the repository.](./assets/contrib-04a.png)

It'll take a few minutes for all the files to download.

GitHub desktop manages your commits and pull-requests locally. It's especially convenient if you're changing more than one file at once. If you have Atom installed, you can open your project with the editor directly from GitHub Desktop.

1. Open GitHub desktop.
2. Right click on the name of the repository in which you want to work.
3. Select "Open in Atom."

![Open project from Github Desktop.](./assets/contrib-05.png)

In Atom, the repository directory structure is accessible on the left-hand side in the "project window." Clicking on any title opens it in the editor and allow you to make changes. You'll notice the colors of the filenames change as you work. Green indicates a new file you've added. Yellow indicates a file you've changed since the last time you pulled an update from the primary repository.

If you are working on a project over time, you may want to regularly pull changes "from origin." You can do this in GitHub desktop by clicking the "Fetch origin" button at the top of the window. It pulls changes since the last time you pulled them (or, since the time you cloned initially).

![Fetch origin updates from GitHub.](./assets/contrib-06a.png)

Make sure you've saved your changes in Atom. Then you'll see a list of your changed files in GitHub Desktop. A green plus sign indicates a file you're adding; an orange dot denotes a file you've modified.

In the bottom left-hand corner, you'll see a warning that you don't have write access to pkp-docs. GitHub Desktop invites you to create a fork by clicking on the hyperlink.

![Create a fork of the repository.](./assets/contrib-07a.png)

On the popup message, click the **Fork this Repository** button. GitHub then asks how you're planning to use this repository. Choose **To contribute to the parent project** and then click the blue **Continue** button.

![Contribute to the parent project.](./assets/contrib-07b.png)

Once you've finished making your edits with Atom and have a document you want to submit, you'll need to contribute it back as a "branch."

1. In GitHub Desktop, click on the "Current Branch" button.
2. Click "New Branch"
3. Write a concise name for your branch based on the document you're submitting, with a single dash between words.
4. Click "Create Branch."

<figure class="video_container">
  <video controls="true" allowfullscreen="true">
    <source src="./assets/contrib-07.mp4" type="video/mp4">
  </video>
  <figcaption>Create a branch menu in GitHub Desktop.</figcaption>
</figure>

Now that you've made your edits/additions and created your branch, you can _commit_ your code. On the left side of your GitHub Desktop window, you should see all the files you're adding or changing and, at the bottom, a _commit_ option.

![Commit to master button in Github desktop.](./assets/contrib-08.png)

The Summary field is for a very short descriptor of what you just changed. A few words should do the trick. Here are some examples:

- Updated `filename.md`
- Migrated `filename.md`
- Added appendix to document
- Replaced images

The second field is for a more detailed description of what you changed. You might want to do this if you need to justify your changes or need to let everyone else know that a change is significant.

When you finish, click the button on the bottom left labelled "Commit to `branch name`."

Now you've committed your changes, you can push your changes back to the repository with the blue button on the top right. It should say "Publish branch" if it's the first time you've committed that branch. Once your branch has synced, you'll see a blue "Create Pull Request" button so you can submit your changes to the managers of the Docs Hub.

![Submit Pull Request.](./assets/contrib-08a.png)

This document is, necessarily, a brief introduction to using GitHub. GitHub has a tremendous amount of documentation on its use, however. If you want to read more about GitHub basics, read ["Hello, World"](https://guides.github.com/activities/hello-world/).

## Contribute in Other Formats

We encourage users and community members to write and edit documentation in markdown and contribute through GitHub. However, contributed documentation can be created or edited in any format you want to work in, including a .doc or .odt text document, a Google doc, or an email, and the DIG will convert the documentation to markdown. Do not contribute documentation in PDF, HTML, or LaTeX format.

Some contributors prefer to create or edit documentation in a Word, Open Document, Google Doc, or another format. If you’re creating documentation with a group of people, it can be easier to use a Google Doc than GitHub.

If you have created documentation in one of these other formats, you can email the file as an attachment or link to a shared document to documentation@publicknowledgeproject.org. If you created documentation as a Google doc, you should send the link in an email message.

If you are editing an existing document, try to make it as clear as possible what you have changed.

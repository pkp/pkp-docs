---
book: apprendre-ojs
version: 3.2
---

# Introduction

Open Journal Systems (OJS) est une solution open source pour gérer et publier des revues savantes en ligne. OJS est un système de gestion et de publication de revues très flexible, géré par un éditeur, qui peut être téléchargé gratuitement et installé sur un serveur Web local.

OJS a été conçu pour réduire le temps et l'énergie consacrés aux tâches de gestion associées à la rédaction d'une revue, tout en améliorant la tenue de registres et l'efficacité des processus éditoriaux. OJS vise à améliorer la qualité scientifique et publique de rédaction des revues grâce à un certain nombre d'innovations, notamment en améliorant l'expérience du lecteur, en rendant les normes des revues plus transparentes et en améliorant l'indexation.

Ce guide couvre la version 3.2 d'OJS, publiée en février 2020, et présente des améliorations significatives par rapport aux versions précédentes du logiciel. Nous espérons que vous le trouverez utile pour vos projets d'édition.

## Contexte

*OJS est un système de gestion/publication de revues/sites Web* . OJS couvre tous les aspects de l'édition de revues en ligne, de la création d'un site Web de revue aux tâches opérationnelles telles que le processus de soumission de l'auteur, l'évaluation par les pairs, la rédaction, la publication, l'archivage et l'indexation de la revue. OJS aide également à gérer les aspects humains de l'organisation d'une revue, y compris le suivi du travail des rédacteurs, des évaluateurs, et des auteurs, la notification des lecteurs et l'aide à la correspondance.

*OJS est flexible et évolutif*. Une seule installation d'OJS peut prendre en charge les opérations d'une ou de plusieurs revues. Chaque revue a sa propre URL unique ainsi que sa propre apparence. OJS peut permettre à un seul rédacteur de gérer tous les aspects d'une revue et le site Web de la revue, ou OJS soutiendra une équipe internationale de rédacteurs ayant des responsabilités diverses pour les multiples sections d'une revue.

*OJS soutient le principe de l'extension de l'accès*. Ce système vise non seulement à aider à la publication de revues, mais aussi à démontrer comment les coûts de publication de revues peuvent être réduits au point où offrir aux lecteurs un «accès ouvert» au contenu de la revue devient une option viable. Les arguments en faveur de l'accès ouvert sont expliqués dans une large série d'articles issus de ce projet qui sont disponibles gratuitement sous Recherche > Publications sur le site Web du [Public Knowledge Project](https://pkp.sfu.ca/) .

*Les origines d'OJS*. Le système a été lancé pour la première fois en 2001 en tant qu'initiative de recherche et développement à l'Université de British Columbia, avec le soutien du Conseil de recherches en sciences sociales et humaines du Canada, de la Max Bell Foundation, du Pacific Press Endowment et de la MacArthur Foundation. Son développement continu est actuellement supervisé par la Bibliothèque de l'Université Simon Fraser. Pour plus d'informations, consultez le [site Web du Projet Public Knowledge](https://pkp.sfu.ca) .

<hr />

## Fonctionnalités OJS

OJS comprend les fonctionnalités suivantes:

1. OJS est installé localement et contrôlé localement
2. Les éditeurs configurent les exigences, les sections, le processus d'évaluation, etc.
3. Soumission en ligne, examen en double aveugle, et gestion de tout le contenu
4. Indexation complète du contenu
5. Interface de lecture réactive et thématique
6. Notification par courriel pour les lecteurs
7. Prise en charge des frais de traitement des articles, des abonnements et des paiements en ligne
8. Prise en charge complète de l'aide en ligne contextuelle
9. Support multilingue

## Quoi de Neuf dans OJS 3

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

À droite, vous pouvez changer de langue si le journal est multilingue, afficher l'interface du lecteur ou cliquer sur votre nom d'utilisateur pour [afficher votre profil](./user-accounts#affichage-et-modification-de-votre-profil) ou vous déconnecter.

![The menu where users can edit their profile and select a language](./assets/learning-ojs-3.3-navigation-menu-dashboard-user-menu.png)

The link from the dashboard to the public journal site home page has moved. A Journal Manager or Editor can now view the public journal site by clicking the name of the journal that appears on the top left corner of the page. For multi-journal installations, you can click the site map symbol on the top left corner of the page and then a list of journals in the installation will appear below and you can select the site you want to view.

![The link to view the public journal site](./assets/learning-ojs-3.3-navigation-menu-dashboard-view-journal.png)

### Production et publication

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

Only declined submissions can be deleted from the submissions list. You can find further instructions in the [Editorial Workflow chapter](./editorial-workflow#archived).

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

## Interface du Lecteur

L'équipe OJS encourage les contributions de la communauté des développeurs. Si vous souhaitez vous impliquer dans l'amélioration de l'OJS, nous nous réjouissons de votre participation.

D'excellents exemples de contributions de la communauté incluent le vaste éventail de langues dans lesquelles OJS est disponible; et les plugiciels tiers publiés sur le [forum de la communauté](https://forum.pkp.sfu.ca/) et la page du forum archivée.

Nous apprécions également les tests de logiciels et les contributions aux rapports de bogues.

## Interface Éditoriale

PKP offers the following free support resources for OJS:

* [PKP Docs Hub](https://docs.pkp.sfu.ca/): User guides, developer documentation and publishing tips for all of our software. Also includes links to community developed videos.
* [PKP Community Forum](https://forum.pkp.sfu.ca/): An online discussion board where you can ask questions, answer questions, and share ideas.
* [PKP School](https://pkpschool.sfu.ca/): A collection of online, open, and self-paced courses designed by PKP experts in English and Spanish. Includes video tutorials on Setting up Your Journal; the Editorial Workflow in OJS 3; and Becoming an Editor.

There is also a “Help” link on the top right corner of every page in OJS, OMP, and OPS where you can find information about the current page and its functions.

Pour des questions sur un site de revue particulier, telles que les conditions de soumission, contactez directement cette revue, en utilisant les coordonnées figurant sur la page **À propos de** la revue.

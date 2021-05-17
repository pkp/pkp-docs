---
book: apprendre-ojs
version: 3.1
---

# Chapter 1: Introduction

Open Journal Systems (OJS) est une solution open source pour gérer et publier des revues savantes en ligne. OJS est un système de gestion et de publication de revues très flexible, géré par un éditeur, qui peut être téléchargé gratuitement et installé sur un serveur Web local.

OJS a été conçu pour réduire le temps et l'énergie consacrés aux tâches de gestion associées à la rédaction d'une revue, tout en améliorant la tenue de registres et l'efficacité des processus éditoriaux. OJS vise à améliorer la qualité scientifique et publique de rédaction des revues grâce à un certain nombre d'innovations, notamment en améliorant l'expérience du lecteur, en rendant les normes des revues plus transparentes et en améliorant l'indexation.

This book covers OJS version 3.1, released in October 2017, and features significant enhancements over the previous versions of the software. Nous espérons que vous le trouverez utile pour vos projets d'édition.

## Contexte

*OJS est un système de gestion/publication de revues/sites Web* . OJS couvre tous les aspects de l'édition de revues en ligne, de la création d'un site Web de revue aux tâches opérationnelles telles que le processus de soumission de l'auteur, l'évaluation par les pairs, la rédaction, la publication, l'archivage et l'indexation de la revue. OJS aide également à gérer les aspects humains de l'organisation d'une revue, y compris le suivi du travail des rédacteurs, des évaluateurs, et des auteurs, la notification des lecteurs et l'aide à la correspondance.

*OJS est flexible et évolutif*. Une seule installation d'OJS peut prendre en charge les opérations d'une ou de plusieurs revues. Chaque revue a sa propre URL unique ainsi que sa propre apparence. OJS peut permettre à un seul rédacteur de gérer tous les aspects d'une revue et le site Web de la revue, ou OJS soutiendra une équipe internationale de rédacteurs ayant des responsabilités diverses pour les multiples sections d'une revue.

*OJS soutient le principe de l'extension de l'accès*. Ce système vise non seulement à aider à la publication de revues, mais aussi à démontrer comment les coûts de publication de revues peuvent être réduits au point où offrir aux lecteurs un «accès ouvert» au contenu de la revue devient une option viable. Les arguments en faveur de l'accès ouvert sont expliqués dans une large série d'articles issus de ce projet qui sont disponibles gratuitement sous Recherche > Publications sur le site Web du [Public Knowledge Project](https://pkp.sfu.ca/) .

*Les origines d'OJS*. Le système a été lancé pour la première fois en 2001 en tant qu'initiative de recherche et développement à l'Université de British Columbia, avec le soutien du Conseil de recherches en sciences sociales et humaines du Canada, de la Max Bell Foundation, du Pacific Press Endowment et de la MacArthur Foundation. Son développement continu est actuellement supervisé par la Bibliothèque de l'Université Simon Fraser. For more information, see the [Public Knowledge Project website](http://pkp.sfu.ca).

<hr />

## Fonctionnalités OJS

OJS comprend les fonctionnalités suivantes:
1. OJS est installé localement et contrôlé localement
2. Les éditeurs configurent les exigences, les sections, le processus d'évaluation, etc.
3. Online submission, double-blind review, and management of all content
4. Indexation complète du contenu
5. Interface de lecture réactive et thématique
6. Notification par courriel pour les lecteurs
7. Prise en charge des frais de traitement des articles, des abonnements et des paiements en ligne
8. Prise en charge complète de l'aide en ligne contextuelle
9. Support multilingue

## What's New in OJS 3

OJS 3 is significantly different than its predecessor, OJS 2. It includes enhancements and new features developed from community feedback, extensive usability testing, and new software design capabilities.

## Reader Interface

By default, Open Journal Systems is installed with a very simple, functional user interface. This includes a top header, navigation bar, navigation blocks to the right, and a main content block in the middle of the page.

The following image is a screenshot of an OJS Demonstration Journal Table of Contents.

![](./assets/learning-ojs-3-ojs3-interface.png)

You can see from the screenshot that the user functions now exist from your profile menu at the top right of the screen. This takes the managerial content in OJS 3.x away from general user view. Side bar information is clearly broken out, as well as your top navigation bar with collapsible menus for the "About" functions. Like OJS 2, each article has a linked title for viewing object metadata and abstracts, and galleys are now clearly labeled below the titles with clearer logos.

## Editorial Interface

_AKA "The Dashboard"_

OJS 3.x now has a separate interface once you log into the editorial system. This not only makes it easier to customize the reader interface, but also provides OJS users of different journals a consistent experience.

![The main OJS dashboard](./assets/learning-ojs3.1-ed-dashboard.png)

The editorial interface is known as your **dashboard** and consists of the following elements:

1. **Top Navigation Bar**: To the left, you will find the name of the journal you are currently working with \(e.g., Journal of Public Knowledge\). If you are enrolled in more than one journal on this OJS installation, you can use this to switch between journals. Next to that are your Tasks \(items needing immediate attention\). To the right, you can switch languages if the journal is multilingual, view the reader interface, or click on your username to view [your profile](./viewing_and_changing_your_profile.md) or logout.
2. **Left Menu Panel**: These are the major sections of the dashboard, including the submissions, issue management, subscription management \(if you are running a journal using subscriptions\), settings, user and role management, and tools. Users with fewer permissions \(e.g., Authors, Reviewers, Copyeditors, etc.\) will see fewer links here.
3. **Blue Navigation Bar**: These menu choices are specific to the different sections of the editorial workflow. Metadata, Editorial History, and Submission Library are all part of the submission record visible below.
4. **Main Panel**: In the main panel you will see the current work area. In the image above, you are looking at a submission record in the Production stage.
5. **Main Panel Sub-Menus**: Within the Main Panel, you will often see tabs that allow you to view different information about the content being worked on. In this example, the submission record is broken into four sections \(Submission, Review, Copyediting, Production\). Notice the Help tab to the right, which provides context-sensitive help for the page you are currently viewing.
6. **Right Panel**: From here, you can see the action buttons, such as Schedule for Publication. Different pages have different action buttons. Below the action buttons is the Participants table, which lists everyone \(except Reviewers\) involved in the submission.

## Interface de lecture

L'équipe OJS encourage les contributions de la communauté des développeurs. Si vous souhaitez vous impliquer dans l'amélioration de l'OJS, nous nous réjouissons de votre participation.

D'excellents exemples de contributions de la communauté incluent le vaste éventail de langues dans lesquelles OJS est disponible; et les plugiciels tiers publiés sur le [forum de la communauté](https://forum.pkp.sfu.ca/) et la page du forum archivée.

Nous apprécions également les tests de logiciels et les contributions aux rapports de bogues.

## Interface Éditoriale

A [community forum](https://forum.pkp.sfu.ca/) and [issue reporting system](https://github.com/pkp/pkp-lib/#issues) for technical issues can be accessed via the [PKP web site](https://pkp.sfu.ca).

Pour des questions sur un site de revue particulier, telles que les conditions de soumission, contactez directement cette revue, en utilisant les coordonnées figurant sur la page **À propos de** la revue.

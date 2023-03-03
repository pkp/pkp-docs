---
book: apprendre-ojs
showPageTOC: true
version: 3.2
---

# À propos d'Open Journal Systems (OJS) {#about-ojs}

Open Journal Systems (OJS) est une solution open source pour gérer et publier des revues savantes en ligne. OJS est un système de gestion et de publication de revues très flexible, géré par un éditeur, qui peut être téléchargé gratuitement et installé sur un serveur Web local.

OJS a été conçu pour réduire le temps et l'énergie consacrés aux tâches de gestion associées à la rédaction d'une revue, tout en améliorant la tenue de registres et l'efficacité des processus éditoriaux. OJS vise à améliorer la qualité scientifique et publique de rédaction des revues grâce à un certain nombre d'innovations, notamment en améliorant l'expérience du lecteur, en rendant les normes des revues plus transparentes et en améliorant l'indexation.

Ce guide couvre la version 3.2 d'OJS, publiée en février 2020, et présente des améliorations significatives par rapport aux versions précédentes du logiciel. Nous espérons que vous le trouverez utile pour vos projets d'édition.

## Contexte

Cette vidéo de PKP School explique le contexte de PKP et d'OJS. Pour regarder d'autres vidéos de cette série, visitez la [chaîne YouTube de PKP](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).

{% include video.html id="SQfFGwIK2wI" provider="youtube" title="Vidéo sur le contexte de PKP et OJS"%}

*OJS est un système de gestion/publication de revues/sites Web* . OJS couvre tous les aspects de l'édition de revues en ligne, de la création d'un site Web de revue aux tâches opérationnelles telles que le processus de soumission de l'auteur, l'évaluation par les pairs, la rédaction, la publication, l'archivage et l'indexation de la revue. OJS aide également à gérer les aspects humains de l'organisation d'une revue, y compris le suivi du travail des rédacteurs, des évaluateurs, et des auteurs, la notification des lecteurs et l'aide à la correspondance.

*OJS est flexible et évolutif*. Une seule installation d'OJS peut prendre en charge les opérations d'une ou de plusieurs revues. Chaque revue a sa propre URL unique ainsi que sa propre apparence. OJS peut permettre à un seul rédacteur de gérer tous les aspects d'une revue et le site Web de la revue, ou OJS soutiendra une équipe internationale de rédacteurs ayant des responsabilités diverses pour les multiples sections d'une revue.

*OJS soutient le principe de l'extension de l'accès*. Ce système vise non seulement à aider à la publication de revues, mais aussi à démontrer comment les coûts de publication de revues peuvent être réduits au point où offrir aux lecteurs un «accès ouvert» au contenu de la revue devient une option viable. Les arguments en faveur de l'accès ouvert sont expliqués dans une large série d'articles issus de ce projet qui sont disponibles gratuitement sous Recherche > Publications sur le site Web du [Public Knowledge Project](https://pkp.sfu.ca/) .

*Les origines d'OJS*. Le système a été lancé pour la première fois en 2001 en tant qu'initiative de recherche et développement à l'Université de British Columbia, avec le soutien du Conseil de recherches en sciences sociales et humaines du Canada, de la Max Bell Foundation, du Pacific Press Endowment et de la MacArthur Foundation. Son développement continu est actuellement supervisé par la Bibliothèque de l'Université Simon Fraser. Pour plus d'informations, consultez le [site Web du Projet Public Knowledge](https://pkp.sfu.ca) .

<hr />

## Fonctionnalités OJS

Visitez notre site web pour en savoir plus sur [Open Journal Systems](https://pkp.sfu.ca/software/ojs) et ce qu'il a à offrir à l'ensemble du flux de travail du chercheur au lecteur, de la soumission et de l'examen par les pairs à la production et à la distribution.

## Installation et Mise à Niveau

OJS est facile à installer et à configurer. Cependant, l'exécution d'un service web nécessite un administrateur système qui sait comment déployer des applications web. Notre guide d'administrateur fournit des instructions complètes sur la manière de [télécharger, installer et configurer OJS](/admin-guide/en).

> Si vous n'avez pas l'expertise, le personnel ou l'envie d'installer et de gérer OJS par vous-même, [PKP Publishing Services](https://pkp.sfu.ca/hosting-services) propose des solutions d'hébergement complètes pour tous les budgets. 
> 
> {:.tip}

## Quoi de Neuf dans OJS 3.3

OJS 3.3 dispose d'un menu de navigation simplifié pour le tableau de bord et de nouvelles fonctionnalités liées à la gestion des soumissions, à la communication avec les utilisateurs et à l'accessibilité. Cette section présentera les principaux changements afin que vous sachiez à quoi vous attendre lorsque vous passerez à la version 3.3 d'OJS. Vous pouvez également regarder [une vidéo qui présente les nouvelles fonctionnalités d'OJS 3.3](https://youtu.be/3D_hS4Bd-Y8), créée par [PKP Publishing Services](https://pkpservices.sfu.ca).

Nombre de ces changements sont également applicables à Open Monograph Press (OMP) et à Open Preprint Systems (OPS).

Si vous effectuez une mise à niveau à partir d'OJS 2 et que vous souhaitez avoir un aperçu des modifications apportées à OJS 3.X, consultez [Quoi de neuf dans OJS 3 dans une version précédente de ce guide](https://docs.pkp.sfu.ca/learning-ojs/3.1/en/introduction#whats-new-in-ojs-3) et le guide de PKP sur [la mise à niveau d'OJS 2 à OJS 3](https://docs.pkp.sfu.ca/upgrading-ojs-2-to-3/). Veuillez noter que vous devrez d'abord passer d'OJS 2 à OJS 3.2, puis à OJS 3.3.

Pour un résumé des changements dans OJS 3.3 qui sont pertinents pour les développeurs et le développement, veuillez consulter le [Release Notebook for OJS OJS/OMP/OPS v3.3](https://docs.pkp.sfu.ca/dev/release-notebooks/en/3.3-release-notebook).

### Interface du tableau de bord et menus de navigation

L'interface du tableau de bord et les menus de navigation pour les utilisateurs connectés ont été modifiés dans OJS 3.3.

Les directeurs de la revue, les rédacteurs, les réviseurs, les auteurs et les autres personnes qui se connectent peuvent remarquer un changement dans le menu de navigation principal sur le côté gauche. Dans la version 3.3, seuls les utilisateurs dans les rôles qui ont accès aux menus Paramètres ( Directeurs et rédacteurs de la revue) verront le menu de navigation de gauche. Il y a également des liens supplémentaires dans le menu pour les Numéros, les Annonces et les Paiements, et certains des liens du menu ont été déplacés.

![Le tableau de bord que les directeurs/directrices de la revue voient lorsqu'ils sont connectés](./assets/learning-ojs-3.3-navigation-menu-dashboard-jm.png)

Les utilisateurs ayant d'autres rôles ne verront pas le menu car ils ne peuvent accéder qu'à la partie "Soumissions" du menu.

![Le tableau de bord que les auteurs voient lorsqu'ils sont connectés](./assets/learning-ojs-3.3-navigation-menu-dashboard-author.png)

À droite, vous pouvez changer de langue si le journal est multilingue, afficher l'interface du lecteur ou cliquer sur votre nom d'utilisateur pour [afficher votre profil](./user-accounts#affichage-et-modification-de-votre-profil) ou vous déconnecter.

![Le menu où les utilisateurs peuvent modifier leur profil et sélectionner une langue](./assets/learning-ojs-3.3-navigation-menu-dashboard-user-menu.png)

Le lien du tableau de bord vers la page d'accueil du site du journal public a été déplacé. Un directeur ou un rédacteur de la revue peut maintenant consulter le site public de la revue en cliquant sur le nom de la revue qui apparaît dans le coin supérieur gauche de la page. Pour les installations à plusieurs revues, vous pouvez cliquer sur le symbole du plan du site dans le coin supérieur gauche de la page. Une liste des revues de l'installation apparaîtra alors en dessous et vous pourrez sélectionner le site que vous souhaitez visualiser.

![Le lien pour voir le site du journal public](./assets/learning-ojs-3.3-navigation-menu-dashboard-view-journal.png)

### Flux des Travaux Éditoriaux

#### Téléchargement des fichiers de soumission

Lors de la soumission, les auteurs peuvent télécharger plusieurs fichiers à la fois et faire glisser les fichiers. Ils ne sont plus sollicités pour saisir des métadonnées telles qu'une description, une licence, etc. Ces informations peuvent être saisies au cours du flux de travail, où l'ancien assistant de téléchargement de fichiers est encore utilisé. Vous trouverez des instructions supplémentaires dans le [chapitre Création](./authoring#step-2).

<figure class="video_container">
  <video controls="true" allowfullscreen="true">
    <source src="./assets/learning-ojs3.3-upload-submission-files.mp4" type="video/mp4">
  </video>
  <figcaption>Une courte vidéo qui démontre comment les fichiers peuvent être téléchargés dans OJS 3.3.</figcaption>
</figure>

#### Filtres de soumission

Toutes les soumissions actives et archivées peuvent maintenant être filtrées par numéro attribué et par rédacteur attribué. Seuls les directeurs de la revue peuvent filtrer par éditeur assigné. Vous trouverez des instructions supplémentaires dans le [chapitre sur le flux de travail éditorial](./editorial-workflow#submission-dashboard).

#### Annulez une décision refusée

Une nouvelle action éditoriale permet aux rédacteurs de revenir sur une décision de refus lors des étapes de soumission et d'examen. Après l'annulation d'une décision de refus, la soumission est rétablie à son stade et à son cycle d'examen précédents, s'ils sont actifs. Vous trouverez des instructions supplémentaires dans le [chapitre sur le flux de travail éditorial](./editorial-workflow#assigning-the-submission).

#### Supprimer uniquement les soumissions refusées

Seules les soumissions refusées peuvent être supprimées de la liste des soumissions. Vous pouvez trouver d'autres instructions dans le [chapitre du flux de travail éditorial](./editorial-workflow#archives).

#### Terminologie des types de revue

Dans les versions précédentes d'OJS, les types d'examen étaient "double aveugle", "aveugle" et "ouvert". Dans la version 3.3 de l'OJS, ces termes ont été remplacés par " évaluateur anonyme/auteur anonyme ", " évaluateur anonyme/auteur divulgué " et " ouvert ".

#### Catégorie affichée sur la page de l'article

Les catégories attribuées à un article apparaissent maintenant sur la page de renvoi de l'article. Vous pouvez trouver d'autres instructions dans le chapitre [Paramètres du revue](./journal-setup#categories).

#### Désactiver les soumissions

Les directeurs et rédacteurs des revues peuvent configurer les paramètres du flux de travail pour désactiver toutes les soumissions pour une revue. Cela peut être utilisé par les revues qui n'acceptent plus de nouveau contenu. Vous pouvez trouver d'autres instructions dans le chapitre [Paramètres du revue](./journal-setup#sections).

### Gestion des utilisateurs et communication

#### Exporter les utilisateurs

Il y a maintenant un outil d'exportation disponible dans Outils > Importer/Exporter qui peut être utilisé pour exporter des utilisateurs vers un fichier CSV. Ceci peut être utilisé pour importer des utilisateurs dans des services de diffusion tiers. Vous pouvez trouver d'autres instructions dans le chapitre [Utilisateurs et Rôles](./users-and-roles#email-users).

#### Notifier les utilisateurs

OJS 3.3 offre une fonctionnalité très demandée permettant de notifier, ou d'envoyer un message, à tous les utilisateurs d'un rôle. Voir le chapitre [Utilisateurs et Rôles](./users-and-roles#email-users) pour plus de détails.

#### Filtrer les modèles de courriels par étape de workflow

Lors de la gestion et de l'édition des modèles d'e-mails sous Paramètres du flux de travail > Courriels, les gestionnaires et éditeurs de journaux peuvent filtrer les modèles de courriels par étape du flux de travail. Vous trouverez des instructions supplémentaires dans le [chapitre sur les paramètres du flux de travail](./settings-workflow#filters).

### Accessibilité

En 2019, l'OJS a été audité pour l'accessibilité aux personnes handicapées et utilisant des technologies d'assistance. Tous les changements recommandés par l'audit ont été implémentés dans OJS 3.3, y compris un thème par défaut accessible et des blocs personnalisés nécessitant maintenant un titre. Plus d'informations sur les blocs personnalisés se trouvent dans le chapitre [Paramètres du site Web](./settings-website#custom-block-plugin).

### Pour les revues multilingues

OJS 3.3 comporte un certain nombre de nouvelles fonctionnalités qui améliorent l'utilisation pour les revues travaillant et/ou publiant dans plusieurs langues.

#### Formats de date et d'heure

Les formats de date et d'heure peuvent maintenant être spécifiés pour chaque journal et chaque langue/langue. D'autres instructions se trouvent dans le chapitre [Paramètres du site Web](./settings-website#date-and-time).

#### Langues de droite à gauche

La prise en charge des langues qui se lisent de droite à gauche, comme l'arabe, le farsi et l'hébreu, est améliorée dans l'éditeur de texte riche qui apparaît dans de nombreux champs de formulaire en OJS.

#### URL distante
Les éléments de menu de navigation avec des URL distants peuvent désormais avoir des URL distants différents pour chaque langue.

## Interface du Lecteur

L'équipe OJS encourage les contributions de la communauté des développeurs. Si vous souhaitez vous impliquer dans l'amélioration de l'OJS, nous nous réjouissons de votre participation.

D'excellents exemples de contributions de la communauté incluent le vaste éventail de langues dans lesquelles OJS est disponible; et les plugiciels tiers publiés sur le [forum de la communauté](https://forum.pkp.sfu.ca/) et la page du forum archivée.

Nous apprécions également les tests de logiciels et les contributions aux rapports de bogues.

## Interface Éditoriale

PKP offre les ressources de support gratuites suivantes pour OJS :

* [PKP Docs Hub](https://docs.pkp.sfu.ca/) : guides d'utilisation, documentation pour les développeurs et conseils de publication pour tous nos logiciels. Cela inclut également des liens vers des vidéos développées par la communauté.
* [PKP Community Forum](https://forum.pkp.sfu.ca/): Un forum de discussion en ligne où vous pouvez poser des questions, répondre à des questions et partager des idées.
* [PKP School](https://pkpschool.sfu.ca/): Une collection de cours en ligne, ouverts et autodidactes, conçus par des experts de PKP en anglais et en espagnol. Comprend des tutoriels vidéo sur la configuration de votre revue, le flux de travail éditorial dans OJS 3 et comment devenir un éditeur.

Il y a également un lien « Aide » en haut à droite de chaque page dans OJS, OMP, et OPS où vous pouvez trouver des informations sur la page courante et ses fonctions.

Pour des questions sur un site de revue particulier, telles que les conditions de soumission, contactez directement cette revue, en utilisant les coordonnées figurant sur la page **À propos de** la revue.

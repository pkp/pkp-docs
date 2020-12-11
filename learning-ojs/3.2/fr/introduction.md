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

<hr>

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

OJS 3 est très différent de son prédécesseur, OJS 2. Il comprend des améliorations et de nouvelles fonctionnalités développées à partir des commentaires de la communauté, des tests d'utilisabilité approfondis et de nouvelles capacités de conception de logiciels.

## Interface du Lecteur

Par défaut, Open Journal Systems est installé avec une interface utilisateur très simple et fonctionnelle. Cela comprend un en-tête, une barre de navigation, des blocs de navigation à droite et un bloc de contenu principal au milieu de la page.

L'image suivante est une capture d'écran d'une table des matières de la revue de démonstration OJS.

![](./assets/learning-ojs-3-ojs3-interface.png)

Vous pouvez voir sur la capture d'écran que les fonctions utilisateur existent désormais depuis le menu de votre profil en haut à droite de l'écran. Cela éloigne le contenu de gestion d'OJS 3.x de la vue générale de l'utilisateur. Les informations de la barre latérale sont clairement réparties, ainsi que votre barre de navigation supérieure avec des menus pliables pour les fonctions «À propos». Comme OJS 2, chaque article a un titre lié pour afficher les métadonnées et les résumés des objets, et les épreuves sont désormais clairement étiquetées sous les titres avec des logos plus clairs.

## Interface Éditoriale

*Aussi connue sous le nom de "Le Tableau de Bord"*

OJS 3.x a une interface distincte une fois que vous vous connectez au système éditorial. Cela facilite non seulement la personnalisation de l'interface du lecteur, mais offre également aux utilisateurs OJS de différentes revues une expérience cohérente.

![](./assets/learning-ojs3.2-ed-dashboard.gif)

L'interface éditoriale est appelée votre **tableau de bord** et se compose des éléments suivants:

1. **Barre de Navigation en Haut**: à gauche, vous trouverez le nom de la revue avec laquelle vous travaillez actuellement (par exemple, Revue de Public Knowledge). Si vous êtes inscrit dans plusieurs revues sur cette installation OJS, vous pouvez l'utiliser pour basculer entre les revues. À côté de cela se trouvent vos tâches (éléments nécessitant une attention immédiate). À droite, vous pouvez changer de langue si le journal est multilingue, afficher l'interface du lecteur ou cliquer sur votre nom d'utilisateur pour [afficher votre profil](./user-accounts#affichage-et-modification-de-votre-profil) ou vous déconnecter.
2. **Panneau de Menu de Gauche**: il s'agit des sections principales du tableau de bord, y compris les soumissions, la gestion des numéros, la gestion des abonnements (si vous exécutez un revue à l'aide d'abonnements), les paramètres, la gestion des utilisateurs et des rôles, et les outils. Les utilisateurs avec moins d'autorisations (par exemple, les auteurs, les évaluateurs, les réviseurs, etc.) verront moins de liens ici.
3. **Barre de Métadonnées**: elle affiche des informations sur la soumission. Sur la gauche se trouvent l'ID de soumission, l'auteur et le titre. Sur la droite se trouvent des boutons supplémentaires qui vous permettront de prévisualiser la page de soumission publiée, ainsi que le journal d'activité et la bibliothèque de documents.
4. **Panneau Principal**: Dans le panneau principal, vous verrez la zone de travail actuelle. Dans l'image en dessus, vous verrez un enregistrement de soumission à l'étape de soumission.
5. **Sous-Menus du Panneau Principal**: Dans le panneau principal, vous verrez souvent des onglets qui vous permettent d'afficher différentes informations sur le contenu en cours de traitement. Dans cet exemple, l'enregistrement de soumission est divisé en quatre sections (soumission, évaluation, révision, production). Remarquez l'onglet Aide à droite, qui fournit une aide contextuelle pour la page que vous consultez actuellement.
6. **Panneau de Droite**: à partir de là, vous pouvez voir les boutons d'action, tels que Envoyer pour évaluation. Différentes pages ont des boutons d'action différents. En dessous des boutons d'action se trouve le tableau des participants, qui répertorie toutes les personnes (sauf les évaluateurs) impliquées dans la soumission.

## Contributions de la Communauté

L'équipe OJS encourage les contributions de la communauté des développeurs. Si vous souhaitez vous impliquer dans l'amélioration de l'OJS, nous nous réjouissons de votre participation.

D'excellents exemples de contributions de la communauté incluent le vaste éventail de langues dans lesquelles OJS est disponible; et les plugiciels tiers publiés sur le [forum de la communauté](https://forum.pkp.sfu.ca/) et la page du forum archivée.

Nous apprécions également les tests de logiciels et les contributions aux rapports de bogues.

## Soutien

Un [forum communautaire](https://forum.pkp.sfu.ca/) et un [système de rapport de problèmes](https://github.com/pkp/pkp-lib/#issues) pour les problèmes techniques sont accessibles via le [site Web PKP](https://pkp.sfu.ca) .

Pour des questions sur un site de revue particulier, telles que les conditions de soumission, contactez directement cette revue, en utilisant les coordonnées figurant sur la page **À propos de** la revue.

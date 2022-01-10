---
noindex: true
---
# Configuration initiale

Érudit utilise le format XML standardisé ​[JATS](https://jats.nlm.nih.gov/)​ pour récupérer les articles de votre instance OJS.

Vous pouvez configurer OJS afin qu’il génère automatiquement des fichiers JATS simples permettant la diffusion sur Érudit. Il s’agit d’installer et activer deux ​plugins​. Voici les étapes à suivre :

## Étapes pour le gestionnaire de la revue

Les étapes suivantes peuvent être effectuées dans OJS par un utilisateur ayant le rôle d'Administrateur.

### Étape 1. Installer JATS Template Plugin

Connectez-vous à votre instance OJS avec les paramètres de connexion de votre compte Administrateur.

Allez dans Paramètres > Site Web > Modules externes

Cliquez sur “Galerie de plugiciels”.

Une liste des ​*plugins*​ disponibles pour installation sera affichée. Recherchez “JATS Template Plugin”:

![JATS Template Plugin dans la liste des plugins](./assets/jatsTemplatePlugin.png)

Cliquez sur “JATS Template Plugin” pour afficher plus d’informations sur ce ​*plugin​*:

![JATS Template Plugin avec des informations sur le plugin et un bouton Installer.](./assets/jatsTemplatePluginInfo.png)

(Votre version du ​plugin​ pourrait être différente de celle indiquée ci-haut. Nous recommandons de toujours utiliser la dernière version du ​plugin​ disponible dans la Galerie de plugiciels.)

Cliquez sur le bouton “Installer” afin d’installer le ​plugin​. (Si vous ne voyez pas le bouton “Installer”, assurez-vous d’être connecté en tant qu’Administrateur.) Confirmez que vous souhaitez bien installer le ​plugin.​

Vous devriez voir une notification confirmant l’installation :

![Notification : Mise à jour réussie vers la version 1.0.1.0.](./assets/jatsTemplatePluginNotification.png)

La dernière version disponible du ​plugin​ sera installée. (Lorsque de nouvelles versions du plugin​ seront disponibles, vous pourrez les mettre à jour de la même façon. Encore une fois, le numéro de version affiché pourrait différer de celle de la copie d’écran ci-haut.)

### Étape 2. Installer OAI JATS Plugin

Connectez-vous à votre instance OJS avec les paramètres de connexion de votre compte Administrateur.

Allez dans Paramètres > Site Web > Modules externes. Cliquez sur “Galerie de plugiciels”.

Une liste des ​plugins​ disponibles pour installation sera affichée.

Rechechez “OAI JATS Plugin”:

![OAI JATS Plugin dans la liste des plugins.](./assets/oaiJatsPlugin.png)

Cliquez sur “OAI JATS Plugin” pour afficher plus d’informations sur ce ​plugin​ :

![OAI JATS Plugin avec des informations sur le plugin et un bouton Installer.](./assets/oaiJatsPluginInfo.png)

(Votre version du ​plugin​ pourrait être différente de celle indiquée ci-haut. Nous recommandons de toujours utiliser la dernière version du ​plugin​ disponible dans la Galerie de plugiciels.)

Cliquez sur le bouton “Installer” afin d’installer le ​plugin​. (Si vous ne voyez pas le bouton “Installer”, assurez-vous d’être connecté en tant qu’Administrateur.) Confirmez que vous souhaitez bien installer le ​plugin​.

Vous devriez voir ce message confirmant l’installation :

![Notification: Mise à jour réussie vers la version 1.0.1.0.](./assets/oaiJatsPluginNotification.png)

La dernière version disponible du ​plugin​ sera installée. (Lorsque de nouvelles versions du plugin​ seront disponibles, vous pourrez les mettre à jour de la même façon. Encore une fois, le numéro de version affiché pourrait différer de celle de la copie d’écran ci-haut.)

Pour pouvoir fournir du contenu JATS à Érudit, vous devez installer la **dernière version du OAI JATS Plugin** adaptée à votre version d'OJS. 

L'étape suivante montre comment activer et mettre à niveau les plugins afin de les maintenir à jour.

### Étape 3. Activation et mise à jour des plugins

#### Activer les plugins

Un coup les ​plugins​ JATS Template Plugin et OAI JATS Plugin installés, vous devez les activer.

**Il faut activer les ​plugins​ une fois ​pour *chaque revue*​ que vous souhaitez inclure à Érudit.**

Allez dans Paramètres > Site Web > Modules externes.

Cliquez sur “Plugiciels installés”.

Cherchez “JATS Template Plugin” dans la liste des ​plugins :​

![JATS Template Plugin dans la liste des plugins avec une case à cocher non cochée à côté.](./assets/jatsTemplatePluginListing.png)

Cochez la case à droite pour activer le ​plugin.​ Vous devriez voir ce message de confirmation:

![Notification : Le plugin "JATS Template Plugin" a été activé.](./assets/jatsTemplatePluginListingNotification.png)

Cherchez ensuite “OAI JATS Plugin” :

![OAI JATS Plugin dans la liste des plugins avec une case à cocher non cochée à côté.](./assets/jatsMetadataFormatPluginListing.png)

Cochez aussi la case à droite pour l’activer. Vous devriez voir ce message de confirmation :

![Notification : Le plugin "OAI JATS Plugin" a été activé.](./assets/jatsMetadataFormatPluginListingNotification.png)

Répétez ces étapes pour chaque revue que vous souhaitez inclure à Érudit.

#### Mise à jour des plugins

Les plugins utilisés pour récolter les métadonnées de votre revue sont occasionnellement mis à jour pour corriger des bogues ou améliorer les fonctionnalités. Coalition Publica peut vous demander de mettre à jour les plugins, ou vous pouvez choisir de le faire dans le cadre d'une maintenance régulière.

Après toute mise à jour de votre OJS, assurez-vous que tous vos plugins sont mis à jour avec la dernière version adaptée à votre version d'OJS en effectuant une mise à jour via la Galerie de plugiciels.

Tout d'abord, allez dans Paramètres > Site Web > Modules externes. Cliquez sur l’onglet  “Galerie de plugiciels”.

Naviguez jusqu'au plugin concerné et cliquez sur son nom pour ouvrir cette fenêtre. 

![OAI JATS Plugin avec des informations sur le plugin et un bouton Mise à jour.](./assets/oaiJatsPluginInfo.png)

Cliquez sur le bouton de mise à jour si disponible et confirmez que vous souhaitez mettre à jour le plugin. Si le bouton de mise à jour n'est pas disponible, votre plugin est déjà à jour.

![Notification: Mise à jour réussie vers la version 1.0.1.0.](./assets/oaiJatsPluginNotification.png)

Vous verrez une confirmation après que la mise à jour ait été effectuée avec succès.

Bien qu'il soit possible de mettre à jour les plugins dans OJS en téléchargeant la dernière version à partir de Github, il est possible que les nouvelles versions ne soient pas compatibles avec votre version particulière d'OJS, donc **s'il vous plaît, mettez toujours à jour les plugins à partir de la Galerie de plugiciels, sauf indication contraire**.

### Étape 4. Réviser les paramètres de revue

Plusieurs paramètres de revue doivent être correctement configurés afin de permettre la récupération des données par Érudit. Pour chaque revue que vous souhaitez inclure, assurez-vous que :

* Pour chacune des rubriques de la revue, le champ “Identifier les articles publiés dans cette rubrique en tant que un(e)” utilise une des [valeurs suggérées pour le JATS article-type​](https://jats.nlm.nih.gov/archiving/tag-library/1.1/attribute/article-type.html). Veuillez noter que la mention "research-article" n'est utilisée que pour les recherches évaluées par les pairs. Si vous ne savez pas comment identifier les articles de la section, la mention "autre" est acceptable.
* Les paramètres de revue sont complets, ex.:
	* Un ISSN est spécifié
	* Le titre de la revue est le même que celui enregistré à ​[issn.org](https://www.issn.org/)
	* Un éditeur est spécifié dans Paramètres > Revue > Bloc générique
	* Droit d’auteur
		* Assurez-vous que le titulaire du droit d’auteur des articles (“Auteur”, “Revue” ou “Autre”) soit adéquatement identifié dans Paramètres > Distribution > Autorisations.
		* Assurez-vous, lorsque vous établissez le “Calendrier de publication” d’un article, d’y associer les autorisations (titulaire du droit d’auteur et année du droit d’auteur)

### Étape 5. Vérifier les paramètres de distribution

Sous Paramètres > Distribution > Accès, vous verrez un ensemble de paramètres :

![Paramètres d'accès au contenu de la revue avec des options pour fournir un accès libre (sélectionné), exiger un abonnement, ne pas utiliser OJS pour la publication et permettre l'accès OAI au contenu (sélectionné).](./assets/journalSettings.png)

Quel que soit votre choix pour votre revue parmi les 3 premiers paramètres d’accès, assurez-vous d’avoir coché “​*Enable OAI access to content*​”. Enregistrez les paramètres.

Si vos paramètres d’accès sont configurés

* pour exiger un abonnement pour accéder à une partie ou à l’intégralité de son contenu, ou
* ne pas utiliser OJS pour publier le contenu de la revue en ligne

... suivre les instructions ci-dessous, à la section ​*Abonnements et utilisation d’OJS sans publication*,​ afin d’inclure ses contenus sur Érudit.

## Étapes de l'administrateur système

L'étape suivante nécessite un accès *backend* à OJS par un administrateur système. Vous devrez peut-être contacter votre fournisseur d'hébergement ou votre responsable technique pour effectuer cette étape.

### Étape 6. Activer l’indexation des PDF

Cette étape peut requérir l'aide de votre administrateur système puisqu'elle requiert l’accès à un fichier sur le serveur où votre instance OJS est installée.

* Assurez-vous que votre instance OJS connaisse l’emplacement de vos outils d’extraction de texte sur vos serveurs : vérifiez la section ​`[search]`​ de votre fichier ​`config.inc.php`​ pour vous assurer que les emplacements serveur de ces outils sont spécifiés.
* Si vous avez dû modifier votre fichier ​`config.inc.php`​ pour activer l’indexation PDF, vous devrez également reconstruire votre index de recherche. Vous pouvez le faire en exécutant la commande suivante sur votre serveur, dans la racine Web OJS:

```
php tools/rebuildSearchIndex.php
```

REMARQUE: cette étape n’est requise que si vous avez récemment activé l’indexation PDF.

* Vous pouvez vérifier que l’index a été correctement reconstruit en recherchant du texte qui n’apparaît que dans un PDF (c’est-à-dire pas dans d’autres métadonnées de soumission stockées par OJS, telles que des champs de titre ou de résumé).

En plus de configurer votre OJS pour Coalition Publica, cela permettra à OJS d’indexer les documents PDF pour son propre moteur de recherche.

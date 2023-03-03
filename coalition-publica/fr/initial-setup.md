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

Cherchez ensuite le plugiciel OAI JATS (dans la liste des plugiciels installés, il se nomme “Format de métadonnées JATS” et se trouve sous la rubrique “Plugiciels du format de métadonnées OAI”)

![OAI JATS Plugin dans la liste des plugins avec une case à cocher non cochée à côté.](./assets/jatsMetadataFormatPluginListing.png)

Cochez aussi la case à droite pour l’activer. Vous devriez voir ce message de confirmation :

![Notification : Le plugin "OAI JATS Plugin" a été activé.](./assets/jatsMetadataFormatPluginListingNotification.png)

**Si vous publiez les épreuves XML de vos articles**, vous devez cliquer sur la flèche bleue à côté de “Format de métadonnées JATS” afin d’accéder aux paramètres du plugin. Cochez ensuite la case à côté de "Ignorer les documents XML JATS téléchargés", puis cliquez sur OK. **Les revues qui ne publient pas d’épreuves XML peuvent ignorer cette étape**, à moins qu'elles n'aient reçu des instructions contraires de la part de leur contact Coalition Publica à la suite d'un test de moissonnage.

Si cette option n'apparaît pas pour vous, veuillez mettre à jour le plugin en suivant les instructions ci-dessous, puis réessayez.

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

Veuillez consulter le contenu de la section “Réglages de la revue” du document “[Préparer des métadonnées de qualité dans OJS](https://www.erudit.org/public/guides/ojs-metadonnees.pdf)” afin de vous assurer que les paramètres de la revue sont correctement configurés. 

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


## Étape 7. Configurez l’identifiant d’espace de nom de votre OAI
Le dépôt OAI de chaque instance OJS doit être configuré afin d’avoir un identifiant d’espace de nom (un *namespace-identifier* selon la syntaxe OAI-PMH) unique. 

Un identifiant d’espace de nom générique (“ojs.pkp.sfu.ca”) est défini par défaut lors de la première installation d'OJS, mais avant d'utiliser l'interface OAI PMH, celui-ci doit être modifié. Cette étape nécessite l'aide de votre administrateur système, car elle requiert un accès *back-end* à un fichier qui se trouve sur le serveur sur lequel l’instance OJS est installée.

### Choisir un identifiant unique pour le dépôt OAI
L’identifiant d’espace de nom de votre dépôt OAI doit être unique au sein de l’instance OJS sur laquelle votre revue est hébergée. Un choix logique consiste à utiliser la partie de premier niveau de l’URL de l’instance OJS. Par exemple, si l’URL est “https://revues.bibliotheque.exemple.com”, vous pouvez utiliser “revues.bibliotheque.exemple.com” comme identifiant de nommage. 
L’identifiant d’espace de nom que vous utilisez doit respecter la syntaxe [URI (Uniform Resource Identifiers)](https://www.ietf.org/rfc/rfc2396.txt?number=2396). En particulier, tous les caractères réservés de la section 2.2 ne peuvent pas être utilisés : `;`, `/`, `?`, `:`, `@`, `&`, `=`, `+`, `$`, ou `,`.

### Modifier l'identifiant d’espace de nom de votre dépôt OAI
L’identifiant d’espace de nom votre dépôt OAI doit être modifié directement dans le fichier `config.inc.php` qui se trouve dans le répertoire de l’instance OJS.
Il se trouve dans la section `[oai]` du fichier de configuration et doit être ajouté après `repository_id = `. Si vous ne l'avez pas modifié précédemment, le contenu de cette ligne sera `repository_id = ojs.pkp.sfu.ca`. Dans ce cas, `ojs.pkp.sfu.ca` doit être remplacé par votre identifiant d’espace de nom unique.


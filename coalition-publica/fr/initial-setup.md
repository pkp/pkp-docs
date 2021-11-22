- - -
noindex: true
- - -
# Initial Setup

Érudit utilise le format XML standardisé ​[JATS](https://jats.nlm.nih.gov/)​ pour récupérer les articles de votre instance OJS. L’utilisation de JATS est répandue pour la publication et l’indexation d’articles de revue.

Vous pouvez configurer OJS afin qu’il génère automatiquement des fichiers JATS simples permettant la diffusion sur Érudit. Il s’agit d’installer et activer deux ​*plugins*​. Voici les étapes à suivre :

## Site Administrator Steps

The following steps can be performed within OJS by a user with the Site Administrator role.

### Étape 1. Installer JATS Template Plugin

Connectez-vous à votre instance OJS avec les paramètres de connexion de votre compte Administrateur.

Allez dans Paramètres > Site Web > Modules externes

Cliquez sur “Galerie de plugiciels”.

Une liste des ​*plugins*​ disponibles pour installation sera affichée. Recherchez “JATS Template Plugin”:

![JATS Template Plugin in the list of plugins.](./assets/jatsTemplatePlugin.png)

Cliquez sur “JATS Template Plugin” pour afficher plus d’informations sur ce ​*plugin​*:

![JATS Template Plugin with plugin information and an Upgrade button.](./assets/jatsTemplatePluginInfo.png)

(Votre version du ​*plugin*​ pourrait être différente de celle indiqué ci-haut. Nous recommandons de toujours utiliser la dernière version du ​*plugin*​ disponible dans la Galerie de plugiciels.)

Cliquez sur le bouton “Installer” afin d’installer le *​plugin*​. (Si vous ne voyez pas le bouton “Installer”, assurez-vous d’être connecté en tant qu’Administrateur.) Confirmez que vous souhaitez bien installer le ​*plugin*.​

Vous devriez voir une notification confirmant l’installation:

![Notification: Successfully upgraded to version 1.0.1.0.](./assets/jatsTemplatePluginNotification.png)

La dernière version disponible du ​*plugin*​ sera installée. (Lorsque de nouvelles versions du *plugin*​ seront disponibles, vous pourrez les mettre à jour de la même façon. Encore une fois, le numéro de version affiché pourrait différer de celle de la copie d’écran ci-haut.)

Afin de fournir à Érudit des contenus au format JATS, vous devez avoir la version **JATS Template Plugin 1.0.1.0 ou plus récente​**.

### Étape 2. Installer OAI JATS Plugin

Connectez-vous à votre instance OJS avec les paramètres de connexion de votre compte Administrateur.

Allez dans Paramètres > Site Web > Modules externes

Cliquez sur “Galerie de plugiciels”.

Une liste des ​*plugins*​ disponibles pour installation sera affichée. Recherchez “OAI JATS Plugin”:

![OAI JATS Plugin in the list of plugins.](./assets/oaiJatsPlugin.png)

Cliquez sur “OAI JATS Plugin” pour afficher plus d’informations sur ce ​*plugin​*:

![OAI JATS Plugin with plugin information and an Upgrade button.](./assets/oaiJatsPluginInfo.png)

(Votre version du ​*plugin*​ pourrait être différente de celle indiqué ci-haut. Nous recommandons de toujours utiliser la dernière version du ​*plugin*​ disponible dans la Galerie de plugiciels.)

Cliquez sur le bouton “Installer” afin d’installer le *​plugin*​. (Si vous ne voyez pas le bouton “Installer”, assurez-vous d’être connecté en tant qu’Administrateur.) Confirmez que vous souhaitez bien installer le ​*plugin*.​

Vous devriez voir une notification confirmant l’installation:

![Notification: Successfully upgraded to version 1.0.1.0.](./assets/oaiJatsPluginNotification.png)

La dernière version disponible du ​*plugin*​ sera installée. (Again, the version number you see may not be the same as the screenshot above.)

In order to provide JATS content to Érudit, you must be running the latest version of the OAI JATS plugin suitable for your version of OJS. The next step will demonstrate how to enable and upgrade the plugins in order to keep them up to date.

### Étape 3. Enabling and Upgrading the Plugins

#### Enabling the Plugins

Un coup les *​plugins*​ JATS Template Plugin et OAI JATS Plugin installés, vous devez les activer.

**Il faut activer les ​*plugins*​ une fois ​*pour chaque revue*​ que vous souhaitez inclure à Érudit.**

Allez dans Paramètres > Site Web > Modules externes

Cliquez sur “Plugiciels installés”.

Cherchez “JATS Template Plugin” dans la liste des ​*plugins*:​

![JATS Template Plugin in the list of plugins with an unchecked checkbox next to it.](./assets/jatsTemplatePluginListing.png)

Cochez aussi la case à droite pour l’activer. Vous devriez voir ce message de confirmation:

![Notification: The plugin "JATS Template Plugin" has been enabled.](./assets/jatsTemplatePluginListingNotification.png)

Now find the “OAI JATS Plugin”:

![JATS Metadata Format in the list of plugins with an unchecked checkbox next to it.](./assets/jatsMetadataFormatPluginListing.png)

Click the checkbox beside that to enable it as well. Vous devriez voir ce message de confirmation:

![Notification: The plugin "OAI JATS Plugin" has been enabled.](./assets/jatsMetadataFormatPluginListingNotification.png)

Répétez ces étapes pour chaque revue que vous souhaitez inclure à Érudit.

#### Updating the Plugins

The plugins used for harvesting your journal’s metadata are occasionally updated to fix bugs or improve functionality. You may be instructed to update the plugins by Coalition Publica, or you may choose to update the plugins as part of regular maintenance.

Following any upgrade to your OJS, ensure that your plugins are updated to the latest version suitable for your version of OJS by updating via the Plugin Gallery.

First, navigate to Settings > Website > Plugins. Switch to the “Plugin Gallery” tab.

Navigate to the relevant plugin and click its name to open this window.

![OAI JATS Plugin with plugin information and an Upgrade button.](./assets/oaiJatsPluginInfo.png)

Click the upgrade button if available and confirm that you wish to update the plugin. If the upgrade button is unavailable, your plugin is already up to date.

![Notification: Successfully upgraded to version 1.0.1.0.](./assets/oaiJatsPluginNotification.png)

You will see a confirmation after the upgrade completes successfully.

Although it is possible to update plugins in OJS by downloading the latest version from Github, it is possible that newer versions may not be compatible with your particular version OJS, so **please always update plugins from the Plugin Gallery unless otherwise instructed**.

### Étape 4. Réviser les paramètres de revue

Plusieurs paramètres de revue doivent être correctement configurés afin de permettre la récupération des données par Érudit. Pour chaque revue que vous souhaitez inclure, assurez-vous que:

* Pour chacune des rubriques de la revue, le champ “Identifier les articles publiés dans cette rubrique en tant que un(e)” utilise une des ​[valeurs suggérées pour le JATS article-type](https://jats.nlm.nih.gov/archiving/tag-library/1.1/attribute/article-type.html)​. Please note that “research-article” is used only for peer-reviewed research. If you are unsure how to identify the items in the section, “other” is acceptable.
* Les paramètres de revue sont complets, ex.:
    * Un ISSN est spécifié
    * Le titre de la revue est le même que celui enregistré à ​[issn.org](https://www.issn.org/)
    * Un éditeur est spécifié dans Paramètres > Revue > Bloc générique
    * Droit d’auteur
        * Assurez-vous que le titulaire du droit d’auteur des articles (“Auteur”, “Revue” ou “Autre”) soit adéquatement identifié dans Paramètres > Distribution > Autorisations.
        * Assurez-vous, lorsque vous établissez le “Calendrier de publication” d’un article, d’y associer les autorisations (titulaire du droit d’auteur et année du droit d’auteur)

### Étape 5. Vérifier les paramètres de distribution

Sous Paramètres > Distribution > Accès, vous verrez un ensemble de paramètres:

![Access to journal content settings with options to provide open access (selected), require subscription, not use OJS for publishing, and enable OAI access to content (selected).](./assets/journalSettings.png)

Quel que soit votre choix pour votre revue parmi les 3 premiers paramètres d’accès, assurez-vous d’avoir coché “​*Enable OAI access to content*​”. Enregistrez les paramètres.

Si vos paramètres d’accès sont configurés

* pour exiger un abonnement pour accéder à une partie ou à l’intégralité de son contenu, ou
* ne pas utiliser OJS pour publier le contenu de la revue en ligne

... see specific instructions in the Subscriptions and Non-Publishing Use of OJS section of this document.

## System Administrator Steps

The following step requires back-end access to OJS by a system administrator. You may need to contact your hosting provider or technical lead to perform this step.

### Étape 6. Activer l’indexation des PDF

This step may require the help of your system administrator, as it requires back-end access to a file on the server on which OJS is installed.

* Assurez-vous que votre instance OJS connaisse l’emplacement de vos outils d’extraction de texte sur vos serveurs : vérifiez la section ​`[search]`​ de votre fichier ​`config.inc.php`​ pour vous assurer que les emplacements serveur de ces outils sont spécifiés.
* Si vous avez dû modifier votre fichier ​`config.inc.php`​ pour activer l’indexation PDF, vous devrez également reconstruire votre index de recherche. Vous pouvez le faire en exécutant la commande suivante sur votre serveur, dans la racine Web OJS:

`php tools/rebuildSearchIndex.php`

REMARQUE: cette étape n’est requise que si vous avez récemment activé l’indexation PDF.

* Vous pouvez vérifier que l’index a été correctement reconstruit en recherchant du texte qui n’apparaît que dans un PDF (c’est-à-dire pas dans d’autres métadonnées de soumission stockées par OJS, telles que des champs de titre ou de résumé).

En plus de configurer votre OJS pour Coalition Publica, cela permettra à OJS d’indexer les documents PDF pour son propre moteur de recherche.

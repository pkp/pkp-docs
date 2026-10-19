# Aide au dépannage

Si les tests initiaux de moissonnage se soldent par un échec ou que le moissonnage plein texte échoue alors qu'il a déjà fonctionné auparavant, veuillez suivre les instructions de l'équipe de Coalition Publica ci-dessous. Vous aurez besoin des droits d'administration du site et d'adminisatration système.

## Désinstaller et réinstaller les plugiciels puis recréer l'index de recherche.

## Étapes d'administration du site

### Étape 1. Supprimer les plugiciels *Plugiciel de modèle JATS* et *Format de métadonnées JATS*.

Connectez-vous à votre instance OJS avec votre compte d'administration du site.

Allez dans Paramètres > Site Web > Plugiciels

Cliquez sur « Plugiciels installés » pour voir la liste de tous les plugiciels déjà installés.

Dans la section *Plugiciels génériques*, repérez le « Plugiciel de modèle JATS » puis cliquez sur la flèche bleu à gauche.

Cliquez sur le bouton « Supprimer ».

![Plugiciel avec information et option a supprimer](./assets/supprimermodelejats.png)

Confirmez que vous souhaitez supprimer ce plugiciel du système.

![Confirmation que vous voulez supprimer le plugiciel.](./assets/confirmationplugicielsuprime.png)

Dans la section *Plugiciels du format de métadonnées OAI*, repérez le plugiciel « Format de métadonnées JATS » puis cliquez sur la flèche bleu à gauche.

Cliquez sur le bouton *Supprimer* puis confirmez que vous souhaitez supprimer ce plugiciel du système.

### Étape 2. Réinstaller et activer les plugiciels
Notez que les noms des plugiciels dans la galerie ne se traduisent pas. Les plugiciels requises par Coalition Publica sont nommées « OAI JATS Plugin » et « JATS Template Plugin » 

### Étape 1. Installer la dernière version du JATS Template Plugin

Allez dans Paramètres > Site Web >  Galerie de plugiciels

Une liste des plugiciels disponibles pour installation sera affichée. Recherchez « JATS Template Plugin »:

![JATS Template Plugin dans la liste des plugins](./assets/jatsTemplatePlugin.png)

Cliquez sur le nom du plugiciel en hyperlien pour afficher de plus amples renseignements :

![JATS Template Plugin avec des informations sur le plugiciel et un bouton Installer.](./assets/jatsTemplatePluginInstall.png)

Cliquez sur le bouton « Installer » et confirmez que vous souhaitez bien installer le plugiciel.

Vous devriez voir une notification confirmant l’installation :

![Notification:  Mise à jour réussie vers la version 1.0.1.0](./assets/oaiJatsPluginNotification.png)


### Étape 3. Installer la dernière version du OAI JATS Plugin

Recherchez « OAI JATS Plugin » dans la Galerie de plugiciels:

![OAI JATS Plugin dans la liste des plugins.](./assets/oaiJatsPlugin.png)

Cliquez sur le nom du plugiciel en hyperlien pour afficher de plus amples renseignements :

![OAI JATS Plugin avec des informations sur le plugiciel et un bouton Installer.](./assets/OAIjatsPluginInstall.png)

Cliquez sur le bouton « Installer » afin d’installer le plugiciel et puis confirmez que vous souhaitez l’installer.

Vous devriez voir un message confirmant l’installation :

![Notification: Mise à jour réussie vers la version 1.0.1.0.](./assets/oaiJatsPluginNotification.png)

### Étape 4.  Activer encore une fois les plugiciels
Suivez les étapes 1 à 3 du guide de configuration initiale{initial-setup#site-admin} pour activer les plugiciels  « Plugiciel de modèle JATS » et  «Format de métadonnées JATS ». Notez que ce dernier s'agit du plugiciel OAI JATS, renommé par le système pour s'aligner sur la convention de nommage la section *Plugiciels de format de métadonnées OAI*.

## Instructions d'administration système

### Dépannage de l'outil d'analyse de texte intégral PDF

Vérifiez que les outils d'analyse de PDF sont installés et configurés correctement.

Dans le répertoire OJS, vérifiez le fichier `config.inc.php` à la section `[search]`. Repérez la zone débutant par `; PDF`. Elle devrait ressembler à ceci :

```
index[application/pdf] = "/usr/bin/pdftotext -enc UTF-8 -nopgbrk %s - | /usr/bin/tr '[:cntrl:]' ' '"
```

Assurez-vous que :
* Un des outils est activé / décommenté dans le fichier `config.inc.php`.
* Une des lignes sous `; PDF` est décommentée (non préfixée d'un point-virgule (`;`)).

Dans l'exemple ci-dessus, `/usr/bin/pdftotext` est l'outil utilisé. Vous devez valider que cet outil est installé correctement sur le serveur et que le chemin d'accès est valide pour le système d'exploitation (OS) et la version utilisés.

### Pour recréer l'index de recherche

* Assurez-vous que votre instance OJS connaît les outils d'extraction de texte de votre serveur : dans le fichier `config.inc.php`, à la section `[search]`, vérifiez que l'emplacement de ces outils sur le serveur est indiqué.
* Si vous avez modifié le fichier `config.inc.php` pour activer l'indexation PDF, vous aurez également à recréer l'index de recherche. Pour ce faire, exécutez la commande suivante sur le serveur à la racine du répertoire de votre instance OJS :

```
php tools/rebuildSearchIndex.php
```

* Validez que l'index a bien été recréé en cherchant du texte apparaissant seulement dans un fichier PDF (c'est-à-dire qui n'apparaît pas dans d'autres métadonnées de soumission stockées par OJS, comme dans les champs titre ou résumé).


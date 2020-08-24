---
book: apprendre-ojs
version: 3.2
---

# Administration du Site

Dans le cadre de l'installation d'OJS, vous aurez créé un compte d'Administrateur de Site. Lorsque vous vous connectez à OJS avec ce compte, vous aurez accès aux paramètres d'Administrateur/trice du Site à partir du Tableau de Bord.

Vous serez en mesure de créer de nouvelles copies hébergées de la revue, de gérer la prise en charge des langues sur votre système, et d'exécuter d'autres fonctions administratives.

Des informations supplémentaires à propos de l'administration d'un site <br>OJS, y compris les mises à niveau, les emails, les statistics, et l'import et export, sont disponibles dans le [Guide d'Administrateur](https://docs.pkp.sfu.ca/admin-guide/en/).

## Gestion du Site

Pour accéder à la Gestion du Site, connectez-vous en tant qu'Administrateur du Site et choisissez Administration dans le menu à gauche.

![](./assets/learning-ojs3.1-sa-site-admin.png)

### Revues Hébergées

À partir de là, choisissez Revues Hébergées. Sur la page résultante, vous verrez toutes les revues de cette installation OJS. Dans l'exemple ci-dessous, il n'y en a qu'une.

![](./assets/learning-ojs3.1-sa-hosted-journals.png)

Pour modifier la revue existante, cliquez sur la flèche bleue à gauche du nom de la revue. Vous verrez des options pour modifier, supprimer ou mettre à jour les paramètres.

![](./assets/learning-ojs3.1-sa-hosted-journals-edit.png)

**Modifier** vous permettra de modifier le titre, la description, ou le chemin.

![](./assets/learning-ojs-3-ch4-hosted-journals-edit-modal.png)

**Supprimer** vous permettra de supprimer la revue de l'installation. Vous devrez confirmer que vous voulez vraiment supprimer la revue, car c'est irréversible.

![](./assets/learning-ojs-3-ch4-hosted-journals-remove.png)

**Assistant de Paramétrage** vous amènera aux différentes options de paramétrage de cette revue. Nous expliquerons ces paramètres en détail dans les chapitres Paramètres.

![](./assets/learning-ojs-3-ch4-hosted-journals-settings-wiz.png)

**Utilisateurs** vous permettra d'ajouter et de gérer les utilisateurs associés à cette revue.

![](./assets/learning-ojs3.1-sa-hosted-journals-users.png)

De retour sur la page Revues hébergées, vous pouvez utiliser le lien Créer une Revue pour ajouter une nouvelle revue à cette installation OJS. Ensuite, Remplissez les champs du formulaire résultant avec les nouvelles informations.

![](./assets/learning-ojs-3-ch4-hosted-journals-create.png)

> Remarque: Si vous ne souhaitez pas que la nouvelle revue soit encore visible, décochez la case *Activer cette revue pour qu'elle apparaisse publiquement sur le site* .

### Paramètres du Site

Cette section apparaîtra si vous avez deux ou plusieurs revues, et vous permettra d'ajouter des informations concernant votre installation OJS globale, et non concernant des revues individuelles.

#### Configuration du Site

Cela inclut le nom de votre site, un logo de site, un texte d'introduction à votre site, un pied de page de site, une option de redirection (si vous ne prévoyez d'avoir qu'une seule revue sur cette installation), vos coordonnées, une longueur de mot de passe minimum pour les utilisateurs enregistrés, les options de feuille de style et de thème, et la gestion de la barre latérale.

Vous aurez la possibilité de fournir des détails sur vos revues à un stade ultérieur.

![](./assets/learning-ojs3.1-sa-site-settings.png)

#### Langues

OJS est conçu pour être un système multilingue, permettant aux revues prenant en charge une grande variété de langues d'être hébergées sur un seul site. Lorsque vous installez OJS, vous pouvez sélectionner une ou plusieurs langues pour votre site.

L'Administrateur du Site peut définir la langue par défaut du site et installer des Paramètres Régionaux additionnels pour que d'autres langues soit disponibles à l'utilisateur. Les Directeurs de Revue peuvent gérer leurs propres paramètres de langue sous Paramètres du Site Web > Langues. Voir le [Chapitre Paramètres du Site Web](./settings-website) pour plus de détails.

Sous Administration > Paramètres du Site> Langues, vous pouvez voir une liste des langues installées sur votre site, activer les langues, et définir n'importe quelle langue comme langue par défaut de votre site à travers les Paramètres Régionaux, ce qui signifie que c'est la langue que les utilisateurs verront la première fois qu'ils visitent le site.

![](./assets/learning-ojs3.1-sa-languages.png)

Pour ajouter une autre langue:

1. Cliquez sur Installer les Paramètres Régionaux
2. Cochez les Paramètres Régionaux que vous souhaitez installer
3. Cliquez sur Enregistrer

Après l'installation de nouveaux Paramètres Régionaux, vous devrez les activer sur la page Paramétres du Site > Langues. Une configuration supplémentaire de la disponibilité de la langue sur le site peut être effectuée sous Paramètres du Site Web > Langues par Directeur/trice de Revue. Voir le [Chapitre Paramètres du Site Web](./settings-website) pour plus de détails.

OJS 3.1 n'a pas encore autant de traductions que OJS 2, mais nous nous attendons à avoir plus contribué au fil du temps. Les contributions sont toujours les bienvenues.

#### Plugiciels

D'ici, vous pouvez choisir d'activer ou de désactiver divers plugiciels, les rendant disponibles (ou non) à toutes les revues sur cette installation OJS.

![](./assets/learning-ojs3.1-sa-plugins.png)

#### Menus de Navigation

Utilisez cette section pour modifier les menus de votre site. Vous pouvez en savoir plus sur la configuration des menus dans le chapitre Paramètres du Site Web.

![](./assets/learning-ojs3.1-sa-menus.png)

### Étapes Suivantes

Une fois que vous avez créé un journal et configuré les paramètres du site, vous souhaiterez peut-être créer un compte d'utilisateur pour le/la directeur/trice ou l'éditeur/trice de la revue - voir le [Chapitre Utilisateurs et Rôles](./users-and-roles.md) pour plus de détails.

<hr>

## Fonctions Administratives

Cette section fournit des informations détaillées sur le serveur sur lequel votre installation OJS s'exécute.

![](./assets/learning-ojs3.1-sa-admin-functions.png)

### Informations Système

Utilisez cette section pour obtenir des détails sur le serveur exécutant votre installation.

![](./assets/learning-ojs3.1-sa-sysinfo.png)

Les informations de version d'OJS indiquent la version actuellement installée et l'historique de vos versions, y compris les mises à niveau. Vous pouvez cliquer sur le lien Vérifier les mises à jour pour voir si vous utilisez la version la plus récente d'OJS.

Les informations sur le serveur fournissent des détails sur l'environnement du serveur hébergeant votre installation OJS.

La section Configuration OJS affiche toutes les options de configuration et leurs valeurs telles qu'elles sont dans *config.inc.php* .

Vous pouvez trouver plus d'informations sur les paramètres de configuration de *config.inc.php* dans le fichier lui-même.

La dernière section de cette page affiche des informations supplémentaires sur le serveur: votre système d'exploitation, la version PHP, le serveur, et la base de données. Vous pouvez également afficher plus d'informations PHP en cliquant sur le lien Informations PHP Étendues (cela affiche le résultat de `phpinfo()` )

Toutes ces informations peuvent être utiles lorsque vous essayez de résoudre un problème.

### Expirer les Sessions d'Utilisateur

Cliquer sur *Expirer les Sessions d'Utilisateur* ferme immédiatement toutes les sessions d'utilisateur actives dans le système, obligeant tout utilisateur actuellement connecté à se reconnecter au système. Cela peut être utile avant une mise à niveau, pour s'assurer que tous les utilisateurs sont déconnectés.

### Effacer les Données sur Cache

Cliquer sur *Effacer les Données sur Cache* efface toutes les données mises en cache, y compris les informations locales, le cache d'aide, et le cache de recherche. Cette fonction peut être utile pour forcer le rechargement des données une fois que des personnalisations ont été effectuées.

### Effacer le Cache de Modèles

Cliquez sur *Effacer le Cache de Modèles* pour effacer toutes les versions mises en cache des modèles HTML. Cette fonction peut être utile pour forcer le rechargement des modèles une fois que des personnalisations ont été effectuées.

### Effacer les Journaux d'Exécution des Tâches Planifiées

Si les tâches planifiées ont été activées pour votre revue, cliquer sur *Effacer les Journaux d'Exécution des Tâches Planifiées* supprimera de votre serveur les fichiers de journaux d'exécution des tâches. Les fichiers de journaux d'exécution comprennent des dates qui correspondent aux tâches planifiées précédemment terminées (par exemple, l'envoi automatique d'emails de rappels d'évaluation).

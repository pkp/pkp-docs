---
book: apprendre-ojs
version: 3.2
---

# Utilisateurs et Rôles

Cette section donne accès à tous les comptes d'utilisateurs associés à votre revue, ainsi que la possibilité de gérer les rôles et les autorisations.

## Utilisateurs

En plus de gérer le site Web de la revue, le/la Directeur/trice de la Revue est également responsable de tous les comptes utilisateurs du système.

Pour afficher les comptes d'utilisateurs, sélectionnez Utilisateurs et Rôles dans le menu de gauche.

![Users and Roles screen with list of journal users](./assets/learning-ojs3.1-jm-users.png)

If you want to export a list of all registered users, you can find the option to export it as an XML file under the **Tools** menu. If you prefer your user data in a spreadsheet format, you can download it as a CSV file from **Statistics > Users**.

### Utilisateurs

Vous pouvez modifier un compte utilisateur en sélectionnant la flèche bleue à gauche d'une entrée.

You can edit a user account by selecting the blue arrow to the left of an entry.

![Blue arrow selected by a user's name with options to edit their account](./assets/learning-ojs3.1-jm-users-edit.png)

Cela ouvre les options Email, Modifier l'Utilisateur, Désactiver, Supprimer, connexion sous , Fusionner l'Utilisateur.

#### Utilisateurs d'Email

Si vous souhaitez envoyer un email à un utilisateur à propos d'une soumission particulière, vous pouvez utiliser la fonction Discussion dans la soumission. Cela garde toutes les communications concernant une soumission en un seul endroit.

Pour envoyer un email à un utilisateur qui n'est pas lié à une soumission:

1. Dans le tableau de bord du/de la directeur/trice de la revue ou du rédacteur, allez à Utilisateurs et Rôles > Utilisateurs
2. Trouvez l'utilisateur à qui vous souhaitez envoyer un e-mail
3. Cliquez sur la flèche bleue à côté du nom de l'utilisateur pour afficher les liens en dessous
4. Cliquez sur Email. Une boîte de dialogue apparaîtra dans laquelle vous pouvez taper votre message et l'envoyer

![Email pop-up box for emailing a user](./assets/learning-ojs-3-users-email.png)

In OJS 3.3 you can email multiple users at the same time using the Notify tab. This feature will need to be enabled for each journal by the journal administrator under Site Settings > Bulk Emails. The site administrator can also disable certain roles in the journal from receiving bulk emails under Hosted Journals > Settings Wizard.

If enabled for the journal by the site administrator, emails can be sent to all users in one or more role, such as all journal managers and / or all section editors, etc. See [Site Administration > Site Settings](./site-administration#site-settings) for instructions on enabling this feature.

In the Notify tab, select the user roles that you would like to email. Type your subject and email message. You have the option to send a copy of the email to your own email address. You will receive a status notification indicating that the message was sent successfully.

![OJS 3.3 selecting multiple users to notify with an email message](./assets/learning-ojs3.3-users-roles-notify.png)

This email feature can be used to send practical, core service emails to users who are actively working on the journal. For example, you might send an email to all copy editors reminding them of the “house style” for a particular word use or spelling. Avoid using this feature to notify large numbers of readers; the Announcement feature is preferable for large broadcast emails. See [Website Settings > Setup > Announcements](./settings-website#announcements) for details about this feature.

If several recipients flag your message as spam, it could result in all emails from the journal being sent to the spam folder. Care must be taken not to abuse this feature by sending excessive, unwanted emails. Become familiar with anti-spam and email privacy laws in your region, such as CASL in Canada and GDPR in the EU and UK. Note that there is no “unsubscribe” option available for users who receive these emails.

Il n'est actuellement pas possible d'ajouter des adresses cc ou cci aux messages ou d'ajouter des pièces jointes aux messages. Pour envoyer des pièces jointes, vous pouvez utiliser la fonction de Discussion ou la Bibliothèque de Soumission.

La fonction Fusionner l'Utilisateur vous permet de déplacer les aspects de ce compte d'utilisateur, y compris les soumissions ou affectations, vers un autre compte d'utilisateur sur votre système.

![Edit information about a user](./assets/learning-ojs-3-users-edit-user.png)

Pour fusionner des utilisateurs:

**Supprimer** désinscrit l'utilisateur de tous les rôles dans la revue, mais le compte utilisateur reste dans le système. La seule façon de supprimer réellement un compte utilisateur de votre système est de **Fusionner les Utilisateurs** (voir ci-dessous).

**Connexion sous** vous permet de vous connecter temporairement en tant que cet utilisateur, par exemple, pour terminer une tâche en cours.

#### Fusionner l'Utilisateur

Cela peut vous aider à trouver rapidement un utilisateur par son prénom, son nom ou son adresse email, ou à voir tous les utilisateurs d'un rôle particulier.

> **Remarque**: c'est le seul moyen de supprimer complètement un compte du système.

**Remarque**: si vous laissez le champ Rechercher vide, sélectionnez un Rôle et appuyez sur Rechercher, vous obtiendrez une liste de tous les utilisateurs de ce rôle (par exemple, tous les réviseurs).

To merge users:

1. Dans Utilisateurs et Rôles > Utilisateurs, recherchez le compte d'utilisateur que vous souhaitez supprimer
2. Cliquez sur la flèche bleue à côté du nom d'utilisateur
3. Cliquez sur **Fusionner l'Utilisateur** dans le menu qui apparaît ci-dessous
4. Recherchez le compte d'utilisateur dans lequel vous souhaitez fusionner ce compte utilisateur (l'utilisateur que vous souhaitez garder)
5. Cliquez sur la flèche bleue à côté du nom d'utilisateur
6. Cliquez sur **Fusionner avec cet utilisateur**
7. Appuyez sur **OK** pour confirmer

#### Rechercher des Utilisateurs

Lorsque vous avez un grand nombre d'utilisateurs, vous souhaiterez profiter de la fonction de recherche.

![Search for a journal user by name, email, and role](./assets/learning-ojs-3-users-search.png)

This can help you quickly find a user by first name, last name, or email address, or to see all users in a particular role.

**Niveau d'Autorisation**: indique ce qu'un-e utilisateur/trice avec ce rôle peut faire à n'importe quelle étape.

![Search for all users with a given role](./assets/learning-ojs-3-users-search-roles.png)

#### Ajouter un Utilisateur

Pour ajouter un nouvel utilisateur à votre revue, sélectionnez le lien Ajouter un Utilisateur. Cela ouvrira une nouvelle fenêtre avec un ensemble de champs à remplir.

![Add a user and enter their information](./assets/learning-ojs-3-users-add-new.png)

Une fois ces champs complétés et que vous cliquez sur *Enregistrer*, il vous sera alors demandé d'attribuer des rôles au nouveau compte. Utilisez le lien *Ajouter un Rôle* pour ouvrir le sélecteur de rôle.

![Assign a role to a new user's account](./assets/learning-ojs-3-users-add-new-roles1.png)

Une fois que vous avez ajouté tous les rôles, cliquez sur le bouton **Enregistrer** .

#### Enregistrer un-e Utilisateur/trice à partir d'une Autre Revue

Les utilisateurs du système doivent avoir un ou plusieurs rôles.

1. Connectez-vous à la revue B en tant qu'Administrateur/trice
2. Allez dans Utilisateurs et rôles > Utilisateurs
3. Recherchez l'utilisateur/trice dans la revue A que vous souhaitez enregistrer dans la revue B, en cochant la case **Inclure les utilisateurs sans rôle dans cette revue**
4. Lorsque l'utilisateur/trice apparaît, cliquez sur la flèche bleue à côté de son nom
5. Cliquez sur **Modifier l'Utilisateur/trice**
6. Faites défiler jusqu'à **Rôles d'Utilisateur/trice** dans la zone Modifier l'Utilisateur/trice qui s'affiche.
7. Cochez le rôle que vous souhaitez que l'utilisateur/trice ait sur la revue B
8. Cliquez sur **Enregistrer** à la fin du formulaire

#### Si un-e Utilisateur/trice ne peut Pas se Connecter

Si un-e utilisateur/trice ne peut pas se connecter à votre site de revue, dites-lui de sélectionner **Mot de passe oublié** sur la page de connexion. Ils recevront alors un lien de réinitialisation du mot de passe par e-mail et pourront réinitialiser leur mot de passe.

Un utilisateur peut avoir plusieurs rôles, par exemple, être un-e directeur/trice, un-e rédacteur/trice et un-e auteur dans la même revue.

1. Allez dans Utilisateurs et Rôles > Utilisateurs
2. Trouvez l'utilisateur/trice qui ne peut pas se connecter et cliquez sur la flèche bleue à côté de son nom
3. Cliquez sur le bouton **Modifier l'Utilisateur/trice** qui apparaît ci-dessous
4. Entrez un nouveau mot de passe dans le champ **Mot de passe**, en notant le mot de passe
5. Cochez L'**utilisateur/trice doit changer le mot de passe lors de la prochaine connexion**
6. Cliquez sur **Enregistrer** à la fin du formulaire
7. Envoyez le nouveau mot de passe à l'utilisateur/trice et demandez-lui de se connecter avec ce mot de passe

Si l'utilisateur/trice ne parvient toujours pas à se connecter, son compte a peut-être été désactivé. Pour le réactiver:

1. Allez dans Utilisateurs et rôles > Utilisateurs
2. Trouvez l'utilisateur qui ne peut pas se connecter et cliquez sur la flèche bleue à côté de son nom
3. Regardez sous leur nom pour **Activer** ou **Désactiver.** Si Désactiver apparaît, le compte est déjà activé. Si Activer apparaît, cliquez dessus pour réactiver le compte.

<hr />

## Rôles

The OJS workflow revolves around different roles with different permissions and responsibilities for each user, allowing them access to different parts of the workflow. Users in the system must have at least one role. Users can also have more than one role, for example, being a Journal Manager, Editor, and Author in the same journal.

Each role is first assigned a permission level, which will broadly define what level of access a user has to a particular journal. Roles are then further customized by providing a position name, and granting or restricting access to various stages of the Editorial Workflow.

There are a number of predefined roles that you can use and edit in OJS. Read in-depth about these predefined roles organized by their permissions level. Italicized roles are new in OJS 3.

* The **Site Administrator** is a single user responsible for administration of the entire OJS installation. This permissions level will not appear in user lists or in role settings.
* **Journal Managers** have access to the entire Editorial Workflow, as well as all other journal settings. Available predefined Journal Manager roles: Journal Manager, Journal Editor (formerly “Editor” in OJS 2), Production Manager
* **Section Editors** have access to the entire Editorial Workflow, but cannot make any changes to journal settings. Available predefined Section Editor roles: Section Editor, *Guest Editor*
* **Assistants** can access only the parts of the Editorial Workflow assigned to their role. Available predefined Assistant roles and their assigned editorial workflow stages:
    * Submission & Review stages: *Funding coordinator*
    * Copyediting stage: Copyeditor, *Marketing and sales coordinator*
    * Production Stage: *Designer*, *Indexer*, Layout Editor, Proofreader
* **Attribution d'Étape**: cela vous permet de déterminer à quelle étape les utilisateurs avec ce rôle peuvent accéder.
* **Modifier l'Utilisateur** vous permet d'apporter des modifications au compte de cet utilisateur.
* **Readers** can access the reader-facing website. This is the minimum permissions level granted to all users.
* **Subscription Managers** can edit site access settings as well as settings related to subscriptions. This is a new permissions level in OJS 3, with one predefined role, *Subscription Manager*.

Predefined and custom roles can be checked from the Roles tab.

![Roles tab showing all current roles in the journal](./assets/learning-ojs3.1-jm-users-roles.png)

Sur cette page, vous pouvez voir chaque rôle et la phase éditoriale à laquelle chaque rôle peut accéder. Un bon exemple de ceci est le rôle de Réviseur/euse, qui ne peut accéder qu'à l'étape de révision. Les réviseurs ne peuvent pas passer à l'étape d'évaluation pour voir ce qui s'est passé pendant le processus d'évaluation par les pairs. Voir le chapitre Flux des Travaux éditorial pour plus d'informations sur les différentes étapes éditoriales.

**Nom du Rôle**: vous pouvez utiliser ce champ pour renommer facilement n'importe quel rôle.

### Modification des Rôles

**Abréviation**: chaque rôle doit avoir une abréviation unique.

La sélection de la flèche bleue à gauche du nom du rôle révèle le lien de modification. Cliquez dessus pour ouvrir la fenêtre d'édition.

![Edit details of a role](./assets/learning-ojs3.1-jm-users-roles-edit.png)

**Désactiver** maintient le compte en place, mais empêche l'utilisateur d'y accéder.

Le niveau Assistant-e de Revue peut communiquer avec d'autres utilisateurs et télécharger et réviser des fichiers. Dans les revues où un-e seul-e utilisateur/trice a reçu un rôle d'assistant-e, il/elle sera automatiquement affecté-e à une nouvelle soumission. Une fois qu'une deuxième personne a reçu ce rôle, cette action s'arrête.

Utilisez le lien *Créer de Nouveaux Rôles* pour ouvrir une fenêtre dans laquelle vous pouvez créer un nouveau rôle pour votre revue, notamment en définissant les étapes auxquelles le rôle peut accéder et le niveau d'autorisation dont il doit disposer.

**Abbreviation**: Each role must have a unique abbreviation.

Cette page vous permet de déterminer comment les lecteurs peuvent accéder à votre revue.

**Options de Rôle**: utilisez ces cases à cocher pour afficher toute personne ayant ce rôle dans la liste des contributeurs (par exemple, la liste des auteurs). Depuis OJS 3.2, les rôles peuvent être autorisés à modifier les métadonnées de soumission en cochant la case.

Utilisez la deuxième option pour déterminer si les utilisateurs peuvent s'inscrire eux-mêmes dans ce rôle. Les auteurs et les évaluateurs sont de bons candidats pour l'auto-inscription. Vous ne voudriez certainement PAS permettre aux utilisateurs de s'auto-enregistrer en tant que Directeurs ou Éditeurs de la Revue!

**Inscription des Utilisateurs**: cette option vous permet de déterminer si les utilisateurs peuvent créer leurs propres comptes ou s'ils doivent être inscrits par un-e Directeur/trice de Revue.

### Créer de Nouveaux Rôles

Use the _Create New Roles_ link to open a window where you can create a new role for your journal, including setting which stages it can access and how much permission it should have.

<hr />

## Options d'Accès au Site

This page allows you to determine how readers can access your journal.

![Site access options tab under Users and Roles](./assets/learning-ojs3.1-jm-users-siteoptions.png)

**Restrictions Supplémentaires d'Accès au Site et à l'Article**: choisissez parmi ces options pour limiter l'accès.

> Gardez à l'esprit que même si le fait d'exiger une inscription pour lire le contenu en libre accès peut être pratique pour votre suivi, cela peut dissuader certaines personnes de lire votre contenu. Utiliser avec précaution.

**User Registration**: This option allows you to determine whether users can create their own accounts or must be enrolled by a Journal Manager.

> Permettre aux utilisateurs de s’enregistrer eux-mêmes, mais uniquement dans les rôles d’auteur, de évaluateur/trice ou de lecteur/trice, est un bon choix.

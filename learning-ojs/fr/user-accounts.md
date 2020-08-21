---
book: apprendre-ojs
version: 3.2
---

# Comptes Utilisateur

OJS utilise un système de rôles intégral pour répartir le travail entre les utilisateurs, attribuer des flux de travaux, et limiter l'accès à différentes parties du système.

Since one installation of OJS can host multiple journals, users can be enrolled in different roles for more than one journal. For example, one person could be both an editor and author for the same journal, as well as being only an author in one journal, a reviewer in another, and an editor in a third.

When a user logs into the system, they will be taken to their Dashboard. From here, they will see all of the functions of the system to which they have access. For example, a Reviewer will only see the submission they have been assigned to review, while an Editor will see all of the submissions in the editorial workflow.

## Rôles dans OJS

Le flux des travaux d'OJS s'articule autour de différents rôles pour différents utilisateurs, leur permettant d'accéder à différentes parties du flux des travaux, et de différentes autorisations et responsabilités.

Major roles include Site Administrator, Journal Manager, Editor, Section Editor, Author, Reviewer, Copyeditor, Layout Editor, Proofreader, and Reader.

OJS 3 comprend également des rôles supplémentaires tels que Traducteur/trice et Designer. Vous pouvez également créer de nouveaux rôles ou renommer des rôles existants. Plus d'informations sur la configuration des rôles sont disponibles dans le [Chapitre Utilisateurs et Rôles](./users-and-roles.md) .

### Administrateur du Site

L'Administrateur du Site est responsable de l'installation globale d'OJS, de s'assurer que les paramètres du serveur sont exacts, d'ajouter des fichiers de langue, et de créer de nouvelles revues sur l'installation. Le compte de l'Administrateur du Site est créé dans le cadre du processus d'installation. Contrairement à tous les autres rôles OJS, il ne peut y avoir qu'un seul Administrateur de Site.

Voir le [Chapitre 4: Administration du Site](./site-administration.md) pour plus de détails.

### Directeur/trice de la Revue

The Journal Manager is responsible for setting up the journal web site, configuring the system options, and managing the user accounts. This does not involve any advanced technical skills, but entails filling out web-based forms and uploading files.

The Journal Manager also enrolls the Editors, Section Editors, Copyeditors, Layout Editors, Proofreaders, Authors, and Reviewers.

Le/la Directeur/truce de la Revue a également accès aux autres fonctionnalités de gestion de la revue, et peut créer de nouvelles Sections pour la revue, configurer des formulaires d'évaluation, modifier les emails par défaut, accéder les statistiques et les rapports, importer et exporter des données, et accéder au flux des travaux éditorial et à toutes les soumissions de revue.

Voir les chapitres Paramètres pour plus de détails.

### Auteur

Les auteurs peuvent soumettre des manuscrits à la revue directement via le site Web de la revue. L'auteur est invité à télécharger les fichiers de soumission et à fournir des métadonnées ou des informations d'indexation (les métadonnées améliorent la capacité de recherche pour la recherche en ligne et pour la revue). L'auteur peut télécharger plusieurs fichiers, sous la forme d'ensembles de données, d'instruments de recherche ou de textes sources qui enrichiront l'élément, ainsi que contribuer à des formes de savoir et de recherche plus ouvertes et plus robustes.

L'auteur est en mesure de suivre la soumission tout au long du processus d'évaluation et éditorial - ainsi que de participer à la révision et à la correction des soumissions acceptées pour publication - en se connectant au site Web de la revue.

Voir le [Chapitre Soumission](./authoring.md) pour plus de détails.

### Editor

The Editor oversees the entire review, editing and publishing process. The Editor, working with the Journal Manager, typically establishes the policies and procedures for the journal.

In the editorial process, the Editor assigns submissions to the Section Editors to see through Submission Review and Submission Editing. The Editor keeps an eye on the submission's progress and assists with any difficulties.

Once review is completed, the Editor typically sees the submission through the Editing process (including copyediting, production, and proofreading) although in some journals this remains the responsibility of the Section Editor in charge of the submission's review process.

The Editor also creates the journal issues, schedules submissions for publication, arranges the Table of Contents, and publishes the issue as part of the Publishing Process. The Editor can restore archived submissions to the active In Review or In Editing lists.

Editors can also access journal settings, users and roles, and tools.

Voir le [Chapitre Flux des Travaux Éditorial](./editorial-workflow.md) pour plus de détails.

### Section Editor

The Section Editor manages the review and editing of submissions to which they have been assigned. In some cases, a Section Editor who is assigned to see submissions through the Review Process will also be responsible for seeing the submissions that are accepted through the Editing process (that is, through copyediting, production, and proofreading).

Often, however, Section Editors only work with the review process, and an Editor, acting in the role of Section Editor, sees the submissions through the Editing process. The journal will have a policy on how the tasks are divided.

See the [Editorial Workflow chapter](./editorial-workflow.md) for more details.

### Évaluateur/trice

The Reviewer is selected by the Editor or Section Editor to review a submission. Reviewers are asked to submit reviews to the journal's website and are able to upload attachments for the use of the Editor and Author. Reviewers may be rated by Section Editors, again depending on the policies for this journal.

Voir le [Chapitre d'Évaluation](./reviewing.md) pour plus de détails.

### Révision

Le/la réviseur/euse modifie les soumissions pour améliorer la grammaire et la clarté, travaille avec les auteurs pour s'assurer que tout est en place, garantit le strict respect du style bibliographique et textuel de la revue et produit une copie propre et éditée pour qu'un éditeur de mise en page ou un assistant de production la transforme en épreuves qui seront dans le format de publication de la revue.

Some journals have an Editor or Section Editor play this role.

Voir le [Chapitre Flux des travaux Éditorial](./editorial-workflow.md) pour plus de détails.

### Éditeur de Mise en Page

L'éditeur de mise en page transforme les versions révisées de la soumission en épreuves au format HTML, PDF, XML, etc. -- fichiers que la revue a choisi d'utiliser pour la publication en ligne.

> Remarque
> OJS ne fournit pas actuellement de logiciel pour convertir automatiquement les documents traités de texte en formats d'épreuve (bien qu'un projet soit en cours de développement), donc l'éditeur de mise en page devrait avoir accès et pouvoir utiliser des logiciels tiers pour créer des épreuves.

Dans certains cas, l'éditeur/trice ou l'éditeur/trice de section fera également office d'éditeur de mise en page.

Voir le [Chapitre Flux des Travaux Éditorial](./editorial-workflow.md) pour plus de détails.

### Proofreader

Le/la correcteur/trice lit attentivement les épreuves dans les différents formats dans lesquels la revue publie (tout comme l'auteur). Le/la correcteur/trice (et l'auteur) enregistrent toutes les erreurs typographiques et de formatage que l'éditeur/trice de mise en page doit corriger.

In the case of some journals, the Editor or Section Editor will also serve as Proofreader.

Voir le [Chapitre Flux des Travaux Éditorial](./editorial-workflow.md) pour plus de détails.

### Lecteur/trice

Le rôle de lecteur est le rôle le plus simple dans OJS et possède le moins de fonctionnalités. Les lecteurs reçoivent un email de notification avec la publication de chaque numéro, qui comprend la table des matières pour un numéro particulier.

<hr>

## Inscription à une Revue

Les visiteurs non enregistrés d'une revue peuvent normalement s'inscrire en tant que Lecteur/trice, Auteur et/ou Évaluateur/trice. Les Directeurs de la Revue peuvent supprimer la possibilité pour les visiteurs de s'auto-enregistrer, auquel cas une notification apparaîtra indiquant que l'inscription est actuellement fermée (voir Paramètres de la Revue), mais les Directeurs de la Revue peuvent toujours enregistrer des utilisateurs à tout moment et pour n'importe quel rôle.

Pour vous inscrire à une revue, cliquez sur le lien S'inscrire dans le coin en haut à droite.

![](./assets/learning-ojs-3-registration.png)

Cela ouvrira le formulaire d'inscription que vous pourrez compléter avec toutes les informations requises.

![](./assets/learning-ojs-3-registration-form.png)

Tous les champs avec un astérisque (Prénom, Nom, Affiliation, Pays, Email, Nom d'utilisateur, Mot de passe, Répéter le mot de passe) sont obligatoires. Si le journal est multilingue, vous devrez sélectionner votre langue préférée.

Vous serez automatiquement enregistré en tant que lecteur/trice et auteur. Vous aurez également la possibilité de vous inscrire en tant qu'Évaluateur/trice.

You will not be able to self-register for an Editorial Role (e.g., Editor, Section Editor, Copyeditor, Layout Editor, Proofreader, or Journal Manager). If you need to be enrolled at that level, contact a current Journal Manager or Site Administrator.

<hr>

## Affichage et Modification de votre Profil

Pour afficher et modifier votre profil, connectez-vous et cliquez sur votre lien Nom d'utilisateur dans le coin en haut à droite. Choisissez le lien Afficher le profil.

![](./assets/learning-ojs3.1-ed-view-profile.png)

De là, en choisissant les différents onglets, vous pouvez mettre à jour vos détails personnels, vos coordonnées, changer vos rôles, ajouter une image personnelle (que certaines revues peuvent publier avec votre article ou sur une liste d'éditeurs), déterminer vos paramètres de notification, ou mettez à jour votre mot de passe.

Sous **Notifications**, vous pouvez configurer les types de notifications que vous recevez de la revue lorsque des événements se produisent, comme la publication d'un nouveau numéro de la revuel ou une activité sur une soumission dans laquelle vous êtes impliqué.

- Cochez "Activer ces types de notifications" si vous souhaitez voir une notification de cet événement sur votre tableau de bord lorsque vous vous connectez au site
- Cochez "Ne pas m'envoyer d'email pour ces types de notifications" si vous ne souhaitez pas recevoir de notification par email concernant cet événement

![](./assets/learning-ojs-3-user-notifications.png)

L' **onglet API** du profil utilisateur vous permet d'utiliser l'API REST d'OJS pour interagir avec des applications externes. Cependant, la plupart des utilisateurs n'utiliseront pas cet API et peuvent ignorer cet onglet.

## Réinitialiser votre Mot de Passe

Vous pouvez réinitialiser votre mot de passe en:

1. Vous connectant à la revue
2. Sélectionner votre nom d'utilisateur et afficher le profil à partir du coin en haut à droite de l'écran
3. Choisir l'onglet Mot de passe
4. Entrer votre mot de passe actuel puis votre nouveau mot de passe deux fois
5. Cliquer sur Enregistrer

![](./assets/learning-ojs3.1-ed-change-pw.png)

Votre mot de passe est maintenant changé.

### Si vous avez oublié votre mot de passe

La récupération de votre mot de passe est un processus en trois étapes:

Premièrement, vous devez demander un nouveau mot de passe:

1. Cliquez sur le lien de **Connexion** dans le coin en haut à droite de la barre de navigation
2. Cliquez sur le lien **Mot de passe oublié** sur la page suivante
3. Entrez votre adresse email
4. Cliquez sur **Réinitialiser le mot de passe**

Ensuite, vous devez vérifier votre compte email et confirmer votre demande:

1. Ouvrez votre compte email
2. Ouvrez l'email de confirmation de la revue (vous devrez peut-être vérifier votre dossier Spam)
3. Cliquez sur le lien pour confirmer que vous avez effectivement demandé la réinitialisation de votre mot de passe. Vous serez redirigé vers la revue en question et le système vous enverra un nouveau mot de passe par email.

Vous avez maintenant votre nouveau mot de passe temporaire et vous pouvez vous connecter:

1. Revenez à votre compte email
2. Ouvrez l'email contenant votre mot de passe temporaire (vous devrez peut-être vérifier votre dossier Spam)
3. Connectez-vous à la revue avec votre mot de passe temporaire
4. Remplissez un nouveau mot de passe lorsque le journal vous le demande

Si vous avez besoin d'aide supplémentaire, contactez l'équipe éditoriale de la revue. Une liste de contacts doit être disponible sur la page **À propos** .

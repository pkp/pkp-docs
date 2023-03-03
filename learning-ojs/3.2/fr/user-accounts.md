---
book: apprendre-ojs
version: 3.2
---

# Comptes Utilisateur

OJS utilise un système de rôles intégral pour répartir le travail entre les utilisateurs, attribuer des flux de travaux, et limiter l'accès à différentes parties du système.

Puisqu'une installation d'OJS peut héberger plusieurs revues, les utilisateurs peuvent être inscrits dans des rôles différents pour plusieurs revues. Par exemple, une personne peut être à la fois rédacteur/trice et auteur pour la même revue, mais aussi n'être qu'auteur dans une revue, évaluateur/trice dans une autre, et rédacteur dans une troisième.

Lorsqu'un utilisateur se connecte au système, il est redirigé vers son Tableau de Bord. De là, ils verront toutes les fonctions du système auquel ils ont accès. Par exemple, un-e Évaluateur/trice ne verra que la soumission qui lui a été affectée, tandis qu'un-e rédacteur/trice verra toutes les soumissions dans le flux des travaux éditorial.


## Inscription à une Revue

Les visiteurs non enregistrés d'une revue peuvent normalement s'inscrire en tant que Lecteur/trice, Auteur et/ou Évaluateur/trice. Les Directeurs de la Revue peuvent supprimer la possibilité pour les visiteurs de s'auto-enregistrer, auquel cas une notification apparaîtra indiquant que l'inscription est actuellement fermée (voir Paramètres de la Revue), mais les Directeurs de la Revue peuvent toujours enregistrer des utilisateurs à tout moment et pour n'importe quel rôle.

Pour vous inscrire à une revue, cliquez sur le lien S'inscrire dans le coin en haut à droite.

![](./assets/learning-ojs-3-registration.png)

Cela ouvrira le formulaire d'inscription que vous pourrez compléter avec toutes les informations requises.

![](./assets/learning-ojs-3-registration-form.png)

Tous les champs avec un astérisque (Prénom, Nom, Affiliation, Pays, Email, Nom d'utilisateur, Mot de passe, Répéter le mot de passe) sont obligatoires. Si le journal est multilingue, vous devrez sélectionner votre langue préférée.

Vous serez automatiquement enregistré en tant que lecteur/trice et auteur. Vous aurez également la possibilité de vous inscrire en tant qu'Évaluateur/trice.

Vous ne pourrez pas vous inscrire vous-même pour un rôle éditorial (par exemple, rédacteur,redacteur/trice de rubrique, réviseur/euse, éditeur/trice de mise en page, correcteur/trice d'épreuve, ou directeur/trice de la revue). Si vous devez être inscrit à ce niveau, contactez un-e directeur/trice de la revue ou un administrateur de site actuel.

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

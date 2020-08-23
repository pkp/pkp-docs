---
book: apprendre-ojs
version: 3.2
---

# Abonnements

OJS vous permet de restreindre l'accés à tout ou juste une partie de votre contenu aux abonnés. Pour activer les Abonnements, accédez d'abord à [Paramètres > Distribution > Accès](./distribution_settings.md) .

## Politiques d'abonnement

Remplissez les détails de vos politiques d'abonnement sur cette page.

![](./assets/learning-ojs3.1-jm-subscriptions-policies.png)

- **Responsable des Abonnements**: ajoutez les détails personnels de la personne responsable.
- **Renseignement sur l' Abonnement**: ajoutez des détails des règles à afficher sur le site Web de la revue.
- **Échéance de l'Abonnement**: déterminez si les anciens abonnés doivent continuer à avoir accès au contenu plus ancien.
- **Rappel de l'échéance de l''Abonnement**: configurez des rappels de renouvellement automatisés.
- **Avis de Paiement en Ligne**: tenez le/la Directeur/trice d'Abonnement informé-e des activités de paiement.
- **Options pour le libre accès pour les revues sous abonnement**: Sélectionnez le nombre de mois actuels pour lesquels vous souhaitez restreindre l'accès. Le contenu plus ancien sera automatiquement ouvert.

## Types d'Abonnement

La prochaine étape de la configuration de la gestion des abonnements consiste à désigner les types d'abonnements proposés par la revue.

![](./assets/learning-ojs3.1-jm-subscriptions-types.png)

Les revues proposent généralement les prix pour des abonnements individuels et des abonnements institutionnels. Certaines revues peuvent proposer des offres spéciales aux membres d'une organisation ou aux étudiants. OJS soutiendra la gestion des abonnements imprimés et/ou en ligne. Plus d'un type d'abonnement peut être créé pour couvrir des périodes plus longues (12 mois, 36 mois).

Sélectionnez **Créer un Nouveau Type d'Abonnement** pour en ajouter un nouveau.

![](./assets/learning-ojs3.1-jm-subscriptions-types-create.png)

- **Nom du Type**: donnez à ce nouveau type d'abonnement un nom unique (par exemple, étudiant).
- **Description**: Fournissez une brève description qui apparaîtra sur le site Web.
- **Coût**: sélectionnez le type de devise et le montant.
- **Format** : choisissez le format approprié (par exemple, en ligne).
- **Durée**: entrez le nombre de mois que ce type d'abonnement couvrira (par exemple, 12).
- **Abonnements**: indiquez si ce type couvre les individus ou les institutions.
- **Options** : sélectionnez les options appropriées (si il y en a).

## Types de Paiement

Si vous ne l'avez pas déjà fait, allez dans [Paramètres > Distribution > Paiements](./distribution_settings.md) et définissez la devise et le mode de paiement appropriés (par exemple, PayPal).

Utilisez cette page pour définir les montants facturés pour différents types de frais.

![](./assets/learning-ojs3.1-jm-subscriptions-paytypes.png)

### Frais de publication pour un article

Si vous souhaitez facturer des frais de traitement d'article (Article Processing Charge -- APC) aux auteurs, saisissez le montant ici. Activer les frais d'auteur vous permettra de demander des frais de traitement d'article une fois le processus d'évaluation terminé. Lorsque l'article est accepté par l'éditeur/trice, l'éditeur/trice aura la possibilité d'exiger un paiement. Cela entraînera la réception d'une notification par l'auteur dans OJS et d'un email, qui le dirigera tout au long du processus de paiement.

![](./assets/learning-ojs3.1-jm-subscriptions-authorfees.png)

### Frais de Lecture

Si vous souhaitez facturer des frais pour accéder à des articles et numéros individuels, vous pouvez saisir ici les prix des articles et numéros.

Vous pouvez appliquer les frais aux fichiers PDF uniquement en cochant " Limiter l'accès uniquement aux articles et numéros en format PDF".

Notez que pour vendre l'accès à un numéro, vous devrez télécharger une épreuve de numéros.

### Frais Généraux

Utilisez cela pour facturer d'autres frais, tels que les adhésions.

## Paiements

Au fur et à mesure que divers paiements sont reçus, ils seront répertoriés sous cet onglet.

<hr>

## Abonnements Individuels

Tous les types d'abonnements individuels apparaîtront ici.

![](./assets/learning-ojs3.1-jm-subscriptions-indiv.png)

Vous pouvez créer un nouvel abonnement individuel à l'aide du lien Créer un Nouvel Abonnement. Cependant, vous devrez d'abord créer un nouveau compte pour cette personne sous Utilisateurs et Rôles (voir le[Chapitre Comptes d'Utilisateurs](/learning-ojs/en/user-accounts) ). Une fois que cela est fait, vous pouvez rechercher le compte ici et appliquer les différentes configurations.

![](./assets/learning-ojs3.1-jm-subscriptions-indiv-create.png)

**Type d'Abonnement**: sélectionnez le type approprié pour ce nouvel abonné (par exemple, étudiant) et son statut (par exemple, actif).

> Les Types d'Abonnement ont été configurés plus tôt dans ce chapitre.

**Date**: définissez les dates de début et de fin de cet abonnement.

**Adhésion**: si l'abonné est associé à des adhésions pertinentes, ajoutez ces informations ici (facultatif).

**Numéro de Référence**: si l'abonnement est associé à un numéro de référence pertinent (tel qu'un numéro de facture pour le paiement), ajoutez ces informations ici (facultatif).

**Notes**: Si vous avez des notes pertinentes à ajouter, enregistrez-les ici (facultatif).

<hr>

## Abonnements Institutionnels

Tous les types d'abonnements institutionnels apparaîtront ici.

![](./assets/learning-ojs3.1-jm-subscriptions-instit.png)

Les abonnements institutionnels sont gérés de la même manière que les abonnements individuels, mais sont utilisés pour les bibliothèques, les instituts de recherche et autres organisations qui s'abonnent à votre revue.

Vous pouvez créer un nouvel abonnement individuel à l'aide du lien Créer un nouvel abonnement. Cependant, vous devrez d'abord créer un nouveau compte pour la personne qui le point de contact avec l'institution sous Utilisateurs et Rôles (voir le[Chapitre Comptes d'Utilisateurs](/learning-ojs/en/user-accounts) ). Une fois que cela est fait, vous pouvez rechercher le compte ici et appliquer les différentes configurations.

![](./assets/learning-ojs3.1-jm-subscriptions-instit-create.png)

- **Type d'Abonnement**: sélectionnez le type approprié pour ce nouvel abonné (par exemple, Bibliothèque) et son statut (par exemple, Actif). (Les types d'abonnement ont été configurés plus tôt dans ce chapitre.)
- **Date**: définissez les dates de début et de fin de cet abonnement.
- **Nom de l'Institution**: Ajoutez le nom de l'institution pour cet abonnement (par exemple, Bibliothèque de l'Université Simon Fraser).
- **Adresse de Courrier**: ajoutez l'adresse de l'institution.
- **Domaine**: les lecteurs provenant d'un ordinateur avec ce domaine recevront automatiquement l'accès (par exemple, sfu.ca). Cela s'appliquera aux utilisateurs sur le campus.
- **Plage d'Adresses IP**: l'établissement peut vous fournir des gammes d'adresses IP. Les lecteurs utilisant un ordinateur dans cette gamme d'adresses IP recevront automatiquement l'accès. Chaque gamme IP doit être saisie comme une nouvelle ligne.

![](./assets/learning-ojs3.2-jm-subscriptions-instit-IP.png)

- **Notes**: Si vous avez des notes pertinentes à ajouter, enregistrez-les ici (facultatif).

## Bloc d'Abonnement

Lorsqu'un utilisateur a accès à un site ou à son contenu via un abonnement, les informations de l'abonné fournissant l'accès peuvent être affichées dans la barre latérale. La fonction de Bloc d'Abonnement doit être sélectionnée pour être affichée dans Paramètres du Site Web > Apparence > Gestion de la barre latérale.

## Définir les Articles à Accès Ouvert

Si vous souhaitez définir certains articles comme Accès Ouvert, cela peut être fait en allant à **Numéros** dans le menu de gauche. Si vous souhaitez cela définir avant de publier le numéro, cliquez sur l'onglet Futur suivi de la flèche bleue à côté du numéro.

Sous la Table des Matières, cochez les articles qui seront définis comme Accès Ouvert.

![](./assets/learning-ojs3.2-jm-subscriptions-single-article.png)

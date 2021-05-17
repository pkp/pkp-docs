---
book: apprendre-ojs
version: 3.1
---

# Chapter 12: Subscriptions

OJS 3.1 allows you to restrict some or all of your content to subscribers. To enable Subscriptions, first go to [Settings &gt; Distribution &gt; Access](./settings-distribution.md).

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

Les revues proposent généralement les prix pour des abonnements individuels et des abonnements institutionnels. Certaines revues peuvent proposer des offres spéciales aux membres d'une organisation ou aux étudiants. OJS soutiendra la gestion des abonnements imprimés et/ou en ligne. More than one type of subscription can be created to cover longer periods of time \(12 months, 36 months\).

Sélectionnez **Créer un Nouveau Type d'Abonnement** pour en ajouter un nouveau.

![](./assets/learning-ojs3.1-jm-subscriptions-types-create.png)

- **Name of Type**: Give this new subscription type a unique name \(e.g., Student\).
- **Description**: Fournissez une brève description qui apparaîtra sur le site Web.
- **Coût**: sélectionnez le type de devise et le montant.
- **Format**: Choose the appropriate format \(e.g., Online\)
- **Duration**: Enter the number of months this type of subscription will cover \(e.g., 12\).
- **Abonnements**: indiquez si ce type couvre les individus ou les institutions.
- **Options**: Select the appropriate options \(if any\).

## Types de Paiement

If you haven't already done so, go to [Settings &gt; Distribution &gt; Payments](./settings-distribution.md) and set the appropriate currency and payment method \(e.g., Paypal\).

Utilisez cette page pour définir les montants facturés pour différents types de frais.

![](./assets/learning-ojs3.1-jm-subscriptions-paytypes.png)

- **General Options**: Check this to allow for payments to be collected.
- **Author Fees**: Set the amount to charge for an article processing charge \(APC\).
- **Reader Fees**: Use this to charge reader fees distinct from subscriptions.
- **General Fees**: Use this to charge other fees, such as memberships.

### Frais de publication pour un article

If you enable **Author Fees** you can request article processing charges after the review process has been completed. Lorsque l'article est accepté par l'éditeur/trice, l'éditeur/trice aura la possibilité d'exiger un paiement. Cela entraînera la réception d'une notification par l'auteur dans OJS et d'un email, qui le dirigera tout au long du processus de paiement.

![](./assets/learning-ojs3.1-jm-subscriptions-authorfees.png)

## Bibliothèque de l'éditeur

Tous les types d'abonnements individuels apparaîtront ici.

<hr />

## Abonnements Individuels

All types of individual subscriptions will appear here.

![](./assets/learning-ojs3.1-jm-subscriptions-indiv.png)

Vous pouvez créer un nouvel abonnement individuel à l'aide du lien Créer un Nouvel Abonnement. First, however, you will need to create a new account for that person under Users & Roles \(see the Users and Roles chapter\). Une fois que cela est fait, vous pouvez rechercher le compte ici et appliquer les différentes configurations.

![](./assets/learning-ojs3.1-jm-subscriptions-indiv-create.png)

**Subscription Type**: Select the appropriate type for this new subscriber \(e.g., Student\) and its status \(e.g., Active\).

> Les Types d'Abonnement ont été configurés plus tôt dans ce chapitre.

**Numéro de Référence**: si l'abonnement est associé à un numéro de référence pertinent (tel qu'un numéro de facture pour le paiement), ajoutez ces informations ici (facultatif).

**Membership**: If the subscriber is associated with any relevant memberships, add that information here \(optional\).

**Reference Number**: If the subscribe is associated with any relevant reference number \(such as an invoice number for payment\), add that information here \(optional\).

**Notes**: If you have any relevant notes to add, record that information here \(optional\).

<hr />

## Abonnements Institutionnels

All types of institutional subscriptions will appear here.

![](./assets/learning-ojs3.1-jm-subscriptions-instit.png)

Les abonnements institutionnels sont gérés de la même manière que les abonnements individuels, mais sont utilisés pour les bibliothèques, les instituts de recherche et autres organisations qui s'abonnent à votre revue.

Vous pouvez créer un nouvel abonnement individuel à l'aide du lien Créer un Nouvel Abonnement. First, however, you will need to create a new account for the institution's contact person under Users & Roles \(see the Users and Roles chapter\). Une fois que cela est fait, vous pouvez rechercher le compte ici et appliquer les différentes configurations.

![](./assets/learning-ojs3.1-jm-subscriptions-instit-create.png)

- **Subscription Type**: Select the appropriate type for this new subscriber \(e.g., Library\) and its status \(e.g., Active\). (Les types d'abonnement ont été configurés plus tôt dans ce chapitre.)
- **Numéro de Référence**: si l'abonnement est associé à un numéro de référence pertinent (tel qu'un numéro de facture pour le paiement), ajoutez ces informations ici (facultatif).
-  **Institution**: Add the name of the institution for this subscription \(e.g., Simon Fraser University Library\).
- **Adresse de Courrier**: ajoutez l'adresse de l'institution.
- **Domain**: Readers coming from a computer with this domain will automatically receive access \(e.g., sfu.ca\). Cela s'appliquera aux utilisateurs sur le campus.
- **Plage d'Adresses IP**: l'établissement peut vous fournir des gammes d'adresses IP. Readers coming from a computer from this IP range will automatically receive access.
- **Notes**: If you have any relevant notes to add, record that information here \(optional\).

## Définir les articles en tant que Open Access
When a user is being provided access to a site or its content via a subscription, the information of the subscriber providing access can be dispayed in the sidebar. La fonction de Bloc d'Abonnement doit être sélectionnée pour être affichée dans Paramètres du Site Web > Apparence > Gestion de la barre latérale.

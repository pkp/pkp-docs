---
book: apprendre-ojs
version: 3.1
---

# Chapter 8: Distribution Settings

The Distribution Settings focus on helping to raise the visibility of your journal. The tabs consist of Indexing, Access, Payments, and Permissions.

## Indexing

This section helps you enhance your search engine optimization.

![Distribution settings search indexing tab showing description and custom tags options.](./assets/learning-ojs3.1-jm-settings-dist-index.png)

Utilisez **Description** pour fournir une brève description de votre revue aux moteurs de recherche.

Utilisez **Balises Personnalisées** pour ajouter des balises d'en-tête HTML personnalisées à l'en-tête de chaque page de votre revue, ce qui peut aider votre site à être indexé par les moteurs de recherche. Les balises doivent être ajoutées en tant qu'éléments HTML. Si vous entrez simplement des mots, ils apparaîtront en haut de chaque page de votre site plutôt que dans les métadonnées du site. Voici un exemple de texte qui pourrait être saisi dans ce champ:

```
<meta name="description" content="The Journal of Public Knowledge. Publication of the Public Knowledge Project - PKP and Simon Fraser University - SFU" /><meta name="keywords" content="open access, scholarly publishing, open source software, non-profit organizations, scholarly journals, free software" /><meta name="author" content="metatags generator"><meta name="robots" content="index, follow"><meta name="revisit-after" content="3 month">
```

## E-mails

Sous l'onglet Accès, vous pouvez configurer si vous souhaitez que le contenu de votre revue soit en accès ouvert, disponible par abonnement, ou une combinaison. Par défaut, l'option d'accès ouvert est sélectionnée. However, if you wish to use OJS for a subscription journal, choose the second option (see next section on Payments for further information).

![Distribution settings access tab showing access to journal content options.](./assets/learning-ojs3.1-jm-settings-dist-access.png)

Si vous n'utilisez OJS que pour gérer votre flux des travaux de soumission et ne pas publier votre contenu, vous pouvez sélectionner «OJS ne sera pas utilisé pour publier le contenu de la revue en ligne».

OJS vous permet de configurer comment et quand le contenu peut être consulté au niveau d'un article et d'un numéro. Lorsque vous créez un numéro, il existe un onglet appelé **Accès** sous lequel vous pouvez définir le **Statut d'Accès** sur **Abonnement** ou **Accès Ouvert** .

Si vous le définissez comme **Abonnement**, en dessous, une boîte apparaîtra dans laquelle vous pouvez éventuellement entrer une **Date d'Accès Ouvert**, à laquelle le contenu aura un accès ouvert.

Une fois que vous l'avez défini comme **Abonnement**, dans l'onglet **Table des Matières**, une case à cocher apparaîtra à côté de chaque article sous **Accès Ouvert**, où vous pouvez éventuellement définir des articles individuels en accès ouvert, même si le reste du numéro reste disponible par abonnement.

## Bibliothèque de l'éditeur

OJS offre la possibilité de collecter des paiements en ligne et de gérer les abonnements et les paiements des frais d'auteur.

Using the Paypal plugin, you can accept payments through Paypal, or you can accept manual payments (such as cheque, email transfer, etc.), but they must be made outside of OJS and are not automatically recorded in OJS.  Si vous souhaitez utiliser un autre service de paiement, vous devrez créer votre propre plugiciel.

### Activer les Paiements

To use payments and subscriptions features, you first have to enable payments.

If you plan to accept Paypal and/or manual payments, go to Website Settings > Plugins and enable the Paypal Fee Payment Plugin and Manual Fee Payment Plugin.

Si vous prévoyez de rendre votre revue ou vos articles disponibles par abonnement, accédez à Paramètres de Distribution > Accès et cochez "La revue nécessitera des abonnements pour accéder à tout ou just une partie de son contenu."

![Distribution settings access tab showing access to journal content options.](./assets/learning-ojs3.1-jm-settings-dist-access.png)

Then go to Payments (the next tab) and check off “Payments will be enabled for this journal. Note that users will be required to log in to make payments.”

![Payment method and Paypal payment settings fields.](./assets/learning-ojs3.1-jm-settings-dist-pay.png)

Sélectionnez la devise que vous utiliserez.

Select a fee payment method.

If you select Paypal Fee Payment, additional fields will appear.  You need to get this information from your Paypal account which you’ll set up on the Paypal website with the Paypal API. See the [Paypal Plugin Guide](https://docs.pkp.sfu.ca/using-paypal-for-ojs-and-ocs/en/) for more information.

![Paypal fee payment screen showing test mode enable option, account name, client ID and secret fields.](./assets/learning-ojs3.1-jm-settings-dist-paypalsettings.png)

If you select Manual Fee Payment, a field will appear where you can enter instructions that will appear to users who are making a manual payment.  For example, “Send a cheque payable to the Public Knowledge Project” to )))))”

Cliquez sur Enregistrer.

A new menu item will appear on the main dashboard menu called “Payments” (or “Subscriptions,” depending on which version of OJS you are using).

![OJS dashboard with Payments menu item on the left.](./assets/learning-ojs3.1-jm-settings-dist-payments-menu.png)

Accédez au [Chapitre Abonnements](./subscriptions.md) pour obtenir des instructions supplémentaires sur la gestion des abonnements et des paiements.

### Dons

In OJS 3.x there is not an option to set up a payment type for donations, to manage donations with the Payments module, or to use the Paypal plugin to accept donations. Vous pouvez ajouter le bloc Dons à votre barre latérale, mais il devra être lié à un site externe où les paiements de dons peuvent être effectués.

## Générateur de rapports

This section covers copyright issues for your journal.

![Distribution settings permissions tab showing copyright notice, year and holder options.](./assets/learning-ojs3.1-jm-settings-dist-permissions.png)

**Copyright Notice**: Add your journal's copyright statement here. It will be visible on the journal website.

Check the box to require authors to agree to your copyright statement.

**Base new article's copyright year on**: Choose whether the copyright date is based on the issue \(under a traditional, issue-based publishing model\) or on the article \(based on a continuous publishing model\).

**Titulaire des Droits d'Auteur**: sélectionnez qui détient les droits d'auteur des articles publiés par votre revue. La tendance dans la publication en accès ouvert est de permettre aux auteurs de conserver les droits d'auteur de leur travail.

**Licence** : sélectionnez la licence de votre journal. CC Attribution 4.0 est une licence largement utilisée pour les revues en accès ouvert, permettant un partage et une réutilisation maximum.

**Reset Article Permissions**: If you journal later changes its licensing policy, use this button to reset the copyright on all published content.

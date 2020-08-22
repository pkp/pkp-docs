---
book: apprendre-ojs
version: 3.2
---

# Paramètres de Distribution

Les paramètres de distribution se concentrent sur l'accès et la visibilité de votre revue. Les onglets comprennent Licence, Rechercher Indexation, Paiements, Accès, et Archivage.

Veuillez noter que si votre journal est multilingue et que les formulaires sont activés pour plusieurs langues dans les paramètres de langue, vous devrez configurer certaines de ces informations pour chaque langue. Vous pouvez passer à une autre langue en sélectionnant la langue sous le lien Aide en haut à droite.

## Licence

Dans cette section, vous pouvez configurer les conditions des droits d'auteur et de licence pour le contenu de votre revue.

![](./assets/learning-ojs3.2-jm-settings-dist-permissions.png)

**Titulaire des Droits d'Auteur**: sélectionnez qui détient les droits d'auteur des articles publiés par votre revue. La tendance dans la publication en accès ouvert est de permettre aux auteurs de conserver les droits d'auteur de leur travail.

**Licence** : sélectionnez la licence de votre journal. CC Attribution 4.0 est une licence largement utilisée pour les revues en accès ouvert, permettant un partage et une réutilisation maximum. Pour les définitions des différentes licences Creative Commons, consultez le [site Web Creative Commons](https://creativecommons.org/) .

La licence que vous sélectionnez sera automatiquement ajoutée aux métadonnées de chaque article et affichée sur la page d'article de chaque article publié.

**Année du copyright**: indiquez si vous souhaitez que l'année du droit d'auteur provienne par défaut de la date de publication de l'article ou de la date de publication du numéro.

Si vous utilisez un modèle de publication continue, sélectionnez la date de publication de l'article. Si vous utilisez un modèle de publication traditionnel basé sur les numéros, sélectionnez la date de publication du numéro.

Ces paramètres par défaut peuvent être remplacée au cas par cas.

**Termes de la Licence**: saisissez les conditions de licence supplémentaires que vous souhaitez afficher à côté de la licence sélectionnée ci-dessus sur la page de l'article publié.

## Indexation par les moteurs de recherche

Cette section vous aide à améliorer l'optimisation de votre moteur de recherche et à rendre votre contenu plus visible.

![](./assets/learning-ojs3.2-jm-settings-dist-index.png)

Utilisez **Description** pour fournir une brève description de votre revue aux moteurs de recherche.

Utilisez **Balises Personnalisées** pour ajouter des balises d'en-tête HTML personnalisées à l'en-tête de chaque page de votre revue, ce qui peut aider votre site à être indexé par les moteurs de recherche. Les balises doivent être ajoutées en tant qu'éléments HTML. Si vous entrez simplement des mots, ils apparaîtront en haut de chaque page de votre site plutôt que dans les métadonnées du site. Voici un exemple de texte qui pourrait être saisi dans ce champ:

```
<meta name="description" content="The Journal of Public Knowledge. Publication of the Public Knowledge Project - PKP and Simon Fraser University - SFU" /><meta name="keywords" content="open access, scholarly publishing, open source software, non-profit organizations, scholarly journals, free software" /><meta name="author" content="metatags generator"><meta name="robots" content="index, follow"><meta name="revisit-after" content="3 month">
```

## Paiements

OJS offre la possibilité de collecter des paiements en ligne et de gérer les abonnements et les paiements des frais d'auteur.

En utilisant le plugiciel PayPal, vous pouvez accepter les paiements via PayPal, ou vous pouvez accepter les paiements manuels (comme les chèques, les virements par e-mail, etc.), mais ils doivent être effectués en dehors d'OJS et ne sont pas automatiquement enregistrés dans OJS. Si vous souhaitez utiliser un autre service de paiement, vous devrez créer votre propre plugiciel.

### Activer les Paiements

Pour utiliser les fonctionnalités de paiement et d'abonnement, vous devez d'abord activer les paiements sous cet onglet. Après avoir coché **Activer**, des paramètres de configuration supplémentaires apparaissent ci-dessous.

![](./assets/learning-ojs3.2-jm-settings-dist-pay.png)

Sélectionnez la devise que vous utiliserez.

Sélectionnez le mode de paiement des frais que vous utiliserez sous **Plugiciels de Paiement** .

Si vous sélectionnez **Paiement des Frais par PayPal** , des champs supplémentaires apparaîtront.

Pour accepter des paiement PayPal, vous devrez allez à Paramètres Site Web > Plugiciels et activer le Plugiciel PayPal, puis effectuez l'installation et la configuration supplémentaires expliquées dans le [Guide de Plugiciel PayPal](https://docs.pkp.sfu.ca/using-paypal-for-ojs-and-ocs/en/). Grâce à ce processus, vous obtiendrez les valeurs des champs **Nom de Compte**, **ID du Client**, et **Clé secrète**.

![](./assets/learning-ojs3.2-jm-settings-dist-paypalsettings.png)

Si vous sélectionnez **Paiement Manuel des Frais** sous **Plugiciels de Paiement**, un champ apparaîtra dans lequel vous pourrez saisir des instructions qui apparaîtront aux utilisateurs qui effectuent un paiement manuel. Par exemple, «Envoyez un chèque à l'ordre de Public Knowledge Project» à «______».

![](./assets/learning-ojs3.2-jm-settings-manual-payments.png)

Vous devrez également activer le Plugiciel de Paiement Manuel sous Paramètres du site Web > Plugiciels pour accepter les paiements manuels.

Cliquez sur **Enregistrer** .

Un nouvel élément de menu apparaîtra dans le menu principal du tableau de bord appelé **Paiements** .

Accédez au [Chapitre Abonnements](./subscriptions.md) pour obtenir des instructions supplémentaires sur la gestion des abonnements et des paiements.

Si vous prévoyez de rendre votre revue ou vos articles disponibles par abonnement, accédez à Paramètres de Distribution > Accès et cochez "La revue nécessitera des abonnements pour accéder à tout ou just une partie de son contenu."

![](./assets/learning-ojs3.2-jm-settings-dist-access.png)

### Dons

Dans OJS 3.x, il n'y a pas d'option pour configurer un type de paiement pour les dons, pour gérer les dons avec le module Paiements, ou pour utiliser le plugiciel PayPal pour accepter les dons. Vous pouvez ajouter le bloc Dons à votre barre latérale, mais il devra être lié à un site externe où les paiements de dons peuvent être effectués.

## Accès

Sous l'onglet Accès, vous pouvez configurer si vous souhaitez que le contenu de votre revue soit en accès ouvert, disponible par abonnement, ou une combinaison. Par défaut, l'option d'accès ouvert est sélectionnée. Cependant, si vous souhaitez utiliser OJS pour un abonnement de revue, choisissez la deuxième option (voir la section ci-dessus sur les paiements pour plus d'informations). La sélection de la deuxième option vous permettra de retarder davantage l'accès ouvert de différentes périodes.

![](./assets/learning-ojs3.2-jm-settings-dist-access-delayed.png)

Si vous n'utilisez OJS que pour gérer votre flux des travaux de soumission et ne pas publier votre contenu, vous pouvez sélectionner «OJS ne sera pas utilisé pour publier le contenu de la revue en ligne».

OJS vous permet de configurer comment et quand le contenu peut être consulté au niveau d'un article et d'un numéro. Lorsque vous créez un numéro, il existe un onglet appelé **Accès** sous lequel vous pouvez définir le **Statut d'Accès** sur <br> **Abonnement** ou **Accès Ouvert** .

Si vous le définissez comme **Abonnement**, en dessous, une boîte apparaîtra dans laquelle vous pouvez éventuellement entrer une **Date d'Accès Ouvert**, à laquelle le contenu aura un accès ouvert.

Une fois que vous l'avez défini comme **Abonnement**, dans l'onglet **Table des Matières**, une case à cocher apparaîtra à côté de chaque article sous **Accès Ouvert**, où vous pouvez éventuellement définir des articles individuels en accès ouvert, même si le reste du numéro reste disponible par abonnement.

**Activer OAI** sera activé par défaut, car il s'agit d'un protocole important utilisé par les services d'indexation et d'autres applications pour récolter les métadonnées de votre journal. Cependant, si vous n'utilisez pas OJS pour publier le contenu de votre revue, vous pouvez désactiver l'OAI.

![](./assets/learning-ojs3.2-jm-settings-dist-oai.png)

## Archivage

Si vous êtes membre d'un réseau LOCKSS ou CLOCKSS, utilisez cet onglet pour activer votre revue. Le plugiciel PKP PN, qui dépose votre contenu dans le PKP Preservation Network, n'est pas encore disponible pour OJS 3.

Si vous utilisez un autre réseau, l'activer ici rendra votre contenu disponible sur le réseau, mais vous devrez également contacter le réseau pour lui faire connaître votre revue.

![](./assets/learning-ojs3.2-jm-settings-web-archive.png)

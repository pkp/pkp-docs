---
title: Comment utiliser le plugiciel ORCID dans OJS et OPS
---

# Utilisation du plugiciel ORCID

Maintenant que vous avez [obtenu les identifiants ORCID et activé et configuré le plugin](./installation-setup.md), vous pouvez commencer à l'utiliser dans votre revue / serveur de préprint.

## Informer vos parties prenantes

Lorsque le plugiciel ORCID est activé et en production, il peut être avantageux de faire savoir à toutes les parties prenantes (auteur-es, rédacteurs-trices, etc.) que le plugiciel ORCID est maintenant disponible, et de vérifier qu'ils savent ce qu'est ORCID et comment il peut les aider. Il y a plusieurs façons de procéder. L'une de ces façons est d'utiliser la [fonctionnalité d'annonces OJS](https://docs.pkp.sfu.ca/learning-ojs/en/settings-website#announcements) pour annoncer aux utilisateurs enregistrés que le plugiciel ORCID est en service. Dans cette annonce, vous pouvez diriger les utilisateurs-trices vers la page [À propos du plugiciel ORCID](./introduction.md) au cas où ils ne sont pas familiarisés avec ORCID. Si votre revue est présente sur les sites de médias sociaux ou distribue un bulletin d'information, vous pouvez également informer les utilisateurs-trices par ces moyens.

## Fonctionnalité du plugiciel

Le plugiciel ORCID vous permet d'exécuter les fonctions décrites ci-dessous. Certains d'entre eux seront automatiquement activés lorsque le plugiciel sera activé et configuré. D'autres nécessitent une action supplémentaire de la part des rédacteurs-trices ou les auteurs.

### Les auteurs peuvent connecter leurs iDs ORCID à leurs comptes OJS

Les utilisateurs (y compris les auteur-es et les contributeurs-trices) peuvent le faire de 2 manières :

* Lors d'un nouvel enregistrement de compte en cliquant sur « Connecter votre identifiant ORCID ou s'inscrire »

![Cliquez sur le bouton Connecter votre identifiant ORCID ou s'inscrire lors de l'enregistrement d'un nouveau compte.](./assets/Register_connect_ORCID.png)

* Pour les comptes existants - cliquez sur « Connecter votre identifiant ORCID ou s'inscrire » dans Profil > Profil public. Pour plus de détails, voir cette [vidéo de présentation de l'authentification du profil (anglais)](https://vimeo.com/374415404).

![Cliquez sur Connecter votre identifiant ORCID ou s'inscrire dans un profil existant.](./assets/Profile_connect_ORCID.png)

Veuillez noter que si un-e auteur-e a connecté son enregistrement ORCID à son compte OJS/OPS les futurs articles et préprints qu'ils soumettent seront automatiquement connectés à ORCID, à condition qu'ils se connectent au site en utilisant leur compte d'auteur-e existant. Cependant, si un auteur-e est un contributeur-trice (ou co-auteur-e) sur une soumission, leur compte utilisateur OJS/OPS ne sera pas lié à la soumission et il devra être invité à connecter la soumission à leur dossier ORCID.

### Les éditeurs peuvent inviter les contributeurs/trices à connecter leurs iDs ORCID à la publication

Pour inviter les coauteur-trices et contributeurs-trices à connecter leurs iDs ORCID, cochez la case « Envoyer un courriel pour demander l'autorisation ORCID du,de la contributeur-trice » à partir de l'écran de Modifier un-e contributeur-trice. Pour plus de détails, voir cette [vidéo de présentation d'invitation des contributeurs (anglais)](https://vimeo.com/374416189).

![Cochez la case pour envoyer un courriel afin de demander l'autorisation ORCID au contributeur/trice.](./assets/Request_ORCID_contributor.png)

### Le plugiciel ORCID peut envoyer une requête automatique aux contributeurs-trices pour connecter leurs iDs ORCID

Au lieu d'inviter manuellement les contributeur-trices à connecter leurs iDs ORCID, les directeur-trices/administrateur-trices de la revue peuvent configurer le plugiciel ORCID pour envoyer des courriels automatiques aux contributeurs-trices. Pour ce faire, cochez la case « Envoyer un courriel pour demander l'autorisation ORCID aux auteur-es lorsqu'un article est accepté ».

![ORCID plugin screen with the outlined checkbox to send email to request ORCID authentication from authors.](./assets/orcid_plugin_auto_emails.png)

### Le plugiciel ORCID affichera les iDs ORCID des contributeur-trices sur la page de publication

Les identifiants ORCID authentifiés des auteur-es et des contributeur-trices seront affichés publiquement sur la page de l'article ou du préprint, qui se liera à la fiche ORCID du contributeur-trice.

![Article page displaying authenticated iDs under each of the three contributors' names.](./assets/orcid-id-example.png)

### Le plugiciel ORCID affichera les informations de l’article dans la fiche ORCID de l’auteur-e (lorsque l'API membre est configurée)

En plus de toutes les fonctionnalités ci-dessus disponibles dans les API publiques et membres, les serveurs de journals/preprint utilisant l'API membre ORCID enverront automatiquement des informations sur les articles au fiche ORCID de l'auteur-e lors de la publication. Pour plus de détails, consultez [la vidéo de la publication d'un article avec l'API membre ORCID (anglais)](https://vimeo.com/374417678).

![Article information displayed in an author's ORCID record.](./assets/orcid_in_author_record.png)

Lorsqu'une œuvre est ajoutée à une fiche ORCID, la provenance est également affichée. Si une personne ajoute une œuvre à son propre dossier, la provenance sera indiquée sous son propre nom. Si une œuvre est ajoutée via l'API comme dans le cas d'OJS, la "source" apparaîtra comme le "nom du client" qui est indiqué lorsque les informations d'identification de l'API ORCID sont demandées. Si le plugiciel ORCID est utilisé pour une seule revue, la source/le nom du client est généralement le nom de la revue. Si le plugiciel ORCID est utilisé pour plusieurs revues sur la même instance, alors le nom de la source/client devrait être quelque chose de plus plus général, tel que « Univ. des Revues XYZ ».

![Article information and the source of an entry displayed in an author's ORCID record.](./assets/orcid-publication-source.png)

*Veuillez noter * que les informations sur la source de la publication ne fonctionnent pas actuellement pour OPS.

### Modifier un article existant pour inclure un iD ORCID

Pour un aperçu visuel de ce processus, voir la [vidéo de présentation de la publication d'un article](https://vimeo.com/374417678).

### Supprimer un identifiant ORCID d'un compte utilisateur-trice

Il se peut que vous deviez supprimer l'ORCID iD d'un auteur-e. Cette opération ne peut être effectuée que par un-e Administrateur-trice.

1. Lorsque vous êtes connecté comme Administrateur-trice, dans le menu de gauche de l'OJS, sélectionnez Utilisateurs-trices & Rôles > Utilisateurs-trices
2. Recherchez le nom de l'utilisateur-trice pour lequel vous souhaitez supprimer l'ORCID iD. Cliquez sur la petite flèche à côté du nom de la personne et sélectionnez Modifier un-e utilisateur-trice
3. Une fois que vous êtes sur la page Modifier un-e utilisateur-trice, cliquez sur Plus de renseignements sur l'utilisateur-trice
4. Find the ORCID iD box and delete the ORCID iD
5. Click OK at the bottom of the page

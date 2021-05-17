---
book: apprendre-ojs
version: 3.1
---

# Chapter 7: Workflow Settings

Les paramètres de flux des travaux vous permettent de configurer diverses parties du flux des travaux éditoriaux de la revue. Its tabs include Components, Submission, Review, Publisher Library, and Emails.

## Liste de vérifications

When an author makes a submission, they can upload multiple files. En règle générale, un fichier sera le texte de l'article, et d'autres peuvent inclure des transcriptions d'entrevue, des données, des images, etc. Each of these files is a **component** of the submission. Les éléments disponibles pour l'auteur au moment de sa soumission sont répertoriés ici.

![OJS 3.1 article components menu.](./assets/learning-ojs3.1-jm-settings-workflow-comp.png)

En utilisant les liens fournis, vous pouvez modifier l' **ordre** des éléments (comment ils seront répertoriés pour l'auteur soumissionnaire), **ajouter un élément** (si quelque chose dont vous avez besoin n'est pas inclus par défaut - par exemple, vidéo), ou **restaurer les valeurs par défaut** ( si quelqu'un a fait trop de modifications et que vous voulez simplement tout réinitialiser).

### Modifier un élément

Vous pouvez également modifier chaque élément en sélectionnant la flèche bleue à gauche du nom de l'élément. Cela révélera un lien pour Modifier et un lien pour Supprimer.

![OJS 3.1 submission configuration menu.](./assets/learning-ojs3.1-jm-settings-workflow-comp-edit.png)

**Nom** : il s'agit du nom de l'élément, tel que présenté à l'auteur.

**Options**: Choose how the files associated with this component will be treated and displayed. Tout ce qui est marqué comme fichier dépendant ne sera pas publié.

**File Type Grouping**: Determine whether this component is associated with the submission document, artwork, or is a supplementary file.

## Apparence

Utilisez cette section pour configurer le processus de soumission.

![OJS 3.1 submission checklist editing menu.](./assets/learning-ojs3.1-jm-settings-workflow-submission.png)

**Author Guidelines**: Use this field to add guidelines for your authors. Ces informations seront affichées sur le site Web de la revue.

**Submission Preparation Checklist**: Authors must check off that they agree with each item on this list. Utilisez le lien *Commander* pour modifier l'ordre des articles, utilisez le lien *Ajouter un article* pour créer un nouvel article et utilisez la flèche bleue à gauche du nom de l'article pour *modifier* un article existant.

![OJS 3.1 submission checklist editing menu.](./assets/learning-ojs-3-settings-workflow-settings-components-edit-item-edit.png)

**Notification of Author Submission**: Add an email address here to be contacted whenever there is a new submission.

**Submission Metadata**: This section allows you to determine which metadata fields to use for your journal.

![OJS 3.1 submission metadata control grid.](./assets/learning-ojs-3-settings-workflow-settings-submission-submission-metadata.png)

Each entry is a different metadata type available for every article in your journal.

Some journals may want to activate all of them, but many will wish to keep it simple and just choose Keywords.

If you choose _Enabled_, that metadata type will be added to your submissions for completion by an editor.

If you choose _Submission Form_, that metadata type will also be presented to your authors for them to fill in during their submission.

Remember to hit the **Save** button to record any changes to this page.

**Privacy Statement**: The default privacy statement can be modified if you wish.

## Installation

Cet onglet vous permet de configurer le processus d'évaluation  de votre revue.

![OJS 3.1 review configuration editing menu.](./assets/learning-ojs3.1-jm-settings-workflow-review.png)

**Délai de réponse par défaut** : indiquez combien de temps les évaluateurs-trices ont pour décider d'accepter ou de refuser une demande d'évaluation de l'éditeur, et combien de temps ils ont pour faire une recommandation.

**Rappels automatisés par e-mail** : les évaluateurs seront automatiquement informés lorsqu'ils seront affectés à un examen; cependant, vous pouvez activer ou désactiver les e-mails de rappel pour les évaluateurs. Utilisez le menu déroulant pour sélectionner le nombre de jours ou "Ne jamais rappeler" sous "Envoyer un rappel si un évaluateur n'a pas répondu à une demande d'examen dans le délai (jours) suivant la date d'échéance de la réponse" pour définir le nombre de jours qui peut passer après la date d'échéance avant que les évaluateurs ne soient rappelés d'accepter ou de rejeter une demande d'examen.

**Directives pour l'évaluation** : fournissez à vos évaluateurs des critères pour juger de l'aptitude d'une soumission à être publiée dans la presse, qui peuvent inclure des instructions pour préparer une évaluation efficace et utile.

![OJS 3.1 notification of author submission screen.](./assets/learning-ojs3.1-jm-settings-review-reminders.png)

Notez que certains paramètres du système doivent être configurés par l'administrateur du site pour être en mesure d'envoyer des emails .Consultez le [Guide de l'Administrateur ](/admin-guide/fr/email) pour plus d'information. Voir le [Guide de l'Administrateur](/admin-guide/fr/email) pour plus d'information.

**Review Forms**: Review forms provide reviewers with a set of questions to respond to. Cela peut aider à concentrer leurs commentaires de manière plus utile pour vous.

Appuyez sur le bouton **Enregistrer** pour enregistrer vos modifications.

![OJS 3.1 new review form creation menu.](./assets/learning-ojs-3-settings-workflow-settings-review-create.png)

La section "Description et instructions" fournit des informations sur le formulaire et quand l'utiliser pour les gestionnaires de journaux et les éditeurs. Ce contenu n'est pas inclus dans le formulaire que voient les évaluateurs. Vous pouvez ajouter des instructions et des directives pour les évaluateurs dans la section "Directives de révision" (ci-dessous).

**Les éléments de formulaire** sont des questions de formulaire.

![OJS 3.1 review forms with edit menu expanded.](./assets/learning-ojs-3-settings-workflow-settings-review-edit1.png)

Vous pouvez ensuite choisir le type de réponse, notamment:

![OJS 3.1 review form edit menu and response options.](./assets/learning-ojs-3-settings-workflow-settings-review-create-items.png)

**Items** are form questions.

You can choose whether to make the question required and visible to the author.

You can then choose the type of response, including:

* case de saisi pour un seul mot
* zone de texte simple ligne
* zone de texte élargie  (pour des réponses plus longues)
* cases à cocher (dans lesquelles le réviseur peut sélectionner plusieurs réponses possibles)
* boutons radio (où l'évaluateur ne peut sélectionner qu'une seule réponse possible)
* case déroulante (également dans lequel les évaluateurs ne peuvent sélectionner qu'une seule réponse possible)

**Options de réponse** sont les sélections que vous rendez disponibles pour les cases à cocher, les boutons radio ou les cases déroulantes. Un bon exemple de réponse pour une case à cocher est une [échelle de Likert](https://en.wikipedia.org/wiki/Likert_scale) , où l'évaluateur ne doit choisir qu'une seule option: par exemple, bon, neutre, mauvais.

**Evaluation à l'aveugle** : cochez cette case pour afficher un lien vers des instructions permettant de garantir que tous les fichiers de soumission sont anonymisés.

Use the **Preview** tab to test out the form.

![OJS 3.1 review form preview and response options.](./assets/learning-ojs-3-settings-workflow-settings-review-preview.png)

Une fois que vous avez envoyé le formulaire à un évaluateur, vous ne pourrez plus le modifier car cela modifierait l'enregistrement des évaluations existants à l'aide de ce formulaire. Si vous souhaitez apporter des modifications au formulaire d'évaluation à ce stade, vous pouvez copier le formulaire existant et créer une nouvelle version mise à jour.

**Blind Review**: Check this box to display a link for instructions on ensuring all submission files are anonymized.

![OJS 3.1 checkbox to display submission anonymization instructions.](./assets/learning-ojs-3-settings-workflow-settings-review2.png)

**Type** : Sélectionnez Marketing, Permission, Rapports, Autre

**Reviewer Competing Interest statement**: Add a checkbox that reviewers agree to comply with your competing interest statement.

**Review Guidelines** Provide your reviewers with criteria for judging a submission's suitability for publication in the press, which may include instructions for preparing an effective and helpful review.

**Review Options**: Select whether your journal will follow a double blind, blind, or open review process.

**Reviewer Access**: Enable (default) the first option to provide reviewers with one-click access to the review, bypassing the need to go to the website, login, and find the submission. Pour des raisons de sécurité avec cette option, les éditeurs ne sont pas en mesure de modifier les adresses e-mail ou d'ajouter des CC ou des CCI avant d'envoyer des invitations aux évaluateurs-trices.

Enabling the second option will limit access to submission files until after the reviewer has agreed to do the review.

**Intérêts divergents** : ajoutez votre déclaration de politique de divulgation des intérêts divergents ici.

## Plugiciel

Le/la dirécteur-trice de la revue et les rédacteurs peuvent télécharger des documents qu'ils aimeraient partager avec les autres utilisateurs de la bibliothèque de l'éditeur. Tout document ajouté dans cette zone sera visible dans la bibliothèque de documents d'un utilisateur dans la bibliothèque de soumission de son manuscrit.

Vous pouvez également télécharger ici un fichier que vous souhaitez rendre accessible au public via une URL, vers lequel vous pouvez créer un lien à partir d'autres parties de votre site, y compris les directives de l'auteur, la liste de contrôle de soumission ou une page statique.

**Nom** : titre du document que vous souhaitez voir apparaître à l'utilisateur

![OJS 3.1 publisher library menu.](./assets/learning-ojs3.1-jm-settings-workflow-publib1.png)

**Accès public** : l'activation de cette option permettra aux utilisateurs de télécharger ce fichier à l'aide du lien hypertexte fourni s'il est associé à un lien hypertexte dans d'autres parties de votre site de revue.

![OJS 3.1 add a file to the publisher library.](./assets/learning-ojs3.1-jm-settings-workflow-publib2.png)

**Groupement par type de fichier** : déterminez si cet élément est associé au document de soumission, à l'illustration ou s'il s'agit d'un fichier supplémentaire.

**Signature** : Les informations de ce champ seront ajoutées au bas de chaque courriel envoyé par le système.

**Adresse de courriel pour les messages non remis** : une notification sera envoyée à cette adresse e-mail pour tout e-mail envoyé par le système qui ne parvient pas à être livré, par exemple lorsque l'adresse e-mail ciblée n'est plus valide.


## Pages statiques

La section vous permet de configurer les courriels envoyés depuis le système.

![OJS 3.1 emails menu.](./assets/learning-ojs3.1-jm-settings-workflow-emails.png)

Pour modifier un modèle:

**Bounce Address**: A notice will be sent to this email address of any system-sent emails that fail to deliver, such as when the targeted email address is no longer valid.

### Prepared Email Templates

OJS facilites la communication du flux des travaux via l'utilisation de courriels préparés. You can view and modify these prepared email templates here. Notez que certaines configurations sont obligatoires pour envoyer un e-mail. Voir le [Guide de l'Administrateur](/admin-guide/fr/email) pour plus d'information.

#### Désactiver les modèles de courriel

All of the templates are enabled by default when you install OJS, but you can disable some templates by un-checking the box on the far right under ‘Enabled’. La plupart des modèles qui peuvent être désactivés sont des messages envoyés automatiquement par OJS. La désactivation du modèle signifie que la notification automatique ne sera pas envoyée.

#### Modifier les modèles de courriel

Lorsque vous modifiez un modèle de courriel, vous modifiez ce qu'il dit à chaque fois qu'il est utilisé.  Pour les courriels envoyés volontairement, comme un message envoyé à un évaluateur lui demandant d'évaluer une soumission, vous pouvez également modifier le contenu du message au moment de son envoi. Cela modifie le contenu de ce message uniquement.

Pour désactiver un modèle:
1. Accédez aux Paramètres de flux de travail> Courriel> Modèles de courriel préparés
2. Cliquez sur la flèche bleue à côté du nom du modèle pour afficher les liens en dessous
3. Click Edit Email
4. Apportez des modifications au sujet et au corps du texte. Veillez à ne pas supprimer aucune balise telle que "{$ authorName}:" qui insèrent automatiquement le contenu d'une soumission.
5. Lorsque vous avez terminé les modifications, cliquez sur Enregistrer.

![OJS 3.1 prepared emails templates.](./assets/learning-ojs3.1-jm-settings-workflow-email-templates.png)

#### Recharger les modèles de courriel par défaut

Si vous avez modifié des modèles de courriel mais que vous souhaitez annuler les modifications et les restaurer à leur contenu par défaut, vous pouvez les réinitialiser:
1. Accédez aux Paramètres du flux de travail> Courriel> Modèles de courriel préparés
2. Cliquez sur Réinitialiser tous les modèles
3. Lorsque le message de confirmation apparaît, cliquez sur OK.

#### Ajouter un modèle de courriel

Cliquez sur le bouton **Ajouter un modèle de courriel** pour créer un modèle de courriel personnalisé que vous pouvez utiliser lors de la notification d'un utilisateur ou de l'ajout d'un participant à une soumission. Notez que dans les versions antérieures à OJS 3.1.2, vous pouvez créer un modèle de courriel personnalisé, mais il ne pourra être utilisé à aucun stade du flux de travail.

#### Ajouter une pièce jointe à un courriel

There is no direct email attachment option in OJS 3, but you can upload and share public files via the Publisher Library:

1. Dans Paramètres> Flux des Travaux> Bibliothèque de l'éditeur> Ajouter un fichier, téléverser votre document et cochez la case "Accès public"
2. Cliquez sur "OK" pour l'URL à générer
3. Insérez l'URL dans votre courriel

Vous pouvez également choisir de modifier un modèle de courriel existant avec cette URL ou de le partager publiquement sur le site Web.

#### Descriptions des modèles

The table below describes the prepared email templates found in OJS 3. Notez que "Rédacteur" fait référence à tout type de rédacteur (par exemple rédacteur de journal, rédacteur de production, etc.). Les colonnes suivantes apparaissent dans le tableau:

- **Name**: The name of the email template.
- **Expéditeur** : le nom ou la signature qui apparaîtra à la fin du message. Dans certains cas, le système envoie le message automatiquement mais l'expéditeur apparaît comme un utilisateur particulier.
- **Destinataire** : à qui le courriel peut être envoyé.
- **Description** : une description du modèle.
- Étape du **flux des travaux** : l'étape du flux des travaux dans laquelle ce modèle est utilisé.

<hr />

| Name                                | Expéditeur                      | Destinataire                    | Workflow stage                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------- | ------------------------------- | ------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Copyedit Request                    | Rédacteur/Rédacteur de rubrique | Réviseur/euse                   | Ajouter l'article à une édition      | Cet e-mail est envoyé par un rédacteur de rubrique au rédacteur d'une soumission pour lui demander de commencer le processus de révision. Il fournit des informations sur la soumission et comment y accéder.                                                                                                                                                                                                                   |
| Editor Assign                       | Rédacteur/Rédacteur de rubrique | Rédacteur/Rédacteur de rubrique | All stages                           | Ce courriel informe un rédacteur de rubrique quelle rédacteur lui a confié la tâche de superviser une soumission tout au long du processus d'édition. Il fournit des informations sur la soumission et comment accéder au site de la revue.                                                                                                                                                                                     |
| Editor Decision Accept              | Rédacteur/Rédacteur de rubrique | Author                          | Installation                         | Cet e-mail du rédacteur ou du rédacteur de rubrique à un auteur les informe d'une décision finale de «refus» concernant leur soumission.                                                                                                                                                                                                                                                                                        |
| Editor Decision Decline             | Rédacteur/Rédacteur de rubrique | Author                          | Installation                         | Cet e-mail est envoyé à l'auteur si le rédacteur refuse sa soumission dans un premier temps, avant l'étape d'évaluation                                                                                                                                                                                                                                                                                                         |
| Editor Decision Initial Decline     | Rédacteur/Rédacteur de rubrique | Author                          | Apparence                            | This email is sent to the author if the editor declines his submission initially, before the review stage                                                                                                                                                                                                                                                                                                                       |
| Editor Decision Resubmit            | Rédacteur/Rédacteur de rubrique | Author                          | Installation                         | This email from the Editor or Section Editor to an Author notifies them of a "resubmit" decision regarding their submission.                                                                                                                                                                                                                                                                                                    |
| Editor Decision Revisions           | Rédacteur/Rédacteur de rubrique | Author                          | Installation                         | Cet e-mail du rédacteur ou du rédacteur de rubrique à un auteur l'informe que sa soumission est envoyée à une évaluation externe.                                                                                                                                                                                                                                                                                               |
| Editor Decision Send To External    | Rédacteur/Rédacteur de rubrique | Author                          | Submission and Review                | Cet e-mail du rédacteur ou du rédacteur de rubrique à un auteur l'informe que sa soumission est envoyée en production.                                                                                                                                                                                                                                                                                                          |
| Editor Decision Send To Production  | Rédacteur/Rédacteur de rubrique | Author                          | Ajouter l'article à une édition      | Cet e-mail du rédacteur de recommandation ou du rédacteur de rubrique aux rédacteurs décisionnaires ou aux rédacteurs de rubrique les notifie d'une recommandation finale concernant la soumission.                                                                                                                                                                                                                             |
| Editor Recommendation               | Rédacteur/Rédacteur de rubrique | Éditeur de Mise en Page         | Installation                         | Cet e-mail du rédacteur ou du rédacteur de rubrique à un auteur les informe d'une décision finale «d'accepter la soumission» concernant leur soumission.                                                                                                                                                                                                                                                                        |
| Layout Complete                     | Rédacteur                       | Rédacteur/Rédacteur de rubrique | Production                           | Cet e-mail du rédacteur de mise en page aux rédacteurs de rubrique les informe que le processus de mise en page est terminé.                                                                                                                                                                                                                                                                                                    |
| Layout Request                      | Rédacteur/Rédacteur de rubrique | Rédacteur                       | Production                           | Cet e-mail du rédacteur de rubrique aux rédacteurs de mise en page les informe qu'ils ont reçu la tâche de modifier la mise en page d'une soumission. Il fournit des informations sur la soumission et comment y accéder.                                                                                                                                                                                                       |
| Lockss Existing Archive             |                                 |                                 | LOCKSS                               | Cet e-mail demande au détenteur d'une archive LOCKSS d'envisager d'inclure cette revue dans ses archives. Il fournit l'URL du manifeste de l'éditeur LOCKSS de la revue.                                                                                                                                                                                                                                                        |
| Lockss New Archive                  |                                 |                                 | LOCKSS                               | Cet e-mail encourage le destinataire à participer à l'initiative LOCKSS et à inclure cette revue dans les archives. Il fournit des informations sur l'initiative LOCKSS et les moyens de s'impliquer.                                                                                                                                                                                                                           |
| Manual Payment Notification         | Author                          | Éditeur de Mise en Page         | Payments or Subscriptions            | Ce modèle d'e-mail est utilisé pour notifier le rédacteur d'un article OFR réservé.                                                                                                                                                                                                                                                                                                                                             |
| Notification                        | Principal contact               | Various                         | Various                              | The email is sent to registered users that have selected to have this type of notification emailed to them.                                                                                                                                                                                                                                                                                                                     |
| Notification Center Default         |                                 |                                 | Various                              | Ce modèle de courriel est utilisé pour collecter les identifiants ORCID des auteurs.                                                                                                                                                                                                                                                                                                                                            |
| Open Access Notify                  | Principal contact               | Rédacteur                       | Registration                         | Cet e-mail est envoyé à un utilisateur enregistré lorsqu'il a réussi à réinitialiser son mot de passe en suivant le processus décrit dans l'e-mail PASSWORD_RESET_CONFIRM.                                                                                                                                                                                                                                                    |
| Orcid Collect Author Id             | Principal contact               | Author                          | Registration - if using ORCID plugin | This email template is used to collect the ORCID IDs from authors.                                                                                                                                                                                                                                                                                                                                                              |
| Orcid Request Author Authorization  | Principal contact               | Author                          | Registration - if using ORCID plugin | Ce modèle de courriel est utilisé pour informer un directeur de revue qu'un paiement manuel a été demandé.                                                                                                                                                                                                                                                                                                                      |
| Password Reset                      | Principle Contact               | Utilisateur enregistré          | Registration                         | Cet e-mail est envoyé à un évaluateur nouvellement inscrit pour l'accueillir dans le système et lui fournir un enregistrement de son nom d'utilisateur et de son mot de passe.                                                                                                                                                                                                                                                  |
| Password Reset Confirm              | Principle Contact               | Utilisateur enregistré          | Registration                         | Cet e-mail est envoyé à un utilisateur enregistré lorsqu'il indique qu'il a oublié son mot de passe ou ne parvient pas à se connecter. Il fournit une URL qu'ils peuvent suivre pour réinitialiser leur mot de passe.                                                                                                                                                                                                           |
| Paypal Investigate Payment          | System                          | Principal Contact               | Payments - if using Paypal plugin    | This email template is used to notify a journal's primary contact that suspicious activity or activity requiring manual intervention was encountered by the PayPal plugin.                                                                                                                                                                                                                                                      |
| Publish Notify                      | Rédacteur/Rédacteur de rubrique | Rédacteur                       | Publication                          | This email is sent to registered readers via the "Notify Users" link in the Editor's User Home. It notifies readers of a new issue and invites them to visit the journal at a supplied URL.                                                                                                                                                                                                                                     |
| Reviewer Register                   | Principal contact               | Rédacteur/Rédacteur de rubrique | Registration                         | Cet e-mail est envoyé par un évaluateur au rédacteur de rubrique en réponse à une demande d'évaluation pour informer le rédacteur de rubrique que la demande d'évaluation a été acceptée et sera complétée à la date spécifiée.                                                                                                                                                                                                 |
| Review Ack                          | Rédacteur/Rédacteur de rubrique | Rédacteur/Rédacteur de rubrique | Installation                         | Cet e-mail est envoyé par un évaluateur au rédacteur de rubrique en réponse à une demande d'évaluation pour informer le rédacteur de rubrique que la demande de évaluation a été refusée.                                                                                                                                                                                                                                       |
| Review Cancel                       | Rédacteur/Rédacteur de rubrique | Rédacteur/Rédacteur de rubrique | Installation                         | Cet e-mail est envoyé par le rédacteur de rubrique à un évaluateur qui a une évaluation de soumission en cours pour l'informer qu'une évaluation annulée a été rétablie.                                                                                                                                                                                                                                                        |
| Review Confirm                      | Rédacteur/Rédacteur de rubrique | Rédacteur/Rédacteur de rubrique | Installation                         | Cet e-mail est envoyé par un rédacteur de rubrique pour rappeler à un évaluateur que son évaluation est due.                                                                                                                                                                                                                                                                                                                    |
| Review Decline                      | Rédacteur/Rédacteur de rubrique | Rédacteur/Rédacteur de rubrique | Installation                         | Cet e-mail est envoyé par un rédacteur de rubrique pour confirmer la réception d'une évaluation terminée et remercier l'évaluateur pour ses contributions.                                                                                                                                                                                                                                                                      |
| Review Remind                       | Rédacteur/Rédacteur de rubrique | Rédacteur/Rédacteur de rubrique | Installation                         | Cet e-mail est envoyé par un rédacteur de rubrique pour rappeler à un évaluateur que son évaluation est due.                                                                                                                                                                                                                                                                                                                    |
| Review Remind Auto                  | Rédacteur/Rédacteur de rubrique | Rédacteur/Rédacteur de rubrique | Installation                         | Cet e-mail est automatiquement envoyé lorsque la date d'échéance d'un évaluateur est écoulée (voir Options d'évaluation  sous Paramètres> Flux des travaux> Évaluation) et que l'accès en un clic est désactivé. Les tâches planifiées doivent être activées et configurées (voir le fichier de configuration du site).                                                                                                         |
| Review Remind Auto Oneclick         | Rédacteur/Rédacteur de rubrique | Rédacteur/Rédacteur de rubrique | Installation                         | Cet e-mail est automatiquement envoyé lorsque la date d'échéance d'un évaluateur est écoulée (voir Options d'évaluation  sous Paramètres> Flux des travaux> Évaluation) et que l'accès en un clic est désactivé. Les tâches planifiées doivent être activées et configurées (voir le fichier de configuration du site).                                                                                                         |
| Review Remind Oneclick              | Rédacteur/Rédacteur de rubrique | Rédacteur/Rédacteur de rubrique | Installation                         | Cet e-mail est envoyé par un rédacteur de rubrique pour rappeler à un évaluateur que son évaluation est due.                                                                                                                                                                                                                                                                                                                    |
| Review Request                      | Rédacteur/Rédacteur de rubrique | Rédacteur/Rédacteur de rubrique | Installation                         | Cet e-mail envoyé par le rédacteur de rubrique à un évaluateur demande à l'évaluateur d'accepter ou de refuser la tâche d'évaluation d'une soumission. Il fournit des informations sur la soumission telles que le titre et le résumé, une date d'échéance de la révision et comment accéder à la soumission elle-même.                                                                                                         |
| Review Request Oneclick             | Rédacteur/Rédacteur de rubrique | Système                         | Installation                         | Cet e-mail envoyé par le rédacteur de rubrique à un évaluateur demande à l'évaluateur d'accepter ou de refuser la tâche d'évaluation d'une soumission. Il fournit des informations sur la soumission telles que le titre et le résumé, une date d'échéance de la révision et comment accéder à la soumission elle-même. This message is used when one-click reviewer access is enabled.                                         |
| Review Request Oneclick Subsequent  | Rédacteur/Rédacteur de rubrique | Rédacteur/Rédacteur de rubrique | Installation                         | Cet e-mail du rédacteur de rubrique adressé à un évaluateur demande à l'évaluateur d'accepter ou de refuser la tâche d'évaluation d'une soumission pour un deuxième cycle de révision ou plus. Il fournit des informations sur la soumission telles que le titre et le résumé, une date d'échéance de la révision et comment accéder à la soumission elle-même. This message is used when one-click reviewer access is enabled. |
| Review Request Remind Auto          | Rédacteur/Rédacteur de rubrique | Rédacteur/Rédacteur de rubrique | Installation                         | Cet e-mail est automatiquement envoyé lorsque la date d'échéance de la confirmation d'un évaluateur est écoulée (voir Options de révision sous Paramètres> Flux des Travaux> Évaluateur) et que l'accès en un clic de l'évaluateur est activé. Les tâches planifiées doivent être activées et configurées (voir le fichier de configuration du site).                                                                           |
| Review Request Remind Auto Oneclick | Rédacteur/Rédacteur de rubrique | Rédacteur/Rédacteur de rubrique | Installation                         | Cet e-mail est automatiquement envoyé lorsque la date d'échéance de la confirmation d'un évaluateur est écoulée (voir Options de révision sous Paramètres> Flux des travaux> Évaluation) et que l'accès de l'évaluateur en un clic est désactivé. Les tâches planifiées doivent être activées et configurées (voir le fichier de configuration du site).                                                                        |
| Review Request Subsequent           | Rédacteur/Rédacteur de rubrique | Rédacteur/Rédacteur de rubrique | Installation                         | Cet e-mail du rédacteur de rubrique adressé à un évaluateur demande à l'évaluateur d'accepter ou de refuser la tâche d'évaluation d'une soumission pour un deuxième cycle de révision ou plus. Il fournit des informations sur la soumission telles que le titre et le résumé, une date d'échéance de la révision et comment accéder à la soumission elle-même.                                                                 |
| Revised Version Notify              | System                          | Rédacteur/Rédacteur de rubrique | Revision                             | Cet e-mail, lorsqu'il est activé, est automatiquement envoyé aux autres auteurs qui ne sont pas des utilisateurs dans OJS spécifié lors du processus de soumission.                                                                                                                                                                                                                                                             |
| Submission Ack                      | Principal Contact               | Author                          | Apparence                            | Cet e-mail, lorsqu'il est activé, est automatiquement envoyé à un auteur lorsqu'il termine le processus de soumission d'un manuscrit à la revue. Il fournit des informations sur le suivi de la soumission tout au long du processus et remercie l'auteur pour la soumission.                                                                                                                                                   |
| Submission Ack Not User             | Principal Contact               | Author                          | Apparence                            | This email, when enabled, is automatically sent to the other authors who are not users within OJS specified during the submission process.                                                                                                                                                                                                                                                                                      |
| Subscription After Expiry           | Utilisateur                     | Rédacteur                       | Payments or Subscriptions            | Cet e-mail informe un abonné que son abonnement a expiré. Il fournit l'URL du journal ainsi que les instructions d'accès.                                                                                                                                                                                                                                                                                                       |
| Subscription After Expiry Last      | Utilisateur                     | Rédacteur                       | Payments or Subscriptions            | Cet e-mail informe un abonné que son abonnement a expiré. Il fournit l'URL du journal ainsi que les instructions d'accès.                                                                                                                                                                                                                                                                                                       |
| Subscription Before Expiry          | Utilisateur                     | Rédacteur                       | Payments or Subscriptions            | Cet e-mail informe un abonné que son abonnement va bientôt expirer. Il fournit l'URL du journal ainsi que les instructions d'accès.                                                                                                                                                                                                                                                                                             |
| Subscription Notify                 | Utilisateur                     | Rédacteur                       | Payments or Subscriptions            | Cet e-mail informe un lecteur inscrit que le Manager a créé un abonnement pour lui. Il fournit l'URL du journal ainsi que les instructions d'accès.                                                                                                                                                                                                                                                                             |
| Subscription Purchase Indl          | System                          | Utilisateur                     | Payments or Subscriptions            | Cet e-mail informe le responsable des abonnements qu'un abonnement individuel a été acheté en ligne. Il fournit des informations récapitulatives sur l'abonnement et un lien d'accès rapide à l'abonnement acheté.                                                                                                                                                                                                              |
| Subscription Purchase Instl         | System                          | Utilisateur                     | Payments or Subscriptions            | Cet e-mail informe le responsable des abonnements qu'un abonnement individuel a été acheté en ligne. Il fournit des informations récapitulatives sur l'abonnement et un lien d'accès rapide à l'abonnement acheté.                                                                                                                                                                                                              |
| Subscription Renew Indl             | System                          | Utilisateur                     | Payments or Subscriptions            | Cet e-mail informe le gestionnaire d'abonnements qu'un abonnement individuel a été renouvelé en ligne. Il fournit des informations récapitulatives sur l'abonnement et un lien d'accès rapide à l'abonnement renouvelé.                                                                                                                                                                                                         |
| Subscription Renew Instl            | System                          | Utilisateur                     | Payments or Subscriptions            | Cet e-mail informe le gestionnaire d'abonnements qu'un abonnement individuel a été renouvelé en ligne. Il fournit des informations récapitulatives sur l'abonnement et un lien d'accès rapide à l'abonnement renouvelé.                                                                                                                                                                                                         |
| User Register                       | Principal Contact               | Utilisateur enregistré          | Registration                         | Cet e-mail est envoyé à un utilisateur nouvellement enregistré pour l'accueillir dans le système et lui fournir un enregistrement de son nom d'utilisateur et de son mot de passe.                                                                                                                                                                                                                                              |
| User Validate                       | Principal Contact               | Utilisateur enregistré          | Registration                         | Cet e-mail est envoyé à un utilisateur nouvellement enregistré pour valider son compte de messagerie.                                                                                                                                                                                                                                                                                                                           |

<hr />

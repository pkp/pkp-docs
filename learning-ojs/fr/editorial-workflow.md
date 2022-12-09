---
book: apprendre-ojs
version: 3.2
showPageTOC: true
title: Learning Open Journal Systems 3.3 - Editorial Workflow
description: How to manage an article manuscript through the OJS workflow, from submission to publication.
---

# Flux des Travaux Éditoriaux

Dans ce chapitre, vous suivrez une soumission tout au long du flux des travaux, de la première soumission à la publication finale.

{% include video.html id="K-qjxN7rOJs" provider="youtube" title="Video of Editorial workflow in OJS 3.3. Module 2: Editorial Workflow Overview"%}

This PKP School video provides an overview of the editorial workflow in OJS 3.3. To watch other videos in this series, visit [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDUKJbWtr4bgy133_jwoiqoF).

Le flux des travaux est divisé en 4 étapes:

**Soumission** : C'est là que les nouvelles soumissions arrivent tout en étant affectées aux Rédacteurs de Section et considérées pour le passage à l'étape de d'Évaluation.

Certaines soumissions sont clairement inappropriées et ne dépassent jamais ce stade.

{% include video.html id="9rx-AahCU10" provider="youtube" title="Video of Editorial workflow in OJS 3.3. Module 4: Responding to a submission"%}

This PKP School video explains the steps the Editor takes to assign a new submission to a Section Editor. To watch other videos in this series, visit [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDUKJbWtr4bgy133_jwoiqoF).

**Évaluation** : c'est là que se déroule l'évaluation par les pairs, ainsi que toutes révisions requises par l'auteur.

Certaines soumissions ne passeront pas le stade d'évaluation et se termineront ici. Celles qui sont acceptées passent à l'étape suivante.

**Révision** : les articles acceptés passent à ce stade, où ils sont améliorés par le travail d'un-e Réviseur/euse. Les auteurs ont la possibilité de changer la copie suivant les modifcations apportées par le/la réviseur/euse.

**Production** : Une fois que les révisions sont terminées et approuvées, la soumission passe à ce stade. En production, les fichiers révisés sont convertis en d'autres formats- HTML, XML, PDF, etc. Là encore, l'auteur a la possibilité de relire et corriger les épreuves. Une fois que tout le monde est satisfait, la soumission sera publiée dans une prochaine publication.

{% include video.html id="-VRKdBQPdn4" provider="youtube" title="Video of Editorial workflow in OJS 3.3. Module 9: Production."%}

This PKP School video explains the Production stage. To watch other videos in this series, visit [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDUKJbWtr4bgy133_jwoiqoF).

<hr />

## Tâches

Vos tâches sont disponibles dans le menu en haut à gauche de votre tableau de bord. Notez le nombre "1" dans l'image ci-dessous. Cela indique qu'il y a actuellement 1 tâche dans votre liste.

![The expanded Tasks menu in OJS.](./assets/learning-ojs3.1-ed-tasks.png)

Les tâches fournissent un aperçu rapide des éléments qui nécessitent votre attention. Les entrées en gras ne sont pas lues et les entrées qui ne sont pas en gras ont été lues.

Utilisez la case à cocher pour marquer les tâches à supprimer (le lien est disponible en bas de la liste).

<hr />

## Notifications de Soumission

When an author makes a new submission to your journal, the author and all contributors will receive an email acknowledging their submission and an editor will be automatically emailed a notification of the new submission. In some cases an editor will be automatically assigned to the submission. Which editor(s) receive the notification or are automatically assigned will depend on how you have set up your journal (see [Edit a section](./journal-setup#edit-a-section)).

* If there is only one user assigned to an Editor or Journal Manager role, that user will be automatically assigned and notified.
* If one or more Section Editors are assigned to the [section](https://docs.pkp.sfu.ca/learning-ojs/en/journal-setup#sections) the submission was made in, they will be automatically assigned to the submission and notified.
* If one or more Section Editors are assigned to a [category](https://docs.pkp.sfu.ca/learning-ojs/en/journal-setup#categories) the submission was made in, they will be automatically assigned to the submission and notified.

Vous pouvez aussi configurer OJS pour qu'une copie de l'email de notification soit envoyée au contact principal de la revue défini dans Paramètres de Revue, ou à une autre adresse.

Pour permettre l'envoi de copies de l'email confirmant la soumission au contact principal ou à une autre adresse:

1. Dans le tableau de bord du Directeur/trice de la Revue, accédez à Paramètres > Flux des travaux > Soumissions
2. Faites défiler jusqu'à Notification des Soumissions d'Auteur
3. Cochez la case "Envoyer une copie au contact principal, identifié dans les paramètres de revue." si vous souhaitez qu'une copie soit envoyée à l'adresse email du contact principal, et/ou
4. Entrez l'email auquel vous souhaitez recevoir une copie dans le champ de texte.

![The Notification of Author Submission settings in OJS.](./assets/learning-ojs3.1-configure-submission-notification.png)

Si vous souhaitez désactiver l'envoi d'emails confirmant la soumission, vous pouvez faire cela en désactivant le modèle d'email *Acusé de Soumission* de la liste des modèles d'email préparés. Pour plus d'informations sur l'activation et la désactivation de modèles d'emails, voir *Désactiver des modèles d'emails* dans le [Chapitre Paramètres de Flux des Travaux](./settings-workflow).

Les utilisateurs peuvent aussi modifier leurs paramètres de notification individuels à partir de leur propre profil sous Afficher le Profil > Notifications.

## Tableau de Bord de Soumission

Lorsque vous vous connectez à votre tableau de bord, vous pouvez trouver des soumissions actives soit à partir de vos Tâches ou de l'une des files de Soumissions (Mes Soumissions, Non Affectées, Toutes Actives, et Archives). Le compteur vous donne un aperçu du nombre total d'éléments dans chaque file de Mes Soumissions.

![The submission dashboard in OJS.](./assets/learning-ojs3.2-ed-dashboard-active.png)

### Mes Soumissions

**Soumissions qui me sont Assigné**: Ce panneau comprend des soumissions ajoutées aux sections où vous êtes un rédacteur de section ou à vos propres soumissions si vous êtes aussi un auteur de cette revue.

L'outil de **Recherche** pour chaque file de Mes Soumissions peut parfois être utile pour traquer les soumissions.

The **Filter** tool allows you to limit your browsing to specific conditions for faster searching. Depending on their role, editorial roles will be able to filter by the following:

- __Status:__ select from _incomplete_, _overdue_, and _inactive for 30 days_

- **Journal et Notes d'Activités** afficheront l'historique de la soumission.

- __Sections:__ this option is only available if more than 5 sections exist. After you begin entering text, the filter will auto-suggest. For example, filter by _articles_ or _reviews_

- __Assigned editor(s):__ only Journal Managers and Journal Editors have this filter option. Like sections, this is a textbox which will auto-suggest a Section Editor, Journal Editor, or Guest Editor's name as you start to type it, then display all articles assigned to the editor.

- __Assigned issue:__ only journal managers can filter by unpublished issues, but editors and assistants will be able to filter by published issues. This field is case-sensitive and require exact match. For best results, search by year or title, rather than volume or number. This filter is mostly used if the assignment of a submission to an issue is done in an early phase of the editorial process.

Some filters allow multiple selections; users can filter by more than one editor, section or issue. Filters are applied with OR conditions, so when a user selects to filter by Editor A and Editor B, all submissions will be returned that are assigned to editor A OR editor B.

When using multiple filters, the AND condition will be applied between filters. For example, when filtering by Review Stage AND Editor A, only submissions assigned to Editor A in the review stage will be returned.

![A sample filter applied to the list of submissions.](./assets/learning-ojs3.2-ed-dashboard-filter.png)

Notez que vous pouvez utiliser les flèches bleues à droite de chaque soumission pour révéler plus de détails, y compris le nombre d'évaluations exceptionnelles, les nouvelles discussions, etc. Elles révèlent aussi des boutons vous permettant d'accéder à l'enregistrement de soumission, d'afficher le journal d'activité et les notes, et de supprimer la soumission.

![A sample of expanded submission details in the dashboard.](./assets/learning-ojs3.2-ed-dashboard-active-details.png)

### Non Affectées

Dans l'exemple ci-dessus, il n'y a pas de soumissions non affectées, le panneau est donc vide.

![The Unassigned tab in the Submissions dashboard.](./assets/learning-ojs3.1-ed-dashboard-unassigned.png)

In the above example, there are no unassigned submissions, so the panel is empty.

### Toutes Actives

Cette section comprend une liste de toutes les soumissions soit rejetées ou déjà publiées par la revue.

![The All Active tab in the Submissions dashboard.](./assets/learning-ojs3.1-ed-dashboard-all-active.png)

### Archivées

Cette section comprend une liste de toutes les soumissions, sans être organisées en files d'attente. Declined submissions may be deleted from the list of archived submissions. **Supprimer** supprimera complètement la soumission et tous les fichiers de soumission de votre revue.

![The list of archived submissions with the option to delete submissions.](./assets/ojs-3.3-sub-delete.png)

### Soumission de Démonstration

Pour cette démonstration, nous recherchons la soumission de Williamson et Serletis, intitulée *The Official Knowledge and Adult Education Agents* . Elle se trouve en haut de la file d'attente **Soumissions qui me sont Assigné** , ainsi que dans la file **Toutes Actives** .

![The My Assigned queue on the OJS Submissions Dashboard, with the example article by Cerpa at the top of the queue.](./assets/learning-ojs3.3-submission-queue.png)

Une fois que vous avez trouvé la soumission, vous pouvez utiliser la flèche bleue pour afficher les options pour voir s'il y a une discussion ouverte (il n'y en a pas), ainsi que pour afficher la soumission, afficher les journaux d'activité et la note, ou pour supprimer la soumission.

![A submission with the options menu expanded.](./assets/learning-ojs3.3-submission-options.png)

**Envoyer pour Évaluation**: fait passer la soumission au stade suivant.

![A sample activity log for a submission](./assets/learning-ojs3.1-ed-dashboard-log.png)

**Journal d'Activité**: où vous pouvez afficher l'historique et toutes les notes sur la soumission.

![The Notes tab of the Activity log.](./assets/learning-ojs-3-ed-submissions-notes.png)

### Enregistrement de Soumission

Pour afficher la soumission plus en détail, sélectionnez le bouton **Afficher la Soumission**. Cela vous mènera au dossier de soumission.

![A sample submission record.](./assets/learning-ojs3.1-ed-dashboard-record.png)

De là, vous pouvez voir:

**Fichiers de Soumission**: ce panneau liste les fichiers qui ont été soumis. Dans cette vue, il n'y a qu'un seul fichier, mais plusieurs fichiers pourraient avoir été soumis. Submission files will now retain the original names when downloaded.

For journals using anonymous review, the author and reviewer (if they were to upload any document) are still removed. An example filename structure for files downloaded by Reviewers will be `ojs-review-assignment-1-article-text-8.docx` The numeric number corresponds with the manuscript number of assignment.

**Discussions de Pré-Évaluation** : ce panneau permet au rédacteur/trice de communiquer avec l'auteur, ou avec d'autres membres de l'équipe éditoriale. Par exemple, pour demander à l'auteur des informations supplémentaires, ou pour demander à un-e Rédacteur/trice de section d'assumer la responsabilité de cette soumission.

**Boutons d'Action**: ils incluent Envoyer pour Évaluation, Accepter et Ignorer la l'Évaluation, et Refuser la Soumission.

> Remarque: si vous ne voyez pas ces boutons, vous n'avez probablement pas encore affecté la soumission à un(e) rédacteur/trice.

**État de la Soumission** Une fois qu'un(e) rédacteur/trice a enregistré une décision dans un stade du flux des travaux d'OJS 3.2, la décision enregistrée apparaîtra à la place des boutons de décision. Les rédacteurs auront toujours la possibilité de modifier la décision enregistrée en cliquant sur «Modifier la Décision», cela activera à nouveau les 3 options.

![The Change Decision button in the submission status.](./assets/learning-ojs3.2_edflow_decisionstatus2.png) *La capture d'écran ci-dessus montre le bouton de décision pour MS# 425 avant l'enregistrement d'une décision. La capture d'écran ci-dessous montre la notification de la décision enregistrée.*

![The "Submission accepted" status of a submission.](./assets/learning-ojs3.2_edflow_decisionstatus_accept.png)

**Participants** : Ce panneau est l'endroit où vous verrez la liste des participants impliqués dans la soumission, y compris le/la Rédacteur/trice, les rédacteurs de section, et l'auteur. Les autres noms (réviseurs, rédacteurs de mise en page, etc.) apparaîtront ici au fur et à mesure de leur ajout dans les étapes suivantes.

**Bibliothèque de Soumission** : La Bibliothèque de Soumission est une zone de stockage générale pour les documents qui peuvent inclure des formulaires de conflit d'intérêts, des épreuves d'approbation de fichiers, etc. Un-e utilisateur/trice peut télécharger le formulaire rempli pour son manuscrit dans sa Bibliothèque de Soumission. Les formulaires téléchargés seront également disponibles pour les autres participants (à l'exception des Évaluateurs) affectés tout au long du flux des travaux éditoriaux ou de production pour modifier ou télécharger à nouveau de nouvelles versions.

**Document Library**: Users throughout the editorial workflow will be able to access all the files in the Publisher Library (see [Workflow Settings chapter](./settings-workflow.md)) made available by the Journal Manager or Editor through opening the Submission Library and clicking "View Document Library".

![The location of the View Document Library button in the Submission Library panel.](./assets/learning-ojs3.1-jm-settings-workflow-sublib1.png)

**Bibliothèque de Documents** : les utilisateurs tout au long du flux des travaux éditoriaux pourront accéder à tous les fichiers de la Bibliothèque de le/la Rédacteur/trice (voir le [Chapitre Paramètres du Flux de Travail](./settings-workflow.md) ) mis à disposition par le/la directeur/trice ou le/la Rédacteur/trice de la revue en ouvrant la Bibliothèque de Soumission et en cliquant sur «Afficher la Bibliothèque de Documents».

![The preview feature that shows how an article will look when published](./assets/learning-ojs-3-ed-preview.png)

**Métadonnées**: où vous pouvez afficher et réviser les métadonnées de soumission. Dans OJS 3.2, les utilisateurs peuvent être autorisés à réviser certaines métadonnées de soumission à n'importe quel stade du flux des travaux.

![The Metadata tab of a submission.](./assets/learning-ojs3.1-ed-dashboard-record-metadata.png)

### Accorder des Autorisations d'Auteur

As of OJS 3.2, editors can grant access to allow authors to make metadata changes. Il y a deux façons dont les rédacteurs peuvent accorder ce type d'accès.

**Autorisation Globale**- accordera à tous les utilisateurs le rôle «auteur» ce qui est une autorisation de modifier les métadonnées.

Pour activer cela, allez à Utilisateurs et Rôles > Rôles. Cliquez sur la flèche bleue à côté de «Auteur», puis sur modifier.

![The location of the Edit button under the Author role.](./assets/learning-ojs3.2-editorial-workflow-author-edit.png)

**Autorisation Limitée**- accordera aux auteurs enregistrés (généralement un seul auteur) la permission d'apporter des modifications seulement à certains stades du flux des travaux éditoriaux.

![The "Permit submission metadata edit" checkbox in the role editing window.](./assets/learning-ojs3.2-editorial-workflow-author-editmenu.png)

Sous la liste des participants, cliquez sur la flèche à côté du nom de l'auteur, puis sur Modifier.

Pour permettre à un auteur de modifier les métadonnées à un stade spécific du flux des travaux, cliquez sur le stade du flux des travaux (c'est-à-dire, Soumission, Évaluation, Révision, ou Production).

Under the participants list, click the arrow beside the author’s name followed by Edit.

![The location of the Edit button for a participant in the participants list.](./assets/learning-ojs3.2-editorial-workflow-edit-participant.png)

Une fois que l'auteur a obtenu l'accès d'apporter des modifications, ils pourront apporter des modifications aux sections suivantes de l'onglet Publication: Titre et Abstract, Contributeurs, et Métadonnées.

![The "Allow this person to edit publication details" checkbox in the Edit Assignment window.](./assets/learning-ojs3.2-editorial-workflow-edit-grantpermission.png)

Once the author has been granted access to made edits they will be able to make changes to the following sections on the Publication tab: Title & Abstract, Contributors, and Metadata.

![The sections available for authors to edit highlighted in the Publication tab.](./assets/learning-ojs3.2-editorial-workflow-edit-publicationmenu.png)

### Affecter la Soumission

Depending on [how you have your sections configured](./journal-setup#edit-a-section), some new submissions may come in unassigned. Si tel est le cas, la prochaine étape consiste à affecter un(e) rédacteur/trice ou un(e) rédacteur/trice de section. Pour ce faire, sélectionnez le lien *Affecter* dans le panneau **Participants** .

![The Add Participants window.](./assets/learning-ojs-3-ed-submissions-add-participant.png)

Vous aurez la possibilité de localiser un(e) utilisateur/trice par rôle, de choisir une personne, et de lui envoyer un message demandant son assistance.

> Remarque: Si vous n'êtes pas sûr des noms des rédacteurs de section, choisissez simplement ce rôle dans le menu déroulant, puis cliquez sur le bouton Rechercher. Tous les rédacteurs de section seront affichés et disponibles pour la sélection.

Vous pouvez maintenant voir que le/la Rédacteur/trice de section est listé sous Participants et que les boutons Action sont disponibles:

![The added participants name shown in the participants list.](./assets/learning-ojs3.1-ed-dashboard-record-assign.png)

> Notez la nouvelle discussion de Pré-Évaluation qui a été automatiquement créée dans le cadre de l'affectation.

**Accepter et Ignorer l'Évaluation**: ignore le stade d'Évaluation et déplace la soumission directement au stade de Révision.

Appuyez sur **Envoyer** .

Malgré que dans cet exemple, le/la Rédacteur/trice ait affecté un(e) Rédacteur/trice de section, il serait également possible pour le/la Rédacteur/trice de s'affecté eux-mêmes à la soumission.

**Refuser la Soumission**: rejette la soumission avant de passer par le processus d'Évaluation. La soumission serait alors archivée. In OJS 3.3, there is now the option to revert a Decline decision in the Submission and Review stage. This can be done by clicking **Change Decision** followed by **Revert Decline**. After a declined decision is reverted, the submission is restored to its previous stage and review round if active.

Although in this example, the editor assigned a section editor, it would also be possible for the editor to assign themselves to the submission.

Une fois que le/la Rédacteur/trice a sélectionné une action, le statut de soumission changera et les boutons d'action seront désactivés.

![The location of the Change Decision button of a submission.](./assets/learning-ojs3.2_edflow_decisionstatus2.png)

### Rédacteur/trice de Section

Maintenant que le/la Rédacteur/trice de Section a été affecté, ils peuvent se connecter et afficher leur tableau de bord. La soumission se trouve en haut de la file d'attente Soumissions qui me sont Assigné.

![The My Assigned queue of a Section Editor with assigned submissions.](./assets/learning-ojs3.1-se-dashboard.png)

Ceci n'est pas nécessaire, mais le/la Rédacteur/trice de section peut répondre à la Discussion de Pré-Évaluation pour informer le/la Rédacteur/trice qu'il va travailler sur l'affectation.

![A sample submission record.](./assets/learning-ojs3.1-se-record.png)

#### Accepter l'Affectation

Une fois que le/la Rédacteur/trice de Section est satisfait(e) et convaincu(e) que la soumission est appropriée pour la revue, il/elle peut sélectionner le bouton **Envoyer pour Évaluation** pour faire passer la soumission au stade suivant.

#### Communiquer avec l'Auteur

Si le/la Rédacteur/trice de Section a des questions pour l'auteur, il peut utiliser les Discussions de Pré-Évaluation.

#### Envoi pour Évaluation

Gardez les fichiers à évaluer cochés.

![The Send to Review confirmation window.](./assets/learning-ojs3.1-se-record-sendReview.png)

Lorsque la soumission passe au Stade d'Évaluation, une notification indique que des Évaluateurs doivent être affectés.

<hr />

## Évaluation

{% include video.html id="5Hwkqj4Jvew" provider="youtube" title="Video of Editorial workflow in OJS 3.3. Module 5: Assigning a reviewer."%}

This PKP School video explains the steps the Section Editor takes to assign reviewers to the submission. To watch other videos in this series, visit [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDUKJbWtr4bgy133_jwoiqoF).

Dans le panneau Évaluateurs, vous pouvez sélectionner Ajouter un-e Évaluateur/trice pour affecter un-e nouveau/velle Évaluateur/trice.

![The "Waiting for reviewers to be assigned" notification.](./assets/learning-ojs3.1-se-record-revstage.png)

> Remarque: dans la capture d'écran ci-dessus, nous voyons la vue de le/la Rédacteur/trice de Section. Notez les boutons d'action limités (seul l'option Faire une Recommandation est disponible). Si nous étions connectés en tant que rédacteur/trice, nous verrions plus de boutons d'action (Demander la Révision, Accepter la Soumission, Refuser la Soumission).

From the Reviewers panel, you can select Add Reviewer to assign a new Reviewer.

Cela ouvre une nouvelle fenêtre, où les Évaluateurs sont listés et peuvent être sélectionnés un par un.

![The Locate a Reviewer window listing all Reviewers.](./assets/learning-ojs-3.1.2-locate-reviewer.png)

En cliquant sur la flèche bleue, vous obtiendrez plus d'informations sur l'historique de leurs Évaluations, y compris le nombre d'Évaluations actives qui leur sont actuellement affectées, le nombre d'Évaluations qu'ils ont terminées ou refusées, etc. Si l'utilisateur/trice a ajouté une biographie ou des centres d'intérêt d'Évaluation, ces informations seront affichées ici.

De plus, le/la Rédacteur/trice de la Revue peut ajouter une Note Éditoriale à propos de l'Évaluateur/trice dans son profil sous Utilisateurs et Rôles > Utilisateurs. Cette note apparaîtra dans les détails de l'Évaluateur/trice sur l'écran Ajouter un-e Évaluateur/trice, mais ne sera pas visible par l'Évaluateur/trice ni par le public.

![A sample of expanded reviewer details with review history and notes.](./assets/learning-ojs-3.1.2-add-reviewer.png)

Dans les versions OJS 3.0 à 3.1.0, vous ne pouvez pas affecter un-e utilisateur/trice pour évaluer une soumission s'ils sont également un-e rédacteur/trice de la soumission.  Si vous le faites, le/la Rédacteur/trice ne pourra plus accéder la soumission après avoir soumis son évaluation, afin de maintenir les principes de l'évaluation à l'aveugle par les pairs. Cependant, à partir de OJS 3.1.1, vous pouvez affecter un-e utilisateur/trice pour réviser une soumission s'il/elle est également un-e rédacteur/trice de la soumission.

Au bas de ce formulaire, vous verrez des options pour:

**Inscrire un(e) Utilisateur/trice Existant(e)**: si aucun des Évaluateurs ne vous convient, vous pouvez inscrire un-e utilisateur/trice existant-e en tant qu'Évaluateur/trice.

**Créer un-e Nouveau/velle Évaluateur/trice**: si aucun des Évaluateurs ne vous convient, vous pouvez utiliser ce bouton pour créer un-e nouveau/velle Évaluateur/trice. Ceci crée un nouveau compte dans le système.

Cela ouvre une nouvelle fenêtre avec un message pour la Évaluatrice.

Pour cette démonstration, nous choisirons Adela comme notre Évaluatrice et cliquerons sur le bouton **Sélectionner un-e Évaluateur/trice** .

Vous pouvez réviser n'importe quel texte préparé.

![The Add Reviewer screen with email notification template.](./assets/learning-ojs3.1-se-record-revstage-revreq.png)

Plus bas dans le formulaire, vous verrez les détails supplémentaires qui sont envoyés à l'Évaluateur/trice, y compris le titre, le résumé, les dates importantes, et un lien vers les fichiers à évaluer.

Si vous utilisez une méthode d'Évaluation à l'Aveugle, assurez-vous que les fichiers que vous envoyez à l'Évaluateur/trice sont démunis de toute information qui peut identifier l'auteur. Des instructions supplémentaires à ce sujet sont fournies dans les sections [Comprendre l'Évaluation à l'aveugle](#comprendre-lévaluation-à-laveugle) et [Enlever les Informations d'Identification](#supprimer-les-informations-didentification) .

Further down the form, you will see the additional details that are sent to the Reviewer including title, abstract, important dates, and a link to the files to be reviewed.

![Review details include type and due date settings.](./assets/learning-ojs-3-ed-rev-add-4.png)

Par défaut, les Évaluateur seront fournis d'une large zone de texte pour écrire leur commentaires. Néanmoins, le/la Directeur/trice de la Revue peut créer des Formulaires de Révision sous [**Paramètres de Flux des Travaux > Évaluation**](./settings-workflow#évaluation) pour demander des questions plus spécifiques. Si vous voulez que l'Évaluateur/trice remplisse un formulaire de Évaluation, sélectionnez cela sous **Formulaire d'Évaluation**.

Cliquez sur le bouton **Ajouter un-e Évaluateur/trice** pour envoyer le message et affecter l'Évaluateur/trice.

Vous pouvez apporter des modifications supplémentaires à l'aide de la flèche bleue à côté du nom de l'Évaluateur/trice.

![The newly added Reviewer seen in the Review Stage.](./assets/learning-ojs-3-ed-rev-reviewer-added.png)

**Détails d'Évaluation**: fournit des détails sur l'évaluation.

![Expanded reviewer details and options.](./assets/learning-ojs-3-ed-rev-reviewer-added-2.png)

**Envoyer un Email à l'Évaluateur/trice**: vous permet d'envoyer un message à l'Évaluateur/trice.

![The Review Details window.](./assets/learning-ojs-3-ed-rev-reviewer-review-details.png)

**Modifier l'Évaluation**: vous permet de modifier les dates et les fichiers de l'Évaluation.

![The Email Reviewer window.](./assets/learning-ojs-3-ed-rev-reviewer-email-reviewer.png)

**Annuler l'Affectation de l'Évaluateur/trice**: vous permet de supprimer l'affectation de l'Évaluateur/trice.

![The Edit Review window.](./assets/learning-ojs-3-ed-rev-reviewer-edit-review.png)

Utilisez le bouton **Ajouter un Message** pour répondre.

**Cancel Review Request**: As of OJS 3.2, you can cancel a review request. Cela peut être nécessaire lorsqu'un évaluateur n'a pas répondu à une demande de révision ou a accepté de faire une évaluation mais n'a jamais présenté de résultats.

![The Cancel Reviewer option in the expanded Reviewer options.](./assets/learning-ojs-3.2-cancel-reviewer.png)

L'annulation d'une demande d'évaluation vous permettra d'envoyer un modèle d'email à l'Évaluateur/trice. La demande apparaîtra alors dans la liste des Évaluateurs du rédacteur/trice comme "annulée".

![A sample review request marked "Request cancelled".](./assets/learning-ojs-3.2-reviewer-cancelled.png)

L'évaluation annulée sera enregistrée dans les statistiques de l'Évaluateur/trice que vous pouvez voir lors de la sélection d'un-e Évaluateur/trice.

![Cancelled requests as seen in a reviewer's stats.](./assets/learning-ojs-3.2-cancelled-reviews-tracker.png)

**Discussion d'Évaluation**: La discussion d'Évaluation est un autre moyen pour vous de contacter un-e Évaluateur/trice. Dans une discussion d'évaluation, vous avez la possibilité de joindre des fichiers.

Vous sélectionnerez ensuite les Évaluateurs avec lesquels vous souhaitez commencer une discussion.

![The location of the Add Discussion button.](./assets/learning-ojs3.2-rev-contact2.png)

**Historique** : fournit un bref historique d'évaluation.

![The list of reviewers to select for discussion.](./assets/learning-ojs3.2-rev-contact3.png)

À ce point, nous pourrions ajouter des Évaluateurs supplémentaires, puis attendre que leurs recommandations arrivent.

![The review History window.](./assets/learning-ojs-3-ed-rev-review-history.png)

At this point, we could add additional Reviewers, and then wait for their recommendations to come in.

### Comprendre l'Évaluation à l'Aveugle

**Évaluation en Double-Aveugle**: l'identité de l'auteur et de l'évaluateur/trice sont gardées cachées.

Toutes les informations seront visibles pour les directeurs et rédacteurs de la revue quel que soit le type d'évaluation sélectionné. Le type d'évaluation sera automatiquement sélectionné en fonction de ce qui a été configuré sous *Paramètres* > *Flux des Travaux* > *Évaluation*. Les rédacteurs peuvent modifier le type d'évaluation lors de l'envoi de la demande d'évaluation. Les rédacteurs/rédacteurs de section doivent sélectionner le type d'évaluation lors de l'envoi de la demande d'évaluation parmis les options suivantes:

* Anonymous Reviewer/Anonymous Author
* Anonymous Reviewer/Disclosed Author
* Ouvert

*Auteur*: Aucune information d'identification concernant l'évaluateur/trice ne sera visible par l'auteur dans la vue de son manuscrit.

L'auteur ou le/la rédacteur/trice doit s'assurer que les métadonnées du fichier manuscrit sont supprimées lors d'une évaluation en Double-Aveugle. Voir [Supprimer les informations d'identification](#supprimer-les-informations-didentification) pour plus d'informations.

*Évaluateur!trice:* L'Évaluateur/trice ne sera pas en mesure de voir le(s) auteur(s) dans la file d' attente de l'évaluateur/trice si le/la rédacteur/trice a sélectionné une évaluation en double-aveugle. All identifying information in the metadata of the submission details is automatically removed by the system, as seen in the example below.

![A sample of the metadata a reviewer will see in a double anonymous review - no identifying information is included.](./assets/learning-ojs3.1-ed-rev-anon1.png)

À la fin d'une évaluation, si un-e évaluateur/trice choisit de télécharger un fichier d'évaluation, toutes les informations d'identification doivent être supprimées avant de le télécharger dans le système. Voir [Supprimer les informations d'identification](#supprimer-les-informations-didentification) pour plus d'informations.

*Décision des Rédacteurs*: L'email de décision envoyé aux auteurs à la fin d'une évaluation aura les titres génériques des Évaluateurs.

![A sample of what the author will see after their submission is reviewed - no identifying information is included.](./assets/learning-ojs3.1-ed-rev-anon2.png)

*Editor's Decision*: The decision email sent to the author(s) at the end of a review will have generic titles of the reviewers.

![A sample decision email identifying the reviewer only as "Reviewer A".](./assets/learning-ojs3.1-ed-rev-anon3.png)

**Évaluation à l'Aveugle**: l'identité de l'Évaluateur/trice est gardée anonyme par rapport aux auteurs. Les Évaluateurs peuvent voir les détails de l'auteur.

*Évaluateur/trice*: L'Évaluateur/trice sera capable de voir les métadonnées complètes fournies pas l'auteur en cliquant sur *Afficher Tous les Détails de la Soumission* dans l'onglet de demande du manuscrit. Le nom de l'auteur sera aussi affiché dans la file d'attente de l'Évaluateur/trice.

*Décision des Rédacteurs*: L'email de décision envoyé aux auteurs à la fin d'une évaluation aura les titres génériques des évaluateurs.

![A sample of what the author will see after their submission is reviewed - no identifying information is included.](./assets/learning-ojs3.1-ed-rev-anon2.png)

*Editors Decision*: The decision email sent to the author(s) at the end of a review will have generic titles of the reviewers.

![A sample decision email identifying the reviewer only as "Reviewer A".](./assets/learning-ojs3.1-ed-rev-anon3.png)

### Supprimer les Informations d'Identification

Même si OJS dispose d'un certain nombre de fonctions intégrées pour les évaluations à l'aveugle, des étapes supplémentaires peuvent être nécessaires en dehors de la plate-forme pour garantir une évaluation en double-aveugle. Un fichier de soumission peut contenir des informations permettant d'identifier l'identité des auteurs dans les propriétés du document.

![A sample of a document whose author is visible within the document properties.](./assets/learning-ojs3.1-ed-rev-anon4.png)

Les auteurs peuvent aussi inclure leur nom dans l'article, les notes de bas de page, ou les références, auquel cas le/la rédacteur/trice devra supprimer cela avant d'envoyer la soumission pour évaluation. Comme alternatif, les auteurs peuvent être invités à remplacer leurs noms dans le fichier de soumission avec «Auteur», et remplacer l'année utilisée dans les références et les notes de bas de page au lieu du nom des auteurs, du titre de l'article, etc., avant la soumission.

#### Microsoft Word pour Windows

1. Allez à *Fichier*
2. Sélectionnez *Info*
3. Cliquez sur *Vérifier les Problèmes*
4. Cliquez sur *Inspecter le Document*
5. Dans la boîte de dialogue *Inspecteur de Document* , cochez les cases pour choisir les types de contenu masqué que vous souhaitez inspecter
6. Cliquez sur *Supprimer Tout*
7. Cliquez sur *Fermer*
8. Sauvegarder le document

#### Microsoft Word pour MacOS

1. Aller à *outils*
2. Cliquez sur *Protéger le Document*
3. Sélectionnez *Supprimer les Informations Personnelles de ce Fichier lors de l'Enregistrement*
4. Cliquez sur *OK* et enregistrez le fichier

![The "Remove personal information from this file on save" option in Mac OS.](./assets/learning-ojs3.1-ed-rev-anon5.png)

### Retélécharger le Document

Cliquez sur **Télécharger le Fichier d'Évaluation** .

![The Upload/Select Files button under the Review Files section.](./assets/learning-ojs3.1-ed-rev-anon6.png)

Identifiez le composant de l'article et téléchargez le fichier.

![The Upload Review File button.](./assets/learning-ojs3.1-ed-rev-anon7.png)

Identify the article component and upload the file.

![The article component identification dropdown.](./assets/learning-ojs3.1-ed-rev-anon8.png)

Détails d'Évaluation. Il peut être utile de renommer le fichier au moment de retéléchargement. Le fichier peut également être renommé en cliquant sur la flèche à gauche du nom du fichier.

![The Edit button in the expanded menu under the list of review files.](./assets/learning-ojs3.1-ed-rev-anon9.png)

Cliquez sur Terminer et sélectionnez le fichier que vous souhaitez utiliser pour l'Évaluation.

Les fichiers apparaîtront sous le téléchargement initial. Lors de l'envoi de la demande d'Évaluation, assurez-vous que le manuscrit original n'est pas sélectionné dans les «Fichiers à Évaluer».

![Options to toggle which files are included for review.](./assets/learning-ojs3.1-ed-rev-anon10.png)

Sélectionnez les Fichiers d'Évaluation et cliquez sur **OK** .

### Répondre aux Évaluations

{% include video.html id="LR_1BmmSTek" provider="youtube" title="Video of Editorial workflow in OJS 3.3. Module 7: Responding to the reviews"%}

This PKP School video explains the steps the Section Editor and the author take once the reviews are complete. To watch other videos in this series, visit [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDUKJbWtr4bgy133_jwoiqoF).

Une fois que les Évaluateurs ont terminé leur travail, le/la rédacteur/trice de section peut voir les résultats dans leur tableau de bord. Ici, ils verront les notifications indiquant que de nouvelles Évaluations ont été soumises et si toutes les Évaluations ont été soumises.

![Sample notification of completed reviews in the Section Editor's dashboard.](./assets/learning-ojs-3-ed-rev-responding.png)

Sélectionnez le lien *Confirmer* au bas de l'écran.

![A sample review with comments.](./assets/learning-ojs-3-ed-rev-read-reviews.png)

Select the _Confirm_ link at the bottom of the screen.

![The Review Confirmed status applied to a review.](./assets/learning-ojs-3-ed-rev-thank.png)

Dans le panneau des Évaluateurs, vous pouvez maintenant voir un lien de *Remercier Évaluateur/trice*. Choisissez cela pour remercier l'Évaluateur/trice.

![The Thank Reviewer window.](./assets/learning-ojs-3-ed-rev-thank2.png)

Appuyez sur le bouton **Remercier Évaluateur/trice** pour envoyer le message.

### Prendre une Décision

Les options comprennent:

![The various action buttons for making a decision regarding a submission.](./assets/learning-ojs-3-ed-rev-decision.png)

**Accepter la Soumission**: cela signifie que la soumission est acceptée sans révisions et peut passer à l'étape de Révision.

**Demander des Révisions**: Cela nécessitera que l'Auteur apporte des modifications mineures, le/la rédacteur/trice a la possibilité de choisir si un autre cycle d'évaluation sera nécessaire.

Dans cette démonstration, nous allons demander à l'auteur de faire quelques révisions mineures avant l'acceptation.

**Refuser la Soumission**: Cela signifie que la soumission n'a pas été soumise à une évaluation par les pairs et qu'elle ne convient pas pour une évaluation plus approfondie. La soumission serait ensuite transférée aux archives. Only declined submissions in the Archives can be deleted. In OJS 3.3, there is now the option to revert a Decline decision in the Submission and Review stage. This can be done by clicking **Change Decision** followed by **Revert Decline**. After a declined decision is reverted, the submission is restored to its previous stage and review round if active.

### Demande d'Évaluations

In this demonstration, we are going to request that the Author make some minor revisions before acceptance.

Pour ce faire, sélectionnez le bouton **Demande d'Évaluations**. Cela entraîne une nouvelle fenêtre de message.

![The Request Revisions window.](./assets/learning-ojs-3-ed-rev-req-revisions.png)

Vous pouvez modifier n'importe quel texte avant d'envoyer le message.

Utilisez le bouton **Ajouter des Évaluations** pour importer les commentaires de l'Évaluateur/trice à partir du champ Rédacteur/trice et Auteur. Les commentaires du champ Rédacteur/trice uniquement ne seront pas affichés.

S'il y a des pièces jointes, comme un fichier balisé créé par un-e Évaluateur/trice, vous pouvez le joindre ici (tant qu'il a été anonymisé). Dans OJS 3.1.2 et versions ultérieures, vous pouvez également télécharger un nouveau fichier et l'ajouter en tant que pièce jointe.

Une fois que l'auteur a effectué les révisions, vous devriez recevoir un message (par email et via le panneau des Discussions d'Évaluation).

![A sample request for revisions with imported comments and options to share files.](./assets/learning-ojs-3-ed-rev-req-revisions3.png)

Vous devez maintenant attendre que l'auteur réponde avec ses révisions.

### L'Auteur Répond

Vous verrez également le fichier révisé dans le panneau Révisions.

![The author's revision found in the Review Discussions panel.](./assets/learning-ojs-3-ed-discussion-panel.png)

Vous pouvez télécharger et consulter la version révisée finale à partir du panneau Révisé.

À ce point, vous pouvez télécharger le fichier révisé, vérifier qu'il est prêt et communiquer avec l'Auteur à l'aide du panneau Discussions d'Évaluation.

Dans ce cas, nous allons informer l'auteur que nous acceptons les révisions. Pour ce faire, cliquez sur le titre lié de la discussion. Cela ouvrira la boîte de discussion.

![An expanded discussion.](./assets/learning-ojs-3-ed-discussion-window.png)

Use the **Add Message** button to reply, either requesting further revision or informing the author that the submission is ready to move on to the next stage.

![A sample reply to an author's revisions.](./assets/learning-ojs-3-ed-discussion-window-reply.png)

### Cycle d'Évaluation Supplémentaire

Si vous souhaitez soumettre l'article évalué à un autre cycle d'évaluation, vous pouvez commencer un deuxième cycle d'évaluation (ou troisième ou suivant) une fois que les évaluations de l'auteur ont été reçues.

Il est préférable de commencer un nouveau cycle d'évaluation **après** qu'un auteur a téléchargé les fichiers évalués lors du cycle précédent. La création d'un nouveau cycle d'évaluation avant que l'auteur ait téléchargé ses fichiers pourrait créer une certaine confusion car son tableau de bord (et le vôtre) sera par défaut le nouveau cycle. Cependant, l'auteur pourra revenir au premier cycle pour téléverser ses fichiers. This will also result in having to download the uploaded file from Round 1 and upload it into Round 2.

Un nouveau cycle **ne doit pas** être commencé si vous avez des problèmes avec le cycle actuel (par example, vous êtes incapable d'enregistrer la décision, vous avez reinviter un-e Évaluateur/trice refusé-e ou supprimé-e).

Cela ouvrira un autre menu pour vous permettre de sélectionner les fichiers (fournis par l'auteur) à inclure pour le nouveau cycle d'évaluation.

![The New Review Round button in the Review panel](./assets/learning-ojs-3-new-round-1.png)

This will open another menu for you to select which files (provided by the author) to include for the new round of review.

![File selection options for a newly created review round.](./assets/learning-ojs-3-new-round-2.png)

S'il y a des fichiers supplémentaires que vous souhaitez rendre disponibles à nouveau à partir du cycle précédent, cela peut être fait en cliquant sur **Téléverser/Sélectionner des Fichiers**.

![The Upload/Select files button in the Review Files window.](./assets/learning-ojs-3-new-round-3.png)

Check the box next to **Show files from all accessible workflow stages**. Les fichiers disponibles lors du premier cycle doivent apparaître sous Soumission. Les fichiers qui apparaissent sous Évaluation afficheront uniquement les fichiers téléchargés par l'auteur du cycle précédent (c'est-à-dire les fichiers révisés du premier cycle). Si vous êtes au troisième cycle (et au-delà) et que vous avez besoin de fichiers du premier ou deuxième cycle, vous devrez les télécharger sur votre bureau local et les re-télécharger en utilisant **Télécharger/Sélectionner des Fichiers** .

![The list of files for a submission including previous round after the "Show files from all accessible workflow stages" option is enabled.](./assets/learning-ojs-3-new-round-4.png)

De même, s'il y a des fichiers supplémentaires fournis par les auteurs après avoir téléchargé la nouvelle soumission, vous pouvez les télécharger à l'aide de **Téléverser/Sélectionner des Fichiers** .

A new round will be added to the Review panel in the submission dashboard.

![The Round Two tab in the Review panel.](./assets/learning-ojs-3-new-round-0.png)

Une fois que vous êtes prêt à commencer le nouveau cycle d'évaluation, attribuez des Évaluateurs comme vous l'avez fait lors du cycle précédent. Vous pouvez affecter les mêmes Évaluateurs ou différents Évaluateurs.

Les Évaluateurs des cycles précédents n'auront pas accès aux commentaires qu'ils ont partagés lors d'un cycle précédent. Si un-e Évaluateur/trice a demandé ses commentaires d'un cycle précédent, le/la rédacteur/trice peut copier ceci du premier cycle - Détails d'Évaluation et démarrer une discussion dans le deuxième cycle. Sinon, le journal peut choisir d'encourager la soumission de la Réponse à l'Évaluateur/trice dans le cadre de la nouvelle soumission .

Ces étapes peuvent être répétées jusqu'à ce qu'une décision finale d'accepter ou de refuser le manuscrit ait été prise.

### Passer à la Révision

La soumission est maintenant prête à être déplacée vers la Révision. To do so, use the blue **Send to Copyediting** button.

![The "Send to Copyediting" button in a submission panel.](./assets/learning-ojs-3-ed-send-to-copyediting.png)

Cela ouvrira une nouvelle fenêtre.

![The Send to Copyediting window including information about the notification of acceptance to be sent to the author.](./assets/learning-ojs-3-ed-accept.png)

Note that if the journal has enabled an article processing charge (APC) to be charged to authors, the option will appear at this stage to notify the author that the payment is due. Selecting "Request publication fee" will prompt a payment notification email to be sent to the author with payment instructions. For information about enabling author fees, please see the [Subscriptions chapter > Payment Types](./subscriptions#payment-types) and [Distribution settings > Enable Payments](./settings-distribution#enable-payments).

![A sample notification for a journal with APCs enabled.](./assets/learning-ojs3.1-jm-subscriptions-authorfees.png)

Appuyez sur le bouton **Enregistrer la Décision Éditoriale** pour envoyer le message.

Lorsqu'une soumission est acceptée à l'Étape d'Évaluation, elle passe automatiquement à l'étape de Révision.

De retour sur l'onglet d'évaluation, vous remarquerez que le statut indique maintenant que la soumission a été acceptée.

![The "Submission accepted" status of a submission.](./assets/learning-ojs3.2_edflow_decisionstatus_accept.png)

<hr />

## Révision

{% include video.html id="uc272bhGfeU" provider="youtube" title="Video of Editorial workflow in OJS 3.3. Module 8: Copyediting."%}

This PKP School video explains the Copyediting stage. To watch other videos in this series, visit [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDUKJbWtr4bgy133_jwoiqoF).

La soumission est automatiquement déplacée vers l'étape de Révision.

![The Copyediting stage of a submission.](./assets/learning-ojs-3-ed-copyediting.png)

### Ajout d'un-e Réviseur/euse

Lorsque la soumission entre dans la phase de Révision, une notification indique qu'un-e Réviseur/euse doit être affecté. Les Réviseurs peuvent être attribués à l'aide du lien *Ajouter* sur le panneau Participants.

Cela ouvrira une nouvelle fenêtre.

![The Add Participant window in the Copyediting stage.](./assets/learning-ojs-3-ed-copyediting-add.png)

Vous pouvez utiliser la liste déroulante des rôles pour choisir un-e Réviseur/euse et cliquer sur le bouton **Rechercher**. Cela fera apparaître tous les Réviseurs.

Vous pouvez maintenant voir la nouvelle notification indiquant que la soumission est en attente de révisions, le/la réviseur/euse est maintenant inclus dans la liste des Participants et la demande est visible dans les Discussions de Révision.

Choose a prepared message.

Vous pouvez maintenant attendre que le/la réviseur/euse fasse son travail.

Le/la réviseur/euse recevra un e-mail de le/la Rédacteur/trice de la Rubrique lui demandant de prendre en charge la soumission.

Pour commencer, ils doivent se connecter et trouver la soumission à partir de leur tableau de bord.

![The "Awaiting Copyediting" notification and updated participants list.](./assets/learning-ojs-3-ed-copyediting-add-dash.png)

You can now wait for the Copyeditor to do their work.

### Réviseur/euse

The Copyeditor will receive an email message from the Section Editor requesting them to take on the submission.

To get started, they must login and find the submission from their dashboard.

![The Copyeditor's submission queue.](./assets/learning-ojs-3-ce-dash.png)

Ensuite, ils peuvent cliquer sur le lien Révision à côté du nom de la soumission. Cela les mènera directement à l'étape de Révision pour cette soumission.

![The Copyediting stage as seen by an assigned Copyeditor.](./assets/learning-ojs-3-ce-submission.png)

De là, ils peuvent voir les Fichiers Brouillons. Ce sont les fichiers qui nécessitent une révision. Cliquez sur le titre lié pour télécharger le fichier sur leur bureau.

En dehors d'OJS, ils effectueront le travail de révision.

Si des modifications sont apportées, cliquez sur le bouton **Enregistrer** avant de quitter cette fenêtre.

![An article record's Publication tab with metadata fields](./assets/learning-ojs-3-ce-copyediting-metadata.png)

Dans la fenêtre Ajouter une discussion, ils doivent choisir l'auteur et ajouter une ligne de sujet et un message.

Cliquez sur le bouton **OK** pour compléter l'affectation et envoyer le message.

Plus bas dans cette même fenêtre, ils doivent téléverser une copie du fichier révisé.

#### Consulter avec l'Auteur

Une fois la révision terminée, ils exécuteront les modifications au-delà de l'auteur en ajoutant une nouvelle discussion, en utilisant le lien *Ajouter une discussion* du panneau de Discussions de Révision.

Dans la fenêtre de discussion, ajoutez le/la Rédacteur/trice de de la Rubrique, une ligne de sujet, et un message.

![The Add Discussion window.](./assets/learning-ojs-3-ce-add-discussion.png)

Appuyez sur **Continuer** pour continuer.

![The file upload area of the Add Discussion window.](./assets/learning-ojs-3-ce-add-discussion2.png)

Pour ce faire, utilisez le lien *Téléverser un Fichier*. Cela ouvrira une nouvelle fenêtre où vous devez choisir le *Component de l'Article* (par example, texte de l'article) et téléverser le fichier.

![The File Upload screen.](./assets/learning-ojs-3-ce-upload1.png)

Pour ce faire, sélectionnez le bouton bleu **Envoyer en Production** .

De retour dans la fenêtre Ajouter, vous pouvez maintenant voir le fichier joint.

![The Edit option next to the file name.](./assets/learning-ojs-3-ce-upload2.png)

Appuyez sur **OK** pour envoyer le message à l'auteur.

![The Confirmation step of the file upload.](./assets/learning-ojs-3-ce-upload3.png)

Back on the Add window, you can now see the attached file.

![The newly upload file attached to the discussion.](./assets/learning-ojs-3-ce-upload4.png)

Une fois que vous avez reçu une réponse de l'auteur, vous pouvez consulter ses commentaires en vérifiant la réponse à la discussion.

Le message est maintenant visible dans les Discussions de Révision.

![The discussion added to the Copyediting Discussions section.](./assets/learning-ojs-3-ce-discussion.png)

Vous pouvez maintenant attendre la réponse de l'auteur.

### L'Auteur Répond

Vous pouvez maintenant télécharger la version révisée finale dans le panneau Révisé, près du bas de l'écran.

![The previous Copyediting Discussion now containing a "1" in the reply column.](./assets/learning-ojs-3-se-author-copyedits.png)

Utilisez le lien Télécharger/Sélectionner des fichiers pour télécharger la version révisée finale.

![A sample reply from an author approving the copyediting.](./assets/learning-ojs-3-se-author-copyedits-reply.png)

### Le Fichier Révisé Final

Il est important de noter ici que vous avez quelques choix.

![The Upload/Select Files option can be found near the Copyedited section of the panel.](./assets/learning-ojs-3-ce-copyedited.png)

Appuyez sur **OK** .

![The Upload/Select Files window.](./assets/learning-ojs-3-ce-copyedited-upload-select.png)

It is important to note here that you have a few choices.

1. Vous pouvez utiliser le lien Télécharger un Fichier pour télécharger un nouveau fichier (par exemple, un fichier avec quelques modifications récentes depuis que vous l'avez montré à l'auteur).
2. Vous pouvez sélectionner la version originale de l'auteur (peu probable).
3. Vous pouvez sélectionner la version du/de la Réviseur/euse, qui est la version que vous avez envoyée à l'auteur (si vous n'avez apporté aucune autre modification, choisissez celle-ci).

L'étape finale consiste à informer le/la Rédacteur/trice de la Rubrique que la révision est terminée.

Pour ce faire, démarrez une nouvelle Discussion de Révision en utilisant le lien *Ajouter une Discussion* .

Le fichier est maintenant visible dans le panneau *Révisé* (près du bas de l'écran), indiquant au rédacteur/trice qu'il s'agit de la version finale, qui est prête pour l'étape de Production.

![The selected file seen in the Copyedited panel.](./assets/learning-ojs-3-ce-copyedited2.png)

### Informer le/le Rédacteur/trice de la Rubrique

The final step is for you to inform the Section Editor that the copyediting is complete.

Appuyez sur **OK** pour envoyer le message.

![The list of Copyediting Discussions ](./assets/learning-ojs-3-ce-copyedited-final.png)

In the discussion window, add the Section Editor, a subject line, and a message.

![A sample message from the Copy Editor to the Section Editor](./assets/learning-ojs-3-ce-copyedited-discussion.png)

le/la Rédacteur/trice de la Rubrique recevra un email indiquant que la révision est terminée et verra une notification dans les discussions.

Retournant vers l'étape de Révision, vous pouvez voir que le message est publié.

![The message added to the list of copyediting discussions.](./assets/learning-ojs-3-ce-copyedited-done.png)

Votre travail en tant que réviseur/euse est maintenant terminé!

### Passer à la Production

À ce stade, vous pouvez communiquer davantage avec le/la Réviseur/euse ou, si vous êtes satisfait, déplacer la soumission vers l'étape de Production.

![The Copyediting Stage in the Section Editor's dashboard](./assets/learning-ojs-3-se-copyedited-dash.png)

Cela va générer un préavis officiel aux Auteurs indiquant que la soumission passe à l'étape suivante.

![The final copyedited version uploaded to the Copyedited panel. ](./assets/learning-ojs-3-se-copyedited-files.png)

Notez que le fichier approprié, du panneau Révisé, est inclus et sera automatiquement transféré vers la Production.

Cliquez sur **Enregistrer la Décision Éditoriale** pour continuer.

This will generate an official notice to the Authors that the submission is moving to the next stage.

![The Send to Production window with notification to the author.](./assets/learning-ojs-3-se-send-to-production.png)

Notice that the appropriate file, from the Copyedited panel, is included and will be automatically transferred to Production.

**Sélectionner un-e Évaluateur/trice**: utilisez cette option pour confirmer votre sélection une fois que vous avez choisi un-e Évaluateur/trice de la liste.

L'étape de Révision est maintenant terminée et l'état de la soumission sera mis à jour. Le chapitre suivant couvre la phase de Production et de Publication.

![The "Sent to production" status.](./assets/learning-ojs3.2_edflow_decisionstatus_copyedit.png)

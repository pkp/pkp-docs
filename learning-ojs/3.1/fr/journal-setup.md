---
book: apprendre-ojs
version: 3.1
---

# Chapter 5: Journal Settings

La section Paramètres vous permet de configurer votre installation OJS pour répondre au mieux à vos besoins de publication.

Vous pouvez trouver les Paramètres dans le panneau de menu de gauche lorsque vous êtes connecté en tant qu'utilisateur avec des autorisations de Directeur-trice de la Revue.

![OJS dashboard View for Journal Managers with links to Settings menu and its submenus in left-hand sidebar.](./assets/learning-ojs3.1-jm-settings-journal.png)

Il comprend les Paramètres de la Revue, les Paramètres du Site Web, les Paramètres de Flux de Travaux et les Paramètres de Distribution, qui seront traités dans les 4 chapitres suivants.

La page Paramètres de la Revue comprend des détails sur la Revue.

Utilisez les onglets pour accéder aux différentes sections des Paramètres de la Revue: Bloc Générique, Coordonnées, Rubriques de la Revue.

![OJS dashboard view of Journal Settings with navigation tabs for the Settings submenus across top portion of page content.](./assets/learning-ojs3.1-jm-settings-journal-page.png)

## Bloc Générique

**Journal Name** is the name of your journal. Par exemple, Revue de la Documentation de Logiciel

**Journal Initials** are the initials of the journal. Par exemple, RDL.

**Titre Court de la Revue** est le sigle du nom de votre revue. Par exemple, RDocLogi.

**Éditeur** est le nom de l'organisation qui publie la revue.

Notez que le nom de l'éditeur saisi ici est utilisé pour les métadonnées mais ne sera pas affiché sur votre site. Pour afficher le nom de l'éditeur sur votre site, vous pouvez le saisir sous Paramètres de la Revue > Coordonnées > Adresse Postale. Vous pouvez également l'ajouter sous À Propos de la Revue ci-dessous.

**ISSN** (Numéro International Normalisé des publications en Série) est un numéro à huit chiffres qui identifie les revues. Il est géré par un réseau mondial de Centres Nationaux coordonnés par un Centre International basé à Paris, soutenu par l'Unesco et le gouvernement Français. Un numéro peut être obtenu sur le [site Web de l'ISSN](http://www.issn.org/). Cela peut être fait à tout moment de l'exploitation de la revue.

Les revues OJS ont généralement un ISSN en ligne, mais certaines peuvent également publier une version imprimée, ce qui nécessite un différent ISSN imprimé.

Veuillez noter que l'ISSN saisi ici est utilisé pour les métadonnées mais ne sera pas affiché sur votre site. Il est recommandé d'ajouter également l'ISSN au pied de page de votre site. Vous pouvez le faire sous Paramètres du Site Web > Apparence > Pied de Page.

**Le Résumé de la Revue** est une brève description de votre revue. Si vous êtes sur une installation OJS avec plusieurs revues, ce texte apparaîtra avec votre liste de revues.

**Masthead** allows you to add the names of your editorial team or anyone else you wish to mention. Cela apparaîtra sur le site Web public sous À Propos > Équipe Éditoriale.

**À Propos de la Revue** est un espace pour ajouter des informations sur votre revue susceptibles d'intéresser les lecteurs, les auteurs ou les évaluateurs.

Cela peut inclure votre politique d'accès libre, l'objet et la portée de la revue, l'avis de droit d'auteur, la divulgation de commandite, l'historique de la revue, une déclaration de confidentialité et l'inclusion dans tout système d'archivage LOCKSS ou CLOCKSS.

Appuyez sur le bouton **Enregistrer** pour enregistrer vos modifications.

## Coordonnées

Utilisez cette section pour ajouter des coordonnées à la revue.

![OJS dashboard view of Journal Settings submenu Contact where information can be added in text fields.](./assets/learning-ojs3.1-jm-settings-journal-contact.png)

**Mailing Address**: Add your journal's official mailing address here. Cela apparaîtra sur la page Coordonnées de la revue.

**Principal Contact**: Add contact information for the journal's main contact person.

**Personne-Ressource pour le Soutien Technique** : Ajoutez les coordonnées du soutien technique de la revue. Ces informations apparaîtront sur la page Coordonnées de la revue et également à différents points du flux de travaux pour offrir une assistance aux utilisateurs.

Appuyez sur le bouton **Enregistrer** pour enregistrer vos modifications.

## Rubriques de la Revue

Utilisez cette page pour configurer les différentes sections de votre Revue. Par exemple, Articles, Éditoriaux, Évaluations, Commentaires, etc.

Toutes vos sections existantes apparaîtront ici. OJS nécessite au moins une section et crée une section "Articles" par défaut.

![OJS dashboard view of Journal Settings submenu Sections with links for Order and Create Section and editable list of current sections.](./assets/learning-ojs3.1-jm-settings-journal-sections.png)

Vous pouvez modifier les sections en cliquant sur la flèche bleue à gauche du nom de la section. Cela révélera des options pour modifier ou supprimer la section.

### Modifier une Rubrique

**Politique de la Rubrique** : Utilisez ce champ pour ajouter des détails importants tels que les exigences de soumission, l'évaluation par des pairs, etc.

![New window displaying a section's current settings that is editable.](./assets/learning-ojs-3-settings-website-settings-sections-edit-1.png)

**Options de Rubrique** : Chaque section peut avoir des paramètres différents, y compris si elle est indexée, évaluée par les pairs, accepte les soumissions non sollicitées ou répertoriée dans la table de matières.

Par exemple, une section Éditoriale ne sera généralement pas évalué par des pairs.

Si vous avez une section qui n'est plus active, vous pouvez cocher «Les articles ne peuvent être soumis que par les Rédacteurs-trices et les Rédacteurs-trices de Rubrique» et les auteurs ne pourront pas y soumettre.

**Review Form**: You can select specific review forms for each section. Learn more about Review Forms [here](./editorial-workflow.md#review).

**Indexing**: Each section can have different indexing settings. For example, an Editorial section will not typically be peer-reviewed.

**Identify items published in this section as a\(n\)**: This is used by some indexing systems. Notez que ce n'est pas un champ obligatoire.

**Rédacteurs-trices Assignés-ées** : Si vous avez des rédacteurs-trices inscrits dans votre revue, vous les verrez listés ici et vous pourrez en attribuer un(e) à la rubrique. Cela signifie que toutes les soumissions faites à la rubrique sont automatiquement assignées au rédacteur, vous évitant de devoir attribuer manuellement.

Remplissez les détails et appuyez sur Enregistrer.

### Créer une Rubrique

Chaque rubrique permet de restreindre les soumissions en cochant la case « Les articles ne peuvent être soumis que par les rédacteurs-trices et les rédacteurs-trices de rubrique».

![A new window for entering section information in text fields and selecting section options.](./assets/learning-ojs-3-settings-website-settings-sections-create.png)

Fill in the details and hit Save to record your work.

### Restrict section submitters

Each section allows to restrict submissions by checking the "Items can only be submitted by Editors and Section Editors" checkbox.

![The list of options for restricting a section. Items can be selected from list by checking the box to the left of the item.](./assets/learning-ojs3.1-jm-settings-journal-sections-restrict.png)

Si cette case est cochée pour toutes les rubriques, les auteurs ne pourront pas soumettre aux revues. Les auteurs qui sélectionnent Nouvelle Soumission dans leurs tableaux de bord verront désormais le message "Cette revue n'accepte pas les soumissions pour le moment".

![An example of the message displayed on a journal New Submission page.](./assets/learning-ojs3.1-jm-settings-journal-not-accepting-submissions.png)

### Trier vos Rubriques

Lorsque vous avez créé plus d'une rubrique, vous verrez un lien Trier. Utilisez-le pour réorganiser l'affichage de ces rubriques sur le site web de votre revue.

![A list of available sections from top to bottom of page in OJS dashboard.](./assets/learning-ojs3.1-jm-settings-journal-sections-order.png)

Appuyez sur le bouton **OK** lorsque vous avez terminé.

<hr />

## Catégories

In OJS 3.1.2 you can create Categories to organize your articles into thematic collections and provide another way for readers to access your content. Les catégories peuvent être affichées sous forme de bloc de navigation sur votre site de revue et les lecteurs peuvent sélectionner une catégorie pour afficher tous les articles de cette catégorie. You can place an article in a category by editing its metadata, which is explained in the [Production section of the Editorial Settings chapter](./editorial-workflow.md#production). Cette section explique comment créer et modifier des catégories.

![OJS dashboard view of Journal Settings submenu Categories with links for Order and Add a Category and editable list of current categories.](./assets/learning-ojs3.1-categories-menu.png)

Pour modifier une catégorie:

* Cliquez sur Ajouter une Catégorie
* Entrez un nom pour votre catégorie qui sera affiché aux lecteurs
* Entrez un chemin pour l'URL de la catégorie sur votre site
* Entrez une description qui apparaîtra au-dessus de la liste des articles de la catégorie
* Vous pouvez éventuellement modifier l'ordre des articles par date ou par titre
* Ajoutez éventuellement une image qui apparaîtra en haut de la page de la catégorie
* Cliquez sur OK

![A new window for entering category information in text fields and selecting category options.](./assets/learning-ojs3.1-create-category.png)

Pour afficher des catégories sur votre site web, vous pouvez accéder à Paramètres du Site Web > Gestion de la Barre Latérale et placer le bloc Parcourir sur votre barre latérale.

* Cliquez sur le nom de la catégorie que vous souhaitez modifier
* Faites les changements
* Cliquez sur OK

Pour supprimer une catégorie:

* Cliquez sur la flèche bleue à côté de la catégorie que vous souhaitez supprimer
* Cliquez sur le bouton Supprimer qui apparaît ci-dessous
* Confirmez que vous souhaitez supprimer la catégorie

To display categories on your website you can go to Website Settings > Sidebar Management and place the Browse block on your sidebar.

---
book: apprendre-ojs
version: 3.1
---

# Chapter 6: Website Settings

Les Paramètres du Site Web vous permettent de configurer l'apparence et le fonctionnement du Site Web de votre revue. It consists of tabs for Appearance, Information, Archiving, Languages, Plugins, Announcements, and Navigation Menus.

![OJS dashboard view of website settings menu](./assets/learning-ojs3.1-jm-settings-web-appearance.png)

## Apparence

**Logo**: Use this space to upload a journal logo to the upper left corner of your reader interface.

**Page Footer**: This allows you to display text at the bottom of each page of your website.

**Theme**: The theme determines the overall design or layout of your site. Plusieurs options de thème différentes sont disponibles et vous pouvez les essayer sans affecter le contenu ou la configuration de votre site.

Vous pouvez d'abord vous assurer que tous les thèmes disponibles ont été activés sur votre site.
1. Accédez à l'onglet Plugiciels sous Paramètres du Site Web.
2. Faites défiler vers le bas et recherchez les plugiciels de thème.
3. Cochez la case à côté de chaque plugiciel pour l'activer.

Vous pouvez également rechercher des thèmes supplémentaires dans la Galerie de Plugiciels et les installer et les activer.

Maintenant que vous avez tous les thèmes disponibles, revenez à l'onglet Apparence pour essayer différents thèmes.
1. Sous Thème, vous verrez une liste déroulante de thèmes. Sélectionnez un.
2. Faites défiler vers le bas de la page et cliquez sur Enregistrer.
3. Le thème peut avoir des sous-thèmes supplémentaires ou des options de configuration disponibles. Pour les faire apparaître, actualisez la page dans votre navigateur.
4. Si vous sélectionnez un autre sous-thème ou modifiez le jeu de couleurs ou d'autres fonctionnalités de conception, cliquez à nouveau sur Enregistrer en bas de la page.
5. Ouvrez la page d'accueil de votre site dans un nouvel onglet ou une nouvelle fenêtre de votre navigateur pour voir à quoi ressemble le site avec le nouveau thème ou sous-thème et avec différentes options de configuration.
6. Si vous ne voyez pas les modifications apparaître sur votre site, vous devrez peut-être vider le cache dans le menu Administration.

If you would like to make minor changes to your site's design and layout, you can upload a **Journal Stylesheet**.

Si vous souhaitez apporter des modifications plus importantes à la conception ou donner à votre site un aspect tout à fait unique, vous pouvez développer votre propre thème ou thème enfant. Les instructions sont disponibles dans le [Guide de Thématisation PKP](https://docs.pkp.sfu.ca/pkp-theming-guide/en/) .

**Typographie**: choisissez rapidement les polices de votre revue.

**Couleur**: changez rapidement la couleur de l'en-tête de votre revue.

**Feuille de Style de la Revue**: utilisez cette option pour télécharger une feuille de style unique pour votre revue.

**Sidebar Management**: This allows you to move different blocks in or out of the sidebar in the reader interface.

**Image de la Page d'Accueil**: le téléchargement d'une image ici la placera sur la page d'accueil de votre revue.

**Favicon**: ajoutez un [favicon](https://en.wikipedia.org/wiki/Favicon) à afficher dans la barre d'adresse du navigateur du lecteur.

**Contenu Additionnel**: tout texte saisi ici apparaîtra sur votre page d'accueil.

**Lists**: Limit the number of items \(for example, submissions, users, or editing assignments\) to show in a list before showing subsequent items in another page. Limitez également le nombre de liens à afficher aux pages suivantes de la liste.

**Vignette de la Revue**: téléchargez un petit logo ou une image représentative de la revue qui sera utilisée dans les listes de revues de cette installation OJS. Cela ne sera utilisé que sur les installations OJS avec plusieurs revues.

Appuyez sur **Enregistrer** pour enregistrer vos modifications.

## Information

Utilisez ces champs pour modifier le texte des pages Pour Lecteurs, Pour Auteurs, et Pour Bibliothécaires du site Web de la Revue.

![OJS dashboard view of Information menu with boiler plate text in the fields for readers and for authors.](./assets/learning-ojs3.1-jm-settings-web-info.png)

N'oubliez pas de cliquer sur **Enregistrer** pour enregistrer les modifications.

Pour supprimer ces champs et leur contenu de l'affichage public sur l'interface utilisateur du site Web, désélectionnez le Bloc d'informations dans Paramètres du Site Web > Apparence > Gestion de la Barre Latérale.

## Archivage

If you are a member of a LOCKSS or CLOCKSS network, use this page to activate your journal. The PKP PN Plugin, which deposits your content in the PKP Preservation Network, is not yet available for OJS 3.  When it is available and has been enabled, it will deposit your content directly in the Network.

If you use another network, enabling it here will make your content available to the network, but you will also need to contact the network to make it aware of your journal.

![OJS dashboard view of Archiving page with an option to select PKP PN, LOCKSS or CLOCKSS networks.](./assets/learning-ojs3.1-jm-settings-web-archive.png)

## Langues

OJS is multilingual, which means that the interface, emails, and published content can be available in multiple languages on a single site or journal. Lorsque vous installez OJS, vous pouvez sélectionner une ou plusieurs langues pour votre site.

Sous Paramètres du site Web > Langues, vous pouvez voir une liste des langues ou des paramètres régionaux installés sur votre site et configurer la façon dont les langues sont utilisées dans votre journal. Additional languages can be installed on your site by an Administrator – see [Chapter 4](https://docs.pkp.sfu.ca/learning-ojs/en/site-administration) for details.

![OJS dashboard view of Languages menu with English and French options, English option selected as primary locale.](./assets/learning-ojs3.1-jm-settings-web-lang.png)

**Paramètres Régionaux Principaux**: une langue doit être définie comme paramètres régionaux principaux, ce qui signifie la langue dans laquelle le journal apparaît par défaut.

**Interface d'utilisateur** : si vous souhaitez que l'interface de la revue soit disponible dans d'autres langues, sélectionnez-les ici.

**Soumission**: si vous voulez que les auteurs puissent soumettre des soumissions dans d'autres langues, sélectionnez-les ici.

**Formulaires**: Cela permettra à toutes les langues sélectionnées d'être disponibles lors du remplissage des formulaires en ligne.

Cette section vous permet de configurer vos menus de navigation, par exemple pour inclure de nouveaux liens.

## Plugiciels

Utilisez cette page pour voir tous les plugiciels installés et trouver de nouveaux plugiciels.

### Galerie de Plugiciels

Tous les plugiciels répertoriés ici sont disponibles dans votre installation OJS. Cochez le lien Activer pour les utiliser.

![OJS dashboard view of Plugins menu with the tab for installed plugins selected.](./assets/learning-ojs3.1-jm-settings-web-plugins.png)

Vous remarquerez que certains plugiciels sont requis pour le système et ne peuvent pas être désactivés.

Parfois, les nouveaux plugiciels ou plugiciels développés par des personnes extérieures à PKP n'apparaissent pas dans la galerie des plugiciels et vous devez les installer séparément.

### Plugiciels Externes

La Galerie de Plugiciels donne accès à des plugiciels créés en externe, qui peuvent ne pas être inclus dans votre installation OJS, mais sont disponibles pour téléchargement et activation. Seul un utilisateur administrateur peut installer un nouveau plugiciel.

![OJS dashboard view of Plugins menu with the tab for plugin gallery selected.](./assets/learning-ojs3.1-jm-settings-web-plugins-gallery.png)

La sélection du titre du plugiciel fournira des détails supplémentaires, y compris l'auteur, le statut, la description et la compatibilité.

![Ce plugiciel peut être activé dans la galerie de plugiciels.](./assets/learning-ojs3.1-jm-settings-web-plugins-gallery-hypo.png)

### Plugiciels d'Amélioration du Contenu et de Découverte

Veuillez noter que vu que PKP ne gére pas de plugiciels tiers, nous ne pouvons pas garantir qu'il fonctionnera avec votre version d'OJS.
1. Download the tar.gz file or .zip file of the plugin from its repository.
2. Accédez à l'onglet Plugiciels Installés.
3. En haut à droite, cliquez sur Télécharger un nouveau plugiciel.
4. Téléverser le fichier du plugiciel.
5. Une fois le téléversement terminé, cliquez sur Enregistrer. Donnez-lui un peu de temps pour l'installation.

Si le téléchargement échoue, vous pouvez recevoir un message d'erreur indiquant: "L'archive du plugin téléchargé ne contient pas de dossier correspondant au nom du plugiciel." Habituellement, cela signifie que vous devez changer le nom du dossier du plugiciel dans le dossier zippé en un nom plus simple. Par exemple, remplacez «traducteur-ojs-3_0_0-0» par «traducteur».

## Annonces

This section allows you to create and display news announcements on the journal's website.

![OJS dashboard view of Announcements menu with an option to enable and display announcements.](./assets/learning-ojs3.1-jm-settings-web-announce.png)

**Announcements**: Configure how announcements will appear on your journal website.

**Announcement Types**: You can create different types of announcements \(e.g., News, New Issue Alert, etc.\). Use the _Add Announcement Type_ link to create them.

**Announcements**: Use the _Add Announcement_ link to create a new announcement for your Announcements page.

## Menus de Navigation

This section allows you to configure your navigation menus, such as including new links.

![OJS dashboard view of Navigation Menu with user and primary menus and an option to add or edit navigation menu items.](./assets/learning-ojs3.1-jm-settings-web-navmenu.png)

**Navigation Menus**: Configure the User Menu \(which includes Language, View Site, and Username\) or the Primary Menu \(on the journal home page, including Current, Archive, About, etc.\).

Certains types d'éléments de menu ne seront affichés que sous certaines conditions. Par exemple, le type d'élément de menu Connexion sera lié à votre page de connexion, mais il n'apparaîtra dans le menu que lorsque le visiteur de votre site Web sera déconnecté. De même, le type d'élément de menu Déconnexion n'apparaîtra que lorsqu'un visiteur du site Web est connecté.

Lorsque vous attribuez à un élément de menu des conditions d'affichage à un menu, vous verrez une icône d' un œil avec une barre oblique en dessus. Vous pouvez cliquer sur cette icône pour en savoir plus sur le moment où l'élément sera affiché ou masqué.

**Éléments du Menu de Navigation**: Ce sont des liens programmés que vous pouvez ajouter à l'un des menus ci-dessus. If you wish to add a link to the Primary Menu \(e.g., "Our Society"\), add it here using the _Add Item_ link.

![Add item screen with item title and remote URL filled out.](./assets/learning-ojs3.1-jm-settings-web-navmenu-add.png)

L'l'élément apparaîtra maintenant dans la liste des éléments du menu de navigation. Next, go to the desired Navigation Menu \(e.g., Primary\), use the blue arrow to reveal the options, and choose Edit. Vous pouvez maintenant le faire glisser et le déposer des éléments de menu non attribués vers les éléments de menu attribués et à l'emplacement approprié dans le menu.

![Primary navigation area with a list of assigned and unassigned menu items.](./assets/learning-ojs3.1-jm-settings-web-navmenu-add-nav.png)

Cette section vous permet de créer et d'afficher des annonces de nouvelles sur le site Web de la revue.

<hr />

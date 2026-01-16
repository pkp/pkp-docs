---
noindex: true
---
# Fournir une clé API

Veuillez suivre ces instructions lorsque l'équipe de Coalition Publica vous le demande. Cette configuration supplémentaire est nécessaire pour permettre à Érudit d'accéder au contenu dans les cas suivants :  
* la revue utilise OJS pour publier du contenu requérant un abonnement ;
* la revue utilise OJS pour la gestion éditoriale sans publier ;
* la revue a choisi la production XML du texte intégral et Érudit a besoin d'accéder aux fichiers prêts pour la production pour moissonnage. 

Il est également requis que votre instance OJS soit à la **[version de soutien à long terme (Long-term Support)](https://pkp.sfu.ca/software/ojs/download/) ou plus récente.**

**Ces étapes ne sont pas requises si vous utilisez OJS pour publier une revue en libre accès.**

## Étapes de l’Administrateur de site

Les étapes suivantes peuvent être effectuées dans OJS par les utilisateurs ayant le rôle d'administrateur de site ou de Directeur de revue **après** qu'un administrateur de système a suivi les étapes pour l'administrateur de système de ce document, notamment *Étape 3. Assurez-vous d'avoir saisi un secret de clé API*.

### Étape 1. Créer un Responsable des abonnements

Lors de cette étape, vous allez configurer un nouvel utilisateur qui aura un rôle de Responsable des abonnements. Si le rôle de Responsable des abonnements existe déjà sur votre instance, vous pouvez utiliser ce compte et sauter cette étape. Notez que pour des raisons de sécurité, il est toutefois déconseillé d’utiliser un compte lié à un rôle autre que celui de Responsable des abonnements (il vaut mieux que ce compte n’ait qu’un rôle, celui de Responsable des abonnements). Par la suite, vous permettrez à Érudit d’utiliser ce rôle lors de la récupération du contenu de votre instance OJS en lui fournissant le ​*API key secret*​ associé à ce compte utilisateur.

Connectez-vous en tant que Directeur de la revue ou Administrateur du site, déplacez-vous sous “Utilisateurs et Rôles > Utilisateurs”. Utilisez le bouton “Ajouter un utilisateur” pour créer un nouveau compte utilisateur.

Remplissez le formulaire et appuyez sur “Sauvegarder”. Bien que nous recommandions d’utiliser des informations réelles lors de la création des utilisateurs pour votre revue, ce n’est pas obligatoire. L’important est de remplir les champs obligatoires et de vous rappeler du nom d’utilisateur et du mot de passe que vous avez utilisés pour passer à la prochaine étape.

La deuxième étape de la création d’un utilisateur consiste à lui attribuer un rôle. Dans la liste des “Rôles de l’utilisateur”, assurez-vous de cocher “Gestionnaire d’abonnement”. Sauvegardez.

Ceci complète le processus de création d’un utilisateur. Rappelez-vous du nom d’utilisateur et du mot de passe que vous avez utilisés lors de la création du compte.

### Étape 2. S’assurer d’avoir saisi un API key secret

Déconnectez-vous de votre instance OJS et connectez-vous de nouveau en utilisant les paramètres d’accès du compte Gestionnaire d’abonnement que vous avez créé à l’étape 2.

Allez à votre Profil utilisateur (typiquement disponible dans le coin en haut à droite). Ouvrez l’onglet “​*API Key*”​ :

![Menu profil avec l'onglet Clé API sélectionné qui a des options pour activer l'accès API ou générer une nouvelle clé API.](./assets/apiKey.png)

Il pourrait y avoir déjà du contenu dans la zone “​*API Key*”​ . Si c’est le cas, ignorez-le.

Utilisez ce formulaire de la manière suivante:

1. Cochez la case “​*Enable external applications with the API key to access this account*”​.
2. Cochez la case “​*Generate new API key*”​.
3. Appuyez sur le bouton “​*Save*”​.
4. Décochez la case “Generate new API key”.
5. Appuyez sur le bouton “​*Save*”​.

Ceci fait, la zone “​*API Key*​” devrait maintenant avoir une longue chaîne de lettres et chiffres.  Cette clé permettra à Érudit d'effectuer des actions en tant que cet utilisateur nouvellement créé et de télécharger du contenu sous embargo ou non publié. Copiez celle-ci et fournissez-la par courriel à votre contact Coalition Publica. **Veillez à décocher la case "Générer une nouvelle clé API" pour éviter que la clé que vous partagez avec Coalition Publica ne soit écrasée par inadvertance.**

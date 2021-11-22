- - -
noindex: true
- - -
# Abonnements et utilisation d’OJS sans publication

Si vous utilisez OJS pour publier du contenu requérant un abonnement ou si vous utilisez OJS pour la gestion éditoriale sans publier, une configuration supplémentaire est nécessaire afin de permettre à Érudit d’accéder à votre contenu. Il est également requis que votre instance OJS soit à la version ​**OJS 3.1.2-1 ou plus récente**​.

**Ces étapes ne sont pas requises si vous utilisez OJS pour publier une revue en libre accès.**

## System Administrator Steps

The following step requires back-end access to OJS by a system administrator. You may need to contact your hosting provider or technical lead to perform this step.

### Étape 1. S’assurer d’avoir saisi un API key secret

This step requires access to a file on the server on which OJS is installed and must be performed by a system administrator.

Dans votre fichier de configuration OJS (​`config.inc.php`​ dans le répertoire d’installation de votre OJS) vous trouverez une directive appelée “`api_key_secret`​”. Par défaut, ce paramètre est vide. Si c’est le cas, modifiez-le pour qu’il contienne une séquence de 32 caractères ou plus (n’importe quelle lettres et symboles). Votre instance OJS en sera plus sécurisée lors de l’utilisation des ​*API keys​*.

Vous n’aurez pas à mémoriser la valeur de ce paramètre, mais si vous le perdez, tous ceux utilisant les ​*API keys​* (tel que celui que nous génèrerons à la prochaine étape) devront en obtenir une nouvelle.

Un coup le paramètre renseigné, sauvegardez le fichier.

## Site Administrator Steps

The following steps can be performed within OJS by users with the Journal Manager or Site Administrator role.

## Étape 2. Créer un Responsable des abonnements

Lors de cette étape, vous allez configurer un nouvel utilisateur qui aura un rôle de Responsable des abonnements. Si le rôle de Responsable des abonnements existe déjà sur votre instance, vous pouvez utiliser ce compte et sauter cette étape. Notez que pour des raisons de sécurité, il est toutefois déconseillé d’utiliser un compte lié à un rôle autre que celui de Responsable des abonnements (il vaut mieux que ce compte n’ait qu’un rôle, celui de Responsable des abonnements). Par la suite, vous permettrez à Érudit d’utiliser ce rôle lors de la récupération du contenu de votre instance OJS en lui fournissant le ​*API key secret*​ associé à ce compte utilisateur.

Connectez-vous en tant que Directeur de la revue ou Administrateur du site, déplacez-vous sous “Utilisateurs et Rôles > Utilisateurs”. Utilisez le bouton “Ajouter un utilisateur” pour créer un nouveau compte utilisateur.

Remplissez le formulaire et appuyez sur “Sauvegarder”. While we recommend using legitimate contact credentials for your journal, it does not matter what user details you use, as long as the required form fields are complete and you are able to remember the username and password for the next step.

Next, you will be presented with a list of User Roles. Make sure you check “Subscription Manager”. Press “Save” to complete  the user creation process.

Ceci complète le processus de création d’un utilisateur. Rappelez-vous du nom d’utilisateur et du mot de passe que vous avez utilisés lors de la création du compte.

## Étape 3. Générer une API Key

Déconnectez-vous de votre instance OJS et connectez-vous de nouveau en utilisant les paramètres d’accès du compte Gestionnaire d’abonnement que vous avez créé à l’étape 2.

Navigate to your user Profile (typically available in the top-right corner).

Open the “API Key” tab:

![Profile menu with API Key tab selected that has options to enable API access or generate a new API key.](./assets/apiKey.png)

Il pourrait y avoir déjà du contenu dans la zone “​*API Key*”​ . Si c’est le cas, ignorez-le.

Utilisez ce formulaire de la manière suivante:

1. Cochez la case “​*Enable external applications with the API key to access this account*”​.
2. Cochez la case “​*Generate new API key*”​.
3. Appuyez sur le bouton “​*Save*”​.
4. Uncheck the “Generate new API key” checkbox.
5. Appuyez sur le bouton “​*Save*”​.

With this, the “API Key” box should contain a long string of numbers and letters. This key will allow Érudit to perform actions as this newly-created user and download embargoed or unpublished content. Copiez celle-ci et fournissez-la par courriel à votre contact Coalition Publica. **Please be sure to uncheck the “Generate new API key” checkbox to prevent the key you share with Coalition Publica from inadvertently being overwritten.**

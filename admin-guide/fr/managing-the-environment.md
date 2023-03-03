# Gestion de l'environnement du serveur

Gérer une application PKP signifie généralement:

- s'assurer que les exigences du système sont respectées;
- configurer correctement le système et l'application pour qu'ils fonctionnent correctement;
- gérer le processus d'installation et de mise à niveau.

Les applications PKP sont des applications Web PHP / MySQL relativement simples, et peuvent être exécutées à peu près n'importe où, à condition qu'une version relativement récente de PHP et de MySQL soit disponible. D'autres options de configuration (par exemple PostgreSQL, MS SQL) sont également possibles.

Les packages pour le téléchargement  des applications PKP peuvent être téléchargés à partir du site Web de PKP aux emplacements suivants:

- OJS: [https://pkp.sfu.ca/ojs/ojs_download](https://pkp.sfu.ca/ojs/ojs_download)
- OMP: [https://pkp.sfu.ca/omp/omp_download](https://pkp.sfu.ca/omp/omp_download)
- OCS: [https://pkp.sfu.ca/ocs/ocs_download](https://pkp.sfu.ca/ocs/ocs_download)

Toutes les applications sont livrées avec un ensemble complet de documentation de configuration, d'installation et de mise à niveau, qui se trouve dans le répertoire `docs/` inclus dans le package du téléchargement. Ceux-ci doivent être consultés en tant que ressource principale pour toute question de configuration, d'installation ou de mise à niveau, et doivent être revus périodiquement (en particulier dans le cadre de tout processus de mise à niveau). PKP fournit ces guides sur le Web et nous fournissons des liens rapides ci-dessous.

## Solutions d'hébergement

Si vous n'avez pas l'expertise, le personnel ou le désir d'installer et de gérer OJS vous-même, PKP Publishing Services fournit des solutions d'hébergement complètes à un certain nombre de prix. Pour plus d'informations, consultez le [site Web PKP Publishing Services](https://pkpservices.sfu.ca) .

## Exigences du système et installation

Les détails sur la configuration système requise, les recommandations de configuration et les instructions générales d'installation se trouvent dans les différents fichiers README de l'application:

- OJS: [https://pkp.sfu.ca/ojs/README](https://pkp.sfu.ca/ojs/README)
- OMP: [https://pkp.sfu.ca/omp/README](https://pkp.sfu.ca/omp/README)
- OCS: [https://pkp.sfu.ca/ocs/README](https://pkp.sfu.ca/ocs/README)

## Mise à jour

Les instructions sur la mise à jour se trouvent aux emplacements suivants:

- OJS: [https://pkp.sfu.ca/ojs/UPGRADE](https://pkp.sfu.ca/ojs/UPGRADE)
- OMP: [https://pkp.sfu.ca/omp/UPGRADE](https://pkp.sfu.ca/omp/UPGRADE)
- OCS: [https://pkp.sfu.ca/ocs/UPGRADE](https://pkp.sfu.ca/ocs/UPGRADE)

## Installation et gestion des applications via Git

L'utilisation de Git pour gérer votre logiciel PKP vous donne un meilleur contrôle sur les mises à jour et les corrections de bogues du référentiel PKP officiel. En utilisant Git, vous pouvez créer des branches locales pour personnaliser votre code, vérifier et tester les dernières modifications apportées à la version de votre logiciel, restaurer votre code plus facilement et créer des requêtes d'extraction vers le référentiel PKP à partager avec la plus large communauté .

Les installations OJS et OMP gérées avec Git nécessitent l'installation et l'utilisation de [Node.js](https://nodejs.org/en/) et de [Composer](https://getcomposer.org/) . Les deux outils sont nécessaires pour mettre à jour les dépendances utilisées par la bibliothèque PKP. Actuellement, OCS ne nécessite pas ces outils.

Les instructions d'installation via Git se trouvent directement dans nos référentiels GitHub aux emplacements suivants:

- OJS: [https://github.com/pkp/ojs](https://github.com/pkp/ojs)
- OMP: [https://github.com/pkp/omp](https://github.com/pkp/omp)
- OCS: [https://github.com/pkp/ocs](https://github.com/pkp/ocs)

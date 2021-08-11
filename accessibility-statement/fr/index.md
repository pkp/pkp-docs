---
generateHeadingToc: true
---

# Énoncé d’accessibilité du thème par défaut d’OJS 3.3+

## Introduction

Le Public Knowledge Project (PKP) s’engage à faire en sorte que ses plateformes soient aussi accessibles que possible pour tous les utilisateurs. Pour y parvenir, un nouveau thème par défaut d’OJS a été développé par PKP pour OJS 3.3 et les versions qui suivent, et a fait l’objet d’un audit sur les obstacles à l’accessibilité.

## Information sur l’audit

Un audit du thème par défaut destiné au public sur la version 3.3 d’OJS a été réalisé par Access Changes Everything Inc., une entreprise canadienne de conseil en accessibilité numérique, de juillet 2019 à mars 2021. Access Changes Everything Inc. a fourni deux audits en utilisant plusieurs vérificateurs automatisés et en effectuant des tests manuels approfondis pendant le processus de développement. En outre, des vérifications approfondis ont été effectués par des testeurs rémunérés en situations de handicap différents, qui ont utilisé différentes technologies au cours du processus; ces technologies sont énumérées ci-dessous. Certains de ces mêmes testeurs ont également participé au processus de test final.

Cet audit s’est concentré sur la réduction des obstacles sur le thème par défaut pour les personnes en situation de handicap visuel, auditif, de mobilité, d’élocution, de communication, cognitifs, neurologique, intellectuel, d’apprentissage ou d’une combinaisons de difficultés.

### Informations sur les normes

Cet audit a été réalisé à l’aide de la norme international relative à l’accessibilité du thème par défaut d’OJS, les règles pour l’accessibilité des contenus Web (WCAG) 2.1 et 2.2, niveau AA. Notez que la version 2.2 n’était qu’une ébauche, en date de mai 2020.

L’audit est allé bien au-delà des WCAG 2.1 ou WCAG 2.2 (version préliminaire) niveau AA. Il a inclus des éléments qui ne sont pas actuellement inclus dans les WCAG, comme le daltonisme, le type et le style de police, et la réduction des obstacles qui ont un impact sur les personnes en situations de troubles cognitifs, neurologiques, intellectuels et/ou d’apprentissage. L’audit a également porté sur les meilleures pratiques d’utilisation, afin de rendre le site plus accessible et utilisable par tous.

L’audit comprenait des tests dans les domaines suivants :

* Contenu textuel
* Contenu visuel
* Contenu vidéo et audio
* Couleur dans le contenu et la conception
* Mise en page et présentation du contenu
* Conception des pages et du contenu
* NavigationFonctions de recherche
* Widgets et plugins
* Formulaires et mécanismes d’erreur
* Structure du contenu
* Utilisation des codes HTML et CSS


### Les testeurs et les technologies

Access Changes Everything Inc. a payé plusieurs testeurs en situations de handicap différentes, qui utilisent différentes technologies d’accommodation, pour tester différentes parties du thème par défaut d’OJS 3.3. Les technologies utilisées par les testeurs comprenaient les versions les plus récentes, ainsi que des versions plus anciennes, de :

* Logiciel de lecture d’écrans JAWS dans les navigateurs Chrome et EDGE (PC et tablette)
* Logiciel de lecture d’écran JAWS dans le navigateur Internet Explorer avec l’afficheur braille PacMate 20 (PC)
* Logiciel de lecture d’écran NVDA dans le navigateur Chrome (PC)
* Logiciel de lecture d’écran Microsoft Narrator dans EDGE
* Logiciel de lecture d’écran VoiceOver d’Apple dans Safari (iPhone 6)
* Logiciel de lecture d’écran VoiceOver d’Apple dans Safari avec affichage braille à 40 cellules (Mac)
* Logiciel de lecture d’écran Apple VoiceOver dans Safari avec affichage braille à 40 cellules (iPad Pro)
* Dragon Naturally Speaking Premium 13 (PC)

Access Changes Everything Inc. a utilisé un Mac, un PC et un iPhone pour tester le site avec les navigateurs Chrome et Firefox. Certaines technologies ont été utilisées lors de la vérification :

* Agrandissement du navigateur (100 %-400 %)
* Décalage du contraste des couleurs
* Commande vocale (iPhone uniquement)
* Petit écran (iPhone SE ou 5 uniquement)
* Diverses applications et plugins pour Mac Chrome et Firefox afin de simuler des situations de handicaps visuels et cognitifs

### Mesures correctives et obstacles restants

Suite à la réception du rapport d’audit complet en décembre 2019, PKP a créé le [projet GitHub sur l’accessibilité](https://github.com/pkp/pkp-lib/projects/16) pour assurer le suivi des problèmes et des progrès réalisés en vue de leur résolution. Le projet est également ouvert aux membres de la communauté pour déposer les problèmes liés à l’accessibilité de l’interface utilisateur et des fonctionnalités de la plateforme. 

En 2021, Access Changes Everything Inc. a effectué un audit de suivi du thème par défaut pour évaluer les mesures correctives prises par les développeurs de PKP. La plupart des problèmes identifiés dans le rapport initial ont été résolus par PKP, ou des solutions de rechange acceptables ont été suggérées par Access Changes Everything Inc.

Il reste quelques obstacles qui n’ont pas pu être entièrement éliminés. Ceux-ci sont soit en train d’être travaillés par PKP, soit peuvent être abordés par la manière dont OJS est utilisé par les revues :

* reCAPTCHA. Lorsqu’il est activé sur la page d’inscription de l'utilisateur, le reCAPTCHA présente un obstacle majeur pour les utilisateurs de logiciels de lecture d’écran avec des appareils braille et les utilisateurs de VoiceControl sur iPhone. En outre, reCAPTCHA est dépourvu d’un titre iFrame et d’un étiquette de formulaire, de sorte que même les utilisateurs de logiciels de lecture d’écran qui peuvent l’utiliser peuvent rencontrer des obstacles.

reCAPTCHA est un système Captcha et un service tiers développé par Google et intégré comme une fonctionnalité optionnelle d'OJS qui peut être désactivée. Des alternatives existent, comme le plugin [OJS Honeypot plugin](https://github.com/ulsdevteam/pkp-formHoneypot).

* Contenu. Le contenu du site Web et le contenu publié créés d’une manière non-conforme aux normes d’accessibilité peuvent présenter des obstacles pour les utilisateurs. Cela peut inclure, sans s’y limiter : des images téléchargées sans texte alternatif, des titres mal structurés, des hyperliens inaccessibles, des légendes de figures manquantes et une structure de tableau de données incorrecte ou incomplète. Bien que ces éléments soient hors de portée du thème par défaut accessible, PKP fournit des conseils aux rédacteurs sur [la création de contenu accessible](https://docs.pkp.sfu.ca/accessible-content/).
* Obstacles restants. Les autres obstacles restants sont répertoriés dans [le projet GitHub sur l’accessibilité de PKP](https://github.com/pkp/pkp-lib/projects/16) qui continuera d’être mis à jour au fur et à mesure que les obstacles seront résolus..

## Nous joindre

L’audit du thème par défaut d’OJS a soulevé de nombreux obstacles dont la plupart ont été éliminés. Cependant, le thème sera constamment mis à jour et de nouveaux obstacles peuvent être créés à notre insu. Si vous rencontrez des obstacles, ou si vous avez besoin d’aménagements, veuillez nous le signaler via le  [formulaire de contact du site web de PKP](https://pkp.sfu.ca/contact-us/).

## Clause de non-responsabilité légale

Dans la mesure maximale permise par la loi applicable, le Simon Fraser University ou l’une de ses sociétés affiliées, ou l’une de leurs gouverneurs, directeurs, employés ou agents respectifs, ne sera en aucun cas responsable de l’incapacité du contenu des applications mettant en œuvre ce thème à respecter ces normes d’accessibilité, dans la mesure où ce contenu a été soumis ou téléchargé par une tierce partie.

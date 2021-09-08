# Autres utilisations d'OJS

OJS peut être utilisé pour l'ensemble du processus de gestion des revues, des soumissions jusqu'à la publication finale des numéros. Cependant, certaines revues choisissent d'utiliser OJS pour une seule étape de publication - par exemple, pour gérer le flux des travaux des soumissions lors de la publication ailleurs sur un site externe, ou de publier des travaux sur le site OJS lorsque le flux des travaux est géré en dehors d'OJS. OJS peut également être utilisé pour publier les travaux de la conférence, et certaines revues choisissent de publier article par article plutôt que de collecter des articles dans un numéro avant la publication. Nous avons décrit chacun de ces cas d'utilisation ci-dessous.

## Utiliser OJS uniquement pour le flux des travaux des soumissions

Votre journal peut choisir d'utiliser OJS pour gérer le flux des travaux des soumissions et coordonner les communications entre les rédacteurs et les auteurs au fur et à mesure que le travail passe par la soumission, l'évaluation par pairs, la révision et d'autres aspects du flux de travail éditorial et de publication. Si vous utilisez uniquement OJS pour gérer votre flux de travail des soumissions et pas pour publier votre contenu, vous pouvez faire ce qui suit :

1. Dans le paramètre **Paramètres** > **Distribution** > **Accès** sélectionnez « OJS ne sera pas utilisé pour publier en ligne le contenu du journal».
2. Dans les **Paramètres** > **Distribution** > **Accès** désactivez OAI (Open Archives Initiative) pour empêcher les services d'indexation de récolter les métadonnées du journal. 

Voir [Apprendre OJS > Paramètres de distribution > Accès](https://docs.pkp.sfu.ca/learning-ojs/en/settings-distribution#access) pour plus d'informations et instructions pour modifier ces paramètres.

Une fois que ces paramètres sont activés, vous pouvez continuer avec le flux de travail de publication.

Il est recommandé que même si vous ne publiez pas vos articles ou numéros de revue sur votre site OJS, que vous les « publiez » toujours dans OJS et complétez le flux de travail éditorial pour chaque soumission. Cela enregistrera dans quel numéro l'article a été publié dans OJS créera un indicateur interne indiquant que tous les articles dans un seul numéro ont été publiés ensemble, qui est utile pour faire le suivi et la tenue des dossiers. Il effacera les soumissions dans la file d’attente « active » et les déplacera vers les « archives », ce qui empêchera la file d’attente « active » de devenir ingérable au fur et à mesure que de nouvelles soumissions seront ajoutées pour le prochain numéro.

De plus, si vous utilisez un outil comme le [Plugiciel ORCID Profile](https://docs.pkp.sfu.ca/orcid/en/) ou le [PKP PN](https://docs.pkp.sfu.ca/pkp-pn/), il enverra les enregistrements à leurs sources externes respectives, car l'action d'envoi est déclenchée lorsqu'un numéro est publié.

## Utiliser OJS uniquement pour la publication

Votre journal peut choisir d'utiliser OJS pour la publication finale du journal tout en gérant le flux de travail éditorial en dehors d'OJS.

Vous pouvez contourner le flux de travail en OJS en utilisant le plugiciel QuickSubmit ([Apprendre OJS > Outils > Plugiciel Quick Submit](https://docs.pkp.sfu.ca/learning-ojs/en/tools#quick-submit-plugin)). Cela vous permettra de télécharger des fichiers prêts à la publication directement à un numéro et de cliquer sur « Publier » , sans envoyer chaque soumission à travers les étapes de l'évaluation, de la révision et de la production.

Vous devriez également désactiver les soumissions sur votre site OJS pour empêcher les auteurs d'y soumettre leur travail par inadvertance. Pour désactiver les nouvelles soumissions dans le journal, vous devez être dans le rôle de directeur de journaul. Il y a deux façons de faire :

- Désactiver la soumission par section [comme décrit dans le guide d'apprentissage pour OJS 3](https://docs.pkp.sfu.ca/learning-ojs/en/journal-setup#create-section)
- Retirez le « Créer un bloc de soumission» de l’interface utilisateur dans [Paramètres > Site Web > Apparence > Configuration > Barre latérale](https://docs.pkp.sfu.ca/learning-ojs/en/settings-website#setup) et/ou désactivez le bloc « Faire une soumission» dans [Paramètres > Site Web > Plugiciels](https://docs.pkp.sfu.ca/learning-ojs/en/settings-website#installed-plugins)

## Utiliser OJS pour publier les actes d'une conférence

PKP a gelé le développement de Open Conference Systems (OCS), notre logiciel de gestion de conférence original, en 2018, afin de concentrer nos ressources de développement sur OJS, OMP et OPS. OJS peut être utilisé pour publier les aces d'une conférence, mais vous devrez utiliser un site séparé pour gérer l'enregistrement et la planification de la conférence. Pour plus de détails, veuillez consulter notre [FAQ](https://docs.pkp.sfu.ca/faq/en/software-features#can-i-use-ojs-to-publish-conference-proceedings-what-happened-to-ocs) sur ce sujet.

Parmi les considérations relatives à la publication des actes d'une conférence figurent :

- Utiliserez-vous l'OJS pour l'évaluation par pairs et l'révision les acte de la conférence, ou simplement pour la publication finale? Voir « Utiliser OJS uniquement pour la publication » si vous ne prévoyez pas d’utiliser le flux de travail éditorial.
- Allez-vous publier des enregistrements vidéo ou audio des sessions, ou simplement des articles de conférence et / ou PowerPoints? Consultez notre [documentation OJS sur la publication de fichiers multimédia](https://docs.pkp.sfu.ca/learning-ojs/en/production-publication#multimedia-files) pour des informations sur la publication de fichiers audio et vidéo.
- Vous devrez peut-être modifier les étiquettes dans le journal pour indiquer que le site est pour une « conférence» plutôt que pour un « journal». Vous pouvez utiliser le [Plugiciel de localisation personnalisé](https://docs.pkp.sfu.ca/translating-guide/en/customize-locale) pour personnaliser le texte affiché dans le site du journal.

## Publication Continue

OJS est actuellement conçu pour un modèle d'édition traditionnel où les articles sont publiés dans des numéros. Cependant, la publication continue est un moyen alternatif populaire de publier des recherches savantes, dans lesquelles les articles sont publiés au fur et à mesure qu'ils sont prêts. Vous pouvez utiliser un modèle de publication continue dans OJS.

Pour plus d'informations sur la mise en place de votre journal pour une publication continue, voir [Apprendre OJS > Production et Publication > Publication continue](https://docs.pkp.sfu.ca/learning-ojs/en/production-publication#continuous-publishing)

# Statistiques

Ce chapitre du Guide de l'administrateur fournit un aperçu général des statistiques dans Open Journal Systems (OJS) et par extension dans Open Monograph Press (OMP). Le genre de statistiques disponibles dans OJS 3.2 et dans des versions ultérieures sont les Articles, l'Activité Rédactionnelle et les Utilisateurs-trices. Il existe également une section Générateur de Rapports pour produire divers rapports à partir de certaines des données disponibles.

The statistics features of OJS, OMP and OPS allow you to view different numbers that indicate the activity, access, and downloads of various aspects of your site, including article and abstract views, editorial activity, and user counts separate by role. This guide provides information on the statistics framework used, various statistics-related configurations, log files, and legacy information for OJS 2 statistics and the OJS 2 statistics methodology.

L'élaboration de ce chapitre a été financée par le gouvernement du Canada grâce à une subvention du Patrimoine Canadien et par l'Association Canadienne des Revues Savantes / Canadian Association of Learned Journals. Public Knowledge Project a fourni une aide en nature supplémentaire pour le développement de ce projet.


![Funded by the Government of Canada logo.](https://lh5.googleusercontent.com/roq7_6Ck6BNqkpPKetR8zxiRaRljhCR5Z240OzY6l7ZC61st_8AT8VNAYfMY7S8mZceMF0sJjrtu-h0E3FhYQ9PiwCKvjzJzNAPR6fCEmjMMEv7JaF8oaiuYmjNj68bgbPGnCM2w)


## Définitions

«Qu'est ce qui compte comme une consultation» semble être une question assez simple lorsqu'on considère les métriques d'utilisation d'articles, mais il existe de nombreuses façons de fournir - ou de compliquer - la réponse. La réponse à cette question dépend du mécanisme de comptage utilisé (par exemple, Google Analytics vs hits de fichiers journaux vs métriques filtrées), si la tentative d'examen des données historiques couvre différentes méthodologies et si ces méthodologies ont été configurées correctement ou pas.

Ce manuel sert principalement à expliquer, en détail, comment configurer, utiliser et dépanner le Cadre de Statistiques d'Utilisation de PKP. Il contient également des informations sur d'autres méthodes de collecte de statistiques prises en charge par OJS.


## Introduction au Cadre des Statistiques

Dans la plupart des cas, le Cadre des Statistiques devrait «simplement fonctionner», en particulier avec de nouvelles installations. De la même manière, un certain nombre d'options de configuration s'offrent à vous, et elles doivent être évaluées après l'installation ou la mise à niveau. Vous devez également mettre en place une sorte de mécanisme pour exécuter des tâches planifiées afin que les statistiques d'utilisation soient traitées régulièrement.

**Remarque pour les Directeurs de Revue et les Rédacteurs: ** la plupart des étapes suivantes sont considérées comme du niveau expert et ne doivent être effectuées que par les administrateurs du site et ceux du système. Si vous avez des questions sur les problèmes plus avancés présentés ici, consultez votre fournisseur de services. La principale exception à cela est l'option d'Affichage des Statistiques décrite dans la section suivante. Si vous souhaitez afficher publiquement les statistiques d'utilisation des articles sur les pages de résumé d'article, vous pouvez activer cette option.

Vous devrez prendre en compte trois étapes de configuration: la configuration du plugiciel de statistiques d'utilisation, la configuration des tâches planifiées et la configuration du suivi des données régionales, si vous souhaitez suivre les données régionales. (OJS peut suivre les données de pays, de région et de ville.)

Cette section ne concerne que ceux qui utilisent OJS 2.4.3+ et OJS 3.0+. Les anciennes versions d'OJS n'ont pas ce cadre et n'ont pas besoin de configuration.


### OJS et les Statistiques: Un Peu d'Histoire

OJS 2.4.3+ et 3+ incluent un Pugiciel de Statistiques d'Utilisation générique qui est responsable de la façon dont ces statistiques sont consignées et enregistrées dans le système. Les configurations par défaut du plugiciel sont raisonnables et fonctionnent pour la plupart des cas d'utilisation, bien que vous souhaitiez les revoir après avoir installé ou mis à niveau OJS.  Pour activer la collecte des données d'utilisation, assurez-vous que ce plugiciel est activé.

Les paramètres du plugiciel peuvent être trouvés dans OJS 2 en accédant à Accueil d'Utilisateur > Directeur-trice de la Revue > Plugiciels de Système > Plugiciels Génériques > Plugiciel de Statistiques d'Utilisation > Paramètres.

Afin de générer des rapports dans OJS 3.x, connectez-vous en tant que Directeur-trice de la Revue et allez dans Outils > Statistiques.

Afin de générer des rapports dans OJS 2.x, connectez-vous en tant que Directeur-trice de la Revue et accédez à l'Accueil Utilisateur > Statistiques et Rapports.

* S'il n'est pas déjà activé, cochez la case à droite du nom du plugiciel.
* Cliquez sur la flèche bleue à côté du plugiciel, puis sur **Paramètres** .
* Activez «Créer des Fichiers Journaux» s'il n'est pas déjà activé.
* Laissez l'option «Analyse du Fichier Journal en Expression Régulière» seule, sauf si vous savez ce que vous faites.
* Laissez l'option «Compresser les archives» désactivée à moins que l'espace du serveur ne soit pris en considération (voir la section Dépannage ci-dessous).
* Laissez l'option «Option de Confidentialité des Données» désactivée, sauf si vous pouvez suivre les instructions fournies.
* Activez les options «Ville» et «Région» et suivez la section sur la Configuration du Suivi des Données Régionales ci-dessous.
* Si elles sont disponibles dans votre installation OJS, envisagez d'activer les Options d'Affichage de Statistiques si vous souhaitez que les consultations de résumé et d'épreuve de base soient disponibles sur les pages de destination des articles. Voir la section ci-dessus Afficher les Statistiques d'Utilisation pour plus d'informations.

### Tableau de comparaison de tous les rapports d'utilisation OJS

Une fois que le Plugiciel de Statistiques d'Utilisation a été activé, vous devez vous assurer que les statistiques sont consignées et traitées dans le cadre des «tâches planifiées» d'OJS. Il existe deux façons de procéder:

#### 1. Activez le plugiciel OJS Acron

Le plugiciel peut être trouvé dans OJS 2 en accédant à l'Accueil Utilisateur > Directeur-trice de la Revue > Plugiciels de Système > Plugiciels Génériques > Plugiciel Acron.

Le plugiciel se trouve dans OJS 3 en accédant à Tableau de Bord > Paramètres > Site Web > Plugiciels > Plugiciels génériques > Plugiciel Acron.

Une fois activé, ce plugiciel devrait entraîner le traitement des fichiers journaux (ainsi que d'autres tâches planifiées, telles que les rappels de révision et d'abonnement).

#### 2. Configurer une tâche cron côté serveur

Il s'agit d'une option plus avancée nécessitant un accès en ligne de commande au serveur et ne doit être configurée que par un administrateur de système expérimenté. Vous devrez créer une tâche cron qui déclenchera le script suivant dans votre répertoire de système OJS:

```text
tools/runScheduledTasks.php
```

Ce script attend un paramètre d'accompagnement sous la forme d'un pointeur vers un fichier XML décrivant la tâche planifiée. Ce fichier diffère selon que vous utilisez des fichiers journaux OJS, des fichiers journaux externes (par exemple, des fichiers journaux Apache) ou des fichiers journaux OJS avec un processus de transfert automatisé. La plupart des revues utiliseront l'option simple «fichier journal OJS» (option 1 ci-dessous). Les commandes complètes sont les suivantes et devront être ajoutées au travail cron du serveur, idéalement pour qu'elles s'exécutent quotidiennement.

**Remarques Spéciales:**

| **Processus**              | **Commande**                                                                                  |
| -------------------------- | --------------------------------------------------------------------------------------------- |
| Consultations Programmées  | php tools/runScheduledTasks.php plugins/generic/usageStats/scheduledTasks.xml                 |
| Consultation               | php tools/runScheduledTasks.php plugins/generic/usageStats/scheduledTasksAutoStage.xml        |
| Statistiques d'Utilisation | php tools/runScheduledTasks.php plugins/generic/usageStats/scheduledTasksExternalLogFiles.xml |

Une fois que vous avez configuré le plugiciel Acron ou une tâche cron, vos statistiques devraient commencer le traitement. Ils ne traitent qu'à des heures définies: une fois toutes les 24 heures si vous utilisez le plugiciel Acron et à n'importe quelle fréquence définie dans le travail cron, si cela est utilisé. Attendez ce laps de temps, puis vérifiez si les statistiques sont maintenant disponibles. Si ce n'est pas le cas, passez à la section Dépannage.

### Tableau de Comparaison de Tous les Rapports de Contenu OJS

Le plugiciel de Statistiques d'Utilisation peut également suivre les données régionales, y compris les informations sur le pays, la région et la ville des visiteurs. This is optional. When deciding whether to collect this information, consider that storing geographical data can take up a lot of space and can also increase processing time when generating reports. Si vous rencontrez des problèmes d'espace ou si vous rencontrez des délais d'attente lors de la tentative de génération de rapports, vous devrez peut-être augmenter les ressources de disque ou de mémoire ou désactiver l'enregistrement de données géographique. **Remarque 3:** Si vous n'activez et ne configurez pas le suivi géographique immédiatement et décidez de l'activer ultérieurement, vous devrez retraiter vos anciens fichiers journaux pour que ces données soient disponibles dans les anciennes statistiques d'utilisation.

**Disponibilité:** OJS 2 uniquement

1. Accédez aux Paramètres> Site Web> Plugiciels
2. Sous Plugiciels Génériques, recherchez le **Plugiciel de Statistiques d'Utilisation** .
3. La configuration côté serveur suivante doit également être en place. Cette étape nécessite un accès en ligne de commande au serveur, et les informations sur le pays et la région ne fonctionneront que si cela a été fait.
   1. Ouvrez une invite shell sur le serveur.
   2. Allez dans le répertoire de base d'installation OJS.
   3. Execute the following commands using the URL obtained from GeoIP for the wget command:

```text
$ wget http://geolite.maxmind.com/download/geoip/database/GeoLiteCity.dat.gz
$ gunzip GeoLiteCity.dat.gz
$ mv GeoLiteCity.dat plugins/generic/usageStats
```

<hr />

## Types de Rapports

### Rapport sur les Consultations Programmées

OJS, par défaut, démarre automatiquement la journalisation des événements d'utilisation dans ses propres fichiers journaux d'accès. Il traite également automatiquement ces fichiers quotidiennement. Ainsi, par exemple, si vous avez installé OJS aujourd'hui à 14h00, le traitement des événements d'utilisation d'aujourd'hui commencerait demain à 14h00. Si vous ne modifiez aucun paramètre, cela se poursuivra sans aucune entrée.

### Rapport de Consultation

Si vous voulez vraiment contrôler le traitement de vos statistiques, vous pouvez aller sur la page de gestion des Plugiciels dans la catégorie Plugiciels Génériques et rechercher le plugin Acron. S'il est désactivé, le traitement automatique s'arrêtera. Lisez les étapes suivantes pour comprendre comment déclencher manuellement le traitement.

OJS doit traiter les fichiers pour pouvoir en extraire des données statistiques. Ce processus peut être effectué à l'aide de l'outil de tâche Chargeur de Fichiers, fourni avec le plugiciel de Statistiques d'Utilisation.

#### Comprendre ce que vous avez: Points Clés à Retenir

La tâche de chargement de fichiers implémente un processus pour gérer de manière fiable tout le traitement des fichiers. Il fonctionne avec 4 dossiers: mise en scène, traitement, archivage et rejet. Chaque fois que le chargeur de fichiers est exécuté, il recherchera les fichiers dans le dossier mise en scène. S'il y en a, il déplacera un fichier vers le dossier de traitement et commencera à travailler dessus. Si quelque chose ne va pas, il enverra un e-mail à l'administrateur de système avec des informations précieuses sur ce qui ne va pas et déplacera le fichier vers le dossier de rejet. Si le traitement s'est bien passé, il déplacera le fichier vers le dossier d'archive. Il continuera ce processus jusqu'à ce qu'il n'y ait plus de fichiers dans le dossier mis en scène.

#### Processus

Le chargeur de fichiers est un outil de tâche planifiée, qui peut être périodiquement appelé à l'aide de [cron](https://help.ubuntu.com/community/CronHowto) ou d'un autre outil de gestion des tâches du système. La commande pour exécuter cette tâche dépend du processus que vous êtes prêt à utiliser:

**Processus de tâche du chargeur de fichiers:**

| **#** | **Processus**                                                                | **Commande**                                                                                  |
| ----- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 1     | Fournit des informations sur les abonnements individuels et institutionnels. | php tools/runScheduledTasks.php plugins/generic/usageStats/scheduledTasks.xml                 |
| 2     | Fichiers journaux OJS avec un processus de transfert automatisé              | php tools/runScheduledTasks.php plugins/generic/usageStats/scheduledTasksAutoStage.xml        |
| 3     | Fichiers journaux externes                                                   | php tools/runScheduledTasks.php plugins/generic/usageStats/scheduledTasksExternalLogFiles.xml |

**Disponibilité:** OJS 2 et 3

Les processus 1 et 3 nécessitent que les fichiers soient déplacés dans le dossier mis en scène (qu'il s'agisse d'un fichier journal Apache ou d'un fichier journal OJS). Le processus 2 déplace déjà automatiquement les fichiers journaux OJS dans le dossier mis en scène, la commande n'a donc qu'à être exécutée.

Tout le reste est géré par la tâche du chargeur de fichiers. Si cette tâche n'est pas planifiée pour une exécution automatique à l'aide de cron ou d'un mécanisme similaire, elle devra être exécutée manuellement.

Notez que pour tout processus que vous choisissez, vous pouvez déplacer des fichiers dans le dossier mis en scène à tout moment, même pendant l'exécution de la tâche planifiée. Vous pouvez également déplacer n'importe quel nombre de fichiers dans le répertoire de mis en scène. Ce qui détermine la période pendant laquelle vous déplacerez des fichiers dans le répertoire de mis en scène dépend de votre besoin de statistiques mises à jour.

La seule chose qui n'est **pas recommandée** est de déplacer un fichier journal qui est toujours utilisé par le système (OJS ou apache) pour enregistrer l'accès. OJS contrôle déjà cela pour le processus 2, mais pour le 1 et le 3, vous devez faire attention. Cela n'est pas recommandé car vous pouvez perdre du temps de traitement lorsque vous retraitez le même fichier. Vous pouvez garantir que vous ne le ferez pas en faisant attention à la rotation des fichiers journaux apache (en ne déplaçant que ceux qui ont déjà été tournés) ou, si vous utilisez les fichiers journaux OJS, en ne déplaçant pas le fichier qui a son nom de fichier avec le jour en cours.

Si vous avez vraiment besoin de statistiques mises à jour le même jour, vous pouvez toujours copier les fichiers (au lieu de les déplacer) afin que le système puisse continuer à enregistrer plus d'accès dans le même fichier. Cependant, vous pourrez traiter ce qui a déjà été enregistré. Le système peut gérer le retraitement des fichiers (voir la rubrique suivante), tant que le nom de fichier reste inchangé, la version finale copiée du fichier contient toute la journalisation des accès.

#### Utilisation

Imaginons que nous ayons les scénarios suivants, tous les trois avec un travail cron appelant quotidiennement l'outil de tâche du chargeur de fichiers:

1. Accédez aux Paramètres> Site Web> Plugiciels
2. Sous Plugiciels Génériques, recherchez le **Plugiciel de Statistiques d'Utilisation**
3. Cliquez sur la flèche bleue à gauche du nom du plugiciel pour faire apparaître des liens sous le plugiciel.

Dans le scénario 1, si DR ne peut pas configurer la rotation des fichiers journaux apache sur une période plus courte, il peut copier le fichier 20130929-access.log dans le répertoire usageStats/stage chaque fois qu'il souhaite que de nouvelles statistiques soient traitées. Le système supprimera à chaque fois toutes les données traitées pour ce fichier et tout retraitera à nouveau. C'est pourquoi ce processus n'est pas aussi efficace qu'une période plus courte de rotation des fichiers journaux. Au jour 20131006, la rotation du journal aura lieu et DR pourra enfin déplacer ou copier le fichier 20130929-access.log dans le répertoire de mis en scène afin que les statistiques enregistrées entre la dernière mis en scène du fichier et la rotation du journal puissent également être traitées.

Dans le scénario 2, DR peut déplacer un fichier par jour, en déplaçant toujours le fichier du jour précédent. Le lundi, ils peuvent déplacer deux fichiers en même temps (du samedi au dimanche). Ils disposeront d'un peu de temps entre l'accès et les statistiques disponibles (un jour seulement, pendant la majeure partie de la semaine) et éviteront de retraiter les mêmes entrées du journal d'accès.

Dans le scénario 3, DR n'a pas besoin de déplacer les fichiers. Chaque fois que la tâche du chargeur de fichiers est exécutée, le système récupère automatiquement les fichiers journaux qui n'ont pas encore été traités en évitant le premier jour en cours, les met en scène et commence à traiter chacun d'eux.

Dans les scénarios 1 et 2, si pour une raison quelconque, DR ne peut pas déplacer des fichiers pendant une semaine entière, à la prochaine occasion, ils peuvent tous les déplacer en même temps. La tâche planifiée sera traitée une par une jusqu'à ce que le répertoire de mis en scène soit à nouveau vide.

### Rapport sur les Statistiques d'Utilisation

Si vous avez besoin de retraiter un fichier journal (si une nouvelle liste de robots ou une nouvelle base de données de géolocalisation est introduite ou si vous avez résolu des problèmes dans des fichiers rejetés), vous pouvez les replacer dans le processus de mis en scène. Même s'ils se trouvaient dans des répertoires «rejetés» ou «archivés». Ils seront traités et toutes les données existantes de ces journaux seront remplacées par des données retraitées.

L'important est qu'une fois qu'un fichier est traité avec succès et déplacé vers le dossier d'archive, son nom de fichier est conservé. Le nom du fichier est utilisé pour garder une trace des données statistiques et du fichier à partir duquel elles ont été extraites. Pour la même raison, il est important que tous les fichiers journaux aient des noms uniques. Vous n'avez pas à vous en préoccuper si vous utilisez des fichiers journaux OJS. Mais si vous utilisez des fichiers journaux d'accès apache, assurez-vous que vous utilisez quelque chose d'unique tel que des dates dans les noms de fichiers.

<hr />

## Générer des Rapports: Exemples et Astuces

Voici les questions les plus fréquemment posées concernant l'OJS, les statistiques, et leurs réponses. Ce n'est pas une liste exhaustive. Si vous rencontrez d'autres questions pour lesquelles vous n'avez pas de réponses, informez votre fournisseur de services d'hébergement ou consultez le forum de la communauté PKP < [https://forum.pkp.sfu.ca](https://forum.pkp.sfu.ca) > pour voir si quelqu'un d'autre a rencontré la même chose.

### Générateur de Rapports Personnalisés

Tout d'abord, effectuez une mise à niveau vers la dernière version stable d'OJS 2 ou 3. Vous pouvez également envisager de retraiter vos journaux (voir la section précédente **Traitement des Fichiers Journaux**).

Deuxièmement, déterminez quelles statistiques vous voulez et utilisez la même méthode pour les obtenir à chaque fois. Si vous utilisez le Générateur de Rapports Personnalisés, assurez-vous d'enregistrer l'URL qu'il vous fournit afin de pouvoir réexécuter ce rapport particulier.

### Quelques astuces pour utiliser le Générateur de Rapports

Tout dépend du type de données dont vous avez besoin. Pour les données héritées (c'est-à-dire les données antérieures à OJS 2.4.3), le rapport de Consultation donne un excellent aperçu général de l'utilisation des articles et c'est la métrique la moins compliquée à comprendre.

Pour des données plus récentes, nous recommandons vraiment le Générateur de Rapports Personnalisés. C'est assez complexe, mais il peut fournir un éventail de données important et utilise au maximum le Cadre des Statistiques. Assurez-vous simplement de l'utiliser de manière cohérente! Nous avons inclus à la fin de ce document un ensemble d'astuces, rédigés par notre collègue Andrea Kosavic de la bibliothèque de l'Université York, qui se concentre spécifiquement sur le Générateur de Rapports Personnalisés.

### J'ai récemment mis à niveau une ancienne version d'OJS, et j'aimerais utiliser le cadre statistique amélioré pour les visites antérieures à la mise à niveau. Est-ce faisable?

Oui, mais uniquement si vous disposez de journaux de serveur Web antérieurs à la mise à niveau. Si vous disposez de ces journaux de serveur Web (par exemple, des fichiers Apache access_log) d'avant la mise à niveau, vous pouvez les traiter (voir Annexe B: Traitement des Fichiers Journaux). Si vous ne disposez pas de ces anciens journaux, vous n'avez malheureusement pas de chance.

If your log files are OJS2 log files you want to reprocess in an OJS3 installation, it will require some development work to rebuild the log files and append the file id to all of the metric URLs - there is no built in tool for this work in OJS. Finally, it's also important to mention that if you reprocess old log files, and the URL of your journal has changed between then and now, the URLs in the log file will not match the "base URL" for your OJS installation and those metrics will not count.  If you want to reprocess log files, have a look at the older log file and make sure that the URLs still match your journal.  This includes the protocol (http or https).  **Ne Pas Utiliser pour:** les métriques d'utilisation actuelles, sauf si vous êtes toujours sur OJS <2.4.3.

En outre, il convient de noter que vous pouvez toujours récupérer les anciennes métriques d'utilisation de base en utilisant les rapports hérités (dans OJS 2 uniquement - pas OJS 3). Ceux-ci ne sont pas aussi complets que les nouvelles métriques, et ils incluent également des visites de robots et des multi-clics, mais ils constituent toujours une bonne représentation de l'utilisation générale.

### J'ai vu des revues OJS qui affichent de jolies métriques d'utilisation d'articles sur les pages de destination des articles. Comment configurer cela?

Cette option n'est disponible que pour OJS 3.x à l'aide du Plugiciel de Statistiques d'Utilisation.  Pour savoir comment activer et configurer le Plugiciel, reportez-vous à la section précédente de ce document **Afficher les Statistiques d'Utilisation** .

### Exemple: Quel est notre numéro le plus populaire?

Malheureusement, ce n'est actuellement pas possible avec OJS mais cela changera dans le futur.

### Exemple: Quels pays téléchargent nos articles (pour un intervalle de date spécifique)?

OJS recueille des statistiques basées sur les identifiants internes des numéros, articles et épreuves.

Si vous remplacez un fichier PDF pour une épreuve, l'ID de l'épreuve ne changera pas. Cela signifie que les statistiques de téléchargement pour l'épreuve continueront de s'accumuler dans les deux versions du fichier.

Si vous supprimez une épreuve d'article et ajoutez plus tard une nouvelle épreuve pour le même article, la nouvelle épreuve aura un nouvel ID. Les statistiques cumulées pour les consultations  d'articles resteront intact mais les statistiques d'utilisation du fichier épreuve recommenceront à 0. Les statistiques historiques de l'ancienne épreuve resteront dans les métriques, à moins que vous ne reconstruisiez les journaux d'accès dans de nouvelles métriques. De nouvelles statistiques seront collectées pour la nouvelle épreuve au fur et à mesure que l'accès se produira.

L'impact spécifique variera également d'un rapport à l'autre, car les rapports diffèrent selon l'informations qu'ils fournissent. Ils peuvent fournir de l'information sur des numéros, des articles, des épreuves ou une combinaison de ces éléments.

<hr />

## Statistiques Visuelles sur l'Utilisation d'Article

Ce sont les problèmes les plus fréquemment rencontrés lors de la tentative de génération de rapports d'utilisation, avec quelques suggestions de solutions.

### J'ai mis à niveau OJS depuis OJS <2.4.3 vers une version plus récente et maintenant mes statistiques d'utilisation semblent avoir baissé. Ils n'ont pas complètement disparu, mais ils semblent avoir une tendance à la baisse. Que se passe-t-il?

Le Cadre de Statistiques filtre désormais les consultations conformément au code de conduite du Projet COUNTER. Plus précisément:

1. Le Plugiciel de Statistiques d'Utilisation doit avoir les options Région et Ville activées comme décrit ci-dessus.
2. OJS filtre les consultations connues de robots et de robots d'exploration.

Cela entraînera une baisse des métriques d'utilisation globale. La baisse ne devrait pas être significative, même si elle peut être perceptible.

Le Projet COUNTER ajoute toujours de nouveaux bots à leurs spécifications, et OJS suit cette spécification à chaque version.

### Configurer les Tâches Planifiées

Il y a de fortes chances qu'il y ait un problème avec votre configuration générale des statistiques. Vous devriez examiner ceci selon la section de configuration ci-dessous.

### Lorsque je télécharge le Rapport des Consultations Programmées, il semble que mes Consultations Totales d'Épreuve sont en fait deux fois plus élevées qu'elles devraient l'être. Par exemple, si j'ai 2 téléchargements PDF et aucune autre épreuve, le Totale des Consultations d'Épreuve est de 4.

C'est un bogue connu dans OJS 2.4.5. La solution consiste à mettre à niveau, ce qui résoudra le problème immédiatement. Vous ne devriez pas avoir besoin de retraiter les statistiques pour résoudre ce problème.

### De Base (par défaut)

R: Si vous utilisez OJS 2.4.8.0, il s'agit d'un bogue. Pour résoudre ce problème, vous devrez passer à la version la plus récente d'OJS 2.4 ou OJS 3 et retraiter vos journaux.

### Les rapports - en particulier le rapport de Consultation Programmé, le Rapport de Statistiques d'Utilisation et le Générateur de Rapports Personnalisés - contiennent des données, mais semblent s'arrêter à une date antérieure ou sont incomplets. Je sais que nous avons des décomptes de consultation plus récents, mais ils n'apparaissent pas.

Il y a deux causes probables à cela:

**Cause 1:** À un moment donné, la tâche planifiée de traitement des statistiques a été arrêtée. Cela peut se produire si votre instance OJS a été migrée par un administrateur de système d'un serveur à un autre ou si OJS a été mis à niveau mais que sa configuration n'a pas été revue. Vous pouvez le confirmer de plusieurs manières (très techniques):

1. Jetez un œil au dossier usageStats dans votre files_dir. Si vous voyez un grand nombre de fichiers journaux dans `files/usageStats/usageEventLogs/` ou `files/usageStats/stage` , la tâche planifiée n'est pas en cours d'exécution.
2. Jetez un œil à la table des `metrics` dans la base de données mysql. S'il est vide ou si les métriques semblent avoir été enregistrées mais s'arrêtent à une date particulière, la tâche planifiée n'est pas en cours d'exécution.

La solution à ce problème consiste à examiner votre configuration et à retraiter les statistiques, conformément à la section Configuration ci-dessous.

**Cause 2:** Le rapport atteint la limite de 5 000 lignes du plugiciel de rapport. Cela devrait être évident en regardant le rapport .csv: s'il s'arrête à ou autour de la ligne 5000 (généralement autour de la ligne 5006 en raison de quelques lignes supplémentaires en haut du rapport), le problème est déterminé. La solution ici consiste à réduire la quantité de données que vous essayez d'extraire, par exemple en limitant la période et en téléchargeant plusieurs rapports. Vous pouvez fusionner manuellement plusieurs rapports ensemble. **Remarque** : ce problème s'applique uniquement à OJS 3.1.1 ou aux version antérieure. La limite de 5 000 lignes a été supprimée dans OJS 3.1.2.

Q: J'essaie de télécharger des informations régionales à l'aide du Générateur de Rapports Personnalisés, mais je ne vois rien de tout cela dans mes rapports.

R: Le suivi des données régionales n'a pas été correctement ou complètement configuré. Consultez la section Configuration ci-dessous.

### Retraitement des fichiers journaux

Cela se produit lorsque la quantité de données que vous essayez de télécharger dépasse la capacité du serveur à les fournir. Cela peut être résolu soit en réduisant la quantité de données que vous essayez d'extraire en une seule fois (c'est-à-dire en téléchargeant des rapports sur plusieurs périodes) ou en augmentant la ressource du problème (par exemple les paramètres de PHP memory_limit ou max_execution_time). PHP’s memory\_limit or max\_execution\_time parameters\). Ce dernier ne peut être réalisé que par un administrateur du système.

### Quelle est la meilleure chose que je puisse faire pour garantir des rapports d'utilisation précis?

Voir l'[Annexe C: Traitement des Fichiers Journaux](#annexe-c-traitement-des-fichiers-journaux) .

## Afficher les Statistiques d'Utilisation pour les Lecteurs

Les rapports d'OJS peuvent être regroupés en gros en rapports «d'utilisation» qui contiennent des mesures d'utilisation indiquant le lectorat des visiteurs et des rapports de «contenu» qui fournissent des données sur l'élément respectif (par exemple, des informations sur l'abonné). Certains de ces rapports contiennent également des informations héritées, à condition que votre installation OJS ait été créée à un moment donné avant OJS 2.4.3. OJS 3 a abandonné la prise en charge des rapports hérités. This section also contains an explanation of changes to the statistics methodology in OJS, as well as some information specific to statistics in OJS 2.

### Avez-vous des suggestions sur les rapports à utiliser **?
OJS a enregistré l'utilisation d'articles depuis le début du lancement d'OJS 2. La méthodologie utilisée pour compter les métriques a subi un changement important depuis lors. Ce changement est essentiel pour comprendre comment examiner et gérer les données statistiques historiques.

#### Chargeur de Fichiers
Les versions d'OJS antérieures à OJS 2.4.3 comptent les consultations de manière très rudimentaire: elles enregistrent les consultations de pages et les téléchargements de fichiers pour les pages de destination d'articles et les fichiers d'épreuve uniquement, et ne filtrent pas les consultations/téléchargements de bot, les clics multiples, etc. Ces consultations sont enregistrées dans un simple tableau de base de données et représentées dans OJS 2.4.2 et ci-dessous via un rapport de «Consultation». Les métriques ne sont disponibles que pour les résumés/pages de destination et les téléchargements d'épreuves et ne suivent qu'une seule facette: si l'élément a été consulté ou téléchargé. Ces décomptes sont considérés comme exacts, bien que probablement faussement représentatifs du lectorat réel, car les consultations de bot, l'indexation des robots d'exploration et les abus potentiels des auteurs ou des visiteurs (par exemple, plusieurs clics) ne sont pas filtrés.

#### Processus
Depuis la version 2.4.3, Open Journal Systems utilise une nouvelle structure pour collecter des statistiques et générer des rapports. Ces métriques comptent les consultations de résumé et d'épreuves, la date de consultation et les informations régionales telles que le pays et la ville (si elles sont correctement configurées). Au-delà des métriques d'article, les consultations de numéros et de la page d'accueil sont également incluses. Enfin, ces métriques sont filtrées selon les règles de traitement du Projet COUNTER afin que les clics multiples et les consultations de bot soient filtrés par défaut.

#### Exemples d'Utilisation

Ce qui suit décrit les données auxquelles les utilisateurs-trices de diverses itérations d'OJS ont accès. La version OJS peut être déterminée par un membre du personnel de la revue en visitant À Propos > À Propos du Système de Publication (OJS 2).

- OJS 2.4.2 ou version antérieure:
    - Les métriques sont basées sur l'ancienne méthode des métriques. Seuls les décomptes de consultation d'articles simples sont enregistrés pour chaque consultation de résumé ou d'épreuve. Celles-ci ne sont filtrées par aucune des règles de filtrage du Projet COUNTER.
    - Ceux-ci sont disponibles à partir d'un rapport de consultation sous Direction de la Revue > Statistiques et Rapports.
    - Vous pouvez également avoir accès à un rapport rudimentaire de Consultations Programmées. Ce rapport, s'il est disponible dans une installation antérieure à OJS 2.4.2 ou plus ancienne, doit être considéré comme bogué et imprévisible. Il ne doit pas être utilisé.
    - La mise à niveau est conseillée afin que de meilleures métriques puissent être collectées à l'avenir. (Notez que la mise à niveau ne vous fournira pas de meilleures statistiques antérieures à la date de mise à jour, du moins par défaut. Consultez la section FAQ pour plus d'informations sur le retraitement des anciennes statistiques.)
- OJS 2.4.3 ou plus récent:
    - Les métriques sont basées sur la nouvelle méthode de métriques décrite ci-dessus.
    - Si cette instance OJS a été mise à niveau à un moment donné par rapport à la version antérieure à OJS 2.4.3, vous aurez également accès à un Rapport de Consultation hérité (pour les données collectées lorsque vous utilisiez des versions antérieures).
    - Tous les rapports sont disponibles dans l'onglet Direction de la Revue > Statistiques et Rapports.
    - REMARQUES POUR LES REVUES MISES À JOUR:
        - Le Rapport de Consultation hérité est à des fins d'archivage uniquement. Il fournit un enregistrement de l'utilisation avant l'adoption du 2.4.3. Il n'enregistre pas de nouvelles consultation après l'adoption de l'OJS 2.4.3.
        - Les nouveaux rapports (le rapport Consultations Programmées, le Générateur de Rapports Personnalisés, etc.) qui utilisent la nouvelle méthode de métriques n'incluront que les métriques à partir de la date de mise à niveau.
        - Afin de parvenir à une compréhension complète du nombre de consultations pour votre contenu, vous devrez prendre en compte à la fois les anciens et les nouveaux rapports.
    - REMARQUES IMPORTANTES SUR LES BOGUES:
        - Il y avait un bogue dans OJS 2.4.5 qui a entraîné le doublement du nombre de métriques. Consultez les sections FAQ et Problèmes Fréquemment Rencontrés pour plus d'informations.
        - Il y avait un bogue dans OJS 2.4.8.0 qui entraînait que certaines consultations de fichiers n'étaient pas correctement enregistrées. Consultez les sections FAQ et Problèmes Fréquemment Rencontrés pour plus d'informations.
        - Si votre instance OJS est actuellement sur l'une ou l'autre version, nous vous recommandons fortement de mettre à niveau (et, éventuellement, de retraiter vos statistiques - voir Annexe B: Traitement des Fichiers Journaux).
- 3.0 ou plus récent:
    - Vous aurez des métriques basées sur la nouvelle méthode de métriques définie ci-dessus.
    - Toutes les mesures seront disponibles à partir du Tableau De Bord Utilisateur, via Outils> Statistiques.
    - REMARQUES POUR LES REVUES MISES À JOUR:
        - Si votre utilisation d'OJS 3 est une mise à niveau d'une instance OJS contenant des données de Rapport de Consultations héritées (c'est-à-dire que votre installation a commencé avant OJS 2.4.2), ces données ne seront plus disponibles au téléchargement. Vous devez télécharger et stocker ces données avant la mise à niveau.

### Legacy Report: Timed Views Report

**Disponibilité: OJS 2 uniquement**

**Format: CSV**

**Description:** Ce rapport fournit des mesures générales d'utilisation pour les consultations d'articles et celles des épreuves. Une  période en terme de dates doit être spécifiée. Il a un mode hérité et non-hérité disponible. C'est le seul rapport qui fonctionne de cette manière.

**Utiliser pour**: télécharger des données de consultations programmées héritées ou non-héritées.

**Ne Pas Utiliser pour**: télécharger des données dans OJS 3.0+, car elles n'existent plus. À la place, utilisez le Générateur de Rapports Personnalisés.

**Remarques Spéciales:**

* Étant donné la façon dont OJS traite les métriques, le rapport n'inclura presque certainement pas les données de la date d'aujourd'hui, donc essayer de rapporter uniquement à la date d'aujourd'hui renverra probablement un rapport vide.
* Ce rapport peut éventuellement fournir des données héritées pour les installations pré-OJS 2.4.3. Si vous recherchez des données de consultations programmées antérieures à une mise à niveau OJS 2.4.3, sélectionnez l'option «inclure les données héritées».

**Exemple de Données (modifiées pour plus de clarté):**

Dans l'exemple ci-dessous, qui a été généré pour la période du 29 mars 2017 au 30 mars 2017 (soit 1 jour), nous pouvons voir que l'article «Amusing Ourselves to Death» a été très apprécié, avec 2 consultations de résumé et 11 consultations d'épreuve (3 PDF et 8 HTML). L'article «Comobility» n'a vu son résumé qu'une seule fois.
****

| **ID**    | **Titre de l'article**                                                                     | **Titre de l'article** | **Auteurs**                                                | **Numéro**       | **Date de Publication** | **Résumé** | **PDF** | **HTML** |
| --------- | ------------------------------------------------------------------------------------------ | ---------------------- | ---------------------------------------------------------- | ---------------- | ----------------------- | ---------- | ------- | -------- |
| **2** 508 | "S'Amuser à Mort?" Réseaux Sociaux, Satire Politique et l'Élection de 2011                 | Ian Reilly             | Vol 36, No 3 (2011): Fascinations Canadiennes              | 2011-09-13 22:11 | 2                       | 11         | 3       | 8        |
| 2512      | Comobility: Comment la Proximité et la Distance Voyagent Ensemble dans les Médias Locatifs | Jen Southern           | Vol 37, No 1 (2012): Les Arts Médiatiques Revisités (MARs) | 13/04/2012 9:38  | 1                       | ****       | ****    | ****     |


<hr />

## Activité Éditoriale

Projet COUNTER: [https://www.projectcounter.org/](https://www.projectcounter.org/)

Vous avez également la possibilité de rechercher les statistiques d'un article spécifique par titre, auteur ou ID de manuscrit en utilisant la fonction de recherche sous **Détails de l'Article** .

Forum Communautaire PKP (pour des questions supplémentaires): [https://forum.pkp.sfu.ca](https://forum.pkp.sfu.ca)

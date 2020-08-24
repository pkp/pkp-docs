# Diagnostic d'Anomalies

## Autorisations, Accès aux Fichiers, etc.

### Configuration des Autorisations de Fichier

Il est difficile de prescrire des étapes exactes afin de définir les autorisations de fichiers appropriées, parce que cela dépend du système d'exploitation du serveur, du serveur Web, et de la configuration PHP.

En général, vous voulez que vos autorisations soient définies de manière à ce que votre serveur Web puisse lire et écrire (de manière récursive) dans `config.inc.php` `files_dir`, et dans `cache/`, et `public/`. Vous avez comme option, pour des fonctionnalités supplémentaires et une sécurité réduite, d'activer l'écriture dans `config.inc.php`, dans `plugiciels/` et peut-être dans les paramètres régionaux `.xml` des dossiers. Votre serveur Web doit avoir un accès en lecture seule à tous les autres fichiers et répertoires distribués dans le package.

Commencez par vérifier quelle API de serveur PHP utilise sur votre serveur. Si OJS, OMP ou OCS est déjà installé, connectez-vous en tant que Directeur/trice du Site, cliquez sur «Informations système», et au bas de la page, cliquez sur «Informations PHP étendues». Trouvez la ligne qui dit «API du serveur». Selon l'API que vous utilisez (mod_php / SAPI ou CGI / FastCGI), les autorisations doivent être définies comme suit.

- mod_php / SAPI: Dans cette configuration, tous les scripts PHP sur le système s'exécutent généralement sous le même nom d'utilisateur (généralement les comptes "nobody" ou "www-data" d'Apache). Soyez averti que cela peut être non sécurisé sur un hôte partagé. Les répertoires files_dir (configuré dans config.inc.php), cache, public, ainsi que tous les contenus et sous-répertoires doivent être accessibles en écriture et en lecture par l'utilisateur du serveur Web. Le fichier de configuration config.inc.php doit être accessible en lecture par l'utilisateur du serveur Web.
- CGI / FastCGI: Dans cette configuration, les scripts PHP s'exécuteront généralement sous votre compte utilisateur (quoique les configurations de serveur puissent varier). Cela peut être une configuration bien sécurisée. Le files_dir (configuré dans config.inc.php), le répertoire de cache, le répertoire public et tous les contenus et sous-répertoires doivent être accessibles en écriture et en lecture par ce compte utilisateur. Le fichier de configuration config.inc.php doit être accessible en lecture par ce compte.

#### Comment est ce que Linux fait cela?

Sous Linux, les autorisations sont basées à la fois sur un mode de contrôle d'accès numérique et sur la propriété des fichiers 63. La compréhension de ce schéma d'autorisations est un prérequis.

Par exemple, la propriété de `apache:www` avec les autorisations de `750` (`rwxr-x---`) signifie que l'utilisateur apache peut lire, écrire et exécuter; toute personne appartenant au groupe `www` peut lire ou exécuter; et le fichier est protégé contre l'accès par quiconque. Notez que «exécuter» signifie deux choses totalement différentes pour les répertoires et pour les fichiers!

##### Un Exemple (pour un hébergement dédié)

En général, la propriété de `cache/` , `public/` et d'autres répertoires inscriptibles sur le Web doit appartenir  à votre utilisateur Web et le groupe principal de l'utilisateur Web, par exemple `apache:www-data`. Les autorisations devraient probablement être de `750` .

La propriété des autres répertoires non accessibles en écriture sur le Web doit appartenir à votre utilisateur, avec le groupe de l'utilisateur Web ou avec des autorisations d'exécution publiques. Par exemple:

`myuser:www-data` avec `750`

ou

`myuser:ourgroup` avec `755`

Les fichiers inscriptibles sur le Web seraient les mêmes, mais sans l'autorisation d'exécution:

`apache:www-data` avec `640`

Les fichiers non inscriptibles sur le Web seraient peut-être:

`myuser:www-data` avec `640`

ou

`myuser:ourgroup` avec `644`

#### Mais qu'en est-il des Hôtes Partagés?

Avec certains hôtes partagés (par exemple, si votre seul accès se fait via cPanel ou un outil d'administration Web similaire), vous n'aurez peut-être pas la possibilité de modifier la propriété du fichier et votre serveur Web s'exécute effectivement en tant qu'utilisateur. Dans ce cas, vous pouvez toujours avoir la possibilité de protéger vos fichiers en les rendant non inscriptibles par votre propre utilisateur (même si cela semble contre-intuitif). Dans un hôte partagé, vous voudrez presque certainement refuser les autorisations mondiales sur vos fichiers, mais consultez la documentation et le support de votre hôte en particulier.

#### Une note sur les Configurations de Sécurité

Vu que les configurations de sécurité peuvent varier, et vu le volume de demandes d'assistance que nous recevons concernant les autorisations de fichiers, nous ne pourons fournir qu'une aide limitée pour ces problèmes. Veuillez être aussi précis que possible lors de la publication de problèmes d'autorisations.

Le mode PHP Safe Mode n'est pas une configuration recommandée et peut ne pas fonctionner correctement. Cela est parce que, dans certaines configurations, la fonction mkdir() de PHP créera des répertoires qui ne pourront plus être accessible par lecture ou écriture par la suite à cause des autorisations de fichiers. Ceci est une limitation du Safe Mode et peut vous empêcher d'utiliser OJS dans un environnement en mode Safe Mode.

### Les fichiers HTML ne s'affichent pas correctement / les fichiers que je télécharge ne sont pas correctement identifiés.

Cela est probablement dû au fait que votre serveur identifie votre fichier HTML d'une façon incorrecte, comme étant autre chose que HTML. Le moyen le plus rapide de diagnostiquer cela est de vérifier la page Galley Edit: si vous avez téléchargé un fichier HTML et que le champ Label indique autre chose que "HTML" (tel que "Sans titre", par exemple), cela veut dire que le fichier n'a pas été correctement identifié au format HTML et ne s'affichera probablement pas correctement.

OJS, OMP et OCS utilisent trois méthodes afin de déterminer un type de fichier, dans l'ordre suivant:

- La fonction mime_content_type de PHP, qui utilise le fichier magic.mime de votre système (cette méthode est obsolète)
- La suite de fonctions finfo _... de PHP (qui remplace mime_content_type comme méthode préférée)
- L'outil "fichier" externe, en exécutant ce qui suit:

`file -bi [filename here]`

Des problèmes peuvent survenir si:

- vous utilisez la première option mais votre fichier magic.mime ne contient pas assez d'informations sur le type de fichier que vous essayez d'identifier;
- la configuration de votre serveur ne prend pas en charge les deux premières options;
- vous n'avez pas des autorisations suffisantes pour exécuter un outil externe comme dans la troisième option.

Aditionellement, vous pouvez rencontrer des problèmes dus à des fichiers mal formés. Si vous avez des problèmes à reconnaître vos fichiers HTML, vous pouvez les exécuter via [HTML-Tidy](http://www.w3.org/People/Raggett/tidy/) ou autrement vous assurer qu'ils sont au format HTML. Les fichiers HTML créés par des traitements de texte en particulier peuvent avoir du mal à être reconnus comme HTML.

Vous pouvez aussi rechercher sur le [forum](https://forum.pkp.sfu.ca) les mots-clés "magic mime" ou "mimetype" -- plusieurs utilisateurs ont eu ce problème, et il y a de nombreuses discussions sur la façon de le résoudre.

### Mes fichiers CSS ne sont pas correctement identifiés.

Cela pourrait être le résultat du problème d'identification ci-dessus, ou cela pourrait être parce que votre fichier css comprend un commentaire sur la première ligne, avant tout contenu CSS réel. Essayez de supprimer le(s) commentaire(s) au tout début du fichier et de le télécharger à nouveau.

Notez que cette situation se produit assez souvent lors du téléchargement d'une copie modifiée du fichier CSS principal. Nous ne recommandons pas cette approche - il est préférable de télécharger un fichier CSS qui ne contient que des remplacements pour les styles que vous souhaitez modifier à partir de la mise en page par défaut, car la feuille de style principale est appliquée avant tout fichier CSS personnalisé. Cela aidera à éviter les problèmes reliés à la feuille de style lors de la mise à niveau.

## Encodage de Caractère

Les problèmes d'encodage de caractère surviennent principalement dans deux situations: lorsque les journaux sont migrés d'une autre plate-forme vers OJS; ou (plus couramment) lorsqu'un journal OJS est migré d'un autre serveur vers nos serveurs.

Il est souvent utile de vérifier les paramètres actuels de la base de données pour vous assurer que vous travaillez dans l'ensemble de caractères avec lequel vous pensez travailler. Une fois connecté à MySQL, essayez ce qui suit:

```
show variables like 'char%';
show variables like 'collation%';
```

Le but de résoudre les problèmes d'encodage de caractère est de s'assurer que les données stockées dans la base de données correspondent aux paramètres de l'ensemble de caractères de la base de données, c'est-à-dire que nous stockons les données utf8 dans une base de données utf8. Une fois que cela a été fait, nous voulons nous assurer que les paramètres OJS config.inc.php correspondent aux paramètres de données et de base de données, c'est-à-dire que les paramètres du client, de la connexion et de l'ensemble de caractères de la base de données sont tous définis sur utf8 dans config.inc.php.

### Introduction aux Ensembles de Caractères et aux Encodages

Les articles suivants fournissent une bonne introduction aux ensembles de caractères et aux encodages:

- [Encodages de Caractère: Concepts Essentiels](https://www.w3.org/International/articles/definitions-characters/)
- [Le Minimum Absolu que tout Développeur de Logiciel doit Absolument et Positivement savoir sur l'Unicode et les Ensembles de Caractères (Sans Excuses!)](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/)

### Approche Générale

- Vérifiez les paramètres de la base de données config.inc.php: client, connexion, ensembles de caractères de la base de données
- Comparez les paramètres de la base de données config.inc.php avec les paramètres de la base de données, c.-à-d.
- `show variables like 'char%'`
- `show variables like 'collation%'`
- Il y a souvent une incompatibilité entre 1. et 2. qui fournit les premiers indices d'incompatibilité
- Générez deux décharges de base de données:
- `mysqldump db --opt --default-character-set=latin1 result-file=latin1.sql`
- `mysqldump db --opt --default-character-set=utf8 result-file=utf8.sql`
- Explorez chaque fichier de décharge dans vim à l'aide de ses outils d'ecodage de caractère: [https://spin.atomicobject.com/2011/06/21/character-encoding-tricks-for-vim/](https://spin.atomicobject.com/2011/06/21/character-encoding-tricks-for-vim/)

#### Problème commun n° 1: définitions de table Latin1 avec des données UTF8

Durant la migration depuis une autre institution, vous pouvez recevoir une décharge MySQL qui comprend des définitions de table qui sont définies sur latin1 (c'est-à-dire CREATE TABLE access_keys … DEFAULT CHARSET = latin1) même si les données actuelles enregistrées dans les tables sont UTF8. Vous pouvez config.inc.php sur le serveur d'origine pour confirmer si c'est le cas: si client_charset = utf-8 dans config.inc.php, donc les données seront stockées en UTF8 dans la base de données.

Par défaut, les journaux sur nos serveurs sont correctement configurés pour utiliser les paramètres UTF8 dans toute la base de données et config.inc.php. L'importation d'une base de données incompatible avec des définitions de table Latin1 et des données UTF8 entraînera des problèmes d'affichage des caractères dans OJS.

Les étapes de conversion et le processus d'importation suivants peuvent être utilisés pour résoudre ces problèmes:

Étapes de conversion:

- demander une décharge mysql latin1 avec `--default-character-encoding=latin1 --result-file=dump.latin1.sql`
- ouvrez `dump.latin.sql` dans vim
- supprimer 'SET NAMES latin1' du haut du fichier
- remplacer les définitions de table latin1 par les définitions de table utf8 via `:%s/CHARSET=latin1/CHARSET=utf8/g`
- définissez l'encodage du fichier pour le fichier sur utf8 via `:set fileencoding=utf8`
- enregistrez le fichier sous un nouveau nom de fichier via `:w dump.utf8.sql`

Étapes d'importation:

- créer une base de données utf8 propre: `CREATE DATABASE import\_ojs DEFAULT CHARSET utf8;`
- changer vers la nouvelle base de données: `USE import\_ojs`
- définissez tout sur utf8: `SET NAMES utf8;`
- importez la décharge convertie: `SOURCE dump.utf8.sql;`

... et ainsi de suite, en remplaçant "article_settings" par la table à nettoyer et "setting_value" par la colonne de la table à nettoyer.

#### Problème commun n° 2: guillemets doubles avec problème d'encodage sur les fichiers DUMP

Durant la migration/mise à niveau du serveur lib-ojs vers sfulib, les fichiers de décharge MySQL de l'ancien serveur peuvent présenter un problème d'encodage de caractères lié aux guillemets doubles, par exemple: â€œapprentissage,â€<9d> qui devrait être "apprentissage", même en utilisant la collation UTF8 correcte pour exporter depuis la base de données.

Ce problème apparaît lorsque les utilisateurs copient et collent des guillemets fancy/smart à partir de MS Word qui utilise l'ensemble de caractères Windows-1252 qui ne correspond à rien en UTF8. Ce qui aboutit à ces séquences qui ressemblent à â€œapprentissage,â€<9d>.

Les étapes suivantes peuvent être utilisées pour résoudre ce problème d'encodage:

- Installez sur votre machine locales [ftfy](https://ftfy.readthedocs.io/en/latest/), étant un outil python, cela va nécessiter que python3 soit installé aussi;
- Modifiez l'exécutable ftfy en ligne de commande cli.py (cela peut être dans un chemin différent selon votre environnement.): `/usr/local/lib/python3.6/site-packages/ftfy/cli.py`
- Autour de la ligne 100 ( `$ vim +100 cli.py` ), ajoutez un paramètre supplémentaire 'uncurl_quotes = False' à la fonction fix_file. Cela ressemblera à ce qui suit:

```
for line in fix_file(file, encoding=encoding,
     fix_entities=fix_entities,
     normalization=normalization,
     uncurl_quotes=False):
```

- Téléchargez sur votre machine locale le fichier DUMP (ex: client.orig.sql) et vous pourrez exécuter: `$ ftfy --output=client.clean.sql client.orig.sql`

#### Solutions de Contournement Manuelles (Dernier Recours)

Si vous rencontrez des caractères étranges comme Ã¢â‚¬ / Ã¢â‚¬" / Ã¢â‚¬â„¢ / etc., essayez les commandes SQL suivantes pour les rechercher et les remplacer (tirées de ce [blog](https://digwp.com/2011/07/clean-up-weird-characters-in-database/) ) :

```
UPDATE article\_settings SET setting\_value = REPLACE(setting\_value, 'Ã¢â‚¬Å“', '"');
UPDATE article\_settings SET setting\_value = REPLACE(setting\_value, 'Ã¢â‚¬ ', '"');
UPDATE article\_settings SET setting\_value = REPLACE(setting\_value, 'Ã¢â‚¬â„¢', ''');
UPDATE article\_settings SET setting\_value = REPLACE(setting\_value, 'Ã¢â‚¬Ëœ', '"');
UPDATE article\_settings SET setting\_value = REPLACE(setting\_value, 'Ã¢â‚¬"', '"“');
UPDATE article\_settings SET setting\_value = REPLACE(setting\_value, 'Ã¢â‚¬"', '"”');
UPDATE article\_settings SET setting\_value = REPLACE(setting\_value, 'Ã¢â‚¬ ¢', '-');
UPDATE article\_settings SET setting\_value = REPLACE(setting\_value, 'Ã¢â‚¬ ¦', '"¦');
```

Si tout autre tentative échoue:

Kurt a exécuté la commande de décharge suivante avec un certain succès, mais sans expliquer exactement ce qu'elle fait:

```
mysqldump ocs-$USERNAME --opt --default-character-set=latin1 --skip-set-charset --single-transaction  --ignore-table=ocs-$USERNAME.paper_search_keyword_list --ignore-table=ocs-$USERNAME.paper_search_object_keywords --ignore-table=ocs-$USERNAME.paper_search_objects --result-file=/tmp/$USERNAME.sql
```

## Rapport d'Erreurs: Pages Blanches, Diagnostics, etc.

### Lorsque je clique sur un bouton ou que je suis un lien, je finis avec une page blanche. Qu'est ce que je peux faire?

1: Vérifiez le log des erreurs de votre serveur Web

Normalement, cela indique qu'une erreur PHP s'est produite et que le message a été envoyé à votre serveur Web ou au fichier log du système. Vérifiez là-bas - par exemple `/var/log/apache/error.log` , bien que l'emplacement exact dépendra de la configuration de votre serveur - pour plus de détails.

2: Vérifiez vos autorisations de fichiers

Si vous n'avez pas encore installé OJS, OMP ou OCS, la cause la plus probable est un problème avec les autorisations de fichiers dans vos répertoires cache/ ou cache/t_compile. Voir docs/README pour plus d'informations sur les autorisations de fichiers.

3: Diagnostic d'anomalies supplémentaire

Si vous n'avez pas accès au fichier log de votre serveur, vous pouvez essayer d'ajouter ce qui suit au début de index.php pour que les messages d'erreur soient envoyés au navigateur:

`ini_set('display_errors', E_ALL);`

Si vous exécutez dans un environnement Windows IIS, vous devrez peut-être aussi activer `fastcgi.impersonate=1` dans votre fichier php.ini.

Vous pouvez également modifier temporairement (approximativement) la ligne 27 du fichier `lib/pkp/includes/functions.inc.php` , en supprimant l'opérateur @, pour que cela ressemble à ceci:

`if((include_once BASE_SYS_DIR.'/'.$filePath) === false) {`

N'oubliez pas d'annuler cette modification par la suite.

Parfois, un script PHP spécifique inclus dans le logiciel échoue à s'exécuter sans aucun message d'erreur, par exemple en raison d'une modification <br>interrompue ou d'un problème de permissions de fichiers. Pour déterminer quel script pourrait être à l'origine du problème, vous pouvez modifier votre `lib/pkp/includes/functions.inc.php` et rechercher la ligne suivante:

`function import($class) {`

Ajoutez en dessous:

`echo "Importing " . $class . " \n";`

Cela causera OJS, OMP ou OCS à répertorier les fichiers de classe avant de les importer (pour TOUT visualiseur du site). Si vous rencontrez un problème avec un fichier particulier, ce sera le dernier dans la liste. Vérifiez-y les autorisations du fichier et essayez de l'exécuter via le linter PHP (php -l chemin / vers / file.inc.php).

Assurez-vous d'annuler cette modification lorsque vous avez terminé.

### Qu'est-ce qu'un stacktrace et comment l'afficher dans OxS?

Un stacktrace montre la route à travers le code utilisé pour afficher la page actuelle. Lorsqu'une erreur est affichée, un stacktrace est souvent utile pour aider à déterminer comment l'erreur a été provoquée, en permettant au développeur de parcourir le code et voir quel route il doit emprunter pour reproduire l'erreur.

Pour activer le stacktracing sur les erreurs dans OxS, activez l'option 'show_stacktrace' dans config.inc.php (vers le bas du document). Un exemple de stacktrace ressemblera à ceci:

```
DB Error: ERROR: invalid input syntax for integer: ""
Stack Trace:
File: /var/www/ojs/classes/article/ArticleGalleyDAO.inc.php line 76
Function: DAO->retrieve("SELECT COUNT(*) FROM article_galleys WHERE public_galley_id = ? ...", Array(2))
File: /var/www/ojs/classes/submission/form/ArticleGalleyForm.inc.php line 233
Function: ArticleGalleyDAO->publicGalleyIdExists("pdf", "")
File: /var/www/ojs/pages/sectionEditor/SubmissionEditHandler.inc.php line 1459
Function: ArticleGalleyForm->execute("layoutFile")
File: /var/www/ojs/pages/sectionEditor/SubmissionEditHandler.inc.php line 1314
Function: SubmissionEditHandler::uploadGalley("layoutFile")
File: /var/www/ojs/pages/sectionEditor/SectionEditorHandler.inc.php line 469
Function: SubmissionEditHandler::uploadLayoutFile()
File: (unknown) line (unknown)
Function: SectionEditorHandler::uploadLayoutFile(Array(0))
File: /var/www/ojs/index.php line 88
Function: call_user_func(Array(2), Array(0))
File: /var/www/ojs/index.php line 99
Function: handleRequest()
```

### Je reçois l'erreur suivante: Erreur fatale: taille de mémoire autorisée de 8388608 octets épuisés (etc.)

Votre limite de mémoire PHP est probablement trop basse. Elle est normalement réglé à 8 Mo par défaut, mais OJS, OMP et OCS ont besoin d'au moins 16 Mo pour fonctionner correctement (et souvent plus pour des tâches occasionnelles telles que la mise à niveau). Vous pouvez trouver une directive de configuration `memory_limit` dans le fichier de configuration `php.ini` votre serveur.

### Après avoir complété la page d'installation, je reçois une erreur de base de données. Que se passe-t-il?

Vous recevez probablement une erreur similaire à

`DB Error: Table 'ojs.journals' doesn't exist`

... où la partie 'ojs' de l'erreur est le nom de votre base de données tel que spécifié lors de l'installation. Ce qui s'est probablement produit, c'est que vous avez tenté de créer votre base de données et que le programme d'installation a tenté de remplir cette base de données avec les données nécessaires, mais n'a pas pu le faire pour une raison quelconque. Des raisons possibles à cela incluent votre système de base de données (par exemple MySQL) ne permettant pas la création de base de données basée sur le Web; ou autrement ne permettant pas la création de table à grande échelle. La meilleure solution est de:

- restaurez votre `config.inc.php` à l'original (la copie sur `config.TEMPLATE.php` fera cela);
- créez votre base de données manuellement via phpMyAdmin, CPanel ou similaire, en fonction de ce que votre fournisseur de services fournit;
- redémarrez le processus d'installation en rechargeant votre page OJS/OMP/OCS root;
- remplissez tous les champs d'installation comme il convient, en vous assurant que vous écrivez le nom correct pour votre base de données nouvellement créée;
- décochez l'option "Créer une nouvelle base de données";
- cliquez sur l'option "Installation manuelle" tout en bas de la page d'installation.
- copiez la requête de base de données à partir de la page résultante et exécutez-la sur votre base de données via phpMyAdmin ou similaire.

Veuillez noter que lorsque vous cliquez sur le bouton Installation manuelle, la page résultante indiquera que l'installation OJS/OMP/OCS s'est terminée avec succès, mais ce n'est pas tout à fait vrai: vous devez toujours copier les instructions SQL et les ajouter à votre base de données manuellement.

**Remarque:** vous pouvez aussi rencontrer un bug du plugiciel. Il y a eu des bugs de plugiciel dans le passé où les plugiciels ont tenté d'accéder à la table «journaux» avant que le programme d'installation ait créé la table; il en résultera un message «La table 'ojs.journals' n'existe pas» quand quelqu'un essaiera de charger la page d'installation en premier lieu. Dans ce cas, vous pouvez réduire cela à un plugiciel particulier en vérifiant le stack trace.

## Compatibilité des Applications PHP et PKP

Si vous utilisez PHP 5.3+ (ce que vous devriez faire), vous devrez exécuter OJS 2.4.0+, OMP 1.0+ ou OCS 2.3.6+. Les anciennes versions du logiciel ne fonctionneront pas sur les nouvelles versions de PHP.

Si vous utilisez PHP 7+, vous devrez exécuter OJS 3.0+.

OJS et OMP 3.1.2+ **nécessitent** PHP 7.1 ou supérieur. Faire référence à [docs/README](https://github.com/pkp/ojs/tree/master/docs) pour votre version OJS/OMP pour plus d'informations sur les exigences du système PHP.

**REMARQUE** : Si vous exécutez OJS ou OMP 3.x sur un stack PHP7 + LAMP, n'oubliez pas de mettre à jour le paramètre de votre driver MySQL (section Base de Données) sur le fichier `config.inc.php` , c'est-à-dire:

`driver = mysqli`

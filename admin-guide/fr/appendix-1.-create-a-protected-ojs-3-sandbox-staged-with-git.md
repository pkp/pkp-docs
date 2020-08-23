# Annexe A: Créer un Protected OJS 3 Sandbox Staged avec Git

Le document suivant décrit des étapes générales afin de créer un sandbox basé sur git d'un journal de production qui n'est pas actuellement sur git. Il fournit des instructions sur la façon de limiter l'accès accidentel, les e-mails sortants, etc. Votre expérience peut être différente de la notre. Adaptez ce contenu à votre propre environnement; À utiliser à vos risques et périls.

## Préparer l'environnement Git

Ce README: [https://github.com/pkp/ojs](https://github.com/pkp/ojs) a des instructions pour l'installation à partir de git. Voici les étapes à suivre:

1. Créer un utilisateur et une base de données MySQL OJS. La commande que nous utilisons est la suivante; cela peut être différent pour vous en fonction de votre environnement, de l'accès à la root, etc.:

    ```
    mysql -u root -e "CREATE DATABASE `ojs-sandbox` DEFAULT CHARACTER SET UTF8; GRANT ALL ON `ojs-sandbox`.* TO `ojs`@localhost IDENTIFIED BY 'ojs'" -p
    ```

2. Extraire la branche stable de GitHub. Le chemin sera spécifique à votre installation Apache, et vous pouvez mettre à jour la branche avec la dernière branche stable:

    ```
    cd <httpd-docs-folder>
    git clone -n https://github.com/pkp/ojs.git ./
    git checkout -b stable-3_2_1 --no-track origin/stable-3_2_1
    cp config.TEMPLATE.inc.php config.inc.php
    chmod -R 755 *
    chmod 600 config.inc.php
    ```

3. Acquérir la bibliothèque PKP correspondante et extraire la branche stable à partir de GitHub, tout en vous assurant que la branche correspond à la même branche référencée ci-dessus:

    ```
    git submodule update --init --recursive
    cd lib/pkp
    git checkout -b stable-3_2_1 --no-track origin/stable-3_2_1
    ```

4. Installer le compositeur:

    ```
    cd ../..
    php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
    php -r "if (hash_file('sha384', 'composer-setup.php') === 'e0012edf3e80b6978849f5eff0d4b4e4c79ff1609dd1e613307e16318854d24ae64f26d17af3ef0bf7cfb710ca74755a') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
    php composer-setup.php
    php -r "unlink('composer-setup.php');"
    ```

5. Installer les dépendances du compositeur:

    ```
    cd lib/pkp
    php ../../composer.phar --no-dev install
    cd ../../plugins/paymethod/paypal
    php ../../../composer.phar --no-dev install
    cd ../../../plugins/generic/citationStyleLanguage
    php ../../../composer.phar --no-dev install
    ```

6. Installer les dépendances de Node.js (REMARQUE: npm doit être installé sur le serveur):

    ```
    cd ../../..
    npm install
    npm run build
    ```

7. Créer un nouveau fichier de configuration:

    ```
    cd ../../..
    cp config.TEMPLATE.inc.php config.inc.php
    ```

À ce point, vous devriez avoir un système OJS 3 fonctionnel et une base de données prête à l'emploi.

## **Éliminer toute possibilité que des tâches planifiées soient déclenchées dans le serveur intermédiaire**

Supprimer le plugiciel Acron (le plugiciel Acron peut déclencher l'exécution de tâches planifiées sans dépendre d'une tâche cron):

```
rm -rf plugins/generic/acron
rm -rf lib/pkp/plugins/generic/acron
```

Ce plugiciel devra être réinstallé après votre passage en production, ce que, si vous exécutez des tâches via git, vous pouvez faire avec ces commandes:

```
git checkout plugins/generic/acron
cd lib/pkp
git checkout plugins/generic/acron
```

## Sauvegarder et copier les fichiers soumission, publics, et base de données

Ces commandes sont exécutées durant l'installation de production, et sont vos commandes de sauvegarde/archivage typiques.

Base de données: généralement, nous utilisons mysqldump afin de créer une copie de la base de données:

```
mysqldump db\_name --opt --default-character-set=utf8 --result-file=~/client\_db.sql -u db\_user -p
```

Fichiers à soumettre: vous pouvez trouver le répertoire correct dans le fichier OJS config.inc.php, recherchez le paramètre «files_dir». Généralement, nous compressons ceci afin de faciliter le transfert:

```
cd <submission files dir>
tar -cvzf ~/files.tar.gz ./
```

Fichiers publics: cela peut inclure des éléments tel que des images de couverture et ainsi de suite, et se trouve dans le répertoire OJS system, dans le sous-répertoire «public /»:

```
cd <ojs-system-dir>/public
tar -cvzf ~/public.tar.gz ./
```

Transférer les fichiers sur le serveur intermédiaire: nous utilisons généralement `scp` ou `rsync` . Les gens qui se specialize dans votre type de système devraient savoir quoi utiliser ici, mais dans notre cas, c'est généralement quelque chose comme:

```
rsync -avz client\_db.sql username@stagingserver.org:/~
rsync -avz public.tar.gz username@stagingserver.org:/~
rsync -avz files.tar.gz username@stagingserver.org:/~
```

## Installer les fichiers de soumission, publics et de base de données aux bonnes destinations

Installer la base de données (cela peut-être différent selon le nom d'utilisateur, le nom de la base de données et le mot de passe que vous avez spécifiés précédemment):

```
mysql -u ojs-sandbox -p ojs-sandbox < ~/client\_db.sql
```

Installer les fichiers à soumettre:

```
tar -xvf ~/files.tar.gz <files directory>
```

Installer les fichiers publics:

```
tar xvf ~/public.tar.gz <ojs-folder>/public/
```

Modifier le fichier `config.inc.php` et changer les paramètres de base de données et files_dir.

```
vi config.inc.php
```

À ce point, tous les fichiers et tables de base de données pertinents doivent être en place et le fichier de configuration doit pointer vers ces emplacements.

## Nettoyer tous les e-mails dans le système afin que le système n'envoie pas d'e-mails par accident

Si vous êtes entrain d'exécuter le sandbox sur son propre serveur, vous pouvez considérer la désactivation de toutes les fonctionnalités d'e-mails sur le serveur. Mais ce qui suit marchera aussi (cela veut dire que tous les e-mails envoyés seront envoyés à des adresses e-mail non productives).

Vous pouvez changer vos adresses e-mail pour une adresse [Mailinator](https://www.mailinator.com/) , cela signifie que les e-mails seront envoyés à une boîte de réception publique accessible (par exemple, username@mailinator.com), ou utiliser une adresse e-mail truquée. Vous pouvez également définir des e-mails en fonction de rôles d'utilisateurs spécifiques. Vous devez premièrement accéder à votre base de données:

```
mysql -u ojs-sandbox -p ojs-sandbox
```

Afin de changer toutes les adresses e-mail pour username@mailinator.com:

```
UPDATE users SET email=CONCAT\(username,'@mailinator.com’\);
```

Pour définir tous les e-mails liés à la soumission, par exemple, ceux des contributeurs, à test@example.com:

```
UPDATE authors SET email = 'test@example.com’
```

## (Optionnel) Ajouter une protection par mot de passe au site afin qu'il ne soit pas accédé par accident, analysé, etc.

Nous faisons cela pour tous les sandbox en ajoutant la protection .htaccess et .htpasswd à la root web du sandbox. Les gens qui se specialize dans votre type de système sauraient comment faire cela.

## Exécuter la mise à niveau

À partir de la Sandbox web root, exécuter la commande ci-dessous:

```
php tools/upgrade.php upgrade
```

À ce point, si la mise à niveau est complète, vous devriez avoir une mise à niveau de sandbox propre et protégée qui exécute OJS 3 et que vous pouvez gérer via git.

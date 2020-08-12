# Sécurisation de Votre Système

## Les Bases

Veuillez consulter [https://pkp.sfu.ca/ojs/README](https://pkp.sfu.ca/ojs/README) , [https://pkp.sfu.ca/omp/README](https://pkp.sfu.ca/omp/README) ou [https://pkp.sfu.ca/ocs/README](https://pkp.sfu.ca/ocs/README) pour vous assurer que le répertoire d'installation du logiciel et le dossier `/files` sont configurés en toute sécurité sur votre serveur.

En général, le dossier `/files` ne doit pas être accessible sur le Web et doit être placé en dehors du répertoire principal d'installation du logiciel. L'application gérera l'accès aux fichiers de soumission privés en fonction des rôles et des autorisations des utilisateurs (c'est-à-dire que les éditeurs auront accès à tous les fichiers de soumission, tandis que les auteurs ne pourront accéder qu'à leurs propres fichiers de soumission).

De plus, pour garantir la sécurité, le dossier `/files` ne devrait pas être lisible par les autres utilisateurs du serveur. Seul le serveur Web doit disposer des autorisations de lecture/écriture nécessaires pour que OJS, OMP ou OCS puisse lire les fichiers existants et ajouter de nouveaux fichiers au dossier, par exemple

`drwxrwx---    6 ojs www 204B 11 Sep  2017 files/`

Il est recommandé d'installer un certificat SSL pour votre installation OJS, OMP ou OCS et vous assurer que votre site utilise toujours le protocole HTTPS pour gérer l'enregistrement des utilisateurs, la connexion et afin de présenter le contenu aux lecteurs. Une fois que votre certificat SSL a été installé et que son fonctionnement a été confirmé (c'est-à-dire que vous pouvez accéder à votre site via [https://myjournal.org](https://myjournal.org/) ), vous pouvez configurer votre site pour qu'il utilise toujours HTTPS en utilisant le paramètre suivant dans `config.inc.php` :

`; Forcer les connexions SSL à l'échelle du site force_ssl = Activé`

Vous devez également définir l'URL de base pour utiliser la version HTTPS de votre journal, presse ou conférence:

`; L'URL canonique de l'installation OJS base_url = "https://myjournal.org"`

Pour vous assurer que les demandes de réinitialisation du mot de passe des utilisateurs produisent des mots de passe aléatoires et sécurisés, assurez-vous de définir un sel long et aléatoire dans `config.inc.php` :

`; Le sel unique à utiliser pour générer des hachages de réinitialisation de mot de passe salt = "sdlkjfhleiqwrfgbksdlkjgbelruywoeiyt7384gdqlywqvlwjf"`

## Déployer le logiciel PKP en toute sécurité

> Section Contribué par Kenton Good

Un déploiement sécurisé du logiciel PKP peut être réalisé au mieux en utilisant les recommandations suivantes, qui sont décrites dans le document/README à chaque téléchargement du logiciel:

- Dédiez une base de données à OJS, OMP et OCS; utilisez des informations d'identification uniques pour y accéder. Configurez cette base de données pour effectuer régulièrement des sauvegardes automatiques. Effectuez une sauvegarde manuelle lors de la mise à niveau ou de la maintenance. Si vous n'avez pas accès à votre base de données, contactez votre administrateur de système et assurez-vous que des sauvegardes de base de données sont en cours pour votre OJS.
- Configurez le logiciel ( `config.inc.php` ) pour utiliser le hachage SHA1 à la place du MD5.
- Activez le captcha ou le recaptcha dans votre fichier `config.inc.php`, et vérifiez qu'ils fonctionnent. Cela empêchera la plupart des inscriptions d'utilisateurs de spam.{/code0}
- Configurez le logiciel ( `config.inc.php` ) pour utiliser `force_login_ssl` afin que les utilisateurs authentifiés communiquent avec le serveur via HTTPS. (Vous devrez également créer et configurer correctement un certificat SSL pour le faire correctement.)
- Installez le logiciel de sorte que le répertoire de fichiers ne soit PAS un sous-répertoire de l'installation OJS, OMP ou OCS et ne soit pas accessible directement via le serveur Web.
- Limitez les autorisations de fichiers autant que possible.
- Déployez et testez un mécanisme de sauvegarde approprié. Le mécanisme de sauvegarde doit sauvegarder la base de données, les fichiers système, et le répertoire des fichiers de soumission (le paramètre `files_dir` dans `config.inc.php`). Idéalement, vous devez effectuer des sauvegardes sur et hors site.
- Assurez-vous que votre environnement de serveur Web est régulièrement mis à jour, en particulier avec tous correctifs de sécurité.

Si ces étapes sont suivies, vous réduirez considérablement le risque de devenir la proie des techniques de piratage courantes. Si vous utilisez déjà OJS, OMP ou OCS, nous vous recommandons vivement de revoir vos configurations existantes et de vous assurer que ces étapes ont été suivies.

### Gestion sécurisée de fichiers

Les auteurs, les réviseurs et les éditeurs traitent quotidiennement les fichiers de soumission de personnes qu'ils ne connaissent pas, et il y a quelques précautions de base que vous voudrez prendre pour limiter la possibilité d'être compromis via l'un de ces fichiers. Ces étapes ne diffèrent pas de la façon dont vous traiteriez le courrier électronique ou toute autre vie quotidienne sur Internet, mais méritent d'être décrites de manière générale ici.

- Assurez-vous que vous disposez d'un logiciel antivirus installé et qu'il est à jour
- Assurez-vous que votre système d'exploitation et tous les logiciels (en particulier Word et Excel) sont tenus à jour, idéalement en activant toutes les fonctionnalités de mise à jour automatique disponibles.
- Assurez-vous d'avoir une solution de sauvegarde disponible pour vos ordinateurs de travail
- Pratiquez une bonne gestion des mots de passe: n'utilisez pas le même nom d'utilisateur/mot de passe dans OJS, OMP ou OCS comme vous le feriez pour tout autre compte en ligne, et n'utilisez pas un mot de passe facile à deviner
- Traitez tout ce que vous obtenez en ligne en sachant que vous l'avez reçu de quelqu'un que vous ne connaissez pas et agissez comme tel. Si une soumission semble suspecte, quelle que soit la raison (adresse e-mail étrange, titre ou résumé générique suspect, etc.), traitez les fichiers inclus avec un niveau de diligence supplémentaire.

## Cryptage

> Section Contribué par Kenton Good

L'utilisation du cryptage SSL/TLS pour sécuriser votre site offre des avantages en matière de sécurité, de confidentialité, de protection contre la censure, d'optimisation des moteurs de recherche et d'intégrité de données.

### Avantages en matière de Sécurité et de Confidentialité

- Les navigateurs Web ont commencé à afficher des avertissements concernant les sites non sécurisés pour ces sites Web encore servis sous http. Les utilisateurs qui voient un tel message lorsqu'ils visitent votre site peuvent donner l'impression qu'un site semble illégitime ou potentiellement malveillant.
- Sans cryptage, les connexions administrateur et utilisateur reçoivent un texte clair, exposant potentiellement ces informations d'identification à quiconque analyse le réseau.
- Sans cryptage, vous ne protégez pas ce que vos utilisateurs accèdent ou recherchent sur votre site. Quiconque analyse le réseau peut voir ces requêtes.

### Avantages de l'Optimisation des Moteurs de Recherche (OMR)

Google a annoncé en 2014 que https [serait traité comme un signal de classement,](https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html) ce qui signifie que les sites Web servis sous https seront plus faciles à trouver dans l'index Google que ceux servis sous http.

### Obtenir un Certificat

Un certificat permet une connexion sécurisée du navigateur Web de l'utilisateur au serveur hébergeant votre site. L'installation d'un certificat pour votre site ne peut pas être effectuée dans le logiciel OJS, OMP ou OCS et nécessitera une expertise technique ou une assistance au niveau du serveur. Lors de l'examen d'un logiciel hôte, la détermination de son niveau de prise en charge des certificats est une considération importante.

Un bon début consiste à demander à votre fournisseur de services d'hébergement s'il dispose d'une solution existante pour prendre en charge les certificats TLS ou SSL - Votre fournisseur d'hébergement peut être en mesure de créer/émettre un certificat TLS ou SSL pour vous. Si vous ne disposez pas d'un accès shell à votre installation, cela peut être le seul moyen d'ajouter une protection SSL/TLS à votre site.

L'achat d'un certificat peut également être une option à votre disposition. Les entreprises commerciales qui fournissent des certificats sont appelées [Autorités de Certification](https://en.wikipedia.org/wiki/Certificate_authority) (AC). Wikipédia fournit une liste des [fournisseurs d'AC](https://en.wikipedia.org/wiki/Certificate_authority#Providers) par part de marché. En plus de fournir des certificats qui permettent le cryptage, les certificats traditionnels émis par l'AC offrent plusieurs avantages; notamment la vérification des clients pour aider à valider l'identité du client et les certificats génériques. Selon les fonctionnalités que vous sélectionnez lors de votre achat, les certificats émis par les AC peuvent coûter 100 USD par an et doivent être renouvelés avant l'expiration.

[Let's Encrypt](https://letsencrypt.org/) est également une option populaire pour obtenir un abonnement. Let's Encrypt est une autorité de certification (AC) gratuite, automatisée et ouverte, exécutée dans l'intérêt du public. Il s'agit d'un service fourni par l'Internet Security Research Group (ISRG). Les certificats sont fournis gratuitement, avec certaines limitations:

- Seuls les certificats VD (Validation de Domaine) sont proposés
- Un peu plus technique, si votre hébergeur ne vous prend pas déjà en charge, vous devrez générer à partir du shell

### Activation de SSL (nécessite accès au shell):

#### Génération de DSC (Demande de Signature de Certificat)

Étape requise pour générer un certificat si vous allez acheter un certificat auprès d'une autorité de certification qui n'est pas Let's Encrypt. Pour ce qui est de la façon de procéder, cela varie d'une distribution Linux à l'autre, quelques exemples Linux courants peuvent être trouvés ici:

- [Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-create-a-ssl-certificate-on-apache-for-ubuntu-14-04)
- [CentOS/RHEL 7](https://www.digitalocean.com/community/tutorials/how-to-secure-apache-with-let-s-encrypt-on-centos-7)
- [Génération du certificat LetsEncrypt à l'aide de Certbot à travers Shell](https://certbot.eff.org/) (fournit des instructions personnalisées en fonction de l'environnement d'hébergement Apache, Nginx, etc.)
- [Guide to generating a .CSR in Apache](https://www.alphassl.com/support/create-csr/apache.html)

#### Maintenir vos Certificats

Lorsque vous achetez un certificat auprès d'une AC, vous achetez généralement un certificat qui dure entre 1 et 3 ans. Les certificats vont inévitablement expirer et devront être renouvelés, ce qui entraînera une nouvelle dépense au moment du renouvellement. Les certificats Let's Encrypt expirent tous les 90 jours. Le logiciel Let's Encrypt (certbot) peut être configuré pour renouveler automatiquement les certificats avant leur expiration. Cela signifie qu'une fois installé, vous devriez avoir une maintenance minimale à l'avenir. L'automatisation se fait avec `cron` ou `systemd` .

## Gérer le Spam

Il existe plusieurs étapes de configuration que vous pouvez suivre pour lutter contre le SPAM et d'autres formes d'activité d'inscription malveillante sur votre site.

### CAPTCHA/ReCAPTCHA

Configurez un CAPTCHA et activez-le pour l'enregistrement des utilisateurs, les notifications et les commentaires. Nous vous conseillons vivement d'utiliser [ReCAPTCHA de Google](https://www.google.com/recaptcha/intro/) . (Les anciennes versions d'OJS 2 incluent un captcha PHP, mais cela s'est avéré moins sûr que ReCaptcha.)

Si vous utilisez OJS plus ancien que 2.4.8-3, vous ne pourrez pas utiliser la version la plus récente de ReCAPTCHA (v2), et votre ReCAPTCHA ne fonctionnera pas correctement après le 31 mars 2018. La **mise à niveau est fortement recommandée** .

Pour configurer ReCAPTCHA:

1. Créez un compte et créez une «propriété» pour votre site Web ici: [https://www.google.com/recaptcha/intro/](https://www.google.com/recaptcha/intro/)
2. Assurez-vous que les lignes pertinentes à l'activation du captcha ne sont pas commentées dans ` config.inc.php {/ code0}`
3. Copiez et collez les clés publiques et privées que vous recevez dans le cadre de l'enregistrement de la propriété dans la section `[captcha]` de `config.inc.php` :

```
recaptcha_public_key = 123456abcdef
Recaptcha_private_key = abcdef123456
```

N'oubliez pas de tester cette configuration en enregistrant un compte de test et en confirmant que a) le ReCAPTCHA apparaît et b) le ReCAPTCHA valide correctement.

### Activer la Validation du Compte

OJS, OMP et OCS peuvent être configurés de sorte qu'une étape de validation de compte de messagerie doit être effectuée pour tous les nouveaux comptes d'utilisateurs avant qu'ils ne puissent se connecter et interagir avec le système. Pour ce faire, décommentez et configurez les lignes suivantes dans `config.inc.php` :

```
; Si cette option est activée, les adresses e-mail doivent être validées avant que la connexion ne soit possible.
require_validation = On

; Nombre maximum de jours avant l'expiration et la suppression d'un compte non validé
validation_timeout = 14
```

La configuration ci-dessus exigera que toutes les nouvelles inscriptions cliquent sur un lien et valident leur compte avant de pouvoir se connecter; et éliminera automatiquement tous les comptes non validés après 14 jours.

### Nettoyer de nombreux utilisateurs

Si vous avez été la cible d'un bot SPAM, l'activation des procédures ci-dessus peut ne pas suffire: vous avez peut-être déjà un grand nombre de comptes SPAM dans votre système. La seule façon de supprimer des utilisateurs est de fusionner les comptes de spam dans un compte existant à l'aide de l'outil Fusionner les Utilisateurs. (Cela supprime effectivement les utilisateurs problématiques. Toutes les soumissions, l'historique éditorial, etc. du ou des utilisateurs problématiques sont fusionnés dans l'autre compte utilisateur.)

Cet outil peut être utilisé via l'interface utilisateur, mais il est plus lent (et seul OJS/OCS 2 a actuellement une option pour fusionner plus d'un utilisateur à la fois dans l'interface utilisateur). Une méthode plus efficace consiste à utiliser l'outil de ligne de commande:

`$ php tools/mergeUsers.php myUsername spamUser`

Depuis OJS / OMP 3.2, plusieurs utilisateurs peuvent être fusionnés en une seule commande:

`$ php tools/mergeUsers.php myUsername spamUser1 spamUser2 spamUser3 [...]`

… Où `myUsername` est l'utilisateur qui sera fusionné et `spamUser` est l'utilisateur à supprimer. Avant OJS / OMP 3.2, cet outil ne fonctionne que sur une seule fusion à la fois, mais peut être scripté. Un exemple de script php serait:

```
<?php
$names = file('/tmp/names.txt', FILE_SKIP_EMPTY_LINES);
foreach ($names as $member_name => $member) {
        echo exec ("php /ojswebroot/tools/mergeUsers.php admin-user " .escapeshellcmd($member));
}
?>
```

Le script s'attend à ce que tous les comptes de spam soient identifiés par nom d'utilisateur et répertoriés dans un fichier `names.txt` , un nom par ligne, comme ceci:

```
spamuserOne
spamUserTwo
spamUserThree
…
```

Le fichier `names.txt` doit être stocké sur le serveur et l'emplacement référencé par le script (par exemple «/tmp/names.txt»). Le script doit également spécifier l'emplacement du script mergeUsers.php (par exemple «/ojswebroot/tools/mergeUsers.php»), ainsi que l'utilisateur dans lequel tous ces comptes doivent être fusionnés (par exemple «admin-user» - il doit s'agir d'un compte existant). Mettez à jour ces paramètres en fonction de votre environnement. **Ne stockez pas ce script, ou le fichier `names.txt`, dans un emplacement accessible sur le Web!**

## FAQ sur la Sécurité

> Section Contribué par Kenton Good et adaptée du [forum communautaire PKP](https://forum.pkp.sfu.ca/t/pkp-applications-and-security/27991)

Vous trouverez ci-dessous quelques questions générales auxquelles nous avons répondu à plusieurs reprises dans le passé, ainsi que quelques réponses. Nous ajouterons à cette liste au fur et à mesure que nous recevrons des questions.

**Annoncez-vous des vulnérabilités de sécurité, et si oui, où?**

Nous le faisons. PKP annonce toutes les vulnérabilités de sécurité valides, et leurs correctifs respectifs lorsqu'ils sont disponibles, via le forum communautaire; notre blog d'actualité; via Facebook et Twitter; et sur nos pages de téléchargement d'applications. Tous les correctifs sont également publiés dans notre référentiel de code Github. Dans le cas où une tierce partie divulgue une vulnérabilité de sécurité, nous demandons qu'une divulgation publique ne soit pas faite tant qu'un correctif n'est pas disponible, après quoi nous travaillerons avec la tierce partie pour informer le public de la vulnérabilité et du correctif.

**Je crois avoir trouvé une faille de sécurité. Comment puis-je le signaler?**

Veuillez envoyer une description détaillée de la vulnérabilité à notre courrier électronique d'assistance: [support@publicknowledgeproject.org](mailto:support@publicknowledgeproject.org). Nous vous répondrons dans les plus brefs délais avec une évaluation de la vulnérabilité. S'il s'agit en fait d'une vulnérabilité d'OJS, OMP ou OCS (c.-à-d. Pas un piratage dû à une mauvaise configuration générale du serveur/logiciel, ou une vulnérabilité dans une autre application logicielle, ou quelque chose déguisé pour ressembler à une vulnérabilité, ce que nous faisons voir à l'occasion), nous passerons aux étapes suivantes: identifier et publier un correctif, puis divulguer le problème et le corriger au public.

Une autre option est de soumettre un problème (et, si disponible, un correctif sous la forme d'une pull request) via [Github](https://github.com/pkp/pkp-lib) .

**Mon journal a une tonne d'inscriptions de spam. Puis-je faire quelque chose à ce sujet?**

Oui, vous pouvez activer les paramètres captcha de votre site, qui se trouvent dans votre fichier `config.inc.php`. Il existe un captcha régulier et une mise en œuvre de Recaptcha de Google qui nécessite ses propres clés privées/publiques (que vous pouvez obtenir auprès de Google - voir le fichier `config.inc.php` pour plus d’instructions). Vous pouvez également activer la validation d'e-mails dans votre fichier `config.inc.php` pour obliger les inscrits à valider leur compte via un lien e-mail. Les comptes non validés seront automatiquement supprimés après un certain nombre de jours, que vous pouvez définir. Consultez `require_validation` et `validation_timeout` dans le fichier de configuration.

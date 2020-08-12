# Email

Ce chapitre explique comment les emails sont envoyés dans OJS, OMP et OCS; les options de configuration disponibles; et comment résoudre les problèmes de messagerie.

Le courrier dans les applications logicielles PKP utilise [la bibliothèque PHPMailer](https://github.com/PHPMailer/PHPMailer) . Vous pouvez en savoir plus à propos de PHPMailer sur [leur wiki](https://github.com/PHPMailer/PHPMailer/wiki). D'autres codes liés au courrier peuvent être trouvés dans [la classe mail pkp-lib](https://github.com/pkp/pkp-lib/tree/master/classes/mail) .

Les enregistrements des emails envoyés sont stockés dans la table `email_log` de la base de données.

Les applications logicielles PKP offrent un certain nombre d'options pour configurer les emails afin qu'ils fonctionnent dans votre environnement. Les options de configuration suivantes sont disponibles pour les emails dans `config.inc.php` :

```
;;;;;;;;;;;;;;;;;;
; Paramètres d'emails ;
;;;;;;;;;;;;;;;;;;

[email]

; Utilisez SMTP pour envoyer du mail au lieu de mail()
; smtp = on

; Paramètres du serveur SMTP
; smtp_server = mail.example.com
; smtp_port = 25

; Activer l'authentification SMTP
; Mécanismes pris en charge: ssl, tls
; smtp_auth = ssl
; smtp_username = nom d'utilisateur
; smtp_password = mot de passe

; Autoriser la spécification de l'expéditeur de l'enveloppe
; (peut ne pas être possible avec certaines configurations de serveur)
; allow_envelope_sender = Off

; Expéditeur d'enveloppe par défaut à utiliser si aucun n'est spécifié ailleurs
; default_envelope_sender = mon_adresse@my_host.com

; Forcer l'expéditeur d'enveloppe par défaut (si présent)
; Ceci est utile si vous configurez une adresse de non-réponse à l'échelle du site
; Le champ de réponse sera défini avec l'adresse de réponse ou l'adresse initiale.
; force_default_envelope_sender = Off

; Forcer un DMARC conforme à partir de l'en-tête (RFC5322.From)
; Si l'un de vos utilisateurs possède des adresses email dans des domaines qui ne sont pas sous votre contrôle
; vous devrez peut-être les configurer pour être conforme aux politiques DMARC publiées par
; ces domaines tiers.
; Ce réglage déplacera l'adresse des utilisateurs dans le champ de réponse et
; from field sera réécrit avec default_envelope_sender.
; Pour l'utiliser, vous devez définir force_default_enveloper_sender = On et
; default_envelope_sender doit être défini sur une adresse valide dans un domaine que vous possédez.
; force_dmarc_compliant_from = Off

; Le nom d'affichage à utiliser avec un DMARC doit conformer à celui de l'en-tête
; Par défaut, le DMARC compatible de aura un nom vide mais cela peut
; être modifié en ajoutant un texte ici.
; Vous pouvez utiliser '%n' pour insérer le nom de l'utilisateur à partir de l'original de l'en-tête
; et '%s' pour insérer le nom de site localisé.
; dmarc_compliant_from_displayname = '%n via %s'
```

Pour en savoir plus sur les emails dans l'interface utilisateur OJS, voir [Apprendre OJS 3](https://docs.pkp.sfu.ca/learning-ojs/en/) .

## Envoi de Mail

Par défaut, PHPMailer enverra le mail via la fonction `mail()` intégrée de PHP.

Sur Windows, PHP doit être configuré pour envoyer des emails via un serveur SMTP (fonctionnant soit sur la même machine, ou sur une autre machine).

Sur d'autres plates-formes telles que Linux et Mac OS X, PHP enverra du courrier en utilisant le client sendmail local, donc un MTA local tel que Sendmail ou Postfix doit être exécuté et configuré pour autoriser le courrier sortant.

Voir [https://www.php.net/manual/en/function.mail.php](https://www.php.net/manual/en/function.mail.php) pour plus de détails sur la configuration de la fonctionnalité de messagerie de PHP.

Notre logiciel peut aussi être configuré pour utiliser un serveur SMTP comme spécifié dans `config.inc.php`, avec ou sans authentification.

## Définir une Adresse de Rebond

Afin de contrôler l'adresse à laquelle un email rejetté sera envoyé, vous devez définir l'adresse de l'expéditeur de l'enveloppe. Activez l'option `allow_envelope_sender` dans la section `[email]` du fichier de configuration; lorsque cette option est activée, un champ "Adresse de rebond" apparaît dans la section Email sous Configuration.

Notez que cette option peut nécessiter des modifications de la configuration du serveur mail du serveur afin que l'utilisateur que le serveur Web exécute (par exemple "www-data") soit approuvé par le programme sendmail; sinon, un en-tête "X-Warning" sera ajouté aux messages sortants. Consultez la documentation de votre serveur mail si les emails sortants incluent un tel en-tête.

Par exemple, Sendmail garde une liste d'utilisateurs de confiance dans `/etc/mail/trusted-users`; d'autres systèmes de messagerie utilisent des fichiers similaires.

L'option de ligne de commande utilisée pour définir l'expéditeur de l'enveloppe est `-f`.

## Email et Lieux

Les modèles de courrier électronique sont installés directement dans la base de données lors de la création d'un journal, d'une presse ou d'une conférence. Si vous avez besoin de modifier [un fichier local](https://github.com/pkp/ojs/blob/master/locale/en_US/emailTemplates.xml), toute modification apportée à votre fichier de modèle ne sera pas prise en compte tant que vous n'aurez pas rechargé tous les modèles dans le système.

Le rechargement des modèles remplacera toutes les modifications que vous avez faites. Pour garder ces modifications, vous devrez enregistrer ces modifications localement et les rajouter aux modèles là où nécessaire.

## Contacts Principaux et Techniques

Toutes les applications PKP nécessitent que les contacts principaux et techniques soient configurés sous Configuration pour des opérations quotidiennes appropriées. Ceci est nécessaire pour chaque journal, presse, ou conférence du système.

- Dans OJS 2.x, cela peut être fait dans *Setup Step 1* .
- Dans OCS 2.x, cela peut être fait dans *Website Management Step 1*.
- Dans OJS/OMP 3.x, cela peut être fait sous *Settings > Journal > Contact*.

## Validation des Emails pour les Nouveaux Utilisateurs

OJS fournit un formulaire d'auto-inscription à tous les utilisateurs qui peut être désactivé ou réactivé sous *Menu Admin > Utilisateur et Rôles > Options d'Accès au Site > Enregistrement Utilisateur*

Une fois activée, chaque utilisateur sera capable de s'inscrire et créer un compte dans le Journal avec un rôle de lecteur, d'auteur et/ou de réviseur; cependant, il n'est pas inhabituel pour les utilisateurs de créer des comptes spam qui encombreront la liste des utilisateurs légitimes et augmenteront la charge de travail des éditeurs de journaux pour vérifier ces comptes et les nettoyer manuellement.

La création de compte spam en masse peut être réduite avec deux paramètres dans `config.inc.php` :

```
; Si activée, les adresses email doivent être validées avant que la connexion ne soit possible.
require_validation = Off

; Nombre maximum de jours avant l'expiration et la suppression d'un compte non validé
validation_timeout = 14
```

Le premier paramètre est `require_validation` , qui est défini pour être `Off` par défaut. Lorsqu'il est défini pour être  `On` , ce paramètre exigera que chaque nouvel utilisateur active son compte avant de pouvoir utiliser le système pleinement.

Le second paramètre est `validation_timeout`, qui est défini pour être  `14` par défaut. Ce paramètre ne fonctionne que lorsque la commande `require_validation` est activée et signifie qu'un utilisateur dispose de 14 jours pour activer son nouveau compte ou le compte sera automatiquement supprimé du système lorsque la limite de temps sera atteinte.

## Configurer le Système pour Utiliser Gmail SMTP

Afin d'utiliser Gmail SMTP pour envoyer des emails depuis OJS, vous pouvez utiliser les paramètres suivants dans `config.inc.php`.

Pour OJS 2.x:

```
; Utilisez SMTP pour envoyer du mail au lieu de mail ()
smtp = On

; Paramètres du serveur SMTP
smtp_server = "ssl: //smtp.gmail.com"
smtp_port = 465

; Activer l'authentification SMTP
smtp_auth = PLAIN
smtp_username = "utilisateur@gmail.com"
smtp_password = "mot de passe"
```

Pour OJS 3.x:

```
; Utilisez SMTP pour envoyer du mail au lieu de mail ()
smtp = On

; Paramètres du serveur SMTP
smtp_server = smtp.gmail.com
smtp_port = 465

; Activer l'authentification SMTP
smtp_auth = ssl
smtp_username = "utilisateur@gmail.com"
smtp_password = "mot de passe"
```

Des informations supplémentaires sur Gmail SMTP sont disponibles sur [adresse https://support.google.com/a/answer/176600?hl=fr](https://support.google.com/a/answer/176600?hl=en) .

Notez que vous devrez peut-être aussi configurer des mots de passe spécifiques à l'application dans Gmail; voir [https://support.google.com/accounts/answer/185833?hl=fr](https://support.google.com/accounts/answer/185833?hl=en) pour plus de détails.

## Problèmes SPF et DMARC

### Sender Policy Framework (SPF)

Le Sender Policy Framework (SPF) se base sur l'autorisation qu'un serveur, qui peut exécuter OJS, reçoit d'un autre serveur qui héberge le domaine principal. Cela autorise le serveur OJS à envoyer des e-mails en utilisant ce domaine et empêche les messages d'être bloqués.

SPF est requis quand votre installation OJS s'exécute sur un serveur différent, y compris un sous-domaine, de votre domaine principal; Par exemple, lorsque vous hébergez un journal situé sur journal.domain.com sur un serveur situé en dehors de l'institution qui héberge domain.com.

Dans cette situation, vous devrez demander à votre personnel des services informatiques d'activer une entrée TXT dans votre zone DNS, qui vous permet l'envoi d'e-mails et de notifications au nom de @domain.com. Voici un exemple de scénario possible où un enregistrement SPF est requis:

Serveur exécutant OJS:

```
IP: 10.10.10.10
Server name: myojsserver.com (il ne s'agit pas de votre domaine, mais uniquement d'un nom de serveur défini par votre fournisseur hôte OJS)
```

Ce serveur devra être inclus dans votre zone DNS en tant qu'enregistrement SPF TXT. Dans ce cas, vous devrez ajouter les éléments suivants:

```
Name: vide ou défini sur @ (selon les instructions de votre registraire de domaine)
Type: TXT
Value: v=spf1 ip4:10.10.10.10 a:myojsserver.com ~all
```

Si vous avez déjà un enregistrement TXT dans votre zone DNS, vous devrez le fusionner pour ne conserver qu'un seul enregistrement TXT. Il ne doit y avoir qu'un seul enregistrement DNS TXT.

### Authentification, Rapport et Conformité des Messages Basés sur le Domaine (DMARC)

Même si SPF offre la prévision pour que OJS envoie des emails en utilisant un chemin de retour ou une enveloppe d'email contenant une adresse email avec un domaine autre que celui sur lequel le serveur OJS est hébergé, de temps en temps, OJS envoie des emails de la part des utilisateurs qui utilisent des domaines pour lesquel vous ne pouvez pas ajuster l'enregistrement SPF. Gmail est un bon exemple: si un administrateur a une adresse `user@gmail.com`, il n'y a pas moyen que Google nous ajoute en tant qu'enregistrement SPF.

DMARC résout cela en ajoutant l'email de l'utilisateur dans l'adresse `reply-to:`, et en ajoutant  `default_envelope_sender` dans le champ `From:`. Depuis OJS 3.1.2, vous pouvez configurer cela via deux nouveaux paramètres dans votre fichier `config.inc.php`, c'est-à-dire `force_dmarc_compliant_from` et `dmarc_compliant_from_displayname`. (Si vous êtes sur OJS 3.1.2+ et que vous ne voyez pas ces paramètres dans votre fichier config, vous devrez reviser votre fichier `config.TEMPLATE.inc.php` et les déplacer comme ils y apparents.)

## Dépannage des Problèmes de Courrier Électronique

Si certains utilisateurs ne reçoivent pas d'emails, la première chose à faire est de vérifier si vous pouvez vous-même recevoir des emails. Essayez d'envoyer un e-mail à vous-même à l'aide du système. Si vous l'avez reçu, l'application logicielle envoie probablement les e-mail correctement. Vous devriez alors demander à l'utilisateur qui a le problème de vérifier les dossiers spam/courrier indésirable de son courrier électronique.

Si l'utilisateur ne trouve aucun enregistrement d'email filtré comme spam ou courrier indésirable, vous rencontrez peut-être un problème de validation **Sender Policy Framework** (SPF) avec son serveur. Vous pouvez le confirmer en consultant le log de mail de votre serveur pour voir s'il y a des reçus de blocages/retours signalés avec des erreurs de validation SPF comme résultat.

### Explication et Solution

Depuis la version 2.4.6, OJS a inclus un changement dans la façon dont les emails sont envoyés. Auparavant, tous les e-mails étaient envoyés en utilisant l'adresse email de l'utilisateur OJS dans le champ «FROM». Cela a malheureusement conduit à certains problèmes avec les emails sortants du journal étant marqués comme "usurpés" par certains serveurs d'email car les adresses email en question (par exemple, "james@myinstitution.org ") ne correspondaient pas au nom de domaine du serveur envoyant l'email (par exemple, "myjournal.com"). (Techniquement, les e-mails échouaient à la validation du Sender Policy Framework (SPF).) Être signalé de cette manière est plus grave que d'être considéré comme du spam: dans de nombreux cas, le serveur de réception n'attribuera pas l'email à la file d'attente de spam/courrier indésirable, et choisira simplement de le supprimer.

#### Solution 1 (OMP, OJS):

Pour éviter que cela ne se produise, l'équipe de développement de PKP a adopté une méthode de notification par email similaire à d'autres applications Web telles que WordPress: envoyez tous les e-mails du système en utilisant une adresse email centrale dans le champ «FROM», avec les adresses email des destinataires prévus dans le champ "REPLY-TO". L'adresse e-mail centrale à utiliser par défaut est celle fournie à l' **Étape 1.2 de Configuration du Journal: Contact Principal**, dont le domaine doit correspondre au nom de domaine à partir duquel le journal envoie le courrier. (Si cette adresse email ne peut pas correspondre au domaine d'envoi par journal, une adresse email alternative peut être configurée au niveau du site via le fichier OJS config.inc.php). De plus, un nouveau paramètre «En-tête d'Email» a été fourni à l' **Étape 1.4 de Configuration du Journal: Identification d'Email** , qui peut être utilisé pour fournir un texte explicatif au destinataire.

Pour configurer cela correctement, nous suggérons ce qui suit:

- Si vous n'êtes pas déjà sur OJS 2.4.6+, mettez à niveau.
- Configurez l'adresse email qu'OJS utilisera pour envoyer tous les emails à l'aide du paramètre «Contact Principal» de l'Étape 1.2 de Configuration du Journal.
    - Si possible, faites en sorte que votre adresse email de contact principal serve de point de contact général pour le journal et qu'elle corresponde au nom de domaine du journal. Par exemple, si votre nom de domaine est "hypothesisjournal.com", essayez d'utiliser une adresse email comme "editor@hypothesisjournal.com".
- Fournissez un texte explicatif en utilisant le paramètre "En-tête d'Email" à l'Étape 1.4 de Configuration du Journal. Ce texte apparaîtra en haut de chaque email généré par le système. N'oubliez pas que ces emails sont généralement des notifications pour les utilisateurs et doivent être traités comme des emails de notification provenant d'autres systèmes. Nous recommandons le texte suivant:

```
Vous recevez cet email de la part de <nom_du_journal>. En cas de demande de réponse, vous pouvez répondre directement à cet email.
```

#### Solution 2 (OCS, mais aussi OJS et OMP):

Configurez votre installation pour utiliser le service SMTP de GMail. Voir [la section ci-dessus sur SMTP](#Sender-Policy-Framework-(SPF)) pour plus d'informations.

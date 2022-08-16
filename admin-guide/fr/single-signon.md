# Authentification des utilisateurs et authentification unique

Afin de synchroniser les comptes d'utilisateurs entre plusieurs applications, OJS et OCS prennent en charge LDAP et Shibboleth, qui ont tous deux des degrés de prise en charge variables dans d'autres applications, notamment PhpBB, Drupal, WordPress et d'autres systèmes de gestion de contenu.

*LDAP* (le protocole Lightweight Directory Access Protocol), bien qu'il ne soit pas aussi puissant que Shibboleth (par exemple, LDAP ne prend pas en charge l'authentification unique, où la connexion à un service se connecte automatiquement à tous les autres), est un choix courant pour centraliser l'authentification sur un serveur. Une implémentation LDAP populaire est [OpenLDAP,](https://www.openldap.org/) une implémentation open source du protocole.

*Shibboleth* est une alternative puissante à LDAP pour la gestion et l'authentification des utilisateurs, et sa popularité a grandi. Shibboleth offre les capacités de synchronisation de compte de LDAP ainsi que la fonctionnalité d'authentification unique (où la connexion à un service se connecte automatiquement à tous les autres), offrant une intégration plus harmonieuse entre vos applications Web. Cependant, Shibboleth peut être beaucoup plus complexe à installer et à configurer que LDAP.


## Configurer Shibboleth

*Remarque* : veuillez noter que l'assistance Shibboleth n'a pas encore été portée sur OCS.

Shibboleth est géré par [Internet2 Middleware Initiative](http://shibboleth.internet2.edu/) et, en tant que tel, son site Web fournit un emplacement central pour les téléchargements et la documentation. Actuellement, ils fournissent Shibboleth Service Provider 2.1 sous forme binaire pour tous les principaux systèmes d'exploitation, ainsi que le code source. Pour plus d'informations sur l'installation et la configuration du fournisseur de services Shibboleth, veuillez consulter la documentation de support d'Internet2.

Une fois Shibboleth installé sur votre système, l'intégration avec votre application PKP nécessite la révision du fichier `config.inc.php` trouvé dans le répertoire de base, dans la section `[security]`.  After enabling this plugin, visit the plugin's Settings page for instructions on configuration.

## Ressources

* [Cyrus SASL for System Administrators](http://www.sendmail.org/~ca/email/cyrus/sysadmin.html)
* [Shibboleth Documentation](https://wiki.shibboleth.net/confluence/display/SP3)

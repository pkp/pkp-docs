---
generateHeadingToc: true
title: Cómo actualizar
description: Cómo actualizar Open Journal System (OJS) y otros sistemas desarrollados por PKP, incluye guías paso a paso
---

# ¿Cómo actualizar?

> ¿Quieres saber cuándo se publican las nuevas versiones y qué hay de nuevo? Lea el foro de anuncios [](https://forum.pkp.sfu.ca/c/announcements/10). 
> 
> {:.notice}

Esta guía te ayudará a actualizar Open Journal Systems (OJS). En ella encontrarás el conocimiento y las herramientas que necesitarás para actualizar tu sistema, asimismo contiene un tutorial paso a paso que podrás seguir.

Las instrucciones debajo decriben cómo actualizar OJS cuando el mismo esté instalado en un entorno LAMP stack (Linux, Apache, MySQL, PHP). De igual modo, estos pasos se podrán adaptar tanto para actualizar otros sistemas desarrollados por PKP (OMP, OPS) como para realizar actualizaciones de instalaciones en otros entornos de servidor.

## Required Knowledge and Tools

> **¡ATENCIÓN!** revisa la lista debajo y comprueba si cuentas con los conocimientos y herramientas necesarios para avanzar. Un mal procedimiento durante la actualización puede generar errores irrecuperables. 
> 
> {:.warning}

Para proceder con esta guía deberás contar con experiencia en el uso de herramientas de administración de sistemas y comprender la lógica del entorno LAMP stack en la configuración de tu servidor, a continuación te brindamos una lista para que compruebes si cuentas con lo necesario para continuar:

- Competencias básicas de administrador de GNU/Linux
- Credenciales de gestión de servidor, incluídas las credenciales de la base de datos.
- Conocimiento del entorno LAMP stack de tu servidor. (Si estás trabajando en otro entorno ten en cuenta que deberás adaptar esta guía a tus necesidades)
- Acceso a la terminal del servidor (SSH).
- Una versión de actualización publicada de OJS, identificada previamente, a la que vayas a actualizar (paso 5 del tutorial).

### Preparando la actualización...

Before starting your upgrade, you can review `docs/release-notes` and the [release notebook](/dev/release-notebooks/) for your upgrade version to learn about important changes introduced in each version. El `config.TEMPLATE.inc.php` incluye una descripción para la mayoría de los parámetros de configuración.

Tenga en cuenta que una actualización puede tomar de unos minutos hasta varias horas dependiendo del tamaño de su sitio.

### Una nota sobre las versiones:

Todos los desarrollos de PKP utilizan una variante de [Versionado semántico](https://semver.org) descrito como `major.minor.revision-build`. Cada punto del número de versión describe el tipo de cambios que puedes esperar.

| Tipo        | Ejemplo   | Descripción:                                                                                                                                                                                     |
| ----------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| major       | `3.x.x-x` | Cambios estructurales disrruptivos que modifican por completo el sistema y pueden afectar el funcionamiento de los *plugins*, la configuración de los servidores y todas las partes del sistema. |
| menor       | `3.3.x-x` | Cambios estructurales que pueden afectar a los *plugins* y a la configuración del servidor                                                                                                       |
| revisión    | `3.3.3-x` | Se añaden nuevas caractarísticas y/o funciones, pero los cambios estructurales se limitan al mínimo.                                                                                             |
| compilación | `3.3.3-3` | No hay cambios estructurales ni migraciones de bases de datos.                                                                                                                                   |

Al paso entre una versión y otra se lo denomina "Salto"". Para poder comprender el proceso de actualización, primero deberás determinar el tamaño del "Salto" que implica la actualización. Un "Salto" de la versión `3.3.0-6` a la versión`3.3.0-7` probablemente se puede hacer con un tiempo mínimo de inactividad. Sin embargo, un "Salto" de la versión `2.4` a `3.2` será un proceso largo y complejo con un mayor riesgo de introducir problemas.

Es recomendable que realices las actualizaciones en un entorno de prueba primero, incluso cuando se actualiza de una compilación a otra.

### Actualización desde 2.x

No siempre es posible actualizar de una versión 2.x a cualquier versión de 3.x. Al realizar actualizaciones desde una versión 2.x, primero debería actualizar a versiones intermedias. La siguiente tabla describe los pasos necesarios.

| De           | a            | Descripción                                                                                        |
| ------------ | ------------ | -------------------------------------------------------------------------------------------------- |
| `< 2.4.8` | `2.4.8-x`    | Antes de actualizar a 3.x, asegúrese de que ha sido actualizado a la última compilación `2.4.8-x`. |
| `2.4.8-x
`   | `3.2.1-x
`   | No puedes actualizar a 3.3.x o posterior desde 2.x                                                 |
| `3.2.1-x
`   | `3.3 >=
` | Actualizar de `3.2.1-x` a cualquier versión 3.3 o posterior.                                       |

## Tutorial de actualización

En el siguiente tutorial te proporcionaremos el proceso recomendado paso a paso para que realices la actualización de OJS de forma segura. Ten en cuenta que cada instalación es diferente y tu entorno de servidor puede diferir sustancialmente. En todos los casos, deberas revisar y comprender los comandos de actualización antes de ejecutarlos.

Durante el tutorial veremos comandos para los sistemas  [Debian](https://www.debian.org/) o [RHEL](https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux) de Linux. **Sólo deberás ejecutar el comando apropiado para tu servidor **

### 1. Conjunto de variables de Entorno

En este tutorial utilizaremos las siguientes variables para simplificar los comandos de la terminal.

| VARIABLE          | Default             | Description                      |
| ----------------- | ------------------- | -------------------------------- |
| WEB_USER          | `www-data`          | Webserver user                   |
| WEB_GROUP         | `www-data`          | Webserver user's group           |
| OJS_ROOT_PATH   | `/var/www`          | OJS root folder                  |
| OJS_WEB_PATH    | `/var/www/html`     | OJS web root folder              |
| OJS_DB_HOST     | `db`                | Database host's name             |
| OJS_DB_USER     | `ojs`               | Database user                    |
| OJS_DB_PASSWORD | `ojsPwd`            | Database password                |
| OJS_DB_NAME     | `ojs`               | Database name                    |
| OJS_BACKUP_PATH | `/srv/backup/ojs`   | Folder to store your backups     |
| OJS_VERSION       | `ojs-3.3.0-8`       | Version as in the ojs filename   |
| DATE              | `YYYYMMDD-HH:MM:SS` | The current system date and time |

Rewrite the command below to set up these variables with the correct values for your installation.

```bash
$ WEB_USER="www-data" && \
WEB_GROUP="www-data" && \
OJS_ROOT_PATH="/var/www" && \
OJS_WEB_PATH="/var/www/html" && \
OJS_DB_HOST="db" && \
OJS_DB_USER="ojs" && \
OJS_DB_PASSWORD="ojsPwd" && \
OJS_DB_NAME="ojs" && \
OJS_BACKUP_PATH="/srv/backup/ojs" && \
OJS_VERSION="ojs-3.3.0-8" && \
OJS_PUBLIC_PATH="$OJS_WEB_PATH/public" && \
OJS_PRIVATE_PATH="$OJS_ROOT_PATH/files" && \
DATE=$(date "+%Y%m%d-%H:%M:%S")
```

### 2. Enter Maintenance Mode

Before beginning the migration, you should put the site into maintenance mode to ensure that visitors do not see error messages and there are no changes to the database or files while backups are being made. Maintenance mode should prevent all requests from being sent to the application.

> OJS does not support a maintenance mode yet, but we [plan to support it](https://github.com/pkp/pkp-lib/issues/3263). 
> 
> {:.notice}

Modify your Apache `VirtualHost` directive or place an `.htaccess` file in the `OJS_WEB_PATH` with the following content.

```bash
order deny,allow
deny from all
ErrorDocument 403 "This site is undergoing maintenance and should return shortly. Thank you for your patience."
```

Reload the apache server to apply the changes:

```bash
(Debian)$ service apache2 reload

(RHEL)$ systemctl restart httpd
```

### 3. Create Backups

> **Do not skip this step.** An upgrade can fail for many reasons. Without a backup you may permanently lose data. 
> 
> {:.warning}

The steps below will backup the following folders and files.

| Common Path                     | Description                   | VARIABLE           |
| ------------------------------- | ----------------------------- | ------------------ |
| `/var/www/html/public`          | Public files                  | `OJS_PUBLIC_PATH`  |
| `/var/www/files`                | Private files                 | `OJS_PRIVATE_PATH` |
| `/var/www/html/config.inc.php`  | `config.inc.php`              |                    |
| `/var/www/html/.htaccess`       | `.htaccess` or vhost (if any) |                    |
| `/var/www/html/plugins`         | plugins                       |                    |
| locale files, custom code, etc. | local customizations          |                    |

Backup the database.

```bash
$ mysqldump --host="$OJS_DB_HOST" -u $OJS_DB_USER -p$OJS_DB_PASSWORD $OJS_DB_NAME --result-file="$OJS_BACKUP_PATH/backupDB-$DATE.sql"
```

> Character encodings are a common source of database problems during upgrades. <br> Read more in the [Admin Guide](/admin-guide/en/troubleshooting#character-encoding). 
> 
> {:.tip}

Backup the private file directory.

```bash
$ tar cvzf "$OJS_BACKUP_PATH/private-$DATE.tgz" "$OJS_PRIVATE_PATH"
```

Backup the public files directory.

```bash
$ tar cvzf "$OJS_BACKUP_PATH/ojsfiles-$DATE.tgz" "$OJS_WEB_PATH"
```

Backup any other customizations you have made to the software, such as custom plugins or locale files.

### 4. Create Sandbox

Use your backup to create a sandbox environment and test the upgrade in that sandbox first. The steps below can be used in your sandbox environment to perform an upgrade.

Once the test is complete, you can run any automated or manual tests you have configured to ensure the upgrade did not introduce regressions.

**Only perform the next steps on your live, production environment if you have already completed a test upgrade in your sandbox environment.**

### 5. Download Release Package

Download the correct release package.

```bash
$ cd "$OJS_ROOT_PATH"
$ wget "https://pkp.sfu.ca/ojs/download/$OJS_VERSION.tar.gz"
```

### 6. Check System Requirements

Check the [README](https://pkp.sfu.ca/ojs/README) file from the downloaded `tar.gz` and be sure your system meets the following requirements.

- Apache version
- MySQL or PostgreSQL version
- PHP version
- Server libraries and module requirements

In addition, you will want to perform the following checks.

- Adjust your PHP timeouts and memory limits to ensure the upgrade process can complete successfully.
- Check the server libraries and module requirements for any plugins you've added (these can often be found in the plugin's README file).

### 7. Install Release Package

Backup the application files.

```bash
$ mv "$OJS_WEB_PATH" "$OJS_BACKUP_PATH"
```

Extract the release package.

```bash
$ mkdir "$OJS_WEB_PATH"
$ tar --strip-components=1 -xvzf "$OJS_VERSION.tar.gz" -C "$OJS_WEB_PATH"
```

Restore the `config.inc.php` file.

```bash
$ cp "$OJS_BACKUP_PATH/html/config.inc.php" "$OJS_WEB_PATH"
```

Run the following command to compare your configuration file with the template of the new release. Add or remove any configuration options as necessary.

```bash
$ diff "$OJS_BACKUP_PATH/config.inc.php" "$OJS_WEB_PATH/config.TEMPLATE.inc.php"
```

Restore the `.htaccess` file if it exists.

```bash
$ cp "$OJS_BACKUP_PATH/.htaccess" "$OJS_WEB_PATH"
```

Restore the public files.

```bash
$ cp -r "$OJS_BACKUP_PATH/html/public/*" "$OJS_PUBLIC_PATH"
```

Set the permissions of new files as required by your server configuration.

```bash
(Debian)$ sudo chown -R $WEB_USER:$WEB_GROUP "$OJS_PUBLIC_PATH" "$OJS_WEB_PATH/cache/"

(RHEL)$ sudo chown -R apache:apache "$OJS_PUBLIC_PATH" "$OJS_WEB_PATH/cache/"
```

Set the permissions for the plugin directories as required.

```bash
(Debian)$ sudo chown -R $WEB_USER:$WEB_GROUP "$OJS_WEB_PATH/plugins/"

(RHEL)$ sudo chown -R apache:apache "$OJS_WEB_PATH/plugins/"
```

If the server is running under [SElinux](https://en.wikipedia.org/wiki/Security-Enhanced_Linux), reset the file contexts.

```bash
(RHEL)$ sudo restorecon -R "$OJS_WEB_PATH/"
```

### 8. Run the Upgrade

Confirm the version numbers match your expectations.

```bash
$ php tools/upgrade.php check
```

In the screenshot below, we can see that we are currently running `3.2.1-4` and will be upgrading to `3.3.0-6`.

![An example of running the PHP upgrade check in the command-line.](./assets/upgrade-check.png)

Finally, when you are ready, run the upgrade script, which may take several hours to complete. You may also wish to [log the output](#log-the-output).

```bash
$ php tools/upgrade.php upgrade
```

If the upgrade is successful, you will see the message below informing you that the upgrade was successful.

![An example of the "Successfully upgraded" message in the command-line.](./assets/successful-upgrade.png)

#### Log the Output

The upgrade script will print a lot of information to the terminal. We recommend sending the output to a log file. This will help you troubleshoot if the upgrade fails.

```bash
$ nohup php tools/upgrade.php upgrade > $OJS_ROOT_PATH/upgrade.log &
```

Check the progress of the upgrade.
```bash
$ tail -f $OJS_ROOT_PATH/upgrade.log
```

### 9. Remove Maintenance Mode

When the upgrade is complete, remove the maintenance mode previously configured by modifying your Apache `VirtualHost` directive or updating your `.htaccess` file.

```bash
$ cd "$OJS_WEB_PATH/"
$ mv .htaccess .htaccess.disabled
```

If your PHP timeouts and/or memory limit were adjusted, restore their original values.

Reload the apache server to apply the changes.

```bash
(Debian)$ service apache2 reload

(RHEL)$ systemctl restart httpd
```

### 10. Test the Upgrade

It's important to test the site after an upgrade. Any core functions for your journals should be tested, as well as custom plugins or themes once they have been reinstalled.

The following is a short checklist that covers common use cases.

1. Reader interface
    - The homepage loads
    - The theme loads correctly
    - Published articles can be downloaded
    - Letters and text characters are displaying correctly
    - No timeouts or long delays
    - No broken links
    - Articles appear correctly in the search
2. Database
    - Charset and collation on database, tables and fields
    - Database engine is innoDB for database and all tables (MariaDB/MySQL only)
3. Register a new user account and login
     - Register an author
     - Get a registration email
     - Login with the new user
4. Complete the editorial workflow
    - As a Journal Manager:
        - Create a new testing journal
        - Register your new user as an author in the testing journal
    - As an Author:
        - Login as author and submit an article to a test journal
        - Confirm you are able to upload a document
    - As an Editor:
        - Assign the article to a section
        - Accept article without revision
        - Create a new issue and assign the article to it
        - Publish the issue
        - Download the published article
        - Unpublish the article and remove the issue
5. User management
    - As a Journal manager:
        - Assign new roles to the new user
        - Change new user's profile data and password
        - Remove the new user by merging it to your admin account
6. Additional testing of common tasks

### 11. Restore Custom Plugins

Use the Plugin Gallery to restore any custom plugins that were installed.

If you have installed custom plugins which are not in the Plugin Gallery, check with the plugin distributor for an update which is compatible with your upgraded version.

### 12. Cleanup Backup Files

You may wish to retain your backup files, but if you don't, you can remove them.

```bash
$ sudo rm -fR "$OJS_BACKUP_PATH/*"
```

### 13. Celebrate

**Your OJS instance has been successfully upgraded. ¡Felicidades!**

## Solución de problemas

Consult the following resources if you encounter any problems.

* [PKP Forum](https://forum.pkp.sfu.ca/) - Questions and answers in the support forum
* [FAQ](/faq/en/) - The [Errors and Troubleshooting](/faq/en/errors-troubleshooting) section may be helpful
* [Admin Guide - Troubleshooting](/admin-guide/) - See the [Troubleshooting](/admin-guide/en/troubleshooting) section
* [GitHub Issues](https://github.com/pkp/pkp-lib/issues) - Review known issues reported against versions of the software

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

## Conocimentos y herramientas requeridos

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

| VARIABLE          | Predeterminada      | Descripción                                                  |
| ----------------- | ------------------- | ------------------------------------------------------------ |
| WEB_USER          | `www-data`          | Usuario del servidor web                                     |
| WEB_GROUP         | `www-data`          | Grupo de pertenencia del usuario del servidor web            |
| OJS_ROOT_PATH   | `/var/www`          | Carpeta raíz de OJS                                          |
| OJS_WEB_PATH    | `/var/www/html`     | Carpeta raíz de la web de OJS                                |
| OJS_DB_HOST     | `db`                | Nombre del *host* de la base de datos.                       |
| OJS_DB_USER     | `ojs`               | Usuario de base de datos                                     |
| OJS_DB_PASSWORD | `ojsPwd`            | Contraseña de la base de datos                               |
| OJS_DB_NAME     | `ojs`               | Nombre de la base de datos                                   |
| OJS_BACKUP_PATH | `/srv/backup/ojs`   | Carpeta para guardar tus copias de seguridad                 |
| OJS_VERSION       | `ojs-3.3.0-8`       | Nombre de versión, tal como es nombrada en el archivo de ojs |
| DATE              | `YYYYMMDD-HH:MM:SS` | La fecha y hora actual del sistema                           |

Reescribe el comando de abajo para configurar estas variables con los valores correctos para tu instalación.

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

### 2. Activar el "Modo de Mantenimiento"

Antes de comenzar la migración, deberías poner el sitio en "modo de mantenimiento" para asegurarte que los visitantes no vean mensajes de error y para que no haya cambios en la base de datos o en archivos mientras se realizan copias de seguridad. El "modo de mantenimiento" debe ser configurado de manera tal que evite el envío de todas las peticiones al sistema.

> OJS aún no cuenta con un modo de mantenimiento, pero estamos  [trabajando en ello](https://github.com/pkp/pkp-lib/issues/3263). 
> 
> {:.notice}

Modifica la directiva del `VirtualHost` de tu Apache o coloca un archivo `.htaccess` en el `OJS_WEB_PATH` con el siguiente contenido.

```bash
order deny,allow
deny from all
ErrorDocument 403 "This site is undergoing maintenance and should return shortly. Thank you for your patience."
```

Reinicia el servidor de Apache para que los cambios se apliquen:

```bash
(Debian)$ service apache2 reload

(RHEL)$ systemctl restart httpd
```

### 3. Creando copias de seguridad

> **¡Atención! No te saltes este paso.** Una actualización puede fallar por muchas razones y sin una copia de seguridad de respaldo puedes perder información importante de manera permanente. 
> 
> {:.warning}

Los siguientes pasos harán una copia de seguridad de las siguientes carpetas y archivos.

| Ruta del directorio             | Descripción                                            | VARIABLE           |
| ------------------------------- | ------------------------------------------------------ | ------------------ |
| `/var/www/html/public`          | Archivos públicos                                      | `OJS_PUBLIC_PATH`  |
| `/var/www/files`                | Archivos privados                                      | `OJS_PRIVATE_PATH` |
| `/var/www/html/config.inc.php`  | `Has una copia de tu config.inc.php `                  |                    |
| `/var/www/html/.htaccess`       | Has una copia de tu `.htaccess` or vhost (si existe)   |                    |
| `/var/www/html/plugins`         | has una copia del contenido de la carpeta de *plugins* |                    |
| locale files, custom code, etc. | has una copia de todas tus personalizaciones           |                    |

Copia de seguridad de la base de datos

```bash
$ mysqldump --host="$OJS_DB_HOST" -u $OJS_DB_USER -p$OJS_DB_PASSWORD $OJS_DB_NAME --result-file="$OJS_BACKUP_PATH/backupDB-$DATE.sql"
```

> Durante el proceso de actualización la codificación de los caractéres es una causa frecuente de problemas en la base de datos.  <br> Encuentra más información en: [Admin Guide](/admin-guide/en/troubleshooting#character-encoding) (en inglés). 
> 
> {:.tip}

Copia de seguridad del directorio de archivos privados.

```bash
$ tar cvzf "$OJS_BACKUP_PATH/private-$DATE.tgz" "$OJS_PRIVATE_PATH"
```

Copia de seguridad del directorio de archivos privados.

```bash
$ tar cvzf "$OJS_BACKUP_PATH/ojsfiles-$DATE.tgz" "$OJS_WEB_PATH"
```

Copia de seguridad de cualquier otra personalización que hayas hecho al sistema, como plugins personalizados o archivos locales.

### 4. Crea un entorno de desarrollo (sandbox)

Utiliza tu copia de seguridad para crear un entorno de desarrollo para testear la actualización Los siguientes pasos pueden ser usados en tu entorno de desarrollo para realizar una actualización.

Una vez completada la prueba, puedes ejecutar cualquier prueba automática o manual que hayas configurado para asegurarte de que la actualización no introdujo regresiones.

**Sólo realiza los siguientes pasos en tu entorno de producción si ya has completado y testeado la actualización en tu entorno de desarrollo.**

### 5. Descarga la versión de actualización publicada

Descarga la [correcta](h3[2]) versión de actualización publicada

```bash
$ cd "$OJS_ROOT_PATH"
$ wget "https://pkp.sfu.ca/ojs/download/$OJS_VERSION.tar.gz"
```

### 6. Comprueba los requisitos de sistema

Lee el archivo [README](https://pkp.sfu.ca/ojs/README) (en inglés) del archivo `tar.gz` descargado y asegurate de que tu sistema cumpla con los siguientes requisitos:

- Versión de Apache
- Versión MySQL o PostgreSQL
- Versión de PHP
- Requisitos de módulos y librerías del servidor

Además cerciorate de realizar las siguientes comprobaciones:

- Comprueba el seteo de los tiempos de espera de PHP y los límites de memoria para asegurar que el proceso de actualización pueda completarse con éxito.
- Compruebe las librerías y los módulos del servidor requeridos por aquellos * plugins * que tengas instalados (estos requisitos se pueden encontrar a menudo en el archivo README de cada *plugin*).

### 7. Descarga la versión de actualización publicada

Copia de seguridad del sistema

```bash
$ mv "$OJS_WEB_PATH" "$OJS_BACKUP_PATH"
```

Descomprime el archivo de la versión de actualización publicada.

```bash
$ mkdir "$OJS_WEB_PATH"
$ tar --strip-components=1 -xvzf "$OJS_VERSION.tar.gz" -C "$OJS_WEB_PATH"
```

Recupera el archivo `config.inc.php` resguardado.

```bash
$ cp "$OJS_BACKUP_PATH/html/config.inc.php" "$OJS_WEB_PATH"
```

Ejecuta el siguiente comando para comparar su archivo de configuración con la plantilla de la nueva versión. Agregue o elimine cualquier opción de configuración según sea necesario.

```bash
$ diff "$OJS_BACKUP_PATH/config.inc.php" "$OJS_WEB_PATH/config.TEMPLATE.inc.php"
```

Si existe, recupera el archivo `.htaccess` resguardado.

```bash
$ cp "$OJS_BACKUP_PATH/.htaccess" "$OJS_WEB_PATH"
```

Restaura los archivos públicos resguardados.

```bash
$ cp -r "$OJS_BACKUP_PATH/html/public/*" "$OJS_PUBLIC_PATH"
```

Establece los permisos de los nuevos archivos según los requisitos de la configuración de tu servidor.

```bash
(Debian)$ sudo chown -R $WEB_USER:$WEB_GROUP "$OJS_PUBLIC_PATH" "$OJS_WEB_PATH/cache/"

(RHEL)$ sudo chown -R apache:apache "$OJS_PUBLIC_PATH" "$OJS_WEB_PATH/cache/"
```

Establece los permisos para los directorios de *plugin* según sea necesario.

```bash
(Debian)$ sudo chown -R $WEB_USER:$WEB_GROUP "$OJS_WEB_PATH/plugins/"

(RHEL)$ sudo chown -R apache:apache "$OJS_WEB_PATH/plugins/"
```

Si el servidor se está ejecutando bajo [SElinux](https://en.wikipedia.org/wiki/Security-Enhanced_Linux), restablezca los contextos del archivo.

```bash
(RHEL)$ sudo restorecon -R "$OJS_WEB_PATH/"
```

### 8. Ejecuta la actualización

Confirma que los números de versión coinciden con la versión deseada.

```bash
$ php tools/upgrade.php check
```

En la siguiente captura de pantalla, podemos ver que estamos ejecutando `3.2.1-4` y que se actualizará a `3.3.0-6`.

![An example of running the PHP upgrade check in the command-line.](./assets/upgrade-check.png)

Por último, cuando tu estes listo, ejecuta el script de actualización, que puede tardar varias horas en completarse. You may also wish to [log the output](#log-the-output).

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

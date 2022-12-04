---
generateHeadingToc: true
title: Cómo actualizar
description: Cómo actualizar Open Journal System (OJS) y otras aplicaciones de PKP, con un tutorial paso a paso.
---

# Manual de actualización

> ¿Quieres saber cuándo se publican las nuevas versiones y estar al día de las novedades? Lee el [foro de anuncios](https://forum.pkp.sfu.ca/c/announcements/10). 
> 
> {:.notice}

Esta guía te ayudará a actualizar Open Journal Systems (OJS). En ella se describe el conocimiento y las herramientas que necesitarás para actualizar tu sistema y proporciona un tutorial paso a paso.

Las siguientes instrucciones describen cómo actualizar OJS cuando corre cobre una pila LAMP (Linux, Apache, MySQL, PHP). Sin embargo, estos pasos se pueden adaptar tanto para actualizar otras herramientas desarrolladas por PKP (OMP, OPS) como para realizar actualizaciones de instalaciones en otros entornos de servidor.

## Conocimentos y herramientas requeridas

> **¡ATENCIÓN!** revisa la siguiente lista y comprueba que cuentas con los conocimientos y herramientas necesarios. Un error durante la actualización puede provocar errores irrecuperables. 
> 
> {:.warning}

Para usar esta guía, es necesaria experiencia con herramientas básicas de administración de sistemas, así como una comprensión de la pila de tecnología para la configuración de tu servidor.

- Habilidades básicas de administración GNU/Linux
- Credenciales del servidor, incluyendo credenciales de base de datos
- Conocimiento del entorno LAMP stack de tu servidor. (Si estás trabajando en otro entorno ten en cuenta que deberás adaptar esta guía a tus necesidades)
- Acceso a la terminal del servidor (SSH).
- Una versión cocreta de OJS a la que actualizar (se descargará en el paso 5)

### Preparando la actualización...

Antes de empezar la actualización, puedes revisar `docs/release-notes` y [release notebook](/dev/release-notebooks/) de tu versión específica para descubrir los cambios más importantes introducidos en cada versión. El archivo `config.TEMPLATE.inc.php` incluye una descripción para la mayoría de los parámetros de configuración.

Ten en cuenta que, dependiendo del tamaño de tu sitio, una actualización puede tardar de unos minutos hasta varias horas.

### Una nota sobre las versiones:

Para definir la versión de una aplicación, todos los desarrollos de PKP usan una variante de [versionado semántico](https://semver.org) y se nombran como `major.minor.revision-build`. Cada número del nombre de versión describe el tipo de cambios que puedes esperar.

| Tipo        | Ejemplo   | Descripción                                                                                                                                                                                   |
| ----------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mayor       | `3.x.x-x` | Cambios estructurales disruptivos que modifican por completo el sistema y pueden afectar el funcionamiento de los módulos, la configuración de los servidores y todas las partes del sistema. |
| menor       | `3.3.x-x` | Cambios estructurales que pueden afectar a los módulos y a la configuración del servidor.                                                                                                     |
| revisión    | `3.3.3-x` | Puede incorporar nuevas funcionalidades, pero los cambios estructurales se limitan al mínimo.                                                                                                 |
| compilación | `3.3.3-3` | No hay cambios estructurales ni migraciones de bases de datos.                                                                                                                                |

Para poder comprender el proceso de actualización, primero debes determinar la distancia del "salto" entre versiones que implica la actualización. Es probable que un "salto" de la versión `3.3.0-6` a la versión`3.3.0-7` pueda hacerse con un tiempo mínimo de inactividad. Sin embargo, un "salto" de la versión `2.4` a la `3.2` será un proceso largo y complejo con un mayor riesgo de introducir problemas.

Siempre deberías probar primero las actualizaciones en un entorno de prueba, incluso cuando el salto es mínimo (pe: entre versiones de construcción).

### Actualización desde 2.x

No siempre es posible actualizar directamente de una versión 2.x a cualquier versión 3.x. Cuando actualices desde una versión 2.x, primero deberás actualizar a versiones intermedias. La siguiente tabla describe los pasos necesarios.

| Desde        | Hasta       | Descripción                                                                                |
| ------------ | ----------- | ------------------------------------------------------------------------------------------ |
| `< 2.4.8` | `2.4.8-x`   | Antes de actualizar a 3.x, asegúrate de que has actualizado a la última versión `2.4.8-x`. |
| `2.4.8-x`    | `3.2.1-x`   | No puedes actualizar a la 3.3.x o posterior desde 2.x                                      |
| `3.2.1-x`    | `3.3 >=` | Actualizar desde `3.2.1-x` a cualquier versión 3.3 o posterior.                            |

## Tutorial de actualización

El siguiente tutorial describe, paso a paso, el proceso recomendado para actualizar OJS de forma segura. Sin embargo, cada instalación es diferente y su entorno de servidor puede diferir sustancialmente. En todo momennto, debes revisar y entender los comandos antes de ejecutarlos.

Durante el tutorial verás comandos para los sistemas [Debian](https://www.debian.org/) o [RHEL](https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux) de Linux. Solo debes ejecutar el comando apropiado para tu servidor.

### 1. Configurar variables de entorno

En este tutorial usaremos las siguientes variables para simplificar los comandos de la terminal.

| VARIABLE          | Predeterminada      | Descripción                                                  |
| ----------------- | ------------------- | ------------------------------------------------------------ |
| WEB_USER          | `www-data`          | Usuario del servidor web                                     |
| WEB_GROUP         | `www-data`          | Grupo del usuario del servidor web                           |
| OJS_ROOT_PATH   | `/var/www`          | Directorio raíz de OJS                                       |
| OJS_WEB_PATH    | `/var/www/html`     | Directorio raíz de la web de OJS                             |
| OJS_DB_HOST     | `db`                | Nombre del *host* de la base de datos.                       |
| OJS_DB_USER     | `ojs`               | Usuario de la base de datos                                  |
| OJS_DB_PASSWORD | `ojsPwd`            | Contraseña de la base de datos                               |
| OJS_DB_NAME     | `ojs`               | Nombre de la base de datos                                   |
| OJS_BACKUP_PATH | `/srv/backup/ojs`   | Directorio en el que almacenar las copias de seguridad       |
| OJS_VERSION       | `ojs-3.3.0-8`       | Nombre de versión, tal como es nombrada en el archivo de ojs |
| DATE              | `YYYYMMDD-HH:MM:SS` | La fecha y hora actual del sistema                           |

Reescribe el siguiente comando para definir estas variables con los valores adecuados para tu instalación.

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

Antes de empezar la migración, debes poner el sitio en "modo de mantenimiento" para asegurarte que los visitantes no vean mensajes de error y para que no haya cambios en la base de datos o en archivos mientras se realizan copias de seguridad. El "modo de mantenimiento" impide que se envíen nuevas peticiones a la aplicación.

> OJS no cuenta todavía conn un modo de mantenimiento, pero estamos [trabajando en ello](https://github.com/pkp/pkp-lib/issues/3263). 
> 
> {:.notice}

Para emular este modo, modifica la directiva del `VirtualHost` de tu Apache o coloca un archivo `.htaccess` en el `OJS_WEB_PATH` con el siguiente contenido.

```bash
order deny,allow
deny from all
ErrorDocument 403 "Este sitio está en mantenimiento y debería volver en breve. Gracias por tu paciencia."
```

Reinicia el servidor de Apache para aplicar los cambios:

```bash
(Debian)$ service apache2 reload

(RHEL)$ systemctl restart httpd
```

### 3. Crear copias de seguridad

> **¡Atención! No te saltes este paso.** Una actualización puede fallar por muchas razones y sin una copia de seguridad de respaldo puedes perder información importante de manera permanente. 
> 
> {:.warning}

Los siguientes pasos crearán una copia de seguridad de las siguientes carpetas y archivos.

| Ruta del directorio             | Descripción                                                | VARIABLE           |
| ------------------------------- | ---------------------------------------------------------- | ------------------ |
| `/var/www/html/public`          | Archivos públicos                                          | `OJS_PUBLIC_PATH`  |
| `/var/www/files`                | Archivos privados                                          | `OJS_PRIVATE_PATH` |
| `/var/www/html/config.inc.php`  | `Archivo de configuración <code>config.inc.php` </code> |                    |
| `/var/www/html/.htaccess`       | `.htaccess` or vhost (si existe)                           |                    |
| `/var/www/html/plugins`         | Módulos                                                    |                    |
| locale files, custom code, etc. | Personalizaciones locales                                  |                    |

Copia de seguridad de la base de datos:

```bash
$ mysqldump --host="$OJS_DB_HOST" -u $OJS_DB_USER -p$OJS_DB_PASSWORD $OJS_DB_NAME --result-file="$OJS_BACKUP_PATH/backupDB-$DATE.sql"
```

> Las codificaciones de caracteres son una fuente común de problemas de base de datos durante las actualizaciones. <br> Puedes leer más en: [Guía de Administración](/admin-guide/en/troubleshooting#character-encoding) (en inglés). 
> 
> {:.tip}

Copia de seguridad del directorio de archivos privados:

```bash
$ tar cvzf "$OJS_BACKUP_PATH/private-$DATE.tgz" "$OJS_PRIVATE_PATH"
```

Copia de seguridad del directorio de archivos privados:

```bash
$ tar cvzf "$OJS_BACKUP_PATH/ojsfiles-$DATE.tgz" "$OJS_WEB_PATH"
```

Copia de seguridad de cualquier otra personalización que hayas hecho al sistema, como módulos personalizados o archivos locales.

### 4. Crear un entorno de pruebas (sandbox)

Utiliza tu copia de seguridad para crear un entorno de pruebas para testear la actualización. Los siguientes pasos pueden ser usados en tu entorno de pruebas (sandbox) para realizar una actualización.

Una vez completada la prueba, puedes ejecutar cualquier prueba automática o manual que hayas configurado para asegurarte de que la actualización no introdujo regresiones.

**Solo realiza los siguientes pasos en tu entorno de producción en vivo si ya has completado una actualización de prueba en tu entorno sandbox.**

### 5. Descargar la versión de actualización

Descargue el paquete de versión correcto.

```bash
$ cd "$OJS_ROOT_PATH"
$ wget "https://pkp.sfu.ca/ojs/download/$OJS_VERSION.tar.gz"
```

### 6. Comprobar los requisitos de sistema

Lee el archivo [README](https://pkp.sfu.ca/ojs/README) (en inglés) del archivo `tar.gz` descargado y asegúrate de que tu sistema cumpla con los siguientes requisitos:

- Versión de Apache
- Versión MySQL o PostgreSQL
- Versión de PHP
- Requisitos de módulos y librerías del servidor

Además, asegúrate de realizar las siguientes comprobaciones:

- Ajusta los tiempos de espera de PHP y los límites de memoria para asegurar que el proceso de actualización pueda completarse con éxito.
- Comprueba en el servidor los requisitos de librerías y de módulos que haya añadido (estos se pueden encontrar a menudo en el archivo README del plugin).

### 7. Descargar la versión de actualización

Copia de seguridad los archivos de la aplicación:

```bash
$ mv "$OJS_WEB_PATH" "$OJS_BACKUP_PATH"
```

Descomprime el archivo de la versión de actualización:

```bash
$ mkdir "$OJS_WEB_PATH"
$ tar --strip-components=1 -xvzf "$OJS_VERSION.tar.gz" -C "$OJS_WEB_PATH"
```

Restaura el archivo `config.inc.php` resguardado.

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

![Un ejemplo de ejecutar la comprobación de actualización de PHP en la línea de comandos.](./assets/upgrade-check.png)

Por último, cuando tu estes listo, ejecuta el script de actualización, que puede tardar varias horas en completarse. También es posible que desees generar un registro (log) del resultado del proceso (output) [log the output](#log-the-output).

```bash
$ php tools/upgrade.php upgrade
```

Si la actualización fue exitosa, verás un mensaje informándote que la actualización fue exitosa.

![Un ejemplo del mensaje "actualizado con éxito" en la línea de comandos.](./assets/successful-upgrade.png)

#### Log the Output

El script de actualización imprimirá mucha información a la terminal. Recomendamos enviar el resultado del proceso (output) a un archivo de registro (log). Esto te ayudará a solucionar problemas si la actualización falla.

```bash
$ nohup php tools/upgrade.php upgrade > $OJS_ROOT_PATH/upgrade.log &
```

Comprueba el progreso de la actualización.
```bash
$ tail -f $OJS_ROOT_PATH/upgrade.log
```

### 9. Desactiva el "Modo de Mantenimiento"

Cuando la actualización se haya completado, elimina el "modo de mantenimiento" previamente configurado modificando la directiva `VirtualHost` de Apache o actualizando tu `. archivo taccess`.

```bash
$ cd "$OJS_WEB_PATH/"
$ mv .htaccess .htaccess.disabled
```

Si para asegurarte el éxito de la instación realizaste ajustes en los tiempos de espera o en los límites de memoria de PHP, restaura sus valores originales.

Reinicia el servidor de Apache para que los cambios se apliquen.

```bash
(Debian)$ service apache2 reload

(RHEL)$ systemctl restart httpd
```

### 10. Ejecutar la actualización

Es importante probar el sitio después de una actualización. Cualquier función principal para tus revistas debe ser probada, así como *plugins* o temas personalizados una vez que se hayan reinstalado.

La siguiente es una breve lista de verificación que cubre casos de uso común.

1. Interfaz del lector
    - La página de inicio carga correctamente
    - El tema se carga correctamente
    - Los artículos publicados pueden ser descargados
    - Las letras y los caracteres de texto se muestran correctamente
    - No hay tiempos de espera o retrasos largos
    - No hay ligas o enlaces rotos
    - Los artículos aparecen correctamente en la búsqueda
2. Base de datos
    - Conjunto de caracteres y colación en la base de datos, tablas y campos
    - El motor de base de datos es innoDB para la base de datos y todas las tablas (sólo MariaDB/MySQL)
3. Registrar una nueva cuenta de usuario e iniciar sesión
     - Registrar un autor
     - Comprueba la recepcón del correo de registro
     - Iniciar sesión con el nuevo usuario
4. Completar el flujo de trabajo editorial
    - Como gestor de la revista:
        - Crea una nueva revista de prueba
        - Registra tu nuevo usuario/a como autor/a en la revista de pruebas
    - Como autor/a:
        - Inicia sesión como autor/a y envía un artículo a la revista de prueba
        - Confirma que puedes subir un documento
    - Como editor/a:
        - Asignar el artículo a una sección
        - Aceptar artículo sin revisión
        - Crear un nuevo número y asignarle el artículo
        - Publica el número
        - Descargar el artículo publicado
        - Despublica el artículo y elimina el número
5. Gestión de usuarios
    - Como gestor de la revista:
        - Asignar nuevos roles al nuevo usuario
        - Cambiar los datos de perfil y contraseña del nuevo usuario
        - Elimina el nuevo usuario fusionándolo con tu cuenta de administrador
6. Pruebas adicionales de tareas comunes

### 11. Restaurar *Plugins* Personalizados

Utiliza la Galería de *plugins* para restaurar los *plugins* personalizados que fueron instalados.

Si has instalado *plugins* personalizados que no están en la Galería de *Plugins*, comprueba con el distribuidor si existe una actualización compatible con su versión actualizada.

### 12. Limpiar archivos de copia de seguridad

Puede que desees conservar tus archivos de copia de seguridad, pero si no, puedes eliminarlos con el siguiente comando.

```bash
$ sudo rm -fR "$OJS_BACKUP_PATH/*"
```

### 13. ¡Celébralo!

**Tu nueva versión de OJS ha sido actualizada con éxito. ¡Felicidades!**

## Solución de problemas

Consulta los siguientes recursos si encuentras algún problema.

* [Foro de PKP](https://forum.pkp.sfu.ca/) - Preguntas y respuestas en el foro de soporte. <a ref="Errores comunes al actualizar OJS desde la versión 2.x a la versión 3.2.x">Errores comunes al actualizar OJS desde la versión 2.x a la versión 3.2.x</a>
* [Preguntas frecuentes](/faq/en/) - La sección [errores y solución de problemas](/faq/en/errors-troubleshooting) puede ser útil
* [Guía de administración - Resolución de problemas](/admin-guide/) - Ver la sección [Resolución de problemas](/admin-guide/en/troubleshooting)
* [GitHub Issues](https://github.com/pkp/pkp-lib/issues) - Revise los problemas conocidos reportados contra versiones del software

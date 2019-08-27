# Capítulo 2: Instalación y actualización

Este capítulo cubre cómo instalar OJS 3 por primera vez, y cómo actualizar una instalación existente ejecutando OJS 2.x.

## Instalación
Open Journal Systems (OJS) ha sido desarrollado por el Proyecto de Conocimiento Público.
Para obtener información general sobre OJS y otros sistemas de investigación abiertos, visite la página web de PKP en [http://pkp.sfu.ca/](http://pkp.sfu.ca).

### Licencias
OJS está licenciado bajo la GNU General Public License v2. Ver el archivo docs/COPY1 para obtener los términos completos de esta licencia.

Los terceros son bienvenidos a modificar y redistribuir OJS en su totalidad o en parte de acuerdo con los términos de esta licencia. PKP también da la bienvenida a parches para mejoras o correcciones de errores en el software.

### Requerimientos del sistema
Requisitos recomendados del servidor:

* PHP >= 5.5 con soporte MySQL o PostgreSQL
* MySQL >= 4.1 o PostgreSQL >= 9.1.5
* Apache >= 1.3.2x o >= 2.0.4x o Microsoft IIS 6
* Sistema operativo: Cualquier sistema operativo que soporte el software anterior, incluyendo Linux, BSD, Solaris, Mac OS X, Windows.

Como PKP no tiene los recursos para probar todas las combinaciones posibles de versiones de software y plataformas, sin garantía de correcto funcionamiento o soporte está implícito. Agradecemos los comentarios de los usuarios que han implementado OJS en los sistemas que no sean los mencionados anteriormente.

### Configuración recomendada
La mejor manera de lograr una implementación segura es utilizar las siguientes políticas:

* Dedicar una base de datos a OJS; utilizar credenciales únicas para acceder a ella. Configure esta base de datos para realizar copias de seguridad automatizadas de forma regular base. Realice una copia de seguridad manual al actualizar o ejecutar mantenimiento.
* Configure OJS (config.inc.php) para usar hash SHA1 en lugar de MD5.
* Configure OJS (config.inc.php) para usar force_ssl_login de forma que Los usuarios autentificados se comunican con el servidor a través de HTTPS.
* Instale OJS de manera que el directorio de archivos NO sea un subdirectorio de la instalación de OJS y no se pueda acceder directamente a través de la web servidor. Restrinja los permisos de los archivos tanto como sea posible. Automatizado las copias de seguridad de este directorio deben estar sincronizadas con copias de seguridad de la base de datos. Estos pasos **son críticos para mantener un entorno seguro**. y evitar el mal uso o la piratería de su revista.

### Descargar
Los OJS pueden descargarse del [sitio web](http://pkp.sfu.ca) del Proyecto de Conocimiento Público.

### Instalación
Por favor revise este documento y el documento RELEASE antes de instalar OJS.
Si tiene problemas, consulte también el documento de preguntas frecuentes de este directorio.

Para instalar OJS:
1. Extraer el archivo OJS a la ubicación deseada en su web directorio de documentos.
2. Realice los siguientes archivos y directorios (y sus contenidos) escribibles (es decir, cambiando el propietario o permisos con `chown` o `chmod`):
   * config.inc.php (opcional -- si no se puede escribir se le pedirá que sobrescriba manualmente este archivo durante la instalación)
   * public
   * cache
   * cache/t_cache
   * cache/t_config
   * cache/t_compile
   * cache/_db
3. Crear un directorio para almacenar los archivos subidos (archivos de envío, etc.) y hacer que este directorio sea escribible. Se recomienda encarecidamente que éste se coloque en una ubicación no accesible a través de la web para garantizar una ubicación segura. medio ambiente (o protegidos de otro modo contra el acceso directo, como a través de .htaccess).
4. Abra un navegador web en http://yourdomain.com/path/to/ojs/  y siga las instrucciones de instalación en pantalla.
Alternativamente, el instalador de la línea de comandos puede ser usado ejecutando el comando "php tools/install.php" desde su directorio OJS. ((Nota: con el instalador CLI puede que tenga que hacer “chown/chmod” en los directorios de archivos públicos y cargados después de la instalación, si el usuario de Apache es diferente del usuario que está ejecutando la herramienta.)
5. Pasos adicionales recomendados después de la instalación:
   * Revisar “config.inc.php” para ajustes de configuración adicionales
   * Revise el documento de preguntas frecuentes para ver las preguntas técnicas y de configuración del servidor más frecuentes.

## Actualización
Nota: Antes de actualizar su instalación, realice una copia de seguridad completa de sus archivos de datos y base de datos. Si el proceso de actualización falla, necesitará recuperarse de la copia de seguridad antes de continuar.

Si está usando el Modo a prueba de fallos de PHP, por favor asegúrese de que la directiva max_execution_time en su archivo de configuración “php.ini” esté establecida en un límite alto. Si se alcanza éste o cualquier otro límite de tiempo (por ejemplo, la directiva "Timeout" de Apache) y se interrumpe el proceso de actualización, será necesaria la intervención manual.

### Actualización desde OJS versión 2.0.x, 2.1.x, 2.2.x o 2.3.x
Para actualizar desde estas antiguas ramas de OJS, primero tendrá que actualizar a una versión intermedia de OJS 2.4.x. Descargue la última copia de OJS 2.4.x y siga las instrucciones de actualización incluídas allí, luego lea el documento docs/UPGRADE incluido en este paquete para continuar la actualización desde allí.

### Actualización desde OJS versión 2.4.x
OJS 3.x es una importante reescritura de Open Journal Systems, introduciendo numerosos conceptos nuevos y diferentes enfoques. El proceso de actualización de 2.x a 3.x hace todo lo posible para adaptar el contenido antiguo a las nuevas estructuras, pero recomendamos encarecidamente realizar una actualización de prueba y explorar el nuevo sistema antes de enviar el contenido a la actualización. Las **_degradaciones de 3.x a 2.x no serán soportadas_**.

La actualización a la última versión de OJS implica dos pasos:

```
Obtención del último código OJS
Actualización de la base de datos OJS
```

Se recomienda encarecidamente que revise también las datos del release (docs/RELEASE) y otra documentación en el directorio “docs” antes de realizar una actualización.

### Obtención del último código OJS
El código fuente de OJS está disponible en dos formatos: un paquete completo e independiente, y desde el acceso de sólo lectura a github.

1) Paquete completo
También es posible actualizar descargando el paquete completo de la última versión de OJS:
* Descargar y descomprimir el paquete desde el sitio web de OJS
* Haga una copia del "config.inc.php" proporcionado en el nuevo paquete
* Mover o copiar los siguientes archivos y directorios de su instalación actual de OJS:
   * config.inc.php
   * public/
   * Su directorio de archivos cargados ("files_dir" en “config.inc.php”), si es que reside dentro de su directorio OJS
* Sustituir el directorio OJS actual por el nuevo directorio OJS, moviendo el botón a una ubicación segura como copia de seguridad
* Asegúrese de revisar la sección de cambios de configuración de las notas de publicación. en docs/notes de orden de entrega/README-(versión) para todas las versiones entre su versión original y la nueva versión. Es posible que necesite agregar manualmente nuevos elementos a su archivo “config.inc.php”.

La actualización desde github es el enfoque recomendado si ha realizado modificaciones locales en el sistema.

2) git
Si su instancia de OJS fue comprobada desde github (ver docs/README-GIT), puede actualizar el código OJS usando un cliente git.

Para actualizar el código OJS desde un git check-out, ejecute el siguiente comando desde su directorio OJS:

```
$ git rebase --onto <new-release-tag> <previous-release-tag>
```
Esto asume que ha hecho cambios locales y los ha confirmado encima de la antigua etiqueta de publicación. El comando tomará sus cambios personalizados y los aplicará sobre la nueva versión. Esto puede causar conflictos de fusión que deben resolverse de la forma habitual, por ejemplo, usando una herramienta de fusión como kdiff3.

"TAG" debería ser reemplazado por la etiqueta git correspondiente a la nueva versión. Las etiquetas de la versión de lanzamiento OJS tienen la forma "ojs-MAJOR_MINOR_REVSION-BUILD". Por ejemplo, la etiqueta para la versión inicial de OJS 3.0.0 es "ojs-3_0_0-0".

Consulte el LÉAME del último paquete OJS o el sitio web de OJS para la etiqueta correspondiente a la última versión disponible de OJS.

Tenga en cuenta que intentar actualizar a una versión inédita (por ejemplo, usar la etiqueta HEAD para obtener el código OJS de última generación) no es recomendable para nadie que no sea OJS o desarrolladores de terceros; se desaconseja el uso de código experimental en una implementación de producción y no será soportado de ninguna manera por el equipo de OJS.

### Actualización de la base de datos OJS
Después de obtener el último código OJS, se debe ejecutar un script adicional para completar el proceso de actualización actualizando la base de datos OJS y potencialmente ejecutando código de actualización adicional.

Este script puede ejecutarse desde la línea de comandos o a través de la interfaz web de OJS.

1\) Línea de comandos

Si tiene instalada la versión CLI de PHP (por ejemplo, /usr/bin/php), puede actualizar la base de datos de la siguiente manera:

```
Editar “config.inc.php” y cambiar "installed = On" por "installed = Off".
Ejecute el siguiente comando desde el directorio OJS (sin incluir $):
 
$  php tools/upgrade.php upgrade
Reeditar “config.inc.php” y cambiar "installed = Off" de nuevo a  "Installed = On"
```

2\) Web

Si no tiene instalado el PHP CLI, también puede actualizar ejecutando un script basado en web. Para hacerlo:

```
Editar “config.inc.php” y cambiar "installed = On" por "installed = Off".
Abra un navegador web en su sitio OJS; será redirigido a la página de instalación y actualización.
Seleccione el enlace "Upgrade" y siga las instrucciones en pantalla.
Reedite "config.inc.php" y cambie "installed = Off" a  "Installed = On"
```


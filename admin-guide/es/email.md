# Correo Electrónico

Este capítulo explica cómo los correos electrónicos son enviados en OJS, OMP y OCS; las opciones de configuración que están disponibles; y cómo solucionar los problemas al configurar.

El correo en las aplicaciones de software de PKP utiliza la biblioteca [PHPMailer](https://github.com/PHPMailer/PHPMailer). Usted puede encontrar más información sobre PHPMailer en [su wiki](https://github.com/PHPMailer/PHPMailer/wiki). Más información relacionada con el correo electrónico se puede encontrar en [la clase de correo pkp-lib](https://github.com/pkp/pkp-lib/tree/main/classes/mail).

Los registros de correos electrónicos enviados son almacenados en la tabla `email_log` de la base de datos.

Las aplicaciones de software de PKP proporcionan una serie de opciones para configurar correos electrónicos para trabajar en su entorno. Las siguientes opciones de configuración están disponibles para correo electrónico en `config.inc.php`:

```
;;;;;;;;;;;;;;;;;;;;
; Ajustes de correo electrónico ;
;;;;;;;;;;;;;;

[email]

Usar SMTP para enviar correo en lugar de mail()
; smtp = On

; Configuración del servidor SMTP
; smtp_server = mail.example.com
; smtp_port = 25

; Habilitar autenticación SMTP
; Mecanismos soportados: ssl, tls
; smtp_auth = ssl
; smtp_username = username
; smtp_password = password

; Permitir que el remitente del correo sea especificado
; (puede no ser posible con algunas configuraciones del servidor)
; allow_envelope_sender = Off

; Remitente de correo predeterminado para utilizar si ninguno es especificado
; default_envelope_sender = my_address@my_host.com

; Forzar el remitente de correo por defecto (si está presente)
; Esto es útil si se configura una dirección de correo de no respuesta en todo el sitio
; El campo "responder a" será establecido con el campo "responder a" o el campo "desde".
; force_default_envelope_sender = Off

; Forzar la polítics DMARC compatible con la cabecera (RFC5322. rom)
; Si alguno de sus usuarios tiene direcciones de correo electrónico en dominios que no están bajo su control
; es posible que necesites establecer esto para que sea compatible con las políticas de DMARC publicadas 
; por dominios de terceros.
; Configurar esto moverá la dirección del usuario al campo "responder a" y el campo "desde"
; se reescribirá con el valor default_envelope_sender.
; Para utilizar esto debe establecer force_default_enveloper_sender = On y
; default_envelope_sender debe establecerse a una dirección de correo válida en un dominio que usted tenga posesión.
; force_dmarc_compliant_from = Off

; El nombre a desplegar con un encabezado de la politica DMARC
; Por defecto, la politica DMARC tendrá un nombre vacío, pero esto puede
; ser cambiado, añadiendo un texto aquí.
; Puede utilizar '%n' para insertar el nombre de usuario en el campo "desde"
; y '%s' para insertar el nombre del sitio en el respectivo idioma.
; dmarc_compliant_from_displayname = '%n via %s'
```

Para obtener más información sobre el correo electrónico dentro de la interfaz de usuario de OJS, consultar [Learning OJS 3](https://docs.pkp.sfu.ca/learning-ojs/en/).

## Enviar correo eléctronico

Por defecto, PHPMailer enviará correo a través de la función `mail()` de PHP.

En Windows, PHP necesita ser configurado para enviar correo electrónico a través de un servidor SMTP \(ejecutándose en la misma máquina o en otra máquina\).

En otras plataformas como Linux y Mac OS X, PHP enviará correo usando el cliente local de sendmail, así que un MTA local como Sendmail o Postfix debe estar ejecutándose y configurado para permitir el correo saliente.

Ver [https://www.php.net/manual/en/function.mail.php](https://www.php.net/manual/en/function.mail.php) para más detalles sobre la configuración de la funcionalidad de correo de PHP.

Nuestro software también puede configurarse para usar un servidor SMTP como se especifica en `config.inc.php`, ya sea con o sin autenticación.

## Configurar una dirección de rebote

Para controlar la dirección a la que se enviará un correo electrónico rebotado, usted necesita establecer la dirección del remitente de correo. Habilitar la opción `allow_envelope_sender` en la sección `[email]` del archivo de configuración; cuando esta opción está activada, un campo "Dirección de Rebote" aparece en la sección de Correo electrónico debajo de Configuración.

Tenga en cuenta que esta opción puede requerir cambios en la configuración del servidor de correo ejecutandose en el servidor que aloja la plataforma, para que el usuario del servidor web se ejecute como \(e.. "www-data"\) y este sea un usuario confiable para el programa sendmail; de lo contrario, se añadirá una cabecera "X-Warning" a los mensajes salientes. Consulte la documentación de su servidor de correo si los correos salientes incluyen dicho encabezado.

Por ejemplo, Sendmail mantiene una lista de usuarios de confianza en `/etc/mail/trusted-users`; otros sistemas de correo utilizan archivos similares.

La opción de línea de comandos utilizada para establecer el remitente de correo es `-f`.

## Correos y Traducciones

Las plantillas de correo electrónico se instalan directamente en la base de datos cuando se crea una nueva revista, libro o conferencia. Si usted necesita editar [un archivo de traducción](https://github.com/pkp/ojs/blob/stable-3_1_2/locale/en_US/emailTemplates.xml), cualquier cambio en su archivo de plantilla no se reflejará hasta que vuelva a cargar todas las plantillas del sistema.

La recarga de plantillas anulará cualquier modificación que haya realizado. Para mantener esas modificaciones, necesitará guardar estas modificaciones localmente y volver a añadirlas a las plantillas según sea necesario.

## Contactos Principales y Técnicos

Todas las aplicaciones de PKP requieren que los contactos primarios y técnicos estén configurados en Configuración para operaciones rutinarias adecuadas. Esto es necesario para cada revista, libro o conferencia en el sistema.

- En OJS 2.x, esto se puede realizar en _Paso 1 en el menú de Configuración_.
- En OCS 2.x, esto se puede realizar en _Paso 1 en el menú de Configuración_.
- En OJS/OMP 3.x, esto se puede hacer en _Ajustes &gt; Revista &gt; Contacto_.

## Validacion de correo para nuevos usuarios

OJS proporciona un formulario de auto-registro para todos los usuarios que puede ser deshabilitado o reactivado en _Menú del Administrador > Usuarios/as & roles > Opciones de acceso a sitio > Registro de usuarios/as_

Una vez activado, cada usuario puede registrarse y crear una cuenta en la Revista con un rol como lector, autor y/o revisor; sin embargo esto no impide que los usuarios creen cuentas de correo spam que llenen la lista de usuarios legítimos y aumenten la carga de trabajo para los editores de la revista, para evitar esto, los gestores de la revista deben revisar estas cuentas y limpiarlas manualmente.

La creación masiva de cuentas de spam se puede reducir con dos ajustes en el archivo de configuración: `config.inc.php`:

```
; Si está habilitado, las direcciones de correo electrónico deben ser validadas antes de que el inicio de sesión sea posible.
require_validation = Off

; Número máximo de días antes de que expire una cuenta no validada y sea borrada
validation_timeout = 14
```

El primer parámetro es `require_validation`, que se establece en `Off` por defecto. Cuando se establece a `On`, este parámetro requerirá que cada nuevo usuario active su cuenta antes de poder usar el sistema por completo.

El segundo parámetro es `validation_timeout`, que se establece en `14` por defecto. Este parámetro sólo funciona cuando el parámetro `require_validation` está habilitado, y significa que un usuario tiene 14 días para activar su nueva cuenta o la cuenta será eliminada del sistema automáticamente cuando se alcance el límite de tiempo.

## Configurar el sistema para usar Gmail SMTP

Para usar Gmail SMTP para enviar correo electrónico desde OJS, puede utilizar la siguiente configuración en `config.inc.php`.

Para OJS 2.x:

```
; Usar SMTP para enviar un correo en lugar de mail()
smtp = On

; Configuración del servidor SMTP
smtp_server = "ssl://smtp.gmail. om"
smtp_port = 465

; Habilitar autenticación SMTP
smtp_auth = PLAIN
smtp_username = "user@gmail.com"
smtp_password = "contraseña"
```

Para OJS 3.x:

```
; Usar SMTP para enviar correo en lugar de mail()
smtp = On

; Configuración del servidor SMTP
smtp_server = smtp.gmail. om
smtp_port = 465

; Habilitar autenticación SMTP
smtp_auth = ssl
smtp_username = "user@gmail.com"
smtp_password = "contraseña"
```

Información adicional sobre Gmail SMTP está disponible en [https://support.google.com/a/answer/176600?hl=es](https://support.google.com/a/answer/176600?hl=en).

Tenga en cuenta que puede tener que configurar adicionalmente contraseñas de aplicación en Gmail; consultar [https://support.google.com/accounts/answer/185833?hl=es](https://support.google.com/accounts/answer/185833?hl=en) para más detalles.

## Problemas con las políticas SPF y DMARC

### Marco de política de remitente (SPF)

El Sender Policy Framework (SPF) se basa en el permiso que un servidor, que puede estar ejecutando OJS, recibe de otro servidor que aloja el dominio principal. Esto autoriza al servidor OJS a enviar correos electrónicos usando ese dominio e impide que los mensajes sean bloqueados.

SPF es necesario cuando su instalación de OJS se ejecuta en un servidor diferente, incluyendo un subdominio, desde su dominio principal; Por ejemplo, cuando se aloja una revista ubicada en el subdomino mirevista.dominio_principal.com en un servidor ubicado fuera de la institución que aloja dominio_principal.com.

En esta situación, tendrá que preguntar a su personal de servicios de TI para agregar un registro TXT en los servidores DNS de su zona, el cual otorgará el envío de correos electrónicos y notificaciones en nombre del dominio @dominio_princpal.com. A continuación se muestra un ejemplo de un posible escenario donde se requiere un registro SPF:

Servidor ejecutando OJS:

```
IP: 10.10.10.10
Nombre del servidor: myojsserver.com (este no es su dominio, sino sólo un nombre de servidor definido por su proveedor de hosting para el OJS)
```

Este servidor necesitará ser incluido en su zona DNS como un registro TXT SPF. En este caso, añadir el siguiente registro:

```
Name: vacío, o establecer a @ (esto depende de tu domino a registrar)
Type: TXT
Value: v=spf1 ip4:10.10.10.10 a:myojsserver.com ~all
```

Si usted ya tiene un registro TXT en su zona DNS, necesitará fusionarlo para mantener sólo un registro TXT. Sólo debe haber un único registro DNS TXT.

### DMARC (Mensaje de Autenticación basado en Domino, Reportes y Conformidad)

Mientras que SPF proporciona el permiso de que OJS envíe correos electrónicos utilizando una ruta de retorno o un remitente de correo electrónico que contenga una dirección de correo electrónico con un dominio distinto al servidor donde el OJS está alojado, hay ocasiones en las que OJS debe enviar correo electrónico en nombre de los usuarios que utilizan dominios para los que no se puede agregar un registro SPF. Gmail es un buen ejemplo: si un administrador tiene la dirección de correo `user@gmail.com`, no hay manera de que Google pueda agregarnos como un registro SPF.

DMARC resuelve esto estableciendo el correo electrónico del usuario en el campo `Responder a:`, y la dirección de correo electrónico establecida en la directiva `default_envelope_sender` en el campo `De:`. A partir de OJS 3.1.2, usted puede configurar esto a través de dos nuevos parámetros en su archivo de configuración de OJS `config.inc.php`, estableciendo los 2 campos, `force_dmarc_compliant_from` y `dmarc_compliant_from_displayname`. (Si estás en OJS 3.1.2+ y no ves esos parámetros en tu archivo de configuración actual, debes revisar el archivo de configuración `config.TEMPLATE.inc.php` y copiarlos como aparecen ahí.)

## Resolviendo Problemas en el Envío de Correo

Si algunos usuarios no reciben correos electrónicos, lo primero que hay que hacer es comprobar si usted mismo puede recibir correo electrónico. Intenta enviarte un correo electrónico usando el sistema. Si lo ha recibido, el sistema probablemente esté enviando correo electrónico correctamente. Entonces deberás de solicitar al usuario con el problema revisar su carpeta de spam/basura en su correo electrónico.

Si el usuario no puede encontrar ningún registro del correo electrónico filtrado como spam o basura, puede estar encontrando un problema de validación de **Sender Policy Framework** \(SPF\) con su servidor. Usted puede confirmar esto viendo el archivo de log del servidor de correo para ver si hay algún registro de bloqueo/retorno reportado con errores de validación SPF como resultado.

### Explicación y Solución

As of version 2.4.6, OJS included a change to the way emails are sent out. Previously, all emails were sent using the OJS user's email address in the "FROM" field. This unfortunately led to some issues with the journal's outgoing emails being flagged as "spoofed" by some email servers because the email addresses in question \(eg. james@myinstitution.org"\) didn't match the domain name of the server sending the email \(eg. "myjournal.com"\). \(Technically, the emails were failing Sender Policy Framework \(SPF\) validation.\) Being flagged in this way is more serious than being considered spam: in many cases, the receiving email server won't even assign the email to a spam/junk queue, instead simply choosing to discard it.

#### Solution 1 \(OMP, OJS\)

To prevent this from happening, the PKP development team has adopted an email notification method similar to other web applications such as WordPress: send all email from the system using one central email address in the "FROM" field, with the intended recipients' email addresses in the "REPLY-TO" Field. The central email address to be used by default would be the one provided in **Journal Setup Step 1.2: Principal Contact**, which should match the domain name from which the journal sends mail. \(If this email address cannot match the sending domain on a per-journal basis, an alternate email address can be configured at the site level via the OJS config.inc.php file\). In addition, a new "Email Header" setting has been provided in **Journal Setup Step 1.4: Email Identification**, which can be used to provide explanatory text to the recipient.

To properly configure this, we suggest the following:

* If you aren't on OJS 2.4.6+ already, upgrade.
* Configure the email address OJS will use to send out all email using the "Principal Contact" setting in Journal Setup Step 1.2
  * If at all possible, have your Principal Contact email address serve as a general point of contact for the journal, and have it match the journal domain name. For example, if your domain name is "hypothesisjournal.com", try using an email address like "editor@hypothesisjournal.com".
* Provide some explanatory text using the "Email Header" setting in Journal Setup Step 1.4. This text will appear at the top of every email generated by the system. Remember, these emails are typically notifications to users, and should be treated just like notification emails from other systems. We recommend the following text:

```
You are receiving this email on behalf of <journal-name>. In the event of a requested response, you may respond directly to this email.
```

#### Solution 2 \(OCS, but also OJS and OMP\)

Configure your install to use GMail's SMTP service. See [the section above on SMTP](#spf-and-dmarc-issues) for more information.

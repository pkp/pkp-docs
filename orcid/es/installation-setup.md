- - -
title: ¿Cómo configurar el plugin ORCID en OJS y OPS?
- - -

# Configuración del plugin ORCID

Para usar el plugin, primero tendrá que obtener credenciales públicas o miembro de la API ORCID (ID del cliente y del cliente) y luego configurar el plugin ORCID en OJS/OPS con esta información.

En este capítulo se explica cómo obtener credenciales de producción (en vivo) y añadirlas al plugin ORCID en su OJS/OPS. También puedes probar primero el plugin con las credenciales de "Sandbox" antes de utilizar las credenciales en vivo. Para más detalles sobre cómo probar en "Sandbox" y por qué puedes querer hacerlo, consulta el capítulo [Apéndice: Prueba del Sandbox ORCID](./appendix-testing-orcid-sandbox.md).

**IMPORTANTE: no active el plugin hasta que tenga las credenciales y esté listo para configurar el plugin.**

## Solicitar credenciales API públicas

### 1. Regístrate para un ORCID iD

El registro ORCID iD es gratuito y sólo requiere su nombre y correo electrónico.

Si ya tiene un iD ORCID, puede ir al paso [2. Inicia sesión en tu ORCID iD](#2-sign-into-your-orcid-id).

1. Vaya a [el sitio web ORCID](https://orcid.org/)
2. Haga clic en el menú [SIGN EN / REGISTRO](https://orcid.org/signin) en la parte superior derecha ![Página de inicio de ORCID con registro / botón de inicio de registro.](./assets/orcid_signup.png)
3. Cree una cuenta con su correo electrónico o inicie sesión con su cuenta institucional (si su institución está configurada para un solo inicio de sesión de ORCID). ![ORCID sign in page with an emphasis on registration option.](./assets/orcid_signup_register.png)
4. Si usted necesita más orientación para completar el registro, [Registre su página ORCID](https://support.orcid.org/hc/en-us/articles/360006897454-Register-your-ORCID-iD) contiene instrucciones detalladas paso a paso.

### 2. Inicia sesión en tu ORCID iD

1. Vaya a [el sitio web ORCID](https://orcid.org/)
2. Haga clic en el menú [SIGN EN / REGISTRO](https://orcid.org/signin) en la parte superior derecha
3. Inicia sesión con tu cuenta de correo electrónico existente o a través de tus credenciales institucionales (si tu institución está configurada para ORCID solo inicia sesión)

![ORCID sign in page with email or ORCID iD and password fields emphasized.](./assets/orcid_signin.png)

### 3. Navegar a Herramientas de Desarrollador

Haz clic en tu nombre en la parte superior derecha y selecciona “Herramientas para desarrolladores” en el menú desplegable.

![ORCID record with account name dropdown expanded and Developer Tools selected.](./assets/orcid_dev_tools.png)

### 4. Seleccione para registrarse en la API pública

Haga clic en el botón “Registrarse para la API pública ORCID gratuita”.

Se le pedirá que lea y acepte las condiciones del servicio.

![ORCID Developer Tools page with the highlighted button Register for the free ORCID public API.](./assets/orcid_dev_tools_register.png)

### 5. Complete el formulario de registro

En el formulario de registro, ingrese:

* Nombre completo de revista
* URL de tu revista
* Un breve mensaje sobre su revista - se mostrará a sus usuarios cuando conecten sus iDs ORCID
* Redireccionar URI - esta es la página a la que serán llevados tus usuarios después de que se hayan autenticado sus iDs ORCID. Esta debe comenzar con “https://” e incluir el enlace a la revista. Para más detalles y ejemplos vea la sección [ORCID redireccionar URIs](#orcid-redirect-uris) a continuación.

![ORCID Developer Tools public API request form.](./assets/orcid_dev_tools_form.png)

### 6. Guarda el formulario y recibe tus credenciales

1. Haga clic en el icono de guardar en la parte inferior derecha para guardar el formulario. ![ORCID Developer Tools public API request form with the save icon pointed out.](./assets/orcid_dev_tools_form_save.png)
2. Your credentials (Client ID and Client Secret) will be displayed right away. Copie estas credenciales en el ORCID Profile Plugin de OJS/OPS como se explica a continuación. ![ORCID Developer Tools public API request form with Client ID and Secret displayed.](./assets/orcid_dev_tools_form_credentials.png)

## Solicitud de credenciales API públicas

Las credenciales de miembro API están conectadas a una organización miembro del ORCID. Tu organización debe ser un miembro de ORCID para solicitar credenciales de miembro API. Si tu revista está afiliada a una institución, puede ponerse en contacto con la biblioteca o el área responsable de las suscripciones de tu entidad y preguntar sobre la membresía ORCID y las credenciales API. También puedes comprobar si tu organización pertenece a un [consorcio local](https://orcid.org/consortia), y como puedes recibir ayuda del consorcio. También puedes ponerte en contacto con ORCID directamente al correo electrónico support@orcid.org.

Para solicitar tus credenciales de miembro API, completa el formulario a [Registre una aplicación cliente: Production Member API - Trusted Party](https://orcid.org/content/register-client-application-production-trusted-party). Una vez que envíes el formulario, ORCID te enviará un correo electrónico como miembro de producción "Client ID" y cliente secreto.

### URIs de redirección ORCID

Cuando te registras en credenciales de ORCID API, tendrás que introducir al menos una URI de Redirección, cuál es la ubicación de la revista a la que se enviarán sus usuarios después de autorizar a OJS/OPS a conectarse a su registro ORCID, La URI debe comenzar con “https://” e incluir el enlace a la revista como parte de la URI. Por ejemplo:

* Modo para varias revistas (por ejemplo, para una instalación de múltiples revistas): https://example.com
* Modo para una revista (para una sola revista): https://example.com/index.php/testJournal
* Esto no funciona: https://example.com/index.php/testJournal/index

La opción host permite que cualquier URI bajo ese host sea usado como URI de redirección. En múltiples instancias de revistas, asegúrese de elegir la url base de su dominio y no publicaciones individuales para evitar errores de redirección. Para revistas individuales es importante utilizar la ruta de la revista (típicamente algo como “index.php/testJournal”, sin ninguna información final, como se indica). Cualquier información adicional en la URI causará que la redirección no funcione.

Para más detalles sobre las URIs de redireccionamiento, consulte la página de soporte de ORCID para [APIs públicas](https://support.orcid.org/hc/en-us/articles/360006897174-Register-a-public-API-client-application) y [APIs de miembros](https://support.orcid.org/hc/en-us/articles/360006973913), respectivamente, y la [Redirigir hilo URI en el Foro PKP](https://forum.pkp.sfu.ca/t/orcid-oauth2-redirect-uris-or-callback-urls-for-ojs).

**Tenga en cuenta**: Al registrarse para recibir las credenciales de la API de miembros, las organizaciones deben indicar el "Nombre del cliente" junto con el URI de Redirección. Cuando se trabaja con múltiples revistas como parte de una instancia de OJS, el nombre de cliente utilizado debe ser lo suficientemente amplio como para servir como fuente para todos las revistas alojadas en su(s) instancia(s), como el Nombre del Cliente es lo que aparecerá como la "fuente" de los datos cuando un trabajo de OJS es escrito en un registro ORCID (ejemplo. “Servicio de alojamiento de revistas de la Universidad de ABC”). Sin embargo, si planea instalar sólo una revista en su dominio y utilizar ORCID para esa revista, entonces el Nombre del Cliente puede ser indicado con el nombre de la revista.

Al registrarse en Sandbox o [Credenciales del miembro de producción](https://orcid.org/content/register-client-application-production-trusted-party) a través de ORCID, aunque parece haber un límite de cinco redirecciones, puedes añadir tantas como quieras a la sección "notas a ORCID". Si alguna vez necesita ajustar, añadir o eliminar URIs, puede volver a enviar el formulario e indicar que es para una aplicación existente.

## Activar y configurar el plugin de perfil ORCID en OJS/OPS

Después de haber obtenido su ID de cliente y cliente secreto de ORCID, puede activar y configurar el plugin en OJS/OPS.

Primero, habilite el plugin ORCID para cada revista (OJS) o el servidor de preimpresión (OPS) en su instalación:

1. Cuando inicie sesión en OJS/OPS como administrador, vaya a Ajustes > Sitio Web > Plugins
2. Haga clic en la galería de plugins y seleccione el perfil de ORCID de la lista

Hay tres escenarios potenciales para configurar el plugin, basados en tu caso de uso:

1. Si tiene una instalación de una sola revista o el servicio de preimpresión , configure el plugin siguiendo las instrucciones que se indican a continuación en la configuración del servidor Por revista/Preimpresión.
2. Si tiene una instalación de servidor multi-revista o multi-preimpresión, pero no quiere habilitar el plugin ORCID para todos, configurar cada diario o servidor de preimpresión por separado siguiendo las instrucciones que se indican a continuación en la configuración del servidor Por revista/Preimpresion, usando las mismas credenciales de la API ORCID (ID de cliente y símbolo de cliente) para cada uno.
3. Si tiene una instalación multi-revista o multi-preimpresion instalación de servidor y quiere habilitar el plugin ORCID para todo el sitio, siga las instrucciones de [abajo en Configuración del sitio](#site-wide-setup).

### Configuración del servidor por revista/preimpresión

Si desea habilitar el plugin ORCID para una sola revista (OJS) o para el sistema preimprimir (OPS):

1. Cuando inicie sesión en OJS/OPS como administrador, vaya a Ajustes > Sitio Web > Plugins
2. Bajo Plugins instalados encuentra el plugin ORCID
3. Marque la casilla de verificación para activar el plugin
4. Haga clic en la flecha azul a la izquierda del nombre del plugin para hacer que los enlaces aparezcan debajo del plugin. Seleccione su tipo de API e introduzca su ID de cliente y cliente secreto.

![Setup for OJS ORCID plugin with Public client ID and secret entered.](./assets/orcid_plugin_setup.png)

Para un recorrido visual, vea este [vídeo de configuración del plugin ORCID](https://vimeo.com/374414746).

#### Ajustes de email

En “Configuración de correo electrónico” puede marcar la casilla de verificación para “Enviar correo electrónico para solicitar autorización ORCID a los autores cuando se acepte un artículo”. Si está marcado, OJS/OPS enviará un correo electrónico automáticamente a los autores que no hayan vinculado sus iDs ORCID cuando se publique el artículo pidiéndoles que vinculen sus iDs. Esta solicitud se enviará utilizando la plantilla de correo electrónico “ORCID Collect Author Id” (Public API) o “ORCID Request Author Authorization” (Member API).

![OJS ORCID plugin with checkbox checked to send email to request ORCID authorization from authors.](./assets/orcid_plugin_auto_emails.png)

### Configuración del sitio

Para instalaciones multi-revista y multi-preimpresión el plugin puede configurarse en todo el sitio en `config.inc.php` para habilitar el plugin ORCID para todos los diarios. Tenga en cuenta que la configuración de todo el sitio a través de `config.inc.php` sobreescribe cualquier configuración individual del plugin existente. Sin embargo, el plugin puede ser habilitado/desactivado individualmente para revistas, y cada revista puede administrar su propia configuración de correo electrónico como se describió anteriormente. Añadir credenciales en el archivo config.inc.php oculta el secreto del cliente de los administradores de servidores/revistas, los cuales pueden ser preferidos si tiene credenciales institucionales para ORCID. Añadir lo siguiente a nuestro archivo `config.xml`:

![Config settings in the OJS config file](./assets/orcid-config-inc-php-settings.png)

Tenga en cuenta que el `api_url` necesita terminar con una barra (/).

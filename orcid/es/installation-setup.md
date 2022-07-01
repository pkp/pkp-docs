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
2. Haga clic en el menú [SIGN EN / REGISTRO](https://orcid.org/signin) en la parte superior derecha ![ORCID homepage with sign in / register button pointed out.](./assets/orcid_signup.png)
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

Member API credentials are connected to an ORCID member organization. Your organization must be an ORCID member to request Member API credentials. If your journal is affiliated with an institution, contact the institution's library to ask about ORCID membership and API credentials. You may also wish to check whether your organization belongs to a [local consortium](https://orcid.org/consortia), as you may be able to receive help from the consortium. You can also contact ORCID directly at support@orcid.org.

To request your Member API credentials, complete the form to [Register a client application: Production Member API - Trusted Party](https://orcid.org/content/register-client-application-production-trusted-party). Once you submit the form, ORCID will email your production member Client ID and Client Secret to you.

### ORCID redirect URIs

When you register for ORCID API credentials, you will need to enter at least one Redirect URI, which is the journal location that your users will be sent to after authorizing OJS/OPS to connect to their ORCID record, The URI must begin with “https://” and include the link to the journal as part of the URI. For example:

* This works (for example, for a multi-journal installation): https://example.com
* This works (for a single journal): https://example.com/index.php/testJournal
* This does NOT work: https://example.com/index.php/testJournal/index

The host option allows any URI under that host to be used as a Redirect URI. In multiple journal instances, make sure you choose the base url of your domain and not individual journals to avoid redirect errors. For individual journals it is important to use the journal path (typically something like “index.php/testJournal”, without any trailing information, as per above). Any additional information in the URI will cause the redirect to not work.

For more detail on Redirect URIs, see the ORCID support page for [Public APIs](https://support.orcid.org/hc/en-us/articles/360006897174-Register-a-public-API-client-application) and [Member APIs](https://support.orcid.org/hc/en-us/articles/360006973913), respectively, and the [Redirect URI thread on PKP Forum](https://forum.pkp.sfu.ca/t/orcid-oauth2-redirect-uris-or-callback-urls-for-ojs).

**Please note**: When registering to receive Member API credentials, organizations are required to indicate the "Client Name" along with the Redirect URI(s). When working with multiple journals as part of an OJS instance, the Client Name used must be broad enough to serve as a source for all of the journals hosted on its instance(s), as the Client Name is what will appear as the "source" of data when a work from OJS is written to an ORCID record (e.g. “ABC University journal hosting service”). However, if you plan to install only one journal in your domain and use ORCID for that journal, then the Client Name can be indicated as the name of the journal.

When registering for Sandbox or [Production Member API](https://orcid.org/content/register-client-application-production-trusted-party) credentials through ORCID, although there appears to be a limit of five redirects, you can add as many as you like to the ‘notes to ORCID’ section. If you ever need to adjust, add, or remove URIs, you can resubmit the form and indicate that it is for an existing application.

## Enable and configure the ORCID Profile plugin in OJS/OPS

After you have obtained your Client ID and Client Secret from ORCID, you can enable and configure the plugin in OJS/OPS.

First, enable the ORCID plugin for each journal (OJS) or preprint server (OPS) on your installation:

1. When logged in to OJS/OPS as an administrator, go to Settings > Website > Plugins
2. Click on Plugin Gallery and select ORCID Profile from the list

There are three potential scenarios for configuring the plugin, based on your use case:

1. If you have a single journal or preprint server installation, configure the plugin following the instructions below under Per Journal/Preprint Server Setup.
2. If you have a multi-journal or multi-preprint server installation, but you do not want to enable the ORCID plugin for all, configure each journal or preprint server separately following the instructions below under Per Journal/Preprint Server Setup, using the same ORCID API credentials (Client ID and Client Secret) for each.
3. If you have a multi-journal or multi-preprint server installation and want to enable the ORCID plugin for all site-wide, follow the [instructions below under Site-wide Setup](#site-wide-setup).

### Per Journal/Preprint Server Setup

If you want to enable the ORCID plugin for a single journal (OJS) or preprint server (OPS):

1. When logged in to OJS/OPS as an administrator, go to Settings > Website > Plugins
2. Under Installed Plugins find the ORCID plugin
3. Check the checkbox to enable to plugin
4. Click the blue arrow to the left of the plugin name to make “Settings” appear, then open Settings. Select your API type and enter your Client ID and Client Secret.

![Setup for OJS ORCID plugin with Public client ID and secret entered.](./assets/orcid_plugin_setup.png)

For a visual walkthrough see this [ORCID plugin setup video](https://vimeo.com/374414746).

#### Email Settings

Under “E-Mail Settings” you can tick the checkbox to “Send e-mail to request ORCID authorization from authors when an article is accepted.” If checked, OJS/OPS will send an email automatically to authors who have not already linked their ORCID iDs when the article is published asking them to link their iDs. This request will be sent using the “ORCID Collect Author Id” email template (Public API) or “ORCID Request Author Authorization” (Member API).

![OJS ORCID plugin with checkbox checked to send email to request ORCID authorization from authors.](./assets/orcid_plugin_auto_emails.png)

### Site-wide Setup

For multi-journal and multi-preprint server installations the plugin can be set site-wide in `config.inc.php` to enable the ORCID plugin for all journals. Note that site-wide settings through `config.inc.php` override any existing individual plugin settings. However, the plugin can be enabled/disabled on an individual basis for journals, and each journal can manage their own email settings as described above. Adding credentials in the config.inc.php hides the Client Secret from Journal/Server Managers, which may be preferred if you have institutional credentials for ORCID. Add the following section to your `config.inc.php` file:

![Config settings in the OJS config file](./assets/orcid-config-inc-php-settings.png)

Note that the `api_url` needs to end with a slash.

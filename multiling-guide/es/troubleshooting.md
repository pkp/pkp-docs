---
title: Solución de problemas y Problemas conocidos - Uso del software PKP en varios idiomas
showPageTOC: true
---

# Solución de problemas y problemas conocidos

### Solución de problemas: Cambio en la configuración del idioma principal

Como ya se ha mencionado, cambiar el idioma principal de su revista puede provocar espacios vacíos en sus datos.

Para evitar estos problemas, deberá copiar los datos de usuario y los datos de envío en los campos de configuración del idioma principal. Si tiene un gran número de registros de usuarios y/o envíos, es posible que tenga que invertir recursos en desarrollar un código o herramienta para copiar estos datos. Si tiene pocos registros, puede hacerlo manualmente.

Para hacerlo de forma manual:

1.  Vuelva a activar la configuración regional anterior en Configuración del sitio web > Configuración > Idiomas, para que los datos introducidos anteriormente aparezcan en los registros.

2.  Abra cada registro y copie los datos del idioma anterior en los nuevos campos del idioma seleccionado.

Si la configuración regional del sitio muestra un idioma distinto del seleccionado como idioma principal, limpie los archivos de caché, de su navegador, después de cambiar manualmente la información del idioma.

### Problemas conocidos

Existen algunos problemas conocidos con el multilingüismo en OJS.

-   Actualmente, los usuarios no pueden ver en la interfaz de usuario en qué idioma se ha realizado un envío: Esta información sólo se almacena en la base de datos. Por lo tanto, no hay forma de corregir los envíos realizados en un idioma incorrecto sin cambiar esta información en la base de datos, lo que puede causar problemas a la hora de enviar metadatos a terceros.

-   Plantillas de correo electrónico sin traducir: Si falta la traducción de alguna plantilla de correo electrónico e intentas enviar un correo en ese idioma, el mensaje aparecerá en blanco. La traducción de plantillas de correo electrónico deberá añadirse a la base de datos.

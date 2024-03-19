---
title: Instalación, habilitación y configuración de idiomas - Uso del software PKP en varios idiomas
showPageTOC: true
---

# Instalación, habilitación y configuración de idiomas

Una vez que haya establecido los idiomas que desea implementar y cómo desea que se utilice cada uno, ya sea como idioma de la interfaz de usuario o como opción de idioma para el contenido enviado, deberá instalar y activar los archivos de configuración regional correspondientes.

## Instalación de nuevos idiomas

El administrador del sitio puede instalar nuevos idiomas. Para más información sobre cómo instalar nuevos idiomas puede leer [ Gestionar Idiomas en el sistema PKP](https://docs.pkp.sfu.ca/translating-guide/en/managing-languages#install-a-language) (en inglés) de la Guía de traducción de PKP.

## Habilitar nuevos idiomas

Una vez que el administrador del sitio ha instalado un nuevo idioma, puede activar varios aspectos de la configuración regional desde Sitio web > Configuración > Idiomas. En la siguiente lista se ofrece una breve descripción de cada opción, con explicaciones más detalladas más adelante:

-   Idioma principal: Sólo se puede activar para un idioma. Puede considerarse "por defecto". Su sitio se mostrará a los usuarios en este idioma. Tenga especial cuidado con la selección del idioma principal, ya que cambiarla puede tener graves consecuencias para los datos de todo el sitio (más detalles a continuación).
-   UI (Interfaz de usuario): Cuando se activa, las interfaces front-end y back-end estarán disponibles en ese idioma.
-   Formularios: Cuando se activa, cualquier formulario del sistema (registro de usuarios, por ejemplo) estará disponible en ese idioma.
-   Envíos: Una vez activada esta opción, los autores podrán realizar envíos en ese idioma y enviar metadatos en ese idioma. Esto también permite introducir metadatos en varios idiomas. Tenga cuidado al activar esta opción para un idioma, ya que desactivarla después de recibir envíos puede afectar a su capacidad para editar metadatos (más detalles a continuación).

## Idiomas principales

Como se ha comentado en la sección anterior, podrá especificar un idioma principal que servirá como idioma por defecto para su sitio. Los idiomas principales se utilizan para determinar qué idioma se requiere para los distintos campos del sistema. Los usuarios pueden omitir introducir información en cualquier otro idioma, pero algunos campos siempre serán obligatorios en la configuración del idioma principal.

Cambiar la configuración del idioma principal después de publicar la revista puede tener consecuencias importantes para los datos de los usuarios y de los envíos (que se describen a continuación), por lo que le rogamos que elija cuidadosamente la configuración del idioma principal antes de permitir los registros y los envíos.

### Campos obligatorios de configuración regional para todo el sitio e idioma principal para la revista

Se requiere de un idioma principal tanto para el sitio como para la configuración de la revista.

Para el contenido de todo el sitio, como el título del sitio, o (especialmente) los nombres de usuario, apellidos, afiliaciones, etc., se requieren campos en la configuración regional principal del sitio. En la práctica, esto significa que si la configuración regional principal de su revista difiere de la configuración regional principal del sitio, se pedirá a los usuarios que introduzcan sus nombres y afiliaciones en ambos idiomas, aunque se muestren de forma idéntica.

Para ciertos campos obligatorios de la revista, como el título de la revista, los títulos de los números, etc., el contenido se requiere en la configuración regional principal de la revista.

### Precauciones sobre el cambio de la configuración en el idioma principal

Si cambia la configuración regional principal de su revista, los datos de usuario y el envío no se copiarán automáticamente a los nuevos campos de la nueva configuración regional principal. Esto tiene las siguientes implicaciones:

-   En los registros de usuario y de envío faltarán datos.

-   Cuando edite un registro de usuario o de envío al que le falten campos obligatorios (como los campos de nombre) en la configuración regional principal, deberá introducir datos en esos campos antes de poder guardar el registro.

-   Cuando un editor esté asignando revisores y trabajando en la nueva configuración regional primaria, no verá a los revisores que no tengan capturados los campos de datos de configuración regional primaria.

-   Sus datos podrían ser incoherentes y esto podría provocar problemas de actualización en el futuro.

Si no tiene otra opción que cambiar su configuración regional principal tras la publicación de su sitio, consulte la sección Solución de problemas para obtener consejos sobre cómo preparar sus datos y solucionar estos posibles problemas.

## Formularios

Al habilitar diferentes idiomas, debe asegurarse de que todos los campos de información de la revista estén traducidos y actualizados. De lo contrario, al cambiar el idioma de navegación, la información será visible solo en el idioma principal.

## UI (Interfaz de usuario)

Una vez activada la opción de Interfaz de usuario (UI) para al menos un idioma adicional, los visitantes pueden seleccionar otro idioma con el selector de idiomas, que se añadirá automáticamente al sitio web. También puede añadir un bloque de cambio de idioma a la barra lateral activando el plugin Language Toggle Block desde la galería de *plugins*.

## Envíos

Una vez que los Envíos estén habilitados para un idioma, los usuarios tendrán la opción de seleccionar un idioma de envío cada vez que realicen un nuevo envío. Los campos específicos del envío, como título, resumen, apellidos de los autores, etc., serán obligatorios en el idioma especificado en el primer paso del proceso de un nuevo envío.

### Precauciones sobre el cambio de idiomas disponibles en el envío

Realizar cambios en los idiomas disponibles cuando hay envíos en la revista puede provocar errores al intentar editar los metadatos. No podrá editar los metadatos de un envío en un idioma determinado si posteriormente desactiva los envíos en ese idioma. La única forma de editar los metadatos de un envío realizado en un determinado idioma que ha sido desactivado, es volver a activar el idioma.

Si desea deshabilitar los envíos en un idioma en particular, vaya a Sitio web > Configuración > Idiomas y desmarque Envíos para ese idioma.

Si decide cambiar o añadir idiomas de envío, asegúrese de que sus políticas de envío y directrices para autores se traduzcan y actualicen en consecuencia. Por ejemplo, cuando las directrices no están debidamente traducidas para los idiomas habilitados, OJS mostrará esta información en el idioma de la configuración regional primaria.

## Acerca de la Configuración regional y Usuarios y Roles

Los campos Nombre y Apellido de las cuentas de usuario son multilingües, lo que significa que deben rellenarse para cada idioma que se utilice. Al crear una cuenta, se pedirá al usuario que introduzca su nombre en todos los campos de configuración regional. Los nombres de los autores y coautores en los envíos funcionan de la misma manera. Esto permite a un usuario mostrar un nombre diferente en distintos idiomas, lo que podría ser deseable para idiomas que utilizan distintos juegos de caracteres, aunque esto puede tener un impacto negativo con las limitaciones de los servicios de indexación y metadatos (véase más adelante).

Si activa una nueva configuración regional en el servidor de la revista/editorial/preimpresión, los campos de la nueva configuración regional para los nombres de usuario estarán vacíos. Es posible que se le pida que rellene otros campos de configuración regional para los nombres de usuario cuando introduzca registros de usuario. Si añade una nueva configuración regional y la convierte en la principal, es posible que no pueda buscar participantes por nombre en los envíos o que falten metadatos del colaborador en sus envíos.

Los nombres de los roles (por ejemplo, "Editor de la revista", "Autor") en OJS, OMP y OPS son datos, y no se verán afectados por los cambios en los archivos de configuración regional. Si cambia la configuración regional de una revista, editorial o servidor de preimpresión, tendrá que traducir manualmente los nombres de los roles, lo que puede hacerse editando cada rol en la pestaña "Tareas" de "Usuarios y roles". Consulte [Aprendiendo de OJS 3: Usuarios y roles](https://docs.pkp.sfu.ca/learning-ojs/en/users-and-roles) para obtener instrucciones sobre la edición de roles.

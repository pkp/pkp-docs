---
title: Registro de DOI
showPageTOC: true
---

# Registro de DOI

Aunque se haya asignado un DOI a un objeto en OJS, la agencia de registro no lo reconoce automáticamente y la URL correspondiente en [https://dx.doi.org/](https://dx.doi.org/) no estará funcionando. Primero tendrá que registrar el DOI en una de las agencias de registro de DOI. En el momento de redactar este documento, OJS admite el registro en Crossref, mEDRA y DataCite. Se paga una cuota de afiliación para registrar la revista en una de estas agencias y, a veces, una pequeña cantidad por cada DOI registrado.  Algunas agencias son más adecuadas para determinados tipos de revistas y sus precios varían. También es posible que una organización a la que usted pertenezca le proporcione la afiliación a una de estas agencias.

## Exportación vs. Registro {#export-registration}

Antes de registrar los DOIs en Crossref, mEDRA o DataCite por primera vez, deberá decidir si desea utilizar el conector de registro en modo "exportación manual" o "registro automático". Esto depende de la familiarización con la agencia de registro y, probablemente, de lo práctico que puede ser.

- Si tiene (o pretende tener) su propia cuenta en la agencia de registro, lo más probable es que prefiera el registro automático. El registro automático significa que no tiene que exportar metadatos al formato XML de la agencia de registro ni cargar archivos en la agencia de registro de forma manual. Puede registrar DOIs y metadatos directamente desde OJS con unos pocos clics.
- Si no tiene acceso a las credenciales de la cuenta que su agencia de registro le ha proveído, tendrá que exportar archivos XML para registrar los objetos. A continuación, el XML puede enviarse al propietario de la cuenta (por ejemplo, como archivo adjunto a un correo electrónico), el cual tendrá que cargar los archivos en el sitio de registro de la agencia. Esto sigue siendo mejor que enviar metadatos sin formato por correo electrónico. La implementación del formato XML en OJS ha sido debidamente certificada por los organismos de registro para garantizar el máximo contenido informativo, la normalización y la calidad de los datos. Se pueden evitar muchos errores de transferencia manual, y el propietario de la cuenta tendrá menos trabajo al cargar un XML ya preparado en lugar de introducir los metadatos de forma manual o al tratar de crear un archivo XML desde cero.

Aunque, en principio, es posible mezclar ambas formas de trabajo, manual y automático, sugerimos no hacerlos de esa forma. Si, por ejemplo, configura los conectores DOI para el registro automático y luego carga un archivo manualmente en la agencia de registro, se encontrará en una situación en la que la base de datos de registro de OJS no estará sincronizada con la base de datos de las agencias de registro. Esto puede provocar errores de registro al intentar actualizar los metadatos de un objeto que se ha registrado manualmente con anterioridad. Esto es especialmente importante cuando se trabaja con mEDRA, ya que el formato XML mEDRA \(O4DOI\) difiere para el registro inicial y la actualización de metadatos.

Sin embargo, no es problema utilizar la función de exportación XML para la inspección local de los datos XML que se transferirán posteriormente a la agencia de registro a través del OJS. Mientras el registro real se realice en OJS, las bases de datos de registro local y remota no se verán afectadas.

## Utilización de plugins de registro {#registration-plugins}

Para una documentación más detallada y específica de Crossref, consulte el [Manual Crossref para OJS](/crossref-ojs-manual/).

### Configuración

Cada plugin tiene su propia página de configuración. Los plugins tienen un aspecto un poco diferente según la agencia con la que vaya a trabajar, pero todos se caracterizan por dos cosas:

1. Información sobre las credenciales que la agencia de registro le ha proveído en el registro y la información de su cuenta.
2. Una opción para registrar automáticamente los DOI en la agencia de registro.

La agencia de registro con la que trabaje le proporcionará la información sobre sus credenciales. Si usted no tiene estos datos, puede ponerse en contacto con los equipos de soporte de cada una de las agencias de registro.

Si lo desea, puede mantener desactivado el registro automático e ingresar cada DOI individualmente. Si está trabajando en un bloque de números atrasados o acaba de empezar con su revista, es posible que prefiera tener un poco más de control. Sin embargo, se recomienda que eventualmente permita que los plugins depositen de forma automática.

### Depósito

De nuevo, cada plugin es un poco diferente. Generalmente, puede depositar manualmente un DOI en su agencia de registro haciendo lo siguiente:

- haga clic en la casilla de verificación de cualquier contenido que quiera depositar (puede filtrar por contenido "no registrado");
- pulse el botón "Depositar" al final de la lista y...
- espere a que aparezca el mensaje "¡Registro correcto!"

Eso es todo. La mayoría de los usuarios probablemente podrán hacer el registro de todos los DOIs de esta manera. Si no tiene intención de actualizar los metadatos después del registro, esto es todo lo que tendrá que hacer.

### Actualizar los metadatos DOI

A veces tendrá que actualizar metadatos relacionados con una publicación. Puede que haya habido un error en el título o en el nombre del autor, o un cambio sustancial en el resumen. Cuando sustituya una galerada y/o actualice sus metadatos, también deberá enviar esos nuevos metadatos a su agencia de registro.

Los cambios en los metadatos que usted haga en el OJS no se transferirán automáticamente a la agencia de registro. Tendrá que volver a depositar los metadatos en la agencia de registro siguiendo el mismo proceso detallado anteriormente en "Depósito".

## Registro externo {#external-registration}

Dependiendo de la agencia de registro, puede evitar por completo el uso de OJS. Por ejemplo, Crossref tiene un formulario de depósito web para registrar las nuevas publicaciones. La gestión externa de los DOIs siempre implicará más trabajo y cuidado. Normalmente, se trata de rellenar a mano hojas de cálculo o formularios web. Pero, si realmente está interesado en dedicar algún tiempo con sus DOIs, póngase en contacto con su agencia de registro para conocer más sobre las diferentes opciones.

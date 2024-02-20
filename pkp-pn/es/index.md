---
generateHeadingToc: true
---

# PKP Preservation Network

Este vídeo proporciona una breve introducción al PKP Preservation Network y los pasos para instalar y configurar el plugin en su revista.

{% include video.html id="ZoVud5apItI" provider="youtube" title="Registering for the PKP Preservation Network"%}

## Introducción

El PKP Preservation Network (PKP PN) permite a los editores de revistas en OJS preservar digitalmente su contenido. Esto significa que, en el caso de que una revista deje de publicar o se desconecte, habrá una forma de tener un acceso continuo a los artículos y números a largo plazo.

El PKP PN deposita contenido utilizando el programa [LOCKSS](https://www.lockss.org/) , que ofrece preservación descentralizada y distribuida. Esto permite que las revistas que no formen parte de ningún otro servicio de preservación digital (como CLOCKSS o Portico) puedan ser preservadas a largo plazo.

El PKP PN funciona como un archivo oscuro, lo que significa que los usuarios finales no tendrán acceso al contenido preservado hasta después de un “evento desencadenante”. Después de un evento desencadenante, el personal de PKP importará el contenido conservado en una o más instancias del OJS alojadas por instituciones miembro de PKP. Una vez cargado en estas instancias de OJS, el contenido será de acceso público.

Es importante tener en cuenta que archivar el contenido de la revista en el PKP PN no es lo mismo que hacer una copia de seguridad del sitio. El archivo PKP PN no se puede utilizar si se pierde contenido en el sitio y es necesario restaurarlo. Las copias de seguridad frecuentes de cada sitio deben realizarse por separado.

Además de garantizar el acceso a largo plazo a su contenido, tener una estrategia de conservación y archivación digital y hacer esto explícito como parte de una política es uno de los componentes clave del proceso de aplicación [DOAJ](https://docs.pkp.sfu.ca/doaj/en/) y uno de los criterios para recibir el Sello de DOAJ.

## Instalación y configuración

### Criterios del PKP PN

Para poder utilizar el PKP PN, la revista debe cumplir con lo siguiente:

* Una versión compatible de OJS - OJS 3.1.2 o posterior
* Un ISSN
* Haber publicado al menos un artículo

Para configurar el plugin, necesitarás iniciar sesión como Administrador.

### Instalación y Actualización

1. Ir a Ajustes > Sitio web > Módulos > Galería de Módulos
2. Los nuevos usuarios, necesitarán instalar el plugin.
3. Para los usuarios que han usado PKP PN en el pasado, puede que sea necesario actualizar el plugin; De ser así, deben encontrar el plugin en la página de la Galería de Módulos y hacer clic en Actualizar.
4. Para la instalación manual y la configuración del PKP, por favor consulte [GitHub README](https://github.com/pkp/pln).
5. Una vez que el plugin ha sido actualizado o habilitado, se hace clic en Configuración para revisar y aceptar los términos de uso. El campo de identificador de la revista se llenará automáticamente.
6. Hacer clic en "Guardar"

![La pantalla del plugin PKP PN con las casillas de verificación completadas, automáticamente rellenadas en el campo Identificador de la revista y botón Guardar](./assets/pkp-pn-terms.png)

## Usar el Plugin

Una vez activado, el plugin depositará automáticamente el contenido publicado en el PKP PN cada vez que se publique un número. Este es el proceso de depósito automático:

1. El depósito se solicita mediante la publicación de un número. Esto se basará en las tareas programadas de los plugins, siendo el intervalo predeterminado 24 horas.
2. El depósito se transfiere al servidor de prueba de la red, donde se validan sus contenidos, se comprueba si hay virus, etc.
3. El depósito se transfiere desde el servidor de instalación a la red LOCKSS.
4. Cuando se compruebe que todas las copias de la red LOCKSS son idénticas, la revista borra el depósito para ahorrar espacio de almacenamiento.

El plugin PKP PN comenzará a empaquetar contenido que se depositará dentro de 24 horas a 48 horas de la configuración y la nueva publicación del número, pero tomará unos días para pasar por todo el ciclo.

El plugin PKP PN no soporta actualmente el depósito de artículos individuales que no están asignados a un número. El plugin comprobará si hay cambios o actualizaciones (después de la creación del depósito). Si hay un cambio en un artículo depositado o se ha asignado un nuevo artículo a un número depositado, el plugin reinicia automáticamente el depósito de modo que la próxima vez que se ejecute el proceso este número se vuelva a depositar.

Los números anteriores se depositarán en el archivo cuando se active el plugin.

### Restablecer

La opción de reinicio para el depósito de números se reempaquetará y enviará los archivos al servidor de prueba para su reprocesamiento. Esto se puede hacer si el sistema indica que existe un error.

## Estatus

### Comprobando el estatus en OJS

Para comprobar el estado del plugin PKP PN, es posible hacer clic en la flecha azul al lado del título del plugin seguido por Estado.

![El menú PKP PN se expandió en la pantalla de la Galería de Plugins, con una flecha apuntando al enlace Estado](./assets/pkp-pn-status-button.png)

La clave a buscar en la página de estado de PKP PN sería la columna de estado de LOCKSS. Si la preservación de un número es exitosa, el estado de LOCKSS indicará “**Acuerdo**, significa que toda la red está de acuerdo en que hay una copia consistente del asunto archivado.

El menú de estado identificará el tipo, tipo ID del objeto, número de elementos marcados y varios estados.

![La pantalla de estado del plugin PKP PN demostrando los parámetros de estado de LOCKSS para varios problemas](./assets/pkp-pn-status-menu.png)

* **ID**: El identificador interno de la base de datos del deposito.
* **Tipo**: Si el depósito es un número o un artículo. Por el momento, sólo se están empaquetando los números. Cada número se exporta y almacena como una bolsa comprimida. La bolsa tiene información sobre la revista (título de la revista, ISSN, etc.) e información sobre derechos de autor y licencias sobre cada artículo en el número.
* **Comprobado**: La última fecha en la que el plugin comprobó el estatus del depósito en el servidor de prueba. Una vez que el depósito esté completo y todos los nodos de la red LOCKSS estén de acuerdo, el plugin dejará de comprobar este estatus.

Las columnas clave son:

* **Estado local** indica el estado de la instalación de OJS en empaquetar y transferir cada número al servidor provisional.
  * **Nuevo**: el plugin conoce el depósito, pero no ha generado un archivo de paquete para el servidor de prueba.
  * **Empaquetado**: el archivo de paquete ha sido creado. El servidor de prueba no ha sido informado del depósito.
  * **Transferido**: el depósito ha sido enviado al servidor de prueba para procesamiento y validación.
* **Estatus de Procesamiento** indica el estado de gestión interna de cada número en el servidor de prueba.
  * **Recibido**: El servidor de prueba ha descargado el archivo de depósito de la revista.
  * **validado**: El paquete ha sido validado y escaneado por virus y ahora está listo para ser enviado a la red LOCKSS.
  * **Enviado**: El servidor de prueba ha informado a la red LOCKSS de que el depósito está listo.
* **Estado LOCKSS** indica el estado de cada número una vez que se ha enviado correctamente a la red LOCKSS.
  * **Recibido**: La red LOCKSS ha reconocido el depósito.
  * **Sincronizando**: Los nodos de la red LOCKSS están descargando y verificando el depósito.
  * **Acuerdo**: Los nodos de la red LOCKSS han comprobado que todos tienen una copia del depósito.

El siguiente diagrama proporciona un resumen visual del proceso de depósito.

![Gráfico de flujo de trabajo del PKP PN](./assets/pkp-pn-status-chart.png)

*Información adicional sobre el estado del depósito y errores estará disponible con el lanzamiento de OJS 3.3.*

### Comprobando el estado en la lista de revistas PKP PN

Además de comprobar el estado del plugin PKP PN, también puede comprobar la lista [de números de la revista](http://pkp.sfu.ca/files/pkppn/onix.csv). Esta lista se actualiza de forma inmediata cada noche.

### Comprobando el estado en los Keepers

Para comprobar tu estado de archivado externamente, por favor visita el [Keepers Registry](https://keepers.issn.org/). Utilizando la función de búsqueda, introduce el ISSN o título de la revista. Haz clic en la pestaña "Estado del archivo" debajo del nombre de la revista.

Tenga en cuenta que el Keepers Registry actualiza sus datos de existencias del PKP PN mensualmente.

![Imagen demostrando un registro en el  Keepers Registry](./assets/pkp-pn-keepers-registry.png)

### Abandonar el PKP PN

Para dejar de depositar su contenido en el PKP PN, simplemente es necesario desactivar el plugin. El contenido ya depositado permanecerá en el archivo.

## Solución de problemas

### He activado el plugin y los términos de uso no aparecen después de hacer clic en actualizar

![Un ejemplo de los términos de uso que no se muestran en la pantalla de configuración del plugin PKP PN.](./assets/pkp-pn-refresh-terms.png)

Comprueba que has introducido un ISSN en la [Configuración de la revista](https://docs.pkp.sfu.ca/learning-ojs/en/journal-setup#masthead). Una vez que esta información esté en la revista, aparecerán las Condiciones de uso.

### El estado del plugin continúa mostrando "Estado de la red: El PLN de PKP aún no sabe sobre este diario" y no hay problemas en la lista de depósitos

Tenga en cuenta que LOCKSS puede tardar un tiempo en sincronizar el depósito en todos los cachés de la red.

Si el mensaje persiste durante más de 24 horas, es posible que no se haya configurado correctamente el cron. Otras causas podrían ser una instalación antigua de OJS, problemas para contactar con el servidor de prueba o el servidor de prueba que no llega a la revista correctamente.

Si el problema persiste y la revista está alojada por PKP Publishing Services, será necesario ponerse en contacto. Para las revistas autoalojadas, se recomienda crear un mensaje en el [Foro de la comunidad PKP](https://forum.pkp.sfu.ca/) e incluir el título y la URL de la revista.

![Imagen demostrando la pantalla de estado del plugin que muestra 
 que el PKP PLN todavía no sabe de este diario. error](./assets/pkp-pn-unknown-journal.png)

### El estado de LOCKSS indica que está en acuerdo, pero no puedo ver mi revista en las listas de Keepers o de revistas PKP PN

La lista de [ revistas PKP PN](http://pkp.sfu.ca/files/pkppn/onix.csv) se actualiza de forma nocturna mientras que el Keepers Registry actualiza los datos de existencias del PKP PN cada mes. Si la revista debería aparecer en la lista en función de estos plazos, póngase en contacto con PKP Publishing Services si es un cliente alojado. Para las revistas autoalojadas, se recomienda crear un post en el [Foro de la Comunidad PKP ](https://forum.pkp.sfu.ca/) e incluir el UUID o URL de la revista.

### Consejos para solucionar problemas

Para usuarios con conocimientos técnicos, existe una serie de sugerencias de solución de problemas disponibles en la página [PKP PN GitHub](https://github.com/pkp/pln) que pueden utilizarse en caso de encuentrar algún problema con el empaquetamiento y el depósito de contenido.

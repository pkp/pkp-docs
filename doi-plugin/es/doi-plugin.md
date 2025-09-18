---
title: Plugin DOI
showPageTOC: true
---

# Plugin DOI

El plugin DOI asigna DOIs a las publicaciones. Puede configurarse para asignar DOIs de forma automática o de forma manual. El plugin también generará y mostrará los DOIs en la página de inicio de la publicación.

El plugin está disponible para OJS 2.4.x y 3.x, OPS 3.x y OMP 3.x.

## Habilitando el plugin DOI {#enabling}

La forma de habilitar el plugin en OJS, OMP y OPS 3.x es muy similar.

1. Como Gestor de revista, vaya a Configuración &gt; Sitio web &gt; Plugins
2. En Plugins instalados &gt; Plugins de identificador público, busque DOI
3. Haga clic en la casilla situada a la derecha de la descripción del Plugin DOI para habilitarlo

## Configuración del plugin DOI {#configuring}

Después de habilitar el plugin, aparecerá un enlace **Configuración**.  Es posible que tenga que hacer clic en la flecha azul situada junto al nombre del plugin para que aparezca el enlace Configuración.

Seleccione **Configuración** y (con algunas variaciones dependiendo de la plataforma y versión) aparecerá algo similar a este formulario.

![Pantalla de configuración del plugin DOI en OJS 3.3.](assets/settings-testdrive.png)

Veamos estos parámetros.

### Contenido

Aquí puede elegir el contenido al que desea asignar DOIs. Seleccionar un tipo de contenido no significa que todos los objetos de ese tipo recibirán un DOI. Dependiendo del método en que se generarán los sufijos DOI, podrá asignar DOIs de forma selectiva.

_Recomendación_ // ¡Manténgalo sencillo! A menos que tenga un caso de uso específico, probablemente sea mejor asignar DOI a lo más básico (por ejemplo, artículo, libro).

### Prefijo DOI

El prefijo DOI es obligatorio. Recibirá el prefijo de su agencia de registro de DOIs que haya elegido. El proceso exacto de solicitud se describe en la página web de cada agencia de registro.

### Sufijo DOI

Existen varios métodos para generar los sufijos. A continuación, se describen los diferentes métodos para crear sus patrones de sufijos.

**Patrones por defecto**: Cuando elija este método, entonces se generará un DOI para todos los objetos. El patrón será generado en automático. Podrá ver el DOI resultante _antes de la publicación_ por si desea ponerlo en sus galeradas.

**Sufijo DOI individual**: Elegir esta opción, le permitirá introducir sufijos de forma independiente para cualquier objeto. Utilice esta opción sólo si ninguno de los otros métodos cumple con sus expectativas - por ejemplo, cuando su organización tiene reglas generales para la generación de sufijos diferentes de las que se pueden implementar con patrones personalizados, o si no desea generar DOIs para todos los objetos.

**Patrones personalizados**: Cuando hace uso de patrones personalizados, es su responsabilidad crear patrones que resulten en sufijos DOI únicos para su prefijo. Debe introducir una combinación de identificadores específicos como iniciales de la revista, número e ID del artículo para asegurarse de que los DOI no puedan duplicarse. Por ejemplo, el sufijo de una galerada que no contenga el ID de la revista puede duplicarse entre varias revistas que utilizan el mismo prefijo. Lo mismo puede ocurrir si genera DOIs para artículos y números sin utilizar el ID del número en el sufijo del artículo (por ejemplo, al generar el DOI para el número con el ID interno 1 y el artículo con el ID interno 1). Lea sobre los patrones por defecto para ver algunos ejemplos.

**Nota sobre el cambio de patrones DOI en una fecha posterior**: Los DOI continuarán generándose de acuerdo al patrón configurado actualmente al ser asignados a un número. Esto también significa que **al cambiar un patrón no cambiarán los DOIs previamente asignados, sólo se cambiarán los DOIs que se generen a partir de ese momento**. Tenga cuidado al cambiar la configuración del nuevo patrón y que este no comparta los identificadores con el patrón anterior. De lo contrario, pueden producirse DOI duplicados, lo que dará lugar a problemas al intentar registrar estos identificadores.

_Recomendación 1_ // Lea la [Guía de Crossref para construir sus DOIs](https://www.crossref.org/documentation/member-setup/constructing-your-dois/).

_Recomendación 2_ // ¡Los DOI no son legibles! Seguramente querrá proporcionar mucha información abreviada en los sufijos. Pero los DOI debidamente construidos le llevarán adonde quiera ir y contendrán todos los metadatos pertinentes sobre una publicación. Un DOI con un sufijo complejo de entender, funciona exactamente igual que un DOI que contiene información legible por humanos basada en citas. Cuanto menos tenga que preocuparse por un error tipográfico en un DOI, mejor, porque los DOI _no pueden editarse una vez registrados_. ¡Ahórrese el dolor de cabeza!

_Recomendación 3_ // Utilice patrones por defecto si desea asignar DOIs automáticamente.

### Reasignar DOIs

> No aparece en todas las versiones del plugin DOI

El botón **Reasignar DOIs** borra todos los DOIs actualmente asignados pero no sus sufijos URL o DOI asignados de forma individual. Se trata de una acción avanzada. _Por favor, utilícelo con mucho cuidado y asegúrese primero de comprender su acción exacta_ - por ejemplo, dentro de un entorno de prueba. Todos los DOI se regenerarán en función de los patrones o identificadores personalizados que haya introducido. Esto significa que si cambia los patrones o identificadores personalizados después de haber asignado DOIs, los DOIs asignados previamente se perderán por completo y el mismo objeto recibirá un DOI diferente. Esto debe evitarse en la mayoría de los casos, ya que significa un doble registro del mismo objeto con dos DOI diferentes, lo que contradice al propósito original del uso de los DOI. En cualquier caso debería hacer una copia de seguridad de **la base de datos** antes de borrar todos los DOIs asignados.

### Asignar DOIs

> No aparece en todas las versiones del plugin DOI

**Asignar DOIs**, al hacer clic, asignará un DOI a cualquier material publicado que utilice el patrón de sufijos elegido. Esta es una buena forma de recuperar los DOIs que se le hayan pasado por alto o de asignar DOIs a una nueva publicación.

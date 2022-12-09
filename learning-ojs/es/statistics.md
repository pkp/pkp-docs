---
book: learning-ojs
version: 3.3
showPageTOC: true
title: Learning Open Journal Systems 3.3 - Statistics
---

# Estadísticas

Las estadísticas de OJS permiten ver indicadores relacionados con la actividad, el acceso y las descargas de varios aspectos de su sitio, incluyendo vistas de artículos y resúmenes, suscripciones, actividad editorial y de revisión, y recuentos de usuarios por rol. A partir de los datos disponibles, es posible generar reportes en la sección de Generador de Informes.

Esta sección describirá las herramientas de reporte/visualización de estadísticas disponibles en OJS y cómo utilizarlas. Si está interesado en gestionar estadísticas como administrador del sistema, incluyendo la configuración del marco de estadísticas, la gestión de estadísticas heredadas, las de OJS 2, y las de solución de problemas, consulte la guía del administrador de PKP sobre estadísticas [](https://docs.pkp.sfu.ca/admin-guide/en/statistics).

Para acceder a un tutorial sobre las estadísticas en OJS consulte el enlace [Configuración de una revista en OJS 3.3. Módulo 13: Estadísticas ](https://www.youtube.com/watch?v=fU1orCK7GSM&list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY) vídeo abajo.

[![Configurando una revista en OJS 3.3. Módulo 13: Estadísticas](https://img.youtube.com/vi/fU1orCK7GSM/0.jpg)](https://www.youtube.com/watch?v=fU1orCK7GSM&list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY)

## Definiciones

Las siguientes definiciones pueden ser útiles para entender la variedad de estadísticas rastreadas por OJS.

* **Página de resumen:** la página de inicio de un artículo, que contiene el título, información del autor, resumen, DOI y enlaces al texto completo en cualquier galerada del artículo.  También se conoce como “página de artículo” o “página de destino”. Esta página se utiliza normalmente como punto de registro para los DOI del artículo u otros hipervínculos: los códigos DOI de Crossref redirigen a las páginas de resumen del artículo, en vez de a las galeradas, por ejemplo, como lo hacen la mayoría de los demás servicios de indexación.
* **Vista del artículo:** dentro del marco de las estadísticas, cualquier referencia a una "vista de artículo" significa una consulta única de la página de resumen del artículo. Este no es un recuento de todas las vistas de las galeradas del artículo- se refiere solamente a las vistas del resumen.
* **Vista de la galerada:** dentro del marco de las estadísticas, cualquier referencia a una "vista de la galerada" significa una consulta única de la página del artículo. También conocida como una "descarga de la galerada". Este no es un recuento de todas las vistas del artículo si este tiene múltiples galeradas \(e. ., un archivo HTML, un PDF, etc.\), cada una de ellas tendrá su propio recuento de vista de galerada. OJS no distingue entre descargas de galeradas y vistas en la tabla de métricas; las descargas se cuentan como vistas de galerada.
* **Múltiples clicks:** el proceso \(accidental o maintencionado\) de aumentar el número de usuarios haciendo clic en una página de resumen o galerada varias veces en una rápida sucesión. OJS identifica y elimina estos intentos de sus métricas de uso, según el Código de Práctica del COUNTER del Proyecto.
* **Código de práctica del COUNTER del proyecto:** un conjunto de prácticas desarrolladas por el COUNTER para establecer un medio para informar de manera consistente sobre las métricas de uso de recursos electrónicos. El Código proporciona reglas sobre lo que debe ser contado como una vista, incluyendo reglas específicas para uso de robots y abuso de multiples clics. OJS filtra las métricas a través de estas reglas. También hay que señalar que PKP es parte del Grupo de Trabajo sobre robots y rastreadores del COUNTER.
* **Robots, rastreadores, bots:** visitantes no humanos del sitio que pueden ver y descargar los datos del artículo. Estos generalmente son identificados como tales en el servidor, y OJS no los cuenta en sus métricas de uso, según el Código de Práctica del COUNTER del Proyecto.

## Artículos

OJS ofrece a los Administradores y Editores de Revistas la opción de ver representaciones gráficas y tablas del uso de artículos, incluyendo vistas de resumen y descargas del texto completo.

Las estadísticas visuales se pueden encontrar en Estadísticas en el panel del menú izquierdo, haciendo clic en Artículos.

![Interfaz OJS con la opción Artículos resaltados bajo Estadísticas en el menú inzquierdo.](./assets/ojs-statsmenu.png)

Las estadísticas de los artículos muestran las vistas de resumen de los artículos tanto en gráficos como de tablas. El gráfico se puede cambiar a vista mensual o diaria. La tabla le permitirá filtrar el Total en orden ascendente o descendente.

![Ejemplo de una gráfica de vistas de resumen producidas por la herramienta de estadísticas de Artículos.](./assets/abstract-views.png)

![Ejemplo de una gráfica de vistas de resumen producidas por la herramienta de estadísticas de Artículos.](./assets/article-details.png)

El icono del calendario en la esquina superior derecha del panel de control ofrece la opción de cambiar la vista del artículo a los Últimos 30 días, Últimos 90 días, Últimos 12 meses, todas las fechas, o un rango de fecha personalizado.

![El calendario utilizado para seleccionar los rangos de fecha en la herramienta de estadísticas de artículos.](./assets/calendar-range-articles.png)

El icono de filtro en la esquina superior derecha del tablero le da la opción de filtrar los artículos por Secciones.

![El calendario utilizado para seleccionar los rangos de fecha en la herramienta de estadísticas de artículos.](./assets/article-filters.png)

También tiene la opción de buscar las estadísticas de un artículo específico por título, autor, o ID del manuscrito mediante el uso de la función de búsqueda en Detalles del Artículo.

![Barra de búsqueda para localizar estadísticas específicas de artículos.](./assets/article-details-search.png)

## Actividad Editorial

Esta sección proporciona estadísticas sobre el flujo de trabajo editorial, tales como el número de envíos recibidos, días para la primera decisión editorial, y las tasas de aceptación y rechazo. Puede filtrar estas estadísticas usando un rango de fechas personalizado para, por ejemplo, encontrar el número de artículos aceptados durante un período de 12 meses.

![Ejemplo de estadísticas editoriales.](./assets/editorial-activity.png)

Hay algunas cosas importantes que tener en cuenta a la hora de considerar los datos en estos informes:

* Los envíos publicados dentro de un rango de fechas sólo cuentan la fecha de publicación inicial y no las versiones posteriores.
* Los días para decidir utilizan un 80% de margen, por lo que los datos representan que el 80% de las presentaciones con decisión han recibido una en un plazo de X días.
* Las tasas de aceptación y rechazo sólo cuentan las propuestas que han recibido una decisión de aceptación o rechazo, por lo que excluyen las presentaciones que se encuentran en cola.
* Si se aplica un rango de fechas, sólo cuenta los envíos que fueron enviados Y aceptados/rechazados dentro de ese rango de fechas. Así, por ejemplo, un envío que fue enviado antes del intervalo de fechas pero que recibió una decisión de aceptación/rechazo dentro del intervalo de fechas no será tomado en cuenta. Por esta razón, es mejor utilizar largos rangos de fechas y rangos de fechas anteriores para obtener tasas de aceptación y rechazo precisas.

Un Informe de Actividad Editorial se generará mensualmente y se puede enviar por correo electrónico a editores y editores de sección. Todos los administradores y los editores de secciones se excluyen automáticamente del informe mensual; sin embargo, puede optar por ir al perfil de usuario > Notificaciones y desmarcar la casilla que deshabilita el correo electrónico automatizado.

## Usuarios/as

Esta sección brinda información sobre nuevos registros de usuario/rol dentro de un período de tiempo especificado. La columna Total no es un número total de cuentas creadas; identifica cuántos usuarios tienen ese rol en el sistema en estos momentos. Cuando un usuario existente recibe un nuevo rol, como cuando un autor registrado se convierte en revisor, esa suma al número total de revisores en el sistema se reflejará en los datos por un aumento en el número de revisores sin realizar cambiar el número total de usuarios.

![Ejemplo de datos estadísticos de usuarios.](./assets/users.png)

## Generador de informes

La página de Generador de Reportes proporciona acceso a una variedad de informes de su revista.

![La lista de informes en la página Generador de informes en OJS, detallada a continuación.](./assets/report-generator.png)

El sistema genera informes que rastrean los detalles asociados con el uso y sometimientos del sitio en un período de tiempo determinado. Estos informes pueden agruparse en informes de "uso" que contienen métricas de uso que indican lectura de los visitantes y reportes de "contenido" que proporcionan datos sobre el artículo (por ejemplo. informacin de revisión). Los informes se generan en formato CSV que requiere para su visualización una aplicación de hoja de cálculo.

* Informe de estadísticas de uso de PKP: Proporciona métricas de uso diario desglozadas para todos los artículos, archivos de artículos, incidencias y descargas/páginas de inicio. Incluirá los datos del país de los visitantes, si se registra. Para más información y ejemplos, consulte el Informe de estadísticas de uso a continuación. (Uso)
* Informe de Suscripciones: Proporciona información sobre cualquier suscripción individual e institucional. Esta opción de reporte sólo está disponible si las suscripciones están habilitadas en la revista. (Contenido)
* Informe de artículos: Provee una hoja de cálculo de todos los artículos publicados. (Contenido)
* Informes del COUNTER: Proporciona informes del COUNTER para todas las revistas en OJS. Proporciona conteos mensuales y anuales hasta la fecha de vistas de resumen y de galeradas. (Uso)
* Informe de revisión: Proporciona información de revisión de todos los artículos del sistema, incluyendo nombres de los revisores, comentarios y recomendaciones. (Contenido)
* Ver Informe: Proporciona un informe sobre vistas de galerada y de resumen que han hecho los lectores (es decir, cuántas veces se ha visto un PDF para un artículo). (Uso)
* Generación de informes personalizados: Versión personalizable del informe de estadísticas de uso, donde se pueden seleccionar varias fases y se pueden establecer plazos específicos. Para más información y ejemplos, consulte el Informe de estadísticas de uso que aparece a continuación. (Uso)

### Informe de Estadísticas de Uso

Este informe proporciona datos desglozados sobre las vistas mensuales de la página principal de la revista, la tabla de contenido del número, las páginas de resumen/de destino de artículos y las vistas de archivos en formato CSV. Proporciona información del país (si está configurado). Cada fila proporciona un recuento mensual total para un objeto en particular (página principal de revistas, página de resumen, galeradas o tabla de contenidos del número). Además, se puede hacer por país si la opción de país ha sido habilitada y configurada correctamente.

**Utilizar para:** generar un resumen de contenido general multifacético del uso mes a mes. Muestra el recuento de vistas mensuales para todos los artículos, descargas de archivos de artículos, vistas de tabla de contenido y vistas de la página principal de la revista para el intervalo de tiempo especificado. Se debe hacer una manipulación manual adicional del informe que se emite para lograr resultados agregados.

**No se debe usar para:** obtener una reporte de uso rápido, uso antiguo, o revistas que tienen un conjunto de datos muy grande de métricas \(debido a la larga historia, a la alta lectura o a la profundidad de las métricas de desgloce\). Utilice el generador de informes personalizados en su lugar.

**Notas especiales:**

* Este informe intenta capturar todo el historial de uso para: la página principal de la revista, todos los resúmenes de lo artículos, todas las galeradas de los artículos, y toda la tabla de contenidos del número.
* **La versión 3.1.1 de OJS o instalaciones anteriores **: Para reducir el potencial de exceder los límites de tiempo para descargas, este informe sólo proporciona 5.000 registros. Si tiene muchos datos reportables, es muy probable que este informe no lo informe todo. Si este es el caso, el plugin Personalizar Generador de Reportes debe ser usado en su lugar, usando rangos de fechas más pequeños. (Esta restricción fue eliminada en OJS 3.1.2.)

**Datos de ejemplo \(ligeramente editados para mayor claridad\):**

| **ID** | **Tipo** | **Título**                                                                       | **Edición**            | **Revista** | **País** | **Mes** | **Recuento** |
| ------ | -------- | -------------------------------------------------------------------------------- | ---------------------- | ----------- | -------- | ------- | ------------ |
| 1      | Revista  | Canadian Journal of Communication                                                | CJC                    | CA          | 201502   | 1678    |              |
| 112    | Artículo | Toronto Star Fires Reporter Claire Hoy, Sues Him and TV Stations on Libel Charge | Vol 1, No 3 \(1974\) | CJC         | CA       | 201502  | 3            |
| 112    | Artículo | Toronto Star Fires Reporter Claire Hoy, Sues Him and TV Stations on Libel Charge | Vol 1, No 3 \(1974\) | CJC         | EE.UU.   | 201502  | 1            |

En el ejemplo anterior, podemos ver que en febrero de 2015 la página principal de la revista CJC fue vista 1.678 veces, que el artículo "Toronto Star Fires Reporter …" fue visto 3 veces desde Canadá y una vez desde los Estados Unidos.

### Informe de vistas

Este informe proporciona vistas de resumen por artículo y vistas/descargas de galeradas. Estas métricas de uso no se filtran para múltiples clics o actividad de bot/rastreadores, por tanto, pueden parecer infladas en comparación con estadísticas más recientes.

Datos de ejemplo \(ligeramente editados para mayor claridad):

En la muestra de abajo podemos ver que el artículo 95, “The Making of the Canadian Media" ha tenido 443 vistas del resumen y 1476 vistas totales de la galerada. Las vistas de PDF y del total de las galeradas son las mismas porque no había vistas HTML. Con el artículo 1125, “Digital Networks”, el resumen fue visto 1821 veces y el total de vistas de las galeradas son 8478, que es la suma de las vistas HTML y PDF.

****

| **ID** | **Título del artículo**          | **Edición**             | **Fecha de publicación** | **Resumen** | **Total galeradas** | **HTML** | **PDF** |
| ------ | -------------------------------- | ----------------------- | ------------------------ | ----------- | ------------------- | -------- | ------- |
| 95     | The Making of the Canadian Media | Vol 6, No 1 \(1979\)  | 1979-01-03               | 443         | 1476                |          | 1476    |
| 1125   | Digital Networks                 | Vol 24, No 4 \(1999\) | 1999-04-01               | 1821        | 8478                | 2093     | 6385    |

### Generar informe personalizado

Utilice esta función para crear sus propios informes. Estos informes proporcionan datos desglozados sobre las vistas diarias de la revista utilizando el conjunto de datos completo de métricas. Puedes incluir resultados por:

* País
* Región
* Ciudad
* Mes
* Día

Las métricas son rastreadas por tipos específicos de elementos (llamados “objetos”):

* Descargas de archivos
* Vistas de resumen
* Vistas de tabla de contenido
* Vistas de página de la revista

![La interfaz personalizada del generador de informes en OJS.](./assets/custom-report-generator1.png)

También puedes limitar los resultados a fechas específicas.

Esta es la opción de informe más flexible disponible en OJS y puede proporcionar una cantidad muy detallada de datos. A continuación hay algunos ejemplos de preguntas sobre estadísticas que pueden ser útiles para las revistas, así como instrucciones sobre cómo formular un informe para responder a esas preguntas utilizando esta función.

Notas especiales sobre el Generador de Informes:

* Dependiendo de la cantidad de datos en tu sistema, las fases que quieras recuperar, y el lapso de fecha que selecciones, el sistema puede fallar en generar un informe completo. Si encuentras esto, prueba reducir el rango de fecha.
* Si generas un informe personalizado, también obtendrás una URL de Reporte que se puede guardar para utilizar en un futuro ejecutando el proceso de reporte idéntico. Asegúrese de copiar y guardar la URL en algún lugar para que pueda volver a ejecutar su búsqueda más tarde (desaparecerá una vez que la página sea recargada).
* Si creaste un informe que reporta sobre "ayer" o "mes actual", la URL del Informe siempre utilizará “ayer” o el “mes actual” en relación al día en que lo ejecutaste. Así que si originalmente creaste un informe para informar sobre “ayer” hace un año y luego lo ejecutaste hoy, el reporte sería de ayer. Sin embargo, si especificas un rango de fechas determinado, digamos del 1 de abril al 15 de abril de 2018, la URL del informe resultante siempre reportará métricas para ese rango específico.
* Ten en cuenta que los datos del día actual no estarán disponibles hasta el día siguiente.
* El generador funciona como un embudo para datos. El truco es reducir los elementos más grandes (como el rango de fechas), seleccionar lo que te interesa desde allí (números, artículos, etc.), luego ajustar los datos (es decir, ordenar por número de descargas).
* El Generador de Reportes es más útil si utiliza las Opciones Avanzadas. Todos los ejemplos a continuación usan las opciones avanzadas.

#### Informe de ejemplo: ¿Qué tal se ha desempeñado una edición particular (por ejemplo, la más reciente) en los últimos meses?

Esta consulta en particular le dará un recuento mensual de cuántos galeys de texto completo han sido descargados de un número en particular. Tendrá una columna para el mes y el recuento total del mes y una fila separada para cada mes.

* En “Plantillas de informe predeterminadas” seleccione “Descargas de archivos de artículo” en la lista desplegable.
* Desmarque todas las casillas en las "Estadísticas agregadas por".
* Haga clic en el botón de radio “Mes” e ingrese el rango de fechas en “O seleccione el rango por”.

![El generador de informes personalizado con la configuración descrita anteriormente en el OJS.](./assets/custom-report-generator10.png)

* Abre "Opciones avanzadas" y selecciona sólo "Mes" en Columnas

!["Mes" seleccionado bajo las opciones avanzadas en el generador de informes personalizado.](./assets/custom-report-generator3.png)

* Si queremos un filtrado muy ligero de nuestros datos. Seleccione los archivos de envío, luego seleccione los formatos de galerada que desea incluir en su informe. Este ejemplo selecciona sólo PDF, pero puede seleccionar PDF y HTML si su revista también ofrece descargas de artículos HTML de texto completo. Utilice Ctrl+Clic o Comando+Clic para seleccionar varios tipos. Bajo el ID del objeto, introduzca el ID de la edición que le interesa, el cual se ubicará en la URL del número. Por ejemplo, una edición con la URL publicknowledgeproject.org/journal/index.php/journal/issue/view/**24** tiene el ID de objeto 24.

![Un ejemplo de ID de la Edición introducido en el generador de informes personalizado.](./assets/custom-report-generator4.png)

* Ignore las opciones "Por geoubicación" y "Ordenar por", y haga clic en "Generar reporte personalizado".
* Terminarás con un reporte mensual muy simple de las descargas de las galeradas de la edición que te interesa de tu revista.

![Resultados en formato .csv obtenido del informe personalizado anterior.](./assets/custom-report-generator5.png)

* ¡Guarda la URL en la parte inferior de la página para tener tu registro!

#### Informe de ejemplo: ¿Cuáles son los artículos más descargados en los últimos 5 años?

Este informe presentará una lista de los títulos de los artículos (y de las ediciones de las que proceden) ordenados por cifras de descarga de manera descendente.

* Seleccione “Descargas de archivos del artículo” en el cuadro desplegable.
* Desmarque todas las casillas en las "Estadísticas agregadas por".
* Seleccione el botón de “Mes” e introduzca un rango de fechas.

![El generador de informes personalizado con la configuración en el OJS descrita anteriormente.](./assets/custom-report-generator10.png)

* Seleccione sólo “Artículo” y “Edición” en Columnas. Vamos a seleccionar el tipo mas adelante.

!["Artículo" y "Edición" seleccionados bajo las opciones avanzadas en el generador de informes personalizado.](./assets/custom-report-generator6.png)

* Seleccione “Archivos de envío” bajo el tipo de objeto y seleccione todos los tipos de galerada que desee incluir en el recuento de descargas.

![La configuración en el OJS descrita anteriormente.](./assets/custom-report-generator7.png)

* Ignore la “geoubicación” (no se muestra aquí).
* “Ordenar por” organizará sus artículos en orden descendente por número de descargas. Para lograrlo, selecciona "Contar" en el primer menú desplegable y selecciona "Descender".

![Las flechas apuntando a los dos primeros caen en el Orden por sección, al seleccionar "Recuento" y "Descendente".](./assets/custom-report-generator8.png)

* El informe aparecerá como sigue (truncado):

![Resultados en formato .csv obtenido del informe personalizado anterior.](./assets/custom-report-generator9.png)

* ¡Guarda tu URL en la parte inferior de la página!

#### Ejemplo: ¿Cuál es nuestro edición más popular?

Esta consulta muestra un recuento de descargas de texto completo para cada edición de la revista y ordena los resultados de mayor a menor.

* Seleccione “Descargas de archivos del artículo” en el cuadro desplegable.
* Desmarque todas las casillas en "Estadísticas agregadas por".
* Seleccione el boton de “Mes” e introduzca un rango de fechas.

![El generador de informes personalizado con la configuración descrita anteriormente en el OJS.](./assets/custom-report-generator10.png)

* En las columnas, haga clic en “Edición”.

!["Edición" seleccionada en Opciones avanzadas en el generador de informes personalizado.](./assets/custom-report-generator11.png)

* Bajo “Filtros”, seleccione “Archivos de envío” bajo el tipo de objeto, y seleccione el tipo de archivo galerado utilizado por su revista (utilice Ctrl+Clic o Comando+Clic para seleccionar varios tipos de galeradas).

![La configuración en el OJS descrita anteriormente.](./assets/custom-report-generator7.png)

* Ignore la “geoubicación” (no se muestra aquí).
* “Ordenar por” organizará sus artículos por número de descargas de forma descendente. Para lograrlo, selecciona "Contar" en el primer menú desplegable y selecciona "Descender".

![Las flechas apuntando a los dos primeros caen en el Orden por sección, al seleccionar "Recuento" y "Descendente".](./assets/custom-report-generator8.png)

* Obtenga su informe. Esto es lo que obtendrá:

![Resultados en formato .csv obtenido del informe personalizado anterior.](./assets/custom-report-generator12.png)

* No olvide guardar su URL para ejecutarla en una fecha posterior.

#### Ejemplo: ¿Qué países están descargando nuestros artículos (para un rango de fecha concreto)?

Esta consulta mostrará el recuento de descargas de texto completo por país en orden descendente. Tenga en cuenta que es necesario especificar un rango de fechas.

* Seleccione “Descargas de archivos del artículo” en el cuadro desplegable.
* Desmarque todas las casillas en "Estadísticas agregadas por".
* Seleccione la opción “Mes” e introduzca un rango de fechas.

![El generador de informes personalizado con la configuración en el OJS descrita anteriormente.](./assets/custom-report-generator10.png)

* Seleccione sólo “Revista” y “País” en Columnas. Utilice Ctrl+Clic o Comando+Clic para seleccionar varios tipos. Vamos a seleccionar el tipo mas adelante.

!["Revista" y "País" seleccionados en las opciones avanzadas en el generador de informes personalizado.](./assets/custom-report-generator13.png)

* Bajo “Filtros”, seleccione “Archivos de envío” bajo tipo de objeto, y seleccione el tipo de galerada utilizado por su revista (utilice Ctrl+Clic o Comando+Clic para seleccionar varios tipos de galerada).

![La configuración en el OJS descrita anteriormente.](./assets/custom-report-generator7.png)

* “Ordenar por” organizará sus artículos de forma descendente por número de descargas. Para lograrlo, selecciona "Contar" en el primer menú desplegable y selecciona "Descender".

![Las flechas apuntando a los dos primeros caen en el Orden por sección, al seleccionar "Recuento" y "Descendente".](./assets/custom-report-generator8.png)

* Ejecuta este informe.
* No olvide guardar su URL para ejecutarla en una fecha posterior.

![Resultados en formato .csv obtenido del informe personalizado anterior.](./assets/custom-report-generator14.png)

### Mostrar Estadísticas de uso a los lectores

En OJS 3 puede mostrar las estadísticas de uso de un artículo en el año actual con un gráfico en la página de inicio del artículo utilizando el plugin Estadísticas de Uso, como se ve en esta imagen.

![Un artículo de muestra con un gráfico de descargas mensuales que aparece debajo del resumen.](./assets/reader-statistics.png)

Para habilitar el plugin Estadísticas de Uso:

1. Ir a Ajustes &gt; Sitio Web &gt; Plugins.
2. En Plugins Genéricos, busque el plugin **Estadísticas de Uso**.
3. Marque la casilla a la derecha de la descripción del plugin.

Para configurar el plugin Estadísticas de Uso:

1. Ir a Ajustes &gt; Sitio Web &gt; Plugins.
2. En Plugins Genéricos, busque el plugin **Estadísticas de Uso**.
3. Haga clic en la flecha azul a la izquierda del nombre del plugin para hacer que los enlaces aparezcan debajo del plugin.
4. Haz clic en **Continuar**.
5. Desplácese hasta la parte inferior del cuadro emergente que se abre en la sección **Opciones de visualización de estadísticas**.
6. Marque la casilla al lado de **Mostrar el gráfico de estadísticas de sometimiento al lector**.
7. A continuación puede seleccionar si desea mostrar las estadísticas como un gráfico de barra o línea y el número máximo de meses a mostrar.
8. Haz clic en **Guardar**.

![Las casillas de estadísticas opcionales donde los usuarios pueden activar/desactivar la recopilación de datos regionales o de ciudades, y habilitar la visibilidad de las estadísticas para los lectores.](./assets/usage-stats-plugin-configuration-basic.png)

Por favor, ten en cuenta lo siguiente:

* Las estadísticas de uso sólo se pueden mostrar para el año en curso. El plugin se reinicia al inicio de cada año.
* Las estadísticas que se muestran indican el número de veces que se descargó un artículo.

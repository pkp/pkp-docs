---
title: Identificador de Objetos Digitales
showPageTOC: true
---

# Identificador de Objetos Digitales

## ¿Qué son los DOIs?

Un "Digital Object Identifier, en inglés, e Identificador de Objetos Digitales, en español" (DOI) es un **identificador global único y persistente** para objetos digitales. En el contexto del OJS, estos objetos digitales son las revistas, los números de las revistas, los artículos de revistas y los archivos complementarios. Los DOI se utilizan para la identificación global y persistente de dichos objetos digitales. Por ejemplo, un DOI en una cita proporcionaría al usuario un enlace persistente al objeto digital citado. Los DOIs están asociados a una o varias URL que pueden resolverse a través de una URL persistente en un dominio de redirección principal. Los metadatos adicionales sobre determinados tipos de objetos digitales pueden almacenarse en bases de datos de organizaciones especializadas en el registro de DOI. Esto permite descubrir estos objetos digitales a través de los sitios web de las **agencias de registro** o de sus socios (por ejemplo, motores de búsqueda científicos).

Los DOIs son útiles porque sabemos que el contenido no siempre permanece en la misma URL. Las revistas pueden cambiar de editorial o de sitio web. Sin embargo, si utiliza DOI y los actualiza correctamente, siempre le llevarán al lugar donde se encuentra el contenido. Los DOIs son también una parte cada vez más importante de la infraestructura académica abierta. Gracias a las APIs abiertas, los metadatos pueden compartirse fácilmente entre las partes. Por ejemplo, ORCID y Crossref. Puedo conectar la API de Crossref a mi cuenta ORCID. Siempre que mi ORCID (otro tipo de identificador persistente, pero para investigadores) aparezca en una publicación a la que también se haya asignado un DOI, puede añadirse automáticamente a mi registro ORCID.

En la publicación, los DOIs funcionan en _dos etapas_.

1. Asignación de DOIs
2. Registro de DOIs

En OJS, el plugin DOI _sólo asigna DOIs_. Para que los DOI funcionen correctamente, hay que registrarlos en una agencia de registro de DOIs. Una vez que sea miembro de una agencia de registro de DOIs, puede utilizar su plugin específico en OJS para registrar los DOIs asignados o puede utilizar una de las otras herramientas de registro de metadatos proporcionadas por dicha agencia.

## ¿Qué son las agencias de registro?

Los DOIs pueden utilizarse para una amplia gama de objetos digitales. El único común denominador de estos objetos es que tienen asignada una URL, a través de la cual pueden ser localizados. Los DOIs no imponen un formato único de metadatos. Los objetos digitales pueden tener asignados metadatos especializados que son específicos del contenido y el formato de ese objeto. Ahí es donde entran en juego las agencias de registro de DOIs como Crossref, mEDRA y DataCite. Estas agencias de registro especializadas sólo aceptan determinados tipos de objetos digitales y definen los campos de metadatos obligatorios y opcionales que deben entregarse al registrar un DOI. Las agencias del DOI exigen que los metadatos se entreguen en formatos de metadatos bien definidos. Normalmente, la agencia de registro define su propio formato de metadatos o adapta una norma existente a su propósito.

[Crossref](https://www.crossref.org/) es la Agencia de Registro oficial de enlaces DOI de la Fundación Internacional DOI. Se fundó como un esfuerzo cooperativo por editores de revistas para permitir enlazar las citas entre editores de revistas académicas en línea. Crossref registra los DOI de números, artículos, galeradas, archivos complementarios y muchos otros tipos de contenidos.

[mEDRA](https://www.medra.org/) es la Agencia Europea de Registro de DOI multilingüe. Principalmente, registra documentos de muchas instituciones de la Unión Europea, pero también está abierto a instituciones privadas y públicas de todo el mundo para el registro de publicaciones seriadas, números de publicaciones seriadas y artículos seriados. En OJS se trata de números de revistas, artículos y galeradas.

[DataCite](https://www.datacite.org/) es una asociación internacional sin fines de lucro formada por varias instituciones de investigación. DataCite se fundó originalmente para facilitar el registro DOI de datos de investigación, principalmente. Sin embargo, DataCite puede registrar una amplia gama de objetos de publicación. Hablando de OJS, se trata de números de revistas, artículos, galeradas y archivos complementarios.

## ¿Cómo funciona el sistema DOI?

En resumen, los DOI se componen de un **prefijo** y un **sufijo** separados por una barra (por ejemplo, "10.1234/cdb2011-01-bio234"). Las organizaciones que deseen participar en el sistema DOI deben solicitar una cuenta en alguna de las agencias de registro, las cuales asignarán un prefijo DOI único a dicha organización (por ejemplo, «10.1234»). A continuación, la organización puede asignar sufijos arbitrarios a sus objetos digitales siempre que garantice que no habrá ningún sufijo repetido (por ejemplo, «cdb2011-01-bio234» en el ejemplo de ariba).

Una vez obtenido un prefijo y asignado un sufijo a un objeto de publicación, el DOI resultante compuesto de prefijo y sufijo, debe **registrarse** en una agencia de registro. La organización, que hace la publicación, debe formatear los metadatos correspondientes del objeto de publicación, en el formato de metadatos específico que la agencia de registro solicita. En OJS, habrá un archivo XML resultante el cual será enviado a la agencia de registro junto con el DOI y la URL correspondiente del objeto de publicación.

- Para obtener más información sobre los DOI, [consulte el Manual DOI](https://www.doi.org/hb.html) (disponible en inglés) de doi.org.
- Para obtener más información sobre las características específicas de cada agencia de registro, consulte los sitios oficiales en la lista anterior.

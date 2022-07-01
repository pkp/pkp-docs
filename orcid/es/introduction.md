---
title: Sobre la Guía de plugins ORCID para OJS y OPS
---

# Acerca del plugin ORCID

[ORCID](https://orcid.org/) (Open Researcher and Contributor Identifier) es un identificador digital persistente que permite distinguir a los investigadores individualmente, así como enlazar de manera automatizada sus investigaciones y actividades profesionales. Para una visión general de ORCID, por favor vea [este vídeo introductorio ORCID](https://vimeo.com/97150912).

PKP se asocia con ORCID para permitir la colección y visualización de los ORCID IDs autenticados de los colaboradores de artículos preimpresos y publicados con Open Journal Systems (OJS) y Open Preprint Systems (OPS) a través del ORCID Profile Plugin.

## ¿Qué hace el plugin ORCID?

El complemento de perfil ORCID para OJS/OPS, en sus versiones 3.1.2 y anteriores, permite a una revista OJS y a una preimpresión OPS:

* Recopilar y autenticar el perfil ORCID de un colaborador
* Enviar de manera automática un correo electrónico a sus colaboradores solicitando la autenticación de su perfil ORCID
* Mostrar el perfil ORCID autenticado de un colaborador en el artículo de la revista o página de preimpresión, enlazado con su registro ORCID
* Y de manera adicional, sólo para los miembros de la API enviar automáticamente los detalles de la publicación al registro ORCID del colaborador; una vez que, su trabajo se haya publicado en el OJS/OPS

Para más detallessobre cada una de estas funciones, puede consultar el capítulo [Utilizando el plugin ORCID](./using-plugin.md).

## ¿Por qué debería usar el plugin ORCID?

Al integrar ORCID con el OJS/OPS, estarás apoyando las mejores prácticas de publicación porque podrás:

* Permitir a los autores recopilar sus publicaciones en un lugar fiable
* Distinguir autores de otros con un nombre similar, y mantener un registro actualizado independientemente de los cambios en el nombre o afiliación
* Demostrar un compromiso con la transparencia y la credibilidad, al atribuir con precisión los autores con sus obras publicadas
* Apoyar la recopilación de metadatos precisos del artículo, incluyendo la información del autor, al compartir los detalles de la publicación con CrossRef

## La API pública y la API de miembros

ORCID proporciona dos puntos finales diferentes para la API pública ORCID y la API de miembro ORCID.

La **API pública** es gratuita y está disponible para cualquiera. Permite la autenticación del perfil ORCID y la lectura de datos públicos de registros ORCID. Además, permite que la revista tenga los perfiles ORCID de los colaboradores autenticados y mostrados en páginas de artículo y/o preimpresión. Su principal diferencia con la API de miembro es que no enviará automáticamente los detalles de la pulicación al registro ORCID de un colaborador durante su publicación.

Por otro lado, la **API de miembro** requiere la membresía institucional ORCID. Adicional a las funcionalidades de la API pública, la API de miembros permite leer datos de "partes de confianza" de los registros ORCID, así como añadir y/o actualizar automáticamente metadatos en los registros

Si su revista está afiliada a una institución, puede ponerse en contacto con la biblioteca o el área responsable de las suscripciones de su Entidad y preguntar sobre la membresía ORCID y las credenciales API. También es posible consultar el directorio de miembros para ver si una organización es un [ miembro de ORCID](https://orcid.org/members) o ver [Información de miembros de ORCID](https://orcid.org/about/membership) si la organización está interesada en convertirse en miembro.  También puede ponerse en contacto con ORCID directamente al correo electrónico support@orcid.org.

## Credenciales de Sandbox y credenciales de producción

ORCID proporciona a los usuarios de plugins, una opción para probar cómo funciona su instalación dentro de un entorno Sandbox (de prueba) antes de ir en vivo con el entorno de producción. Usted necesitará un conjunto diferente de credenciales para Sandbox y la API de Producción.

Si requiere conocer cómo obtener las credenciales de Sandbox, cómo probar en el Sandbox, y las ventajas de probar en el Sandbox, se explican más en el capítulo [Apéndice: Pruebas del OrCID Sandbox](./appendix-testing-orcid-sandbox.md).

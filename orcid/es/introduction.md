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
* Demonstrating a commitment to transparency and credibility by accurately attributing authors to their published works
* Supporting the collection of accurate article metadata, including author information, by sharing publication details with CrossRef

## Public vs Member API

ORCID provides two different API endpoints for the ORCID Public API and the ORCID Member API.

The **Public API** is free and available to anyone. It allows for ORCID iD authentication and reading public data from ORCID records. It allows the journal to have contributors' ORCID iDs authenticated and displayed on article/preprint pages. Its main difference from the Member API is that it will not automatically send pulication details to a contributor’s ORCID record upon publication.

The **Member API** requires ORCID institutional membership. In addition to the functionalities of the Public API, the Member API allows for reading “trusted-parties” data from ORCID records, as well as automatically adding/updating metadata on ORCID records.

If your journal is affiliated with an institution, contact the institution's library to ask about ORCID membership and API credentials. You can also consult the ORCID member directory to see if your organization is already an [ORCID member](https://orcid.org/members), or review [ORCID’s membership information](https://orcid.org/about/membership) if your organization is interested in becoming an ORCID member. You can also contact ORCID directly at support@orcid.org.

## Sandbox vs production credentials

ORCID provides plugin users with an option to test how the plugin works with your installation in a Sandbox (testing) environment before going live with the Production environment. You will need a different set of credentials for the Sandbox vs Production API.

How to obtain Sandbox credentials, how to test in the Sandbox, and the advantages of testing in the Sandbox are explained further in the [Appendix: Testing the ORCID Sandbox](./appendix-testing-orcid-sandbox.md) chapter.

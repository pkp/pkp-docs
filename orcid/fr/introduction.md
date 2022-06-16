---
title: À propos du guide du plugiciel ORCID pour OJS et OPS
---

# À propos du plugiciel ORCID

[ORCID](https://orcid.org/) (Open Researcher and Contributor Identifier) est un identifiant numérique persistant qui distingue les chercheur-ses individuels et soutient les liens automatisés entre les chercheur-ses et leurs activités professionnelles. Pour un aperçu de l'ORCID, veuillez consulter [cette vidéo d'introduction ORCID (anglais)](https://vimeo.com/97150912).

PKP partners with ORCID to enable the collection and display of authenticated ORCID iDs for contributors to article and preprints published with Open Journal Systems (OJS) and Open Preprint Systems (OPS) via the ORCID Profile Plugin.

## Que fait le plugiciel ORCID?

Le plugiciel de Profil ORCID pour OJS/OPS versions 3.1.2 et supérieures autorise un revue OJS et un serveur de préprint OPS à:

* Collecter et authentifier l'identifiant ORCID d'un contributeur-trice
* Envoyer automatiquement un e-mail aux contributeur-trices demandant leur authentification ORCID iD
* Display a contributor’s authenticated ORCID iD on the journal article or preprint page, which will link to the contributor’s ORCID record
* En outre, pour l'API des membres seulement : Envoyer automatiquement les détails de la publication à la fiche ORCID d'un contributeur-trice une fois que son travail a été publié dans OJS/OPS

Pour plus de détails sur chacune de ces fonctions, voir le chapitre [Utilisation du plugin ORCID](./using-plugin.md).

## Pourquoi utiliser le plugiciel ORCID ?

En intégrant ORCID avec OJS/OPS, vous pourrez soutenir la publication des meilleures pratiques en :

* Permettre aux auteur-es de collecter leur travail publié dans un seul endroit fiable
* Distinguer les auteur-es des autres avec un nom similaire, et tenir une fiche à jour indépendamment des changements de nom ou d'affiliation
* Démontrer un engagement en faveur de la transparence et de la crédibilité en attribuant avec précision les auteur-es à leurs œuvres publiées
* Soutenir la collection de métadonnées d'article précises, y compris les informations de l'auteur-e, en partageant les détails de la publication avec CrossRef

## L'API Publique vs L'API Membre

ORCID fournit deux points de terminaison API différents pour l'API publique ORCID et l'API membre ORCID.

**L' API publique** est gratuite et disponible à tous. Il permet l'authentification ORCID iD et la lecture des données publiques des fiches ORCID. Il permet à la revue de faire authentifier les iDs ORCID des contributeur-trices et de les afficher sur les pages d'article/préprint. Sa principale différence par rapport à l'API Membre est qu'elle n'enverra pas automatiquement les détails de pulication à la fiche ORCID d'un contributeur-trice lors de sa publication.

The **Member API** requires ORCID institutional membership. In addition to the functionalities of the Public API, the Member API allows for reading “trusted-parties” data from ORCID records, as well as automatically adding/updating metadata on ORCID records.

If your journal is affiliated with an institution, contact the institution's library to ask about ORCID membership and API credentials. You can also consult the ORCID member directory to see if your organization is already an [ORCID member](https://orcid.org/members), or review [ORCID’s membership information](https://orcid.org/about/membership) if your organization is interested in becoming an ORCID member. You can also contact ORCID directly at support@orcid.org.

## Sandbox vs production credentials

ORCID provides plugin users with an option to test how the plugin works with your installation in a Sandbox (testing) environment before going live with the Production environment. You will need a different set of credentials for the Sandbox vs Production API.

How to obtain Sandbox credentials, how to test in the Sandbox, and the advantages of testing in the Sandbox are explained further in the [Appendix: Testing the ORCID Sandbox](./appendix-testing-orcid-sandbox.md) chapter.

---
book: learning-ops
version: 3.3
---

# Introduction

Open Preprint Systems (OPS) is an open source preprint server for managing the posting of preprint research papers. With OPS you can manage the entire preprint workflow, from author submission to posting on the server website and updating preprint versions. Authors, after registering with the system and being approved by the Preprint Manager, can share their research as preprints, as PDFs or Word documents. The posted papers are then made freely available online for download and indexing by Google Scholar.

OPS is built using the same framework as Open Journal Systems (OJS) and shares much of its functionality. However, OPS has a simplified editorial workflow, with no peer review stage, and custom plugins for screening and community feedback. This guide contains information and instructions about features and workflows that are unique to OPS. For functions that are the same in OJS, this guide will link to sections of [Learning OJS](/learning-ojs/en/), a comprehensive user guide for OJS.

A “preprint” is a research article that has not yet been published in a journal. It is usually posted without undergoing formal peer review, and different versions can be posted as the paper is modified. Authors are increasingly choosing to make their unpublished research freely available by posting it on a public server, as part of a broader trend toward open science.

## OPS Features

Some of the features of OPS include:

* Responsive reader front-end with multiple options for content organization
* Author-led rapid publication workflow
* Online submission and management of all content
* Customization to suit your screening policies, with several options included
* Integration with scholarly publishing services such as Crossref and ORCID
* Built-in support for a wide array of features from the OJS and OMP ecosystem
* Availability in multiple languages

## What's New in This Version of OPS

For a detailed description of new features in OPS 3.3, see [What's New in This Version of OJS in the Learning OJS guide](https://docs.pkp.sfu.ca/learning-ojs/en/introduction#whats-new-in-this-version-of-ojs). OPS 3.3 also includes the following new features:

* A new email template that can be sent to an author by a moderator when the author's preprint is posted, which confirms the preprint has been posted.
* Any author can update the status of the Relations field, regardless of whether the author has permission to self-post.

## OPS Uses

OPS is used for submission and posting of preprints, managing preprint collections, and providing online public access to preprint collections.

OPS cannot currently be used for the following:

* Journal publishers who want a platform for publishing their journal articles and do not want to use the submission workflow of OJS. This cannot be done because the metadata for a paper posted in OPS identifies it as a preprint and not a journal article.
* Journal publishers who want to publish their articles using a continuous publishing or “online first” model. OPS is for posting preprints, not publishing journal articles.
* Publishers who want to publish/post both journal articles and preprints. OPS does not accommodate journal article publication, so a publisher will need to separately use OJS for publishing journal articles and OPS for posting preprints.
* OPS cannot be used to host an institutional repository because metadata for papers will identify them as preprints.

OPS and OJS are not currently integrated but in the future transmission of submissions between platforms will be possible using the SWORD protocol.

## Terminology

Posting preprints is different from publishing journal articles because the final product added to a preprint server is not necessarily peer reviewed nor considered to be “published.” It is not until the submission is sent to a journal, goes through a peer review process, and is published in a journal that it is considered a published article.

Therefore, when talking about preprints, the following terminology is preferred:

* “Post” instead of “publish”
* “Preprint” instead of “publication” or “article”
* “Submission” or “manuscript” can be used for the preprint before it is posted
* “Moderator” instead of “editor”

Because OPS shares a similar codebase to OJS, some of the terminology in OPS is inconsistent with the above recommendations. This guide will use the terms used in the OPS application to give step-by-step instructions , but otherwise will use preferred preprint terminology.

## Support and Community Resources

For additional support for OPS, please see [the OPS category on the PKP Forum](https://forum.pkp.sfu.ca/c/questions/ops-topics/16). You may be able to find an answer by searching the questions that have already been posted. If not, you can post your question there.

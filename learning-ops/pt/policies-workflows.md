---
book: learning-ops
version: 3.3
---

# Developing Policies and Workflows

Before setting up your preprint server, it is recommended that you decide what policies and workflows you want to use. This will determine how you configure the settings and what you communicate to authors and readers. This chapter outlines the areas to consider in establishing policies and workflows.

## Theme or Discipline

Similar to a journal, your preprint server can have a thematic or discipline focus. This can be conveyed in your Server Settings. If you want to post preprints in multiple disciplines and have different policies and workflows for the different collections, you could consider running multiple OPS servers on a single OPS installation. Otherwise, you can use Categories to organize the preprints into thematic collections on a single OPS server.

## Submission

Because preprints do not undergo a formal peer review process and are often posted with little moderation, it is important to define acceptance criteria for your preprint server and decide who can make a submission and how. Generally, the author has more control over the process than they would when submitting to a journal. You can decide whether authors can self-post the pre-print to the public site immediately upon submission, or if you will use a screening process. OPS has some special plugins which facilitate this. See the [Website Settings chapter](./setup#website-settings) for more information.

User access settings can be configured so that anyone can create a user account and make a submission or so that a Server Manager must create new user accounts. You can choose a configuration depending on how open you want the submission process to be. Some preprint servers allow submissions from journals and/or from authors. See [Users and Roles chapter](./users-roles).

If you have an open submission policy, consider [ways to prevent spam](/admin-guide/en/securing-your-system#managing-spam).

## Moderation

Although OPS does not have a formal review process, preprints can be screened or moderated. There are two types of moderation: pre-moderation and post-moderation. Servers using pre-moderation will accept or reject preprints upon submission, while servers using post-moderation will accept or reject preprints after they have already been submitted and made public.

## Revision, withdrawal, and removal

Most preprint servers allow new versions of the manuscript to be uploaded by authors, so that authors can update their papers based on new experiments, community feedback received, or feedback received from a journal-based peer review process.

In OPS you can publish multiple versions of a preprint and have all versions available to the public. OPS will show automatically when a new version is published but will not show if a preprint was withdrawn or removed. The Server Manager should indicate if a preprint was withdrawn or removed, or if there is relevant commentary or peer review available.

Withdrawal is not currently possible in OPS but may be available in the future.

## Data

Publishing research data with preprints can help build trust. In OPS, authors can upload data files as supplemental files that can be published alongside preprints. However, the best practice is to strongly encourage researchers to link to data held in external repositories and include the citation in the reference list, rather than require that data files be uploaded directly to the preprint server. The data may be more discoverable in a repository and the author will not need to re-upload the data when they submit the article to a journal for publication.

## Communicate your policies

It is recommended that you publish your policies on your site under Server Settings, Workflow Settings, and on static pages as needed. Clear policies can increase reader trust in the preprints you post and can help authors understand your acceptance criteria and moderation and posting policies and practices.

You can also create an FAQ which summarizes your policies and communicates them in simple language to your authors and readers. You may want to include general information about preprints in your FAQ. You can use the Static Pages plugin to create and publish an FAQ (see [Learning OJS 3 - Website Settings - Static Pages](/learning-ojs/en/settings-website#static-pages)).

Here are examples of preprint servers’ FAQs:

- [SCIELO Preprints FAQ](https://preprints.scielo.org/index.php/scielo/faq)
- [OSF Preprints FAQ](https://help.osf.io/hc/en-us/articles/360019930493-Preprint-FAQs)
- [bioRxiv FAQ](https://www.biorxiv.org/about/FAQ)

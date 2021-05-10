# About the ORCID plugin

[ORCID](https://orcid.org/) (Open Researcher and Contributor Identifier) is a persistent digital identifier that distinguishes individual researchers and supports automated links between researchers and their professional activities. For an overview of ORCID, please see [this introductory ORCID video](https://vimeo.com/97150912). 

PKP partners with ORCID to enable the collection and display of authenticated ORCID iDs for contributors to article and preprints published with Open Journal Systems (OJS) and Open Preprint Systems (OPS) via the ORCID Profile Plugin.

## What does the ORCID plugin do?

The ORCID Profile Plugin for OJS/OPS versions 3.1.2 and above allows an OJS journal and an OPS preprint server to:

* Collect and authenticate a contributor’s ORCID iD
* Automatically send an email to contributors requesting their ORCID iD authentication
* Display a contributor’s authenticated ORCID iD on the journal article or preprint page, which will link to the contributor’s ORCID record
* Additionally for the Member API only - Automatically send publication details to contributor’s ORCID record once their work has been published in OJS/OPS

For more details on each of these functions, see the [Using the ORCID plugin](./using-plugin.md) chapter.

## Why should you use the ORCID plugin?

By integrating ORCID with OJS/OPS, you will be able to support publishing best practices by:

* Allowing authors to collect their published work in one reliable place
* Distinguishing authors from others with a similar name, and keeping an up-to-date record regardless of changes in name or affiliation
* Demonstrating a commitment to transparency and credibility by accurately attributing authors to their published works
* Supporting the collection of accurate article metadata, including author information, by sharing publication details with CrossRef 

## Public vs Member API

ORCID provides two different API endpoints for the ORCID Public API and the ORCID Member API.

**The Public API** is free and available to anyone. It allows for ORCID iD authentication and reading public data from ORCID records. It allows the journal to have contributors' ORCID iDs authenticated and displayed on article/preprint pages. It main difference from the Member API is that it will not automatically send pulication details to contributor’s ORCID record upon publication.

**The Member API** requires ORCID institutional membership. In addition to the functionalities of the Public API, the Member API allows for reading “trusted-parties” data from ORCID records, as well as automatically adding/updating metadata on ORCID records. 

If your journal is affiliated with an institution, contact the institution's library to ask about ORCID membership and API credentials. You can also consult the ORCID member directory to see if your organization is already an [ORCID member](https://orcid.org/members), or review [ORCID’s membership information](https://orcid.org/about/membership) if your organization is interested in becoming an ORCID member. You can also contact ORCID directly at support@orcid.org.

## Sandbox vs production credentials

The ORCID plugin provides you with an option to test your setup in the Sandbox (testing) environment before going live with the Production environment. You will need a different set of credentials for the Sandbox vs Production API. We recommend that you test the ORCID plugin in the ORCID Sandbox environment using Sandbox ORCID API credentials first to make sure that the OJS/OPS environment is configured properly, before moving to the production environment and going live with the plugin functionality.

The process for obtaining your Sandbox ORCID API credentials will vary depending on whether you are planning to use the ORCID Public API or the ORCID Member API. It is explained further in the [Appendix: Testing the ORCID Sandbox](./appendix-testing-orcid-sandbox.md) chapter.

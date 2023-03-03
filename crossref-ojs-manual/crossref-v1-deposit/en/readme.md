---
book: crossref-ojs-manual
version: crossref-v1-deposit
---
# Crossref | V1 API Deposit Guide (OJS 2.4.x - 3.1)

* [English](en/)

[PKP](http://pkp.sfu.ca) and [Crossref](http://www.crossref.org/) are collaborating to help publishers and journals using [Open Journal Systems](https://pkp.sfu.ca/ojs/) take better advantage of Crossref services. In 2019, OJS 3.1.2 took advantage of a newer, more reliable deposit API between Crossref and OJS (the v2 deposit API). This has meant a division in the OJS community between Crossref members using the v1 deposit API and the v2 deposit API. The distinction is as follows:

- Crossref v1 Deposit API // The Crossref v1 deposit API is employed on all versions of OJS from 3.1.1  and _older_.
- Crossref v2 Deposit API // The Crossref v2 deposit API is employed on all versions of OJS from 3.1.2 and _newer_.

Mostly recently, Crossref have been working towards folding the v2 deposit API into their new [REST API](https://www.crossref.org/blog/behind-the-scenes-improvements-to-the-rest-api/). This means that all versions of OJS from 3.1.2 and up will continue to have supported Crossref DOI deposits.

They are unable, however, to accommodate the v1 deposit API into the new REST API. **As of July 13th, 2021,  the v1 deposit API is deprecated and unsupported** - if, during the REST API roll out, the v1 deposit API breaks, Crossref and PKP will be unable to fix the issue.

## Solutions

First and foremost, PKP encourages you to upgrade your OJS instance to at least version 3.1.2 or newer. Please see our [upgrading guide](../../../upgrading-ojs-2-to-3/).

If you are unable to upgrade and you still need to deposit your DOIs, please note that this deprecated API will only affect the plugin-based deposit. You will still be able to _export your Crossref XML_ and deposit it via the Crossref admin tool at https://doi.crossref.org.

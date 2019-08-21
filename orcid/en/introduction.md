# Introduction

[ORCID](https://orcid.org/) (Open Researcher and Contributor Identifier) is a persistent digital identifier that distinguishes individual researchers and supports automated links between researchers and their professional activities. [Open Journal Systems (OJS)](https://pkp.sfu.ca/ojs/) is an open source solution to managing and publishing scholarly journals online that is developed and maintained by the [Public Knowledge Project (PKP)](https://pkp.sfu.ca/) and its user community. PKP partners with ORCID to enable the collection and display of authenticated ORCID iDs for contributors to journals published with OJS via the ORCID Profile Plugin for OJS.

This document describes the ORCID Profile Plugin for OJS 3.1.2 and above. Previous versions of the Plugin varied in functionality. The ORCID Profile Plugin for OJS versions 3.1.2 and above will do the following:
- Collect and authenticate a contributor’s ORCID iD from ORCID using the ORCID API (members can use the Member API, nonmembers can use the Public API).
- Display a contributor’s authenticated ORCID iD on the journal article page, which will link to the contributor’s ORCID record.
- Enable editors to automatically trigger messages to contributors requesting ORCID iD authentication.

Using the ORCID plugin allows journal publishers to automatically embed the iD in the journal article metadata and embed the article metadata in the contributors’ ORCID records. Contributors can link the journal to their ORCID record and authorize the connection by clicking a button instead of manually entering their ORCID iD. Publishers who are ORCID members can use the Member API to deliver publication metadata to ORCID records that will be available to other systems and organizations accessing the records, adding trust and transparency.

The ORCID plugin is not currently available in [Open Monograph Press (OMP)](https://pkp.sfu.ca/omp/). Users can manually enter their ORCID iD in their user profile under View Profile > Public, but metadata will not be automatically sent from OMP to ORCID.

This document provides step-by-step instructions for Journal Managers and Administrators on how to use and configure the ORCID Profile Plugin in OJS and obtain ORCID membership and API credentials. It also explains how contributors can obtain ORCID membership and connect their ORCID iD with works published with OJS.


---
title: How to Use the ORCID Plugin in OJS and OPS
---

# Using the ORCID Plugin

Now that you have [obtained ORCID credentials, enabled and set up the plugin](./installation-setup.md), you can start using it in your journal / preprint server.

## Inform your stakeholders

Once your ORCID plugin is enabled and in production, you might want to let your stakeholders (authors, journal editors, etc.) know that the ORCID plugin is now available, and make sure they know what ORCID is and how it can help them. There are a variety of ways to do this. One such way is by using the [OJS Announcements feature](https://docs.pkp.sfu.ca/learning-ojs/en/settings-website#announcements) to announce to registered users that the ORCID plugin is in use. As a part of such an announcement you may wish to point users to the [About the ORCID plugin page](./introduction.md) in case they are unfamiliar with ORCID. If your journal has a social media presence or newsletter you can also inform users through those means as well.

## Plugin functionality

The ORCID plugin allows to perform the functions outlined below. Some of these will happen automatically once the plugin is enabled and set up. Others require an additional action on editors' or authors' part.

### Authors can connect their ORCID iDs to their OJS accounts

Users (including authors and contributors) can do this in 2 ways:

* During a new account registration by clicking “Create or Connect your ORCID iD”

![Click on Create or Connect your ORCID iD button during new account registration.](./assets/Register_connect_ORCID.png)

* For existing accounts - by clicking “Create or Connect your ORCID iD” in the Profile > Public. For details, see this [video walkthrough of profile authentication](https://vimeo.com/374415404).

![Click on Create or Connect your ORCID iD button in existing profile.](./assets/Profile_connect_ORCID.png)

Please note that if an author has connected their ORCID record to their OJS/OPS account, future articles and preprints they submit will be automatically connected to ORCID, providing they login to the site using their existing author account. However, if an author is a contributor (or co-author) on a submission, their OJS/OPS user account will not be linked to the submission and they will need to be prompted to connect the submission to their ORCID record.

### Editors can invite contributors to connect their ORCID iDs to the publication

To invite co-authors/contributors to connect their ORCID iDs, check the checkbox "Send email to request ORCID authorization from contributor" from the Contributor’s Edit screen. For details, see this [video walkthrough of contributor invitation](https://vimeo.com/374416189).

![Check the checkbox to send email to request ORCID authorization from contributor.](./assets/Request_ORCID_contributor.png)

### ORCID plugin can send automatic request to contributors to connect their ORCID iDs

As an alternative to manually inviting contributors to connect their ORCID iDs, the Journal Manager/Administrator can configure the ORCID plugin to send out automatic emails to contributors. To do so, in the plugin email settings check the checkbox "Send email to request ORCID authorization from authors when an article is accepted".

![ORCID plugin screen with the outlined checkbox to send email to request ORCID authentication from authors.](./assets/orcid_plugin_auto_emails.png)

### ORCID plugin will display contributors' ORCID iDs on publication page

Authors' and contributors' authenticated ORCID iDs will be publicly displayed on the journal article or preprint page, which will link to the contributor’s ORCID record.

![Article page displaying authenticated iDs under each of the three contributors' names.](./assets/orcid-id-example.png)

### ORCID plugin will display article information in author’s ORCID record (Member API only)

In addition to all of the above functionalities available in both Public and Member APIs, journals/preprint servers using ORCID Member API will automatically send article information to the author’s ORCID record upon publication. For details, see the [video walkthrough of article publication with ORCID Member API](https://vimeo.com/374417678).

![Article information displayed in an author's ORCID record.](./assets/orcid_in_author_record.png)

When a work is added to an ORCID record, the "source" is displayed as well. If a person adds a work to their own record, the "source" will be the person's name. If a work is added via API as in the case of OJS, the "source" will appear as whatever "client name" is entered when the ORCID API credentials are requested. If the ORCID plugin is being used for just a single journal, the source/client name is usually just the name of the journal. If the ORCID plugin is used for multiple journals on the same instance, then the source/client name would need to be something more broad, like "Univ. of XYZ Open Journals."

![Article information and the source of an entry displayed in an author's ORCID record.](./assets/orcid-publication-source.png)

*Please note:* that the information on the source of the publication does not currently work for OPS.

### Alter an existing article to include an ORCID iD

For a visual overview of this process, see the [video walkthrough of article publication](https://vimeo.com/374417678).

### Remove an ORCID iD from a user account

There may be a situation in which you need to remove an author’s ORCID iD. This can only be done by an Administrator:

1. When logged in as an Administrator, on the left menu of OJS, select Users & Roles > Users
2. Locate the name of the user for whom you want to remove the ORCID iD. Click on the small arrow next to the person’s name and select Edit User
3. Once you are in the Edit User page, click on More User Details
4. Find the ORCID iD box and delete the ORCID iD
5. Click OK at the bottom of the page

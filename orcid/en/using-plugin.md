# Using the Plugin

Once you have configured the plugin and tested in the ORCID sandbox to make sure everything is working correctly, you are ready to move the plugin to production and start using it.

## Obtain ORCID Production API Credentials

To use the plugin in production, you will need to obtain production ORCID API credentials and replace your sandbox credentials with your production credentials in the plugin configuration. Obtaining production credentials will be done differently depending on whether you are using the Public or Member API.

**Please note**: If you are enabling the plugin for more than one journal or preprint server, you can repeat these steps and use the same Client ID and Client Secret for each, just make sure that the Client Name assigned to the credentials is broad enough to cover all journals or preprint servers, since the same Client Name will appear as the source of information for all the  journals when data is written to ORCID records. For example: the Client Name associated with API credentials used for multiple journals would need to be something like “ABC University journal hosting service,” whereas credentials used for a single journal can be the name of the journal. If you want to have different Client Names for each journal, you will need to use different API credentials for each journal. If you need help checking or changing your Client Name, contact support@orcid.org.)

### Production Public API

Public ORCID API credentials are connected to an individual’s ORCID iD. If you are using the Public ORCID API, you can obtain your own production Public API credentials via your personal ORCID iD account. To obtain production Public API credentials, sign in to your ORCID record at [https://orcid.org/signin](https://orcid.org/signin), go to the “Developer tools” tab, and follow the instructions to [Register a public API client application](https://support.orcid.org/hc/en-us/articles/360006897174-Register-a-public-API-client-application). Once you complete the form and click Save, your production Client ID and Client Secret will be generated.

### Production Member API

Production Member API credentials are tied to member organizations. If you are using the Member ORCID API, you will need to schedule an integration review with ORCID to demo your plugin in the sandbox, following the instructions on [ORCID’s member API credentials checklist](https://members.orcid.org/api/member-api-credentials-check-list). Once the review is complete, you can obtain production API credentials from ORCID by completing the form to [Register a client application: Production Member API - Trusted Party](https://orcid.org/content/register-client-application-production-trusted-party). Once you submit the form, ORCID will email your production member Client ID and Client Secret to you.

## Enable and Configure the ORCID Profile Plugin in OJS/OPS in Production

Once you have your ORCID production API credentials, you will need to go back to your ORCID plugin settings and replace the sandbox credentials with your production credentials. From there, the plugin will work with the live ORCID registry.

### Inform your Stakeholders

Once your ORCID plugin is enabled and in production, you might want to let your stakeholders (authors, journal managers, etc.) know that the ORCID plugin is now available, and make sure they know what ORCID is and how it can help them.  There are a variety of ways to do this. One such way is by using the OJS announcement feature to announce to registered users that the ORCID plugin is in use. As a part of such an announcement you may wish to point users to the ["What is ORCID” page](./introduction) in case users are unfamiliar with ORCID. If your journal has a social media presence or newsletter you can also inform users through those means as well.

## More tips for Journal Managers / Editors

### Request ORCID authentication upon issue publication

The Editor can do this at any point:
You can configure the ORCID plugin settings to send an email automatically to authors requesting ORCID authorization when an article is published.

You can also request ORCID authorization from authors by doing the following:

1. Open the metadata for the article at any stage of the submission workflow.
2. Scroll down to contributors list.
3. Click on the contributor name whose ORCID authorization you want to request. ORCID iDs added without authentication will display an authentication request message (In OJS 3 versions previous to 3.1.2, it was possible to add unauthenticated ORCID ids).
4. Check off “Send email to request ORCID authorization from contributor.” This will send an automated email to the contributor asking them to authorize their ORCID iD.

### Alter an Existing Article to Include an Existing ORCID iD

For a visual overview of this process, please see [this video](https://vimeo.com/374417678).

### Remove an ORCID iD from a user account

There may be a situation in which you need to remove an author’s ORCID iD. This can only be done by an Administrator:

1. When logged in as an Administrator, on the left menu of OJS, select Users & Roles > Users
2. Locate the name of the user for whom you want to remove the ORCID iD. Click on the small arrow next to the person’s name and select Edit User
3. Once you are in the Edit User page, click on More User Details
4. Find the ORCID iD box and delete the ORCID iD
5. Click OK at the bottom of the page

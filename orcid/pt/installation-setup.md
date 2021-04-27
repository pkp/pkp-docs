# Installation and Setup

To use the plugin, you will first need to obtain either Public or Member ORCID API credentials (Client ID and Client Secret) and then configure the ORCID Profile Plugin in OJS/OPS with this information. **Please note**: do not enable the plugin until you have the credentials and are ready to setup the plugin.

## Obtain ORCID Sandbox API Credentials

You are strongly advised  to test the ORCID plugin in the ORCID Sandbox environment using Sandbox ORCID API credentials first to make sure that the OJS/OPS environment is configured  properly, before moving to the production environment and going live with the plugin functionality. The process for obtaining your Sandbox ORCID API credentials will vary depending on whether you are planning to use the ORCID Public API or the ORCID Member API.

ORCID provides two different API endpoints for: sandbox (testing) and production (live) environments: the ORCID Member API, and the ORCID Public API:

### Public API

Free and available to anyone, the Public API allows for ORCID iD authentication and reading public data from ORCID records.

Public API credentials are connected to an individual’s ORCID iD. To obtain Sandbox Public API credentials:

1. Register for a Sandbox ORCID iD account at the [ORCID sandbox site](https://sandbox.orcid.org).
2. Sign in to your Sandbox ORCID record.
3. Go to the “Developer tools” tab, and follow the instructions to [register a public API client application](https://support.orcid.org/hc/en-us/articles/360006897174-Register-a-public-API-client-application). See the note on “ORCID Redirect URIs” below for guidance on what to enter for your Redirect URIs.

### Member API

The ORCID Member API requires ORCID institutional membership. In addition to the functionalities of the Public API, the Member API allows for reading “trusted-parties” data from ORCID records, as well as adding/updating metadata on ORCID records. Consult the ORCID member directory to see if your organization is already an [ORCID member](https://orcid.org/members), or review [ORCID’s membership information](https://orcid.org/about/membership) if your organization is interested in becoming an ORCID member.

Member API credentials are connected to an ORCID member organization. Your organization must be an ORCID member to request Member API credentials. You may wish to check whether your organization belongs to a [local consortium](https://orcid.org/consortia), as you may be able to receive help from the consortium. To request Sandbox Member API credentials:

1. Complete the form on ORCID’s page to [Register a client application: Sandbox Member API](https://orcid.org/content/register-client-application-sandbox).
2. ORCID will email you a Sandbox Client ID and Client Secret shortly after the form is submitted. See the note on “ORCID Redirect URIs” below for guidance on what to enter for your Redirect URIs and Client Name.

For those using the Member API, please note that before production credentials can be obtained, you will need to provide a demo showing the plugin working with the ORCID Sandbox. This helps ORCID confirm that you are following their [best practices](https://members.orcid.org/api/member-api-credentials-check-list). Guidance on how to test and make sure your plugin is working properly can be found below in the “Testing in the ORCID Sandbox” chapter of this guide.

### ORCID Redirect URIs

When you register for ORCID API credentials, you will need to enter at least one Redirect URI, which is the journal location that your users will be sent to after authorizing OJS/OPS to connect to their ORCID record, The URI must begin with “https://” and include the link to the journal as part of the URI. For example:

* This works (for example, for a multi-journal installation): https://example.com
* This works (for a single journal): https://example.com/index.php/testJournal
* This does NOT work: https://example.com/index.php/testJournal/index

The host option allows any URI under that host to be used as a Redirect URI. In multiple journal instances, make sure you choose the base url of your domain and not individual journals to avoid redirect errors. For individual journals it is important to use the journal path (typically something like “index.php/testJournal”, without any trailing information, as per above). Any additional information in the URI will cause the redirect to not work.

For more detail on Redirect URIs, see the ORCID support page for [Public APIs](https://support.orcid.org/hc/en-us/articles/360006897174-Register-a-public-API-client-application) and [Member APIs](https://support.orcid.org/hc/en-us/articles/360006973913), respectively, and the [Redirect URI thread on PKP Forum](https://forum.pkp.sfu.ca/t/orcid-oauth2-redirect-uris-or-callback-urls-for-ojs).

**Please note**: When registering to receive Member API credentials, organizations are required to indicate the "Client Name" along with the Redirect URI(s). When working with multiple journals as part of an OJS instance, the Client Name used must be broad enough to serve as a source for all of the journals hosted on its instance(s), as the Client Name is what will appear as the "source" of data when a work from OJS is written to an ORCID record (e.g. “ABC University journal hosting service”). However, if you plan to install only one journal in your domain and use  ORCID for that journal, then the Client Name can be indicated as the name of the journal.

When registering for Sandbox or [Production Member API](https://orcid.org/content/register-client-application-production-trusted-party) credentials through ORCID, although there appears to be a limit of five redirects, you can add as many as you like to the ‘notes to ORCID’ section. If you ever need to adjust, add, or remove URIs, you can resubmit the form and indicate that it is for an existing application.

### Enable and Configure the ORCID Profile Plugin in OJS/OPS

After you have obtained your Client ID and Client Secret from ORCID, you can enable and configure the plugin in OJS/OPS.

First, enable the ORCID plugin for each journal (OJS) or preprint server (OPS) on your installation:

1. When logged in to OJS/OPS as an administrator, go to Settings > Website > Plugins
2. Click on Plugin Gallery and select ORCID Profile from the list

There are three potential scenarios for configuring the plugin, based on your use case:

1. If you have a single journal or preprint server installation, configure the plugin following the instructions below under Per Journal/Preprint Server Setup.
2. If you have a multi-journal or multi-preprint server installation, but you do not want to enable the ORCID plugin for all, configure each journal or preprint server separately following the instructions below under Per Journal/Preprint Server Setup, using the same ORCID API credentials (Client ID and Client Secret) for each.
3. If you have a multi-journal or multi-preprint server installation and want to enable the ORCID plugin for all site-wide, follow the [instructions below under Site-wide Setup](#site-wide-setup).

### Per Journal/Preprint Server Setup

If you want to enable the ORCID plugin for a single journal (OJS) or preprint server (OPS):

1. When logged in to OJS/OPS as an administrator, go to Settings > Website > Plugins
2. Under Installed Plugins find the ORCID plugin
3. Click the blue arrow to the left of the plugin name to make “Settings” appear, then open Settings. Enter information about your ORCID API credentials.

#### Email Settings

Under “E-Mail Settings” you can tick the checkbox to “Send e-mail to request ORCID authorization from article authors on publication of a new issue.” If checked, OJS/OPS will send an email automatically to authors who have not already linked their ORCID iDs when the article is published asking them to link their iDs. This request will be sent using the “ORCID Collect Author Id” email template (public API) or “ORCID Request Author Authorization” (member API).

![Image of plugin configuration](./assets/orcid-api-config.png)

### Site-wide Setup

For multi-journal and multi-preprint server installations the plugin can be set site-wide in `config.inc.php` to enable the ORCID plugin for all journals. Note that site-wide settings through `config.inc.php` override any existing individual plugin settings. However, the plugin can be enabled/disabled on an individual basis for journals, and each journal can manage their own email settings as described above. Adding credentials in the config.inc.php hides the Client Secret from Journal/Server Managers, which may be preferred if you have institutional credentials for ORCID. Add the following section to your config.inc.php file:

![Image of config settings in OJS config file](./assets/orcid-config-inc-php-settings.png)

Note that the `api_url` needs to end with a slash.

## Using the Plugin

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

The Editor can do this at any point: You can configure the ORCID plugin settings to send an email automatically to authors requesting ORCID authorization when an article is published.

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

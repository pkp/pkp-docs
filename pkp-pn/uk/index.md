---
generateHeadingToc: true
---

# PKP Preservation Network

## Introduction

The PKP Preservation Network (PKP PN) allows publishers of OJS journals to digitally preserve their content. This means in the event that a journal stops publishing or goes offline, there will be a way to have continued long-term access to articles and issues.

The PKP PN deposits content using the [LOCKSS](http://www.lockss.org/) Program, which offers decentralized and distributed preservation. This allows for journals that are not part of any other digital preservation service (such as CLOCKSS or Portico) the ability to be preserved for long-term access.

The PKP PN functions as a dark archive, meaning that end-users will not have access to the preserved content until after a “trigger event.” After a trigger event, PKP staff will import the preserved content into one or more OJS instances hosted by PKP member institutions. Once loaded into these host OJS instances, the content will be publicly accessible.

Please note that archiving your content in the PKP PN is not the same as backing up your OJS site. The PKP PN archive cannot be used if you lose content on your site and need to restore it. Frequent backups of your site should be performed separately.

In addition to ensuring long-term access to your content, having a digital preservation and archiving strategy and making this explicit as part of a policy is one of the key components of the [DOAJ application process](https://docs.pkp.sfu.ca/doaj/en/) policy and one of the criteria for being awarded the DOAJ Seal.

## Installation & Configuration

### PKP PN Criteria

In order to use the PKP PN, your journal must have the following:

* A compatible version of OJS - OJS 3.1.2 or newer
* An ISSN
* Have published at least one article

To configure the plugin, you will need to be logged in as the Administrator.

### Installation & Upgrade

1. Go to Settings > Website > Plugin > Plugin Gallery
2. For new users, you will need to install the plugin.
3. For users that have used PKP PN in the past, it may require you to update the plugin; if so, find the plugin on the Plugin Gallery page and click Update.
4. For manual installation and configuration of the PKP Plugin, please refer to the [GitHub README](https://github.com/pkp/pln).
5. Once the plugin has been updated or enabled, click Settings to review and accept the terms of use. The Journal Identifier will automatically be populated.
6. Click Save

![The PKP PN Plugin Screen with Terms of Use checkboxes filled in, automatically populated Journal Identifier field, and Save button](./assets/pkp-pn-terms.png)

## Using the Plugin

Once enabled, the plugin will automatically deposit the journal’s published content in the PKP PN each time an issue is published. This is the automatic deposit process:

1. The deposit is prompted by the publication of an issue. This will be based on the plugins set scheduled tasks with the default interval being 24 hours.
2. The deposit is then transferred to the network’s staging server, where its contents are validated, checked for viruses, etc.
3. The deposit is then transferred from the staging server to the LOCKSS network.
4. When all of the copies on the LOCKSS network are proven to be identical, the journal deletes the deposit in order to save storage space.

The PKP PN plugin will start packaging content to be deposited within 24 hours to 48 hours of configuration and new issue publication, but will take a few days to go through the whole cycle.

The PKP PN plugin does not currently support the deposit of individual articles that are not assigned to an issue. The plugin will check for any changes or updates (after the creation of the deposit). If there is a change to a deposited article or new article has been assigned to a deposited issue, the plugin automatically resets the deposit so that the next time the "depositor" is executed, this issue gets redeposited.

Back issues will be deposited in the archive when you enable the plugin.

### Reset

The reset option for the issue deposit will repackage and send the files to the staging server for reprocessing. This can be done if there is an error indicated.

## Status

### Checking Status in OJS

To check the status of the PKP PN plugin, click the blue arrow beside the plugin title followed by Status.

![The PKP PN Plugin menu expanded on the Plugin Gallery screen, with an arrow pointing to the Status link](./assets/pkp-pn-status-button.png)

The key thing to look for in the PKP PN status page would be the LOCKSS status column. If the preservation of an issue is successful, the LOCKSS status will indicate “**Agreement**,” meaning the whole network agrees that there is a consistent copy of the issue archived.

The status menu will identify the type, type object ID, number of items checked, and various statuses.

![The PKP PN Plugin Status screen demonstrating LOCKSS Status parameters for several issues](./assets/pkp-pn-status-menu.png)

* **ID**: The deposit's internal database identifier.
* **Type**: Whether the deposit is an issue or an article. At the moment, only issues are being packaged. Each issue is exported and stored as a zipped Bag. The bag has information about the journal (journal title, ISSN, etc.) and copyright and licensing information about each article in the issue.
* **Checked**: The date that the journal plugin most recently checked the status of the deposit in the staging server. Once a deposit is completed and all nodes in the LOCKSS network have reached an agreement, the plugin will stop checking on its status.

The key columns you will want to look at are:

* **Local Status** indicates the status of the OJS installation in packaging up and transferring each issue to the staging server.
  * **New**: the plugin is aware of the deposit, but has not generated a package file for the staging server.
  * **Packaged**: the package file has been created. The staging server has not been informed of the deposit.
  * **Transferred**: the deposit has been sent to the staging server for further processing and validation.
* **Processing Status** indicates the status of each issue in housekeeping on the staging server.
  * **Received**: The staging server has downloaded the deposit file from the journal.
  * **Validated**: The package has been validated and scanned for viruses and is now ready for sending to the LOCKSS network.
  * **Sent**: The staging server has informed the LOCKSS network that the deposit is ready.
* **LOCKSS Status** indicates the status of each issue once it's been successfully sent to the LOCKSS network.
  * **Received**: The LOCKSS network has acknowledged the deposit.
  * **Syncing**: Nodes on the LOCKSS network are downloading and verifying the deposit.
  * **Agreement**: The nodes on the LOCKSS network have checked that they all have a copy of the deposit.

The diagram below provides a visual summary of the deposit process.

![Workflow chart of PKP PN](./assets/pkp-pn-status-chart.png)

*Additional information regarding the deposit status and errors will be available with the release of OJS 3.3.*

### Checking status on PKP PN Journal list

In addition to checking the PKP PN plugin status, you can also check the [list of journal issues](http://pkp.sfu.ca/files/pkppn/onix.csv). This list is updated nightly.

### Checking status on Keepers

To check your archiving status externally, please visit the [Keepers Registry](https://keepers.issn.org/). Using the search function, enter your ISSN or journal-title. Click the Archival Status tab under the Journal name.

Please note, the Keepers Registry updates its holdings data from the PKP PN monthly.

![Image demonstrating a Keepers Registry record](./assets/pkp-pn-keepers-registry.png)

### Leaving the PKP PN

If you want to cease depositing your content in the PKP PN, simply disable the plugin. The content you already deposited will remain in the archive.

## Troubleshooting

### I’ve enabled the plugin and the Terms of Use aren’t showing up after I click refresh

![An example of Terms of Use not displaying in the PKP PN Plugin setup screen.](./assets/pkp-pn-refresh-terms.png)

Check to see that an ISSN has been entered in your [Journal Settings](https://docs.pkp.sfu.ca/learning-ojs/en/journal-setup#masthead). Once this information is in your journal, it will list the Terms of Use.

### The plugin status continues to display "Network Status: The PKP PLN does not know about this journal yet." and no issues are listed under deposits

Please note, it can take a while for LOCKSS to synchronize the deposit across all the caches in the network.

If the message persists for more than 24 hours, you may not have set up cron correctly. Other causes could be an old OJS installation, trouble contacting the staging server, or the staging server not reaching the journal properly.

If you continue to have this issue, please contact PKP Publishing Services if you are a hosted client. For self-hosted journals, please create a post on the [PKP Community Forum](https://forum.pkp.sfu.ca/) and include your journal title and URL.

![Image demonstrating the plugin status screen showing the The PKP PLN does not know about this journal yet. error](./assets/pkp-pn-unknown-journal.png)

### The LOCKSS status indicates that it is in Agreement, but I can’t see our Journal on Keepers or on the PKP PN Journal list

The [PKP PN Journal list](http://pkp.sfu.ca/files/pkppn/onix.csv) updates nightly while Keepers Registry updates its holdings data from the PKP PN every month. If you think your journal should be listed based on these time frames, please contact PKP Publishing Services if you are a hosted client. For self-hosted journals, please create a post on the [PKP Community Forum](https://forum.pkp.sfu.ca/) and include your journal UUID or URL.

### Troubleshooting hints

For users with technical knowledge, there are a number of troubleshooting hints available on the [PKP PN GitHub page](https://github.com/pkp/pln) if you encounter any issues with packaging and depositing content.

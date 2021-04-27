# Managing the Server Environment

Managing a PKP application generally means:

* ensuring that system requirements are met;
* properly configuring the system and application to work properly;
* managing the install and upgrade process.

PKP applications are relatively simple PHP/MySQL web applications, and can be run just about anywhere, provided a relatively recent version of PHP and MySQL are available. Other configuration options (e.g. PostgreSQL, MS SQL) are also possible.

Package downloads for PKP applications can be downloaded from PKP's website at the following locations:

* OJS: [https://pkp.sfu.ca/ojs/ojs_download](https://pkp.sfu.ca/ojs/ojs_download)
* OMP: [https://pkp.sfu.ca/omp/omp_download](https://pkp.sfu.ca/omp/omp_download)
* OCS: [https://pkp.sfu.ca/ocs/ocs_download](https://pkp.sfu.ca/ocs/ocs_download)

All applications ship with a full set of configuration, installation and upgrade documentation, found in the `docs/` directory included in the package download. These should be consulted as a primary resource for any configuration, installation or upgrade question, and should be reviewed periodically (particularly as part of any upgrade process). PKP provides these guides on the web, and we provide quick links below.

## Hosted Solutions

If you do not have the expertise, staff or desire to install and manage OJS on your own, PKP Publishing Services provides complete hosting solutions at a number of price points. For more information, see the [PKP Publishing Services website](https://pkpservices.sfu.ca).

## System Requirements and Installation

Details on general system requirements, configuration recommendations and general installation instructions can be found in the various application README files:

* OJS: [https://pkp.sfu.ca/ojs/README](https://pkp.sfu.ca/ojs/README)
* OMP: [https://pkp.sfu.ca/omp/README](https://pkp.sfu.ca/omp/README)
* OCS: [https://pkp.sfu.ca/ocs/README](https://pkp.sfu.ca/ocs/README)

## Upgrading

Upgrade instructions can be found in the following locations:

* OJS: [https://pkp.sfu.ca/ojs/UPGRADE](https://pkp.sfu.ca/ojs/UPGRADE)
* OMP: [https://pkp.sfu.ca/omp/UPGRADE](https://pkp.sfu.ca/omp/UPGRADE)
* OCS: [https://pkp.sfu.ca/ocs/UPGRADE](https://pkp.sfu.ca/ocs/UPGRADE)

## Installing and Managing Applications via Git

Using Git to manage your PKP software gives you greater control over updates and bug fixes from the official PKP repository. By using Git, you can create local branches to customize your code, verify and test the latest changes to your software version, rollback your code more easily, and create pull requests back to the PKP repository to share with the larger community.

OJS and OMP installs managed with Git require the installation and usage of [Node.js](https://nodejs.org/en/) and [Composer](https://getcomposer.org/). Both tools are required to update dependencies that are used by the PKP Library. OCS does not currently require these tools.

Instructions for installing via Git can be found directly in our GitHub repositories in the following locations:

* OJS: [https://github.com/pkp/ojs](https://github.com/pkp/ojs)
* OMP: [https://github.com/pkp/omp](https://github.com/pkp/omp)
* OCS: [https://github.com/pkp/ocs](https://github.com/pkp/ocs)

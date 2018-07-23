# Managing the Server Environment

Managing a PKP application generally means: 

* ensuring that system requirements are met; 
* properly configuring the system and application to work properly;
* managing the install and upgrade process.

PKP applications are relatively simple PHP/MySQL web applications, and can be run just about anywhere, provided a relatively recent version of PHP and MySQL are available. Other configuration options (eg. PostgreSQL, MS SQL) are also possible. 

All applications ship with a full set of configuration, installation and upgrade documentation, found in the `docs/` directory included in the package download. These should be consulted as a primary resource for any configuration, installation or upgrade question, and should be reviewed periodically (particularly as part of any upgrade process). PKP provides these guides on the web, and we provide quick links below. 

## Hosted Solutions

If you do not have the expertise, staff or desire to install and manage OJS on your own, PKP Publishing Services provides complete hosting solutions at a number of price points. For more information, see the [PKP Publishing Services website] (https://pkpservices.sfu.ca). 

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

Using Git to manage your OJS install gives you a higher control over updates and code fixes from official PKP Github repository. You will be able to create local branches of a OJS current version to check improvements and test them as well.

OJS installs managed with Git tool also demands that you have set two special requirements: Node.js and Composer. Both items are required to update dependencies packages that are used by PKP Library just after cloning OJS repository.

Another advantage using Git consists on ability to create local branches that enables sysadmins to make their own local tests and even collaborate with OJS code  improvements pushing commits to review on official Git repo.That way it is also possible upgrade code version, minor and major versions, at same time keeping current local code version with branches. Likewise a rollback just requires a branch checkout command.

Instructions for installing via Git can be found directly in our GitHub repositories: 

* OJS: [https://github.com/pkp/ojs](https://github.com/pkp/ojs)
* OMP: [https://github.com/pkp/omp](https://github.com/pkp/omp)
* OCS: [https://github.com/pkp/ocs](https://github.com/pkp/ocs)
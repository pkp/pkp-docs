---
book: dev-documentation
version: 3.4
title: Getting Started - Technical Documentation - OJS|OMP|OPS
---

# Getting Started

> This guide assumes that you know how to run a local server, work with git version control and run tools from the command line.
{:.warning}

This section will describe how to install the application in a local development environment and stay up-to-date with the latest changes. It is intended for developers who want to work with the source code. Read the [Admin Guide](../../../admin-guide/) to learn how to install and host the application in a production environment.

## System Requirements

> If you are using Windows, you may need to install GNU Patch and add it to your system's `PATH` environment variable.
{:.notice}

The Admin Guide describes the [system requirements](../../../admin-guide/en/requirements). When running locally, many of the recommended dependencies are not required.

## Install

Fork and clone the [OJS](https://github.com/pkp/ojs), [OMP](https://github.com/pkp/omp), or [OPS](https://github.com/pkp/ops) repository on GitHub. If you're not sure how, read how to [fork and clone a repository](https://help.github.com/en/articles/fork-a-repo) on GitHub.

Once the application is cloned to your local system, navigate to the application's root directory in your terminal and run the following command to check out the submodules.

```
git submodule update --init --recursive
```

Copy the default config file.

```
cp config.TEMPLATE.inc.php config.inc.php
```

Open the `config.inc.php` file, find the database settings, and update them to match the credentials for your SQL server.

```
[database]

driver = <driver>   # mysql or postgres9
host = <host>       # usually `localhost`
username = <user>
password = <pass>
name = <db>
```

Find the `[email]` settings in the config file and route emails to the server `log` or a [local SMTP server](./resources#log-emails).

```
[email]

; Default method to send emails
; Available options: sendmail, smtp, log
default = log
```

Install dependencies with [composer](https://getcomposer.org/).

```
composer --working-dir=lib/pkp install
composer --working-dir=plugins/generic/citationStyleLanguage install
```

Run the following command if you are installing OJS or OMP.

```
composer --working-dir=plugins/paymethod/paypal install
```

Install dependencies and build the JavaScript package with [NPM](https://www.npmjs.com/).

```
npm install
npm run build
```

Run the following command to launch the application using PHP's built-in server.

```
php -S localhost:8000
```

Load your browser and navigate to `http://localhost:8000` to install the application.

## Branches

Published versions of the software can be found in branches in the git repository. For example, run the following command to check out the latest 3.3.0-x version of the software.

```
git checkout stable-3_3_0
```

## Remotes

To get changes to the application that were made after you forked, add the `upstream` remote.

For OJS:

```
git remote add upstream git@github.com:pkp/ojs.git
cd lib/pkp
git remote add upstream git@github.com:pkp/pkp-lib.git
cd ../ui-library
git remote add upstream git@github.com:pkp/ui-library.git
cd ../..
```

For OMP:

```
git remote add upstream git@github.com:pkp/omp.git
cd lib/pkp
git remote add upstream git@github.com:pkp/pkp-lib.git
cd ../ui-library
git remote add upstream git@github.com:pkp/ui-library.git
cd ../..
```

For OPS:

```
git remote add upstream git@github.com:pkp/ops.git
cd lib/pkp
git remote add upstream git@github.com:pkp/pkp-lib.git
cd ../ui-library
git remote add upstream git@github.com:pkp/ui-library.git
cd ../..
```

Run the following commands whenever you want to pull the latest changes to your repository.

```
# Update the app
git checkout main
git pull upstream main
git push

# Update the pkp-lib submodule
cd lib/pkp
git checkout main
git pull upstream main
git push

# Update the ui-library submodule
cd ../ui-library
git checkout main
git pull upstream main
git push

cd ../..
```

## Updates

When you have pulled down changes from the `upstream` remote, run the following to sync the `lib/pkp` and `lib/ui-library` submodules.

```
git submodule update --init --recursive
```

You may need to update dependencies and rebuild the JavaScript package.

```
composer --working-dir=lib/pkp update
npm install
npm run build
```

Sometimes a code change will modify the database structure and you will need to run the upgrade script.

```
php tools/upgrade.php upgrade
```

## Contributions

Read the [Contributor's Guide](https://docs.pkp.sfu.ca/dev/contributors) to learn more about [how to prepare a pull request](https://docs.pkp.sfu.ca/dev/contributors/#code-contributions).

---

Now that you're up and running, learn more about the [application architecture](./architecture).

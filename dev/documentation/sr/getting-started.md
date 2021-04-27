---
title: Getting Started - Technical Documentation - OJS|OMP|OPS
---

# Getting Started

This section will describe how to install the application, contribute changes, and stay up-to-date with the latest changes.

> This guide assumes that you know how to run a local server, work with git version control and run tools from the command line. 
> 
> {:.warning}

## Technical Requirements

The following requirements must be met to run the software from the GitHub repositories. Read the [Admin Guide](../../../admin-guide/en/managing-the-environment) if you are installing from a release package.

- PHP 7.3+
- MySQL 4.1+ _or_ PostgreSQL 9.1.5+

If you are using Windows, you may need to install GNU Patch and add it to your system's `PATH` environment variable.

## Install

Fork and clone the [OJS](https://github.com/pkp/ojs), [OMP](https://github.com/pkp/omp), or [OPS](https://github.com/pkp/ops) repository on GitHub. (How to [fork and clone a repository on GitHub](https://help.github.com/en/articles/fork-a-repo).)

From your terminal, navigate to the application's root directory and run the following command to check out the submodules:

```
git submodule update --init --recursive
```

Copy the default config file.

```
cp config.TEMPLATE.inc.php config.inc.php
```

Open the `config.inc.php` file, find the database settings, and update them to match the credentials for your SQL server.

Install dependencies with [composer](https://getcomposer.org/).

```
composer --working-dir=lib/pkp update
composer --working-dir=plugins/paymethod/paypal update
```

Run the following command if you are installing OJS.

```
composer --working-dir=plugins/generic/citationStyleLanguage update
```

Install dependencies with [NPM](https://www.npmjs.com/).

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

Published versions of the software can be found in branches in the git repository. For example, run the following command to check out version 3.1.2 of the software.

```
git checkout stable-3_1_2
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

All contributions should be written in a branch and pushed to your fork. Then open a [Pull Request](https://help.github.com/en/articles/creating-a-pull-request-from-a-fork) to PKP's repository.

For code that is intended for inclusion in the main codebase:
- New features are best contributed to the `main` branch for inclusion in the next major release. Bug fixes are best contributed to the latest stable branch (e.g. `stable-3_3_0` for 3.3.0).
- The design patterns used in PKP software should be understood and followed when possible. This includes:
  - Localization standards
  - Security practices (checking database IDs, avoiding cross-site scripting attacks, etc)
  - Maintenance considerations (please include upgrade and installation scripts when required)
  - Code formatting, variable naming, and stylistic conventions
- Contributors are responsible for writing code compatible with the primary platforms listed in docs/README.md.
- When contributed changes may affect more than one application, we request that all major applications be considered (OJS, OMP, and OPS).
- The development team is happy to review contributed patches, but we have a limited amount of time to spend integrating patches with the codebase or modifying contributed code. If aspects of the code need work, we would rather inform the author and have them perform the modifications.

For contributions that are distributed separately as patches or plugins:
- If contributors haven't met the conditions above, they are welcome to distribute additional features as patches or plugins. However, the PKP team won't be able to provide support in this case.
- If the option is available, coding a feature as a plugin is the preferred method.

---

Now that you're up and running, learn more about the [application architecture](./architecture).

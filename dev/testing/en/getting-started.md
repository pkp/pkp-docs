---
title: Getting Started - Testing - OJS/OMP
---

# Getting started

We use [Cypress](https://www.cypress.io/) and [PHPUnit](https://phpunit.de/) to test our applications. Before you can run the tests, you will need to [clone and configure](/dev/documentation/en/getting-started) the application's repository so that you have a working installation of the application on your local environment.

## Requirements

In OJS 3.5 or later, you will need to install and run [the Sendria mail server](https://pypi.org/project/sendria/) to locally run the cypress tests:

```
python3 -m pip install sendria
```

Add the following mail settings to your `config.inc.php` file:

```
default = smtp
smtp = On
smtp_server = localhost
smtp_port = 1025
```

## Configure your environment

There are many ways to [configure your environment](https://docs.cypress.io/guides/guides/environment-variables#Setting) to run the Cypress tests. We recommend creating a `cypress.env.json` file.

```json
{
	"baseUrl": "http://localhost:8000",
	"DBTYPE": "****",
	"DBHOST": "****",
	"DBUSERNAME": "****",
	"DBPASSWORD": "****",
	"DBNAME": "****",
	"FILESDIR": "****"
}
```

Replace `****` with the values which match your local installation and place this file in your application's root directory.

> The `DBTYPE` must match one of the options in the installation form. It is usually `mysqli` or `postgres9`.
{:.tip}

The integration tests will install the software and create test data.

## Run integration tests

The integration tests will install the software and run tests to add users, make submissions, record editorial decisions and publish articles.

Before the integration tests are run, update your `config.inc.php` file and set the `installed` flag to `Off`.

```
; Set this to On once the system has been installed
; (This is generally done automatically by the installer)
installed = Off
```

Run the following command in the root directory of the application to start a server. The URL should match the `baseUrl` in `cypress.env.json`.

```
php -S localhost:8000
```

Run the following command in the root directory of the application to run the tests.

```
npx cypress run
```

Or open Cypress and watch the tests while they run.

```
npx cypress open
```

<figure class="video_container">
  <video controls="true" allowfullscreen="true">
    <source src="./cypress-open.mp4" type="video/mp4">
  </video>
  <figcaption>Once Cypress opens, click the Run All Specs button to start the tests.</figcaption>
</figure>

Tests that are shared between the applications are stored in the `lib/pkp/cypress/integration` directory and must be run with a separate command.

```
npx cypress run --config integrationFolder=lib/pkp/cypress/tests/integration
```

## Run PHP Unit tests

Run the unit tests with the following command in your application's root directory.

```
sh lib/pkp/tools/runAllTests.sh
```

The unit tests can be run before or after the integration tests and do not depend on the test data.

---

Learn about [continuous integration testing](./continuous-integration).

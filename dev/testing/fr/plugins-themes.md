---
title: Plugins and Themes - Testing - OJS/OMP
---

# Plugins and Themes

Plugins and themes can make use of parts of the application tests to prepare a test environment and run tests. This allows each plugin to implement [continuous integration](./continuous-integration) testing in its own repository.

The [Static Pages](https://github.com/pkp/staticPages/) and [Quick Submit](https://github.com/pkp/quickSubmit) plugins and the [Manuscript](https://github.com/NateWr/defaultManuscript) theme are configured for testing. The `.travis.yml` file in each repository configures the integration tests. The tests that are run can be found in each repository's `cypress/tests` directory .

Plugin and theme tests can be run locally by running the following command in the application's root directory.

```
cd path/to/ojs
npx cypress run --config integrationFolder=plugins/generic/staticPages/cypress/tests
```

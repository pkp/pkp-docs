---
title: Plugins and Themes - Testing - OJS/OMP
---

# Plugins and Themes

Plugins and themes can make use of parts of the application tests to prepare a test environment and run tests. This allows each plugin to implement [continuous integration](./continuous-integration) testing in its own repository.

The `.github/workflows/main.yml` file in each repository configures the integration tests. Additional plugin-dependent commands that are run during tests may be found in `.github/actions/tests.sh`. The tests that are run can be found in each repository's `cypress/tests` directory.

Plugin and theme tests can be run locally by running the following command in the application's root directory.

```
cd path/to/ojs
npx cypress run --config integrationFolder=plugins/generic/staticPages/cypress/tests
```

## Examples

Examples of plugins that have been configured with tests include:

- [OAI JATS](https://github.com/pkp/oaiJats)
- [Quick Submit](https://github.com/pkp/quickSubmit)
- The [Manuscript theme](https://github.com/pkp/defaultManuscript)

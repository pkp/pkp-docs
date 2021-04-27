---
title: Writing Tests - Testing - OJS/OMP
---

# Writing Tests

Tests should be written whenever the application's functionality has changed. This might occur when a new feature is added or when an existing feature is extended or refactored and the existing tests do not cover all use cases.

It is often appropriate to add to one of the existing tests rather than create a new test. These tests can be found in `cypress/tests` and `lib/pkp/cypress/tests`.

> If you are writing a test which checks a particular part of the editorial workflow, it should be put in `cypress/tests/data`. If you are writing a test for something else, such as statistics or journal settings, it should be put in `cypress/tests/integration`. 
> 
> {:.notice}

Read the Cypress documentation to learn how to write your [first test](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html), [organize tests](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Test-Structure), and [interact with buttons and fields](https://docs.cypress.io/guides/core-concepts/interacting-with-elements.html#Actionability).

## Commands

Custom commands provide a way to share test code across applications and perform routine interactions. For example, a command exists to login.

```js
cy.login('admin', 'admin');
```

And logout.

```js
cy.logout();
```

Register as a new user.

```js
cy.register({
    'username': 'ccorino',
    'givenName': 'Carlo',
    'familyName': 'Corino',
    'affiliation': 'University of Bologna',
    'country': 'Italy'
});
```

Or create a new user from the admin area.

```js
cy.login('admin', 'admin');
cy.createUser({
    'username': 'skumar',
    'givenName': 'Sabine',
    'familyName': 'Kumar',
    'country': 'Singapore',
    'affiliation': 'National University of Singapore',
    'roles': ['Proofreader']
});
```

Read all the commands in the `lib/pkp/cypress/support/commands.js` file.

---

Learn how to [debug test failures](./debug).
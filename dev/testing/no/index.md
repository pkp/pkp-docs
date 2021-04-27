---
title: Testing - OJS/OMP
description: A guide to writing and running tests for OJS, OMP and any of their plugins or themes.
---

# Introduction

The [Public Knowledge Project](https://pkp.sfu.ca/) runs automated tests against its software to catch bugs in code before they are released. These tests step through the main functions of an application one by one to check if each feature still works as intended.

Automated tests help us to ensure that a change in one part of the software won't cause unexpected changes somewhere else. Because our software involves many moving parts, it is difficult for any single developer to know how each part fits together.

Tests help us fill this gap by documenting the way that submissions are received, assigned, reviewed, copyedited and published. Tests also help us document unusual journal configurations, user permissions and other edge cases which developers may not consider while writing code.

Our integration tests can be found in `cypress/tests` and unit tests can be found in `tests`.

---

Learn how to [run the tests](getting-started).

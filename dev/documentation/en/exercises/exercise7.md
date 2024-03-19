---
book: dev-documentation
version: 3.4
title: Exercise 7 - Open a Pull Request
---

# Exercise 7 - Open a Pull Request

This exercise is designed to help you learn about how to run the integration tests and request a code review.

> 💡 In order to complete this exercise, you will need to know how to create a [pull request from your fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork).

Read the documentation about our [continuous integration](../../../testing/en/continuous-integration) testing. Then commit your work to your own fork and open a draft pull request on the [OJS repository](https://github.com/pkp/ojs).

When creating your pull request, put [Exercise] at the start of the title so that we know it is related to these exercises.

After the pull request has been opened, look for the testing details and wait to see if all of the tests pass. It can take more than an hour for the tests to complete if there is a backlog.

> 💡 If the pull request says that there is a merge conflict, you will need to sync your branch with PKP's master branch and resolve the conflict before the tests will start. You can use a [merge](https://stackoverflow.com/questions/16329776/how-to-keep-a-git-branch-in-sync-with-master) commit to sync your branch.

Sometimes a single test will fail, but the others will pass. If so that is probably the result of a race condition. These can be fixed in most cases by restarting the test. If several tests fail, there may be something that needs to be fixed. Read how to [debug tests](../../../testing/en/debug) and, if needed, read how to [run the tests locally](../../../testing/en/getting-started).

If the tests have successfully started and you've got passed the first few minutes without the tests failing, you can move on to [Exercise 8](./exercise8).

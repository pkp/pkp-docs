---
title: Debug Test Failures - Testing - OJS/OMP
---

# Debug Test Failures

When a test fails it means that a recent change has broken the application. The log files for the tests will will indicate which tests failed and will list all of the commands that were run before the failure occurred.

In most cases, the server's error log will contain important clues about what went wrong.

## Debug locally

Cypress outputs the log directly to the terminal. When the tests are run from the Cypress UI additional information on the browser's state will be available.

When the tests are run from the terminal you will find a screenshot of the browser's state when the test failed in `cypress/screenshots`.

## Debug CI

The [CI tests](./continuous-integration) can be difficult to debug. Travis provides access to its build logs and screenshots of test failures to help.

<figure class="video_container">
  <video controls="true" allowfullscreen="true">
    <source src="./travis-log.mp4" type="video/mp4">
  </video>
  <figcaption>Short video showing how to access log of build results.</figcaption>
</figure>

This provides a log of the entire build process including the logs from the Cypress and PHP Unit tests. Parts of the log, such as the server's error log, are truncated and can only be reached by accessing the raw log.

<figure class="video_container">
  <video controls="true" allowfullscreen="true">
    <source src="./travis-log-raw.mp4" type="video/mp4">
  </video>
  <figcaption>Short video showing how to access the raw log of build results.</figcaption>
</figure>

> When viewing the raw log, run a search in your browser for "fatal". This is a quick way to find the source of many -- _but not all_ -- test failures.
{:.tip}

### Travis debug mode

Travis provides a [debug mode](https://docs.travis-ci.com/user/running-build-in-debug-mode/). When enabled it is possible to log into the Travis environment via SSH and explore the tests manually.

### Screenshots

Screenshots can be accessed by using the uuencode tool on the Travis VM. To extract the screenshots related to a test failure, follow these steps.

- When viewing the test output on Travis, click the "Raw Log" button.
- Save the log to your computer, for example `/tmp/log.txt`.
- Run `cat /tmp/log.txt | uudecode | tar xvz` to extract the screenshots locally.

> If you are struggling to understand a test failure in Travis, it may be best to run the tests locally where you have more insight into the state of the application.
{:.tip}

---

Learn how to write tests for [plugins and themes](./plugins-themes).
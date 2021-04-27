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

![Short video showing how to access log of build results](./travis-log.gif)

This provides a log of the entire build process including the logs from the Cypress and PHP Unit tests. Parts of the log, such as the server's error log, are truncated and can only be reached by accessing the raw log.

![Short video showing how to access the raw log of build results](./travis-log-raw.gif)

> When viewing the raw log, run a search in your browser for "fatal". This is a quick way to find the source of many -- _but not all_ -- test failures. 
> 
> {:.tip}

### Travis debug mode

Travis provides a [debug mode](https://docs.travis-ci.com/user/running-build-in-debug-mode/). When enabled it is possible to log into the Travis environment via SSH and explore the tests manually.

### Screenshots

Screenshots can be accessed by using the uuencode tool on the Travis VM. Add the following to `.travis.yml`.

```yaml
after_failure:
  - sudo apt-get install sharutils
  - tar cz cypress/screenshots | uuencode /dev/stdout
```

When the tests run with these settings, the log will contain a uuencoded dump of screenshots of the failure. To extract the screenshots, save the raw log to your local machine and run the following.

```
uudecode /path/to/log.txt | tar xvz
```

> If you are struggling to understand a test failure in Travis, it may be best to run the tests locally where you have more insight into the state of the application. 
> 
> {:.tip}

---

Learn how to write tests for [plugins and themes](./plugins-themes).
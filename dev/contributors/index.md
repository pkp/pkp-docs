---
generateHeadingToc: true
title: Contributor's Guide - OJS|OMP|OPS
description: A guide for coders who want to contribute to Open Journal Systems, Open Monograph Press and Open Preprint Systems.
---

# Contributor's Guide

This document will help you learn how to contribute to Open Journal Systems, Open Monograph Press, and Open Preprint Systems. It is written for coders who are interested in contributing to the software's code. But some parts of this guide may be useful for anyone who wants to understand how we propose new features, discuss contributions and coordinate the development of the software.

> Not what you're looking for? Try the [translation guide](https://docs.pkp.sfu.ca/translating-guide/en) to become a translator or learn how to [contribute to this documentation](https://docs.pkp.sfu.ca/contributing/en/). If that's not right for you, you may want to seek help on the [community forum](https://forum.pkp.sfu.ca/).
{:.notice}

## Report a Problem

Input from our community helps us improve the software. We welcome bug reports and suggestions from anyone, even if they have never worked on software before. However, we ask that everyone follow some guidelines to help us manage the work.

You can **report a bug** whenever you encounter an error in the software. For example, if the software says an article is published but it is not appearing with other published articles, that is probably a bug. Before reporting a bug, search our [support forum](https://forum.pkp.sfu.ca/c/questions/5) to see if anyone has already reported it. If not, open a new thread.

> You can open a bug report in our [GitHub repository](https://github.com/pkp/pkp-lib/issues/). However, we recommend starting with the support forum because you are more likely to receive help there. When you open an issue in our GitHub repository you will be expected to respond knowledgably to technical questions. GitHub is not a good place to ask for user support.
{:.notice}

You can **suggest an enhancement** whenever you encounter something in the software that doesn't work the way that you expect it to. For example, if you think a user should be notified by email about something but they are not. Before suggesting an enhancement, search our [feature request forum](https://forum.pkp.sfu.ca/c/questions/feature-requests/8) to see if anyone has already requested it. If not, open a new thread.

## Teams

PKP's developers work collaboratively across all parts of the software. However, we have appointed three leads who focus on different parts of the software.

| Team | Leader | Responsibilities |
| --- | --- | --- |
| **Infastructure** | Alec (@asmecher) | Software architecture and development tools: routing, localization, caching, tests, upgrades, dependencies, deployment and performance. |
| **Workflow** | Nate (@NateWr) | Editorial workflow: submission lists, the submission wizard, editorial decisions, stage assignments, submission files, and the author and reviewer workflows. |
| **Distribution and Metadata** | Bozana (@bozana) | Metadata, deposits, and LIS protocols: DOIs, OAI-PMH, Crossref, statistics, themes, versioning and withdrawal/retraction. |

Large projects will be broken down into issues that can be distributed to different teams. For example, work on JATS XML support may include one issue to adapt the editorial workflow and another issue to adapt Crossref deposits, each assigned to different teams.

## Issue Management

The issues in our [GitHub repository](https://github.com/pkp/pkp-lib/issues/) help our development team to track, discuss, prioritize and assign work. All issues are assigned to the appropriate labels, projects and milestone.

- [Labels](https://github.com/pkp/pkp-lib/labels) help us track track the priority and complexity of an issue.
- [Projects](https://github.com/orgs/pkp/projects?type=beta) help us organize issues into topics like [Peer Review](https://github.com/orgs/pkp/projects/3) and [Statistics](https://github.com/orgs/pkp/projects/5).
- [Milestones](https://github.com/pkp/pkp-lib/milestones) help us plan when work will be completed and released.

> You may find issues that aren't assigned to labels or projects. These should be considered _unconfirmed_ and may be closed at any time.
{:.warning}

Every issue will follow a similar lifecycle:

- [Triage](#triage) - Assign the issue to a [development team](#development-teams-and-contributors).
- [Investigation](#investigation) - Confirm or close the issue.
- [Todo](#todo) - Work is planned but not yet started.
- [Under Research](#under-research) - We are working to understand what needs to be done.
- [Under Development](#under-development) - A developer is implementing this issue.
- [Done](#done) - Work on this issue is complete.

Each of these stages is described in more detail below. Community members are invited to discuss issues at any stage of the lifecycle. But the development team may not respond to or engage with comments until they are ready to begin work on the issue.

### Triage

When a new issue is filed, a PKP developer will review the issue and assign it to one of our three [development teams](#development-teams-and-contributors).

No labels, projects or milestones are assigned at this stage.

### Investigation

A member of the assigned development team will briefly investigate the issue and confirm or close it.

- For **bugs**, follow the reproduction steps or request reproduction steps when none have been provided. Request better reproduction steps or close the issue when unable to reproduce it.
- For **enhancements**, ask questions to gather all the information necessary to understand the request. Close the issue and ask the reporter to post in the [feature requests forum](https://forum.pkp.sfu.ca/c/questions/5) when more discussion is needed to reach concensus or assess its priority.

When an issue is confirmed, assign the appropriate labels and projects. Assign a milestone to bugs in the stable version, but not to other issues.

### Todo

Assign a milestone to the issue when the assigned team plans to complete work on it for a future version. Work may not have begun yet on the issue, but it has been scheduled to be completed at some point.

### Under Research

An issue is under research when the assigned team begins work on the issue. Every issue is different, but this phase may include the following:

- Ask questions or conduct UX research to discover how an enhancement should work.
- Consult schemas, standards or partners to identify technical requirements.
- Discuss the impact of a change, such as how far back a bug fix should be ported.

### Under Development

An issue is under development when a developer begins implementing the issue. In most cases, the research phase should have been completed. But it may be necessary for the developer to continue to ask questions or conduct research as they work on the issue.

### Done

Work on the issue has been completed and all code has been merged. Close the issue.

## Code Contributions

This section will describe everything you need to know to get your changes committed to our software. We assume that you are familiar with git, version control, pull requests and integration testing.

### Before you Begin

We almost never merge code from a contributor when it hasn't been discussed with us in advance. Before you start writing code, please discuss your plans with the development team. We are happy to talk through your proposals in the [feature request forum](https://forum.pkp.sfu.ca/c/questions/feature-requests/8) or an appropriate [GitHub issue](https://github.com/pkp/pkp-lib/issues/).

> If you want to draw our attention to your proposal on the forum, let us know that you plan to contribute the code. We are overwhelmed with requests but always have time for contributors.
{:.tip}

### Source Code

In order to contribute code, you must run the applications from the source code. Learn how to [install the applications from source](/dev/documentation/en/getting-started) in your local development environment.

### Branches

Before you begin work, ask in the appropriate GitHub issue what branch you should work against. We are usually working against one of these branches:

- The `main` branch is where all work on future releases is done. All new features are contributed to this branch.
- There are `stable-*_*_*` branches for each of our stable versions. For example `stable-3_3_0` for the 3.3 LTS (Long-Term Support) version. We only accept bug fixes in the most recent stable branch or the LTS branch.

### Commits

All commits must include a reference to the GitHub issue that they address. For example, if your pull request fixes a bug for GitHub issue 1572, your commit message should look like the following.

```
pkp/pkp-lib#1572 Fix wrong stage assignments during submission
```

Commit messages should contain a brief description of what was changed. A good commit message says what was changed _and why_.

| BAD | GOOD |
| --- | --- |
| pkp/pkp-lib#1572 Fix assignments | pkp/pkp-lib#1572 Fix wrong stage assignments during submission |
| pkp/pkp-lib#1572 Fix signature email | pkp/pkp-lib#1572 Fix broken user signature in review assignment email |
| pkp/pkp-lib#1572 Change class name | pkp/pkp-lib#1572 Rename Article class to Submission to improve align all apps |

If you commit frequently, please squash your commits before opening a pull request. Large commits can use multi-line commit messages.

```
pkp/pkp-lib#1572 Added support for withdrawing submissions

- Added Withdraw decision to each stage
- Added UI button to editorial workflow
- Added email templates for withdrawal requests
```

### Pull Requests

A pull request must pass our integration tests before it will be merged. Special commits are required to run the integration tests when changes are made against more than one repository. Read about how to [prepare your pull requests](https://docs.pkp.sfu.ca/dev/testing/en/continuous-integration) for continous testing.

#### Code Review

All code for our applications should be reviewed before it is merged. Code reviews help us:

- Improve the quality of our code and catch unexpected bugs
- Share knowledge and expertise among the team
- Spread awareness of how new features work
- Teach us about previous coding choices we have made that led to bugs
- Maintain consistency in coding style and syntax, so that the code remains easy to read

Code reviews work best when they spark discussion between the coder and the reviewer. Sometimes, going directly to a code review is the easiest way for another developer to understand how and why you've chosen to solve a problem in a particular way.

Some comments in code review are straightforward — for example, syntax and whitespace issues. But others are an opportunity to learn for both the coder and the reviewer. If you don't understand a comment or disagree with a suggested change, a code review is a great place to discuss it.

#### What to expect from a code review

A good code review is an opportunity to reach a consensus. When a consensus between the coder and the reviewer can not be reached, a senior developer will make the decision. A code review is **not** an opportunity to disparage your code or criticize your coding ability.

The **coder** should expect:

- To be treated with respect.
- To have mistakes or errors pointed out in a friendly, constructive manner.
- To be asked to explain how their code works or why a coding choice was made.
- To be asked to investigate any concerns highlighted by the reviewer.

The **reviewer** should expect:

- To ask for clarification if there is anything about the code they do not understand.
- To be corrected in a friendly, constructive manner if they have misunderstood the purpose or function of the code.
- To be updated by the coder when any concerns have been addressed.
- To be able to call on other reviewers if their expertise is needed.

#### How to ask for a code review

Typically, the tests should pass for your pull request before asking for a code review. However, in some cases, you may be asked to open a draft pull request for code review even before it is ready for merge.

To ask for a code review, post a description of the changes in the GitHub issue you are working on and list all of the related PRs. Here is an example.

> Here is the work that I've done on the new email notification. These changes add a new email template and modify the submission wizard to send the notification when it is submitted.
>
> Can someone review this?
>
> PRs:
> - http://...
> - http://...
> - http://...

Please do not try to assign a reviewer using GitHub's assign review tool. Our team will select an appropriate reviewer.

When you have updated your code in response to a code review, post another comment in the issue to let the reviewer know that you are ready for a second round of review.

#### How to make a good pull request

Remember that your pull request and code review creates work for someone else. The following will make it as easy as possible to review your code.

1. Try to keep the code changes in your pull request restricted to those required to complete the task. It is tempting to clean up type hinting, syntax or code organisation as you go. But it can be very difficult for the reviewer to look through 100 lines of code changes to find the 5 lines that fixed the bug. When possible, implement these changes in a separate PR.
2. Try to be as clear and concise as possible in your description. The reviewer may not understand the bug or feature that the pull request addresses. A clear description of the problem and the approach you took to solve it will help your reviewer give a better review. If user interactions are involved, screenshots or videos can be very helpful!
3. Make sure that your pull request is opened against the correct branch. Bug fixes are usually opened against a stable branch while new features are usually opened against the `main` branch.

## Code Style

We use automated code formatting to ensure that code follows a consistent style. Our code repositories are configured with pre-commit hooks. Every time you make a commit, your changes should be automatically formatted with [PHP CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer) (PSR-12) and [Vue CLI](https://cli.vuejs.org/).

When committing to one of the application repositories, you should see this:

```bash
$ git commit -m "pkp/pkp-lib#1234 Example commit"
husky > pre-commit (node v14.17.3)
✔ Preparing...
✔ Running tasks...
✔ Applying modifications...
✔ Cleaning up...
[main 1abc72ca2a] pkp/pkp-lib#1234 Example commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 example.php
```

When committing to [`pkp-lib`](https://github.com/pkp/pkp-lib), you should see this:

```bash
$ git commit -m "pkp/pkp-lib#1234 Example commit"
Loaded config default from ".php-cs-fixer.php".
Using cache file ".php-cs-fixer.cache".

Checked all files in 0.058 seconds, 14.000 MB memory used

✔ Files formatted successfully.

[i7191_submission_wizard ecb92171e] pkp/pkp-lib#1234 Example commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 example.php
```

When committing to the [`ui-library`](https://github.com/pkp/ui-library), you should see this:

```bash
$ git commit -m "pkp/pkp-lib#1234 Example commit"
 > running pre-commit hook: lint-staged
✔ Preparing...
✔ Running tasks...
✔ Applying modifications...
✔ Cleaning up...
[i7191_submission_wizard 8f35a50] pkp/pkp-lib#1234 Example commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 example.js
```

If these actions are not run when you make a commit, please stop and troubleshoot these tools before continuing. If you open a pull request without formatted code, you may be asked to go back and restage your work.

### PHP

In addition to the code formatter, we prefer PHP code that follows the conventions below.

#### PascalCase and camelCase

Use [PascalCase](https://techterms.com/definition/pascalcase) for class names and [camelCase](https://en.wikipedia.org/wiki/Camel_case) for function names and variables.

```php
use PKP\user\UserCache;

class UserIdentityRecord
{
    public function getUser(int $userId): User
    {
        $userCache = $this->getFromCache(UserCache::class, $userId);
        if ($userCache) {
            return $userCache;
        }

        return Repo::user()->get($userId);
    }
}
```

#### Type Hints

Use type hints.

```php
use APP\user\User;

class Example
{
    public function getUser(int $id): User
    {
        //
    }
}
```

Annotate nullable types with `?`.

```php
use APP\user\User;

class Example
{
    public function getUser(int $id): ?User
    {
        //
    }
}
```

Add a `void` return type when functions return null.

```php

class Submission
{
    public function recordDecision(): void
    {
        $this->record();
    }
}
```

Avoid [union types](https://www.geeksforgeeks.org/php-8-union-types/).

```php
use APP\user\User;

class Example
{
    public function getUser(int|string $id): User
    {
        if (is_int($id)) {
            //
        } else {
            //
        }
    }
}
```

Except when a union type uses well-defined, compatible types.

```php
use APP\decision\Accept;
use APP\decision\Decline;

class Submission
{
    public function recordDecision(Accept|Decline $decision): void
    {
        $decision->record();
    }
}
```

Consider type-hinting against an [interface](https://www.zend.com/blog/what-interface-php) when union types are necessary.

```php
namespace PKP\decision\interface;

interface AcceptOrDecline
{
    public function record(): void;
}
```

```php
namespace APP\decision;

use PKP\decision\interface\AcceptOrDecline;

class Accept implements AcceptOrDecline
{
    public function record(): void
    {
        //
    }
}
```

```php
use PKP\decision\interface\AcceptOrDecline;

class Submission
{
    public function recordDecision(AcceptOrDecline $decision): void
    {
        $decision->record();
    }
}
```

#### Docblocks

Add a docblock to every method. A good docblock will say what the method does and how it is intended to be used.

```php
class Submission
{
    /**
     * Record an editorial decision for this submission
     */
    public function recordDecision(AcceptOrDecline $decision): void
    {
        $decision->record();
    }
}
```

Don't add `@param` statements unless the type hint needs further explanation.

```php
class Submission
{
    /**
     * Record an editorial decision for this submission
     */
    public function recordDecision(AcceptOrDecline $decision): void
    {
        $decision->record();
    }

    /**
     * Get all of this submission's publications with the
     * provided status
     *
     * @param string $status One of the Submission::STATUS_ constants.
     */
    public function getPublicationsWithStatus(string $status): array
    {
        return [...];
    }
}
```

Use the `[]` syntax to type hint arrays.

```php
use APP\publication\Publication;

class Submission
{
    /**
     * Get all of this submission's publications with the
     * provided status
     *
     * @param string[] $statuses One or more of the Submission::STATUS_ constants.
     * @return Publication[]
     */
    public function getPublicationsWithStatus(array $status): array
    {
        return [...];
    }
}
```

Don't use `@copydoc` to refer to a parent method.

```php
namespace PKP\submission;

use APP\publication\Publication;

class Submission
{
    /**
     * Get the current publication
     */
    public function getCurrentPublication(): ?Publication
    {
        //
    }
}
```

```php
namespace APP\submission;

use APP\publication\Publication;
use PKP\submission\Submission as BaseSubmission;

class Submission extends BaseSubmission;
{
    public function getCurrentPublication(): ?Publication
    {
        return parent::getCurrentPublication();
    }
}
```

Don't use inline comments to explain how a method works.

```php
use APP\submission\Submission;

class DOIRepository
{
    /**
     * Get the DOI pattern for a submission
     */
    public function getSubmissionDoiPattern(Submission $submission): void
    {
        $doiPattern = $this->getDoiPattern();

        // Add the issue ID to the DOI pattern if
        // the submission is assigned to an issue
        if ($submission->getData('issueId')) {
            $doiPattern = str_replace(
                $doiPattern,
                '%i',
                $submission->getData('issueId')
            );
        }

        return $doiPattern
    }
}
```

Move inline comments that explain the method to the docblock.

```php
use APP\submission\Submission;

class DOIRepository
{
    /**
     * Get the DOI pattern for a submission
     *
     * If a submission is not assigned to an issue, any
     * DOI pattern containing %i will not be converted.
     */
    public function getSubmissionDoiPattern(Submission $submission): void
    {
        $doiPattern = $this->getDoiPattern();

        if ($submission->getData('issueId')) {
            $doiPattern = str_replace(
                $doiPattern,
                '%i',
                $submission->getData('issueId')
            );
        }

        return $doiPattern
    }
}
```

#### Constants

Avoid using numbers or strings to represent states or properties.

```php
// AVOID
if ($status === 'published') {
    //
} elseif ($status === 'scheduled') {
    //
} else {
    //
}
```

Use constants instead.

```php
class STATUS
{
    const PUBLISHED = 'published';
    const SCHEDULED = 'scheduled';
    const QUEUED = 'queued';
}
```

```php
if ($status === STATUS::PUBLISHED) {
    //
} elseif ($status === STATUS::SCHEDULED) {
    //
} else {
    //
}
```

#### Flatten Conditional Blocks

Avoid deeply nested conditional blocks.

```php
// AVOID
function show($status, $active, $item) {
    if ($status === Status::PUBLISHED) {
        if ($active) {
            $item->show();
        } else {
            $item->showPreview();
        }
    } else {
        $page->hidden();
    }
}
```

Return early to "flatten" the logic.

```php
function show($status, $active, $item) {
    if ($status !=== STATUS::PUBLISHED) {
        $page->hidden();
        return;
    }
    if ($active) {
        $item->show();
        return;
    }
    $item->showPreview();
}
```

#### Variable Assignment

Avoid nested conditional blocks when assigning or returning values.

```php
// AVOID
function getStatus($object): ?int
{
    if ($object->isA()) {
        return $a;
    } else {
        return $b;
    }
}
```

Use terniary operators when a variable is being assigned or returned.

```php
function getStatus($object): ?int
{
    return $object->isA()
        ? $a
        : $b;
}
```

Use your judgement when working with complex conditions. Sometimes a conditional block is ok.

```php
// This would be confusing if it only
// used terniary operators.
function getStatus($object): ?int
{
    if ($object->isA() && $object->otherCondition()) {
        return $object->hasC()
            ? $a
            : $b;
    } elseif ($d === $e) {
        return $f;
    }
    return $g;
}
```

### Vue/JavaScript

Our [UI Library](/dev/ui-library/dev) uses [Vue](https://vuejs.org/), a component-based JavaScript framework. When receiving contributions to the UI Library, we prefer code that follows the conventions below.

#### Follow the Guidance

The [UI Library](/dev/ui-library/dev) is also a usage guide. Before writing code for the UI Library, please read about accessibility, learn about the utilities, and read the guidance for the components you want to use.

Always try to use a component in the way that it was intended.

#### Props

Declare the type of a component's props.

```js
export default {
    props: {
        currentPage: {
            type: Number,
            required: true
        },
        isLoading: {
            type: Boolean,
            default: false
        },
        lastPage: {
            type: Number,
            required: true
        }
    }
}
```

List props, computed properties, and methods in alphabetical order.

```js
export default {
    props: {
        ant: {
            type: Number,
            required: true
        },
        beetle: {
            type: Boolean,
            default: false
        },
        cat: {
            type: Number,
            required: true
        }
    },
    computed: {
        blue() {
            return '';
        },
        red() {
            return '';
        }
        yellow() {
            return '';
        }
    },
    methods: {
        arm() {
            return '';
        },
        head() {
            return '';
        }
        leg() {
            return '';
        }
    }
}
```

#### Computed Properties

Use computed properties instead of methods when you need to get information from a bigger set of data.

```
{% raw %}<template>
    <div>
        Don't do this: {{ getVersionCount(submission) }}
        Do this: {{ versionCount }}
    </div>
</template>{% endraw %}
```

```js
export default {
    props: {
        submission: {
            type: Object,
            required: true
        }
    },
    computed: {
        versionCount() {
            return this
                .submission
                .publications
                .length;
        }
    },
    methods: {
        getVersionCount(submission) {
            return submission
                .publications
                .length;
        }
    }
}
```

#### Debounce

User input events, such as dragging or typing, may fire hundreds of times in a second. Debounce code that fires in response to user events to prevent browser lag.

```html
<template>
    <input type="text" @change="inputChanged">
</template>
```

```js
import debounce from 'debounce';

export default {
    methods: {
        inputChanged: debounce(function(value) {
            this.$emit('search', value);
        }, 250)
    }
}
```

## Documentation

You may be asked to update documentation when you make a code contribution. Contributions may effect documentation in the following ways.

### User Guides

When your changes effect what a user sees or how a user completes a task, please tell your code reviewer. They will notify the documentation interest group.

For example, if you change the reviewer selection list, the screenshots and text in the Learning OJS guide may need to change.

### Release Notebook

When your change effects the way that a system administrator or coder interacts with the software, please file an issue in our [documentation repository](https://github.com/pkp/pkp-docs/issues) so that we know to include details about this in the release notebook for the next major version. The issue title should follow this format:

> Release Notebook &lt;version&gt;: &lt;subject&gt;

Contributions that should be included in our release notebook include changes to:

- the config file
- hooks or events
- the system requirements
- the plugin API, the theme API, or theme templates
- application classes and methods that are likely to be used by third-party developers, such as stats service classes and repository methods
- the REST API

### REST API

Every change to the REST API must be documented in the [OpenAPI v3](https://github.com/pkp/pkp-docs#generate-rest-api-references) specification file. After changing the specification, write a short summary of the change into the [description](https://github.com/pkp/ojs/blob/faafccca8dffa0db9bba84164330810e5206571b/docs/dev/swagger-source.json#L6) of the file.

Don't forget to [validate the JSON file](https://jsonlint.com/) and [generate the REST API documentation](https://github.com/pkp/pkp-docs#generate-rest-api-references) to test your changes.

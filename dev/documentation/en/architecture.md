---
book: dev-documentation
version: 3.4
title: Architecture - Technical Documentation - OJS|OMP|OPS
---

# Architecture

The chapters in this section each describe a part of the application architecture. Together they provide an overview of how requests to the application are authorized, how data is saved and retrieved from the database, and how responses are returned.

Some of the code in OJS, OMP and OPS is more than ten years old. You may find code that does not conform to the coding conventions described in this document. However, all new code contributions should follow the conventions in this guide.

## Modules

Each application includes modules in three locations.

```
ojs
│
├─┬ lib
│ ├── pkp           # The base library which
│ │                 # powers all of our applications
│ │
│ └── ui-library    # The UI component library used
│                   # for the editorial backend.
│
└── plugins         # Official and third-party plugins
```

A class will often extend a class in the [base library](https://github.com/pkp/pkp-lib/). For example, in OJS we use the `Submission` class which extends the `PKPSubmission` class.

```php
use PKP\submission\PKPSubmission;

class Submission extends PKPSubmission {
  ...
}
```

Both the application and the base library share a similar file structure.

```
ojs
│
├─┬ classes
│ └─┬ submission
│   └── Submission.php
│
└─┬ lib
  └─┬ pkp
    └─┬ classes
      └─┬ submission
        └── PKPSubmission.php
```

The same approach is used in OMP and OPS.

## Contexts

We use the term `Context` to describe a journal in OJS, a press in OMP, and a preprint server in OPS. To reuse code across all applications, we often refer to the context.

```php
use APP\core\Application;

$context = Application::get()->getRequest()->getContext();
```

This always refers to the `Journal`, `Press`, or `Server` object. It is identical to the following code.

```php
use APP\core\Application;

$journal = Application::get()->getRequest()->getJournal();
```

A single instance of OJS, OMP, or OPS can run many journals, presses or preprint servers. It is important to restrict requests for submissions, users and other objects by the context.

```php
use APP\core\Application;
use APP\facades\Repo;

$context = Application::get()->getRequest()->getContext();
$submissions = Repo::submission()
  ->getCollector()
  ->filterByContextIds([$context->getId()])
  ->getMany();
```

Failure to pass a context or context id to many methods will return objects for all contexts.

---

Usually, the context is taken from the `Request` object. Learn more about the [Request Lifecycle](./architecture-request).
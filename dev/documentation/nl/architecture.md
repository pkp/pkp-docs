---
title: Architecture - Technical Documentation - OJS|OMP|OPS
---

# Architecture

The chapters in this section each describe a part of the application architecture. Together they provide an overview of how requests to the application are authorized, how data is saved and retrieved from the database, and how responses are returned.

These chapters provide an introduction to how the application works. You may need to read the code to learn more about each component. But after reading these chapters you should have an idea of where to look.

> Some of the code in OJS and OMP is more than ten years old. You may find parts of the application code that do not conform to coding conventions in this document. This guide describes the architecture which all new contributions should follow. 
> 
> {:.notice}

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

A class in OJS or OMP will often extend a class in the [base library](https://github.com/pkp/pkp-lib/). For example, in OJS we use the `Submission` class which extends the `PKPSubmission` class.

```php
import('lib.pkp.classes.submission.PKPSubmission');
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
│   └── Submission.inc.php
│
└─┬ lib
  └─┬ pkp
    └─┬ classes
      └─┬ submission
        └── PKPSubmission.inc.php
```

The same approach is used in OMP.

## Contexts

We use the term `Context` to describe a `Journal` (OJS) or `Press` (OMP). To reuse code across both applications, you will often see code that refers to the context.

```php
$context = $request->getContext();
```

This always refers to the `Journal` (OJS) or `Press` (OMP) object. It is identical to the following code.

```php
$journal = $request->getJournal();
```

A single instance of OJS can run many journals. It is important to restrict requests for submissions, users and other objects in the system by the context.

```php
$submissions = Services::get('submission')->getMany([
  'contextId' => $request->getContext()->getId(),
]);
```

Failure to pass a context or context id to many methods will return objects for all contexts.

---

Usually, the context is taken from the `Request` object. Learn more about the [Request Lifecycle](./architecture-request).
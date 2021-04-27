---
title: Example - Get Data - Plugin Guide for OJS and OMP
---

# Get Data

Your plugin may need to get data from the application, such as submissions, issues, authors, users and files. Use the [Service classes](/dev/documentation/en/architecture-services) to retrieve information.

```php
$submissions = Services::get('submissions')->getMany([
  'contextId' => $context->getId(),
  'count' => 20,
  'assignedTo' =>  Application::get()->getUser()->getId(),
]);
```

If a Service class does not exist for the data you want, you may need to use a [DAO](/dev/documentation/en/architecture-database).

```php
$authorDao = DAORegistry::getDAO('AuthorDAO');
$authors = $authorDao->getBySubmissionId($submissionId);
```

Learn more about [Services](/dev/documentation/en/architecture-services), [Entities](/dev/documentation/en/architecture-entities) and [DAOs](/dev/documentation/en/architecture-database) in our [developer documentation](/dev/documentation/en).

---

View more [examples](./examples).

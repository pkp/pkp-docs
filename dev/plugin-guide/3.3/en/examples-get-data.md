---
title: Example - Get Data - Plugin Guide for OJS and OMP
book: dev-plugin-guide
version: 3.3
---

# Get Data

Your plugin may need to get data from the application, such as submissions, issues, authors, users and files. Use the [Repo facade](/dev/documentation/en/architecture-repositories) and [Collector](/dev/documentation/en/architecture-repositories#collector) to retrieve information.

```php
$currentUser = Application::get()->getUser();

$submissions = Repo::submission()
  ->getCollector()
  ->filterByContexts([$context->getId()])
  ->assignedTo([$currentUser->getId()])
  ->limit(20)
  ->getMany();
```

If a `Repository` does not exist for the data you want, you may need to use the [DAO](/dev/documentation/en/architecture-daos).

```php
$authorDao = DAORegistry::getDAO('AuthorDAO');
$authors = $authorDao->getBySubmissionId($submissionId);
```

Learn more about [Repositories](/dev/documentation/en/architecture-repositories), [Entities](/dev/documentation/en/architecture-entities) and [DAOs](/dev/documentation/en/architecture-daos) in our [developer documentation](/dev/documentation/en).

---

View more [examples](./examples).

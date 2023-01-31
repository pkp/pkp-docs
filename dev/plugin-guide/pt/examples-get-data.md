---
title: Example - Get Data - Plugin Guide for OJS and OMP
---

# Obter dados

Seu plugin pode precisar obter dados da aplicação, como submissões, edições, autores, usuários e arquivos. Use a [Repo facade](/dev/documentation/en/architecture-repositories) e o [Collector"](/dev/documentation/en/architecture-daos#collector) para recuperar informações.

```php
$currentUser = Application::get()->getUser();

$collector = Repo::submission()
  ->getCollector()
  ->filterByContexts([$context->getId()])
  ->assignedTo([$currentUser->getId()])
  ->limit(20);

$submissions = Repo::submissions()->getMany($collector);
```

Se um `Repositório` não existir para os dados desejados, talvez seja necessário usar o [DAO](/dev/documentation/en/architecture-daos).

```php
$authorDao = DAORegistry::getDAO('AuthorDAO');
$authors = $authorDao->getBySubmissionId($submissionId);
```

Saiba mais sobre [Repositórios](/dev/documentation/en/architecture-repositories), [Entidades](/dev/documentation/en/architecture-entities) e [DAOs](/dev/documentation/en/architecture-daos) em nossa [documentação do desenvolvedor](/dev/documentation/en).

---

Veja mais [exemplos](./examples).

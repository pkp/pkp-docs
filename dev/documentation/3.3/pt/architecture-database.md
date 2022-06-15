---
book: dev-documentation
version: 3.3
title: Banco de Dados - Documentação Técnica - OJS|OMP|OPS 3.3
---

# Banco de Dados

Um Database Access Object (`DAO`) é responsável por executar consultas de banco de dados para ler e gravar informações do banco de dados.

> Os aplicações PKP suportam MySQL e PostgreSQL. 
> 
> {:.notice}

## DAOs

Cada `DAO` é emparelhado com uma [Entidade](./architecture-entities) e converte dados entre as [ da entidade Classe `DataObject`](architecture-entities#dataobject-class) e tabelas no banco de dados.

O `DAORegistry` contém uma instância de cada `DAO` na aplicação.

```php
$authorDao = DAORegistry::getDAO('AuthorDAO');
```

Quando um DAO tem um nome diferente em OJS e OMP, você pode recuperá-lo por meio do `Application`.

```php
// Obtém um `JournalDAO` ou `PressDAO`
$contextDao = Application::get()->getContextDAO();

// Obtém um`ArticleGalleyDAO` ou `PublicationFormatDAO`
$representationDao = Application::get()->getRepresentationDAO();

// Obtém um `SectionDAO` ou `SeriesDAO`
$sectionDao = Application::get()->getSectionDAO();
```

## Obter Registros

Use o método `retrieve()` para obter algo do banco de dados.

```php
$reviewRoundDao = DAORegistry::getDAO('ReviewRoundDAO');
$result = $reviewRoundDao->retrieve(
  'SELECT * FROM review_rounds WHERE review_round_id = ?',
  [$reviewRoundId]
);
if ($result->RecordCount()) {
  $tableRow = $result->GetRowAssoc(false);
}
```

`DAO`s possuem um método `_fromRow()` para converter uma linha retornada na classe `DataObject`.

```php
$reviewRoundDao = DAORegistry::getDAO('ReviewRoundDAO');
$result = $reviewRoundDao->retrieve(
  'SELECT * FROM review_rounds WHERE review_round_id = ?',
  [$reviewRoundId]
);
if ($result->RecordCount()) {
  $reviewRound = $reviewRoundDao->_fromRow($result->GetRowAssoc(false));
}
```

A maioria dos `DAO`s tem um método auxiliar para obter um `DataObject` por ID.

```php
$reviewRound = DAORegistry::getDAO('ReviewRoundDAO')->getById($reviewRoundId);
```

Use o método `retrieveRange()` para obter um conjunto de linhas do banco de dados.

```php
$reviewRoundDao = DAORegistry::getDAO('ReviewRoundDAO');
$result = $reviewRoundDao->retrieveRange(
  'SELECT * FROM queries',
  [],
  new DBRange($count, $pageNumber)
);
$resultFactory = new DAOResultFactory($result, $reviewRoundDao, '_fromRow');
```

Itere sobre um `DAOResultFactory` para acessar cada resultado no conjunto.

```php
while ($reviewRound = $resultFactory->next()) {
  echo 'Review Round: ' . $reviewRound->getData('round');
}
```

Ou converta o `DAOResultFactory` em uma matriz de objetos.

```php
$reviewRounds = $resultFactory->toArray();
```

Para consultas complexas, use o [QueryBuilder](#querybuilder).

## Inserir e Atualizar Registros

Use o método `update()` para inserir ou atualizar registros.

```php
// Fecha todas as consultas para uma submissão específico
$queryDao = DAORegistry::getDAO('QueryDAO');
$queryDao->update(
  'UPDATE queries
    SET closed = 1
    WHERE assoc_type = ?
      AND assoc_id = ?',
  [
    ASSOC_TYPE_SUBMISSION,
    $submissionId,
  ]
);
```

A maioria dos `DAO`s inclui métodos auxiliares para inserir, atualizar ou excluir registros quando passados por um `DataObject`.

```php
$reviewRoundDao->insertObject($reviewRound);
$reviewRoundDao->updateObject($reviewRound);
$reviewRoundDao->deleteObject($reviewRound);
```

Você também pode excluir registros por ID de um objeto.

```php
$reviewRoundDao->deleteById((int) $reviewRoundId);
```

## QueryBuilder

Um query builder deve ser usado para construir consultas complexas. Os query builders estendem o [Query builder do Laravel](https://laravel.com/docs/5.5/queries) e fornecem uma API expressiva para buscar registros de um [Entidade](./architecture-entities).

Por exemplo, o `SubmissionQueryBuilder` pode ser usado para recuperar submissões com base em vários parâmetros de filtro.

```php
$qb = new \APP\Services\QueryBuilders\SubmissionQueryBuilder;
$qb->filterByContext($contextId)
  ->assignedTo($userId)
  ->orderBy('title');
```

Uma vez configurado, use o query builder para gerar a query string e as ligações de parâmetro a serem passadas para um `DAO`.

```php
$qo = $qb->getQuery();
$submissionDao = DAORegistry::getDAO('SubmissionDAO');
$result = $submissionDao->retrieve($qo->toSql(), $qo->getBindings());
```

Use o método `getCount()` para obter uma contagem de linhas correspondentes.

```php
$count = $qb->assignedTo($userId)->getCount();
```

Use o método `getIds()` para obter uma matriz de ids de objeto.

```php
$assignedIds = $qb->assignedTo($userId)->getIds();
```

Na maioria dos casos, um `QueryBuilder` ajudará a preencher os `EntityReadInterface` [métodos](architecture-services#entityreadinterface) correspondentes da classe Service.

Um `QueryBuilder` também pode ser usado com os [métodos de consulta](https://laravel.com/docs/5.5/queries) do Laravel.

```php
$qb = new \APP\Services\QueryBuilders\UserQueryBuilder();
$qb->filterByContext($contextId);

// Recebe todos os e-mails correspondentes
$emails = $qb->getQuery()->pluck('u.email');

// Obtém o primeiro resultado correspondente
$user = $qb->getQuery()->first();

// Obtém o último usuário cadastrado
$user = $qb->getQuery()->max('u.date_registered');
```

## SchemaDAOs

Se uma entidade for definida usando um [esquema](./architecture-entities#schemas), seu `DAO` deve estender a classe `SchemaDAO`. O `SchemaDAO` implementa o `insertObject()`, `updateObject()`, `deleteObject()` e `_fromRow()` métodos baseados no esquema.

## Diretrizes de Uso

Um `DAO` pode implementar métodos adicionais para realizar atualizações em massa ou minimizar consultas SQL intensivas. Por exemplo, o seguinte removerá todos os DOIs de todos as edições.

```php
DAORegistry::getDAO('IssueDAO')->deleteAllPubIds($contextId, 'doi');
```

Um método `DAO` como este deve ser encapsulado por um método [Service](./architecture-services) que executa a ação para que notificações possam ser enviadas, hooks possam ser chamados, e tarefas relacionadas podem ser executadas.

Ao decidir se deve ou não escrever tal método, considere os benefícios de desempenho de seu método `DAO` personalizado em relação às seguintes desvantagens:

- Não acionará os hooks que normalmente são acionados quando uma entidade é lida, adicionada ou atualizada. Os desenvolvedores de plugins são deixados "fora do circuito"
- Terá de ser mantido de forma independente. Os métodos de banco de dados de leitura, gravação e exclusão mais comuns provavelmente serão testados com mais regularidade.
- Terá que ser sincronizado manualmente com as alterações nos arquivos de esquema da entidade.

## Estrutura da tabela

A maioria das [entidades](./architecture-entities) na aplicação são representadas no banco de dados por duas tabelas. Por exemplo, a tabela `journals` contém uma linha para cada revista.

```
mysql> describe journals;
+----------------+-------------+------+-----+---------+----------------+
| Field          | Type        | Null | Key | Default | Extra          |
+----------------+-------------+------+-----+---------+----------------+
| journal_id     | bigint(20)  | NO   | PRI | NULL    | auto_increment |
| path           | varchar(32) | NO   | UNI | NULL    |                |
| seq            | double      | NO   |     | 0       |                |
| primary_locale | varchar(14) | NO   |     | NULL    |                |
| enabled        | tinyint(4)  | NO   |     | 1       |                |
+----------------+-------------+------+-----+---------+----------------+

```

Todos os dados adicionais, incluindo dados multilíngues, são armazenados na tabela `journal_settings`.

```
mysql> describe journal_settings;
+---------------+--------------+------+-----+---------+-------+
| Field         | Type         | Null | Key | Default | Extra |
+---------------+--------------+------+-----+---------+-------+
| journal_id    | bigint(20)   | NO   | PRI | NULL    |       |
| locale        | varchar(14)  | NO   | PRI |         |       |
| setting_name  | varchar(255) | NO   | PRI | NULL    |       |
| setting_value | text         | YES  |     | NULL    |       |
+---------------+--------------+------+-----+---------+-------+
```

Por exemplo, o nome de um periódico que aparece em inglês e portguês brasileiro é armazenado em duas linhas na tabela `journal_settings`.

```
mysql> select * from journal_settings where setting_name="name";
+------------+--------+--------------+--------------------------------------+
| journal_id | locale | setting_name | setting_value                        |
+------------+--------+--------------+--------------------------------------+
|          1 | en_US  | name         | Journal of Public Knowledge          |
|          1 | pt_BR  | name         | Revista do Conhecimento Público      |
+------------+--------+--------------+--------------------------------------+
```

As propriedades no [esquema](./architecture-entities#schemas) de uma entidade que são uma matriz ou objeto são serializadas quando são armazenadas na tabela de configurações.

```
mysql> select * from journal_settings where setting_name="supportedLocales";
+------------+--------+------------------+------------------------+
| journal_id | locale | setting_name     | setting_value          |
+------------+--------+------------------+------------------------+
|          1 |        | supportedLocales | a:1:{i:1;s:5:"en_US";} |
+------------+--------+------------------+------------------------+
```

Os dados serializados não podem ser pesquisados com eficiência, portanto, nunca devem incluir dados que você deseja consultar.

---

Saiba mais sobre o [Sistema de Plugins](./architecture-plugins).

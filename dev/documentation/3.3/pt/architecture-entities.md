---
book: dev-documentation
version: 3.3
title: Entidades - Documentação Técnica - OJS|OMP|OPS 3.3
---

# Entidades

Uma entidade é qualquer tipo de objeto na aplicação, como uma submissão, atribuição de avaliação, discussão ou arquivo.

Cada entidade é descrita em um arquivo de esquema e é representada na aplicação com a seguinte:

- Um `DataObject` [class](#dataobject-class) para instanciar objetos dessa entidade.
- Um [Service](./architecture-services), como `SubmissionService`, para obter, validar, adicionar, editar e excluir esses objetos.
- Um [Data Access Object](#schemadao), como `SubmissionDAO`, para comunicação entre os objetos e o banco de dados.
- Um [esquema](#schemas) json que define as propriedades, padrões e regras de validação para esses objetos.
- Um [APIHandler](./architecture-handlers), como `SubmissionHandler`, que serve um endpoint da REST API para esses objetos.

## Classe DataObject

Uma classe `DataObject` oferece uma API simples para obter e definir dados para um objeto.

> **Dica:** `DataObject`s desempenham a função de `Model`s na arquitetura de aplicativo MVC (Model-View-Controller). 
> 
> {:.tip}

Crie um novo objeto.

```php
import('classes.journal.Journal');
$journal = new Journal();
```

Definir dados em um objeto.

```php
$journal->setData('enabled', true);
```

Obter dados de um objeto.

```php
$isEnabled = $journal->getData('enabled');
```

Alguns dados são multilíngues e armazenam valores para cada localidade. Passe um código de localidade para obter um valor do idioma correspondente.

```php
$name = $journal->getLocalizedData('name', 'pt_BR');
```

Ao omitir o parâmetro de localidade, ele retornará o valor da localidade atualmente ativa ou retornará à localidade primária da revista.

```php
$name = $journal->getLocalizedData('name');
```

> O objeto `Submission` funciona de forma diferente. Ele retornará à localidade da submissão, não à localidade principal do periódico. 
> 
> {:.notice}

Defina dados localizados passando todas as localidades de uma vez.

```php
$name = $journal->setData('name', [
    'en_US' => 'Journal of Public Knowledge',
    'pt_BR' => 'Revista do Conhecimento Público',
  ]);
```

Ou especifique um código de localidade ao definir os dados.

```php
$name = $journal->setData('name', 'Journal of Public Knowledge', 'en_US');
```

### Helpers

Uma classe `DataObject` pode conter métodos helpers adicionais para compilar ou formatar os dados solicitados. Por exemplo, uma classe `Issue` fornece um método que retornará uma string com o volume, número, ano e título.

```php
$issue->setData('volume', 3);
$issue->setData('number', 2);
$issue->setData('year', 1983);
$issue->setData('title', 'Special Issue on Microorganisms', 'en_US');

echo $issue->getIssueIdentification();
// Vol 3 No 2 (1983) Special Issue on Microorganisms
```

### Não acesse o banco de dados

Uma classe `DataObject` nunca deve acessar o banco de dados diretamente. Se um método helper requer outro objeto, ele deve ser passado como parâmetro para o método.

## Esquemas

As entidades são definidas usando uma versão estendida de [json-schema](http://json-schema.org/), uma sintaxe JSON para documentar as propriedades de um objeto.

Um esquema simples com duas propriedades, `id` e `title`, ficaria assim.

```json
{
  "title": "ExampleObject",
  "description": "Um objeto de exemplo demonstrando um esquema.",
  "properties": {
    "id": {
      "type": "integer",
      "readOnly": true
    },
    "title": {
      "type": "string"
    }
  }
}
```

A sintaxe do esquema json está documentada [nestes exemplos](http://json-schema.org/learn/getting-started-step-by-step.html).

> **Dica:** JSON é uma sintaxe mais rígida que JavaScript. Use [JSONLint](https://jsonlint.com/) para identificar erros em seu esquema. 
> 
> {:.tip}

### Extensões de esquema

A seção abaixo documenta como modificamos ou estendemos a sintaxe json-schema para atender às nossas necessidades.

#### Formatos de data e hora

We do not use json-schema's `date` and `date-time` formats. Instead, we use `date-iso` (`YYYY-MM-DD`) and `date-time-iso` (`YYYY-MM-DD HH:MM:SS`) to more strictly match our own date/time handling.

#### readOnly

Assign this attribute to properties that can not be edited, such as object IDs and URLs.

#### writeOnly

Assign this attribute to properties that are used when adding or editing an object but will not be returned when requesting the object.

An example of this attribute is the `temporaryFileId` that is used to save a file but then discarded.

#### apiSummary

Assign this attribute to properties that you want to appear in summary views of the object. The summary view is usually used in endpoints that return a list of objects.

#### defaultLocaleKey

Assign this attribute when the property's default value must be localized. The value should match a locale key.

#### validation

Assign this attribute to properties that should be validated before being saved to the database. We do not support json-schema's standard validation rules. See [Validation](./utilities-validation).

#### multilingual

Assign this property to data that can be in more than one locale.

```json
{
  ...
  "properties": {
    "about": {
      "type": "string",
      "multilingual": true
    }
  }
}
```

The application will expect to interact with this property as though it were a locale object.

```json
{
  "en_US": "About the journal...",
  "fr_CA": "A propos du journal ..."
}
```

Any validation rules will be applied to each locale value in the set.

> Data described as an object in json-schema is expected to be an associative array in PHP. 
> 
> {:.warning}

### App properties

When a property should be added to an entity in one application but not another, use two schema files with the same name.

`lib/pkp/schemas/context.json`

```json
{
    "title": "Context",
    "description": "A journal or press.",
    "type": "object",
    "properties": {
        "about": {
            "type": "string",
            "multilingual": true
    }
  }
}
```

`schemas/context.json`

```json
{
    "title": "Journal",
    "description": "A journal.",
    "properties": {
        "abbreviation": {
            "type": "string",
            "multilingual": true
    }
  }
}
```

These schema files will be merged to produce a combined schema. When identical properties exist, the application's schema will override the library's schema.

## SchemaDAO

When an entity has a schema, it's [DAO](./architecture-database) should extend the `SchemaDAO` class. This class will use the schema file to ensure that data being read from and written to the database conforms to the schema.

## API Documentation

The schema files are used to generate the [API documentation](/dev/api).

## Extending Schemas

Hooks can be used to add, edit or remove properties of an entity.

Add an `institutionalHome` property to the `Context` entity.

```php
HookRegistry::register('Schema::get::context', function($hookName, $args) {
    $schema = $args[0];
    $schema->properties->institutionalHome = (object) [
        'type' => 'string',
        'apiSummary' => true,
        'multilingual' => true,
        'validation' => ['nullable']
    ];

    return false;
});
```

Require a journal acronym to be 3 characters or less.

```php
HookRegistry::register('Schema::get::context', function($hookName, $args) {
    $schema = $args[0];
  if (!property_exists($schema->properties, 'acronym')) {
    return;
  }
    $schema->properties->acronym->validation = ['max:3'];

    return false;
});
```

If your code will be included in the application, it is better to add the property directly to the schema.

---

Learn more about [how entities are stored in the database](./architecture-database).
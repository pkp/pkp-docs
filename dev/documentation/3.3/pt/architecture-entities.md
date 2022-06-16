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

Não usamos os formatos `date` e `date-time` do json-schema. Em vez disso, usamos `date-iso` (`YYYY-MM-DD`) e `date-time-iso` (`YYYY-MM-DD HH:MM:SS`) para corresponder mais estritamente ao nosso próprio tratamento de data/hora.

#### readOnly

Atribua esse atributo a propriedades que não podem ser editadas, como IDs de objetos e URLs.

#### writeOnly

Atribua esse atributo a propriedades que são usadas ao adicionar ou editar um objeto, mas não serão retornadas ao solicitar o objeto.

Um exemplo desse atributo é o `temporaryFileId` que é usado para salvar um arquivo, mas depois descartado.

#### apiSummary

Atribua este atributo às propriedades que você deseja que apareçam nas visualizações de resumo do objeto. A visualização de resumo geralmente é usada em endpoints que retornam uma lista de objetos.

#### defaultLocaleKey

Atribua este atributo quando o valor padrão da propriedade deve ser ter o idioma. O valor deve corresponder a uma chave de idioma.

#### validation

Atribua este atributo às propriedades que devem ser validadas antes de serem salvas no banco de dados. Não oferecemos suporte às regras de validação padrão do json-schema. Consulte [Validação](./utilities-validation).

#### multilingual

Atribua essa propriedade a dados que podem estar em mais de um idioma.

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

A aplicação espera interagir com essa propriedade como se fosse um objeto de idioma.

```json
{
  "en_US": "About the journal...",
  "pt_BR": "Sobre o periódico ..."
}
```

Quaisquer regras de validação serão aplicadas a cada valor de idioma no conjunto.

> Espera-se que os dados descritos como um objeto em json-schema sejam uma matriz associativa em PHP. 
> 
> {:.warning}

### Propriedades da aplicação

Quando uma propriedade deve ser adicionada a uma entidade em uma aplicação, mas não em outra, use dois arquivos de esquema com o mesmo nome.

`lib/pkp/schemas/context.json`

```json
{
    "title": "Context",
    "description": "Um periódico ou editora.",
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
    "description": "Um periódico.",
    "properties": {
        "abbreviation": {
            "type": "string",
            "multilingual": true
    }
  }
}
```

Esses arquivos de esquema serão mesclados para produzir um esquema combinado. Quando existirem propriedades idênticas, o esquema da aplicação substituirá o esquema da biblioteca.

## SchemaDAO

Quando uma entidade tem um esquema, seu [DAO](./architecture-database) deve estender a classe `SchemaDAO`. Essa classe usará o arquivo de esquema para garantir que os dados lidos e gravados no banco de dados estejam em conformidade com o esquema.

## Documentação da API

Os arquivos de esquema são usados para gerar a [documentação da API](/dev/api).

## Estendendo Esquemas

Hooks podem ser usados para adicionar, editar ou remover propriedades de uma entidade.

Adicione uma propriedade `institutionalHome` à entidade `Context`.

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

Exija que uma abreviação da revista tenha 3 caracteres ou menos.

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

Se seu código for incluído na aplicação, é melhor adicionar a propriedade diretamente ao esquema.

---

Saiba mais sobre [como as entidades são armazenadas no banco de dados](./architecture-database).
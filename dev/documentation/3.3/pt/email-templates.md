---
book: dev-documentation
version: 3.3
title: Modelos de Email - Documentação Técnica - OJS|OMP|OPS 3.3
---

# Modelos de e-mail

Os modelos de e-mail combinam dados personalizados e editáveis com padrões fixos. Por esse motivo, o comportamento do `EmailTemplateService` difere de outras classes entity service. Esta seção descreve algumas das diferenças.

## Use chaves em vez de ids

Os modelos de e-mail padrão não têm Ids. Em vez disso, obtenha um modelo de email por sua chave.

```php
$emailTemplate = Services::get('emailTemplate')->getByKey($contextId, $key);
```

## Modelos padrão e personalizados

Os modelos padrão são instalados quando a aplicação é criada ou uma nova localidade é adicionada. Esses modelos são usados durante o fluxo de trabalho e outros eventos planejados na aplicação.

Os modelos padrão não podem ser excluídos, mas alguns deles podem ser editados ou desativados. Verifique as propriedades `canEdit` e `canDisable`.

Os modelos personalizados são criados pelo usuário final. Eles não são usados automaticamente pela aplicação. Eles podem ser excluídos.

## Dados do modelo padrão

Os modelos padrão incluem dados que não podem ser editados e não estão disponíveis para modelos personalizados. Essas propriedades incluem `canDisable`, `canEdit`, `fromRoleId` e `toRoleId`.

Quando esses dados não estiverem disponíveis, os valores serão retornados como `null`.

## Dados do modelo personalizado

Os modelos personalizados podem ser diferenciados dos modelos padrão pela propriedade `id`. A propriedade `id` será `null` para todos os outros modelos.

## Excluir e redefinir modelos

Um modelo de email personalizado pode ser excluído usando o método `delete` da classe service.

```
Services::get('emailTemplate')->delete($emailTemplate);
```

Quando um modelo padrão é excluído dessa forma, apenas as modificações personalizadas serão excluídas. Os dados padrão serão mantidos. Desta forma, o método `delete` irá "redefinir" um template padrão.

## Habilitado por padrão

Os modelos de email são considerados `enabled` mesmo se a propriedade for `NULL` no banco de dados. Qualquer código que pesquise o banco de dados nessa coluna deve tratar os valores `NULL` como `true`.

Ao trabalhar com um objeto `EmailTemplate`, você deve ter dados precisos porque a propriedade é transformada em `true`/`false` quando é recuperada do banco de dados.

## Todos os idiomas obrigatórios

Como os modelos de e-mail podem ser usados com a localidade atual de qualquer usuário, todos os idiomas são necessários para os campos `subject` e `body`. Um modelo de email não pode ser adicionado sem entradas para todas as localidades ativas na interface do usuário de contexto.
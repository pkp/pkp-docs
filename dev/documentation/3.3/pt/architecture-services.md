---
book: dev-documentation
version: 3.3
title: Services - Documentação Técnica - OJS|OMP|OPS 3.3
---

# Services

Uma classe `Service` é um contêiner para armazenar métodos reutilizáveis. Ele coordena [Entities](./architecture-entities), [`DAO`s](./architecture-database) e outros utilitários para ler e escrever a partir do banco de dados, enviar e-mails e disparar eventos.

As classes Service isolam a lógica de negócios das ações realizadas na aplicações dos handlers que recebem e respondem à solicitação. Deve ser possível usar um método da classe service de um `PageHandler`, `APIHandler` ou até mesmo um comando CLI.

> Os Services são novos para a aplicação e ainda não estão disponíveis para todas as entities. Leia sobre a [estratégia de refatoração](#refactor-strategy). 
> 
> {:.notice}

## Usando um Service

Um service pode ser recuperado de qualquer lugar na aplicação.

```php
$contextService = Services::get('context');
```

Os services disponíveis podem ser encontrados em `OJSServiceProvider` e `OMPServiceProvider`.

## Entity Services

Uma classe `Service` geralmente é emparelhada com uma [Entity](./architecture-entities) e fornece todos os métodos para obter, adicionar, editar e excluir essa Entity.

Cada classe entity service implementará uma ou mais interfaces que determinam quais métodos estão disponíveis.

### EntityReadInterface

A `EntityReadInterface` fornece o método `get()` para obter um objeto.

```php
$context = Services::get('context')->get($contextId);
```

Ele também fornece vários métodos que podem ser usados para recuperar resultados filtrados por um ou mais parâmetros.

Use o método `getCount()` para recuperar uma contagem de objetos que correspondem aos parâmetros especificados.

```php
$numberOfEnabledContexts = Services::get('context')->getCount([
  'isEnabled' => true,
]);
```

Use o método `getIds()` para recuperar uma matriz de ids de objeto.

```php
$enabledContextIds = Services::get('context')->getIds([
  'isEnabled' => true,
]);
```

Use o método `getMany()` para recuperar um iterador de objetos.

```php
$contextsIterator = Services::get('context')->getMany([
  'isEnabled' => true,
]);
```

Passe os parâmetros `count` e `offset` para paginar os resultados. O exemplo abaixo mostra como obter dez itens começando com a segunda página de resultados.

```php
$contextsIterator = Services::get('context')->getMany([
  'count' => 10,
  'offset' => 10,
]);
```

Os métodos `getCount()`, `getIds()` e `getMany()` aceitam os mesmos parâmetros. Eles são diferentes para cada [entity](architecture-entities) e podem ser descobertos lendo a documentação do método `getMany()` da classe service.

O método `getMany()` retorna um `DAOResultIterator` (consulte [ Iterators](https://www.php.net/manual/en/class.iterator.php)). Iterators podem ser usados como um array em loops `foreach`:

```php
$contextsIterator = Services::get('context')->getMany(['isEnabled' => true]);
$names = [];
foreach ($contextsIterator as $context) {
    $names[] = $context->getLocalizedData('name');
}
```

No entanto, um `DAOResultIterator` não pode ser repetido duas vezes. Isso causará um erro fatal.

```php
$names = [];
$paths = [];
$contextsIterator = Services::get('contexts')->getMany(['isEnabled' => true]);
foreach ($contextsIterator as $context) {
    $names[] = $context->getLocalizedData('name');
}
// O iterador já passou por um loop
// antes, então isso causará um erro
foreach ($contextsIterator as $context) {
    $paths[] = $context->getData('urlPath');
}
```

Para verificar se nenhum resultado foi retornado, use `count()` em vez de `!empty()`.

```php
$contextsIterator = Services::get('contexts')->getMany(['isEnabled' => true]);
if (!empty($contextsIterator)) {
   // Isso sempre será verdade
}
if (count($contextsIterator)) {
  // Verdadeiro somente se um ou mais contextos foram encontrados
}
```

O `DAOResultIterator` não pode ser usado com as funções `array_map`, `array_filter` ou `array_reduce`.

Se necessário, um `DAOResultIterator` pode ser convertido em um array.

```php
$contextsIterator = Services::get('contexts')->getMany(['isEnabled' => true]);
$contexts = iterator_to_array($contextsIterator);
```

No entanto, isso deve ser evitado, a menos que seja absolutamente necessário. Armazenar uma grande coleção de objetos na memória tornará a aplicação lenta. Se você não tiver certeza, pergunte a um desenvolvedor mais experiente da equipe.

### EntityWriteInterface

A `EntityWriteInterface` fornece métodos para validar, adicionar, editar e excluir objetos.

Antes de adicionar ou editar um objeto, você deve validar suas propriedades. Consulte [Validação](./utilities-validation).

```php
$props = ['path' => 'publicknowledge'];
$errors = Services::get('context')->validate(
  VALIDATE_ACTION_ADD,
  $props,
  Application::get()->getSite()->getSupportedLocales(),
  Application::get()->getSite()->getPrimaryLocale(),
);
if (!empty($errors)) {
   // Falha na validação de props: requer uma prop `name`
}
```

Depois que as propriedades forem validadas, elas podem ser mescladas com o objeto e salvas.

Editar um objeto existente.

```php
$editedContext = Services::get('context')->edit(
  $context,
  $props,
  Application::get()->getRequest()
);
```

Para adicionar um objeto, use o DAO para instanciar um novo objeto, injetar as props e salvá-lo no banco de dados.

```php
$context = Application::get()->getContextDAO()->newDataObject();
$context->_data = $props;
$newContext = Services::get('context')->add(
  $context,
  Application::get()->getRequest()
);
```

Excluir um objeto.

```php
Services::get('context')->delete($context);
```

### EntityPropertyInterface

A `EntityPropertyInterface` fornece métodos para converter um objeto em um array associativo. Isso é usado antes que os dados sejam retornados como JSON na API REST e na CLI.

Use o método `getSummaryProperties()` para recuperar um resumo do objeto.

```php
$contextProps = Services::get('context')
  ->getSummaryProperties(
    $context,
    ['request' => Application::get()->getRequest()]
  );
```

Use o método `getFullProperties()` para recuperar uma representação completa do objeto.

```php
$contextProps = Services::get('context')
  ->getFullProperties(
    $context,
    ['request' => Application::get()->getRequest()]
  );
```

As propriedades completas às vezes incluem detalhes sobre objetos anexados. Por exemplo, um objeto de submissão irá anexar objetos de autor.

Você pode solicitar as propriedades que deseja com o método `getProperties()`.

```php
$contextProps = Services::get('context')
  ->getProperties(
    $context,
    ['name', 'path', 'url']
    ['request' => Application::get()->getRequest()]
  );
```

Isso retornará uma matriz associativa.

```
[
    'name' => [
        'en_US' => 'Journal of Public Knowledge'
    ]
  'path' => 'publicKnowledge',
    'url' => 'http://localhost:8000/publicknowledge'
]
```

### Métodos Adicionais

Cada classe service pode incluir métodos adicionais conforme necessidade. Por exemplo, a classe `PKPContextService` inclui um método para restaurar todas as configurações padrão para uma localidade.

```php
$updatedContext = Services::get('context')
  ->restoreLocaleDefaults(
    $context,
    $request,
    $locale
  );
```

## Outros Services

Em casos raros, uma classe de `Service` pode não ser pareada com uma [entity](./architecture-entities). Por exemplo, o `SchemaService` fornece métodos para compilar e trabalhar com esquemas de entity.

```php
// Preencher um objeto com os valores padrão de seu esquema
$contextWithDefaults = Services::get('schema')
  ->setDefaults(
    SCHEMA_CONTEXT,
    $newContext,
    $supportedLocales,
    $primaryLocale
  );
```

Outros services podem estar relacionados a uma entity, mas ainda não suportam as interfaces de entity. Consulte a [estratégia de refatoração](#refactor-strategy).

## Escrevendo Service Classes

Uma boa classe `Service` deve ser:

- **Sem estado**: Cada vez que um método de classe Service é chamada deve ser completamente independente de qualquer operação anterior. Não anexe itens à instância com `$this`. Todas as dependências de um método da classe Service devem ser injetadas como parâmetro para esse método.
- **Fácil de usar**: tente ocultar requisitos complexos de banco de dados e lógica de negócios por trás de assinaturas de métodos intuitivos.
- **Reutilizável**: considere todos os cenários em que um método pode ser usado. Tente dissociá-lo do seu caso de uso específico sempre que possível.

## Estratégia de Refatoração

Os Services são novos para a aplicação. Nossa intenção é mover o código para as classes de service que existem atualmente em Page Handlers, Controller Handlers e Forms. O principal caso de uso para essa mudança é oferecer suporte à API REST.

Esta refatoração tem três objetivos:

1. Para desacoplar a lógica de negócios dos componentes UI e das solicitação handlers. Devemos ser capazes de obter, adicionar e editar objetos de qualquer lugar da aplicação.
2. Para reforçar o uso consistente de hooks e notificações. Não deve ser possível esquecer de chamar hooks, enviar notificações por e-mail ou adicionar entradas de log ao realizar ações. A classe service deve encapsular todas as tarefas que fazem parte de uma ação.
3. Para simplificar a estrutura da aplicação. Esperamos que as classes service forneçam uma API mais intuitiva para desenvolvedores de plugins e parceiros de terceiros.

As classes service ainda não estão disponíveis para todas as entities. Eles serão desenvolvidos à medida que mais de nossa interface do usuário for convertida para usar a API REST.

---

Saiba mais sobre [como as entities são definidas e tratadas](./architecture-entities).

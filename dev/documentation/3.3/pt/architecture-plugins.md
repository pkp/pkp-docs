---
book: dev-documentation
version: 3.3
title: Plugins - Documentação Técnica - OJS|OMP|OPS 3.3
---

# Plugins

Plugins são módulos independentes que podem ser habilitados e desabilitados para modificar a aplicação.

> Este capítulo descreve como carregar plugins na aplicação principal. Leia o [Guia de Plugins](/dev/plugin-guide/en) para saber como criar seus próprios plugins. 
> 
> {:.notice}

## Carregar Plugins

Os plugins são divididos em categorias e carregados quando essa categoria é necessária. Por exemplo, plugins de bloco fornecem blocos de barra lateral e são carregados apenas no site voltado para o leitor.

Carregue todos os plugins habilitados da categoria `block`.

```php
$blockPlugins = PluginRegistry::loadCategory('blocks', true);
```

O carregamento de plugins consome muitos recursos e não deve ser feito mais de uma vez em uma solicitação. Se uma categoria de plugin foi carregada, obtenha os plugins do cache.

```php
$blockPlugins = PluginRegistry::getPlugins('blocks');
```

Em casos raros, você pode querer recuperar todos os plugins instalados, mesmo que não estejam habilitados.

```php
$blockPlugins = PluginRegistry::loadCategory('blocks', false);
```

Você pode obter um plugin específico.

```php
$submissionBlockPlugin = PluginRegistry::getPlugin('blocks', 'makeSubmission');
```

Se o plugin não foi carregado, você deve carregá-lo primeiro.

```php
$submissionBlockPlugin = PluginRegistry::loadPlugin('blocks', 'makeSubmission');
```

Os plugins da categoria Genéricos são carregados a cada solicitação e não precisam ser carregados antes do uso.

## Hooks

Plugins genéricos usam Hooks para modificar o comportamento da aplicação. Deve-se tomar cuidado para garantir que os hooks estejam disponíveis nas partes principais do [Ciclo de Vida da Solicitação](./architecture-request) para garantir que a aplicação possa ser modificada com segurança por plugins de terceiros.

---

A próxima seção segue para o frontend da aplicação. Saiba como [entregar HTML ao navegador e criar interfaces interativas](./architecture-frontend).
---
book: dev-documentation
version: 3.3
title: Arquitetura - Documentação Técnica - OJS|OMP|OPS 3.3
---

# Arquitetura

Cada capítulo desta seção descreve uma parte da arquitetura da aplicação. Juntos, eles fornecem uma visão geral de como as solicitações à aplicações são autorizadas, como os dados são salvos e recuperados do banco de dados e como as respostas são retornadas.

Esses capítulos fornecem uma introdução sobre como a aplicaçao funciona. Talvez seja necessário ler o código para saber mais sobre cada componente. Mas depois de ler esses capítulos, você deve ter uma ideia de onde procurar.

> Parte do código em OJS e OMP tem mais de dez anos. Você pode encontrar partes do código da aplicação que não estão em conformidade com as convenções de codificação neste documento. Este guia descreve a arquitetura que todas as novas contribuições devem seguir. 
> 
> {:.notice}

## Módulos

Cada aplicação inclui módulos em três locais.

```
ojs
│
├─┬ lib
│ ├── pkp           # A biblioteca base que
│ │                 # alimenta todos as nossas aplicações
│ │
│ └── ui-library    # A biblioteca de componentes UI do usuário usada
│                   # para o back-end editorial.
│
└── plugins         # Plugins oficiais e de terceiros
```

Uma classe em OJS ou OMP geralmente estende uma classe na [biblioteca base](https://github.com/pkp/pkp-lib/). Por exemplo, no OJS usamos a classe `Submission` que estende a classe `PKPSumission`.

```php
import('lib.pkp.classes.submission.PKPSubmission');
class Submission extends PKPSubmission {
  ...
}
```

Tanto a aplicação quanto a biblioteca base compartilham uma estrutura de arquivos semelhante.

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

A mesma abordagem é usada no OMP.

## Contexts

Usamos o termo `Context` para descrever um `Journal` (OJS) ou `Press` (OMP). Para reutilizar o código em ambos os aplicativos, muitas vezes você verá o código que se refere ao contexto.

```php
$context = $request->getContext();
```

Isso sempre se refere ao objeto `Journal` (OJS) ou `Press` (OMP). É idêntico ao código a seguir.

```php
$journal = $request->getJournal();
```

Uma única instância do OJS pode executar várias revistas. É importante restringir as solicitações de submissões, usuários e outros objetos no sistema pelo contexto.

```php
$submissions = Services::get('submission')->getMany([
  'contextId' => $request->getContext()->getId(),
]);
```

A falha em passar um contexto ou id de contexto para muitos métodos retornará objetos para todos os contextos.

---

Normalmente, o contexto é obtido do objeto `Request`. Saiba mais sobre o [Ciclo de Vida da Solicitação](./architecture-request).
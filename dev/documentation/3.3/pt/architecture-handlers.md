---
book: dev-documentation
version: 3.3
title: Handlers - Documentação Técnica - OJS|OMP|OPS 3.3
---

# Handlers

Cada solicitação é roteada para um `Handler`, que é responsável por autorizar a solicitação, buscar dados e formatar a resposta.

O código dentro de um `Handler` não pode ser reutilizado, portanto, `Handler`s não devem executar essas ações por conta própria. Em vez disso, eles devem coordenar outras classes para atender à solicitação.

`Handler`s **não autorizam a solicitação** e não devem ser usados sem as [políticas de autorização](./architecture-authorization) apropriadas.

> **Dica:** `Handler`s desempenham a função de `Controller`s na arquitetura de aplicativo MVC (Model-View-Controller). 
> 
> {:.tip}

## Páginas Handlers

A página Handles recebem solicitações `GET` e retornam a saída `HTML`. A Página Handler deve definir um método para cada operação que ele suporta.

```php
import('classes.handler.Handler');
class IssueHandler extends Handler {
    /**
      * Exibir o índice da edição atual
     */
    public function current(array $args, Request $request) {
        return '<html>...</html>';
    }
}
```

Saiba mais sobre [URLs de página, rotas e operações](./architecture-routes#page-routes).

### Página Indexes

Página Handlers podem definir uma operação `index` para lidar com URLs que não contêm uma operação.

```php
import('classes.handler.Handler');
class IssueHandler extends Handler {
    /**
     * Exibir uma lista de todas as edições
     */
    public function index(array $args, Request $request) {
        return '<html>...</html>';
    }
}
```

O router deve declarar a operação `index`:

```php
switch ($op) {
    case 'index':
        define('HANDLER_CLASS', 'IssueHandler');
        import('pages.issue.IssueHandler');
        break;
}
```

### Argumentos de Página

Quaisquer fragmentos de URL anexados após a operação serão passados para o método do `Handler` no parâmetro `$args`.

![Diagrama indicando as partes de uma URL para página Handlers](../img/url-route-page.png)

```php
class IssueHandler extends Handler {
    public function view(array $args, Request $request) {
        $issueId = isset($args[0]) ? (int) $args[0] : null;
        return '<html>...</html>';
    }
}
```

Retorna um erro `404` quando os argumentos da página solicitam uma entidade que não existe.

```php
class IssueHandler extends Handler {
 public function view(array $args, Request $request) {
     $issueId = isset($args[0]) ? (int) $args[0] : null;
     if (/* edição não encontrada */) {
         $this->getDispatcher()->handle404();
     }
     return '<html>...</html>';
 }
}
```

### Respostas

Página Handlers retornam código HTML usando o `TemplateManager`.

```php
class IssueHandler extends Handler {
    public function current(array $args, Request $request) {
        $templateMgr = TemplateManager::getManager($request);
        return $templateMgr->display('/path/to/template.tpl');
    }
}
```

> Leia a seção [Frontend](./frontend) desta documentação para saber mais sobre templates. 
> 
> {:.notice}

## API Handlers

A API Handlers usam a [Slim API framework](http://www.slimframework.com/) e retornam a saída `JSON`. As solicitações são roteadas para retornos da chamada de endpoint definidos no construtor do `Handler`.

```bash
$ curl https://example.org/publicknowledge/api/v1/submissions
```

```php
import('lib.pkp.classes.handler.APIHandler');
class PKPSubmissionsHandler extends APIHandler {
    public function __construct() {
        $this->_endpoints = [
            'GET' => [
                [
                    'pattern' => 'submissions',
                    'handler' => [$this, 'getMany'],
                ],
            ],
        ];
    }
    public function getMany($slimRequest, $response, $args) {
        return $response->withJson([...], 200);
    }
}
```

### Variáveis de Path

O roteamento pode identificar variáveis nomeadas no path de URL que fazem parte do endpoint.

```bash
$ curl https://example.org/publicknowledge/api/v1/submissions/1
```

```php
import('lib.pkp.classes.handler.APIHandler');
class PKPSubmissionsHandler extends APIHandler {
    public function __construct() {
        $this->_endpoints = [
            'GET' => [
                [
                    'pattern' => 'submissions/{submissionId}',
                    'handler' => [$this, 'get'],
                ],
            ],
        ];
    }
    public function get($slimRequest, $response, $args) {
        $submissionId = (int) $args['submissionId'];
        return $response->withJson([...], 200);
    }
}
```

### Parâmetros da Query

Os parâmetros de consultas na URL podem ser acessados por meio do objeto `$slimRequest`.

```bash
$ curl https://example.org/publicknowledge/api/v1/submissions?searchPhrase=barnes
```

```php
import('lib.pkp.classes.handler.APIHandler');
class PKPSubmissionsHandler extends APIHandler {
    public function __construct() {
        $this->_endpoints = [
            'GET' => [
                [
                    'pattern' => 'submissions',
                    'handler' => array($this, 'getMany'),
                ],
            ],
        ];
    }
    public function getMany($slimRequest, $response, $args) {
        $params = $slimRequest->getQueryParams(); // ['searchPhrase' => 'barnes']
        return $response->withJson([...], 200);
    }
}
```

### Corpo da Solicitação

As solicitações `POST` e `PUT` incluem dados no corpo da solicitação, que podem ser acessados com `$slimRequest->getParsedBody()`.

```bash
$ curl https://example.org/publicknowledge/api/v1/submissions/1 \
  -d '{"contactEmail": "editor@example.org"}' \
  -H "Content-Type: application/json" \
  -X PUT
```

```php
import('lib.pkp.classes.handler.APIHandler');
class PKPSubmissionsHandler extends APIHandler {
    public function __construct() {
        $this->_endpoints = [
            'PUT' => [
                [
                    'pattern' => 'submissions/{submissionId}',
                    'handler' => array($this, 'edit'),
                ],
            ],
        ];
    }
    public function edit($slimRequest, $response, $args) {
        $data = $slimRequest->getParsedBody(); // ['contactEmail' => 'editor@example.org']
        ...
    }
}
```

### Responses

API Handlers recebem um objeto `$response` que deve ser retornado usando o método `$request->withJson()`.

```php
import('lib.pkp.classes.handler.APIHandler');
class PKPSubmissionsHandler extends APIHandler {
    public function __construct() {
        $this->_endpoints = [...];
    }
    public function get($slimRequest, $response, $args) {
        return $response->withJson([
            'id' => 1,
            'title' => 'Exemplo de Submissão' ,
        ], 200);
    }
}
```

Sempre retorne o [Código de Status HTTP](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) correto.

```php
import('lib.pkp.classes.handler.APIHandler');
class PKPSubmissionsHandler extends APIHandler {
    public function __construct() {
        $this->_endpoints = [...];
    }
    public function get($slimRequest, $response, $args) {
        if (/* no submission found */) {
            return $response->withJson(false, 404);
        }
        if (/* submission access not allowed */) {
            return $response->withJson(false, 403);
        }
        return $response->withJson([
            'id' => 1,
            'title' => 'Exemplo de Submissão',
        ], 200);
    }
}
```

As respostas de erro da API devem passar uma chave de localidade que descreve o erro.

```php
import('lib.pkp.classes.handler.APIHandler');
class PKPSubmissionsHandler extends APIHandler {
    public function __construct() {
        $this->_endpoints = [...];
    }
    public function get($slimRequest, $response, $args) {
        if (/* no submission found */) {
            return $response->withStatus(404)->withJsonError('api.submissions.404.submissionNotFound');
        }
        ...
    }
}
```

### Requisição de Objetos

O objeto `$slimRequest` é um objeto PSR 7 criado pela [Slim API framework](http://www.slimframework.com/). É **não** uma instância do objeto principal `Request` do aplicativo que é passado para outras operações `Handler`. O objeto principal `Request` da aplicação pode ser acessado com `APIHandler::getRequest()`.

```php
class PKPSubmissionsHandler extends APIHandler {
    public function get($slimRequest, $response, $args) {
        $request = $this->getRequest();
        ...
    }
}
```

### Slim Framework

Leia o [guia de uso do Slim API Framework](http://www.slimframework.com/docs/v3/) para saber mais sobre o `$slimRequest` e objetos `$response`.

## Controlador Handlers (obsoleto)

> **O controlador Handlers estão obsoletos.** Novos recursos devem ser criados usando os componentes da biblioteca de interface do usuário que interagem com as API Handlers.  No entanto, eles são comuns em todo a aplicação e permanecerão em uso por algum tempo. 
> 
> {:.warning}

Os controladores Handlers recebem solicitações de controladores UI e retornam a saída `JSON`. Eles agem como Páginas Handlers, exceto pelo fato de servirem componentes individuais de UI interativos, como uma lista de arquivos de submissão, discussões ou participantes.

Saiba mais sobre [como trabalhar com controladores](./frontend-controllers).

---

Saiba [como o usuário é autenticado](./architecture-authentication).

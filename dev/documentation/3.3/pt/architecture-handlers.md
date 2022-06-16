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

![Diagram indicating the parts of a URL for Page Handlers](../img/url-route-page.png)

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

### Responses

Page Handlers return HTML code using the `TemplateManager`.

```php
class IssueHandler extends Handler {
    public function current(array $args, Request $request) {
        $templateMgr = TemplateManager::getManager($request);
        return $templateMgr->display('/path/to/template.tpl');
    }
}
```

> Read the [Frontend](./frontend) section of this documentation to learn more about templates. 
> 
> {:.notice}

## API Handlers

API Handlers use the [Slim API framework](http://www.slimframework.com/) and return `JSON` output. Requests are routed to endpoint callbacks defined in the `Handler`'s constructor.

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

### Path Variables

Routing can identify named variables in the URL path that are part of the endpoint.

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

### Query Params

Query parameters in the URL can be accessed through the `$slimRequest` object.

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

### Request Body

`POST` and `PUT` requests include data in the body of the request, which can be accessed with `$slimRequest->getParsedBody()`.

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

API Handlers are passed a `$response` object which should be returned using the `$request->withJson()` method.

```php
import('lib.pkp.classes.handler.APIHandler');
class PKPSubmissionsHandler extends APIHandler {
    public function __construct() {
        $this->_endpoints = [...];
    }
    public function get($slimRequest, $response, $args) {
        return $response->withJson([
            'id' => 1,
            'title' => 'Example Submission',
        ], 200);
    }
}
```

Always return the correct [HTTP Status Code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).

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
            'title' => 'Example Submission',
        ], 200);
    }
}
```

Error responses from the API should pass a locale key that describes the error.

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

### Request Objects

The `$slimRequest` object is a PSR 7 object created by the [Slim API framework](http://www.slimframework.com/). It is **not** an instance of the application's main `Request` object that is passed to other `Handler` ops. The application's main `Request` object can be accessed with `APIHandler::getRequest()`.

```php
class PKPSubmissionsHandler extends APIHandler {
    public function get($slimRequest, $response, $args) {
        $request = $this->getRequest();
        ...
    }
}
```

### Slim Framework

Read the [Slim API Framework usage guide](http://www.slimframework.com/docs/v3/) to learn more about the `$slimRequest` and `$response` objects.

## Controller Handlers (deprecated)

> **Controller Handlers are deprecated.** New features should be built using the UI Library components that interact with API Handlers.  However, they are common throughout the application and will remain in use for some time. 
> 
> {:.warning}

Controller Handlers receive requests from UI Controllers and return `JSON` output. They act like Page Handlers except that they serve individual interactive UI components, such as a submission's list of files, discussions or participants.

Learn more about [working with controllers](./frontend-controllers).

---

Learn [how the user is authenticated](./architecture-authentication).

---
title: Handlers - Technical Documentation - OJS|OMP|OPS
---

# Handlers

Every request is routed to a `Handler`, which is responsible for authorizing the request, fetching data and formatting the response.

Code inside of a `Handler` can not be reused, so `Handler`s should not perform these actions themselves. Instead, they should coordinate other classes to fulfil the request.

`Handler`s **do not authorize the request** and should not be used without appropriate [authorization policies](./architecture-authorization).

> **Tip:** `Handler`s perform the role of `Controller`s in the MVC (Model-View-Controller) application architecture. 
> 
> {:.tip}

## Page Handlers

Page Handlers receive `GET` requests and return `HTML` output. The Page Handler must define a method for each op it supports.

```php
import('classes.handler.Handler');
class IssueHandler extends Handler {
    /**
     * Display the table of contents for the current issue
     */
    public function current(Array $args, Request $request) {
        return '<html>...</html>';
    }
}
```

Learn more about [page URLs, routes and ops](./architecture-routes#page-routes).

### Page Indexes

Page Handlers may define an `index` op to handle URLs that do not contain an op.

```php
import('classes.handler.Handler');
class IssueHandler extends Handler {
    /**
     * Display a list of all issues
     */
    public function index(Array $args, Request $request) {
        return '<html>...</html>';
    }
}
```

The router must declare the `index` op:

```php
switch ($op) {
    case 'index':
        define('HANDLER_CLASS', 'IssueHandler');
        import('pages.issue.IssueHandler');
        break;
}
```

### Page Arguments

Any URL fragments that are appended after the op will be passed to the `Handler`'s method in the `$args` param.

![Diagram indicating the parts of a URL for Page Handlers](../img/url-route-page.png)

```php
class IssueHandler extends Handler {
    public function view(Array $args, Request $request) {
        $issueId = isset($args[0]) ? (int) $args[0] : null;
        return '<html>...</html>';
    }
}
```

Return a `404` error when page arguments request an entity that does not exist.

```php
class IssueHandler extends Handler {
 public function view(Array $args, Request $request) {
     $issueId = isset($args[0]) ? (int) $args[0] : null;
     if (/* issue not found */) {
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
    public function current(Array $args, Request $request) {
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

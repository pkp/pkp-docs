---
book: dev-documentation
version: 3.4
title: Authentication - Technical Documentation - OJS|OMP|OPS
---

# Authentication

Cookies are used to authenticate a user session against a registered `User`. You can retrieve the currently logged in user from the `Request` object:

```php
$currentUser = $request->getUser();
if (!$currentUser) {
    // user is not logged in
}
```

The `Request` is available globally from the `Application`.

```php
$currentUser = Application::get()->getRequest()->getUser();
```

## CSRF Tokens

CSRF tokens must be sent with all `POST`, `PUT` or `DELETE` requests to prevent attacks using [cross-site request forgery](https://en.wikipedia.org/wiki/Cross-site_request_forgery). A CSRF token may be requested from the current session.

```php
$csrfToken = $request->getSession()->getCSRFToken();
```

CSRF tokens are not required for requests to the API when the [API Token](/dev/api/ojs/3.4#tag/Authentication/API-Token) is used.

### Page Routes

When Page Handlers receive `POST`, `PUT` or `DELETE` requests, any form data should be processed by a `Form`. In such cases, the `Form` must add the CSRF check to its validation rules.

```php
use PKP\form\Form;
use PKP\form\validation\FormValidatorCSRF;

class ExampleForm extends Form
{
    function __construct(...)
    {
        $this->addCheck(new FormValidatorCSRF($this));
    }
}
```

### Controller Routes

Controllers must check the CSRF token for any op that receives a `POST`, `PUT` or `DELETE` request.

```php
use APP\core\Request;

class IssueGridHandler
{
    function deleteIssue(array $args, Request $request)
    {
        if (!$request->checkCSRF()) {
            return new JSONMessage(false);
        }
    }
}
```

### API Routes

API Handlers automatically check the CSRF token for all `POST`, `PUT` or `DELETE` requests. No additional action must be taken.

## UI Library

A CSRF token is available as a global variable when working with the UI Library. Learn more about using the [CSRF Token](/dev/ui-library/dev/#/pages/api#csrf-token) in ajax requests.

## User Session
The user's session stores a logged-in user's IP address, last-used date/time and more. You can access the current user's session directly.

```php
$sessionManager = SessionManager::getManager();
$session = $sessionManager->getUserSession();
```

Use of the `SessionManager` is discouraged unless you need to access the session itself. In all cases, the current `User` should be retrieved from the `Request` object.

## CLI Tools

A logged-in user will not exist when using the CLI tools. Care must be taken when writing code that gets or modifies information from the database to ensure that it can be used when no user session exists.

The [Handlers](./architecture-handlers) should perform any authentication and authorization required before fulfilling a request.

---

Now that we know who the user is, learn [how we authorize their access to different operations](./architecture-authorization).

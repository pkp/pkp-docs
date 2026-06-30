---
title: API Endpoints - Plugin Guide for OJS, OMP and OPS
description: How to register REST API endpoints from a plugin for OJS, OMP and OPS.
book: dev-plugin-guide
version: 3.5
---

# API Endpoints

Plugins can register their own [REST API](/dev/api) endpoints. This lets a plugin expose data and actions to the editorial UI, to a custom Vue.js component, or to an external service, using the same routing, authentication and authorization that the core API uses.

> **New in 3.5.** The hooks and base controllers described here were added in 3.5. They are not available in earlier versions.
{:.notice}

There are three ways a plugin can add API endpoints:

1. [Add a route to an existing entity](#add-a-route-to-an-existing-entity) — attach a new route to a core entity such as `submissions` or `users`.
2. [Create plugin own API routes/endpoints](#create-plugin-own-api-endpoints) — expose endpoints under a path that belongs entirely to your plugin.
3. [Add plugin settings endpoints](#plugin-settings-endpoints) — use the ready-made `PluginSettingsController` to read and write your plugin's settings.

All three are wired up with the [Hook](/dev/documentation/en/utilities-hooks) system from your plugin's `register()` method. See the routing system in [Routes](/dev/documentation/en/architecture-routes) for background, and the [apiExample plugin](https://github.com/touhidurabir/apiExample) for a complete, runnable demonstration of the first two approaches.

---

## Add a route to an existing entity

Every core API entity fires a hook when its routes are being assembled. The hook name follows the pattern:

```
APIHandler::endpoints::{ENTITY}
```

The entity is the segment after the API version in the URL — for `/{contextPath}/api/v1/submissions` the entity is `submissions`, for `/{contextPath}/api/v1/users` it is `users`. Listen for the hook and call `$apiHandler->addRoute()` to append a new route to that entity's existing routes.

```php
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request as IlluminateRequest;
use Illuminate\Http\Response;
use PKP\core\PKPBaseController;
use PKP\handler\APIHandler;
use PKP\plugins\Hook;
use PKP\security\Role;

Hook::add('APIHandler::endpoints::users', function (string $hookName, PKPBaseController $apiController, APIHandler $apiHandler): bool {

    // Adds: BASE_URL/index.php/{contextPath}/api/v1/users/testing/routes/add/onfly
    $apiHandler->addRoute(
        'GET',
        'testing/routes/add/onfly',
        function (IlluminateRequest $request): JsonResponse {
            return response()->json([
                'message' => 'A new route added successfully on fly',
            ], Response::HTTP_OK);
        },
        'test.onfly',
        [
            Role::ROLE_ID_SITE_ADMIN,
            Role::ROLE_ID_MANAGER,
            Role::ROLE_ID_SUB_EDITOR,
        ],
    );

    return Hook::CONTINUE;
});
```

`addRoute()` takes the following arguments:

| Argument | Type | Description |
|----------|------|-------------|
| `$method` | `string` | HTTP method: `GET`, `POST`, `PUT`, `PATCH` or `DELETE`. |
| `$uri` | `string` | The route path, appended after the entity (e.g. `{submissionId}/custom`). |
| `$callback` | `callable` | The action that runs when the route is hit. Returns a response. |
| `$name` | `string` | A unique route name. |
| `$roles` | `array` | Allowed roles, from the `Role::ROLE_ID_*` constants. The matching role middleware is added for you. |
| `$pluginPolicyAuthorizer` | `?HasAuthorizationPolicy` | Optional authorization policies — see [the next section](#authorization-policies). |

> Routes added this way share the host entity's route group middleware (for example `has.context`). Your `$roles` are applied on top, so you do not need to add role middleware yourself.
{:.tip}

> For a real, in-production use of this mechanism, see [A production example](#a-production-example) at the end of this chapter.
{:.tip}

## Authorization policies

The optional final argument of `addRoute()` lets you attach PKP authorization policies to the route. Pass an object implementing `PKP\plugins\interfaces\HasAuthorizationPolicy`, which has a single method:

```php
public function getPolicies(PKPRequest $request, array &$args, array $roleAssignments): array;
```

Return an array of policy objects. For example, the [plagiarism plugin](#a-production-example) returns two:

```php
new class implements HasAuthorizationPolicy {
    public function getPolicies(PKPRequest $request, array &$args, array $roleAssignments): array
    {
        return [
            new SubmissionAccessPolicy($request, $args, $roleAssignments),
            new SubmissionCompletePolicy($request, $args),
        ];
    }
};
```

These policies enforce access control *and* populate the authorized context objects you read with `getAuthorizedContextObject()`. The `$roles` argument of `addRoute()` already handles role-based access; use policies when you need finer checks such as "this user can access this submission".

> Every item returned from `getPolicies()` must be an instance of `PKP\security\authorization\AuthorizationPolicy` or `PKP\security\authorization\PolicySet`. Returning anything else throws an exception.
{:.warning}

---

## Create plugin own API routes/endpoints {#create-plugin-own-api-endpoints}

When your endpoints don't belong to an existing entity, give your plugin its own controller and path. Listen for the `APIHandler::endpoints::plugin` hook and register one or more controllers with `registerPluginApiControllers()`:

```php
use PKP\core\APIRouter;
use PKP\plugins\Hook;

Hook::add('APIHandler::endpoints::plugin', function (string $hookName, APIRouter $apiRouter): bool {
    $apiRouter->registerPluginApiControllers([
        new CustomApiController(),       // {contextPath}/api/v1/custom-plugin-path/
        new CustomAdminApiController(),  // index/api/v1/custom-admin-plugin-path/
    ]);

    return Hook::CONTINUE;
});
```

> `registerPluginApiControllers()` checks the handler path of every controller against those already registered and throws if two plugins claim the same path. This prevents one plugin's request from leaking into another. Prefer this hook over the older `Dispatcher::dispatch` approach, which has no collision protection and runs before the context schema is loaded.
{:.warning}

Each controller extends `PKP\core\PKPBaseController` and implements three methods:

```php
namespace APP\plugins\generic\apiExample;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Route;
use PKP\core\PKPBaseController;

class CustomApiController extends PKPBaseController
{
    // The URL prefix for this controller's routes.
    public function getHandlerPath(): string
    {
        return 'custom-plugin-path';
    }

    // Middleware applied to every route in this controller.
    public function getRouteGroupMiddleware(): array
    {
        return [
            'has.user',
            'has.context',
        ];
    }

    // Define the routes, relative to the handler path.
    public function getGroupRoutes(): void
    {
        // {contextPath}/api/v1/custom-plugin-path/
        Route::get('', $this->getData(...))->name('api.example.custom.getData');
        Route::post('', $this->postData(...))->name('api.example.custom.postData');
    }

    public function getData(Request $illuminateRequest): JsonResponse
    {
        return response()->json(['message' => 'This is a GET response'], Response::HTTP_OK);
    }

    public function postData(Request $illuminateRequest): JsonResponse
    {
        return response()->json(['message' => 'This is a POST response'], Response::HTTP_OK);
    }
}
```

- `getHandlerPath()` returns the path segment your routes live under. For the example above the base URL is `{contextPath}/api/v1/custom-plugin-path/`.
- `getRouteGroupMiddleware()` returns the middleware applied to the whole group. Common values are `has.user` (an authenticated user is required) and `has.context` (a journal/press context is required). To restrict by role, add `self::roleAuthorizer([Role::ROLE_ID_MANAGER, ...])`.
- `getGroupRoutes()` defines routes with Laravel's `Route` facade, relative to the handler path. Use the first-class callable syntax `$this->method(...)` to bind actions.

### Site-wide controllers

By default routes are context-scoped (`{contextPath}/api/v1/...`). Override `isSiteWide()` to return `true` for an admin-level controller served from the site context (`index/api/v1/...`):

```php
class CustomAdminApiController extends PKPBaseController
{
    public function getHandlerPath(): string
    {
        return 'custom-admin-plugin-path';
    }

    public function isSiteWide(): bool
    {
        return true; // index/api/v1/custom-admin-plugin-path
    }

    public function getRouteGroupMiddleware(): array
    {
        return ['has.user'];
    }

    public function getGroupRoutes(): void
    {
        Route::get('', $this->getData(...))->name('api.example.custom.admin.getData');
        Route::post('', $this->postData(...))->name('api.example.custom.admin.postData');
    }

    // ... action methods
}
```

---

## Plugin settings endpoints

The most common reason to add endpoints is to read and save a plugin's settings. For this, PKP provides a ready-made controller, `PKP\plugins\PluginSettingsController`, so you don't have to wire up routes, middleware and authorization yourself.

It is itself a `PKPBaseController` subclass and automatically:

- serves a `GET` and a `PUT` route at `plugins/{pluginName}/settings`;
- requires an authenticated user, and for context plugins also a context;
- authorizes site admins for site plugins, and site admins or managers for context plugins.

Extend it and implement two methods — `get()` to return the current settings, and `edit()` to validate and save them:

```php
namespace APP\plugins\generic\pluginTemplate;

use APP\plugins\generic\pluginTemplate\classes\Constants;
use APP\plugins\generic\pluginTemplate\formRequests\EditPluginTemplateSettings;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use PKP\plugins\PluginSettingsController;

class PluginTemplateSettingsController extends PluginSettingsController
{
    public function get(Request $illuminateRequest): JsonResponse
    {
        $contextId = $this->getRequest()->getContext()->getId();

        return response()->json([
            Constants::PUBLICATION_STATEMENT => $this->plugin->getSetting($contextId, Constants::PUBLICATION_STATEMENT) ?? '',
        ], Response::HTTP_OK);
    }

    public function edit(EditPluginTemplateSettings $illuminateRequest): JsonResponse
    {
        $contextId = $this->getRequest()->getContext()->getId();
        $publicationStatement = $illuminateRequest->validated()[Constants::PUBLICATION_STATEMENT];

        $this->plugin->updateSetting($contextId, Constants::PUBLICATION_STATEMENT, $publicationStatement);

        return response()->json([
            Constants::PUBLICATION_STATEMENT => $publicationStatement,
        ], Response::HTTP_OK);
    }
}
```

The `$this->plugin` property is the plugin instance, available because the controller receives it through its constructor. The `edit()` method type-hints a Laravel `FormRequest`, so validation runs automatically:

```php
namespace APP\plugins\generic\pluginTemplate\formRequests;

use APP\plugins\generic\pluginTemplate\classes\Constants;
use Illuminate\Foundation\Http\FormRequest;

class EditPluginTemplateSettings extends FormRequest
{
    public function rules(): array
    {
        return [
            Constants::PUBLICATION_STATEMENT => ['nullable', 'string', 'max:500'],
        ];
    }
}
```

Register the controller from `register()` using the same `APIHandler::endpoints::plugin` hook described above:

```php
use PKP\core\APIRouter;
use PKP\plugins\Hook;

// In register(), inside the enabled check:
$this->controller = new PluginTemplateSettingsController($this);

Hook::add('APIHandler::endpoints::plugin', function (string $hookName, APIRouter $apiRouter): bool {
    $apiRouter->registerPluginApiControllers([
        $this->controller,
    ]);
    return Hook::CONTINUE;
});
```

Finally, build the endpoint URL for the settings form with the dispatcher and the controller's handler path:

```php
$apiUrl = $request->getDispatcher()->url(
    $request,
    Application::ROUTE_API,
    $context->getPath(),
    $this->controller->getHandlerPath() // plugins/{pluginName}/settings
);
```

For the form modal and Vue.js side of plugin settings — which consumes this endpoint — see [Plugin Settings](./settings). The [Plugin Template](https://github.com/pkp/pluginTemplate) is a complete working example of the settings flow end to end.

---

## A production example

The [plagiarism plugin](https://github.com/pkp/plagiarism) uses the entity-route mechanism in production. Its [`PlagiarismPlugin::addApiRoutes()`](https://github.com/pkp/plagiarism/blob/main/PlagiarismPlugin.php) attaches plagiarism-status endpoints to the `submissions` entity, complete with role restrictions, authorization policies and request validation. It is a good real-world reference for how the pieces in this chapter fit together.

### Recommended best practices

When you add API endpoints from a plugin, a few practices are worth copying:

- **Register endpoints only when the plugin is enabled.** Add your API hooks inside the `if ($success && $this->getEnabled(...))` block of `register()`, so endpoints are only added when the plugin is enabled.
- **Protect endpoints with authorization policies.** Beyond the `$roles` list, attach [authorization policies](#authorization-policies) for finer-grained access control — for example, confirming that the current user may access the specific submission being requested. See the core [Authorization](/dev/documentation/en/architecture-authorization) documentation for how to create and use policies.
- **Guard the controller type.** A hook may fire for more than one controller in some flows; an `instanceof` check (e.g. `if (!$apiController instanceof SubmissionController) return Hook::CONTINUE;`) keeps your route attached to exactly the controller you mean.
- **Read the authorized object, don't re-fetch it.** When a policy such as `SubmissionAccessPolicy` runs, it loads and authorizes the entity. Retrieve it inside the action with `$apiController->getAuthorizedContextObject(Application::ASSOC_TYPE_SUBMISSION)` rather than querying it again.
- **Validate with a `FormRequest`.** Type-hinting a Laravel `FormRequest` subclass on the action closure runs its validation rules before your code executes.
- **Keep actions thin.** Delegate the real work to a dedicated class — the plagiarism plugin uses a [`PlagiarismApiActionManager`](https://github.com/pkp/plagiarism/blob/main/classes/api/PlagiarismApiActionManager.php) — instead of writing logic inline.

---

View more [examples](./examples), or continue to [release your plugin](./release).

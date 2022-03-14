---
book: dev-documentation
version: 3.4
title: Authorization - Technical Documentation - OJS|OMP|OPS
---

# Authorization

Each `Handler` must define policies to prevent unauthorized access. These policies are applied in the `authorize` method.

```php
use APP\core\Request;
use APP\handler\Handler;
use PKP\security\authorization\PKPSiteAccessPolicy;

class DashboardHandler extends Handler
{
    public function authorize(Request $request, array &$args, array $roleAssignments): bool
    {
        $this->addPolicy(new PKPSiteAccessPolicy($request, null, $roleAssignments));

        return parent::authorize($request, $args, $roleAssignments);
    }
}
```

More than one `Policy` can be applied.

```php
use APP\core\Request;
use APP\handler\Handler;
use APP\security\authorization\OjsJournalMustPublishPolicy;
use PKP\security\authorization\ContextRequiredPolicy;

class IssueHandler extends Handler
{
    public function authorize(Request $request, array &$args, array $roleAssignments): bool
    {
        $this->addPolicy(new ContextRequiredPolicy($request));
        $this->addPolicy(new OjsJournalMustPublishPolicy($request));

        return parent::authorize($request, $args, $roleAssignments);
    }
}
```

`Policy`s can be grouped into a `PolicySet`. Use `PolicySet::COMBINING_PERMIT_OVERRIDES` when you want to allow access if any of the policies pass.

```php
use APP\core\Request;
use APP\handler\Handler;
use PKP\security\authorization\PolicySet;
use PKP\security\authorization\internal\SubmissionAuthorPolicy;
use PKP\security\authorization\internal\UserAccessibleWorkflowStageRequiredPolicy;

class WorkflowHandler extends Handler
{
    /**
     * @copydoc PKPHandler::authorize()
     */
    public function authorize(Request $request, array &$args, array $roleAssignments): bool
    {

        $submissionAccessPolicySet = new PolicySet(PolicySet::COMBINING_PERMIT_OVERRIDES);

        // Require that they are the author...
        $submissionAccessPolicySet->addPolicy(new SubmissionAuthorPolicy($request));

        // ... OR that they are assigned to the submission.
        $submissionAccessPolicySet->addPolicy(new UserAccessibleWorkflowStageRequiredPolicy($request));

        $this->addPolicy($submissionAccessPolicySet);

        return parent::authorize($request, $args, $roleAssignments);
    }
}
```

Use `PolicySet::COMBINING_DENY_OVERRIDES` when you want to prevent access if any of the policies fail.

```php
use APP\core\Request;
use APP\handler\Handler;
use PKP\security\authorization\PolicySet;
use PKP\security\authorization\RoleBasedHandlerOperationPolicy;
use PKP\security\authorization\QueryWorkflowStageAccessPolicy;
use PKP\security\Role;

class QueryHandler extends Handler
{
    /**
     * @copydoc PKPHandler::authorize()
     */
    public function authorize(Request $request, array &$args, array $roleAssignments): bool
    {

        $assistantAccessPolicySet = new PolicySet(PolicySet::COMBINING_DENY_OVERRIDES);

        // Require that they have the assistant role...
        $assistantAccessPolicySet->addPolicy(new RoleBasedHandlerOperationPolicy($request, Role::ROLE_ID_ASSISTANT, $roleAssignments[Role::ROLE_ID_ASSISTANT]));

        // ... AND that they are assigned to this stage of the workflow.
        $assistantAccessPolicySet->addPolicy(new QueryWorkflowStageAccessPolicy($request, $args, $roleAssignments, 'submissionId', $stageId));

        $this->addPolicy($assistantAccessPolicySet);

        return parent::authorize($request, $args, $roleAssignments);
    }
}
```

Create your own `PolicySet` class to define reusable rules.

```php
namespace PKP\security\authorization;

use APP\core\Request;
use PKP\security\authorization\PolicySet;

class ExamplePolicy extends PolicySet {
    public function __construct(Request $request, array $args, array $roleAssignments, ...)
    {
        parent::__construct($request);

        $this->addPolicy(...);
        $this->addPolicy(...);

        $policySet = new PolicySet(...);
        $policySet->addPolicy(...);
        $policySet->addPolicy(...);

        $this->addPolicy($policySet);
    }
}
```

```php
use APP\core\Request;
use APP\handler\Handler;
use PKP\security\authorization\ExamplePolicy;

class ExampleHandler extends Handler
{
    public function authorize(Request $request, array &$args, array $roleAssignments): bool
    {
        $this->addPolicy(new ExamplePolicy($request, $args, $roleAssignments, ...));

        return parent::authorize($request, $args, $roleAssignments);
    }
}
```

Define distinct policies for each route in the `Handler` by checking the requested operation.

```php
use APP\core\Request;
use APP\handler\Handler;

class DashboardHandler extends Handler
{
    public function authorize(Request $request, array &$args, array $roleAssignments): bool
    {

        $this->addPolicy(...);

        $requestedOp = $request->getRouter()->getRequestedOp($request);
        if ($requestedOp === 'adminStatistics') {
            $this->addPolicy(...);
        }

        return parent::authorize($request, $args, $roleAssignments);
    }
}
```

Check the route name when using an `APIHandler`.

```php
use APP\core\Request;
use APP\handler\Handler;

class SubmissionHandler extends APIHandler {
    public function authorize(Request $request, array &$args, array $roleAssignments): bool
    {

        $this->addPolicy(...);

        $routeName = $this->getSlimRequest()->getAttribute('route');
        if ($routeName === 'get') {
            $this->addPolicy(...);
        }

        return parent::authorize($request, $args, $roleAssignments);
    }
}
```

## Authorizing by User Role

A `PageHandler` will define which roles can access its operations and apply the `RoleBasedHandlerOperationPolicy` policy.

```php
use APP\core\Request;
use APP\handler\Handler;
use PKP\security\authorization\PolicySet;
use PKP\security\authorization\RoleBasedHandlerOperationPolicy;
use PKP\security\Role;

class ExampleHandler extends Handler
{

    public function __construct() {
        parent::construct();

        $this->addRoleAssignment(
            [Role::ROLE_ID_AUTHOR],
            ['authorStatistics']
        );

        $this->addRoleAssignment(
            [Role::ROLE_ID_ADMIN, Role::ROLE_ID_MANAGER]
            ['journalStatistics']
        );

        $this->addRoleAssignment(
            [Role::ROLE_ID_ADMIN],
            ['adminStatistics']
        );
    }

    public function authorize(Request $request, array &$args, array $roleAssignments): bool
    {
        $rolePolicy = new PolicySet(PolicySet::COMBINING_PERMIT_OVERRIDES);

        foreach($roleAssignments as $role => $operations) {
            $rolePolicy->addPolicy(new RoleBasedHandlerOperationPolicy($request, $role, $operations));
        }
        $this->addPolicy($rolePolicy);

        return parent::authorize($request, $args, $roleAssignments);
    }
}
```

An `APIHandler` will do the same when defining its routes.

```php
use APP\core\Request;
use PKP\handler\APIHandler;
use PKP\security\authorization\PolicySet;
use PKP\security\authorization\RoleBasedHandlerOperationPolicy;
use PKP\security\Role;

class SubmissionsHandler extends APIHandler
{

    public function __construct() {
        $this->_endpoints = [
            'GET' => [
                [
                    'pattern' => 'submissions/{id}',
                    'handler' => [$this, 'get'],
                    'roles' => [Role::ROLE_ID_MANAGER, Role::ROLE_ID_AUTHOR],
                ],
                [
                    'pattern' => 'submissions/{id}/stats',
                    'handler' => [$this, 'getStats'],
                    'roles' => [Role::ROLE_ID_MANAGER],
                ],
            ],
        ];
    }

    public function authorize(Request $request, array &$args, array $roleAssignments): bool
    {
        $rolePolicy = new PolicySet(PolicySet::COMBINING_PERMIT_OVERRIDES);

        foreach($roleAssignments as $role => $operations) {
            $rolePolicy->addPolicy(new RoleBasedHandlerOperationPolicy($request, $role, $operations));
        }
        $this->addPolicy($rolePolicy);

        return parent::authorize($request, $args, $roleAssignments);
    }
}
```

## Authorizing by Submission Assignment

When authorizing access to a submission, you must check what roles the user is assigned _for that submission_.

```php
use APP\core\Request;
use APP\handler\Handler;
use PKP\security\authorization\PolicySet;
use PKP\security\authorization\WorkflowStageAccessPolicy;

class SubmissionFileHandler extends Handler
{

    public function authorize(Request $request, array &$args, array $roleAssignments): bool
    {
        // Users are assigned to specific stages of a submission's
        // workflow. Check access to the stage, not the submission.
        // In this example, the stage id is submitted as a query
        // parameter with the request.
        $stageId = $request->getUserVar('stageId');

        // The submission ID should be submitted as a query
        // parameter. Tell the policy what parameter to check for
        // the submission id. In this example, we assume the URL
        // used for the request included ?submissionId=1
        $queryParam = 'submissionId';

        $this->addPoliicy(new WorkflowStageAccessPolicy($request, $args, $roleAssignments, $queryParam, $stageId));

        return parent::authorize($request, $args, $roleAssignments);
    }
}
```

This should be applied whenever you authorize access to any object of the submission's workflow. Editors can do double duty as Reviewers and Authors, and in such circumstances should not have access to all details of the workflow.

## Authorized Objects

Policies work by checking that the requested objects exist and that the current user has permission to access them. These objects can be stored when authorization is completed and retrieved later when responding to the request.

Store an authorized object when a `AuthorizationPolicy` has retrieved it from the database and it has passed that `AuthorizationPolicy`'s rules.

```php
namespace PKP\security\authorization;

use APP\core\Application;
use PKP\security\authorization\AuthorizationPolicy;

class QueryRequiredPolicy extends AuthorizationPolicy
{
    public function dataObjectEffect(): bool
    {
        // Get the requested query and confirm that it exists
        if (!$query) {
            return AuthorizationPolicy::AUTHORIZATION_DENY;
        }

        // Store the authorized object
        $this->addAuthorizedContextObject(Application::ASSOC_TYPE_QUERY, $query);

        return AuthorizationPolicy::AUTHORIZATION_PERMIT;
    }
}
```

Retrieve an authorized object in the `Handler`.

```php
use APP\core\Application;
use APP\handler\Handler;
use PKP\security\authorization\QueryRequiredPolicy;

class ExampleHandler extends Handler
{
    public function authorize(...)
    {
        // QueryRequiredPolicy stores the requested Query
        // as an authorized object
        $this->addPolicy(new QueryRequiredPolicy(...));
        return parent::authorize(...);
    }

    public function readQuery(...)
    {
        // Retrieve the authorized query object
        $query = $this->getAuthorizedContextObject(Application::ASSOC_TYPE_QUERY);

        ...
    }
}
```

You can access the current user's roles whenever the `RoleBasedHandlerOperationPolicy`  has been invoked.

```php
use APP\core\Application;
use APP\handler\Handler;
use PKP\security\authorization\RoleBasedHandlerOperationPolicy;

class ExampleHandler extends Handler
{

    public function authorize(...) {
        $this->addPolicy(new RoleBasedHandlerOperationPolicy(...));
        return parent::authorize(...);
    }

    public function readQuery(...) {
        $userRoles = $this->getAuthorizedContextObject(Application::ASSOC_TYPE_USER_ROLES);
        ...
    }
}
```

You can access the current user's assigned role in the current submission when the `WorkflowStageAccessPolicy` has been invoked.

```php
use APP\core\Application;
use APP\handler\Handler;
use PKP\security\authorization\WorkflowStageAccessPolicy;

class ExampleHandler extends Handler
{
    public function authorize(...) {
        $this->addPolicy(new WorkflowStageAccessPolicy(...));
        return parent::authorize(...);
    }

    public function readQuery(...) {
        $currentSubmission = $this->getAuthorizedContextObject(Application::ASSOC_TYPE_SUBMISSION);
        $assignedRoles = $this->getAuthorizedContextObject(Application::ASSOC_TYPE_ACCESSIBLE_WORKFLOW_STAGES);
        ...
    }
}
```

---

Now that the user has been authorized, learn how to [work with entities](./architecture-entities).
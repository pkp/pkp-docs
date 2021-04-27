---
title: Authorization - Technical Documentation - OJS|OMP|OPS
---

# Authorization

Each `Handler` must define policies to prevent unauthorized access. These policies are applied in the `authorize` method.

```php
class DashboardHandler extends Handler {
    /**
     * @copydoc PKPHandler::authorize()
     */
    public function authorize($request, &$args, $roleAssignments) {

        import('lib.pkp.classes.security.authorization.PKPSiteAccessPolicy');
        $this->addPolicy(new PKPSiteAccessPolicy($request, null, $roleAssignments));

        return parent::authorize($request, $args, $roleAssignments);
    }
}
```

More than one `Policy` can be applied.

```php
class IssueHandler extends Handler {
    /**
     * @copydoc PKPHandler::authorize()
     */
    public function authorize($request, &$args, $roleAssignments) {

        import('lib.pkp.classes.security.authorization.ContextRequiredPolicy');
        $this->addPolicy(new ContextRequiredPolicy($request));

        import('classes.security.authorization.OjsJournalMustPublishPolicy');
        $this->addPolicy(new OjsJournalMustPublishPolicy($request));

        return parent::authorize($request, $args, $roleAssignments);
    }
}
```

`Policy`s can be grouped into a `PolicySet`. Use `COMBINING_PERMIT_OVERRIDES` when you want to allow access if any of the policies pass.

```php
class WorkflowHandler extends Handler {
    /**
     * @copydoc PKPHandler::authorize()
     */
    public function authorize($request, &$args, $roleAssignments) {

        $submissionAccessPolicySet = new PolicySet(COMBINING_PERMIT_OVERRIDES);

        // Require that they are the author...
        import('lib.pkp.classes.security.authorization.internal.SubmissionAuthorPolicy');
        $submissionAccessPolicySet->addPolicy(new SubmissionAuthorPolicy($request));

        // ... OR that they are assigned to the submission.
        import('lib.pkp.classes.security.authorization.internal.UserAccessibleWorkflowStageRequiredPolicy');
        $submissionAccessPolicySet->addPolicy(new UserAccessibleWorkflowStageRequiredPolicy($request));

        $this->addPolicy($submissionAccessPolicySet);

        return parent::authorize($request, $args, $roleAssignments);
    }
}
```

Use `COMBINING_DENY_OVERRIDES` when you want to prevent access if any of the policies fail.

```php
class QueryHandler extends Handler {
    /**
     * @copydoc PKPHandler::authorize()
     */
    public function authorize($request, &$args, $roleAssignments) {

        $assistantAccessPolicySet = new PolicySet(COMBINING_DENY_OVERRIDES);

        // Require that they have the assistant role...
        import('lib.pkp.classes.security.authorization.RoleBasedHandlerOperationPolicy');
        $assistantAccessPolicySet->addPolicy(new RoleBasedHandlerOperationPolicy($request, ROLE_ID_ASSISTANT, $roleAssignments[ROLE_ID_ASSISTANT]));

        // ... AND that they are assigned to this stage of the workflow.
        import('lib.pkp.classes.security.authorization.QueryWorkflowStageAccessPolicy');
        $assistantAccessPolicySet->addPolicy(new QueryWorkflowStageAccessPolicy($request, $args, $roleAssignments, 'submissionId', $stageId));

        $this->addPolicy($assistantAccessPolicySet);

        return parent::authorize($request, $args, $roleAssignments);
    }
}
```

Create your own `PolicySet` class to define reusable rules.

```php
class ExamplePolicy extends PolicySet {
    public function __construct($request, $args, $roleAssignments, ...) {
        parent::__construct($request);

        $this->addPolicy(...);
        $this->addPolicy(...);

        $policySet = new PolicySet(...);
        $policySet->addPolicy(...);
        $policySet->addPolicy(...);
        $this->addPolicy($policySet);
    }
}

class ExampleHandler extends Handler {
    public function authorize($request, &$args, $roleAssignments) {
        $this->addPolicy(new ExamplePolicy($request, $args, $roleAssignments, ...));
        return parent::authorize($request, $args, $roleAssignments);
    }
}
```

Define distinct policies for each route in the `Handler` by checking the requested operation.

```php
class DashboardHandler extends Handler {
    public function authorize($request, &$args, $roleAssignments) {

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
class SubmissionHandler extends APIHandler {
    /**
     * @copydoc PKPHandler::authorize()
     */
    public function authorize($request, &$args, $roleAssignments) {

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
class ExampleHandler extends Handler {

    public function __construct() {
        parent::construct();

        $this->addRoleAssignment(
            [ROLE_ID_AUTHOR],
            ['authorStatistics']
        );

        $this->addRoleAssignment(
            [ROLE_ID_ADMIN, ROLE_ID_MANAGER]
            ['journalStatistics']
        );

        $this->addRoleAssignment(
            [ROLE_ID_ADMIN],
            ['adminStatistics']
        );
    }

    public function authorize($request, &$args, $roleAssignments) {
        import('lib.pkp.classes.security.authorization.PolicySet');
        $rolePolicy = new PolicySet(COMBINING_PERMIT_OVERRIDES);

        import('lib.pkp.classes.security.authorization.RoleBasedHandlerOperationPolicy');
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
class SubmissionsHandler extends APIHandler {

    public function __construct() {
        $this->_endpoints = [
            'GET' => [
                [
                    'pattern' => 'submissions/{id}',
                    'handler' => [$this, 'get'],
                    'roles' => [ROLE_ID_MANAGER, ROLE_ID_AUTHOR],
                ],
                [
                    'pattern' => 'submissions/{id}/stats',
                    'handler' => [$this, 'getStats'],
                    'roles' => [ROLE_ID_MANAGER],
                ],
            ],
        ];
    }

    public function authorize($request, &$args, $roleAssignments) {
        import('lib.pkp.classes.security.authorization.PolicySet');
        $rolePolicy = new PolicySet(COMBINING_PERMIT_OVERRIDES);

        import('lib.pkp.classes.security.authorization.RoleBasedHandlerOperationPolicy');
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
class SubmissionFileHandler extends Handler {

    public function authorize($request, &$args, $roleAssignments) {
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

        import('lib.pkp.classes.security.authorization.WorkflowStageAccessPolicy');
        $this->addPoliicy(new WorkflowStageAccessPolicy($request, $args, $roleAssignments, $queryParam, $stageId));

        return parent::authorize($request, $args, $roleAssignments);
    }
}
```

This should be applied whenever you authorize access to any object of the submission's workflow. Editors can do double duty as Reviewers and Authors, and in such circumstances should not have access to all details of the workflow.

## Authorized Objects

Policies work by checking that the requested objects exist and that the current user has permission to access them. These objects can be stored when authorization is completed and retrieved later when responding to the request.

Store an authorized object when a `Policy` has retrieved it from the database and it has passed that `Policy`'s rules.

```php
class QueryRequiredPolicy extends Policy {
    public function dataObjectEffect() {

        // Get the requested query and confirm that it exists
        if (!$query) {
            return AUTHORIZATION_DENY;
        }

        // Store the authorized object
        $this->addAuthorizedContextObject(ASSOC_TYPE_QUERY, $query);

        return AUTHORIZATION_PERMIT;
    }
}
```

Retrieve an authorized object in the `Handler`.

```php
class ExampleHandler extends Handler {

    public function authorize(...) {
        // QueryRequiredPolicy stores the requested Query
        // as an authorized object
        $this->addPolicy(new QueryRequiredPolicy(...));
        return parent::authorize(...);
    }

    public function readQuery(...) {
        // Retrieve the authorized query object
        $query = $this->getAuthorizedContextObject(ASSOC_TYPE_QUERY);

        ...
    }
}
```

You can access the current user's roles whenever the `RoleBasedHandlerOperationPolicy`  has been invoked.

```php
class ExampleHandler extends Handler {

    public function authorize(...) {
        $this->addPolicy(new RoleBasedHandlerOperationPolicy(...));
        return parent::authorize(...);
    }

    public function readQuery(...) {
        $userRoles = $this->getAuthorizedContextObject(ASSOC_TYPE_USER_ROLES);
        ...
    }
}
```

You can access the current user's assigned role in the current submission when the `WorkflowStageAccessPolicy` has been invoked.

```php
class ExampleHandler extends Handler {

    public function authorize(...) {
        $this->addPolicy(new WorkflowStageAccessPolicy(...));
        return parent::authorize(...);
    }

    public function readQuery(...) {
        $currentSubmission = $this->getAuthorizedContextObject(ASSOC_TYPE_SUBMISSION);
        $assignedRoles = $this->getAuthorizedContextObject(ASSOC_TYPE_ACCESSIBLE_WORKFLOW_STAGES);
        ...
    }
}
```

---

Now that the user has been authorized, learn how [Service classes are used to fulfil the request](./architecture-services).
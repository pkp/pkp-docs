---
book: dev-documentation
version: 3.3
title: Autorização - Documentação Técnica - OJS|OMP|OPS 3.3
---

# Autorização

Cada `Handler` deve definir políticas para evitar acesso não autorizado. Essas políticas são aplicadas no método `authorize`.

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

Mais de uma `Policy` pode ser aplicada.

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

As `Policy`s podem ser agrupadas em um `PolicySet`. Use `COMBINING_PERMIT_OVERRIDES` quando quiser permitir o acesso se alguma das políticas for aprovada.

```php
class WorkflowHandler extends Handler {
    /**
     * @copydoc PKPHandler::authorize()
     */
    public function authorize($request, &$args, $roleAssignments) {

        $submissionAccessPolicySet = new PolicySet(COMBINING_PERMIT_OVERRIDES);

        // Exija que eles sejam o autor...
        import('lib.pkp.classes.security.authorization.internal.SubmissionAuthorPolicy');
        $submissionAccessPolicySet->addPolicy(new SubmissionAuthorPolicy($request));

        // ... OU que eles são atribuídos à submissão.
        import('lib.pkp.classes.security.authorization.internal.UserAccessibleWorkflowStageRequiredPolicy');
        $submissionAccessPolicySet->addPolicy(new UserAccessibleWorkflowStageRequiredPolicy($request));

        $this->addPolicy($submissionAccessPolicySet);

        return parent::authorize($request, $args, $roleAssignments);
    }
}
```

Use `COMBINING_DENY_OVERRIDES` quando quiser impedir o acesso se alguma das políticas falhar.

```php
class QueryHandler extends Handler {
    /**
     * @copydoc PKPHandler::authorize()
     */
    public function authorize($request, &$args, $roleAssignments) {

        $assistantAccessPolicySet = new PolicySet(COMBINING_DENY_OVERRIDES);

      // Exigir que eles tenham o papel de assistente...
        import('lib.pkp.classes.security.authorization.RoleBasedHandlerOperationPolicy');
        $assistantAccessPolicySet->addPolicy(new RoleBasedHandlerOperationPolicy($request, ROLE_ID_ASSISTANT, $roleAssignments[ROLE_ID_ASSISTANT]));

        // ... E que eles sejam atribuídos a este estágio do fluxo de trabalho.
        import('lib.pkp.classes.security.authorization.QueryWorkflowStageAccessPolicy');
        $assistantAccessPolicySet->addPolicy(new QueryWorkflowStageAccessPolicy($request, $args, $roleAssignments, 'submissionId', $stageId));

        $this->addPolicy($assistantAccessPolicySet);

        return parent::authorize($request, $args, $roleAssignments);
    }
}
```

Crie sua própria classe `PolicySet` para definir regras reutilizáveis.

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

Defina políticas distintas para cada rota no `Handler` verificando a operação solicitada.

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

Verifique o nome da rota ao usar um `APIHandler`.

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

## Autorização por papel de usuário

Um `PageHandler` definirá quais papeis podem acessar suas operações e aplicará a política `RoleBasedHandlerOperationPolicy`.

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

Um `APIHandler` fará o mesmo ao definir suas rotas.

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

## Autorização por Atribuição de Submissão

Ao autorizar o acesso a uma submissão, você deve verificar quais papéis o usuário recebeu _para essa submissão_.

```php
class SubmissionFileHandler extends Handler {

    public function authorize($request, &$args, $roleAssignments) {
         // Os usuários são atribuídos a estágios específicos de uma submissão
         // fluxo de trabalho. Verifique o acesso ao estágio, não a submissão.
        // Neste exemplo, o id do estágio é enviado como uma consulta
         // parâmetro com a solicitação.
        $stageId = $request->getUserVar('stageId');

       // O ID da submissão deve ser enviado como uma consulta
         // parâmetro. Informe à política qual parâmetro verificar
         // o id da submissão. Neste exemplo, assumimos a URL
         // usado para a solicitação incluída ?submissionId=1
        $queryParam = 'submissionId';

        import('lib.pkp.classes.security.authorization.WorkflowStageAccessPolicy');
        $this->addPoliicy(new WorkflowStageAccessPolicy($request, $args, $roleAssignments, $queryParam, $stageId));

        return parent::authorize($request, $args, $roleAssignments);
    }
}
```

Isso deve ser aplicado sempre que você autorizar o acesso a qualquer objeto do fluxo de trabalho da submissão. Os editores podem fazer dupla função como avaliadores e autores e, em tais circunstâncias, não devem ter acesso a todos os detalhes do fluxo de trabalho.

## Objetos Autorizados

As políticas funcionam verificando se os objetos solicitados existem e se o usuário atual tem permissão para acessá-los. Esses objetos podem ser armazenados quando a autorização for concluída e recuperados posteriormente ao responder à solicitação.

Armazenar um objeto autorizado quando uma `Policy` o tiver recuperado do banco de dados e tiver passado as regras dessa `Policy`.

```php
class QueryRequiredPolicy extends Policy {
    public function dataObjectEffect() {

       // Obtém a consulta solicitada e confirma que ela existe
        if (!$query) {
            return AUTHORIZATION_DENY;
        }

       // Armazena o objeto autorizado
        $this->addAuthorizedContextObject(ASSOC_TYPE_QUERY, $query);

        return AUTHORIZATION_PERMIT;
    }
}
```

Recupere um objeto autorizado no `Handler`.

```php
class ExampleHandler extends Handler {

    public function authorize(...) {
        // QueryRequiredPolicy armazena a consulta solicitada
         // como um objeto autorizado
        $this->addPolicy(new QueryRequiredPolicy(...));
        return parent::authorize(...);
    }

    public function readQuery(...) {
        // Recupera o objeto de consulta autorizado
        $query = $this->getAuthorizedContextObject(ASSOC_TYPE_QUERY);

        ...
    }
}
```

Você pode acessar os papéis do usuário atual sempre que o `RoleBasedHandlerOperationPolicy` for invocado.

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

Você pode acessar a função atribuída do usuário atual na subimissão atual quando o `WorkflowStageAccessPolicy` tiver sido invocado.

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

Agora que o usuário foi autorizado, saiba como as [classes de serviço são usadas para atender à solicitação](./architecture-services).
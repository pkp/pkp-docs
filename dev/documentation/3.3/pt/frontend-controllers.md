---
book: dev-documentation
version: 3.3
title: Controllers - Frontend - Documentação Técnica - OJS|OMP|OPS 3.3
---

# Controllers

> **Controllers estão obsoletos** e não devem ser usados para criar novos recursos. A documentação fornecida aqui é para desenvolvedores que precisam modificar um controlador existente. 
> 
> {:.warning}

Muitos dos objetos nas aplicações do PKP ainda não foram convertidos para usar a [API REST](/dev/api/), [esquema de entidade](./architecture-entities) a> e [Biblioteca de IU](./frontend-ui-library). Esses objetos fazem uso de controllers.

Um controlador é um tipo especial de `Handler` que recebe e responde a solicitações ajax. Ele recebe solicitações HTTP, compila um template em um fragmento de HTML para o componente e o envia de volta em uma carga JSON. Um JavaScript handler processa o JSON e atualiza o DOM.

Os desenvolvedores são incentivados a ler as seções doecontroller da documentação [Rotas](./architecture-routes) e [Handlers](./architecture-handlers) antes de continuar.

## Grids

As grids fornecem um controlador de interface do usuário que é usado para listar itens. Uma grid normalmente fornece a capacidade de adicionar, editar e excluir esses itens.

Grids são compostas por um `GridHandler` que coordena toda a lista. Um `GridRow` é criado para cada item na lista. E uma ou mais classes `GridCell` determinam quais dados exibir em cada coluna.

Uma grid funciona estendendo a classe `GridHandler` e definindo um método `initialize`.

```php
import('lib.pkp.classes.controllers.grid.GridHandler');
class PKPReviewerGridHandler extends GridHandler {
    /**
     * @copydoc GridHandler::initialize()
     */
    public function initialize(Request $request, $args = null) {
        parent::initialize($request, $args);

        $this->setTitle('user.role.reviewers');
    }
}
```

Ações como adicionar um novo item à grid são definidas no método `initialize`. O exemplo abaixo adiciona um botão que abre um modal com um formulário.

> A próxima seção descreverá como carregar e manipular um controlador de formulário. 
> 
> {:.notice}

```php
public function initialize(Request $request, $args = null) {
    parent::initialize($request, $args);

    $this->setTitle('user.role.reviewers');

  // Obtém uma URL para a operação `showReviewerForm` do GridHandler
    $reviewerFormUrl = $request->getRouter()->url(
        $request,
        null,
        null,
        'showReviewerForm',
        null,
        [
            'submissionId' => $submissionId,
        ]
    );

    import('lib.pkp.classes.linkAction.request.AjaxModal');
    $this->addAction(
        new LinkAction(
            'addReviewer',
            new AjaxModal(
                $reviewerFormUrl,
                __('editor.submission.addReviewer'),
                'modal_add_user'
            ),
            __('editor.submission.addReviewer'),
            'add_user'
        )
    );

    ...
}
```

As colunas que devem ser mostradas em cada linha também são definidas no método `initialize`.

```php
public function initialize(Request $request, $args = null) {

    ...

    $cellProvider = new ReviewerGridCellProvider();

 // Adiciona uma coluna para o nome do avaliador
    $this->addColumn(
        new GridColumn(
            'name',
            'user.name',
            null,
            null,
            $cellProvider
        )
    );

  // Adiciona uma coluna para o status da atribuição de avaliação
    $this->addColumn(
        new GridColumn(
            'status',
            'common.status',
            null,
            null,
            $cellProvider,
        )
    );
}
```

Finalmente, a grid deve definir um método `loadData` que obtém os itens a serem exibidos. Ele deve retornar um `array` de [DataObjects](./architecture-entities#dataobject-class).

```php
import('lib.pkp.classes.controllers.grid.GridHandler');
class PKPReviewerGridHandler extends GridHandler {
    /**
     * @copydoc GridHandler::initialize()
     */
    public function initialize(Request $request, $args = null) {
        ...
    }

    /**
     * @see GridHandler::loadData()
     */
    protected function loadData($request, $filter) {
       // Obter as atribuições de avaliação existentes para esta submissão
        $reviewRound = $this->getReviewRound();
        $reviewAssignmentDao = DAORegistry::getDAO('ReviewAssignmentDAO'); /* @var $reviewAssignmentDao ReviewAssignmentDAO */
        return $reviewAssignmentDao->getByReviewRoundId($reviewRound->getId());
    }
}
```

Cada item no array retornado por `loadData` será passado para uma nova classe que estende a classe `GridRow`.

```php
import('lib.pkp.classes.controllers.grid.GridRow');
class ReviewerGridRow extends GridRow {

    /**
     * @copydoc GridRow::initialize()
     */
    public function initialize($request, $template = null) {
        parent::initialize($request, $template);

        ...
    }
}
```

As ações relacionadas a cada linha devem ser definidas no método `initialize` da classe `GridRow`. O exemplo abaixo adiciona um botão que abre um modal com os detalhes da avaliação.

```php
import('lib.pkp.classes.controllers.grid.GridRow');
class ReviewerGridRow extends GridRow {

    /**
     * @copydoc GridRow::initialize()
     */
    public function initialize($request, $template = null) {
        parent::initialize($request, $template);

        // Get a URL to the GridHandler's `readReview` op
        $readReviewUrl = $request->getRouter()->url(
            $request,
            null,
            null,
            'readReview',
            null,
            [
                'submissionId' => $submissionId,
                'reviewerId' => $this->getId(),
            ]
        );

        $this->addAction(
            new LinkAction(
                'readReview',
                new AjaxModal(
                    $readReviewUrl,
                    __('editor.review.reviewDetails'),
                    'modal_information'
                ),
                __('editor.review.reviewDetails'),
                'more_info'
            )
        );
    }
}
```

Deixe o `GridHandler` saber qual classe `GridRow` deve ser carregada.

```php
import('lib.pkp.classes.controllers.grid.GridHandler');
class PKPReviewerGridHandler extends GridHandler {

    ...

    /**
     * @see GridHandler::getRowInstance()
     * @return ReviewerGridRow
     */
    protected function getRowInstance() {
        import('lib.pkp.controllers.grid.users.reviewer.ReviewerGridRow');
        return new ReviewerGridRow();
    }
}
```

Finalmente, uma classe `GridCellProvider` mapeará cada item para uma das colunas da grid para exibição.

> Leia os exemplos acima que usam `$this->addColumn()` para ver como o provedor de célula da grid é carregada no `GridHandler`. 
> 
> {:.tip}

```php
import('lib.pkp.classes.controllers.grid.DataObjectGridCellProvider');
class ReviewerGridCellProvider extends DataObjectGridCellProvider {

    /**
     * @param $row GridRow
     * @param $column GridColumn
     * @return array
     */
    public function getTemplateVarsFromRowColumn($row, $column) {

        // Obter o ReviewAssignment para esta linha
        $reviewAssignment = $row->getData();

        switch ($column->getId()) {
            case 'name':
                return ['label' => $reviewAssignment->getReviewerFullName()];
            case 'status':
                return ['label' => $reviewAssignment->getStatus()];
        }

        return parent::getTemplateVarsFromRowColumn($row, $column);
    }
}
```

### GridHandler Ops

Em um exemplo acima, uma ação foi adicionada a cada atribuição de avaliação que abre a avaliação em um modal. Analise esse código abaixo.

```php
import('lib.pkp.classes.controllers.grid.GridRow');
class ReviewerGridRow extends GridRow {

    /**
     * @copydoc GridRow::initialize()
     */
    public function initialize($request, $template = null) {
        parent::initialize($request, $template);

    // Obtém uma URL para a operação `readReview` do GridHandler
        $readReviewUrl = $request->getRouter()->url(
            $request,
            null,
            null,
            'readReview',
            null,
            [
                'submissionId' => $submissionId,
                'reviewerId' => $this->getId(),
            ]
        );

        $this->addAction(
            new LinkAction(
                'readReview',
                new AjaxModal(
                    $readReviewUrl,
                    __('editor.review.reviewDetails'),
                    'modal_information'
                ),
                __('editor.review.reviewDetails'),
                'more_info'
            )
        );
    }
}
```
O `LinkAction` carrega o modal e o modal faz uma solicitação para o `$readReviewUrl`, que é roteado para o `PKPReviewerGridHandler`. In order to make this request work, the `PKPReviewerGridHandler` must implement a `readReview` method that returns the HTML to be displayed in the modal.

```php
import('lib.pkp.classes.controllers.grid.GridHandler');
class PKPReviewerGridHandler extends GridHandler {

    ...

    /**
     * Return the review details to be displayed in the modal
     *
     * @param $args array
     * @param $request PKPRequest
     * @return JSONMessage JSON object
     */
    public function readReview($args, $request) {

        // The review assignment should be an authorized
        // context object due to the authorization policies.
        // Learn more about authorization under the
        // Architecture > Authorization section of the
        // documentation.
        $reviewAssignment = $this->getAuthorizedContextObject(ASSOC_TYPE_REVIEW_ASSIGNMENT);

        // Pass the review assignment to the template
        $templateMgr = TemplateManager::getManager($request);
        $templateMgr->assign([
            'reviewAssignment' => $reviewAssignment,
        ]);

        // Return a JSONMessage which renders a template
        // to be displayed in the modal.
        return $templateMgr->fetchJson('controllers/grid/users/reviewer/readReview.tpl');
    }
}
```

Every action created by the grid handler or the grid row will require an operation in the `GridHandler` to receive the request and return a `JSONMessage`.

## Forms

Most controllers are used to display a `Form`, which presents the form, receives the form submission, validates the input, and executes the changes.

> The forms described here are used by Controllers which have been deprecated. Use the forms in the [UI Library](./frontend-components#forms) when building forms for new features. 
> 
> {:.warning}

Every form extends the `Form` class. Define the template to use to render the form and add validation checks in the constructor method.

```php
import('lib.pkp.classes.form.Form');

class PKPAuthorForm extends Form {

    public function __construct($publication, $author =  null) {

        // The template that should be used to render the form
        parent::__construct('controllers/grid/users/author/form/authorForm.tpl');

        // Save object dependencies that will be needed to
        // render, validate and execute the form.
        $this->publication = $publication;
        $this->author = $author;

        // Add validation checks
        // This example requires a given name in the publication's
        // default locale
        $this->addCheck(new FormValidatorLocale(
            $this,
            'givenName',
            'required',
            'user.profile.form.givenNameRequired',
            $publication->getData('locale')
        ));

        // All forms should validate the request for a POST
        // method and check the CSRF token
        $this->addCheck(new FormValidatorPost($this));
        $this->addCheck(new FormValidatorCSRF($this));
    }
}
```

Initialize the data that will be used in the form. This makes pre-existing data available in the template when editing an object.

```php
class PKPAuthorForm extends Form {

    ...

    public function initData() {

        if ($this->author) {
            $this->_data = [
                'authorId' => $this->author->getId(),
                'givenName' => $this->author->getGivenName(null),
                ...
            ];
        }

        return parent::initData();
    }
}
```

Render the form's template.

```php
class PKPAuthorForm extends Form {

    ...

    public function fetch($request, $template = null, $display = false) {

        $templateMgr = TemplateManager::getManager($request);
        $templateMgr->assign(array(
            'submissionId' => $this->publication->getData('submissionId'),
            'publicationId' => $this->publication->getId(),
        ));

        // By default the template defined in the constructor
        // will be loaded
        return parent::fetch($request, $template, $display);
    }
}
```

Read the input data when the form is submitted.

```php
class PKPAuthorForm extends Form {

    ...

    public function readInputData() {

        // Store request variables from $_POST
        // in $this->_data.
        $this->readUserVars(array(
            'authorId',
            'givenName',
            ...
        ));
    }
}
```

Save the form and update the object.

```php
class PKPAuthorForm extends Form {

    ...

    public function execute(...$functionParams) {

        $author = $this->author;
        if (!$author) {
            $author = DAORegistry::getDAO('AuthorDAO')->newDataObject();
        }

        $author->setGivenName($this->getData('givenName'), null);

        parent::execute(...$functionParams);

        if ($this->author) {
            DAORegistry::getDAO('AuthorDAO')->updateObject($author);
        } else {
            DAORegistry::getDAO('AuthorDAO')->insertObject($author);
        }

        return $author->getId();
    }
}
```

> The execute method will only be called if it passes the validation requirements configured in the constructor. 
> 
> {:.notice}

Finally, each form needs a template. Use the `FormBuilderVocabulary` to build a template for the form and the fields.

```html
<!-- controllers/grid/users/author/form/authorForm.tpl -->
<script>
    $(function() {ldelim}
        $('#editAuthor').pkpHandler(
            '$.pkp.controllers.form.AjaxFormHandler'
        );
    {rdelim});
</script>

<form class="pkp_form" id="editAuthor" method="post" action="{url op="updateAuthor" authorId=$authorId}">
    <input type="hidden" name="submissionId" value="{$submissionId|escape}" />
    <input type="hidden" name="publicationId" value="{$publicationId|escape}" />
    {csrf}

    {fbvElement type="text" label="user.givenName" multilingual="true" name="givenName" id="givenName" value=$givenName required="true"}

    ...

    {fbvFormButtons submitText="common.save"}
</form>
```

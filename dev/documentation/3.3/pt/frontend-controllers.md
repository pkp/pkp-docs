---
book: dev-documentation
version: 3.3
title: Controllers - Frontend - Documentação Técnica - OJS|OMP|OPS 3.3
---

# Controllers

> **Controllers estão obsoletos** e não devem ser usados para criar novos recursos. A documentação fornecida aqui é para desenvolvedores que precisam modificar um controlador existente.
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

O `LinkAction` carrega o modal e o modal faz uma solicitação para o `$readReviewUrl`, que é roteado para o `PKPReviewerGridHandler`. Para que essa solicitação funcione, o `PKPReviewerGridHandler` deve implementar um método `readReview` que retorne o HTML a ser exibido no modal.

```php
import('lib.pkp.classes.controllers.grid.GridHandler');
class PKPReviewerGridHandler extends GridHandler {

    ...

    /**
     * Retornar os detalhes da avaliação a serem exibidos no modal
     *
     * @param $args array
     * @param $request PKPRequest
     * @return JSONMessage JSON object
     */
    public function readReview($args, $request) {

        // A atribuição de avaliação deve ser uma autorização
         // objeto de contexto devido às políticas de autorização.
        // Saiba mais sobre autorização sob o
         // Arquitetura > seção de autorização da
         // documentação.
        $reviewAssignment = $this->getAuthorizedContextObject(ASSOC_TYPE_REVIEW_ASSIGNMENT);

    // Passa a atribuição de avaliação para o template
        $templateMgr = TemplateManager::getManager($request);
        $templateMgr->assign([
            'reviewAssignment' => $reviewAssignment,
        ]);

         // Retorna uma JSONMessage que renderiza um template
         // a ser exibido no modal.
        return $templateMgr->fetchJson('controllers/grid/users/reviewer/readReview.tpl');
    }
}
```

Cada ação criada pelo grid handler ou linha de grid exigirá uma operação no `GridHandler` para receber a solicitação e retornar um `JSONMessage`.

## Forms

A maioria dos controladores são usados para exibir um `Form`, que apresenta o formulário, recebe o envio do formulário, valida a entrada e executa as alterações.

> Os formulários descritos aqui são usados por Controllers que foram descontinuados. Use os formulários na [Biblioteca de IU](./frontend-components#forms) ao criar formulários para novos recursos.
> {:.warning}

Cada formulário estende a classe `Form`. Defina o template a ser usado para renderizar o formulário e adicionar verificações de validação no método construtor.

```php
import('lib.pkp.classes.form.Form');

class PKPAuthorForm extends Form {

    public function __construct($publication, $author =  null) {

        // O template que deve ser usado para renderizar o formulário
        parent::__construct('controllers/grid/users/author/form/authorForm.tpl');

         // Salva dependências de objetos que serão necessárias para
         // renderizar, validar e executar o formulário.
        $this->publication = $publication;
        $this->author = $author;

         // Adiciona verificações de validação
         // Este exemplo requer um determinado nome na publicação
         // local padrão
        $this->addCheck(new FormValidatorLocale(
            $this,
            'givenName',
            'required',
            'user.profile.form.givenNameRequired',
            $publication->getData('locale')
        ));

        // Todos os formulários devem validar a solicitação de um POST
        // método e verifica o token CSRF
        $this->addCheck(new FormValidatorPost($this));
        $this->addCheck(new FormValidatorCSRF($this));
    }
}
```

Inicialize os dados que serão usados no formulário. Isso torna os dados pré-existentes disponíveis no template ao editar um objeto.

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

Renderize o template do formulário.

```php
class PKPAuthorForm extends Form {

    ...

    public function fetch($request, $template = null, $display = false) {

        $templateMgr = TemplateManager::getManager($request);
        $templateMgr->assign(array(
            'submissionId' => $this->publication->getData('submissionId'),
            'publicationId' => $this->publication->getId(),
        ));

         // Por padrão o template definido no construtor
         //será carregado
        return parent::fetch($request, $template, $display);
    }
}
```

Leia os dados de entrada quando o formulário for enviado.

```php
class PKPAuthorForm extends Form {

    ...

    public function readInputData() {

         // Armazena variáveis de requisição de $_POST
         // em $this->_data.
        $this->readUserVars(array(
            'authorId',
            'givenName',
            ...
        ));
    }
}
```

Salve o formulário e atualize o objeto.

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

> O método execute só será chamado se passar nos requisitos de validação configurados no construtor.
> {:.notice}

Finalmente, cada formulário precisa de um template. Use o `FormBuilderVocabulary` para criar um template para o formulário e os campos.

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

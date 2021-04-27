---
title: Controllers - Frontend - Technical Documentation - OJS/OMP
---

# Controllers

> **Controllers are deprecated** and should not be used to build new features. The documentation provided here is for developers who need to modify an existing controller. 
> 
> {:.warning}

Many of the objects in PKP's applications have not yet been converted to use the [REST API](/dev/api/), [entity schema](./architecture-entities), and [UI Library](./frontend-ui-library). These objects make use of controllers.

A controller is a special kind of `Handler` which receives and responds to ajax requests. It receives HTTP requests, compiles a template into a fragment of HTML for the component, and sends it back in a JSON payload. A JavaScript handler processes the JSON and updates the DOM.

Developers are encouraged to read the controller sections of the [Routes](./architecture-routes) and [Handlers](./architecture-handlers) documentation before continuing.

## Grids

Grids provide a UI controller which is used to list items. A grid typically provides the ability to add, edit and delete these items.

Grids are composed of a `GridHandler` which coordinates the whole list. A `GridRow` is created for each item in the list. And one or more `GridCell` classes determine which data to display in each column.

A grid works by extending the `GridHandler` class and defining an `initialize` method.

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

Actions such as adding a new item to the grid are defined in the `initialize` method. The example below adds a button that opens a modal with a form.

> The next section will describe how to load and handle a form controller. 
> 
> {:.notice}

```php
public function initialize(Request $request, $args = null) {
    parent::initialize($request, $args);

    $this->setTitle('user.role.reviewers');

    // Get a URL to the GridHandler's `showReviewerForm` op
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

The columns that should be shown in each row are also defined in the `initialize` method.

```php
public function initialize(Request $request, $args = null) {

    ...

    $cellProvider = new ReviewerGridCellProvider();

    // Add a column for the reviewer's name
    $this->addColumn(
        new GridColumn(
            'name',
            'user.name',
            null,
            null,
            $cellProvider
        )
    );

    // Add a column for the status of the review assignment
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

Finally, the grid must define a `loadData` method that gets the items to be displayed. It should return an `array` of [DataObjects](./architecture-entities#dataobject-class).

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
        // Get the existing review assignments for this submission
        $reviewRound = $this->getReviewRound();
        $reviewAssignmentDao = DAORegistry::getDAO('ReviewAssignmentDAO'); /* @var $reviewAssignmentDao ReviewAssignmentDAO */
        return $reviewAssignmentDao->getByReviewRoundId($reviewRound->getId());
    }
}
```

Each item in the array returned by `loadData` will be passed to a new class that extends the `GridRow` class.

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

Actions related to each row should be defined in the `initialize` method of the `GridRow` class. The example below adds a button that opens a modal with the review details.

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

Let the `GridHandler` know which `GridRow` class should be loaded.

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

Finally, a `GridCellProvider` class will map each item to one of the grid columns for display.

> Read the examples above that use `$this->addColumn()` to see how the grid cell provider is loaded in the `GridHandler`. 
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

        // Get the ReviewAssignment for this row
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

In an example above an action was added to each review assignment that opens the review in a modal. Review that code below.

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
The `LinkAction` loads the modal and the modal makes a request to the `$readReviewUrl`, which is routed to the `PKPReviewerGridHandler`. In order to make this request work, the `PKPReviewerGridHandler` must implement a `readReview` method that returns the HTML to be displayed in the modal.

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

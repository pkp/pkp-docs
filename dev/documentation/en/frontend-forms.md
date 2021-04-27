---
title: Forms - Frontend - Technical Documentation - OJS/OMP
---

# Forms

[Forms](/dev/ui-library/dev/#/component/Form) coordinate the activity of many nested components. In order to ensure that forms implement accessible markup and support multilingual input, helper classes are available to create, configure and display forms.

Each form extends the `FormComponent` class.

```php
/**
 * @file classes/components/form/context/PKPContactForm.inc.php
 */
namespace PKP\components\forms\context;
use \PKP\components\forms\FormComponent;

/**
 * Each form should have a unique ID defined in a constant
 */
define('FORM_CONTACT', 'contact');

class PKPContactForm extends FormComponent {
    /** @copydoc FormComponent::$id */
    public $id = FORM_CONTACT;

    /** @copydoc FormComponent::$method */
    public $method = 'PUT';

    /**
     * Constructor
     *
     * @param $action string URL to submit the form to
     * @param $locales array Supported locales
     * @param $context Context Journal or Press to change settings for
     */
    public function __construct($action, $locales, $context) {
        $this->action = $action;
        $this->locales = $locales;

        ...
    }
}
```

Add fields to the form by using one of the available `FieldXXXX` component types. Include a `use` statement at the top of the file to import the field class.

```php
use \PKP\components\forms\FieldText;
```

And add fields in the `__construct` method.

```php
public function __construct($action, $locales, $context) {
    $this->action = $action;
    $this->locales = $locales;

    $this->addField(new FieldText('contactName', [
            'label' => __('common.name'),
            'isRequired' => true,
            'value' => $context->getData('contactName'),
        ]))
        ->addField(new FieldText('contactEmail', [
            'label' => __('user.email'),
            'isRequired' => true,
            'value' => $context->getData('contactEmail'),
        ]));
}
```

> Every form field in the [UI Library](/dev/ui-library/dev) has an equivalent PHP class in `\PKP\components\forms`. 
> 
> {:.tip}

Forms will be created by a `PageHandler` and passed to the `TemplateManager` as state. First, create an instance of the form by passing the URL where it should be submitted and the locales supported by the current context.

```php
// The URL where the form will be submitted
$apiUrl = $request
    ->getDispacher()
    ->url(
        $request,
        ROUTE_API,
        $context->getPath(),
        'contexts/' . $context->getId()
    );

// Get a key/map of locale keys and names
$supportedFormLocales = $context->getSupportedFormLocales();
$localeNames = AppLocale::getAllLocales();
$locales = array_map(function($localeKey) use ($localeNames) {
    return ['key' => $localeKey, 'label' => $localeNames[$localeKey]];
}, $supportedFormLocales);

// Create an instance of the contact form
$contactForm = new PKP\components\forms\context\PKPContactForm($apiUrl, $locales, $context);
```

Then use the `getConfig()` method to compile all of the required props and pass them to the template's [component state](frontend-ui-library#state-management-for-complex-components).

```php
$templateMgr = TemplateManager::getManager($request);
$templateMgr->setState([
    'components' => [
        FORM_CONTACT => $contactForm->getConfig(),
    ],
]);
```

Finally, bind the props to a `<pkp-form>` component in the template and use the `set` method to [manage component state](frontend-ui-library#state-management-for-complex-components).

```html
{extends file="layouts/backend.tpl"}

{block name="page"}
    <pkp-form
        v-bind="components.{$smarty.const.FORM_CONTACT}"
        @set="set"
    />
{/block}
```

### Locales

Every form expects to receive an array of locales it should support. This list must be drawn from the context settings.

Use the supported submission locales whenever the form handles submission data, such as title, abstract, contributors and galleys.

```php
$supportedLocales = $context->getSupportedSubmissionLocales();
```

Use the supported form locales for most other forms, such as context settings and issue data.

```php
$supportedLocales = $context->getSupportedFormLocales();
```

Then compile the locales into an array with the locale key and label.

```php
$localeNames = AppLocale::getAllLocales();
$locales = array_map(function($localeKey) use ($localeNames) {
    return ['key' => $localeKey, 'label' => $localeNames[$localeKey]];
}, $supportedLocales);

$contactForm = new PKP\components\forms\context\PKPContactForm($apiUrl, $locales, $context);
```

### Modify Forms

It is possible to add, edit, or remove fields from an existing form. This can be necessary when an application needs to modify a base form or when a plugin wants to replace a field in a form.

Use an extended form class when an application needs to modify a form shared by other applications. The example below adds a field to the journal settings form to request a journal abbreviation in OJS.

```php
namespace APP\components\forms\context;
use \PKP\components\forms\context\PKPContextForm;
use \PKP\components\forms\FieldText;

class ContextForm extends PKPContextForm {

    /**
     * @copydoc PKPContextForm::__construct()
     */
    public function __construct($action, $locales, $baseUrl, $context) {
        parent::__construct($action, $locales, $baseUrl, $context);

        $this->addField(new FieldText('abbreviation', [
                'label' => __('manager.setup.journalAbbreviation'),
                'isMultilingual' => true,
                'value' => $context ? $context->getData('abbreviation') : null,
            ]), [FIELD_POSITION_AFTER, 'acronym']);
    }
}
```

Use the `Form::config::before` hook when a [plugin](http://localhost:4000/dev/plugin-guide/en/) needs to modify a form. The example below removes the free-text subject metadata field and replaces it with a dropdown list.

```php
HookRegistry::register('Form::config::before', function($hookName, $form) {

    // Only modify the metadata form
    if (!defined('FORM_METADATA') || $form->id !== FORM_METADATA) {
        return;
    }

    $form->removeField('subjects');

    $form->addField(new \PKP\components\forms\FieldSelect('subjects') {
        'label' => __('common.subjects'),
        'isMultilingual' => true,
        'options' => [
            ['value' => 'geology', 'label' => __('subject.geology'),
            ['value' => 'physics', 'label' => __('subject.physics'),
        ],
    });

    return false;
}
```

### Groups

Fields can be grouped together to provide a shared label and description.

```php
namespace PKP\components\forms\context;
use \PKP\components\forms\FormComponent;
use \PKP\components\forms\FieldText;

define('FORM_MASTHEAD', 'masthead');

class PKPMastheadForm extends FormComponent {
    /** @copydoc FormComponent::$id */
    public $id = FORM_MASTHEAD;

    /** @copydoc FormComponent::$method */
    public $method = 'PUT';

    /**
     * Constructor
     *
     * @param $action string URL to submit the form to
     * @param $locales array Supported locales
     * @param $context Context Journal or Press to change settings for
     */
    public function __construct($action, $locales, $context) {
        $this->action = $action;
        $this->locales = $locales;

        $this->addGroup([
                'id' => 'identity',
                'label' => __('manager.setup.identity'),
            ])
            ->addField(new FieldText('name', [
                ...
                'groupId' => 'identity',
            ]))
            ->addField(new FieldText('acronym', [
                ...
                'groupId' => 'identity',
            ]));
    }
}
```

Fields in a group are placed in a `<fieldset>`. The UI Library includes an example of [field groups](/dev/ui-library/dev/#/component/Form/with-groups).

### Conditional Display

Fields can be shown or hidden based on the value of another field. This can be used to hide fields that are not relevant when a feature is enabled or disabled.

In the example below the `announcementsIntroduction` field will be hidden unless the `enableAnnouncements` field has a truthy value.

```php
$this->addField(new FieldOptions('enableAnnouncements', [
        ...
    ]))
    ->addField(new FieldRichTextarea('announcementsIntroduction', [
        ...
        'showWhen' => 'enableAnnouncements',
    ]));
```

The `showWhen` argument can also be configured to react to an exact value. In the example below the `copyrightHolderOther` field will be hidden unless the `copyrightHolderType` has the exact value `other`.

```php
$this->addField(new FieldRadioInput('copyrightHolderType', [
        ...
    ]))
    ->addField(new FieldText('copyrightHolderOther', [
        ...
        'showWhen' => ['copyrightHolderType', 'other'],
    ]));
```

The UI Library includes an example of [conditional display](/dev/#/component/Form/with-conditional-display).

---

Learn about another complex component, [ListPanels](./frontend-list-panels), in the next section.
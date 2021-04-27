---
title: Example - Add Custom Fields - Plugin Guide for OJS and OMP
---

# Add Custom Fields

Plugins can add properties to any Entity which uses a schema file and modify the forms to include input fields for these properties.

> Learn more about [entities](/dev/documentation/en/architecture-entities) and [schemas](/dev/documentation/en/architecture-entities#schemas). 
> 
> {:.notice}

In the example below, we add an `institutionalHome` field to the journal or press settings. This will allow an editor to identify an institutional supporter or backer that can then be used in the journal's or press's theme.

```php
class InstitutionalHomePlugin extends GenericPlugin {

  public function register($category, $path, $mainContextId = null) {
        $success = parent::register($category, $path);
        if ($success && $this->getEnabled()) {

      // Use a hook to extend the context entity's schema
      HookRegistry::register('Schema::get::context', array($this, 'addToSchema'));

      // Use a hook to add a field to the masthead form in the journal/press settings.
      HookRegistry::register('Form::config::before', array($this, 'addToForm'));
        }
        return $success;
  }

  /**
   * Extend the context entity's schema with an institutionalHome property
   */
  public function addToSchema($hookName, $args) {
        $schema = $args[0];
        $schema->properties->institutionalHome = (object) [
            'type' => 'string',
            'apiSummary' => true,
            'multilingual' => true,
            'validation' => ['nullable']
        ];

        return false;
  }

  /**
   * Extend the masthead form to add an institutionalHome input field
   * in the journal/press settings
   */
    public function addtoForm($hookName, $form) {

    // Only modify the masthead form
        if (!defined('FORM_MASTHEAD') || $form->id !== FORM_MASTHEAD) {
            return;
    }

    // Don't do anything at the site-wide level
        $context = Application::get()->getRequest()->getContext();
        if (!$context) {
            return;
    }

    // Add a field to the form
        $form->addField(new \PKP\components\forms\FieldText('institutionalHome', [
            'label' => 'Institutional Home',
            'groupId' => 'publishing',
            'value' => $context->getData('institutionalHome'),
        ]));

        return false;
    }
}
```

When the editor adds an institutional home in the journal or press settings, you can retrieve it from the `DataObject` class for the context.

```php
$context = Application::get()->getRequest()->getContext();
$institutionalHome = $context->getLocalizedData('institutionalHome');
```

Or use it in a template on the reader-facing frontend.

```html
<p>Institutional Home: {$currentContext->getLocalizedData('institutionalHome')}</p>
```

---

View more [examples](./examples).

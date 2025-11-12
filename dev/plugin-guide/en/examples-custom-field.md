---
title: Example - Add Custom Fields - Plugin Guide for OJS, OMP and OPS
description: How to add data and form fields to extend the data model in OJS, OMP and OPS.
book: dev-plugin-guide
version: 3.4
---

# Add Custom Fields

> Learn more about how to extend [entities](/dev/documentation/en/architecture-entities) and [schemas](/dev/documentation/en/architecture-entities#schemas) in our developer documentation.
{:.notice}

Plugins can add properties to any entity which uses a schema file, then add fields to an existing form to edit these properties. The example below adds an `institutionalHome` property to the `Context` entity, which represents a journal, press or preprint server. A field is added to the form at Settings > Journal > Masthead to edit the property.

```php
namespace APP\plugins\generic\institutionalHome;

use APP\core\Application;
use PKP\components\forms\FieldText;
use PKP\components\forms\FormComponent;
use PKP\plugins\GenericPlugin;
use PKP\plugins\Hook;
use stdClass;

class InstitutionalHomePlugin extends GenericPlugin
{
    public function register($category, $path, $mainContextId = null)
    {
        $success = parent::register($category, $path, $mainContextId);
        if ($success && $this->getEnabled()) {

            // Use a hook to extend the context entity's schema
            Hook::add('Schema::get::context', [$this, 'addToSchema']);

            // Use a hook to add a field to the masthead form context settings.
            Hook::add('Form::config::before', [$this, 'addToForm']);
        }
        return $success;
    }

    /**
     * Extend the context entity's schema with an institutionalHome property
     */
    public function addToSchema(string $hookName, array $args)
    {
      $schema = $args[0]; /** @var stdClass */
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
    public function addtoForm(string $hookName, FormComponent $form): bool
    {

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
        $form->addField(new FieldText('institutionalHome', [
            'label' => 'Institutional Home',
            'groupId' => 'publishing',
            'value' => $context->getData('institutionalHome'),
        ]));

        return false;
    }
}
```

When the editor adds an institutional home in the masthead settings, you can retrieve it from the `DataObject` class for the context.

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

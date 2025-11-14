---
title: Example - Add Custom Fields - Plugin Guide for OJS and OMP
---

# Adicionar campos personalizados

Os plugins podem adicionar propriedades a qualquer Entidade que use um arquivo de esquema e modificar os formulários para incluir campos de entrada para essas propriedades.

> Saiba mais sobre [entidades](/dev/documentation/en/architecture-entities) e [esquemas](/dev/documentation/en/architecture-entities#schemas). 
> 
> {:.notice}

No exemplo abaixo, adicionamos um campo `institutionalHome` às configurações da revista ou da editora. Isso permitirá que um editor identifique um patrocinador institucional ou um fomento que pode ser usado no tema da revista ou da editora.

```php
class InstitutionalHomePlugin extends GenericPlugin {

  public function register($category, $path, $mainContextId = null) {
        $success = parent::register($category, $path);
        if ($success && $this->getEnabled()) {

     // Use um hook para estender o esquema da entidade de contexto
      HookRegistry::register('Schema::get::context', array($this, 'addToSchema'));

      // Use um hook para adicionar um campo ao formulário de cabeçalho nas configurações revista/editora.
      HookRegistry::register('Form::config::before', array($this, 'addToForm'));
        }
        return $success;
  }

  /**
   * Estenda o esquema da entidade de contexto com uma propriedade institucionalHome
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
   * Estenda o formulário de cabeçalho para adicionar um campo de entrada institucionalHome
   * nas configurações da revista/editora
   */
    public function addtoForm($hookName, $form) {

    // Modificar apenas o formulário do masthead
        if (!defined('FORM_MASTHEAD') || $form->id !== FORM_MASTHEAD) {
            return;
    }

    // Não faça nada no nível de todo o site
        $context = Application::get()->getRequest()->getContext();
        if (!$context) {
            return;
    }

    // Adicionar um campo ao formulário
        $form->addField(new \PKP\components\forms\FieldText('institutionalHome', [
            'label' => 'Institutional Home',
            'groupId' => 'publishing',
            'value' => $context->getData('institutionalHome'),
        ]));

        return false;
    }
}
```

Quando o editor adiciona uma institutional home na revista ou nas configurações da editora, você pode recuperá-la da classe `DataObject` para o contexto.

```php
$context = Application::get()->getRequest()->getContext();
$institutionalHome = $context->getLocalizedData('institutionalHome');
```

Ou use-o em um modelo no frontend voltado para o leitor.

```html
<p>Institutional Home: {$currentContext->getLocalizedData('institutionalHome')}</p>
```

---

Veja mais [exemplos](./examples).

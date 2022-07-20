---
book: dev-documentation
version: 3.3
title: Formulários - Frontend - Technical Documentation - OJS|OMP|OPS 3.3
---

# Formulários

[Formulários](/dev/ui-library/dev/#/component/Form) coordenam a atividade de muitos componentes aninhados. Para garantir que os formulários implementem marcação acessível e suporte a entrada multilíngue, classes auxiliares estão disponíveis para criar, configurar e exibir formulários.

Cada formulário estende a classe `FormComponent`.

```php
/**
 * @file classes/components/form/context/PKPContactForm.inc.php
 */
namespace PKP\components\forms\context;
use PKP\components\forms\FormComponent;

/**
  * Cada formulário deve ter um ID único definido em uma constante
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
      * @param $action string URL para enviar o formulário para
      * @param $locales array Locales suportados
      * @param $context Contexto da Revista ou Editora para alterar as configurações de
     */
    public function __construct($action, $locales, $context) {
        $this->action = $action;
        $this->locales = $locales;

        ...
    }
}
```

Adicione campos ao formulário usando um dos tipos de componentes `FieldXXXX` disponíveis. Inclua uma instrução `use` na parte superior do arquivo para importar a classe de campo.

```php
use PKP\components\forms\FieldText;
```

E adicione campos no método `__construct`.

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

> Cada campo de formulário na [Biblioteca de UI](/dev/ui-library/dev) tem uma classe PHP equivalente em `\PKP\components\forms`. 
> 
> {:.tip}

Os formulários serão criados por um `PageHandler` e passados para o `TemplateManager` como estado. Primeiro, crie uma instância do formulário passando a URL onde ela deve ser enviada e as localidades suportadas pelo contexto atual.

```php
// A URL onde o formulário será enviado
$apiUrl = $request
    ->getDispacher()
    ->url(
        $request,
        ROUTE_API,
        $context->getPath(),
        'contexts/' . $context->getId()
    );

// Obtém uma chave/mapa de chaves e nomes de localidade
$supportedFormLocales = $context->getSupportedFormLocales();
$localeNames = AppLocale::getAllLocales();
$locales = array_map(function($localeKey) use ($localeNames) {
    return ['key' => $localeKey, 'label' => $localeNames[$localeKey]];
}, $supportedFormLocales);

// Cria uma instância do formulário de contato
$contactForm = new PKP\components\forms\context\PKPContactForm($apiUrl, $locales, $context);
```

Em seguida, use o método `getConfig()` para compilar todos os props necessários e passá-los para o componente [do modelo estado](frontend-ui-library#state-management-for-complex-components).

```php
$templateMgr = TemplateManager::getManager($request);
$templateMgr->setState([
    'components' => [
        FORM_CONTACT => $contactForm->getConfig(),
    ],
]);
```

Por fim, vincule as props a um componente `<pkp-form>` no template e use o método `set` para [gerenciar o estado do componente](frontend-ui-library#state- management-for-complex-components).

```html
{extends file="layouts/backend.tpl"}

{block name="page"}
    <pkp-form
        v-bind="components.{$smarty.const.FORM_CONTACT}"
        @set="set"
    />
{/block}
```

### Localidades

Cada formulário espera receber uma matriz de localidades que deve suportar. Essa lista deve ser extraída das configurações de contexto.

Use as localidades de submissões com suporte sempre que o formulário manipular dados de submissão, como título, resumo, colaboradores e composições.

```php
$supportedLocales = $context->getSupportedSubmissionLocales();
```

Use as localidades de formulário com suporte para a maioria dos outros formulários, como configurações de contexto e dados de edição.

```php
$supportedLocales = $context->getSupportedFormLocales();
```

Em seguida, compile as localidades em uma matriz com a chave de localidade e o rótulo.

```php
$localeNames = AppLocale::getAllLocales();
$locales = array_map(function($localeKey) use ($localeNames) {
    return ['key' => $localeKey, 'label' => $localeNames[$localeKey]];
}, $supportedLocales);

$contactForm = new PKP\components\forms\context\PKPContactForm($apiUrl, $locales, $context);
```

### Modificar formulários

É possível adicionar, editar ou remover campos de um formulário existente. Isso pode ser necessário quando uma aplicação precisa modificar um formulário base ou quando um plug-in deseja substituir um campo em um formulário.

Use uma classe de formulário estendida quando uma aplicação precisar modificar um formulário compartilhado por outras aplicações. O exemplo abaixo adiciona um campo ao formulário de configurações da revista para solicitar uma abreviação da revista no OJS.

```php
namespace APP\components\forms\context;
use PKP\components\forms\context\PKPContextForm;
use PKP\components\forms\FieldText;

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

Use o hook `Form::config::before` quando um [plugin](http://localhost:4000/dev/plugin-guide/en/) precisar ser modificado um formulário. O exemplo abaixo remove o campo de metadados de assunto de texto livre e o substitui por uma lista suspensa.

```php
HookRegistry::register('Form::config::before', function($hookName, $form) {

     // Modifica apenas o formulário de metadados
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

### Grupos

Os campos podem ser agrupados para fornecer um rótulo e uma descrição compartilhados.

```php
namespace PKP\components\forms\context;
use PKP\components\forms\FormComponent;
use PKP\components\forms\FieldText;

define('FORM_MASTHEAD', 'masthead');

class PKPMastheadForm extends FormComponent {
    /** @copydoc FormComponent::$id */
    public $id = FORM_MASTHEAD;

    /** @copydoc FormComponent::$method */
    public $method = 'PUT';

    /**
     * Constructor
     *
      * @param $action string URL para enviar o formulário para
      * @param $locales array Locales suportados
      * @param $context Contexto para Revista ou Editora para alterar as configurações de
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

Os campos em um grupo são colocados em um `<fieldset>`. A Biblioteca de IU inclui um exemplo de [grupos de campos](/dev/ui-library/dev/#/component/Form/with-groups).

### Exibição Condicional

Os campos podem ser mostrados ou ocultados com base no valor de outro campo. Isso pode ser usado para ocultar campos que não são relevantes quando um recurso é ativado ou desativado.

No exemplo abaixo, o campo `announcementsIntroduction` ficará oculto, a menos que o campo `enableAnnouncements` tenha um valor de verdade.

```php
$this->addField(new FieldOptions('enableAnnouncements', [
        ...
    ]))
    ->addField(new FieldRichTextarea('announcementsIntroduction', [
        ...
        'showWhen' => 'enableAnnouncements',
    ]));
```

O argumento `showWhen` também pode ser configurado para reagir a um valor exato. No exemplo abaixo, o campo `copyrightHolderOther` ficará oculto, a menos que o `copyrightHolderType` tenha o valor exato `other`.

```php
$this->addField(new FieldRadioInput('copyrightHolderType', [
        ...
    ]))
    ->addField(new FieldText('copyrightHolderOther', [
        ...
        'showWhen' => ['copyrightHolderType', 'other'],
    ]));
```

A Biblioteca de IU inclui um exemplo de [exibição condicional](/dev/#/component/Form/with-conditional-display).

---

Saiba mais sobre outro componente complexo, [ListPanels](./frontend-list-panels), na próxima seção.
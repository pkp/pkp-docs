---
title: Plugin Settings - Plugin Guide for OJS and OMP
---

# Configurações do Plugin

Os plugins podem adicionar configurações para que um editor ou administrador possa configurar o plugin. As configurações são acessadas por meio da lista de plugins na área Configurações do Website.

> Esta seção descreve como criar um formulário de configurações separado para um plugin. Esta seção descreve como criar um formulário de configurações separado para um plugin. Saiba como modificar um formulário existente no [exemplo de campo personalizado](./examples-custom-field). 
> 
> {:.tip}

Adicione um método `getActions()` ao seu plugin para adicionar uma ação de configurações na lista de plugins.

![captura de tela mostrando a ação de configurações para o Plugin Linguagem de Estilo de Citação](../plugin-settings-action.png)

```php
class TutorialExamplePlugin extends GenericPlugin {
    public function getActions($request, $actionArgs) {

    // Obtenha as ações existentes
        $actions = parent::getActions($request, $actionArgs);
        if (!$this->getEnabled()) {
            return $actions;
        }

     // Cria um LinkAction que chamará o plugin
     // método `manage` com o verbo `settings`.
        $router = $request->getRouter();
        import('lib.pkp.classes.linkAction.request.AjaxModal');
        $linkAction = new LinkAction(
            'settings',
            new AjaxModal(
                $router->url(
                    $request,
                    null,
                    null,
                    'manage',
                    null,
                    array(
                        'verb' => 'settings',
                        'plugin' => $this->getName(),
                        'category' => 'generic'
                    )
                ),
                $this->getDisplayName()
            ),
            __('manager.plugins.settings'),
            null
        );

    // Add the LinkAction to the existing actions.
    // Faça com que seja a primeira ação a ser consistente com
     // outros plugins.
        array_unshift($actions, $linkAction);

        return $actions;
    }
}
```

Adicione um método `manage()` para carregar um formulário de configurações quando o `LinkAction` for clicado.

```php
class TutorialExamplePlugin extends GenericPlugin {
    public function manage($args, $request) {
        switch ($request->getUserVar('verb')) {

      // Retorna uma resposta JSON contendo o
       // formulário de configurações
      case 'settings':
        $templateMgr = TemplateManager::getManager($request);
        $settingsForm = $templateMgr->fetch($this->getTemplateResource('settings.tpl'));
        return new JSONMessage(true, $settingsForm);
        }
        return parent::manage($args, $request);
    }
}
```

```html
<!-- templates/settings.tpl -->
<form>
  <label for="secretKey">Chave Secreta</label>
  <input type="text" name="secretKey" value="secretKey">
  <button type="submit">Save</button>
</form>
```

## A Classe Form

Os plugins podem usar o sistema de manipulação de formulários do aplicativo para carregar, validar e salvar as configurações do plugin. Atualize o método `manage()` para usar um `Form` personalizado.

```php
class TutorialExamplePlugin extends GenericPlugin {
    public function manage($args, $request) {
        switch ($request->getUserVar('verb')) {
      case 'settings':

        //Carrega o formulário personalizado
        $this->import('TutorialExampleSettingsForm');
        $form = new TutorialExampleSettingsForm($this);

        // Busca o formulário na primeira vez que carrega, antes
         // o usuário tentou salvá-lo
        if (!$request->getUserVar('save')) {
          $form->initData();
                  return new JSONMessage(true, $form->fetch($request));
        }

    // Valida e executa o formulário
        $form->readInputData();
        if ($form->validate()) {
          $form->execute();
          return new JSONMessage(true);
        }
        }
        return parent::manage($args, $request);
    }
}
```

A classe `Form` define o modelo, define as regras de validação e salva as configurações do plugin.

```php
import('lib.pkp.classes.form.Form');
class TutorialExampleSettingsForm extends Form {

  /** @var TutorialExamplePlugin  */
  public $plugin;

    public function __construct($plugin) {

    // Defina o template de configurações e armazene uma cópia do objeto plugin
        parent::__construct($plugin->getTemplateResource('settings.tpl'));
    $this->plugin = $plugin;

// Sempre adicione validação POST e CSRF para proteger seu formulário.
        $this->addCheck(new FormValidatorPost($this));
        $this->addCheck(new FormValidatorCSRF($this));
    }

  /**
   * Carregar configurações já salvas no banco de dados
   *
   * As configurações são armazenadas por contexto, para que cada revista ou editora
    * pode ter configurações diferentes.
   */
    public function initData() {
    $contextId = Application::get()->getRequest()->getContext()->getId();
    $this->setData('secretKey', $this->plugin->getSetting($contextId, 'secretKey'));
    parent::initData();
    }

  /**
   * Carregar dados que foram enviados com o formulário
   */
    public function readInputData() {
        $this->readUserVars(['secretKey']);
    parent::readInputData();
  }

  /**
   * Busque quaisquer dados adicionais necessários para o seu formulário.
   *
   * Dados atribuídos ao formulário usando $this->setData() durante o
   * Os métodos initData() ou readInputData() serão passados para o
   * modelo.
   */
    public function fetch($request, $template = null, $display = false) {

    // Passa o nome do plugin para o template para que possa ser
    // usado na URL para a qual o formulário é enviado
    $templateMgr = TemplateManager::getManager($request);
    $templateMgr->assign('pluginName', $this->plugin->getName());

    return parent::fetch($request, $template, $display);
  }

    /**
     * Salve as configurações
     */
    public function execute() {
    $contextId = Application::get()->getRequest()->getContext()->getId();
        $this->plugin->updateSetting($contextId, 'secretKey', $this->getData('secretKey'));

  // Diga ao usuário que o salvamento foi bem-sucedido.
        import('classes.notification.NotificationManager');
        $notificationMgr = new NotificationManager();
        $notificationMgr->createTrivialNotification(
      Application::get()->getRequest()->getUser()->getId(),
      NOTIFICATION_TYPE_SUCCESS,
      ['contents' => __('common.changesSaved')]
    );

        return parent::execute();
    }
}
```

Atualize o template `settings.tpl` para enviar o formulário para o método `manage()` do plugin.

```html
<script>
    $(function() {ldelim}
        $('#tutorialExampleSettings').pkpHandler('$.pkp.controllers.form.AjaxFormHandler');
    {rdelim});
</script>

<form
  class="pkp_form"
  id="tutorialExampleSettings"
  method="POST"
  action="{url router=$smarty.const.ROUTE_COMPONENT op="manage" category="generic" plugin=$pluginName verb="settings" save=true}"
>
  <!-- Sempre adicione o token csrf para proteger seu formulário -->
    {csrf}

  {fbvFormArea}
        {fbvFormSection}
            {fbvElement
        type="text"
        id="secretKey"
        value=$secretKey
        label="plugins.generic.tutorialexample.secretKey"
      }
        {/fbvFormSection}
  {/fbvFormArea}
    {fbvFormButtons submitText="common.save"}
</form>
```

---

Quando estiver pronto, você pode [lançar seu plugin](./release) para o público.

---
title: Plugin Settings - Plugin Guide for OJS and OMP
---

# Plugin Settings

Plugins can add settings so that an editor or admin can configure the plugin. Settings are accessed through the plugins list in the Website Settings area.

> This section describes how to create a separate settings form for a plugin. In some cases, you will provide a better user experience if you add settings to the existing settings forms. Learn how to modify an existing form in the [custom field example](./examples-custom-field). 
> 
> {:.tip}

Add a `getActions()` method to your plugin to add a settings action in the plugin list.

![screenshot showing the settings action for the Citation Style Language plugin](../plugin-settings-action.png)

```php
class TutorialExamplePlugin extends GenericPlugin {
    public function getActions($request, $actionArgs) {

    // Get the existing actions
        $actions = parent::getActions($request, $actionArgs);
        if (!$this->getEnabled()) {
            return $actions;
        }

    // Create a LinkAction that will call the plugin's
    // `manage` method with the `settings` verb.
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
    // Make it the first action to be consistent with
    // other plugins.
        array_unshift($actions, $linkAction);

        return $actions;
    }
}
```

Add a `manage()` method to load a settings form when the `LinkAction` is clicked.

```php
class TutorialExamplePlugin extends GenericPlugin {
    public function manage($args, $request) {
        switch ($request->getUserVar('verb')) {

      // Return a JSON response containing the
      // settings form
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
  <label for="secretKey">Secret Key</label>
  <input type="text" name="secretKey" value="secretKey">
  <button type="submit">Save</button>
</form>
```

## The Form class

Plugins can use the application's form handling system to load, validate and save plugin settings. Update the `manage()` method to use a custom `Form`.

```php
class TutorialExamplePlugin extends GenericPlugin {
    public function manage($args, $request) {
        switch ($request->getUserVar('verb')) {
      case 'settings':

        // Load the custom form
        $this->import('TutorialExampleSettingsForm');
        $form = new TutorialExampleSettingsForm($this);

        // Fetch the form the first time it loads, before
        // the user has tried to save it
        if (!$request->getUserVar('save')) {
          $form->initData();
                  return new JSONMessage(true, $form->fetch($request));
        }

        // Validate and execute the form
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

The `Form` class defines the template, sets the validation rules and saves the plugin settings.

```php
import('lib.pkp.classes.form.Form');
class TutorialExampleSettingsForm extends Form {

  /** @var TutorialExamplePlugin  */
  public $plugin;

    public function __construct($plugin) {

    // Define the settings template and store a copy of the plugin object
        parent::__construct($plugin->getTemplateResource('settings.tpl'));
    $this->plugin = $plugin;

    // Always add POST and CSRF validation to secure your form.
        $this->addCheck(new FormValidatorPost($this));
        $this->addCheck(new FormValidatorCSRF($this));
    }

  /**
   * Load settings already saved in the database
   *
   * Settings are stored by context, so that each journal or press
   * can have different settings.
   */
    public function initData() {
    $contextId = Application::get()->getRequest()->getContext()->getId();
    $this->setData('secretKey', $this->plugin->getSetting($contextId, 'secretKey'));
    parent::initData();
    }

  /**
   * Load data that was submitted with the form
   */
    public function readInputData() {
        $this->readUserVars(['secretKey']);
    parent::readInputData();
  }

  /**
   * Fetch any additional data needed for your form.
   *
   * Data assigned to the form using $this->setData() during the
   * initData() or readInputData() methods will be passed to the
   * template.
   */
    public function fetch($request, $template = null, $display = false) {

    // Pass the plugin name to the template so that it can be
    // used in the URL that the form is submitted to
    $templateMgr = TemplateManager::getManager($request);
    $templateMgr->assign('pluginName', $this->plugin->getName());

    return parent::fetch($request, $template, $display);
  }

    /**
     * Save the settings
     */
    public function execute() {
    $contextId = Application::get()->getRequest()->getContext()->getId();
        $this->plugin->updateSetting($contextId, 'secretKey', $this->getData('secretKey'));

    // Tell the user that the save was successful.
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

Update the `settings.tpl` template to submit the form to the plugin's `manage()` method.

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
  <!-- Always add the csrf token to secure your form -->
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

When you're ready, you can [release your plugin](./release) to the public.

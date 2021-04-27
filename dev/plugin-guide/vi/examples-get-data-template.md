---
title: Example - Get Data from the Template - Plugin Guide for OJS and OMP
---

# Get Data from the Template

When you [override a template](./templates#override-templates), you may need to get data that has already been assigned to the template. For example, consider the single issue template below.

```html
<div class="issue">
  <p>Published: {$issue->getPublished()}</p>
  ...
</div>
```

Your plugin overrides this template because it wants to show a unique ID with all issues. Your plugin's template looks like this.

```html
<div class="issue">
  <p>Published: {$issue->getPublished()}</p>
  <p>Internal ID: {$issueInternalId}</p>
  ...
</div>
```

However, you first need to retrieve the `issueInternalId` from the plugin settings to display the ID. In the example below, the plugin does the following.

1. Hook into the call that loads the `pages/issue.tpl` template.
2. Get the `Issue` object from the template variables.
3. Use the issue ID to get the correct plugin setting.
4. Assign the `issueInternalId` for use in the plugin's custom template.

```php
class InternalIssueIdPlugin extends GenericPlugin {

    public function register($category, $path, $mainContextId = null) {
        $success = parent::register($category, $path, $mainContextId);
        if ($success && $this->getEnabled()) {

      // 1. Hook in before the template is displayed...
      HookRegistry::register('TemplateManager::display',array(&$this, 'addIssueInternalId'));
        }
        return $success;
  }

  public function addIssueInternalId($hookName, $args) {
    $templateMgr = $args[0];
    $template = $args[1];
    $contextId = Application::get()->getRequest()->getContext()->getId();

    // 1. ...only when it is the issue template.
    if ($template !== 'frontend/pages/issue.tpl') {
      return false;
    }

    // 2. Get the `issue` object from the assigned template variables.
    $issue = $templateMgr->getTemplateVars('issue');

    // 3. Get the matching plugin setting.
    $internalIssueId = $this->getSetting($contextId, 'issueInternalId' . $issue->getId());

    // 4. Assign the internal issue id for use in the template.
        $templateMgr->assign('internalIssueId', $internalIssueId);

        return false;
  }
}
```

---

View more [examples](./examples).

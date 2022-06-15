---
title: Example - Get Data from the Template - Plugin Guide for OJS and OMP
---

# Obter dados do Template

Ao [substituir um template](./templates#override-templates), pode ser necessário obter dados que já foram atribuídos ao template. Por exemplo, considere o template único de edição abaixo.

```html
<div class="issue">
  <p>Publicado: {$issue->getPublished()}</p>
  ...
</div>
```

Seu plugin substitui este template porque deseja mostrar um ID exclusivo com todas as edições. O template do seu plugin se parece com isso.

```html
<div class="issue">
  <p>Puclicado: {$issue->getPublished()}</p>
  <p>ID interno: {$issueInternalId}</p>
  ...
</div>
```

No entanto, primeiro você precisa recuperar o `issueInternalId` das configurações do plug-in para exibir o ID. No exemplo abaixo, o plugin faz o seguinte.

1. Conecte-se à chamada que carrega o modelo `pages/issue.tpl`.
2. Obtenha o objeto `Issue` das variáveis do template.
3. Use o ID da edição para obter a configuração correta do plugin.
4. Atribua o `issueInternalId` para uso no template personalizado do plugin.

```php
class InternalIssueIdPlugin extends GenericPlugin {

    public function register($category, $path, $mainContextId = null) {
        $success = parent::register($category, $path, $mainContextId);
        if ($success && $this->getEnabled()) {

      // 1. Conecte-se antes que o tempĺate seja exibido...
      HookRegistry::register('TemplateManager::display',array(&$this, 'addIssueInternalId'));
        }
        return $success;
  }

  public function addIssueInternalId($hookName, $args) {
    $templateMgr = $args[0];
    $template = $args[1];
    $contextId = Application::get()->getRequest()->getContext()->getId();

    // 1. ...somente quando for o template de edição.
    if ($template !== 'frontend/pages/issue.tpl') {
      return false;
    }

    // 2. Obtenha o objeto `issue` das variáveis de template atribuídas.
    $issue = $templateMgr->getTemplateVars('issue');

    // 3. Obtenha a configuração de plugin correspondente.
    $internalIssueId = $this->getSetting($contextId, 'issueInternalId' . $issue->getId());

    // 4. Atribua o Id interno da edição para uso no template.
        $templateMgr->assign('internalIssueId', $internalIssueId);

        return false;
  }
}
```

---

Veja mais [exemplos](./examples).

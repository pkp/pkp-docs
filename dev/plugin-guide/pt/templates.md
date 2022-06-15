---
title: Templates - Plugin Guide for OJS and OMP
---

# Templates

Os plugins têm acesso ao mesmo sistema de templates do aplicativo principal. Use isso sempre que precisar exibir ou renderizar código HTML em seu plugin.

Todos os templates de plugins estão localizados em um subdiretório `templates`.

```
ojs
│
├─┬ plugins
│ │
│ └─┬ generic
│   │
│   └─┬ tutorialExample
│     │
│     ├─┬ templates
│     │ ├── example.tpl
│     │ └── settings.tpl
│     ├── index.php
│     └── TutorialExamplePlugin.inc.php
│     └── version.xml
```

O método `getTemplateResource()` está disponível para todos os plugins. Use-o para carregar um template no diretório de template do plug-in.

```php
$templateMgr = TemplateManager::getManager($request);
$templateMgr->display($this->getTemplateResource('example.tpl'));
```

Os templates podem ser aninhados em subdiretórios.

```
ojs
│
├─┬ plugins
│ │
│ └─┬ generic
│   │
│   └─┬ tutorialExample
│     │
│     ├─┬ templates
│     │ ├── example.tpl
│     │ └─┬ settings
│     │   └── index.tpl
│     ├── index.php
│     ├── TutorialExamplePlugin.inc.php
│     └── version.xml
```
```php
$templateMgr = TemplateManager::getManager($request);
$templateMgr->display($this->getTemplateResource('settings/index.tpl'));
```

## Substituir templates

Por padrão, um arquivo de template em um plugin de tema que corresponda ao caminho de um arquivo de template na aplicação o substituirá. Você pode conceder essa capacidade a qualquer plugin.

> Saiba mais sobre [substituições de template](/pkp-theming-guide/en/html-smarty). 
> 
> {:.notice}

Adicione um hook durante o registro para permitir que os templates de um plug-in substituam os templates na aplicação.

```php
import('lib.pkp.classes.plugins.GenericPlugin');
class TemplateOverrideExamplePlugin extends GenericPlugin {
    public function register($category, $path, $mainContextId = NULL) {
        $success = parent::register($category, $path);
        if ($success && $this->getEnabled()) {
            HookRegistry::register('TemplateResource::getFilename', array($this, '_overridePluginTemplates'));
        }
        return $success;
    }
}
```

Qualquer template que corresponda ao caminho e nome de arquivo do template de uma aplicação o substituirá. No exemplo abaixo, o plugin substitui o template `common/footer.tpl` da aplicação.

```
ojs
│
├─┬ plugins
│ └─┬ generic
│   └─┬ templateOverrideExample
│     ├─┬ templates
│     │ └─┬ common
│     │   └── footer.tpl
│     └── ...
├─┬ templates
│ └─┬ common
│   └── footer.tpl
```

Qualquer plugin que possa substituir os modelos da aplicação também pode substituir os templates de outro plugin. No exemplo abaixo, o plugin substitui o template de bloco do plugin de bloco `makeSubmission`.

```
ojs
│
├─┬ plugins
│ ├─┬ blocks
│ │ └─┬ makeSubmission
│ │   ├─┬ templates
│ │   │ └── block.tpl
│ │   └── ..
│ └─┬ generic
│   └─┬ templateOverrideExample
│     ├─┬ templates
│     │ └─┬ plugins
│     │   └─┬ blocks
│     │     └─┬ makeSubmission
│     │       └─┬ templates
│     │         └── block.tpl
│     └── ..
```

---

Saiba como [adicionar configurações](./settings) ao seu plugin.
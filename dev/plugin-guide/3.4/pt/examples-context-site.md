---
title: Example - Managing Context and Site - Plugin Guide for OJS and OMP
---

# Gerenciando Contexto e Site

OJS e OMP podem ser usados para executar mais de uma revista ou editora. Chamamos cada revista ou editora de um contexto. Os plugins geralmente são executados dentro de um contexto, mas alguns podem ser executados no nível de todo o site. Você deve escrever seus plugins para funcionar, estejam eles sendo executados no contexto ou no nível do site.

Você sempre pode recuperar o contexto atual do `Request`.

```php
$context = Application::get()->getRequest()->getContext();
```

Em páginas de todo o site, como as configurações de administrador ou a página index da revista de todo o site, o contexto será `null`.

```php
if ($context) {
  // A solicitação atual é para uma revista ou editora
} else {
  // A solicitação atual é para uma página em todo o site
}
```

Se o seu plugin suportar uma [página de configurações](./settings), as configurações devem ser salvas separadamente para cada contexto.

```php
$this->updateSetting($context->getId(), 'editorName', 'Diego Macêdo');
```

Use a constante `CONTEXT_SITE` para salvar as configurações no nível de todo o site.

```php
if ($context) {
  $contextId = $context->getId();
} else {
  $contextId = CONTEXT_SITE;
}
$this->updateSetting($contextId, 'editorName', 'Diego Macêdo');
```

## Plugins para todo o site

Adicione o método `isSitePlugin` para habilitar o formulário de configurações do plug-in na lista de plug-ins de todo o site.

```php
class TutorialExamplePlugin extends GenericPlugin {
  public function isSitePlugin() {
    return true;
  }
}
```

Os plugins de todo o site também podem ser ativados, desativados e configurados para cada contexto.

---

Veja mais [exemplos](./examples).
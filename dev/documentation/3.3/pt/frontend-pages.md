---
book: dev-documentation
version: 3.3
title: Páginas - Frontend - TDocumentação Técnica - OJS|OMP|OPS 3.3
---

# Páginas

Cada solicitação para um [PageHandler](./architecture-handlers#page-handlers) retorna o código HTML de uma página Web completa. O `TemplateManager` é usado para carregar e renderizar um template.

```php
class SettingsHandler extends Handler {
    public function distribution(array $args, Request $request) {
        $templateMgr = TemplateManager::getManager($request);
        return $templateMgr->display('path/to/template.tpl');
    }
}
```

Os Templates estão localizados nos diretórios `/templates` e `lib/pkp/templates`. Se um template não existir no diretório da aplicação, ele procurará o template equivalente na biblioteca PKP.

```php
class SettingsHandler extends Handler {
    public function distribution(array $args, Request $request) {
        $templateMgr = TemplateManager::getManager($request);

        //  Procura um template nos seguintes diretórios:
        // - templates/distribution.tpl
        // - lib/pkp/templates/distribution.tpl
        return $templateMgr->display('distribution.tpl');
    }
}
```

Um `PageHandler` para o back-end editorial deve definir uma propriedade de classe para identificá-lo como uma página de back-end. Isso garante que todas as dependências de página sejam carregadas.


```php
class SettingsHandler extends Handler {

    public $_isBackendPage = true;

}
```

Cada template de página para o back-end editorial deve usar o layout de back-end para garantir que o cabeçalho, o menu de navegação e o layout de página corretos sejam carregados.

```html
{extends file="layouts/backend.tpl"}
{block name="page"}
    <!-- Adicione o conteúdo da página aqui -->
{/block}
```

## Smarty

Os templates de página são renderizados pelo mecanismo de templates [Smarty](https://www.smarty.net/). O `TemplateManager` estende a classe `Smarty` para que qualquer um dos métodos do Smarty, como `assign`, possa ser usado.

Atribua variáveis a um template no `PageHandler`.

```php
class SettingsHandler extends Handler {
    public function distribution(array $args, Request $request) {
        $templateMgr = TemplateManager::getManager($request);
        $templateMgr->assign([
            'description' => 'Esta é uma descrição de exemplo.',
        ]);
        return $templateMgr->display('path/to/template.tpl');
    }
}
```

Use a variável no template.

```html
{extends file="layouts/backend.tpl"}

{block name="page"}
    <p>{$description}</p>
{/block}
```

Use expressões condicionais e loops.

```php
class SettingsHandler extends Handler {
    public function distribution(array $args, Request $request) {
        $templateMgr = TemplateManager::getManager($request);
        $templateMgr->assign([
            'items' => ['a', 'b', 'c'],
        ]);
        return $templateMgr->display('path/to/template.tpl');
    }
}
```

```html
{extends file="layouts/backend.tpl"}

{block name="page"}
    {if count($items)}
        {foreach from=$items item="letter"}
            <p>{$letter}</p>
        {/foreach}
    {/if}
{/block}
```

Use a função `{url}` para construir um URL para uma das páginas da aplicação.

```html
<-- Gera a seguinte URL http://.../<context-path>/management/settings/website -->
<a href="{url page="management" op="settings" path="website"}">
   Configurações do website
</a>
```

Use a função `{translate}` para obter uma string localizada.

```html
<button>{translate key="common.save"}</button>
```

Às vezes é necessário usar uma variável dentro de uma string localizada.

```html
<span>{translate key="common.lessThan value="29"}</span>
<!--
    string localizada: "{$value} or menos"
    resultado: 29 ou menos
-->
```

Use a variável `$smarty` para acessar uma constante PHP.

```php
define('STATUS_PUBLISHED', 3);
```
```html
{if $submissionStatus === $smarty.const.STATUS_PUBLISHED}
    ✔ Esta submissão está publicada
{/if}
```

Use o modificador `date_format` para transformar uma data no formato configurado.

```html
<!-- Normalmente, uma representação numérica, como 2020-10-03 -->
<p>{$publishedDate|date_format:$dateFormatShort}</p>

<!-- Normalmente, uma frase, como Outobro 3, 2020 -->
<p>{$publishedDate|date_format:$dateFormatLong}</p>
```

## Segurança e Sanitização

Qualquer informação que venha de um usuário deve ser sanitizada para evitar ataques maliciosos. Use o modificador `escape` para limpar valores como títulos e nomes.

```html
<p>{$title|escape}</p>
```

As informações que incluem HTML devem usar o modificador `strip_unsafe_html`. Isso sanitizará o valor, mas preservará as tags HTML.

```html
{$abstract|strip_unsafe_html}
```

## Título da Página

Cada página no backend editorial deve definir o título da página.

```php
class SettingsHandler extends Handler {
    public function distribution(array $args, Request $request) {
        $templateMgr = TemplateManager::getManager($request);
        $templateMgr->assign([
            'pageTitle' => __('manager.distribution.title'),
        ]);
        return $templateMgr->display('distribution.tpl');
    }
}
```

Mesmo que nenhum título apareça na página, o `pageTitle` deve ser definido. Ele será usado na tag `<title>` e aparecerá no nome da guia em um navegador.

## Acessando Variáveis de Template

Às vezes é necessário recuperar uma variável que já foi atribuída ao template. Use `getTemplateVars` para recuperar a variável.

```php
$status = $templateMgr->getTemplateVars('status');
$templateMgr->assign([
    'isPublished' => $status === STATUS_PUBLISHED
]);
```

---

Depois que um template é renderizado no servidor, ele é passado para o navegador do usuário, onde é controlado por um componente Vue.js. Saiba como [usar a Biblioteca de IU](./frontend-ui-library) no próximo capítulo.

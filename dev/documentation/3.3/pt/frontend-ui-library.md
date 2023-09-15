---
book: dev-documentation
version: 3.3
title: Biblioteca UI - Frontend - Documentação Técnica - OJS|OMP|OPS 3.3
---

# Biblioteca de IU

> Leia e entenda a seção de fundamentos do [guia Vue.js](https://vuejs.org/v2/guide/) antes de continuar. 
> 
> {:.tip}

A [Biblioteca de IU](/dev/ui-library/dev) é criada com [Vue.js](https://vuejs.org/). Ele fornece componentes reutilizáveis para criar interfaces de usuário consistentes e acessíveis para todas as aplicações PKP. Este capítulo descreve como passar dados para o componente raiz Vue.js e gerenciar o estado no navegador.

## Page Component

O [Page component](/dev/ui-library/dev/#/component/Page) é o componente raiz em uma página que gerencia dados e passa props para componentes filhos. Sempre que um template de backend é usado, um componente `Page` é montado automaticamente no DOM. Isso significa que os componentes globais podem ser usados sem qualquer configuração adicional.

```html
{extends file="layouts/backend.tpl"}

{block name="page"}
    <badge :is-success="true">Publicado</badge>
{/block}
```

A sintaxe do Smarty pode ser misturada com componentes da biblioteca de interface do usuário. O template abaixo mostra um selo quando uma subimissão é publicado.

```html
{extends file="layouts/backend.tpl"}

{block name="page"}
    {if $isPublished}
        <badge :is-success="true">Publicado</badge>
    {/if}
{/block}
```

Às vezes, o status da publicação muda antes que o template Smarty seja recarregado. Quando são realizadas ações no navegador que alteram o status da publicação, precisamos mostrar ou ocultar o `<badge>` usando state.

## State

Os dados que podem ser alterados após o carregamento da página são chamados de state. Por exemplo, quando um editor publica ou cancela a publicação de uma submissão, o template precisa ser atualizado para refletir o novo status da submissão.

> State é outro nome para as propriedades `data` do componente da raiz Vue.js. 
> 
> {:.tip}

Inicialize o stste no servidor usando o método `setState` para passar dados para o componente `Page`.

```php
class WorkflowHandler extends Handler {
    public function distribution(array $args, Request $request) {
        $templateMgr = TemplateManager::getManager($request);
        $templateMgr->setState([
            'isPublished' => $publication->getData('status') === STATUS_PUBLISHED,
        ]);
        return $templateMgr->display('/workflow.tpl');
    }
}
```

O sate pode ser acessado em templates usando a [sintaxe de template Vue.js](https://vuejs.org/v2/guide/syntax.html). O exemplo abaixo mostrará ou ocultará o `<badge>` quando o estado `isPublished` for alterado.

```html
{extends file="layouts/backend.tpl"}

{block name="page"}
    <badge
        v-if="isPublished"
        :is-success="true"
    >
        Publicado
    </badge>
{/block}
```

Use as ferramentas de desenvolvimento Vue.js para [Firefox](https://addons.mozilla.org/en-GB/firefox/addon/vue-js-devtools/) ou [Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en) para alternar o estado e ver como o template muda.

<figure class="video_container">
  <video controls="true" allowfullscreen="true">
    <source src="" type="video/mp4">
  </video>
  <figcaption></figcaption>
</figure>

O state só deve ser usado quando os dados são alterados, a interface do usuário deve atualizar para refletir essa alteração sem recarregar a página. Nem sempre é fácil determinar quais dados devem ser gerenciados pelo Vue.js como state e quais dados devem ser gerenciados pelo Smarty.

Para ajudar a fazer a distinção, considere uma rua da cidade. A qualquer momento, o número e a localização dos carros na rua mudarão. Mas os limites da rua e a direção da viagem não.

Neste exemplo, o número e a localização dos carros são state e devem ser passados para o template usando o método `setState`. Os limites e a direção da viagem não são e podem ser passados para o modelo usando o método `assign`.

## Gerenciamento de State para Componentes Complexos

O componente `Page` às vezes gerencia o state que deve ser passado para um componente complexo. Uma única `Page` pode gerenciar muitos componentes complexos, como [Formulários](/dev/ui-library/dev/#/component/Form) e [ListPanels](/ dev/ui-library/dev/#/component/ListPanel) que precisam atualizar o state após fazer solicitações à API.

> A convenção descrita abaixo é uma alternativa leve para bibliotecas de gerenciamento de sate, como [Vuex](https://vuex.vuejs.org/). 
> 
> {:.tip}

O state é passado para esses componentes como `props`.

```php
class WorkflowHandler extends Handler {
    public function distribution(array $args, Request $request) {
        $templateMgr = TemplateManager::getManager($request);
        $templateMgr->setState([
            'formId' => 'exampleForm',
            'fields' => [...],
        ]);
        return $templateMgr->display('/workflow.tpl');
    }
}
```
```html
{extends file="layouts/backend.tpl"}

{block name="page"}
    <pkp-form
        :id="formId"
        :fields="fields"
        ...
    />
{/block}
```

Isso leva a um problema quando o valor de um campo é alterado. O componente `Form` não pode modificar esse valor porque o Vue.js impõe um [fluxo de dados unidirecional](https://vuejs.org/v2/guide/components-props.html#One-Way-Data rigoroso -Flow).

> Leia este guia sobre [organização de componentes](https://vuejs.org/v2/guide/components.html#Organizing-Components) para entender como props e eventos são usados no Vue.js para gerenciar estado em vários componentes. 
> 
> {:.notice}

Nesses casos, os componentes `Page` fazem uso de eventos para gerenciar o estado desses componentes. As props do componente são adicionadas a um objeto `components` no estado.

```php
class WorkflowHandler extends Handler {
    public function distribution(array $args, Request $request) {
        $templateMgr = TemplateManager::getManager($request);
        $templateMgr->setState([
            'components' => [
                'exampleForm' => [
                    'fields' => [...],
                ],
            ],
        ]);
        return $templateMgr->display('/workflow.tpl');
    }
}
```

As props são vinculadas ao componente no template e o componente `Page` escuta um evento `set`.

```html
{extends file="layouts/backend.tpl"}

{block name="page"}
    <pkp-form
        v-bind="components.exampleForm"
        @set="set"
    />
{/block}
```

Quando o componente filho precisa atualizar suas props, ele dispara o evento `set` com a seguinte assinatura.

```js
const newData = {
    fields: [...],
};
this.$emit('set', 'exampleForm', newData);
```

O componente `Page` localizará as props do componente e as atualizará com o `newData`. Para que isso funcione, o evento deve passar a chave do objeto, `exampleForm`, como o segundo argumento na função `$emit`.

O exemplo a seguir mostra como o método `set` em um componente `Page` atualiza os dados de um componente.

```js
set(key, newData) {
    if (!this.components[key]) {
        return;
    }
    this.components[key] = {
        ...this.components[key],
        ...newData
    };
}
```

## Estender o Page Component

Muitas vezes é necessário estender o componente `Page` para fornecer funcionalidade adicional para uma página. O exemplo abaixo mostra o componente `SettingsPage`, que adiciona ou remove um item do menu de navegação quando as notícias são habilitadas ou desabilitadas.

```js
import Page from './Page.vue';

export default {
    name: 'SettingsPage',
    extends: Page,
    data() {
        return {
            announcementsLabel: '',
            announcementsUrl: ''
        };
    },
    mounted() {
        pkp.eventBus.$on('form-success', (formId, context) => {
            if (formId === pkp.const.FORM_ANNOUNCEMENT_SETTINGS) {
                let menu = {...this.menu};
                if (!context.enableAnnouncements) {
                    delete menu.announcements;
                } else {
                    menu.announcements = {
                        name: 'Announcements',
                        url: 'http://example.org/announcements'
                    };
                }
                this.menu = menu;
            }
        });
    },
    destroyed() {
        pkp.eventBus.$off('form-success');
    }
};
```

Após a criação de um novo componente de página, ele deve ser importado e registrado em `js/load.js`.

```js
...
import SettingsPage from '@/components/Container/SettingsPage.vue';

window.pkp = Object.assign(PkpLoad, {
    controllers: {
        ...
        SettingsPage
    }
});
```

Finalmente, o `PageHandler` deve atribuir a variável `pageComponent` ao template e passar o state correto

```php
$templateMgr = TemplateManager::getManager($request);
$templateMgr->assign([
    'pageComponent' => 'SettingsPage',
]);
$templateMgr->setState([
    'announcementLabel' => __('announcement.announcements'),
    'announcementsUrl' => $request->getRouter()->url($request, null, 'management', 'settings', 'announcements'),
])
```

Consulte a [Biblioteca de IU](/dev/ui-library/dev/#/component/Page) para obter uma lista de componentes de página disponíveis.

## Referência

A [Biblioteca de UI](/dev/ui-library/dev) fornece uma demonstração, especificação técnica e orientação de uso para cada componente. Ele também fornece documentação importante sobre utilitários como o [barramento de eventos](/dev/ui-library/dev/#/pages/event-bus), [localização](/dev/ui- library/dev/#/pages/localization) e muito mais.

---

O próximo capítulo descreve como criar e usar [Formulários](./frontend-forms).
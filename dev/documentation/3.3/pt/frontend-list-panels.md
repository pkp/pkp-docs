---
book: dev-documentation
version: 3.3
title: Formulários - Frontend - Documentação Técnica - OJS|OMP|OPS 3.3
---

# List Panels


Muitos dos componentes do [ListPanel](/dev/ui-library/dev/#/component/ListPanel) são tão complexos quanto um pequeno aplicativo. Eles permitem que o usuário adicione, edite e exclua itens, realize pesquisas facetadas, navegue por listas paginadas e muito mais.

Os ListPanels mais complexos fornecem uma classe helper para configurá-los e exibi-los na página.

Cada ListPanel estende a classe base, define props configuráveis como propriedades públicas e implementa um método `getConfig()` que compila todas as props necessárias em um array associativo.

```php
namespace PKP\components\listPanels;

class PKPAnnouncementsListPanel extends ListPanel {

    /** @var string URL para o endpoint da API onde os itens podem ser recuperados */
    public $apiUrl = '';

    /** @var int quantos itens exibir em uma página nesta lista */
    public $count = 30;

    /**
     * @copydoc ListPanel::getConfig()
     */
    public function getConfig() {
        \AppLocale::requireComponents(LOCALE_COMPONENT_PKP_MANAGER);
        \AppLocale::requireComponents(LOCALE_COMPONENT_APP_MANAGER);

       // Chama ListPanel::getConfig() para compilar props comuns
        $config = parent::getConfig();

       // Atribui props que foram configuradas para este objeto
        $config['apiUrl'] = $this->apiUrl;
        $config['count'] = $this->count;

         // Atribui props necessárias que não precisam ser configuradas,
         // como strings traduzidas
        $config['addAnnouncementLabel'] = __('grid.action.addAnnouncement');
        $config['deleteAnnouncementLabel'] = __('manager.announcements.deleteAnnouncement');

        return $config;
    }
}
```

> Os props necessários para cada ListPanel estão documentados na [Biblioteca de UI](/dev/ui-library/dev/). 
> 
> {:.tip}

Em um `PageHandler`, crie uma nova instância do ListPanel e passe as props de configuração.

```php
$listPanel = new \PKP\components\listPanels\PKPAnnouncementsListPanel(
    'announcementsListPanel',
    __('announcement.announcements'),
    [
        'apiUrl' => $request->getDispatcher()->url(...),
        'count' => 20,
    ]
);
```

Então chame o método `getConfig()` e passe as props para o `TemplateManager` como state.

```php
$templateMgr = TemplateManager::getManager($request);
$templateMgr->setState([
    'components' => [
        $listPanel->id => $listPanel->getConfig(),
    ],
]);
```

---

Partes da interface do usuário na aplicaçãos do PKP ainda não foram convertidas para a biblioteca de interface do usuário. Saiba mais sobre esses [controllers](./frontend-controllers) na próxima seção.
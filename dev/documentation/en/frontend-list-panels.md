---
book: dev-documentation
version: 3.4
title: Forms - Frontend - Technical Documentation - OJS|OMP|OPS
---

# List Panels


Many of the [ListPanel](/dev/ui-library/dev/#/component/ListPanel) components are as complex as a small application. They allow the user to add, edit and delete items, perform faceted searches, navigate through paginated lists, and more.

The most complex ListPanels provide a helper class to configure and display them on the page.

Each ListPanel extends the base class, defines configurable props as public properties, and implements a `getConfig()` method that compiles all required props into an associative array.

```php
namespace PKP\components\listPanels;

class PKPAnnouncementsListPanel extends ListPanel
{
    /** @var string URL to the API endpoint where items can be retrieved */
    public $apiUrl = '';

    /** @var int How many items to display on one page in this list */
    public $count = 30;

    public function getConfig()
    {
        // Call ListPanel::getConfig() to compile common props
        $config = parent::getConfig();

        // Assign props that have been configured for this object
        $config['apiUrl'] = $this->apiUrl;
        $config['count'] = $this->count;

        // Assign required props that do not need to be configured,
        // such as translated strings
        $config['addAnnouncementLabel'] = __('grid.action.addAnnouncement');
        $config['deleteAnnouncementLabel'] = __('manager.announcements.deleteAnnouncement');

        return $config;
    }
}
```

> The props required for each ListPanel are documented in the [UI Library](/dev/ui-library/dev/).
{:.tip}

In a `PageHandler`, create a new instance of the ListPanel, pass in the configuration props, and then call the `getConfig()` method to pass the props to the `TemplateManager` as state.

```php
use APP\template\TemplateManager;
use PKP\components\listPanels\PKPAnnouncementsListPanel;

$listPanel = new PKPAnnouncementsListPanel(
    'announcementsListPanel',
    __('announcement.announcements'),
    [
        'apiUrl' => $request->getDispatcher()->url(...),
        'count' => 20,
    ]
);

$templateMgr = TemplateManager::getManager($request);
$templateMgr->setState([
    'components' => [
        $listPanel->id => $listPanel->getConfig(),
    ],
]);
```

---

Parts of the UI in PKP's application have not yet been converted to the UI Library. Learn about these [controllers](./frontend-controllers) in the next section.
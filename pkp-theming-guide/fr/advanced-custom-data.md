# Passing Data to Templates
The application tries to pass all the useful data to a template before it is loaded. You may want access to something that isn't provided out-of-the-box.

This section will describe how to hook in to the application before a template is loaded, in order to provide additional data to a template.

These techniques require an understanding of PHP and the application's architecture. This guide will only provide the basic code required. You may need to look further into the application's documentation to fully understand the code samples here.

## Passing Data to Every Template
Before a template is displayed, it will fire an event, `TemplateManager::display`, which you can hook into to pass additional data to the template before it is loaded.

The following example will make a new Smarty variable, `{$myCustomData}`, available for use in all of your templates.

```php
class DocsThemePlugin extends ThemePlugin {
    /**
     * Initialize the theme
     */
    public function init() {
        HookRegistry::register ('TemplateManager::display', array($this, 'loadTemplateData'));
    }

    /**
     * Fired when the `TemplateManager::display` hook is called.
     *
     * @param string $hookname
     * @param array $args [$templateMgr, $template, $sendContentType, $charset, $output]
     */
    public function loadTemplateData($hookName, $args) {

        // Retrieve the TemplateManager
        $templateMgr = $args[0];

        // Attach a custom piece of data to the TemplateManager
        $myCustomData = 'This is my custom data. It could be any PHP variable.';
        $templateMgr->assign('myCustomData', $myCustomData);

        return false;
    }
}
```

Perhaps you want to display your latest announcement in the footer of your site, and so you want that data available to every template. The following example adds a new Smarty variable, `{$announcements}`, to every template.

```php
class DocsThemePlugin extends ThemePlugin {
    /**
     * Initialize the theme
     */
    public function init() {
        HookRegistry::register ('TemplateManager::display', array($this, 'loadTemplateData'));
    }

    /**
     * Fired when the `TemplateManager::display` hook is called.
     *
     * @param string $hookname
     * @param array $args [$templateMgr, $template, $sendContentType, $charset, $output]
     */
    public function loadTemplateData($hookName, $args) {

        // Retrieve the TemplateManager
        $templateMgr = $args[0];

        // Attach the latest 3 announcements if they're enabled for this journal
        $request = Application::get()->getRequest();
        $journal = $request->getJournal();
        if ($journal && $journal->getSetting('enableAnnouncements') {
            $announcementDao = DAORegistry::getDAO('AnnouncementDAO');
            $announcements =& $announcementDao->getNumAnnouncementsNotExpiredByAssocId(ASSOC_TYPE_JOURNAL, $journal->getId(), 3);
            $templateMgr->assign('announcements', $announcements->toArray());
        }

        return false;
    }
}
```

## Passing Data to a Single Template
But you may not want to make that data available to every template. Perhaps you just want to display it on your `article.tpl` template.

We can check the `$template` that's being called before deciding to attach the announcements.

```php
class DocsThemePlugin extends ThemePlugin {
    /**
     * Initialize the theme
     */
    public function init() {
        HookRegistry::register ('TemplateManager::display', array($this, 'loadTemplateData'));
    }

    /**
     * Fired when the `TemplateManager::display` hook is called.
     *
     * @param string $hookname
     * @param array $args [$templateMgr, $template, $sendContentType, $charset, $output]
     */
    public function loadTemplateData($hookName, $args) {

        // Retrieve the TemplateManager and the template filename
        $templateMgr = $args[0];
        $template = $args[1];

        // Don't do anything if we're not loading the right template
        if ($template != 'frontend/pages/article.tpl') {
            return false;
        }

        // Attach the latest 3 announcements if they're enabled for this journal
        $request = Application::get()->getRequest();
        $journal = $request->getJournal();
        if ($journal && $journal->getSetting('enableAnnouncements')) {
            $announcementDao = DAORegistry::getDAO('AnnouncementDAO');
            $announcements =& $announcementDao->getNumAnnouncementsNotExpiredByAssocId(ASSOC_TYPE_JOURNAL, $journal->getId(), 3);
            $templateMgr->assign('announcements', $announcements->toArray());
        }

        return false;
    }
}
```

**It's important to note** that only some templates are called directly with this hook. These are the top-level templates located under `/frontend/pages/<template_name>.tpl`. You'll find that these template files load additional sub-templates. But these are not passed through the hook. You can only hook into the primary template call for each page load.
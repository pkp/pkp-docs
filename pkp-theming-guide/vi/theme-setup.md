# Theme Setup & Configuration

Now that we've outlined the structure of HTML and CSS in a theme, we need to register our plugin with the OJS or OMP application. We'll do this with a few PHP and XML files.

Let's take a look at the file structure of a basic theme we'll call `tutorial-theme`.

```
/plugins/themes/tutorial-theme/index.php
/plugins/themes/tutorial-theme/TutorialThemePlugin.inc.php
/plugins/themes/tutorial-theme/version.xml
/plugins/themes/tutorial-theme/locale/en_US/locale.po
/plugins/themes/tutorial-theme/styles/index.less
/plugins/themes/tutorial-theme/styles/variables.less
/plugins/themes/tutorial-theme/styles/structure.less
/plugins/themes/tutorial-theme/styles/forms.less
```

The `/plugins/themes/tutorial-theme/index.php` file is used to load up our theme. We load the theme's class file and instantiate a new object

```php
<?php
require_once('TutorialThemePlugin.inc.php');
return new TutorialThemePlugin();
?>
```

The `/plugins/themes/tutorial-theme/TutorialThemePlugin.inc.php` is where we define our theme's class file. We can then load stylesheets and perform any further actions we want with the [Theme API](theme-api.md).

```php
<?php
import('lib.pkp.classes.plugins.ThemePlugin');
class TutorialThemePlugin extends ThemePlugin {

    /**
     * Load the custom styles for our theme
     * @return null
     */
    public function init() {
        $this->addStyle('stylesheet', 'styles/index.less');
    }

    /**
     * Get the display name of this theme
     * @return string
     */
    function getDisplayName() {
        return 'Tutorial Theme';
    }

    /**
     * Get the description of this plugin
     * @return string
     */
    function getDescription() {
        return 'An example theme for OJS or OMP built with our amazing documentation.';
    }
}
```

The `/plugins/themes/tutorial-theme/version.xml` file is required to configure metadata about our theme that OJS and OMP use to load and display it properly.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE version SYSTEM "../../../lib/pkp/dtd/pluginVersion.dtd">
<version>
    <!-- The application value should match the directory name of the theme -->
    <application>tutorial-theme</application>
    <type>plugins.themes</type>
    <release>1.0.0.0</release>
    <date>2016-11-21</date>
    <lazy-load>1</lazy-load>
    <class>TutorialThemePlugin</class>
</version>
```

The `/plugins/themes/tutorial-theme/locale/en_US/locale.po` file allows us to make any strings in our theme ready for translation. We do this by assigning strings a key.

```po
"Project-Id-Version: \n"
"Report-Msgid-Bugs-To: \n"
"Last-Translator: \n"
"Language-Team: \n"
"MIME-Version: 1.0\n"
"Content-Type: text/plain; charset=UTF-8\n"
"Content-Transfer-Encoding: 8bit\n"
"POT-Creation-Date: 2020-06-19T13:50:00+00:00\n"
"PO-Revision-Date: 2020-06-19T13:50:00+00:00\n"
"Language: \n"

msgid "plugins.themes.tutorial-theme.name"
msgstr "Tutorial Theme"

msgid "plugins.themes.tutorial-theme.description"
msgstr "An example theme for OJS or OMP built with our amazing documentation."
```

Remember how we gave our theme a name and description in the theme plugin class? We can now update those methods to load our translated strings.

```php
/**
     * Get the display name of this theme
     * @return string
     */
    function getDisplayName() {
        return __('plugins.themes.tutorial-theme.name');
    }

    /**
     * Get the description of this plugin
     * @return string
     */
    function getDescription() {
        return __('plugins.themes.tutorial-theme.description');
    }
```

If you're building a theme for your personal use, you won't need this. But we always recommend setting up translation capabilities for any theme that is going to be distributed. The Public Knowledge Project's community of users spans dozens of countries and languages who all need software in their own language.

Finally the `/plugins/themes/tutorial-theme/styles/index.less` loads our custom CSS/LESS files. In our theme plugin class file, you may have noticed the following `init` method:

```php
public function init() {
        $this->addStyle('stylesheet', 'styles/index.less');
    }
```

By calling `addStyle` and pointing it to our main LESS file, the application will automatically compile and load a CSS file on the frontend of any journal or press using this theme.

_If you're not sure what the LESS file is about, check out the section on CSS/LESS above._

## Exploring Further

This part of the theming guide has introduced you to the structure of an OJS or OMP theme. But there's a lot more you can do with the [Theme API](theme-api.md).

Continue reading for more practical tips on how to use [Child Themes](child-themes.md), full documentation on the [Theme API](theme-api.md) and [Theme Options API](theme-options-api.md), as well as links to existing examples of custom themes in the wild.


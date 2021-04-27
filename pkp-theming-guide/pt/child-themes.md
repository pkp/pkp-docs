# Child Themes

When you create a custom theme, you can choose to have it extend a Parent Theme. A Child Theme will automatically load the templates and styles found in it's Parent Theme. This allows you to build a theme on top of a pre-existing theme.

Here are a few things you can do with a child theme:

1. Override a parent theme's LESS variables to adjust colors and typography with just a few lines of code.
2. Adjust the HTML code behind the single article template without having to create a complete theme.
3. Modify the primary navigation menu while keeping all the other templates in place.

In previous iterations of OJS and OMP, you needed to build entirely stand-alone themes or edit an existing theme if you wanted to tailor the design. The biggest benefit to using Child Themes is that you can isolate your custom code. This means that you can more safely update the Parent Theme and the core application without overriding your custom code.

If you've built themes for popular content management systems like [WordPress](https://wordpress.org/), you'll be familiar with the concept. But we handle things slightly differently. This section will show you how to modify the styles of a parent theme, add your own styles, override template files and more.

## What's the difference between a Child Theme and a Parent Theme?

Nothing.

Child and Parent Themes are just regular theme plugins and don't entail anything special in how they're built. All themes, Child or Parent, use the same [Theme API](theme-api.md). You can learn more about the structure of a theme, and setting up your own custom theme, in [What is a theme?](what-is-a-theme.md).

Once you have a theme setup, you can use a little bit of extra code to designate another theme as a parent theme. You may recognize the following from the [Theme Setup & Configuration](theme-setup.md) guide.

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

Let's focus on the `init()` method.

```php
    /**
     * Load the custom styles for our theme
     * @return null
     */
    public function init() {
        $this->addStyle('stylesheet', 'styles/index.less');
    }
```

You can set a Parent Theme for this theme using the `setParent()` method. Let's make this theme a Child Theme of the Default Theme that ships with OJS 3.0+.

```php
    /**
     * Load the custom styles for our theme
     * @return null
     */
    public function init() {

        // Use the parent theme's unique plugin slug
        $this->setParent('defaultthemeplugin');

        // Change the ID of this stylesheet slug to
        // `child-stylesheet`. This ensures that it
        // won't clash with the parent's stylesheet.
        $this->addStyle('child-stylesheet', 'styles/index.less');
    }
```

Now, when the theme is loaded, it will automatically call the parent theme's `init()` method. That means any scripts or styles registered in that theme will get loaded.

## Adding and Modifying Styles

So now your child theme will compile and load two stylesheets. The Parent's stylesheet, which is defined in the Parent Theme and named `stylesheet`, and your Child's stylesheet, which is named `child-stylesheet`.

*Stylesheets are compiled from LESS files. Learn more about [CSS and LESS](css-less.md).

However, in many cases, you may want to add styles to the Parent's stylesheet instead of loading your own separate stylesheet. You can automatically compile your own styles together with the Parent theme's styles by using the `modifyStyle()` method.

```php
    /**
     * Load the custom styles for our theme
     * @return null
     */
    public function init() {
        $this->setParent('defaultthemeplugin');
        $this->modifyStyle('stylesheet', array('addLess' => array('styles/index.less')));
    }
```

This is useful when you want to share mix-ins or modify variables in a Parent theme. The default theme uses a number of variables to define colors, typography, spacing and more.

The following example shows how a Child Theme that is extending the default theme can overwrite a variable in it's custom `styles/index.less` file:

```less
// Change the default color from blue #007ab2 to red #b21a00
@primary:  #b21a00;
```

## Overriding Templates

Child Themes allow you to override select templates from the Parent Theme, while still using them when no template has been overridden.

The [HTML/Smarty](html-smarty.md) section of this guide describes how the frontend template files are loaded by order of priority. Child Themes add a new highest-priority location for retrieving template files.

When OJS or OMP loads a template, it searches in the following order.

1. The current theme template directory.
2. If a Parent theme is specified, the Parent theme's template directory.
3. The OJS or OMP template directory.
4. The `lib/pkp/templates/` directory within the application.

To override a Parent Theme's template, copy that template file into the same location in the Child Theme.

## Grandchild Themes

The Parent-Child relationship of themes is not limited to one level. You can have a Parent Theme, a Child Theme which extends the Parent, and then a Grandchild Theme which extends the Child.

You don't need to register extended relationships of this kind. When a Parent Theme is registered, the application will automatically handle any Parents of the Parent theme as well.

This won't be needed very often, but it can be useful if you manage lots of journal themes and want to share code between theme. Or if you are extending one of the community-provided child themes.

## Example
If you prefer to study code, a [simple example Child Theme](https://github.com/NateWr/defaultChild) can be found with all the basic configuration in place.

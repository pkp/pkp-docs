# Bootstrap3 Theme
[Bootstrap 3](https://getbootstrap.com/docs/3.4/) is a popular HTML, CSS and JavaScript framework for developing responsive, mobile-first web applications. Due its popularity, many developers are familiar with the HTML, CSS and JavaScript techniques used in the framework.

The [Bootstrap3 theme](https://github.com/NateWr/bootstrap3) is a community effort to provide a base theme built on these techniques. It implements an OJS journal theme using core bootstrap HTML markup, and provides a number of third-party styles for Bootstrap 3 out-of-the-box.

The community Bootstrap3 theme is designed to be a base, not a final product. To ensure widespread compatibility with Bootstrap 3 resources, and to ease the introduction for developers accustomed to working with Bootstrap 3, this theme only provides markup using core components from the Bootstrap 3 framework.

This means that, in most cases, you will need to do a little bit more work with a [Child Theme](child-themes.md) in order to polish off your site.

These OJS sites demonstrate existing Bootstrap child themes:
- [Default](https://demo.publicknowledgeproject.org/ojs3/demo/index.php/boot1)
- [Paper](https://demo.publicknowledgeproject.org/ojs3/demo/index.php/boot2)
- [Journal](https://demo.publicknowledgeproject.org/ojs3/demo/index.php/boot3)
- [Yeti](https://demo.publicknowledgeproject.org/ojs3/demo/index.php/boot5)
- [Sandstone](https://demo.publicknowledgeproject.org/ojs3/demo/index.php/boot6)
- [Cyborg](https://demo.publicknowledgeproject.org/ojs3/demo/index.php/boot4)

## Install Boostrap3

The **simplest** way to get the Bootstrap3 theme is to download the [latest release](https://github.com/NateWr/bootstrap3/releases) from the development repository. Unpack the `.zip` file and move the `bootstrap3` directory to your OJS installation at `/plugins/themes/bootstrap3`.

The **quickest** way to get the Bootstrap3 theme is to use git from the command line.

```
git submodule add https://github.com/NateWr/bootstrap3.git plugins/themes/bootstrap3
```

Once installed, you must go to the **Settings > Website > Plugins** page in your OJS admin area and enable the Bootstrap3 theme. You can then browse to **Settings > Website > Appearance** to choose one of the bundled theme swatches.

## Bundled Theme "Swatches"
Several Bootstrap 3 "swatches" are bundled with the theme. These swatches provide a custom pack of variables and styles which tailor the theme's colors, typography and more.

Each of the swatches that are provided are released under a GPL-compatible license. There are thousands more Bootstrap 3 swatches (often called themes) that can be purchased from commercial websites.

## Exploring Bootstrap
Since the Bootstrap theme is just a base, it will need a bit of work to fully implement a great looking theme. It is recommended that if you're working with these files that you be familiar with elements of both [Bootstrap 3](https://getbootstrap.com/docs/3.4/getting-started/) and [LESS](http://lesscss.org/features/).

To start, explore the base Bootstrap variables file:

- [plugins/themes/bootstrap3/bootstrap/less/variables.less](https://github.com/NateWr/bootstrap3/blob/master/bootstrap/less/variables.less)

Every color, font, etc., is declared here and each of the different bundled themes essentially just overrides these variables. For instance, here's the Flatly theme's variables file:

- [plugins/themes/bootstrap3/bootstrap-themes/flatly/variables.less](https://github.com/NateWr/bootstrap3/blob/master/bootstrap-themes/flatly/variables.less)

And then it includes just a little bit of additional LESS code to tweak a few more things:

- [plugins/themes/bootstrap3/bootstrap-themes/flatly/bootswatch.less](https://github.com/NateWr/bootstrap3/blob/master/bootstrap-themes/flatly/bootswatch.less)

## Child Theming the Bootstrap3 Theme

Each of the bundled theme swatches work the same way. They override the core Bootstrap 3 files with their own values. You will probably want to make more customizations with your own theme.

To do this, you'll want to create a [Child Theme](child-themes.md). If you're not familiar with this process, go back and follow that guide to build your own Child Theme and set the parent to `bootstrapthreethemeplugin`.

You can then use the `modifyStyle()` method from the [Theme API](theme-api.md) to inject your own variables.

```php
    /**
     * Load the custom styles for our theme
     * @return null
     */
    public function init() {
        $this->setParent('bootstrapthreethemeplugin');
        $this->modifyStyle('bootstrap', array('addLess' => array('styles/variables.less')));
    }
```

Now your child theme will load an additional LESS file, `styles/variables.less`, from your theme's file directory. You can override the Bootstrap 3 variables in that file.

Find the [Bootstrap 3 variables file](https://github.com/NateWr/bootstrap3/blob/master/bootstrap/less/variables.less). Copy the contents of that file into your own theme at `styles/variables.less`. Then modify them however you'd like.

Here is an example of a modified set of colors in my new `styles/variables.less`.

```less
@gray-base:              #012434;
@gray-darker:            lighten(@gray-base, 13.5%);
@gray-dark:              lighten(@gray-base, 20%);
@gray:                   lighten(@gray-base, 33.5%);
@gray-light:             lighten(@gray-base, 46.7%);
@gray-lighter:           lighten(@gray-base, 93.5%);

@brand-primary:         darken(#6f72ed, 6.5%);
@brand-success:         #5cb85c;
@brand-info:            #5bc0de;
@brand-warning:         #f0ad4e;
@brand-danger:          #d9534f;
```

If you would like to base your Child Theme off of one of the bundled theme swatches, copy that swatch's `variables.less` file instead.

## Contributing a Community Swatch
If you've created a great new theme swatch that you think should be bundled with the Bootstrap3 theme, you can contribute it by opening a pull request on the [development repository](https://github.com/NateWr/bootstrap3/).

To add a new swatch to the Bootstrap3 theme, you need to set up all of the necessary files for your new swatch (e.g. `myswatch`).

This example will demonstrate how to use the `flatly` swatch as a basis for your new swatch.

1. Copy the folder at `plugins/themes/bootstrap3/bootstrap-themes/flatly` to `plugins/themes/bootstrap3/bootstrap-themes/myswatch`
2. Delete the existing `LICENSE` file and replace it with your preferred GPL-compatible license.
3. Delete the contents from the following so that the following are empty files:
```
plugins/themes/bootstrap3/bootstrap-themes/myswatch/bootswatch.less
plugins/themes/bootstrap3/bootstrap-themes/myswatch/variables.less
```

4. Rename `bootswatch.less` to `myswatch.less`

5. Copy the file `plugins/themes/bootstrap3/styles/flatly.less` to `plugins/themes/bootstrap3/styles/myswatch.less`
6. Edit `plugins/themes/bootstrap3/styles/myswatch.less`: Modify the existing references to files in the `flatly` theme with references to your new myswatch.
```
@import "bootstrap.less";
@import "../bootstrap-themes/myswatch/variables.less";
@import "../bootstrap-themes/myswatch/myswatch.less"; 
```

7. Edit `plugins/themes/bootstrap3/BootstrapThreeThemePlugin.inc.php` and add a new option entry for your child theme, e.g. `'mytheme' => 'plugins.themes.bootstrap3.options.bootstrapTheme.myswatch',`
8. Edit `plugins/themes/bootstrap3/locale/en_US/locale.xml` and add a new locale entry for your new theme. For example:
```
<message key="plugins.themes.bootstrap3.options.bootstrapTheme.myswatch">My Swatch</message>
```

You may wish to alter the copyright and licensing information to your own specifications in the LESS file as well. For example:
```
/**
 * @file plugins/themes/bootstrap3/myswatch.less
 *
 * Copyright (c) 2014-2016 Simon Fraser University Library
 * Copyright (c) 2003-2016 John Willinsky
 * Distributed under the GNU GPL v2. For full terms see the file docs/COPYING.
 *
 * @brief Stylesheet for the My Theme Bootstrap theme.
 */
 ```

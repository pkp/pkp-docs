# Theme API Documentation

Every theme extends the core [`ThemePlugin`](https://github.com/pkp/pkp-lib/blob/main/classes/plugins/ThemePlugin.inc.php) class. This class has a number of methods that will help you load scripts and styles, modify parent stylesheets and more.

This section contains technical documentation of this PHP class. If you're not familiar with the theme class, and how it relates to styles, scripts and templates, you should [begin here](what-is-a-theme.md).

## init\(\)

The setup and configuration of your theme will happen within the `init()` method. This method is only run for the currently active theme \(or parent themes of the currently active theme\). All the other methods of the API should be run within the `init()` method.

```php
/**
 * Initialize the theme's styles, scripts and hooks. This is only run for
 * the currently active theme.
 *
 * @return null
 */
public function init() {
    $this->addStyle('my-custom-style', 'styles/index.less');
}
```

## addStyle\(\)

Add a stylesheet to the theme. Pass a `LESS` file that will be compiled automatically.

```php
public function init() {
    $this->addStyle('my-custom-style', 'styles/index.less');
}
```

Pass a pre-compiled `CSS` file if you prefer.

```php
public function init() {
    $this->addStyle('my-custom-style', 'styles/stylesheet.css');
}
```

This method accepts a number of optional `$args`.

```php
/**
 * Add a stylesheet to load with this theme
 *
 * Style paths with a .less extension will be compiled and redirected to
 * the compiled file.
 *
 * @param $name string A name for this stylesheet
 * @param $style string The stylesheet. Should be a path relative to the
 *   theme directory or, if the `inline` argument is included, style data to
 *   be output.
 * @param $args array Optional arguments hash. Supported args:
 *   'context': Whether to load this on the `frontend` or `backend`.
 *      default: `frontend`
 *   'priority': Controls order in which styles are printed
 *   'addLess': Additional LESS files to process before compiling. Array
 *   'addLessVariables': A string containing additional LESS variables to
 *      parse before compiling. Example: "@bg:#000;"
 *   `inline` bool Whether the $style value should be output directly as
 *      style data.
 */
public function addStyle($name, $style, $args = array()) { ... }
```

Styles with the `frontend` context will be output in your theme where you place the custom Smarty `load_stylesheet` function:

```html
{load_stylesheet context="frontend" stylesheets=$stylesheets}
```

You can define and use multiple contexts if you'd like. But `frontend` is the standard for themes and will be set automatically if no `context` argument is passed.

## modifyStyle\(\)

Modify a style that has already been registered, such as a Parent Theme's style. The following will modify a `default` style by adding another `LESS` file to compile alongside it.

```php
public function init() {
    $this->modifyStyle('default', array('addLess' => array('styles/colors.less')));
}
```

The `modifyStyle` function accepts an array of `$args` which allow you to modify any of the `$args` set when the style was registered with `addStyle()`.

```php
/**
 * Modify the params of an existing stylesheet
 *
 * @param $name string The name of the stylesheet to modify
 * @param $args array Parameters to modify.
 * @see self::addStyle()
 * @return null
 */
public function modifyStyle($name, $args = array()) { ... }
```

## removeStyle\(\)

Remove a style that has already been registered, such as a Parent Theme's style. The following will remove a style named `default`.

```php
public function init() {
    $this->removeStyle('default');
}
```

## addScript\(\)

Add a JavaScript file to the theme.

```php
public function init() {
    $this->addScript('my-javascript', 'js/main.js');
}
```

This method accepts a number of optional `$args`.

```php
/**
 * Add a script to load with this theme
 *
 * @param $name string A name for this script
 * @param $script string The script to be included. Should be path relative
 *   to the theme or, if the `inline` argument is included, script data to
 *   be output.
 * @param $args array Optional arguments hash. Supported args:
 *   `context` string Whether to load this on the `frontend` or `backend`.
 *      default: frontend
 *   `priority` int Controls order in which scripts are printed
 *      default: STYLE_SEQUENCE_NORMAL
 *   `inline` bool Whether the $script value should be output directly as
 *      script data. Used to pass backend data to the scripts.
 */
public function addScript($name, $script, $args = array()) { ... }
```

Scripts with the `frontend` context will be output in your theme where you place the custom Smarty `load_script` function:

```html
{load_script context="frontend" scripts=$scripts}
```

You can define and use multiple contexts if you'd like. But `frontend` is the standard for themes and will be set automatically if no `context` argument is passed.

## modifyScript\(\)

Modify a script that has already been registered, such as a Parent Theme's script. The `modifyScript` function accepts an array of `$args` which allow you to modify any of the `$args` set when the script was registered with `addScript()`.

```php
/**
 * Modify the params of an existing script
 *
 * @param $name string The name of the script to modify
 * @param $args array Parameters to modify.
 * @see self::addScript()
 * @return null
 */
public function modifyScript($name, $args = array()) { ... }
```

## removeScript\(\)

Remove a script that has already been registered, such as a Parent Theme's script. The following will remove a script named `default`.

```php
public function init() {
    $this->removeScript('default');
}
```

## addMenuArea\(\)

Your theme must register menu areas to display the navigation menus created by the Journal Manager \(v3.1+\). The following will register a menu area named `primary`.

```php
public function init() {
    $this->addMenuArea('primary');
}
```

You can also pass several menu areas at once.

```php
public function init() {
    $this->addMenuArea(array('primary', 'user'));
}
```

## removeMenuArea\(\)

Remove a menu area that has already been registered, such as a Parent Theme's menu area. The following will remove a menu area named `user`.

```php
public function init() {
    $this->removeMenuArea('user');
}
```

## setParent\(\)

Set the current theme to be a Child Theme of another theme. Learn more about [Child Themes](child-themes.md).

```php
public function init() {
    $this->setParent('defaultthemeplugin');
}
```




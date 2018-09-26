# Theme Options API Documentation

A small API exists for adding theme options. These options allow you to offer theme-specific configuration and typically entail color and font selections.

The API is new and still maturing. This documentation covers what's in place now so that you can take advantage of it in your own themes.

## addOption()
Add a new theme option. Supports option types of `text` (a small text field), `colour` (a color selector) and `radio` (choose from a list of options).

Example color option.

```php
public function init() {
	$this->addOption('baseColour', 'colour', array(
		'label' => 'plugins.themes.default.option.colour.label',
		'description' => 'plugins.themes.default.option.colour.description',
		'default' => '#1E6292',
	));
}
```

Example dropdown list of typography options.

```php
public function init() {
	$this->addOption('typography', 'radio', array(
		'label' => 'plugins.themes.default.option.typography.label',
		'description' => 'plugins.themes.default.option.typography.description',
		'options' => array(
			'notoSans' => 'plugins.themes.default.option.typography.notoSans',
			'notoSerif' => 'plugins.themes.default.option.typography.notoSerif',
			'notoSerif_notoSans' => 'plugins.themes.default.option.typography.notoSerif_notoSans',
			'notoSans_notoSerif' => 'plugins.themes.default.option.typography.notoSans_notoSerif',
			'lato' => 'plugins.themes.default.option.typography.lato',
			'lora' => 'plugins.themes.default.option.typography.lora',
			'lora_openSans' => 'plugins.themes.default.option.typography.lora_openSans',
		)
	));
}
```

## modifyOptionsConfig()
Modify the settings of an option that's already been added, such as a Parent Theme's option. Pass the name of the option and a new array of options arguments.

Example modifying the `typography` option in the previous example.

```php
public function init() {
	$this->modifyOptionsConfig('typography', 'radio', array(
		'label' => 'plugins.themes.default.option.typography.label',
		'description' => 'plugins.themes.default.option.typography.description',
        // New options. These replace the existing options.
		'options' => array(
			'montserratNotoSerif' => 'plugins.themes.default-child.option.typography.montserratNotoSerif',
			'montserratNotoSans' => 'plugins.themes.default-child.option.typography.montserratNotoSans',
        )
	));
}
```

See also [getOptionsConfig()](#getoptionsconfig).

## removeOption()
Remove an option that's already been added, such as a Parent Theme's option.

```php
public function init() {
    $this->removeOption( 'typography' );
}
```

## getOption()
Retrieve the value of a theme option. This is used to retrieve the currently set value of the option for use in the theme or templates.

Example modifying a `LESS` variable based on a color option.

```php
public function init() {
	$this->modifyStyle('stylesheet', array('addLessVariables' => '@bg-base:' . $this->getOption('baseColour') . ';'));
}
```

Example loading a custom font based on a radio selection.

```php
public function init() {
	if ($this->getOption('typography') === 'notoSerif') {
		$this->addStyle(
			'fontNotoSerif',
			'//fonts.googleapis.com/css?family=Noto+Serif:400,400i,700,700i',
			array('baseUrl' => '')
		);
		$this->modifyStyle(
			'stylesheet',
            array(
            	'addLessVariables' => '@font: "Noto Serif", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen-Sans", "Ubuntu", "Cantarell", "Helvetica Neue", sans-serif;'
            )
        );
	}
}
```

## getOptionConfig()
Get the configuration settings for an existing option. This is useful alongside [modifyOptionsConfig()](#modifyoptionsconfig) to extend choices in a Parent Theme's option.

```php
public function init() {
    $typographyConfig = $this->getOptionConfig('typography');
}
```

## getOptionsConfig()
Get the configuration settings for all options in this theme and any parent.

```php
public function init() {
    $allOptionsConfig = $this->getOptionsConfig();
}
```

## isColourDark()
Check the brightness of a hexidecimal color code (`#000000`).

This is a helper function that is useful when using colour options in your theme. If a colour is used as a background, you may need to adjust the text on top of it when it is too dark or too light.

Example adjusting a `LESS` variable when a colour selection is too light.

```php
public function init() {
    $additionalLessVariables[] = '@bg-base:' . $this->getOption('baseColour') . ';';
    // Check the new background color
    // and swap to black text if needed
    if (!$this->isColourDark($this->getOption('baseColour'))) {
        $additionalLessVariables[] = '@text-bg-base:rgba(0,0,0,0.84);';
    }
}
```

By default, the function uses a brightness threshold of `130`. You can pass in a custom threshold. Higher values are brighter.

```php
public function init() {
    if (!$this->isColourDark($this->getOption('baseColour'), 180)) {
        $additionalLessVariables[] = '@text-bg-base:rgba(0,0,0,0.84);';
    }
}
```

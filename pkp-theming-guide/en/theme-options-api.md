# Theme Options API Documentation

A small API exists for adding theme options. These options allow you to offer theme-specific configuration and typically entail color and font selections.

## addOption()
Add a new theme option. Supports any of the `Field` classes except for the file upload fields.

(TODO: Add a link to documentation on the form field classes.)

Example color picker.

```php
public function init() {
	$this->addOption('baseColor', 'FieldColor', [
		'label' => __('plugins.themes.default.option.colour.label'),
		'description' => __('plugins.themes.default.option.colour.description'),
		'default' => '#1E6292',
	]);
}
```

Example dropdown list of typography options.

```php
public function init() {
	$this->addOption('typography', 'FieldOptions', [
		'type' => 'radio',
		'label' => __('plugins.themes.default.option.typography.label'),
		'description' => __('plugins.themes.default.option.typography.description'),
		'options' => [
			[
				'value' => 'notoSans',
				'label' => __('plugins.themes.default.option.typography.notoSans'),
			],
			[
				'value' => 'notoSerif',
				'label' => __('plugins.themes.default.option.typography.notoSerif'),
			],
		],
		'default' => 'notoSans',
	]);
}
```

## removeOption()
Remove an option that's already been added, such as a Parent Theme's option.

```php
public function init() {
    $this->removeOption('typography');
}
```

## getOption()
Retrieve the value of a theme option. This is used to retrieve the currently set value of the option for use in the theme or templates.

Example modifying a `LESS` variable based on a color option.

```php
public function init() {
	$this->modifyStyle('stylesheet', array('addLessVariables' => '@bg-base:' . $this->getOption('baseColor') . ';'));
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
Get the configuration settings for an existing option. This is useful to modify or extend choices in a Parent Theme's option.

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

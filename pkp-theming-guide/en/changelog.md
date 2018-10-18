# Changelog

Changes to the Theme API and the Theme Options API will be documented below.

## 3.2

Released: Unreleased

### Theme Options Field Types

Theme Options now use the same `Field` types from which other forms in the application are created. This entails the following changes:

- The method `ThemePlugin::modifyOptionsConfig()` has been **removed**.
- The option types `text`, `colour` and `options` are **deprecated**. They will continue to work in 3.2, but support may be withdrawn at any time in the future. Now you must use the class name of the field type. Available classes can be found in `/components/forms/` and `/lib/pkp/components/forms/`.
- Theme Options can not be multilingual.
- Theme Options do not support file upload fields.
- Labels and descriptions expect final strings instead of locale keys.
- The array structure for defining options has **changed**.
- `ThemePlugin::getOptionValues()` now requires a context ID be passed to it.
- `ThemePlugin::validateOptions()` has een added so that you can validate the options before they are saved.

(TODO: Add a link to the forms documentation when it is complete.)

The following are examples of how to migrate your existing theme options.

Old `text` option:
```
$this->addOption('customTitle', 'text', array(
	'label' => 'plugins.themes.customTheme.customTitle',
));
```

New `FieldText` option:
```
$this->addOption('customTitle', 'FieldText', array(
	'label' => __('plugins.themes.customTheme.customTitle'),
));
```

Old `colour` option:
```
$this->addOption('baseColor', 'colour', array(
	'label' => 'plugins.themes.default.option.colour.label',
	'description' => 'plugins.themes.default.option.colour.description',
	'default' => '#1E6292',
));
```

New `FieldColor` option:
```
$this->addOption('baseColor', 'FieldColor', [
	'label' => __('plugins.themes.default.option.colour.label'),
	'description' => __('plugins.themes.default.option.colour.description'),
	'default' => '#1E6292',
]);
```

Old `radio` option:
```
$this->addOption('typography', 'radio', array(
	'label' => 'plugins.themes.default.option.typography.label',
	'description' => 'plugins.themes.default.option.typography.description',
	'options' => array(
		'notoSans' => 'plugins.themes.default.option.typography.notoSans',
		'notoSerif' => 'plugins.themes.default.option.typography.notoSerif',
	),
	'default' => 'notoSans',
));
```

New `FieldOptions` option:
```
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
```

###

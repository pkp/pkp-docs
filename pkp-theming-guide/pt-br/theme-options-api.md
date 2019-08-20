# Documentação da API para Opções de Tema

Existe uma pequena API para adicionar opções de tema. Essas opções permitem que você ofereça configuração específica do tema e  inclua seleções de cores e fontes(tipografia).

Esta API é nova e ainda está amadurecendo. Esta documentação abrange o que está implementado até o momento, de modo que você possa utilizar em seus temas.

## addOption()
Adiciona uma nova opção de tema. Suporta os tipos de opção de `text` (um pequeno campo de texto), `color` (um seletor de cores) e um `radio` (uma lista de opções para escolha)

Exemplo de opção de cor.

```php
public function init() {
	$this->addOption('corBase', 'colour', array(
		'label' => 'plugins.themes.default.option.colour.label',
		'description' => 'plugins.themes.default.option.colour.description',
		'default' => '#1E6292',
	));
}
```

Exemplo de opção em lista _dropdown_ para escolha de fonte(tipografia) .

```php
public function init() {
	$this->addOption('tipografia', 'radio', array(
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
Modifica as configurações de uma opção previamente adicionada. como uma opção de um Tema Pai. Passe o nome da opção e uma nova lista (em formato de _array_ ) de argumentos de opções.

Exemplo que modifica a opção `tipografia` do exemplo anterior.

```php
public function init() {
	$this->modifyOptionsConfig('tipografia', 'radio', array(
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

Veja também [getOptionsConfig()](#getoptionsconfig).

## removeOption()
Remove uma opção que tenha sido previamente adiciona, como, por exemplo, uma opção de Tema Pai.

```php
public function init() {
    $this->removeOption( 'tipografia' );
}
```

## getOption()
Recupera o valor de uma opção de tema. É utilizada para recuperar o valor atual configurado de uma opção para utiliar em um tema ou em _templates_.

Exemplo que modifica uma variável `LESS` baseada em uma opção de cor.

```php
public function init() {
	$this->modifyStyle('stylesheet', array('addLessVariables' => '@bg-base:' . $this->getOption('corBase') . ';'));
}
```

Exemplo que carrega uma fonte personalizada baseando-se em seleço de _radio_.

```php
public function init() {
	if ($this->getOption('tipografia') === 'notoSerif') {
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

## getOptionsConfig()
Obtem as configurações definidas para uma opção existente. Isto é útil, juntamente com [modifyOptionsConfig()](#modifyoptionsconfig), para estender escolhas  em uma opção de Tema Pai.


```php
public function init() {
    $this->getOptionsConfig('tipografia');
}
```

## isColourDark()
Verifica a luminosidade de um código de cor hexidecimal (`#000000`). 

Esta é uma função auxiliar muito útil quando utilizar opções de cores em seu tema. Caso uma cor seja usada como fundo, você pode ajusta o texto sobre o fundo quando este for muito escuro ou muito claro.

Exemplo de ajuste de uma variável `LESS` quando uma seleção de cor é muito clara.


```php
public function init() {
    $additionalLessVariables[] = '@bg-base:' . $this->getOption('corBase') . ';';
    // Verifica a cor de fundo
    // e troca o texto para cor preta se for necessário
    if (!$this->isColourDark($this->getOption('corBase'))) {
        $additionalLessVariables[] = '@text-bg-base:rgba(0,0,0,0.84);';
    }
}
```

Por padrão a função utiliza o limite de luminosidade de `130`. Mas você pode passar um limite personalizado. Valores mais altos são mais claros.

```php
public function init() {
    if (!$this->isColourDark($this->getOption('corBase'), 180)) {
        $additionalLessVariables[] = '@text-bg-base:rgba(0,0,0,0.84);';
    }
}
```

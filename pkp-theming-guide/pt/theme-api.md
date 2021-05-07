# Documentação da API de Tema

Todo tema estende a classe principal do [`ThemePlugin`](https://github.com/pkp/pkp-lib/blob/main/classes/plugins/ThemePlugin.inc.php). Esta classe tem um número de métodos que auxiliam no carregamento de _scripts_ e estilos, além de modificar as folhas de estilo Pai entre outras coisas.

Esta seção abrange a documentação técnica desta classe PHP. Caso você não esteja familiarizado com classe de tema e como isto se relaciona com estilos, _scripts_ e _templates_ então [comece por aqui](what-is-a-theme.md).

## init()

A configuração do seu tema ocorrerá dentro do método `init()`. Este método é executado apenas  para o tema atualmente ativo (ou o tema pai do tema ativo). Todos os outros métodos da API devem ser executados dentro do método `init()`.

```php
	/**
	 * Inicializa os estilos do tema, scripts e os hooks. 
	 * É executado somente para o tema atualmente ativo
	 *
	 * @return null
	 */
	public function init() {
		$this->addStyle('my-custom-style', 'styles/index.less');
	}
```

## addStyle()
Adiciona uma folha de estilos ao tema. Passa um arquivo `LESS` que será compilado automaticamente.

```php
public function init() {
    $this->addStyle('my-custom-style', 'styles/index.less');
}
```

Você pode passar um arquivo `CSS` pré-compilado, caso prefira.

```php
public function init() {
    $this->addStyle('my-custom-style', 'styles/stylesheet.css');
}
```

Este método aceita um número de `$args` opcionais.

```php
	/**
	 * Adiciona uma folha de estilos para carregar junto com este tema
	 *
	 * Caminhos de arquivos de estilo com a extensão .less serão
	 * compilados e redirecionados para o arquivo compilado
	 *
	 * @param $name string Um nome para esta folha de estilos
	 * @param $style string A folha de estilos. Deve ser um
	 *   caminho relativo ao diretório do tema ou, se estiver
	 *   com argumento `inline` incluído, com os dados do arquivo de estilo que deve ser a saída final.
	 * @param $args array Hash de argumentos opcionais. Argumentos suportados:
	 *   'context': Qual o contexto onde deve  ser carregado `frontend` ou `backend`.
	 *      default: `frontend`
	 *   'priority': Controla a ordem em que os estilos são escritos na saída
	 *   'addLess': Arquivos LESS adicionais para serem processados antes de compilar. Array
	 *   'addLessVariables': Uma string contendo variáveis LESS adicionais para 
	 *     parsear antes de compilar. Exemplo: "@bg:#000;"
	 *   `inline` booleana Configura se o valor de $style deve ou não 
	 * ser saído diretamente num arquivo de estilos
	 */
	public function addStyle($name, $style, $args = array()) { ... }
```

Estilos com o contexto `frontend` terão sua saída escrita no tema onde estiver localizada a função personalizada de Smarty:

```html
{load_stylesheet context="frontend" stylesheets=$stylesheets}
```

Você pode definir e utilizar multiplos contextos se desejar. Mas o `frontend` é o padrão para temas e será configurado automaticamente se nenhum argumento `context` for passado.

## modifyStyle()
Modifica um estilo que tenha sido registrado, como um estilo de Tema Pai. O trecho abaixo modificaria um estilo `padrao` adicionando outro arquivo `LESS` a ser compilado junto a ele.

```php
public function init() {
    $this->modifyStyle('padrao', array('addLess' => array('styles/colors.less')));
}
```

A função `modifyStyle` aceita uma lista em formato de _array_ com `$args` que permite que você modifique qualquer um desses`$args` configurado no momento de registro com o `addStyle()`.

```php
	/**
	 * Modifica os parâmetros de uma folha de estilos existentes
	 *
	 * @param $name string The name of the stylesheet to modify
	 * @param $args array Parameters to modify.
	 * @see self::addStyle()
	 * @return null
	 */
	public function modifyStyle($name, $args = array()) { ... }
```

## removeStyle()
Remove um estilo que tenha sido anteriormente registrado, com um estilo de Tema Pai. O código abaixo removeria um estilo chamado `padrao`:
```php
public function init() {
    $this->removeStyle('padrao');
}
```

## addScript()
Adiciona um arquivo JavaScript ao tema.

```php
public function init() {
    $this->addScript('meu-javascript', 'js/main.js');
}
```

Este método aceita um número de `$args` opcionais.

```php
	/**
	 * Adiciona um script para carregar com o tema
	 *
	 * @param String $name  Um nome nome para este script
	 * @param String $script O script a ser incluído. Deve ter o caminho relativo ao tema
	 *   ou, se o argumento `inline` estiver declarado, os dados do script que servirá como saída.
	 * @param Array $args Hash de argumentos opcionais. Os argumentos suportados são:
	 *   String `context`  Declara  qual o contexto onde carregar este script: `frontend` ou `backend`.
	 *      padrão: frontend
	 *   Int `priority`  Controla a ordem em que os scripts são escritos
	 *      padrão: STYLE_SEQUENCE_NORMAL
	 *   Booleana `inline` Declara se os valores do $script deve ser saídos  diretamente como dados de script.
	 *      Utilizado para passar dados do backend para os scripts.
	 */
	public function addScript($name, $script, $args = array()) { ... }
```

Scripts com o contexto `frontend` terão sua saída escrita no tema onde estiver localizada a função personalizada de Smarty `load_script`:

```html
{load_script context="frontend" scripts=$scripts}
```
Você pode definir e utilizar múltiplos contestos se desejar. Contudo `frontend` é o padrão para os temas e será configurado automaticamente se nenhum argumento `context` for passado.

## modifyScript()
Modifica um script que já tenha sido registrado, como, por exemplo, um script de Tema Pai. A função `modifyScript` aceita uma lista em formato de _array_ com `$args` que permite que você modifique qualquer um desses`$args` configurado no momento de registro com o `addScript()`.


```php
	/**
	 * Modifica os parâmetros de um script existente
	 *
	 * @param String $name  O nome do script a modificar
	 * @param Array $args Parâmetros a modificar.
	 * @see self::addScript()
	 * @return null
	 */
	public function modifyScript($name, $args = array()) { ... }
```

## removeScript()
Remove um script que tenha sido anteriormente registrado, com um script de Tema Pai. O código abaixo removeria um script chamado `padrao`:

```php
public function init() {
    $this->removeScript('padrao');
}
```

## setParent()
Configura o tema atual para ser o Tema Filho de outro tema. Veja mais sobre [Temas Filhos](child-themes.md).

```php
public function init() {
    $this->setParent('defaultthemeplugin');
}
```

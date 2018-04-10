# Temas Filhos (_Child Themes_)

Quando você cria um tema personalizado você pode optar em extender um Tema Pai. Um Tema Filho carregará automaticamente os arquivos de template e de estilos encontrados em seu Tema Pai. Isto lhe permite desenvolver um tema a partir e sobre outro já existente.

Aqui estão algumas coisas que você pode fazer com um tema filho:

1. Substituir as variáveis LESS do tema pai de modo a ajustar cores e fontes com apenas algumas linhas de código.
2. Ajustar o código HTML do template de detalhamento de artigo sem a necessidade de criar um tema novo completo.
3. Modificar  o menu de navegação principal sem a necessidade de mexer nos outros componentes que estejam em arquivos de template.

Em iterações anteriores do OJS e do OMP era necessário desenvolver os temas em sua totalidade ou então editar um tema existente se quisesse adaptar o visual. O maior benefício de utilizar Temas Filhos é que você pode isolar seu código personalizado. Isto significa que você pode atualizar  o Tema Pai  e a aplicação principal com segurança sem sobrescrever seu código personalizado.

Caso você tenha desenvolvido temas para sistemas de gerenciamento de conteúdo populares como [WordPress](https://wordpress.org/) você estará familiarizado com este conceito. Contudo nós lidamos com isto de um modo sutilmente diferente. Nesta seção será mostrado como modificar os estilos de um tema pai, adicionando seus próprios estilos, além de substituir arquivos de template entre outras coisas.

## Qual a diferença entre um Tema Filho e um Tema Pai?

Nenhuma.

Temas Pai e Filho são plugin de tema normais e não implicam em nada especial no modo como são desenvolvidos. Ambos os temas, Filho e Pai, utilizam a mesma [API de Tema](theme-api.md). Você pode aprender mais a respeito da estrutura de um tema e como configurar seu próprio tema personalizado em [O que é um tema?](what-is-a-theme.md).

Uma vez configurado o tema, você pode utilizar um pouco de código extra para designar um tema como tema pai. Você talvez reconheça o trecho abaixo encontrado em [Configuração de Temas](theme-setup.md) 

```php
<?php
import('lib.pkp.classes.plugins.ThemePlugin');
class TutorialThemePlugin extends ThemePlugin {

	/**
	 * Carrega os estilos personalizados de nosso tema
	 * @return null
	 */
	public function init() {
        $this->addStyle('stylesheet', 'styles/index.less');
	}
    
	/**
	 * Obtem o nome de exibição deste tema
	 * @return string
	 */
	function getDisplayName() {
		return 'Tutorial Theme';
	}
    
	/**
	 * Obtem a descrição deste plugin
	 * @return string
	 */
	function getDescription() {
		return 'Um exemplo de tema para OJS ou OMP desenvolvido com nossa fantástica documentação.';
	}
}
```

Vamos focar no método `init()`.

```php
	/**
	 * Carrega os estilos personalizados para nosso tema
	 * @return null
	 */
	public function init() {
        $this->addStyle('stylesheet', 'styles/index.less');
	}
```

Você pode configurar o Tema Pai para este tema utilizando o método `setParent()`. Façamos, então, deste tema um Tema Filho do Tema Padrão que vem junto com o OJS 3.0+.

```php
	/**
	 * Carrega os estilos personalizados para nosso tema
	 * @return null
	 */
	public function init() {
    
        // Usar o slug único do plugin Tema Pai
        $this->setParent('defaultthemeplugin');
        
        // Altere o ID desta folha de estilos para 
        //`child-stylesheet`. Isto assegura que 
        // não entrará em conflito com a folha de estilos 
        // do tema pai
        $this->addStyle('child-stylesheet', 'styles/index.less');
	}
```

A partir de agora quando o tema for carregado ele chamará automaticamente o método `init()` do tema pai. Isto quer dizer que todos os scripts e estilos(_styles_) registrados naquele tema serão carregados.

## Adicionando e Modificando Estilos

Agora seu tema filho já compila e carrega duas folhas de estilos. Os estilos Pai, definidos no Tema Pai e denominados `stylesheet`, e os estilos Filho, denominados `child-stylesheet`.

*Os Estilos são compilados a partir dos arquivos LESS. Aprenda mais sobre [CSS e LESS](css-less.md).*

Entretanto, em alguns casos, você talvez queira adicionar estilos à folha de estilos Pai ao invés de carregar uma  folha de estilos própria em separado. Você pode compilar autimaticamente seus próprios estilos junto aos estilos do Tema Pai utilizando o método `modifyStyle()`.

```php
	/**
	 * Carrega os estilos personalizados para nosso tema
	 * @return null
	 */
	public function init() {
        $this->setParent('defaultthemeplugin');
        $this->modifyStyle('stylesheet', array('addLess' => array('styles/index.less')));
	}
```

Isto mostra-se útil quando você precisar compartilhar [mix-ins](http://lesscss.org/features/#mixins-feature) ou [variáveis](http://lesscss.org/features/#variables-feature) no Tema Pai. O tema padrão utiliza um número de variáveis para definir: cores, tipografia, espaçamento, etc.

O exemplo a seguir mostra um Tema Filho ampliando os estilos do tema padrão sobrescrevendo uma variável em seu arquivo personalizado `styles/index.less`:

```less
// Mudar a cor padrão de azul #007ab2 para vermelho #b21a00
@primary:  #b21a00;
```

## Sobrescrevendo os _Templates_

Temas Filhos permitem que você sobrescreva os templates do Tema pai ao mesmo tempo que pode continuar utilizando os arquivos deste último quando os templates não forem sobrescritos.

A seção [HTML/Smarty](html-smarty.md) deste guia descreve como os arquivos de template _frontend_ são carregados conforme a ordem de prioridade. Temas Filhos adicionam um novo local com prioritização mais alta no sentido de recuperação e carregamento dos arquivos de _template_.

Quando o OJS ou o OMP carrega um _template_, a aplicação busca na seguinte ordem:

1. O diretório atual do tema.
2. Se um tema Pai for declarado, o diretório de arquivos de _template_ do tema Pai.
3. O diretório de template do OJS ou do OMP.
4. O diretório ib/pkp/templates/ dentro da aplicação.

Para sobrescrever o _template_  de um Tema Pai copie o arquivo de _template_ para dentro do mesmo local no Tema Filho.

## Temas Netos

A relação Pai-Filho entres os temas não está limitada a apenas um nível. Você pode ter um Tema Pai, um Tema Filho que extende o Pai e, então, um Tema Neto que extende o Tema Filho.

Não é necessário registrar programaticamente as relações estendidas de tema deste tipo. Quando um Tema Pai é registrado a aplicação, automaticamente, lidará com todos os Pais deste tema Pai.

Isso não será necessário com muita freqüência, mas poderá ser útil caso você lide com muitos temas de periódicos e deseje compartilhar códigos entre os temas. Ou se  estiver estendendo um dos temas filho fornecidos pela comunidade.

## Exemplo

Caso prefira estudar código, confira um [exemplo simples de Tema Filho](https://github.com/NateWr/default-child) com toda a configuração básica em seu devido lugar.
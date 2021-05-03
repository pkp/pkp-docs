# Tema Bootstrap3
O [Bootstrap 3](https://getbootstrap.com/docs/3.4/) é um framework de HTML, CSS e JavaScript muito popular para desenvolvimento de aplicações _web_ responsivas e _mobile-first_. Devido à sua popularidade muitos desenvolvedores estão familiarizados com as técnicas de HTML, CSS e JavaScript utilizados neste _framework_.

O [tema Bootstrap3 ](https://github.com/NateWr/bootstrap3) é um esforço da comunidade em fornecer um tema base desenvolvido utilizando estas técnicas. Ele implementa um tema de periódico em OJS utilizando o código  _markup_ HTML principal do bootstrap e fornece um bom número de estilos de terceiros prontos para uso no tema Bootstrap3.

O tema Bootstrap3  da comunidade foi projetado para ser uma base de início de trabalho de desenvolvimento e não um produto final. Para garantir a ampla compatibilidade com os recursos do Bootstrap 3, e facilitar a introdução para desenvolvedores habituados a trabalhar com o Bootstrap 3, este  tema fornece o _markup_ baseado apenas em  componentes principais do framework Bootstrap 3.

Isto significa que, na maioria dos casos, você precisará lidar com [ Temas Filhos](child-themes.md) de modo a aparar as arestas de seu _site_.


## Instalação do Boostrap3

A maneira **mais simples** de se obter o tema Bootstrap3 é fazendo o _download_ da [última versão](https://github.com/NateWr/bootstrap3/releases) direto do repositório de desenvolvimento. Extraia o conteúdo do arquivo `.zip` e mova o diretório `bootstrap3` para sua instação OJS em  `/plugins/themes/bootstrap3`.

A maneira **mais rápida** de se obter o tema Bootstrap3  é utilizando o `git` na linha de comando

```
git submodule add https://github.com/NateWr/bootstrap3.git plugins/themes/bootstrap3
```

Uma vez instalado o tema, você deve ir na página **Configurações > Website > Plugins** na área administrativa de seu OJS e habilitar o tema Bootstrap3. Após, você pode navegar até **Configurações > Website > Aparência** e escolher uma das amostras de tema inclusos na instalação deste tema.


## "Amostras" de Temas Inclusos
Muitas "amostras" do Bootstrap3 estão incluídas junto com o tema. Estas amostras fornecem um pacote personalizado de variáveis e estilos que adaptam cores, tipografia e outros elementos visuais do tema.

Cada uma das amostras é liberada sob uma licença compatível com GPL. Há milhares de amostras de Bootstrap3 (também chamados de temas) que podem ser adquiridos de _websites_ comerciais.



## Explorando o Bootstrap
Sendo o Bootstrap apenas um tema base ele demandará um pouco de trabalho para a implementação de temas com visual mais requintado. Recomenda-se que, caso você esteja trabalhando com estes arquivos,  esteja familiarizado com ambos os elementos de [Bootstrap 3](https://getbootstrap.com/docs/3.4/getting-started/) e [LESS](http://lesscss.org/features/). 


Inicialmente explore o arquivo de variáveis do Bootstrap básico:
- [plugins/themes/bootstrap3/bootstrap/less/variables.less](https://github.com/NateWr/bootstrap3/blob/master/bootstrap/less/variables.less)

Todas as cores, fontes, etc... são declaradas aqui e cada um dos diferentes temas inclusos, essencialmente, sobrescreve estas variáveis. Por exemplo, aqui está o arquivo de variáveis do tema Flatly:

- [plugins/themes/bootstrap3/bootstrap-themes/flatly/variables.less](https://github.com/NateWr/bootstrap3/blob/master/bootstrap-themes/flatly/variables.less)

E, em seguida, ele inclui apenas um pouco de código LESS adicional para ajustar algumas coisas mais: 

- [plugins/themes/bootstrap3/bootstrap-themes/flatly/bootswatch.less](https://github.com/NateWr/bootstrap3/blob/master/bootstrap-themes/flatly/bootswatch.less)

## Temas Filhos com o Tema Bootstrap3
Cada uma das amostras de temas inclusa funciona da mesma maneira.Elas sobrescrevem os arquivos principais do Bootstrap3 com seus próprios valores. Você, provavelmente, fará mais personalizações com seu próprio tema.

Para tal, você criará um [Tema Filho](child-themes.md). Caso não esteja familiarizado com este processo, volte um pouco nesta documentação, siga o guia de como construir seu próprio Tema Filho e configure o Tema Pai  para ser `bootstrapthreethemeplugin`.

Você pode, em seguida, utilizar o método `modifyStyle()` da [API de Tema](theme-api.md) para inserir suas próprias variáveis.

```php
    /**
     * Carrega os estilos personalizados para nosso tema
     * @return null
     */
    public function init() {
        $this->setParent('bootstrapthreethemeplugin');
        $this->modifyStyle('bootstrap', array('addLess' => array('styles/variables.less')));
    }
```

Agora seu tema filho carregará um arquivo LESS adicional, `styles/variables.less`, de  diretório de arquivos do seu tema. Você pode sobrescrever as variáveis Bootstrap 3 neste arquivo.

Encontre o [arquivo de variáveis do Bootstrap 3](https://github.com/NateWr/bootstrap3/blob/master/bootstrap/less/variables.less). Copie o conteúdo deste arquivo para seu próprio tema em `styles/variables.less`. Modifique, então, conforme desejar.

Aqui está um exemplo de um conjunto de cores modificadas em meu novo `styles/variables.less`.

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


Se você quiser basear seu Tema Filho a partir de um dos temas de amostra incluídos, copie o arquivo `variables.less` da amostra neste caso.

## Contribuindo com uma Amostra para Comunidade

Caso você crie um novo tema, que considere interessante de também ser incluído como amostra no tema Bootstrap3, então abra uma solicitação para esta sua contribuição no [repositório de desenvolvimento](https://github.com/NateWr/bootstrap3/).

Para adicionar uma nova amostra ao tema Bootstrap3 você precisa configurar todos os arquivos necessários para sua nova amostra (ex.: `minhaamostra`).

O exemplo abaixo mostra  como utilizar a amostra `flatly` como base para sua nova amostra de tema.

1. Copie a pasta em `plugins/themes/bootstrap3/bootstrap-themes/flatly` para `plugins/themes/bootstrap3/bootstrap-themes/minhaamostra`
2. Apague o arquivo `LICENSE` existente e sustitua-o com sua licença de uso preferida e  compatível com a licença GPL .
3. Apague o conteúdo dos seguintes arquivos de modo a deixá-los vazios:
```
plugins/themes/bootstrap3/bootstrap-themes/minhaamostra/bootswatch.less
plugins/themes/bootstrap3/bootstrap-themes/minhaamostra/variables.less
```
4. Renomeie `bootswatch.less` to `minhaamostra.less`
5. Copie o arquivo `plugins/themes/bootstrap3/styles/flatly.less` para `plugins/themes/bootstrap3/styles/minhaamostra.less`
6. Edite o arquivo `plugins/themes/bootstrap3/styles/minhaamostra.less`:
Substitua as referências existentes aos arquivos do tema `flatly` pelas referências ao seu novo `minhaamostra`.
```
@import "bootstrap.less";
@import "../bootstrap-themes/minhaamostra/variables.less";
@import "../bootstrap-themes/minhaamostra/minhaamostra.less"; 
```
7. Edite o arquivo `plugins/themes/bootstrap3/BootstrapThreeThemePlugin.inc.php` e adicione uma nova entrada de opção para o seu tema filho, como: `'meutema' => 'plugins.themes.bootstrap3.options.bootstrapTheme.minhaamostra',`
8. Edite o arquivo `plugins/themes/bootstrap3/locale/en_US/locale.xml`  e adicione uma nova entrada de idioma para seu novo tema. Por exemplo:
```
<message key="plugins.themes.bootstrap3.options.bootstrapTheme.minhaamostra">Minha Amostra</message>
```

Você pode  alterar as informações de direitos autorais e licença de uso, conforme suas necessidades específicas, dentro do arquivo LESS. Veja o exemplo abaixo :
```
/**
 * @file plugins/themes/bootstrap3/minhaamostra.less
 *
 * Copyright (c) 2014-2016 Simon Fraser University Library
 * Copyright (c) 2003-2016 John Willinsky
 * Distributed under the GNU GPL v2. For full terms see the file docs/COPYING.
 *
 * @brief Stylesheet for the My Theme Bootstrap theme.
 */
 ```
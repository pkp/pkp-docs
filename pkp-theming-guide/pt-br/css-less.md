# CSS/LESS

O OJS e o OMP utilizam a sintaxe [LESS](http://lesscss.org/) para escreverem o código que será compilado em um arquivo CSS. LESS é uma sintaxe baseada em CSS e fácil de usar que permite escrever código CSS com algumas abstrações muito úteis, como: [variáveis](http://lesscss.org/features/#variables-feature), [importação de arquivo](http://lesscss.org/features/#variables-feature-import-statements) and [mix-ins](http://lesscss.org/features/#mixins-feature).

A seguir um exemplo de um arquivo LESS que utiliza uma variável para a cor de fundo (background) de um cabeçalho(header) e um rodapé(footer).

```less
@background: red;

.pkp_structure_head,
.pkp_structure_footer {
  background: @background;
}
```

Isto torna-se mais útil quando queremos usar a mesma cor de fundo na borda de um elemento `<button>`.

```less
@background: red;

.pkp_structure_head,
.pkp_structure_footer {
  background: @background;
}

button {
  border-color: @background;
}
```
Conforme uma folha de estilos cresce, você poderá querer dividir seus estilos em diferentes arquivos de modo que fique mais fácil lidar com as formatações. LESS permite que você importe arquivos separados e compartilhe variáveis entre eles.


```less
// styles/variable.less
@background: red;
```

```less
// styles/structure.less
.pkp_structure_head,
.pkp_structure_footer {
  background: @background;
}
```

```less
// styles/forms.less
button {
  border-color: @background;
}
```

```less
// styles/index.less
// Agora podemos combinar todos os arquivos em um único arquivo.
@import "variables"
@import "structure"
@import "forms"
```

De modo que, se seguíssemos este formato, nosso plugin de tema personalizado teria os seguintes arquivos dentro dele.

```
styles/index.less
styles/variables.less
styles/structure.less
styles/forms.less
```

Caso o seu periódico decida alterar sua identidade visual do vermelho(_red_) para azul(_blue_), você precisará apenas atualizar uma linha no código do seu tema:

```less
// styles/variable.less
@background: blue; // antes era ´red´
```

Antes de seus estilos aparecerem é necessário certificar-se que eles foram compilados e carregados com seu tema personalizado. Isto pode ser feito utilizando-se o método `addStyle` da [API de Tema](theme-api.md).


```php
class DefaultThemePlugin extends ThemePlugin {
  public function init() {
    // O segundo parâmetro, 'styles/index.less', 
    // deve apontar para um arquivo LESS em seu tema.
    $this->addStyle('stylesheet', 'styles/index.less');
  }
}
```

A [API de Tema](theme-api.md) será discutida com mais detalhes nas seções seguintes deste guia.

*Caso a utilização de LESS pareça  muito complicada, você pode ainda escrever CSS simples (_plain_) que também funcionará do mesmo modo. Você precisa apenas salvar o arquivo com a extensão `.less` no nome.* O poder de utilização de LESS ao invés do CSS puro torna-se mais claro quando você explorar as funcionalides de ampliar temas existentes com [Temas Filhos(_Child Themes_)](child-themes.md).
# Templates(modelos) HTML/Smarty 

O OJS e o OMP utilizam o sistema de templates(modelos) [Smarty](http://www.smarty.net/) para compilar os templates HTML. Smarty é uma sintaxe leve que permite que você use uma lógica similar ao PHP dentro de templates HTML. 

## Localizando os Templates de _Frontend_

Todos os arquivos de template utilizados no _frontend_, interface pública do website do periódico, são guardados em um diretório especial separados dos templates utilizados no _backend_ da aplicação, a interface de fluxo editorial. Isto permite que você possa customizar com segurança o _frontend_ sem afetar o _backend_ e reduz significativamente o trabalho para construir um tema customizado.

Todo template de _frontend_ pode ser encontrado em um desses poucos locais.

1. Todos os templates específicos para sua aplicação OJS ou OMP estarão dentro do diretório `templates/frontend/` dentro da pasta da aplicação.
2. Todos os templates comuns a ambas aplicações, tais como cadastro de usuário e anúncios, estarão dentro do diretório `lib/pkp/templates/frontend`.
3. Todos os arquivos templates que seu tema customizado se sobreponha estarão dentro do diretório `plugins/themes/<nome-do-seu-tema>/templates/frontend`.


### A Estrutura de Template do Frontend 
Cada um desses diretórios está dividido em três subdiretórios que armazenam tipos específicos de arquivos templates.

`/templates/frontend/pages`

Este diretório contem todos os arquivos de template de  nível superior que são chamados pela aplicação. Cada um desses arquivos representa uma solicitação de uma solicitação de página inteira.

Por exemplo, uma solicitação para uma página inicial, ou capa, carrega `/pages/index.tpl`. Já uma solicitação para um anúncio carrega o arquivo `/pages/announcement.tpl`.

`/templates/frontend/objects`

Este diretório contem os arquivos de template que mapeiam para um determinado objeto de dados. No OJS você encontrará templates para um objeto de Edição ou de Artigo. No OMP você encontrará templates para um objeto de Monografia.

Cada um destes arquivos de template representam uma determinada visão do objeto de dados. Você encontrará o `article_summary.tpl` para exibir um sumário de um artigo em uma tabela de conteúdos da Edição. E achará o `article_details.tpl` para mostrar a visualização completa de um Artigo.

`/templates/frontend/components`

Este diretório contem os arquivos de template que manipulam componentes específicos de interface(UI) ou templates que não se encaixam em outros lugares como navegação de caminho de pão ou formulários de busca.

### Compreendendo a Substituição de Template

O **Tema Padrão** utiliza todos os templates da aplicação principal. Mas você pode substituir, funcionalmente,  qualquer template no sistema  incluindo um arquivo com o mesmo nome no seu tema.

Por exemplo, se você quisesse substituir o arquivo de template do sistema localizado em `/templates/frontend/pages/article.tpl` bastaria adicionar um arquivo com o mesmo nome no caminho de diretório `/plugins/themes/<seu-tema>/templates/frontend/pages/article.tpl`.

Utilizando esta técnica você pode substituir apenas arquivos de template específicos que achar necessário. Ou você pode substituir todos os arquivos de template pelos seus próprios aquivos.

Quando o OJS ou o OMP carregam um template eles procuram na seguinte ordem:

1. O diretório de template do tema em uso.
2. O diretório de template do OJS ou OMP.
3. O diretório `lib/pkp/templates/` dentro da aplicação.

Se não encontrar um template no passo 1 então vai para o passo 2 e assim por diante.

*Esta seção descreve a edição de templates de frontend. Recomendamos que você **nunca modifique os templates de backend**, mas se você precisar fazê-lo então pode aprender mais sobre isso  no [tematizando o backend de fluxo editorial](theme-backend.md).*

## Utilizando Dados Smarty nos Templates

Cada aplicação entrega dados para um arquivo de template antes de carregá-lo. Todo arquivo de template recebe uma variável `$siteTitle` que inclui o nome do _site_  que está sendo visitado.

```html
<p>Bem-vindo à {$siteTitle}!</p>
```

Alguns dados retornados aos templates permitem que você acesse configuração de objeto. Você encontrará o periódico atual sob a variável `$currentContext`.

```html
<p>Bem-vindo à {$currentContext->getLocalizedName()}</p>
```

Alguns dados são específicos para determinados templates. O arquivo de template `/frontend/pages/article.tpl` recebe a variável `$article` que pode ser utilizada para acessar dados sobre o artigo em questão.

```html
<h1 class="article-title">{$article->getLocalizedTitle()}</h1>
```

Todos os templates de frontend incluem informações sobre quais variáveis eles utilizam no cabeçalho do arquivo de template. Você encontrará esta informação abaixo do prefix `@uses`.

```smarty
{**
 * templates/frontend/pages/article.tpl
 *
 * Copyright (c) 2014-2016 Simon Fraser University Library
 * Copyright (c) 2003-2016 John Willinsky
 * Distributed under the GNU GPL v2. For full terms see the file docs/COPYING.
 *
 * @brief Display the page to view an article with all of it's details.
 *
 * @uses $article Article This article
 * @uses $issue Issue The issue this article is assigned to
 * @uses $section Section The journal section this article is assigned to
 * @uses $journal Journal The journal currently being viewed.
 *}
```
*Perceba que nem todas as variáveis são listada aqui. Apenas aquelas que são utilizadas por este template estão listadas. Porém existe muitas [variáveis de template comuns](template-variables.md) disponíveis. Sendo possível, também, carregar [dados personalizados](examples-advanced.md).*
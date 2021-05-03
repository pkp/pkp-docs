# Variáveis ​​de Template Comuns

Quando um _template_ [Smarty](html-smarty.md) é carregado, a apicação OJS ou o OMP passa um número de variáveis de _template_ que pode ser utilizado para exibir dados nos _templates_.

Por exemplo, o arquivo de _template_ `/frontend/pages/article.tpl`, ao ser carregado, recebe as variáveis para exibir os detalhes do artigo (`$article`), a edição da publicação em que  o artigo está (`$issue`), a seção que o artigo está designado (`$section`) e o periódico em que o artigo aparece (`$journal`).

Cada arquivo de _template_ de _frontend_ documenta as variáveis que são passadas a ele em seu cabeçalho(_header_) com o prefixo `@uses`.

```
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

Além destas variáveis ​​documentadas, há um número de variáveis ​​que são recebidas por todos - ou quase todos - os arquivos de _template_. Esta seção documentará a maior parte das variáveis ​​mais comuns.

## Site, Periódico e Idioma(_Locale_)

**`(Context|null) $currentContext`** é uma referência ao Periódico ou Publicação atual que está sendo visualizado e representa um objeto PHP da classe `Journal` ou `Press`. Esta variável será `null` se nenhum periódico estiver sendo visualizado(ex.: a página inicial de um portal de periódicos em OJS).

Você também encontrará as variáveis `$currentJournal` e `$currentPress` que facilitam o trabalho de desenvolvimento o tema para apenas uma aplicação.

**`(string) $siteTitle`**  é o título traduzido, do Periódico(OJS) ou Livro(OMP),  no idioma local ou o índice geral do site.

**`(string) $currentLocale`** é o idioma em que o site está sendo visualizado. Você encontrará um lista (_array_) de idiomas dos idiomas suportados na variável ` $supportedLocales`.

**`(string) $displayPageHeaderTitle`** é o nome do Periódico(OJS) ou Livro(OMP) ou o nome do site caso nenhum destes esteja sendo visualizado.

**`(string) $displayPageHeaderLogo`** é o logo do do Periódico(OJS) ou Livro(OMP) que está em visualização ou o logo do site caso nenhum destes esteja sendo visualizado.

## Configuração

**`(string) $baseUrl`** e **`(string) $basePath`** fornecem a URL base do site (`https://myjournal.com/index.php`) assim como o caminho específico de acesso ao periódico ou livro (`periodico-da-public-knowledge`)  para a requisição atual. Isto pode ser utilizado para a construção de URLs confiáveis.

**`(string) $primaryLocale`** é o idioma primário em que o site foi configurado. Você encontrará um lista (_array_) de idiomas dos idiomas suportados na variável ` $supportedLocales`.

** `(string|null) $disableUserReg`** é uma marcação (_flag_) que indica se os usuários podem ou não se registrar no site.

** `(string) $dateFormatTrunc`**, ** `(string) $dateFormatShort`** e ** `(string) $dateFormatLong`** fornecem os formatos de data definidos na configuração de sua aplicação. Eles podem ser invocados para transformar as datas em formato legível por máquina (`2016-11-26`) em _templates_ do Smarty: `{$article->getDatePublished()|date_format:$dateFormatShort}`

## Requisições e Roteamento

**`(string) $requestedPage`** e **`(string) $requestedOp`** fornecem a Página e a Operação da requisição atual. Isto é útil caso um _template_ seja carregado em diferentes páginas mas você deseje modificar a exibição conforme a página onde ele irá aparecer.

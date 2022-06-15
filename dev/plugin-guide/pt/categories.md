---
title: Plugin Categories - Plugin Guide for OJS and OMP
---

# Categorias de plugins

A categoria de um plugin determina quando ele é carregado e de que forma ele pode modificar a aplicação. Por exemplo, um plugin de [Bloco](#blocks) pode adicionar um bloco de conteúdo à barra lateral do site voltado para o leitor. Mas não pode fazer mais nada e não será carregado no back-end.

Cada plugin deve estender uma das classes de categoria de plugin que existem no OJS e no OMP. No tutorial [Introdução](./getting-started), o plugin de exemplo de tutorial estendeu a classe `GenericPlugin`.

```php
import('lib.pkp.classes.plugins.GenericPlugin');
class TutorialExamplePlugin extends GenericPlugin {
  ...
}
```

Um plugin de bloco estenderá a classe `BlockPlugin`.

```php
import('lib.pkp.classes.plugins.BlockPlugin');
class TutorialBlockPlugin extends BlockPlugin {
  ...
}
```

Cada classe de categoria de plugin fornece métodos que devem ser implementados. Por exemplo, um plugin [report](#reports) estende a classe `ReportPlugin` e implementa o método `ReportPlugin::display()` para fornecer um Arquivo CSV com o conteúdo do relatório.

```php
import('lib.pkp.classes.plugins.ReportPlugin');
class ReviewReportPlugin extends ReportPlugin {
    public function display($args, $request) {
    header('content-type: text/comma-separated-values');
        header('content-disposition: attachment; filename=reviews.csv');
    $fp = fopen('php://output', 'wt');
        fputcsv($fp, [/* os detalhes da revisão no relatório */]);
        fclose($fp);
  }
}
```

Conheça cada categoria abaixo.

## Blocos

Os plugins de bloco fornecem conteúdo que pode ser exibido na barra lateral de qualquer página. Eles exigem um arquivo de modelo.

```
ojs
│
├─┬ plugins
│ │
│ └─┬ blocks
│   │
│   └─┬ madeBy
│     │
│     ├─┬ templates
│     │ └── block.tpl
│     ├── index.php
│     └── MadeByPlugin.inc.php
│     └── version.xml
```

O arquivo de modelo deve incluir todo o HTML do seu bloco.

```html
<div class="pkp_block block_madeBy">
  Feito com ❤ por Public Knowledge Project
</div>
```

Adicione um método `getContents()` para passar dados para o modelo.

```php
import('lib.pkp.classes.plugins.BlockPlugin');
class MadeByPlugin extends BlockPlugin {
  public function getContents($templateMgr, $request = null) {
    $templateMgr->assign('madeByText', 'Feito com ❤ por Public Knowledge Project');
    return parent::getContents($templateMgr, $request);
  }
}
```

```html
<div class="pkp_block block_madeBy">
  {$madeByText}
</div>
```

Plugins de bloco podem usar qualquer código HTML. No entanto, se você quiser que seu bloco se misture com outros blocos fornecidos pelo PKP, use a marcação a seguir.

```html
<div class="pkp_block">
    <span class="title"><!-- Adicione o título do seu bloco aqui --></span>
    <div class="content">
    <!-- Adicione o conteúdo principal do seu bloco aqui -->
    </div>
</div>
```

## Importação/Exportação

Os plugins de importação/exportação fornecem ferramentas para obter e retirar dados de OJS e OMP. Eles podem ser usados quando você está movendo entre nossa aplicação e outra plataforma para migrar usuários, submissões, edições passadas e muito mais.

> Baixe um [exemplo de plugin de importação/exportação](https://github.com/pkp/exampleImportExport). 
> 
> {:.notice}

Cada plugin de importação/exportação pode ser executado na linha de comando.

```
$ php tools/importExport.php ExampleImportExportPlugin import filename.csv
```

```php
import('lib.pkp.classes.plugins.ImportExportPlugin');
class ExampleImportExportPlugin extends ImportExportPlugin {
  /**
     * @copydoc ImportExportPlugin::usage()
     */
    public function usage($scriptName) {
    echo "Usage: " . $scriptName . " " . $this->getName() . " [command]\n";
    echo "Commands:\n";
    echo "  import [filename]";
    echo "  export [filename]";
  }

    /**
     * @copydoc ImportExportPlugin::executeCLI()
     */
    public function executeCLI($scriptName, &$args) {
    $command = array_shift($args);
    $filename = array_shift($args);

    if ($command === 'import') {
      $data = file_get_contents($filename);
      /* now import the data */

    } elseif ($command === 'export') {
      $fp = fopen($filename, 'wt');
      fputcsv($fp, [/* export dataset */]);
      fclose($fp);
    }
  }
}
```

Cada plugin de importação/exportação tem sua própria página em Ferramentas > Menu Importar/Exportar. Isso pode ser usado para exibir opções de importação e exportação e fornecer uma interface do usuário para gerar exportações.

```php
import('lib.pkp.classes.plugins.ImportExportPlugin');
class ExampleImportExportPlugin extends ImportExportPlugin {
    /**
     * @copydoc ImportExportPlugin::register()
     */
    public function display($args, $request) {
        parent::display($args, $request);

        // Use o caminho para determinar qual ação
        // deve ser tomado.
        $path = array_shift($args);
        switch ($path) {

            // Entrega um arquivo CSV para download
            case 'exportAll':
                header('content-type: text/comma-separated-values');
                header('content-disposition: attachment; filename=example-' . date('Ymd') . '.csv');
        $fp = fopen('php://output', 'wt');
        fputcsv($fp, [/* export dataset */]);
        fclose($fp);
                break;

        // Quando nenhum caminho é solicitado, exibe uma página com
        // opções de exportação e um formulário para iniciar o
        // caminho `exportAll`.
            default:
                $templateMgr = TemplateManager::getManager($request);
                $templateMgr->display($this->getTemplateResource('export.tpl'));
        }
    }
}
```

Use a função do smarty `{plugin_url ...}` no modelo para enviar um formulário para um dos caminhos de importação ou exportação.

```html
<form method="POST" action="{plugin_url path="exportAll"}">
  <button type="submit">Exportar Tudo</button>
</form>
```

## Relatórios

Os plugins de relatório fornecem acesso com um clique para baixar um arquivo CSV. O relatório pode incluir detalhes sobre estatísticas de uso do artigo, avaliadores ou qualquer coisa que você queira.

Os plugins de relatório estendem a classe `ReportPlugin` e implementam o método `display()`.

```php
import('lib.pkp.classes.plugins.ReportPlugin');
class ArticleReportPlugin extends ReportPlugin {
  public function display($args, $request) {

   // Obter as primeiras 100 submissões
    $collector = Repo::submission()
      ->getCollector()
      ->filterByContextIds([$context->getId()])
      ->limit(100);
    $submissions = Repo::submission()->getMany($collector);

    // Retornar um arquivo CSV
    header('content-type: text/comma-separated-values');
        header('content-disposition: attachment; filename=articles-' . date('Ymd') . '.csv');
        $fp = fopen('php://output', 'wt');
    fputcsv($fp, ['ID', 'Title']);
    foreach ($submissions as $submission) {
      fputcsv($fp, [$submission->getId(), $submission->getLocalizedTitle()]);
    }
        fclose($fp);
  }
}
```

Os relatórios geralmente são criados no formato CSV, mas seu plug-in de relatório pode retornar qualquer formato de arquivo para download.

## Temas

Os temas controlam o design e o layout de um site de revista ou editora. Leia o [Guia de temas](/pkp-theming-guide/en) para saber como criar seus próprios temas.

## Genéricos

Plugins genéricos são carregados com cada solicitação. Eles se conectam à aplicação no início do [Ciclo de vida da solicitação](/dev/documentation/en/architecture-request) e podem ser usados para modificar quase tudo.

Plugins genéricos usam [Hooks](/dev/documentation/en/utilities-hooks) para intervir na aplicação. Hooks devem ser adicionados no método `register()` de um plugin.

```php
import('lib.pkp.classes.plugins.GenericPlugin');
class ExamplePlugin extends GenericPlugin {

    public function register($category, $path, $mainContextId = NULL) {
        $success = parent::register($category, $path);
        if ($success && $this->getEnabled()) {
            HookRegistry::register('Example::hookName', array($this, 'doSomething'));
        }
        return $success;
  }

  public function doSomething($hookName, $args) {
        // Faça alguma coisa...

        return false;
  }
}
```

> Sempre verifique se o plugin está habilitado antes de registrar um hook. Caso contrário, seu plugin será executado mesmo quando estiver desabilitado. 
> 
> {:.warning}

Plugins genéricos são muito poderosos e podem usar qualquer hook no aplicativo. Consulte os [exemplos](./examples) para obter ideias e saiba mais sobre os [hooks comuns](/dev/documentation/en/utilities-hooks#common-hooks) a>.

## Outros

Existem outras categorias de plugins disponíveis que não são usadas com frequência. A melhor maneira de aprender sobre eles é ler o código-fonte de um dos plugins existentes. Essas categorias incluem:

- Os plugins de `Autenticação ` permitem que você autorize e sincronize contas de usuário com uma fonte de terceiros.
- Os plugins de `Gateway` permitem que você adicione uma nova URL e responda às solicitações para essa URL.
- Os plugins de `metadados` implementam uma descrição de um formato de metadados.
- Os plugins de `Formatos de Metadados OAI` adicionam um formato de metadados ao endpoint OAI do aplicativo.
- Os plugins `Métodos de Pagamento` permitem que você implemente seu próprio tratamento de pagamento ao usar taxas de assinatura e de artigo.
- Os plugins de`Identificação Pública` permitem adicionar suporte para identificadores de publicação como DOIs.

---

Aprenda como [traduzir seu plugin](./translation) para que ele possa ser usado por muitos periódicos.
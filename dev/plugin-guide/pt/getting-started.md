---
title: Getting Started - Plugin Guide for OJS and OMP
---

# Começando

Neste guia, vamos criar um plugin genérico que chamaremos de Tutorial Example.

> Baixe um exemplo funcional do [o plugin](https://github.com/pkp/tutorialExample) que construiremos neste tutorial do GitHub. 
> 
> {:.notice}

Um plugin armazena todos os seus arquivos em um diretório em OJS ou OMP. Nosso plug-in de exemplo será um plugin `generic`, então o colocamos nesse diretório. Cada plugin requer três arquivos.

```
ojs
│
├─┬ plugins
│ │
│ └─┬ generic
│   │
│   └─┬ tutorialExample
│     ├── index.php
│     └── TutorialExamplePlugin.inc.php
│     └── version.xml
```

> O nome do diretório deve ser letras e números. Não são permitidos espaços, `-` ou `_` caracteres. 
> 
> {:.tip}

## version.xml

O `version.xml` fornece as informações necessárias para carregar o plugin.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE version SYSTEM "../../../lib/pkp/dtd/pluginVersion.dtd">
<version>
    <application>tutorialExample</application>
    <type>plugins.generic</type>
    <release>0.1.0.0</release>
    <date>2019-05-15</date>
    <lazy-load>1</lazy-load>
    <class>TutorialExamplePlugin</class>
</version>
```

O `<application>` deve corresponder ao nome do diretório. O `<type>` deve ser a [categoria](./categories) do plugin. A `<class>` deve corresponder ao nome da classe do plugin.

## TutorialExamplePlugin.inc.php

Cada plugin deve ter uma classe que registra e execute o plugin.

```php
<?php
import('lib.pkp.classes.plugins.GenericPlugin');
class TutorialExamplePlugin extends GenericPlugin {
    public function register($category, $path, $mainContextId = NULL) {

   // Registra o plugin mesmo quando não está habilitado
    $success = parent::register($category, $path);

        if ($success && $this->getEnabled()) {
   // Faça algo quando o plugin estiver habilitado
    }

        return $success;
    }

  /**
   * Forneça um nome para este plug-in
   *
   * O nome aparecerá na lista de plugins onde os editores podem
   * habilitar e desabilitar plugins.
   */
    public function getDisplayName() {
        return 'Tutorial Example';
    }

    /**
    * Forneça uma descrição para este plugin
    *
    * A descrição aparecerá na lista de plugins onde os editores podem
    * habilitar e desabilitar plugins.
   */
    public function getDescription() {
        return 'This plugin is an example created for a tutorial on how to create a plugin.';
    }
}
```

## index.php

O arquivo `index.php` é necessário para carregar a classe de plugin correta.

```php
<?php
require_once('TutorialExamplePlugin.inc.php');
return new TutorialExamplePlugin();
```

Vá para Configurações > WebSite > Plugins e tente habilitar e desabilitar seu plugin. Se houver um erro ao ativá-lo, verifique seu plug-in no [exemplo de trabalho](https://github.com/pkp/tutorialExample)

---

Saiba como escolher a [categoria de plug-in](./categories) certa para o seu plugin.

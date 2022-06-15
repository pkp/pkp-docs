---
title: Translation - Plugin Guide for OJS and OMP
---

# Tradução

Os plugins devem suportar mais de um idioma. Isso permite que eles funcionem se você executar OJS ou OMP em mais de um idioma, ou se quiser compartilhar seu plugin para que outros possam usá-lo.

As traduções são gerenciadas adicionando arquivos de localidade para todos os idiomas aos quais você oferece suporte. O exemplo abaixo mostra onde os arquivos de localidade em inglês (EUA) e português (Brasil) são armazenados.

```
ojs
│
├─┬ plugins
│ │
│ └─┬ generic
│   │
│   └─┬ tutorialExample
│     │
│     ├─┬ locale
│     │ ├─┬ en_US
│     │ │ └── locale.po
│     │ └─┬ pt_BR
│     │   └── locale.po
│     ├── index.php
│     └── TutorialExamplePlugin.inc.php
│     └── version.xml
```

O arquivo de localidade define o idioma e todas as mensagens que devem ser traduzidas.

```po
msgid "plugins.generic.tutorialExample.name"
msgstr "Exemplo de tutorial"

msgid "plugins.generic.tutorialExample.description"
msgstr "Este plugin é um exemplo criado para um tutorial sobre como criar um plugin."
```

Em seguida, use a função `__()` para obter uma mensagem em seu plugin.

```php
import('lib.pkp.classes.plugins.GenericPlugin');
class TutorialExamplePlugin extends GenericPlugin {

  public function getDisplayName() {
        return __('plugins.generic.tutorialExample.name');
    }

    public function getDescription() {
        return __('plugins.generic.tutorialExample.description');
    }
}
```

Use a função do smarty `{translate ...}` para obter mensagens de localidade em seus templates.

```php
<h1>{translate key="plugins.generic.tutorialExample.name"}</h1>
```

Qualquer plugin adicionado à Galeria de plugins deve oferecer suporte à tradução, mesmo que inclua apenas um arquivo de localidade para um idioma. Nossa comunidade ativa de tradutores geralmente fornecerá uma tradução depois que você lançar o plugin.

---

Saiba como [usar e substituir templates](./templates) em seu plugin.

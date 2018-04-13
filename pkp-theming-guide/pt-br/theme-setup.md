# Configuração de Temas

Após delimitarmos a estrutura do HTML e do CSS em um tema é necessário registrar nosso _plugin_ dentro da aplicação OJS ou OMP. Faremos isso utilizando alguns alguns arquivos PHP e XML.

Vamos dar uma olhada na estrutura básica de um tema que chamaremos de `tutorial-theme`.

```
/plugins/themes/tutorial-theme/index.php
/plugins/themes/tutorial-theme/TutorialThemePlugin.inc.php
/plugins/themes/tutorial-theme/version.xml
/plugins/themes/tutorial-theme/locale/en_US/locale.xml
/plugins/themes/tutorial-theme/styles/index.less
/plugins/themes/tutorial-theme/styles/variables.less
/plugins/themes/tutorial-theme/styles/structure.less
/plugins/themes/tutorial-theme/styles/forms.less
```

O arquivo `/plugins/themes/tutorial-theme/index.php` é utilizado para carregar nosso tema. Carregamos o arquivo de classe do tema e instanciamos um novo objeto

```php
<?php
require_once('TutorialThemePlugin.inc.php');
return new TutorialThemePlugin();
?>
```

No arquivo `/plugins/themes/tutorial-theme/TutorialThemePlugin.inc.php` definimos a classe(_class_) do tema. Podemos então carregar as folhas de estilo (_stylesheets_) e executar quaisquer outras ações que desejarmos com a [API do Tema](theme-api.md).

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
        return 'Tema Tutorial';
    }

    /**
     * Obtem a descrição deste plugin
     * @return string
     */
    function getDescription() {
        return ' Um tema de exemplo para o OJS ou o OMP construído com nossa fantástica documentação.';
    }
}
```

O arquivo `/plugins/themes/tutorial-theme/version.xml` é obrigatório para configurarmos os metadados(_metadata_) do nosso tema que o OJS e o OMP utilizam para carregar e exibir de maneira apropriada.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE version SYSTEM "../../../lib/pkp/dtd/pluginVersion.dtd">
<version>
    <application>tutorial-theme</application>
    <type>plugins.themes</type>
    <release>1.0.0.0</release>
    <date>2016-11-21</date>
    <lazy-load>0</lazy-load>
    <class>TutorialThemePlugin</class>
</version>
```

O arquivo `/plugins/themes/tutorial-theme/locale/en_US/locale.xml` permite-nos configurar qualquer termo(_string_) no nosso tema para que  fique disponível para tradução para outros idiomas. Para fazer isso é necessário atribuir o termo(_string_) que se queira traduzir para uma _key_ .

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE locale SYSTEM "../../../../../lib/pkp/dtd/locale.dtd">
<locale name="pt_BR" full_name="Português (Brasil)">
    <message key="plugins.themes.tutorial-theme.name">Tema Tutorial</message>
    <message key="plugins.themes.tutorial-theme.description">Um tema de exemplo para o OJS ou o OMP desenvolvido com nossa fantástica documentação.</message>
</locale>
```

Lembra como demos um nome e uma descrição para nosso tema na classe de plugin do tema? Agora podemos atualizar aqueles métodos para carregarem nossas _strings_ traduzidas.

```php
/**
     * Obtem o nome de exibição deste tema
     * @return string
     */
    function getDisplayName() {
        return __('plugins.themes.tutorial-theme.name');
    }

    /**
     * Obtem a descrição deste plugin
     * @return string
     */
    function getDescription() {
        return __('plugins.themes.tutorial-theme.description');
    }
```

Caso esteja desenvolvendo um tema para seu uso pessoal, você não precisará disso. Mas sempre recomendamos habilitar no código as capacidades de tradução para qualquer tema  que venha a ser distribuído. A comunidade de usuários da Public Knowledge Project(PKP) abrange dezenas de países e idiomas que necessitam do software na sua própria língua.

Finalmente, o arquivo `/plugins/themes/tutorial-theme/styles/index.less` carrega nossos arquivos CSS/LESS personalizados. No nosso arquivo de classe de plugin do tema você pode verificar  o seguinte método `init`:

```php
public function init() {
        $this->addStyle('stylesheet', 'styles/index.less');
    }
```

Ao invocar `addStyle`e apontar para nosso arquivo LESS principal, a aplicação automaticamente compilará e carregará o arquivo CSS no _frontend_ de todo o periódico que estiver utilizando este tema.

_Caso não tenha certeza sobre o que se trata o arquivo LESS leia a seção CSS/LESS acima._

## Indo além

Esta parte do guia de customização de temas introduziu a estrutura de um tema para OJS ou OMP. Mas existe muito mais que você pode fazer e experimentar com a [API de Tema](theme-api.md).

Continue a ler para mais dicas práticas sobre como usar [Temas Filhos(_Child Themes_)](child-themes.md), a documentação completa de [API de Tema](theme-api.md) e a [API de Opções de Tema(_Theme Options API_)](theme-options-api.md). Assim como também estarão disponíveis links para exemplos existentes de temas personalizados "na natureza". 


---
title: Release a Plugin - Plugin Guide for OJS and OMP
---

# Lançar um plugin

Os plug-ins que você escreve podem ser disponibilizados por meio da Galeria de plugins na aplicação. Incentivamos nossa comunidade a lançar seus plugins sob uma licença compatível com GPL para que possam ser usados em benefício de todos.

Ao lançar um plugin, você terá suporte da comunidade para identificar bugs e traduzir o plugin. Em alguns casos, você pode receber contribuições de código.

Os lançamentos de plugins são uma forma da Public Knowledge Project reconhecer as contribuições dos parceiros da comunidade. É mais provável que reservemos um tempo para ajudá-lo a manter seus plugins se eles forem amplamente usados em nossa comunidade.

## Torne seu Plugin Público

Cada versão do seu plugin deve ser disponibilizada para download publicamente. Preferimos que seu código esteja disponível em um repositório de código público, como [GitHub](https://github.com/) ou [GitLab](https://about.gitlab.com /).

O plugin deve ser disponibilizado sob uma licença compatível com GPL para que nossa comunidade possa manter a propriedade de seu software de publicação. Este licenciamento deve ser explícito no código, geralmente incluindo um arquivo `LICENSE` no diretório raiz do plugin.

Veja um [exemplo](https://github.com/pkp/pluginTemplate/blob/main/LICENSE) de um arquivo de licença.

## Escreva testes para seu plugin

Os plugins podem aproveitar as [ferramentas de teste](/dev/testing/en) para executar seu plugin em diferentes versões e bancos de dados do PHP. Plugins com testes têm maior probabilidade de serem aceitos na galeria de plugins e facilitam o teste de compatibilidade com cada nova versão do OJS ou OMP.

Saiba como [escrever testes para seu plug-in](/dev/testing/en/plugins-themes).

## Construa e empacote seu plugin

Seu pacote de lançamento deve ser um arquivo `.tar.gz` que contém um único diretório com todos os arquivos necessários para executar o plugin. O nome do diretório deve corresponder ao nome do `product` no XML da versão.

Fornecemos uma [Ferramenta CLI](https://github.com/pkp/pkp-plugin-cli/) que pode ajudá-lo a criar e empacotar seu plug-in. Instale-o com o seguinte comando.

```
npm install -g pkp-plugin-cli
```

Use o seguinte comando para criar um pacote de lançamento e carregá-lo como um lançamento em seu repositório no GitHub.

```
pkp-plugin release
```

> Quaisquer arquivos não essenciais fornecidos pelo seu gerenciador de dependências (por exemplo - composer, npm) não devem ser incluídos no pacote. Isso geralmente inclui demos e exemplos que podem ser riscos de segurança quando carregados no diretório de plugins. 
> 
> {:.warning}

## Obtenha o Plugin na Galeria de Plugins

Quando você preparar seu pacote de lançamento e disponibilizá-lo publicamente, abra um pull request em nosso [repositório da galeria de plugins](https://github.com/pkp/plugin-gallery/) que adiciona seu plugin ao arquivo XML.

O XML do seu plugin deve fornecer um título, descrição, detalhes de contato e informações sobre cada pacote de lançamento.

```xml
<!-- O produto deve corresponder ao nome do diretório do plug-in. -->
<plugin category="generic" product="tutorialExample">
  <name locale="en_US">Tutorial Example</name>
  <homepage>https://github.com/pkp/tutorialExample</homepage>

  <!-- Resuma o que o plugin faz em uma frase curta. -->
  <summary locale="pt_BR">Este plugin é um exemplo criado para um tutorial de como criar um plugin.</resumo>

  <!-- Descreva que o plugin faz e como alguém pode esperar usá-lo ao instalá-lo. -->
  <description locale="pt_BR"><![CDATA[<p>Este plugin é um exemplo criado para um tutorial de como criar um plugin. Destina-se a fins de aprendizado e não deve ser usado em um site de revista em produção.</p><p>Você pode aprender mais sobre como criar um plug-in no <a href="https://docs.pkp.sfu.ca/dev/plugin-guide/en">guia de plug-in</a>.</ p>]]></descrição>

   <!-- Identifique a pessoa e instituição que mantém o plugin. -->
  <maintainer>
    <name>Alec Smecher</name>
    <institution>Public Knowledge Project</institution>
    <email>pkp.contact@gmail.com</email>
  </maintainer>

  <!-- Para cada versão de lançamento, link para o pacote de lançamento
     e o md5sum do pacote de lançamento. A versão deve
     sempre consistem em quatro números separados por um ".". -->
  <release date="2019-05-18" version="1.1.0.0" md5="aebc731dedcc959db042f969a54fdc3a">
    <package>https://github.com/pkp/tutorialExample/releases/download/1.1.0.0/tutorialexample-1.1.0.0.tar.gz</package>

    <!-- Identificar quais versões do OJS ou OMP são suportadas por esta versão-->
    <compatibility application="ojs2">
        <version>3.1.2.0</version>
    </compatibility>

    <!-- PKP atribuirá o tipo de certificação -->
    <certification type="official"/>

    <!-- Descreva quais mudanças podem ser esperadas nesta versão -->
    <description>Atualização para ser compatível com OJS 3.1.2.</description>
  </release>

  <!-- Cada plugin pode ter mais de uma versão. -->
  <release date="2019-03-07" version="1.0.0.0" md5="13bc221dedcc959db042f969a543eab0">
    <package>https://github.com/pkp/tutorialExample/releases/download/1.0.0.0/tutorialexample-1.0.0.0.tar.gz</package>
    <compatibility application="ojs2">
        <version>3.1.1.4</version>
    </compatibility>
    <compatibility application="ojs2">
        <version>3.1.1.3</version>
    </compatibility>
    <certification type="official"/>
    <description>Lançamento inicial.</description>
  </release>
</plugin>
```

Quando você abrir um pull request, os testes serão executados em seu snippet XML e poderemos mesclar seu plugin na lista.

Além disso, cada plugin deve passar por uma revisão de código. Seu plug-in receberá uma certificação `reviewed` ou `partner`. Podemos não incluir seu plugin na galeria se ele não passar na revisão.

## Atualizar Versões

Seu plugin só aparecerá na galeria de plugins para versões de software com as instruções `<compatibility>` apropriadas. Quando uma nova versão do software PKP for lançada, teste seu plugin.

Se for compatível, abra um pull request com as tags adicionais `<version>` na declaração `<compatibility>`. Se forem necessárias alterações para torná-lo compatível, lance uma nova versão do seu plugin e siga as instruções acima para criar uma nova versão e adicioná-la à galeria de plugins.

> Depois que seu plugin for adicionado à Galeria de Plugins, você não poderá remover ou modificar o pacote de lançamento. Se você modificar o pacote de lançamento, o md5sum será alterado e o plugin não será mais baixado da Galeria de Plugins. 
> 
> {:.warning}

---

Quando estiver pronto, explore nossos [exemplos de plug-ns](./examples) para saber mais sobre o que você pode fazer com plugins.

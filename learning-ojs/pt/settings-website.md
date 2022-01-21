---
book: learning-ojs
version: 3.3
---

# Configurações do Site

As Configurações do Website permitem configurar o aspecto e funcionamento do website da revista. É composto por 3 guias principais para Aparência, Configuração e Plugins.

![OJS dashboard view of website settings menu.](./assets/learning-ojs3.1-jm-settings-web-appearance.png)

## Aparência

Este vídeo do PKP School explica como configurar a aparência do seu diário no OJS. Para assistir a outros vídeos desta série, visite[PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).

{% include video.html id="4i5uRgzFHfg" provider="youtube" title="Video of how to configure your journal's appearance in OJS"%}

### Tema

O tema determina o design geral ou o layout do seu site. Estão disponíveis várias opções de temas diferentes e é possível experimentá-los sem afetar o conteúdo ou a configuração do seu sítio.

Primeiro, é necessário se assegurar de que todos os temas disponíveis foram ativados no site.

1. Vá até a aba de Plugins em Configurações do Website;
2. Desça até o final da página, chegando aos Plugins de Visual;
3. Selecione todas as caixas de temas para habilitá-los.

Você também pode procurar temas adicionais na Galeria de Plugins, instalá-los e ativá-los.

Agora, com os temas disponíveis, volte à guia Aparência e experimente os diferentes temas.

1. Em Tema você verá a lista de temas. Selecione um;
2. Deslize até o final da página e clique em Salvar;
3. O tema pode incluir subtemas adicionais ou opções de configuração específicas. Para fazê-los aparecerem, atualize a página do navegador;
4. Se selecionar um subtema diferente ou fizer alguma mudança no esquema de cores ou nas características do design, clique novamente em Salvar, na parte inferior da página;
5. Abra a página inicial do site em uma nova aba ou guia do navegador para ver como o site se apresenta com o novo tema e diferentes configurações;
6. Se as alterações não estiverem ativas, talvez seja necessário limpar o cache no menu Administração.

A partir do OJS/OMP/OPS 3.3, o **Tema Padrão** foi auditado externamente para acessibilidade e adere às práticas recomendadas, como contraste de cores, navegação pelo teclado e foco de formulário/link. [PKP Accessibility Statement](https://docs.pkp.sfu.ca/accessibility-statement/) contém mais detalhes.

Se desejar fazer pequenas alterações no design e layout do seu site, pode carregar uma folha de estilo de jornal em Definições do site > Aspecto > Avançado.

- **Tipografia**: escolha rapidamente as fontes para sua revista. Essa opção pode ou não estar disponível, dependendo do tema selecionado.

- **Cor**: mude rapidamente a cor do cabeçalho do seu periódico. Essa opção pode ou não estar disponível, dependendo do tema selecionado.

- **Resumo da revista**: habilite para mostrar o resumo da revista na página inicial. Você pode adicionar o resumo do periódico em Configurações da Revista> Equipe Editorial. Essa opção pode ou não estar disponível, dependendo do tema selecionado.

- **Imagem de fundo do cabeçalho**: habilite essa função se você quiser que a imagem da página inicial carregada seja mostrada como fundo de cabeçalho.

Para mais opções de personalização de temas, consulte o [Designing Your Journal](https://docs.pkp.sfu.ca/designing-your-journal/en/). Observe que as alterações feitas nos temas podem afetar a acessibilidade dos periódicos.

### Configurar

Em Configurar, você pode carregar imagens (logotipo, miniatura, homepage) na página principal de seu site, inserir informações no rodapé e configurar seu menu da barra lateral.

- **Miniatura da publicação**: permite carregar um pequeno logotipo ou imagem representativa da revista, que será utilizado(a) nas listas de periódicos nessa instalação do OJS. Essa função só será usada nas instalações do OJS com vários periódicos.

- **Imagem da página Inicial**: permite carregar uma imagem para colocá-la na página inicial de sua revista.

- **Rodapé**: função que permite incluir qualquer imagem, texto ou código HTML que você gostaria de ver na parte inferior de seu site.

- **Barra Lateral**: função que permite mover diferentes blocos para dentro ou para fora da barra lateral na interface de leitura. Também possibilita criar um bloco personalizado a partir do [Custom Block plugin](./settings-website.md#custom-block-plugin).

### Avançado

Em Avançado, você pode carregar sua folha de estilo de revista, Favicon e Conteúdo Adiciona por meio das seguintes funções:

- **Folha de estilos da revista**: essa função deve ser usada para carregar uma folha de estilo única para seu periódico. Instruções sobre como modificar o CSS estão disponíveis no guia [Projetando seu diário: criando uma folha de estilo](https://docs.pkp.sfu.ca/designing-your-journal/en/creating-stylesheet).

Se quiser fazer mudanças mais significativas no design ou dar ao seu site um visual inteiramente único, você pode desenvolver seu próprio tema ou subtema. As instruções estão disponíveis no [Guia de Temas PKP](https://docs.pkp.sfu.ca/pkp-theming-guide/en/).

- **Favicon**: essa função permite adicionar um [favicon](https://en.wikipedia.org/wiki/Favicon) a ser exibido na barra de endereços do navegador do leitor.

- **Conteúdo Adicional**: função que exibe o que for digitado em seu espaço na página inicial do site.

Clique em **Salvar** para armazenar as alterações.

## Configurar

### Informação

Este vídeo PKP School explica como definir as configurações de informações no OJS. Para assistir a outros vídeos desta série, visite [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).

{% include video.html id="48qU18uqqkg" provider="youtube" title="Video of how to configure Information settings in OJS"%}

Use esses campos para modificar o texto nas páginas Para Leitores, Para Autores e Para Bibliotecários no site da revista.

![OJS dashboard view of Information menu with boiler plate text in the fields for readers and for authors.](./assets/learning-ojs3.1-jm-settings-web-info.png)

Lembre-se de clicar em **Salvar** para registrar quaisquer mudanças.

Para remover esses campos e seu conteúdo da exibição pública na interface do usuário do site, desmarque o bloco de informações em Configurações do Website > Aparência >Configurar> Barra Lateral.

### Idiomas

Este vídeo da PKP School explica como definir as configurações de idioma no OJS. Para assistir a outros vídeos desta série, visite [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).

{% include video.html id="VU5kAPOqNPc" provider="youtube" title="Video of how to configure the language settings in OJS"%}

O OJS é multilíngue, o que significa que a interface, os e-mails e o conteúdo publicado podem estar disponíveis em vários idiomas e os autores podem fazer envios em um ou mais idiomas em um único site ou periódico. Ao instalar o OJS, você pode selecionar um ou mais idiomas para seu site.

Em Configurações do Website > Idiomas você pode ver uma lista de idiomas instalados em seu site e configurar como os idiomas são usados em sua revista. Analise cuidadosamente como você deseja configurar e usar os idiomas em seu periódico, pois podem ocorrer problemas significativos, caso as configurações sejam alteradas mais tarde.

![OJS dashboard view of Languages menu with English and French options, English option selected as primary locale.](./assets/learning-ojs3.1-jm-settings-web-lang.png)

- **Idioma principal**: função necessária à definição do idioma principal do periódico.

- **UI**: Se você quiser que a interface frontal e traseira da revista esteja disponível em outros idiomas, selecione-os aqui. Habilitando um idioma para a interface do usuário permitirá que os usuários selecionem o idioma da interface do aplicativo. Por exemplo, botões, títulos da página e mensagens na tela estarão no idioma selecionado pelo usuário.

- **Formulários**: trata-se da permissão para que todos os idiomas selecionados estejam disponíveis para o preenchimento dos formulários on-line. Ativar um idioma para formulários permitirá que as caixas de texto ofereçam suporte à entrada de dados multilíngue, incluindo a guia Publicação para envios. Por exemplo, as configurações e os metadados de configuração podem ser inseridos em vários idiomas.

- **Submissões**: função que permite autorizar os autores a fazerem submissões em outros idiomas. Caso você acione essa função, permitirá que os autores adicionem metadados nos idiomas selecionados ao fazerem o upload de sua submissão.

Idiomas adicionais podem ser instalados em seu site por um Administrador. Para obter informações detalhadas, consulte o [Chapter 4](./site-administration).

Atenção: se permitir que vários idiomas apareçam na interface de usuário, certifique-se de que, em Configurações do site > Aparência > Configurar> Barra lateral> Alteração de idioma. Somente assim, tornará esse recurso disponível aos usuários.

### Menus de navegação

Este vídeo PKP School explica como definir as configurações de navegação no OJS. Para assistir a outros vídeos desta série, visite [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).

{% include video.html id="OJL-XEgzhYU" provider="youtube" title="Video of how to configure navigation settings in OJS"%}

Esta seção permite que você configure seus menus de navegação, tais como a inclusão de novas guias.

![OJS dashboard view of Navigation Menu with user and primary menus and an option to add or edit navigation menu items.](./assets/learning-ojs3.1-jm-settings-web-navmenu.png)

- **Menus de navegação**: configure o Menu do usuário e/ou o Menu principal.

Alguns tipos de itens do menu só serão exibidos sob certas condições. Por exemplo:  o item Login irá levá-lo para sua página de login, mas ele só aparecerá no menu quando o visitante de seu site estiver desconectado. Da mesma forma, o item Logout só aparecerá quando um visitante do site estiver logado.

Quando você atribuir um item do menu com condições de exibição em um menu, verá um ícone parecido com um olho e uma barra através dele. É possível clicar nesse ícone para saber mais sobre quando ele será exibido ou escondido.

- **Itens do menu de navegação**: são links programados que você pode adicionar a qualquer um dos menus acima. Se deseja adicionar um link ao Menu Principal (por exemplo, "Nossa Sociedade"), adicione-o nesse espaço por meio do link _Adicionar Item_.

![Add item screen with item title and remote URL filled out.](./assets/learning-ojs3.1-jm-settings-web-navmenu-add.png)

O novo link agora aparecerá na lista de Itens do Menu de Navegação. A seguir, vá ao Menu de Navegação desejado (por exemplo, Primário) use a seta azul para revelar as opções e escolha Editar. Através da função Editar, você poderá arrastar o novo link dos Itens do Menu Não Atribuídos e soltá-lo nos Itens do Menu Atribuídos e no local apropriado no menu.

![Primary navigation area with a list of assigned and unassigned menu items.](./assets/learning-ojs3.1-jm-settings-web-navmenu-add-nav.png)

Clique em Salvar para gravar as mudanças.

### Notícias

Este vídeo do PKP School explica como definir as configurações de anúncios no OJS. Para assistir a outros vídeos desta série, visite [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).

{% include video.html id="OmiDQGX4SGs" provider="youtube" title="Video of how to configure announcements settings in OJS"%}

Esta seção permite a você criar e exibir notícias no website da revista.

![OJS dashboard view of Announcements menu with an option to enable and display announcements.](./assets/learning-ojs3.1-jm-settings-web-announce.png)

- **Interface do usuário**: por meio dessa função, você pode disponibilizar outros idiomas na interface do periódico.
  - **Introdução**: digite qualquer informação geral que você gostaria que aparecesse em sua página de anúncios;
  - **Exibir na página inicial**: digite o número de anúncios a serem exibidos na homepage. Se essa opção for deixada em branco, nenhum anúncio será exibido.

Uma vez ativado o ajuste de Notícias, clique em "Salvar". Um item do menu "Notícias" aparecerá na navegação principal, no lado esquerdo. Clique neste item de menu e selecione "Adicionar anúncio". Aqui você pode incluir o título do anúncio, uma breve descrição e/ou texto completo do anúncio e uma data de expiração (opcional). Se deseja enviar uma notificação por e-mail a todos os usuários (que não optaram por não receber notificações por e-mail), selecione "Enviar e-mail de notificação para todos os usuários registrados". O anúncio aparecerá em uma guia "Notícias", no site do periódico, voltado ao público.

![OJS 3.3 Announcements menu enabled in the sidebar with an option to add and edit announcements.](./assets/learning-ojs3.3-settings-website-announcements.png)

Este vídeo da PKP School explica como definir as configurações do site no OJS. Para assistir a outros vídeos desta série, visite [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).

{% include video.html id="3vAR6lu-4DE" provider="youtube" title="Video of how to configure website settings in OJS"%}

### Listas

Essa função serve para limitar o número de itens (por exemplo, envios, usuários ou tarefas de edição) a ficarem visíveis em uma lista antes de serem mostrados os itens subsequentes em outra página. Além disso, limita o número de links a serem mostrados nas páginas subsequentes da lista.

### Declaração de Privacidade

Digite a declaração de privacidade que você deseja que apareça em seu site.

### Data e hora

Essa opção permite a configuração de diferentes formatos de datas e horários para cada revista e traduções, que anteriormente só podiam ser configurados no arquivo 'config.inc.php'. Observe que o arquivo `config.inc.php` ainda pode ser usado para definir a hora e o formato em vários periódicos, e as configurações primárias serão as padrão para outros locais, a menos que configurado de outra forma.  Um formato personalizado pode ser inserido por meio do uso de caracteres do formato especial.

![OJS 3.3 Date and Time menu with an option to select long and short date formats.](./assets/learning-ojs3.3-date-and-time-setup.png)

## Plugins

Este vídeo do PKP School explica como configurar Plugins no OJS. Para assistir a outros vídeos desta série, visite [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).

{% include video.html id="PMAsXY_tLMU" provider="youtube" title="Video of how to configure plugins in OJS"%}

Use essa página para ver todos os plugins instalados e encontrar novos plugins.

### Plugins instalados

Todos os plugins listados aqui estão disponíveis em sua instalação OJS. Verifique se estão habilitados no link Habilitar para usá-los.

![OJS dashboard view of Plugins menu with the tab for installed plugins selected.](./assets/learning-ojs3.1-jm-settings-web-plugins.png)

Você notará que alguns plugins são necessários ao sistema e não podem ser desativados.

Clique na seta azul ao lado do nome do plugin para Exibir detalhes, Excluir, Atualizar ou Configurar configurações para o plugin.

### Galeria de plugins

A Galeria de Plugins fornece acesso a plugins criados externamente, que podem não estar incluídos em sua instalação OJS, mas que estão disponíveis para download e ativação. Somente um usuário Administrador pode instalar um novo plugin.

![OJS dashboard view of Plugins menu with the tab for plugin gallery selected.](./assets/learning-ojs3.1-jm-settings-web-plugins-gallery.png)

A seleção do título do plugin fornecerá detalhes adicionais, incluindo autor, status, descrição e compatibilidade.

![Hypothes.is plugin selected in the plugin gallery shows that it is installed and up-to-date.](./assets/learning-ojs3.1-jm-settings-web-plugins-gallery-hypo.png)

### Plugins de Terceiros

Às vezes, novos plugins ou plugins que são desenvolvidos por pessoas fora do PKP não aparecerão na Galeria de Plugins. Nesse caso, você precisará instalá-los separadamente.

1. Baixe o arquivo tar.gz do plugin de seu repositório sob a guia Releases;
2. Vá à aba Plugins Instalados;
3. No canto superior direito, clique em Enviar novo plugin;
4. Carregue o arquivo do plugin;
5. Quando terminar de fazer o upload, clique em Salvar. Dê um tempo para instalar.

Se o upload falhar, você pode receber uma mensagem de erro que diz: "O arquivo de plugins carregados não contém uma pasta que corresponda ao nome do plugin". Normalmente isso significa que é preciso mudar o nome da pasta do plugin dentro da pasta zipada para um nome mais simples. Por exemplo, mudar "tradutor-ojs-3_0_0-0" para "tradutor".

Lembre-se de clicar em Salvar para gravar a modificação.

### Melhoria de conteúdo e Descoberta de Plugins

O OJS 3 tem uma série de plugins que você pode habilitar para ajudar a melhorar a experiência do usuário e a capacidade de descoberta de seu conteúdo e periódico. Esta seção definirá os diferentes plugins disponíveis no OJS e como configurá-los e utilizá-los.

Como alguns dos plugins abaixo são plugins de terceiros, pode ser necessário baixar o arquivo zip do GitHub e carregá-lo em seu periódico. Para informações gerais sobre plugins e como instalá-los e ativá-los, consulte [Learning OJS 3 - Plugins](https://docs.pkp.sfu.ca/learning-ojs/en/settings-website#plugins).

Observe que como o PKP não mantém plugins de terceiros, não podemos garantir que ele funcionará com sua versão do OJS.

#### Adicionar Este Plugin

O [AddThis](https://www.addthis.com/) permite o fácil compartilhamento em mídias sociais ao integrar ferramentas para várias plataformas em um conjunto compacto de botões configuráveis. O plugin integra o AddThis no OJS/OMP para compartilhamento rápido do conteúdo publicado.

Esse plugin pode ser ativado a partir da Galeria de plugins.

![Social media sharing icons displayed on an article page by the AddThis plugin.](./assets/learning-ojs-settings-plugin-addthis.png)

Você pode configurar os ícones das mídias sociais e obter estatísticas clicando no botão Configurar do Plugin.

![AddThis plugin settings button.](./assets/learning-ojs-settings-plugin-addthis-2.png)

Para obter estatísticas a partir desse plugin, será preciso se registrar em [AddThis account](https://www.addthis.com/).

![AddThis plugin settings expanded with different display options.](./assets/learning-ojs-settings-plugin-addthis-3.png)

#### Bloco de Navegação

Esse plugin implementa um plugin de bloco que permite ao usuário navegar pelo conteúdo por categorias. O bloco de navegação aparece na barra lateral da revista.

Além disso, esse plugin pode ser ativado a partir da Galeria de Plugins.

![Browse plugin with categories for Summer, Fall, Spring, Winter.](./assets/learning-ojs-settings-plugin-browse.png)

#### Linguagem de Estilo de Citação

O plugin  Linguagem de Estilo de Citação adiciona um bloco "Como Citar" à página do artigo que contém uma citação para o artigo no formato de sua escolha, com uma opção abaixo para gerar a citação em outro formato.

![Example of a citation on an article page under How to Cite added by the Citation Style Language Plugin.](./assets/learning-ojs-settings-plugin-citation.png)

Esse é um Plugin Instalado e precisará ser ativado em Configurações do Website > Plugins > Plugins Instalados.

Para configurar o plugin:

* Clique na seta azul ao lado do nome do plugin;
* Clique na opção **Configurações**, que aparece abaixo;

![Citation Style Language Plugin settings button.](./assets/learning-ojs-settings-plugin-citation-2.png)

* Selecione o formato de citação primária que gostaria de usar da primeira lista, seguido pelos outros formatos de citação que gostaria que estivesse disponível a partir da segunda lista;
* Em seguida, é possível, opcionalmente, selecionar um formato para download, a ser disponibilizado aos leitores, com a finalidade de exportar dados para o software de gerenciamento de bibliografia;
* Há ainda a possibilidade de adicionar o local de sua publicação/edição para citações que o exijam;
* Clique em **OK** quando terminar a configuração.

Agora, o bloco Como Citar aparecerá em cada página de artigo em sua revista.

*Observação: Os formatos de estilo de citação são gerados por uma biblioteca externa. Se você notar um erro no formato de citação, pode reportar o problema no repositório de estilos de linguagem, em [Citation Style Language styles repository on GitHub](https://github.com/citation-style-language/styles).*

*Você também pode adicionar um estilo de citação personalizado, com codificação personalizada.*

#### Administração de blocos personalizados

Para configurar e adicionar blocos personalizados:

* Clique em Gerenciar Blocos personalizados, que fica abaixo do nome do plugin;
* A partir dessa tela, clique em Adicionar bloco, para criar um novo bloco, ou clique em Editar ou Excluir sob o nome do bloco, para gerenciar os blocos existentes;
* Ao adicionar um novo bloco, digite um nome para ele (sem espaços ou caracteres não alfanuméricos) e o conteúdo a ser mostrado na barra lateral (Observe que este é um campo obrigatório);
* A exibição e a ordem dos blocos podem ser editadas na seção Gerenciamento da Barra lateral do Painel > Configurar > Website > Aparência > Configurar.

#### Plugin de Cabeçalho Personalizado

O Plugin de Cabeçalho Personalizado pode ser usado para adicionar JavaScript personalizado a um cabeçalho ou bloco. O JavaScript é frequentemente necessário para vincular seu site a serviços externos, mas não pode ser adicionado diretamente a um campo, por razões de segurança.

O plugin pode ser instalado a partir da Galeria de Plugins.

**Como exemplo, use o Plugin de Cabeçalho Personalizado para adicionar um feed do Twitter à sua barra lateral.**

Você pode adicionar um feed do Twitter para seu jornal, imprensa ou organização na barra lateral do OJS ou OMP.

Primeiro, você precisa habilitar e configurar o Plugin de Cabeçalho Personalizado, que permite adicionar código JavaScript a um bloco personalizado. Em seguida:

1. Vá a Configurações do Website > Plugins e garanta que o plugin de Cabeçalho Personalizado esteja instalado e habilitado;
2. Clique na seta azul ao lado do nome do plugin e, depois, no botão **Configurações**, que aparece abaixo,
3. Cole o seguinte no campo Conteúdo do Cabeçalho:
```html
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
```
4. Clique em **OK** para salvar.

Em seguida, você precisa criar um bloco personalizado:

1. Vá aos Plugins Instalados novamente e ative o plugin Administração de blocos personalizados;
2. Clique na seta azul ao lado do nome do plugin e, na sequência, em **Gerenciar Blocos Personalizados** abaixo dele;
3. Clique em **Adicionar bloco**;
4. Dê um nome ao bloco, como "Twitter";
5. Acima do campo **Conteúdo**, clique no botão **Código Fonte**;
6. Na caixa pop-up que aparece, cole o seguinte conteúdo (não use seu próprio link e nome de conta no Twitter):
```html
<a class="twitter-timeline" href="https://twitter.com/asmecher?ref_src=twsrc%5Etfw">Tweets by asmecher</a>
```
7. Os parâmetros de linha do tempo personalizados adicionais podem ser adicionados, se você quiser, por exemplo:
````html
<a class="twitter-timeline" "data-tweet-limit="3" ...
````
8. Clique em **Salvar**.

Por fim, você tem que adicionar o bloco personalizado que acabou de criar à sua barra lateral.

1. Vá a Configurações do Website> Aparência e desça para Gerenciamento da **Barra Lateral**;
2. Veja o bloco do Twitter com a caixa de seleção **vazia**;
3. Arraste e solte o bloco na **Barra Lateral**. Você pode arrastar e soltar todos os seus blocos na ordem desejada.

Outra opção é usar o plugin da barra lateral do Twitter. Esse [plugin](https://github.com/RBoelter/twitterBlock) leva o bloco Twitter para a barra lateral.

#### Plugin Disqus

O plugin [Disqus](https://github.com/ajnyga/disqus) se integra com [Disqus](https://disqus.com) e permite aos usuários adicionar comentários às páginas do artigo.

O plugin Disqus é um plugin de terceiros e deve ser instalado a partir de seu repositório Github.

Depois de instalar e ativar o plugin, você deve se registrar para criar uma conta Disqus no site [Disqus](https://disqus.com). Ao registrar-se, escolha a opção de usar Disqus em seu site. O Disqus oferece planos gratuitos e pagos, e você deve escolher um deles quando se registrar.

Quando solicitado a registrar seu **nome no website**, crie um baseado no nome de sua revista. Isso aparecerá nos feeds Disqus, nas notificações por e-mail e em sua aba Comunidade. Por exemplo, "pkpworkshopsjournal."

Pule o passo **Instalar Disqus** e vá a **Configurar Disqus**. Digite a url de seu periódico no campo **URL do site**. Digite sua política de comentários, conforme aplicável.

![Configure Disqus menu on the Disqus website.](./assets/learning-ojs-3.2-settings-plugin-disqus-configure-disqus.png)

Agora, você pode configurar o plugin Disqus em seu site de periódico:

1. Vá a Configurações do Website > Plugins;
2. Encontre o plugin Disqus;
3. Clique na seta azul ao lado do nome do plugin e das **configurações** que aparecerão abaixo;
4. Digite o nome do site de sua conta Disqus no campo **Abreviação do fórum Disqus**;
5. Clique em **OK**.

![OJS Disqus plugin settings menu with an option to enter a forum's shortname.](./assets/learning-ojs-3.2-settings-plugin-disqus-configure-plugin.png)

Após configurar o plugin, ao abrir uma das páginas de seu artigo, você deverá ver os comentários de Disqus na parte inferior. Seus usuários terão que se registrar em Disqus para usar o recurso.

![Example of an article page with Disqus comment field at the bottom.](./assets/learning-ojs-3.2-settings-plugin-disqus-comment-on-article.png)

#### Plugin Hypothes.is

Esse plugin acrescenta Hypothes.is integração à visão pública do artigo OJS, permitindo anotações e comentários. Atualmente, ele suporta comentar sobre as HTML galleys.

O hypothes.is pode ser ativado a partir da Galeria de Plugins.

Uma vez habilitado, os leitores verão as ferramentas hypothes.is no lado direito da galeria HTML.

![Hypothesis view next to an HTML galley with sample text.](./assets/learning-ojs-settings-plugin-hypothesis.png)

Você precisará de uma conta gratuita em hypothes.is para participar dos comentários do público. Grupos de comentários específicos/privados também podem ser criados. Veja o site [hypothes.is](https://web.hypothes.is/help/how-to-create-a-private-group/) para instruções.

As anotações e destaques públicos (se houver) somente serão visíveis se você estiver inscrito.

![Hypothesis view next to an HTML galley with portions of the sample text highlighted.](./assets/learning-ojs-settings-plugin-hypothesis-2.png)

#### Plugin Nuvem de palavras-chave

Esse plugin exibe uma nuvem de palavras-chave que podem ser habilitadas na barra lateral de seu periódico ou da editora.

![Keyword cloud displayed in a journal sidebar.](./assets/learning-ojs-settings-plugin-keyword.png)

Trata-se de um plugin de terceiros que deverá ser baixado no repositório do [GitHub](https://github.com/lepidus/keywordCloud).

Uma vez que você tenha baixado o arquivo do GitHub, carregue-o em seu periódico e ative-o. Essa ação tornará a nuvem de palavras-chave disponível como um bloco que você pode adicionar à barra lateral de seu periódico.

Para adicionar a nuvem de palavras-chave à sua barra lateral:

1. Vá a Configurações > Website > Aparência > Gerenciamento da barra lateral;
2. Arraste a nuvem de palavras-chave da coluna **não selecionada** para a coluna da **Barra Lateral**;
3. Reorganize a ordem dos blocos conforme necessário;
4. Clique em **Salvar**.

Feito isso, a nuvem deverá aparecer na barra lateral do site de sua revista.

#### Plugin Mais lidos

Esse plugin cria uma seção "artigos mais lidos" na barra lateral da revista, composta dos 5 artigos mais vistos (com os respectivos links) na última semana  e do número de pontos de visita a cada artigo.

![Most read of the week list with article titles and links displayed in a journal sidebar.](./assets/learning-ojs-settings-plugin-most-read.png)

O Mais lidos  é um plugin de terceiros que deverá ser baixado no repositório do [GitHub](https://github.com/ajnyga/mostRead).

*Cabe esclarecer que esse plugin é compatível com OJS versão 3.1.2 ou superior e está, atualmente, sendo adaptado para OJS 3.2. Atualmente está sendo adaptado para OJS 3.2.*

Tendo baixado o arquivo do GitHub, carregue-o em seu periódico e ative-o. Desse modo, será criado um bloco "Mais Lidos", que você pode adicionar à barra lateral de seu periódico.

Para adicionar o bloco "Mais Lidos" à sua barra lateral:

1. Vá a Configurações > Website > Aparência > Gerenciamento da barra lateral;
2. Arraste o bloco “Mais Lido” da coluna **Não Selecionado** para a coluna **Barra Lateral**;
3. Reorganize a ordem dos blocos conforme necessário;
4. Clique em **Salvar**.

O bloco agora aparecerá na barra lateral do site de sua revista.

#### Artigos recomendados por Autor

Esse plugin insere uma lista de artigos do mesmo autor (com links apropriados) na página de resumo de um artigo.

![Most read articles by the same author(s) with a sample article and link.](./assets/learning-ojs-settings-plugin-author-rec.png)

Esse plugin pode ser habilitado na Galeria de Plugins.

Uma vez ativado, não há necessidade de configuração adicional.

#### Recomendar artigos semelhantes

Esse plugin insere uma lista de artigos similares na página de resumo do artigo.

Esse plugin pode ser habilitado na Galeria de Plugins.

Uma vez ativado, não há necessidade de configuração adicional.

#### Estatísticas de uso

Esse plugin exibe o número de downloads de um artigo na página do artigo.

![Bar graph of article downloads displayed on an artilce page by the Usage Statistics plugin.](./assets/learning-ojs-settings-plugin-usage-stats.png)

Para configurar o Plugin de Estatísticas de Uso, você deve ser um **Administrador**:

1. Vá a Configurações > Website > Plugins;
2. Em Plugins Genéricos, encontre o Plugin de Estatísticas de Uso;
3. Clique na seta azul à esquerda do nome do plugin para que os links apareçam abaixo do plugin;
4. Clique em Configurações;
5. Vá até a parte inferior da caixa pop-up que se abre para a seção Opções de Exibição de Estatísticas;
6. Marque a caixa ao lado do gráfico Exibir estatísticas de submissão para o leitor;
7. Abaixo, você pode selecionar se deseja exibir as estatísticas como uma barra ou gráfico de linha e o número máximo de meses para exibir o uso;
8. Clique em Salvar.

![Usage Statistics plugin settings with statistics display options.](./assets/learning-ojs-settings-plugin-usage-stats-2.png)

Por favor, observe que:

* As estatísticas de uso só podem ser exibidas para o ano corrente. O plugin é reinicializado no início de cada ano;
* As estatísticas exibidas indicam o número de vezes que um artigo foi baixado.

## Páginas estáticas

O plugin **Páginas estáticas**  permite que você crie novas páginas em seu website para conteúdo adicional - por exemplo, você poderia criar uma página que detalha suas políticas de acesso aberto.

Para usar o plugin Páginas estáticas:

* Vá a Configurações do site > Plugins e encontrar o plugin de Páginas Estáticas;
* Habilite o plugin, marcando a caixa ao lado;
* Atualize a página em seu navegador. Essa ação permitirá ver uma nova aba ao lado de **Plugins**, chamada **Páginas Estáticas**;
* Clique na aba **Páginas estáticas**;

![Static Pages tab in the Website Settings menu.](./assets/learning-ojs3.2-website-settings-static-pages-plugin.png)

* Adicione uma nova página clicando em **Adicionar página estática**;
* Preencha o formulário que abre com o conteúdo que você deseja na página. O **Caminho** será usado como parte da URL da página e o **Título** aparecerá como o título da página.

![Add Static Page menu with a page title and path entered.](./assets/learning-ojs3.2-website-settings-add-static-page.png)

* Você pode visualizar a página enquanto trabalha clicando no link **Pré-visualização**, na parte inferior do formulário.
* Quando terminar de criar a página, clique em **Salvar**.

Depois de criar a página, é necessário adicioná-la ao seu menu.  As instruções sobre como fazer isso estão na seção acima, sobre **Menus de Navegação**.

Para editar uma página que você criou com o plugin, é preciso:

* Ir a Configurações do site > Páginas Estáticas;
* Clicar em **Editar** ao lado da página que você deseja modificar
* Clicar no link **Pré-visualização**, na parte inferior do formulário, para visualizar a página enquanto trabalha;
* Clicar em **Salvar** quando você terminar de editar a página.

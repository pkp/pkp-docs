---
book: learning-ojs
version: 3.3
title: Aprendendo Open Journal Systems 3.3 - Editoração e Publicação
description: Instruções detalhadas para o estágio de editoração do fluxo de trabalho OJS.
---

# Editoração e Publicação

Com a conclusão da etapa de Edição de Texto, a submissão agora segue para a Publicação. A partir daqui, os arquivos copiados serão convertidos em formatos publicáveis na forma de arquivos de leitura de prova (exemplo: PDF e HTML) e revisados antes da publicação. Uma nova edição será criada e o artigo será agendado para publicação no número a ser lançado. Este capítulo explica as etapas desse processo e ainda como usar o recurso de controle de versão (introduzido pela primeira vez no OJS 3.2) para publicar uma nova versão de um artigo, caso alterações significativas sejam realizadas.

O OJS também oferece uma forma direta de contornar o fluxo de trabalho editorial descrito no capítulo anterior e enviar o conteúdo diretamente à Publicação, fase em que pode ser adicionado a uma edição e publicado. Você pode fazer isso por meio do plugin Quick Submit. Consulte as instruções detalhadas do [plugin do Quick Submit no capítulo Importação e exportação de dados](https://github.com/pkp/pkp-docs/blob/main/learning-ojs/en/tools.md#importexport).

Para começar a trabalhar na Editoração, o Editor de Seção ou Editor de Periódicos deve fazer o login no sistema e escolher a submissão em seu painel de controle.

Clicando no artigo, o registro da submissão será aberto.

![learning-ojs-3.2-se-production.png](./assets/learning-ojs-3.2-se-production.png)

Você verá que os arquivos editados agora estão disponíveis no painel **Arquivos Prontos para Publicação**.

Na aba **Publicação**, você pode atribuir participantes (como um Editor de Layout) ao estágio de Editoração do fluxo de trabalho e se comunicar com os participantes no painel de **Discussões de Editoração**.

{% include video.html id="-VRKdBQPdn4" provider="youtube" title="Video of Editorial workflow in OJS 3.3. Module 9: Production."%}

Este vídeo da Escola do PKP explica os passos que o Editor de Seção ou Editor de Layout tomará na fase de Editoração e na aba Publicação. Para assistir a outros vídeos desta série, visite o [canal do PKP no YouTube](https://www.youtube.com/playlist?list=PLg358gdRUrDUKJbWtr4bgy133_jwoiqoF).

## Submissões multilíngues

Todos os aspectos relacionados à publicação de uma submissão são feitos na aba Publicação. A aba Publicação permite editar ou adicionar informações sobre a submissão, incluindo colaboradores, metadados e identificadores. É também onde você fará o upload dos arquivos finais de prova para publicação na revista.

![Aba Publicação exibe os metadados associados a submissão. ](./assets/learning-ojs-3.2-production-publication-tab.png)

Aqui, tem-se  uma visão geral da finalidade das diferentes abas desta seção. Instruções detalhadas sobre algumas delas estarão disponíveis posteriormente neste capítulo.

**Colaboradores**: Use essa aba para adicionar, editar ou remover colaboradores do artigo.

**Metadados**: Use essa aba para adicionar ou editar palavras-chave do artigo.

Se alguma alteração for feita, clique em Salvar antes de sair dessa janela.

**Título e Resumo**: Use essa aba para editar o título, subtítulo e resumo do artigo.

Se alguma alteração for feita, clique em Salvar antes de sair dessa janela.

**Identificadores**: Use a aba Identificadores para visualizar ou adicionar um identificador exclusivo, como um DOI. Mais informações sobre como atribuir e gerenciar DOIs estão disponíveis no [DOI Plugin Guide](https://github.com/pkp/pkp-docs/blob/main/doi-plugin).

**Leitura de Prova**: Use a aba Leitura de Prova para carregar o arquivo final para publicação. Isso é explicado a seguir.

**Permissões & Divulgação**: inclusão de detalhes sobre o detentor dos direitos autorais, além de um link para a licença do artigo, se aplicável, que será preenchido automaticamente, de acordo com suas [Configurações de Distribuição](https://github.com/pkp/pkp-docs/blob/main/learning-ojs/en/settings-distribution.md). A licença será automaticamente preenchida de acordo com suas [Configurações de Distribuição](./settings-distribution. md).

**Edição**: Use a aba Edição para atribuir o artigo a uma edição de periódico. Isso é explicado a seguir.

### Tipos de componente de arquivo de leitura de prova

As abas “Título e Resumo”, “Metadados”, “Permissões e Divulgação” e “Edição” têm opções para adicionar e editar metadados em múltiplos idiomas. Os idiomas devem, primeiro, ser ativados em Configurações do Website-> Configurar-> Idiomas.

A aba "Edição" permite carregar várias imagens de capa em idiomas selecionados.

![learning-ojs3.2-ed-prod-issue-languages.png](./assets/learning-ojs3.2-ed-prod-metadata-lang.png)

Um banner de notificação indica que você deve atribuir alguém para criar os arquivos de leitura de prova (por exemplo, os PDFs, HTML, etc.) a partir dos arquivos prontos para Publicação.

![Multilingual button and upload field for an issue cover image for French (Canada) in the Issue subtab within Publication.](./assets/learning-ojs3.2-ed-prod-issue-languages.png)

## Designar editor de layout

### Formatos de arquivo de leitura de prova

A notification banner indicates that you must assign someone to create the galley files (e.g., the PDFs, HTML, etc.) from the production ready files.

Isso pode variar de periódico para periódico – você pode ter Editores de layout ou Assistentes de edição para fazer este trabalho. Alguns periódicos usam um design gráfico externo ou serviço de digitação. Se você quiser se comunicar com seu Editor de layout, Assistente de edição, designer gráfico ou digitador por meio do OJS e gerenciar o processo de editoração com eles, também no OJS, certifique-se de que tenham uma conta de usuário e adicione-os como participantes da submissão.

Para realizar a tarefa, use o link  **Designar** Participantes. Isso abrirá uma nova janela.

![New window to assign participants such as Layout Editor.](./assets/learning-ojs-3.2-se-production-participants-add.png)

Use o filtro de papéis e o botão de pesquisa para encontrar usuários apropriados. Selecione o usuário e escolha uma mensagem predefinida. Clique em **OK** para enviar.

O usuário agora foi notificado por e-mail e no painel.

![Manuscript dashboard after additional participants have been assigned.](./assets/learning-ojs-3.2-se-production-participants-added.png)

Você pode ver o Editor de Layout na lista de Participantes e o aviso de solicitação no painel Discussão da Edição. Agora, você pode esperar que o Editor de Layout complete suas tarefas.

### Utilizando templates

Como Editor de layout, você receberá uma mensagem convidando-o a criar os arquivos de leitura de prova para a submissão. Para começar, faça login no sistema e vá ao seu painel.

![learning-ojs-3.2-le-submission.png](./assets/learning-ojs-3.2-le-dashboard.png)

A partir daqui, encontre a submissão e selecione o link **Publicação**. Isso vai levá-lo para o registro de submissão.

![Production tab of on the assigned manuscript with 1 production ready file for the Layout Editor.](./assets/learning-ojs-3.2-le-submission.png)

No painel Arquivos prontos para editoração, baixe os arquivos para sua área de trabalho e trabalhe fora do OJS para convertê-los em arquivos de leitura de prova. A próxima seção explica os formatos e a preparação dos arquivos de leitura de prova.

> Nota: A PKP está atualmente trabalhando em um projeto para automatizar a conversão de documentos do Microsoft Word em outros formatos, incluindo XML, HTML, PDF, EPUB, etc. Fique de olho em nosso blog para atualizações. Fique de olho em nosso blog para novidades.

### Arquivos PDF

A prova é o arquivo final, pronto para publicação, que foi preparado para os leitores e será publicado na página do artigo. As provas devem estar em um formato estável não editável (por exemplo, HTML, PDF, ePub ou XML) com versões do artigo em texto completo. Os arquivos de leitura de prova também podem incluir material suplementar, como arquivos multimídia e dados de pesquisa. Você pode publicar um arquivo de galley para um artigo e para uma edição inteira.

#### Estilos HTML arquivos de leitura de prova

Quando você carregar um arquivo de leitura de prova, precisará selecionar um **Tipo de componente**, que concerne aos mesmos tipos de componentes que os autores selecionam ao fazer upload dos arquivos de envio. Estes são os mesmos tipos de componentes que os autores selecionam quando carregam arquivos de submissão. Você pode configurar os tipos de componentes em Configurações do fluxo de trabalho> Envio> Componentes, de acordo com o tipo de componente que deseja que seja publicado, e se desejar que um link apareça na página inicial do artigo ou no sumário.

As configurações são as seguintes:

* Dependente: o link não aparecerá com conteúdo publicado em tudo;
* Suplementar: o link aparecerá na página de desembarque do artigo;
* Nem suplementar nem dependente: o link aparecerá na página de desembarque do artigo e na tabela de conteúdos.

Por exemplo, se você quiser incorporar arquivos multimídia em arquivos HTML e fazer com que apareçam na página de destino, na página de edição e na página de submissão, você deverá efetuar as configurações da seguinte forma:

* Vá a Configurações > Fluxo de trabalho > Submissão > **Componentes**;
* Clique na seta azul ao lado de **HTML Stylesheet** e **Editar**;
* Desmarque "Marcar  arquivos desse tipo como arquivos dependentes" e "Marcar arquivos desse tipo como arquivos complementares". Clique em **Salvar**
* Clique na seta azul ao lado de **Multimídia** e **Editar**
* Desmarque "Marcar arquivos deste tipo como arquivos complementares". Deixe "Arquivos dependentes" verificados. Clique em **Salvar**.

#### Adicionar imagens e multimídia a um HTML de Leitura de prova

Revistas on-line publicam seus artigos em uma variedade de tipos de arquivos. Os mais comuns são PDF e HTML, mas cada vez mais formatos adicionais estão sendo usados, como ePub, MP3 e XML.

Plugins em OJS permitem que arquivos PDF, HTML e XML sejam visualizados em um navegador da Web ou baixados. Se os arquivos estiverem sendo baixados em vez de exibidos no navegador, talvez seja necessário habilitar um desses plugins em Configurações do site > Plugins:

* PDF .JS PDF Viewer fornece suporte de renderização para arquivos de artigos  em PDF.
* ELife Lens Article Viewer fornece suporte de renderização para arquivos de artigos JATS XML usando o eLife Lens.
* O plugin HTML artigos de prova fornece suporte de renderização para arquivos de artigo HTML.

Outros formatos podem exigir plugins adicionais ou podem ser baixados diretamente. De maneira alternativa, você pode hospedar o conteúdo de texto completo em uma plataforma diferente e incorporar uma URL remota, escolhendo a caixa de seleção: "Esta prova estará disponível em um site separado."

#### Faça upload de um arquivo multimídia com link de um site externo

Exigir que todas as submissões utilizem um modelo de documento pré-formatado com os estilos de publicação do seu periódico (a exemplo da família da fonte, do tamanho da fonte, do negrito, do posicionamento, do cabeçalho, do corpo, dos rodapés, etc.) pode tornar a conversão do documento muito mais fácil. A [Microsoft fornece uma breve visão geral para a criação de modelos no MS Word](https://support.microsoft.com/en-us/topic/create-a-template-86a1d089-5ae2-4d53-9042-1191bce57deb?ui=en-us&rs=en-us&ad=us).

Depois de criar um modelo que corresponda ao estilo da sua revista, ele pode ser útil para enviar aos autores, aos editores de layout ou a outros usuários. Aqui está um exemplo de uma revista OJS que requer que os autores baixem e usem um arquivo de modelo: [Paideusis](https://journals.sfu.ca/pie/index.php/pie/about/submissions).

Idealmente, seu modelo deve ser criado usando estilos em vez de formatação direta. Isso não apenas garante a consistência em todos os seus documentos, mas também ajuda em quaisquer conversões para outros formatos (por exemplo, HTML). Aqui está uma [explicação da diferença entre estilos e formatação direta no Word](https://support.microsoft.com/en-us/office/customize-or-create-new-styles-d38d6e47-f6fc-48eb-a607-1eb120dec563?redirectSourcePath=%252fen-us%252farticle%252fStyle-basics-in-Word-d382f84d-5c38-4444-98a5-9cbb6ede1ba4&ui=en-US&rs=en-US&ad=US).

#### Arquivo em PDF

O PDF é o tipo de arquivo mais fácil de criar a partir de um documento do Word. As versões atuais do Microsoft Word (e outros processadores de texto) permitem “Salvar como” ou “Exportar como” um PDF. A maioria das revistas OJS publica seus artigos como PDFs.

Os PDFs também são populares com muitos leitores, pois recriam de forma mais próxima a página impressa. No entanto, os PDFs costumam ser menos flexíveis em dispositivos móveis e nem sempre lidam com links ou mídia incorporada (como arquivos de som ou vídeo) muito bem. Com o uso generalizado de dispositivos móveis, garantir que seu público possa ler seus artigos em seus telefones ou tablets é cada vez mais importante.

Exemplo: [Irish Journal of Technology Enhanced Learning](http://www.journal.ilta.ie/index.php/telji/article/view/22/51).

#### Arquivos HTML

Os arquivos HTML têm a vantagem da flexibilidade. Eles lidam muito bem com links e multimídia e podem caber em praticamente qualquer tela - incluindo telefones e tablets. No entanto, eles têm uma aparência diferente de uma página impressa, portanto, alguns leitores preferem PDF. A situação ideal é fornecer arquivos PDF e HTML para melhor atender às necessidades dos diferentes usuários.

A criação de um arquivo HTML pode exigir mais tempo e esforço do que a criação de arquivos PDF. Os processadores de texto não possuem ferramentas eficazes para “Salvar como” em HTML. O Microsoft Word tenta fazer isso, mas os resultados não são úteis para carregar no OJS. Em vez disso, tente seguir este fluxo de trabalho:

* Converta o documento do Word. Você pode usar esta [ferramenta on-line gratuita](https://word2cleanhtml.com/) para fazer uma conversão inicial:.
* Abra os arquivos HTML resultantes em um editor de texto (como, por exemplo, Bloco de notas no Windows) ou editor de HTML (como, por exemplo, Adobe Dreamweaver). A partir daqui, você precisará fazer qualquer limpeza ou formatação final. É necessário compreender os fundamentos do HTML. Existem muitos [tutoriais gratuitos](https://www.w3schools.com/html/), mas leva algum tempo.
* Mantenha a formatação HTML básica. Concentre-se apenas em parágrafos, quebras de linha, cabeçalhos e links. Não se preocupe com fontes, cores ou outros elementos de design - o OJS cuidará de tudo isso automaticamente como parte do design geral da revista.
* Faça upload para o OJS como um arquivo HTML de leitura de prova.
* O visualizador de HTML renderiza arquivos HTML em um iframe, o que pode afetar a navegação para páginas da web com hiperlinks. Você pode ignorar esse recurso abrindo hiperlinks em uma nova aba do navegador, adicionando o atributo target = "_ blank" às suas tags href.

Alguns exemplos de modelos HTML podem ser encontrados e adaptados a partir destas fontes:

* [Recurso da U of A](https://drive.google.com/file/d/1mCP0tguFJf7jJn_CNceEwvRn5eCJrvxP/view) - Licença: CC0 1.0 Universal (CC0 1.0)

Para definir o estilo de um arquivo individual de leitura de prova HTML:

* [[Cultural Anthropology](https://journal.culanth.org/index.php/ca/article/view/4434);](https://journal.culanth.org/index.php/ca/article/view/4434)
* [[Evidence Based Library & Information Practice](https://journals.library.ualberta.ca/eblip/index.php/EBLIP/article/view/29621).](https://journals.library.ualberta.ca/eblip/index.php/EBLIP/article/view/29621)

##### Estilizar arquivos em HTML

É possível definir o estilo do design de seus arquivos de leitura de prova HTML em massa ou individualmente, por artigo. O estilo em massa só pode ser feito se você estiver usando um tema personalizado.

Se desejar incluir imagens ou arquivos multimídia em um arquivo HTML de leitura de prova, você pode carregá-los como arquivos dependentes no envio e vinculá-los ao arquivo para exibi-los.

* Ao criar o arquivo HTML de leitura de prova, certifique-se de que inclui uma referência à folha de estilo no `<head>` seção, por exemplo  `<link rel="stylesheet" href="./article_styles.css" type="text/css" />`
* Faça upload do arquivo de HTML de leitura de prova (veja abaixo as instruções sobre como **adicionar arquivos de leitura de prova**)
* Edite o arquivo de leitura de prova
* Faça upload das folhas de estilo CSS com o tipo de **componente apropriado - folha de estilo HTML**.

Para estilizar todos os arquivos HTML de leitura de prova: se estiver usando um plugin de tema personalizado, você pode escrever uma linha de código para incluir um estilo personalizado para todos os arquivos HTML. Isso só se aplica a arquivos HTML de leitura de prova que não têm um estilo aplicado individualmente. Mais informações sobre temas personalizados estão disponíveis no [PKP Theming Guide](https://docs.pkp.sfu.ca/pkp-theming-guide/en/).

##### Add images and multimedia to an HTML Galley

A página HTML também deve conter o nome exato do arquivo ao qual você está se conectando.

Você precisará salvar o arquivo de áudio/vídeo/imagem no formato MP3/MP4/JPEG/GIF usando o nome na página HTML.

* `<audio controls>` elemento para MP3
* `<video>` elemento para MP4; ou
* `<img src=”imagename”>` tag para imagens

O arquivo HTML também deve conter o nome exato do arquivo que você está se conectando.

Você precisará salvar o arquivo de áudio/vídeo/imagem no formato MP3/MP4/JPEG/GIF usando o nome no arquivo HTML.

Seu arquivo HTML deverá conter o seguinte código mínimo (para arquivos de áudio). Para o vídeo relacionado ou o código do arquivo de imagem, por favor, veja as instruções da w3schools sobre a [incorporação de vídeo em HTML](https://www.w3schools.com/html/html5_video.asp) ou as instruções sobre a [incorporação de imagens em HTML](https://www.w3schools.com/html/html_images.asp).

```html
<html>
<head>
<title>MP3 upload</title>
</head>
<body>
<audio controls>
  <source src="filename.mp3" type="audio/mpeg"> Your browser does not support the audio element.
</audio>
</body>
</html>
```

No OJS, você precisará definir as configurações para seus Tipos de componentes antes de adicionar arquivos multimídia. Consulte **Tipos de componentes do arquivo de leitura de prova** acima para obter detalhes sobre como ajustar essas configurações.

Certifique-se de ter os arquivos “Multimídia” e/ou “Imagem” configurados como “arquivos dependentes” nas configurações de Tipo de Componente.

![learning-ojs3.2-ed-prod-multimed-dep-file.png](./assets/learning-ojs3.2-ed-prod-multimedia-component-edit.png)

Agora volte ao envio para carregar uma folha de estilo HTML para exibir seu arquivo multimídia. Veja abaixo as instruções sobre como **adicionar arquivos de leitura de prova**. Além disso, ao fazer upload do arquivo:

* Rotule a prova de acordo com o tipo de arquivo multimídia (por exemplo, MP3, MP4, imagem)
* Selecione a **folha de estilo HTML** na lista suspensa do **componente do artigo**
* Faça upload do arquivo HTML que você preparou com pelo menos o código mínimo (instruções acima)
* Clique em **Continuar**
* Na aba **Detalhes da revisão**, você pode carregar arquivos dependentes. É aqui que fará o upload do arquivo MP3/MP4/imagem.

![learning-ojs3.2-ed-prod-upload-multimedia.png](./assets/learning-ojs3.2-ed-prod-multimed-dep-file.png)

Ao carregar um arquivo de imagem, você será solicitado a adicionar um Termo de Legenda, Crédito, Proprietário de Direitos Autorais e Permissão, conforme a aplicabilidade.

![learning-ojs3.2-ed-prod-image-details.png](./assets/learning-ojs3.2-ed-prod-upload-multimedia.png)

Ao carregar um arquivo de imagem, você será solicitado a adicionar uma Legenda, Crédito, Proprietário de Direitos Autorais e Permissão, conforme a aplicabilidade.

![Step 2 for uploading dependent files. Text fields to enter Caption, Credit, Copyright Owner, and Permission Terms.](./assets/learning-ojs3.2-ed-prod-image-details.png)

Clique em **Continuar**, para concluir o upload, revise os detalhes e confirme. Seu arquivo multimídia agora foi adicionado como um arquivo dependente junto ao HTML e será incorporado ao HTML quando o item for publicado.

#### Arquivos ePUB

Semelhante aos arquivos HTML, os arquivos ePub são ideais para dispositivos móveis, mas requerem codificação especializada para serem criados. Ferramentas de conversão estão disponíveis, como [Calibre](https://calibre-ebook.com/). Instruções mais detalhadas de COMO FAZER para criar arquivos ePub estão [disponíveis aqui](https://www.wikihow.com/Convert-a-Word-Document-to-Epub).

Como arquivos HTML, alguma limpeza adicional pode ser necessária após a conversão e [requer algum conhecimento](http://www.jedisaber.com/eBooks/Introduction.shtml) sobre o formato.

Exemplo (ver link EPUB na parte inferior da página): [Revisão Internacional de Pesquisa em Ensino Aberto e a Distância](http://www.irrodl.org/index.php/irrodl/article/view/2895).

#### Arquivos XML

Os arquivos XML são arquivos estruturados nos quais cada parte do artigo é marcada como um elemento distinto. Isso permite ao leitor navegar e acessar facilmente figuras, imagens, metadados, referências e partes do texto do artigo. Criar arquivos XML é uma maneira muito eficiente de publicar em vários formatos. Ao criar um arquivo XML, você pode gerar PDFs, HTML, ePub e outros formatos automaticamente.

![XML preview of article with navigation menu options.](./assets/learning-ojs3.2-ed-prod-xmlgalley.png)

PKP está desenvolvendo ferramentas que lhe permitirão criar, converter e editar arquivos XML dentro do OJS. Atualmente, você precisa criar e editar os arquivos fora do OJS. Se deseja produzir arquivos XML de leitura de prova para a sua revista, pode usar os serviços de um designer gráfico ou tipógrafo ou, se tiver algum conhecimento em XML, pode criar os arquivos você mesmo. O W3schools tem excelentes tutoriais sobre XML.

Exemplo [Food and Nutrition Research](https://foodandnutritionresearch.net/index.php/fnr/article/view/3609/10173).

#### Arquivos multimídia

Está se tornando cada vez mais popular para as revistas publicar conteúdo multimodal, incluindo arquivos de áudio e vídeo, além de artigos baseados em texto. Mais do que fornecer formatos audiovisuais e visuais para artigos baseados em texto, o que pode ajudar a aumentar a acessibilidade do conteúdo de revistas, o conteúdo multimodal é cada vez mais [valorizado como forma alternativa de bolsa de estudos](https://www.tandfonline.com/doi/full/10.1080/07294360.2017.1389857?casa_token=QlJ8xBTQUEMAAAAA%3AWDkOV6R-qfZxJBimLv_Jv4iB3o2XYeA-Cym7uxHoCww9THLVmZFVfKmRP3dtqq098HvYG6kqTl_v) que representa e reflete diferentes modos de expressão e formas de saber. Os periódicos que optarem por criar versões em áudio de artigos baseados em texto podem optar por fazê-lo manualmente, tendo alguém lendo o artigo em um gravador de voz ou usando automaticamente o software Texto para fala.

Os arquivos multimídia podem ser incorporados à página do artigo no site do seu jornal ou podem ter um link de um site externo, como o YouTube ou SoundCloud. Se você usar um site externo, a qualidade pode ser melhor, mas as estatísticas não serão coletadas em visualizações de provas ou downloads, e a preservação do conteúdo depende do site externo.

Ao carregar um arquivo multimídia, você pode selecionar “texto do artigo” da lista de componentes e carregar o arquivo (MP3, MP4, arquivo de imagem, etc.) diretamente. Isso permitirá que o usuário acesse o arquivo usando o software de visualização de imagens ou o software de reprodução de áudio/vídeo instalado em seu dispositivo.

Exemplo: [Intersectional Apocalypse](https://journals.lib.sfu.ca/index.php/ifj/article/view/673).

Como alternativa, você pode incorporar o arquivo de áudio, vídeo ou imagem em uma página HTML para que os usuários possam visualizar o arquivo diretamente em seu navegador. Consulte **Adicionar imagens e multimídia a uma prova HTML** acima para obter instruções sobre como fazer isso.

Exemplo: Intersectional Apocalypse

##### Carregar um arquivo multimídia vinculado a um site externo

Faça upload do arquivo de leitura de prova multimídia no estágio de Editoração do fluxo de trabalho. Veja abaixo as instruções sobre como **adicionar arquivos de leitura de prova**. Além disso, ao fazer upload do arquivo:

* Rotule a prova de acordo com o tipo de arquivo multimídia (por exemplo, MP3 / MP4)
* Marque a caixa que indica “Esta prova estará disponível em um site separado”

![learning-ojs3.2-ed-prod-share-youtube.png](./assets/learning-ojs3.2-ed-prod-upload-video-youtube.png)

Cole a URL no campo de prova remota e clique em **Salvar**.

![Share Button on Youtube to generate external link for Galley File.](./assets/learning-ojs3.2-ed-prod-share-youtube.png)

Clique em **Continuar**.

O vídeo agora deve aparecer na submissão publicada.

### Arquivos HTML

Em seguida, você desejará compartilhar o PDF com o autor para um olhar final e confirmação de autoria. Para fazer isso, use o link **Adicionar discussão** no painel Discussão de editoração Essa ação abrirá uma nova janela. Ao fazer isso, será aberta uma nova janela.

![Creating a discussion post in OJS to indicate that galley are ready for proofreading.](./assets/learning-ojs-3-le-production-add-participant.png)

Lembre-se de adicionar o autor na parte superior da janela e, em seguida, adicione um assunto e uma mensagem.

Antes de enviar, anexe uma cópia do arquivo PDF usando o link **Carregar arquivo**. Isso o tornará disponível para o autor.

![Step 1 of uploading galley file in discussion- uploading file.](./assets/learning-ojs-3-le-production-add-participant-upload.png)

Em seguida, faça quaisquer alterações no nome do arquivo (normalmente, você não precisa fazer nada nessa fase).

Clique no botão azul **Agendar para publicação**.

Na sequência, você pode carregar arquivos adicionais, se necessário.

![learning-ojs-3-le-production-add-participant-upload3.png](./assets/learning-ojs-3-le-production-add-participant-upload2.png)

Quando terminar, clique em **Concluir**.

![Step 3 of uploading galley file in discussion- option to add additional file or complete.](./assets/learning-ojs-3-le-production-add-participant-upload3.png)

Em seguida, clique em **Adicionar Prova**, que abrirá uma nova janela.

O autor já foi notificado e você pode aguardar sua resposta.

![Discussion box showing the uploaded galley file as attachment.](./assets/learning-ojs-3-le-production-add-participant2.png)

O autor agora foi notificado e você pode aguardar sua resposta.

### Arquivos ePUB

Assim que o autor tiver a chance de revisar as provas e responder, você receberá uma notificação por e-mail e verá uma resposta nas Discussões de editoração.

![learning-ojs-3.2-au-production-galleys.png](./assets/learning-ojs-3-au-production-message-reply.png)

### Arquivos XML

Agora que o autor revisou as provas, você pode fazer as alterações finais e enviá-las à submissão. Para fazer upload de provas, vá à aba Publicação e, em seguida, Provas.

![learning-ojs-3-au-production-galleys-upload1.png](./assets/learning-ojs-3.2-au-production-galleys.png)

Adicione um rótulo apropriado (por exemplo, PDF, HTML etc.) e clique em **Salvar**.

![learning-ojs-3-au-production-galleys-upload2.png](./assets/learning-ojs-3-au-production-galleys-upload1.png)

O arquivo agora está anexado e você pode enviar a mensagem usando o botão **OK**.

![Step 1 of uploading file. PDF file uploaded displays option to Change File, Continue, or Cancel.](./assets/learning-ojs-3-au-production-galleys-upload2.png)

Nessa janela, escolha o componente de artigo apropriado (por exemplo, texto do artigo) e carregue o arquivo de prova. Clique em **Continuar**.

![Step 2 of uploading file. Displays option to edit file name, Continue, or Cancel.](./assets/learning-ojs-3-au-production-galleys-upload3.png)

Se necessário, altere o nome do arquivo. Clique em **Continuar**.

![Step 3 of uploading file. Confirming file has been added. Displays option to Complete or Cancel.](./assets/learning-ojs-3-au-production-galleys-upload4.png)

Se você tiver mais arquivos, envie-os neste momento. Caso contrário, clique em **Concluir**.

Você pode fazer alterações no upload selecionando a seta azul à esquerda do rótulo da prova, que revela opções para editar, alterar o arquivo ou excluir.

![Galley subtab within the manuscript's Publication tab. Displays previously uploaded PDF.](./assets/learning-ojs-3.2-au-production-galleys-uploaded.png)

Você pode fazer alterações no upload selecionando a seta azul à esquerda do rótulo da prova, que exibirá as opções para editar, alterar o arquivo ou excluir.

### Arquivos multimídia

Se quiser fazer uma alteração em um arquivo de leitura de prova ou rótulo de arquivo de leitura de prova depois de ter sido carregado, você pode editá-lo. Observe que, se o artigo já foi publicado, para fazer uma alteração no arquivo de leitura de prova, você, primeiro, terá que cancelar a publicação do artigo ou criar uma nova versão (consulte Controle de versão dos artigos na sequência). Mas, antes de o artigo ser publicado, você pode editar o arquivo de leitura de prova facilmente.

1. Abra a submissão no painel de submissões
2. Vá à aba Publicação e Provas
3. Clique na seta azul ao lado do arquivo que deseja editar
4. Se desejar editar o rótulo da leitura de prova, clique no botão Editar, que aparece na tela, e altere o rótulo da leitura de prova
5. Se desejar alterar o arquivo, clique em Alterar arquivo e carregue um novo arquivo
6. Quando terminar de editar, clique em Salvar.

![Galley subtab within the manuscript's Publication tab. Blue arrow for PDF expanded to reveal additional option to Edit, Change File or Delete.](./assets/learning-ojs-3.2-au-production-galleys-edit.png)

### Entre em contato com o autor

Finalmente, você precisará informar ao Editor de Seção que as leituras de prova foram concluídas. Para fazer isso, use o painel Discussão de Editoração e escolha o link **Adicionar Discussão**.

![Creating a discussion post in OJS to indicate that galley files have been uoloaded.](./assets/learning-ojs-3-au-production-galleys-complete.png)

Adicione o Editor de Seção ao topo da página e, a seguir, inclua uma linha de assunto e uma mensagem. Clique em **OK** para enviar a mensagem.

Neste ponto, o Editor de Seção recebe a notificação do Editor de Layout e analisa os arquivos de prova.

![Editor de Seção Editor de Informes](./assets/learning-ojs-3-au-production-galleys-discussions.png)

### Opção 1: cancelar a publicação e republicar

Para informar ao Editor, use o link **Adicionar Discussão** que se encontra no painel Discussão de Editoração.

A próxima etapa na publicação da submissão é verificar e finalizar os metadados.

Quando estiver satisfeito com a edição, clique no link **Publicar Edição** para publicá-la no site da sua revista.

Você pode verificar os metadados da submissão acessando Envios, abrindo o envio, indo à aba Publicação e verificando as abas **Título**, **Colaboradores** e **Metadados**.

## Edição de layout

Antes de publicar a submissão, você deve verificar se os metadados do artigo estão completos e precisos no OJS, e se correspondem aos metadados no PDF. Isso é importante para garantir que o conteúdo seja indexado pelo Google Scholar, detectável por outros serviços e acessível aos leitores. Para saber mais, veja [o guia de melhores práticas em metadados de periódicos](https://github.com/pkp/pkp-docs/blob/main/metadata-practices/en).

Você pode verificar os metadados da submissão acessando as **Submissões**, abrindo a submissão que será publicada, indo para a aba **Publicação**, e verificando as guias de **Título e Resumo**, **Contribuidores** e **Metadados**.

Neste ponto, você também pode adicionar o artigo a uma categoria para exibi-lo em uma página de categoria temática em seu site e extrair e salvar as referências (se ainda não o fez).

### Opção 2: criar uma nova versão

As categorias podem ser usadas para organizar seus artigos em coleções temáticas. Se usar categorias em sua revista, você pode, opcionalmente, adicionar o artigo a uma categoria ou categorias. Para obter instruções sobre como criar categorias, consulte o [capítulo Configurações da revista](https://github.com/pkp/pkp-docs/blob/main/learning-ojs/en/journal-setup). Você pode adicionar o artigo a uma categoria editando seus metadados.

* Para a submissão do artigo, vá à aba **Publicação**
* Clique em **Edição**
* Na caixa **Categorias**, marque a categoria ou categorias às quais deseja adicionar o artigo
* Clique em **Salvar**.

![Issue subtab within Manuscripts Publication tab. Shows options to assign Issue, Section, Categories.](./assets/learning-ojs3.2-ed-prod-add-to-category.png)

### Extrair e salvar referências

Se desejar exibir as referências bibliográficas do artigo na página do artigo com DOIs vinculados e enviá-las para Crossref com o restante dos metadados do artigo, você pode usar o recurso “Extrair e salvar referências”. Este recurso só pode ser usado se você estiver usando o plugin DOI e o plugin Crossref para exportar seus metadados para o Crossref. O recurso armazenará cada referência no banco de dados como uma referência separada e adicionará o DOI à referência na página do artigo. Isso também tornará mais fácil a identificação e indexação das citações do artigo pelos serviços de indexação, como o Google Scholar.

A primeira coisa que você deve fazer é habilitar Referências como um campo de metadados de envio.

1. Vá a Configurações de fluxo de trabalho> Submissão > Metadados
2. Role para baixo até **Referências** e marque **Ativar metadados de referências**
3. Novas opções aparecerão abaixo e você pode selecionar uma das opções
  * não solicitar as Referências ao autor durante o processo de submissão - o campo Referências não estará disponível no formulário de submissão e, em vez disso, as Referências poderão ser adicionadas por um editor posteriormente a submissão
  * Eles podem pedir ao Editor de Layout para fazer alterações adicionais (usando as Discussões de Editoração) ou informar ao Editor que as provas estão prontas para publicação.
  * Exigir que o autor forneça as Referências no momento da submissão - o campo Referências estará disponível no formulário de submissão como item obrigatório aos autores no momento da submissão.
4. Clique em **Salvar** quando terminar

![Setting option to Eanble Reference metadata with additional options for authors during the time of submission.](./assets/learning-ojs3.2-ed-prod-enable-references.png)

Neste momento, se você acessar a aba **Publicação** de um registro de submissão, verá uma aba **Referências** abaixo. Um editor pode abri-la e copiar e colar as referências do artigo no campo. Além disso, se você marcou a segunda ou terceira opção acima, haverá um campo **Referências** quando um autor fizer uma submissão e o autor poderá adicionar suas referências a ela.

Cada referência deve estar em uma linha separada e você deve certificar-se de que o texto colado no campo não está formatado e não contém quebras de linha ou espaços extras. Remova quaisquer DOIs nas referências, se você planeja adicioná-los, posteriormente, com o plugin Crossref Reference Linking.

Depois de configurar o plugin e exportar os metadados do artigo para o Crossref, você pode inserir os DOIs do Crossref de volta nas referências:

Depois de exportar os metadados do artigo para Crossref, você pode inserir os DOIs para as referências do artigo do Crossref, se usar o plugin Crossref Reference Linking. As instruções sobre como usar o plugin estão disponíveis no [Guia de plugins do Crossref](https://docs.pkp.sfu.ca/crossref-ojs-manual/en/references).

No menu à esquerda, selecione Edições para gerenciar todas as edições da sua revista.

1. Clique em **Salvar**.
2. Vá à aba **Publicação** e **Referências**
3. Clique em **Verificar Crossref DOIs**
4. Alguns DOIs agora serão adicionados às referências.

## Preparar e adicionar arquivos de leitura de prova

{% include video.html id="opvVBWYnHho" provider="youtube" title="Video of Setting up a journal in OJS 3.3. Module 7: Issues"%}

Este vídeo da PKP School explica como criar, editar, publicar e gerenciar Edições. Para assistir a outros vídeos desta série, visite [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).

Quando você estiver pronto para publicar o artigo, deve criar uma edição para publicá-lo primeiro. Em seguida, agendará artigos para publicação na edição. Os artigos não serão publicados até que você publique o número como um todo. Esta seção explica como criar e editar edições.

**Edições anteriores**, lista todas as edições publicadas.

![Future Issues tab in Issues. Displays Vol 1 No 3 (2018).](./assets/learning-ojs3.1-jm-issues.png)

Para criar uma nova edição, use o link **Incluir edição** e preencha o formulário.

**Edições futuras** são todas as edições não publicadas. Você pode criar quantas quiser e agendar submissões para qualquer uma delas.

**Edições anteriores** são todas as edições já publicadas.

![Back Issue tab in Issues. Displays Vol 1 No 2 (2018) and Vol 1 No 1 (2018).](./assets/learning-ojs3.1-jm-issues-back.png)

Você também pode editar uma edição futura existente selecionando a seta azul à esquerda da entrada da edição na página Edições Futuras.

![learning-ojs3.1-jm-issues-edit.png](./assets/learning-ojs-3-issues-create.png)

Existem espaços para adicionar informações de volume, número, ano e título (por exemplo, Edição especial nº 1), bem como uma descrição, imagem de capa e URL personalizada. A imagem da capa e a descrição aparecerão na parte superior da página da edição em seu site, se você adicioná-las. Se tiver o volume, o número e o título marcados abaixo, será necessário preencher algo em cada campo.

Quando finalizar, clique em **Salvar**.

### Editar Edição

**Sumário**: Para uma nova edição, esta janela estará vazia, mas para as edições que tiveram submissões agendadas, elas serão listadas aqui.

![Vol 1 No 3 (2018) in Future Issues with blue arrow expanded to show additional options to Edit, Preview, Publish Issue, or Delete.](./assets/learning-ojs3.1-jm-issues-edit.png)

**Dados da Edição**: fornece acesso aos dados de volume, edição e número que você inseriu ao criar a edição pela primeira vez.

![Table of Contents for Vol 1 No 6 (2016): June 2016.](./assets/learning-ojs-3-issues-details.png)

**Identificadores**: use este espaço para adicionar um DOI para a edição, se a sua revista oferecer suporte a identificadores de nível de edição.

Clique na seta azul ao lado de cada submissão do Sumário para acessar o link direto da submissão.

Se você for a Configurações da Revista> Seções e editar uma seção, poderá configurar o modo como ela aparecerá na página da edição publicada, incluindo a exibição ou não do título da seção.

**Edição de Provas**: permite que você envie as provas da edição completa - por exemplo, um PDF contendo todos os artigos. Ele terá um link na página da edição.

Caso deseje alterar a ordem das seções por edição ou a ordem dos artigos em uma seção:

### Ordenar seções e artigos

Quando o artigo for publicado, as referências aparecerão na página do artigo e serão enviadas ao CrossRef.

Você também pode arrastar e soltar as seções para alterar a ordem de exibição de sua edição publicada.

Se quiser ver a aparência de seus artigos no contexto de uma edição antes de publicá-la, você pode usar o recurso de visualização da edição:

Se você deseja alterar a ordem das seções por edição ou a ordem dos artigos em uma seção:

* não solicite referências do autor durante a submissão - o campo Referências não estará no formulário de submissão e, em vez disso, as referências podem ser adicionadas por um editor
* peça ao autor para fornecer referências durante a submissão - o campo Referências estará no formulário de submissão e os autores podem, opcionalmente, adicionar suas referências a ele, ou um editor pode adicionar referências à submissão mais tarde
* exija que o autor forneça referências antes de aceitar sua submissão - o campo Referências estará no formulário de submissão e os autores deverão adicionar suas referências a ele
* Clique em **Concluído** quando terminar.

### Pré-visualizar Edição e Artigos

Se você quiser ver como seus artigos ficarão antes da publicação, clique no botão Visualizar na aba Publicação do registro de submissão. Os usuários com permissão para visualizar verão este botão da fase de Edição de texto.

![Publication tab of Manuscipts shows subtab and option to Preview and Schedule Issue and language toggles to enter metadata in Espanol and English.](./assets/learning-ojs-3.3-ed-production-publish-preview-article.png)

Para não enviar uma notificação de uma nova edição publicada, desmarque a caixa ao lado de “Enviar e-mail de notificação para todos os usuários registrados” antes de pressionar **OK**.

* Vá a **Edições** e abra a edição que deseja editar;
* Clique em **Ordenar**;
* A página de visualização da edição será aberta. Para visualizar um artigo, clique no título do artigo no sumário.

![learning-ojs-3.2-ed-production-reader-notify.png](./assets/learning-ojs-3.2-ed-production-publish-issue.png)

### Publicar Edição

Isso revelará um link **Editar**, que abrirá uma nova janela de informações.

### Notificar leitores

Você terá a opção de enviar uma notificação aos usuários sobre a nova edição.

Para não notificar os usuários sobre uma nova edição publicada, desmarque a caixa ao lado de “ Enviar e-mail de notificação para todos os usuários registrados” antes de clicar em **OK**.

![Option to notify readers upon issue publication.](./assets/learning-ojs-3.2-ed-production-reader-notify.png)

O conteúdo do anúncio é gerado automaticamente e não pode ser editado. Você também pode usar o recurso [Notícias](https://github.com/pkp/pkp-docs/blob/main/learning-ojs/en/settings-website.md#announcements) para enviar um anúncio de publicação com conteúdo personalizado.

### Aba de Publicação

Use o link **Despublicar edição** para remover a edição e todo o seu conteúdo da exibição pública. A edição será revertida para a aba Edições Futuras.

### Excluir Edição

Você pode usar o link **Excluir** para remover totalmente a edição. Não apenas a publicação da edição será cancelada, como também a estrutura organizacional e quaisquer metadados da edição serão removidos. Todos os artigos atribuídos serão revertidos para o status não publicado.

## Resposta do Autor

Neste momento em que você criou uma edição, pode adicionar o artigo a ela. Observe que o artigo não será publicado até que a edição seja publicada. Nesta etapa, você atribui o artigo a uma edição.

* Clique na seta azul ao lado da futura edição
* Clique em **Visualizar**
* Vá à aba **Publicação**;
* No campo **Edição**, selecione a edição em que deseja publicar o artigo
* A **seção** será preenchida automaticamente com base nos metadados da submissão, mas você pode alterá-la, se necessário
* Você pode selecionar uma **categoria**, se ainda não tiver feito isso (explicado acima)
* Se quiser que uma imagem apareça na página do artigo, carregue-a na **imagem da capa**
* Você pode adicionar **números de página**, que serão incluídos nos metadados e no sumário
* A **data de publicação** será definida automaticamente quando a edição for publicada. Não insira uma data de publicação, a menos que o artigo tenha sido publicado anteriormente em outro lugar e você precise retroceder
* Quando terminar, clique em **Salvar**.

![Issue subtab in Manuscript Publication tab showing all options and fields related to Issue - Issue, Section, Categories, Cover Image, Page Number and Date Published.](./assets/learning-ojs3.2-ed-prod-add-to-issue.png)

### Publicação Contínua

OJS é atualmente projetado para um modelo de publicação tradicional, em que os artigos são publicados em edições. No entanto, a publicação contínua é uma forma alternativa e popular de publicar pesquisas acadêmicas, na qual os artigos são publicados assim que estão prontos. Você pode usar um modelo de publicação contínua no OJS.

Você pode criar uma edição com um título como “Publicações Atuais”, publicá-la e adicionar artigos à medida que forem disponibilizados. Os artigos serão publicados imediatamente na página da edição atual do seu site.

O artigo deve ter sido atribuído a uma edição e passado pela etapa de Revisão para que se possa agendá-lo para publicação.

Se quiser avisar seus leitores quando cada novo artigo for publicado, você terá que criar um **Comunicado** individual, pois a mensagem de notificação automática de uma nova publicação só pode ser enviada quando uma nova edição é publicada. Consulte o [capítulo Configurações do site](https://github.com/pkp/pkp-docs/blob/main/learning-ojs/en/settings-website.md#announcements) para obter informações sobre os anúncios.

## Adicionar arquivos de leitura de prova

A próxima etapa é o agendamento do artigo para publicação. Embora o artigo não seja publicado até que a edição à qual está atribuída seja publicada, a etapa do Cronograma de Publicação é a etapa final para confirmar que o artigo está pronto para ser publicado.

Apenas um Editor de Periódicos pode agendar um artigo para publicação, não um Editor de Seção ou Editor Convidado.

Para agendar uma publicação individual, ela deve estar atribuída a uma edição e ter passado pelo estágio de revisão.

Para fazer isso, na aba **Publicação** do manuscrito, vá a **Edições**.

* Volte a **Submissões**
* Encontre e abra a submissão que deseja publicar
* Vá à aba **Publicação**> **Edição**

![Publication tab of Manuscripts shows subtab and option to Preview and Schedule Issue and language toggles to enter metadata in Francais (Canada) and English.](./assets/learning-ojs3.2-ed-prod-schedule-for-pub.png)

Uma mensagem aparecerá confirmando que você deseja agendar o artigo para publicação. Clique em **Publicar**.

### Cronograma para Publicações Individuais

Nas versões anteriores do OJS, um artigo era atribuído a uma edição e seria publicado no momento da publicação desta edição. No OJS 3.3, é possível definir uma data de publicação específica para cada publicação.

Se a data for definida como futura, a publicação deve ser publicada na data futura, quando a tarefa agendada for executada.

Em **Data de Publicação**, você pode inserir a data de publicação, se for diferente da data de publicação da edição. Se não, deixe em branco.

![Issue subtab with an Manuscripts Publication tab highlights the Date Published field.](./assets/learning-ojs-3.2-ed-production-schedule-individual.png)

Para agendar uma submissão para publicação, ela deve ser atribuída a uma edição e ter passado a etapa de Edição de Texto e Editoração.

Se o manuscrito agendado não estiver agendado para a edição, a data  até então prevista não deve mudar.

Se o manuscrito agendado não estiver agendado para a edição, a data até então prevista não deve mudar.

## Editar arquivos de leitura de prova

A capacidade de publicar versões de artigos é uma das principais novidades do OJS 3.3. Esse recurso oferece suporte à publicação de pré-impressão e à publicação de novas versões de artigos quando uma correção ou alteração significativa é feita. Com o recurso de controle de versão, você pode gerenciar diferentes versões de um artigo e indicar claramente qual é a mais atual.

Depois que um artigo é publicado, nem metadados nem provas podem ser editados. Quando uma revisão de um artigo publicado ou metadados é necessária, isso pode ser feito de duas maneiras:

![learning-ojs-3.2-ed-production-all-versions.png](./assets/learning-ojs-3.2-ed-production-versioning-ways.png)

**Opção 1: Despublicar e Republicar**

Cancelar a publicação de um artigo permite que você faça alterações sem criar uma nova versão. Após cancelar a publicação, você pode atualizar os metadados e/ou substituir o arquivo de leitura de prova e agendar o artigo para publicação novamente. Se programado para uma edição publicada, ele estará disponível imediatamente. Nenhuma notificação será enviada aos leitores, uma vez que a notificação é enviada quando uma edição é publicada, e não para um artigo individual.

**Opção 2: Criar nova versão**

Ao criar uma nova versão, você poderá fazer alterações nos metadados e/ou arquivos de leitura de prova. Certifique-se de clicar em **Salvar** no canto inferior direito para registrar as alterações.

Você pode acompanhar as atualizações de versão em **Todas as versões**. Cada versão é marcada por um número e data de publicação. A versão atual que está sendo atualizada é marcada por um número e também como **Não publicada**.

![Publication tab of manuscript showing a list of all versions available for this article. Article currently has 4 published version and 1 unpublished.](./assets/learning-ojs-3.2-ed-production-all-versions.png)

Assim que suas alterações forem concluídas, você pode publicar a nova versão clicando em **Publicar**, no canto superior direito. Se programado para uma edição publicada, ele estará disponível imediatamente. Nenhuma notificação será enviada aos leitores, pois a notificação é enviada quando uma edição é publicada, não quando se trata de um artigo individual.

A lista de versões anteriores e datas de atualização serão listadas na página do artigo publicado.

![List of dates for all versions for article that displays on the article abstract page on the front end.](./assets/learning-ojs-3.2-ed-production-published-versions.png)

Os leitores ainda poderão acessar as versões anteriores. Eles verão uma mensagem no artigo e nas páginas da prova, avisando-os de que se trata de uma versão desatualizada e apontando-lhes a versão mais recente.

Os serviços de indexação e repositórios que usam OAI para coletar metadados precisarão coletar os metadados do artigo novamente para atualizar para a nova versão.

![Exemplo de uma mensagem de versão desatualizada na página do artigo:](./assets/learning-ojs-3.2-ed-production-outdated-version.png)

É melhor verificar, junto a um determinado repositório ou índice, qual é o seu processo e o que eles exigem.

![Warning notification of outdated version on PDF viewer and prompt to read the most recent version.](./assets/learning-ojs-3.2-ed-production-outdated-pdf.png)

A URL do artigo sempre apontará para a versão mais recente, estando as versões anteriores disponíveis na mesma URL com a versão no final da URL (por exemplo, /versão/1234/).

### DOIs e indexação de versões

Quando um DOI for atribuído à versão original, ele não será alterado automaticamente. Metadados CrossRef previamente depositados também não serão atualizados automaticamente. Se os metadados do artigo foram alterados, recomendamos atualizar os metadados CrossRef no Plugin de Exportação CrossRef XML, depositando manualmente o artigo atualizado. Para obter instruções sobre como depositar manualmente um artigo, consulte o [CrossRef Plugin Guide - Manual Deposits do PKP](https://docs.pkp.sfu.ca/crossref-ojs-manual/en/config#manual-deposits).

Indexandores e repositórios que usam a OAI para a coletar os metadados, precisarão ser atualizados, coletando novamente os metadados do artigo para atualizar para a nova versão.

A nova versão será marcada corretamente para ser reconhecida e atualizada pelo índice do Google Acadêmico, mas o colhedor precisará visitar seu site novamente para encontrar a nova versão.

É recomendado verificar com o indexador ou repositório específico para saber qual é o seu processo de atualização que eles exigem.

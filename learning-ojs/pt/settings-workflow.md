---
book: learning-ojs
version: 3.3
title: Learning Open Journal Systems 3.3 - Workflow Settings
---

# Configurações do fluxo de trabalho

As definições do fluxo de trabalho permitem configurar várias partes do fluxo de trabalho editorial do periódico. Essa ação possui 5 abas principais.

## Submissão

Este vídeo do PKP School explica como configurar o processo de submissão no OJS. Para assistir a outros vídeos desta série, visite [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).

{% include video.html id="_I2-IpEWu9E" provider="youtube" title="Video of how to configure the submission process in OJS"%}

Utilize esta seção para configurar o processo de submissão.

### Desabilitar submissões

Um  gerente de revista poderá desabilitar as submissões para uma específica ou para a revista como um todo.

Depois que a configuração é habilitada, uma notificação é exibida indicando que as submissões foram desabilitadas. Quando esta configuração está ativa, os usuários não poderão mais realizar submissões à revista.

![OJS 3.3 disable submission menu.](./assets/learning-ojs3.3-workflow-disable-submissions.png)

![OJS 3.3 notice about the journal not accepting submissions.](./assets/learning-ojs3.3-workflow-disable-submissions-notification.png)

### Metadados

Esta seção determina quais os tipos de metadados serão coletados durante o processo de submissão, como palavras-chave e referências..

### Componentes

Este vídeo da PKP School explica como gerenciar Componentes no OJS. Para assistir a outros vídeos desta série, visite [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).

{% include video.html id="UkmvhHjP5V0" provider="youtube" title="Video of how to manage components in OJS"%}

Componentes são os tipos de arquivos que os autores podem enviar para o site. Normalmente, um arquivo será o texto do artigo e outros podem incluir transcrições de entrevistas, dados, imagens, etc.  Os componentes disponíveis para que o autor escolha ao fazer suas submissões estão listados aqui.

![OJS 3.3 article components menu.](./assets/learning-ojs3.2-jm-settings-workflow-comp.png)

Utilizando as setas abaixo dos componentes, você pode alterar a **Ordem** deles (como eles serão listados para o autor que os enviou), **incluir um Componente** (se algo de que você precisa não estiver incluído por padrão - por exemplo, Vídeo), ou **Restaurar Padrões** (se alguém fez muitas modificações e você apenas deseja redefinir tudo).

#### Editar Componente

Você também pode editar cada componente selecionando a seta azul à esquerda do nome do componente. Isso revelará a opção de editar ou excluir o componente.

![OJS 3.3 component editing menu.](./assets/learning-ojs3.3-jm-settings-workflow-comp-edit.png)

- **Nome**: é o nome do componente, conforme apresentado ao autor.

- **Tipo de arquivo**: escolha como os arquivos associados a este componente serão tratados e exibidos. Tudo o que estiver marcado como arquivo dependente não será publicado.

- **Metadados do arquivo**: selecione o tipo de metadados que esses arquivos podem receber. O documento deve ser selecionado para os arquivos principais da publicação, como o PDF para download, para que esses arquivos considerem seus metadados da publicação. Caso contrário, escolha “Conteúdo Suplementar” para a maioria dos tipos de arquivo. A “Obra” é apropriada para arquivos que requerem metadados distintos de crédito, legenda e licenciamento.

- **Chave**: símbolo curto opcional para identificar o componente.

### Lista de verificação

Na Lista de Verificação de Preparação da Submissão, os Autores devem marcar se concordam com cada item desta lista. Use o link _Order_ para alterar a ordem dos itens, use o link _Add Item_ para criar um novo item e use a seta azul à esquerda do nome do item para _Edit_ um item existente.

![OJS 3.3 submission checklist editing menu.](./assets/learning-ojs-3-settings-workflow-settings-components-edit-item-edit.png)

### Diretrizes do autor

Utilize este campo para acrescentar informações para os seus autores que serão úteis durante o processo de submissão. Esta informação será apresentada no website da revista.

- Diretrizes para autores: as diretrizes recomendadas incluem os tipos de arquivo necessários para o documento de submissão, o formato de citação preferida ou quaisquer elementos que estejam presentes na submissão.
- Nota de direitos autorais: este é o acordo de direitos autorais entre o autor e a revista, e o autor deve concordar com esses termos no momento da submissão para efetivar o envio de seu manuscrito.

## Avaliação

Este vídeo do PKP School demonstra como configurar o processo de Revisão no OJS. Para assistir a outros vídeos desta série, visite [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).

{% include video.html id="1adbIbQM6E0" provider="youtube" title="Video of how to configure the Review process in OJS"%}

Esta aba permite configurar o processo de Avaliação do seu periódico.

![OJS 3.3 review configuration editing menu.](./assets/learning-ojs3.1-jm-settings-workflow-review.png)

### Configuração

**Modo de Avaliação padrão:** selecione se o seu periódico manterá o avaliador/anônimo e autor/anônimo (duplo-cega), o avaliador anônimo e o autor divulgado (cega) ou processo de Avaliação aberta com avaliador/divulgado e autor/divulgado (abrir).

**Restringir acesso a arquivos:** marque esta opção se desejar que o avaliador responda à solicitação de avaliação antes de acessar os arquivos submetidos.

**Habilitar acesso 1-clique**: ative (padrão) a primeira opção para fornecer aos avaliadores acesso com um clique à Avaliação, evitando a necessidade de ir ao site, fazer login e localizar o submissão. Por motivos de segurança, esta opção não possibilita que os editores modifiquem os endereços de e-mail ou adicionem CCs ou BCCs antes de enviar convites aos avaliadores.

**Prazos de Resposta Padrão:** indicam quanto tempo os avaliadores têm para decidir aceitar ou utilizar uma solicitação de Avaliação do editor e quanto tempo eles têm para realizar uma recomendação. These dates are calculated from the date the review is sent.

**Lembretes de e-mail automatizados**: os revisores serão notificados automaticamente quando forem atribuídos a uma revisão; no entanto, você pode habilitar ou desabilitar emails de lembrete para revisores. Use o menu suspenso para selecionar o número de dias ou "Nunca lembrar" em "Enviar um lembrete se um revisor não tiver respondido a uma solicitação de revisão dentro do seguinte tempo (dias) após a data de vencimento da resposta" para definir o número de dias que pode passar após a data de vencimento antes que os revisores sejam lembrados de aceitar ou rejeitar uma solicitação de revisão.

Use o menu suspenso para selecionar o número de dias ou "Nunca lembrar" em "Enviar um lembrete se um revisor não tiver respondido a uma solicitação de revisão dentro do seguinte tempo (dias) após a data de vencimento da resposta" para definir o número de dias que pode passar após a data de vencimento antes que os revisores sejam lembrados de fazer uma recomendação para um envio.

Clique no botão **Salvar** para registrar suas alterações.

![OJS 3.3 notification of author submission screen.](./assets/learning-ojs3.1-jm-settings-review-reminders.png)

Observe que algumas configurações do sistema devem ser definidas pelo Administrador do Site para enviar e-mail. Consulte o [Administrator's Guide](https://docs.pkp.sfu.ca/admin-guide/en/email) para obter mais informações.

### Orientações ao avaliador

**Diretrizes para Avaliação:** disponibilize aos seus avaliadores critérios para julgar a adequação de uma submissão para publicação na revista, que pode incluir instruções para preparar uma Avaliação útil e eficaz.

**Conflito de interesses:** adicione sua declaração de política de divulgação de conflitos de interesse neste campo.

### Formulários de Avaliação

Os formulários de avaliação fornecem aos avaliadores um conjunto de perguntas a serem respondidas. Isso pode auxiliar os gestores de periódicos a direcionar seus comentários direto para os avaliadores.

**Criar formulário de Avaliação**: clique no link Criar formulário de Avaliação para iniciar um novo formulário.

![OJS 3.3 new review form creation menu.](./assets/learning-ojs-3-settings-workflow-settings-review-create.png)

A descrição e as instruções fornecem informações sobre o formulário e quando utilizá-lo, para gerentes e editores da revista. Este conteúdo não está incluído no formulário que os avaliadores veem. Você pode adicionar instruções e diretrizes para avaliadores em Diretrizes de Avaliação (abaixo).

De volta à página Formulários para Avaliação, selecione a seta azul à esquerda do nome do formulário para revelar a opção ”editar”.

![OJS 3.3 review forms with edit menu expanded.](./assets/learning-ojs-3-settings-workflow-settings-review-edit1.png)

Clique em “editar” e preencha o formulário.

![OJS 3.3 review form edit menu and response options.](./assets/learning-ojs-3-settings-workflow-settings-review-create-items.png)

Os **itens do formulário** são perguntas do formulário.

Você pode escolher se deseja tornar a pergunta obrigatória para os avaliadores e incluir a mensagem ao autor.

Você pode escolher o tipo de resposta, incluindo:

* Uma caixa de texto de uma única palavra;
* Uma caixa de texto de uma única linha;
* Uma caixa de texto estendida (para respostas mais longas);
* Caixas de seleção - Checkboxes (permite que o avaliador selecione várias respostas possíveis);
* Botões rádio (permite que o avaliador selecione  apenas uma resposta possível);
* Menu suspenso (permite que o avaliador selecione apenas uma resposta possível).

**Opções de resposta** são as seleções que você disponibiliza para as caixas de seleção, botões rádio ou menus suspensos. Um bom exemplo de resposta de caixa de seleção é a[Likert scale](https://en.wikipedia.org/wiki/Likert_scale), em que o avaliador escolhe apenas uma opção: por exemplo, bom, neutro ou ruim.

Lembre-se de clicar no botão **Salvar** para registrar suas alterações.

Utilize a guia **Pré-visualizar** para testar o formulário.

![OJS 3.3 review form preview and response options.](./assets/learning-ojs-3-settings-workflow-settings-review-preview.png)

Depois de enviar o formulário a um avaliador, você não poderá mais editá-lo, pois isso mudaria o registro de revisões existentes utilizando esse formulário. Se deseja alterar informações no Formulário de Avaliação nesse ponto, você pode copiar o formulário existente e criar uma nova versão atualizada.

**Avaliador anônimo/autor divulgado:** Marque esta caixa para exibir um link com instruções sobre como garantir que todos os arquivos enviados sejam anônimos.

![OJS 3.3 checkbox to display submission anonymization instructions.](./assets/learning-ojs-3-settings-workflow-settings-review2.png)

## Biblioteca da revista

Este vídeo da PKP School explica como usar a Biblioteca do Editor no OJS. Para assistir a outros vídeos desta série, visite [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).

{% include video.html id="QhOJjxW0_Rw" provider="youtube" title="Video of the Publisher Library in OJS"%}

O  gerente de revista e os editores podem realizar upload de documentos que gostariam de compartilhar com outros usuários na Biblioteca da Revista. Qualquer documento adicionado nesta área ficará visível na Biblioteca de Documentos do Usuário na Biblioteca de Submissão do seu manuscrito.

Você também pode fazer upload de um arquivo que gostaria de ter acesso público por meio de um URL, ao qual você pode criar um link de outras partes do seu site, incluindo as diretrizes do autor, lista de verificação de submissão ou uma página estática.

Os formulários sugeridos que podem ser carregados nesta área podem incluir o formulário de aprovação da composição final, a página de capa do material suplementar e outros formulários relacionados ao fluxo de trabalho de seus periódicos.

![OJS 3.3 publisher library menu.](./assets/learning-ojs3.1-jm-settings-workflow-publib1.png)

Para adicionar um arquivo aqui, clique em “incluir arquivo” no canto superior direito da caixa Biblioteca da Revista.

![OJS 3.3 add a file to the publisher library.](./assets/learning-ojs3.1-jm-settings-workflow-publib2.png)

**Nome:** título do documento que você deseja que apareça para o usuário

**Tipo:** selecione Marketing, Permissão, Relatórios ou Outros.

**Acesso público:** habilitar isso permitirá que os usuários baixem este arquivo utilizando, se houver, o hiperlink em outras partes do site da sua revista.

## E-mails

Este vídeo do PKP School explica como configurar emails no OJS. Para assistir a outros vídeos desta série, visite [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).

{% include video.html id="ZK-Nb7wfHew" provider="youtube" title="Video of how to configure emails in OJS"%}

### Configuração de e-mails

Esta seção permite configurar os e-mails que serão enviados do sistema.

![OJS 3.3 emails menu.](./assets/learning-ojs3.1-jm-settings-workflow-emails.png)

**Assinatura:** as informações deste campo serão adicionadas ao final de todos os e-mails enviados pelo sistema.

**Endereço de retorno de e-mail:** um aviso será enviado a este endereço se o e-mail enviado  não efetivar entrega, como quando o endereço de e-mail de destino não for mais válido.

### Modelos de e-mail

O OJS facilita a comunicação do fluxo de trabalho por meio do uso de mensagens de modelos de e-mail. Observe que algumas configurações são necessárias para enviar e-mail. Consulte o [Administrator's Guide](https://docs.pkp.sfu.ca/admin-guide/en/email) para obter mais informações.

Você pode visualizar e modificar os modelos de e-mail pré-estabelecidos. Você visualizará uma lista na guia “Modelos de E-mail”. O título e o resumo de cada um são exibidos na lista.

![OJS 3.3 emails templates.](./assets/learning-ojs3.3-jm-settings-workflow-email-templates.png)

Se clicar na seta ao lado de cada modelo você acessará o assunto e o conteúdo da mensagem e quem é o remetente e destinatário padrão da mensagem.

![OJS 3.3 editorial assignment template editing screen.](./assets/learning-ojs3.3-jm-settings-workflow-email-template-view.png)

Você poderá pesquisar um modelo de e-mail por palavras-chave, digitando algo na caixa **Buscar**.

Você pode clicar em **Filtros** para revelar opções para filtragem dos modelos por status, enviado de, enviado e em qual estágio do fluxo de trabalho ele é utilizado. Esses filtros podem ajudar você a encontrar os modelos que deseja editar.

![OJS 3.3 email template filtering options.](./assets/learning-ojs3.3-jm-settings-workflow-email-template-filters.png)

Consulte [as descrições do modelo](#template-descriptions) no final deste capítulo para obter uma tabela de todos os modelos de e-mail e seu remetente, destinatário e estágio do fluxo de trabalho.

#### Editar modelos de e-mail

Ao editar um modelo de e-mail, você altera o que ele dirá toda vez que for utilizado.  Para e-mails que são enviados voluntariamente, como uma mensagem enviada a um avaliador solicitando a Avaliação de uma submissão, você também pode alterar o conteúdo da mensagem no momento de enviá-la. Isso altera o conteúdo apenas dessa mensagem.

Para editar um modelo:

1. Vá para Configurações de fluxo de trabalho> E-mails> Modelos de e-mail;
2. Clique na seta azul ao lado do nome do modelo para revelar os links abaixo dele;
3. Clique em Editar;
4. Faça alterações no assunto e no corpo do texto. Tenha cuidado para não excluir nenhuma tag como “{$ authorName} :,” que insere automaticamente o conteúdo de um submissão;
5. Quando terminar de editar, clique em Salvar.

#### Desativar modelos de e-mail

Todos os modelos são habilitados por padrão quando você instala o OJS, mas você pode desabilitar alguns modelos clicando no botão Desabilitar. A maioria dos modelos que podem ser desativados são mensagens enviadas automaticamente pelo OJS. Desativar o modelo significa que a notificação automática não será enviada.

Para desativar um modelo:

1. Clique em Configurações> Fluxo de Trabalho> E-mails> Modelos de E-mail;
2. Clique na seta azul ao lado do nome do modelo para revelar as opções abaixo dele;
3. Clique em Desativar (se o botão não estiver disponível, este modelo não pode ser desativado).

#### Restaurar os modelos de e-mail padrão

Se você editou modelos de e-mail, mas deseja reverter as edições e restaurá-los ao conteúdo padrão, pode redefini-los:

1. Clique em Configurações> Fluxo de Trabalho> E-mails> Modelos de E-mail;
2. Clique em Redefinir Tudo;
3. Quando a mensagem de confirmação for exibida, clique em OK.

#### Adicionar modelo de email

Clique no botão **Adicionar Modelo de email** para criar um modelo de e-mail personalizado que você pode utilizar ao notificar um usuário ou adicionar um participante a uma submissão. Observe que nas versões anteriores ao OJS 3.1.2, você pode criar modelos personalizados, mas eles não estarão disponíveis para uso em qualquer estágio do fluxo de trabalho.

#### Filtros

Clique aqui para filtrar modelos de e-mail com base no seguinte: Habilitado, Desabilitado e Modelo Customizado. Você também pode filtrar modelos de e-mail com base em quem foi enviado e para quem é enviado.

#### Adicionar anexo de e-mail

Não há opção de anexo de e-mail direto no OJS 3, mas você pode fazer upload e compartilhar arquivos públicos por meio da Biblioteca da Revista:

1. Em Configurações > Fluxo de trabalho> Biblioteca da Revista > Incluir arquivo, carregue seu documento e marque a caixa de seleção "Acesso público";
2. Clique em “OK” para a URL ser gerada;
3. Insira o URL em seu e-mail.

Você também pode optar por modificar um modelo de e-mail existente com esta URL ou compartilhá-lo publicamente no site da revista.

#### Descrições do modelo

O OJS 3.2 agora fornece uma descrição para cada modelo, delineando o remetente, o destinatário e o estágio do fluxo de trabalho.

A tabela abaixo fornece uma visão geral dos modelos de e-mail preparados no OJS 3.2. Observe que “Editor” se refere a qualquer tipo de editor (editor da revista, editor de seção ou editor de texto). As seguintes colunas aparecem na tabela:

- **Modelo**: o nome do modelo de e-mail.
- **Descrição**: uma descrição do modelo.
- **Remetente**: o nome ou assinatura que aparecerá no final da mensagem. Em alguns casos, o sistema envia a mensagem automaticamente, mas o remetente aparece como um usuário específico.
- **Destinatário**: para quem o e-mail será enviado.
- **Estágio do fluxo de trabalho**: o estágio do fluxo de trabalho em que este modelo é usado

| Modelo                                                                                       | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Remetente                              | Destinatário                       | Fluxo de Trabalho                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ---------------------------------- | ---------------------------------- |
| Notícia - ANNOUNCEMENT                                                                       | Este e-mail é enviado para notificar os usuários sobre uma notícia publicada pela revista.                                                                                                                                                                                                                                                                                                                                                                                                               | Sistema                                | Usuários registrados               |                                    |
| Edição de citação - CITATION_EDITOR_AUTHOR_QUERY                                           | Este e-mail permite que os avaliadores solicitem informações adicionais sobre as referências dos autores.                                                                                                                                                                                                                                                                                                                                                                                                | Editor de cópia                        | Autor                              | Edição de texto                    |
| Solicitação de edição de texto - COPYEDIT_REQUEST                                            | Este e-mail é enviado por um Editor de Seção ao Editor de Texto da submissão para solicitar que ele inicie o processo de editoração. Ele fornece informações sobre a submissão e como acessá-lo.                                                                                                                                                                                                                                                                                                         | Editor de Seção                        | Editor de cópia                    | Edição de texto                    |
| Tarefa Editorial - EDITOR_ASSIGN                                                             | Este e-mail notifica um Editor de Seção que o Editor atribuiu a eles a tarefa de supervisionar uma submissão por meio do processo de edição. Fornece informações sobre a submissão e como acessar o site da revista.                                                                                                                                                                                                                                                                                     | Editor                                 | Editor de Seção                    | Submissão                          |
| Decisão Editorial - EDITOR_DECISION_ACCEPT                                                 | Este e-mail do Editor ou Editor de Seção para um Autor visa notificá-lo sobre a decisão final de “aceitar submissão” em relação à sua submissão.                                                                                                                                                                                                                                                                                                                                                         | Editor/Editor de Seção                 | Autor                              | Avaliação                          |
| Decisão Editorial - EDITOR_DECISION_DECLINE                                                | Este e-mail do Editor ou Editor de Seção para um Autor visa notificá-lo de uma decisão final de “recusa” em relação à sua submissão.                                                                                                                                                                                                                                                                                                                                                                     | Editor/Editor de Seção                 | Autor                              | Avaliação                          |
| Decisão Editorial - EDITOR_DECISION_INITIAL_DECLINE                                        | Este e-mail é enviado ao autor se o editor utilizar sua submissão inicialmente, antes da fase de Avaliação.                                                                                                                                                                                                                                                                                                                                                                                              | Editor/Editor de Seção                 | Autor                              | Submissão                          |
| Decisão Editorial - EDITOR_DECISION_RESUBMIT                                               | Este e-mail do Editor ou Editor de Seção para um Autor notifica-lo sobre uma decisão final de “reenvio” em relação à sua submissão.                                                                                                                                                                                                                                                                                                                                                                      | Editor/Editor de Seção                 | Autor                              | Avaliação                          |
| Decisão Editorial - EDITOR_DECISION_REVISIONS                                              | Este e-mail do Editor ou Editor de Seção para um Autor notifica-o sobre uma decisão final de “revisões necessárias” sobre sua submissão.                                                                                                                                                                                                                                                                                                                                                                 | Editor/Editor de Seção                 | Autor                              | Avaliação                          |
| Decisão Editorial - EDITOR_DECISION_SEND_TO_EXTERNAL                                     | Este e-mail do Editor ou Editor de Seção para um Autor notifica-o de que sua submissão está sendo enviada para uma Avaliação externa.                                                                                                                                                                                                                                                                                                                                                                    | Editor/Editor de Seção                 | Autor                              | Avaliação                          |
| Decisão Editorial - EDITOR_DECISION_SEND_TO_PRODUCTION                                   | Este e-mail do Editor ou Editor de Seção para um Autor notifica-o de que sua submissão está sendo enviada para editoração.                                                                                                                                                                                                                                                                                                                                                                               | Editor/Editor de Seção                 | Autor                              | Editoração                         |
| Recomendação do Editor - EDITOR_RECOMMENDATION                                               | Este e-mail do Editor ou Editor de Seção que o recomendou para os Editores ou Editores de Seção que tomaram as decisões os notifica sobre uma recomendação final sobre a submissão.                                                                                                                                                                                                                                                                                                                      | Editor de recomendação/Editor de Seção | Editor/Editor de Seção             | Avaliação                          |
| Artigo interessante para sua leitura - EMAIL_LINK                                            | Este modelo de e-mail fornece a um leitor registrado a oportunidade de enviar informações sobre um artigo para alguém que possa estar interessado. Ele está disponível nas Ferramentas de Leitura e deve ser habilitado pelo Editor Gerente na página de Administração das Ferramentas de Leitura.                                                                                                                                                                                                       | Gerente de revista                     | Leitor                             |                                    |
| Composições concluídas - LAYOUT_COMPLETE                                                     | Este e-mail do Editor de Layout para o Editor de Seção os notifica de que o processo de layout foi concluído.                                                                                                                                                                                                                                                                                                                                                                                            | Editor de Layout                       | Editor                             | Editoração                         |
| Request Galleys - LAYOUT_REQUEST                                                             | Este e-mail do Editor de Seção para o Editor de Layout os notifica de que eles receberam a tarefa de realizar a edição do layout em um submissão. Ele fornece informações sobre a submissão e como acessá-lo.                                                                                                                                                                                                                                                                                            | Editor                                 | Editoração                         | Production                         |
| Solicitação para incluir a revista {$contextName} em seu arquivo - LOCKSS_EXISTING_ARCHIVE | Este e-mail solicita que o detentor de um arquivo LOCKSS considere a inclusão deste diário em seu arquivo. Ele fornece a URL para o Manifesto do Editor LOCKSS do periódico.                                                                                                                                                                                                                                                                                                                             | LOCKSS                                 | Gerente de revista                 | Pós-produção / indexação           |
| Solicitação de inclusão da revista {$contextName} em seu arquivo - LOCKSS_NEW_ARCHIVE      | Este e-mail incentiva o destinatário a participar da iniciativa LOCKSS e a incluir este periódico no arquivo. Ele fornece informações sobre a iniciativa LOCKSS e maneiras de se envolver.                                                                                                                                                                                                                                                                                                               | LOCKSS                                 | Gerente de revista                 | Pós-produção / indexação           |
| Erro de indexação de artigo - LUCENE_ARTICLE_INDEXING_ERROR_NOTIFICATION                 | Este modelo de e-mail é utilizado para notificar o contato técnico de um periódico que ocorreu um erro durante a indexação do artigo.                                                                                                                                                                                                                                                                                                                                                                    | Plugin de pesquisa Lucene              | Gerente de revista                 | Pós-produção / indexação           |
| Erro de indexação de periódicos - LUCENE_JOURNAL_INDEXING_ERROR_NOTIFICATION             | Este modelo de e-mail é utilizado para notificar o contato técnico de um periódico que ocorreu um erro durante a indexação do periódico.                                                                                                                                                                                                                                                                                                                                                                 | Plugin de pesquisa Lucene              | Gerente de revista                 | Pós-produção / indexação           |
| Erro de serviço de pesquisa de diário - LUCENE_SEARCH_SERVICE_ERROR_NOTIFICATION         | Este modelo de e-mail é utilizado para notificar o contato técnico de um periódico que ocorreu um erro ao tentar acessar a pesquisa do Solr Search.                                                                                                                                                                                                                                                                                                                                                      | Plugin de pesquisa Lucene              | Gerente de revista                 | Pós-produção / indexação           |
| Notificação de pagamento manual- MANUAL_PAYMENT_NOTIFICATION                               | Este modelo de e-mail é usado para notificar um contato do gerente de revista que um pagamento manual foi solicitado.                                                                                                                                                                                                                                                                                                                                                                                    | Autor                                  | Sistema                            |                                    |
| Nova notificação de {$siteTitle} - NOTIFICATION                                              | O e-mail é enviado para usuários registrados que optaram por receber este tipo de notificação por e-mail. Isso inclui notificações de notícias e novos problemas publicados.                                                                                                                                                                                                                                                                                                                             | Sistema                                | Usuário Registrado                 |                                    |
| Uma mensagem sobre {$ contextName} - NOTIFICATION_CENTER_DEFAULT                           | A mensagem padrão (em branco) usada no Notification Center Message Listbuilder.                                                                                                                                                                                                                                                                                                                                                                                                                          |                                        |                                    |                                    |
| Bem-vindo à lista de discussão de {$ siteTitle}! - NOTIFICATION_MAILLIST_WELCOME           | Este e-mail é enviado a um usuário não registrado que acabou de se registrar na lista de e-mails de notificação.                                                                                                                                                                                                                                                                                                                                                                                         | Sistema                                | Usuário Registrado                 |                                    |
| Nova edição de Acesso Livre - OPEN_ACCESS_NOTIFY                                           | Este e-mail é enviado para leitores registados que solicitam o recebimento de um e-mail de notificação quando uma edição se torna de acesso aberto.                                                                                                                                                                                                                                                                                                                                                      | Avaliador Registrado                   | Sistema                            | Publicar                           |
| ORCID Submissão - ORCID_COLLECT_Autor_ID                                                   | Este modelo de e-mail é usado para coletar os IDs ORCID dos autores.                                                                                                                                                                                                                                                                                                                                                                                                                                     | Gerente / sistema de periódicos        | Autor                              | Submissão                          |
| Requesting ORCID record access - ORCID_REQUEST_Autor_AUTORIZATION                          | Este modelo de e-mail é usado para solicitar acesso ao registro ORCID dos autores.                                                                                                                                                                                                                                                                                                                                                                                                                       | Gerente / sistema de periódicos        | Autor                              | Submissão                          |
| Senha atualizada - PASSWORD_RESET                                                            | Este e-mail é enviado a um usuário registrado quando ele redefine sua senha com sucesso seguindo o processo descrito no e-mail PASSWORD_RESET_CONFIRM.                                                                                                                                                                                                                                                                                                                                                 | Sistema                                | Usuário Registrado                 |                                    |
| Confirmação de redefinição de senha - PASSWORD_RESET_CONFIRM                               | Este e-mail é enviado a um usuário cadastrado quando este indica que esqueceu sua senha ou não consegue fazer o login. Ele fornece uma URL que eles podem acessar para redefinir a senha.                                                                                                                                                                                                                                                                                                                | Sistema                                | Usuário Registrado                 |                                    |
| Nova Edição Publicada - PUBLISH_NOTIFY                                                       | Este e-mail ainda não é utilizado no OJS 3.                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Sistema                                | Usuários registrados               | Avaliador Registrado               |
| Cadastro como avaliador na revista {$contextName} - REVIEWER_REGISTER                        | Este e-mail é enviado a um avaliador recém-registrado para dar as boas-vindas ao sistema e fornecer um registro de seu nome de usuário e senha.                                                                                                                                                                                                                                                                                                                                                          | Sistema                                | Avaliador                          |                                    |
| Agradecimento pela avaliação - REVIEW_ACK                                                    | Este e-mail é enviado por um Editor de Seção para confirmar o recebimento de uma Avaliação concluída e agradecer ao avaliador por suas contribuições.                                                                                                                                                                                                                                                                                                                                                    | Editor de Seção/Editor                 | Avaliador                          | Avaliação                          |
| Cancelamento de solicitação de avaliação - REVIEW_CANCEL                                     | Este e-mail é enviado pelo Editor de Seção a um avaliador que tem uma Avaliação de submissão em andamento para notificá-lo de que a Avaliação foi cancelada.                                                                                                                                                                                                                                                                                                                                             | Avaliador                              | Editor/Editor de Seção             | Avaliação                          |
| Disponível para realizar avaliação - REVIEW_CONFIRM                                          | Este e-mail é enviado por um avaliador ao Editor de Seção em resposta a uma solicitação de Avaliação para notificar o Editor de Seção de que a solicitação de Avaliação foi aceita e será concluída na data especificada.                                                                                                                                                                                                                                                                                | Avaliador                              | Editor/Editor de Seção             | Avaliação                          |
| Indisponível para realizar avaliação - REVIEW_DECLINE                                        | Este e-mail é enviado por um avaliador ao Editor de Seção em resposta a uma solicitação de Avaliação para notificar o Editor de Seção de que a solicitação de Avaliação foi recusada.                                                                                                                                                                                                                                                                                                                    | Avaliador                              | Editor/Editor de Seção             | Avaliação                          |
| Pedido de avaliação restabelecido - REVIEW_REINSTATE                                         | Este e-mail é enviado pelo Editor de Seção a um avaliador que tem uma Avaliação de submissão em andamento para notificá-lo de que uma Avaliação cancelada foi restabelecida.                                                                                                                                                                                                                                                                                                                             | Editor/Editor de Seção                 | Avaliador                          | Avaliação                          |
| Lembrete de solicitação de avaliação - REVIEW_REMIND                                         | Este e-mail é enviado por um Editor de Seção para lembrar um avaliador de que sua Avaliação é devida.                                                                                                                                                                                                                                                                                                                                                                                                    | Editor/Editor de Seção                 | Avaliador                          | Avaliação                          |
| Lembrete automático de solicitação de avaliação- REVIEW_REMIND_AUTO                        | Este e-mail é enviado automaticamente quando a data de vencimento de um avaliador expira (consulte Opções de Avaliação em Configurações> Fluxo de trabalho> Avaliação) e o acesso do avaliador com um clique está desabilitado. As tarefas agendadas devem ser habilitadas e configuradas (consulte o arquivo de configuração do site).                                                                                                                                                                  | Sistema                                | Avaliador                          | Avaliação                          |
| Lembrete automático de solicitação de avaliação - REVIEW_REMIND_AUTO_ONECLICK              | Este e-mail é enviado automaticamente quando a data de vencimento de um avaliador expira (consulte Opções de Avaliação em Configurações> Fluxo de trabalho> Avaliação) e o acesso de avaliador com um clique é habilitado. As tarefas agendadas devem ser habilitadas e configuradas (consulte o arquivo de configuração do site).                                                                                                                                                                       | Sistema                                | Avaliador                          | Avaliação                          |
| Lembrete de solicitação de avaliação - REVIEW_REMIND_ONECLICK                              | Este e-mail é enviado por um Editor de Seção para lembrar um avaliador de que sua Avaliação é devida.                                                                                                                                                                                                                                                                                                                                                                                                    | Editor/Editor de Seção                 | Avaliador                          | Avaliação                          |
| A revista {$contextName} solicita avaliação de artigo - REVIEW_REQUEST                       | Este e-mail do Editor de Seção para um avaliador solicita que este aceite ou recuse a tarefa de avaliar uma submissão. Ele fornece informações sobre a submissão, como título e resumo, uma data de vencimento da Avaliação e como acessar a submissão em si. Esta mensagem é usada quando o processo de Avaliação padrão é selecionado em Configurações> Fluxo de trabalho> Avaliação. (Caso contrário, consulte REVIEW_REQUEST_ATTACHED.)                                                            | Editor/Editor de Seção                 | Avaliador                          | Avaliação                          |
| A revista {$contextName} solicita avaliação de artigo - REVIEW_REQUEST_ATTACHED            | Este e-mail é enviado pelo Editor de Seção a um avaliador para solicitar que ele aceite ou recuse a tarefa de avaliar uma submissão. Inclui a submissão como um anexo. Esta mensagem é usada quando o processo de Avaliação de anexo de e-mail é selecionado em Configurações> Fluxo de trabalho> Avaliação. (Caso contrário, consulte REVIEW_REQUEST.)                                                                                                                                                  | Editor de Layout                       | Avaliador                          | Review                             |
| Editor/Editor de Seção                                                                       | Avaliação    Este e-mail é enviado pelo Editor de Seção a um avaliador para solicitar que ele aceite ou recuse a tarefa de avaliar uma submissão para uma segunda rodada ou mais de Avaliação. Inclui a submissão como um anexo. Esta mensagem é usada quando o processo de Avaliação de anexo de e-mail é selecionado em Configurações> Fluxo de trabalho> Avaliação. (Caso contrário, consulte REVIEW_REQUEST_SUBSEQUENT.)                                                                           | Editor/Section Editor                  | Editor/Editor de Seção             | Avaliador              | Avaliação |
| Solicitação de Avaliação de artigo - REVIEW_REQUEST_ONECLICK                               | Este e-mail do Editor de Seção para um avaliador solicita que este aceite ou recuse a tarefa de avaliar uma submissão. Ele fornece informações sobre a submissão, como título e resumo, uma data de vencimento da Avaliação e como acessar a submissão em si. Esta mensagem é usada quando o processo de Avaliação padrão é selecionado em Configurações> Fluxo de trabalho> Avaliação e o acesso de avaliador com um clique está habilitado..                                                           | Editor/Editor de Seção                 | Avaliador                          |                                    |
| Solicitação de Avaliação de artigo - REVIEW_REQUEST_ONECLICK_SUBSEQUENT                    | Este e-mail do Editor de Seção para um avaliador solicita que ele aceite ou recuse a tarefa de avaliar uma submissão para uma segunda rodada ou mais de Avaliação. Ele fornece informações sobre a submissão, como título e resumo, uma data de vencimento da Avaliação e como acessar a submissão em si. Esta mensagem é utilizada quando o processo de Avaliação padrão é selecionado em Configurações> Fluxo de trabalho> Avaliação e o acesso de avaliador com um clique está habilitado.            | Editor/Editor de Seção                 | Avaliador                          | Avaliação                          |
| Solicitação de Avaliação de artigo - REVIEW_REQUEST_REMIND_AUTO                            | Este e-mail é enviado automaticamente quando a data de vencimento da confirmação de um avaliador expira (consulte Opções de Avaliação em Configurações> Fluxo de trabalho> Avaliação) e o acesso do avaliador com um clique é desabilitado. As tarefas agendadas devem ser habilitadas e configuradas (consulte o arquivo de configuração do site).                                                                                                                                                      | Sistema                                | Avaliador                          | Avaliação                          |
| Solicitação de Avaliação de artigo - REVIEW_REQUEST_REMIND_AUTO_ONECLICK                 | Este e-mail é enviado automaticamente quando a data de vencimento da confirmação de um avaliador expira (consulte Opções de Avaliação em Configurações> Fluxo de trabalho> Avaliação) e o acesso de avaliador com um clique é habilitado. As tarefas agendadas devem ser habilitadas e configuradas (consulte o arquivo de configuração do site).                                                                                                                                                        | Sistema                                | Avaliador                          | Avaliação                          |
| Solicitação de Avaliação de artigo - REVIEW_REQUEST_SUBSEQUENT                             | Este e-mail do Editor de Seção para um avaliador solicita que ele aceite ou recuse a tarefa de avaliar uma submissão para uma segunda rodada ou mais de uma avaliação. Ele fornece informações sobre a submissão, como título e resumo, uma data de vencimento da Avaliação e como acessar a submissão em si. Esta mensagem é usada quando o processo de Avaliação padrão é selecionado em Configurações> Fluxo de trabalho> Avaliação. (Caso contrário, consulte REVIEW_REQUEST_ATTACHED_SUBSEQUENT.) | Editor/Editor de Seção                 | Avaliador                          | Avaliação                          |
| Envio de versão atualizada - REVISED_VERSION_NOTIFY                                        | Este e-mail é enviado automaticamente ao editor designado quando o autor carrega uma versão revisada de um artigo.                                                                                                                                                                                                                                                                                                                                                                                       | Sistema                                | Editor/Editor de Seção             | Avaliação                          |
| Atividade editorial para {$month}, {$year} - STATISTICS_REPORT_NOTIFICATION                | Este e-mail é enviado mensalmente automaticamente para editores e gerentes de periódicos para fornecer a eles uma visão geral do funcionamento do sistema.                                                                                                                                                                                                                                                                                                                                               | Sistema                                | Editor/gerente de revistas Manager |                                    |
| Agradecimento pela submissão - SUBMISSION_ACK                                                | Este e-mail, quando habilitado, é enviado automaticamente ao autor quando ele conclui o processo de submissão de um manuscrito à revista. Ele fornece informações sobre o rastreamento da submissão ao longo do processo e agradece ao autor pelo submissão.                                                                                                                                                                                                                                             | Sistema                                | Autor                              | Submissão                          |
| Agradecimento pela submissão - SUBMISSION_ACK_NOT_USER                                     | Este e-mail, quando habilitado, é enviado automaticamente para os outros autores que não são usuários do OJS especificado durante o processo de submissão.                                                                                                                                                                                                                                                                                                                                               | Sistema                                | Autor (não registrado no OJS)      | Submissão                          |
| Submissão inadequada - SUBMISSION_UNSUITABLE                                                 | Este e-mail envia uma mensagem a um autor que faz uma submissão inadequada à revista e recomenda que o submeta em outro lugar.                                                                                                                                                                                                                                                                                                                                                                           | Editor                                 | Autor                              | Submissão                          |
| Expiração de assinatura - SUBSCRIPTION_AFTER_EXPIRY                                        | Este e-mail notifica um assinante de que sua assinatura expirou. Ele fornece o URL da revista junto com as instruções de acesso.                                                                                                                                                                                                                                                                                                                                                                         | Sistema                                | Assinante                          |                                    |
| Expiração de assinatura - Lembrete final - SUBSCRIPTION_AFTER_EXPIRY_LAST                  | Este e-mail notifica um assinante de que sua assinatura expirou. Ele fornece a URL da revista junto com as instruções de acesso.                                                                                                                                                                                                                                                                                                                                                                         | Sistema                                | Assinante                          |                                    |
| Aviso de expiração de assinatura - SUBSCRIPTION_BEFORE_EXPIRY                              | Este e-mail notifica um assinante que sua assinatura irá expirar em breve. Ele fornece a URL da revista junto com as instruções de acesso.                                                                                                                                                                                                                                                                                                                                                               | Sistema                                | Subscriber                         |                                    |
| Confirmação de assinatura - SUBSCRIPTION_NOTIFY                                              | Este e-mail notifica um leitor registrado de que o gerente criou uma assinatura para eles. Ele fornece a URL da revista junto com as instruções de acesso.                                                                                                                                                                                                                                                                                                                                               | Sistema                                | Subscriber                         |                                    |
| Aquisição de Assinatura: Individual  - SUBSCRIPTION_PURCHASE_INDL                          | Este e-mail notifica o gerente de assinaturas de que uma assinatura individual foi adquirida online. Ele fornece informações resumidas sobre a assinatura e um link de acesso rápido à assinatura adquirida..                                                                                                                                                                                                                                                                                            | Sistema                                | Gerente de assinaturas             |                                    |
| Aquisição de Assinatura: Institutional - SUBSCRIPTION_PURCHASE_INSTL                       | Este e-mail notifica o gerente de assinaturas de que uma assinatura institucional foi adquirida online. Ele fornece informações resumidas sobre a assinatura e um link de acesso rápido à assinatura adquirida.                                                                                                                                                                                                                                                                                          | Sistema                                | Gerente de assinaturas             |                                    |
| Renovação de Assinatura Individual - SUBSCRIPTION_RENEW_INDL                               | Este e-mail notifica o gerente de assinaturas de que uma assinatura individual foi renovada online. Ele fornece informações resumidas sobre a assinatura e um link de acesso rápido para a assinatura renovada.                                                                                                                                                                                                                                                                                          | System                                 | Subscription Manager               |                                    |
| Renovação de Assinatura Institucional - SUBSCRIPTION_RENEW_INSTL                           | Este e-mail notifica o gerente de assinaturas que uma assinatura institucional foi renovada online. Ele fornece informações resumidas sobre a assinatura e um link de acesso rápido para a assinatura renovada.                                                                                                                                                                                                                                                                                          | Sistema                                | Gerente de assinaturas             |                                    |
| Novo usuário cadastrado - USER_REGISTER                                                      | Este e-mail é enviado a um usuário recém-registrado para dar as boas-vindas ao sistema e fornecer um registro de seu nome de usuário e senha.                                                                                                                                                                                                                                                                                                                                                            | Sistema                                | Do utilizador                      |                                    |
| Validação de cadastro - USER_VALIDATE                                                        | Este e-mail é enviado a um usuário recém-registrado para validar sua conta de e-mail.                                                                                                                                                                                                                                                                                                                                                                                                                    | Sistema                                | Do utilizador                      |                                    |

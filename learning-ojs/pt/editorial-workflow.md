---
book: learning-ojs
version: 3.3
title: Aprendendo Open Journal Systems 3.3 - Fluxo Editorial
description: Como gerenciar uma submissão através do fluxo de trabalho OJS, da submissão à publicação.
---

# Fluxo de Trabalho Editorial

Neste capítulo, você acompanhará todo o fluxo de trabalho de uma submissão, desde a primeira submissão até a publicação final.

{% include video.html id="K-qjxN7rOJs" provider="youtube" title="Vídeo do fluxo editorial em OJS 3.3. Módulo 2: Visão geral do Fluxo de Trabalho Editorial"%}

Este vídeo da Escola do PKP fornece uma visão geral do fluxo de trabalho editorial em OJS 3.3. Para assistir a outros vídeos desta série, visite o [canal do PKP no YouTube](https://www.youtube.com/playlist?list=PLg358gdRUrDUKJbWtr4bgy133_jwoiqoF).

O fluxo de trabalho é dividido em 4 estágios:

**Submissão**: nesta etapa, estão localizadas as novas submissões enquanto esperam pela atribuição aos Editores de Seção, que verificarão se têm condições de passar para o estágio de Avaliação.

Algumas submissões são claramente inadequadas e nunca passam desse estágio.

{% include video.html id="9rx-AahCU10" provider="youtube" title="Video do Fluxo Editorial no OJS 3.3. Módulo 4: Respondendo a uma submissão"%} Módulo 4: Respondendo a uma submissão"%}

Este vídeo da Escola do PKP explica os passos que o Editor dá para atribuir uma nova submissão a um Editor de Seção. Para assistir a outros vídeos desta série, visite [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDUKJbWtr4bgy133_jwoiqoF).

**Avaliação**: etapa em que ocorre a avaliação por pares, bem como quaisquer revisões exigidas pelo autor (no caso do autor discordar de alterações propostas pelo(s) avaliador(es), por exemplo).

Algumas submissões não são aprovadas na avaliação e não passam desse estágio. Aquelas que são aceitas passam para o próximo estágio.

**Edição de texto**: nesse estágio, os artigos aceitos são aprimorados pelo trabalho de um revisor. Os autores podem ter a oportunidade de revisar as edições.

**Editoração**: após a conclusão e aprovação das edições de texto, a submissão segue para essa fase. Na editoração, os textos editados são convertidos em provas (por exemplo, HTML, XML, PDF, etc.). Novamente, o autor tem a oportunidade de revisar as provas. Assim que todos estiverem satisfeitos, a submissão é agendada para publicação em uma edição futura.

{% include video.html id="-VRKdBQPdn4" provider="youtube" title="Vídeo do Fluxo Editorial no OJS 3.3.  Módulo 9: Editoração."%}

Este vídeo da Escola do PKP explica o estágio de produção. Para assistir a outros vídeos desta série, visite [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDUKJbWtr4bgy133_jwoiqoF).

<hr />

## Tarefas

Suas tarefas estão disponíveis no menu superior esquerdo do seu painel. Observe o número “1” na imagem abaixo. Isso indica que há, no momento, uma tarefa em sua lista.

![O menu expandido das Tarefas no OJS.](./assets/learning-ojs3.1-ed-tasks.png)

As tarefas fornecem uma visão rápida dos itens que precisam de sua atenção. Entradas em negrito não foram lidas e entradas sem negrito foram lidas.

Use a caixa de seleção para marcar tarefas para exclusão (o link está disponível na parte inferior da lista).

<hr />

## Notificações de submissão

Quando um autor faz uma nova submissão ao seu periódico, o autor e todos os colaboradores receberão um e-mail reconhecendo a sua submissão e um editor receberá automaticamente uma notificação da nova submissão. Em alguns casos, um editor será automaticamente atribuído à submissão. Which editor(s) receive the notification or are automatically assigned will depend on how you have set up your journal (see [Edit a section](./journal-setup#edit-a-section)).

* Se houver apenas um usuário atribuído a um papel de editor ou gerente de periódico, esse usuário será atribuído e notificado automaticamente.
* Se um ou mais editores de seção forem atribuídos à [seção](https://docs.pkp.sfu.ca/learning-ojs/en/journal-setup#sections) a qual a submissão foi feita, eles serão automaticamente atribuídos a esta submissão e notificados.
* Se um ou mais editores de seção são atribuídos a uma [categoria](https://docs.pkp.sfu.ca/learning-ojs/en/journal-setup#categories) que a submissão foi feita, eles serão automaticamente atribuídos a esta submissão e notificados.

Você também pode configurar o OJS para que uma cópia do e-mail de notificação seja enviada ao contato principal do periódico, definido nas Configurações do periódico, ou para outro endereço.

Para habilitar cópias do e-mail de confirmação de submissão a ser enviado para o contato primário ou outro endereço:

1. No painel de controle, vá a Configurações> Fluxo de trabalho> submissões;
2. Role para baixo até Notificação de submissão do autor;
3. Marque a caixa ao lado de “Enviar uma cópia para o contato principal, identificado nas Configurações da revista”, se desejar que uma cópia seja enviada para o e-mail de contato principal e/ou;
4. Digite o e-mail para o qual deseja que uma cópia seja enviada no campo de texto.

![learning-ojs3.1-configure-submission-notification.png](./assets/learning-ojs3.1-configure-submission-notification.png)

Se você quiser desativar os e-mails de Agradecimento pela Submissão, pode fazê-lo, desabilitando o modelo de e-mail na lista de modelos de e-mail. Para saber mais sobre como desabilitar e habilitar modelos de email, consulte *Desabilitar modelos de email*, no [capítulo Configurações de fluxo de trabalho](https://github.com/pkp/pkp-docs/blob/main/learning-ojs/en/settings-workflow).

Os usuários também podem alterar suas configurações de notificação individuais em seu próprio perfil, acessando Perfil> Notificações.

## Painel de submissões

Ao fazer login em seu painel, você pode encontrar submissões ativas de suas tarefas ou de uma das filas (Fila, Submissões Não Designadas, Ativos e Arquivos). O contador oferece uma visão geral de quantos itens, no total, existem em cada fila.

![learning-ojs3.1-ed-dashboard-unassigned.png](./assets/learning-ojs3.2-ed-dashboard-active.png)

### Minha Fila

**Minhas Submissões Designadas**: Esse painel inclui submissões adicionadas a seções onde você é um editor de seção ou as suas próprias submissões, se você também for um autor desse periódico.

A ferramenta **Buscar**, para cada fila, pode, às vezes, ser útil para rastrear as submissões.

A ferramenta **Filtro** permite limitar sua navegação a um status específico, a fim de se realizar uma pesquisa mais rápida. Dependendo de seu papel, as funções editoriais serão capazes de filtrar:

- **Status**: selecione entre *incompleto*, *atrasado* e *inativo por 30 dias*

- **Estágios**: selecione entre _submissão_, _avaliação_, _edição de texto_ e _editoração_

- __Seções__: essa opção só está disponível se houver mais de 5 seções. Após começar a inserir o texto, o filtro irá sugerir ações automaticamente. Por exemplo, filtre por _artigos_ ou _resenhas_

- __Editor(es) atribuído(s):__ apenas os Gerentes da Revista e Editores da Revista têm esta opção de filtro. Assim como as seções, esta é uma caixa de texto que irá sugerir automaticamente o nome de um Editor de Seção, Editor de Revista ou Editor Convidado quando você começar a digitar o nome do editor e, em seguida, exibir todos os artigos atribuídos ao editor.

- __Edição atribuída__: apenas gerentes de periódicos podem filtrar por fascículos não publicados, mas editores e assistentes poderão filtrar por fascículos publicados. Esse campo diferencia maiúsculas de minúsculas e requer correspondência exata. Para obter melhores resultados, pesquise por ano ou título, em vez de volume ou número. Esse filtro é usado principalmente se a atribuição de uma submissão a uma edição for feita em uma fase inicial do processo editorial.

Alguns filtros permitem várias seleções. Os usuários podem filtrar por mais de um editor, uma seção ou edição. Os filtros são aplicados com condições OU, portanto, quando um usuário selecionar filtrar pelo Editor A e Editor B, todas as submissões que são atribuídas ao editor A ou ao editor B serão retornadas.

Ao usar vários filtros, a condição E será aplicada entre os filtros. Por exemplo, ao filtrar por Estágio de avaliação E Editor A, apenas as submissões atribuídas ao Editor A no estágio de avaliação serão retornadas.

![Um filtro de amostra aplicado à lista de envios.](./assets/learning-ojs3.2-ed-dashboard-filter.png)

Observe que você pode usar as setas azuis à direita de cada submissão para revelar mais detalhes, incluindo quantas avaliações estão pendentes, novas discussões e muito mais. Ele também revela botões para levá-lo ao registro da submissão, visualizar o log de atividades e anotações e excluir a submissão.

![Um exemplo de detalhes de submissão expandidos no painel.](./assets/learning-ojs3.2-ed-dashboard-active-details.png)

### Submissões não designadas

Esse painel inclui submissões adicionadas a seções sem editores de seção.

![A guia não atribuída no painel de envios.](./assets/learning-ojs3.1-ed-dashboard-unassigned.png)

No exemplo acima, não há submissões não designadas, então o painel está vazio.

### Ativos

Essa seção inclui uma lista de todas as submissões, sem ser organizada em filas.

![learning-ojs3.1-ed-dashboard-all-active.png](./assets/learning-ojs3.1-ed-dashboard-all-active.png)

### Arquivos

Essa seção inclui uma lista de todas as submissões rejeitadas ou já publicadas pela revista. As submissões rejeitadas ​​podem ser excluídas da lista de submissões arquivadas. A exclusão de uma submissão rejeitada removerá completamente a submissão e todos os arquivos de submissão de sua revista.

![A lista de submissões arquivadas com a opção de excluir submissões.](./assets/ojs-3.3-sub-delete.png)

### Submissão de demonstração

Para esta demonstração, estamos procurando a submissão de Williamson e Serletis, intitulada *Os Agentes Oficiais de Conhecimento e Educação de Adultos*. Ela pode ser encontrada no topo de **Fila (Minhas Submissões Designadas)**, bem como em **Ativos**.

![A Minha fila Atribuída no painel de Submissões OJS, com o exemplo do artigo da Cerpa no topo da fila.](./assets/learning-ojs3.3-submission-queue.png)

Após encontrar a submissão, você pode usar o botão visualizar, para ver a submissão, ou usar a seta azul, para revelar opções e ver se há alguma discussão aberta (não há nenhuma neste caso), o número de composições finais criadas e acesso ao registro de atividades e anotações.

![Um envio com o menu de opções expandido.](./assets/learning-ojs3.3-submission-options.png)

O **Log de atividades e anotações** exibe o histórico da submissão.

![Um exemplo de registro de atividade para uma submissão](./assets/learning-ojs3.1-ed-dashboard-log.png)

Use a guia Notas para também visualizar ou adicionar quaisquer notas editoriais.

![Aba Notas do log de atividades.](./assets/learning-ojs-3-ed-submissions-notes.png)

### Registro de submissão

Para ver a submissão com mais detalhes, selecione o botão ***Ver Submissão**. Isso vai levá-lo para o registro de submissão.

![learning-ojs3.1-se-record.png](./assets/learning-ojs3.1-ed-dashboard-record.png)

A partir daqui, você pode ver:

**Arquivos da submissão**: esse painel lista os arquivos que foram enviados. Na visualização acima, há apenas um arquivo, mas vários arquivos podem ser enviados. Os arquivos de submissão agora manterão os nomes originais quando baixados.

Para periódicos que usam avaliação anônima, os dados do autor e do avaliador (caso eles devam fazer upload de qualquer documento) ainda são removidos. Um exemplo de estrutura de nome de arquivo para arquivos baixados por avaliadores será `ojs-review-assignment-1-article-text-8.docx`. A numeração corresponde ao número do manuscrito da tarefa.

**Discussões da pré-avaliação** : Esse painel permite que o editor se comunique com o autor ou com outras pessoas da equipe editorial. Para exemplificar, o editor pode pedir ao autor algumas informações adicionais ou pedir a um editor de seção que se responsabilize por essa submissão.

**Botões de ação**: incluem Enviar para Avaliação, Aceitar e enviar para Edição de Texto, e Rejeitar submissão.

> Observação: se você não visualizar esses botões, provavelmente ainda não atribuiu a submissão a um editor.

**Status da submissão**: uma vez que um editor registrou uma decisão em um estágio do fluxo de trabalho, a partir do OJS 3.2, a decisão registrada aparecerá no lugar dos botões de decisão. Os editores ainda terão a capacidade de alterar a decisão registrada clicando em 'Alterar decisão', isso habilitará as 3 opções mais uma vez.

![Alterar o botão de decisão no estado da submissão.](./assets/learning-ojs3.2_edflow_decisionstatus2.png) *A captura de tela acima mostra o botão de decisão para o MS# 425 antes de uma decisão ser registrada. A captura de tela abaixo mostra a notificação da decisão registrada.*

![learning-ojs3.2_edflow_decisionstatus_accept.png](./assets/learning-ojs3.2_edflow_decisionstatus_accept.png)

**Participantes**: nesse painel, você verá a lista de participantes envolvidos na submissão, incluindo o editor, editores de seção e autor. Outros nomes (editores de texto, editores de layout, etc.) aparecerão aqui à medida que forem adicionados nas etapas subsequentes.

**Biblioteca da Submissão**: a Biblioteca da Submissão é uma área de armazenamento geral de documentos, que podem incluir formulários de conflito de interesses, formulários de aprovação de composição final, etc. Um usuário pode carregar o formulário preenchido para seu manuscrito em sua Biblioteca da Submissão. Um usuário pode enviar o formulário preenchido para seu manuscrito na sua Biblioteca de Submissões. Os formulários carregados também estarão disponíveis para outros participantes (com exceção dos avaliadores) atribuídos ao longo do fluxo de trabalho editorial ou de produção, para editar ou recarregar novas versões.

**Biblioteca da revista**: os usuários, em todo o fluxo de trabalho editorial, poderão acessar todos os arquivos na Biblioteca da revista (consulte [o capítulo Configurações do fluxo de trabalho](https://github.com/pkp/pkp-docs/blob/main/learning-ojs/en/settings-workflow.md)), disponibilizados pelo Gerente da revista ou Editor, abrindo a Biblioteca da Submissão e clicando em “Ver Biblioteca da Revista”.

![learning-ojs3.1-jm-settings-workflow-sublib1.png](./assets/learning-ojs3.1-jm-settings-workflow-sublib1.png)

**Pré-visualização**: mostra como a submissão ficará quando publicada, com seus metadados e arquivos de composição final atuais, clicando em Visualizar.

![learning-ojs-3-ed-preview.png](./assets/learning-ojs-3-ed-preview.png)

**Publicação (Metadados)**: painel onde você pode visualizar e revisar os metadados da submissão. No OJS 3.2 e posterior, os usuários podem receber permissão para revisar determinados metadados de submissão em qualquer estágio do fluxo de trabalho.

![learning-ojs3.1-ed-dashboard-record-metadata.png](./assets/learning-ojs3.1-ed-dashboard-record-metadata.png)

### Concessão de permissões de autor

A partir do OJS 3.2, os editores podem conceder acesso para permitir que os autores façam alterações nos metadados. Existem duas maneiras pelas quais os editores podem conceder esse tipo de acesso.

**Permissão global**: concederá a todos os usuários a permissão de 'autor' da função para fazer alterações nos metadados.

Para habilitar essa função, vá a Usuários & Papéis> Papéis. Em seguida, clique na seta azul ao lado de 'Autor' e clique em editar.

![learning-ojs3.2-editorial-workflow-author-edit.png](./assets/learning-ojs3.2-editorial-workflow-author-edit.png)

Em Opções de papéis, habilite “Permitir edição de metadados da submissão”, depois, clique em OK.

![learning-ojs3.2-editorial-workflow-author-editmenu.png](./assets/learning-ojs3.2-editorial-workflow-author-editmenu.png)

**Permissão limitada** - concederá aos autores registrados (normalmente um único autor) permissão para fazer alterações apenas em determinados estágios do fluxo de trabalho editorial.

Para permitir que um autor altere os metadados em um estágio específico do fluxo de trabalho, clique no estágio do fluxo de trabalho (isto é, Submissão, Avaliação, Edição de Texto ou Editoração).

Na lista de participantes, clique na seta ao lado do nome do autor e depois em Editar.

![learning-ojs3.2-editorial-workflow-edit-participant.png](./assets/learning-ojs3.2-editorial-workflow-edit-participant.png)

Em Permissões, ative 'Permitir que esta pessoa edite os detalhes da publicação' e, na sequência, em OK.

![learning-ojs3.2-editorial-workflow-edit-grantpermission.png](./assets/learning-ojs3.2-editorial-workflow-edit-grantpermission.png)

Assim que o autor tiver acesso às edições feitas, ele poderá fazer alterações nas seguintes seções na guia Publicação: Título e Resumo, Colaboradores e Metadados.

![learning-ojs3.2-editorial-workflow-edit-publicationmenu.png](./assets/learning-ojs3.2-editorial-workflow-edit-publicationmenu.png)

### Designando a Submissão

Depending on [how you have your sections configured](./journal-setup#edit-a-section), some new submissions may come in unassigned. Se for esse o caso, a próxima etapa é designar um editor ou editor de seção. Para fazer isso, selecione o link _Designar_, no painel **Participantes**.

![learning-ojs-3-ed-submissions-add-participant.png](./assets/learning-ojs-3-ed-submissions-add-participant.png)

Você terá a opção de localizar um usuário por papel, escolher um indivíduo e enviar uma mensagem solicitando sua assistência.

> Observação: se você não tiver certeza dos nomes dos editores de seção, basta escolher esse papel no menu suspenso e clicar no botão Pesquisar. Todos os Editores de Seção serão exibidos e disponíveis para seleção.

Clique no botão **OK** para fazer a atribuição e enviar a mensagem.

![learning-ojs3.1-ed-dashboard-record-assign.png](./assets/learning-ojs3.1-ed-dashboard-record-assign.png)

> Observe a nova discussão de pré-avaliação que foi criada automaticamente como parte da tarefa.

Agora, você pode ver que o Editor de Seção está listado em Participantes e os botões de ação estão disponíveis:

**Enviar para avaliação**: avança a submissão para a próxima etapa.

**Aceitar e enviar para Edição de texto**: ignora o estágio de avaliação e move a submissão diretamente para a edição de texto.

**Rejeitar Submissão**: Rejeita a submissão antes de passar pelo processo de avaliação, a submissão seria então arquivada. A submissão seria então arquivada. No OJS 3.3, agora existe a opção de reverter uma decisão de recusa na fase de submissão e avaliação. Isso pode ser feito clicando em **Alterar decisão** e, em seguida, em **Reverter Decisão**. Depois que uma decisão de rejeitar é revertida, a submissão é restaurada ao estágio anterior e a rodada de avaliação se ativa.

Embora, no exemplo que demos, o editor tenha designado um editor de seção, também seria possível que o editor se designasse para a submissão.

Assim que o editor selecionar uma ação, o status da submissão será alterado e os botões de ação serão desativados.

![learning-ojs3.2_edflow_decisionstatus2.png](./assets/learning-ojs3.2_edflow_decisionstatus2.png)

### Editor de seção

Agora que o Editor de Seção foi designado, ele pode fazer o login e visualizar seu painel. A submissão pode ser encontrada no topo da do painel Fila (Minhas Submissões Designadas).

![learning-ojs3.1-se-dashboard.png](./assets/learning-ojs3.1-se-dashboard.png)

Clicar em Visualizar abre o registro de submissão completo.

![learning-ojs3.1-se-record.png](./assets/learning-ojs3.1-se-record.png)

#### Aceitando a designação

Não é obrigatório, mas o Editor de Seção pode responder à Discussão da Pré-avaliação para informar ao editor que dará continuidade ao trabalho.

#### Comunicando-se com o autor

Se o Editor de Seção tiver alguma pergunta ao autor, pode usar as Discussões de pré-avaliação.

#### Enviando para avaliação

Uma vez que o Editor de Seção esteja satisfeito com a submissão apropriada ao periódico, ele pode selecionar o botão **Enviar para Avaliação** para mover a submissão ao próximo estágio.

![learning-ojs3.1-se-record-sendReview.png](./assets/learning-ojs3.1-se-record-sendReview.png)

Mantenha os arquivos que serão revisados ​​desmarcados.

<hr />

## Comentário

{% include video.html id="5Hwkqj4Jvew" provider="youtube" title="Vídeo do Fluxo Editorial no OJS 3.3.  Módulo 5: Atribuindo um revisor."%}

Este vídeo da PKP School explica as etapas que o Editor de Seção leva para atribuir avaliadiores para o envio. Para assistir a outros vídeos desta série, visite o [canal do PKP no YouTube](https://www.youtube.com/playlist?list=PLg358gdRUrDUKJbWtr4bgy133_jwoiqoF).

Quando a submissão entra no Estágio de Avaliação, uma notificação indica que os Avaliadores precisam ser atribuídos.

![O "Aguardando que os revisores sejam atribuídos" notificação.](./assets/learning-ojs3.1-se-record-revstage.png)

> Nota: Na captura de tela acima, vemos a visualização do Editor de Seção. Observe os botões de ação limitados (apenas Fazer recomendação está disponível). Se estivéssemos logados como Editor, veríamos mais botões de ação (Enviar para avaliação, Aceitar submissão, Rejeitar submissão).

Essa ação abre uma nova janela, onde os avaliadores são listados e podem ser selecionados um de cada vez.

Essa ação abrirá uma janela para você selecionar quais arquivos (fornecidos pelo autor) serão incluídos na nova rodada de avaliação.

![A janela Localizar uma janela de Revisor listando todos os Revisores.](./assets/learning-ojs-3.1.2-locate-reviewer.png)

Clicar na seta azul revela mais informações sobre seu histórico de avaliação, incluindo quantas avaliações ativas estão atualmente atribuídas, quantas avaliações estão concluídas ou foram recusadas, etc. Se o usuário adicionou uma biografia ou avaliação de interesses, essas informações serão exibidas aqui.

Além disso, o Editor da Revista pode adicionar uma Nota Editorial sobre o avaliador em seu perfil por meio de Usuários & Papéis> Usuários. Essa nota aparece nos detalhes do avaliador na tela Adicionar avaliador, mas não estará visível para o avaliador ou para o público.

![Uma amostra de detalhes do revisor expandidos, com histórico de revisão e notas.](./assets/learning-ojs-3.1.2-add-reviewer.png)

Nos releases 3.0 a 3.1.0 do OJS, você não pode designar um usuário para revisar uma submissão, se ele também for um editor da submissão.  Se você fizer isso, o editor não poderá mais acessar a submissão após enviar sua avaliação, a fim de manter os princípios da avaliação por pares anônima. No entanto, a partir do OJS 3.1.1, você pode designar um usuário para revisar uma submissão, se ele também for um editor da submissão.

Na parte inferior desse formulário, você verá opções para:

**Selecionar avaliador**: use para confirmar sua seleção depois de escolher um avaliador da lista.

**Criar novo avaliador**: se nenhum dos avaliadores for adequado, você pode usar esse botão para criar um novo avaliador. Essa é uma nova conta no sistema.

**Designar usuário existente**: se nenhum dos avaliadores for adequado, você pode inscrever um usuário existente como avaliador.

Para esta demonstração, escolhemos Adela como nosso avaliador e clicamos no botão **Selecionar avaliador**.

Essa ação abrirá uma nova janela.

![A tela Adicionar Revisor com o modelo de notificação por e-mail.](./assets/learning-ojs3.1-se-record-revstage-revreq.png)

Você pode editar qualquer texto padrão.

Se estiver usando um método de Avaliação Anônima, certifique-se de que os arquivos enviados ao Avaliador não tenham nenhuma informação de identificação sobre o Autor. Instruções adicionais para isso são fornecidas nas seções [Compreendendo a avaliação anônima](https://github.com/pkp/pkp-docs/blob/main/learning-ojs/en/editorial-workflow.md#understanding-anonymous-review) e [removendo informações de identificação](https://github.com/pkp/pkp-docs/blob/main/learning-ojs/en/editorial-workflow.md#removing-identifying-information).

Mais adiante, no formulário, é possível ver os detalhes adicionais que são enviados ao Avaliador, incluindo título, resumo, datas importantes e um link para os arquivos a serem avaliados.

![Detalhes de revisão incluem tipo e data de vencimento.](./assets/learning-ojs-3-ed-rev-add-4.png)

É uma ação padrão, os avaliadores receberem uma caixa de texto estendida para digitar seus comentários. No entanto, o Editor Gerente pode criar formulários de avaliação em [Configurações> Fluxo de trabalho> Avaliação](https://github.com/pkp/pkp-docs/blob/main/learning-ojs/en/settings-workflow#review) para fazer perguntas mais específicas. Se desejar que o avaliador preencha um formulário de avaliação, selecione-o em **Formulário de avaliação**.

Em seguida, clique no botão **Adicionar avaliador**, para enviar a mensagem e atribuir o avaliador.

Voltando ao estágio de edição de texto, é possível ver que a mensagem foi postada.

![O recém-adicionado Revisor visto na Fase de Revisão.](./assets/learning-ojs-3-ed-rev-reviewer-added.png)

Você pode fazer alterações adicionais, alternando a seta azul ao lado do nome do avaliador.

![Detalhes e opções do revisor expandidos.](./assets/learning-ojs-3-ed-rev-reviewer-added-2.png)

**Detalhes da avaliação**: fornece detalhes sobre a avaliação.

![A janela de Detalhes da revisão.](./assets/learning-ojs-3-ed-rev-reviewer-review-details.png)

**E-mail ao avaliador**: Permite enviar uma mensagem ao avaliador.

![A janela do Email do revisor.](./assets/learning-ojs-3-ed-rev-reviewer-email-reviewer.png)

**Editar**: Permite alterar as datas de avaliação e arquivos.

![A janela Editar Revisão.](./assets/learning-ojs-3-ed-rev-reviewer-edit-review.png)

**Cancelar avaliador**: permite cancelar a atribuição do avaliador.

**Dispensar avaliador**: a partir do OJS 3.3, você pode cancelar uma solicitação de avaliação. Isso pode ser necessário quando um avaliador não respondeu a uma solicitação de avaliação ou aceitou fazer uma avaliação, mas nunca a entregou.

![A opção Cancelar Revisor nas opções expandidas do Revisor.](./assets/learning-ojs-3.2-cancel-reviewer.png)

Cancelar uma solicitação de avaliação permitirá que você envie um modelo de e-mail para o avaliador. A solicitação aparecerá na lista de avaliadores do editor como “cancelada”.

![Uma solicitação de revisão de amostra marcada "Solicitação cancelada".](./assets/learning-ojs-3.2-reviewer-cancelled.png)

A avaliação cancelada será registrada nas estatísticas do avaliador, que você pode ver ao selecionar um avaliador.

![Pedidos cancelados como vistos em estatísticas de um revisor.](./assets/learning-ojs-3.2-cancelled-reviews-tracker.png)

**Discussão da avaliação** : a discussão da avaliação é outra maneira de entrar em contato com um avaliador. Em uma discussão de avaliação, você tem a opção de anexar arquivos.

Para iniciar uma discussão, clique em “Adicionar comentário”.

![Local do botão Adicionar Discussão.](./assets/learning-ojs3.2-rev-contact2.png)

Em seguida, selecione o(s) avaliador(es) com quem gostaria de iniciar uma discussão.

![A lista de revisores para selecionar para discussão.](./assets/learning-ojs3.2-rev-contact3.png)

**Histórico**: fornece um breve histórico da avaliação.

![A janela Histórico de revisões.](./assets/learning-ojs-3-ed-rev-review-history.png)

Nesse ponto, é possível adicionar avaliadores adicionais e, em seguida, aguardar a chegada de suas recomendações.

### Compreendendo a avaliação anônima

O OJS foi projetado para acomodar diferentes tipos de avaliações e possui etapas integradas para garantir o anonimato.

Todas as informações ficarão visíveis para os gerentes e editores da revista, independentemente do tipo de avaliação selecionada. O tipo de avaliação será selecionado automaticamente com base no que foi configurado em *Configurações > Fluxo de trabalho > Avaliação*. Os editores podem alterar o tipo de avaliação ao enviar a solicitação de avaliação. Editores/Editores de Seção devem selecionar o tipo de avaliação ao enviar a solicitação de avaliação, dentre as seguintes opções:

* Avaliador Anônimo/Autor Anônimo
* Avaliador Anônimo/Autor Divulgado
* Abrir.

**Avaliador Anônimo/Autor Anônimo**: a identidade do autor e do avaliador é mantida oculta.

O autor ou editor deve garantir que os metadados do arquivo do manuscrito sejam removidos na Duplo cega  (avaliador Anônimo/Autor Anônimo). Consulte [Removendo informações de identificação](https://github.com/pkp/pkp-docs/blob/main/learning-ojs/en/editorial-workflow.md#removing-identifying-information) para obter mais informações.

*Avaliador*: o avaliador não poderá ver o(s) autor(es) na fila de seu avaliador se o editor tiver selecionado Duplo Cega (Avaliador Anônimo/Autor Anônimo). Todas as informações de identificação nos metadados dos detalhes da submissão são retiradas automaticamente pelo sistema, conforme exemplo a seguir.

![Uma amostra dos metadados que um revisor verá em uma dupla análise anônima - nenhuma informação de identificação está incluída.](./assets/learning-ojs3.1-ed-rev-anon1.png)

No final de uma avaliação, se um avaliador decidir fazer upload de um arquivo de avaliação, ele deve remover todas as informações de identificação antes de carregá-lo no sistema. Consulte [Removendo informações de identificação](https://github.com/pkp/pkp-docs/blob/main/learning-ojs/en/editorial-workflow.md#removing-identifying-information) para obter mais informações.

*Autor*: nenhuma informação de identificação sobre o avaliador ficará visível para o autor na visualização do manuscrito.

![<em x-id="3">Autor</em>: nenhuma informação de identificação sobre o avaliador estará disponível na visualização do manuscrito.](./assets/learning-ojs3.1-ed-rev-anon2.png)

*Decisão Editorial*: o e-mail de decisão enviado ao(s) autor(es) ao final da avaliação terá títulos genéricos dos avaliadores.

![Um exemplo de e-mail de decisão identificando o revisor apenas como "Avaliador A".](./assets/learning-ojs3.1-ed-rev-anon3.png)

**Avaliador Anônimo/Autor Divulgado**: a identidade do avaliador é mantida no anonimato para o(s) autor(es). Os avaliadores podem ver os detalhes do autor.

*Avaliador*: o avaliador pode ver todos os metadados inseridos pelo autor, clicando em *Exibir todos os detalhes da submissão* na guia de solicitação do manuscrito. O nome dos autores também aparecerá na fila do avaliador.

*Autor*: nenhuma informação de identificação sobre o avaliador ficará visível para o autor na visualização do manuscrito.

![<em x-id="3">Autor</em>: nenhuma informação de identificação sobre o avaliador estará disponível na visualização do manuscrito.](./assets/learning-ojs3.1-ed-rev-anon2.png)

*Decisão Editorial*: o e-mail de decisão enviado ao(s) autor(es) ao final da avaliação terá títulos genéricos dos avaliadores.

![Um exemplo de e-mail de decisão identificando o revisor apenas como "Avaliador A".](./assets/learning-ojs3.1-ed-rev-anon3.png)

### Removendo Informações de Identificação

Embora o OJS tenha várias funções integradas para revisões anônimas, etapas adicionais podem precisar ser executadas fora da plataforma para garantir o Avaliador Anônimo/Autor Anônimo. Um arquivo de submissão pode conter informações que revelem a identidade dos autores nas propriedades do documento.

![Uma amostra de um documento cujo autor é visível dentro das propriedades do documento.](./assets/learning-ojs3.1-ed-rev-anon4.png)

Os autores também podem incluir seu nome no artigo, notas de rodapé e referências. Nesse caso, o editor terá que remover tais informações antes de enviar para avaliação. Alternativamente, os autores podem ser solicitados a redigir seus nomes do arquivo de submissão, com “Autor” e ano usados ​​nas referências e notas de rodapé ao invés do nome dos autores, título do artigo, etc., antes da submissão.

#### Microsoft Word para Windows

1. Vá em _Arquivo_
2. Selecione _Informações_
3. Clique em _Verificar Problemas_
4. Clique em _Inspecionar Documento_
5. Na caixa de diálogo _Inspetor de Documento_, marque as caixas de seleção para escolher os tipos de conteúdo oculto que deseja inspecionar
6. Clique em *Remover tudo*
7. Clique em *Fechar*
8. Salve o documento

#### Microsoft Word para MacOS

1. Vá a *Ferramentas*
2. Clique em *Proteger Documento*
3. Selecione *Remover informações pessoais deste arquivo ao salvar*
4. Clique em *OK* e salve o arquivo

![A opção no Mac OS "Remover informações pessoais deste arquivo no modo de salvar".](./assets/learning-ojs3.1-ed-rev-anon5.png)

### Reenviando o documento

Os gerentes e editores de periódicos podem reenviar o documento anônimo nos arquivos para avaliação, clicando em **Enviar/Selecionar** arquivos, na caixa *Arquivos para avaliação*.

![O botão Enviar/Selecionar Arquivos na seção Arquivos de revisão.](./assets/learning-ojs3.1-ed-rev-anon6.png)

Clique em **Enviar arquivo para avaliação**.

![O botão enviar arquivo de revisão.](./assets/learning-ojs3.1-ed-rev-anon7.png)

Identifique o componente do artigo e carregue o arquivo.

![O menu suspenso de identificação de componente de artigo.](./assets/learning-ojs3.1-ed-rev-anon8.png)

Detalhes da avaliação. Pode ser útil renomear o arquivo para o momento do novo upload. O arquivo também pode ser renomeado ao clicar na seta à esquerda do nome do arquivo.

![O botão Editar no menu expandido na lista de arquivos de revisão.](./assets/learning-ojs3.1-ed-rev-anon9.png)

Clique em Concluir e selecione o arquivo que deseja usar para a avaliação.

O(s) arquivo(s) aparecerá(ão) no upload inicial. Ao enviar a solicitação de avaliação, certifique-se de que o manuscrito original não esteja selecionado em “Arquivos a serem revisados”.

![Opções para alternar quais arquivos estão incluídos para revisão.](./assets/learning-ojs3.1-ed-rev-anon10.png)

Clique em **OK**.

### Solicitar revisões

{% include video.html id="LR_1BmmSTek" provider="youtube" title="Vídeo do Fluxo Editorial no OJS 3.3.  Módulo 7: Respondendo as revisões"%}

Este vídeo da Escola do PKP explica as etapas que o Editor de Seção e o autor tomam assim que as análises estiverem completas. Para assistir a outros vídeos desta série, visite [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDUKJbWtr4bgy133_jwoiqoF).

Assim que os avaliadores concluírem seu trabalho, o Editor de Seção pode ver os resultados em seu painel. Nesse espaço, eles verão notificações de que novos comentários foram enviados e se todos os comentários foram enviados.

![O Editor de Seção receberá um email informando que a edição de texto foi concluída e verá uma notificação nas discussões.](./assets/learning-ojs-3-ed-rev-responding.png)

Use o link *Ler avaliação*, no painel de avaliadores, para ler os comentários dos avaliadores, incluindo aqueles para o autor e o editor, bem como apenas para o editor.

![Uma análise de amostra com comentários.](./assets/learning-ojs-3-ed-rev-read-reviews.png)

Selecione o link *Confirmar* na parte inferior da tela.

![A análise confirmada status aplicado a uma revisão.](./assets/learning-ojs-3-ed-rev-thank.png)

No painel de avaliadores, será possível ver o link *Agradecer ao avaliador*. Escolha-o para agradecer ao avaliador.

![A janela do Revisor de Agradecimentos.](./assets/learning-ojs-3-ed-rev-thank2.png)

Com base nas recomendações do avaliador, você pode usar os botões de ação para tomar uma decisão.

### Tomando a decisão

Com base nas recomendações do editor, você pode usar os botões de ação para tomar uma decisão.

![Os vários botões de acção para tomar uma decisão sobre uma submissão.](./assets/learning-ojs-3-ed-rev-decision.png)

As opções incluem:

**Aceitar submissão**: significa que a submissão foi aceita sem revisões e pode prosseguir para o estágio de Edição de Texto.

Use o botão **Adicionar mensagem** para responder, seja solicitando uma revisão adicional seja informando ao autor que a submissão está pronta para avançar à próxima etapa.

**Rejeitar submissão** : quer dizer que a submissão não foi aprovada na avaliação por pares e não é adequada a análise posterior. A apresentação seria então transferida para os Arquivos. Apenas as submissões recusadas ​​nos Arquivos podem ser excluídas. No OJS 3.3, agora existe a opção de reverter uma decisão de recusa na fase de submissão e avaliação. Isso pode ser feito clicando em **Alterar decisão** e, em seguida, em **Reverter Decisão**. Depois que uma decisão de rejeitar é revertida, a submissão é restaurada ao estágio anterior e a rodada de avaliação se ativa.

### Solicitar Revisões

Nesta demonstração, solicitaremos que o autor faça algumas revisões menores antes da aceitação.

Para fazer isso, selecione o botão **Solicitar Modificações**. Essa ação resulta em uma nova janela de mensagem.

![A janela de Pedidos de Revisões.](./assets/learning-ojs-3-ed-rev-req-revisions.png)

Você pode modificar qualquer texto antes de enviar a mensagem.

Use o botão **Adicionar comentários** para importar os comentários do avaliador dos campos Editor e Autor. Comentários no campo Somente para o Editor não serão exibidos.

Se houver algum anexo, como um arquivo marcado criado por um avaliador, é possível anexá-lo aqui (desde que seja anônimo). No OJS 3.1.2 e posterior, você também pode fazer upload de um novo arquivo e adicioná-lo como um anexo.

Clique no botão **Gravar Decisão Editorial** para enviar a mensagem.

![Um exemplo de solicitação para revisões com comentários e opções importados para compartilhar arquivos.](./assets/learning-ojs-3-ed-rev-req-revisions3.png)

Assim que o Autor fizer as revisões, você deverá receber uma mensagem (por e-mail e no painel Discussão da avaliação).

### Autor responde

Depois que o Autor fizer as revisões, você deverá receber uma mensagem (via e-mail e no painel Revisar Discussões).

![A revisão do autor foi encontrada no painel de discussões de revisão.](./assets/learning-ojs-3-ed-discussion-panel.png)

Nesse ponto, você pode baixar o arquivo revisado, verificar se está pronto e se comunicar com o autor usando o painel Discussão da avaliação.

Você pode baixar e revisar a versão final da edição editada no painel Texto editado.

No caso do exemplo que propomos, informaremos ao Autor que estamos aceitando as revisões. Para fazer isso, clique no link do título da discussão, abrindo, desse modo, a caixa de discussão. Isso vai abrir a caixa de discussão.

![Uma discussão expandida.](./assets/learning-ojs-3-ed-discussion-window.png)

Em seguida, clique no botão **Adicionar avaliador**, para enviar a mensagem e atribuir o avaliador.

![Depois de ler a resposta do autor, você pode revisar seus comentários, verificando a resposta à discussão.](./assets/learning-ojs-3-ed-discussion-window-reply.png)

### Rodada Adicional de Avaliação

Se desejar submeter o artigo revisado a outra rodada de avaliação, você pode iniciar uma segunda (ou terceira ou subsequente) rodada de avaliação, após o recebimento das revisões do autor.

É melhor iniciar uma nova rodada de avaliação **depois** que o autor carrega os arquivos revisados ​​na rodada anterior. Criar uma nova rodada de avaliação antes que o autor carregue seus arquivos pode criar alguma confusão, pois o painel deles (e o seu) será padronizado para a nova rodada. O autor poderá, no entanto, voltar à Rodada 1 para fazer o upload de seus arquivos. Isso também resultará em ter que baixar o arquivo carregado da Rodada 1 e carregá-lo na Rodada 2.

Para iniciar uma rodada adicional de avaliação após o recebimento dos arquivos revisados, clique na guia **Nova rodada de avaliação**, na guia de Avaliação da submissão.

Se houver arquivos adicionais que você deseja disponibilizar novamente na rodada anterior, isso pode ser feito clicando em **Enviar/Selecionar Arquivos**.

![Botão de Nova Análise no painel de Revisão](./assets/learning-ojs-3-new-round-1.png)

Isto abrirá outro menu para que você selecione quais arquivos (fornecidos pelo autor) para incluir para a nova etapa de revisão.

![Opções de seleção de arquivo para uma nova etapa de revisão criada.](./assets/learning-ojs-3-new-round-2.png)

Da mesma forma, se houver quaisquer arquivos adicionais que os autores fornecem depois de carregar o reenvio, é possível carregá-los usando **Carregar / Selecionar arquivos**.

![O botão Enviar/Selecionar Arquivos na seção Arquivos de revisão.](./assets/learning-ojs-3-new-round-3.png)

Marque a caixa ao lado de **Mostrar arquivos de todos os estágios de fluxo de trabalho acessíveis**. Os arquivos disponíveis na Rodada 1 devem aparecer em submissão. Os arquivos que aparecem em Avaliação mostrarão apenas os arquivos carregados pelo autor da rodada anterior (ou seja, arquivos revisados ​​da rodada 1). Se você estiver na Rodada 3 (e em diante) e precisar de arquivos da Rodada 1 ou 2, precisará baixá-los para sua área de trabalho local e carregá-los novamente por meio de **Upload / Selecionar Arquivos**.

![A lista de arquivos para um envio, incluindo a rodada anterior após a opção "Exibir arquivos de todos os estágios de fluxo de trabalho acessíveis"estar habilitada.](./assets/learning-ojs-3-new-round-4.png)

Uma nova rodada será adicionada no painel da guia Avaliação.

No painel Avaliadores, você pode selecionar Adicionar Avaliador para atribuir um novo Avaliador.

![A aba Rodada Dois no painel de revisão.](./assets/learning-ojs-3-new-round-0.png)

Quando estiver pronto para iniciar a nova rodada de avaliação, atribua avaliadores, como fez na rodada anterior. Você pode atribuir os mesmos avaliadores ou avaliadores diferentes.

Os avaliadores das rodadas anteriores não terão acesso aos comentários que fizeram na rodada anterior. Se um avaliador solicitou seus comentários da rodada anterior, o editor pode copiá-los da Rodada 1 - Detalhes da Avaliação e iniciar uma discussão na Rodada 2. Alternativamente, o periódico pode optar por encorajar o envio de Resposta ao Avaliador como parte da reapresentação .

Essas etapas podem ser repetidas até que uma decisão final, de aceitar ou recusar o manuscrito, seja tomada.

### Movendo para a editoração

A submissão agora está pronta para ser movida para edição. Para fazer isso, use o botão azul **Aceitar submissão**.

![O botão "Enviar para Copiar ou editar" em um painel de envio.](./assets/learning-ojs-3-ed-send-to-copyediting.png)

Isso abrirá uma nova janela.

![A janela Enviar para Copiar, incluindo informações sobre a notificação de aceitação a ser enviada ao autor.](./assets/learning-ojs-3-ed-accept.png)

Observe que, se a revista habilitou uma taxa de processamento do artigo (APC) a ser cobrada dos autores, a opção aparecerá nessa fase, para notificar o autor sobre o pagamento devido. Selecionar “Solicitar taxa de publicação” fará com que um e-mail de notificação de pagamento seja enviado ao autor com as instruções para pagamento. Para obter informações sobre como habilitar taxas de autor, consulte o [capítulo Assinaturas> Tipos de pagamento](https://github.com/pkp/pkp-docs/blob/main/learning-ojs/en/subscriptions#payment-types) e [configurações de distribuição> Habilitar pagamentos](https://github.com/pkp/pkp-docs/blob/main/learning-ojs/en/settings-distribution#enable-payments).

![Uma amostra de notificação para um periódico com APCs habilitado.](./assets/learning-ojs3.1-jm-subscriptions-authorfees.png)

Feito isso, a submissão será automaticamente movida para o estágio de edição de texto.

De volta à guia de revisão, você notará que o status agora indica que a submissão foi aceita.

De volta à guia de revisão, você notará que o status agora indica que a submissão foi aceita.

![learning-ojs3.2_edflow_decisionstatus_accept.png](./assets/learning-ojs3.2_edflow_decisionstatus_accept.png)

<hr />

## Submissão de demonstração

{% include video.html id="uc272bhGfeU" provider="youtube" title="Vídeo do Fluxo Editorial no OJS 3.3. Módulo 8: Editor de Texto."%}

Este vídeo da Escola do PKP explica o estágio de produção. Para assistir a outros vídeos desta série, visite [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDUKJbWtr4bgy133_jwoiqoF).

Quando uma submissão é aceita no estágio de avaliação, ela passa automaticamente ao estágio de edição de texto.

![A fase de edição de uma submissão.](./assets/learning-ojs-3-ed-copyediting.png)

### Adicionando um Editor de Texto

Quando a submissão entra no Estágio de Edição de Texto, uma notificação indica que um Editor de Texto precisa ser atribuído. A atribuição de Editores de texto pode ser feita por meio do link *Designar*, no painel Participantes.

Isso abrirá uma nova janela.

![A janela Adicionar Participante no estágio de edição.](./assets/learning-ojs-3-ed-copyediting-add.png)

Você pode usar o menu suspenso de funções para escolher copiar e apertar o botão **Pesquisar**. Isto irá abrir todos os Revisores.

Com isso, resta esperar que o Editor de Texto faça seu trabalho.

O Editor de Texto receberá uma mensagem do Editor de Seção por e-mail, solicitando que ele aceite a submissão.

Para começar, ele deve fazer o login e encontrar a submissão em seu painel.

Para fazer isso, selecione o botão azul **Enviar para editoração**.

Agora você pode ver a nova notificação de que a submissão está aguardando edição de cópias, o Editor de Texto está incluído na lista de Participantes e a solicitação está visível na Discussão de Edição de Texto.

![learning-ojs-3-ce-submission.png](./assets/learning-ojs-3-ed-copyediting-add-dash.png)

Agora, você deve esperar que o autor responda com suas revisões.

### Editor de Texto

Fora do OJS, ele fará o trabalho de edição de texto.

Para verificar os metadados de submissão, clique na guia Publicação.

![learning-ojs-3-ce-copyediting-metadata.png](./assets/learning-ojs-3-ce-dash.png)

Em seguida, ele pode clicar no link Edição de texto ao lado do nome da submissão. Isso os levará diretamente ao estágio de edição de texto para esta submissão.

![A etapa de edição de cópias, como visto por um autor atribuído.](./assets/learning-ojs-3-ce-submission.png)

A partir desse ponto, é possível ver os arquivos para edição de texto. Estes são os arquivos que requerem edição de texto. Ao clicar no título com link será feito o download do arquivo para a área de trabalho.

Fora do OJS, eles farão o trabalho de edição.

Na janela Adicionar comentário, o editor  deve escolher o autor e adicionar uma linha de assunto e uma mensagem.

![learning-ojs-3-ce-add-discussion.png](./assets/learning-ojs-3-ce-copyediting-metadata.png)

Mais abaixo, na mesma janela, ele deve fazer o upload de uma cópia do texto editado.

Se alguma alteração for feita, clique no botão **Salvar** antes de sair dessa janela.

Você pode visualizar como a página Resumo ficaria, se publicada com os metadados atuais, clicando no botão Visualizar, na parte superior direita da página.

#### Respostas do autor

Para fazer isso, inicie uma nova discussão de edição de texto por meio do link *Adicionar comentários*.

Clique em **Continuar**, para prosseguir.

![Adicionar janela de Discussão.](./assets/learning-ojs-3-ce-add-discussion.png)

Mais adiante essa mesma janela, eles devem fazer o upload da cópia do arquivo editado.

![A área de upload do arquivo da janela Adicionar Discussão.](./assets/learning-ojs-3-ce-add-discussion2.png)

Para fazer isso, basta usar o link *Enviar arquivo*. Será aberta uma nova janela onde deve ser escolhido o *componente do artigo* (por exemplo, o texto do artigo) e ser feito o upload do arquivo.

![A tela de Upload de Arquivos.](./assets/learning-ojs-3-ce-upload1.png)

Clique no botão **Gravar Decisão Editorial** na parte inferior da janela.

Clique em **OK** para enviar a mensagem ao autor, que ficará visível na Discussão da edição de texto.

![learning-ojs-3-ce-discussion.png](./assets/learning-ojs-3-ce-upload2.png)

Agora você pode esperar pela resposta do autor.

![A etapa de confirmação do upload do arquivo.](./assets/learning-ojs-3-ce-upload3.png)

De volta à janela Adicionar, agora você pode ver o arquivo anexado.

![O novo arquivo de upload anexado à discussão.](./assets/learning-ojs-3-ce-upload4.png)

Clique em **OK** para enviar a mensagem.

Agora você pode ir em frente e carregar a versão final da edição editada para o painel Texto editado, próximo à parte inferior da tela.

![learning-ojs-3-ce-copyedited.png](./assets/learning-ojs-3-ce-discussion.png)

Use o link Enviar/Selecionar arquivos para carregar a versão final com o texto editado.

### Retorno do Autor

Assim que você tiver retorno do autor, você pode rever os seus comentários, verificando a resposta da discussão.

![A discussão anterior sobre edição de cópias agora contém um "1" na coluna de resposta.](./assets/learning-ojs-3-se-author-copyedits.png)

Para esta demonstração, selecionaremos a versão do Editor de cópias, **marcando a caixa** à esquerda desse arquivo.

![Uma resposta de amostra de um autor que aprova a edição.](./assets/learning-ojs-3-se-author-copyedits-reply.png)

### O arquivo final de texto editado

O arquivo agora está visível no painel *Texto editado* (próximo à parte inferior da tela), indicando ao editor que esta é a versão final, que está pronta para a etapa de Editoração.

![learning-ojs-3-ce-copyedited2.png](./assets/learning-ojs-3-ce-copyedited.png)

A etapa final consiste em informar ao Editor de Seção que a edição de texto foi concluída.

![A janela Enviar/Selecionar Arquivos.](./assets/learning-ojs-3-ce-copyedited-upload-select.png)

É importante observar aqui a presença de algumas opções:

1. Você pode usar o link Enviar Arquivo para carregar um novo arquivo (por exemplo, um arquivo com algumas alterações recentes, realizadas depois que você o mostrou ao autor);
2. Você pode selecionar a versão original do Autor (improvável);
3. Você pode selecionar a versão do Editor de Texto, que é a versão que você enviou ao autor (se você não fez mais alterações, escolha esta).

Na janela de discussão, adicione o Editor de Seção, uma linha de assunto e uma mensagem.

Clique **OK**.

Clique em **OK** para enviar a mensagem.

![Você também verá o arquivo revisado no painel Revisões.](./assets/learning-ojs-3-ce-copyedited2.png)

### Informe o Editor de Seção

O último passo é informar ao Editor de Seção que a edição da seção é concluída.

Seu trabalho como Editor de Texto agora está completo!

![Lista de Discussões de Revisões ](./assets/learning-ojs-3-ce-copyedited-final.png)

Na janela de discussão, adicione o Editor de Seção, uma linha de assunto e uma mensagem.

![Uma mensagem de exemplo do Editor de Cópia para o Editor de Seção](./assets/learning-ojs-3-ce-copyedited-discussion.png)

Clique em **OK**.

Nesse ponto, você pode se comunicar melhor com o Editor de Texto ou, se estiver satisfeito, mover a submissão para o estágio de Editoração.

![A mensagem adicionada à lista de discussões sobre edição.](./assets/learning-ojs-3-ce-copyedited-done.png)

Isso gerará um aviso oficial aos Autores de que a submissão está avançando para a próxima etapa.

### Passando para a Produção

O Editor de Seção receberá um e-mail que a cópia foi concluída e verá uma notificação nas discussões.

![A Fase de edição de cópias no painel do Editor da Seção](./assets/learning-ojs-3-se-copyedited-dash.png)

Clique em **Gravar Decisão Editorial** para prosseguir.

![A versão final copiada enviada para o painel Revisado. ](./assets/learning-ojs-3-se-copyedited-files.png)

Neste momento, você pode comunicar-se mais rapidamente com o revisor, se você estiver satisfeito, mova a submissão para a fase de produção.

Para ver a submissão com mais detalhes, selecione o botão **Ver Submissão**, que o levará ao registro da submissão.

Isso irá gerar uma notificação oficial aos autores de que a submissão irá para a próxima etapa.

![Janela de envio para produção com notificação ao autor.](./assets/learning-ojs-3-se-send-to-production.png)

Observe que o arquivo apropriado, do painel Texto editado, está incluído e será automaticamente transferido para Editoração.

Clique no botão **Gravar Decisão Editorial** para enviar a mensagem.

O estágio de edição de texto agora está concluído e o status de submissão será atualizado. O próximo capítulo cobre a etapa de Editoração e Publicação.

![O status "Enviado para produção".](./assets/learning-ojs3.2_edflow_decisionstatus_copyedit.png)

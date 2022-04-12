---
book: learning-ojs
version: 3.3
title: Aprendendo o Open Journal Systems 3.3 - Usuários e Papéis
---

# Usuários e Papéis

Esta seção fornece informações sobre o acesso a todas as contas de usuário associadas a sua revista, bem como sobre o gerenciamento de funções e permissões.

## Administração de Usuários

Este vídeo da PKP School explica como gerenciar usuários no OJS. Para assistir a outros vídeos desta série, visite [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).

{% include video.html id="_AAtxnFEodQ" provider="youtube" title="Vídeo sobre como gerenciar os usuários no OJS"%}

Além de gerenciar o site da revista, o Gerente da Revista também é responsável por todas as contas dos usuários no sistema.

Para visualizá-las, selecione Usuários e Papéis no menu à esquerda..

![Users and Roles screen with list of journal users](./assets/learning-ojs3.1-jm-users.png)

Se quiser exportar uma lista de todos os usuários registrados, você pode encontrar tal opção como um arquivo XML no menu **Ferramentas**. Se preferir seus dados de usuário em formato de planilha, você pode baixá-los como um arquivo CSV em **Estatísticas > Usuários**.

### Usuários

Os usuários são exibidos por ordem de sobrenome.

Você pode editar a conta de um usuário selecionando-o com seta azul, localizada no lado esquerdo do nome do usuário.

![Blue arrow selected by a user's name with options to edit their account](./assets/learning-ojs3.1-jm-users-edit.png)

Tal ação abre as opções de e-mail, editar usuário, desativar, remover, fazer login e mesclar usuários.

#### Usuário de e-mail

Se quiser enviar e-mail a um usuário sobre determinada submissão, pode-se usar o recurso de Discussão na submissão. Isto mantém toda a comunicação sobre a submissão em um único lugar.

Para enviar e-mail a um usuário que não esteja relacionado a uma submissão, siga os seguintes passos:

1. No painel de controle do periódico ou no painel do editor, vá para Usuários e Papéis > Usuários;
2. Encontre o usuário a que você deseja enviar um e-mail;
3. Clique na seta azul ao lado do nome do usuário para revelar opções;
4. Clique em E-mail. Uma caixa pop-up aparecerá, e você poderá digitar uma mensagem e enviá-la.

![Email pop-up box for emailing a user](./assets/learning-ojs-3-users-email.png)

No OJS 3.3, é possível  enviar um e-mail a vários usuários ao mesmo tempo usando a guia Notificar. Tal recurso deverá ser habilitado para cada revista pelo administrador da revista em Configurações do Website > E-mails em massa. O administrador do portal também pode desabilitar certas funções do periódico de receber e-mails em massa, acessando a área Revistas Hospedadas > Configurações do Portal.

Se ativado para o periódico pelo Administrador do portal, os e-mails podem ser enviados a todos os usuários em uma ou mais funções, como todos os gerentes de periódicos e/ou editores de seção. Consulte a [Site Administration > Site Settings](./site-administration#site-settings) para obter instruções de como habilitar o recurso.

Na guia Notificar, selecione as funções do usuário que você gostaria de enviar por e-mail. Digite o assunto e a mensagem. Você tem a opção de enviar uma cópia para seu próprio endereço de e-mail, além de receber uma notificação de status indicando que a mensagem foi enviada com sucesso. Você receberá uma notificação de status indicando que a mensagem foi enviada com sucesso.

![OJS 3.3 selecting multiple users to notify with an email message](./assets/learning-ojs3.3-users-roles-notify.png)

Tal recurso pode ser usado para enviar e-mails práticos e essenciais de serviço aos usuários que estão trabalhando na revista. Por exemplo, pode-se enviar e-mail a todos os editores de texto lembrando-os do "estilo da casa" para um determinado uso de palavras. Em todo caso, deve-se evitar usar o recurso para notificar um grande número de leitores, pois nesses casos o recurso de Notícias é preferível. Vá em [Website Settings > Setup > Announcements](./settings-website#announcements) para obter detalhes.

Se vários destinatários marcarem sua mensagem como spam, isso pode resultar no envio de todos os e-mails da revista para essa pasta. Deve-se tomar cuidado para não abusar de tal recurso, enviando e-mails em excesso. Familiarize-se com as leis anti-spam e de privacidade de e-mail em sua região, como CASL no Canadá e GDPR na UE e no Reino Unido. Note-se que não há a opção "desinscrever" para os usuários.

Não é possível adicionar endereços cc ou bcc além dos seus próprios ou anexos às mensagens. Para enviar anexos, você pode se servir do recurso de Discussão ou da Biblioteca de Submissão.

**Editar usuário** permite que você faça alterações na conta desse usuário.

![Edit information about a user](./assets/learning-ojs-3-users-edit-user.png)

**Desabilitar** mantém a conta no lugar, mas bloqueia o acesso do usuário.

**Remover** faz com que o usuário seja retirado de todas as funções no periódico, mas sua conta permanecerá no sistema. O único modo de removê-la é por meio da opção **Mesclar Usuários** (ver abaixo).

**Acessar Como** permite fazer login temporariamente como esse usuário e completar uma tarefa pendente.

#### Mesclar usuário

O recurso Mesclar Usuário permite vincular a conta de usuário, incluindo quaisquer submissões ou atribuições, a outra conta do sistema.

> **Nota**: Esta é a única maneira de excluir completamente uma conta.

Você pode criar uma conta fictícia (por exemplo, Usuários Excluídos) e usá-la para fundir as indesejadas.

Para mesclar usuários:

1. Em Usuários e Papéis > Usuários, encontre a conta que você deseja remover;
2. Clique na seta azul, ao lado do nome de usuário;
3. Clique em **Mesclar Usuário**, no menu que aparece abaixo;
4. Encontre a conta que você deseja unificar (o usuário a ser mantido);
5. Clique na seta azul, ao lado do nome de usuário;
6. Clique em **Mesclar neste usuário**
7. Pressione **OK** para confirmar.

#### Buscar Usuários

Quando a revista tem um grande número de usuários, essa ferramenta é bastante útil.

![Search for a journal user by name, email, and role](./assets/learning-ojs-3-users-search.png)

Isto pode ajudar a encontrar rapidamente um usuário pelo nome, sobrenome ou endereço de e-mail, ou a ver todos de determinada função.

**Nota**: Se você deixar o campo Pesquisar em branco, selecionar um Papel e clicar em Pesquisar, receberá uma lista de todos os usuários dessa função (por exemplo, todos os editores de texto).

![Search for all users with a given role](./assets/learning-ojs-3-users-search-roles.png)

#### Adicionar usuário

Para adicionar novo usuário ao seu periódico, selecione o link Incluir usuário. Isto abrirá uma nova janela com campos a serem preenchidos.

![Add a user and enter their information](./assets/learning-ojs-3-users-add-new.png)

Depois que esses campos forem preenchidos e você clicar em _Salvar_, será solicitado que você atribua funções à nova conta. Use o link _Adiconar função_ para abrir o seletor de função.

![Assign a role to a new user's account](./assets/learning-ojs-3-users-add-new-roles1.png)

Depois de adicionar todas as funções, clique no botão **Salvar**.

#### Registrar um usuário de outro periódico

Em instalações com vários periódicos, o Administrador pode registrar um usuário do periódico A como usuário no B.

1. Entrar no periódico B como Administrador;
2. Ir para Usuários e Papéis > Usuários;
3. Procure o usuário da Revista A que você deseja registrar na Revista B, marcando a caixa de seleção **Incluir usuários sem funções nesta revista**;
4. Quando o usuário aparecer, clique na seta azul, ao lado do nome dele;
5. Clique em **Editar usuário**;
6. Role para baixo até **Papéis**;
7. Marque a função que você quer que o usuário tenha no Periódico B;
8. Clique em **Salvar** no final do formulário.

#### Se um usuário não consegue fazer o login

Se um usuário não conseguir acessar o periódico, ele deverá utilizar a opção **Esqueci minha senha** e receberá, então, um link para redefinir a senha por e-mail. Em seguida, eles receberão um link de redefinição da senha por e-mail e poderão redefinir sua senha.

Se o usuário encontrar outras dificuldades, um Gerente ou Editor da Revista poderá fazer o seguinte:

1. Ir para Usuários e Papéis > Usuários;
2. Encontrar o usuário que não consegue fazer login e clicar na seta azul, ao lado de seu nome;
3. Clicar no botão **Editar usuário**, que aparece abaixo;
4. Digitar uma nova senha no campo **Senha**;
5. Selecione a caixa **" Usuário deverá alterar senha no próximo acesso"**;
6. Clique em **Salvar**, no final do formulário;
7. Enviar a nova senha para o usuário e instruí-lo a entrar com ela.

Se o usuário ainda não conseguir fazer o login, sua conta pode ter sido desativada. Para reativá-la deve-se:

1. Ir para Usuários e Papéis > Usuários;
2. Encontrar o usuário que não consegue fazer login e clicar na seta azul, ao lado de seu nome;
3. Observar, abaixo do nome do usuário, se uma das opções está ativa: **Habilitar** ou **Desabilitar**. Se a opção Desativar aparecer, a conta já está habilitada. Se Habilitar aparecer, deve-se clicar nela para reativar a conta.

<hr />

## Permissões e Papéis

This PKP School video explains how to manage roles in OJS. Para assistir a outros vídeos desta série, visite [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).

{% include video.html id="3sqD41OKuFs" provider="youtube" title="Video of how to manage roles in OJS"%}

O fluxo de trabalho OJS gira em torno de diferentes funções com diferentes permissões e responsabilidades para cada usuário, permitindo que eles acessem diferentes partes do fluxo de trabalho. Os usuários no sistema devem ter pelo menos uma função. Os usuários também podem ter mais de uma função, por exemplo, ser Gerente de Revista, Editor e Autor na mesma revista.

A cada função é primeiramente atribuído um nível de permissão, que irá definir amplamente o nível de acesso que um usuário tem a um determinado periódico. As funções são então personalizadas, fornecendo um nome para o cargo e concedendo ou restringindo o acesso a várias etapas do fluxo de trabalho editorial.

Há uma série de funções predefinidas que você pode usar e editar no OJS. Leia sobre as pré-definidas, organizadas por seu nível de permissão. Os papéis em _itálico_ são novos no OJS 3.

* O **Administrador do Portal** é o único usuário responsável pela administração de toda a instalação do OJS. Este nível de permissão não aparecerá nas listas de usuários ou nas configurações de papéis.
* Os **Gerentes da Revista** têm acesso a todo o fluxo de trabalho editorial, assim como a todas as outras configurações de revistas. Possibilidade de funções pré-definidas de Gerenciador da Revista: Gerente de Revista, Editor da Revista (anteriormente "Editor" no OJS 2) e Gerente de Produção.
* Os **Editores de Seção** têm acesso a todo o Fluxo de Trabalho Editorial, mas não podem fazer nenhuma alteração nas configurações do periódico. Funções de Editor de Seção pré-definidas disponíveis: Editor de seção e **Editor convidado**.
* Os **Assistentes de edição** podem acessar apenas as partes do Fluxo de Trabalho Editorial atribuídas à sua função. Já os assistentes de fluxo de trabalho editorial têm suas funções atribuídas do seguinte modo:
    * Etapas de submissão e revisão: *Coordenador de financiamento.*
    * Fase de edição de texto: *Editor de texto, coordenador de marketing e vendas.*
    * Estágio de editoração: *Designer*, *Indexador*, Editor de Layout, Leitor de prova.
* Os **Avaliadores** são usuários que aparecem quando você está atribuindo revisões no Fluxo de Trabalho Editorial. Eles têm acesso a essa etapa do fluxo editorial.
* Os **Autores** podem fazer novas submissões.
* Os **Leitores** podem acessar o site voltado para eles. Este é o nível mínimo de permissões concedidas a todos os usuários.
* Os **Gerentes de Assinaturas** podem editar as configurações de acesso ao site, bem como as configurações relacionadas às assinaturas. É um novo nível de permissões no OJS 3, com uma função pré-definida, *Gerente de Assinaturas*.

Funções pré-definidas e personalizadas podem ser verificadas na guia Papéis.

![Roles tab showing all current roles in the journal](./assets/learning-ojs3.1-jm-users-roles.png)

Nessa página, o usuário logado tem acesso a cada papel e a etapa editorial que cada um pode acessar. Um bom exemplo disso é o Editor de Texto, que só pode acessar a fase de revisão. Os editores de texto não podem pular para a etapa de revisão para ver o que aconteceu durante o processo. Consulte o capítulo Fluxo de Trabalho Editorial para mais informações.

Além de atribuir e editar as funções predefinidas, os Administradores do Portal e Gerentes da Revista também podem criar novas funções ou renomear as existentes.

### Editando Papéis

Desmarcar uma caixa removerá o acesso da etapa para os usuários dessa função.

A seleção da seta azul à esquerda do nome da função revela a opção de editar. Clicando nela, abre-se a janela de edição.

![Edit details of a role](./assets/learning-ojs3.1-jm-users-roles-edit.png)

**Nível de permissão**: Indica o que um usuário dessa função pode fazer em qualquer etapa.

O Assistente de Edição pode se comunicar com outros usuários e fazer upload e revisão de arquivos. Em Revistas onde apenas um usuário foi designado com a função de Assistente, ele será automaticamente designado para uma nova submissão. Uma vez que uma segunda pessoa tenha sido designada para a função a ação será interrompida.

**Nome da função**: Você pode usar esse campo para renomear qualquer função.

**Abreviação**: Cada função deve ter uma abreviação única.

**Designação de estágio**: Isto permite determinar quais usuários com a função podem acessar determinado processo no fluxo editorial.

**Opções de papéis**: Use as caixas de seleção para mostrar a qualquer pessoa com a função na lista de colaboradores \(por exemplo, a lista de autores\). A partir do OJS 3.2, as funções podem receber permissão para editar metadados de submissão ativando a caixa de seleção.

Use a segunda opção para determinar se os usuários podem se autorregistrar na função. Os autores e revisores são bons candidatos ao autorregistro. Certamente, você não gostaria de permitir que os usuários se autorregistrem como Gerentes ou Editores de Periódicos.

A terceira opção é útil para editores convidados ou, possivelmente, editores de seção, dependendo de seu fluxo de trabalho preferido e da cadeia de autoridade.

### Criar novo Papel

Use o link _Incluir Papel_ para abrir a janela onde você pode criar um novo papel para sua revista, incluindo a definição de quais etapas poderão ser acessadas e quanta permissão se deve ter.

<hr />

## Opções de Acesso ao Site

This PKP School video explains how to configure site options in OJS. Para assistir a outros vídeos desta série, visite[PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).

{% include video.html id="lqf4GmA01PA" provider="youtube" title="Video of how to configure site access options in OJS"%}

Esta página permite que você determine como os leitores podem acessar sua revista.

![Site access options tab under Users and Roles](./assets/learning-ojs3.1-jm-users-siteoptions.png)

**Restrições adicionais de acesso ao site e aos artigos**: Escolha entre as opções para limitar o acesso.

> Tenha em mente que, embora exigir registro a fim de ler o conteúdo de acesso aberto possa ser conveniente para seu rastreamento, isso pode dissuadir algumas pessoas de fazê-lo. Use com cuidado!

**Registro do usuário**: opção permite que você determine se os usuários podem criar suas próprias contas ou se devem ser cadastrados por um Gerente da Revista.

> Permitir que os usuários se registrem, mas somente nas funções de Autor, Revisor ou Leitor, é uma boa opção.

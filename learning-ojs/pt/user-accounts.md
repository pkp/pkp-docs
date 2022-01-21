---
book: learning-ojs
version: 3.3
title: Learning Open Journal Systems 3.3 - User Account Management
description: A guide for registering and managing your Open Journal Systems (OJS) account.
---

# Gerenciamento de conta de usuário

Quando um usuário loga no sistema, ele é direcionado para seu painel. A partir desse ponto, os usuários podem mudar as informações de perfil ou as configurações da conta, além de visualizar todas as funções do sistema a que tem acesso. A título de exemplo, um Revisor verá apenas as submissões que foram atribuídas a ele, enquanto um Editor verá todas as submissões no fluxo editorial. Mais informações a respeito dos papéis e níveis de permissão estão disponíveis no capítulo [capítulo Usuários e Papéis](./users-and-roles.md).

## Cadastrando em um Periódico

Visitantes não registrados de um periódico normalmente se cadastram como Leitor, Autor ou Avaliador. Os gerentes de periódicos podem remover a capacidade de auto-registro, e, nesse caso, é exibida uma notícia informando que o  cadastro está atualmente encerrado (ver Configurações de Periódicos), mas os gerentes de periódico sempre podem registrar usuários em qualquer momento, e para qualquer papel.

Para se cadastrar em um periódico, clique no link “Cadastro”, no canto superior direito.

![The Register link at the upper right corner of the journal site.](./assets/learning-ojs-3-registration.png)

Isso abrirá o Formulário de Cadastro a ser preenchido com as informações necessárias.

![The Registration Form.](./assets/learning-ojs-3-registration-form.png)

Todos os campos com asterisco (Primeiro Nome, Sobrenome, Afiliação, País, E-mail, Nome de Usuário, Senha, Repetir Senha) são obrigatórios. Caso o periódico seja multilíngue, será necessário selecionar a língua de preferência.

O usuário é cadastrado automaticamente como Leitor e Autor. Também será dada a opção de se registrar como Avaliador.

Não é permitido ao usuário se registrar para um papel editorial (como Editor, Editor de seção, Editor de Texto, Editor de layout, Revisor ou Gerente de periódico). Se for preciso se inscrever nesse nível, o atual Gerente da Revista ou Administrador do portal deve ser contatado.

<hr />

## Visualizando e alterando seu perfil

Para visualizar e editar seu perfil, faça login e clique no link de seu nome de usuário no canto superior direito. Escolha a opção “Perfil”.

![The View Profile menu.](./assets/learning-ojs3.1-ed-view-profile.png)

A partir desse ponto, ao escolher as diferentes abas, você pode atualizar detalhes pessoais, informações de contato, mudar seus papéis, adicionar imagem pessoal (publicado por alguns periódicos junto ao artigo ou em uma lista de editores), determinar as configurações de notificação ou atualizar sua senha.

Em **Notificações**, você pode configurar que tipos de notificações receberá do periódico na ocorrência de eventos, como a publicação de uma nova edição de periódico ou a ocorrência de atividade em uma submissão na qual você está envolvido.

* Marque “Habilitar esses tipos de notificações”, se quiser ver  a notificação do evento no seu painel quando fizer login no site.
* Marque “Não me mande um email para esse tipo de notificação” se você não quiser receber uma notificação por e-mail a respeito do evento.

![The Notifications tab where you can manage notifications.](./assets/learning-ojs-3-user-notifications.png)

A **aba de API**, no perfil do usuário, permite que você use a API REST do OJS para interagir com aplicações externas.  Entretanto, a maioria dos usuários não usa a API e pode ignorar essa aba.

## Alterando sua senha

Você pode alterar sua senha da seguinte forma:

1. Faça login no periódico;
2. Selecione seu nome de usuário e “Visualizar Perfil” no canto superior direito da tela;
3. Selecione a aba “Senha”;
4. Insira a sua senha atual e em seguida a nova senha, duas vezes;
5. Clique em “Salvar”.

![The password reset screen.](./assets/learning-ojs3.1-ed-change-pw.png)

Sua senha agora foi alterada.

### Se você esquecer sua senha

Recuperar sua senha é um processo de três passos:

Primeiro você precisa solicitar uma nova senha:

1. Clique no link de **Login** , no canto superior direito da barra de navegação;
2. Clique no link **Esqueci a senha**, na página seguinte;
3. Insira seu endereço de e-mail;
4. Clique em **Alterar senha**

Em seguida, você deve verificar sua conta de e-mail e confirmar sua solicitação:

1. Abra sua conta de e-mail;
2. Abra a mensagem do e-mail de confirmação do periódico (talvez precise checar o diretório de Spam);
3. Clique no link para confirmar que você de fato solicitou a redefinição de senha. Você será redirecionado de volta ao periódico em questão, e o sistema enviará ao seu e-mail uma nova senha.

Agora você pode recuperar sua nova senha temporária e fazer login:

1. Volte à sua conta de e-mail;
2. Abra a mensagem de e-mail que contém sua senha temporária (talvez precise checar o diretório de Spam);
3. Faça login no periódico com sua senha temporária;
4. Faça login no periódico com sua senha temporária;

Se precisar de mais assistência, contate a equipe editorial do periódico. Uma lista de contatos deve estar disponível na página **Sobre**.

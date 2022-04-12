---
title: Como usar o plugin ORCID em OJS e OPS
---

# Usando o Plugin ORCID

Agora que você tem [as credenciais ORCID obtidas, ativou e configurou o plugin](./installation-setup.md), você pode começar a usá-lo no servidor de pré-impressão de seu diário.

## Informar seus interessados

Uma vez que o seu plugin ORCID está ativado e em produção, você pode querer deixar seus stakeholders (autores, editores de periódicos, etc.) saberem que o plugin ORCID está disponível agora, e certifique-se de que eles sabem o que é ORCID e como ele pode ajudá-los. Há várias maneiras de o fazer. Uma dessas maneiras é utilizando o [recurso de Anúncios OJS](https://docs.pkp.sfu.ca/learning-ojs/en/settings-website#announcements) para anunciar aos usuários registrados que o plugin ORCID está em uso. Como parte de tal anúncio, você pode querer apontar usuários para a página do plugin [Sobre a página do plugin ORCID](./introduction.md) caso eles não estejam familiarizados com ORCID. Se o seu diário tem uma presença nas redes sociais ou uma newsletter você também pode informar os usuários por meio desses meios.

## Funcionalidades do plugin

O plugin ORCID permite executar as funções descritas abaixo. Alguns deles acontecerão automaticamente quando o plugin estiver ativado e configurado. Outros exigem uma acção adicional da parte dos editores ou dos autores.

### Autores podem conectar seus iDs ORCID a suas contas OJS

Usuários (incluindo autores e colaboradores) podem fazer isso de duas maneiras:

* Durante o registro de uma nova conta, clicando em "Criar ou Conectar seu ORCID iD"

![Clique em Criar ou Conectar seu botão iD ORCID durante o registro de uma nova conta.](./assets/Register_connect_ORCID.png)

* Para contas existentes - clicando em "Criar ou conectar seu ORCID iD" no Perfil > Público. Para obter detalhes, veja este [vídeo passo a passo da autenticação de perfil](https://vimeo.com/374415404).

![Clique em Criar ou Conectar seu botão iD ORCID durante o registro de uma nova conta.](./assets/Profile_connect_ORCID.png)

Observe que se um autor conectou seu registro ORCID à sua conta OJS/OPS, artigos futuros e impressões que eles enviarem serão automaticamente conectados ao ORCID, desde que eles façam login no site usando sua conta de autor existente. Entretanto, se um autor é um colaborador (ou co-autor) em um envio, sua conta de usuário OJS/OPS não será vinculada ao envio e eles precisam ser solicitados a conectar o envio ao seu registro ORCID.

### Os editores podem convidar colaboradores para conectar seus iDs ORCID à publicação

Para convidar co-autores/colaboradores para conectar seus iDs ORCID, marque a caixa de seleção "Enviar email para solicitar autorização ORCID do colaborador" na tela Editar o Colaborador. Para obter detalhes, veja este [vídeo passo a passo da autenticação de perfil](https://vimeo.com/374416189).

![Marque a caixa de seleção para enviar e-mail para solicitar autorização ORCID do colaborador.](./assets/Request_ORCID_contributor.png)

### O plugin ORCID pode enviar pedido automático aos colaboradores para conectar seus iDs ORCID

Como alternativa ao convite manual dos colaboradores para conectar seus iDs ORCID, o Gerente de Periódico/Administrador pode configurar o plugin ORCID para enviar e-mails automáticos aos colaboradores. Para fazer isso, nas configurações de email do plugin marque a caixa "Enviar email para solicitar autorização ORCID dos autores quando um artigo é aceito".

![Tela do plugin ORCID com a caixa de seleção delineada para enviar e-mail para requisitar autenticação ORCID dos autores.](./assets/orcid_plugin_auto_emails.png)

### O Plugin ORCID exibirá iDs ORCID dos contribuidores na página de publicação

Os iDs autenticados dos autores e dos contribuidores serão exibidos publicamente no artigo do diário ou na página de pré-impressão, que irá vincular ao registro ORCID do contribuidor.

![Página de artigo exibindo iDs autenticados em cada um dos nomes dos três colaboradores.](./assets/orcid-id-example.png)

### O Plugin ORCID exibirá informações de artigo no registro ORCID do autor (apenas API de membro)

Além de todas as funcionalidades acima disponíveis tanto nas APIs públicas quanto nas dos membros, servidores de periódicos/pré-impressão usando API de membro ORCID enviarão automaticamente informações do artigo para o registro ORCID do autor após a publicação. Para obter detalhes, consulte o [vídeo passo a passo da publicação do artigo com a API de membro do ORCID](https://vimeo.com/374417678).

![Informações do artigo exibidas no registro ORCID de um autor.](./assets/orcid_in_author_record.png)

Quando uma obra é adicionada a um registro ORCID, a "fonte" também é exibida. Se uma pessoa adiciona um trabalho em seu próprio registro, a "fonte" será o nome da pessoa. Se uma obra for adicionada via API, como no caso do OJS, a "fonte" aparecerá como qualquer "nome do cliente" inserido quando as credenciais da API ORCID forem solicitadas. Se o plugin ORCID está sendo usado para apenas um único diário, o nome do fonte/cliente normalmente é apenas o nome do diário. Se o plugin ORCID é usado para vários periódicos na mesma instância, então o nome fonte/cliente precisaria ser algo mais amplo, como "Univ. de XYZ Jornal Aberto."

![Informações do artigo e a fonte de uma entrada exibida no registro ORCID de um autor.](./assets/orcid-publication-source.png)

*Por favor, note:* que as informações sobre a origem da publicação não funcionam atualmente para o OPS.

### Altera um artigo existente para incluir um ID ORCID

Para uma visão geral visual desse processo, veja o [progresso de vídeo da publicação do artigo](https://vimeo.com/374417678).

### Remover um ORCID iD de uma conta de usuário

Pode haver uma situação em que você precisa remover o ORCID de um autor. Isso só pode ser feito por um Administrador:

1. Quando conectado como Administrador, no menu à esquerda do OJS, selecione Usuários & Funções > Usuários
2. Localize o nome do usuário para quem você deseja remover o ORCID iD. Clique na pequena seta ao lado do nome da pessoa e selecione Usuário Editar
3. Uma vez na página Editar Usuário, clique em Mais Detalhes do Usuário
4. Encontre a caixa iD ORCID e exclua o ORCID iD
5. Clique em OK na parte inferior da página

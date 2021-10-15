---
book: learning-ojs
version: 3.3
title: Learning Open Journal Systems 3.3 - Site Administration
---

# Administração do Portal

Como parte da instalação do OJS, você terá criado uma conta de usuário Administrador do Portal. Ao fazer login com essa conta, você terá acesso às configurações do Administrador do Portal no Painel.

Você poderá criar novas instâncias de revistas hospedadas, gerenciar o suporte a idiomas em seu sistema e executar outras funções administrativas.

Mais informações técnicas sobre como administrar um site OJS, incluindo atualizações, e-mail, estatísticas e importação e exportação, estão disponíveis no [Guia do Administrador](https://docs.pkp.sfu.ca/admin-guide/en/).

## Administração do Portal

Para chegar à Administração do Portal, efetue login como Administrador do Portal e escolha Administração no menu à esquerda.

![OJS site admin main menu with 2 options: site management and administrative functions.](./assets/learning-ojs3.1-sa-site-admin.png)

### Revistas Hospedadas

A partir daqui, escolha as revistas hospedadas. Na página resultante, você verá todos os periódicos dessa instalação do OJS. No exemplo abaixo, existe apenas um.

![OJS hosted journals menu with 1 existing journal.](./assets/learning-ojs3.1-sa-hosted-journals.png)

Para editar os periódicos existentes, clique na seta azul à esquerda do nome do periódico. Você verá opções para editar, remover ou atualizar as configurações.

![Existing journal editing options: edit, remove, settings wizard, users.](./assets/learning-ojs3.1-sa-hosted-journals-edit.png)

A opção **Editar** permitirá que você altere o título, a descrição ou o caminho.

![Existing journal editing screen with title, description and path fields available to edit.](./assets/learning-ojs-3-ch4-hosted-journals-edit-modal.png)

A opção **Remover** permitirá que você exclua o periódico  da instalação. Você será solicitado a confirmar se realmente deseja fazer isso, pois é irreversível.

![Confirmation screen for journal deletion.](./assets/learning-ojs-3-ch4-hosted-journals-remove.png)

A opção **Assistente de configuração** levará você às várias opções de configuração desse periódico.

A opção Restringir e-mails em Massa permite que o administrador do periódico desative a capacidade de enviar e-mails em massa para determinados papéis. O recurso de e-mail em massa pode ser habilitado em Configuração do site > E-mails em massa. Um gerente do periódico não poderá enviar e-mails em massa para nenhum papel que você selecionar na configuração “Desativar Papéis”. Use esta configuração para limitar o abuso do recurso de notificação por e-mail. Por exemplo, pode ser mais seguro desativar e-mails em massa para leitores, autores ou outros grandes grupos de usuários que não consentiram em receber esses e-mails.

![Settings wizard screen with the restrict bulk emails tab selected.](./assets/learning-ojs3.3-admin-restrict-bulk-emails.png)

Veremos as configurações restantes em detalhes nos capítulos sobre Configurações.

![Settings wizard screen with the masthead tab selected.](./assets/learning-ojs-3-ch4-hosted-journals-settings-wiz.png)

**Usuários** permitirá que você adicione e gerencie usuários associados a este periódico.

![Users tab with a list of current users.](./assets/learning-ojs3.1-sa-hosted-journals-users.png)

De volta à página Revistas Hospedadas, você pode usar o link Criar Revista para adicionar um novo periódico a esta instalação do OJS. No formulário resultante, preencha os campos com as novas informações.

![Create journal screen with title, description and path fields available to fill out.](./assets/learning-ojs-3-ch4-hosted-journals-create.png)

> Nota: Se você deseja que o novo periódico não seja visível ainda, desmarque a caixa _Permitir Acesso Livre a esta revista no portal_.

### Configurações do Website

Essa seção aparecerá se você tiver dois ou mais periódicos e permitirá adicionar informações sobre a instalação geral do OJS, não periódicos individuais.

#### Configuração do Site

Inclui nome e logotipo do site, bem como declaração introdutória sobre o site, rodapé do site, opção de redirecionamento (se você planeja ter apenas um periódico nessa instalação), informações de contato, comprimento mínimo de senha para usuários registrados, folha de estilo e opções de tema e gerenciamento da barra lateral.

Você terá a oportunidade de fornecer detalhes sobre seu(s) periódico(s) individual(is) em estágio posterior.

![OJS admin menu with site setup tab selected.](./assets/learning-ojs3.1-sa-site-settings.png)

#### Idiomas

O OJS foi projetado para ser um sistema multilíngue, permitindo que periódicos, mesmo que traduzidos para vários idiomas, sejam hospedados em um único site. Assim, ao instalar o OJS, você pode selecionar um ou mais idiomas para o seu site.

O Administrador do Portal pode definir o idioma padrão e instalar locais adicionais para tornar outros idiomas disponíveis para uso por periódicos. Os gerentes de periódicos podem, então, gerenciar suas próprias configurações de idioma em Configurações do Website > Idiomas. Consulte o capítulo [Configurações do Website](./settings-website) para obter detalhes.

Em Administração > Configurações do Website > Idiomas, você pode ver uma lista de idiomas instalados em seu site, habilitá-los e definir qualquer idioma como Localidade padrão, o que significa que é o idioma que os usuários verão pela primeira vez ao visitar o site.

![OJS admin menu with languages tab selected.](./assets/learning-ojs3.1-sa-languages.png)

Para adicionar outro idioma:

1. Clique em Instalar Idioma;
2. Marque os Idiomas que você gostaria de instalar;
3. Clique em Salvar.

Depois de instalar o novo idioma, você deverá habilitá-lo na página Configurações do Website > Idiomas.  A configuração adicional da disponibilidade do idioma no site pode ser feita em Configurações do Website > Idiomas, por um Gerente da Revista. Consulte o capítulo [Configurações do Website](./settings-website) para obter detalhes.

O OJS 3 ainda não tem tantas traduções quanto o OJS 2, mas esperamos ter mais contribuições com o tempo. Contribuições são sempre bem vindas.

#### Plugins

Aqui você pode escolher ativar ou desativar vários plugins, tornando-os disponíveis (ou não) para todos os periódicos nessa instalação do OJS.

![OJS admin menu with plugins tab selected.](./assets/learning-ojs3.1-sa-plugins.png)

#### Menus de Navegação

Use essa seção para modificar os menus de todo o site. Você pode aprender mais sobre a configuração de menus no capítulo Configurações do Website.

![OJS admin menu with navigation menus tab selected.](./assets/learning-ojs3.1-sa-menus.png)

#### E-mails em Massa

O OJS 3.3 tem a opção de permitir o envio de e-mails em massa para vários grupos de usuários de um periódico ao mesmo tempo. Veja [Usuários e Papéis > Usuários de E-mail](./users-and-roles#email-users). Como Administrador do Portal, você pode usar as Configurações do Website para selecionar os Revistas Hospedadas que terão permissão para enviar e-mails em massa.

Observe que o uso indevido desse recurso para enviar e-mail não solicitado pode violar as leis anti-spam em algumas jurisdições e resultar no bloqueio dos e-mails do seu servidor como spam. Procure aconselhamento técnico antes de habilitar esse recurso e considere consultar os gerentes de periódicos para garantir que seja usado de maneira adequada.

![OJS admin site settings with bulk emails tab selected.](./assets/learning-ojs3.3-site-settings-bulk-emails.png)

É possível desativar o envio de e-mails em massa para determinados papéis de periódicos individuais em [Revistas Hospedadas](#hosted-journals) > Assistente de Configurações.

### Próximos Passos

Depois de criar um periódico e definir as Configurações do Website, você pode criar uma conta de usuário para o Editor ou Gerente da Revista - consulte o capítulo [Usuários e Papéis](./users-and-roles.md) para obter detalhes.

<hr />

## Funções Administrativas

Essa seção fornece informações detalhadas sobre o servidor no qual a instalação do OJS está sendo executada.

![OJS site admin main menu with 2 options: site management and administrative functions.](./assets/learning-ojs3.1-sa-admin-functions.png)

### Informação sobre o Sistema

Use essa seção para descobrir detalhes sobre o servidor que está executando sua instalação.

![System information screen displaying current version, version history and server information.](./assets/learning-ojs3.1-sa-sysinfo.png)

As informações da versão do OJS mostram qual versão está instalada atualmente e seu histórico de versões, incluindo quaisquer atualizações. Você pode clicar no link Verificar atualizações para ver se está usando a versão mais recente do OJS.

As Informações do Servidor fornecem detalhes sobre o ambiente do servidor que hospeda a instalação do OJS.

A seção Configuração do OJS exibe todas as opções de configuração e seus valores conforme estão em _config.inc.php_.

Você pode encontrar mais informações sobre os parâmetros de configuração _config.inc.php_ no próprio arquivo.

A seção final desta página exibe informações adicionais do servidor: sistema operacional, versão do PHP, servidor e informações do banco de dados. Você também pode visualizar informações estendidas de PHP clicando no link Informações Estendidas de PHP (isso exibe a saída de `phpinfo()`)

Todas essas informações podem ser úteis ao tentar solucionar um problema.

### Expirar Sessões de Usuário

Clicando em _Expirar Sessões de Usuários_, todas as sessões de usuário ativas no sistema são limpas imediatamente, exigindo que qualquer usuário que esteja conectado no momento faça login no sistema novamente. Isso pode ser útil antes de uma atualização, para garantir que todos os usuários estejam desconectados.

### Limpar Caches de Dados

Ao clicar em _Limpar Caches de Dados_ todos os dados em cache são limpos, incluindo informações de localidade, cache de ajuda e cache de pesquisa. Essa função pode ser útil para forçar o recarregamento dos dados após as personalizações terem sido feitas.

### Limpar Cache de Template

Clicando em _Limpar Cache de Template_, são limpas todas as versões em cache de templates HTML. Essa função pode ser útil para forçar o recarregamento dos templates após as personalizações terem sido feitas.

### Limpar Registros (logs) de Tarefas Agendadas

Se as tarefas agendadas tiverem sido habilitadas para o seu periódico, clicando em Limpar _Registros (logs) de Tarefas Agendadas_, você excluirá os arquivos de log de execução de tarefas de seu servidor. Os arquivos de log de execução incluem datas que correspondem a tarefas agendadas previamente concluídas (por exemplo, envio de lembretes de revisão automática por e-mail).

- - -
Como usar o plugin ORCID em OJS e OPS
- - -

# Sobre o Plugin ORCID

Para usar o plugin, você primeiro precisará obter credenciais de API de ORCID públicas ou de membro (Client ID e Client Secret) e, em seguida, configurar o plugin ORCID em OJS/OPS com estas informações.

Este capítulo explica como obter credenciais de produção (ao vivo) e adicioná-las ao plugin ORCID em seu OJS/OPS. Você também pode testar o plugin com credenciais Sandbox primeiro antes de usar as credenciais ao vivo. Para mais detalhes sobre como testar no Sandbox e por que você pode querer, consulte o [Apêndice: Testando o capítulo](./appendix-testing-orcid-sandbox.md) ORCID Sandbox.

**IMPORTANTE: não ative o plugin até que você tenha as credenciais e esteja pronto para configurar o plugin.**

## Solicitar credenciais de API pública

### 1. Registre-se para um ORCID iD

O registro iD ORCID é gratuito e só requer o seu nome e e-mail.

Se você já tiver um ORCID iD, pule para [2. Entre no seu ORCID iD](#2-sign-into-your-orcid-id).

1. Navegue até [o site ORCID](https://orcid.org/)
2. Clique no menu [INICIAR / REGISTRAR](https://orcid.org/signin) no canto superior direito ![Página inicial do ORCID com o botão de login / registro apontada.](./assets/orcid_signup.png)
3. Crie uma conta com o seu e-mail ou entre com a sua conta institucional (se a sua instituição estiver configurada para uma conta única ORCID). ![O ORCID entra na página com ênfase na opção de registo.](./assets/orcid_signup_register.png)
4. Se precisar de instruções adicionais para registro, a [Registre sua página ORCID](https://support.orcid.org/hc/en-us/articles/360006897454-Register-your-ORCID-iD) contém instruções detalhadas passo a passo.

### 2. Entre no seu ORCID iD

1. Navegue até [o site ORCID](https://orcid.org/)
2. Clique no menu [INICIAR / REGISTRAR](https://orcid.org/signin) no canto superior direito
3. Entre com sua conta de e-mail existente ou através de suas credenciais institucionais (se a sua instituição estiver configurada para uma assinatura única ORCID)

![O ORCID entrou na página com campos enfatizados de e-mail ou ORCID iD e senha.](./assets/orcid_signin.png)

### 3. Navegar para Ferramentas de Desenvolvedor

Clique no seu nome no canto superior direito e selecione "Ferramentas de Desenvolvedor" na caixa de seleção.

![Registro ORCID com o nome de conta suspenso expandido e Ferramentas de Desenvolvedor selecionado.](./assets/orcid_dev_tools.png)

### 4. Selecione para registrar para a API pública

Clique no botão "Registre-se para a API pública do ORCID gratuita".

Ser-lhe-á pedido que leia e dê o seu consentimento aos termos do serviço.

![Página Ferramentas de Desenvolvedor ORCID com o botão realçado Registrar-se para a API pública ORCID gratuita.](./assets/orcid_dev_tools_register.png)

### 5. Preencha o formulário de registro

No formulário de cadastro, digite:

* Nome do seu periódico
* Sua URL do periódico
* Uma breve mensagem sobre o seu diário - ele será exibido aos usuários quando eles conectarem seus iDs ORCID
* URI de redirecionamento - esta é a página para a qual os seus usuários serão levados depois de eles terem autenticado seus iDs ORCID. Deve começar com "https://" e incluir o link para o diário. Para detalhes e exemplos, veja a [seção de redirecionamento ORCID](#orcid-redirect-uris) abaixo.

![Formulário de solicitação da API pública do desenvolvedor ORCID.](./assets/orcid_dev_tools_form.png)

### 6. Salve o formulário e receba suas credenciais

1. Clique no ícone de salvar na parte inferior direita para salvar o formulário. ![Formulário de solicitação de desenvolvedor ORCID para ferramentas públicas API com o ícone de salvar apontado.](./assets/orcid_dev_tools_form_save.png)
2. Suas credenciais (Client ID e Client Secret) serão exibidas imediatamente. Copie essas credenciais no Plugin de Perfil ORCID OJS/OPS ORCID conforme explicado abaixo. ![Formulário de solicitação de desenvolvedores ORCID e ferramentas públicas API com ID de Cliente e Segredo exibido.](./assets/orcid_dev_tools_form_credentials.png)

## Solicitar credenciais de API pública

As credenciais de membro da API estão conectadas a uma organização membro do ORCID. Sua organização deve ser um membro ORCID para solicitar as credenciais de API do membro. Se o seu diário estiver associado a uma instituição, entre em contato com a biblioteca da instituição para perguntar sobre a filiação ORCID e as credenciais API. Você também pode querer verificar se sua organização pertence a um [consórcio local](https://orcid.org/consortia), conforme você pode receber ajuda do consórcio. Você também pode contatar o ORCID diretamente em support@orcid.org.

Para solicitar as credenciais de membro da API, preencha o formulário para [cadastrar uma aplicação de cliente: API de membro de produção - festa confiável](https://orcid.org/content/register-client-application-production-trusted-party). Depois de enviar o formulário, ORCID enviará um e-mail para o seu cliente de produção ID e Segredo do Cliente para você.

### URIs de redirecionamento ORCID

Quando você se registrar para as credenciais de API do ORCID, você precisará inserir pelo menos uma URI de redirecionamento, que é o local do diário para o qual seus usuários serão enviados após autorizar OJS/OPS a se conectar ao seu registro ORCID. O URI deve começar com "https://" e incluir o link para o diário como parte do URI. Por exemplo:

* Isto funciona (por exemplo, para uma instalação de multi-diário): https://exemplo.com
* Isso funciona (para um único diário): https://example.com/index.php/testJournal
* Isso NÃO funciona: https://example.com/index.php/testJournal/index

A opção de host permite que qualquer URI sob esse host seja usado como um URI de redirecionamento. Em várias instâncias de periódicos, certifique-se de escolher a URL base do seu domínio e não o diário individual para evitar o redirecionamento de erros. Para periódicos individuais é importante usar o caminho do diário (normalmente algo como "index.php/testJournal", sem qualquer informação no final como acima). Qualquer informação adicional no URI fará com que o redirecionamento não funcione.

Para mais detalhes sobre URIs de redirecionamento, consulte a página de suporte do ORCID para [APIs públicas](https://support.orcid.org/hc/en-us/articles/360006897174-Register-a-public-API-client-application) e [membros APIs](https://support.orcid.org/hc/en-us/articles/360006973913), respectivamente e a [thread de redirecionamento de URI no Fórum PKP](https://forum.pkp.sfu.ca/t/orcid-oauth2-redirect-uris-or-callback-urls-for-ojs).

**Atenção**: ao se registrar para receber as credenciais API dos membros, as organizações são obrigadas a indicar o "Nome do Cliente" juntamente com o(s) URI(s) de redirecionamento(s). Ao trabalhar com vários diários como parte de uma instância OJS, o Nome do Cliente usado deve ser amplo o suficiente para servir como fonte para todos os periódicos hospedados em sua(s) instância(s), como Nome do Cliente é o que aparecerá como "fonte" de dados quando uma obra do OJS for escrita em um registro ORCID (e.. “Serviço de hospedagem de periódicos da Universidade ABC”). No entanto, se você planeja instalar apenas um diário do seu domínio e usar ORCID para esse diário, então o nome do cliente pode ser indicado como o nome do diário.

Ao se registrar na Sandbox ou credenciais de [Produção API do membro](https://orcid.org/content/register-client-application-production-trusted-party) através de ORCID, embora pareça haver um limite de cinco redirecionamentos, você pode adicionar o máximo que quiser à secção "Notas para ORCID". Se você precisar ajustar, adicionar ou remover URIs, você pode reenviar o formulário e indicar que ele é para uma aplicação existente.

## Habilitar e configurar a extensão de Perfil ORCID em OJS/OPS

Depois de obter seu Client ID e Client Secret de ORCID, você pode ativar e configurar o plugin em OJS/OPS.

Primeiro, ative o plugin ORCID para cada diário (OJS) ou servidor de pré-impressão (OPS) na sua instalação:

1. Quando estiver logado em OJS/OPS como administrador, vá em Configurações > Site > Plugins
2. Clique na Galeria de Plugins e selecione o perfil ORCID da lista

Existem três cenários possíveis para a configuração do plugin, com base no seu caso de uso:

1. Se você tem um único diário ou instalação de servidor de pré-impressão, configure o plugin seguindo as instruções abaixo sob a Configuração de Servidor de Per Journal/Preprint.
2. Se você tem uma instalação de servidor multi-periódicos ou multi-pré-impressão, mas não quer ativar o plugin ORCID para todos, configurare cada servidor de diário ou pré-impressão separadamente seguindo as instruções abaixo sob a configuração do servidor de Per Journal/Preprint, usando as mesmas credenciais ORCID API (Client ID e Segredo do Cliente) para cada um.
3. Se você tem uma instalação de servidor multi-periódicos ou multi-pré-impressão e deseja ativar o plugin ORCID em todo o site, siga as [instruções abaixo na configuração do site](#site-wide-setup).

### Por Diário/Servidor de Predefinições

Se você quiser ativar o plugin ORCID para um único diário (OJS) ou servidor de pré-impressão (OPS):

1. Quando estiver logado em OJS/OPS como administrador, vá em Configurações > Site > Plugins
2. Em Plugins instalados localizam o plugin ORCID
3. Marque a caixa de seleção para ativar para o plugin
4. Clique na seta azul para a esquerda do nome do plugin para fazer "Configurações", então abra as Configurações. Selecione o seu tipo de API e digite o seu ID de Cliente e Segredo do Cliente.

![Instalação para o plugin OJS ORCID com ID de cliente público e secreto inserido.](./assets/orcid_plugin_setup.png)

Para passo a passo visual, veja este [vídeo de configuração do plugin ORCID](https://vimeo.com/374414746).

#### Configurações de e-mail

Para fazer isso, nas configurações de email do plugin marque a caixa "Enviar email para solicitar autorização ORCID dos autores quando um artigo é aceito.” Se marcado, O OJS/OPS enviará um e-mail automaticamente para autores que não tenham vinculado seus iDs ORCID quando o artigo for publicado, pedindo-lhes que vinculem seus iDs. Esta solicitação será enviada usando o modelo de e-mail "ORCID Collect Author Id" (API ublicada) ou "ORCID Request Author Authorization" (API de membro).

![Tela do plugin ORCID com a caixa de seleção delineada para enviar e-mail para requisitar autenticação ORCID dos autores.](./assets/orcid_plugin_auto_emails.png)

### Configuração do site

Para instalações de servidores multi-periódicos e multi-pré-impressão, o plugin pode ser todo configurado no site em `config.inc.php` para habilitar o plugin ORCID para todos os diários. Observe que as configurações de todo o site através do `config.inc.php` substituem quaisquer configurações individuais existentes do plugin. No entanto, o plugin pode ser habilitado/desabilitado individualmente para periódicos, e cada diário pode gerenciar suas próprias configurações de e-mail conforme descrito acima. Adicionar credenciais no config.inc.php esconde o Segredo do Cliente de Gerentes de Journal/Servidor, o que pode ser preferido se você tiver credenciais institucionais para ORCID. Adicione a seção seguinte ao seu arquivo `config.inc.php`:

![Configurações do arquivo de configuração OJS](./assets/orcid-config-inc-php-settings.png)

Observe que a `api_url` precisa terminar com uma barra.

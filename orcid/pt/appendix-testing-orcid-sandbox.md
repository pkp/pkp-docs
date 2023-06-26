- - -
título: Testando no ORCID Sandbox - ORCID Plugin Guide para OJS e OPS
- - -

# Apêndice: Testando na Sandbox ORCID

O ORCID fornece a opção de testar o plugin ORCID em um ambiente Sandbox antes de usá-lo no ambiente Live Production de seu diário OJS ou servidor OPS. Testar o plugin na Sandbox permitirá que você faça o seguinte:

* Verifique se o plugin ORCID funciona na sua instalação
* Aprenda a usar o plugin e experimente todos os seus recursos sem afetar nenhum ID ORCID real ou enviar e-mails reais para pesquisadores
* Teste a API de membros ORCID para ver como funciona, mesmo que você não seja um membro ORCID

Este capítulo explica como testar o plugin.

## Obter credenciais de API da ORCID Sandbox

O processo para obter suas credenciais de API do ORCID Sandbox irá variar dependendo se você planeja usar a API pública ORCID ou a API do membro ORCID.

### Sandbox da API Pública

Grátis e disponível para todos, a API pública permite a autenticação iD ORCID e leitura de dados públicos de registros ORCID.

Credenciais públicas de API estão conectadas ao ORCID de um indivíduo. Para obter as credenciais da Sandbox da API pública:

1. Registre uma conta Sandbox ORCID iD no [site ORCID sandbox](https://sandbox.orcid.org).
2. Acesse seu registro Sandbox ORCID.
3. Vá para a guia "Ferramentas de Desenvolvedor" e siga as instruções para [registrar uma aplicação pública do cliente API](https://support.orcid.org/hc/en-us/articles/360006897174-Register-a-public-API-client-application). Consulte a nota sobre "URIs de redirecionamento ORCID" abaixo para obter orientações sobre o que inserir para seus URIs de redirecionamento.

### API de membros Sandbox

A API de membros requer participação institucional ORCID. Somando às funcionalidades da API pública, a API do membro permite a leitura de dados de "grupos confiáveis" de registros ORCID, além de adicionar/atualizar automaticamente os metadados nos registros ORCID. Você também pode consultar o diretório de membros do ORCID para ver se sua organização já é um [membro ORCID](https://orcid.org/members), ou revise [ORCID, as informações de participação](https://orcid.org/about/membership) se sua organização estiver interessada em se tornar um membro ORCID.

As credenciais de membro da API estão conectadas a uma organização membro do ORCID. Sua organização deve ser um membro ORCID para solicitar as credenciais de API do membro. Você também pode querer verificar se sua organização pertence a um [consórcio local](https://orcid.org/consortia), assim como você pode receber ajuda do consórcio. Solicitar credenciais de API pública:

1. Preencha o formulário na página do ORCID para [Registre um aplicativo do cliente: sandbox API](https://orcid.org/content/register-client-application-sandbox).
2. O ORCID irá enviar por e-mail um ID de Cliente Sandbox e um Segredo do Cliente pouco tempo depois de o formulário ser enviado. Consulte a nota sobre "URIs de redirecionamento ORCID" abaixo para obter orientações sobre o que inserir para seus URIs de redirecionamento.

Uma vez que o seu Sandbox Client ID e Client Secret forem adicionados à configuração, você pode testar o plugin no ambiente ORCID sandbox. O sandbox permite a criação de contas iD de usuário ORCID de teste e uso do plugin sem ter que se preocupar em afetar os dados do Registro ORCID ao vivo (produção) de teste. Uma vez que o plugin funciona como esperado no ambiente do sandbox ORCID, você pode obter credenciais e mover para o ambiente de produção ORCID e entrar ao vivo com o plugin.

## Teste sua Sandbox ORCID

Para testar se o plugin está funcionando corretamente na sandbox:

### Crie um iD Sandbox ORCID

Para fins de teste, você precisará criar um ORCID "sandbox" falso. Não faça isso:

1. Vá para a [página de registro do ORCID Sandbox](https://sandbox.orcid.org/register) e preencha o formulário. Certifique-se de usar um endereço de e-mail inventado usando `@mailinator.com` - por exemplo: `test123@mailinator. om` Por favor, note que o sandbox só permite `@mailinator.com` endereços.
2. Anote o endereço de e-mail e a senha que você usou para criar a sandbox ORCID iD
3. Vá para [mailinator.com](https://www.mailinator.com/) e na caixa "Enter Public Mailinator Inbox", digite seu endereço de e-mail inventado e clique em "Ir"
4. Você deve ser levado para a caixa de entrada onde um email de confirmação do ORCID deve aparecer. Siga as instruções no e-mail para verificar sua conta iD da sandbox. Agora você pode adicionar informações e fazer alterações no seu registro sandbox ORCID. Se o seu e-mail não aparecer na caixa de correio mailinator.com, pode haver vários motivos para isso. Por exemplo, o seu OJS/OPS não está configurado corretamente para enviar e-mails, você não deve devidamente as credenciais. Ou você pode ter trocado o ID do cliente e o secreto.

### Conecte seu Sandbox ORCID iD com OJS/OPS & Envie uma publicação de teste

Há várias maneiras diferentes pelas quais um autor pode conectar seu ORCID iD com suas obras em OJS/OPS. O método pelo qual o ORCID iD de um autor está conectado à sua publicação em OJS dependerá do número de autores e quem está enviando o artigo. Para o teste, você vai querer seguir as instruções abaixo dependendo dos cenários que se aplicam ao seu(s) diário(s) ou servidor de pré-impressão. Se você planeja testar mais de um cenário, é recomendado registrar-se em várias contas iD da sandbox com ORCID seguindo as instruções acima e use um iD diferente do sandbox ORCID para testar os diferentes cenários abaixo:

#### Cenário 1: Qualquer autor pode conectar o iD do ORCID autenticado ao seu perfil OJS durante a criação da conta OJS

1. Se um autor ainda não tiver uma conta de usuário OJS/OPS, ele pode conectar seu ORCID iD na etapa de registro.
2. Quando na página de registro OJS/OPS clique no botão para "Create or Connect your ORCID iD" - você será solicitado a fazer login no seu registro ORCID (certifique-se de usar seu endereço de e-mail e senha ORCID da sandbox) e "authorize" OJS/OPS para acessar seu registro ORCID e ORCID.
3. Algumas das informações no formulário de registro (por exemplo, nome) será automaticamente preenchido com base nas informações configuradas como visibilidade pública no registro ORCID do usuário.
4. Uma vez registrado e logado, o usuário pode ir ao seu perfil e clicar na aba pública para ver seu ID ORCID autenticado. **Por favor Nota:** Atualmente há [um bug associado a esse recurso](https://github.com/pkp/orcidProfile/issues/158). Depois de enviar uma publicação e a publicação for publicada, o ORCID iD deve aparecer na publicação do OJS/OPS. Se você estiver usando a API do membro, a publicação também deve aparecer no registro ORCID na seção de trabalho uma vez que seu artigo é publicado (note: isso atualmente não funciona com OPS).

#### Cenário 2: um artigo com um autor é submetido pelo autor enquanto está logado para sua conta de autor OJS/OPS

1. Se um autor tiver uma conta de usuário OJS/OPS onde ele é identificado como um autor, e pode fazer login em OJS/OPS, seu iD ORCID pode ser conectado ao OJS/OPS através do seu perfil de usuário OJS/OPS:
2. Quando estiver logado em OJS/OPS, vá para seu Perfil e clique na aba Pública
3. Clique no botão para "Criar ou Conectar seu ORCID iD" - você será solicitado a entrar no seu registro ORCID (certifique-se de usar seu endereço de e-mail e senha ORCID da sandbox) e "autorizar" OJS/OPS para acessar seu registro ORCID e ORCID.
4. Seu ID ORCID autenticado deve aparecer em seguida.
5. Depois de enviar uma publicação e a publicação for publicada, o ORCID iD deve aparecer na publicação do OJS/OPS. Se você estiver usando a API do membro, a publicação também deve aparecer no registro ORCID na seção de trabalho uma vez que seu artigo é publicado (note: isso atualmente não funciona com OPS).

#### Cenário 3: um artigo com um autor é submetido pelo autor enquanto está logado para sua conta de autor OJS/OPS

1. O autor que está enviando o artigo pode conectar seu próprio iD ORCID em seu perfil OJS/OPS seguindo as instruções listadas no Scenario 1.
2. Para solicitar iDs ORCID autenticados para os outros autores/colaboradores, siga as etapas no Cenário 4.

#### Cenário 4: Um artigo com um ou mais autores é submetido por um administrador ou outro indivíduo que não é um dos autores

1. Durante o processo de submissão do artigo, quando você chegar à etapa 3 "Metadados", há uma seção para adicionar colaboradores.
2. Para cada contribuinte, clique em “Adicionar colaborador” e digite a informação para cada autor. Para fins de teste na sandbox, você pode querer se certificar de usar o endereço de e-mail `@mailinator. om`que você usou para criar o seu sandbox ORCID iD.
3. No final do formulário "Adicionar Colaborador", na seção "ORCID", você precisará marcar a caixa para enviar e-mail para solicitar autorização ORCID do contribuidor. Em seguida, clique em Salvar. ![Imagem de autorização do colaborador ORCID](./assets/orcid-contributor-authorization.png)
4. Em seguida, volte para o [mailinator.com](https://www.mailinator.com) e vá para a sua caixa de e-mail. Você deve ver um e-mail do OJS pedindo para você conectar seu ORCID iD. Siga as instruções no e-mail para conectar o seu ORCID iD.
5. Uma vez que o artigo é publicado, o ID ORCID deve aparecer no artigo se o ORCID iD para cada colaborador tiver sido conectado.
6. Se você estiver usando a API do membro, uma vez que o artigo é publicado, o trabalho deve então aparecer no registro ORCID do sandbox na seção de trabalho.

O resultado para todos os cenários deve ser que quando o artigo é publicado, o ícone iD ORCID deve aparecer ao lado do(s) nome(s) do autor na publicação. Se você estiver usando a API do membro, você deve também consultar o registro iD do seu Sandbox ORCID para verificar se as informações da publicação foram adicionadas à seção "Works" do seu registro de ORCID para você. Atualmente os metadados de artigo OJS/OPS são enviados para ORCID somente quando o artigo é publicado. Portanto, se o ID ORCID de um autor for adicionado a um artigo após ter sido publicado, o perfil ORCID do autor não conterá as informações do artigo. Para acionar isso manualmente, o artigo precisa ser inédito e republicado para que o artigo apareça no perfil ORCID do autor.

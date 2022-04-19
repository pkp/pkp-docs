---
book: learning-ojs
version: 3.3
title: Aprendendo Open Journal Systems 3.3 - Subscrições
---

# Subscrições

O OJS permite que você restrinja parte do seu conteúdo, ou o conteúdo todo, aos assinantes. Para habilitar assinaturas, primeiro vá a [Settings > Distribution > Access](./settings-distribution.md).

## Políticas de assinatura

Preencha os detalhes sobre suas políticas de assinatura nesta página.

![A guia de política de Subscrições no menu de Subscrições.](./assets/learning-ojs3.1-jm-subscriptions-policies.png)

- **Gerente de assinaturas**: adicione os dados pessoais da pessoa responsável.
- **Informações de assinatura**: adicione as informações sobre a política a serem exibidas no site da revista.
- **Validade da assinatura**: determine se os assinantes anteriores devem continuar a ter acesso a conteúdos mais antigos.
- **Lembrete de expiração de assinatura**: configure lembretes automáticos para informar o vencimento da assinatura.
- **Notificações de pagamento on-line**: mantenha o gerente de assinaturas informado das atividades de pagamento.
- **Opções de acesso aberto para revistas de assinatura**: se apropriado, selecione o número de meses atuais para restringir o acesso. O conteúdo mais antigo será aberto automaticamente.

## Tipos de assinatura

A próxima etapa, na configuração do gerenciamento de assinaturas, é designar os tipos de assinaturas que a revista oferece.

![A guia Tipos de Subscrições no menu Subscrições](./assets/learning-ojs3.1-jm-subscriptions-types.png)

Os periódicos geralmente oferecem taxas de assinatura individual e de assinatura institucional. Alguns periódicos podem ter ofertas especiais para membros de uma organização ou estudantes. O OJS apoiará o gerenciamento de assinaturas impressas e/ou on-line. Pode ser criado mais de um tipo de assinatura para cobrir períodos de tempo mais longos (12 meses, 36 meses).

Selecione **Criar Novo Tipo de Assinatura** para adicionar um novo.

![A janela Criar Novo Tipo de Subscrição.](./assets/learning-ojs3.1-jm-subscriptions-types-create.png)

- **Nome do tipo (de assinatura)**: atribua um nome único (por exemplo, Estudante) a este novo tipo de assinatura .
- **Descrição**: forneça uma breve descrição que aparecerá no website.
- **Custo**: selecione o tipo de moeda e o valor.
- **Formato**: escolha o formato apropriado (por exemplo, on-line).
- **Duração**: digite o número de meses que este tipo de assinatura cobrirá (por exemplo, 12).
- **Assinaturas**: indique se este tipo de assinatura abrange pessoas físicas ou instituições.
- **Opções**: selecione as opções apropriadas (se houver).

## Tipos de pagamento

{% include video.html id="9r0mRqtNVuU" provider="youtube" title="Módulo 11: Distribuição. Unidade 3: Pagamentos"%}

Este vídeo da PKP School explica como configurar diferentes tipos de pagamento em seu diário. Para assistir a outros vídeos desta série, visite [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).

Se você ainda não fez isso, vá a  [Settings > Distribution > Payments](./settings-distribution.md) e defina a moeda e o método de pagamento apropriados (por exemplo, PayPal).

Utilize esta página para definir os valores cobrados por vários tipos de taxas.

![A guia Tipos de Pagamento no menu Subscrições.](./assets/learning-ojs3.1-jm-subscriptions-paytypes.png)

### Taxas de Autor

Se você deseja cobrar uma taxa de processamento do artigo (APC) dos autores, insira o valor aqui. Habilitar taxas de autoria permitirá que você solicite uma taxa de processamento do artigo após a conclusão do processo de revisão. Quando o artigo for aceito pelo editor, ele terá a opção de exigir o pagamento. Isso fará com que o autor receba uma notificação no OJS e um e-mail que o encaminhará ao processo de pagamento.

Observe que a opção de notificar os autores sobre a Taxa de Autor aparecerá apenas quando os detalhes do pagamento (detalhes da conta do PayPal ou instruções manuais do PayPal) forem concluídos em [Settings > Distribution > Payments](./settings-distribution#payments).

![Uma notificação de amostra para o autor com o "Solicitar taxa de publicação" opção habilitada.](./assets/learning-ojs3.1-jm-subscriptions-authorfees.png)

Os autores deverão fazer login na revista antes de serem direcionados ao PayPal para processar o pagamento.

### Taxa do leitor

Se você deseja cobrar taxas para acessar artigos e edições individuais, pode inserir os preços dos artigos e edições neste espaço.

Você pode aplicar as taxas a arquivos PDF apenas marcando “Restringir o acesso à versão PDF de edições e artigos”.

Observe que, para vender o acesso a um fascículo, terá de carregar uma galeria de números.

### Taxas Gerais

Use para cobrar outras taxas, como a adesão.

## Pagamentos

À medida que vários pagamentos são recebidos, eles serão listados nesta aba.

Apenas os pagamentos feitos por meio do PayPal serão registrados aqui.

## Assinaturas individuais

Todos os tipos de assinaturas individuais aparecerão aqui.

![A guia de Subscriçoes Individuais no menu de Subscrições.](./assets/learning-ojs3.1-jm-subscriptions-indiv.png)

Você pode criar uma nova assinatura individual usando o link Criar nova assinatura. Porém, primeiro precisará criar uma nova conta para essa pessoa em Usuários e funções ([consulte o capítulo](./user-accounts)). Feito isso, você pode pesquisar a conta e aplicar as diferentes configurações.

![A janela Criar Nova Subscrição.](./assets/learning-ojs3.1-jm-subscriptions-indiv-create.png)

**Tipo de assinatura**: Selecione o tipo apropriado para este novo assinante (por exemplo, Aluno) e seu status (por exemplo, Ativo).

> Os Tipos de Assinatura foram configurados anteriormente neste capítulo.

**Data**: defina as datas de início e término para esta assinatura.

**Associação**: se o assinante estiver agregado a qualquer associação relevante, adicione essa informação (opcional).

**Número de referência**: se a assinatura estiver associada a qualquer número de referência relevante (como um número de fatura para pagamento), adicione essa informação (opcional).

**Observações**: se você tiver alguma observação relevante a adicionar, registre essa informação (opcional).

## Assinaturas institucionais

Todos os tipos de assinaturas institucionais aparecerão aqui.

![A guia de Subscrições Institucionais no menu de Subscrições.](./assets/learning-ojs3.1-jm-subscriptions-instit.png)

As assinaturas institucionais são gerenciadas de forma semelhante às assinaturas individuais, mas são usadas para bibliotecas, institutos de pesquisa e outras organizações que assinam o seu periódico.

Você pode criar uma nova assinatura individual usando o link Criar nova assinatura. Porém, primeiro precisará criar uma nova conta para a pessoa de contato da instituição em Usuários e funções (consulte o capítulo [the User Accounts chapter](./user-accounts)). Feito isso, você pode pesquisar a conta aqui e aplicar as diferentes configurações.

![A janela Criar Nova Subscrição.](./assets/learning-ojs3.1-jm-subscriptions-instit-create.png)

- **Tipo de assinatura**: selecione o tipo apropriado para este novo assinante (por exemplo, Biblioteca) e seu status (por exemplo, Ativo). (Os tipos de assinatura foram configurados anteriormente neste capítulo.)
- **Data**: defina as datas de início e término para esta assinatura.
- **Instituição**: adicione o nome da instituição para esta assinatura (por exemplo, Biblioteca da Universidade Simon Fraser).
- **Endereço para correspondência**: adicione o endereço da instituição.
- **Domínio**: leitores vindos de um computador com este domínio receberão acesso automaticamente (por exemplo, sfu.ca). Isso se aplica a usuários no campus.
- **Intervalos de IP**: a instituição pode fornecer intervalos de IP. Os leitores que usam um computador neste intervalo de IP receberão acesso automaticamente. Cada intervalo de IP deve ser inserido como uma nova linha.

![O campo do IP varia onde os intervalos de IP são inseridos.](./assets/learning-ojs3.2-jm-subscriptions-instit-IP.png)

- **Observações**: se você tiver alguma observação relevante a adicionar, registre essa informação neste espaço (opcional).

## Notificações de pagamento

### Notificações de pagamento manual

Com a notificação de pagamento manual, o gerente de assinatura receberá um e-mail informando que o pagamento foi realizado. Como o SANDBOX não pode enviar e-mail, não ocorrerá envio de e-mails relacionados a quaisquer testes realizados, como de praxe.

Essas assinaturas manuais também serão registradas na guia Pagamento> Individual ou Institucional. O exemplo abaixo mostra uma assinatura de teste.

A partir daqui, o gerenciador de assinaturas pode atualizar o status conforme necessário, com base em seu fluxo de trabalho.

![Uma amostra de subscrição individual com o status "Aguardando pagamento manual".](./assets/learning-ojs3.2-subs-manual-notification.png)

### Notificações de pagamento do PayPal

Quando um pagamento for processado por intermédio do PayPal, o administrador da sua conta do PayPal receberá uma notificação de pagamento. O pagamento também será registrado na guia Pagamento em Pagamentos> Pagamento.

## Bloco de assinatura

Quando um usuário está recebendo acesso a um site ou a seu conteúdo por meio de uma assinatura, as informações do assinante que fornece o acesso podem ser exibidas na barra lateral. O recurso Bloco de assinatura deve ser selecionado para exibição em Configurações do site> Aparência> Gerenciamento da barra lateral.

## Definindo artigos como acesso aberto

Para definir Acesso Aberto aos artigos, basta clicar em **Edições** [ou Fascículos] no menu à esquerda. Também é possível configurar como Acesso Aberto após a publicação do fascículo, basta selecionar a caixa à direita do título do artigo.

No Sumário, marque os artigos que serão definidos como Acesso aberto.

![A caixa de seleção de Acesso Aberto localizada ao lado de um artigo na Tabela de Conteúdos.](./assets/learning-ojs3.2-jm-subscriptions-single-article.png)

---
book: learning-ojs
version: 3.3
title: Aprendendo Open Journal Systems 3.3 - Configurações da Distribuição
---

# Configurações da Distribuição

Os ajustes de distribuição enfocam o acesso e a visibilidade da sua revista. As abas consistem em Licença, Indexação para mecanismos de busca, Pagamentos, Acesso e Arquivamento.

Observe que, se sua revista for multilíngue e você tiver, nos ajustes de idioma, o formato habilitado para vários idiomas, será necessário configurar algumas dessas informações para cada idioma. Você pode alternar para outros idiomas, selecionando o idioma no link Ajuda, no canto superior direito.

## Licença

Este vídeo da PKP School explica como configurar os termos de direitos autorais e licenciamento no OJS. Para assistir a outros vídeos desta série, visite [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).

{% include video.html id="qfzvbN4a-bM" provider="youtube" title="Vídeo sobre como configurar termos de direitos autorais e licenciamento em OJS"%}

Nessa seção você pode configurar termos de direitos autorais e licenciamento para o conteúdo do seu periódico.

![Guia de licença de configurações de distribuição mostrando opções de detentor de direitos autorais, licença e ano de direitos autorais.](./assets/learning-ojs3.2-jm-settings-dist-permissions.png)

Em **Detentor dos Copyright**, selecione quem detém os direitos autorais dos artigos publicados por sua revista. A tendência, na publicação em acesso aberto, é permitir que os autores mantenham os direitos autorais de seus trabalhos.

No campo **Licença**, selecione a licença do seu periódico. CC Attribution 4.0 é uma licença amplamente usada para periódicos de acesso aberto, permitindo o máximo de compartilhamento e reutilização. Para obter as definições das diferentes licenças Creative Commons, consulte o [Creative Commons website](https://creativecommons.org/).

A licença selecionada será adicionada automaticamente aos metadados de cada artigo e exibida na página de cada artigo publicado.

Em **Direitos autorais (ano)**, selecione se você deseja que o ano dos direitos autorais venha, como padrão, a partir da data de publicação do artigo ou da data de publicação da edição.

Se você usa um modelo de publicação contínua, selecione a data de publicação do artigo. Caso você use um modelo de publicação tradicional, baseado em questões, selecione a data de publicação da edição.

Esse padrão pode ser substituído caso a caso.

Em **Termos de licença**, insira quaisquer termos de licença adicionais que você gostaria de exibir junto à licença selecionada acima, na página do artigo publicado.

## Indexação de pesquisa

Este vídeo da PKP School explica como aprimorar a indexação de pesquisa no OJS. Para assistir a outros vídeos desta série, visite [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).

{% include video.html id="qf_5sTlDXM0" provider="youtube" title="Vídeo sobre como aprimorar Indexação de pequisa em OJS"%}

Essa seção ajuda a aprimorar a otimização do mecanismo de pesquisa e tornar o conteúdo mais detectável.

![Guia de indexação de pesquisa de configurações de distribuição mostrando opções de descrição e tags personalizadas.](./assets/learning-ojs3.2-jm-settings-dist-index.png)

Use **Descrição** para fornecer uma breve descrição de seu periódico aos mecanismos de pesquisa.

Use **Tags personalizadas** para adicionar tags de cabeçalho HTML personalizadas ao cabeçalho em cada página de seu periódico, o que pode ajudar seu website a ser indexado por mecanismos de pesquisa. As tags precisam ser adicionadas como elementos HTML. Se você simplesmente inserir palavras, elas aparecerão no topo de todas as páginas do seu website, em vez de aparecerem nos metadados da página. Aqui está um exemplo de texto que pode ser inserido nesse campo:

```html
<meta name="description" content="The Journal of Public Knowledge. Publication of the Public Knowledge Project - PKP and Simon Fraser University - SFU" />
<meta name="keywords" content="open access, scholarly publishing, open source software, non-profit organizations, scholarly journals, free software" />
<meta name="author" content="metatags generator">
<meta name="robots" content="index, follow">
<meta name="revisit-after" content="3 month">
```

## Pagamentos

Este vídeo do PKP School explica como definir as configurações de Pagamentos no OJS. Para assistir a outros vídeos desta série, visite [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).

{% include video.html id="9r0mRqtNVuU" provider="youtube" title="Vídeo sobre como configurar pagamentos OJS"%}

O OJS oferece a possibilidade de coletar pagamentos on-line e gerenciar assinaturas e pagamentos de taxas de autoria.

Usando o plugin do PayPal, você pode aceitar pagamentos através desta plataforma ou pode aceitar pagamentos manuais (como cheque, transferência de e-mail, etc.), mas eles devem ser feitos fora do OJS e não são registrados automaticamente nesse sistema.  Se desejar usar um serviço de pagamento diferente, você terá que criar seu próprio plugin.

### Habilitar Pagamentos

Para usar os recursos de pagamentos e assinaturas, primeiro você deve habilitar os pagamentos nessa aba. Depois de desmarcar **Habilitar**, as configurações adicionais serão exibidas abaixo.

![Aba de pagamentos de configurações de distribuição mostrando opções de pagamentos, moeda e plugins de pagamento.](./assets/learning-ojs3.2-jm-settings-dist-pay.png)

Selecione a moeda corrente que você utilizará.

Selecione o método de pagamento da taxa que você usará em **Plugins de Pagamento**.

Se você selecionar o **Pagamento de Taxa do PayPal**, campos adicionais serão exibidos.

Para aceitar pagamentos no Paypal, você precisará ir a configurações da página > plugins, habilitar o plugin do PayPal e, em seguida, fazer a instalação e configuração adicionais, conforme explicação no [PayPal Plugin Guide](https://docs.pkp.sfu.ca/using-paypal-for-ojs-and-ocs/en/). Por meio desse processo, você obterá os valores dos campos **Nome da conta**, **ID do cliente** e **Campo confidencial**.

![Tela de pagamento de taxa do Paypal mostrando a opção de habilitação do modo de teste, nome da conta, ID do cliente e campos secretos.](./assets/learning-ojs3.2-jm-settings-dist-paypalsettings.png)

Se você selecionar **Taxas manuais de Pagamento** em **Plugins de Pagamento**, aparecerá um campo onde você pode inserir instruções que aparecerão para os usuários que estão fazendo um pagamento manual.  Por exemplo, “Envie um cheque a ser pago ao Projeto de Conhecimento Público para __. ”

![Tela de pagamento manual de taxas mostrando o campo de instruções de pagamento manual.](./assets/learning-ojs3.2-jm-settings-manual-payments.png)

Você também precisará habilitar o plugin de pagamento manual em **Configurações do site**> **plugins** para aceitar pagamentos manuais.

Clique em **Salvar**.

Um novo item aparecerá no menu do painel principal chamado **Pagamentos**.

Vá para o [Capítulo Assinaturas](./subscriptions.md) para obter mais instruções sobre como gerenciar assinaturas e pagamentos.

Se você planeja disponibilizar seu periódico ou seus artigos por assinatura, vá a **Configurações de Distribuição**> **Acesso** e marque a opção “O periódico exigirá assinaturas para acessar parte ou todo o seu conteúdo”.

![Guia de acesso às configurações de distribuição mostrando as opções do modo de publicação.](./assets/learning-ojs3.2-jm-settings-dist-access.png)

### Doações

No OJS 3.x não há a opção de configurar pagamento com a finalidade de realizar doações, gerenciar doações com o módulo de Pagamentos ou usar o plugin do PayPal para aceitar doações. Você pode adicionar o acesso a Doações à sua barra lateral, mas terá que ter um link para um site externo, onde pode ser feito o pagamento de doações.

## Acesso

Este vídeo do PKP School explica como definir as configurações de acesso no OJS. Para assistir a outros vídeos desta série, visite [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).

{% include video.html id="RlKVwF3h_PM" provider="youtube" title="Vídeo sobre como definir as configurações de acesso em OJS"%}

Na guia Acesso, você pode configurar se deseja que o conteúdo do seu periódico seja de acesso aberto, disponível por assinatura ou uma combinação de ambos. Automaticamente, a opção de acesso aberto é selecionada. No entanto, se você deseja usar o OJS para uma assinatura, escolha a segunda opção (consulte a seção acima sobre Pagamentos para obter mais informações). Selecionar a segunda opção permitirá que você atrase ainda mais o canal de acesso aberto durante diferentes períodos de tempo.

![Guia de acesso às configurações de distribuição mostrando o modo de publicação e as opções de acesso aberto atrasado.](./assets/learning-ojs3.2-jm-settings-dist-access-delayed.png)

Se você estiver usando o OJS apenas para gerenciar seu fluxo de trabalho de submissão e não para publicar seu conteúdo, pode selecionar “O OJS não será usado para publicar o conteúdo da revista online”.

OJS permite que você configure como e quando o conteúdo de um artigo pode ser acessado e o nível de acesso à edição. Quando você cria um problema, há uma guia chamada **Acesso** na qual você pode definir o **Status de Acesso** como **Assinatura** ou **Acesso Aberto**.

![Guia de acesso às configurações do problema mostrando opções de assinatura e acesso aberto.](./assets/learning-ojs3.2-issue-access.png)

Se você defini-lo como **Assinatura**, abaixo aparecerá uma caixa onde você pode, opcionalmente, inserir uma **Data de Acesso Aberto**, na qual o conteúdo se tornará acesso aberto.

Depois de definir como **Assinatura**, na aba **Índice**, uma caixa de seleção aparecerá ao lado de cada artigo em **Acesso aberto**, onde você tem a opção de definir, individualmente, os artigos como acesso aberto, mesmo que o resto da edição permaneça disponível por assinatura.

![Emitir índice mostrando caixas de seleção de acesso aberto.](./assets/learning-OJS3.2-article-access.png)

O **OAI será habilitado automaticamente**. Trata-se de um protocolo importante, usado por serviços de indexação e outros aplicativos para coletar os metadados do seu periódico. No entanto, se você não estiver usando o OJS para publicar o conteúdo do seu periódico, pode desabilitar o OAI.

![
Ative a tela OAI com as opções de ativação e desativação.](./assets/learning-ojs3.2-jm-settings-dist-oai.png)

## Arquivamento

Este vídeo da PKP School explica como habilitar o arquivamento no OJS. Para assistir a outros vídeos desta série, visite [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).

({% include video.html id="ohHaj-MSLNA" provider="youtube" title="Vídeo sobre como abilitar o arquivamentoo em OJS"%}

Se você é um membro de uma rede LOCKSS ou CLOCKSS, use esta aba para ativar o seu diário. O PKP PN Plugin, a qual deposita seu conteúdo na PKP Preservation Network (PN), está disponível para OJS 3.1.2 ou mais recente.

For instructions on enabling the PKP PN, see the [PKP Preservation Network Guide](/pkp-pn/en/).

Se você usar outra rede, ao habilitá-lo, tornará o seu conteúdo disponível para a rede, mas também precisará entrar em contato com a rede para informá-la sobre o seu periódico.

![Aba de criação de configurações de distribuição mostrando as opções LOCKSS e CLOCKSS.](./assets/learning-ojs3.2-jm-settings-web-archive.png)

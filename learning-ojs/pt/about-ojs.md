---
book: learning-ojs
version: 3.3
---

# Sobre o Open Journal Systems (OJS)

Open Journal Systems \(OJS\) é uma solução de código aberto para o gerenciamento e publicação de periódicos acadêmicos online. OJS é um sistema de gerenciamento e publicação operado por editor, altamente flexível, que pode ser baixado gratuitamente e instalado em um servidor web local.

Foi projetado para reduzir o tempo e a energia dedicados às tarefas rotineiras e de gestão associadas à edição de um periódico, ao mesmo tempo, melhorando a manutenção de registo e a eficiência dos processos editoriais. Procura aumentar a qualidade acadêmica e de publicação dos periódicos por meio de uma série de inovações, incluindo o aprimoramento da experiência do leitor, o que torna mais transparentes as políticas das revistas e melhora a indexação.

Este guia cobre o OJS versão 3.3, liberado em fevereiro de 2021, e apresenta melhorias significativas em relação às versões anteriores do software. O PKP espera ser útil aos projetos de publicação.

## Antecedentes

Este vídeo da Escola do PKP explica o plano de fundo do PKP e do OJS. Para assistir a outros vídeos desta série, visite[PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).

{% include video.html id="SQfFGwIK2wI" provider="youtube" title="Vídeo de fundo sobre o PKP e o OJS"%}

*OJS é um sistema de gerenciamento/publicação de site web/periódico*. *O OJS é um periódico/site de gerenciamento/sistema de publicação* que cobre todos os aspectos da publicação de um periódico on-line, desde a implementação do site da revista até as tarefas operacionais, como o processo de submissão do artigo pelo autor, a revisão pelos pares, edição, publicação, arquivamento e indexação do periódico. O OJS também ajuda a gerenciar dados pessoais da organização da revista, incluindo o acompanhamento do trabalho dos editores, pareceristas e autores, notificando leitores por meio do auxílio da correspondência.

*OJS é flexível e escalável*. Uma única instalação do OJS pode suportar a operação de uma ou mais revistas. Cada periódico tem seu próprio endereço (URL), assim como a sua aparência. O OJS pode permitir que um único editor gerencie todos os tópicos da revista e seu website, ou apoiar um grupo de editores internacionais com diversas responsabilidades em uma revista de múltiplas seções.

*OJS apoia o princípio de acesso estendido*. Este sistema tem a intenção de não apenas auxiliar a publicação da revista, mas de mostrar como os custos de publicação de periódicos podem ser reduzidos a ponto de prover leitores com o “Acesso Aberto” aos conteúdos do periódico com uma opção viável. O caso do “Acesso Aberto” é explicado por uma ampla variedade de artigos apresentados neste projeto e disponíveis gratuitamente em Research > Publicações no website [Public Knowledge Project](https://pkp.sfu.ca).

*A origem do OJS*. A primeira versão liberada do sistema surgiu em 2001, como uma pesquisa de desenvolvimento na Universidade da Colúmbia Britânica sob o financiamento do Conselho Canadense de Pesquisa em Ciências Sociais e Humanidades, a Max Bell Foundation, o Pacific Press Endowment e  a MacArthur Foundation. A continuidade do desenvolvimento está sob os cuidados da Simon Fraser University Library. Para mais informações, acesse o site do [Public Knowledge Project](https://pkp.sfu.ca).

<hr />

## Funcionalidades do OJS

Algumas dessas mudanças podem também ser aplicadas no Open Monograph Press (OMP) e no Open Preprint Systems (OPS).

1. OJS é instalado e controlado localmente;
2. Os editores configuram requisitos, seções, processo de revisão etc.;
3. Submissões on-line, revisão anônima e gerenciamento de todos os conteúdos;
4. Indexação abrangente de conteúdos;
5. Interface do leitor responsiva e com suporte a temas;
6. Notificação para os leitores por e-mail;
7. Suporte a cobrança de taxas de processamento de artigos, assinaturas e pagamentos on-line;
8. Suporte a Ajuda on-line sensível a contexto completa;
9. Suporte a multiplas línguas.

## O que há de novo nesta versão do OJS

OJS 3 tem um painel de navegação simplificada e novas funcionalidades relacionadas à gestão da submissão, comunicação com os usuários e acessibilidade. Esta seção esquematiza as principais mudanças esperadas na atualização para a versão do OJS 3.3. Pode-se também assistir [ao vídeo (em inglês) que apresenta novas funcionalidades do OJS 3.3](https://youtu.be/3D_hS4Bd-Y8), criado pelo [Serviço de Publicação do PKP](https://pkpservices.sfu.ca).

Para se ter acesso a um sumário das mudanças ocorridas na versão OJS 3.3, que são relevantes para os desenvolvedores e o desenvolvimento, deve-se acessar [Release Notebook for OJS OJS/OMP/OPS v3.3](https://docs.pkp.sfu.ca/dev/release-notebooks/en/3.3-release-notebook).

Caso esteja atualizando a versão OJS 2 e queira ver a uma explicação sobre as mudanças do OJS 3. X, acesse [O que tem de novo no OJS 3, na versão anterior deste guia](https://docs.pkp.sfu.ca/learning-ojs/3.1/en/introduction#whats-new-in-ojs-3), e o guia PKP [Atualizando do OJS 2 para OJS 3](https://docs.pkp.sfu.ca/upgrading-ojs-2-to-3/). No entanto, será necessário primeiramente atualizar da versão OJS 2 para a OJS 3.2 e, em seguida, para a versão OJS 3.3.

For a summary of changes in OJS 3.3 that are relevant to developers and development, please see the [Release Notebook for OJS OJS/OMP/OPS v3.3](https://docs.pkp.sfu.ca/dev/release-notebooks/en/3.3-release-notebook)

### A Interface do Painel e Menus de Navegação

Há algumas mudanças na interface do Painel e menus de navegação para os usuários logados no OJS 3.3.

Gerentes, editores, pareceristas, autores e outros usuários da revista logados podem notar mudanças no principal menu de navegação no lado esquerdo da tela. Na versão 3.3, somente usuários com papéis que têm acesso ao menu de configuração (gerentes e editores da revista) verão o menu de navegação, do lado esquerdo da tela. Há, também, links para os menus adicionais com anúncios e pagamento, de modo que alguns links do menu foram movidos.

![A Interface do Painel que os Gerentes da revista visualizam quando logados](./assets/learning-ojs-3.3-navigation-menu-dashboard-jm.png)

Um usuário pode acessar seu perfil e selecionar uma ou mais línguas clicando no ícone do canto superior à direita.

![O painel que os Autores veem quando estão logados](./assets/learning-ojs-3.3-navigation-menu-dashboard-author.png)

Um usuário agora pode acessar seu perfil de usuário e selecionar um idioma em periódicos multilíngues clicando no ícone do usuário no canto superior direito.

![O menu onde os usuários podem editar o seu perfil e selecionar um idioma](./assets/learning-ojs-3.3-navigation-menu-dashboard-user-menu.png)

O link do painel para acesso público mudou. O Gerente ou Editor da revista agora pode ver o site público clicando no nome do periódico que aparece no símbolo do mapa do site, no canto esquerdo da página. Para instalações com várias revistas, pode-se clicar no mapa do site, no canto esquerdo da página, que a lista de instalação aparece e pode-se selecionar o site público da revista.

![O link para visualizar o site público do periódico](./assets/learning-ojs-3.3-navigation-menu-dashboard-view-journal.png)

### Fluxo Editorial

#### Carregando arquivos de submissão

Durante o processo de submissão, Autores podem carregar múltiplos arquivos de uma vez, bem como arrastar e soltar arquivos. Os Autores são mais requisitados no processo de inserir conteúdos dos metadados como a descrição, licença e outros. Tais informações podem ser inseridas durante o fluxo, uma vez que o assistente de carga segue em uso. Pode-se encontrar mais informações no [Capítulo para Autores](./authoring#step-2).

<figure class="video_container">
  <video controls="true" allowfullscreen="true">
    <source src="./assets/learning-ojs3.3-upload-submission-files.mp4" type="video/mp4">
  </video>
  <figcaption>A short video that demonstrates how files can be uploaded in OJS 3.3.</figcaption>
</figure>

#### Filtros de Submissão

Todas as submissões ativas e arquivadas podem agora ser filtradas pelo número e editor. Somente gerentes de revista podem utilizar o filtro para editor. Para mais instruções, acesse o [Capítulo do Fluxo Editorial](./editorial-workflow#submission-dashboard).

#### Reverter uma decisão declinada

Uma nova ação editorial permite aos editores reverterem uma decisão declinada nos estágios de submissão e revisão. Depois que uma decisão declinada for revertida, a submissão é restaurada ao estágio prévio e a rodada de revisão torna-se ativa. Para obter mais instruções, acesse o [Capítulo do Fluxo Editorial](./editorial-workflow#submission-dashboard).

#### Excluir apenas submissão rejeitadas

Somente submissões rejeitadas podem ser excluídas da lista de submissões. You can find further instructions in the [Editorial Workflow chapter](./editorial-workflow#archives).

#### Terminologia do tipo de avaliação

Nas versões anteriores do OJS, os tipos de avaliação eram “Duplo-cega”, “Cega” e “Aberta”. No OJS 3.3, porém, eles foram alterados para “Avaliador Anônimo / Autor Anônimo”, “Avaliador Anônimo / Autor Revelado” e “Aberta”.

#### Categoria exibida na página do artigo

As categorias atribuídas a um artigo agora aparecem na página inicial do artigo. Podem-se encontrar mais informações no capítulo [Configurações da Revista](./journal-setup#categories).

#### Desativar submissões

Os gerentes e editores de periódicos podem definir as configurações do fluxo de trabalho para desativar todas submissões de uma revista. Tal recurso pode ser usado por periódicos que não aceitam novos conteúdos. Podem-se encontrar mais instruções no capítulo [Configurações da Revista](./journal-setup#categories).

### Gerenciamento e comunicação de usuários

#### Exportar usuários

Agora existe uma ferramenta de exportação, disponível em Ferramentas -> Importar/Exportar, que pode ser usada para exportar usuários para um arquivo CSV. Tal recurso pode ser usado na importação de usuários para serviços de correspondência de terceiros. Podem-se encontrar mais instruções no capítulo de [Usuários e Papéis](./users-and-roles#email-users).

#### Notificar usuários

O OJS 3.3 dispõe de um recurso muito solicitado para notificar, ou enviar uma mensagem, a todos os usuários em um papel. Veja o capítulo [Usuários e Papéis](./users-and-roles#email-users) para obter mais informações.

#### Filtrar modelos de e-mail por estágio de fluxo de trabalho

Ao gerenciar e editar modelos de e-mail em Configurações > Fluxo de trabalho > E-mails, os gerentes e editores de periódicos podem filtrar os modelos de e-mail por estágio do fluxo de trabalho. Podem-se encontrar mais instruções no capítulo de [Configurações do Fluxo de trabalho](./settings-workflow#filters).

### Acessibilidade

Em 2019, o OJS foi adotado para acessibilidade de pessoas com deficiência e uso de tecnologia assistiva. Todas as mudanças recomendadas pela auditoria foram implementadas no OJS 3.3, incluindo um tema-padrão acessível e blocos personalizados que exigem títulos. Podem-se encontrar mais informações sobre os blocos personalizados no capítulo de [Configurações do Website](./settings-website#custom-block-plugin).

### Para revistas multilíngue

No editor de texto que aparece em muitos campos do formulário do OJS há um suporte voltado, sobretudo, a idiomas que são lidos da direita para a esquerda, como árabe, persa e hebraico.

#### Formatos de data e hora

Os formatos de data e hora agora podem ser especificados para cada revista e idioma/língua. Mais instruções constam no capítulo de [Configurações do website](./settings-website#date-and-time).

#### Idiomas da direita para a esquerda

Há um maior apoio a línguas lidas da direita para a esquerda, como o árabe, Farsi, e hebraico, no editor de texto rico que aparece em muitos campos de formulário no OJS.

#### URLs remotas
Excelentes exemplos de contribuições da comunidade incluem uma vasta gama de idiomas, em que o OJS está disponível, e plugins de terceiros, postados no [fórum da comunidade](https://forum.pkp.sfu.ca/) e na página arquivada do fórum.

## Contribuições da comunidade

A equipe do OJS encoraja contribuições da comunidade de desenvolvedores. Caso esteja interessado, agradecemos sua participação.

PKP oferece os seguintes recursos de suporte gratuitos para o OJS:

Também aceitamos testes de software e contribuições de relatos de bugs.

## Suporte

O PKP oferece os seguintes recursos de suporte grátis para OJS:

* [PKP Docs Hub](https://docs.pkp.sfu.ca/): guias do usuário, documentação do desenvolvedor e dicas de publicação para todos os nossos softwares. Também inclui links para vídeos desenvolvidos pela comunidade.
* [Fórum da comunidade PKP](https://forum.pkp.sfu.ca/): um fórum de discussão on-line onde você pode fazer e responder perguntas, além de compartilhar ideias.
* [PKP School](https://pkpschool.sfu.ca/): uma coleção de cursos on-line, abertos e individualizados, desenvolvidos por especialistas da PKP em inglês e espanhol. Inclui tutoriais em vídeo sobre como configurar sua revista, o fluxo de trabalho editorial no OJS 3 e como se tornar um editor.

Há também um link de ajuda, no canto superior direito de cada página do OJS, OMP e OPS, onde se pode encontrar informações sobre a página atual e suas versões.

Para perguntas sobre o site de um periódico específico, como requisitos de submissão, deve-se entrar em contato com o periódico usando as informações de contato listadas na página **Sobre** do periódico.

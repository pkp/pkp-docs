---
book: learning-ojs
version: 3.3
title: Learning Open Journal Systems 3.3 - Tools
description: A guide to using the Tools menu in OJS, including Import/Export functions and QuickSubmit.
---

# Ferramentas

A seção ferramentas pode ser acessada do menu da barra lateral esquerda.

![learning-ojs3.2-jm-users-tools.png](./assets/learning-ojs3.2-jm-users-tools.png)

Ferramentas é constituída das abas Importação/Exportação, Gerador de Relatórios (denominada Estatísticas no OJS 3.1.1 e anterior) e Permissões.

{% include video.html id="_nm1dGIZS8Y" provider="youtube" title="Video of setting up a journal in OJS 3.3. Module 18: Plugins- QuickSubmit"%}

This PKP School video explains how to use the Quick Submit Plugin to add complete submissions to an issue. Para assistir a outros vídeos desta série, visite [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).

## Importar/Exportar

Importação/Exportação permite que você obtenha dados da sua revista/periódico OJS facilmente e insira dados nele.

![learning-ojs3.2-jm-users-tools-import.png](./assets/learning-ojs3.2-jm-users-tools-import.png)

Algumas ferramentas permitem que você exporte para sistemas de terceiros, como a PubMed ou o DOAJ. Outras permitem importar ou exportar dados do artigo.

Se você quiser exportar dados do usuário, pode encontrar a opção para exportar como um arquivo de XML. Se preferir seus dados de usuário em formato de planilha, pode baixá-los como arquivo CSV em **Estatísticas > Usuários**.

Para instruções detalhadas sobre importação e exportação veja o [Guia do Administrador](https://docs.pkp.sfu.ca/admin-guide/en/data-import-and-export).

Para mais informações sobre o Plugin de Exportação Crossref XML, veja o [Guia Crossref PKP](https://docs.pkp.sfu.ca/crossref-ojs-manual/en/).

### Dentro de Plugins instalados, procure o Plugin Submissão Rápida;

{% include video.html id="_nm1dGIZS8Y" provider="youtube" title="Video of setting up a journal in OJS 3.3. Module 18: Plugins- QuickSubmit"%}

Este vídeo do PKP School explica como usar o plug-in de envio rápido para adicionar envios completos a um problema. Para assistir a outros vídeos desta série, visite [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY).

O Plugin Submissão Rápida permite adicionar rapidamente submissões completas a um número. Ele fornece um processo de submissão de uma etapa para editores que estão precisando desviar a submissão tradicional, revisão, e processo de edição.

O Plugin de Submissão Rápida pode ser usado nos seguintes casos:

* Periódicos que estão usando OJS para exibir e publicar seus conteúdos sem usar o fluxo de trabalho editorial;
* Periódicos que tenham publicado utilizando outra plataforma e estão migrando para o OJS, quando a ferramenta conversão para esta plataforma não está disponível;
* Periódicos que foram originalmente publicados impressos e, desde então, têm sido digitalizados.

Para usar esse plugin, você vai precisar do seguinte:

* Estar cadastrado como Editor ou Gerente de periódico;
* Ter um conjunto de arquivos prontos para publicar (exemplo, PDF);
* Ter todos os metadados para os arquivos (exemplo, nomes de autores, títulos, resumos, etc.).

Primeiro, assegure que o Plugin Submissão Rápida foi instalado e habilitado no seu periódico.  Você vai precisar ter o papel de gerente do periódico para habilitar o plugin e o papel administrador para instalar o plugin.

![Settings side menu options with the option for Website selected.](./assets/find-plugins.png)

1. Ir a Configurações > Website > Plugins;
2. Dentro de Plugins instalados, procure o Plugin Submissão Rápida.  Se você ver na lista, pule para a etapa 8.
3. Caso você não veja o Plugin Submissão Rápida dentro de Plugins instalados, vá à aba Galeria de Plugins;
4. Clique em Submissão Rápida. Uma caixa pop-up se abrirá;
5. Clique em Instalar.  Caso não veja o botão Instalar, precisará pedir ao administrador do seu site que instale o plugin para você;
6. A caixa pop-up se abrirá e perguntará: “Você tem certeza de que deseja instalar esse plugin?”  Clique em OK e espere alguns minutos enquanto completa a instalação;
7. Depois que o plugin for instalado, volte à aba Plugins instalados e encontre o Plugin Submissão Rápida;
8. Marque a caixa à direita com a descrição e o nome do plugin para ativá-lo.

![List of Import/Export plugins from the Installed Plugin tab in Website settings.](./assets/enabled-import-plugins.png)

Depois, você precisará criar os volumes (ou números) que conterão o novo artigo que está importando.

1. Vá a Edições > Edições Futuras e selecione criar número;
2. Insira metadados para o número;
3. Se o número já estiver publicado, você pode marcar “Publicado”;
4. Clique em Salvar;
5. Faça isso em todos os volumes para os quais você estiver enviando artigos.

![Volume 1 Number 1, 2017 issue titled From below created under Future Issue.](./assets/create-issue.png)

Depois, você pode importar cada artigo com o Plugin:

![Tools side menu options with Import/Export selected.](./assets/import-plugins.png)

1. Vá a Ferramentas > Importar/Exportar e selecione Plugin Submissão Rápida;
2. Faça o upload da imagem da capa, se tiver uma.  Este campo é opcional e pode ser ignorado;
3. No campo Seção, escolha a seção do periódico em que o artigo aparecerá na lista suspensa;
4. Insira os metadados do artigo nos outros campos. Caso não veja todos os campos de metadados que deseja, vá a Configurações do fluxo de trabalho > Submissão > Metadados de submissão para configurar quais campos devem ser incluídos nas submissões;
5. Na Lista de Colaboradores/Coautores, clique em Adicionar/Incluir Colaborador/Coautor para inserir os nomes dos autores e outros colaboradores do artigo;
6. Em Composição Final, clique em Adicionar Composição Final para fazer o upload do arquivo do artigo em PDF.  Uma caixa pop-up se abrirá para que você insira o Rótulo do formato do arquivo e selecione o Idioma do Rótulo.  Depois de clicar em Salvar, outra caixa se abrirá para que você possa selecionar o Componente do Artigo e carregar o arquivo;
7. No final do formulário de Submissão Rápida, você pode selecionar se deseja que o artigo que está adicionando seja publicado imediatamente ou não publicado, isto é, se deseja publicá-lo posteriormente. Caso selecione Publicado, terá que selecionar a edição em que gostaria de publicá-lo e inserir a Data de Publicação. Você também pode inserir números de páginas e informações de permissões;
8. Quando terminar de inserir todos os dados do artigo, clique em Salvar.

![Submission form on QuickSubmit.](./assets/quick-submit-plugin-2.png)

DOIs não são adicionados com o plugin da Submissão Rápida. Em vez disso, você deve adicioná-los separadamente.

Para adicionar DOIs existentes a artigos que já foram atribuídos:

1. Habilite e configure o plugin DOI para que seja necessário “Inserir um sufixo DOI individual para cada item publicado”;
2. Depois de terminar de enviar o artigo com o plugin Submissão Rápida, clique em “Ir à submissão” para ir ao registo de submissão do artigo. Você também pode acessar o registro de submissão do artigo por meio do painel de Submissão;
3. Abra Metadados no canto superior direito e vá à guia Identificadores;
4. Digite o sufixo DOI para o artigo;
5. Clique em Salvar e em Salvar novamente para atribuir o DOI;
6. Se você normalmente atribui DOIs usando uma padronização, reconfigure o plugin DOI para isso depois de terminar de adicionar DOIs aos artigos carregados com o plugin de Submissão Rápida.

Para atribuir novos DOIs a artigos:

1. Certifique-se de que o plugin DOI está habilitado e configurado.
2. Depois de terminar de enviar o artigo com o plugin Submissão Rápida, clique em “Ir à submissão” para ir ao registo de submissão do artigo. Você também pode acessar o registro de submissão do artigo por meio do painel de Submissão;
3. Abra Metadados no canto superior direito e vá ao guia de Identificadores. Você deve ver uma prévia do DOI que será atribuído e uma caixa marcada ao lado de “Atribuir o DOI a este artigo”.
4. Clique em Salvar e o DOI será atribuído.

## Permissões

A ferramenta Redefinir Permissões do Artigo permite redefinir a declaração de direitos autorais e as informações de licença em todos os artigos publicados e revertê-los para as configurações padrão atuais de seu periódico. Tome cuidado ao usar esta ferramenta e consulte um especialista jurídico, se não tiver certeza de quais direitos você detém sobre os artigos publicados em seu periódico.

![Option to reset artile permission in the Tools Permissions tab.](./assets/learning-ojs3.2-jm-users-tools-permissions.png)

---
book: learning-ojs
version: 3.3
---

# Configurações da Revista

A seção Configurações permite que você configure a sua instalação OJS para melhor atender as suas necessidades editoriais.

Você pode encontrar as Configurações no menu esquerdo do Painel quando estiver logado como o usuário com permissãões de Gerente da Revista.

![Visão do painel OJS para gerentes de periódicos com links para o menu Configurações e seus submenus na barra lateral esquerda.](./assets/learning-ojs3.1-jm-settings-journal.png)

Essa seção subdivide-se em Configurações da Revista, Configurações do Website, Fluxo Editorial e Distribuição, seções que serão abordadas nos próximos quatro capítulos.

A página de Configurações da Revista inclui detalhes sobre o periódico.

Possui guias, usadas para navegar entre as diferentes seções que a constituem: Equipe Editorial, Contato, Seções e Categorias.

![Visualização do painel OJS das Configurações da revista com guias de navegação para os submenus de Configurações na parte superior do conteúdo da página.](./assets/learning-ojs3.2-jm-settings-journal-page.png)

## Equipe Editorial

**Título** é o nome do periódico. Exemplo: Journal of Software Documentation.

**Sigla** são as iniciais do periódico. Exemplo: JSD.

**Abreviatura** é a abreviação do periódico. Exemplo: JSoftDoc.

**Editora** é o nome da organização que publica o periódico.

Observe que aqui o nome da Editora é utilizado para os metadados e não será exibido no site. Para mostrar o nome da editora no site, coloque-o no caminho Configurações da Revista > Contato > Endereço Postal. Você também pode incluir a informação em Sobre a Revista, logo abaixo.

O **ISSN** (International Standard Serial Number) é um número de 8 dígitos que identifica revistas. É gerido pela rede mundial de Centros Nacionais, coordenados por um Centro Internacional sediado em Paris, apoiado pela Unesco e pelo Governo Francês. O número pode ser obtido pelo [website do ISSN](http://www.issn.org/). Isso pode ser feito em qualquer etapa da existência da revista.

Tipicamente, as revistas geridas pelo OJS têm o ISSN eletrônico, mas algumas poderão também publicar a versão impressa, que requer um ISSN impresso diferente.

Note que o ISSN incluído aqui é utilizado para metadados e não será exibido no site. Recomenda-se que o ISSN também seja incluído no rodapé do site. Você pode fazer isso no caminho Configurações do Website > Configurar > Rodapé.

**Resumo da Revista** é uma breve descrição do seu periódico. Se você tiver uma instalação com múltiplos periódicos, esse texto aparecerá junto à listagem das revistas. Você pode optar por adicionar o resumo à página inicial da revista em Configurações do Website.

**Equipe editorial** permite adicionar os nomes do corpo editorial ou qualquer outra pessoa que você queira mencionar. Isso aparecerá no website público, mais especificamente em Sobre &gt; Equipe Editorial.

**Sobre a Revista** é um espaço para acrescentar qualquer informação sobre o periódico que possa ser de interesse dos leitores, autores e avaliadores.

Nessa seção, podem ser incluídos dados como: política de acesso aberto, foco e escopo do periódico, informações sobre direitos autorais, patrocínio, histórico da revista, declaração de privacidade e inclusão do sistema de arquivamento LOCKSS ou CLOKSS.

Clique em **Salvar** para gravar as alterações.

## Contato

Utilize essa seção para incluir informações de contato do periódico.

![Visão do painel OJS do submenu Contato das Configurações da revista, onde as informações podem ser adicionadas nos campos de texto.](./assets/learning-ojs3.2-jm-settings-journal-contact.png)

**Contato principal**: inclua informações de contato principal da revista, incluindo nome, e-mail, telefone, filiação e endereço postal do periódico. Estas informações ficarão visíveis na página Contato da revista.

**Contato de Apoio Técnico**: inclua informações da pessoa responsável pelo suporte técnico. Essa informação aparecerá na página de Contato da revista e em outros lugares do site para oferecer assistência aos usuários.

Clique em **Salvar** para gravar as alterações.

## Seções

Use essa página para configurar as diferentes seções do periódico. Exemplos: artigos, editoriais, revisões, comentários, etc. O OJS exige pelo menos uma seção e cria automaticamente a seção “Artigos”. You can create new sections, edit existing sections, or delete sections. The sections will appear for an author to select when they make a submission and they will be used to organize the articles in your published issues. You can also assign editors to specific sections. This part of the guide explains how you can configure sections.

![OJS dashboard view of Journal Settings submenu Sections with links for Order and Create Section and editable list of current sections.](./assets/learning-ojs3.2-jm-settings-journal-sections.png)

As submissões também podem ser desativadas individualmente em cada seção. Isso pode ser feito no caso de uma seção não estar mais sendo utilizada, a fim de evitar que artigos sejam submetidos a uma determinada seção.

A seção pode ser marcada como “Inativa” nas definições das seções:

![View of Joural Sections in the OJS dashboard. Red box surrounding checkbox next to the section Articles indicates where to mark it inactive.](./assets/learning-ojs3.3-section-setting-inactive.png)

É possível modificar seções clicando na seta azul à esquerda do nome da seção. Essa ação revelará opções de editar ou deletar a seção.

### Editar a seção

Selecionando a opção de edição, uma nova janela abrirá com diferentes opções de configuração.

![New window displaying a section's current settings that is editable.](./assets/learning-ojs-3.2-settings-website-settings-sections-edit-1.png)

Aberta a janela, você pode alterar o nome ou a abreviatura da seção.

**Política da seção**: use esse campo para incluir detalhes importantes, como requisitos de submissão, avaliação por pares, etc.

**Contar palavras**: use esse campo para limitar a quantidade de palavras do resumo para essa seção.

**Opções da seção**: cada seção pode ter diferentes configurações, incluindo indexação, revisão por pares, aceite de submissões sem solicitação, ou dados que revelem a listagem dos itens no sumário da edição.

A título de exemplo, a seção Editorial normalmente não é avaliada por pares.

As submissões também podem ser desativadas individualmente em cada seção. Isso pode ser feito no caso de uma seção não estar mais sendo utilizada, a fim de evitar que artigos sejam submetidos a uma determinada seção.

Você pode desmarcar “Itens desta seção NÃO serão incluídos para indexação do periódico” para seções que incluem prefácio, posfácio e qualquer outra coisa que possa desorganizar desnecessariamente o sumário.

![A window for entering Word Count, Review Form, and Section Options.](./assets/learning-ojs3.3-section-options.png)

**Identifique os itens publicados nesta seção como\(n\)**: isto é usado por alguns sistemas. Note que esse campo não é obrigatório.

**Editores atribuídos**: se existem editores cadastrados no periódico, você os verá listados aqui e poderá selecionar um deles para a seção. Isso significa que qualquer submissão feita nessa seção será automaticamente atribuída ao editor, poupando o trabalho de designar manualmente um editor.

Clique em **Salvar** para gravar as alterações e retornar à página de Seções.

### Criar Seção

A partir da página de Seções, selecione a opção Criar Seção para abrir uma nova página com exatamente as mesmas informações descritas acima.

![A new window for entering section information in text fields and selecting section options.](./assets/learning-ojs-3.2-settings-website-settings-sections-create.png)

Preencha as informações e clique em Salvar para gravar as alterações.

### Restringir submissões

Cada seção permite restringir submissões marcando a caixa “Itens desta seção NÃO serão incluídos para indexação do periódico“.

![The list of options for restricting a section. Items can be selected from list by checking the box to the left of the item.](./assets/learning-ojs3.2-jm-settings-journal-sections-restrict.png)

Se essa caixa estiver marcada, os autores não poderão submeter artigos ao periódico. Autores que selecionem Nova submissão em seus painéis de controle, receberão a mensagem “Esta revista não está aceitando submissões neste momento”.

![Screenshot example of message displayed on a journal New Submission page.](./assets/learning-ojs3.1-jm-settings-journal-not-accepting-submissions.png)

### Ordenar Seções

Quando tiver mais de uma seção criada, você verá a opção Ordenar. Use-a para reordenar como as seções aparecem no website da revista.

![A list of available sections from top to bottom of page in OJS dashboard.](./assets/learning-ojs3.2-jm-settings-journal-sections-order.png)

Clique no botão **Concluído** ao finalizar.

### Delete Sections

You can only delete a section if there are no articles assigned to it. If you want to delete a section that has articles assigned to it, you will need to move the articles to a different section first. Then click the blue arrow below the section name to reveal the **Delete** link, then click the link. OJS will ask if you want to permanently delete the section and you can click **Yes**.

## Categorias

No OJS 3 é possível adicionar Categorias para organizar os artigos em coleções temáticas e fornecer outra forma de acesso ao conteúdo aos leitores. As categorias podem ser exibidas como um bloco de navegação no site da revista e os leitores podem selecionar a categoria para visualizar todos os artigos que a compõem. You can place an article in a category by editing its metadata, which is explained in the [Production and Publication chapter](./production-publication). Essa seção explica como criar e editar categorias.

![OJS dashboard view of Journal Settings submenu Categories with links for Order and Add a Category and editable list of current categories.](./assets/learning-ojs3.1-categories-menu.png)

Para criar uma nova categoria:

* Clique em Incluir categoria;
* Adicione o nome da categoria que aparecerá para os leitores;
* Inclua caminho URL da categoria no website;
* Insira descrição que aparecerá acima da lista de artigos da categoria;
* Altere (essa ação é opcional) a ordem dos artigos por data ou título;
* Adicione (essa ação também é opcional) uma imagem que aparecerá no topo da página da categoria;
* Clique em Ok

![A new window for entering category information in text fields and selecting category options.](./assets/learning-ojs3.1-create-category.png)

Para editar a Categoria

* Clique no nome da categoria que deseja modificar;
* Faça as alterações;
* Clique em Ok.

Para remover uma categoria:

* Clique na seta azul ao lado da categoria que será excluída;
* Clique no botão Remover que aparece abaixo;
* Confirme a exclusão da categoria.

Para exibir as categorias no website, basta seguir o caminho Configurações > Website > Configurar > Barra Lateral e habilitar o Bloco de Navegação

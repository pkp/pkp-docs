---
book: learning-ojs
version: 3.2
---

# Configurações do Periódico

A seção Configurações permite configurar o OJS para melhor atender às suas necessidades editoriais.

You can find the Settings in the left menu panel when you are logged in as a user with Journal Manager permissions.

![](./assets/learning-ojs3.1-jm-settings-journal.png)

It consists of Journal Settings, Website Settings, Workflow Settings, and Distribution Settings, which will be covered in the next 4 chapters.

A página Configurações do Revista inclui detalhes sobre o periódico.

Use the tabs to navigate to the different sections of Journal Settings: Masthead, Contact, Sections.

![](./assets/learning-ojs3.2-jm-settings-journal-page.png)

## Equipe Editorial

**Journal title** is the name of your journal. E.g., Journal of Software Documentation

**A sigla do periódico** são as iniciais do periódico. Por exemplo, JSD.

**Abreviatura** é a abreviação do nome do periódico. Por exemplo, JSoftDoc.

**Editora** é o nome da organização que publica o periódico.

Observe que o nome da editora inserida aqui é usado para os metadados, mas não será exibido em seu site. Para mostrar o nome da editora em seu site, você pode inseri-lo em Configurações da revista > Contato > Endereço para correspondência. Você também pode adicioná-lo abaixo em Sobre a Revista.

**ISSN** (International Standard Serial Number) é um número com oito dígitos que identifica os periódicos. É administrado por uma rede mundial de Centros Nacionais coordenada por um Centro Internacional localizado em Paris, apoiado pela Unesco e pelo governo francês. Um número pode ser obtido no [site ISSN](http://www.issn.org/). Isto pode ser feito em qualquer momento do funcionamento do periódico.

OJS journals will typically have an online ISSN, but some may also publish a print version, which requires a different print ISSN.

Please note that the ISSN entered here is used for metadata but will not be displayed on your site. It's recommended that you also add the ISSN to the footer of your site. You can do this under Website Settings > Appearance > Footer.

**Resumo da revista ** é uma breve descrição do seu periódico. Se você estiver em um portal de periódicos do OJS com vários periódicos, este texto aparecerá com sua lista de periódicos. Você também pode optar por adicionar o resumo do periódico à página inicial do periódico nas Configurações Website.

**Equipe Editorial** permite que você adicione os nomes de sua equipe editorial ou de qualquer outra pessoa que você deseje mencionar. Isso aparecerá no site em Sobre > Equipe Editorial.

**Sobre a Revista ** é um espaço para adicionar qualquer informação sobre o periódico que possa ser do interesse de leitores, de autores ou de avaliadores.

Isso pode incluir sua política de acesso aberto, o foco e escopo do periódico, aviso de direitos autorais, divulgação de financiamento, histórico do periódico, uma declaração de privacidade e inclusão em qualquer sistema de arquivamento LOCKSS ou CLOCKSS.

Hit the **Save** button to save your changes.

## Contact

Use esta seção para adicionar os contatos do periódico.

![](./assets/learning-ojs3.2-jm-settings-journal-contact.png)

**Principal Contact**: Add contact information for the journal's main contact person, including name, email, phone, affiliation, and mailing address for the journal. This will appear on the journal's Contact page.

**Contato de Apoio Técnico**: Adicione informações sobre o contato do responsável pelo apoio técnico do periódico. Essas informações aparecerão na página de contato do periódico e também em diferentes pontos do fluxo de trabalho para atendimento aos usuários.

Hit the **Save** button to save your changes.

## Sections

Use esta página para configurar as diferentes seções de seu periódico. Por exemplo, artigos, editoriais, críticas, resenhas, etc.

Todas as suas seções aparecerão aqui. O OJS requer pelo menos uma seção, por isso cria previamente uma seção "Artigos".

![](./assets/learning-ojs3.2-jm-settings-journal-sections.png)

You can modify sections by clicking on the blue arrow to the left of the section name. This will reveal options to edit or delete the section.

### Edit a Section

Ao selecionar o link Editar fará com que uma nova janela se abra com diferentes opções de configuração.

![](./assets/learning-ojs-3.2-settings-website-settings-sections-edit-1.png)

From here, you can change the name or abbreviation of the section.

**Políticas da seção**: Use este campo para adicionar detalhes importantes, como requisitos para submissão, avaliação por pares, etc.

**Word Count**: Use this to limit the number of words for abstracts in this section.

**Opções de seção**: Cada seção pode ter configurações diferentes, incluindo se é indexada, avaliada pelos pares, aceita submissão voluntária ou listada no sumário.

Por exemplo, uma seção Editorial normalmente não será avaliada por pares.

Se você tiver uma seção que não está mais ativa, você pode marcar "Restrita a editores e editores de seção" e os autores não poderão mais submeter para esta seção.

You can check off "Will not be included in the indexing of the journal" for sections that contain front matter, back matter, and anything else that might clutter the search index unnecessarily.

![](./assets/learning-ojs-3.2-settings-section-options.png)

**Identificar os itens publicados nesta seção como  um(a) **: É usado por alguns sistemas. Observe que não é um campo obrigatório.

**Section Editors**: If you have editors enrolled in your journal, you will see them listed here and can assign one of them to the section. This means any submissions made to the section are automatically assigned to the editor, saving you from manually assigning an editor.

Hit the **Save** button to save your changes and return to the Sections page.

### Create Section

Na página Seções, selecione o link Incluir Seção para abrir uma janela em branco, exatamente a mesma descrita acima usada para editar uma seção.

![](./assets/learning-ojs-3.2-settings-website-settings-sections-create.png)

Preencha os detalhes e clique em Salvar para gravar sua ação.

### Restrição de submissões à seção

Cada seção permite restringir as submissões marcando a caixa de seleção "Restrita a editores e editores de seção".

![](./assets/learning-ojs3.2-jm-settings-journal-sections-restrict.png)

Se esta caixa de seleção estiver marcada para todas as seções, os autores não poderão realizar submissões. Os autores que selecionarem Nova Submissão em seus painéis de controle verão a mensagem "Este periódico não está aceitando submissões no momento."

![](./assets/learning-ojs3.1-jm-settings-journal-not-accepting-submissions.png)

### Seção Ordenar

Quando você tiver mais de uma seção, você verá um link Ordenar. Use isso para reordenar as seções no site do seu periódico.

![](./assets/learning-ojs3.2-jm-settings-journal-sections-order.png)

Clique no botão **Concluído** quando terminar.

<hr>

## Categories

No OJS 3.1.2, você pode criar categorias para organizar seus artigos em coleções temáticas e fornecer outra maneira para que os leitores acessem seu conteúdo. As categorias podem ser exibidas como um bloco de navegação no site do seu periódico e os leitores podem selecionar uma categoria para visualizar todos os artigos nela contidos. Você pode colocar um artigo em uma categoria editando seus metadados, o que é explicado no [capítulo Editoração e Publicação](./production). Esta seção apenas explica como criar e editar categorias.

![](./assets/learning-ojs3.1-categories-menu.png)

To create a new category:

- Clique em Incluir Categoria
- Enter a name for your category that will be displayed to readers
- Enter a path for the category’s URL on your site
- Enter a description which will appear above the list of articles in the category
- Se quiser, você pode alterar a ordem dos artigos por data ou título
- Se desejar, adicione uma imagem que aparecerá na parte superior da página da categoria
- Click Save

![](./assets/learning-ojs3.1-create-category.png)

To edit a category:

- Click the name of the category you want to edit
- Make the changes
- Click OK

To remove a category:

- Click the blue arrow next to the category you want to remove
- Click the Remove button that appears below
- Confirm that you want to remove the category

Para exibir categorias em seu site, você pode ir para Configurações do site > Gerenciamento da barra lateral e colocar o Bloco de Navegação na barra lateral.

---
book: learning-ojs
version: 3.3
title: Learning Open Journal Systems 3.3 - Statistics
---

# Estatísticas

Os recursos de estatísticas do OJS permitem que você visualize diferentes números relativos a atividade, acesso e downloads de vários elementos do seu site, incluindo visualizações de artigos e resumos, atividade de assinatura, atividade editorial e de revisão, e contagens de usuários separados por função. Há também uma seção de geração de relatórios para a produção de vários documentos a partir de alguns dos dados disponíveis.

Esta seção irá descrever o relatório de estatísticas/ferramentas de visualização disponíveis no OJS e como usá-lo. Se você estiver interessado em gerenciar estatísticas como administrador de sistemas, incluindo configuração da estrutura de estatísticas, gerenciamento de estatísticas legadas, estatísticas no OJS 2 e estatísticas de solução de problemas, consulte a documentação [Guia do Administrador do PKP](https://docs.pkp.sfu.ca/admin-guide/en/statistics) sobre o assunto.

Para obter um passo a passo em vídeo de Estatísticas no OJS, consulte nosso [Criação de um jornal no OJS 3.3. Módulo 13: Estatísticas ](https://www.youtube.com/watch?v=fU1orCK7GSM&list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY) vídeo abaixo.

[![Setting up a journal in OJS 3.3. Module 13: Statistics](https://img.youtube.com/vi/fU1orCK7GSM/0.jpg)](https://www.youtube.com/watch?v=fU1orCK7GSM&list=PLg358gdRUrDVTXpuGXiMgETgnIouWoWaY)

## Definições

As definições a seguir podem ser úteis para você compreender a variedade de estatísticas rastreadas pelo OJS.

* **Página de resumo:** a página de destino de um artigo, contendo o título, as informações do autor, o resumo, o DOI e os links para as versões de texto completo de qualquer artigo.  Também conhecida como “página do artigo” ou “página de destino”. É normalmente usada como ponto de registro do artigo para DOIs ou outros hiperlinks: Os Crossref DOIs resolvem páginas de resumo do artigo, ao contrário de arquivos de composição final, como a maioria dos outros serviços de indexação.
* **Visualização do artigo:** na estrutura de estatísticas, qualquer referência a uma “visualização do artigo” significa uma visualização única da página de resumo do artigo por visitante. Não se trata de contagem agregada de todas as visualizações de artigo e download, mas de apenas visualizações abstratas.
* **Visualização de registro:** na estrutura de estatísticas, qualquer referência a uma “visualização de arquivo” significa visualização ou download de um arquivo de formato específico por visitante. Também conhecida como "download de arquivo", não é uma contagem agregada de todas as visualizações. Se houver várias provas para um artigo \(por exemplo, arquivo HTML, PDF etc.\), cada uma terá sua própria contagem de visualizações. O OJS não faz distinção entre downloads de arquivos e visualizações na tabela de métricas, pois os downloads são contados como visualizações de usuários.
* **Vários cliques:** o uso ocorre clicando em uma página de resumo ou arquivo várias vezes, em rápida sucessão. OJS identifica e remove tais tentativas de suas métricas de uso de acordo com o Código de Prática do CONTADOR do Projeto.
* **Código de Prática do Projeto COUNTER** trata-se de um conjunto de práticas desenvolvidas pelo COUNTER para estabelecer meios de relatar as métricas de uso de recursos eletrônicos de forma consistente. O Código fornece regras sobre o que deve ser considerado uma visualização, incluindo regras específicas para o uso do robô e abuso de vários cliques. O OJS filtra as métricas por meio das regras. Também deve ser observado que o PKP faz parte do Grupo de Trabalho de COUNTER Bots e Crawlers.
* **Robôs, rastreadores, bots:** são visitantes não humanos do site que ainda podem visualizar e fazer download dos dados. Eles geralmente são identificados assim para o servidor, e o OJS não os conta em suas métricas de uso, de acordo com o Código de Prática do CONTADOR do Projeto.

## Artigos

O OJS oferece aos editores e gerentes de periódicos a opção de visualizar representações em gráficos e tabelas do uso do artigo, incluindo visualização de resumos e downloads de textos completos.

As estatísticas visuais podem ser encontradas no painel do menu esquerdo, clicando em Artigos.

![OJS interface with the Articles option highlighted under Statistics in the left menu.](./assets/ojs-statsmenu.png)

As estatísticas de artigos mostram as visualizações dos resumos em formato de gráfico e tabela. O gráfico visual pode ser alterado para visualização mensal ou diária. O formato da tabela permitirá que você filtre o total em ordem crescente ou decrescente.

![Sample of a graph of abstract views produced by the Articles statistics tool.](./assets/abstract-views.png)

![Sample article details table produced by the Articles statistics tool.](./assets/article-details.png)

O ícone de calendário, no canto superior direito do painel, oferece a opção de alterar a visualização do artigo para os últimos 30, 90 ou 365 dias, todas as datas ou um intervalo personalizado.

![The calendar used for selecting date ranges in the Articles statistics tool.](./assets/calendar-range-articles.png)

O ícone de filtro, no canto superior direito do painel, oferece a opção de filtrar os artigos por seções.

![The calendar used for selecting date ranges in the Articles statistics tool.](./assets/article-filters.png)

Você também tem a opção de pesquisar as estatísticas de um artigo específico por título, autor ou ID do manuscrito usando a função de pesquisa em Detalhes do artigo.

![The search bar for locating specific article statistics.](./assets/article-details-search.png)

## Atividade editorial

Esta seção fornece estatísticas sobre o fluxo de trabalho editorial, como número de submissões recebidas, dias para a primeira decisão editorial e taxas de aceitação e rejeição. Você pode filtrá-las usando um intervalo de datas personalizado para encontrar o número de artigos aceitos durante um período de 12 meses.

![Sample of editorial statistics.](./assets/editorial-activity.png)

Há alguns detalhes a serem observados ao se considerar os dados dos relatórios:

* Nos envios publicados entre datas deve ser contada apenas a data de publicação inicial e não as versões subsequentes.
* Em dias para decisão usa-se um limite de 80%, portanto, os dados listados representam 80% dos envios que receberam uma decisão editorial em X dias.
* As taxas de aceitação e recusa contam apenas os envios que receberam uma decisão de aceitar/recusar, portanto, excluem os envios que ainda estão na fila.
* Se um intervalo de datas for aplicado, ele só contará os envios que foram enviados e aceitos/recusados ​​dentro desse intervalo de datas. Desse modo, por exemplo, um envio que foi enviado antes do intervalo de datas, mas recebeu uma decisão de aceitar/rejeitar dentro do intervalo de datas, não será contado. Por esse motivo, é melhor usar intervalos de datas longas e intervalos de datas mais antigas para obter taxas de aceitação/rejeição precisas.

Um Relatório de Atividade Editorial será gerado mensalmente e pode ser enviado por e-mail aos editores e editores de seção. Todos os gerentes e editores de seção são automaticamente excluídos do relatório mensal; no entanto, você pode ativá-lo acessando Perfil do usuário> Notificações e desmarcando a caixa que desativa o e-mail automatizado.

## Usuários

Esta seção fornece informações sobre novos registros de usuário/função em um período de tempo especificado. A coluna Total não é um número total de contas criadas; ele identifica quantos usuários têm essa função no sistema agora. Quando um usuário existente recebe uma nova função, como um autor registrado, tornando-se um revisor, essa adição ao número total de revisores no sistema será refletida nos dados tendo em vista um aumento no número de revisores, mas nenhuma mudança no número total de usuários.

![Sample users statistics data.](./assets/users.png)

## Gerador de relatórios

A página Gerador de relatórios (Report Generator) fornece acesso a uma variedade de relatórios de sua revista.

![The list of reports on the Report Generator page in OJS, detailed below.](./assets/report-generator.png)

O sistema gera relatórios que rastreiam os detalhes associados ao uso do site e envios durante um determinado período de tempo. Esses relatórios podem ser amplamente agrupados em relatórios de “uso”, que contêm métricas de uso indicativas de leitores visitantes, e relatórios de “conteúdo”, que fornecem dados sobre o respectivo item (por exemplo, informações de revisão). Os relatórios são gerados em formato CSV, que requer um aplicativo de planilha para visualização.

* Relatório de estatísticas de uso de PKP: fornece métricas granulares de uso diário para todos os artigos, arquivos de artigos, edições e visualizações/downloads da página inicial. Incluirá os dados do país do visitante, se estiverem sendo registrados. Consulte o Relatório de estatísticas de uso abaixo para obter mais informações e exemplos. (Uso)
* Relatório de assinaturas: fornece informações sobre quaisquer assinaturas individuais e institucionais. Esta opção de relatório só está disponível se as assinaturas estiverem habilitadas no periódico. (Conteúdo)
* Relatório de artigos: fornece uma planilha de todos os artigos publicados. (Contente)
* Relatórios COUNTER: fornece relatórios COUNTER para todos os periódicos no aplicativo OJS. Também fornece contagens agregadas mensais e anuais para visualização de resumo e artigos. (Uso)
* Relatório de revisão: fornece informações de revisão sobre todos os artigos do sistema, incluindo nomes de revisores, revisões e recomendações. (Conteúdo)
* Visualizar relatório: fornece um relatório sobre visualizações de arquivos e abstracts pelos leitores (ou seja, quantas vezes um PDF de um artigo foi visualizado). (Uso)
* Geração de relatório personalizado: versão personalizável do relatório de estatísticas de uso, a partir da qual várias facetas podem ser selecionadas e extensões de datas específicas podem ser definidas. Consulte Gerar de relatório personalizado para obter mais informações e exemplos. (Uso)

### Relatório de estatísticas de uso

Este relatório fornece dados granulares sobre visualizações mensais para a página inicial do periódico, sumário do artigo, páginas iniciais/resumo do artigo e visualizações de arquivo no formato CSV. Ele fornece informações sobre o país (se configurado). Cada linha fornece uma contagem total de visualizações mensais para um determinado objeto (página inicial do periódico, página de resumo do artigo, compilação do artigo ou sumário da edição). O levantamento de dados por país fica mais definido se o suporte ao país tiver sido ativado e configurado corretamente.

**Utilize-o para** gerar uma visão geral multifacetada do uso do conteúdo de mês a mês. Ele lista a contagem de visualizações mensais para todos os artigos, downloads de arquivos de artigos, visualizações de sumário de questões e visualizações da página inicial de periódicos para o período de tempo especificado. A manipulação manual adicional do relatório resultante deve ser feita para obter resultados agregados.

**Não o use para** tentar obter um instantâneo de uso rápido, uso legado ou diários que têm um conjunto de dados de métricas muito grande \(devido ao longo histórico, alto número de leitores ou profundidade de granularidade de métricas\). Em vez disso, use o Gerador de relatórios personalizados.

**Notas especiais:**

* Este relatório tenta capturar: todo o histórico de uso da página inicial do periódico, todos os resumos de artigos, todas as versões de artigos e todos os índices de edições.
* **Instalações do OJS versão 3.1.1 ou anteriores**: para reduzir o potencial de exceder os limites de tempo para downloads, este relatório fornece apenas 5.000 registros. Se você tiver muitos dados relatáveis,  provavelmente não relatará todos. Se for esse o caso, então deve ser utilizado o plugin Gerador de relatórios personalizados, usando intervalos de datas menores. (Esta restrição foi removida no OJS 3.1.2.)

**Dados de exemplo \(ligeiramente editados para maior clareza\):**

| **ID** | **Type** | **Title**                                                                        | **Issue**              | **Journal** | **Country** | **Month** | **Count** |
| ------ | -------- | -------------------------------------------------------------------------------- | ---------------------- | ----------- | ----------- | --------- | --------- |
| 1      | Journal  | Canadian Journal of Communication                                                | CJC                    | CA          | 201502      | 1678      |           |
| 112    | Article  | Toronto Star Fires Reporter Claire Hoy, Sues Him and TV Stations on Libel Charge | Vol 1, No 3 \(1974\) | CJC         | CA          | 201502    | 3         |
| 112    | Article  | Toronto Star Fires Reporter Claire Hoy, Sues Him and TV Stations on Libel Charge | Vol 1, No 3 \(1974\) | CJC         | US          | 201502    | 1         |

A partir do exemplo acima, é possível ver que, em fevereiro de 2015, a página inicial da revista CJC foi visualizada 1.678 vezes, enquanto o artigo *“Toronto Star Fires Reporter…”* foi visualizado 3 vezes no Canadá e uma vez nos Estados Unidos.

### Ver relatório

Este relatório fornece visualizações de resumos por artigo e visualizações/downloads do arquivo. Essas métricas de uso não são filtradas para cliques múltiplos ou atividade de bot/rastreador e, portanto, podem parecer infladas em comparação com estatísticas mais recentes.

Dados de exemplo (ligeiramente editados para maior clareza):

No exemplo abaixo, é possível ver que o artigo 95, “The Making of the Canadian Media,” teve 443 visualizações de abstracts e 1476 visualizações de conteúdo no total. As visualizações PDF e Total são iguais porque não havia visualizações HTML. No caso do artigo 1125, “Redes digitais”, o resumo foi visualizado 1821 vezes e o total de visualizações do conteúdo é de 8.478, que é a soma das visualizações em HTML e PDF.

****

| **ID** | **Article Title**                | **Issue**               | **Date Published** | **Abstract** | **Total Galleys** | **HTML** | **PDF** |
| ------ | -------------------------------- | ----------------------- | ------------------ | ------------ | ----------------- | -------- | ------- |
| 95     | The Making of the Canadian Media | Vol 6, No 1 \(1979\)  | 1979-01-03         | 443          | 1476              |          | 1476    |
| 1125   | Digital Networks                 | Vol 24, No 4 \(1999\) | 1999-04-01         | 1821         | 8478              | 2093     | 6385    |

### Gerar relatório personalizado

Use este recurso para produzir seus próprios relatórios. Esses relatórios fornecem dados granulares, em visualizações diárias, para o periódico, usando o conjunto de dados de métricas completo. Você pode agregar resultados por:

* País
* Região
* Cidade
* Mês
* Dia

As métricas são rastreadas em relação aos tipos de itens específicos (AKA "objetos"):

* Downloads de arquivos;
* Visualizações de abstracts;
* Emissão de visualizações de sumário;
* Visualizações da página inicial da revista.

![The custom report generator interface in OJS.](./assets/custom-report-generator1.png)

Você também pode limitar os resultados a intervalos de datas específicas.

Esta é a opção de relatório mais flexível disponível no OJS e pode fornecer uma quantidade muito detalhada de dados. Abaixo, estão alguns exemplos de questões estatísticas que podem ser úteis para periódicos, bem como instruções sobre como formular um relatório para responder a essas questões usando este recurso.

Notas especiais sobre o gerador de relatórios:

* Dependendo da quantidade de dados em seu sistema, das facetas que você escolhe recuperar e da seleção do intervalo de datas , o sistema pode falhar ao gerar um relatório completamente sem tempo limite. Se você encontrar isso, tente reduzir o intervalo de data solicitado;
* Caso gere um relatório personalizado, o relatório também fornecerá a URL de relatório que você pode salvar para usar para repetir o processo de relatório idêntico. Certifique-se de copiar e salvar a URL em algum lugar para que você possa executar novamente sua pesquisa mais tarde (ele desaparecerá assim que a página for recarregada);
* Se for criado um relatório que informa sobre “ontem” ou “mês atual”, a URL do relatório resultante sempre usará “ontem” ou “mês atual” em relação ao dia em que o relatório for executado. Portanto, se você criou, originalmente, um relatório para reportar sobre “ontem” há um ano e o executou hoje, ele reportará sobre ontem. No entanto, se você especificar um intervalo de datas específico, digamos 1 de abril - 15 de abril de 2018, a URL do relatório resultante sempre relatará as métricas para esse intervalo específico;
* Observe que os dados do dia atual não estarão disponíveis até o dia seguinte.
* O gerador funciona como um funil de dados. O truque é restringir os elementos maiores (como intervalo de datas), selecionar aquilo que interessa a partir daí (questões, artigos, etc.) e, em seguida, ajustar os dados no final (ou seja, classificar pelo número de downloads);
* O Gerador de relatórios é mais útil se você usa as Opções avançadas. Todos os exemplos abaixo fazem uso das opções avançadas.

#### Relatório de exemplo: Qual o desempenho de determinada edição (ou seja, a mais recente) nos últimos meses?

Essa consulta específica fornecerá uma contagem mensal de quantas versões de texto completo foram baixadas de uma edição específica. Nela, você terá acesso a uma coluna referente ao mês, a contagem total para o mês de referência e uma linha separada para cada mês. Desse modo:

* Em “Modelos de relatório padrão”, selecione “Downloads de arquivo de artigo” na lista suspensa;
* Desmarque todas as caixas em “Agregar estatísticas por”;
* Clique no botão de opção “Mês” e insira o intervalo de datas em “Ou selecione o intervalo por;

![The custom report generator with the above described settings entered in OJS.](./assets/custom-report-generator10.png)

* Abra “Opções Avançadas” e selecione apenas “Mês” em Colunas;

!["Month" selected under the advanced options in the custom report generator.](./assets/custom-report-generator3.png)

* Este exercício busca  apenas uma filtragem muito leve de nossos dados. Sendo assim, selecione os arquivos de envio e, em seguida, os formatos de arquivos que deseja incluir em seu relatório. Este exemplo seleciona apenas PDF, mas você pode selecionar PDF e HTML, se sua revista também oferecer downloads de artigos HTML de texto completo. Use Ctrl + Clique ou Command + Clique para selecionar vários tipos. Em ID do objeto, insira o ID do objeto da edição na qual você está interessado, que estará localizado na URL da mesma. Por exemplo, uma edição com a URL publicknowledgeproject.org/journal/index.php/journal/issue/view/ 24 tem o ID de objeto 24;

![A sample issue ID entered into the custom report generator.](./assets/custom-report-generator4.png)

* Ignore as opções “Por localização geográfica” e “Ordenar por”, e clique em “Gerar relatório personalizado”;
* Assim, você obterá um relatório mensal muito simples dos downloads dos arquivos de leitura de prova para o volume do periódico;

![Results in .csv format returned from the above custom report.](./assets/custom-report-generator5.png)

* Salve a URL na parte inferior da página para seus registros!

#### Relatório de exemplo: Quais são os artigos mais baixados nos últimos 5 anos?

Este relatório apresentará uma lista de títulos de artigos (e os problemas de onde eles vêm) ordenados por contagem decrescente de download.

* Selecione “Downloads de arquivo de artigo” na caixa suspensa;
* Desmarque todas as caixas em “Agregar estatísticas por;”
* Selecione o botão de opção “Mês” e insira um intervalo de datas;

![The custom report generator with the above described settings entered in OJS.](./assets/custom-report-generator10.png)

* Selecione apenas “Artigo” e “Emissão” em Colunas. Dessa forma,  o tipo será restringido em um ponto posterior da consulta;

!["Article" and "Issue" selected under the advanced options in the custom report generator.](./assets/custom-report-generator6.png)

* Selecione “Arquivos de envio” sob o tipo de objeto e selecione todos os tipos de formatos que deseja incluir na contagem de download;

![The above described settings entered in OJS.](./assets/custom-report-generator7.png)

* Ignore a “localização geográfica” (não mostrada aqui);
* “Ordenar por” organizará seus artigos em ordem decrescente por número de downloads. Para fazer isso, selecione "Contar" na primeira caixa suspensa e selecione "Decrescente".

![Arrows pointing to the first two drop downs in the Order by section, with "Count" and "Descending" selected.](./assets/custom-report-generator8.png)

* O relatório resultante aparecerá da seguinte forma (truncado):

![Results in .csv format returned from the above custom report.](./assets/custom-report-generator9.png)

* Salve seu URL na parte inferior da página!

#### Exemplo: Qual edição é mais popular?

Esta consulta exibe uma contagem de downloads de texto completo para cada edição do periódico e ordena os resultados do maior para o menor.

* Selecione “Downloads de arquivo de artigo” na caixa suspensa;
* Desmarque todas as caixas em “Agregar estatísticas por”;
* Selecione o botão de opção “Mês” e insira um intervalo de datas;

![The custom report generator with the above described settings entered in OJS.](./assets/custom-report-generator10.png)

* Nas colunas, clique em “Número”;

!["Issue" selected under the advanced options in the custom report generator.](./assets/custom-report-generator11.png)

* Em “Filtros”, selecione “Arquivos de envio” em Tipo de objeto e selecione o(s) tipo(s) de arquivo usado(s) pela sua revista (use Ctrl + Clique ou Command + Clique para selecionar vários tipos);

![The above described settings entered in OJS.](./assets/custom-report-generator7.png)

* Ignore a “localização geográfica” (não mostrada aqui);
* “Ordenar por” organizará seus artigos em ordem decrescente por número de downloads. Para fazer isso, selecione "Contar" na primeira caixa suspensa e selecione "Decrescente".

![Arrows pointing to the first two drop downs in the Order by section, with "Count" and "Descending" selected.](./assets/custom-report-generator8.png)

* Execute seu relatório. Aqui está o que você obterá:

![Results in .csv format returned from the above custom report.](./assets/custom-report-generator12.png)

* Não se esqueça de salvar sua URL para exibi-lo posteriormente.

#### Exemplo: Quais países estão baixando nossos artigos (para um intervalo de datas específico)?

Esta consulta exibirá contagens agregadas para downloads de texto completo por país em ordem decrescente. Observe que será necessário especificar um intervalo de datas.

* Selecione “Downloads de arquivo de artigo” na caixa suspensa;
* Desmarque todas as caixas em “Agregar estatísticas por”;
* Selecione o botão de opção “Mês” e insira um intervalo de datas;

![The custom report generator with the above described settings entered in OJS.](./assets/custom-report-generator10.png)

* Selecione apenas “Revista” e “País” em Colunas. Você pode usar Ctrl + Click ou Command + Click para selecionar vários itens. Dessa forma, o tipo será restringido em um ponto posterior da consulta.

!["Journal" and "Country" selected under the advanced options in the custom report generator.](./assets/custom-report-generator13.png)

* Em “Filtros”, selecione “Arquivos de envio” em Tipo de objeto e, em seguida, selecione o(s) tipo(s) de arquivo usado(s) pela sua revista (use Ctrl + Clique ou Command + Clique para selecionar vários tipos);

![The above described settings entered in OJS.](./assets/custom-report-generator7.png)

* A aba “Ordenar por” organizará seus artigos em ordem decrescente por número de downloads. Para fazer isso, selecione "Contar" na primeira caixa suspensa e selecione "Decrescente";

![Arrows pointing to the first two drop downs in the Order by section, with "Count" and "Descending" selected.](./assets/custom-report-generator8.png)

* Execute o relatório.
* Não se esqueça de salvar sua URL para exibi-lo posteriormente.

![Results in .csv format returned from the above custom report.](./assets/custom-report-generator14.png)

### Exibir estatísticas de uso para leitores

Na página de destino do artigo, no OJS 3, você pode exibir as estatísticas de uso de um artigo no ano atual em forma de gráfico. Para isso, deverá usar o plugin de estatísticas de uso, conforme mostrado nesta imagem.

![A sample article with a graph of monthly downloads shown under the abstract.](./assets/reader-statistics.png)

Para ativar o plugin de estatísticas de uso:

1. Vá a Configurações &gt; Site &gt; Plugins.
2. Em Plugins genéricos, encontre o **plugin de estatísticas de uso**.
3. Marque a caixa à direita da descrição do plugin.

Para configurar o plugin de estatísticas de uso:

1. Vá a Configurações &gt; Site &gt; Plugins.
2. Em Plugins genéricos, encontre o **plugin de estatísticas de uso**.
3. Clique na seta azul à esquerda do nome do plugin para fazer com que os links apareçam abaixo do plugin.
4. Clique em **Configurações**.
5. Role até a parte inferior da caixa pop-up que é aberta na seção **Opções de exibição de estatísticas**.
6. Marque a caixa ao lado de **Exibir gráfico de estatísticas de envio para o leitor**.
7. Abaixo disso, você pode selecionar se deseja exibir as estatísticas como um gráfico de barras ou linhas e o número máximo de meses para exibir o uso.
8. Clique em **Salvar**.

![The optional statistic checkboxes where users can enable/disable city or regional data collection, and enable the statistics viewable to readers.](./assets/usage-stats-plugin-configuration-basic.png)

Por favor observe o seguinte:

* As estatísticas de uso só podem ser exibidas para o ano atual. O plugin é reiniciado no início de cada ano.
* As estatísticas exibidas indicam o número de vezes que um artigo foi baixado.

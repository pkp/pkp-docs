---
title: Sobre o Guia do Plugin ORCID para OJS e OPS
---

# Sobre o Plugin ORCID

[ORCID](https://orcid.org/) (Open Researcher and Contributor Identifier) é um identificador digital persistente que distingue pesquisadores individuais e suporta links automatizados entre pesquisadores e as suas atividades profissionais. Para uma visão geral da ORCID, consulte este [vídeo introdutório sobre o ORCID](https://vimeo.com/97150912).

Parceiros PKP com ORCID permitem a coleta e exibição de iDs ORCID autenticados para contribuidores de artigos e preprints publicados com Open Journal Systems (OJS) e Open Preprint Systems (OPS) através do Plugin de Perfil ORCID.

## O que faz o plugin ORCID?

O Plugin de Perfil ORCID para as versões de OJS/OPS 3.1.2 e acima permite que uma revista OJS e um servidor preprint OPS:

* Coletar e autenticar o iD ORCID de um(a) colaborador(a)
* Enviar automaticamente um e-mail para os colaboradores solicitando a autenticação de sua iD ORCID
* Exibe o iD do ORCID autenticado de um colaborador na página de pré-impressão ou artigo, que irá vincular ao registro ORCID do colaborador
* Adicionalmente, apenas para API de Membro - Enviar automaticamente os detalhes de publicação para o registro ORCID de um colaborador uma vez que seu trabalho tenha sido publicado em OJS/OPS

Para obter mais detalhes sobre cada uma dessas funções, consulte o capítulo [Usando o plugin ORCID](./using-plugin.md).

## Por que você deve usar o plugin ORCID?

Ao integrar ORCID com OJS/OPS, você será capaz de suportar a publicação das melhores práticas por:

* Permitir que os autores coletem seu trabalho publicado em um só lugar confiável
* Distinguindo autores de outros com um nome semelhante e mantendo um registro atualizado independente das mudanças de nome ou afiliação
* Demonstrando um compromisso com a transparência e credibilidade atribuindo com precisão os autores a suas obras publicadas
* Suportando a coleção de metadados precisos do artigo, incluindo informações do autor, compartilhando detalhes da publicação com Crossref

## API pública vs. membro

ORCID oferece dois endpoints de API diferentes para a API pública ORCID e o membro da API ORCID.

A **API Pública** é gratuita e disponível para qualquer pessoa. Ela permite a autenticação e leitura de dados públicos de registros ORCID em ORCID. Ela permite que o diário tenha os iDs ORCID dos colaboradores autenticados e exibidos nas páginas de artigo/pré-impressão. A sua principal diferença em relação à API do membro é que não enviará automaticamente os detalhes de publicação para o registo ORCID de um contribuidor após a publicação. Se você começar com a API pública e depois decidir mudar para a API do membro, por favor, entre em contato com o suporte ORCID para coordenar a transição da API Pública para API de Membros.

A **API de membros** requer participação institucional ORCID. Além das funcionalidades da API pública, a API do membro permite a leitura de dados de "grupos confiáveis" de registros ORCID, Além de adicionar/atualizar automaticamente os metadados nos registros ORCID.

Se o seu diário estiver associado a uma instituição, entre em contato com a biblioteca da instituição para perguntar sobre a filiação ORCID e as credenciais API. Você também pode consultar o diretório de membros do ORCID para ver se sua organização já é um [membro ORCID](https://orcid.org/members), ou revise [ORCID, as informações de participação](https://orcid.org/about/membership) se sua organização estiver interessada em se tornar um membro ORCID. Você também pode contatar o ORCID diretamente em support@orcid.org.

## Sandbox versus credenciais de produção

O ORCID fornece aos usuários de plugin uma opção para testar como o plugin funciona com sua instalação em um ambiente Sandbox (de testes) antes de entrar em ambiente de Produção. Você precisará de um conjunto diferente de credenciais para a Sandbox vs API de produção.

Como obter as credenciais da Sandbox, como testar na Sandbox, e as vantagens de testar na Sandbox são mais explicadas no [Apêndice: Testando o capítulo](./appendix-testing-orcid-sandbox.md) ORCID Sandbox.

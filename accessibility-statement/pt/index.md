---
generateHeadingToc: verdadeiro
---

# Declaração de Acessibilidade para o Tema Padrão do OJS 3.3+

## Introdução

O Public Knowledge Project (PKP) está comprometido em garantir que suas plataformas sejam tão acessíveis quanto possível a todos os usuários. Para alcançar tal objetivo, um novo Tema Padrão do OJS foi desenvolvido pelo PKP para o OJS 3.3 e superior, e foi auditado para barreiras de acessibilidade.

## Informação da auditoria

Uma auditoria da área pública do Tema Padrão para o OJS versão 3.3 foi realizada pela Access Changes Everything Inc., empresa canadense de consultoria em acessibilidade digital, de julho de 2019 a março de 2021. Access Changes Everything Inc. forneceu duas auditorias usando vários verificadores automáticos, e conduziu testes manuais exaustivos durante o processo de desenvolvimento. Auditorias exaustivas também foram realizadas por meio da contratação de testadores com necessidades especiais distintas, que usaram diversas tecnologias durante o processo; estas tecnologias estão listadas a seguir. Alguns dos testadores também participaram do processo de teste final.

Esta auditoria focou principalmente em reduzir as barreiras no Tema Padrão para pessoas com necessidades especiais variadas, como da visão, audição, mobilidade, fala, comunicação, cognitiva, neurológica, intelectual, do aprendizado e para aqueles com múltiplas deficiências.

### Informações de Padrões

Esta auditoria foi realizada usando o mesmo padrão internacional relacionado à acessibilidade do Tema Padrão do OJS, as Diretrizes de Acessibilidade de Conteúdo na Web (WCAG) 2.1 e 2.2 Nível AA. Note que a versão 2.2 ainda era um Rascunho em maio de 2020.

A auditoria foi muito além da WCAG 2.1 ou WCAG 2.2 (Rascunho) Nível AA. Incluiu itens que não estão atualmente na WCAG, como daltonismo, estilo e tipo de tipografia, bem como a redução de barreiras que impactam pessoas com deficiências cognitivas, neurológicas, intelectuais e/ou de aprendizado. A auditoria também incluiu melhores práticas de usabilidade, de forma a tornar o sistema mais usável e acessível para todos.

A auditoria incluiu testes nas seguintes áreas:

* Conteúdo textual
* Conteúdo imagético
* Conteúdo audiovisual
* Cor no conteúdo e design
* Layout de páginas e conteúdos
* Design de páginas e conteúdos
* Navegação
* Ferramentas de busca
* Widgets e plugins
* Formulários e mecanismos de erro
* Estrutura de conteúdo
* Uso de código HTML e CSS

### Testadores e Tecnologias Usadas

Access Changes Everything Inc. contratou diversos testadores com deficiências distintas, que usam diferentes tecnologias, para testarem diferentes partes do Tema Padrão para o OJS 3.3. A tecnologias usadas pelos testadores incluem as versões mais recentes, mas também antigas, das plataformas:

* Leitor de Tela JAWS para navegadores Chrome e EDGE (PC e Tablet)
* Leitor de Tela JAWS em navegadores Internet Explorer com Monitor Braille PacMate 20 (PC)
* Leitor de Tela NVDA em navegadores Chrome (PC)
* Leitor de Tela Microsoft Narrator no EDGE (Tablet)
* Leitor de Tela Apple VoiceOver no Safari (iPhone 6)
* Leitor de Tela Apple VoiceOver no Safari com Monitor Braille 40 Células (Mac)
* Leitor de Tela Apple VoiceOver no Safari com Monitor Braille 40 Células (iPad Pro)
* Dragon Naturally Speaking Premium 13 (PC)

Access Changes Everything Inc. usou Mac, PC e iPhone para testar o site em navegadores Chrome e Firefox. Algumas tecnologias foram usadas na auditoria:

* Aumento de navegador (100%-400%)
* Alteração de contraste de cores
* Controle por voz (iPhone apenas)
* Telas reduzidas (iPhone SE ou 5 apenas)
* Vários apps e plugins para Chrome e Firefox no Mac para simular deficiências visuais e cognitivas.

### Remediação e Barreiras Restantes

Após o recebimento do relatório completo da auditoria em dezembro de 2019, o PKP criou o [Projeto de Acessibilidade no Github](https://github.com/pkp/pkp-lib/projects/16) para acompanhar os problemas e o progresso para suas resoluções. O projeto também é aberto aos membros da comunidade para que possam comunicar problemas relacionados à acessibilidade na interface do usuário e nas funcionalidades da plataforma.

Em 2021, Access Changes Everything Inc. conduziu uma auditoria de acompanhamento do tema padrão para avaliar as correções realizadas pelos desenvolvedores do PKP. A maioria das questões identificadas no relatório inicial foram resolvidas pelo PKP, ou, no mínimo alternativas aceitáveis foram sugeridas pela Access Changes Everything Inc.

Ainda há barreiras restantes que não puderam ser completamente eliminadas. Estas estão sendo resolvidas pelo PKP ou podem ser tratadas pela forma que o OJS é usado pelas revistas que o adotam:

* reCAPTCHA: Quando habilitado na página de cadastro, reCAPTCHA apresenta uma barreira substancial para leitores de tela com dispositivos em braille e usuários dos comandos de voz no iPhone. Além disso, reCAPTCHA não possui um título no elemento iFrame e um rótulo de formulário, então, mesmo os leitores de tela que consigam usar, ainda podem enfrentar barreiras.

reCAPTCHA é um sistema de segurança e serviço de terceiros desenvolvido pela Google e integrado como uma funcionalidade opcional do OJS que pode ser desabilitada. Existem alternativas, como, por exemplo, o [Plugin Honeypot do OJS](https://github.com/ulsdevteam/pkp-formHoneypot).
* Conteúdo: Conteúdo do website e publicações criadas fora dos padrões de acessibilidade podem representar barreiras de acessibilidade. Tais barreiras podem incluir, entre outras coisas: imagens enviadas sem texto alternativo, cabeçalhos mal estruturados, links inacessíveis, falta de legendas para figuras e estrutura incorreta ou incompleta de dados tabulados (tabelas). Embora estejam fora do escopo de Acessibilidade do Tema Padrão, o PKP oferece orientações aos editores sobre [Criação de Conteúdo Acessível](https://docs.pkp.sfu.ca/accessible-content/).
* Barreiras restantes: As outras barreiras restantes estão listadas no [Projeto Github de Acessibilidade do PKP](https://github.com/pkp/pkp-lib/projects/16) que continuará sendo atualizado conforme as barreiras forem resolvidas.

## Entre em Contato

A auditoria do Tema Padrão do OJS encontrou várias barreiras e a maioria foi eliminada. No entanto, o tema será constantemente atualizado e novas barreiras poderão surgir inadvertidamente. Caso encontre barreiras, ou precise de auxílio, entre em contato por meio do [formulário de contato web do PKP](https://pkp.sfu.ca/contact-us/).

## Aviso legal

To the maximum extent permitted by applicable law, in no event will Simon Fraser University or any of its affiliates, or any of their respective governors, directors, employees, or agents, be liable for the failure of any content on applications implementing this theme to meet these accessibility standards, to the extent that such content was submitted or uploaded by a third party.

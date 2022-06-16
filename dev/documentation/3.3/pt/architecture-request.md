---
book: dev-documentation
version: 3.3
title: Ciclo de Vida da Solicitação - Documentação Técnica - OJS|OMP|OPS 3.3
---

# Ciclo de vida da solicitação

As solicitações HTTP são roteadas para um `Handler` que responde à solicitação. O `Handler` coordena outras classes para autenticar solicitações, buscar dados e formatar a resposta.

![Diagrama que descreve como uma solicitação é tratada](../img/request-lifecycle.png)

Saiba como as solicitações são [roteadas para handles](./architecture-routes.md).
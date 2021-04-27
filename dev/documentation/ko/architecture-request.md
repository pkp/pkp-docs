---
title: Request Lifecycle - Technical Documentation - OJS|OMP|OPS
---

# Request Lifecycle

HTTP requests are routed to a `Handler` which responds to the request. The `Handler` coordinates other classes to authenticate requests, fetch data and format the response.

![Diagram describing how a request is handled](../img/request-lifecycle.png)

Learn about how requests are [routed to handlers](./architecture-routes.md).
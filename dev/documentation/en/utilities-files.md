---
title: Files - Technical Documentation - OJS/OMP
---

# Files

## HTTP / HTTPS Client

Starting with OJS/OMP/OPS 3.3, PKP software makes use of the [Guzzle client](https://guzzlephp.org) to interact with HTTP and HTTPS-based services.

A configured Guzzle client can be instantiated using:
```
$client = Application:get()->getHttpClient();
```
Clients should be instantiated this way in order to ensure that they share common configuration information (e.g. proxies).

The client can be used as follows:
```
$client = Application::get()->getHttpClient();
$response = $client->request('GET', 'http://some-url-here');
$body = $response->getBody();
```
See http://docs.guzzlephp.org for more information.

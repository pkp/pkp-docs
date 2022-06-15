---
book: dev-documentation
version: 3.3
title: Autenticação - Documentação Técnica - OJS|OMP|OPS 3.3
---

# Autenticação

Os cookies são usados para autenticar uma sessão de usuário em relação a um `Usuário` registrado. Você pode recuperar o usuário logado no momento do objeto `Request`:

```php
$currentUser = $request->getUser();
if (!$currentUser) {
    // usuário não está logado
}
```

O `Request` está disponível globalmente no `Application`.

```php
$currentUser = Application::get()->getRequest()->getUser();
```

## Tokens CSRF

Os tokens CSRF devem ser enviados com todas as solicitações `POST`, `PUT` ou `DELETE` para evitar ataques usando [falsificação de solicitação entre sites](https://en.wikipedia.org/wiki/Cross-site_request_forgery).

Os tokens CSRF não são necessários com solicitações à API quando o [Token da API](/dev/api/#api-token) é usado.

Um token CSRF pode ser solicitado na sessão atual.

```php
$csrfToken = $request->getSession()->getCSRFToken();
```

### Rotas de Página

Quando os Manipuladores de Páginas recebem solicitações `POST`, `PUT` ou `DELETE`, quaisquer dados de formulário devem ser processados por um `Formulário`. Nesses casos, o `Formulário` deve adicionar a verificação CSRF às suas regras de validação.

```php
class ExampleForm extends Form {
    function __construct(...) {
        $this->addCheck(new FormValidatorCSRF($this));
    }
}
```

### Rotas do Controlador

Os controladores devem verificar o token CSRF para qualquer operação que receba uma solicitação `POST`, `PUT` ou `DELETE`.

```php
class IssueGridHandler {
    function deleteIssue($args, $request) {
        if (!$request->checkCSRF()) {
            return new JSONMessage(false);
        }
    }
}
```

### Rotas de API

Os manipuladores de API verificam automaticamente o token CSRF para todas as solicitações `POST`, `PUT` ou `DELETE`. Nenhuma ação adicional deve ser tomada.

## Biblioteca de IU

Um token CSRF está disponível como uma variável global ao trabalhar com a Biblioteca de IU. Saiba mais sobre como usar o [Token CSRF](/dev/ui-library/dev/#/pages/csrf) em solicitações ajax.

## Sessão do Usuário
A sessão do usuário armazena o endereço IP de um usuário conectado, a data/hora da última utilização e muito mais. Você pode acessar a sessão do usuário atual diretamente.

```php
$sessionManager = SessionManager::getManager();
$session = $sessionManager->getUserSession();
```

O uso do `SessionManager` é desencorajado, a menos que você precise acessar a própria sessão. Em todos os casos, o `User` atual deve ser recuperado do objeto `Request`.

## Ferramentas CLI

Um usuário conectado não existirá ao usar as ferramentas CLI. Deve-se tomar cuidado ao escrever código que obtém ou modifica informações do banco de dados para garantir que ele possa ser usado quando não existir nenhuma sessão de usuário.

Os [Manipuladores](./architecture-handlers) devem realizar qualquer autenticação e autorização necessária antes de atender a uma solicitação.

---

Agora que sabemos quem é o usuário, saiba [como autorizamos seu acesso a diferentes operações](./architecture-authorization).
---
book: dev-documentation
version: 3.3
title: Começando - Documentação Técnica - OJS|OMP|OPS 3.3
---

# Começando

Esta seção descreverá como instalar a aplicação, contribuir com alterações e manter-se atualizado com as alterações mais recentes.

> Este guia pressupõe que você saiba como executar um servidor local, trabalhar com controle de versão git e executar ferramentas a partir da linha de comando. 
> 
> {:.warning}

## Requisitos Técnicos

Os requisitos a seguir devem ser atendidos para executar o software nos repositórios do GitHub. Leia o [Guia do Administrador](../../../admin-guide/en/managing-the-environment) se estiver instalando a partir de um pacote de versão.

- PHP 7.3+
- MySQL 4.1+ _or_ PostgreSQL 9.1.5+

Se você estiver usando o Windows, pode ser necessário instalar o GNU Patch e adicioná-lo à variável de ambiente `PATH` do seu sistema.

## Instalar

Fork e clone o [OJS](https://github.com/pkp/ojs), [OMP](https://github.com/pkp/omp) ou repositório [OPS](https://github.com/pkp/ops) no GitHub. (Como [fork e clonar um repositório no GitHub](https://help.github.com/en/articles/fork-a-repo).)

No seu terminal, navegue até o diretório raiz da aplicação e execute o seguinte comando para verificar os submódulos:

```
git submodule update --init --recursive
```

Copie o arquivo de configuração padrão.

```
cp config.TEMPLATE.inc.php config.inc.php
```

Abra o arquivo `config.inc.php`, encontre as configurações do banco de dados e atualize-as para corresponder às credenciais do seu servidor SQL.

Instale dependências com o [composer](https://getcomposer.org/).

```
composer --working-dir=lib/pkp install
composer --working-dir=plugins/paymethod/paypal install
```

Execute o seguinte comando se estiver instalando o OJS.

```
composer --working-dir=plugins/generic/citationStyleLanguage install
```

Instale dependências com [NPM](https://www.npmjs.com/).

```
npm install
npm run build
```

Execute o seguinte comando para iniciar o aplicativo usando o servidor interno do PHP.

```
php -S localhost:8000
```

Carregue seu navegador e navegue até `http://localhost:8000` para instalar a aplicação.

## Branches

Versões publicadas do software podem ser encontradas em branches no repositório git. Por exemplo, execute o seguinte comando check out da versão 3.3.0 do software.

```
git checkout stable-3_3_0
```

## Remotes

Para obter alterações na aplicação que foram feitas após a forked, adicione o remote `upstream`.

Para OJS:

```
git remote add upstream git@github.com:pkp/ojs.git
cd lib/pkp
git remote add upstream git@github.com:pkp/pkp-lib.git
cd ../ui-library
git remote add upstream git@github.com:pkp/ui-library.git
cd ../..
```

Para OMP:

```
git remote add upstream git@github.com:pkp/omp.git
cd lib/pkp
git remote add upstream git@github.com:pkp/pkp-lib.git
cd ../ui-library
git remote add upstream git@github.com:pkp/ui-library.git
cd ../..
```

Execute os comandos a seguir sempre que desejar fazer pull das alterações mais recentes em seu repositório.

```
# Atualize o app
git checkout main
git pull upstream main
git push

# Atualize o submódulo pkp-lib
cd lib/pkp
git checkout main
git pull upstream main
git push

# Atualize o submódolo ui-library
cd ../ui-library
git checkout main
git pull upstream main
git push

cd ../..
```

## Updates

Quando você tiver retirado as alterações do remoto `upstream`, execute o seguinte para sincronizar os submódulos `lib/pkp` e `lib/ui-library`.

```
git submodule update --init --recursive
```

Pode ser necessário atualizar as dependências e reconstruir o pacote JavaScript.

```
composer --working-dir=lib/pkp update
npm install
npm run build
```

Às vezes, uma alteração de código modificará a estrutura do banco de dados e você precisará executar o script de atualização.

```
php tools/upgrade.php upgrade
```

## Contribuições

Todas as contribuições devem ser escritas em um branch e enviadas para seu fork. Em seguida, abra uma [Pull Request](https://help.github.com/en/articles/creating-a-pull-request-from-a-fork) para o repositório do PKP.

Para código destinado a inclusão na base de código principal:
- Novos recursos são melhor contribuídos para a ramificação `main` para inclusão na próxima versão principal. As correções de bugs são melhor contribuídas para o branch estável mais recente (por exemplo, `stable-3_3_0` para 3.3.0).
- Os design patterns usados no software PKP devem ser entendidos e seguidos sempre que possível. Isso inclui:
  - Padrões de localização
  - Práticas de segurança (verificação de IDs de banco de dados, evitar ataques cross-site scripting, etc.)
  - Considerações de manutenção (inclua scripts de atualização e instalação quando necessário)
  - Formatação de código, nomenclatura de variáveis e convenções estilísticas
- Os contribuidores são responsáveis por escrever código compatível com as plataformas primárias listadas em docs/README.md.
- Quando as alterações contribuídas podem afetar mais de uma aplicação, solicitamos que todos os principais aplicações sejam considerados (OJS, OMP e OPS).
- A equipe de desenvolvimento está feliz em revisar os patches contribuídos, mas temos um tempo limitado para integrar os patches com a base de código ou modificar o código contribuído. Se aspectos do código precisam ser trabalhados, preferimos informar o autor e fazer com que ele faça as modificações.

For contributions that are distributed separately as patches or plugins:
- If contributors haven't met the conditions above, they are welcome to distribute additional features as patches or plugins. However, the PKP team won't be able to provide support in this case.
- If the option is available, coding a feature as a plugin is the preferred method.

---

Now that you're up and running, learn more about the [application architecture](./architecture).

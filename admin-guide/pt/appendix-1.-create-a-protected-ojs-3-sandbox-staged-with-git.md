# Apêndice A: Criando um ambiente de teste protegido e preparado com o Git

O documento a seguir descreve um fluxo de trabalho geral para a criação de um ambiente de teste baseado no git, para uma revista que não está atualmente no git. São apresentadas instruções sobre como limitar o acesso acidental, envio de e-mail etc. YMMV. Adapte ao seu próprio ambiente; use por sua conta e risco.

## Preparando o ambiente Git

O README disponível aqui: [ https://github.com/pkp/ojs ](https://github.com/pkp/ojs) contém instruções sobre como instalar a partir do git. Execute as seguintes instruções:

1. Crie um usuário e banco de dados MySQL ou PostgreSQL para o OJS. O comando usado é o seguinte; ajuste de acordo com seu ambiente, acesso à raiz etc.:

   **MySQL**
   ```
   mysql -u root -e "CREATE DATABASE `ojs-sandbox` DEFAULT CHARACTER SET UTF8; GRANT ALL ON `ojs-sandbox`.* TO `ojs`@localhost IDENTIFIED BY 'ojs'" -p
   ```
   **PostgreSQL**
   ```
   psql -h localhost -U postgres -d postgres -c "CREATE USER ojs WITH NOSUPERUSER INHERIT NOCREATEROLE NOCREATEDB NOREPLICATION NOBYPASSRLS ENCRYPTED PASSWORD 'ojs'; COMMENT ON ROLE ojs IS 'Site administrator';
   CREATE DATABASE ojs-sandbox OWNER ojs;" -W
   ```

2. Execute o checkout da versão estável a partir do GitHub. O caminho será específico de acordo com sua instalação do Apache, e pode-se atualizar sua versão para a última versão estável:

   ```
   cd <httpd-docs-folder>
   BRANCH='stable-3_3_0'
   git clone -b $BRANCH --depth 1 https://github.com/pkp/ojs.git ./
   git branch --unset-upstream $BRANCH
   chmod -R 755 *
   ```

3. Busque as bibliotecas PKP correspondentes e faça o checkout da versão estável a partir do GitHub, cerificando-se de que a versão corresponde à mesma versão referenciada anteriormente:

   ```
   git submodule update --init --recursive --depth 1
   ```

4. Instale o composer:

   ```
   cd ../..
   php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
   php -r "if (hash_file('sha384', 'composer-setup.php') === 'e0012edf3e80b6978849f5eff0d4b4e4c79ff1609dd1e613307e16318854d24ae64f26d17af3ef0bf7cfb710ca74755a') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
   php composer-setup.php
   php -r "unlink('composer-setup.php');"
   ```

5. Instale as dependências do composer:

   ```
   cd lib/pkp
   php ../../composer.phar --no-dev install
   cd ../../plugins/paymethod/paypal
   php ../../../composer.phar --no-dev install
   cd ../../../plugins/generic/citationStyleLanguage
   php ../../../composer.phar --no-dev install
   ```

6. Instala as dependências do Node.js (NOTA: o npm deve estar instalado no servidor):

   ```
   cd ../../..
   npm install
   npm run build
   ```

7. Crie um novo arquivo de configuração:

   ```
   cd ../../..
   cp config.TEMPLATE.inc.php config.inc.php
   chmod 600 config.inc.php
   ```

Neste momento, uma versão completamente preparada do sistema e base de dados OJS deverão estar prontas para uso.

## **Elimine qualquer possibilidade de acionar tarefas agendadas no servidor de teste**

Exclua o plugin Acron (o plugin Acron pode disparar a execução de tarefas agendadas sem depender uma tarefa cron):

   ```
   rm -rf plugins/generic/acron
   rm -rf lib/pkp/plugins/generic/acron
   ```

O plugin terá que ser reinstalado após a entrada do sistema em produção, o que, caso esteja executando tudo via git, pode ser feito da seguinte maneira:

   ```
   git checkout plugins/generic/acron
   cd lib/pkp
   git checkout plugins/generic/acron
   ```

## Fazendo uma cópia de segurança e transferindo os arquivos de submissões, pasta pública e base de dados

Estes comandos são realizados na instalação em produção, sendo os comandos padrão de cópia/arquivamento.

Base de dados:

* **MySQL**: normalmente é usado o mysqldump para realizar a cópia da base de dados:
   ```
   mysqldump db\_name --opt --default-character-set=utf8 --result-file=~/client\_db.sql -u db\_user -p
   ```
* **PostgreSQL**: normalmente é usado o [pg_dumpall](https://www.postgresql.org/docs/current/backup-dump.html#BACKUP-DUMP-ALL) para realizar uma cópia da base de dados e dos dados em nível de cluster (como as definições de usuários):
   ```
   pg_dumpall -U postgres -h localhost -d postgres > ~/client_db.sql
   ```

Submissões: o diretório de armazenamento das submissões podem ser encontrados no arquivo config.inc.php do OJS, procurando pelo parâmetro “files\_dir”. Recomenda-se compactar os arquivos para tornar a transferência mais fácil:

   ```
   cd <submission files dir>
   tar -cvzf ~/files.tar.gz ./
   ```

Pasta pública: a pasta pode incluir itens como capas das edições, imagens de perfis, entre outros, estando localizada na pasta do OJS, no subdiretório “public/“:

   ```
   cd <ojs-system-dir>/public
   tar -cvzf ~/public.tar.gz ./
   ```

Transfira os arquivos ao servidor de teste: normalmente é usado o comando `scp` ou `rsync`. Os administradores do servidor deverão informar o que deve ser usado, mas, em geral é algo semelhante à:

  ```
  rsync -avz client\_db.sql username@stagingserver.org:/~
  rsync -avz public.tar.gz username@stagingserver.org:/~
  rsync -avz files.tar.gz username@stagingserver.org:/~
  ```

## Instalando os arquivos de submissões, pasta pública e base de dados nos locais apropriados

Instale a base de dados (ajuste de acordo com o nome de usuário, da base de dados e senha do seu ambiente, especificados anteriormente):

* **MySQL**
   ```
   mysql -u ojs-sandbox -p ojs-sandbox < ~/client\_db.sql
   ```
* **PostgreSQL**
   ```
   psql -U postgres -h localhost -f ~/client_db.sql postgres
   ```

Instale os arquivos das submissões:

   ```
   tar -xvf ~/files.tar.gz <files directory>
   ```

Instale a pasta pública:

   ```
   tar xvf ~/public.tar.gz <ojs-folder>/public/
   ```

Edite o arquivo `config.inc.php`, ajustando os parâmetros da base de dados e files_dir.

   ```
   vi config.inc.php
   ```

A partir deste momento, todos os arquivos relevantes e tabelas da base de dados devem estar em seus devidos lugares, e o arquivo de configuração deve apontar para esses locais.

## Limpando todos os e-mails do sistema para evitar o envio acidental de mensagens

Caso esteja executando seu ambiente de teste em um servidor próprio, considere desabilitar toda e qualquer funcionalidade de e-mail no servidor. No entanto, as instruções a seguir também funcionarão (em que nenhum e-mail será enviado para endereços de ambiente de teste).

Configure os endereços de e-mail para o [Mailinator](https://www.mailinator.com/), o que fará com que todas as mensagens serão enviadas a uma caixa de correio pública (por exemplo, username@mailinator.com), ou usar um endereço falso. Também podem ser usados endereços de e-mail com base nos papéis. Para isso, será necessário acessar a base de dados:

* **MySQL**
   ```
   mysql -u ojs -pojs ojs-sandbox
   ```
* **PostgreSQL**
   ```
   psql -h localhost -U ojs -d 'ojs-sandbox'
   ```

Para definir todos os endereços de todos os usuários para username@mailinator.com:

   ```
   UPDATE users SET email=CONCAT\(username,'@mailinator.com’\);
   ```

Para definir todos os e-mails relacionados a submissão, por exemplo, dos colaboradores, para test@example.com:

   ```
   UPDATE authors SET email = 'test@example.com’
   ```

## (Opcional) Incluindo proteção por senha ao site para não seja acidentalmente acessado, rastreado etc.

A proteção é incluída em todos os ambientes de teste ao incluir uma proteção via .htaccess e .htpasswd na raiz do ambiente de teste. Os administradores dos servidores deverão saber como realizar esta configuração.

## Executando a atualização

A partir da raiz do ambiente de teste execute o comando a seguir:

   ```
   php tools/upgrade.php upgrade
   ```

A partir deste ponto, caso a atualização seja concluída com sucesso, o servidor de teste deverá estar funcionando com uma versão OJS 3 limpa e protegida que poderá ser gerenciada via git.

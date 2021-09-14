# Importar e exportar dados

Open Journal Systems oferece uma variedade de ferramentas e plugins que permitem inserir e extrair dados do OJS. Este capítulo explicará como usar as ferramentas e plugins de importação e exportação. Informações adicionais podem ser encontradas na documentação de cada plugin, no diretório de plugins do OJS (plugins/).

A maioria das funções de importação e exportação pode ser realizada entrando no sistema como Editor Gerente e acessando Ferramentas > Importar/Exportar.

![The OJS Tools menu showing Import/Export options in OJS.](./assets/import-export.png)

No entanto, em alguns casos plugins de importação/exportação precisam ser instalados ou habilitados primeiro em Configurações > Website > Plugins. Como acessar e usar plugins e funções específicas será explicado a seguir.

![The plugins gallery where some import/export plugins can be enabled.](./assets/plugins.png)

Funcionalidades de importação/exportação também estão disponíveis via linha de comando; veja `tools/importExport.php` e a seção sobre linha de comando para mais informações.

## Importar e exportar artigos e edições

Artigos e edições podem ser importadas rapidamente para o OJS usando o plugin de Submissão rápida ou o Plugin XML nativo \(antigamente chamado de Plugin XML de Artigos e Edições\). O plugin de submissão rápida é útil para importar de cinco a dez artigos, mas para quantidades maiores de artigos e edições, ou caso possua os metadados em formato tratável, pode ser mais interessante usar o plugin XML nativo.

### Submissão rápida

O plugin de submissão rápida permite incluir rapidamente uma submissão a uma edição. Ele oferece um processo em uma etapa para editores precisando ignorar os processos tradicionais de submissão, avaliação e edição. Veja [Aprendendo o OJS 3](https://docs.pkp.sfu.ca/learning-ojs/en/tools) para mais detalhes.

### Plugin XML nativo

O plugin de XML nativo no OJS 3.x substitui o Plugin XML de Artigos e Edições. usado no OJS 2 para importar e exportar metadados de artigos e edições de e para um OJS via arquivo XML.  O plugin pode ser usado para importar e exportar uma ou várias edições e/ou artigos, incluindo os metadados. Pode ser usado nos seguintes casos:

* Transferir metadados de artigos e edições de uma revista OJS para outra
* Mover grande volume de edições anteriores e artigos para o OJS

Para usar este plugin será necessário:

* Conhecimentos básicos de XML
* Estar cadastrado como Editor Gerente em uma revista OJS

Caso esteja importando dados, crie primeiro o arquivo de importação em XML.  Apresentamos a seguir alguns exemplos de arquivos de importação e esquemas em XLM:

* Exemplo de arquivo XML para metadados de artigo: [https://github.com/pkp/ojs/blob/main/cypress/fixtures/export-issues.xml](https://github.com/pkp/ojs/blob/main/cypress/fixtures/export-issues.xml)
* Exemplo de arquivo XML para os metadados da edição: [https://github.com/pkp/ojs/blob/main/plugins/importexport/native/tests/functional/testissue.xml](https://github.com/pkp/ojs/blob/main/plugins/importexport/native/tests/functional/testissue.xml)
* Esquema XML para uso em aplicações de software do PKP: [https://github.com/pkp/pkp-lib/blob/main/plugins/importexport/native/pkp-native.xsd](https://github.com/pkp/pkp-lib/blob/main/plugins/importexport/native/pkp-native.xsd)
* Esquema XML para uso no OJS: [https://github.com/pkp/ojs/blob/main/plugins/importexport/native/native.xsd](https://github.com/pkp/ojs/blob/main/plugins/importexport/native/native.xsd)

\* Note que o formato XML usado pelo plugin XML nativo para o OJS 3 é diferente do formato XML para o pluing de artigos e edições em XML usado no OJS 2.  Caso exporte dados de um OJS 2 e deseje importar em um OJS 3, será necessário editar o arquivo XML primeiro. Note também que o esquema é atualizado periodicamente; caso esteja exportando de uma versão OJS para outra versão diferente, pode ser necessário ajustar o XML minimamente para levar em consideração as mudanças.

Outras questões a considerar são:

* Certifique-se de definir o tipo de documento apropriado usando `<!DOCTYPE ...>`.
* Seu arquivo XML deve ser codificado em UTF8.
* Datas devem ser especificadas como AAAA-MM-DD.
* Para importar um arquivo, pode-se usar o `<embed>` para embutir um arquivo diretamente no seu documento XML, ou use `<href>` para criar um vínculo.
* Caso a tag `<embed>` seja usada, será necessário codificar seus arquivos com base64. Usar `<embed>` com um arquivo codificado em base64 seria algo como: \[captura de tela necessária\]
* Vínculos podem ser feitos tanto para URLs completas como para arquivos locais, usando `<href>`. Um link de URL completo seria algo semelhante a: \[captura de tela necessária\]
* Vínculos locais podem ser usados se as composições já estiverem armazenadas na máquina de destino, mas neste caso será necessário executar a importação via linha de comando. Importar um arquivo local seria algo como: \[add screenshot\]
* Alguns elementos suportam tags HTML embutidas, como o elemento abstract. Caso incorpore HTML em seu documento, lembre-se de encapsular o HTML dentro de `<![CDATA[]]>`.
* Caso a revista use mais de um idioma, inclua termos traduzidos em um registro separado: \[screenshot\]
* Caso cometa algum erro de digitação nos dados que está tentando importar, podem ocorrer registros duplicados ou divididos: por exemplo, se a revista já tiver uma seção "Artigos" com as iniciais ART, mas digitou no arquivo XML por engano `<abbrev locale="en\_US">`AR`</abbrev>` em vez de `<abbrev locale="en\_US">`ART`</abbrev>`, uma nova seção da revista com as iniciais AR será criada, e um artigo será incluído nessa seção. Este tipo de erro pode ser corrigido facilmente antes da importação, mas muito difícil de limpar depois.

O arquivo XML deve ser sempre validado antes de ser importado. Caso use algum editor XML, como o editor Liquid XML ou Oxygen XML, o arquivo pode ser validado no próprio editor. Caso o XML não seja válido, uma mensagem de erro será exibida com a identificação de linha\(s\) com erros.

O arquivo XML pode ser importado assim que for um arquivo válido:

1. Entre no OJS como Editor Gerente
2. Clique em Ferramentas > Importar/Exportar > Plugin de XML nativo
3. Na guia Importar, clique em enviar arquivo e escolha o arquivo XML
4. Clique em Importar
5. Uma notificação será exibida tanto para erros durante o processo, quanto para o sucesso na importação.

![The XML file upload screen.](./assets/native-xml-plugin.png)

Para exportar metadados de artigos e edições uando o plugin XML nativo:

1. Login to OJS as Journal Manager
2. Go to Tools > Import/Export > Native XML Plugin
3. Depending on whether you are exporting article or issue metadata, go to the Export Articles or Export Issues tab
4. Select the articles or issues you wish to export by checking the box beside them.
5. Click Export
6. The articles or issues will be exported in XML format, and can be imported to this or another journal

\* Please note that using this plugin to export articles and issues will not only export all relevant metadata, but will include all article files \(HTML, PDF, etc.\) embedded within the XML document in Base64 encoding. This can result in large, cumbersome XML files, especially when multiple issues are exported at once. Opening them in an editor to view or change any XML data or metadata may be taxing for your computer, and it may take some time to download and/or upload said files, depending on your connection and the resources of the source server.

![The Export Articles tab under the Native XML Plugin.](./assets/native-xml-plugin-export.png)

## Import and export users

### Export users to XML

The Users XML Plugin can be used to import and export users and their roles. It can be used in the following cases:

* Moving user accounts from one OJS journal to another
* Moving user accounts from another system into OJS
* Moving user accounts from OJS into another system
* Exporting user data from OJS, modifying it, and importing it back into OJS

To use this plugin you will need the following:

* A basic understanding of XML
* To be enrolled as a Journal Manager in the OJS journal

If you are importing users into OJS, first create the XML import file.  Here is a sample XML import file: [https://github.com/pkp/ojs/blob/main/plugins/importexport/users/sample.xml](https://github.com/pkp/ojs/blob/main/plugins/importexport/users/sample.xml)

\* Please note that the XML format used by the Users XML Plugin in OJS 3 is different from the XML format used by the Plugin in OJS 2.  If you export data from OJS 2 and want to import it into OJS 3, you will have to edit the XML file first.

Here are some things to consider:

* Be sure to define the document type appropriately using `<!DOCTYPE ...>`.
* Your XML file should UTF8-encoded.
* `<firstname>`, `<lastname>` and `<email>` are mandatory.
* If you allow the system to generate passwords for the users you are uploading, you can optionally allow the system to email the users with their account credentials. This option can be found on the Users XML Plugin Page \("Send a notification email to each imported user containing the user's username and password."\).
* You can require the user change their password when they next log in by setting the password attribute "change" to "true": `<password must\_change="true">`myoldpassword`</password>`
* The default password encryption is "plaintext" \(ie., none\). Encrypted assumes it was encrypted by `Validation::encryptCredentials()` and is using the same encryption algorithm used by the system.
* If the imported file contains any usernames or email addresses that already exist in the system, the user data for those users will not be imported and any new roles to be created will be assigned to the existing users.

You should validate your XML file before importing it. If you are using an XML editor tool, such as Liquid XML Editor or Oxygen XML, you can validate the file there.  If the XML is not valid an error message will display identifying what line\(s\) have errors.

Once you have the valid XML import file, you can import it:

1. Login to OJS as Journal Manager
2. Go to Tools > Import/Export > Users XML Plugin
3. Under the Import Users tab, click Upload File and select your XML file
4. Click Import Users
5. You will be notified of any errors, or if the import was successful.

![The Users XML Plugin file uploader for importing users.](./assets/users-xml-plugin-import.png)

To export user accounts using the Users XML Plugin:

1. Login to OJS as Journal Manager
2. Go to Tools > Import/Export > Users XML Plugin
3. Select the user accounts you wish to export by checking the box beside them.
4. Click Export Users
5. The user accounts will be exported in XML format, and can be imported to this or another journal

![The Export Users tab under Users XML Plugin.](./assets/users-xml-plugin-export.png)

### Export users to CSV

Journal editors and managers can export the user database as a CSV file. The CSV format is easy to use with marketing and mailing list management tools, such as Mailchimp.

To export users to a CSV file:

1. Navigate to **Statistics > Users**.
2. Click on **Export**.
3. Use checkboxes to select the group(s) of users you wish to export.
4. Click **Export** again. This will generate a download, which may take several minutes to process depending on the size of your user database.

## Export metadata to external sites and indexing services

OJS has plugins that allow you to export article metadata to external sites and indexing services that is compatible with their format.

### PubMed XML Export Plugin

The PubMed XML Export Plugin allows you to export article metadata as an XML file in NLM PubMed/MEDLINE format. For more information about the Plugin, see its README file: [https://github.com/pkp/ojs/tree/main/plugins/importexport/pubmed](https://github.com/pkp/ojs/tree/main/plugins/importexport/pubmed)

### DataCite Export/Registration Plugin

The DataCite Export/Registration Plugin allows you to export issue, article, galley, and supplementary file metadata in DataCite format and register DOIs with DataCite. For more information about the Plugin, see its README file: [https://github.com/pkp/ojs/blob/main/plugins/importexport/datacite/README](https://github.com/pkp/ojs/blob/main/plugins/importexport/datacite/README)

### DOAJ Export Plugin

If your journal is indexed by the Directory of Open Access Journals \(DOAJ\), you can export your journal issue and article metadata to DOAJ either manually using the DOAJ Export Plugin or automatically using the DOAJ API.

To export journal metadata automatically to DOAJ:

1. Obtain an API key from DOAJ by going to [https://doaj.org/](https://doaj.org/), logging in, and checking your membership number.
2. Login to OJS as Journal Manager
3. Go to Tools > Import/Export > DOAJ Export Plugin
4. Under the Settings tab, enter your DOAJ API Key
5. Check off “OJS will deposit articles automatically to DOAJ. Please note that this may take a short amount of time after publication to process. You can check for all unregistered articles.”
6. Click Save

To manually export article metadata to DOAJ:

1. Login to OJS as Journal Manager
2. Go to Tools > Import/Export > DOAJ Export Plugin
3. Go to the Articles tab
4. Select the articles you want to export.  They must be published.
5. Click Export
6. Visit [https://doaj.org/](https://doaj.org/) and login to upload the XML file that was created during the export process

### Crossref XML Export Plugin

The Crossref XML Export Plugin allows you to automatically and manually export article metadata in Crossref XML format for deposit with Crossref.  For information about how to use this plugin, see the Crossref OJS Manual: [http://docs.pkp.sfu.ca/crossref-ojs-manual/](http://docs.pkp.sfu.ca/crossref-ojs-manual/)

### mEDRA Export/Registration Plugin

The mEDRA Export/Registration Plugin allows you to export issue, article, and galley metadata in Onix for DOI \(O4DOI\) format and register DOIs with the mEDRA registration agency. For information about how to use the plugin, see its README file: [https://github.com/pkp/medra/blob/main/README](https://github.com/pkp/medra/blob/main/README)

## Use import/export plugins from the command line

Import/export plugins can normally also be run from the command line. You can view the applicable plugin names by running the following command:

```
php tools/importExport.php list
```

You can see usage parameters by running the following command:

```
php tools/importExport.php \[PluginName\] usage
```

## Troubleshoot importing and exporting

> _"I imported my XML file and I’m getting an error message."_

Did you validate your XML file before importing it?  If you did not, run it through a validator in your XML editor or browser and the validator will indicate what is wrong with the file.

> _"When I click on the Export button I get a blank page instead of a list of data to export."_

You should check the error\_log file to find what went wrong exactly.

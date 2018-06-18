# Securing Your System

Please see [https://pkp.sfu.ca/ojs/README](https://pkp.sfu.ca/ojs/README) to ensure that the OJS install directory and `/files` folder are configured securely on your server.

In general, the `/files` folder should not be web accessible and should be placed outside of the main OJS install directory. OJS will manage access to private submission files based on user roles and permissions \(i.e. Editors will have access to all submission files, whereas authors will only be able to access their own submission files\).

In addition, to ensure security the `/files` folder should not be readable by other users on the server. Only the webserver should have the necessary read/write permissions so that OJS can read existing files and add new files to the folder, e.g.

`drwxrwx---    6 ojs www 204B 11 Sep  2017 files/`

It is recommended that you install an SSL certificate for your OJS install and ensure that your journal always uses the HTTPS protocol to manage user registration, login, and to present content to readers. Once your SSL certificate has been installed and is confirmed to be working \(i.e. you can access your journal via [https://myjournal.org](https://myjournal.org/)\) you can configure OJS to always use HTTPS by using the following setting in `config.inc.php`:

`; Force SSL connections site-wide  
force_ssl = On`  


You should also set the OJS base URL to use the HTTPS version of your journal:  


`; The canonical URL to the OJS installation  
base_url = "https://myjournal.org"`  


To ensure that password reset requests from users produce random, secure passwords, ensure that you set a long, random salt in `config.inc.php`:  


`; The unique salt to use for generating password reset hashes  
salt = "sdlkjfhleiqwrfgbksdlkjgbelruywoeiyt7384gdqlywqvlwjf"`


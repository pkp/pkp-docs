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

## Managing Spam

There are a number of configuration steps you can take to combat SPAM and other forms of malicious registration activity on your site.

### CAPTCHA/ReCAPTCHA

Configure a CAPTCHA and enable it for user registration, notifications and commenting. We strongly advise using Google’s ReCAPTCHA \([https://www.google.com/recaptcha/intro/](https://www.google.com/recaptcha/intro/)\). \(Older OJS 2 versions include a PHP captcha, but that has proven to be less secure than ReCaptcha.\)

If you are using OJS older than 2.4.8-3, you will not be able to use the most recent version of ReCAPTCHA \(v2\), and your ReCAPTCHA will not work properly after March 31 2018. **Upgrading is strongly recommended**.

To configure ReCAPTCHA:

1. Register an account and create a “property” for your website here: [https://www.google.com/recaptcha/intro/](https://www.google.com/recaptcha/intro/)
2. Ensure that the relevant lines for enabling captcha are uncommented in config.inc.php
3. Copy and paste the public and private keys you receive as part of the property registration into the `[captcha]` section of `config.inc.php`:

`recaptcha_public_key = 123456abcdef  
Recaptcha_private_key = abcdef123456`

Don’t forget to test this setup by registering a test account and confirming that a\) the ReCAPTCHA appears and b\) the ReCAPTCHA properly validates.

### Enable Account Validation

OJS can be configured so that an email account validation step must be completed for all new user accounts before they can log in and interact with the system. To do this, uncomment and configure the following lines in `config.inc.php`:

`; If enabled, email addresses must be validated before login is possible.  
require_validation = On`

`; Maximum number of days before an unvalidated account expires and is deleted  
validation_timeout = 14`

The above configuration will require all new registrations to click on a link and validate their account before being able to log in; and will auto-prune any non-validated accounts after 14 days.

### Cleaning lots of users

If you have been the target a SPAM bot, enabling the above procedures may not be enough: you may already have a fair number of SPAM accounts in your system. The only way to “delete” users is to merge the problem account into another account using the Merge Users option. \(This effectively deletes the problem user. Any submissions, editorial history, etc. from the problem user is merged into the other user account.\)

This tool can be used via the UI, but it’s slow \(and only OJS/OCS 2 currently have an option to merge more than one user at a time\). A more effective method is to use the command-line tool:

`$ php tools/mergeUsers.php username1 username2`

… where username1 is the user that will be merged into, and username2 is the user to be deleted. As it is, this tool only works on one merge at a time, but it can be scripted. An example php script would be:

`<?php  
$names = file('/tmp/names.txt', FILE_SKIP_EMPTY_LINES);  
foreach ($names as $member_name => $member) {  
        echo exec ("php /ojswebroot/tools/mergeUsers.php admin-user " .escapeshellcmd($member));  
}  
?>`

The script expects all spam accounts to be identified by username and listed in a names.txt file, one name per line, like so:

`spamuserOne  
spamUserTwo  
spamUserThree  
…`

The names.txt file has to be stored somewhere on the server and the location referenced by the script \(eg. “/tmp/names.txt”\). The script should also specify the location of the mergeUsers.php script \(eg. “/ojswebroot/tools/mergeUsers.php”\), and also the user into which all of these accounts should be merged \(eg. “admin-user” - this must be an existing account\). Update those parameters to suit your environment. And also: don’t store this script, or the names.txt file, in a web-accessible location!

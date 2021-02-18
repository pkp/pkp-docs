# Securing Your System

## The Basics

Please see [https://pkp.sfu.ca/ojs/README](https://pkp.sfu.ca/ojs/README), [https://pkp.sfu.ca/omp/README](https://pkp.sfu.ca/omp/README), or [https://pkp.sfu.ca/ocs/README](https://pkp.sfu.ca/ocs/README) to ensure that the software install directory and file storage area (`files_dir` in `config.inc.php`) are configured securely on your server.

In general, the `files_dir` should not be web accessible and should be placed outside of the main software install directory. The software application will manage access to private submission files based on user roles and permissions \(i.e. Editors will have access to all submission files, whereas authors will only be able to access their own submission files\).

In addition, to ensure security the `files_dir` folder should not be readable by other users on the server. Only the webserver should have the necessary read/write permissions so that OJS, OMP, or OCS can read existing files and add new files to the folder, e.g.

`drwxrwx---    6 ojs www 204B 11 Sep  2017 files/`

The exact details of file permissions will depend on how your web server runs PHP scripts (this is called the "server API" or "SAPI"). For example, if it uses `mod_php`, all PHP scripts will run as the `www-data` user or similar (this is inherently not 100% secure on a multi-user server). If it uses CGI, FastCGI, FPM, or a similar mechanism, it will likely run under your user account.

It is recommended that you install an SSL certificate for your OJS, OMP, or OCS install and ensure that your site always uses the HTTPS protocol to manage user registration, login, and to present content to readers. Once your SSL certificate has been installed and is confirmed to be working \(i.e. you can access your site via [https://myjournal.org](https://myjournal.org/)\) you can configure your site to always use HTTPS by using the following setting in `config.inc.php`:

`; Force SSL connections site-wide
force_ssl = On`

You should also set the base URL to use the HTTPS version of your journal, press, or conference:

`; The canonical URL to the OJS installation
base_url = "https://myjournal.org"`

To ensure that password reset requests from users produce random, secure passwords, ensure that you set a long, random salt in `config.inc.php`:

`; The unique salt to use for generating password reset hashes
salt = "sdlkjfhleiqwrfgbksdlkjgbelruywoeiyt7384gdqlywqvlwjf"`

## Deploying PKP Software Securely

> Section Contributed by Kenton Good

A secure deployment of PKP software can be best achieved by using the following recommendations, which are described in docs/README in every download of the software:

* Dedicate a database to OJS, OMP, and OCS; use unique credentials to access it. Configure this database to perform automated backups on a regular basis. Perform a manual backup when upgrading or performing maintenance. If you do not have access to your database contact your system administrator and ensure that database backups are taking place for your OJS.
* Configure the software (`config.inc.php`) to use SHA1 hashing rather than MD5.
* Enable captcha or recaptcha in your `config.inc.php` file, and test that they are working. This will prevent most spam user registrations.
* Configure the software (`config.inc.php`) to use `force_login_ssl` so that authenticated users communicate with the server via HTTPS. (You will also have to properly create and configure an SSL certificate to do this properly.)
* Install the software so that the files directory is NOT a subdirectory of the OJS, OMP, or OCS installation and cannot be accessed directly via the web server.
* Restrict file permissions as much as possible.
* Deploy and test a proper backup mechanism. The backup mechanism should back up the database, the system files, and the file storage area (the `files_dir` parameter in `config.inc.php`). Ideally, you should make both on-site and off-site backups.
* Ensure that your web server environment is regularly updated, in particular with any and all security patches.

If these steps are followed, you will substantially reduce the risk of falling prey to common hacking techniques. If already running OJS, OMP, or OCS, we strongly urge you to review your existing configurations and ensure these steps have been followed.

### Secure File Management

Authors, reviewers, and editors deal with submission files from people they don’t know on a daily basis, and there are some basic precautions that you will want to take to mitigate the possibility of being compromised via one of these files. These steps don’t differ from how you would deal with email or other daily life on the internet, but are worth outlining in general form here.

* Make sure you have antivirus software installed, and that it is up to date
* Make sure your operating system and all software (especially Word and Excel) are kept up to date, ideally by turning on any auto-update features available to you
* Make sure you have a backup solution available for your work computers
* Practice good password management: don’t use the same username/password in OJS, OMP, or OCS as you would for any other online account, and don’t use an easy to guess password
* Treat everything that you get online with the knowledge that you received it from someone you don’t know, and act likewise. If a submission appears to be suspicious for any reason (strange email address, suspiciously generic title or abstract, etc.), treat the included files with an additional level of diligence.

## Encryption

> Section Contributed by Kenton Good

Using SSL/TLS encryption to secure your site brings advantages in security, privacy, censorship protection, search engine optimization, and data integrity.

### Security and Privacy Advantages

* Web browsers have started to display warnings about insecure sites for those web sites still served under http. Users seeing such a message when they visit your site can make a site seem illegitimate, or potentially malicious.
* Without encryption, admin and user logins are passed clear text, potentially exposing these credentials to anybody scanning the network.
* Without encryption, you are not protecting what your users are accessing or searching for within your site. Anybody scanning the network can see these queries.

### Search Engine Optimization (SEO) Advantages

Google announced in 2014 that https [would be treated as a ranking signal](https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html) meaning web sites that are served under https will be more findable within the Google index than those served under http.

### Getting a Certificate

A certificate enables a secure connection from the user's Web browser to the server hosting your site.  Installing a certificate for your site can not be done within the OJS, OMP, or OCS software and will require technical expertise or assistance at the server level.  When considering a software host, determining their level of certificate support is an important consideration.

A good start is asking your hosting service provider if they have an existing solution for supporting TLS or SSL certificates -- Your hosting provider may be able to create/issue an TLS or SSL certificate for you. If you do not have shell access to your installation this may be the only way to go about adding SSL/TLS protection for your site.

Purchasing a certificate may be an option available to you as well. Commercial businesses that provide certificates are called [Certificate Authorities](https://en.wikipedia.org/wiki/Certificate_authority) (CA). Wikipedia provides a listing of [CA providers](https://en.wikipedia.org/wiki/Certificate_authority#Providers) by market share. In addition to providing certificates that enable encryption, traditional CA issued certificates offer several advantages including customer vetting to help validate customer identity, and wildcard certificates. Depending on what features you select with your purchase, CA issued certificates can cost $100s per year and must be renewed before expiry.

[Let’s Encrypt](https://letsencrypt.org/) is a popular option for obtaining subscription as well. Let’s Encrypt is a free, automated, and open certificate authority (CA), run for the public’s benefit. It is a service provided by the Internet Security Research Group (ISRG). Certificates are provided for free, with some limitations:

* Only DV (Domain Validation) certificates are offered
* Slightly more technical, if your hosting provider does not already support you will need to generate from shell

### Enabling SSL (requires shell access):

#### Generating CSR (Certificate Signing Request)

Required step to generate a certificate if you are going to be purchasing a certificate from a CA that is not Let’s Encrypt. In terms of how to do this, this varies from one Linux distribution to the next, some common Linux examples can be found here:
* [Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-create-a-ssl-certificate-on-apache-for-ubuntu-14-04)
* [CentOS/RHEL 7](https://www.digitalocean.com/community/tutorials/how-to-secure-apache-with-let-s-encrypt-on-centos-7)
* [Generating LetsEncrypt certificate using Certbot via Shell](https://certbot.eff.org/) (provides customized directions depending on hosting environment Apache, Nginx, etc.)
* [Guide to generating a .CSR in Apache](https://www.alphassl.com/support/create-csr/apache.html)

#### Maintaining your Certificates

When you purchase a certificate from a CA, you will typically purchase a certificate that lasts between 1 to 3 years. Certificates are set to expire and will need to be renewed resulting in a new expense at the time of renewal. Let’s Encrypt certificates expire every 90 days. The Let’s Encrypt software (certbot) can be configured to automatically renew certificates before they expire. Meaning once installed you should have minimal maintenance moving forward. Automation is done with `cron` or `systemd`.

## Managing Spam

There are a number of configuration steps you can take to combat SPAM and other forms of malicious registration activity on your site.

### CAPTCHA/ReCAPTCHA

Configure a CAPTCHA and enable it for user registration, notifications and commenting. We strongly advise using [Google’s ReCAPTCHA](https://www.google.com/recaptcha/intro/). \(Older OJS 2 versions include a PHP captcha, but that has proven to be less secure than ReCaptcha.\)

If you are using OJS older than 2.4.8-3, you will not be able to use the most recent version of ReCAPTCHA \(v2\), and your ReCAPTCHA will not work properly after March 31 2018. **Upgrading is strongly recommended**.

To configure ReCAPTCHA:

1. Register an account and create a “property” for your website here: [https://www.google.com/recaptcha/intro/](https://www.google.com/recaptcha/intro/)
2. Ensure that the relevant lines for enabling captcha are uncommented in `config.inc.php`
3. Copy and paste the public and private keys you receive as part of the property registration into the `[captcha]` section of `config.inc.php`:

```
recaptcha_public_key = 123456abcdef
Recaptcha_private_key = abcdef123456
```

Don’t forget to test this setup by registering a test account and confirming that a\) the ReCAPTCHA appears and b\) the ReCAPTCHA properly validates.

### Enable Account Validation

OJS, OMP, and OCS can be configured so that an email account validation step must be completed for all new user accounts before they can log in and interact with the system. To do this, uncomment and configure the following lines in `config.inc.php`:

```
; If enabled, email addresses must be validated before login is possible.
require_validation = On

; Maximum number of days before an unvalidated account expires and is deleted
validation_timeout = 14
```

The above configuration will require all new registrations to click on a link and validate their account before being able to log in; and will auto-prune any non-validated accounts after 14 days.

### Cleaning lots of users

If you have been the target of a SPAM bot, enabling the above procedures may not be enough: you may already have a large number of SPAM accounts in your system. The only way to remove users is to merge the spam accounts into an existing account using the Merge Users tool. \(This effectively deletes the problem users. Any submissions, editorial history, etc. from the problem user(s) is merged into the other user account.\)

This tool can be used via the UI, but is slower \(and only OJS/OCS 2 currently have an option to merge more than one user at a time in the UI\). A more effective method is to use the command-line tool:

`$ php tools/mergeUsers.php myUsername spamUser`

As of OJS/OMP 3.2, multiple users can be merged in a single command:

`$ php tools/mergeUsers.php myUsername spamUser1 spamUser2 spamUser3 [...]`

… where `myUsername` is the user that will be merged into, and `spamUser` is the user to be deleted. Prior to OJS/OMP 3.2, this tool only works on one merge at a time, but can be scripted. An example php script would be:

```
<?php
$names = file('/tmp/names.txt', FILE_SKIP_EMPTY_LINES);
foreach ($names as $member_name => $member) {
        echo exec ("php /ojswebroot/tools/mergeUsers.php admin-user " .escapeshellcmd($member));
}
?>
```

The script expects all spam accounts to be identified by username and listed in a `names.txt` file, one name per line, like so:

```
spamuserOne
spamUserTwo
spamUserThree
…
```

The `names.txt` file has to be stored on the server and the location referenced by the script \(eg. “/tmp/names.txt”\). The script should also specify the location of the mergeUsers.php script \(eg. “/ojswebroot/tools/mergeUsers.php”\), and also the user into which all of these accounts should be merged \(eg. “admin-user” - this must be an existing account\). Update those parameters to suit your environment. **Don’t store this script, or the `names.txt` file, in a web-accessible location!**

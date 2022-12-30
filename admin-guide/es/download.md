---
title: Download - Admin Guide - PKP Developer Docs
description: How to download Open Journal Systems (OJS), Open Monograph Press (OPS) or Open Preprint Systems (OPS).
---

# Descarga

You can download the latest stable release package (`.tar.gz`) — and all of our releases — from the PKP website. Download [OJS](https://pkp.sfu.ca/software/ojs/download), [OMP](https://pkp.sfu.ca/software/omp/download), or [OPS](https://pkp.sfu.ca/software/ops/download).

## Upload Files

> The steps below describe how to use the command line to upload the files to a Linux web server, but you can also use git or FTP. You can learn more about [how to use git](/dev/documentation/en/getting-started) in our technical documentation for contributors. 
> 
> {:.notice}

Upload the release package to your web server using `scp`.

```bash
# <file> The path to the release package on your local system
# <user> Your username on the server
# <hostname> The server's hostname, eg - myjournal.com

scp <file> <user>@<hostname>:~
```

Or login to your server and download the file directly from PKP.

```bash
# <url> The URL to the release package, eg - https://pkp.sfu.ca/ojs/download/ojs-1.2.3-4.tar.gz
# <user> Your username on the server
# <hostname> The server's hostname, eg - myjournal.com

ssh <user>@<hostname>
wget <url>
```

Login to your server and unpack the release package into the root web directory.

```bash
# <file> The path to the release package on your server
# <web-root> The path to the web root on your server, eg - www/public_html

tar -xvf <file> --strip-components=1 -C <web-root>
```

Change the file permissions of the following files and directories to allow them to be written by the web server.

```bash
<web-root>/config.inc.php
<web-root>/public
<web-root>/cache
<web-root>/plugins
```

---

Next, set database credentials and other [configuration settings](./configure).
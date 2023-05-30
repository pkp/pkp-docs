---
book: dev-documentation
version: 3.4
title: Config - Technical Documentation - OJS|OMP|OPS
---

# Config

Use `PKP\config\Config` to read from an instance's configuration file (`config.inc.php`). The configuration file is organized into sections. For example, the `files_dir` is defined in the `files` section like the following.

```
;;;;;;;;;;;;;;;;;
; File Settings ;
;;;;;;;;;;;;;;;;;

[files]

; Complete path to directory to store uploaded files
; (This directory should not be directly web-accessible)
; Windows users should use forward slashes
files_dir = /home/site/files
```

Get the `files_dir` value from the `files` section.

```php
use PKP\config\Config;

$dir = Config::getVar('files', 'files_dir');
```

A setting may not be defined in the config file. Pass a third argument to use it as a default when the setting is undefined.

```php
use PKP\config\Config;

$encryption = Config::getVar('security', 'encryption', 'sha1');
```

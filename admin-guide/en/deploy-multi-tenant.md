---
title: Multi-tenancy - Advanced Configuration - Admin Guide - PKP Developer Docs
description: Recommendations for running many separate journals, presses or preprint servers in one install with OJS, OMP or OPS.
book: admin-guide
version: 3.4
---

# Multi-tenancy

When OJS, OMP or OPS is used to run many independent journals, presses or preprint servers, we call it a "multi-tentant" install. These instances often need to provide unique domains to each tenant.

## Domain Names

The `base_url` setting in `config.inc.php` can support multiple domains. Use the following syntax for multiple base URLs.

```
base_url[<path>] = <url>
```

For example, if you had two journals with path names `lorem` and `ipsum`, you can route them to different domains like this.

```
# Homepage of the lorem journal
base_url[lorem] = https://journal-a.com

# Homepage of the ipsum journal
base_url[ipsum] = https://journal-b.com
```

Use the path `index` to route requests to the site index.

```
base_url[index] = https://example.com
```

You will also need to rewrite URLs using `mod_rewrite` or a similar mechanism, in order to route requests to the application to the correct domain name. The correct rewrite rules vary depending on each setup. You may wish to review [past discussions](https://forum.pkp.sfu.ca/t/each-journal-with-its-own-domain-name/5720).

## Privacy Statement

By default, every journal, press or preprint server can configure their own privacy statement. As the controlling authority in a multi-tenant service, you may wish to enforce a privacy statement that meets the requirements of your legal jurisdiction.

Set the following to `On` in `config.inc.php`.

```
sitewide_privacy_statement = On
```

Then add a privacy statement by logging in as an administrator and going to **Administration** > **Site Settings** > **Site Setup** > **Information**. This form is only available when you have more than one journal, press or preprint server.

---

Learn how to prevent unwanted emails, deposits and other tasks from being run in a [sandboxed test installation](./deploy-sandbox).

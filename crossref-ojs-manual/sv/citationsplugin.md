---
book: crossref-ojs-manual
version: 3.2
---

# OJS Scopus/Crossref Plugin

This [third-party plugin](https://github.com/RBoelter/citations) allows journals to display citations and citation counts (using article DOIs) from Scopus and/or Crossref. The option to display citation for Google Scholar and Europe Pubmed is also supported.

## Installation och aktivering av plugin

If the plugin is compatible with your version of OJS, you can install this plugin via the plugin gallery.

> **_NOTE:_** You must [contact Crossref](https://www.crossref.org/contact) to ask for the Cited-by service to be enabled for your prefix(es), if you want to use Crossref within this Plugin.

1. Enable the plugin in the Installed Plugins tab (Website > Plugins > Installed Plugins)
2. Choose which Providers (Crossref, Scopus, or both) you'll use for the plugin using the dropdown menu
3. If you have not already, request for API for Scopus and/or Crossref
4. Enter the API Key for Scopus and API username and password for Crossref
5. Configure the information you want to display on your article landing page along with the Block height if desired.

![OJS Scopus/Crossref Plugin configuration page.](./assets/citationplugin1.png)

Once enabled and configured, the plugin will display the count and list of the citation on the sidebar of the article landing page.

![OJS Scopus/Crossref Plugin display on article landing page.](./assets/citationplugin2.png)

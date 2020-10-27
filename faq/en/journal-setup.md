# Journal Setup and Management

## How can I create a unique look for my journal, press, or server website?

OJS 3 includes a number of free themes that you can use for your journal. You can view them on [PKP’s demo site](https://demo.publicknowledgeproject.org/ojs3/demo/)

You can use one of the free themes as a basis for your journal and customize it with a journal stylesheet that you can upload under Settings > Website > Appearance > Advanced. This will allow you to change the theme colours, fonts, etc. with options defined via custom CSS rules.

PKP has a guide to [Designing Your Journal](https://docs.pkp.sfu.ca/designing-your-journal/en/), which offers guidance on how to customize themes, create CSS files, and select images and fonts to suit your audience and content.

You can also develop your own OJS 3 theme, either from scratch or using one of the existing themes as a starting point. Please see [PKP’s Theming Guide](https://docs.pkp.sfu.ca/pkp-theming-guide/en/) for additional information.

## How do I add a sidebar block?

OJS, OMP, and OPS come with a number of built in blocks you can add to your sidebar under Website Settings > Appearance. If you want to add a custom block to your sidebar, you can use the Custom Blocks plugin. [Learn how to use the Custom Blocks plugin here](https://docs.pkp.sfu.ca/learning-ojs/en/settings-website#custom-block-plugin).

## I uploaded a new image on my site. Why does the old image still appear?

Try clearing the cache on your browser and then reload the page.  The new image should appear.  If this does not solve the problem, talk to your site administrator. They can check that your file permissions are set correctly or try increasing the upload_max_filesize, post_max_size, memory limit, and/or max_execution on your server.

## How can I upload public files to our journal site?

You can use the Publisher Library feature to upload and share files with your users, such as a .doc template for authors. You can optionally make them public and link to them via a public url. Please see the [Learning OJS 3 user guide](https://docs.pkp.sfu.ca/learning-ojs/en/settings-workflow#publisher-library) for further instructions.

## Why are search results not complete on my site?

Try re-indexing your site.

1. From the command line, navigate to your OJS/OMP/OPS root directory
2. Run the script: `php tools/rebuildSearchIndex.php`
3. Log into the dashboard as an Administrator
4. Go to Administration
5. Click *Clear Data Caches*
6. Now try searching again.

## How can I create a site-wide search on a multi-journal installation?

Every multi-journal site has a URL for a site-wide search at [yourdomain]/index/search. To make the search available to your readers, create a custom menu item for it under Settings > Website > Setup > Navigation.

## How can I use a continuous publishing model in OJS, where articles are published as soon as they are ready?

It is possible to do continuous publishing in OJS, where articles are published as soon as they are ready. However, you must assign an article to an issue before it can be published. You can publish articles as they are ready by doing the following:

1. Create and publish an issue called “New Research” or whatever title is appropriate for your journal.
2. Add articles to the issue as they become available
3. When the issue is full, remove the title and assign the issue an issue and volume number
4. Create a new issue called “New Research” and add new articles to it.

See [Learning OJS 3 - Production and Publication](https://docs.pkp.sfu.ca/learning-ojs/en/production-publication#continuous-publishing) for more information.

## How can I start using DOIs?

OJS, OMP, and OPS have a DOI Plugin used to generate DOIs as well as plugins for Crossref, Medra, and Datacite that create and export metadata to each of these agencies.. You will need to obtain membership from one of these agencies to use DOIs. See the [DOI Plugin Guide](https://docs.pkp.sfu.ca/doi-plugin/en/) for more information.

## Why is my site not being indexed by Google Scholar?

OJS is optimized to allow your site content to be indexed by Google Scholar. This is accomplished by providing structured metadata in the backend of every page on your site that can be read by web crawlers and by allowing you to add metatags to your site when you set it up to help your journal be discovered by search engines. However, there are some things that can interfere with Google Scholar indexing. See [PKP’s guide to Google Scholar Indexing](https://docs.pkp.sfu.ca/getting-found-staying-found/en/getting-found-appendix-2-google-scholar).

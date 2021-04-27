# Getting Started

## How can I use OJS for my journal?

All PKP software is released under the open source [GPL v3 license](http://www.gnu.org/licenses/gpl-3.0.html), and you are free to download, use and modify it at no charge so long as you obey the rules of the license.

You can download OJS and view the server requirements on [our website](https://pkp.sfu.ca/ojs/ojs_download/).

[User guides and training videos](https://docs.pkp.sfu.ca) are available that will guide you through the installation, configuration, and operation of the software.

## How can I use OMP for my press?

All PKP software is released under the open source [GPL v3 license](http://www.gnu.org/licenses/gpl-3.0.html), and you are free to download, use and modify it at no charge so long as you obey the rules of the license.

You can download OMP and view the server requirements on [our website](https://pkp.sfu.ca/omp/omp_download/).

[Documentation](https://docs.pkp.sfu.ca) is available that will guide you through the installation, configuration, and operation of the software.

## What technical infrastructure and expertise do I need?

OJS, OMP, and OPS all **require a web server and technical support** to host the software. If your organization is unable to provide these services, it is recommended that you use a professional hosting service provider.  OJS, OMP, and OPS must be hosted on a web server that meets the minimal requirements detailed on [our website](https://pkp.sfu.ca/ojs/ojs_download/). See also our [checklist](https://docs.pkp.sfu.ca/starting-a-journal/) for starting a new journal.

Choosing to host software yourself entails a major obligation to maintain the service in a secure and accessible manner. The server and software application need to be maintained by a competent systems administrator who can do the following:

* Perform upgrades of the application.
* Perform upgrades of other software running on the server (e.g., PHP).
* Run and test frequent backups.
* [Configure and troubleshoot email](https://docs.pkp.sfu.ca/admin-guide/en/email) sent and received by the application.
* [Manage character encoding issues](https://docs.pkp.sfu.ca/admin-guide/en/troubleshooting#character-encoding) (particularly important when publishing multilingual content).
* Manage server security, including: correctly setting up [file permissions](https://docs.pkp.sfu.ca/admin-guide/en/troubleshooting#permissions-file-access-etc); configuring the files directory to be non-web-accessible; and managing firewalls, spam account problems, and SSL certificates.
* Troubleshoot technical issues using [documentation](https://docs.pkp.sfu.ca/index.html) and the [PKP Community Forum](https://forum.pkp.sfu.ca/).

User guides (including the [PKP Administrator’s Guide](https://docs.pkp.sfu.ca/admin-guide/en/) and training videos are available on the [PKP Docs Hub](https://docs.pkp.sfu.ca/) to guide you through the installation, configuration, and operation of the software. We also provide a free, online [support forum](https://forum.pkp.sfu.ca/) where you can search for answers and post any unanswered questions that may arise.

## Where can I find free or affordable hosting?

PKP offers a fee-based hosting service for publishers that lack the technical infrastructure and/or expertise to host our software. Our services include: installation and hosting; daily backups of your data; security patches and upgrades; and priority answering of your support questions. All revenue received from these services goes back into our project. By hosting with PKP Publishing Services you make a direct contribution to our software development, research, education, and community support. More information and prices are available on the [PKP Publishing Services website](https://pkpservices.sfu.ca/).

You can also research online or post on the [PKP Community Forum](https://forum.pkp.sfu.ca/) to find other hosting providers. Many higher education institutions and academic libraries offer journal hosting services. Some library consortia offer these services as well. If you are an open access journal located in Canada, free OJS hosting is available from the [University of Alberta Library](https://www.library.ualberta.ca/publishing/).

## I want to start a new journal using OJS. Where do I start?

Starting an open access journal follows the same key steps as traditional journal formats. There are a number of factors you need to consider including funding models and copyright. We offer several PKP School courses related to this topic. To help determine funding models, see [Becoming an Editor](https://pkpschool.sfu.ca/courses/becoming-an-editor/) Module 8, Units 11-13. For help on copyright licensing, we recommend [Becoming an Editor](https://pkpschool.sfu.ca/courses/becoming-an-editor/) Module 11 and the Canadian Association of Learned Journals’ (CALJ) [copyright page](https://www.calj-acrs.ca/copyright). PKP also has a [checklist](https://docs.pkp.sfu.ca/starting-a-journal/) for setting up your new OJS journal.

## Can I use a single installation to manage a large number of journals?

Whether it is best to host your journals on one installation or several will depend on your situation. We typically host journals on separate installations as there are a few places where separate journals on the same installation can impact each other, these include:

1. User accounts. While OJS allows users to have arbitrary roles in different journals (i.e. Journal Manager in one and Reader in another), the master list of user accounts is shared between installations. When the Journal Manager wants to enroll a user as a Copyeditor, for example, they'll be able to pick through the entire user list.
2. Code modifications. While all journal settings (such as a journal stylesheet) can be set independently for different journals, some changes may require modifications to the source code. These changes will affect all journals. If you anticipate this sort of change, you'll need to host your journals separately.
3. Search features. While the search form will default to searching within the particular journal you are browsing, it is possible to search across all journals in a particular installation. Likewise, browsing by title and by the author can span journals. If your journals are independently managed, they may not like this kind of association.

If you maintain a clean environment, e.g. all installations of OJS are kept current and things like file permissions are standardized, it is possible to perform maintenance tasks like upgrades on large numbers of installations painlessly (although obviously not as quickly as if you maintain only one installation). It's largely a political decision -- if your journals need complete autonomy, it's probably best to install separate copies of OJS. If they tend to fall into logical groups, perhaps a few installations with several journals apiece would be best.

## Where can I find help and support?

Finding help is easy. PKP offers the following free supports to help software users:

* [PKP Docs Hub](https://docs.pkp.sfu.ca/): User guides, developer documentation and publishing tips for all of our software. Also includes links to community developed videos.
* [PKP Community Forum](https://forum.pkp.sfu.ca/): An online discussion board where you can ask questions, answer questions, and share ideas.
* [PKP School](https://pkpschool.sfu.ca/): A collection of online, open, and self-paced courses designed by PKP experts in English and Spanish. Includes video tutorials on Setting up Your Journal; the Editorial Workflow in OJS 3; and Becoming an Editor.

There is also a “Help” link on the top right corner of every page in OJS, OMP, and OPS where you can find information about the current page and its functions.

All of our documentation and tutorials are licensed under the [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/). Users are free to share and adapt documentation developed for our software.

- - -
title: FAQ about Features and Uses of Open Journal Systems (OJS), Open Monograph Press (OMP), and Open Preprint Systems (OPS)
- - -

# Software Features

## How do I know if OJS / OMP / OPS is right for us?

Choosing the right software depends on several factors. Start by considering the following three questions:

1. **What features do you need?** Learn more about our software on the [PKP website](https://pkp.sfu.ca/) and [PKP Docs Hub](https://docs.pkp.sfu.ca/).

2. **What features are missing?** PKP software is designed to be flexible and to accommodate many different publishing workflows and practices. Development is guided by our user community. If you don’t see the features you want, let us know. Other software users may have already added the features you need or we may be able to address your needs in a future software release. You may also customize the code or write a new plugin to get the features you need. Ask us questions and meet others using our software on the [PKP Community Forum](https://forum.pkp.sfu.ca/).

3. **What technical resources are available to you?** PKP software must be hosted on a web server and maintained by a systems administrator. Before you download software, evaluate your technical expertise and resources and determine how you want to host your journal: on your own server, using an external service provider, or with [PKP Publishing Services](https://pkpservices.sfu.ca/).

## Can I try your software?

Yes. You can find demonstration sites and “test drive” installations of our software on the [PKP website](https://pkp.sfu.ca/). To find a demo, go to the software you wish to try and select “Demo”. Our demos are basic installations only. We recommend you also look at other journals, presses, and preprint servers using our software.

## Where can I find examples of OJS journals, OMP presses, and OPS servers?

There are many impressive journals and presses using our software around the world. Here are a few places you can find examples:

* [PKP Community Forum](https://forum.pkp.sfu.ca/): Includes a [Community Showcase](https://forum.pkp.sfu.ca/c/community-showcase/7) category where users can post their sites, plugins, and other achievements. You can also find examples by browsing and searching the entire forum.
* [Directory of Open Access Journals (DOAJ)](https://doaj.org/): An independent index that contains vetted peer-reviewed open access journals. Many journals indexed in DOAJ use OJS.
* [Library Publishing Directory](https://librarypublishing.org/lp-directory/): This public list of library publishers, published by the Library Publishing Coalition, includes mention of the publishing platforms used by each member.
* [Twitter](https://twitter.com/pkp): In addition to sharing community news and events on our own page, many people tag and tweet about @pkp and their #OJS #OpenJournalSystems journals.

## Can I use OJS for the submission workflow only?

Yes, you can use all of the backend submission workflow management tools of OJS and publish your content on a different website.  However, it will mean you miss out on some of OJS' features, such as easy discoverability of your metadata by Google Scholar and other indexing services and integrations with external services such as CrossRef, ORCID, and reference management tools.

More information on [using OJS for the submission workflow only](https://docs.pkp.sfu.ca/journal-policies-workflows/en/alternative-uses#using-ojs-for-submission-workflow-only) is available in our Journal Policies and Workflows guide.

## Is OJS only for open access journals?

While OJS was ultimately developed to support open access publishing, it can certainly be used for subscription-based journals or journals with mixed content, and it is used by many journals that charge subscription fees. OJS has modules for managing both individual and institutional subscriptions, accepting Paypal and manual payments, and charging author payment charges (APCs).

You can review how the subscription and payment features work in [our documentation](https://docs.pkp.sfu.ca/learning-ojs/en/subscriptions).

You can also explore them on our [OJS testdrive site](https://pkp.sfu.ca/ojs/ojs_demo/).

## Can I use OJS to publish newsletters and magazines?

OJS was developed for peer-reviewed journal publishing, however, it can also be used for newsletter, magazine, and bulletins. The [Theology Cataloging Bulletin](https://serials.atla.com/tcb/index) is one example. OJS is flexible and allows you to modify the text, display, and structure of your information using the web administrative interface, CSS, and templates. Additionally, OJS provides an [expedited submission](https://docs.pkp.sfu.ca/learning-ojs/en/tools#quick-submit-plugin) process that allows editors to skip the rounds of review and editing to quickly add articles to the site.

## Can I use OJS to publish conference proceedings? What happened to OCS?

In 2018, [PKP froze development of OCS](https://pkp.sfu.ca/2018/05/04/ocs-update/), our original conference management software, in order to focus our development resources on OJS, OMP, and OPS. As an alternative to OCS, OJS can be used to accept conference submissions, manage the peer review process, and publish conference papers. If you use OJS, a separate tool is required to manage conference registration and scheduling. You may also want to explore other free conference management systems, e.g., [Indico](https://getindico.io/). Here are two examples of OJS sites that publish conference proceedings:
* [CBU International Conference Proceedings](https://ojs.journals.cz/index.php/CBUIC/index)
* [TIB's Business Information Systems conference](https://www.tib-op.org/ojs/index.php/bis/issue/view/2)

## Can I use OJS to publish books?

OJS can be used to publish books but we recommend that you use OMP instead. OMP is similar to OJS but is specially designed for managing and providing access to monographs.

## Does OJS support open peer review?

OJS supports three types of review: anonymous reviewer/anonymous author (previously known as "double-blind"), anonymous reviewer/disclosed author (previously known as "blind"), and open. For more information read [Understanding Anonymous Review](/learning-ojs/en/editorial-workflow#understanding-anonymous-review) in “Learning OJS 3”.

## Can I use OJS in conjunction with Crossref?

Yes. You can use the Crossref Export plugin to automatically deposit DOIs and generate Crossref deposit XML. Please see the [Crossref Manual](https://docs.pkp.sfu.ca/crossref-ojs-manual/en/) for details on how to configure this plugin.

## How can I add a Print on Demand option to my issues or articles?

OJS does not currently have any built-in functionality or plugins to connect with Print on Demand services. However, some journals set up Print on Demand (POD) with the service of their choice and then add a link in the issue description. Here is an [example of a journal](https://babylonia.online/index.php/babylonia/issue/view/14) which has added some linked text to the issue description.

Alternatively, depending on the Print on Demand service you choose, they may provide a code snippet which can be used to embed a Print on Demand button onto your OJS site. There are two options for adding this code to the site so that the button appears:

* Add the code snippet in the Custom Header Plugin. Note that the button will then appear on every page on the site. The Plugin is often used for things like adding a Twitter feed to a custom block, which you would want to appear on every page of your site. This option will not be ideal if you want the button to only appear on the issue page.
* Develop a custom theme plugin with the “Print on Demand” button appearing on only the issue page. You can learn more about custom theme development in our [Theming guide](https://docs.pkp.sfu.ca/pkp-theming-guide/).

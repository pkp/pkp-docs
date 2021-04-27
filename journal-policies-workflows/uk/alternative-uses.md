# Alternative uses of OJS

OJS can be used for the entire journal management process, from submissions through to final publication of issues. However, some journals choose to use OJS for only one stage of publishing - for example, to manage the submission workflow when publishing elsewhere on an external site, or to publish work on the OJS site when the workflow is managed outside of OJS. OJS can also be used to publish conference proceedings, and some journals choose to publish article-by-article, rather than collecting articles into an issue before publishing. We have outlined each of these use cases below.

## Using OJS for submission workflow only

Your journal may choose to use OJS to manage the submission workflow and coordinate communications between editors and authors as work moves through submission, peer review, copyediting, and other aspects of the editorial and publishing workflow. If you are only using OJS to manage your submission workflow and not publish your content, you can do the following:

1. In the **Settings** > **Distribution** > **Access** setting select “OJS will not be used to publish the journal’s contents online.”
2. In the **Settings** > **Distribution** > **Access** disable OAI (Open Archives Initiative) to prevent indexing services from harvesting the journal metadata. 

See [Learning OJS > Distribution Settings > Access](https://docs.pkp.sfu.ca/learning-ojs/en/settings-distribution#access) for more information and instructions for changing these settings.

Once these settings are enabled, you can proceed with the publication workflow.

It is recommended that even if you are not publishing your articles and issues on your OJS site, that you still “publish” them in OJS and complete the editorial workflow for each submission. This will record in OJS which issue an article was published in and create an internal indicator that all the articles in a single issue were published together, which is helpful for tracking and record-keeping. It will clear the submissions in the “active” queue and move them to the “archive,” which will prevent the “active” queue from becoming unmanageable as new submissions are added for the next issue.

As well, if you are using a tool like the [ORCID Profile plugin](https://docs.pkp.sfu.ca/orcid/en/) or the [PKP PN](https://docs.pkp.sfu.ca/pkp-pn/), it will send the records to their respective external sources, as the sending action is triggered when an issue is published.

## Using OJS for publishing only

Your journal may choose to use OJS for the final journal publication while managing the editorial workflow outside of OJS.

You can bypass the workflow in OJS using the QuickSubmit plugin ([Learning OJS > Tools > Quick Submit Plugin](https://docs.pkp.sfu.ca/learning-ojs/en/tools#quick-submit-plugin)). This will allow you to upload publication-ready files straight through to an issue and hit “publish,” without sending each submission through the review, editing, and publication workflow stages.

You should also disable submissions on your OJS site to prevent authors from inadvertently submitting their work there. To disable new submissions to the journal, you will need to be in the Journal Manager role. You can do it in two ways:

- Disable submission per section [as described in the Learning OJS 3 guide](https://docs.pkp.sfu.ca/learning-ojs/en/journal-setup#create-section)
- Remove the “Make a Submission Block” from the user interface in [Settings > Website > Appearance > Setup > Sidebar](https://docs.pkp.sfu.ca/learning-ojs/en/settings-website#setup) and/or disable the “Make a Submission Block” in [Settings > Website > Plugins](https://docs.pkp.sfu.ca/learning-ojs/en/settings-website#installed-plugins)

## Using OJS to publish conference proceedings

PKP froze development of Open Conference Systems (OCS), our original conference management software, in 2018, in order to focus our development resources on OJS, OMP, and OPS. OJS can be used to publish conference proceedings, although you will need to use a separate site to manage conference registration and scheduling. Please see our [FAQ question](https://docs.pkp.sfu.ca/faq/en/software-features#can-i-use-ojs-to-publish-conference-proceedings-what-happened-to-ocs) on this topic for more details.

Some considerations for publishing conference proceedings include:

- Will you use OJS for peer review and editing of the conference proceedings, or just the final publication? See “Using OJS for publishing only” if you don’t plan to use the editorial workflow.
- Will you publish video or audio recordings of the sessions, or just conference papers and / or PowerPoints? See our [OJS documentation on publishing multimedia files](https://docs.pkp.sfu.ca/learning-ojs/en/production-publication#multimedia-files) for information about publishing audio and video.
- You may need to modify labels in the journal to indicate that the site is for a “conference” rather than a “journal.” You can use the [Custom Locale Plugin](https://docs.pkp.sfu.ca/translating-guide/en/customize-locale) to make customizations to the text displayed in the journal site.

## Continuous publishing

OJS is currently designed for a traditional publishing model where articles are published in issues. However, continuous publishing is a popular alternative way to publish scholarly research, in which articles are published as they are ready. You can use a continuous publishing model within OJS.

For information about setting up your journal for continuous publishing, see [Learning OJS > Production and Publication > Continuous Publishing](https://docs.pkp.sfu.ca/learning-ojs/en/production-publication#continuous-publishing)

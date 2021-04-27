# Journal information

## Journal title

The title of your journal will help you stand out and be discernible from other journals in your field. When brainstorming titles, it’s important to check existing journal titles to ensure that the title you choose will not be easily confused with other journals. If you have institutional access to [UlrichsWeb Global Serials Directory](http://ulrichsweb.serialssolutions.com/login), you can use this tool to search journal title ideas and see a complete list of existing titles. You can also search the [ISSN Portal](https://portal.issn.org/) and Google for existing journal titles to ensure that yours is unique.

### When a journal title changes

There are several considerations when it comes to changing a journal title. In general, you will need to consider the following:

* How will you ensure that content under the previous title and content published under the new title will continue to be discoverable and linked to the correct metadata?
* How will you ensure that the previous and new titles are clearly connected, to avoid confusing your users?

Your journal will need to apply for a new ISSN each time the title changes. This helps with the general clarity and discoverability of journal titles, since all previously published articles will be connected to the previous ISSN under the old title. Your journal will also need to inform any indexing services of the title change. You should also contact your librarian who can help ensure that the title change is indicated in library records.

### Options for managing a journal title change

**Option one**: Create a separate journal for the new title on the same OJS installation as the previous journal

The advantage of this option is that the correct metadata will stay with the articles published under each title. In other words, an article published under the previous title will be clearly linked to that title, and the same will be the case for articles published under the new title. You can include clear links on both journal sites to indicate that the titles are connected.

The downside to this approach is that users are unlikely to discover the legacy content via the "main" journal instance since it's technically a separate journal in the install. However, if both journals are hosted on the same OJS site, it is possible for users to search the contents of both journals. This means that users will be able to use the multisite search to search across content.

**Option two**: Change the title on the existing journal and continue publishing

The advantage of this option is that users will be able to search and locate all published content on one journal site. This may also be the best or only option for your journal if you do not have access to a multi-site OJS installation.

The downside to this approach is that content published under the previous title will have incorrect title metadata after the title changes, since it will now be associated with the new journal title, even though it was published under the old title. This can have implications for citations and OAI harvesting, since the metadata will now be incorrect. Google Scholar indexing may also be disrupted if the metadata on the article PDF does not match the metadata on the article page.

For a more fulsome discussion of journal title changes, please see this [GitHub Issue](https://github.com/pkp/pkp-lib/issues/2505) on OJS compliance with [NISO Presentation and Identification of E-Journals (PIE-J)](http://www.niso.org/workrooms/piej).

## Journal abbreviation

Some journals will employ a journal abbreviation, and there is an optional field for this, along with the journal title, in the journal settings in OJS. While journal abbreviations were used more widely in the days of print publishing, there are a few instances where these continue to appear in digital publishing. For example, journal abbreviations are used in some citation formats, such as the Council of Science Editors (CSE). Your journal abbreviation does not need to be unique; ISSN provides [best practices for choosing journal abbreviations](https://www.issn.org/services/online-services/access-to-the-ltwa/), along with a List of Title Word Abbreviations.

### When a journal abbreviation changes

Your journal abbreviation should only change if the journal title changes. To create the new journal abbreviation for the new journal title, follow the abbreviation standards mentioned above.

## Journal initials

The journal initials are the initials of the journal title. For example, the Journal of Software Documentation may use the initials JSD. This is a required field because it is used by some metadata export formats, such as CrossRef, which is used for DOI assignment. Journal initials may appear in the default pattern for generating DOIs, and in the journal URL. The initials do not need to be unique to your journal, but they should align with the journal title.

### When journal initials change

It is generally safe to change your journal’s initials. However, if you assign Digital Object Identifiers to any items in the journal and use the journal initials in formulating DOIs, changing the initials may be a concern for you. Any DOIs generated by the system moving forward will have the new initials. Also, if you ever select the “reassign DOIs” button, that will change all of the old DOIs to the new initials, therefore making the older DOIs incorrect.

## Registering for an ISSN

Your journal should apply for an **ISSN** (International Standard Serial Number), which is an eight-digit number used to identify a journal. ISSNs are managed by a world wide network of National Centres coordinated by an International Centre based in Paris, backed by Unesco and the French Government. You can request an ISSN by visiting the [ISSN web site](http://www.issn.org/) and locating your national centre’s ISSN portal. This can be done at any point in operating the journal.

OJS journals will typically have an online ISSN, but some may also publish a print version, which requires a different print ISSN.

Note that if your journal title changes, even slightly, you will need to apply for a new ISSN.

## Journal languages

OJS is multilingual, which means that the journal site interface, published articles and issues, and back end dashboard can be used in one or more languages. OJS has been translated into over 30 languages and you can easily install new languages and enable languages for different parts of your site.

It is recommended that you decide which languages you are going to use and how before you start publishing, and set up your journal accordingly. In deciding this, you can consider the following:

* What languages are the authors who will submit to your journal fluent or conversational in?
* What languages are your intended readers fluent or conversational in?
* What languages are your editorial board members and reviewers fluent or conversational in?
* Is the content you are publishing related to particular languages or cultures?
* Do you want to increase participation in your journal from people who speak a particular language?

See [Website Settings - Languages](https://docs.pkp.sfu.ca/learning-ojs/en/settings-website#languages) in this guide and for information on how to set up and configure languages.

You can check whether OJS is available in a particular language on [PKP’s website](https://pkp.sfu.ca/contributors/translation/#ojs-languages). To translate OJS into a new language, see [PKP’s Translating Guide](https://docs.pkp.sfu.ca/translating-guide/en/).

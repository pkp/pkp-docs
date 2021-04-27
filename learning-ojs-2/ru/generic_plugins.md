# Generic Plugins

Generic Plugins cover a wide range of functionality. The more commonly-used ones are the Static Pages, Web Feeds, Custom Block Manager and Google Analytics plugins.

![Generic Plugins](images/chapter5/plugin_generic.png)

### Static Pages Plugin

This plugin allows you to create new OJS pages for additional content \(e.g., an Advertising page\).

1. Enable the plugin by clicking Enable. An Edit/Add Content link will appear.
2. Add a new page by clicking Add New Page. Fill in the form that opens with the content you want on the page. The Path will be used as part of the page URL and the Title will appear as the page title. After saving the form, you can view the page at the URL indicated.
3. To edit a page you created with the plugin, go to the list of Generic Plugins and click Edit/Add Content below the Static Pages Plugin. A list of static pages you created will appear. Click Edit next to the page you want to edit.

### Web Feed Plugin

Activating this plugin produces RSS/Atom web syndication feeds for the current issue and displays RSS/Atom links in the sidebar. When a user selects one of the RSS/Atom links from the sidebar, it will produce a list of current issues and the option of adding it to their feed reader or live bookmarks.  
To activate the current issue Web Feeds, select the Enable link and select Settings. This page allows you to determine where the feeds will display and how many items will display \(e.g., the entire current issue, or just the first few articles\).

### External Feeds Plugin

This plugin will allow you to display the content of external RSS feeds from other sources in your journal. For example, you can display the latest posts from the PKP News blog or the Open Access News blog in your sidebar.

### SEHL Plugin

This plugin implements Search Engine HighLighting \(SEHL\) so that when a search engine locates an HTML article, the sought-after keywords are highlighted in the article text. This can be enabled by selecting the Enable link.

### Thesis Abstracts Feed Plugin

This plugin will produce an RSS/Atom feed \(see the Web Feed Plugin, above, for an explanation on RSS feeds\) for Thesis Abstracts. Only journals publishing Thesis Abstracts \(see below\) should consider enabling this feature.

### Thesis Abstracts Plugin

This plugin allows your journal to solicit and publish thesis abstracts. You can see this in action at the Canadian Journal of Communication by selecting the Thesis Abstracts link in their navigation bar. From here, you can view the thesis abstracts or submit a new one. Upon submission, the thesis senior supervisor is automatically notified by email and asked to confirm the accuracy of the submitted information by sending an email response to the Thesis Abstracts Contact. Once the confirmation is received, the Thesis Abstracts Contact can activate the thesis abstract submission by editing its corresponding record and changing the Status from 'Inactive' to 'Active'. The thesis abstract will then become available to journal readers.

Select the Enable link to activate this plugin for your journal. Once you have enabled the plugin, you can edit its Settings.

### Rounded Corners Plugin

Rounded Corners: This Plugin puts a background on each sidebar block and rounds its corners. Changes can be made to the colours used by editing the CSS stylesheet found in the plugin. Select Enable to use this plugin.

### Custom Block Manager Plugin

This plugin allows you to add new items to the sidebar. You might want to use this to emphasize your editorial board members or direct potential authors to your online submissions. The blocks you create will be added to every page on your site.

1. Enable the plugin by clicking Enable. A Settings link will appear.
2. Click Settings
3. Enter the name of the custom block you want to create under Block Name and click Add Block. The title of the block will not appear on the site but is used internally.
4. To add content to your block go to Journal Management -&gt; System Plugins -&gt; Block Plugins. Find your block and click Edit.
5. You can place your custom block exactly where you want it in the sidebar by going to Journal Management -&gt; Setup -&gt; Step 5.6 \(Journal Layout\). Use the arrow buttons to move the block to a sidebar and move it up or down.

### Announcement Feed Plugin

This plugin produces RSS/Atom web syndication feeds for journal announcements, similar to the Web Feeds plugin above. Only journals that have activated Announcements would consider using this plugin. To activate it, select the Enable link.

### Google Analytics Plugin

This plugin integrates OJS with Google Analytics, Google's web site traffic analysis application. It provides an excellent way to track the web traffic to your journal. It requires that you have already setup a Google Analytics account. To activate this plugin, select Enable. This will create a Settings link, which you can click to configure the plugin. Fill in the account number provided when you set up your Google Analytics account. Remember to clik Save. In a few hours, Google will start tracking your web traffic and generating a report.

### SWORD Plugin

The SWORD plugin allows authors and/or journals to deposit articles to online repositories such as DSpace and Fedora via the SWORD protocol.

You can configure the plugin so that authors are able to specify a deposit point for their submitted article \(they will be emailed with instructions when their article has been accepted for publication\). You can also specify one or more deposit points, and configure how content is deposited there.

### phpMyVisites

Integrates OJS with phpMyVisites, a free and open source web site traffic analysis application. Requires that phpMyVisites is already installed on the server. \(phpMyVisites has been deprecated in favour of Piwik, which also has a plugin.\)

### XML Galleys

This plugin automatically generates HTML and PDF galleys from XML files. NLM 2.3 XML is supported by default, but custom XSLT files are also supported.

### Translator Plugin

This plugin allows web-based maintenance of translation files, which are used to provide text for the OJS interface. You must first use the Enable link to activate the plugin, and then hit the Translate link to see the list of available locale files. Use the Edit link for the language you wish to update. There are many.  
You will be shown a list of all locale files for that given locale. Click on the Edit link next to a locale file to modify one. You will see the English text in the top box, and the translated text in the lower box. Change the appropriate text and save. Your changes will be visible immediately.

### Custom Locale Plugin

Similar to the Translator Plugin, this allows you to modify the OJS text for your default language \(e.g., to change "About the Site" to "About this Site"\). However, it doesn't change the locale file itself, but rather stores the change in the OJS database. You can also make custom changes on a per-journal basis using this plugin, whereas using the Translator plugin will change the locale site-wide, across all journals.

### Referral Plugin

This plugin tracks incoming refback URLs to articles \(i.e., when a reader follows an external link to an article\), allowing Authors to maintain and potentially publish an automatically-updated list of refbacks to an article.

The Journal Manager can specify exclusions from the plugin's Settings page. This limits the number of web crawler requests from cluttering the Author's referral interface. Regular expressions can be used.

### COinS Plugin

The COinS plugin adds an OpenURL descriptor to article pages \(abstract and HTML\) that can be used e.g. for extraction to citation tools such as Zotero.

### TinyMCE Plugin

This plugin enables WYSIWYG editing of OJS textareas using the TinyMCE content editor.

### Books for Review Plugin

The Books for Review plugin allows Editors to manage their journal's book review process. Editors can publicly list books that are available for review; Authors can request to review books; and Authors and Editors can manage the workflow process through request confirmation, book mailing, review submission, and publication.

After the Books for Review plugin has been enabled, Editors will find a link to Books For Review in their User Home page. Clicking on the link will bring you to the Books for Review interface. In order for the books to be available to Authors and the general public, the Editor must configure the plugin's workflow settings. This can be done by clicking the Settings link and, at a minimum, choosing a Management Mode.

The Editor can also configure other aspects of the book review workflow and publication process, including whether and where book cover images are displayed; whether book reviews have due dates; and whether email reminders for late reviews should be sent out. Additional information for potential reviewers can also be provided; this will be displayed along with the list of books available for review.

Editors can add new books available for review by clicking the Create Book for Review link available on either the All or Available pages. The following form, with fields such as author, title, description, ISBN, and so on must be filled out.

Additionally, a book cover image can be uploaded; an Author can be assigned to complete the review at the outset; or the Editor can associate the book to a current submission, in the case that an Author has already submitted the review for consideration.

> **Note**
> 
> "Books for review" as entered into the system by Editors are distinct from Author submissions; but they must eventually be tied to an Author submission, which is in the end the review itself. Think of the book for review that the Editor enters into the system as a book entity in and of itself, which must eventually be attached to the review of it.

Any book that the Editor has listed for review, and which has not yet been assigned, is available from a new Books for Review link on the topmost navigation bar, and from an Available Books link in the Author's User Home page. Authors can request to review the book by clicking the Request This Book for Review link, which will send a notification request email to the Editor.

The Author can check on the status of this book review request by clicking on the My Books link on their User Home page, and viewing the Requested page. Likewise, the status of assigned, mailed and submitted books can be seen at a glance.

Editors can also see which books have been requested, and by whom, from their Books for Review interface. They can Accept or Deny Author review requests; email the Author by clicking the mail icon next to their name; or select an existing submission to match the review with.

If the Editor accepts or denies the request, a notification email will be sent to the Author. The Editor will be able to edit this email before it is sent. If the request is accepted, the email will include the Author's mailing address \(if available from their user profile\), and instructions on adding or updating a mailing address. The email will also include a link that will take the Author to the article submission process, whereby the review can be submitted as a normal submission. The only key difference is that at the end of the submission process the Author will be asked to confirm whether the submission is a book review for one of the reviews assigned to them. The review will otherwise be reviewed and edited following the normal conventions.

Authors and Editors alike can use their Books for Review interface to track submitted reviews, from submission to publication.


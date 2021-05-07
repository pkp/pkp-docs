---
book: translating-guide
version: 3.1
---

This page describes the motivations and policies that are used in PKP software to maintain consistent and flexible localization, i.e. the ability to translate content and built-in text into numerous languages and support a flexible mix of publishing options.

Locale Files
------------

Locale files are XML files stored in one of several directories named for the locale code (i.e. en\_US for U.S. English or fr\_CA for Canadian French). These contain the key =\> value associations that map symbolic names for pieces of language (i.e. "navigation.journalHelp") to translations in various languages (i.e. "Journal Help" in English or "Aide" in French).

There are numerous locale files, organized by function. The major places to find these are:

-   locale/ - Contains the application-specific locale files
-   lib/pkp/locale/ - Contains the generic PKP library locale files
-   plugins/\*/\*/locale/ - Contains application-specific plugin content
-   lib/pkp/plugins/\*/\*/locale/ - Contains generic plugin content

Segmentation of content into numerous files serves several purposes:

-   *Maintainability*: Smaller files, organized roughly by topic, are easier to maintain. A language can be more easily distributed between several translators without requiring merges.
-   *Reuse*: Any content that is available in the PKP library can be used by any application that needs it. One translation update for OJS therefore may result in useful contributions to OCS or OMP.
-   *Portability*: Content that is associated with plugins can be packaged easily for distribution.
-   *Efficiency*: This remains to be proven, but it should be possible to reap some performance and resource usage benefits by only loading a subset of the localized content. Most requests, for example, are for public-facing pages; most of the translated content, however, addresses workflow.

### Where should content go?

-   If content relates only to a single plugin, it needs to be distributed with that plugin.
-   If content is not specific to a single application, put it in the PKP library.
-   Try to group by logical entity. For example, a locale file called "submission.xml" dealing with content about submissions is probably more useful a distinction than a locale file called "author.xml" dealing with authorship and author workflow, because any page displaying information about a submission will likely include authorship information but will not necessarily care about the author's workflow.
-   Consider which parts of the system will need to load a locale key. If logically well-structured, it shouldn't be necessary to load an entire locale file for the sake of a single locale key.

### How should I name a locale key?

-   A locale key should be reasonably short and must uniquely identify a piece of text.
-   Locale keys should be organized for hierarchical grouping, i.e. "submission.id", "submission.history.clearLog", "submission.history.viewLog" are all within the "submission" pseudo-namespace, and with history-related locale keys further subgrouped into "submission.history".
-   As much as possible, related keys should be kept close to each other in the locale file to help translators to stay consistent.
-   Don't tie the names of locale keys too closely to the user interface. For example, the following should *not* be used:

```
<message key="manager.setup.step1.journalDescription">Journal Description</message>
```

...instead, use something more like...

```
<message key="manager.setup.journalDescription">Journal Description</message>
```

This keeps the locale files organized in spite of the inevitable user interface rearrangements.

-   When adding a new locale key, particularly for short (1 or 2 word) entries, grep the existing locale files to see whether something already exists:

```
fgrep -l ">Title<" `find . -name \*.xml`
```

(The \> and < surrounding Title are used to mark the beginning and end of the entry.)

### Semantics

Do not assume that you can rely on English semantics. Contents may be presented in languages that do not behave the same way.

-   Use replacement variables rather than multiple locale keys to concatenate. The following should /not/ be used:

```
<message key="some.locale.key1">You have </message>
<message key="some.locale.key2"> unread messages.</message>
```

Instead, the following should be used:

```
<message key="some.locale.key">You have {$numberUnreadMessages} unread messages.</message>
```

This will prevent problems e.g. with right-to-left languages, and keep content more logically organized.

-   Be careful when using the same locale key in different contexts. For example, "active" text, i.e. button labels, may be different than informational labels.

### Escaping and Other Guidelines

-   Most content in the locale files is intended for presentation on the web and is in HTML format. For the most part, HTML is plain-text, but there are occasional differences. Ampersands will generally need to be double-escaped, i.e.: `Statistics &amp; Reports`

This will come out in the HTML source as "Statistics & Reports", thus the ampersand will be displayed correctly.

-   For large blocks of HTML, use `<![CDATA[ ... ]]>`. For example:

```
<message key="some.big.html"><![CDATA[<p>This is a large block of content containing <em>HTML</em>.]]\></message>
```

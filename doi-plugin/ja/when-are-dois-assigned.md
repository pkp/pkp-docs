# When Are DOIs Assigned?

It is important to understand when DOIs will be assigned because **DOI registration is irreversible**. Once an article or issue is published and your DOI has been registered with an agency, you cannot change it. This is due to the nature of permanent IDs: they are meant to be assigned once and only once and then never change again.

Broadly speaking, DOIs are assigned by OJS when you schedule them for publication in an issue. If you push an article to an already-published issue, the DOI will be assigned immediately.

This assignment logic is slightly different for the different suffix generation strategies

## Pattern-based Suffix Generation (default or custom)

DOIs will always be generated according to the currently configured pattern on assignment to an issue. This also means that changing a pattern will not change already-assigned DOIs, only DOIs being generated from that moment on. Be careful when changing patterns that the new pattern does not share its namespace with the previous pattern. Otherwise duplicate DOIs may result which will lead to problems when trying to register these IDs.

Once you configured the pattern for DOI suffix generation in the DOI plugin you'll not have to do anything special for an object to get a DOI assigned. The DOI will be assigned when you schedule it for an issue, or when you publish an article in an existing issue.

## Individual DOI Suffixes

The logic is slightly different to support selective DOI assignment. In this case a DOI will not be assigned even for already published objects if a DOI suffix has not been entered for that object. This allows the journal more control over which articles receive DOIs, but does come with the responsibility to assign each one manually.

## DOI Preview/Assignment

Whatever suffix generation strategy you choose, you'll be able to preview/create the DOI from that submission's _publication_ workflow, provided that the object has not yet been published. You'll find the DOI on the left sidebar under the "Identifiers" menu.  While you _can_ assign a DOI before scheduling it for an issue, if your suffix pattern includes volumes or issues, you'll want to schedule it first. 

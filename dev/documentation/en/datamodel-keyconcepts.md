---
book: dev-documentation
version: 3.4
title: Entities Key Concepts - Technical Documentation - OJS|OMP|OPS
---

# Entities: Key Concepts

The overall database schema for the PKP data model consists of well over 100 tables.
The present page does not introduce the entire data model.
It merely characterizes a few particularly important entities
and describes some other things that one might _expect_ to be entities
but that happen to be represented in some other way.

The page is organized as a loose list of sections in alphabetical order.

When you look for the classes representing these entities,
some of them will live in PKPlib, others in OJS (etc.),
and many in both, with an inheritance relationship between them. 
In the latter case, the superclass in PKPlib usually has a `PKP` name prefix.

## Author

Authors are associated with [Publications](#Publication).
An Author need not be a [User](#User).
Except for the email address, an Author's attributes such as
names and affiliations can be localized.

## Context

Contexts appear _everywhere_ in PKP.
In OJS, a Context represents a journal.
Except for Plugins and Users, most things are per context, not shared between contexts.

## Editor

Editors as such are _not_ entities.
They are Users that get assigned an Editor role in some scope such as
an entire [Context](#Context) or a Section.

## Publication

Publications represent the various versions of a [Submission](#Submission)
as they are created during the Submission's lifecycle, e.g. the
version submitted for initial review, for second review, for publication,
the version after copyediting, and the final published version.
Publications would better be called SubmissionVersions (but are not).

Publications represent metadata such as a title and
are associated with files (via Galley objects)
and with [Authors](#Author). 

## Reviewer

Reviewers as such are _not_ entities.
In a general sense, they are [Users](#User) that are permanently earmarked for the Reviewer role.
In a more specific sense, they are [Users](#User) that are mentioned as Reviewer
in a [ReviewAssignment](#ReviewAssignment).

## Review

Reviews as such are _not_ entities, because OJS is so flexible regarding what they can look like.
The shape of a Review is dictated by the ReviewForm set in the ReviewAssignment
that asked for the Review.
The content of the Review (according to that ReviewForm) is stored as ReviewFormResponse objects.

## ReviewAssignment

ReviewAssignments are created by Editors.
They bind a [Reviewer](#Reviewer) to a [Submission](#Submission) to be reviewed
(and indirectly a [Publication](#Publication)) and a ReviewForm
and contain lots of metadata such as due dates, agreed/declined,
and the reviewer's decision recommendation.

## Submission

Submissions are the most central entity type in the whole system.
Submissions are what authors submit, what editors move through the publication process,
and what eventually may become content shown on the site.
While they move through the process, Submissions get assigned to reviewers, copy editors,
and other people, get paid for, change their status multiple times, and so on.

Various other entities are associated with Submissions, e.g. 
SubmissionFiles or [ReviewAssignments](#ReviewAssignment).

Because Submissions go through so many states, they need to have versions.
Submission versions in PKP are represented by Publication objects (not a good name, really).
Many of the attributes you might expect to be stored in a Submission,
such as the title, are actually only stored in the Publication objects.

## User

Users represent identities that can be authenticated.
A User is somebody who can log in to the system.
Some kinds of people are always Users (e.g. [Editors](#Editor) and [Reviewers](#Reviewer)),
but others need not be (e.g. [Authors](#Author), except for the one doing the submitting).
Except for the email address, most of a User's attributes such as
names and affiliations can be localized.

Learn about localization and extensibility via [settings](./datamodel-settings) in the next section.
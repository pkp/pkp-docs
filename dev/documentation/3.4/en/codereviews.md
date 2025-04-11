---
book: dev-documentation
version: 3.4
title: Code Reviews
---

# Code Reviews

All code for our applications should be reviewed before it is merged. Code reviews help us:

- Improve the quality of our code and catch unexpected bugs
- Share knowledge and expertise among the team
- Spread awareness of how new features work
- Teach us about previous coding choices we have made that led to bugs
- Maintain consistency in coding style and syntax, so that the code remains easy to read

Code reviews work best when they spark discussion between the coder and the reviewer. Sometimes, going directly to a code review is the easiest way for another developer to understand how and why you've chosen to solve a problem in a particular way.

Some comments in code review are straightforward — for example, syntax and whitespace issues. But others are an opportunity to learn for both the coder and the reviewer. If you don't understand a comment or disagree with a suggested change, a code review is a great place to discuss it.

# What to expect from a code review

A good code review is an opportunity to reach a consensus. When a consensus between the coder and the reviewer can not be reached, a senior developer will make the decision. A code review is **not** an opportunity to disparage your code or criticize your coding ability.

The **coder** should expect:

- To be treated with respect.
- To have mistakes or errors pointed out in a friendly, constructive manner.
- To be asked to explain how their code works or why a coding choice was made.
- To be asked to investigate any concerns highlighted by the reviewer.

The **reviewer** should expect:

- To ask for clarification if there is anything about the code they do not understand.
- To be corrected in a friendly, constructive manner if they have misunderstood the purpose or function of the code.
- To be updated by the coder when any concerns have been addressed.
- To be able to call on other reviewers if their expertise is needed.

# How to ask for a code review

In the course of your work, you will need to prepare pull requests and ask for code reviews. Typically, you should make sure that the tests are passing for your pull requests before asking for code review. However, in some cases, you may be asked to open a draft pull request for code review even before it is ready for merge.

To ask for a code review, post a description of the changes in the GitHub issue you are working on and list all of the related PRs. Here is an example.

> @asmecher here is the work that I've done on the onboarding exercises. Can you review this?
>
> PRs:
> - http://...
> - http://...
> - http://...
> 

Use a comment in the issue instead of assigning each pull request to the reviewer using GitHub's assigned interface. This way the reviewer will get a single notification with all of the pull requests in one place.

When you have updated your code in response to review comments, post again in the issue to let the reviewer know that you are ready for a second round of review.

# How to make a good pull request

Remember that your pull request and code review creates work for someone else. The following will help ensure it is as easy as possible to review your code.

1. Try to keep the code changes in your pull request restricted to those required to complete the task. It is tempting to clean up type hinting, syntax or code organisation as you go. But it can be very difficult for the reviewer to look through 100 lines of code changes to find the 5 lines that fixed the bug. When possible, implement these changes in a separate PR.
2. Try to be as clear and concise as possible in your description. The reviewer may not understand the bug or feature that the pull request addresses. A clear description of the problem and the approach you took to solve it will help your reviewer give a better review. If user interactions are involved, screenshots or videos can be very helpful!
3. Make sure that your pull request is opened against the correct branch, according to the milestone. Bug fixes are usually opened against a stable branch while new features are usually opened against the `main` branch.

And don’t worry too much. There’s no perfect pull request! Over time we will learn to adapt to each other’s coding and reviewing habits.

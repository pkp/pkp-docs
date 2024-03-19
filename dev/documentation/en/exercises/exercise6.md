---
book: dev-documentation
version: 3.4
title: Exercise 6 - Localization
---

# Exercise 6 - Localization

This exercise is designed to help you learn about how the software handles localization so that it can be used in any language.

Read the [Translation](../utilities-translation) section of the documentation. Then use what you've learned to localize your announcements page in any supported language.

Review the documentation on multilingual data for [entities](../architecture-entities), then make the `keyword` property that you added in [Exercise 4](./exercise4) a multilingual property and add different keywords for different languages.

# Specifications

- When I view the announcements page that I created in previous exercises, I see the heading, "Announcements", in my current language. When I switch to another language, the heading changes to show the heading in that language.
- When I view the announcements page that I created in previous exercises, I see that the page's `<title>`, which appears as the name of the tab in the browser, is "Announcements" in my current language. When I switch to another language, the `<title>` changes to show the heading in that language.
- When I view the announcements page that I created in previous exercises, I see that the `keyword` for each announcement only shows the language that I am currently using. When I switch languages, the keyword changes to show the correct value for that language.

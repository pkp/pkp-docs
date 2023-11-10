---
book: dev-documentation
version: 3.4
title: Exercise 4 - Extend the Announcement Schema
---

# Exercise 4 - Extend the Announcement Schema

This exercise is designed to help you learn about the extensible data schema in OJS/OMP/OPS. 

> 💡 Only some entities have a JSON schema definition, but our plan is to refactor the code so that all entities use the schema system.

Review the section on [entity schemas](../architecture-entities#schema) in the developer documentation and then find the announcement schema's JSON file.

Use what you have learned to add a new property, `keyword`, to the announcement entity. Add validation rules for the property so that it can only be one of the following: `apple`, `banana`, or `cherry`.

Use one of the following methods to update the announcements you created in [Exercise 3](./exercise3) with keywords:

1. Use the [REST API](../../../api/) to send PUT requests to the announcements endpoint at `/api/v1/announcements/<announcement_id>`.
2. Find and modify the `PKP\components\forms\announcement\PKPAnnouncementForm` to add a text field for entering a `keyword`. Then use the UI to edit an announcement and enter a keyword.

Finally, update the announcements page you created in [Exercise 3](./exercise3) to show the keyword.

# Specifications

- When I visit `http://localhost:8000/index.php/publicknowledge/example/announcements` I can see the keyword for any announcements where I entered one.
- When I try to save an announcement with a keyword that isn't `apple`, `banana`, or `cherry`, I see an error message.

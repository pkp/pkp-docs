---
book: dev-documentation
version: 3.4
title: Exercise 1 - Route Request to a Page
---

# Exercise 1 - Route Request to a Page

This exercise is designed to help you understand how requests are routed in OJS/OMP/OPS. Use this exercise as a guide, but take the opportunity to explore beyond the steps here when you are curious how something works.

Read the Architecture, Request Lifecycle, Routes, and Handlers sections of the [developer documentation](../architecture). Then use what you've learned to build a custom page.

In the example below, we'll use `http://localhost:8000/index.php/publicknowledge`. This base URL may be different depending on your local development environment.

## Specifications

- When I visit `http://localhost:8000/index.php/publicknowledge/exercise/announcements`, I should see a simple HTML page that says "Announcements".
- When I visit `http://localhost:8000/index.php/publicknowledge/exercise/users`, I should see a simple HTML page that says "Users".
- When I visit `http://localhost:8000/index.php/publicknowledge/exercise`, I should see a simple HTML page with links to each of the other two pages.

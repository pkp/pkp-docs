---
title: Example - Extending Backend UI with Vue.js - Plugin Guide for OJS, OMP and OPS
description: How to extend the editorial backend UI using Vue.js components in OJS, OMP and OPS plugins.
book: dev-plugin-guide
version: 3.5
---

# Extending Backend UI with Vue.js

As of version 3.5, the recommended approach to extend the editorial backend UI is to create Vue.js components and inject them via available hooks. This provides a flexible, modern way to customize the interface with full access to the ui-library components, composables, and styling system.

## Resources

- **[Storybook Plugin Guide](https://stable-3_5_0--6555d3db80418bb1681b8b17.chromatic.com/?path=/docs/guide-plugins--docs)** - Complete guide covering build setup, creating components, using ui-library components and composables, registering components, working with Pinia stores, translations, and styling.

- **[Backend UI Example Plugin](https://github.com/jardakotesovec/backend-ui-example-plugin)** - Working examples demonstrating how to extend FileManager, Dashboard, Workflow, and other backend pages with custom Vue.js components.

The Storybook guide also documents available JavaScript hooks for injecting components into specific pages and managers (Dashboard, Workflow, FileManager, ReviewerManager, ParticipantManager, GalleyManager).

---

View more [examples](./examples).

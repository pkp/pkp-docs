---
book: dev-documentation
version: 3.4
title: Entities - Technical Documentation - OJS|OMP|OPS
---

# Entities (Data Model)

The chapters in this section introduce some ideas how the OJS/OMP/OPS data models are designed
and characterize some of the most important entities.

General data model goals:
- Sharing: Have as much of the data model as possible in PKPlib instead of in the individual applications
  OJS, OMP, or OPS.
- Localization: Allow for locale-dependent values for all attributes where this is useful.
  This means the same entity instance can have multiple values for the same attribute.
- Extensibility: Allow plugins to add a few attributes to existing entities whenever this is
  required for the plugin's purposes.

Learn about [some key entity concepts](./entities-keyconcepts) in the next section.
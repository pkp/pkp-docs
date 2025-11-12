---
title: Plugin Guide for OJS, OMP and OPS
description: How to create a plugin for Open Journal Systems, Open Monograph Press or Open Preprint Systems, to customize almost anything about the application to suit your needs.
book: dev-plugin-guide
version: 3.5
---

# Introduction

> If you want to make a new design for your journal, press or preprint server, read the [Theming Guide](/pkp-theming-guide/en).
{:.notice}

This document describes how to create your own plugins for [OJS](https://pkp.sfu.ca/software/ojs), [OMP](https://pkp.sfu.ca/software/omp), and [OPS](https://pkp.sfu.ca/software/ops). It is written for software developers who want to extend the publishing platform to suit their needs.

## What are plugins?

Plugins add features by hooking in and modifying how the application responds to requests. Plugins can add fields to forms, change templates, save new information, modify authentication procedures, create new pages or change existing screens in the application.

Plugins keep your customizations isolated from the main application code. When you update the application, your plugin's code will not be modified. This makes it easier to maintain customizations over time.

We **strongly recommend** you use plugins to customize the software and never modify the main application code.

---

Learn how to [start building your plugin](getting-started).

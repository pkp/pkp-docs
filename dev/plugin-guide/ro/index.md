---
title: Plugin Guide for OJS and OMP
description: Learn how to create a plugin for Open Journal Systems and Open Monograph Press, to customize almost anything about the application to suit your needs.
---

# Introduction

This document describes how to create your own plugins for OJS and OMP. It is written for software developers who want to extend the publishing platform to suit their needs.

## What are plugins?

Plugins add features by hooking in and modifying how the application responds to requests. Plugins can add fields to forms, change templates, save new information, modify authentication procedures, create new pages or change existing screens in the application.

> If you want to make a new design for your journal or press, please consult the [Theming Guide](/pkp-theming-guide/en). 
> 
> {:.notice}

Plugins keep your customizations isolated from the main application code. When you update OJS or OMP, your plugin's code will not be modified. This makes it easier to maintain customizations over time.

We **strongly recommend** you use plugins to customize the software and never modify the main application code.

---

Learn how to [start building your plugin](getting-started).

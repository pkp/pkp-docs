---
layout: hub
title: PKP Docs - Documentation for OJS, OMP and all of the Public Knowledge Project's software
description: Learn how to set up, use and customize Open Journal Systems and all of the Public Knowledge Project's software. Includes help for Open Monograph Press (OMP), Open Typesetting Stack (OTS), Open Conference Systems (OCS), and more.
---

{% include hub/hero.html %}

{% for app in site.data.index.apps %}
{% include hub/app.html %}
{% endfor %}

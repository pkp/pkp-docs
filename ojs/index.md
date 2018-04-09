---
layout: hub
title: OJS Help - User guides, technical documentation and publishing tips for Open Journal Systems
description: Get started running, editing and customizing your scholarly journal. Access all Open Journal Systems user guides, code documentation and more.
---

{% for app in site.data.index.apps %}
{% if app.path == 'ojs3' or app.path == 'ojs2' %}
{% include app.html %}
{% endif %}
{% endfor %}

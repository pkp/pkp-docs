---
layout: hub
title: OJS Help - User guides, technical documentation and publishing tips for Open Journal Systems
---

{% for app in site.data.index.apps %}
{% if app.path == 'ojs3' or app.path == 'ojs2' %}
{% include app.html %}
{% endif %}
{% endfor %}

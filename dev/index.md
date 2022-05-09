---
layout: hub
title: PKP Developer Docs - Technical guides and documentation for OJS, OMP and OPS
description: Developer documentation, reference guides and more to help you build themes, write plugins and develop new features for OJS, OMP and OPS
---

<div class="hero">
	<div class="hero__content">
		<div class="hero__text">How to build themes, write plugins and develop new features for OJS, OMP and OPS.</div>
	</div>
</div>


{% for app in site.data.dev.cards %}
{% include hub/app.html %}
{% endfor %}

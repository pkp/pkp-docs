---
layout: hub
title: PKP Developer Docs - Developer documentation for OJS and OMP
description: Developer documentation, reference guides and more to help you build themes, write plugins and develop new features for OJS and OMP
---

<div class="hero">
	<div class="hero__content">
		<div class="hero__text">How to build themes, write plugins and develop new features for OJS and OMP.</div>
			<div class="hero__links">
				<span class="hero__linksLabel">Jump to:</span>
				<a class="hero__link" href="#appdev">OJS/OMP 3</a>
				<a class="hero__link" href="#appojs2">OJS 2</a>
			</div>
	</div>
</div>


{% for app in site.data.dev.cards %}
{% include hub/app.html %}
{% endfor %}

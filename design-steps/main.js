var start      			= document.getElementById('start'),
    colours			= document.getElementById('colours'),
    coloursLow			= document.getElementById('colours-low'),
    coloursMedium		= document.getElementById('colours-medium'),
    coloursHigh			= document.getElementById('colours-high'),
    coloursHighMore		= document.getElementById('colours-high-more'),

    typography			= document.getElementById('typography'),
    typographyLow		= document.getElementById('typography-low'),
    typographyMedium		= document.getElementById('typography-medium'),
    typographyMediumMore	= document.getElementById('typography-medium-more'),
    typographyHigh		= document.getElementById('typography-high'),
    typographyHighMore		= document.getElementById('typography-high-more'),

    logo			= document.getElementById('logo'),
    logoLow			= document.getElementById('logo-low'),
    logoMedium			= document.getElementById('logo-medium'),
    logoMediumMore		= document.getElementById('logo-medium-more'),
    logoHigh			= document.getElementById('logo-high'),
    logoHighMore		= document.getElementById('logo-high-more'),

    visuals			= document.getElementById('visuals'),
    visualsLow			= document.getElementById('visuals-low'),
    visualsMedium		= document.getElementById('visuals-medium'),
    visualsMediumMore		= document.getElementById('visuals-medium-more'),

    theme			= document.getElementById('theme'),
    themeManuscript		= document.getElementById('theme-manuscript'),
    themeHealthSciences		= document.getElementById('theme-health-sciences'),
    themeClassic		= document.getElementById('theme-classic'),
    themeImmersion		= document.getElementById('theme-immersion'),
    themePragma			= document.getElementById('theme-pragma');

function showStep(step) {
	var activeElem		= event.target;

	step.classList.toggle("open");

	activeElem.classList.toggle("active");

	if (activeElem.classList.contains("choice")) {
		var parent = activeElem.closest(".choices"),
				siblings = activeElem.parentNode.children;

		// Display down arrow
		parent.classList.toggle("arrow");
		parent.scrollIntoView({behavior: "smooth"});

		// Hide other choices
		for (var i = 0; i < siblings.length; i++) {
			if (siblings[i] !== activeElem) {
				siblings[i].classList.toggle("hide");
			}
		}

	} else {
		var container = step.closest(".building-block");
		container.scrollIntoView({behavior: "smooth"});
	}

}

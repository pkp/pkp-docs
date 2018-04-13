/**
 * Initialize smooth scrolling to anchor links
 *
 * See: https://github.com/cferdinandi/smooth-scroll
 */
(function() {
	function init() {
		if (typeof SmoothScroll === 'undefined') {
			setTimeout(init, 500);
		} else {
			var scroll = new SmoothScroll('a[href^="#"]', {easing: 'easeInOutCubic', offset:80});
		}
	}
	init();
})();

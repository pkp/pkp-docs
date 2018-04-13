/**
 * Toggle the sidebar open/closed
 */
(function() {

	var sidebar = document.getElementById('sidebar');
	var sidebarControl = document.getElementById('sidebarControl');
	var isOpen = false;
	var sidebarOpenClass = ' -sidebarIsOpen';

	if (!sidebar || !sidebarControl) {
		return;
	}

	// Toggle sidebar
	function toggle() {
		if (isOpen) {
			document.body.className = document.body.className.replace(new RegExp(sidebarOpenClass, 'g'), '');
		} else {
			document.body.className = document.body.className + sidebarOpenClass;
		}
		isOpen = !isOpen;
	}

	sidebarControl.addEventListener('click', toggle);
})();

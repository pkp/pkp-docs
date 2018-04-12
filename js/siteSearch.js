/**
 * Site search
 *
 * Retrieves the search index and responds to search requests. Expects axios
 * and lunr.js
 */
(function() {

	var searchData = [];
	var searchIndex; // Lunr.js search index
	var searchResults; // Lunr.js search result
	var searchQuery = '';
	var searchControl = document.getElementById('searchControl');
	var searchControlLoadingClass = ' siteHeader__search--loading';
	var searchInput = document.getElementById('searchInput');
	var searchResultEl = document.getElementById('searchResults');

	// Load search index
	function getSearchIndex() {
		if (typeof axios === 'undefined') {
			setTimeout(getSearchIndex, 500);
			return;
		}
		axios.get('/search.json')
			.then(function (response) {
				searchData = response.data;
				initLunr();
			})
			.catch(function (error) {
				shouldAbort = true;
			});
	}

	// Initialize the Lunr.js search index
	function initLunr() {
		if (typeof lunr === 'undefined') {
			setTimeout(initLunr, 500);
			return;
		}
		searchIndex = lunr(function () {
			this.field('title', {boost: 10});
			this.field('content');
			for (var i in searchData) {
				this.add(searchData[i]);
			}
		});
	}

	// Initialize search handler
	function initSearchInput() {
		var debouncedSearch = debounce(search, 250);
		searchInput.addEventListener('input', function(e) {
			if (searchQuery === e.target.value || (!searchQuery.length && e.target.value.length < 3)) {
				return;
			}
			searchQuery = e.target.value;
			if (searchQuery.length < 3) {
				searchResults = [];
				showSearchResults();
				return;
			}
			if (typeof searchIndex === 'undefined') {
				searchControl.className = searchControl.className + searchControlLoadingClass;
			}
			debouncedSearch();
		});
	}

	// Perform search
	function search() {
		if (typeof searchIndex === 'undefined') {
			setTimeout(search, 500);
			return;
		}
		searchControl.className = searchControl.className.replace(new RegExp(searchControlLoadingClass, 'g'), '');
		if (searchQuery) {
			searchResults = searchIndex.search(searchQuery);
			showSearchResults();
		}
	}

	// Display search results
	function showSearchResults() {
		while (searchResultEl.firstChild) {
			searchResultEl.removeChild(searchResultEl.firstChild);
		}
		if (!searchQuery.length) {
			return;
		} else if (searchQuery.length < 3) {
			noSearchResults('Type at least three characters to search.');
		} else if (!searchResults.length) {
			noSearchResults('No results found.');
		} else {
			for (var i in searchResults) {
				var id = parseInt(searchResults[i].ref, 10);
				var item;
				for (var d in searchData) {
					if (searchData[d].id === id) {
						item = searchData[d];
					}
				}
				if (typeof item === 'undefined') {
					continue;
				}
				var el = document.createElement('article');
				el.className = 'search__result';
				var elTitle = document.createElement('a');
				elTitle.href = item.url;
				elTitle.appendChild(document.createTextNode(item.title));
				el.appendChild(elTitle);
				searchResultEl.appendChild(el);
			}
		}
	}

	// Add a message when no search results are available
	function noSearchResults(msg) {
		var el = document.createElement('div');
		el.className = 'search__resultsMessage';
		el.appendChild(document.createTextNode(msg));
		searchResultEl.appendChild(el);
	}

	// Debounce
	// https://gist.github.com/peduarte/7ee475dd0fae1940f857582ecbb9dc5f
	function debounce(func) {
	  var wait = arguments.length <= 1 || arguments[1] === undefined ? 100 : arguments[1];

	  var timeout = void 0;
	  return function () {
	    var _this = this;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    clearTimeout(timeout);
	    timeout = setTimeout(function () {
	      func.apply(_this, args);
	    }, wait);
	  };
	}

	// Initialize
	getSearchIndex();
	initSearchInput();
})();

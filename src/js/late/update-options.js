/**
 * Update the saved options live on the page
 */

chrome.storage.onChanged.addListener( function (changes) {
	var base = document.documentElement;
	var prefix;

	for (var key in changes) {
		var storageChange = changes[key];

		switch (key) {
			case 'primaryColor':
				prefix = 'primary-';
				break;
			case 'secondaryColor':
				prefix = 'secondary-';
				break;
			case 'chromeColor':
				prefix = 'chrome-';
				break;
		}

		base.classList.remove(prefix + storageChange.oldValue);
		base.classList.add(prefix + storageChange.newValue);
	}
});

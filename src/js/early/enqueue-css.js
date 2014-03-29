
// Load color themes from options
chrome.storage.sync.get(
	{
		primaryColor: 'blue',
		secondaryColor: 'cyan',
		chromeColor: 'navy'
	},
	function ( options ) {
		var base = document.documentElement;
		base.classList.add( 'primary-' + options.primaryColor );
		base.classList.add( 'secondary-' + options.secondaryColor );
		base.classList.add( 'chrome-' + options.chromeColor );
	}
);

// Enqueue stylesheet
var style = document.createElement('link');
style.rel = 'stylesheet';
style.href = chrome.extension.getURL('css/app.min.css');
(document.head || document.documentElement).appendChild(style);

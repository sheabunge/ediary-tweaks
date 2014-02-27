
// Enqueue stylesheet
var style = document.createElement('link');
style.rel = 'stylesheet';
style.href = chrome.extension.getURL('css/app.min.css');
(document.head || document.documentElement).appendChild(style);

/**
 * Change an element into a FontAwesome icon
 */
var changeToIcon = function( el, icon, title, classes ) {

	var html = '<i class="fa fa-' + icon;

	if ( classes ) {
		html += ' ' + classes;
	}

	if ( title ) {
		html += '" title="' + title;
	}

	html += '"></i>';
	el.outerHTML = html;
};


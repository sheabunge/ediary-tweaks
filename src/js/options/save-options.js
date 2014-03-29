
var getSelectValue = function (select) {
	return select.children[select.selectedIndex].value;
};

var setSelectValue = function (select, value) {

	for (var i = 0; i < select.children.length; i++) {
		var child = select.children[i];

		if (child.value == value) {
			child.selected = 'true';
			break;
		}
	}
};

// Saves options to localStorage.
var saveOptions = function () {

	chrome.storage.sync.set({
		'primaryColor': getSelectValue( document.getElementById( 'primary-color' ) ),
		'secondaryColor':	getSelectValue( document.getElementById( 'secondary-color' ) ),
		'chromeColor': getSelectValue( document.getElementById( 'chrome-color' ) )
	}, function () {

		// Update status to let user know options were saved.
		var status = document.getElementById('status');
		status.textContent = 'Options saved.';

		setTimeout( function() {
			status.textContent = '';
		}, 750 );
	});
};

// Restores select box state to saved value from localStorage.
var restoreOptions = function () {

	chrome.storage.sync.get({
		primaryColor: 'blue',
		secondaryColor: 'cyan',
		chromeColor: 'navy'
	}, function ( options ) {

		setSelectValue( document.getElementById( 'primary-color' ), options.primaryColor );
		setSelectValue( document.getElementById( 'secondary-color' ), options.secondaryColor );
		setSelectValue( document.getElementById( 'chrome-color' ), options.chromeColor );
	});
};

document.addEventListener( 'DOMContentLoaded', restoreOptions );
document.getElementById( 'save' ).addEventListener( 'click', saveOptions );

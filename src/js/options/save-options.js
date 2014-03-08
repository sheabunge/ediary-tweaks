
var defaultOptions = {
	primaryColor: 'blue',
	secondaryColor: 'teal',
	chromeColor: 'black'
};

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

	localStorage.primaryColor =
		getSelectValue( document.getElementById( 'primary-color' ) );

	localStorage.secondaryColor =
		getSelectValue( document.getElementById( 'secondary-color' ) );

	localStorage.chromeColor =
		getSelectValue( document.getElementById( 'chrome-color' ) );

	// Update status to let user know options were saved.
	var status = document.getElementById('status');
	status.textContent = 'Options saved.';

	setTimeout( function() {
		status.textContent = '';
	}, 750 );
};

// Restores select box state to saved value from localStorage.
var restoreOptions = function () {

	setSelectValue(
		document.getElementById( 'primary-color' ),
		localStorage.primaryColor || defaultOptions.primaryColor
	);

	setSelectValue(
		document.getElementById( 'secondary-color' ),
		localStorage.secondaryColor || defaultOptions.secondaryColor
	);

	setSelectValue(
		document.getElementById( 'chrome-color' ),
		localStorage.chromeColor || defaultOptions.chromeColor
	);

};

document.addEventListener( 'DOMContentLoaded', restoreOptions );
document.getElementById( 'save' ).addEventListener( 'click', saveOptions );

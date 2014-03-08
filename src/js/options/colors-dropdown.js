var colors = [

	// Cool
	'aqua', 'blue', 'navy', 'teal', 'green', 'olive', 'lime',

	// Warm
	'yellow', 'orange', 'red', 'fuchsia', 'purple', 'maroon',

	// Gray Scale
	'white', 'silver', 'gray', 'black'
];

/** Add capitalize method to strings */
String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
};

// Build colors dropdown
var colorsDropdown = '';

for ( var i = colors.length - 1; i >= 0; i-- ) {
	colorsDropdown += '<option value="' + colors[i] + '">';
	colorsDropdown += colors[i].capitalize() + '</option>\n';
}

// Insert colors dropdown
document.getElementById( 'primary-color' ).innerHTML = colorsDropdown;
document.getElementById( 'secondary-color' ).innerHTML = colorsDropdown;
document.getElementById( 'chrome-color' ).innerHTML = colorsDropdown;

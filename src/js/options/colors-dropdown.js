var colors = [
	'blue', 'cyan', 'navy', 'teal', 'green', 'olive', 'lime',
	'yellow', 'orange', 'red', 'magenta', 'purple', 'maroon',
	'white', 'silver', 'grey', 'black'
];

/** Add capitalize method to strings */
String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
};

// Build colors dropdown
var colorsDropdown = '';

for ( var i = 0; i < colors.length; i++ ) {
	colorsDropdown += '<option value="' + colors[i] + '">';
	colorsDropdown += colors[i].capitalize() + '</option>\n';
}

// Insert colors dropdown
document.getElementById( 'primary-color' ).innerHTML = colorsDropdown;
document.getElementById( 'secondary-color' ).innerHTML = colorsDropdown;
document.getElementById( 'chrome-color' ).innerHTML = colorsDropdown;

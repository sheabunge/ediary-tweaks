(function() {
	"use strict";

	var changeToIcon = function( el, icon, title, classes ) {

		icon = '<i class="fa fa-' + icon;

		if ( classes ) {
			icon += ' ' + classes;
		}

		if ( title ) {
			icon += '" title="' + title;
		}

		icon += '"></i>';
		el.outerHTML = icon;
	};

	changeToIcon(
		document.querySelector( '.add-task' ),
		'plus-circle', 'Add Task', 'add-task'
	);

	changeToIcon(
		document.querySelector( '.left-sidebar img[alt="Content Pages"]' ),
		'list', 'Content Pages'
	);

	changeToIcon(
		document.querySelector( '.left-sidebar img[alt="Timetable"]' ),
		'clock-o', 'Timetable'
	);

	changeToIcon(
		document.querySelector( '.left-sidebar img[alt="Art Gallery"]' ),
		'camera', 'Art Gallery'
	);

	changeToIcon(
		document.querySelector( '.left-sidebar img[alt="Calendar"]' ),
		'calendar', 'Calendar'
	);

	changeToIcon(
		document.querySelector( '.left-sidebar img[alt="Report"]' ),
		'bar-chart-o', 'Report'
	);

	changeToIcon(
		document.querySelector( '#sign-out-btn img' ),
		'power-off', 'Sign Out'
	);

}());

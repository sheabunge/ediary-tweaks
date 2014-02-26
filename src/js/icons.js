(function() {
	"use strict";

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

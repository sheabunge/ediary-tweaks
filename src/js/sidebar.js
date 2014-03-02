
/**
 * Add titles to sidebar icons
 */

document.getElementById( 'btn-add-task' )
	.setAttribute( 'title', 'Add Task' );

document.querySelector( '.left-sidebar a[href="#content/school/toc"]' )
	.setAttribute( 'title', 'Content Pages' );

document.querySelector( '.left-sidebar a[href="#timetable"]' )
	.setAttribute( 'title', 'Timetable' );

document.querySelector( '.left-sidebar a[href="#art-gallery"]' )
	.setAttribute( 'title', 'Art Gallery' );

document.querySelector( '.left-sidebar a[href="#"]:not(#btn-add-task)' )
	.setAttribute( 'title', 'Calendar' );

document.querySelector( '.left-sidebar a[href="#report"]' )
	.setAttribute( 'title', 'Report' );

document.querySelector( '#sign-out-btn a' )
	.setAttribute( 'title', 'Sign Out' );

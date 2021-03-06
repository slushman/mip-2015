/**
 * hide-search.js
 *
 * Handles toggling the hidden search bar.
 */
( function() {

	var search, page, button;

	search = document.getElementById( 'mip-search' );
	if ( ! search ) { return; }

	page = document.getElementById( 'page' );
	if ( ! page ) { return; }

	button = document.getElementsByClassName( 'search-button' )[0];
	if ( ! button ) { return; }

	search.setAttribute( 'aria-hidden', 'true' );

	button.onclick = function( e ) {

		e.preventDefault();

		if ( -1 !== search.className.indexOf( 'open' ) ) {

			search.className = search.className.replace( ' open', '' );
			search.setAttribute( 'aria-hidden', 'true' );

		} else {

			search.className += ' open';
			search.setAttribute( 'aria-hidden', 'false' );

		}

		if ( -1 !== page.className.indexOf( 'open' ) ) {

			page.className = page.className.replace( ' open', '' );

		} else {

			page.className += ' open';

		}

		if ( -1 !== button.className.indexOf( 'open' ) ) {

			button.className = button.className.replace( ' open', '' );

		} else {

			button.className += ' open';

		}

	};

} )();

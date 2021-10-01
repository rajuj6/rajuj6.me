// ui-mode reducer

const STORE_KEY = 'RAJUJ6DOTME_THEME';
const setModeInStore = ( value ) => {
	if ( window && window.localStorage && [ 'light', 'dark' ].includes( value ) ) {
		updateBodyClass( value );
		window.localStorage.setItem( STORE_KEY, value );
	}
};

export const getModeInStore = () => {
	let value = 'dark';
	if ( window && window.localStorage ) {
		value = window.localStorage.getItem( STORE_KEY );
	}
	updateBodyClass( value );
	return value;
};

const updateBodyClass = ( value ) => {
	const html = document.querySelector( 'html' );
	const body = document.querySelector( 'body' );
	if ( html && body ) {
		if ( 'light' === value ) {
			html.classList.remove( 'dark' );
			body.classList.remove( 'dark' );
		} else {
			html.classList.add( 'dark' );
			body.classList.add( 'dark' );
		}

	}
};

export const mode = ( state = getModeInStore(), action = {} ) => {
	const { type, payload } = action;

	switch( type ) {

		// set value
		case 'SET_UI_MODE': {
			setModeInStore( payload );
			return payload;
		}

		// default state
		default: {
			return state;
		}
	}
};

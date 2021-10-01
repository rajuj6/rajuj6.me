import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// app component view
import { ContactView } from './contact.view';

/**
 * @desc Contact component.
 */
export class Contact extends React.Component {
    constructor( props ) {
        super( props );

        // component state
        this.state = {};
    }

    // render
    render() {
        return (
            <ContactView />
        );
    }
}

// set display name
Contact.displayName = 'Contact';

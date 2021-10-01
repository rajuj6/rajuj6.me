import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// app component view
import { AboutView } from './about.view';

/**
 * @desc About component.
 */
export class About extends React.Component {
    constructor( props ) {
        super( props );

        // component state
        this.state = {};
    }

    // render
    render() {
        return (
            <AboutView />
        );
    }
}

// set display name
About.displayName = 'About';

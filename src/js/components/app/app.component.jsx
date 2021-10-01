import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// app component view
import { AppView } from './app.view';

// local dependencies
import { store } from 'store';

/**
 * @desc Entry component of the application single page application.
 */
export class App extends React.Component {
    constructor( props ) {
        super( props );

        // component state
        this.state = {};
    }

    // render
    render() {
        return (
            <Provider store={ store }>
                <Router>
                    <AppView />
                </Router>
            </Provider>
        );
    }
}

// set display name
App.displayName = 'App';
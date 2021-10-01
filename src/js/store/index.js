import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducers
import { projects as projectsReducer } from './reducers/projects';
import { posts as postsReducer } from './reducers/posts';

// combine reducers
const combinedReducers = combineReducers( {
    projects: projectsReducer,
    posts: postsReducer,
} );

// initial state
const initialState = {
    projects: [],
    posts: [],
};

/****************************************/

/**
 * @desc Global application Redux store.
 * @example
 * import { store } from 'store';
 */
export const store = createStore( combinedReducers, initialState, composeWithDevTools() );
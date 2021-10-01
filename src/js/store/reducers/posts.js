// posts reducer
export const posts = ( state = [], action = {} ) => {
    const { type, payload } = action;

    switch( type ) {

        // add items
        case 'ADD_POSTS': {
            return payload;
        }

        // default state
        default: {
            return state;
        }
    }
};
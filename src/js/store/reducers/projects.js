// projects reducer
export const projects = ( state = [], action = {} ) => {
    const { type, payload } = action;

    switch( type ) {

        // add items
        case 'ADD_PROJECTS': {
            return payload;
        }

        // default state
        default: {
            return state;
        }
    }
};
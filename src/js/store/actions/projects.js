/**
 * @desc Add projects to the store.
 * @example
 * import { addProjects } from 'store/actions/projects';
 */
export const addProjects = ( items = [] ) => {
    return {
        type: 'ADD_PROJECTS',
        payload: items,
    };
};
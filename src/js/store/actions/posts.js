/**
 * @desc Add projects to the store.
 * @example
 * import { addPosts } from 'store/actions/projects';
 */
export const addPosts = ( items = [] ) => {
    return {
        type: 'ADD_POSTS',
        payload: items,
    };
};
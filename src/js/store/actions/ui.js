/**
 * @desc Update ui dark/light mode to the store.
 * @example
 * import { updateUIMode } from 'store/actions/ui';
 */
export const updateUIMode = ( payload = '' ) => {
    return {
        type: 'SET_UI_MODE',
        payload,
    };
};

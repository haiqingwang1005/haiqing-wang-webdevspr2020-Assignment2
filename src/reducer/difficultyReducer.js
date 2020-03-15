/**
 * Reducer function that manages the difficulty select action and store.
 *
 * @param state the previous state
 * @param action action object
 * @returns {{save: number, choose: *}|{save: *, choose: number}|{save: number, choose: number}}
 */
export default function difficulty(state = {choose: 0, save: 0}, action) {
    if (action.type === 'CHOOSE_LEVEL') {
        return {
            choose: action.value,
            save: state.save
        };
    } else if (action.type === 'SAVE_LEVEL') {
        return {
            choose: state.choose,
            save: action.value
        };
    }
    return state;
};
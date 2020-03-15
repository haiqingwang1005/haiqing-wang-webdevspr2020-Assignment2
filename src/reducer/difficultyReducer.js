export default function difficulty(state = {choose: 1, save: 1}, action) {
    if (action.type === 'CHOOSE_LEVEL') {
        console.log(`choose level ${ action.value}`);
        return {
            choose: action.value,
            save: state.save
        };
    } else if (action.type === 'SAVE_LEVEL') {
        console.log(`save level ${ action.value}`);
        return {
            choose: state.choose,
            save: action.value
        };
    }
    return state;
};
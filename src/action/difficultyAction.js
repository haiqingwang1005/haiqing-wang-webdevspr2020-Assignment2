export default function chooseDifficulty(value, shouldSave = false) {
    if (shouldSave) {
        return {
            type: 'SAVE_LEVEL',
            value: value
        };
    }
    return {
        type: 'CHOOSE_LEVEL',
        value: value,
    };
};
export default function guessAWord (word) {
    return {
        type: 'GUESS',
        value: word
    };
}
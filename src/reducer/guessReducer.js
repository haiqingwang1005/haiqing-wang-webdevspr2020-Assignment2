import Game from "../service/game";

/**
 * Reducer function that manages the guess action and store.
 *
 * @param state the previous state.
 * @param action the action object
 * @returns {{correctness: *[], guessedWords: *[], success: boolean, lose: (boolean|boolean), targetWord: string, leftTimes: number}|{correctness: [], guessedWords: [], success: boolean, lose: boolean, targetWord: string, leftTimes: number}|{correctness: [], guessedWords: [], success: boolean, lose: boolean, targetWord: *, leftTimes: number}}
 *          return a next state
 */
export default function guess(state =
                                       {
                                           guessedWords: [],
                                           correctness: [],
                                           leftTimes: 0,
                                           targetWord: "",
                                           success: false,
                                           lose: false
                                       },
                                   action) {
    if (action.type === 'GUESS') {
        if (state.leftTimes === 0 || state.lose || state.success) {
            // The current state should be terminated!
            return {
                guessedWords: [],
                correctness: [],
                leftTimes: 4,
                targetWord: state.targetWord,
                success: false,
                lose: false
            };
        }

        const game = new Game();
        const word = action.value;
        const leftTimes = state.leftTimes - 1;
        const guessWords = [...state.guessedWords];
        guessWords.push(word);
        const success = (word === state.targetWord);
        const lose = !success && (leftTimes === 0);
        const correctness = [...state.correctness];
        correctness.push(game.getCorrectness(state.targetWord, word));
        return {
            guessedWords: guessWords,
            correctness: correctness,
            leftTimes: leftTimes,
            targetWord: state.targetWord,
            success: success,
            lose: lose
        };
    } else if (action.type === 'RESET') {
        return {
            guessedWords: [],
            correctness: [],
            leftTimes: 4,
            targetWord: action.value,
            success: false,
            lose: false
        };
    }
    return state;
};
import Game from "../service/game";

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
        if (state.leftTimes === 0 || state.success) {
            return {
                guessedWords: [],
                correctness: [],
                leftTimes: 4,
                targetWord: state.targetWord,
                success: false,
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
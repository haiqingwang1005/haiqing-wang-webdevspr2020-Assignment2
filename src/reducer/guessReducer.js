import Game from "../service/game";

export default function guess(state =
                                       {
                                           guessedWords: [],
                                           correctness: [],
                                           leftTimes: 0,
                                           targetWord: "",
                                           success: false
                                       },
                                   action) {
    if (action.type === 'GUESS') {
        if (state.leftTimes === 0 || state.success) {
            const next =  {
                guessedWords: [],
                correctness: [],
                leftTimes: 4,
                targetWord: state.targetWord,
                success: false
            };
            console.log(JSON.stringify(next));
            return next;
        }

        const game = new Game();
        const word = action.value;
        const leftTimes = state.leftTimes - 1;
        const guessWords = [...state.guessedWords];
        guessWords.push(word);
        const success = (word === state.targetWord);
        const correctness = [...state.correctness]
        correctness.push(game.getCorrectness(state.targetWord, word));
        let next = {
            guessedWords: guessWords,
            correctness: correctness,
            leftTimes: leftTimes,
            targetWord: state.targetWord,
            success: success
        };
        console.log(JSON.stringify(next));
        return next;
    } else if (action.type === 'RESET') {
        const next = {
            guessedWords: [],
            correctness: [],
            leftTimes: 4,
            targetWord: action.value,
            success: false
        };
        console.log(JSON.stringify(next));
        return next;
    }
    return state;
};
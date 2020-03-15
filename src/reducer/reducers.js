import sum from "./sumReducer"
import difficulty from "./difficultyReducer"
import guess from "./guessReducer"
import { combineReducers } from "redux"

export default combineReducers({
    sum: sum,
    difficulty: difficulty,
    guess: guess
});
import difficulty from "./difficultyReducer"
import guess from "./guessReducer"
import { combineReducers } from "redux"

export default combineReducers({
    difficulty: difficulty,
    guess: guess
});
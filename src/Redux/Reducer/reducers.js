import {combineReducers} from "redux";
import {reducerNowMovie, reducerTopMovie} from "./movie/app.js";

const reducers = combineReducers({
    topmovies: reducerTopMovie,
    nowmovies: reducerNowMovie
})

export default reducers;
import {combineReducers} from "redux";
import reducerMovie from "./movie/app.js";

const reducers = combineReducers({
    movies: reducerMovie
})

export default reducers;
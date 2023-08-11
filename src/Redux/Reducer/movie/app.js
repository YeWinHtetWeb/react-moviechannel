import {actionType} from "../../Action/action-type.js";

const initialState = {
    movies: [],
    movie: {}
};

const reducerMovie = (state = initialState, {type, payload})=>{
    switch (type){
        case actionType.FETCH_MOVIES:
            return { ...initialState, movies: payload};

        case actionType.SELECT_MOVIE:
            return { ...initialState, movie: payload};

        default:
            return state;
    }
}

export default reducerMovie;
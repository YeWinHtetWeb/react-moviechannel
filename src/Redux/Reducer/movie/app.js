import {actionType} from "../../Action/action-type.js";

const initialState1 = {
    tmovies: [],
    movie: {}
};

const initialState2 = {
    nmovies: [],
    movie: {}
};

export const reducerTopMovie = (state = initialState1, {type, payload})=>{
    if (type === actionType.TOP_RATED) {
        return {...initialState1, tmovies: payload};
    }else if (type === actionType.SELECT_MOVIE) {
        return {...initialState1, movie: payload};
    } else {
        return state;
    }
}

export const reducerNowMovie = (state = initialState2, {type, payload})=>{
    switch (type){
        case actionType.NOW_PLAYING:
            return { ...initialState2, nmovies: payload};

        case actionType.SELECT_MOVIE:
            return { ...initialState2, movie: payload};

        default:
            return state;
    }
}
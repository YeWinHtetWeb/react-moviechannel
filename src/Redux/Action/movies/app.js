import {actionType} from "../action-type.js";

export const fetchMovies = (movies)=>{
    console.log(movies)
    return{
        type: actionType.FETCH_MOVIES,
        payload: movies
    }
}

export const selectMovie = (movie)=>{
    return {
        type: actionType.SELECT_MOVIE,
        payload: movie
    }
}

export const removeSelectedMovie = (movie)=>{
    return {
        type: actionType.REMOVE_SELECTED_MOVIE,
        payload: movie
    }
}
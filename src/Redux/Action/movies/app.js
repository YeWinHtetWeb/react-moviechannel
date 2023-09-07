import {actionType} from "../action-type.js";

export const fetchNowMovies = (nmovies)=>{
    // console.log(nmovies)
    return {
        type: actionType.NOW_PLAYING,
        payload: nmovies
    }
}
// console.log(fetchMovies())
export const fetchTopMovies = (tmovies)=>{
    // console.log(tmovies)
    return {
        type: actionType.TOP_RATED,
        payload: tmovies
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
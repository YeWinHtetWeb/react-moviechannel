import MovieCard from "./MovieCard.jsx";
import {useDispatch, useSelector} from "react-redux";
import api, {apiKey} from "../api/apiResources.js";
import {fetchMovies} from "../Redux/Action/movies/app.js";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

const Premium = ()=>{

    const dispatch = useDispatch();
    const getMovies = async ()=>{
        const res = await api.get(`/movie/now_playing?api_key=${apiKey}`)
        // console.log(res.data.results)
        dispatch(fetchMovies(res.data.results))
    }

    useEffect(()=>{
        getMovies();
    },[])


    let movies = [];
    movies = useSelector((state)=>state.movies.movies);
    // console.log(movies)
    return (
        <>
            <div className="w-full bg-gradient-to-r from-cyan-300 to-violet-700 p-14">
                <h1 className="text-3xl font-bold text-black py-2">Premium</h1>
                <div className="w-full flex flex-wrap justify-evenly gap-y-10">
                    {
                        movies.length > 0 ? movies?.map((movie)=> <MovieCard key={movie.id} movie={movie} />) : <h1>No Movies</h1>
                    }
                    {/*<MovieCard/>*/}
                </div>
            </div>
        </>
    )
}

export default Premium;
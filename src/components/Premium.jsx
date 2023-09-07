import MovieCard from "./MovieCard.jsx";
import {useDispatch, useSelector} from "react-redux";
import api, {apiKey} from "../api/apiResources.js";
import {fetchNowMovies} from "../Redux/Action/movies/app.js";
import {useEffect, useState} from "react";
import {MutatingDots} from "react-loader-spinner";

const Premium = ()=>{

    const dispatch = useDispatch();
    const getMovies = async ()=>{
        const res = await api.get(`/movie/now_playing?api_key=${apiKey}`)
        dispatch(fetchNowMovies(res.data.results))
    }

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },500)
        getMovies();
    },[])


    const movies = useSelector((state)=>state.nowmovies.nmovies);

    return (
        <>
            <div className="w-full min-h-screen bg-gradient-to-r from-cyan-300 to-violet-700 p-14">
                <h1 className="text-3xl font-bold text-white py-2">Now Playing</h1>
                <div className="w-full flex flex-wrap justify-evenly gap-y-10">
                    {
                        loading ?

                            <div className="w-full h-screen flex justify-center items-center">
                                <MutatingDots
                                    height="100"
                                    width="100"
                                    color="#6d28d9"
                                    secondaryColor= '#67e8f9'
                                    radius='12.5'
                                    ariaLabel="mutating-dots-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                />
                            </div>

                            :

                            movies?.map((movie)=> <MovieCard key={movie.id} movie={movie} />)

                    }
                </div>
            </div>
        </>
    )
}

export default Premium;
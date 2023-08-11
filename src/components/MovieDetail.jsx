import {FaImdb} from "react-icons/fa6";
import {Rating} from "flowbite-react";
import {useParams} from "react-router-dom";
import api, {apiKey} from "../api/apiResources.js";
import {useEffect} from "react";
import {removeSelectedMovie, selectMovie} from "../Redux/Action/movies/app.js";
import {useDispatch, useSelector} from "react-redux";

const MovieDetail = ()=>{
    const {movieId} = useParams();
    console.log(movieId)

    const dispatch = useDispatch();

    const getMovieDetail = async ()=>{
        const res = await api.get(`/movie/${movieId}?api_key=${apiKey}`)
        // console.log(res.data)
        dispatch(selectMovie(res.data));
    }

    useEffect(()=>{
        if(movieId){
            getMovieDetail();
        }

        return ()=> dispatch(removeSelectedMovie({}))
    },[])

    const movieDetails = useSelector((state)=>state.movies.movie)
    console.log(movieDetails)
    const imgUrl = "https://image.tmdb.org/t/p/w500/" + movieDetails?.backdrop_path ;
    console.log(imgUrl)

    return (
        <>
            <div className="movieDetail-container w-full">
                <div className="w-full h-screen overflow-hidden bg-no-repeat bg-cover bg-center relative">
                    <div className={`w-full h-full bg-no-repeat bg-cover`} style={{backgroundImage:`url(${imgUrl})`}}>
                        <div className="filter absolute top-0 left-0 w-full h-full backdrop-blur-sm bg-gradient-to-t from-black from-20%"></div>
                    </div>
                    <div className="ms-[10%] px-12 flex gap-4 justify-center items-end absolute top-52 left-0 text-white">
                        <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt="" className="w-72 rounded-xl focus:block"/>
                        <div className="content space-y-3 mb-2">
                            <h1 className="text-3xl font-bold mb-8">{movieDetails.original_title}</h1>
                            <h1 className="text-sm">{movieDetails.runtime} mins</h1>
                            <div>
                                <Rating>
                                    <Rating.Star />
                                    <p className="ml-2 text-2xl font-bold text-white">
                                        {parseFloat(movieDetails.vote_average).toFixed(1)}
                                    </p>
                                    <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
                                    <FaImdb className="text-3xl text-yellow-300"/>
                                </Rating>
                            </div>
                            <h1 className="text-sm font-bold">{movieDetails.status}</h1>
                            <div className="flex items-center">

                                {
                                    movieDetails.genres?.map((g)=>
                                        // eslint-disable-next-line react/jsx-key
                                        <span className="px-5 me-4 border-2 border-white rounded-lg hover:bg-sky-800" key={g.id}>{g.name}</span>
                                    )
                                }

                            </div>
                            <p>
                                {movieDetails.overview}
                            </p>
                        </div>
                    </div>
                </div>
                {/*<div>*/}
                {/*    <h1>About</h1>*/}
                {/*    <div>*/}
                {/*        <div className="trailer"></div>*/}
                {/*        <div className="descriptions">*/}
                {/*            */}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </>
    )
}

export default MovieDetail;
import {AiFillStar} from 'react-icons/ai';
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MovieCard = ({movie})=>{

    // console.log(movie)

    return (
        <>

                <Link to={`/movie-detail/${movie.original_title}/${movie.id}`} className="w-96 lg:w-48 p-1 flex lg:block bg-black rounded-xl relative group shadow-custom overflow-hidden">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" className="w-32 lg:w-full h-full rounded-t-lg object-cover rounded-xl"/>
                    <div className="w-full h-full px-5 absolute top-0 left-0">
                        <div className="opacity-0 absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black from-5% group-hover:opacity-100 duration-700 "></div>
                        <div className="w-full p-3 absolute -bottom-32 left-0 group-hover:-bottom-0 text-gray-100 dark:text-white duration-500 delay-300">
                            <h5 className="text-lg mb-3 font-bold tracking-tight">
                                {/* eslint-disable-next-line */}
                                {movie.original_title}
                            </h5>
                            <div className="flex justify-between items-center">
                                <span className="flex justify-between items-center">
                                    <AiFillStar className="text-yellow-300" />
                                    <span className="block mx-1.5 h-1 w-1 rounded-full bg-gray-700"></span>
                                    {/* eslint-disable-next-line react/prop-types */}
                                    {movie.vote_average}
                                </span>
                                <span className="block">{movie.release_date}</span>
                            </div>
                        </div>
                    </div>
                </Link>
        </>
    )
}

export default MovieCard;
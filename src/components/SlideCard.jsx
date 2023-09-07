import {Link} from "react-router-dom";

const SlideCard = ({topmovie})=>{
    // console.log(topmovie)
    return (
        <>
            <div className="slide w-full h-full overflow-hidden relative">
                <img
                    src={`https://image.tmdb.org/t/p/original/${topmovie.backdrop_path}`}
                    alt="" className="w-full object-cover"/>
                <div className="overlay w-full h-full bg-black absolute top-0 left-0 opacity-50"></div>
                <div className="content w-2/3 absolute top-1/3 lg:top-1/2 left-16 text-white">
                    <h1 className="text-xl lg:text-6xl font-bold mb-5">{topmovie.original_title}</h1>
                    <p className="text-xs lg:text-sm mb-5 lg:mb-10">
                        {topmovie.overview.slice(0,120).concat("...")}
                    </p>
                    <Link to={`/movie-detail/:${topmovie.original_title}/${topmovie.id}`} className="text-xs lg:text-lg py-2 px-8 font-bold rounded border-2 hover:bg-violet-600 duration-500">Enter Detail</Link>
                </div>
            </div>
        </>
    )

}

export default SlideCard;
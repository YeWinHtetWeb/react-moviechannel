import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import api, {apiKey} from "../api/apiResources.js";
import {useEffect} from "react";
import SlideCard from "./SlideCard.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchTopMovies} from "../Redux/Action/movies/app.js";

const HeroSectionSlide = ()=>{
    const dispatch = useDispatch();
    const topRatedMovies = async ()=>{
        try {
            const res = await api.get(`/movie/top_rated?api_key=${apiKey}`)
            // console.log(res.data.results);
            dispatch(fetchTopMovies(res.data.results));
        }catch (error){
            console.log(error);
        }
    }

    const topSlideMovies = useSelector((state)=>state.topmovies.tmovies);
    // console.log(topSlideMovies)

    useEffect(()=>{
        topRatedMovies();
    },[])

    return (
        <>
            <section className="w-full lg:min-h-screen">
                <Splide
                    options={ {
                        type: "loop",
                        autoplay: true,
                        interval: 2000,
                } }>
                        {
                            topSlideMovies.length > 0 ?
                                topSlideMovies?.map(topmovie=>
                                        // eslint-disable-next-line react/jsx-key
                                <SplideSlide key={topmovie.id}>
                                    <SlideCard topmovie={topmovie} />
                                </SplideSlide>
                                )
                                :
                                <h1>Error</h1>
                        }
                </Splide>
            </section>
        </>
    )
}

export default HeroSectionSlide;
'use client';

import Premium from "../components/Premium.jsx";
import HeroSectionSlide from "../components/HeroSectionSlide.jsx";


const Home = ()=>{


    return (
        <>
            <section className='w-full overflow-x-hidden'>
                <HeroSectionSlide/>
                <Premium/>

            </section>
        </>
    )
}


export default Home;
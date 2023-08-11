import NavBar from "./layouts/NavBar.jsx";
import Home from "./layouts/Home.jsx";
import Foot from "./layouts/Foot.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from "./components/NotFound.jsx";
import MovieDetail from "./components/MovieDetail.jsx";


function App() {

  return (
    <>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path={'/'} element={<Home/>} />
                <Route path={'/home'} element={<Home/>} />
                <Route path={'/movie-detail/:movieId'} element={<MovieDetail/>} />

                <Route path='/*' element={<NotFound/>} />
            </Routes>
            <Foot/>
        </BrowserRouter>
    </>
  )
}

export default App

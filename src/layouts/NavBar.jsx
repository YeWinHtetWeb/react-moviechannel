import {Navbar} from "flowbite-react";
import {useNavigate} from "react-router-dom";
import SearchBar from "../components/SearchBar.jsx";
import {useEffect, useState} from "react";
import DarkSwitch from "../components/DarkSwitch.jsx";
'use client';

const NavBar = ()=>{
    const navigate = useNavigate();
    // const [scrollNav, setscrollNav] = useState(false);

    return (
        <>
            <Navbar
                
                className="bg-gray-900 w-full z-10 fixed"
            >
                <div  className="cursor-pointer">
                    <span onClick={()=>navigate('/')} className="self-center whitespace-nowrap text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-violet-700 font-semibold dark:text-white">
                      YWH-React-MovieChannel
                    </span>
                </div>
                <div className="flex md:order-2">

                    <SearchBar/>

                    <Navbar.Toggle />
                </div>
                {/* <Navbar.Collapse>
                    <Navbar.Link
                        active
                        href="#"
                    >
                        <p>
                            Home
                        </p>
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Services
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Pricing
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse> */}
            </Navbar>
        </>
    )
}

export default NavBar;
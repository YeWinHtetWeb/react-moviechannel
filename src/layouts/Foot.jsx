'use client';
// eslint-disable-next-line no-unused-vars
import React from "react";
import {Link} from "react-router-dom";

const Foot =()=> {
    return (


        <footer className="bg-gray-900">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-200 sm:text-center dark:text-gray-400">© 2023 <Link to={'/home'}
                                                                                          className="hover:underline">YWH-React-MovieChannel™</Link>. All Rights Reserved.
    </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-200 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>


    )
}

export default Foot;
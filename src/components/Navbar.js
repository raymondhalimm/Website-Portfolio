import React from "react";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const className = (menuOpen ? "" : "hidden") + " items-center justify-between w-full md:flex md:w-auto md:order-1";

  const toggleMenu = () => {
    
    setMenuOpen(!menuOpen);
  }

  const toggleButton = () => {

    setMenuOpen(false);
  }

  const toggleAboutMe = () => {

    scroll.scrollToTop();
    toggleButton();
  }

    return (

        <nav class="bg-zinc-800 fixed w-full z-20 top-0 start-0 ">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <span class="self-center text-xl md:text-2xl xl:text-3xl font-semibold whitespace-nowrap text-cyan-400">Raymond Halim</span>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button onClick={toggleMenu} data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                  <span class="sr-only">Open main menu</span>
                  <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                  </svg>
              </button>
            </div>
            <div class= {className} id="navbar-sticky">
              <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium xl:text-xl border border-gray-100 rounded-lg bg-zinc-800 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-zinc-800">
                <li>
                  <Link onClick={toggleAboutMe} >
                    <button class="block py-2 px-3 text-cyan-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                      About Me
                    </button>
                  </Link>
               
                  {/* <HashLink onClick={toggleAboutMe} class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Me</HashLink> */}
                </li>
                <li>
                  <Link onClick={toggleButton} activeClass="active" spy={true} smooth={true} to="projects" >
                    <button class="block py-2 px-3 text-cyan-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                      Projects  
                    </button>
                  </Link>
                
                  {/* <HashLink onClick={toggleMenu} smooth="true" to="#projects" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</HashLink> */}
                </li>
              </ul>
            </div>
          </div>
        </nav>

        
    );
}

export default Navbar;
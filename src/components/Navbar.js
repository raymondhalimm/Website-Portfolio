import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import cv from "../assets/CV.pdf";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [prevScrollpos, setScrollpos] = useState(window.scrollY);
  const [showTop, setShowTop] = useState(true);

  const className = (menuOpen ? "" : "hidden") + " items-center justify-between h-10 w-full md:flex md:w-auto md:order-1";

  useEffect(() => {

    const handleScroll = () => {

      const currentScrollpos = window.scrollY;
  
      if (prevScrollpos > currentScrollpos) {
        setShowTop(true);
      }
      else {
        setShowTop(false);
      }
  
      setScrollpos(currentScrollpos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);
  



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

        <nav class={` w-full fixed z-20 ${showTop ? 'translate-y-0' : 'translate-y-[-100%]'}  transition-transform duration-300 ease-in-out`}>
          <div class="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
            {/* <span class="self-center text-xl md:text-2xl xl:text-3xl font-semibold whitespace-nowrap text-cyan-400">Raymond Halim</span> */}
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button onClick={toggleMenu} data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-neutral-100 rounded-lg md:hidden hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                  <span class="sr-only">Open main menu</span>
                  <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                  </svg>
              </button>
            </div>
            <div class= {className} id="navbar-sticky">
              <ul class="flex flex-col p-4 bg-neutral-700 bg-opacity-90 md:bg-transparent md:p-0 mt-4 font-medium xl:text-xl border border-neutral-700 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                <li>
                  <Link onClick={toggleAboutMe} >
                    <button class="block py-2 px-3 text-cyan-400 rounded md:py-0.5 px-2 duration-300 hover:text-cyan-600 transform hover:-translate-y-1">
                      About Me
                    </button>
                  </Link>
              
                </li>
                <li>
                  <Link onClick={toggleButton} activeClass="active" spy={true} smooth={true} to="projects" >
                    <button class="block py-2 px-3 text-cyan-400 rounded md:py-0.5 px-2 duration-300 hover:text-cyan-600 transform hover:-translate-y-1">
                      Projects  
                    </button>
                  </Link>
                </li>
                <li>
                  <Link onClick={toggleButton} activeClass="active" spy={true} smooth={true} to="contact" >
                    <button class="block py-2 px-3 text-cyan-400 rounded md:py-0.5 px-2 duration-300 hover:text-cyan-600 transform hover:-translate-y-1">
                      Contact  
                    </button>
                  </Link>
                </li>
                <li>
                  {/* <a href={cv} target="_blank" rel="noreferrer">
                    <button class="block py-2 px-3 text-cyan-400 rounded border-[2px] border-cyan-400  md:py-0.5 px-2 transition-all hover:bg-cyan-600 hover:translate-x-[-4px] hover:translate-y-[-4px] duration-300 ">
                      Resume  
                    </button>
                  </a> */}
                </li>
              </ul>
            </div>
          </div>
        </nav>

        
    );
}

export default Navbar;
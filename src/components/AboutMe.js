import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link, animateScroll as scroll } from "react-scroll";
import devAss from "../assets/dev-ass.png";
import ccp from "../assets/ccp.png";
import dataEng from "../assets/dataeng.png";

function AboutMe() {
    return (
        <div>
            <div class="hidden sm:flex flex-col fixed bottom-0 left-[3%] h-[50%]  text-cyan-400 items-center">
                <ul class="flex flex-col justify-between w-[20px] lg:w-[25px] h-[60%]">
                    <li>
                        <a href= "https://www.linkedin.com/in/raymondhalimm/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon class="duration-300 hover:text-cyan-600 transform hover:-translate-y-1" icon={faLinkedin}/>
                        </a>
                    </li>
                    <li>
                        <a href= "https://www.instagram.com/raymondhalimm?igsh=MWk1dXUzaWtqZm45&utm_source=qr" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon class="duration-300 hover:text-cyan-600 transform hover:-translate-y-1" icon={faInstagram}/>
                        </a>
                    </li>
                    <li>
                        <a href= "https://github.com/raymondhalimm" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon class="duration-300 hover:text-cyan-600 transform hover:-translate-y-1" icon={faGithub}/>
                        </a>
                    </li>
                    <li>
                        <a href= "https://wa.me/6585069658" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon class="duration-300 hover:text-cyan-600 transform hover:-translate-y-1" icon={faWhatsapp}/>
                        </a>
                    </li>
                    <li>
                        <a href= "mailto:raymond.halim55@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon class="duration-300 hover:text-cyan-600 transform hover:-translate-y-1" icon={faEnvelope}/>
                        </a>
                    </li>
                </ul>
                <div class="h-[40%] w-0.5 mt-16 bg-cyan-400"></div>
            </div>
            <div className="pl-12 sm:pl-20 md:pl-32 lg:pl-52 xl:pl-[450px] 2xl:pl-[500px]">
                
                <div class="flex flex-col w-11/12 sm:w-10/12 md:w-3/4 lg:w-2/3 2xl:w-[600px] h-40 md:h-52 lg:h-80 xl:h-100 justify-around">
                    <div class="text-xs text-neutral-100 text-opacity-80 md:text-lg lg:text-xl xl:text-2xl bold font-mono">
                        - HELLO ! I'm
                    </div>
                    <div class="text-2xl text-neutral-100 md:text-4xl lg:text-5xl xl:text-6xl bold font-sans">
                        Raymond Halim
                    </div>
                    
                    <div class="mt-5 text-sm text-neutral-100 text-opacity-80 lg:text-base font-serif">
                        Certified cloud computing professional with a Bachelor’s degree in Computer Science (Big Data) from University of Wollongong. 
                        Experienced in managing and optimizing cloud infrastructure, with expertise in in applying machine learning frameworks, containerization and CI/CD tools. 
                        Proven track record of deploying scalable cloud solutions, demonstrating initiative and creative problem-solving skills 
                        while continuously evolving skillsets to stay ahead of emerging industry trends.
                    </div>
                    <div class="my-5 flex">
                        <a href= "https://www.credly.com/badges/b4061291-e865-460c-a674-b7fe0886f985/public_url" target="_blank" rel="noopener noreferrer">
                            <img src={ccp} class="w-20 md:w-24 xl:w-28 2xl:w-32 h-20 md:h-24 xl:h-28 2xl:h-32 transform hover:-translate-y-2 duration-300 hover:opacity-70" alt="AWS Certified Cloud Practicioner Badge"></img>
                        </a>
                        <a href= "https://www.credly.com/badges/b6092c27-8a97-46b3-980d-74bf5183ac16/public_url" target="_blank" rel="noopener noreferrer">
                            <img src={devAss} class="w-20 md:w-24 xl:w-28 2xl:w-32 h-20 md:h-24 xl:h-28 2xl:h-32 transform hover:-translate-y-2 duration-300 hover:opacity-70" alt="AWS Certified Developer - Associate Badge"></img>
                        </a>
                        <a href= "https://www.credly.com/badges/955b6a03-e7e0-41d4-9f78-3914edf70afb/public_url" target="_blank" rel="noopener noreferrer">
                            <img src={dataEng} class="w-20 md:w-24 xl:w-28 2xl:w-32 h-20 md:h-24 xl:h-28 2xl:h-32 transform hover:-translate-y-2 duration-300 hover:opacity-70" alt="AWS Certified Developer - Associate Badge"></img>
                        </a>
                    </div>
                    <div class="mt-10 text-[10px] sm:text-lg text-neutral-100 text-opacity-80 lg:text-xl font-mono">
                        <Link activeClass="active" spy={true} smooth={true} to="projects" >
                            <button class="block mx-auto text-cyan-400 rounded underline-hover">
                                TAKE A LOOK AT SOME PROJECTS I WORKED ON
                            </button>
                        </Link>
                        
                    </div>
                    

                    <div className="flex flex-wrap justify-between text-cyan-500 fa-lg md:text-2xl lg:text-4xl w-1/2 xl:w-1/2">
                        
                        
                        
                        
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
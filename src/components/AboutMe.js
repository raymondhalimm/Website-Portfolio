import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function AboutMe() {
    return (

        <div className="pl-5 md:pl-32 lg:pl-52 xl:pl-[450px]">
            <div class="flex flex-col border-2 border-black w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 h-40 md:h-52 lg:h-60 xl:h-80 justify-around">
                <div class="text-xs md:text-lg lg:text-xl xl:text-2xl bold font-mono">
                    - HELLO !
                </div>
                <div class="text-2xl md:text-4xl lg:text-5xl xl:text-6xl bold font-sans">
                    I'm Raymond Halim
                </div>
                <div class="text-sm lg:text-base font-serif">
                    I am a Bachelor of Computer Science graduate from University of Wollongong - Singapore Institute of Management.
                </div>

                <div className="flex flex-wrap border border-black justify-between fa-lg md:text-2xl lg:text-4xl w-1/2 xl:w-1/2">
                    <a href= "https://www.linkedin.com/in/raymondhalimm/" >
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                    <a href= "https://www.instagram.com/raymondhalimm?igsh=MWk1dXUzaWtqZm45&utm_source=qr" >
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                    <a href= "https://github.com/raymondhalimm" >
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                    <a href= "mailto:raymond.halim55@gmail.com" >
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function AboutMe() {
    return (

        <div class="flex flex-col border-2 border-black w-3/5 h-60 justify-around">
            <div class="text-2xl bold font-mono">
                - HELLO !
            </div>
            <div class="text-7xl bold font-sans">
                I'm Raymond Halim
            </div>
            <div class="text-m font-serif">
                I am a Bachelor of Computer Science graduate from University of Wollongong - Singapore Institute of Management.
            </div>

            <div class="flex flex-wrap border border-black justify-between fa-2x w-1/2">
                <a href= "https://www.linkedin.com/in/raymond-halim-a4352522a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" >
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
    );
}

export default AboutMe;
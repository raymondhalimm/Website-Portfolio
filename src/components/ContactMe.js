import React from "react";

function ContactMe() {
    return (

        <div id="contact" class="flex justify-center">
            <div class="flex flex-col w-1/2 lg:w-2/5 2xl:w-1/3 h-40 md:h-52 lg:h-80 xl:h-100 justify-center items-center">
                <div class="text-4xl text-neutral-100 md:text-5xl xl:text-6xl bold font-serif">
                    Let's Connect
                </div>
                <div class="mt-10 text-sm text-center text-neutral-100 text-opacity-70 lg:text-base font-serif">
                    I’m actively exploring new opportunities, so feel free to reach out at any time. 
                    Whether you have an inquiry or just want to connect, drop me a message and I'll respond as soon as I can!
                </div>
                <a href="mailto:raymond.halim55@gmail.com" target="_blank" rel="noreferrer">
                    <button class="block py-2 px-3 text-cyan-400 text-xl sm:text-2xl lg:text-3xl mt-12 rounded border-[2px] border-cyan-400  md:py-3 px-4 transition-all hover:bg-cyan-600 hover:translate-x-[-4px] hover:translate-y-[-4px] duration-300 ">
                      Connect  
                    </button>
                </a>
                
            </div>

        </div>
    );

}
export default ContactMe;
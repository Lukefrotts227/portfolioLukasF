import React, { useState,  useEffect } from "react";
import { aboutMe } from '../data'; 
const Temp = './mario.png'; 

export default function About(){
    const [isVisible, setIsVisible] = useState(false); 
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 850); 


   
    
    useEffect(() => {
        setTimeout(() => {
          setIsVisible(true);
        }, 10);
      }, []);

      useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 850);
        }; 

        window.addEventListener('resize', handleResize); 

        return () => {
            window.removeEventListener('resize', handleResize);             
        }
    }, []); 




    
  return (
    <section id="about" class={`pt-8 flex flex-col ${isVisible ? "fadeInLeft" : ""}`}>
      
        {isMobile? (
        <div>
            <header class="bg-gray-800 py-4 flex items-center justify-center">
                <div class="container mx-auto text-center">
                    <h1 class="text-gray-50 font-semibold title-font-m">About Me</h1>
                </div>
            </header>
            <content> 
                <div class="text-center px-5">
                    <p class="text-gray-50 small-font-m">
                        {aboutMe}
                    </p> 
                </div> 
            </content>    
        </div>     

        ) : 
        (
        <div> 
            <header class="bg-gray-800 pb-12 pt-12 flex items-center justify-center">
                <div class="container mx-auto text-center"> 
                    <h1 class="text-gray-50 font-semibold title-font-d">About Me</h1>
                </div> 
            </header>

            <content class ="flex"> 
                <div class="inline-block pl-20">
                    <p class="text-gray-50 small-font-d">
                        {aboutMe}
                    </p>  
                </div>
                <div class = "inline-block px-28"> 
                    <div>
                        <img
                        src={Temp}
                        alt="Logo"
                        class="w-80 h-60 object-center rounded-full"
                        />
                    </div>

                </div>
            </content>
        </div>
        )}



      {/* Additional Content */}
      { isMobile ? (
    
       <div class={`container mx-auto flex justify-center`}>
            <div>
                <img
                src={Temp}
                alt="Logo"
                class="py-4 w-22 h-44 object-center rounded-full"
                />
            </div>
        </div>
      ):
      (
        <div>
        </div>
      )
    }   

    </section>
  );
}

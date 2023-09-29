import React, { useState,  useEffect } from "react";
import Temp from '../logo192.png'; 

export default function About(){
    const [isVisible, setIsVisible] = useState(false); 
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 


   
    
    useEffect(() => {
        setTimeout(() => {
          setIsVisible(true);
        }, 10);
      }, []);

      useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        }; 

        window.addEventListener('resize', handleResize); 

        return () => {
            window.removeEventListener('resize', handleResize);             
        }
    }, []); 




    
  return (
    <section class={`flex flex-col ${isVisible ? "fadeInLeft" : ""}`}>
      
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
                        My name is Lukas and I am a sophomore Computer Science major at Montclair State University.
                        I love coding in my free time and am always looking to create new projects.
                        To hone my skills, I have and will continue to attend hackathons.
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

            <content> 
                <div class="flex flex-wrap">
                    <p class="text-gray-50 small-font-d">
                        My name is Lukas and I am a sophomore Computer Science major at Montclair State University.
                        I love coding in my free time and am always looking to create new projects.
                        To hone my skills, I have and will continue to attend hackathons.
                    </p>  
                </div>
            </content>
        </div>
        )}



      {/* Additional Content */}
    
       <div class={`container mx-auto flex justify-center`}>
            <div>
                <img
                src={Temp}
                alt="Logo"
                class="py-4 w-44 h-44f object-center rounded-full"
                />
            </div>
        </div>

    </section>
  );}

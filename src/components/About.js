import React, { useState,  useEffect } from "react";
import Temp from '../logo192.png'; 
import "./more.css";

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



    return(
        <section class={`${isVisible ? "fadeInLeft" : ""}`}>
            <header class="bg-gray-800 py-4 flex items-center justify-center">
                <div class="container mx-auto text-center">
                    <h1 style={{fontSize: '3rem'}} class=" text-gray-50 font-semibold">About Me</h1>
                </div>
            </header> 

            <div class="container py-5 mx-auto text-center"> 
                <h3 class="text-gray-50 text-sm">Hello!</h3>
                <div class="max-w-md mx-auto flex justify-center items-center">

                    {isMobile?  (
                        <div class="p-4 rounded-lg">
                            <p class="text-gray-50 small-font-m">
                            My name is Lukas and I am a sophmore Computer Science major at Montclair State University. 
                            I love coding in my free time and am always looking to create new projects. 
                            </p>
                        </div> 
                    ) : 
                    (
                        <div>
                            <p class="text-gray-50 small-font-d">
                                My name is Lukas and I am a sophmore Computer Science major at Montclair State University. 
                                I love coding in my free time and am always looking to create new projects. 
                            </p>
                        </div>
                    )
                    }
                
                </div> 
            </div> 

            <div class="container mx-auto flex justify-center"> 
                    <img
                    src={Temp}
                    alt="Logo"
                    class="py-4 w-44 h-44f object-center rounded-full"
                    /> 
            </div>
        </section> 
        );
}

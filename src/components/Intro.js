import React, { useState,  useEffect } from "react";
import Temp from '../myRand.png'; 
//import { PersonalImages } from '../data';



export default function Intro(){
    const [isVisible, setIsVisible] = useState(false); 
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 

    
    useEffect(() => {
        // Use a setTimeout to delay the toggle of visibility to allow the component to render
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
        <div>
        {isMobile ? (
            <header class="bg-gray-800 flex items-center jusitfy-center">
                <div class={`container mx-auto py-3 mt-16 text-center bg-gray-800 ${isVisible ? "fadeInRight" : ""}`}> 
                    <div class="mx-auto flex justify-center"> 
                                <img
                                src={Temp}
                                alt="Logo"
                                class="w-20 h-20 object-center rounded-full"
                                /> 
                            </div>
                    <div>
                        <h1 class="text-gray-50 med-font-u">Hello, My name is Lukas</h1>
                        <h1 class="text-gray-50 med-font-u">Welcome to my Portfolio</h1> 
                    </div> 
                </div>        
            </header>

        )
        : 
        (
            <header class="bg-gray-800 flex items-start jusitfy-start">
                <div class={`flex container mx-auto py-3 mt-16 text-center bg-gray-800 ${isVisible ? "fadeInRight" : ""}`}> 
                    <div class="inline-block mx-auto justify-center"> 
                            <img
                            src={Temp}
                            alt="Logo"
                            class="w-32 h-32 object-center rounded-full mr-4"
                            /> 
                        </div>
                    <div class="inline-block">
                        <h1 class="text-gray-50 med-font-u">Hello, My name is Lukas</h1>
                        <h1 class="text-gray-50 med-font-u">Welcome to my Portfolio</h1> 
                    </div> 
                </div>        
            </header>
        )
        }

        </div>
    );
}
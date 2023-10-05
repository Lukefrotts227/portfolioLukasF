import React, { useState,  useEffect } from "react";
const Me = './picofme3.jpg'; 
//import { PersonalImages } from '../data';



export default function Intro(){
    const [isVisible, setIsVisible] = useState(false); 
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 850); 

    
    useEffect(() => {
        // Use a setTimeout to delay the toggle of visibility to allow the component to render
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


   

    return(
        <div>
        {isMobile ? (
            <header class="flex items-center jusitfy-center">
                <div class={`container mx-auto py-3 mt-10 text-center ${isVisible ? "fadeInRight" : ""}`}> 
                    <div class="mx-auto flex justify-center p-12"> 
                                <img
                                src={Me}
                                alt="Logo"
                                class="w-full h-full object-center rounded-full"
                                /> 
                            </div>
                    <div class = "quick-flicker">
                        <h1 class="text-gray-50 med-font-u">Hello, My name is Lukas</h1>
                        <h1 class="text-gray-50 med-font-u">Welcome to my Portfolio</h1> 
                    </div> 
                </div>        
            </header>

        )
        : 
        (
            <header class="">
                <div class={`flex container mx-auto py-6 mt-16 text-center ${isVisible ? "fadeInRight" : ""}`}> 
                    <div class="inline-block mx-auto"> 
                            <img
                            src={Me}
                            alt="Logo"
                            class="w-96 h-96 object-center rounded-full mr-4"
                            /> 
                        </div>
                    <div class="inline-block mx-auto pt-12 quick-flicker">
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
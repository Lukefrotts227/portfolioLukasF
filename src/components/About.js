import React, { useState,  useEffect } from "react";
import Temp from '../logo192.png'; 
import "./more.css";

export default function About(){
    const [isVisible, setIsVisible] = useState(false); 

    
    useEffect(() => {
        setTimeout(() => {
          setIsVisible(true);
        }, 10);
      }, []);

    return(
        <section class={`${isVisible ? "fadeInLeft" : ""}`}>
            <header class="bg-gray-800 py-4 flex items-center justify-center">
                <div class="container mx-auto text-center">
                    <h1 style={{fontSize: '3rem'}} class=" text-gray-50 font-semibold">About Me</h1>
                </div>
            </header> 

            <div class="container py-5 mx-auto text-center"> 
                <h3 style={{fontsize: '2rem'}} class="text-gray-50 mt-t">Hello!</h3>
                <p style={{fontsize : '1rem'}} class="text-gray-50 mt-t max-w-4">
                My name is Lukas and I am a sophmore Computer Science major at Montclair State University. 
                </p>
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

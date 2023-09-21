import React, { useState,  useEffect } from "react";

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
                    <h1 style={{fontSize: '2rem'}} class=" text-gray-50 font-semibold">About Me</h1>
                </div>
            </header> 

            <div class="container mx-auto text-center"> 
                <p class="text-gray-50 mt-t">Here is the beginning of my about</p>
            </div> 
        </section> 
        );
}

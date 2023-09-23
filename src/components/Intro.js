import React, { useState,  useEffect } from "react";
import Temp from '../myRand.png'; 
//import { PersonalImages } from '../data';


import "./more.css";

export default function Intro(){
    const [isVisible, setIsVisible] = useState(false); 

    
    useEffect(() => {
        // Use a setTimeout to delay the toggle of visibility to allow the component to render
        setTimeout(() => {
          setIsVisible(true);
        }, 10);
      }, []);
   

    return(
        <header class="bg-gray-800 py-3 flex items-center jusitfy-center">
            <div style={{fontSize: '3rem'}} class={`container mx-auto text-center bg-gray-800 ${isVisible ? "fadeInRight" : ""}`}> 
                <h1 class="text-gray-50">Hello, My name is Lukas</h1>
                <h1 class="text-gray-50">Welcome to my Portfolio</h1> 
                <div class="carousel  mx-auto flex justify-center"> 
                    <img
                    src={Temp}
                    alt="Logo"
                    class="w-20 h-20 object-center rounded-full"
                    /> 
                </div>
            </div>        
        </header>
    );
}
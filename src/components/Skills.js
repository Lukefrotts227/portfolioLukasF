import React, { useState, useEffect } from 'react'; 
import { skills } from '../data'; 

export default function Skills(){
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900); 
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 900);
        }; 

        window.addEventListener('resize', handleResize); 

        return () => {
            window.removeEventListener('resize', handleResize);             
        }
    }, []); 

    return(
        <div>
            <div class="flex flex-wrap p-6">
                {skills.map((skill) => (

                <div class ="p-2 sm:w-1/2 w-full h-full text-center">
                    <div class = "h-32 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded relative flex items-center border-4 border-blue-700"> 
                        <div class= "absolute inset-0 container text-center items-center p-6">
                            <div class={`h-full w-full`}>
                                <h1>{skill.name}</h1> 
                            </div>
                        </div>

                        <div class={`relative z-8 bg-black w-full h-full opacity-0 hover:opacity-100`}> 
                            more data
                        </div>
                    </div>
                </div>
                ))
                }           
            </div>
        </div>
        );
}
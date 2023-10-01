import React, { useState, useEffect } from 'react'; 
import { skills } from '../data'; 

export default function Skills(){
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 
    
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
            <div class="flex flex-wrap p-6">
                {skills.map((skill) => (

                <div class ="p-2 sm:w-1/2 w-full h-full text-center">
                    <div class = "bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded flex items-center border-4 border-green-500"> 
                        <div class= "container text-center items-center p-6">
                            <h1>{skill}</h1> 
                        </div>
                    </div>
                </div>
                ))
                }           
            </div>
        </div>
        );
}
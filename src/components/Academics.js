import React, { useState, useEffect } from 'react'; 
import { courses } from '../data'; 

export default function Academics(){
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
        <div class="flex flex-wrap p-8 justify-center items-center">
            {
                courses.map((course) => (
                    <div class="pb-5"> 
                        <div class= "p-3 sm:w-1/2 w-full h-full text-center bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded border-4 border-green-500"> 

                            <div class="pb-5"> 
                                <h1>{course.name}</h1> 
                            </div>

                            <div> 
                                <p>{course.description}</p>
                            </div>

                        </div>
                    </div>
                ))
            }
        </div>
        );
}
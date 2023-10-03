import React, { useState, useEffect } from 'react'; 
import { courses } from '../data'; 

export default function Academics(){
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
        <div class="flex flex-wrap p-8 justify-center items-center">
            {
                courses.map((course) => (
                    <div class={`pb-5 ${isMobile ? "h-full w-full" : "inline-block w-2/6 h-2/5 px-12"}`}> 
                        <div class= "w-full h-full text-center bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded border-4 border-blue-700"> 
                            <div class = {`${isMobile ? "" : "p-6"}`}>
                                <div class="pb-5"> 
                                    <h1>{course.name}</h1> 
                                </div>

                                <div> 
                                    <p>{course.description}</p>
                                </div>
                            </div> 

                        </div>
                    </div>
                ))
            }
        </div>
        );
}
import React, { useState, useEffect } from 'react'; 
import { courses } from '../data'; 

export default function Academics(){
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 850); 

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
        <div id="academics" class = "p-6 pt-4">
            <div class = "text-center title-font-d"> 
                <h1>Coursework</h1>
            </div>
            <div class={`flex flex-wrap justify-center items-center ${isMobile ? "p-2" : "p-8 border-4 border-opacity-50 border-blue-700"}`}>
            
                {
                    courses.map((course) => (
                        <div class={`pb-5 ${isMobile ? "h-full w-full" : "inline-block w-3/6 h-2/5 px-12"}`}> 
                            <div class= {`w-full h-full text-center bg-gradient-to-r from-gray-700 via-gray-600 to-gray-900 rounded border-4 border-blue-700 ${isMobile ? "p-6" : "p-14"}`}> 
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
        </div>
        );
}
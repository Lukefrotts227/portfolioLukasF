import React, { useState, useEffect } from 'react'; 

export default function Projects(){

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
        <div class="flex justify-center items-center">

            {isMobile ?  (
                <div class= "py-12">

                    <div class = "text-center h3-font-m py-4 px-4"> 
                        <h1>Here are my Big Projects</h1>
                    </div> 

                    <div class = "text-center h3-font-m py-2 px-4">
                        <h1>Here are some of my Smaller Projects</h1>
                    </div>

                </div> 


            ) : 

            (
                <div> 
                    My project
                </div> 
            )
            
            }
        </div>
        ); 

}
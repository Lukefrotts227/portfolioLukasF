import React, { useState, useEffect } from 'react'; 

import { projects, miniProjects } from '../data'; 

import Mario from '../mario.png'; 

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
                        <div class="pb-5">
                            <h1>Here are my Big Projects</h1>
                        </div>

                        <div> 
                            {projects.map((project) => (

                                <div class="">
                                    <div class= "text-center project-font-m pb-2"> 
                                        <h3>{project.name}</h3>
                                        <h4>{project.mini_description}</h4> 
                                    </div>

                                    <div class="relative flex justify-center items-center h-60 "> 
                                        <div class={`absolute inset-0`}>
                                            
                                            <img
                                            src={Mario}
                                            alt ={`image`}
                                            class ="w-full h-full object-cover object-center"
                                            />
                                        </div>

                                        <div class={`px-8 py-10 relative z-8 w-full h-full border-4 border-gray-600 bg-gray-900 opacity-0 hover:opacity-100`}> 


                                        </div>


                                    </div>

                                </div>

                            ))}

                        </div>
                        
                    </div> 
    
                    <div class = "text-center h4-font-m py-2 px-4">
                        <h4>Here are some of my Smaller Projects</h4>
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
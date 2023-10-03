import React, { useState, useEffect } from 'react'; 

import { projects, miniProjects } from '../data'; 

import Mario from '../mario.png'; 

export default function Projects(){

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200 ) 
    


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1200);
        }; 

        window.addEventListener('resize', handleResize); 

        return () => {
            window.removeEventListener('resize', handleResize);             
        }
    }, []); 

    return(
        <div class={`flex justify-center items-center`}>

            
                <div class= "py-12">

                    <div class = "text-center h3-font-m py-4 px-4"> 
                        <div class="pb-5">
                            <h1>Here are my Big Projects</h1>
                        </div>

                        <div class={`${isMobile ? "" : "flex-wrap"}`}> 
                            {projects.map((project) => (

                                <div class={`pb-6 ${isMobile ? "w-full h-auto" : " w-2/5 inline-block p-5 "}`}>
                                    <div class= "text-center project-font-m pb-2"> 
                                        <h3>{project.name}</h3>
                                        <h4>{project.mini_description}</h4> 
                                    </div>

                                    <div class={`relative flex justify-center items-center h-100`}> 
                                        <div class={`absolute inset-0`}>
                                            
                                            <img
                                            src={Mario}
                                            alt ={`image`}
                                            class ="w-full h-full object-cover object-center"
                                            />
                                        </div>

                                        <div class={`px-8 py-10 relative z-8 w-full h-full border-4 border-blue-700 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 opacity-0 hover:opacity-100`}> 
                                            <div class="text-center quite-small-font-m">
                                                <div class="pb-5">
                                                    <p>with: {project.how}</p>
                                                </div> 
                                                <div class="pb-4">
                                                    <p>{project.description}</p>
                                                </div>

                                                <div> 
                                                    <p class ="pb-2">Check it out</p>
                                                    <a href={project.where} target="_blank" rel="noopener noreferrer">
                                                        <button class="">
                                                            <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="50"
                                                            height="50"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="white"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            >
                                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                                <polyline points="12 5 19 12 12 19" />
                                                            </svg>                                                    
                                                        </button>
                                                    </a>
                                                </div>
                                            </div>


                                        </div>


                                    </div>

                                </div>

                            ))}

                        </div>
                        
                    </div> 
    
                    <div class = "text-center h4-font-m py-2 px-4">
                        <div class="pb-5">
                            <h4>Here are some of my Smaller Projects</h4>
                        </div> 
                        <div class ={`flex flex-wrap justify-center items-center ${isMobile ? "" : "px-36"}`}>
                        {
                            miniProjects.map((miniProject) => (
                                <div class={`p-3  ${isMobile ? "" : "inline-block small-font-d px-12"} sm:w-1/2 w-full h-full text-center bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded border-4 border-blue-700`}> 
                                    <div class= "pb-4">
                                        <h1>{miniProject.name}</h1> 
                                    </div>

                                    <div> 
                                        <h2>Built with: {miniProject.how}</h2> 
                                    </div>
                                    
                                    <div> 
                                        <p>{miniProject.description}</p> 
                                    </div> 

                                    <div> 
                                        <h1>Check it out:</h1> 
                                        <a href={miniProject.where} target="_blank" rel="noopener noreferrer">
                                            <button class="">
                                                <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="25"
                                                height="25"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                >
                                                    <line x1="5" y1="12" x2="19" y2="12" />
                                                    <polyline points="12 5 19 12 12 19" />
                                                </svg>                                                    
                                            </button>
                                        </a>

                                    </div>

                                </div> 
                            ))
                        }
                        </div>

                    </div>

                </div> 


           
        </div>
        ); 

}
import React, { useState, useEffect } from 'react'; 
import Arrow from './svgs/Arrow';
import { projects, miniProjects } from '../data'; 


export default function Projects(){

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 955 ) 
    const [isWide, setIsWide] = useState(window.innerWidth >= 599)


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 955);
            setIsWide(window.innerWidth >= 599)
        }; 

        window.addEventListener('resize', handleResize); 

        return () => {
            window.removeEventListener('resize', handleResize);             
        }
    }, []); 

    return(
        <div id="projects" class={`flex justify-center items-center pt-8`}>

            
                <div class= "py-12">
                    <div class= "big-title-font-d text-center">
                        <h1>Projects</h1> 
                    </div>

                    <div class = "text-center h3-font-m py-4 px-4"> 
                        <div class="pb-5">
                            <h1>Here are my Big Projects</h1>
                            <h2 class= {`${isMobile ? "small-font-m" : "small-font-d"}`}>Hover over them to see more</h2>
                        </div>

                        <div class={`${isMobile ? "" : "flex flex-wrap justify-center items-center"}`}> 
                            {projects.map((project) => (
                                
                                <div class={`pb-6 ${isMobile ? "sm:px-28 w-full h-auto" : " w-2/5 inline-block"}>`}>
                                    <div class = {`${isMobile ? "" : "p-12"}`}>
                                        <div class= "text-center project-font-m pb-2"> 
                                            <h3>{project.name}</h3>
                                        </div>
                                        <div class = "text-center small-font-m"> 
                                            <h4>{project.mini_description}</h4> 
                                        </div>

                                        <div class={`relative flex justify-center items-center h-100`}> 
                                            <div class={`absolute inset-0`}>
                                                
                                                <img
                                                src={project.image}
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
                                                                <Arrow right={true} height={"50"} width={"50"} color={"white"}/>
                                                           
                                                            </button>
                                                        </a>
                                                    </div>
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
                        <div class ={`${isMobile ? "px-12" : "px-36 flex flex-wrap justify-center items-center"}`}>
                        {
                            miniProjects.map((miniProject) => (
                                
                                <div class={`p-4 h-full text-center ${isMobile ? "w-full" : "inline-block w-3/6"}`}> 
                                    <div class={`text-center bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900  border-4 border-blue-700 ${isMobile ? "sm:px-28" : ""} `}>
                                        <div class= {`pb-4 text-center project-font-m`}>
                                            <h1>{miniProject.name}</h1> 
                                        </div>

                                        <div class={`px-5 pb-3 text-center new-font-u`}>  
                                            <h2>Built with: {miniProject.how}</h2> 
                                        </div>
                                        
                                        <div class={`px-6 pb-2 text-center small-font-d`}> 
                                            <p>{miniProject.description}</p> 
                                        </div> 

                                        <div class = "med-font-d"> 
                                            <h1>Check it out:</h1> 
                                            <a href={miniProject.where} target="_blank" rel="noopener noreferrer">
                                                <button class="">
                                                    <Arrow right={true} width={"50"} height={"50"} color={"white"} />                                                   
                                                </button>
                                            </a>

                                        </div>
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
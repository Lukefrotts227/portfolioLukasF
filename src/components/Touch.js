import React, { useState, useEffect } from 'react'; 

import Github from '../github-mark-white.png'; 
import Devpost from '../devpost.png'; 
import Linkedin from '../link.png'; 


export default function Touch(){
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 
    const [currentSlide, setCurrentSlide] = useState(999); 
    const [previousSlide, setPreviousSlide] = useState(-1); 

    const SlideCount = 3; 
    

    
    
    const toggleSlideLeft = () => {
        setPreviousSlide(currentSlide); 
        setCurrentSlide(currentSlide - 1); 
        
    }
    const toggleSlideRight = () =>{
        setPreviousSlide(currentSlide); 
        setCurrentSlide(currentSlide + 1); 
    }



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
        <section>
            {isMobile ?  (

                <div class="items-center"> 
                    <div>
                        <div class="text-center h3-font-m py-4 px-4"> 
                            <h3>Check me out</h3> 
                        </div> 

                        <div class="container mx-auto px-5">
                            <div> 
                                <div class="items-center text-center pb-8">
                                    <div class={`${currentSlide % SlideCount === 0 ? "block" : "hidden"}`}>
                                        <h1 class="pb-5">My GitHub</h1>
                                        
                                        <div class="flex justify-center items-center rounded-full">
                                            <a href="https://github.com/Lukefrotts227" target="_blank" rel="noopener noreferrer">
                                                <img
                                                src={Github}
                                                class="max-w-12 max-h-12"
                                                />
                                            </a>
                                        </div>
                                    
                                    </div>
                
                                    <div class={`${currentSlide % SlideCount === 1 ? "block" : "hidden"}`}>
                                        <h1 class="pb-5">My Devpost</h1>

                                        
                                        <div class="flex justify-center items-center rounded-full">
                                            <a href="https://devpost.com/ljfrotton" target="_blank" rel="noopener noreferrer">
                                                <img
                                                src={Devpost}
                                                class="max-w-12 max-h-12"
                                                />
                                            </a>
                                        </div>

                                    </div>

                                    <div class={`${currentSlide % SlideCount === 2 ? "block" : "hidden"}`}>
                                        <h1 class="pb-5">My LinkedIn</h1>
                                        
                                        <div class="flex justify-center items-center rounded-full">
                                            <a href="https://www.linkedin.com/in/lukas-frotton-07b79422b/" target="_blank" rel="noopener noreferrer">
                                                <img
                                                src={Linkedin}
                                                class="max-w-12 max-h-12"
                                                />
                                            </a>
                                        </div>

                                    </div> 
                                </div>

                                <div class="flex justify-center items-center mx-auto text-center small-font-m pb-8 bg-gray-800">
                                    <div onClick={toggleSlideLeft} class="inline-block pr-4">
                                        <button class="py-3 px-4 h-12 w-12 rounded-full bg-red-400">
                                            
                                        </button>
                                        
                                    </div>

                                    <div onClick={toggleSlideRight} class ="inline-block pl-4">
                                        <button class="py-3 px-4 h-12 w-12 rounded-full bg-red-400">
                                            
                                        </button>

                                    </div>

                                </div> 
                            </div>
                        </div>

                    </div>
                    <div class="text-center h4-font-m">  
                        <h1>Get in touch with me</h1>
                    </div> 

                    <div class="text-center h5-font-m px-4 py-4"> 
                        <h5>My main email</h5> <h5>ljfrotton@gmail.com</h5>
                        <br/> 
                        <h5>My school email</h5> <h5>frottonl1@montclair.edu</h5>
                    </div>



                </div>
            )
            :
            (
                <div>

                    <div> 
                        <h1>Get in touch with me</h1>
                    </div> 
                    
                    <div> 
                        <h2>My main email: ljfrotton@gmail.com</h2> 
                        <h2>My school email: frottonl1@montclair.edu</h2>
                    </div>

                </div> 
            )
            
            }
            
        </section>
    );
}
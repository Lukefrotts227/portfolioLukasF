import React, { useState, useEffect } from 'react'; 

const Github = './github-mark-white.png'; 
const Devpost = './devpost.png'; 
const Linkedin = './link.png'; 


export default function Touch(){
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 850); 
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
            setIsMobile(window.innerWidth <= 850);
        }; 

        window.addEventListener('resize', handleResize); 

        return () => {
            window.removeEventListener('resize', handleResize);             
        }
    }, []); 



    return(
        <section id="touch" class = "pt-8">
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
                                        <button class="">
                                            <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="50"
                                            height="50"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="black"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            >
                                                <line x1="19" y1="12" x2="5" y2="12" />
                                                <polyline points="12 5 5 12 12 19" />
                                            </svg>

                                            
                                        </button>
                                        
                                    </div>

                                    <div onClick={toggleSlideRight} class ="inline-block pl-4">
                                        <button class="">
                                            <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="50"
                                            height="50"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="black"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            >
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <polyline points="12 5 19 12 12 19" />
                                            </svg>

                                            
                                        </button>

                                    </div>

                                </div> 
                            </div>
                        </div>

                    </div>
                    <div class="text-center h1-font-m">  
                        <h1>Get in touch with me</h1>
                    </div> 

                    <div class="text-center h5-font-m px-4 py-4"> 
                        <h5>My main email</h5> <h5>ljfrotton@gmail.com</h5>
                        <br/> 
                        <h5>My school email</h5> <h5>frottonl1@montclair.edu</h5>
                        
                    </div>
                    <div> 
                        <h1>Resume</h1> 
                    </div>
                    <div>

                    </div>



                </div>
            )
            :
            (
                <div class = "p-5">
                    <div class = "flex pb-12 border-4 border-blue-900"> 
                        <div class="inline-block title-font-d pl-16 pt-12 pr-20 big-title-font-d"> 
                            <h1>Check me out</h1>
                        </div>

                        <div class="inline-block px-14">
                            <div class=""> 
                                <div class ="items-center text-center">
                                    <div class={`${currentSlide % SlideCount === 0 ? "block" : "hidden"}`}> 
                                        <h1 class="pb-5">My GitHub</h1>
                                        <div class="flex justify-center items-center rounded-full">
                                            <a href="https://github.com/Lukefrotts227" target="_blank" rel="noopener noreferrer">
                                                <img
                                                src={Github}
                                                class="h-28 w-28"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div> 

                                <div class ="items-center text-center pt-6">
                                    <div class={`${currentSlide % SlideCount === 1 ? "block" : "hidden"}`}> 
                                        <h1 class="pb-5">My Devpost</h1>
                                        <div class="flex justify-center items-center rounded-full">
                                            <a href="https://devpost.com/ljfrotton" target="_blank" rel="noopener noreferrer">
                                                <img
                                                src={Devpost}
                                                class="h-28 w-28"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div> 

                                <div class ="items-center text-center">
                                    <div class={`${currentSlide % SlideCount === 2 ? "block" : "hidden"}`}> 
                                        <h1 class="pb-5">My LinkedIn</h1>
                                        <div class="flex justify-center items-center rounded-full">
                                            <a href="https://www.linkedin.com/in/lukas-frotton-07b79422b/" target="_blank" rel="noopener noreferrer">
                                                <img
                                                src={Linkedin}
                                                class="h-28 w-28"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>  

                                <div class="flex justify-center items-center mx-auto text-center small-font-m py-4">
                                    <div onClick={toggleSlideLeft} class="inline-block pr-4">
                                        <button class="">
                                            <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="50"
                                            height="50"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="black"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            >
                                                <line x1="19" y1="12" x2="5" y2="12" />
                                                <polyline points="12 5 5 12 12 19" />
                                            </svg>

                                            
                                        </button>
                                        
                                    </div>

                                    <div onClick={toggleSlideRight} class ="inline-block pl-4">
                                        <button class="">
                                            <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="50"
                                            height="50"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="black"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            >
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <polyline points="12 5 19 12 12 19" />
                                            </svg>

                                            
                                        </button>

                                    </div>

                                </div>
                                

                            </div>

                        </div>

                        <div class = "inline-block pt-12 pl-11"> 
                            <h2>My main email: ljfrotton@gmail.com</h2> 
                            <h2>My school email: frottonl1@montclair.edu</h2>
                            <div> 
                                <h1> 
                                    Check out my Resume
                                </h1>
                            </div>
                            <div> 

                            </div>
                        </div>
                        
                        

                    </div>           

                </div> 
            )
            
            }
            
        </section>
    );
}
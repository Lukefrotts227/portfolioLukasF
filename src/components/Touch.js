import React, { useState, useEffect } from 'react'; 



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
                                        <h1>My GitHub</h1>

                                    </div>
                
                                    <div class={`${currentSlide % SlideCount === 1 ? "block" : "hidden"}`}>
                                        <h1>My Devpost</h1>

                                    </div>

                                    <div class={`${currentSlide % SlideCount === 2 ? "block" : "hidden"}`}>
                                        <h1>My LinkedIn</h1>

                                    </div> 
                                </div>

                                <div class="flex justify-center items-center mx-auto text-center small-font-m pb-8">
                                    <div onClick={toggleSlideLeft} class="inline-block bg-red-400 pr-12">
                                        <button class="py-3 px-4 h-4 w-8">
                                            
                                        </button>
                                        
                                    </div>

                                    <div onClick={toggleSlideRight} class ="inline-block bg-red-400 pl-12">
                                        <button class="py-3 px-4 h-4 w-8">
                                            
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
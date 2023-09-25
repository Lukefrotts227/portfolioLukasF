import React, { useState, useEffect } from 'react'; 

export default function Touch(){
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
        <section class="flex items-center justify-center">
            This is the stuff about me
        </section>
    );
}
import React, { useState, useEffect } from 'react'; 


export default function Whatnext() {

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
        <div class="text-center"> 
            Whats Next
        </div> 
    ); 

}
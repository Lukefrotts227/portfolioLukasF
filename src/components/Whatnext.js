import React, { useState, useEffect } from 'react'; 


export default function Whatnext() {

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
        <div id="next" class="text-center pt-8"> 
            Whats Next
        </div> 
    ); 

}
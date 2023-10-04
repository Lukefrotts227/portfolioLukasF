import React, { useState, useEffect } from 'react'; 
import { next_description  } from '../data';


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
        <div id="next" class="py-8"> 

            <div class ={`text-center big-title-font-d`}>
                <h1>Whats Next?</h1>
            </div>

            <div class = {`text-center ${isMobile ? "med-font-m p-3" : "small-font-d p-12"}`}> 
                <p>
                    {next_description}
                </p>
            </div>

        </div> 
    ); 

}
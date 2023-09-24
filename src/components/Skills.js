import React, { useState, useEffect } from 'react'; 
import './more.css'; 

export default function Skills(){
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
            My Skills
        </div>
        );
}
import React, { useState, useEffect } from 'react'; 
import { Link } from "react-scroll";

export default function Navbar(){
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 700); 
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [duration, setDuration] = useState(333); 
    


    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 700);
        }; 

        window.addEventListener('resize', handleResize); 

        return () => {
            window.removeEventListener('resize', handleResize);             
        }
    }, []); 



    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
      };



    return(
        <nav class={`fixed top-0 left-0 w-full ${
             'bg-gradient-to-r from-gray-600 via-blue-800 to-gray-900'
          }`}
          style={{ zIndex: isMobile ? 2 : 1 }}>   
            
                    {isMobile ? (
                        
                        <div class={`relative text-center mx-auto md:hidden ${mobileMenuOpen ? 'mobile-dropdown-enter' : 'mobile-dropdown-exit'} `}>

                                <div class={`text-center py-4 ${mobileMenuOpen ? 'mobile-dropdown-text-enter' : 'mobile-dropdown-text-exit'}`}>    
                  
                                    <a class="block text-white hover:text-gray-300 my-2">
                                        <Link
                                        to="about"
                                        smooth={true}
                                        duration={duration}
                                        >
                                            About
                                        </Link>
                                    </a>
                                    <a class="block text-white hover:text-gray-300 my-2">
                                        <Link
                                        to="touch"
                                        smooth={true}
                                        duration={duration}> 
                                            Get in Touch
                                        </Link>
                                    </a>
                                    <a class="block text-white hover:text-gray-300 my-2">
                                        <Link
                                        to="projects"
                                        smooth={true}
                                        duration={duration}
                                        >
                                            Projects
                                        </Link>
                                    </a>
                                    <a class="block text-white hover:text-gray-300 my-2">
                                        <Link
                                            to="skills"
                                            smooth={true}
                                            duration={duration}
                                            >
                                                Skills
                                        </Link>
                                    </a>
                                    <a class="block text-white hover:text-gray-300 my-2">
                                        <Link
                                            to="academics"
                                            smooth={true}
                                            duration={duration}
                                            >
                                                Academics
                                        </Link>
                                    </a>
                                    <a class="block text-white hover:text-gray-300 my-2">
                                        <Link
                                            to="next"
                                            smooth={true}
                                            duration={duration}
                                            >
                                                Whats Next?
                                        </Link>
                                    </a>

                                </div> 
                            
                        </div>
                    
                    ): (
                    <div class="container text-center mx-auto py-4">
                        <div class="flex justify-center items-center mx-auto">
                            <div class="md:flex space-x-8 text-xl"> 
                                <a class="text-white hover:text-gray-300">
                                    <Link
                                    to="about"
                                    smooth={true}
                                    duration={duration}
                                    >
                                        About
                                    </Link>
                                </a>
                                <a class="text-white hover:text-gray-300">
                                    <Link
                                    to="touch"
                                    smooth={true}
                                    duration={duration}>
                                        Get in Touch
                                    </Link>
                                </a>
                                <a class="text-white hover:text-gray-300">
                                    <Link
                                    to="projects"
                                    smooth="true"
                                    duration={duration}
                                    >
                                        Projects
                                    </Link>
                                    </a>
                                <a class="text-white hover:text-gray-300">
                                    <Link
                                        to="skills"
                                        smooth="true"
                                        duration = {duration}
                                        >
                                            Skills
                                        </Link>
                                 </a>
                                <a class="text-white hover:text-gray-300">
                                    <Link
                                        to="academics"
                                        smooth="true"
                                        duration = {duration}
                                        >
                                        Academics
                                    </Link>
                                </a>
                                <a class ="text-white hover:text-gray-300">
                                <Link
                                    to="next"
                                    smooth="true"
                                    duration = {duration}>
                                        Next
                                    </Link>
                                </a>
                            </div> 
                        </div> 
                    </div>

                    )}
                {isMobile && (
          // Mobile menu button
          <div class="md:hidden text-center">
            <button
              onClick={toggleMobileMenu}
              class={`navbar-mobile-button-font text-white hover:text-gray-300`}
            >
              {mobileMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        )}
            
        </nav>
    );  
}
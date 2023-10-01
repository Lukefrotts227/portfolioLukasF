import React, { useState, useEffect } from 'react'; 

export default function Navbar(){
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    


    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
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
             'bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900'
          }`}
          style={{ zIndex: isMobile ? 2 : 1 }}>   
            
                    {isMobile ? (
                        
                        <div class={`relative text-center mx-auto md:hidden ${mobileMenuOpen ? 'mobile-dropdown-enter' : 'mobile-dropdown-exit'} `}>

                                <div class={`text-center py-4 ${mobileMenuOpen ? 'mobile-dropdown-text-enter' : 'mobile-dropdown-text-exit'}`}>                      
                                    <a href="#About" class="block text-white hover:text-gray-300 my-2">
                                        About
                                    </a>
                                    <a href="#Touch" class="block text-white hover:text-gray-300 my-2">
                                        Get in Touch
                                    </a>
                                    <a href="#Projects" class="block text-white hover:text-gray-300 my-2">
                                        Projects
                                    </a>
                                    <a href="#Skills" class="block text-white hover:text-gray-300 my-2">
                                        Skills
                                    </a>
                                    <a href="#Academics" class="block text-white hover:text-gray-300 my-2">
                                        Academics
                                    </a>
                                    <a href="#Next" class="block text-white hover:text-gray-300 my-2">
                                        Whats Next?
                                    </a>

                                    <a href="#Resume" class="block text-white hover:text-gray-300 my-2"> 
                                        Resume
                                    </a> 
                                </div> 
                            
                        </div>
                    
                    ): (
                    <div class="container text-center mx-auto py-4">
                        <div class="flex justify-center items-center mx-auto">
                            <div class="md:flex space-x-8 text-xl"> 
                                <a href="#About" class="text-white hover:text-gray-300">About</a>
                                <a href="#InTouch" class="text-white hover:text-gray-300">Get in Touch</a>
                                <a href="#Projects" class="text-white hover:text-gray-300">Projects</a>
                                <a href="#Skills" class="text-white hover:text-gray-300">Skills</a>
                                <a href="#Academics" class="text-white hover:text-gray-300">Academics</a>
                                <a href="#Next" class ="text-white hover:text-gray-300">Whats Next?</a>
                                <a href="#Resume" class="text-white hover:text-gray-300">Resume</a>
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
import React, { useState, useEffect } from 'react'; 

export default function Navbar(){
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    //const [navbarVisible, setNavbarVisible] = useState(true);


    
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
          }`}>   
            <div class="container text-center mx-auto"> 
                    {isMobile ? (
                        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} py-4`}>  

                        <div className="text-center py-4">                      
                        <a href="#About" class="block text-white hover:text-gray-300 my-2">
                            About
                        </a>
                        <a href="#InTouch" class="block text-white hover:text-gray-300 my-2">
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
                        </div> 
                        </div>
                    ): (
                    <div class="flex justify-center items-center mx-auto">
                        <div class="md:flex space-x-4"> 
                            <a href="#About" class="text-white hover:text-gray-300 text-xl">About</a>
                            <a href="#InTouch" class="text-white hover:text-gray-300 text-xl">Get in Touch</a>
                            <a href="#Projects" class="text-white hover:text-gray-300 text-xl">Projects</a>
                            <a href="#Skills" class="text-white hover:text-gray-300 text-xl">Skills</a>
                            <a href="#Academics" class="text-white hover:text-gray-300 text-xl">Academics</a>
                            <a href="#Next" class ="text-white hover:text-gray-300 text-xl">Whats Next?</a>
                        </div> 
                    </div> 

                    )}
                {isMobile && (
          // Mobile menu button
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-gray-300"
            >
              {mobileMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        )}
            </div>
        </nav>
    );  
}
import React from 'react'; 

export default function Navbar(){


    return(
        <nav class="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">   
            <div class="container mx-auto"> 
                <div class="flex justify-between items-center"> 
                <a href="#About" class="text-white hover:text-gray-300">About</a>
                <a href="#InTouch" class="text-white hover:text-gray-300">Get in Touch with Me</a>
                <a href="#Projects" class="text-white hover:text-gray-300">Projects</a>
                <a href="#Skills" class="text-white hover:text-gray-300">Skills</a>
                <a href="#Academics" class="text-white hover:text-gray-300">Academics</a>
                <a href="#Next" class ="text-white hover:text-gray-300">Whats Next?</a>
                </div> 

            </div>
        </nav>
    );  
}
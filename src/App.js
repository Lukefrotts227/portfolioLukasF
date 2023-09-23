import React from "react";
import Intro from './components/Intro'
import About from './components/About';
import Navbar from './components/Navbar'; 
import Touch from './components/Touch'; 


export default function App() {
  return (
    <main class="h-full text-gray-50 bg-gray-800"> 
      <Navbar/>
      <Intro/>
      <About/>
      <Touch/>
    </main>
  );
}

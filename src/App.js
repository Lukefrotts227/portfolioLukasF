import React, { useState } from "react";
import Intro from './components/Intro'
import About from './components/About';
import Navbar from './components/Navbar'; 
import Touch from './components/Touch'; 
import Projects from "./components/Projects";
import Academics from "./components/Academics"; 
import Skills from './components/Skills'; 

export default function App() {




  return (
    <main class="cursor-default h-full text-gray-50 bg-gray-800"> 
      <Navbar/>
      <Intro/>
      <About/>
      <Touch/>
      <Projects/>
      <Skills/>
      <Academics/>
    </main>
  );
}

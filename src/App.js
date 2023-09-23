import React from "react";
import Intro from './components/Intro'
import About from './components/About';
import Navbar from './components/Navbar'; 

export default function App() {
  return (
    <main class="text-gray-50 bg-gray-800"> 
      <Navbar/>
      <Intro/>
      <About/>
    </main>
  );
}

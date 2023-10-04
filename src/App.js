import React from 'react'; 
import Intro from './components/Intro'
import About from './components/About';
import Navbar from './components/Navbar'; 
import Touch from './components/Touch'; 
import Projects from "./components/Projects";
import Academics from "./components/Academics"; 
import Skills from './components/Skills'; 
import Whatnext from "./components/Whatnext";

export default function App() {




  return (
    <main class="cursor-default h-full text-gray-50 bg-gray-800 py-11"> 
      <Navbar/>
      <Intro/>
      <About/>
      <Touch/>
      <Projects/>
      <Skills/>
      <Academics/>
      <Whatnext/>
    </main>
  );
}

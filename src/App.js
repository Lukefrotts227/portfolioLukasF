import React from 'react'; 
import Myback01 from './components/svgs/Myback01';
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
    <major  class = "bg-gray-800 h-full" style={{ position: 'relative', overflow: 'hidden' }}>
      <Myback01/>
      <main class="cursor-default h-full text-gray-50 py-11" style={{ position: 'relative', zIndex: 1 }}> 
        <Navbar/>
        <Intro/>
        <About/>
        <Touch/>
        <Projects/>
        <Skills/>
        <Academics/>
        <Whatnext/>
      </main>

    </major>
  );
}

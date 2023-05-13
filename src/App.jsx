import { useState } from 'react'
import reactLogo from './assets/react.svg'
import backGround from './assets/images/portfolio-BG.jpg'
import viteLogo from '/vite.svg'
import Navbar from './navbar'
import About from './about'
import Projects from './projects'
import Contact from './contact'
import './index.css'


function App() {
  return (
    <>
    <Navbar/>
    <About/>
    <Projects/>
    <Contact/>
    </>
 )
}

export default App

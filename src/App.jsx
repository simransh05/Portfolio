import React from 'react'
import Head from './Components/Head/Head'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <div>
      {/* sections */}
      <Navbar />
      <Head />
      <About />
      <Skills />
      <Projects />
      <Contact />

    </div>
  )
}

export default App

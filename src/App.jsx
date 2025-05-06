import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import Certificate from './components/Certificate'

const App = () => {
  return (
    <div>
        <Header/>
        <About/>
        <Skills/>
        <Project/>
        <Certificate/>
        <Contact/>
    </div>
  )
}

export default App
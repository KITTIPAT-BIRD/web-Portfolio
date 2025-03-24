import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
        <Header/>
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
    </div>
  )
}

export default App
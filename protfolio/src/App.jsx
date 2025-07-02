import React from 'react'
import Header from './components/Header'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Education />
        <Skills />
        <Experience />
        <Projects />
      </main>
    </div>
  )
}

export default App
import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

function App() {

  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add other pages later */}
      </Routes>
    </Router>
    </div>
  )
}

export default App

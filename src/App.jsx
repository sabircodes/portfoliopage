import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './pages/home/Home'
import Portfolio from './pages/portfolio/Portfolio'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'


function App() {
 

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='portfolio' element={<Portfolio/>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App

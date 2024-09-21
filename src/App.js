import React from 'react';
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import Navbar from './Component/Navabar/Navbar';
import "./App.css"
import Home from './Component/Home/Home';
import Error from './Component/Error/Error';
import About from './Component/About/About';
import Skills from './Component/Skills/Skills';
import Contact from './Component/Contact/Contact';
import MyResume from './Component/Myresume/Myresume'


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
  
    <Routes>
      
    <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/Myresume" element={<MyResume />} />
        <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<Error/>}/>
      
    

      </Routes>
    </BrowserRouter>
   
    
   
      
    </>
  )
}

export default App
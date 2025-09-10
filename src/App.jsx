import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Learn from './components/Learn'

function App() {
  return (
    <>
      <Learn />
      {/* <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
      </Routes> */}
    </>
  )
}

export default App

import Home from './pages/Home'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/HomeComponents/Footer'
import Partners from './components/Partener'
import About from './pages/About'






const App = () => {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <Partners /> */}
        <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  )
}

export default App


import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/HomeComponents/Hero'
import About from '../components/HomeComponents/About'
import Services from '../components/HomeComponents/Services/Services'
import WhyChooseUs from '../components/HomeComponents/WhyChooseUs'
import Process from '../components/HomeComponents/Process/Process'
import Testimonials from '../components/HomeComponents/Testimonials/Testimonials'
import Footer from '../components/HomeComponents/Footer'
import Partners from '../components/Partener'

function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <Partners />
      {/* <Footer /> */}
      {/* <div className="bg-red-500 text-white text-5xl p-10">
            Tailwind Test
      </div> */}
    
    </div>
  )
}

export default Home

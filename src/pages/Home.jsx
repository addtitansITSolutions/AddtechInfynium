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
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <div>
      <Helmet>
        {/* SEO */}
        <title>
          Addtech Infinium | Performance Marketing, Digital Marketing & Growth
          Solutions
        </title>

        <meta
          name="description"
          content="Addtech Infinium helps businesses grow through performance marketing, affiliate marketing, influencer marketing, digital marketing, e-commerce, and mobile marketing solutions."
        />

        <link
          rel="canonical"
          href="https://addtechinfinium.com/"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Addtech Infinium | Performance Marketing, Digital Marketing & Growth Solutions"
        />
        <meta
          property="og:description"
          content="Addtech Infinium helps businesses grow through performance marketing, affiliate marketing, influencer marketing, digital marketing, e-commerce, and mobile marketing solutions."
        />
        <meta
          property="og:url"
          content="https://addtechinfinium.com/"
        />
        <meta
          property="og:image"
          content="https://addtechinfinium.com/og-image.jpg"
        />
        <meta property="og:site_name" content="Addtech Infinium" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content="Addtech Infinium | Performance Marketing, Digital Marketing & Growth Solutions"
        />
        <meta
          name="twitter:description"
          content="Addtech Infinium helps businesses grow through performance marketing, affiliate marketing, influencer marketing, digital marketing, e-commerce, and mobile marketing solutions."
        />
        <meta
          name="twitter:image"
          content="https://addtechinfinium.com/og-image.jpg"
        />
      </Helmet>
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

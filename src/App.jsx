import Home from './pages/Home'
import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/HomeComponents/Footer'
import Partners from './components/Partener'
import About from './pages/About'
import AffiliateMarketing from './pages/AffiliateMarketing'
import PerformanceMarketing from './pages/PerformanceMarketing'
import DigitalMarketing from './pages/DigitalMarketing'
import SEO from './pages/SEO'
import InfluencerMarketing from './pages/InfluencerMarketing'
import EcommerceMarketing from './pages/EcommerceMarketing'
import MobileMarketing from './pages/MobileMarketing'
import PrivacyPolicy from './pages/PrivacyPolicy'
import GDPRCompliance from './pages/GDPRCompliance'
import ContactForm from './pages/ContactForm'






const App = () => {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/affiliate-marketing" element={<AffiliateMarketing />} />
          <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          {/* <Route path="/services/seo" element={<SEO />} /> */}
          {/* <Route path="/services/influencer-marketing" element={<InfluencerMarketing />} /> */}
          <Route path="/services/ecommerce-marketing" element={<EcommerceMarketing />} />
          <Route path="/services/mobile-services" element={<MobileMarketing />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/gdpr-compliance' element={<GDPRCompliance />} />
          <Route path='/contact' element={<ContactForm />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {/* <Partners /> */}
        <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  )
}

export default App


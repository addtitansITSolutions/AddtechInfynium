import React from 'react'
import SEOHero from '../components/SEOComponents/SEOHero'
import WhySEO from '../components/SEOComponents/WhySEO'
import SEOSolutions from '../components/SEOComponents/SEOSolutions'



function SEO() {
  return (
    <>
      <main className="overflow-hidden">
        <SEOHero />
        <WhySEO />
        <SEOSolutions />
      </main>
    </>
  )
}

export default SEO

import React from 'react'
import InfluencerHero from '../components/InfluencerMarketingComponents/InfluencerHero'
import InfluencerSolutions from '../components/InfluencerMarketingComponents/InfluencerSolutions'
import WhyInfluencer from '../components/InfluencerMarketingComponents/WhyInfluencer'



function InfluencerMarketing() {
  return (
    <>
      <main className="overflow-hidden">
        <InfluencerHero />
        <WhyInfluencer />
        <InfluencerSolutions />
      </main>
    </>
  )
}

export default InfluencerMarketing

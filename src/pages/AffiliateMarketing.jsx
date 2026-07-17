import React from 'react'
import AffiliateHero from '../components/AffiliateMarketingComponents/AffiliateHero'
import WhyAffiliateMarketing from '../components/AffiliateMarketingComponents/WhyAffiliateMarketing'
import AffiliateSolutions from '../components/AffiliateMarketingComponents/AffiliateSolutions'

function AffiliateMarketing() {
  return (
    <>
        <main className="overflow-hidden">
            <AffiliateHero />
            <WhyAffiliateMarketing />
            <AffiliateSolutions />
        </main>
    </>
  )
}

export default AffiliateMarketing

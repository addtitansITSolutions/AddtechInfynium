import React from 'react'

import DigitalHero from "../components/DigitalMarketingComponents/DigitalHero";
import DigitalSolutions from "../components/DigitalMarketingComponents/DigitalSolutions";
import WhyDigitalMarketing from "../components/DigitalMarketingComponents/WhyDigitalMarketing";


const DigitalMarketing = () => {
  return (
    <>
      <main className="overflow-hidden">

        <DigitalHero />

        <WhyDigitalMarketing />

        <DigitalSolutions />

      </main>
    </>
  );
};

export default DigitalMarketing;
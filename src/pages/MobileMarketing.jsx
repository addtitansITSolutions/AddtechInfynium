import React from 'react'
import MobileHero from '../components/MobileComponents/MobileHero';
import WhyMobileServices from '../components/MobileComponents/WhyMobileServices';
import MobileServicesSolutions from '../components/MobileComponents/MobileServicesSolutions';




const MobileMarketing = () => {
  return (
    <>
      <main className="overflow-hidden">
        <MobileHero />
        <WhyMobileServices />
        <MobileServicesSolutions />
        

      </main>
    </>
  );
};

export default MobileMarketing;
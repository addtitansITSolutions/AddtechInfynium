import React from 'react'
import EcommerceHero from '../components/EcommerceComponents/EcommerceHero';
import WhyEcommerce from '../components/EcommerceComponents/WhyEcommerce';
import EcommerceSolutions from '../components/EcommerceComponents/EcommerceSolutions';




const EcommerceMarketing = () => {
  return (
    <>
      <main className="overflow-hidden">
        <EcommerceHero />
        <WhyEcommerce />
        <EcommerceSolutions />
        

      </main>
    </>
  );
};

export default EcommerceMarketing;
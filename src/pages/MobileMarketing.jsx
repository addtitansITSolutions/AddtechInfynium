import React from "react";
import { Helmet } from "react-helmet-async";

import MobileHero from "../components/MobileComponents/MobileHero";
import WhyMobileServices from "../components/MobileComponents/WhyMobileServices";
import MobileServicesSolutions from "../components/MobileComponents/MobileServicesSolutions";

const MobileMarketing = () => {
  return (
    <>
    <Helmet>
      {/* SEO */}
      <title>
        Mobile Marketing Services | Addtech Infinium
      </title>

      <meta
        name="description"
        content="Reach and engage mobile-first audiences with Addtech Infinium's mobile marketing services. We create data-driven mobile campaigns that increase user engagement, conversions, and measurable business growth."
      />

      <link
        rel="canonical"
        href="https://addtechinfinium.com/services/mobile-marketing"
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Mobile Marketing Services | Addtech Infinium"
      />
      <meta
        property="og:description"
        content="Reach and engage mobile-first audiences with Addtech Infinium's mobile marketing services. We create data-driven mobile campaigns that increase user engagement, conversions, and measurable business growth."
      />
      <meta
        property="og:url"
        content="https://addtechinfinium.com/services/mobile-marketing"
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
        content="Mobile Marketing Services | Addtech Infinium"
      />
      <meta
        name="twitter:description"
        content="Reach and engage mobile-first audiences with Addtech Infinium's mobile marketing services. We create data-driven mobile campaigns that increase user engagement, conversions, and measurable business growth."
      />
      <meta
        name="twitter:image"
        content="https://addtechinfinium.com/og-image.jpg"
      />
    </Helmet>

      <main className="overflow-hidden">
        <MobileHero />
        <WhyMobileServices />
        <MobileServicesSolutions />
      </main>
    </>
  );
};

export default MobileMarketing;
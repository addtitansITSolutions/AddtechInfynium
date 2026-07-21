import React from "react";
import { Helmet } from "react-helmet-async";

import EcommerceHero from "../components/EcommerceComponents/EcommerceHero";
import WhyEcommerce from "../components/EcommerceComponents/WhyEcommerce";
import EcommerceSolutions from "../components/EcommerceComponents/EcommerceSolutions";

const EcommerceMarketing = () => {
  return (
    <>
      <Helmet>
        {/* SEO */}
        <title>
          E-Commerce Marketing Services | Addtech Infinium
        </title>

        <meta
          name="description"
          content="Grow your online store with Addtech Infinium's e-commerce marketing services. We help businesses increase sales through customer acquisition, store optimization, retention strategies, and performance analytics."
        />

        <link
          rel="canonical"
          href="https://addtechinfinium.com/services/ecommerce-marketing"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="E-Commerce Marketing Services | Addtech Infinium"
        />
        <meta
          property="og:description"
          content="Grow your online store with Addtech Infinium's e-commerce marketing services. We help businesses increase sales through customer acquisition, store optimization, retention strategies, and performance analytics."
        />
        <meta
          property="og:url"
          content="https://addtechinfinium.com/services/ecommerce-marketing"
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
          content="E-Commerce Marketing Services | Addtech Infinium"
        />
        <meta
          name="twitter:description"
          content="Grow your online store with Addtech Infinium's e-commerce marketing services. We help businesses increase sales through customer acquisition, store optimization, retention strategies, and performance analytics."
        />
        <meta
          name="twitter:image"
          content="https://addtechinfinium.com/og-image.jpg"
        />
      </Helmet>

      <main className="overflow-hidden">
        <EcommerceHero />

        <WhyEcommerce />

        <EcommerceSolutions />
      </main>
    </>
  );
};

export default EcommerceMarketing;
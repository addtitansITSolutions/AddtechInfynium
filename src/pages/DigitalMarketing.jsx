import React from "react";
import { Helmet } from "react-helmet-async";

import DigitalHero from "../components/DigitalMarketingComponents/DigitalHero";
import DigitalSolutions from "../components/DigitalMarketingComponents/DigitalSolutions";
import WhyDigitalMarketing from "../components/DigitalMarketingComponents/WhyDigitalMarketing";

const DigitalMarketing = () => {
  return (
    <>
      <Helmet>
        {/* SEO */}
        <title>
          Digital Marketing Services | Addtech Infinium
        </title>

        <meta
          name="description"
          content="Accelerate business growth with Addtech Infinium's digital marketing services. From SEO and paid advertising to conversion optimization and performance analytics, we create data-driven strategies that deliver measurable results."
        />

        <link
          rel="canonical"
          href="https://addtechinfinium.com/services/digital-marketing"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Digital Marketing Services | Addtech Infinium"
        />
        <meta
          property="og:description"
          content="Accelerate business growth with Addtech Infinium's digital marketing services. From SEO and paid advertising to conversion optimization and performance analytics, we create data-driven strategies that deliver measurable results."
        />
        <meta
          property="og:url"
          content="https://addtechinfinium.com/services/digital-marketing"
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
          content="Digital Marketing Services | Addtech Infinium"
        />
        <meta
          name="twitter:description"
          content="Accelerate business growth with Addtech Infinium's digital marketing services. From SEO and paid advertising to conversion optimization and performance analytics, we create data-driven strategies that deliver measurable results."
        />
        <meta
          name="twitter:image"
          content="https://addtechinfinium.com/og-image.jpg"
        />
      </Helmet>

      <main className="overflow-hidden">
        <DigitalHero />

        <WhyDigitalMarketing />

        <DigitalSolutions />
      </main>
    </>
  );
};

export default DigitalMarketing;
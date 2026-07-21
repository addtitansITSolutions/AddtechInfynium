import React from "react";
import { Helmet } from "react-helmet-async";

import PerformanceHero from "../components/PerformanceMarketingComponents/PerformanceHero";
import WhyPerformanceMarketing from "../components/PerformanceMarketingComponents/WhyPerformanceMarketing";
import PerformanceSolutions from "../components/PerformanceMarketingComponents/PerformanceSolutions";

function PerformanceMarketing() {
  return (
    <>
      <Helmet>
        {/* SEO */}
        <title>
          Performance Marketing Services | Addtech Infinium
        </title>

        <meta
          name="description"
          content="Drive measurable business growth with Addtech Infinium's performance marketing services. We create data-driven campaigns focused on customer acquisition, conversions, ROI, and scalable marketing success."
        />

        <link
          rel="canonical"
          href="https://addtechinfinium.com/services/performance-marketing"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Performance Marketing Services | Addtech Infinium"
        />
        <meta
          property="og:description"
          content="Drive measurable business growth with Addtech Infinium's performance marketing services. We create data-driven campaigns focused on customer acquisition, conversions, ROI, and scalable marketing success."
        />
        <meta
          property="og:url"
          content="https://addtechinfinium.com/services/performance-marketing"
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
          content="Performance Marketing Services | Addtech Infinium"
        />
        <meta
          name="twitter:description"
          content="Drive measurable business growth with Addtech Infinium's performance marketing services. We create data-driven campaigns focused on customer acquisition, conversions, ROI, and scalable marketing success."
        />
        <meta
          name="twitter:image"
          content="https://addtechinfinium.com/og-image.jpg"
        />
      </Helmet>

      <main className="overflow-hidden">
        <PerformanceHero />
        <WhyPerformanceMarketing />
        <PerformanceSolutions />
      </main>
    </>
  );
}

export default PerformanceMarketing;
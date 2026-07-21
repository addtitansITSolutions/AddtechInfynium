import React from "react";
import { Helmet } from "react-helmet-async";

import AffiliateHero from "../components/AffiliateMarketingComponents/AffiliateHero";
import WhyAffiliateMarketing from "../components/AffiliateMarketingComponents/WhyAffiliateMarketing";
import AffiliateSolutions from "../components/AffiliateMarketingComponents/AffiliateSolutions";

function AffiliateMarketing() {
  return (
    <>
      <Helmet>
        {/* SEO */}
        <title>
          Affiliate Marketing Services | Addtech Infinium
        </title>

        <meta
          name="description"
          content="Grow your business with Addtech Infinium's affiliate marketing services. We build performance-driven affiliate programs, manage publisher partnerships, optimize commissions, and deliver measurable ROI."
        />

        <link
          rel="canonical"
          href="https://addtechinfinium.com/services/affiliate-marketing"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Affiliate Marketing Services | Addtech Infinium"
        />
        <meta
          property="og:description"
          content="Grow your business with Addtech Infinium's affiliate marketing services. We build performance-driven affiliate programs, manage publisher partnerships, optimize commissions, and deliver measurable ROI."
        />
        <meta
          property="og:url"
          content="https://addtechinfinium.com/services/affiliate-marketing"
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
          content="Affiliate Marketing Services | Addtech Infinium"
        />
        <meta
          name="twitter:description"
          content="Grow your business with Addtech Infinium's affiliate marketing services. We build performance-driven affiliate programs, manage publisher partnerships, optimize commissions, and deliver measurable ROI."
        />
        <meta
          name="twitter:image"
          content="https://addtechinfinium.com/og-image.jpg"
        />
      </Helmet>

      <main className="overflow-hidden">
        <AffiliateHero />
        <WhyAffiliateMarketing />
        <AffiliateSolutions />
      </main>
    </>
  );
}

export default AffiliateMarketing;
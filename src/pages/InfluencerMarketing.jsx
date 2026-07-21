import React from "react";
import { Helmet } from "react-helmet-async";

import InfluencerHero from "../components/InfluencerMarketingComponents/InfluencerHero";
import InfluencerSolutions from "../components/InfluencerMarketingComponents/InfluencerSolutions";
import WhyInfluencer from "../components/InfluencerMarketingComponents/WhyInfluencer";

function InfluencerMarketing() {
  return (
    <>
    <Helmet>
      {/* SEO */}
      <title>
        Influencer Marketing Services | Addtech Infinium
      </title>

      <meta
        name="description"
        content="Partner with trusted creators through Addtech Infinium's influencer marketing services. We build data-driven campaigns, track conversions, optimize ROI, and help brands achieve measurable business growth."
      />

      <link
        rel="canonical"
        href="https://addtechinfinium.com/services/influencer-marketing"
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Influencer Marketing Services | Addtech Infinium"
      />
      <meta
        property="og:description"
        content="Partner with trusted creators through Addtech Infinium's influencer marketing services. We build data-driven campaigns, track conversions, optimize ROI, and help brands achieve measurable business growth."
      />
      <meta
        property="og:url"
        content="https://addtechinfinium.com/services/influencer-marketing"
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
        content="Influencer Marketing Services | Addtech Infinium"
      />
      <meta
        name="twitter:description"
        content="Partner with trusted creators through Addtech Infinium's influencer marketing services. We build data-driven campaigns, track conversions, optimize ROI, and help brands achieve measurable business growth."
      />
      <meta
        name="twitter:image"
        content="https://addtechinfinium.com/og-image.jpg"
      />
    </Helmet>

      <main className="overflow-hidden">
        <InfluencerHero />
        <WhyInfluencer />
        <InfluencerSolutions />
      </main>
    </>
  );
}

export default InfluencerMarketing;
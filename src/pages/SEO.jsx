import React from "react";
import { Helmet } from "react-helmet-async";

import SEOHero from "../components/SEOComponents/SEOHero";
import WhySEO from "../components/SEOComponents/WhySEO";
import SEOSolutions from "../components/SEOComponents/SEOSolutions";

function SEO() {
  return (
    <>
      <Helmet>
        {/* SEO */}
        <title>
          SEO Services | Addtech Infinium
        </title>

        <meta
          name="description"
          content="Improve your search visibility with Addtech Infinium's SEO services. We deliver technical SEO, on-page optimization, content strategies, and performance-driven solutions that help your business achieve sustainable organic growth."
        />

        <link
          rel="canonical"
          href="https://addtechinfinium.com/services/seo"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="SEO Services | Addtech Infinium"
        />
        <meta
          property="og:description"
          content="Improve your search visibility with Addtech Infinium's SEO services. We deliver technical SEO, on-page optimization, content strategies, and performance-driven solutions that help your business achieve sustainable organic growth."
        />
        <meta
          property="og:url"
          content="https://addtechinfinium.com/services/seo"
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
          content="SEO Services | Addtech Infinium"
        />
        <meta
          name="twitter:description"
          content="Improve your search visibility with Addtech Infinium's SEO services. We deliver technical SEO, on-page optimization, content strategies, and performance-driven solutions that help your business achieve sustainable organic growth."
        />
        <meta
          name="twitter:image"
          content="https://addtechinfinium.com/og-image.jpg"
        />
      </Helmet>

      <main className="overflow-hidden">
        <SEOHero />
        <WhySEO />
        <SEOSolutions />
      </main>
    </>
  );
}

export default SEO;
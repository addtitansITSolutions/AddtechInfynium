import React from "react";

import AboutHero from "../components/AboutComponents/AboutHero";
import OurStory from "../components/AboutComponents/OurStory";
import MissionVision from "../components/AboutComponents/MissionVision";
import WhyTrustUs from "../components/AboutComponents/WhyTrustUs";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        {/* SEO */}
        <title>
          About Addtech Infinium | Growth-Focused Marketing Partner
        </title>

        <meta
          name="description"
          content="Learn about Addtech Infinium and how we help businesses achieve measurable growth through performance-driven marketing strategies."
        />

        <link
          rel="canonical"
          href="https://addtechinfinium.com/about"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="About Addtech Infinium | Growth-Focused Marketing Partner"
        />
        <meta
          property="og:description"
          content="Learn about Addtech Infinium and how we help businesses achieve measurable growth through performance-driven marketing strategies."
        />
        <meta
          property="og:url"
          content="https://addtechinfinium.com/about"
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
          content="About Addtech Infinium | Growth-Focused Marketing Partner"
        />
        <meta
          name="twitter:description"
          content="Learn about Addtech Infinium and how we help businesses achieve measurable growth through performance-driven marketing strategies."
        />
        <meta
          name="twitter:image"
          content="https://addtechinfinium.com/og-image.jpg"
        />
      </Helmet>
      <main className="overflow-x-hidden">

        <AboutHero />

        <OurStory />

        <MissionVision />

        <WhyTrustUs />

      </main>
    </>
  );
};

export default About;
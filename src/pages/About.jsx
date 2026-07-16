import React from "react";

import AboutHero from "../components/AboutComponents/AboutHero";
import OurStory from "../components/AboutComponents/OurStory";
import MissionVision from "../components/AboutComponents/MissionVision";
import WhyTrustUs from "../components/AboutComponents/WhyTrustUs";

const About = () => {
  return (
    <>
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
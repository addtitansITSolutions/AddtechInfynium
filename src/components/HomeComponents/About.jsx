import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import aboutimg from "../../assets/aboutimg.webp";
import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 bg-[#f8fbfa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <img
              src={aboutimg}
              alt="Why Addtech Infinium"
              className="w-full rounded-3xl"
            />

          </motion.div>

          {/* Right Content */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <span className="inline-block bg-[#053d27]/10 text-[#053d27] px-4 py-2 rounded-full text-sm font-semibold mb-5">
              Why Addtech Infinium?
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Marketing Built for Meaningful Business Growth
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-8">
              Brands across industries are evolving at an explosive rate. In
              such an environment, isolated campaigns and vanity metrics are no
              longer enough for sustainable growth. Yet many agencies continue
              to measure success through content calendars, impressions, and
              reach in the name of brand visibility.
            </p>

            <p className="mt-5 text-gray-600 text-lg leading-8">
              At Addtech Infinium, we believe brands deserve more. We build
              connected marketing systems that drive customer acquisition,
              increase conversions, and create long-term business value. With
              our focus on scalable outcomes, every campaign is designed around
              the metrics that matter most—from lowering acquisition costs (CPA)
              to improving conversion rates and driving revenue. If you're
              looking for a marketing partner committed to measurable growth,
              we'd love to collaborate.
            </p>

            {/* <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-3xl font-bold text-[#053d27]">
                  Performance
                </h3>
                <p className="text-gray-600 mt-2">
                  Outcome-Focused Campaigns
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-3xl font-bold text-[#053d27]">
                  Growth
                </h3>
                <p className="text-gray-600 mt-2">
                  Long-Term Brand Value
                </p>
              </div>

            </div> */}

            <button className="mt-10 inline-flex items-center gap-2 bg-[#053d27] text-white px-8 py-4 rounded-full hover:scale-105 transition" onClick={() => navigate('/contact')}>

              Let's Collaborate

              <ArrowRight size={18} />

            </button>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
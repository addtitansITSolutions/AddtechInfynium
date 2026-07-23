import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
// import animationtop from "../../assets/animationtop.gif";
import animationtop from "../../assets/heroanimation.gif";
import aboutimg from "../../assets/aboutimg.webp";
import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-white bg-cover bg-center bg-no-repeat pt-32 pb-20 min-h-[100vh] flex items-center"
      style={{
      backgroundImage: "url('/HeroBG.png')",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <span className="inline-flex items-center rounded-full bg-[#053d27]/10 text-[#053d27] px-4 py-2 text-sm font-semibold mb-6">
              Marketing Built Around Scalable Outcomes
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Marketing Built for
              <span className="text-[#053d27]"> Scalable Outcomes </span>
            </h1>

            {/* <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl">
              At Addtech Infinium, great marketing doesn't just build awareness , it
              drives measurable results. We deliver performance-led solutions in
              performance marketing, digital marketing, influencer marketing, and
              e-Commerce, helping brands reach their target audience, optimize
              every touchpoint, and grow with confidence. From generating
              impressions to creating visible business impact, Addtech Infinium
              handholds your growth every step of the way.
            </p> */}
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl">
              Addtech Infinium helps brands achieve measurable growth through performance-driven digital, affiliate, influencer, and e-commerce marketing solutions.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <button className="bg-[#053d27] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300 flex items-center gap-2 cursor-pointer" onClick={() => navigate('/contact')}>
                Build Your Growth
                <ArrowRight size={20} />
              </button>

              {/* <button className="border border-[#053d27] text-[#053d27] px-8 py-4 rounded-full font-semibold hover:bg-[#053d27] hover:text-white transition duration-300">
                Explore Services
              </button> */}

            </div>

            <div className="mt-14 flex gap-12">

              <div>
                <h2 className="text-3xl font-bold text-[#053d27]">100+</h2>
                <p className="text-gray-600 mt-1">Successful Campaigns</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#053d27]">50+</h2>
                <p className="text-gray-600 mt-1">Growing Brands</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#053d27]">5+</h2>
                <p className="text-gray-600 mt-1">Marketing Expertise</p>
              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >

            <img
              // src={aboutimg}
              src="/HeroBanner.png"
              alt="Digital Marketing"
              className="w-full max-w-xl"
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
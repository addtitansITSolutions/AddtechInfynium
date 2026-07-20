import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-30 pb-10 lg:pt-32 lg:pb-20">

      {/* Background Blur */}

      <div className="absolute -top-32 -left-32 w-80 h-80  bg-[#053d27]/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96  bg-[#053d27]/5 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6 mb-10 lg:mb-0">

        <div className="grid lg:grid-cols-2 items-center gap-16 bg-[#edf7f2] rounded-xl lg:rounded-3xl  p-5 lg:p-10 shadow-lg">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            {/* Breadcrumb */}

            <div className="flex items-center gap-3 text-sm mb-6">

              <Link
                to="/"
                className="text-gray-500 hover:text-[#053d27] transition"
              >
                Home
              </Link>

              <span>/</span>

              <span className="text-[#053d27] font-semibold">
                About Us
              </span>

            </div>

            <span className="uppercase tracking-[4px] text-[#053d27] font-semibold">
              About Us
            </span>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mt-6">
              Built for
              <span className="text-[#053d27]"> Scalable Results</span>
            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl">
              The digital landscape evolves faster than we imagine. Customer
              expectations shift, platforms upgrade, and competition intensifies.
              Addtech Infinium helps businesses navigate this complexity with
              confidence through data-driven strategies across affiliate marketing,
              digital marketing, influencer marketing, and e-Commerce. We build
              campaigns around measurable targets and provide transparent weekly
              reports to track progress. Rather than chasing vanity metrics or
              short-term wins, we focus on building sustainable marketing
              ecosystems that transform your marketing investment into measurable
              ROI.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/contact"
                className="bg-[#053d27] text-white px-8 py-4 rounded-full flex items-center gap-2 hover:scale-105 transition"
              >
                Build Your Growth
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/services"
                className="border-2 border-[#053d27] text-[#053d27] px-8 py-4 rounded-full hover:bg-[#053d27] hover:text-white transition"
              >
                Explore Services
              </Link>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >

            {/* Decorative Circle */}

            {/* <div className="absolute w-[420px] h-[120px] rounded-full bg-[#edf7f2]" /> */}

            {/* Floating Image */}

            <motion.img
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              src="/About/addtitansteam.png"
              alt="About Addtech Infinium"
              className="relative z-10 w-full max-w-lg object-contain rounded-3xl shadow-lg"
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default AboutHero;
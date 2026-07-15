import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import animationtop from "../../assets/animationtop.gif";
import Lottie from "lottie-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <span className="inline-flex items-center rounded-full bg-[#053d27]/10 text-[#053d27] px-4 py-2 text-sm font-semibold mb-6">
              Transforming Ideas Into Digital Excellence
            </span>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-gray-900">
              Building
              <span className="text-[#053d27]"> Innovative </span>
              Software Solutions
            </h1>

            <p className="mt-8 text-lg leading-8 text-gray-600 max-w-xl">
              We help startups and enterprises build scalable web platforms,
              mobile applications, AI-powered solutions, cloud infrastructure,
              and custom software that accelerate business growth.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <button className="bg-[#053d27] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300 flex items-center gap-2">
                Start Your Project
                <ArrowRight size={20} />
              </button>

              <button className="border border-[#053d27] text-[#053d27] px-8 py-4 rounded-full font-semibold hover:bg-[#053d27] hover:text-white transition duration-300">
                Explore Services
              </button>

            </div>

            <div className="mt-14 flex gap-12">

              <div>
                <h2 className="text-3xl font-bold text-[#053d27]">100+</h2>
                <p className="text-gray-600 mt-1">Projects Delivered</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#053d27]">50+</h2>
                <p className="text-gray-600 mt-1">Happy Clients</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#053d27]">5+</h2>
                <p className="text-gray-600 mt-1">Years Experience</p>
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
              src={animationtop}
              alt="Software Development"
              className="w-full max-w-xl"
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
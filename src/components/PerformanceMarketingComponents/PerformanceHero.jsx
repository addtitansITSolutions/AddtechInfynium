import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PerformanceHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#053d27] via-[#0b5a3d] to-[#053d27] pt-36 pb-20">

      <div className="absolute -top-24 -left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#0f7a52]/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
          >

            <span className="inline-flex px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm">
              Performance Marketing
            </span>

            <h1 className="mt-8 text-5xl lg:text-6xl font-bold text-white leading-tight">
              Drive Measurable
              <span className="block text-[#9be3c5]">
                Results With Data-Driven Marketing
              </span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-gray-200">
              Maximize every advertising dollar through ROI-focused campaigns.
              We continuously optimize your marketing efforts to generate more
              leads, sales and business growth.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                to="/contact"
                className="bg-white text-[#053d27] px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition"
              >
                Get Started
                <ArrowRight size={18}/>
              </Link>

              <Link
                to="/portfolio"
                className="border border-white/30 px-8 py-4 rounded-full text-white hover:bg-white hover:text-[#053d27] transition"
              >
                View Case Studies
              </Link>

            </div>

            <div className="grid sm:grid-cols-3 gap-5 mt-12">

              {[
                "ROI Focused",
                "Real-Time Analytics",
                "Continuous Optimization",
              ].map(item=>(
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-[#9be3c5]" size={20}/>
                  <span className="text-white text-sm">{item}</span>
                </div>
              ))}

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity:0,x:40 }}
            animate={{ opacity:1,x:0 }}
            transition={{ duration:.7 }}
          >

            <img
              src="/services/performance-hero.jpg"
              alt=""
              className="rounded-[32px] h-[500px] w-full object-cover shadow-2xl"
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default PerformanceHero;
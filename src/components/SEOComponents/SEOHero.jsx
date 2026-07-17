import { motion } from "framer-motion";
import { ArrowRight, Search, TrendingUp, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const SEOHero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-36 pb-24">

      {/* Background */}

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#053d27]/5 via-transparent to-[#053d27]/10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
          >

            <span className="inline-flex items-center gap-2 bg-[#053d27]/10 text-[#053d27] px-5 py-2 rounded-full font-medium">
              <Search size={18} />
              Search Engine Optimization
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold mt-8 leading-tight text-gray-900">
              Rank Higher.
              <br />
              Get Found.
              <br />
              <span className="text-[#053d27]">
                Grow Organically.
              </span>
            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl">
              Increase your visibility on search engines with data-driven SEO
              strategies. From technical optimization to content and link
              building, we help your business attract quality traffic that
              converts.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#053d27] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
              >
                Get Free SEO Audit
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center px-8 py-4 rounded-full border border-[#053d27] text-[#053d27] hover:bg-[#053d27] hover:text-white transition"
              >
                View Success Stories
              </Link>

            </div>

            <div className="grid grid-cols-3 gap-5 mt-14">

              <div>

                <h3 className="text-3xl font-bold text-[#053d27]">
                  250+
                </h3>

                <p className="text-gray-600 mt-2 text-sm">
                  Keywords Ranked
                </p>

              </div>

              <div>

                <h3 className="text-3xl font-bold text-[#053d27]">
                  95%
                </h3>

                <p className="text-gray-600 mt-2 text-sm">
                  Organic Growth
                </p>

              </div>

              <div>

                <h3 className="text-3xl font-bold text-[#053d27]">
                  #1
                </h3>

                <p className="text-gray-600 mt-2 text-sm">
                  Ranking Focus
                </p>

              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            className="relative"
          >

            <img
              src="/services/influencer.png"
              alt="SEO Services"
              className="rounded-[32px] shadow-2xl w-full h-[520px] object-cover"
            />

            {/* Floating Card */}

            <div className="absolute top-8 -left-6 bg-white rounded-2xl shadow-xl p-5">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-[#053d27]/10 flex items-center justify-center">

                  <TrendingUp
                    className="text-[#053d27]"
                    size={24}
                  />

                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Organic Traffic
                  </p>

                  <h4 className="text-2xl font-bold text-[#053d27]">
                    +180%
                  </h4>

                </div>

              </div>

            </div>

            {/* Floating Card */}

            <div className="absolute bottom-8 right-6 bg-white rounded-2xl shadow-xl p-5">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-[#053d27]/10 flex items-center justify-center">

                  <Globe
                    className="text-[#053d27]"
                    size={24}
                  />

                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Search Visibility
                  </p>

                  <h4 className="text-2xl font-bold text-[#053d27]">
                    Top Rankings
                  </h4>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default SEOHero;
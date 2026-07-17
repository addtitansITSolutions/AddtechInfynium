import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  Users,
  Eye,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";

const InfluencerHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#053d27] via-[#075838] to-[#021f15] pt-36 pb-24">

      {/* Background Glow */}

      <div className="absolute -top-40 -left-32 w-[420px] h-[420px] rounded-full bg-white/10 blur-[140px]" />

      <div className="absolute -bottom-40 -right-24 w-[380px] h-[380px] rounded-full bg-green-300/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
          >

            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-white font-medium">

              <Instagram size={18} />

              Influencer Marketing

            </span>

            <h1 className="mt-8 text-5xl lg:text-6xl font-bold leading-tight text-white">

              Turn Creators
              <br />

              Into Powerful
              <br />

              <span className="text-green-300">

                Brand Ambassadors.

              </span>

            </h1>

            <p className="mt-8 text-lg leading-8 text-green-100 max-w-xl">

              Build authentic partnerships with influencers who connect
              with your audience. From creator discovery to campaign
              management, we help brands increase awareness,
              engagement and conversions.

            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#053d27] px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
              >

                Start Campaign

                <ArrowRight size={18} />

              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-[#053d27] transition"
              >

                View Portfolio

              </Link>

            </div>

            {/* Platforms */}

            <div className="flex flex-wrap gap-3 mt-12">

              {[
                "Instagram",
                "YouTube",
                "Facebook",
                "LinkedIn",
              ].map((item) => (

                <span
                  key={item}
                  className="px-5 py-2 rounded-full bg-white/10 text-white backdrop-blur-sm"
                >

                  {item}

                </span>

              ))}

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
              alt="Influencer Marketing"
              className="w-full max-h-[560px] object-cover rounded-[36px] shadow-2xl"
            />

            {/* Likes */}

            <div className="absolute top-8 -left-6 bg-white rounded-2xl shadow-xl p-5">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center">

                  <Heart
                    size={24}
                    className="text-pink-500"
                  />

                </div>

                <div>

                  <p className="text-sm text-gray-500">

                    Engagement

                  </p>

                  <h3 className="text-2xl font-bold">

                    125K+

                  </h3>

                </div>

              </div>

            </div>

            {/* Reach */}

            <div className="absolute bottom-28 -right-6 bg-white rounded-2xl shadow-xl p-5">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">

                  <Eye
                    size={24}
                    className="text-blue-600"
                  />

                </div>

                <div>

                  <p className="text-sm text-gray-500">

                    Campaign Reach

                  </p>

                  <h3 className="text-2xl font-bold">

                    2.4M+

                  </h3>

                </div>

              </div>

            </div>

            {/* Creators */}

            <div className="absolute bottom-6 left-10 bg-white rounded-2xl shadow-xl p-5">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">

                  <Users
                    size={24}
                    className="text-[#053d27]"
                  />

                </div>

                <div>

                  <p className="text-sm text-gray-500">

                    Creator Network

                  </p>

                  <h3 className="text-2xl font-bold">

                    500+

                  </h3>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default InfluencerHero;
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const MobileHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#053d27] via-[#0b5a3d] to-[#053d27] pt-36 pb-20">

      {/* Background Blur */}

      <div className="absolute -top-28 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0f7a52]/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-5 py-2 text-sm text-white tracking-wide">
              Mobile App Development
            </span>

            <h1 className="mt-8 text-5xl lg:text-6xl font-bold text-white leading-tight">
              Build Mobile Apps
              <span className="block text-[#9be3c5]">
                That Drive Business Growth
              </span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-gray-200 max-w-xl">
              From concept to launch, we build intuitive, scalable, and
              high-performance mobile applications that deliver seamless user
              experiences and help businesses engage, retain, and grow their
              customer base.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#053d27] px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
              >
                Build Your App
                <ArrowRight size={18} />
              </Link>

            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">

              {[
                "Android & iOS",
                "Cross-Platform Apps",
                "Scalable Solutions",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle
                    size={20}
                    className="text-[#9be3c5]"
                  />

                  <span className="text-white text-sm">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            <div className="rounded-[32px] overflow-hidden shadow-2xl border border-white/10">

              <img
                src="/Services/mobilehero.webp"
                alt="Mobile App Development"
                className="w-full h-[500px] object-cover"
              />

            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-8 -left-6 bg-white rounded-2xl shadow-xl px-6 py-5">

              <h4 className="text-3xl font-bold text-[#053d27]">
                100%
              </h4>

              <p className="text-gray-600 text-sm mt-1">
                Custom Built Solutions
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default MobileHero;
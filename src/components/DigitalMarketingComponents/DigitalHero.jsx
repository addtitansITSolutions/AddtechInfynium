import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const DigitalHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#053d27] via-[#0b5a3d] to-[#0a4d35] pt-36 pb-24">

      {/* Background Shapes */}

      <div className="absolute -top-24 -left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-green-400/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
          >

            <span className="inline-flex items-center px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm">
              Digital Marketing
            </span>

            <h1 className="mt-8 text-5xl lg:text-6xl font-bold text-white leading-tight">
              Grow Your Brand
              <span className="block text-[#9be3c5]">
                Across Every Digital Channel
              </span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-gray-200 max-w-xl">
              Build a powerful online presence with data-driven digital
              marketing strategies. From SEO and social media to paid
              advertising and content marketing, we help businesses reach,
              engage, and convert the right audience.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#053d27] px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
              >
                Get Free Consultation
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white hover:text-[#053d27] transition"
              >
                View Portfolio
              </Link>

            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-12">

              {[
                "SEO & Organic Growth",
                "Social Media Marketing",
                "Paid Advertising",
                "Analytics & Reporting",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="text-[#9be3c5]"
                  />

                  <span className="text-white">
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
            transition={{ duration: .7 }}
            className="relative"
          >

            <img
              src="/services/digital-marketing.png"
              alt="Digital Marketing"
              className="rounded-[30px] w-full h-[520px] object-cover shadow-2xl"
            />

            {/* Floating Card */}

            <div className="absolute -bottom-8 left-8 bg-white rounded-2xl shadow-xl p-6">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-[#053d27]/10 flex items-center justify-center">

                  <TrendingUp
                    className="text-[#053d27]"
                    size={28}
                  />

                </div>

                <div>

                  <h3 className="text-3xl font-bold text-[#053d27]">
                    +320%
                  </h3>

                  <p className="text-gray-600 text-sm">
                    Average Online Growth
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default DigitalHero;
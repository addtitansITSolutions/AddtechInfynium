import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Performance-based marketing with measurable ROI",
  "Expand your reach through trusted affiliate partners",
  "Only pay for successful conversions and sales",
  "Real-time campaign tracking and analytics",
  "Scalable strategies tailored to your business goals",
  "Continuous optimization for maximum revenue growth",
];

const WhyAffiliateMarketing = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >

            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200"
              alt="Affiliate Marketing Strategy"
              className="rounded-[30px] w-full h-[550px] object-cover shadow-xl"
            />

            {/* Floating Card */}

            <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl px-6 py-5">

              <h3 className="text-3xl font-bold text-[#053d27]">
                98%
              </h3>

              <p className="text-gray-600 text-sm mt-1">
                Client Satisfaction Rate
              </p>

            </div>

          </motion.div>

          {/* Right Content */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <span className="uppercase tracking-[4px] text-[#053d27] font-semibold">
              Why Affiliate Marketing
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold mt-5 leading-tight">
              Build Long-Term Growth Through Smart Partnerships
            </h2>

            <p className="mt-7 text-lg text-gray-600 leading-8">
              Affiliate marketing is one of the most effective digital
              strategies for generating qualified leads and increasing
              sales. By partnering with trusted publishers and creators,
              your brand reaches new audiences while paying only for
              measurable results.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              {benefits.map((item) => (

                <motion.div
                  key={item}
                  whileHover={{ y: -5 }}
                  className="flex gap-3 p-5 rounded-2xl bg-[#f7fbf9] border border-gray-100"
                >

                  <CheckCircle2
                    size={22}
                    className="text-[#053d27] flex-shrink-0 mt-1"
                  />

                  <p className="text-gray-700 leading-7">
                    {item}
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default WhyAffiliateMarketing;
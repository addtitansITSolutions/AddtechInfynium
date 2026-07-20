import { motion } from "framer-motion";
import {
  Search,
  Share2,
  BarChart3,
  Target,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Improve search rankings and attract quality organic traffic.",
  },
  {
    icon: Share2,
    title: "Social Media",
    description:
      "Build your brand and engage customers across social platforms.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Track campaigns with real-time insights and measurable KPIs.",
  },
  {
    icon: Target,
    title: "Targeted Advertising",
    description:
      "Reach the right audience with highly optimized ad campaigns.",
  },
];

const WhyDigitalMarketing = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            <span className="uppercase tracking-[4px] text-[#053d27] font-semibold">
              Why Digital Marketing
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold mt-5 leading-tight">
              Reach More Customers.
              <br />
              Generate More Growth.
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-8">
              Many digital marketers get sold on impressions, reach and engagement – vanity metrics that ultimately
              do not drive revenue. We build digital campaigns backwards from target CPA, so the budget spent is
              accountable to a number you actually care about. We treat your budget as a portfolio to optimize, not
              something to use and forget.
            </p>

            <div className="mt-10 space-y-5">

              {[
                "Increase online visibility",
                "Generate qualified leads",
                "Improve customer engagement",
                "Grow your brand consistently",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <div className="w-3 h-3 rounded-full bg-[#053d27]" />

                  <span className="text-gray-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            {/* <img
              src="/digitalmarketing/digitalmarketing.png"
              alt="Digital Growth"
              className="rounded-3xl h-[280px] w-full object-cover shadow-xl"
            /> */}

            <div className="grid sm:grid-cols-2 gap-5 mt-6">

              {features.map((feature) => {

                const Icon = feature.icon;

                return (

                  <motion.div
                    key={feature.title}
                    whileHover={{ y: -6 }}
                    className="bg-[#f8fbfa] rounded-2xl p-6 border border-gray-100"
                  >

                    <div className="w-12 h-12 rounded-xl bg-[#053d27]/10 flex items-center justify-center">

                      <Icon
                        size={24}
                        className="text-[#053d27]"
                      />

                    </div>

                    <h3 className="text-xl font-bold mt-5">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 mt-3 leading-7 text-sm">
                      {feature.description}
                    </p>

                  </motion.div>

                );

              })}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default WhyDigitalMarketing;
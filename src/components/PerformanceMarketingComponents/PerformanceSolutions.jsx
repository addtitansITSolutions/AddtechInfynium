import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: "250%", label: "ROI Growth" },
  { value: "5M+", label: "Monthly Reach" },
  { value: "98%", label: "Tracking Accuracy" },
  { value: "24/7", label: "Campaign Monitoring" },
];

const solutions = [
  "Google Ads Management",
  "Meta & Instagram Advertising",
  "Conversion Rate Optimization",
  "Audience Targeting",
  "Real-Time Analytics",
  "A/B Testing & Scaling",
];

const PerformanceSolutions = () => {
  return (
    <section className="py-24 bg-[#f8fbfa]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="uppercase tracking-[4px] text-[#053d27] font-semibold">
            Performance Marketing
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-5">
            Every Click.
            <br />
            Every Conversion.
            <br />
            Every Result.
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            We build data-driven advertising campaigns that maximize ROI,
            increase conversions and help businesses scale faster with
            measurable results.
          </p>

        </motion.div>

        {/* Stats */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

          {stats.map((item) => (

            <div
              key={item.label}
              className="bg-white rounded-3xl shadow-md p-8 text-center hover:-translate-y-2 transition"
            >

              <h3 className="text-4xl font-bold text-[#053d27]">
                {item.value}
              </h3>

              <p className="mt-3 text-gray-600">
                {item.label}
              </p>

            </div>

          ))}

        </div>

        {/* Bottom */}

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">

          <img
            src="/services/performance.png"
            alt="Performance Marketing"
            className="rounded-3xl w-full h-[420px] object-cover shadow-xl"
          />

          <div>

            <span className="uppercase tracking-[3px] text-[#053d27] font-semibold">
              Our Expertise
            </span>

            <h3 className="text-4xl font-bold mt-4">
              Campaigns Built To Deliver Results
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              From paid advertising to conversion optimization, we help brands
              reach the right audience, improve campaign performance, and
              generate sustainable business growth.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">

              {solutions.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2
                    size={20}
                    className="text-[#053d27]"
                  />

                  <span>{item}</span>

                </div>

              ))}

            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-10 bg-[#053d27] text-white px-8 py-4 rounded-full hover:bg-[#065235] transition"
            >
              Start Your Campaign
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default PerformanceSolutions;
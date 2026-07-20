import { motion } from "framer-motion";
import {
  Search,
  Users,
  Camera,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Creator Sourcing and Vetting",
    description:
      "Identify creators whose audience, values, and content align with your brand.",
  },
  {
    icon: Users,
    title: "Campaign Strategy",
    description:
      "Tailored campaign strategies that align with your marketing objectives and business goals.",
  },
  {
    icon: BarChart3,
    title: "Attribution Tracking",
    description:
      "Monitor campaign performance through links, codes, and pixels to ensure results align with business goals.",
  },
  {
    icon: Camera,
    title: "Content-to-Commerce Integration",
    description:
      "Creator content plugged directly into your e-commerce funnel.",
  },
  {
    icon: CheckCircle2,
    title: "ROI Reporting",
    description:
      "Monitor partnership performance to understand what's generating revenue and refine accordingly.",
  },
];

const WhyInfluencer = () => {
  return (
    <section className="py-24 bg-[#f8fbfa]">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="uppercase tracking-[4px] text-[#053d27] font-semibold">
            Campaign Journey
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-5">
            From Creator Discovery
            <br />
            To Measurable Results
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Every influencer campaign follows a structured process to ensure
            authentic collaborations, maximum engagement and measurable business
            growth.
          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative mt-20">

          {/* Vertical Line */}

          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#053d27]/15 -translate-x-1/2"></div>

          <div className="space-y-12">

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (

                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: .5,
                    delay: index * .08,
                  }}
                  className={`grid lg:grid-cols-2 gap-10 items-center ${
                    index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >

                  <div>

                    <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">

                      <div className="w-14 h-14 rounded-2xl bg-[#053d27]/10 flex items-center justify-center">

                        <Icon
                          size={28}
                          className="text-[#053d27]"
                        />

                      </div>

                      <h3 className="text-2xl font-bold mt-6">
                        {step.title}
                      </h3>

                      <p className="text-gray-600 mt-4 leading-7">
                        {step.description}
                      </p>

                    </div>

                  </div>

                  {/* Center Circle */}

                  <div className="hidden lg:flex justify-center items-center">

                  <div className="w-20 h-20 rounded-full bg-white shadow-lg border border-[#053d27]/15 flex items-center justify-center">

                    <span className="text-3xl font-bold text-[#053d27]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                </div>

                </motion.div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
};

export default WhyInfluencer;
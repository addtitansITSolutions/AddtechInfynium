import { motion } from "framer-motion";
import {
  Smartphone,
  Layers,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Custom App Development",
    description:
      "Native and cross-platform mobile apps tailored to your business needs.",
  },
  {
    icon: Layers,
    title: "Modern UI/UX",
    description:
      "Beautiful, intuitive interfaces designed for seamless user experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Scalable",
    description:
      "Built with secure architecture and scalable technologies for long-term growth.",
  },
  {
    icon: RefreshCw,
    title: "Support & Maintenance",
    description:
      "Ongoing updates, bug fixes, and performance optimization after launch.",
  },
];

const WhyMobileServices = () => {
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
            Why Choose Us
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-5">
            Mobile Apps Built
            <br />
            For Business Growth
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            We create fast, secure, and scalable mobile applications that help
            businesses engage customers, improve operations, and accelerate
            digital growth.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#053d27]/10 flex items-center justify-center">
                  <Icon size={28} className="text-[#053d27]" />
                </div>

                <h3 className="text-xl font-semibold mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {item.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default WhyMobileServices;
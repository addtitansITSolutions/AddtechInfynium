import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Android & iOS App Development",
  "Cross-Platform Solutions",
  "Custom UI/UX Design",
  "API & Backend Integration",
  "App Testing & Quality Assurance",
  "Maintenance & Feature Enhancements",
];

const MobileServicesSolutions = () => {
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
          >
            <img
              src="/Services/mobile-solution.webp"
              alt="Mobile App Development"
              className="rounded-3xl shadow-lg w-full"
            />
          </motion.div>

          {/* Right Content */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="uppercase tracking-[4px] text-[#053d27] font-semibold">
              Our Solutions
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold mt-5 leading-tight">
              Mobile Solutions
              <br />
              Built Around Your Business
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              We develop secure, scalable, and user-friendly mobile
              applications that help businesses improve customer engagement,
              streamline operations, and drive long-term growth.
            </p>

            <div className="mt-10 space-y-5">

              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2
                    size={22}
                    className="text-[#053d27] flex-shrink-0"
                  />

                  <p className="text-gray-700">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default MobileServicesSolutions;
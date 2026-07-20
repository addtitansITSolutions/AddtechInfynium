import { motion } from "framer-motion";
import {
  Search,
  Share2,
  MousePointerClick,
  PenTool,
  BarChart3,
  TrendingUp,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Search,
    title: "Paid Search Advertising",
    description:
      "Capture high-intent customers through targeted search campaigns.",
  },
  {
    icon: Share2,
    title: "Paid Advertising",
    description:
      "Engage the right audience with performance-driven social campaigns.",
  },
  {
    icon: MousePointerClick,
    title: "Search Engine Optimization",
    description:
      "Increase visibility with conversion-driven content and technical SEO.",
  },
  {
    icon: PenTool,
    title: "Conversion Optimization",
    description:
      "Enhance landing pages and user journeys to turn more visitors into customers.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Get clear insights with transparent reporting and actionable data.",
  },
  {
    icon: TrendingUp,
    title: "Campaign Optimization",
    description:
      "Continuously improve performance through testing and strategic budget allocation.",
  },
];

const DigitalSolutions = () => {
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
            What We Do
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-5">
            Complete Digital Marketing
            <br />
            Solutions Under One Roof
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            We combine strategy, creativity, and technology to help businesses
            attract more customers, improve engagement, and achieve measurable
            digital growth.
          </p>

        </motion.div>

        {/* Services Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 hover:border-[#053d27]/30 transition-all"
              >

                <div className="w-14 h-14 rounded-2xl bg-[#053d27]/10 flex items-center justify-center">

                  <Icon
                    size={28}
                    className="text-[#053d27]"
                  />

                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-7 mt-4">
                  {service.description}
                </p>

              </motion.div>

            );

          })}

        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mt-24 bg-[#053d27] rounded-[36px] px-8 lg:px-16 py-14 text-center"
        >

          <h2 className="text-4xl font-bold text-white">
            Ready To Grow Your Business Online?
          </h2>

          <p className="text-green-100 mt-5 max-w-2xl mx-auto text-lg leading-8">
            Let's build a customized digital marketing strategy that helps your
            business attract more customers, generate quality leads, and achieve
            long-term success.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-10 bg-white text-[#053d27] px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            Get Free Consultation
            <ArrowRight size={18} />
          </Link>

        </motion.div>

      </div>

    </section>
  );
};

export default DigitalSolutions;
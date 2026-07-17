import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Briefcase,
  LineChart,
  Users,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Briefcase,
    title: "Affiliate Program Setup",
    description:
      "From strategy to launch, we build high-performing affiliate programs tailored to your business.",
  },
  {
    icon: Users,
    title: "Publisher Management",
    description:
      "We connect your brand with trusted affiliates and influencers that drive quality traffic.",
  },
  {
    icon: LineChart,
    title: "Performance Optimization",
    description:
      "Continuous campaign monitoring, conversion optimization and ROI improvement.",
  },
  {
    icon: Globe,
    title: "Global Scaling",
    description:
      "Expand your affiliate campaigns into new markets with confidence.",
  },
];

const industries = [
  "Finance",
  "Gaming",
  "E-commerce",
  "EdTech",
  "Healthcare",
  "Travel",
];

const AffiliateSolutions = () => {
  return (
    <section className="py-24 bg-[#f8fbfa]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="uppercase tracking-[4px] text-[#053d27] font-semibold">
            Our Expertise
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-5">
            Everything You Need To Build
            <br />
            A Successful Affiliate Program
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            From planning and publisher acquisition to campaign optimization,
            we provide complete affiliate marketing solutions that help your
            business generate sustainable revenue.
          </p>

        </motion.div>

        {/* Services */}

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .1,
                }}
                whileHover={{
                  y: -6,
                }}
                className="bg-white rounded-[28px] p-8 shadow-md border border-gray-100"
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

        {/* Bottom */}

        <div className="grid lg:grid-cols-2 gap-14 mt-20 items-center">

          {/* Image */}

          <motion.img
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            src="/services/affiliate.png"
            alt="Affiliate Marketing"
            className="rounded-[30px] w-full max-h-[420px] object-cover shadow-xl"
          />

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            <h3 className="text-3xl font-bold">
              Why Businesses Partner With Us
            </h3>

            <div className="mt-8 space-y-5">

              {[
                "Dedicated affiliate managers",
                "Transparent reporting & analytics",
                "Performance-driven campaigns",
                "Scalable strategies for every business",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2
                    size={22}
                    className="text-[#053d27]"
                  />

                  <span className="text-gray-700">

                    {item}

                  </span>

                </div>

              ))}

            </div>

            <h4 className="mt-10 text-xl font-semibold">
              Industries We Serve
            </h4>

            <div className="flex flex-wrap gap-3 mt-5">

              {industries.map((industry) => (

                <span
                  key={industry}
                  className="px-5 py-2 rounded-full bg-[#053d27]/10 text-[#053d27] font-medium"
                >
                  {industry}
                </span>

              ))}

            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-10 bg-[#053d27] text-white px-8 py-4 rounded-full hover:scale-105 transition"
            >

              Start Your Affiliate Journey

              <ArrowRight size={18} />

            </Link>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default AffiliateSolutions;
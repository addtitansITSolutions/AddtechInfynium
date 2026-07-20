import { motion } from "framer-motion";
import {
  Users,
  Camera,
  Megaphone,
  BadgeCheck,
  BarChart3,
  Handshake,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Users,
    title: "Creator Discovery",
    description:
      "Find influencers whose audience aligns perfectly with your brand and campaign goals.",
  },
  {
    icon: Camera,
    title: "Content Collaboration",
    description:
      "Coordinate authentic branded content that feels natural and drives engagement.",
  },
  {
    icon: Megaphone,
    title: "Campaign Management",
    description:
      "From planning to execution, we manage every stage of your influencer campaigns.",
  },
  {
    icon: BadgeCheck,
    title: "Brand Partnerships",
    description:
      "Build long-term relationships with trusted creators that strengthen your brand.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Measure reach, engagement, clicks and conversions with transparent reporting.",
  },
  {
    icon: Handshake,
    title: "End-to-End Support",
    description:
      "Dedicated experts guide your campaigns to maximize ROI and business growth.",
  },
];

const InfluencerSolutions = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="uppercase tracking-[4px] text-[#053d27] font-semibold">
            Our Services
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-5">
            Complete Influencer Marketing
            <br />
            Solutions
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            We don’t sell influencer marketing as brand awareness with an appealing case study. Every creator
            partnership is judged on the same standard as every other channel we run
          </p>

        </motion.div>

        {/* Services */}

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
                  y: -10,
                  scale: 1.02,
                }}
                className="group bg-[#f8fbfa] rounded-[32px] p-8 text-center border border-gray-100 hover:border-[#053d27]/20 hover:shadow-xl transition-all"
              >

                <div className="w-20 h-20 mx-auto rounded-full bg-[#053d27]/10 group-hover:bg-[#053d27] transition flex items-center justify-center">

                  <Icon
                    size={34}
                    className="text-[#053d27] group-hover:text-white transition"
                  />

                </div>

                <h3 className="text-2xl font-bold mt-7">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
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
          className="mt-24 rounded-[36px] overflow-hidden bg-gradient-to-r from-[#053d27] to-[#0b6b46]"
        >

          <div className="grid lg:grid-cols-2 items-center">

            <div className="p-10 lg:p-14">

              <span className="uppercase tracking-[4px] text-green-200 text-sm">
                Let's Collaborate
              </span>

              <h2 className="text-4xl font-bold text-white mt-4">
                Launch Your Next
                <br />
                Influencer Campaign
              </h2>

              <p className="text-green-100 mt-6 leading-8">
                Connect with trusted creators, increase brand awareness,
                and achieve measurable campaign success with our
                influencer marketing experts.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-10 bg-white text-[#053d27] px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>

            </div>

            <div className="hidden lg:flex justify-center">

              <img
                src="/influencermarketing/cta.png"
                alt="Influencer Campaign"
                className="w-[420px] h-[420px] object-cover rounded-[32px] shadow-2xl"
              />

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default InfluencerSolutions;
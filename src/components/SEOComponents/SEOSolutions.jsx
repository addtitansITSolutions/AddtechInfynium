import { motion } from "framer-motion";
import {
  Search,
  FileText,
  MapPin,
  Link2,
  BarChart3,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Search,
    title: "Keyword Research",
    description:
      "Identify high-value keywords that bring qualified traffic to your website.",
  },
  {
    icon: Wrench,
    title: "Technical SEO",
    description:
      "Improve website speed, indexing, mobile usability, and technical health.",
  },
  {
    icon: FileText,
    title: "On-Page SEO",
    description:
      "Optimize content, headings, metadata, and internal linking for better rankings.",
  },
  {
    icon: Link2,
    title: "Link Building",
    description:
      "Build authority through high-quality backlinks and trusted references.",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description:
      "Increase visibility for local searches and Google Business Profile rankings.",
  },
  {
    icon: BarChart3,
    title: "SEO Reporting",
    description:
      "Transparent reports with keyword rankings, traffic insights, and performance metrics.",
  },
];

const SEOSolutions = () => {
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
            Our SEO Services
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-5">
            Everything You Need To
            <br />
            Dominate Search Results
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            We provide complete SEO solutions designed to improve visibility,
            increase organic traffic, and generate sustainable business growth.
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
                  y: -8,
                }}
                className="group bg-[#f8fbfa] rounded-3xl p-8 border border-gray-100 hover:border-[#053d27] hover:shadow-xl transition-all"
              >

                <div className="w-14 h-14 rounded-2xl bg-[#053d27]/10 group-hover:bg-[#053d27] transition flex items-center justify-center">

                  <Icon
                    size={28}
                    className="text-[#053d27] group-hover:text-white transition"
                  />

                </div>

                <h3 className="text-2xl font-bold mt-6">
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
          initial={{ opacity: 0, scale: .95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[36px] bg-[#053d27] px-8 lg:px-16 py-16 text-center"
        >

          <h2 className="text-4xl font-bold text-white">
            Ready To Improve Your Google Rankings?
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-green-100">
            Let our SEO experts build a customized strategy that drives more
            organic traffic, better rankings, and long-term business growth.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-10 bg-white text-[#053d27] px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            Request a Free SEO Consultation
            <ArrowRight size={18} />
          </Link>

        </motion.div>

      </div>

    </section>
  );
};

export default SEOSolutions;
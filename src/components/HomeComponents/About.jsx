import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import aboutimg from "../../assets/aboutimg.webp";

const About = () => {
  return (
    <section className="py-24 bg-[#f8fbfa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
          >

            <img
              src={aboutimg}
              alt="About Addtech Infinium"
              className="w-full rounded-3xl"
            />

          </motion.div>

          {/* Right Content */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
          >

            <span className="inline-block bg-[#053d27]/10 text-[#053d27] px-4 py-2 rounded-full text-sm font-semibold mb-5">
              About Addtech Infinium
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Delivering Smart Digital Solutions That Drive Business Growth
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-8">
              Addtech Infinium is a technology partner focused on creating
              scalable digital products, custom software, mobile applications,
              enterprise solutions, cloud platforms, and AI-powered innovations.
            </p>

            <p className="mt-5 text-gray-600 text-lg leading-8">
              Our experienced team combines creativity, engineering excellence,
              and modern technologies to help businesses automate operations,
              improve customer experiences, and accelerate digital
              transformation.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-3xl font-bold text-[#053d27]">100+</h3>
                <p className="text-gray-600 mt-2">
                  Successful Projects
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-3xl font-bold text-[#053d27]">50+</h3>
                <p className="text-gray-600 mt-2">
                  Global Clients
                </p>
              </div>

            </div>

            <button className="mt-10 inline-flex items-center gap-2 bg-[#053d27] text-white px-8 py-4 rounded-full hover:scale-105 transition">

              Learn More

              <ArrowRight size={18} />

            </button>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
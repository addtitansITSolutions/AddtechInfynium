import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "./testimonialsData";

const Testimonials = () => {
  return (
    <section className="py-28 bg-[#f8fbfa]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="uppercase tracking-[4px] text-[#053d27] font-semibold">
            Testimonials
          </span>

          <h2 className="text-5xl font-bold mt-5">
            What Our Clients Say
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-lg">
            We build lasting relationships by delivering reliable solutions
            and measurable business results.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >

              {/* Stars */}

              <div className="flex gap-1 mb-6">

                {[...Array(5)].map((_, i) => (

                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />

                ))}

              </div>

              {/* Review */}

              <p className="text-gray-600 leading-8 italic">
                "{item.review}"
              </p>

              {/* User */}

              <div className="flex items-center gap-4 mt-8">

                <div className="w-14 h-14 rounded-full bg-[#053d27] text-white flex items-center justify-center font-bold text-lg">
                  {item.name.charAt(0)}
                </div>

                <div>

                  <h4 className="font-semibold text-lg">
                    {item.name}
                  </h4>

                  <p className="text-gray-500 text-sm">
                    {item.role} • {item.company}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;
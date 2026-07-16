import { motion } from "framer-motion";
import { Rocket, Users, Briefcase, Award } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: Briefcase,
    number: "150+",
    title: "Projects Delivered",
  },
  {
    id: 2,
    icon: Users,
    number: "80+",
    title: "Happy Clients",
  },
  {
    id: 3,
    icon: Rocket,
    number: "6+",
    title: "Digital Services",
  },
  {
    id: 4,
    icon: Award,
    number: "98%",
    title: "Client Satisfaction",
  },
];

const OurStory = () => {
  return (
    <section className="py-10 bg-[#f8fbfa] overflow-hidden lg:py-28">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            <span className="uppercase tracking-[4px] text-[#053d27] font-semibold">

              Our Story

            </span>

            <h2 className="text-5xl font-bold mt-5 leading-tight">

              Empowering Businesses
              <br />

              Through Innovation.

            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">

              Addtech Infinium was founded with a simple vision —
              helping businesses leverage technology to achieve
              sustainable growth. Over the years, we've partnered
              with startups, enterprises, and growing brands to
              build powerful digital experiences that generate
              real business impact.

            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">

              From digital marketing and affiliate solutions to
              custom software and e-commerce platforms, our team
              combines creativity with technology to deliver
              measurable results for every client.

            </p>

          </motion.div>

          {/* RIGHT */}

          <div className="grid grid-cols-2 gap-4 md:gap-6 items-stretch">

            {stats.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: .5,
                    delay: index * .15,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  className="bg-white rounded-[24px] lg:rounded-[30px] p-5 lg:p-8 shadow-lg border border-gray-100 h-full flex flex-col"
                >

                  <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-[#053d27]/10 flex items-center justify-center">

                    <Icon
                        size={22}
                        className="lg:w-8 lg:h-8 text-[#053d27]"
                    />

                  </div>

                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 lg:mt-8">

                    {item.number}

                  </h3>

                  <p className="text-sm lg:text-base text-gray-600 mt-2 lg:mt-3 leading-6 lg:leading-7">

                    {item.title}

                  </p>

                </motion.div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
};

export default OurStory;
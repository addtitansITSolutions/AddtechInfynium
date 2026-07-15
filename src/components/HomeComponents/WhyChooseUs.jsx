import { useState } from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  ShieldCheck,
  Lightbulb,
  Users,
  TrendingUp,
  Cpu,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const features = [
  {
    icon: Rocket,
    title: "Innovation",
    desc: "We build digital products using the latest technologies.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    desc: "Every solution follows enterprise-level security standards.",
  },
  {
    icon: Cpu,
    title: "AI Powered",
    desc: "Intelligent automation that improves productivity and reduces costs.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    desc: "Experienced designers, developers and marketers working together.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    desc: "Technology that directly contributes to measurable business growth.",
  },
  {
    icon: Lightbulb,
    title: "Creative Thinking",
    desc: "Fresh ideas backed by practical and real-world experience.",
  },
];

const positions = [
  "top-0 left-1/2 -translate-x-1/2",
  "top-24 right-0",
  "bottom-24 right-0",
  "bottom-0 left-1/2 -translate-x-1/2",
  "bottom-24 left-0",
  "top-24 left-0",
];

const WhyChooseUs = () => {
  const [active, setActive] = useState(features[0]);

  return (
    <section className="relative py-28 overflow-hidden bg-white">

      {/* Background */}

      <div className="absolute w-[600px] h-[600px] bg-[#053d27]/5 rounded-full blur-[120px] left-1/2 -translate-x-1/2 top-20"></div>

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-24">

          <span className="uppercase tracking-[4px] text-[#053d27] font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-5xl font-bold mt-5">
            More Than A Service Provider.
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            We combine strategy, technology and creativity to build solutions
            that help businesses scale faster.
          </p>

        </div>

        <div className="relative hidden lg:flex justify-center items-center h-[700px]">

          {/* Center */}

          <motion.div
            animate={{
              rotate: [-3, 3, -3],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
            }}
            className="absolute z-20"
          >

            <div className="w-72 h-72 rounded-full bg-[#053d27] text-white flex flex-col justify-center items-center shadow-2xl p-10 text-center">

              <h3 className="text-3xl font-bold">
                {active.title}
              </h3>

              <p className="mt-5 leading-7 text-white/90">
                {active.desc}
              </p>

            </div>

          </motion.div>

          {/* Orbit Cards */}

          {features.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                onMouseEnter={() => setActive(item)}
                animate={{
                  y: [-8, 8, -8],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4 + index,
                }}
                className={`absolute ${positions[index]} cursor-pointer`}
              >

                <div className="bg-white rounded-3xl shadow-xl p-6 w-64 border border-gray-100 hover:scale-105 hover:border-[#053d27] transition duration-300">

                  <div className="w-14 h-14 rounded-2xl bg-[#053d27]/10 flex items-center justify-center">

                    <Icon
                      className="text-[#053d27]"
                      size={28}
                    />

                  </div>

                  <h4 className="mt-5 text-xl font-semibold">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-gray-600 leading-7 text-sm">
                    {item.desc}
                  </p>

                </div>

              </motion.div>

            );

          })}

        </div>

        {/* Mobile */}

        <div className="lg:hidden">
            <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                spaceBetween={20}
                pagination={{ clickable: true }}
                autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                }}
                breakpoints={{
                640: {
                    slidesPerView: 1.2,
                },
                768: {
                    slidesPerView: 1.5,
                },
                }}
                className="pb-12 whyChooseSwiper"
            >

                {features.map((item) => {

                const Icon = item.icon;

                return (

                    <SwiperSlide key={item.title}>

                    <motion.div
                        initial={{ opacity: 0, scale: .9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[30px] shadow-xl border border-green-600 p-8 h-full"
                    >

                        <div className="w-16 h-16 rounded-2xl bg-[#053d27]/10 flex items-center justify-center">

                        <Icon
                            size={30}
                            className="text-[#053d27]"
                        />

                        </div>

                        <h3 className="mt-6 text-2xl font-bold">
                        {item.title}
                        </h3>

                        <p className="mt-4 text-gray-600 leading-8">
                        {item.desc}
                        </p>

                    </motion.div>

                    </SwiperSlide>

                );

                })}

            </Swiper>
        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;
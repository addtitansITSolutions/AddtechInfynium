import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { trustFeatures } from "./whyTrustData";



const WhyTrustUs = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-28 bg-[#f8fbfa] overflow-visible">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="uppercase tracking-[4px] text-[#053d27] font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-5 leading-tight">
            Why Businesses Trust Addtech Infinium
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            We combine creativity, strategy and technology to build
            digital experiences that help businesses grow confidently.
          </p>
        </motion.div>

        {/* Slider */}

        <div className="relative mt-16 py-8 px-12 lg:px-20 overflow-visible">

          {/* Left Arrow */}

          <button
            ref={prevRef}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30
            w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14
            rounded-full bg-white shadow-lg border border-gray-200
            flex items-center justify-center
            hover:bg-[#053d27] hover:text-white
            transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Arrow */}

          <button
            ref={nextRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30
            w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14
            rounded-full bg-white shadow-lg border border-gray-200
            flex items-center justify-center
            hover:bg-[#053d27] hover:text-white
            transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>

          <Swiper
           className="whyTrustSwiper"
            modules={[Navigation]}
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
            0: {
                slidesPerView: 1.4,
                spaceBetween: 12,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 18,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
            }}
          >
            {trustFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <SwiperSlide
                  key={feature.id}
                   className="!h-auto"
                >
                    <div className="h-full">
                        <motion.div
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                            duration: 0.45,
                            delay: index * 0.08,
                            }}
                            whileHover={{
                                scale: 1.03,
                            }}
                            className="
                                h-full
                                flex
                                flex-col
                                rounded-[28px]
                                bg-white
                                border
                                border-gray-100
                                shadow-md
                                hover:shadow-xl
                                p-6
                                transition-all
                                duration-300
                            "
                        >
                            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-[#053d27]/10 flex  items-center justify-center">

                            <Icon
                                className="text-[#053d27]"
                                size={24}
                            />

                            </div>

                            <div className="flex-1 flex flex-col">
                                <h3 className="mt-5 text-lg lg:text-xl font-bold">
                                {feature.title}
                                </h3>
                                <p className="mt-3 text-sm lg:text-base text-gray-600 leading-7 flex-1">
                                {feature.description}
                                </p>
                            </div>

                        </motion.div>
                    </div>
                  
                </SwiperSlide>
              );
            })}
          </Swiper>

        </div>

      </div>

    </section>
  );
};

export default WhyTrustUs;
import { services } from "./servicesData";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import react from "react";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

const Services = () => {
  const [active, setActive] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.dataset.index));
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#053D27] py-28">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">

        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT */}

          <div className="lg:sticky lg:top-32 h-fit">

            <span className="text-[#fff] font-semibold uppercase tracking-[4px]">
              Our Portfolio
            </span>

            <h2 className="text-5xl font-bold mt-5 leading-tight text-[#fff]">
             One Performance Engine, Four Channels
            </h2>

            <p className="text-gray-400 mt-8 text-lg leading-8">
              Our goal is to use digital media to attract customers to your business. We
              provide businesses with exceptional digital strategies to be a standout.
              We offer all the tools you require to expand your company and dominate
              the internet market. We are a one-stop online store for your company.
            </p>

            <p className="text-gray-200 mt-8 text-lg leading-8">
              Every solution is tailored for measurable growth.
              Scroll to discover our expertise.
            </p>

            <button className="mt-10 flex items-center gap-2 bg-[#fff] text-[#053D27] px-8 py-4 rounded-full hover:scale-105 transition" onClick={() => navigate('/contact')}>
              Let's Talk
              <ArrowRight size={18} />
            </button>

          </div>

          {/* RIGHT */}

          

          {/* Desktop */}
          <div className="hidden lg:block">
            <div className="space-y-24">

            {services.map((service, index) => (

              <motion.div
                key={service.id}
                data-index={index}
                className="service-card cursor-pointer"
                animate={{
                  scale: active === index ? 1 : .88,
                  opacity: active === index ? 1 : .35,
                }}
                transition={{
                  duration: .45,
                }}
              >

                <div className="bg-white rounded-[35px] shadow-xl overflow-hidden">

                  <div className="grid lg:grid-cols-2">

                    <div className="p-10 flex flex-col justify-center">

                      <span className="text-[#053d27] font-semibold">
                        0{service.id}
                      </span>

                      <h3 className="text-4xl font-bold mt-3">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 mt-6 leading-8">
                        {service.description}
                      </p>

                      <button className="mt-8 flex items-center gap-2 text-[#053d27] font-semibold" onClick={() => navigate(service.navigate)}>
                        Learn More
                        <ArrowRight size={18}/>
                      </button>

                    </div>

                    <div className="bg-[#edf7f2] flex items-center justify-center">

                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-72 object-cover"
                      />

                    </div>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>
          </div>

          {/* Mobile */}
          <div className="lg:hidden w-full overflow-hidden">
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              pagination={{ clickable: true }}
              className="servicesSwiper"
            >
                {services.map((service) => (
                    <SwiperSlide key={service.id}>
                      <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">

                        <div className="grid grid-cols-2 min-h-[220px]">

                          {/* Left Content */}

                          <div className="p-5 flex flex-col justify-center">

                            <span className="text-[#053d27] text-xs font-semibold">
                              0{service.id}
                            </span>

                            <h3 className="text-lg font-bold mt-2 leading-snug">
                              {service.title}
                            </h3>

                            <p className="text-gray-600 text-sm leading-6 mt-3 line-clamp-3">
                              {service.description}
                            </p>

                            <button className="mt-5 flex items-center gap-2 text-[#053d27] font-semibold text-sm" onClick={() => navigate(service.navigate)}>
                              Learn More
                              <ArrowRight size={16} />
                            </button>

                          </div>

                          {/* Right Image */}

                          <div className="bg-[#edf7f2] flex items-center justify-center p-4">

                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-28 sm:w-32 object-contain"
                            />

                          </div>

                        </div>

                      </div>
                    </SwiperSlide>
                ))}

            </Swiper>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Services;
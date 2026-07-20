import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { processSteps } from "./processData";
import { ArrowRight, Check } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const items = document.querySelectorAll(".process-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveStep(Number(entry.target.dataset.index));
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-16 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        
        {/* FIX: Default grid-cols-1 for mobile stack, switch to lg:grid-cols-2 for desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* TOP SIDE: Heading Area (only on MOBILE & TABLET }) */}
          <div className="lg:sticky lg:hidden lg:top-32 h-fit">
            <span className="uppercase tracking-[4px] font-semibold text-[#053d27] text-sm lg:text-base">
              Our Process
            </span>

            <h2 className="mt-4 lg:mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              From Idea To Launch,
              <br />
              We Handle Everything.
            </h2>

            <p className="mt-6 lg:mt-8 text-gray-600 leading-relaxed lg:leading-8 text-base lg:text-lg">
              Every successful digital product follows a clear roadmap. We
              combine research, planning, engineering and continuous support to
              transform your ideas into scalable business solutions.
            </p>

            <button className="mt-8 lg:mt-10 bg-[#053d27] text-white rounded-full px-8 py-4 flex items-center gap-3 hover:scale-105 transition w-full sm:w-auto justify-center">
              Start Your Project
              <ArrowRight size={18} />
            </button>

            {/* Navigation Progress Indicators (Hidden completely on mobile/tablets) */}
            <div className="mt-16 hidden lg:block">
              <div className="flex justify-between mb-3">
                {processSteps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 font-medium
                    ${
                      index <= activeStep
                        ? "bg-[#053d27] text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step.number}
                  </div>
                ))}
              </div>

              <div className="relative h-2 rounded-full bg-gray-200 overflow-hidden">
                <motion.div
                  animate={{
                    width: `${((activeStep + 1) / processSteps.length) * 100}%`,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="absolute left-0 top-0 h-full bg-[#053d27]"
                />
              </div>
            </div>
          </div>

          {/* LEFT SIDE: Dynamic Switching Content Panels */}
          <div>
            
            {/* Desktop View Cards Stack */}
            <div className="hidden lg:block space-y-24">
              {processSteps.map((step, index) => {
                return (
                  <motion.div
                    key={step.id}
                    data-index={index}
                    className="process-item cursor-pointer relative"
                    animate={{
                      scale: activeStep === index ? 1 : 0.88,
                      opacity: activeStep === index ? 1 : 0.35,
                    }}
                    transition={{
                      duration: 0.45,
                    }}
                  >
                    {/* Background Tracking Number */}
                    <motion.span
                      animate={{
                        opacity: activeStep === index ? 0.05 : 0,
                      }}
                      className="absolute -top-14 left-4 text-[130px] font-black text-[#053d27] pointer-events-none select-none"
                    >
                      {step.number}
                    </motion.span>

                    <div className="bg-white rounded-[35px] shadow-xl overflow-hidden border border-gray-100">
                      <div className="grid grid-cols-2">
                        
                        {/* Card Info Column */}
                        <div className="p-10 flex flex-col justify-between">
                          <div>
                            <span className="uppercase tracking-[3px] text-xs text-[#053d27] font-semibold">
                              {step.subtitle}
                            </span>

                            <h3 className="text-3xl font-bold mt-2">
                              {step.title}
                            </h3>

                            <AnimatePresence mode="wait">
                              {activeStep === index && (
                                <motion.div
                                  key={step.id}
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <p className="mt-4 text-gray-600 text-sm leading-6">
                                    {step.description}
                                  </p>

                                  <div className="mt-5 space-y-2.5">
                                    {step.points.map((point) => (
                                      <div key={point} className="flex items-center gap-2">
                                        <Check size={14} className="text-[#053d27]" />
                                        <span className="text-gray-700 text-sm">{point}</span>
                                      </div>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          {/* <button className="mt-6 flex items-center gap-2 text-[#053d27] font-semibold text-sm">
                            Learn More
                            <ArrowRight size={18} />
                          </button> */}
                        </div>

                        {/* Card Graphic Column */}
                        <div className="bg-[#edf7f2] flex items-center justify-center p-0">
                          <img
                            src={step.image}
                            alt={step.title}
                            className="w-full min-h-full object-cover"
                          />
                        </div>

                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile View Swipe Slider */}
            <div className="lg:hidden w-full overflow-hidden mt-4">
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
                className="processSwiper !pb-12"
              >
                {processSteps.map((step) => (
                  <SwiperSlide key={step.id}>
                    <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                      
                      {/* Responsive card inner container: changes to 1 column on extra small screens */}
                      <div className="grid grid-cols-1 xs:grid-cols-2 min-h-[220px]">
                        
                        {/* Content side */}
                        <div className="p-6 flex flex-col justify-center order-2 xs:order-1">
                          <span className="text-[#053d27] text-xs font-semibold uppercase tracking-wider">
                            {step.subtitle}
                          </span>

                          <h3 className="text-xl font-bold mt-2 leading-snug">
                            {step.title}
                          </h3>

                          <p className="text-gray-600 text-sm leading-6 mt-3 line-clamp-3">
                            {step.description}
                          </p>

                          {/* <button className="mt-5 flex items-center gap-2 text-[#053d27] font-semibold text-sm">
                            Learn More
                            <ArrowRight size={16} />
                          </button> */}
                        </div>

                        {/* Visual graphic side */}
                        <div className="bg-[#edf7f2] flex items-center justify-center order-1 xs:order-2 min-h-[160px] xs:min-h-auto">
                          <img
                            src={step.phoneimage}
                            alt={step.title}
                            className="w-full sm:w-full object-cover"
                          />
                        </div>

                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

          </div>

          {/* RIGHT SIDE: Heading Area (Only on Desktop) */}
          <div className="hidden lg:block lg:sticky lg:top-32 h-fit">
            <span className="uppercase tracking-[4px] font-semibold text-[#053d27] text-sm lg:text-base">
              Our Process
            </span>

            <h2 className="mt-4 lg:mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              From Idea To Launch,
              <br />
              We Handle Everything.
            </h2>

            <p className="mt-6 lg:mt-8 text-gray-600 leading-relaxed lg:leading-8 text-base lg:text-lg">
              Every successful digital product follows a clear roadmap. We
              combine research, planning, engineering and continuous support to
              transform your ideas into scalable business solutions.
            </p>

            <button className="mt-8 lg:mt-10 bg-[#053d27] text-white rounded-full px-8 py-4 flex items-center gap-3 hover:scale-105 transition w-full sm:w-auto justify-center cursor-pointer" onClick={() => navigate('/contact')}>
              Start Your Project
              <ArrowRight size={18} />
            </button>

            {/* Navigation Progress Indicators (Hidden completely on mobile/tablets) */}
            <div className="mt-16 hidden lg:block">
              <div className="flex justify-between mb-3">
                {processSteps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 font-medium
                    ${
                      index <= activeStep
                        ? "bg-[#053d27] text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step.number}
                  </div>
                ))}
              </div>

              <div className="relative h-2 rounded-full bg-gray-200 overflow-hidden">
                <motion.div
                  animate={{
                    width: `${((activeStep + 1) / processSteps.length) * 100}%`,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="absolute left-0 top-0 h-full bg-[#053d27]"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;
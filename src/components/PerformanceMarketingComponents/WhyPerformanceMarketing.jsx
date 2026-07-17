import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Pay only for measurable business results",
  "Lower customer acquisition costs",
  "Advanced audience targeting",
  "Real-time performance tracking",
  "Continuous A/B testing",
  "Higher conversion rates",
];

const WhyPerformanceMarketing = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.img
            initial={{opacity:0,x:-40}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            transition={{duration:.6}}
            src="/services/performance-about.jpg"
            alt=""
            className="rounded-[30px] h-[550px] w-full object-cover shadow-xl"
          />

          <motion.div
            initial={{opacity:0,x:40}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            transition={{duration:.6}}
          >

            <span className="uppercase tracking-[4px] text-[#053d27] font-semibold">
              Why Performance Marketing
            </span>

            <h2 className="text-5xl font-bold mt-5">
              Every Click Should
              Generate Business Value
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Performance marketing helps businesses scale efficiently by
              focusing on measurable outcomes. Every campaign is monitored,
              optimized and refined to maximize return on investment.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              {benefits.map(item=>(

                <div
                  key={item}
                  className="flex gap-3 p-5 rounded-2xl bg-[#f8fbfa]"
                >

                  <CheckCircle2
                    className="text-[#053d27] mt-1"
                    size={22}
                  />

                  <span className="leading-7 text-gray-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default WhyPerformanceMarketing;
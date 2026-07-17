import { motion } from "framer-motion";
import {
  Search,
  Wrench,
  FileText,
  Link2,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "SEO Audit",
    description:
      "We analyze your website to identify technical issues, keyword opportunities, and competitor insights.",
  },
  {
    icon: Wrench,
    title: "Technical Optimization",
    description:
      "Improve site speed, crawlability, mobile responsiveness, and website structure for better rankings.",
  },
  {
    icon: FileText,
    title: "Content Strategy",
    description:
      "Optimize existing pages and create high-quality content that aligns with search intent.",
  },
  {
    icon: Link2,
    title: "Authority Building",
    description:
      "Strengthen your website through quality backlinks and trusted online mentions.",
  },
  {
    icon: TrendingUp,
    title: "Growth & Reporting",
    description:
      "Track keyword rankings, traffic, and conversions with transparent monthly reports.",
  },
];

const WhySEO = () => {
  return (
    <section className="py-24 bg-[#f8fbfa]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="uppercase tracking-[4px] text-[#053d27] font-semibold">
            Our SEO Process
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-5">
            A Proven Strategy For
            <br />
            Long-Term Organic Growth
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            We don't believe in shortcuts. Our SEO approach focuses on
            sustainable improvements that increase visibility, attract the
            right audience, and deliver lasting business results.
          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative mt-20">

          {/* Vertical Line */}

          <div className="hidden md:block absolute left-7 top-0 bottom-0 w-1 bg-[#053d27]/15 rounded-full"></div>

          <div className="space-y-10">

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (

                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: .5,
                    delay: index * .1,
                  }}
                  className="flex gap-6 items-start"
                >

                  {/* Icon */}

                  <div className="relative z-10 w-14 h-14 rounded-full bg-[#053d27] flex items-center justify-center flex-shrink-0">

                    <Icon
                      size={24}
                      className="text-white"
                    />

                  </div>

                  {/* Card */}

                  <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 flex-1">

                    <h3 className="text-2xl font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-gray-600 leading-7">
                      {step.description}
                    </p>

                  </div>

                </motion.div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
};

export default WhySEO;
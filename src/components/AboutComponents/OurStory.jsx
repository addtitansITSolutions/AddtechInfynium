import { motion } from "framer-motion";
import { Rocket, Users, Briefcase, Award } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: Briefcase,
    number: "01",
    title: "Strategy before Execution",
    description:
      "Every campaign begins with a clear roadmap covering your business, audience, and objectives.",
  },
  {
    id: 2,
    icon: Rocket,
    number: "02",
    title: "Integrated Operation Structure",
    description:
      "Affiliate Marketing, Digital Marketing, Influencer Marketing, and e-Commerce are managed as one integrated growth system.",
  },
  {
    id: 3,
    icon: Users,
    number: "03",
    title: "Partnership Beyond Campaigns",
    description:
      "We operate as an extension of your team with expertise, transparency, and continuous optimization for sustainable growth.",
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
  What Makes Us Different
            </span>

            <h2 className="text-5xl font-bold mt-5 leading-tight">
              Strategy That Drives
              <br />
              Sustainable Growth.
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              At Addtech Infinium, we believe great marketing starts with
              strategy—not execution alone. Every campaign is built around
              your business goals, audience, and measurable outcomes to
              create long-term value.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              By integrating Affiliate Marketing, Digital Marketing,
              Influencer Marketing, and e-Commerce into one connected
              growth system, we become an extension of your team, focused
              on transparency, optimization, and measurable business
              results.
            </p>

          </motion.div>

          {/* RIGHT */}

          <div className="flex flex-wrap justify-center gap-6">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  className="bg-white rounded-[30px] p-6 shadow-lg border border-gray-100
                            w-[calc(100%-12px)] md:w-[calc(50%-12px)] min-w-[250px] md:max-w-[290px]
                            min-h-[320px] flex flex-col"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#053d27]/10 flex items-center justify-center">
                    <Icon size={30} className="text-[#053d27]" />
                  </div>

                  <h3 className="text-2xl font-bold mt-8">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-5 leading-7 flex-1">
                    {item.description}
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